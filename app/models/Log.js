var keystone = require('keystone'),
    Types = keystone.Field.Types,
    util = require('util'),
    _ = require('underscore');

/**
 * Log Model
 * =========
 */

var Log = new keystone.List('Log', {
    nocreate: true,
    noedit: true,
    defaultSort: '-timestamp'
});

Log.add({
    // set expires to number of seconds
    // examples: 30 days = 2592000, 14 days = 1209600, 7 days = 604800
    timestamp: { type: Types.Datetime, expires: 1209600 },
    level: { type: Types.Select, options: 'error, warn, info, verbose, debug, silly' },
    message: { type: Types.Text },
    meta: {
        details: { type: Types.Textarea, height: 400 }
    }
});

Log.defaultColumns = 'timestamp, level, message';

Log.register();
