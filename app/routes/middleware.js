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
		{ label: t('nav.home'),     key: 'home',		href: '/' },
		{ label: t('nav.schools'),  key: 'schools',     href: '/schools' },
		{ label: t('nav.blog'),		key: 'blog',		href: '/blog' },
		{ label: t('nav.gallery'),	key: 'gallery',		href: '/gallery' },
		{ label: t('nav.contact'),	key: 'contact',		href: '/contact' }
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
 *  Add header 'Access-Control-Allow-Origin' header 
 */

exports.allowOrigins = function (req, res, next) {
    // enable CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
};
