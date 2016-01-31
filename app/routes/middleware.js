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
		//{ label: t('nav.home'),         key: 'home',		    href: '/' },
		{ label: t('nav.organize'),     key: 'organization',    href: '/organization' },
        { label: t('nav.jobs'),         key: 'jobs',            href: '/jobs' },
        { label: t('nav.employees'),    key: 'employees',       href: '/employees' },
        { label: t('nav.assess'),       key: 'assessments',     href: '/assessments' },
        { label: t('nav.develop'),      key: 'development',     href: '/developmentplans' }
    ];
    
    locals.t = req.t;	
    locals.user = req.user;

    // get the organization id of the current user
    // and make available to all routes/views
    if (req.user) {
        locals.organization = req.user.organization;
        // a global tenant filter to be used in queries 
        locals.orgFilter = { 'organization' : req.user.organization };
        locals.authorizations = req.session.authorizations;
    }
    else {
        locals.organization = null;
        locals.orgFilter = null;
        locals.authorizations = null;
    }
    
    // reset authorizations
    locals.permits = null; 
    
    next();
	
};

/**
    Inits the error handler functions into `res`
*/
exports.initErrorHandlers = function (req, res, next) {
    
    res.err = function (err, title, message) {
        res.status(500).render('errors/500', {
            err: err,
            errorTitle: title,
            errorMsg: message,
            env: keystone.get('env')
        });
    }
    
    res.notfound = function (title, message) {
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
	Prevents people from accessing protected pages when they're not authorized
 */

exports.authorizeUser = function (action) {
    return function (req, res, next) {

        var userId = req.user.id, 
            userRoles = req.user.roles,
            organization = req.user.organization,
            resource = req.path,
            // get authorizations from res as it was prepared by initLocals
            authorizations = res.locals.authorizations;
        
        // get an '*' version of the path
        var regex = new RegExp('/[^/]*$');
        var resourceAny = resource.replace(regex, '/*');
        
        var async = require('async');
        
        // async function to check user authorization
        
        var isUserAuthorized = function (callback) {
            // get user authorizations from locals
            // searching on the given resource or * 
            var userAuthOnResource = _.findWhere(authorizations.userAuthorizations, { "resource": resource });
            var userAuthOnAny = _.findWhere(authorizations.userAuthorizations, { "resource": resourceAny });
            
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
        
        // async function to check role authorization
        var isRoleAuthorized = function (callback) {
            // get role authorizations from locals
            // searching on the given resource or * 
            var roleAuthOnResource = _.findWhere(authorizations.roleAuthorizations, { "resource": resource });
            var roleAuthOnAny = _.findWhere(authorizations.roleAuthorizations, { "resource": resourceAny });
            
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
     
        async.parallel({
            userPermissions : isUserAuthorized,
            rolePermissions : isRoleAuthorized
        }, function (err, results) {
            if (err) {
                // something wrong happened!
                req.flash('error', err.message);
                res.redirect('/');
            }
            
            // if not permissions could be found, then inform and redirect the user
            if (!results.userPermissions && !results.rolePermissions) {
                // no user/role authorizations found
                req.flash('error', 'You do not have permission to perform this action!');
                res.redirect('/');
            };

            // all went well, set authorized to returned results
            var permits = [];
            if (results.userPermissions) permits.push(results.userPermissions);
            
            if (results.rolePermissions) permits.push(results.rolePermissions);         
            
            // add to locals to be used by views
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
