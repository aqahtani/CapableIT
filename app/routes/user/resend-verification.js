var keystone = require('keystone'),
    User = keystone.list('User'),
    async = require('async'),
    logger = require('../../utils/logger'); 

exports = module.exports = function (req, res) {
    var view = new keystone.View(req, res),
        locals = res.locals,
        t = req.t;
    
    // Set locals
    locals.section = 'user';
        
    // resend verificatio token
    view.on('init', function (next) {
        
        // async: create a new user
        var getUser = function (callback) {
            var user = locals.user;
            User.model.findById(user.id).exec(callback);
        };

        var resendVerification = function (callback, results) {
            var user = results.user;
            user.verifyEmail(callback);
        };

        // call the create functions 
        async.auto({
            user: getUser, 
            resend: ['user', resendVerification]
        }, 
        function (err, results) {
            // All tasks are done now and you have results as an object 
            if (err) {
                logger.warn('[resend-verification] Error in sending verification email', logger.details({ 'Error': err }));
                req.flash('error', t('flash.error.verify_email'));
                return res.redirect('/profile');
            };
            // all is well
            logger.info('[resend-verification] Verification email sent', logger.details({ 'User': results.user }));
            req.flash('success', t('flash.success.verify_email'));
            return res.redirect('/profile');
        });
        
    });
    
    // Render the view
    view.render('home');
};