var keystone = require('keystone'),
    Types = keystone.Field.Types,
    util = require('util'),
    _ = require('underscore');

/**
 * AppLog Model
 * ============
 */

var AppLog = new keystone.List('AppLog', {
    nocreate: true,
    noedit: true,
    defaultSort: '-timestamp'
});

AppLog.add({
    // set expires to number of seconds
    // examples: 30 days = 2592000, 14 days = 1209600, 7 days = 604800
    timestamp: { type: Types.Datetime, expires: 1209600 },
    level: { type: Types.Select, options: 'error, warn, info, verbose, debug, silly' },
    message: { type: Types.Text },
    meta: {
        details: { type: Types.Textarea, height: 400 }
    }
});

AppLog.defaultColumns = 'timestamp, level, message';

AppLog.register();
