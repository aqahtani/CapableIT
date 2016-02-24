var keystone = require('keystone'),
    User = keystone.list('User');

exports = module.exports = function (req, res) {
    
    var view = new keystone.View(req, res),
        locals = res.locals,
        t = req.t;
    
    view.on('post', { action: 'send-password' }, function (next) {
        
        User.model.findOne().where('email', req.body.email).exec(function (err, user) {
            if (err) return next(err);
            
            if (!user) {
                req.flash('error', t('flash.error.email_invalid'));
                return next();
            }
            
            user.resetPassword(function (err) {
                if (err) {
                    req.flash('error', t('flash.error.reset_email'));
                    return next();
                }
                req.flash('success', t('flash.success.reset_email'));
                res.redirect('/login');
            });
        });
		
    });
    
    view.render('user/forgot-password');
	
}