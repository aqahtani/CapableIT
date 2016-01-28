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
    fallbackLng: 'en',
    saveMissing: true,
    ns: ['app'], 
    defaultNS: 'app',  
    backend: {
        loadPath: "locales/{{lng}}/{{ns}}-{{lng}}.json"
    },
    detection: detectionOptions,
    debug: false
};

module.exports = {
    'options': options
};
