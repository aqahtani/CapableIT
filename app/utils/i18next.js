var i18next = require('i18next'),
    i18nextFilesystemBackend = require('i18next-node-fs-backend'),
    i18nextSprintf = require('i18next-sprintf-postprocessor'),
    i18nextMiddleware = require('i18next-express-middleware');

var detectionOptions = {
    // order and from where user language should be detected
    order: [/*'path', 'session', 'querystring', 'header' */ 'cookie'],
    
    // keys or params to lookup language from
    //lookupQuerystring: 'lng',
    //lookupSession: 'lng',
    //lookupFromPathIndex: 0,

    lookupCookie: 'lang',
    // cache user language
    caches: false, // ['cookie']
};

var options = {
    lng: 'en',
    preload: ['ar'],
    ns: ['app'], 
    defaultNS: 'app',
    fallbackLng: 'en',
    //fallbackNS: 'app',
    saveMissing: true,
    saveMissingTo: 'all',
    backend: {
        // path where resources get loaded from
        loadPath: "locales/{{lng}}/{{ns}}-{{lng}}.json",
        // path to post missing resources
        addPath:  "locales/{{lng}}/{{ns}}-{{lng}}.json",
    },
    detection: detectionOptions,
    debug: true
};

i18next
  .use(i18nextMiddleware.LanguageDetector)
  .use(i18nextFilesystemBackend)
  .use(i18nextSprintf)
  .init(options);

module.exports = i18next;
module.exports.handle = i18nextMiddleware.handle(i18next); // expose req.t with fixed lng
