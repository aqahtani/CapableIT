var winston = require('winston'),
    util = require('util'),
    _ = require('underscore');

// Requiring `winston-mongodb` will expose `winston.transports.MongoDB`
require('winston-mongodb').MongoDB;
// Requiring `winston-mail` will expose `winston.transports.Mail`
require('winston-mail').Mail;

winston.emitErrs = true;

var logger = new winston.Logger({
    transports: [
        new winston.transports.File({
            level: 'debug',
            filename: './winston/all-logs.log',
            handleExceptions: true,
            json: true,
            maxsize: 5242880, //5MB
            maxFiles: 5,
            colorize: false
        }),
        new winston.transports.Console({
            level: 'verbose',
            handleExceptions: true,
            json: false,
            colorize: true
        }),
        new winston.transports.MongoDB({
            level: 'info',
            handleExceptions: true,
            db: process.env.MONGO_URI,
            collection: 'applogs'
            // tried to do capping but it didn't work, may be because
            // the collection has already been created by keystone!
            //capped: true, // try to create new log collection as capped
            //cappedMax: 20 // capped collection in number of documents
        }),
        new winston.transports.Mail({
            level: 'error',
            handleExceptions: true,
            to: 'admin@knowledge-passion.com',
            from: 'winston@cit.knowledge-passion.net',
            host: process.env.MANDRILL_HOST,
            username: process.env.MANDRILL_USERNAME,
            password: process.env.MANDRILL_API_KEY,
            subject: '[CapableIT] winston: {{level}} {{msg}}'
        })
    ],
    exitOnError: false
});

module.exports = logger;
module.exports.stream = {
    write: function (message, encoding) {
        logger.verbose(message);
    }
};

// a helper function to log metadata under details key
// this is going to be picked up by Keystone AdminUI nicely
module.exports.details = function (meta) {
    return { "details": util.inspect(meta, { depth : null }) };
};