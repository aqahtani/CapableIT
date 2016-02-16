var keystone = require('keystone'),
    User = keystone.list('User');

exports = module.exports = function (req, res) {
    
    var view = new keystone.View(req, res),
        locals = res.locals;
    
    view.on('post', { action: 'send-password' }, function (next) {
        
        User.model.findOne().where('email', req.body.email).exec(function (err, user) {
            if (err) return next(err);
            
            if (!user) {
                req.flash('error', "Sorry, we don't recognise that email address.");
                return next();
            }
            
            user.resetPassword(function (err) {
                if (err) {
                    req.flash('error', "Sorry, we cannot send a reset password email.");
                    return next();
                }
                req.flash('success', 'We have emailed you a link to reset your password. Please follow the instructions in your email.');
                res.redirect('/login');
            });
        });
		
    });
    
    view.render('user/forgot-password');
	
}