var keystone = require('keystone'),
    User = keystone.list('User'),
    Organization = keystone.list('Organization'),
    Employee = keystone.list('Employee'),
    async = require("async"),
    logger = require("../../utils/logger");

exports = module.exports = function (req, res) {
    var view = new keystone.View(req, res),
        locals = res.locals,
        t = req.t;
    
    // Set locals
    locals.section = 'user';
    
    locals.filters = {
        token: req.params.token
    };
    
    locals.data = {
        verified : false,
        orgLinked: false,
        empLinked: false
    }
    
    view.on('init', function (next) {
        
        // async: finds user with verificatio key and sets isVerified
        var verifyUser = function (callback) {
            var key = req.params.key;
            
            User.model.findOne()
            .where('emailVerificationKey', key)
            .exec(function (err, user) {
                if (err) return callback(err);
                if (!user) {
                    // user is not found! 
                    //var e = new Error(t('flash.error.key_invalid'));
                    return callback(t('flash.error.key_invalid'));
                }
                // key is valid, and user found
                user.isVerified = true;
                user.emailVerificationKey = ''; // reset verification 
                user.save(function (err) {
                    if (err) return callback(err);
                    // else, saved successfully
                    callback(null, user);
                });
                
            });
        };
        
        // async: links user to his organization if a matching one is found
        var linkOrg = function (callback, results) {
            // get the domain part from the email
            var userId = results.user.id;
            var emailDomain = results.user.email.split('@')[1];
            
            var q = Organization.model.findOne()
                    .where({ 'url': emailDomain });
            
            q.exec(function (err, result) {
                if (err) return callback(err);
                if (!result) return callback(null, false);
                
                User.model.update({ '_id' : userId }, { 'organization' : result.id }).exec(function (err, doc) {
                    if (err) return callback(err);
                    callback(null, true);
                });
            });
        }
        
        // async: links user to his employee profile if a matching one is found
        var linkEmp = function (callback, results) {
            // get user's email
            var userId = results.user.id;
            var userEmail = results.user.email;
            
            var q = Employee.model.findOne()
                    .where({ 'email': userEmail });
            
            q.exec(function (err, result) {
                if (err) return callback(err);
                if (!result) return callback(null, false);
                
                // ************************************************************
                // this update logic doesn't trigger middleware pre/post hooks!
                // avoid it as much as you can
                //User.model.update({ '_id' : userId }, { 'employee' : result.id }).exec(function (err, doc) {
                //    if (err) return callback(err);
                //    callback(null, true);
                //});
                // ************************************************************
                
                // the following update logic respects pre/post mongo middleware
                User.model.findOne({ '_id' : userId }, function (err, user) {
                    if (err) return callback(err);

                    user.employee = result.id;
                    user.save(function (err) {
                        if (err) return callback(err);
                        callback(null, true);
                    });
                });
            });
        }
        
        async.auto({
            user: verifyUser, 
            orgLinked: ['user', linkOrg],
            empLinked: ['user', 'orgLinked', linkEmp]
        }, function (err, results) {
            // All tasks are done now and you have results as an object 
            if (err) {
                logger.warn('[verify-email] User cannot verify email', logger.details({ 'Error': err }));
                req.flash('error', err);
                return next();
            };
            
            // successful: log and set locals
            logger.info('[verify-email] User email verified', logger.details({ 'User': results.user }));
            req.flash('success', t('flash.success.verified'));
            locals.data.user = results.user;
            locals.data.orgLinked = results.orgLinked;
            locals.data.empLinked = results.empLinked;
            return next();
        });
    });
    
    view.render('user/verify-email');
}