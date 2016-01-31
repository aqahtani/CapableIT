var keystone = require('keystone'),
    Types = keystone.Field.Types,
    uniqueValidator = require('mongoose-unique-validator'),
    _ = require('underscore'),
    UserAuthorization = keystone.list('UserAuthorization');

/**
 * User Model
 * ==========
 */

var User = new keystone.List('User', {
    defaultSort: 'organization name',
});

User.add({
    name: { type: Types.Name, required: true, index: true },
    email: { type: Types.Email, initial: true, required: true, index: { unique: true }, lowercase: true },
    password: { type: Types.Password, initial: true, required: true },
}, 'Organization', {
    organization: { type: Types.Relationship, ref: 'Organization', index: true },
    employee: { type: Types.Relationship, ref: 'Employee', filters: { organization : ':organization' }, index: true }
}, 'Verification', {
    isVerified: { type: Boolean, label: 'Email verified', index: true, default: false }
}, 'Permissions', {
    isAdmin: { type: Boolean, label: 'Can access Keystone', index: true },
    roles: { type: Types.Relationship, ref: 'Role', many: true }
});

// Provide access to Keystone
User.schema.virtual('canAccessKeystone').get(function () {
    return this.isAdmin;
});


/**
 * Relationships
 */

User.relationship({ ref: 'Post', refPath: 'author' });
User.relationship({ ref: 'VerificationToken', refPath: 'user' });
User.relationship({ ref: 'UserAuthorization', refPath: 'user' });

/**
 * Plugins
 */
User.schema.plugin(uniqueValidator, { message: '{PATH} already exists' });

/*
 * Middleware
 */

User.schema.pre('save', function (next) {
    //this.wasNew = this.isNew;
    this.wasEmployeeModified = this.isModified('employee');
    
    // assign 'employee' role if employee is set
    if (this.wasEmployeeModified && this.employee) {
        this.assignRoles(['employee'], function (err, results) {
            if (err) {
                console.log("Error in assignRoles(): %j", err);
                next(err);
            }
            else {
                console.log("Successfully assigned user the following roles: %j", results.assignedRoles);
                next();
            }
        });
    }
    else next();
});

User.schema.post('save', function (user) {
    if (this.wasEmployeeModified && user.employee) {
        
        keystone.list('UserAuthorization').model.authorize(
            user.organization,
            user.id,
            '/employee/' + user.employee,
            ['view', 'edit'], 
            function (err, results) {
                if (err) console.log("Error in authorizing user on his employee profile(): %j", err)
                else console.log("Successfully created a user authorization: %j", results.authorization);
            }
        );
    }
});

// assign user roles given as names: e.g. 'owner', 'employee', ...
User.schema.methods.assignRoles = function (roleNames, done) {
    var user = this;
    var async = require("async");
    
    // this one to get roles
    var getRoles = function (callback) {
        // get all roles 
        keystone.list('Role').model.find().exec(function (err, roles) {
            if (err) return callback(err, null);
            // Async call is done, alert via callback
            callback(null, roles);
        });
    };
    
    var addRoles = function (callback, results) {
        var assignedRoles = [];

        // Assign passed 'roles' to user
        _.each(roleNames, function (roleName) {
            var roleId = _.findWhere(results.roles, { 'name': roleName })._id;
            // check if role already exists?
            var roleExists = _.contains(user.roles, roleId);
            if (!roleExists) {
                user.roles.push(roleId);
                assignedRoles.push(roleName);
            }
        });
        
        callback(null, assignedRoles);
    };
    
    async.auto({
        roles : getRoles,
        assignedRoles : ['roles', addRoles]
    } , done);
}


// create user authorization once a user is linked to employee
User.schema.methods.createAuthorizations = function (done) {
    var user = this;
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
        // get view and edit permission id's
        var viewPermission = _.findWhere(results.permissions, { name: 'view' })._id;
        var editPermission = _.findWhere(results.permissions, { name: 'edit' })._id;

        // build the needed authorizations
        // /employee/:id
        var auths = [
            {
                'organization': user.organization,
                'resource': '/employee/' + user.employee,
                'user': user.id,
                'permissions': [viewPermission, editPermission]
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
}

/* Schema Static Method: findByEmployee()
 * finds a user by his employee id
 * @organization: organization id
 * @employee: employee id (should not be null)
 */ 
User.schema.statics.findByEmployee = function (organization, employee, done) {
    // return null if no organization or employee is given!
    if (!organization || !employee) return done(null);
    
    // else, find the user
    User.model.findOne()
    .where('organization', organization)
    .where('employee', employee)
    .exec(done);
};

/**
 * Registration
 */

User.defaultColumns = 'organization, name, email, employee, roles, isAdmin, isVerified';
User.register();
