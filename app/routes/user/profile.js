var keystone = require('keystone'),
    _ = require('underscore'),
    util = require('util'),
    User = keystone.list('User'),
    UserAuthorization = keystone.list('UserAuthorization');

exports = module.exports = function (req, res) {
    
    var view = new keystone.View(req, res),
        locals = res.locals,
        t = req.t;
    
    // Set locals
    locals.section = 'user';
    locals.filters = {
        user: req.user
    };

    // 1. query current user
    view.query('userProfile', User.model.findById(locals.filters.user)
        .populate('organization employee roles')
    );
    
    // 2. query user authorizations
    view.query('userAuthorizations', UserAuthorization.model.find()
        .where('user', locals.filters.user)
        .populate('permissions')
    );
    
    // Change password
    view.on('post', { action: 'change-password' }, function (next) {
        
        if (!req.body.password || !req.body.password_confirm) {
            req.flash('error', t('flash.error.required'));
            return next();
        }
        
        req.user.getUpdateHandler(req).process(req.body, {
            fields: 'password',
            flashErrors: true,
            errorMessage: t('flash.error.update')
        }, function (err) {
            if (err) return next();
            // all is well
            req.flash('success', t('flash.success.update'));
            return next();
        });
    });
    
    // Render the view
    view.render('user/profile');
};
