var winston = require('winston');

//Requiring `winston-mongodb` will expose `winston.transports.MongoDB`
require('winston-mongodb').MongoDB;

winston.emitErrs = true;

var logger = new winston.Logger({
    transports: [
        new winston.transports.File({
            level: 'debug',
            filename: './logs/all-logs.log',
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
            collection: 'logs'
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