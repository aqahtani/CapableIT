// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').load();

// Require keystone
var keystone = require('keystone'),
    i18next = require("i18next");

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({
    
    'name': 'OrgIT',
    'brand': 'OrgIT',
    
    'less': 'public',
    'static': 'public',
    'favicon': 'public/favicon.ico',
    'views': 'templates/views',
    'view engine': 'jade',
    
    'emails': 'templates/emails',
    
    'mongo' : 'mongodb://localhost:27017/orgit', 
    //'mongo' : process.env.MONGO_URI,
    'cloudinary config' : process.env.CLOUDINARY_URL,
    
    'mandrill api key' : process.env.MANDRILL_API_KEY,
    'mandrill username' : process.env.MANDRILL_USERNAME,
    
    'auto update': true,
    'session': true,
    'auth': true,
    'user model': 'User',
    'cookie secret': 'C7r0Q2&84Ud}qnw`6:O5.`Z1q0rotgW6V|XX1!W6NyPFo^iPW{+V~BGsMFb712_1',
    'signin url': '/keystone/signin',
    'signin redirect': '/keystone',
    'signout url': '/keystone/signout',
    'signout redirect': '/'
});

// optional, will prefix all built-in tags with 'keystone_'
keystone.set('cloudinary prefix', 'keystone');

// optional, will prefix each image public_id with [{prefix}]/{list.path}/{field.path}/
keystone.set('cloudinary folders', true);

// Load your project's Models

keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js

keystone.set('locals', {
    _: require('underscore'),
    env: keystone.get('env'),
    utils: keystone.utils,
    editable: keystone.content.editable
});

// Load your project's Routes

keystone.set('routes', require('./routes'));

// Setup common locals for your emails. The following are required by Keystone's
// default email templates, you may remove them if you're using your own.

keystone.set('email locals', {
    logo_src: '/images/logo-email.gif',
    logo_width: 194,
    logo_height: 76,
    theme: {
        email_bg: '#f9f9f9',
        link_color: '#2697de',
        buttons: {
            color: '#fff',
            background_color: '#2697de',
            border_color: '#1a7cb7'
        }
    }
});

// Setup replacement rules for emails, to automate the handling of differences
// between development a production.

// Be sure to update this rule to include your site's actual domain, and add
// other rules your email templates require.

keystone.set('email rules', [{
        find: '/images/',
        replace: (keystone.get('env') == 'production') ? 'http://www.your-server.com/images/' : 'http://localhost:3000/images/'
    }, {
        find: '/keystone/',
        replace: (keystone.get('env') == 'production') ? 'http://www.your-server.com/keystone/' : 'http://localhost:3000/keystone/'
    }, {
        find: '/root/',
        replace: (keystone.get('env') == 'production') ? 'http://www.your-server.com/' : 'http://localhost:3000/'
    }]);

// Load your project's email test routes

keystone.set('email tests', require('./routes/emails'));

// Configure the navigation bar in Keystone's Admin UI

keystone.set('nav', {
    'Home': ['organizations'],
    'Organization': ['org-departments', 'org-functions', 'jobs', 'job-tasks'],
    'Employees': ['employees', 'assessments'],
    'Professional Skills': ['hard-skill-categories', 'hard-skill-sub-categories', 'hard-levels', 'hard-skills'],
    'Behavioral Skills': ['english-levels', 'soft-levels', 'soft-skills'],
    'users': ['users', 'verification-tokens', 'permissions', 'roles', 'user-authorizations', 'role-authorizations'],
    'Content': ['posts', 'post-categories', 'galleries', 'enquiries']
});

//=============================================================================
// initialize i18next
var i18nextCfg = require('./config/i18next.js');
i18next.init(i18nextCfg.options);
i18next.registerAppHelper(keystone.app);
keystone.app.use(i18next.handle);
//=============================================================================

//=============================================================================
// Restify your models using keystone-rest:
var keystoneRest = require('keystone-rest');

// restify models: Expose selected models via REST api
// get references to selected keystone models
var EnglishLevel = keystone.list('EnglishLevel');

// create routes for each model with given http methods
keystoneRest.addRoutes(EnglishLevel, 'get');
//=============================================================================

// Start Keystone to connect to your database and initialise the web server

keystone.start();

// Add api routes to app
keystoneRest.registerRoutes(keystone.app);
