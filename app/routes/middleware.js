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
    keystone = require('keystone'),
    logger = require("../utils/logger"),
    async = require('async');

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
		//{ label: t('nav.home'),         key: 'home',		    href: '/' },
		{ label: t('nav.organize'),     key: 'organization',    href: '/organization' },
        { label: t('nav.jobs'),         key: 'jobs',            href: '/jobs' },
        { label: t('nav.employees'),    key: 'employees',       href: '/employees' },
        { label: t('nav.assess'),       key: 'assessments',     href: '/assessments' },
        { label: t('nav.develop'),      key: 'development',     href: '/developmentplans' }
    ];
    
    locals.t = req.t;

    // a url to be used to return to wheneven you want to go back to CIT home
    // for now, it is set to /organization
    // might be changed in the future to a landing page for logged in users
    locals.home = '/organization';
    
    // get the organization id of the current user
    // and make available to all routes/views
    if (req.user) {
        locals.organization = req.user.organization;
        // a global tenant filter to be used in queries 
        locals.orgFilter = { 'organization' : req.user.organization };
        locals.user = req.user;
        locals.user.roleNames = req.session.roleNames;
    }
    else {
        locals.organization = null;
        locals.orgFilter = null;
        locals.user = null;
    }
    
    // reset authorizations
    locals.authorizations = null;
    locals.permits = null; 
    
    next();
};

/**
    Inits the error handler functions into `res`
*/
exports.initErrorHandlers = function (req, res, next) {
    
    res.err = function (err, title, message) {
        logger.error('[500] Server Error ', message, logger.details({ 'Error': err, 'User': req.user }));
        res.status(500).render('errors/500', {
            err: err,
            errorTitle: title,
            errorMsg: message,
            env: keystone.get('env')
        });
    }
    
    res.notfound = function (title, message) {
        logger.warn('[404] Page not found', logger.details({ 'Url': req.url }));
        res.status(404).render('errors/404', {
            errorTitle: title,
            errorMsg: message
        });
    }
    
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

exports.requireUser = function (req, res, next) {
    var t = req.t;

	if (!req.user) {
        req.flash('error', t('flash.error.nologin'));
        req.session.returnTo = req.path;
        return res.redirect('/login');
	} else {
		next();
	}
};


/**
	Prevents people from accessing protected pages when they don't have specific roles
 */

exports.requireRole = function (role) {
    return function (req, res, next) {
        var user = req.user, 
            organization = req.user.organization,
            locals = res.locals,
            t = req.t;
        
        /*
        // 1. fetch the given role
        var getTargetRole = function (callback) {
            keystone.list('Role').model.findOne()
                .where('name', role)
                .exec(callback);
        };

        // 2. find roles of the user
        var getUserRoles = function (callback) {
            keystone.list('Role').model.find()
                .where('_id').in(user.roles)
                .exec(callback);
        };
        
        async.auto({
            targetRole: getTargetRole,
            userRoles: getUserRoles
        }, */
            
        keystone.list('Role').model.findOne()
        .where('_id').in(user.roles)
        .where('name', role)
        .exec(function (err, targetRole) {
            if (err) {
                // something wrong happened!
                req.flash('error', err.message);
                return res.redirect(locals.home);
            };
            
            if (!targetRole) {
                // user doesn't have a matching role
                req.flash('error', t('flash.error.norole') + ' [' + role + '] ');
                return res.redirect(locals.home);
            }
            
            next();
        });
    };
};

/**
	Prevents people from accessing protected pages when they're not authorized
 */

exports.authorizeUser = function (action) {
    return function (req, res, next) {

        var user = req.user, 
            organization = req.user.organization,
            locals = res.locals,
            t = req.t,
            resource = req.path;
        
        // get an '*' version of the path
        var regex = new RegExp('/[^/]*$');
        var resourceAny = resource.replace(regex, '/*');
                
        // setup async calls to retrieve user and role permissions
        // 1. get user authorizations of the current user
        var getUserAuthorizations = function (callback) {
            keystone.list('UserAuthorization').model.find()
                .where('organization', organization)
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
            var userRoles = results.userRoles;

            keystone.list('RoleAuthorization').model.find()
                .where('organization', organization)
                .where('role').in(userRoles)
                .populate('role')
                .populate('permissions')
                .exec(callback);
        };

        // 4. check user authorization
        var isUserAuthorized = function (callback, results) {
            // results.userAuthorizations contains authorizations assigned to user
            var userAuthorizations = results.userAuthorizations;

            // get user authorizations searching on the given resource or * 
            var userAuthOnResource = _.findWhere(userAuthorizations, { "resource": resource });
            var userAuthOnAny = _.findWhere(userAuthorizations, { "resource": resourceAny });
            
            // pluck permissions for each auth and unionize
            var permissions = [];
            if (userAuthOnResource) permissions = _.pluck(userAuthOnResource.permissions, 'name');
            if (userAuthOnAny) permissions = _.union(permissions, _.pluck(userAuthOnAny.permissions,'name'));

            // allowed if permissions contain the given action or * (any)
            var isAllowed = _.contains(permissions, '*') || _.contains(permissions, action);
            
            // return authrized object if allowed
            if (isAllowed) return callback(null, { "type" : "user", "permissions" : permissions });
            // otherwise return nothing
            return callback();
        };
        
        // 5. check role authorization
        var isRoleAuthorized = function (callback, results) {
            // results.roleAuthorizations contains authorizations assigned to role
            var roleAuthorizations = results.roleAuthorizations;

            // get role permissions searching on the given resource or * 
            var roleAuthOnResource = _.findWhere(roleAuthorizations, { "resource": resource });
            var roleAuthOnAny = _.findWhere(roleAuthorizations, { "resource": resourceAny });
            
            // pluck permissions for each auth and unionize
            var permissions = [];
            var roles = [];
            if (roleAuthOnResource) {
                permissions = _.pluck(roleAuthOnResource.permissions, 'name');
                roles.push(roleAuthOnResource.role.name);
            };

            if (roleAuthOnAny) {
                permissions = _.union(permissions, _.pluck(roleAuthOnAny.permissions, 'name'));
                roles.push(roleAuthOnAny.role.name);
            };

            // allowed if permissions contain the given action or * (any)
            var isAllowed = _.contains(permissions, '*') || _.contains(permissions, action);

            // return authrized object if allowed
            if (isAllowed) return callback(null, { "type": roles, "permissions" : permissions });
            // otherwise return nothing
            return callback();
        };
     
        async.auto({
            userAuthorizations: getUserAuthorizations,
            userRoles: getUserRoles,
            roleAuthorizations: ['userRoles', getRoleAuthorizations],
            userPermissions : ['userAuthorizations', isUserAuthorized],
            rolePermissions : ['roleAuthorizations', isRoleAuthorized]
        }, function (err, results) {
            if (err) {
                // something wrong happened!
                req.flash('error', err.message);
                return res.redirect(locals.home);
            }
            
            // if no permissions could be found, then inform and redirect the user
            if (!results.userPermissions && !results.rolePermissions) {
                // no user/role authorizations found
                req.flash('error', t('flash.error.notauthorized'));
                return res.redirect(locals.home);
            };

            // all went well, set permits to returned results
            var permits = [];
            if (results.userPermissions) permits.push(results.userPermissions);
            if (results.rolePermissions) permits.push(results.rolePermissions);         
            
            // add to locals to be used by views
            res.locals.authorizations = results;
            // add a shortcut to a combined list of permissions
            res.locals.permits = permits;
            
            next();
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
