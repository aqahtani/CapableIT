var keystone = require('keystone'),
    Types = keystone.Field.Types,
    uniqueValidator = require('mongoose-unique-validator');

/**
 * User Model
 * ==========
 */

var User = new keystone.List('User', {
    defaultSort: 'tenant name',
});

User.add({
    name: { type: Types.Name, required: true, index: true },
    email: { type: Types.Email, initial: true, required: true, index: { unique: true } },
    password: { type: Types.Password, initial: true, required: true },
    organization: { type: Types.Relationship, ref: 'Organization' },
    isVerified: { type: Boolean, label: 'Email verified', index: true, default: false }
}, 'Permissions', {
    isAdmin: { type: Boolean, label: 'Can access Keystone', index: true },
    isOrgAdmin: { type: Boolean, label: 'Can manage organization', index: true }
});

// Provide access to Keystone
User.schema.virtual('canAccessKeystone').get(function () {
    return this.isAdmin;
});

// verify user as a method
User.schema.methods.verifyUser = function (token, callback) {
    var that = this;
    
    keystone.list('VerificationToken').model.findOne({ token: token }, function (err, result) {
        if (err) return callback(err);
        
        if (result.user === that._id) {
            that.isVerified = true;
            that.save(function (err) {
                callback(err);
            })
        }
    });
}

/**
 * Relationships
 */

User.relationship({ ref: 'Post', refPath: 'author' });

/**
 * Plugins
 */
User.schema.plugin(uniqueValidator, { message: '{PATH} already exists' });

/**
 * Registration
 */

User.defaultColumns = 'organization, name, email, isAdmin, isOrgAdmin, isVerified';
User.register();
