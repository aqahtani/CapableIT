var keystone = require('keystone'),
	Types = keystone.Field.Types,
    uniqueValidator = require('mongoose-unique-validator');

/**
 * Organization Model
 * =============
 */

var Organization = new keystone.List('Organization', {
    autokey: { path: 'slug', from: 'title', unique: true },
    defaultSort: 'name'
});

Organization.add({
    name: { type: String, initial: true, required: true, match: /^[a-zA-Z0-9]*$/, uppercase: true, unique: true },
    createdAt: { type: Date, initial: true, default: Date.now },
    title: { type: String, required: true, initial: true },
    altTitle: { type: String, initial: true },
    logo: { type: Types.CloudinaryImage, autoCleanup : true },
    url: { type: Types.Url, initial: true, lowercase: true, index: true, unique: true },
}, 'Address', {
    images: { type: Types.CloudinaryImages },
    location: { type: Types.Location }
});

Organization.defaultColumns = 'name, createdAt, title, altTitle, url';

Organization.relationship({ path: 'users', ref: 'User', refPath: 'organization' });
Organization.relationship({ path: 'employees', ref: 'Employee', refPath: 'organization' });
Organization.relationship({ path: 'jobs', ref: 'Job', refPath: 'organization' });
Organization.relationship({ path: 'tasks', ref: 'JobTask', refPath: 'organization' });
Organization.relationship({ path: 'departments', ref: 'OrgDepartment', refPath: 'organization' });
Organization.relationship({ path: 'functions', ref: 'OrgFunction', refPath: 'organization' });
Organization.relationship({ path: 'assessments', ref: 'Assessment', refPath: 'organization' });
Organization.relationship({ path: 'roleAuthorizations', ref: 'RoleAuthorization', refPath: 'organization' });
Organization.relationship({ path: 'userAuthorizations', ref: 'UserAuthorization', refPath: 'organization' });

/**
 * Plugins
 */
Organization.schema.plugin(uniqueValidator, { message: '{PATH} already exists' });

Organization.register();
