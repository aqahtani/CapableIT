var options = {
    lng: 'en',
    preload: ['ar'],
    fallbackLng: 'en',
    ignoreRoutes: ['javascripts/', 'stylesheets/', 'images/'],
    saveMissing: true,
    ns: {
        namespaces: ['app'], 
        defaultNs: 'app'
    }, 
    cookieName: 'lang',
    resSetPath: 'locales/__lng__/__ns__-__lng__.json',
    resGetPath: 'locales/__lng__/__ns__-__lng__.json',
    debug: false
};

module.exports = {
    'options': options
};

