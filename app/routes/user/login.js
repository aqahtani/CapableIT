var keystone = require('keystone'),
    session = keystone.session,
    User = keystone.list('User'),
    _ = require('underscore'),
    async = require('async'),
    util = require('util');

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
            
            // setup async calls to retrieve user and role permissions
            // 1. get user authorizations of the current user
            var getUserAuthorizations = function (callback) {
                keystone.list('UserAuthorization').model.find()
                .where('organization', user.organization)
                .where('user', user.id)
                .populate('permissions')
                .exec(callback);
            };
            
            // 2. find roles the user
            var getUserRoles = function (callback) {
                keystone.list('Role').model.find()
                .where({ '_id': { "$in" : user.roles } })
                .exec(callback);      
            };
            
            // 3. get role authorizations of the current user
            var getRoleAuthorizations = function (callback, results) {
                // results.userRoles contains roles assigned to user
                keystone.list('RoleAuthorization').model.find()
                .where('organization', user.organization)
                .where('role').in(results.userRoles)
                .populate('role')
                .populate('permissions')
                .exec(callback);
            };

            
            async.auto({
                userAuthorizations: getUserAuthorizations,
                userRoles: getUserRoles,
                roleAuthorizations: ['userRoles', getRoleAuthorizations]
            }, function (err, results) {
                if (!err) {
                    req.session.roleNames = _.pluck(results.userRoles, 'name');
                    req.session.authorizations = results;
                };

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