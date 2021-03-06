﻿var keystone = require('keystone'),
    User = keystone.list('User');

exports = module.exports = function (req, res) {
    
    var view = new keystone.View(req, res),
        locals = res.locals,
        t = req.t;
    
    locals.title = 'Reset Password';
    
    view.on('init', function (next) {
        
        User.model.findOne().where('resetPasswordKey', req.params.key).exec(function (err, user) {
            if (err) return next(err);
            if (!user) {
                req.flash('error', t('flash.error.key_invalid'));
                return res.redirect('/forgot-password');
            }
            locals.found = user;
            next();
        });
		
    });
    
    view.on('post', { action: 'reset-password' }, function (next) {
        
        if (req.body.password != req.body.password_confirm) {
            req.flash('error', t('flash.error.password_match'));
            return next();
        }
        
        locals.found.password = req.body.password;
        locals.found.resetPasswordKey = '';
        locals.found.save(function (err) {
            if (err) return next(err);
            req.flash('success', t('flash.success.update'));
            res.redirect('/login');
        });
		
    });
    
    view.render('user/reset-password');
	
};