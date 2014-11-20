var keystone = require('keystone'),
    session = keystone.session,
    User = keystone.list('User'),
    Organization = keystone.list('Organization'),
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
        linked: false,
        dump: {}
    }
    
    view.on('get', function (next) {
        var tkn = locals.filters.token;
        var async = require("async");
        
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
        
        var linkUser = function (callback, results) {
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
        
        async.auto({
            user: findToken, 
            verified: ['user', verifyUser], 
            linked: ['verified', linkUser]
        }, function (err, results) {
            // All tasks are done now and you have results as an object 
            if (err) {
                req.flash('error', err);
            }
            else {
                // successful: set locals and do next()
                locals.data.verified = results.verified;
                locals.data.linked = results.linked;
                locals.data.dump = results;
            }
            next();
        });
    });
    
    view.render('user/verify');
}