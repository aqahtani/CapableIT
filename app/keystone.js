// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').load();

// load Capable-IT version n
var pjson = require('./package.json');

// Require keystone
var keystone = require('keystone');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

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
    'signout redirect': '/'
});

//=============================================================================
// initialize i18next v2

var i18next = require('i18next'),
    i18nextFilesystemBackend = require('i18next-node-fs-backend'),
    i18nextSprintf = require('i18next-sprintf-postprocessor'),
    i18nextMiddleware = require('i18next-express-middleware');

var i18nextCfg = require('./config/i18next.js');

i18next
  .use(i18nextMiddleware.LanguageDetector)
  .use(i18nextFilesystemBackend)
  .use(i18nextSprintf)
  .init(i18nextCfg.options);

// expose req.t with fixed lng
keystone.app.use(i18nextMiddleware.handle(i18next));

//=============================================================================


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
    editable: keystone.content.editable,
    citversion: pjson.version
});

// Load your project's Routes

keystone.set('routes', require('./routes'));

// Setup common locals for your emails. The following are required by Keystone's
// default email templates, you may remove them if you're using your own.

keystone.set('email locals', {
    logo_src: '/images/kpcit_200.png',
    logo_width: 200,
    logo_height: 35,
    theme: {
        email_bg: '#F9F9F9',
        link_color: '#EE7700',
        buttons: {
            color: '#fff',
            background_color: '#626262',
            border_color: '#4D4D4D'
        }
    }
});

// Setup replacement rules for emails, to automate the handling of differences
// between development a production.

// Be sure to update this rule to include your site's actual domain, and add
// other rules your email templates require.

keystone.set('email rules', [{
        find: '/images/',
        replace: (keystone.get('env') == 'production') ? 'http://cit.knowledge-passion.net/images/' : 'http://localhost:3000/images/'
    }, {
        find: '/keystone/',
        replace: (keystone.get('env') == 'production') ? 'http://cit.knowledge-passion.net/keystone/' : 'http://localhost:3000/keystone/'
    }, {
        find: '/root/',
        replace: (keystone.get('env') == 'production') ? 'http://cit.knowledge-passion.net/' : 'http://localhost:3000/'
    }]);

// Load your project's email test routes

keystone.set('email tests', require('./routes/emails'));

// Configure the navigation bar in Keystone's Admin UI

keystone.set('nav', {
    'Home': ['organizations'],
    'Organization': ['org-departments', 'org-functions', 'jobs', 'job-tasks', 'employees'],
    'Assessment': ['assessments', 'hard-skill-gaps', 'soft-skill-gaps', 'english-skill-gaps'],
    'Development': ['development-plans', 'development-activities', 'development-methods'],
    'Professional Skills': ['hard-skill-categories', 'hard-skill-sub-categories', 'hard-levels', 'hard-skills'],
    'Behavioral Skills': ['english-levels', 'soft-levels', 'soft-skills'],
    'users': ['users', 'verification-tokens', 'permissions', 'roles', 'user-authorizations', 'role-authorizations'],
    'Content': ['posts', 'post-categories', 'galleries', 'enquiries']
});


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
