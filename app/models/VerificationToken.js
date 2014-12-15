var keystone = require('keystone'),
    Types = keystone.Field.Types,
    uuid = require('node-uuid');

/**
 * VerificationToken Model
 * =======================
 */

var VerificationToken = new keystone.List('VerificationToken', {
    defaultSort: '-createdAt',
});

VerificationToken.add({
    user: { type: Types.Relationship, ref: 'User' },
    token: { type: String },
    createdAt: { type: Date, required: true, default: Date.now, expires: 14400 }
});

// a method to create a token as a UUID string
VerificationToken.schema.pre('save', function (next) {
    if (this.isNew) {
        this.token = uuid.v4();
    }
    next();
});

/**
 * Registration
 */
VerificationToken.defaultColumns = 'createdAt, user, token';
VerificationToken.register();
