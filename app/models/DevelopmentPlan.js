var keystone = require('keystone'),
    Types = keystone.Field.Types,
    uniqueValidator = require('mongoose-unique-validator'),
    _ = require('underscore');

/**
 * DevelopmentMethod Model
 * ================
 */

var DevelopmentMethod = new keystone.List('DevelopmentMethod', {
    map: { name: 'title' },
    autokey: { path: 'slug', from: 'title', unique: true },
    defaultSort: 'title'
});

DevelopmentMethod.add({
    title: { type: Types.Text, initial: true, required: true },
    type: { type: Types.Select, options: 'On-The-Job, Off-The-Job', required: true, default: 'Off-The-Job', index: true },
    description: { type: Types.Textarea, height: 100 },
    remarks: { type: Types.Textarea, height: 50 },
    examples: { type: Types.TextArray }
});

DevelopmentMethod.defaultColumns = 'title, type';
DevelopmentMethod.register();


/**
 * DevelopmentActivity Model
 * ================
 */

var DevelopmentActivity = new keystone.List('DevelopmentActivity', {
    map: { name: 'title' },
    defaultSort: 'organization employee deadline',
    drilldown: 'organization employee developmentPlan'
});

DevelopmentActivity.add({
    organization: { type: Types.Relationship, ref: 'Organization', required: true, initial: true, index: true },
    employee: { type: Types.Relationship, ref: 'Employee', required: true, initial: true, index: true },
    developmentPlan: { type: Types.Relationship, ref: 'DevelopmentPlan', required: true, initial: true, index: true },
    title: { type: Types.Text, initial: true, required: true },
    method: { type: Types.Relationship, ref: 'DevelopmentMethod', initial: true, index: true },
    targetSkill: { type: Types.Text, initial: true, required: true },
    deadline: { type: Types.Date, format: 'YYYY-MM-DD', initial: true, required: true },
    completed: { type: Types.Boolean, default: false, index: true },
    remarks: { type: Types.Textarea, height: 150 },
});

DevelopmentActivity.defaultColumns = 'organization|10%, employee, title, method, targetSkill, deadline, completed';
DevelopmentActivity.register();


/**
 * DevelopmentPlan Model
 * ================
 */

var DevelopmentPlan = new keystone.List('DevelopmentPlan', {
    defaultSort: 'organization -createdAt',
    drilldown: 'organization'
});

DevelopmentPlan.add({
    organization: { type: Types.Relationship, ref: 'Organization', required: true, initial: true },
    employee: { type: Types.Relationship, ref: 'Employee', required: true, initial: true, index: true },
    createdAt: { type: Date, required: true, default: Date.now },
    status: { type: Types.Select, options: 'draft, final, archived', required: true, default: 'draft', index: true },
    // period: indicates the period of assessment such as 2014, 2014, 2015, ...
    period: { type: Types.Text, match: [/^\d\d\d\d$/, "The period has to match a valid year YYYY ({VALUE})"], required: true, initial: true, index: true },
    goals: { type: Types.Textarea, height: 150 },
    strengths: { type: Types.Textarea, height: 150 },
    weaknesses: { type: Types.Textarea, height: 150 },
});

DevelopmentPlan.defaultColumns = 'organization|10%, employee, createdAt, period, status';
DevelopmentPlan.relationship({ path: 'activities', ref: 'DevelopmentActivity', refPath: 'developmentPlan' });


/**
 * Plugins
 */

DevelopmentPlan.schema.pre('save', function (next) {
    var plan = this;
    
    if (this.isNew) {
        var async = require("async");
        // We don't actually execute the async action here
        
        // get user from employee id
        // return error if no user is found (although it should never happen!)
        var getCreatorUser = function (callback) {
            
            keystone.list('User').model.findByEmployee(plan.organization, plan.employee, 
                function (err, user) {
                    if (err) return callback(err, null);
                    if (!user) {
                        var e = new Error('No user associated with creator of development plan');
                        return callback(e, null);
                    };
                    callback(null, user);
            });
        };
        
        // get the user of the direct manager
        // ...
        var getManagerUser = function (callback) {
            keystone.list('Employee').model.findById(plan.employee, function (err, employee) {
                if (err) return callback(err, null);
                if (!employee) return callback(null);
                keystone.list('User').model.findByEmployee(employee.organization, employee.manager, function (err, user) {
                    if (err) return callback(err, null);
                    callback(null, user);
                }
                );
            });
        };

        // assigns the creator full permissions 
        var authorizeCreator = function (callback, results) {
            if (results.creatorUser) {
                keystone.list('UserAuthorization').model.authorize(
                    plan.organization,
                    results.creatorUser._id,
                    '/developmentplan/' + plan.id,
                    ['*'], callback);
            }
            else callback(null);
        };
        
        // assign the manager 'view' and 'edit' permissions
        var authorizeManager = function (callback, results) {
            if (results.managerUser) {
                keystone.list('UserAuthorization').model.authorize(
                    plan.organization,
                    results.managerUser._id,
                    '/developmentplan/' + plan.id,
                    ['view','edit'], callback);
            }
            else {
                callback(null);
            }
        };
        
        async.auto({
            creatorUser: getCreatorUser,
            managerUser: getManagerUser, 
            creatorAuthorization: ['creatorUser', authorizeCreator],
            managerAuthorization: ['managerUser', authorizeManager]
        } , function (err, results) {
            next(err);
        });
    }
    else {
        next();
    }
});

// make sure that associated development activities and authorizations are removed
// when a development plan is removed as well
DevelopmentPlan.schema.post('remove', function (developmentplan) {
    var async = require("async");
    // We don't actually execute the async action here
    
    // remove related acitivities
    var removeActivities = function (callback) {
        keystone.list('DevelopmentActivity').model.find()
        .where({
            'organization': developmentplan.organization,
            'employee': developmentplan.employee,
            'developmentPlan' : developmentplan.id
        })
        .remove(callback);
    };

    // remove related authorizations
    var removeAuthorizations = function (callback) {
        keystone.list('UserAuthorization').model.removeResource(
            developmentplan.organization, 
            '/developmentplan/' + developmentplan.id,
            callback)
    };

    async.parallel([removeActivities, removeAuthorizations]);
});


DevelopmentPlan.register();
