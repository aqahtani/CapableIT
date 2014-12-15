/**
 * This file contains the common middleware used by your routes.
 * 
 * Extend or replace these functions as your application requires.
 * 
 * This structure is not enforced, and just a starting point. If
 * you have more middleware you may want to group it as separate
 * modules in your project's /lib directory.
 */

var _ = require('underscore'),
	querystring = require('querystring'),
    keystone = require('keystone');

/**
	Initialises the standard view locals
	
	The included layout depends on the navLinks array to generate
	the navigation in the header, you may wish to change this array
	or replace it with your own templates / logic.
*/

exports.initLocals = function(req, res, next) {
	
    var locals = res.locals;
    var t = req.t;
	
	locals.navLinks = [
		{ label: t('nav.home'),         key: 'home',		    href: '/' },
		{ label: t('nav.organization'), key: 'organization',    href: '/organization' },
        { label: t('nav.jobs'),         key: 'jobs',            href: '/jobs' },
        { label: t('nav.employees'),    key: 'employees',       href: '/employees' },
        { label: t('nav.assessments'),  key: 'assessments',     href: '/assessments' }
    ];
	
    locals.user = req.user;
    
    // get the organization id of the current user
    // and make available to all routes/views
    if (req.user) {
        locals.orgId = req.user.organization;
        // a global tenant filter to be used in queries 
        locals.orgFilter = { 'organization' : req.user.organization };
    }
    else {
        locals.orgId = null;
        locals.orgFilter = null;
    }
    
    // reset authorizations
    locals.authorized = null; 
    
    next();
	
};

/**
	Fetches and clears the flashMessages before a view is rendered
*/

exports.flashMessages = function(req, res, next) {
	
	var flashMessages = {
		info: req.flash('info'),
		success: req.flash('success'),
		warning: req.flash('warning'),
		error: req.flash('error')
	};
	
	res.locals.messages = _.any(flashMessages, function(msgs) { return msgs.length; }) ? flashMessages : false;
	
	next();
	
};


/**
	Prevents people from accessing protected pages when they're not signed in
 */

exports.requireUser = function(req, res, next) {
	if (!req.user) {
        req.flash('error', 'Please sign in to access this page.');
        req.session.returnTo = req.path;
        res.redirect('/login');
	} else {
		next();
	}
};

/**
	Prevents people from accessing protected pages when they're not signed in
 */

exports.authorizeUser = function (action) {
    return function (req, res, next) {

        var userId = req.user.id, 
            userRoles = req.user.roles,
            orgId = req.user.organization,
            resource = req.path;
        
        // get an '*' version of the path
        var regex = new RegExp('/[^/]*$');
        var resourceAny = resource.replace(regex, '/*');
        
        var async = require('async');
        
        // async function to check user authorization
        var isUserAuthorized = function (callback) {
            var q = keystone.list('UserAuthorization').model.findOne()
                .where({
                    'organization': orgId,
                    'user': userId,
                    'resource' : { "$in": [resource, resourceAny] }
                }).populate('user permissions');
            
            q.exec(function (err, userAuth) {
                if (err) {
                    callback(err, null);
                }
                else if (!userAuth) {
                    // no user authorizations found
                    callback(null, null);
                }
                else {
                    // user authorization found, check if permitted
                    // get user's permissions from the populated 'permissions'
                    var permissions = _.pluck(userAuth.permissions, 'name');
                    
                    var isAllowed = _.contains(permissions, '*') || _.contains(permissions, action);
                    
                    if (!isAllowed) {
                        callback(null, null);
                    }
                    else {
                        callback(null, { "user" : userAuth.user.name.full, "permissions" : permissions });
                    }
                }
            });
        }
        
        // async function to check role authorization
        var isRoleAuthorized = function (callback) {
            var q = keystone.list('RoleAuthorization').model.find()
                .where({
                    'organization': orgId,
                    'role': { "$in" : userRoles },
                    'resource' : { "$in": [ resource, resourceAny ]}
                }).populate('role permissions');
            
            q.exec(function (err, roleAuths) {
                if (err) {
                    callback(err, null);
                }
                else if (!roleAuths) {
                    // no role authorizations found
                    callback(null, null);
                }
                else {
                    // role authorization(s) found, check if permitted
                    // get the populated 'permissions' for each role
                    
                    roles = _.pluck(_.pluck(roleAuths, 'role'), 'name');
                    // 1: pluck the permissions out, and flatten at one level
                    var combinedPermissions = _.flatten(_.pluck(roleAuths, 'permissions'), true);
                    // 2: pluck the permission names
                    var permissions = _.pluck(combinedPermissions, 'name');
                    
                    // allowed if a match or *
                    var isAllowed = _.contains(permissions, '*') || _.contains(permissions, action);
                    
                    if (!isAllowed) {
                        callback(null, null);
                    }
                    else {
                        callback(null, { "roles": roles, "permissions" : permissions });
                    }
                }
            });
        }
        
        async.parallel({
            userAuth : isUserAuthorized,
            roleAuths : isRoleAuthorized
        }, function (err, results) {
            if (err) {
                // something wrong happened!
                req.flash('error', err.message);
                res.redirect('/');
            }
            else if (results.userAuth) {
                res.locals.authorized = {
                    'user': results.userAuth.user,
                    'permissions': results.userAuth.permissions
                };
                //req.flash('info', 'User authorized as "' + results.userAuth.user + '" with permissions: ' + results.userAuth.permissions);
                next();
            }
            else if (results.roleAuths) {
                res.locals.authorized = {
                    'roles': results.roleAuths.roles,
                    'permissions': results.roleAuths.permissions
                };                
                //req.flash('info', 'Role authorized as "' + results.roleAuths.roles + '" with permissions: ' + results.roleAuths.permissions);
                next();
            }
            else {
                // no user/role authorizations found
                req.flash('error', 'You do not have permission to perform this action!');
                res.redirect('/');
            }
        });
    }
};


/**
 *  Add header 'Access-Control-Allow-Origin' header 
 */

exports.allowOrigins = function (req, res, next) {
    // enable CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
};
