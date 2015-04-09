var keystone = require('keystone'),
    session = keystone.session,
    User = keystone.list('User'),
    _ = require('underscore');

var util = require('util');

exports = module.exports = function (req, res) {
    var view = new keystone.View(req, res),
        locals = res.locals;
    
    // Set locals
    locals.section = 'user';
    locals.formData = req.body || {};
    locals.validationErrors = {};
    
    view.on('post', { action: 'login' }, function (next) {

        if (!req.body.email || !req.body.password) {
            req.flash('error', 'Please enter your email address and password.');
            return next();
        }
        
        // get the redirect url, or set it to /
        locals.returnTo = req.session.returnTo ? req.session.returnTo : '/';
        delete req.session.returnTo; // clean up the session
        
        // prepare callbacks for success and failure
        var onFail = function () {
            req.flash('error', 'Sorry, that email and password combo are not valid.');
            next();
        };

        var onSuccess = function (user) {
            locals.user = user;

            // alert the user if he hasn't verified his account yet!
            if (!user.isVerified) {
                req.flash('warning', 'You have not verified your account yet!');
            }
            
            // find the role names of the user
            keystone.list('Role').model.find()
            .where({ '_id': { "$in" : user.roles }})
            .exec(function (err, roles) {
                if (!err) {
                    var roleNames = _.pluck(roles, 'name');
                    req.session.roleNames = roleNames;
                }

                // welcome the user
                req.flash('success', 'Welcome ' + user.name.first);

                // redirect to the original requested page
                res.redirect(locals.returnTo);
            });
        };
        
        // sign the user in using lib from keystone
        session.signin(req.body, req, res, onSuccess, onFail);
    });
 
    view.render('user/login');
}