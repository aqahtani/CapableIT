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
    organization: { type: Types.Relationship, ref: 'Organization' }
}, 'Permissions', {
    isAdmin: { type: Boolean, label: 'Can access Keystone', index: true },
    isOrgAdmin: { type: Boolean, label: 'Can manage organization', index: true }
});

// Provide access to Keystone
User.schema.virtual('canAccessKeystone').get(function() {
	return this.isAdmin;
});


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

User.defaultColumns = 'organization, name, email, isAdmin, isOrgAdmin';
User.register();
