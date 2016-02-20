// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config({ silent: true });

// Azure Application Insights
appInsights = require('applicationinsights');
appInsights.setup().start();

// load CapableIT package file
var pjson = require('./package.json');
// CONTENT: load helpers from lib
var citContent = require('./utils/content');
// LOGGER: winston witn mongodb trasport
var logger = require("./utils/logger");
// i18next
var i18next = require("./utils/i18next");

// Require keystone
var keystone = require('keystone');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.
logger.info('[init] Initializing KeystoneJS');
keystone.init({
    
    'name': 'CapableIT',
    'brand': 'CapableIT',
    
    'less': 'public',
    'static': 'public',
    'favicon': 'public/favicon.ico',
    'views': 'templates/views',
    'view engine': 'jade',
    
    'emails': 'templates/emails',
    
    'mongo' : process.env.MONGO_URI,
    'cloudinary config' : process.env.CLOUDINARY_URL,
    
    'mandrill api key' : process.env.MANDRILL_API_KEY,
    'mandrill username' : process.env.MANDRILL_USERNAME,
    
    'auto update': true,
    'session': true,
    'session store': 'mongo',
    'auth': true,
    'user model': 'User',
    'cookie secret': 'C7r0Q2&84Ud}qnw`6:O5.`Z1q0rotgW6V|XX1!W6NyPFo^iPW{+V~BGsMFb712_1',
    'signin url': '/keystone/signin',
    'signin redirect': '/keystone',
    'signout url': '/keystone/signout',
    'signout redirect': '/',

    // morgan logger
    'logger': 'tiny',
    'logger options': {
        stream: logger.stream
    }
});

// optional, will prefix all built-in tags with 'keystone_'
keystone.set('cloudinary prefix', 'keystone');
// optional, will prefix each image public_id with [{prefix}]/{list.path}/{field.path}/
keystone.set('cloudinary folders', true);

// initialize i18next v2
logger.info('[init] Configuring i18next for internationalization');
keystone.app.use(i18next.handle);

// Load your project's Models
logger.info('[init] Loading models');
keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js
logger.info('[init] Setting up locals');
keystone.set('locals', {
    _: require('underscore'),
    env: keystone.get('env'),
    utils: keystone.utils,
    editable: keystone.content.editable,
    canDo: citContent.canDo,
    hasRole: citContent.hasRole,
    citversion: pjson.version,
});

// Load your project's Routes
logger.info('[init] Loading routes');
keystone.set('routes', require('./routes'));

// Setup common locals for your emails. The following are required by Keystone's
// default email templates, you may remove them if you're using your own.
logger.info('[init] Configuring email locals and rules');
keystone.set('email locals', {
    logo_src: '/images/kpcit_200.png',
    logo_width: 200,
    logo_height: 35,
    theme: {
        email_bg: '#FFFFFF',
        body_bg: '#FAFAFA',
        link_color: '#89D7ED',
        text_color: '#6A5A5B',
        text_muted: '#C1D3C8',
        buttons: {
            color: '#FFFFFF',
            background_color: '#6A5A5B',
            border_color: '#6A5A5B'
        }
    }
});

// Setup replacement rules for emails, to automate the handling of differences
// between development and production.
// Be sure to update this rule to include your site's actual domain, and add
// other rules your email templates require.
keystone.set('email rules', [{
        find: '/images/',
        replace: process.env.WEBSITE_URL + '/images/'
    }, {
        find: '/keystone/',
        replace: process.env.WEBSITE_URL + '/keystone/'
    }, {
        find: '/root/',
        replace: process.env.WEBSITE_URL + '/'
    }]);

// Load your project's email test routes
keystone.set('email tests', require('./routes/emails'));

// Configure the navigation bar in Keystone's Admin UI
logger.info('[init] Setting up navigation in Keystone AdminUI');
keystone.set('nav', {
    'Home': ['organizations'],
    'Organization': ['org-departments', 'org-functions', 'jobs', 'job-tasks', 'employees', 'articles', 'article-categories'],
    'Assessment': ['assessments', 'hard-skill-gaps', 'soft-skill-gaps', 'english-skill-gaps'],
    'Development': ['development-plans', 'development-activities', 'development-methods'],
    'Professional Skills': ['hard-skill-categories', 'hard-skill-sub-categories', 'hard-levels', 'hard-skills'],
    'Behavioral Skills': ['english-levels', 'soft-levels', 'soft-skills'],
    'Users': ['users', 'permissions', 'roles', 'user-authorizations', 'role-authorizations'],
    'Content': ['posts', 'post-categories', 'galleries', 'enquiries'],
    'System': ['app-logs']
});

// keystone-rest: restify selected models
// configure models to restify in /utils/keystone-rest.js 
logger.info('[init] Restifying models using keystone-rest');
require("./utils/keystone-rest").registerRoutes(keystone.app);

// Start Keystone to connect to your database and initialise the web server
keystone.start();