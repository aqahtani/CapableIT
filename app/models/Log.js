var keystone = require('keystone'),
    Types = keystone.Field.Types;

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
    timestamp: { type: Date },
    level: { type: Types.Text },
    message: { type: Types.Text },
    meta: { type: Types.Textarea}
});

Log.defaultColumns = 'timestamp, level, message, meta';
Log.register();
