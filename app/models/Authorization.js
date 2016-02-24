var keystone = require('keystone'),
    Types = keystone.Field.Types,
    _ = require('underscore');

/**
 * Permission Model
 * =================
 */

var Permission = new keystone.List('Permission', {
    defaultSort: 'name',
});

Permission.add({
    name: { type: Types.Text, required: true, initial: true },
    label: { type: Types.Text, initial: true }
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
    label: { type: Types.Text, initial: true }
});

Role.relationship({ path: 'users', ref: 'User', refPath: 'roles' });
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
    resource: { type: Types.Text, required: true, initial: true, index: true },
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
    resource: { type: Types.Text, required: true, initial: true, index: true },
    user: { type: Types.Relationship, ref: 'User', filters: { organization : ':organization' }, required: true, initial: true },
    permissions: { type: Types.Relationship, ref: 'Permission', many: true, required: true, initial: true }
});


/* Schema Static Method: authorize()
 * create user authorization once a user is linked to employee
 * @organization: organization id
 * @user: user id
 * @resource: req path such as /employee or /assessement/some_id
 * @permits: an array of permission names such as ['*'] or ['view', 'edit']
 */
UserAuthorization.schema.statics.authorize = function (organization, user, resource, permits, done) {
    var async = require("async");
    
    // this one to get permissions
    var getPermissions = function (callback) {
        // get all permissions 
        keystone.list('Permission').model.find().exec(function (err, permissions) {
            if (err) return callback(err, null);
            // Async call is done, alert via callback
            callback(null, permissions);
        });
    };
    
    var authorizeUser = function (callback, results) {
        // get id's of passed permissions
        var givenPermissions = [];
        
        permits.forEach(function (permit, index) {
            var p = _.findWhere(results.permissions, { 'name': permit });
            if (p) givenPermissions.push(p._id);
        });
        
        // build the needed authorizations
        var auths = [
            {
                'organization': organization,
                'resource': resource,
                'user': user,
                'permissions': givenPermissions
            }
        ];
        
        UserAuthorization.model.create(auths, function (err) {
            if (err) return callback(err, auths);
            // saved
            callback(null, auths);
        });
    };
    
    async.auto({
        permissions : getPermissions,
        authorization : ['permissions', authorizeUser]
    } , done);
};


/*
 * Finds all matching resources under organization and deletes them 
 */
UserAuthorization.schema.statics.removeResource = function (organization, resource, done) {
    UserAuthorization.model.find()
    .where({
        'organization': organization,
        'resource' : resource
    })
    .remove(done);
};

/**
 * Registration
 */

UserAuthorization.defaultColumns = 'organization|20%, resource|50%, user|20%, permissions|10%';
UserAuthorization.register();
