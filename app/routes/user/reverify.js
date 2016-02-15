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
        
    // resend verificatio token
    view.on('init', function (next) {
        
        // async: create a new user
        var getUser = function (callback) {
            var user = locals.user;
            User.model.findById(user.id).exec(callback);
        };

        // other async functions come from ./verification.js

        // call the create functions 
        async.auto({
            user: getUser, 
            token: ['user', verification.createToken],
            email: ['user', 'token', verification.sendVerificationEmail]
        }, 
        function (err, results) {
            // All tasks are done now and you have results as an object 
            if (err) {
                logger.error('[reverify] Error in sending verification email', logger.details({ 'Error': err }));
                req.flash('error', 'Cannot send verification email!');
                return next();
            };
            // all is well
            logger.info('[reverify] Verification email sent', logger.details({ 'User': results.user }));
            req.flash('success', 'Verification email sent, please check your email.');
            return next();
        });
        
    });
    
    view.render('home');
};