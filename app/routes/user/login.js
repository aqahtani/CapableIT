var keystone = require('keystone'),
    session = keystone.session,
    User = keystone.list('User');

exports = module.exports = function (req, res) {
    var view = new keystone.View(req, res),
        locals = res.locals;
    
    // Set locals
    locals.section = 'user';
    locals.formData = req.body || {};
    locals.validationErrors = {};
    //locals.step = '1'; // default step: signup user
    locals.dump = '';
    
    // Step 1: log the user in
    view.on('post', { action: 'login' }, function (next) {
        
        // prepare callbacks for success and failure
        var onFail = function () {
            req.flash('error', 'Sorry, that email and password combo are not valid.');
            //locals.step = '1';
            next();
        };

        var onSuccess = function (user) {
            req.flash('success', 'Welcome ' + user.name.first);
            locals.user = user;
            //locals.step = '2';
            next();
        };
        
        // sign the user in using lib from keystone
        session.signin(req.body, req, res, onSuccess, onFail);
    });
 
    view.render('user/login');
}