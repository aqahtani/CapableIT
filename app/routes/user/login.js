var keystone = require('keystone'),
    session = keystone.session,
    User = keystone.list('User'),
    _ = require('underscore'),
    async = require('async'),
    logger = require("../../utils/logger");

exports = module.exports = function (req, res) {
    var view = new keystone.View(req, res),
        locals = res.locals,
        t = req.t;
    
    // Set locals
    locals.section = 'user';
    locals.formData = req.body || {};
    locals.validationErrors = {};
    
    view.on('post', { action: 'login' }, function (next) {

        if (!req.body.email || !req.body.password) {
            req.flash('error', t('flash.error.login'));
            return next();
        }
        
        // get the redirect url, or set it to /
        locals.returnTo = req.session.returnTo ? req.session.returnTo : locals.home;
        delete req.session.returnTo; // clean up the session
        
        // prepare callbacks for success and failure
        var onFail = function () {
            logger.warn('[login] Failed sign in attempt', logger.details({ 'Request Body': req.body }));
            req.flash('error', t('flash.error.login'));
            next();
        };

        var onSuccess = function (user) {
            locals.user = user;
                        
            // find the role names of the user
            keystone.list('Role').model.find()
            .where('_id').in(user.roles)
            .exec(function (err, roles) {
                if (!err) req.session.roleNames = _.pluck(roles, 'name');
                
                // welcome the user
                logger.info('[login] User signed in', logger.details({ 'User': user }));
                req.flash('success', t('msg.welcome') + ' ' + user.name.first);
                
                // alert the user if he hasn't verified his account yet!
                if (!user.isVerified) {
                    req.flash('warning', t('msg.email_not_verified'));
                };
                // redirect to the original requested page
                return res.redirect(locals.returnTo);
            });
        };
        
        // sign the user in using lib from keystone
        session.signin(req.body, req, res, onSuccess, onFail);
    });
 
    view.render('user/login');
}