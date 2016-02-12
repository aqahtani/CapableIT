var keystone = require('keystone'),
    Types = keystone.Field.Types,
    uniqueValidator = require('mongoose-unique-validator'),
    _ = require('underscore'),
    util = require('util');


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
    employee: { type: Types.Relationship, ref: 'Employee', filters: { organization: ':organization' }, required: true, initial: true, index: true },
    developmentPlan: { type: Types.Relationship, ref: 'DevelopmentPlan', filters: { organization: ':organization' }, required: true, initial: true, index: true },
    title: { type: Types.Text, initial: true, required: true },
    method: { type: Types.Relationship, ref: 'DevelopmentMethod', initial: true, required: true, index: true },
    deadline: { type: Types.Date, format: 'YYYY-MM-DD', initial: true, required: true },
    duration: { type: Types.Number, min: 0.5, initial: true, required: true },
    progress: { type: Types.Number, min: 0, max: 100, default: 0, required: true, index: true },
    targetHardSkills: { type: Types.Relationship, ref: 'HardSkill', many: true },
    targetSoftSkills: { type: Types.Relationship, ref: 'SoftSkill', many: true },
    remarks: { type: Types.Textarea, height: 150 },
});

DevelopmentActivity.schema.virtual('completed').get(function () {
    // completed is whether or not progress is 100%
    return this.progress === 100;
});

DevelopmentActivity.schema.virtual('completed').set(function (value) {
    // set progress to 100% when completed is true 
    if (value) this.set('progress', 100);
});

DevelopmentActivity.defaultColumns = 'organization|10%, employee, title, method, deadline, duration, progress, completed';

// PRE MIDDLEWARE 
// ==============

DevelopmentActivity.schema.pre('save', function (next) {
    // approval of related development plan gets reset upon changes on:
    // activity title, method, duration, and deadline.
    this.needsApprovalReset = 
        this.isNew ||
        this.isModified('title') || 
        this.isModified('method') ||
        this.isModified('duration') ||
        this.isModified('deadline');
    next();
});

// POST MIDDLEWARE 
// ===============

// a function with a callback to reset approval of the related development plan 
var resetDevelopmentPlanApproval = function (activity, callback) {
    DevelopmentPlan.model.findOne()
        .where({ 'organization': activity.organization })//always apply org filter first
        .where({ '_id': activity.developmentPlan })
        .exec(function (err, developmentPlan) {
        if (err) return callback(err);
        
        developmentPlan.approved = false;
        developmentPlan.save(callback);
    });
};

DevelopmentActivity.schema.post('save', function (activity) {
    // only reset approvals if needed
    if (activity.needsApprovalReset) {
        resetDevelopmentPlanApproval(activity, function (err) {
            if (err) return console.log("Error in resetting approvals: %j", err);
            // else, all is well, take no action
        });
    };
});

DevelopmentActivity.schema.post('remove', function (activity) {
    // always reset approvals upon activity removal  
    resetDevelopmentPlanApproval(activity, function (err) {
        if (err) return console.log("Error in resetting approvals: %j", err);
        // else, all is well, take no action
    });
});

DevelopmentActivity.register();


/**
 * DevelopmentPlan Model
 * =====================
 */

var DevelopmentPlan = new keystone.List('DevelopmentPlan', {
    defaultSort: 'organization -createdAt',
    drilldown: 'organization'
});

DevelopmentPlan.add({
    organization: { type: Types.Relationship, ref: 'Organization', required: true, initial: true },
    employee: { type: Types.Relationship, ref: 'Employee', filters: { organization: ':organization' }, required: true, initial: true, index: true },
    createdAt: { type: Date, required: true, default: Date.now },
    status: { type: Types.Select, options: 'draft, final, archived', required: true, default: 'draft', index: true },
    //approved: { type: Types.Boolean, default: false, index: true },
    approvedBy: { type: Types.Relationship, ref: 'Employee', filters: { organization: ':organization' }, many: true },
    // period: indicates the period of assessment such as 2014, 2015, ...
    period: { type: Types.Text, match: [/^\d\d\d\d$/, "The period has to match a valid year YYYY ({VALUE})"], required: true, initial: true, index: true },
    goals: { type: Types.Textarea, height: 150 },
    strengths: { type: Types.Textarea, height: 150 },
    weaknesses: { type: Types.Textarea, height: 150 },
});

DevelopmentPlan.defaultColumns = 'organization|10%, employee, createdAt, period, status, approvedBy';
DevelopmentPlan.relationship({ path: 'activities', ref: 'DevelopmentActivity', refPath: 'developmentPlan' });

DevelopmentPlan.schema.virtual('approved').get(function () {
    // approved whenever the approval list is not empty
    return !_.isEmpty(this.approvedBy);
});

DevelopmentPlan.schema.virtual('approved').set(function (value) {
    // reset approval list on approved = false
    if (!value) this.set('approvedBy', []);
});


/**
 * Plugins
 */

// PRE MIDDLEWARE 
// ==============

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
        
        // get the user of the director (manager of the manager)
        var getDirectorUser = function (callback) {
            keystone.list('Employee').model.findById(plan.employee, function (err, employee) {
                if (err) return callback(err, null);
                if (!employee) return callback();
                
                // you have the employee, get his manager!
                keystone.list('Employee').model.findById(employee.manager, function (err, manager) {
                    if (err) return callback(err, null);
                    if (!manager) return callback();
                    
                    // you have the manager, get user of his manager
                    keystone.list('User').model.findByEmployee(manager.organization, manager.manager, function (err, directorUser) {
                        if (err) return callback(err);
                        callback(null, directorUser);
                    });
                });
            });
        };

        // assigns the creator permissions 
        var authorizeCreator = function (callback, results) {
            if (results.creatorUser) {
                keystone.list('UserAuthorization').model.authorize(
                    plan.organization,
                    results.creatorUser._id,
                    '/developmentplan/' + plan.id,
                    ['view', 'edit', 'delete'], callback);
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
                    ['approve', 'view', 'edit'], callback);
            }
            else {
                callback();
            }
        };
        
        // assign the director 'view' and 'edit' permissions
        var authorizeDirector = function (callback, results) {
            if (results.directorUser) {
                keystone.list('UserAuthorization').model.authorize(
                    plan.organization,
                    results.directorUser._id,
                    '/developmentplan/' + plan.id,
                    ['approve', 'view', 'edit'], callback);
            }
            else {
                callback();
            }
        };

        async.auto({
            creatorUser: getCreatorUser,
            managerUser: getManagerUser,
            directorUser: getDirectorUser, 
            creatorAuthorization: ['creatorUser', authorizeCreator],
            managerAuthorization: ['managerUser', authorizeManager],
            directorAuthorization: ['directorUser', authorizeDirector]
        } , function (err, results) {
            next(err);
        });
    }
    else {
        next();
    }
});


// POST MIDDLEWARE 
// ===============

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
