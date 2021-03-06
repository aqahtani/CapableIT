/**
 * This file is where you define your application routes and controllers.
 * 
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 * 
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 * 
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 * 
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 * 
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

var _ = require('underscore'),
	keystone = require('keystone'),
	middleware = require('./middleware'),
	importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initErrorHandlers);
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Handle 404 errors
keystone.set('404', function (req, res, next) {
    res.notfound();
});

// Handle other errors
keystone.set('500', function (err, req, res, next) {
    var title, message;
    if (err instanceof Error) {
        message = err.message;
        err = err.stack;
    }
    res.err(err, title, message);
});

// Import Route Controllers
var routes = {
    views: importRoutes('./views'),
    homeViews: importRoutes('./home'),
    userViews: importRoutes('./user'),
    dashboardViews: importRoutes('./dashboard'),
    api: importRoutes('./api'),
    adminApi: importRoutes('./admin-api'),
};

// Setup Route Bindings
exports = module.exports = function(app) {    
	
    // landing page
    app.get('/', routes.homeViews.home);
    // Public views
    app.get('/blog/:category?', routes.views.blog);
    app.get('/blog/post/:post', routes.views.post);
    app.get('/gallery', routes.views.gallery);
    app.all('/contact', routes.views.contact);
    app.get('/skills/english', routes.views.englishskill);
    app.get('/skills/hard', routes.views.hardskills);
    app.get('/skills/soft', routes.views.softskills);

    // GET routes/views (Authenticated)
    app.get('/organization', middleware.requireUser, routes.views.organization);
    app.get('/organization/:organization', middleware.requireUser, routes.views.organization);
    app.get('/jobs', middleware.requireUser, routes.views.jobs);
    app.get('/employees', middleware.requireUser, routes.views.employees);
    app.get('/articles/:category?', middleware.requireUser, routes.views.articles);
    app.get('/article/:article', middleware.requireUser, routes.views.article);
    
    // Job Routes
    app.get('/job/:job', middleware.requireUser, middleware.authorizeUser('view'), routes.views.job);
    app.post('/job/:job', middleware.requireUser, middleware.authorizeUser('edit'), routes.views.job);

    // Employee Routes (Authenticated/Authorized)
    app.get('/employee', middleware.requireUser, middleware.authorizeUser('view'), routes.views.employee);
    app.post('/employee', middleware.requireUser, middleware.authorizeUser('edit'), routes.views.employee);
    app.get('/employee/:employee', middleware.requireUser, middleware.authorizeUser('view'), routes.views.employee);
    app.post('/employee/:employee', middleware.requireUser, middleware.authorizeUser('edit'), routes.views.employee);
    
    // Assessment Routes
    app.get('/assessment/:assessment', middleware.requireUser, middleware.authorizeUser('view'), routes.views.assessment);
    app.post('/assessment/:assessment', middleware.requireUser, middleware.authorizeUser('edit'), routes.views.assessment); 
    app.get('/assessments', middleware.requireUser, routes.views.assessments);
    
    // Development Plans Routes
    app.all('/developmentplans', middleware.requireUser, middleware.requireRole('employee'), routes.views.developmentplans);
    app.get('/developmentplan/:developmentplan', middleware.requireUser, middleware.authorizeUser('view'), routes.views.developmentplan);
    app.post('/developmentplan/:developmentplan', middleware.requireUser, middleware.authorizeUser('edit'), routes.views.developmentplan);
    
    // Dashboard Routes
    app.all('/dashboard/', middleware.requireUser, middleware.requireRole('owner'), routes.dashboardViews.home);
    app.all('/dashboard/jobs', middleware.requireUser, middleware.requireRole('owner'), routes.dashboardViews.jobs);
    app.all('/dashboard/employees', middleware.requireUser, middleware.requireRole('owner'), routes.dashboardViews.employees);
    app.all('/dashboard/assessments', middleware.requireUser, middleware.requireRole('owner'), routes.dashboardViews.assessments);
    app.all('/dashboard/developmentplans', middleware.requireUser, middleware.requireRole('owner'), routes.dashboardViews.developmentplans);
    
    // API
    app.get('/api/departments', middleware.requireUser, routes.api.departments); //list org departments
    app.get('/api/functions', middleware.requireUser, routes.api.functions); //list org functions
    app.post('/api/assess/new', middleware.requireUser, routes.api.assess); //new assessment
    app.post('/api/contact', routes.api.contact); //new enquiry
    
    // API Admin routes
    app.get('/admin/api/development-activities', middleware.requireUser, middleware.requireRole('owner'), routes.adminApi['development-activities']); //list development-activities
    
    // User routes: registration and authentication 
    app.all('/join', routes.userViews.join);
    app.all('/login', routes.userViews.login);
    app.all('/logout', routes.userViews.logout);
    app.all('/forgot-password', routes.userViews['forgot-password']);
    app.all('/reset-password/:key', routes.userViews['reset-password']);
    app.all('/verify-email/:key', routes.userViews['verify-email']);
    // User routes that require logged in user account
    app.all('/profile', middleware.requireUser, routes.userViews.profile);
    app.all('/resend-verification', middleware.requireUser, routes.userViews['resend-verification']);
    
    
    // language switching routes
    app.get('/lang/:language', require('./lang'));
    
    // allow CORS on /api routes
    app.all('/api*', middleware.allowOrigins);
    app.all('/admin/api*', middleware.allowOrigins);
	
};
