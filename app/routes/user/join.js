var keystone = require('keystone'),
    User = keystone.list('User'),
    async = require('async'),
    logger = require('../../utils/logger'),
    verification = require('./verification'); // helper async functions 

exports = module.exports = function (req, res) {
    var view = new keystone.View(req, res),
        locals = res.locals;
    
    // Set locals
    locals.section = 'user';
    locals.formData = req.body || {};
    locals.validationErrors = {};
    locals.step = '1'; // default step: signup user
    
    // Step 1: create a new user
    view.on('post', { action: 'join' }, function (next) {
        // async: create a new user
        var createUser = function (callback) {
            var newUser = new User.model(),
                updater = newUser.getUpdateHandler(req);
            
            updater.process(req.body, {
                flashErrors: true,
                fields: 'name, email, password',
                errorMessage: 'There was a problem with your registration:'
            }, function (err, user) {
                if (err) {
                    locals.validationErrors = err.errors;
                    callback(err, null);
                } else {
                    req.flash('success', "Congrats, you're registered.");
                    callback(null, user);
                }
            });
        };
        
        // other async functions come from ./verification.js

        // call the create functions 
        async.auto({
            user: createUser, 
            token: ['user', verification.createToken],
            email: ['user', 'token', verification.sendVerificationEmail]
        }, 
        function (err, results) {
            // All tasks are done now and you have results as an object 
            if (err) {
                locals.step = '1';
                logger.error('[join] Error in user registration', logger.details({ 'Error': err }));
                return next();
            };
            
            // all is well, move to step 2
            logger.info('[join] New user joined', logger.details({ 'User': results.user }));
            locals.step = '2';
            return next();
        });
        
    });
    
    view.render('user/join');
};