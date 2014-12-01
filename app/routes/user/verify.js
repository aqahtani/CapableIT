var keystone = require('keystone'),
    session = keystone.session,
    User = keystone.list('User'),
    Organization = keystone.list('Organization'),
    Employee = keystone.list('Employee'),
    VerificationToken = keystone.list('VerificationToken');

exports = module.exports = function (req, res) {
    var view = new keystone.View(req, res),
        locals = res.locals;
    
    // Set locals
    locals.section = 'join';
    //locals.formData = req.body || {};
    //locals.validationErrors = {};
    //locals.step = '1'; // default step: signup user
    
    locals.filters = {
        token: req.params.token
    };
    
    locals.data = {
        verified : false,
        orgLinked: false,
        empLinked: false,
        dump: {}
    }
    
    view.on('get', function (next) {
        var tkn = locals.filters.token;
        var async = require("async");
        
        // finds the given token and returns user attached
        var findToken = function (callback) {
            var q = VerificationToken.model.findOne()
                    .where({ 'token': tkn })
                    .populate('user');
            
            q.exec(function (err, result) {
                if (err) {
                    // something wrong happened
                    return callback(err)
                }
                
                if (!result) {
                    // cannot find token 
                    var e = new Error("Cannot find token, might have expired!");
                    return callback(e);
                }
                
                // token is found, so return the user
                callback(null, result.user);
            });
        }
        
        // sets isVerified for the user upon successful verification
        var verifyUser = function (callback, results) {
            var user = results.user;
            if (!user) {
                // user is not found! 
                var e = new Error("No user account to verify!");
                return callback(e);
            }
            // it is safe to update user
            User.model.update({ _id : user.id }, { isVerified : true }).exec(function (err, doc) {
                if (err) return callback(err);
                callback(null, true);
            });
        }
        
        // links user to his organization if a matching one is found
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
        
        // links user to his employee profile if a matching one is found
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
            user: findToken, 
            verified: ['user', verifyUser], 
            orgLinked: ['verified', linkOrg],
            empLinked: ['orgLinked', linkEmp]
        }, function (err, results) {
            // All tasks are done now and you have results as an object 
            if (err) {
                req.flash('error', err);
            }
            else {
                // successful: set locals and do next()
                locals.data.verified = results.verified;
                locals.data.orgLinked = results.orgLinked;
                locals.data.empLinked = results.empLinked;
                //locals.data.dump = results;
            }
            next();
        });
    });
    
    view.render('user/verify');
}