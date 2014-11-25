var keystone = require('keystone'),
    Types = keystone.Field.Types,
    uniqueValidator = require('mongoose-unique-validator');

/**
 * Permission Model
 * =================
 */

var Permission = new keystone.List('Permission', {
    defaultSort: 'name',
});

Permission.add({
    name: { type: Types.Text, required: true, initial: true },
    label: { type: Types.Text }
});

Permission.defaultColumns = 'name, label';
Permission.register();

/**
 * Role Model
 * =================
 */

var Role = new keystone.List('Role', {
    defaultSort: 'name',
});

Role.add({
    name: { type: Types.Text, required: true, initial: true },
    label: { type: Types.Text }
});

Role.defaultColumns = 'name, label';
Role.register();

/**
 * RoleAuthorization Model
 * ===================
 */

var RoleAuthorization = new keystone.List('RoleAuthorization', {
    defaultSort: 'organization resource role',
});

RoleAuthorization.add({
    organization: { type: Types.Relationship, ref: 'Organization', required: true, initial: true, index: true },
    resource: { type: Types.Text, required: true, initial: true },
    role: { type: Types.Relationship, ref: 'Role', required: true, initial: true },
    permissions: { type: Types.Relationship, ref: 'Permission', many: true, required: true, initial: true }
});

/**
 * Registration
 */

RoleAuthorization.defaultColumns = 'organization, resource, role, permissions';
RoleAuthorization.register();


/**
 * UserAuthorization Model
 * ===================
 */

var UserAuthorization = new keystone.List('UserAuthorization', {
    defaultSort: 'organization resource user',
});

UserAuthorization.add({
    organization: { type: Types.Relationship, ref: 'Organization', required: true, initial: true, index: true },
    resource: { type: Types.Text, required: true, initial: true },
    user: { type: Types.Relationship, ref: 'User', filters: { organization : ':organization' }, required: true, initial: true },
    permissions: { type: Types.Relationship, ref: 'Permission', many: true, required: true, initial: true }
});

/**
 * Registration
 */

UserAuthorization.defaultColumns = 'organization, resource, user, permissions';
UserAuthorization.register();
