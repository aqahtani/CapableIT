var keystone = require('keystone'),
	Types = keystone.Field.Types,
    uniqueValidator = require('mongoose-unique-validator');

/**
 * OrgDepartment Model
 * ===================
 */

var OrgDepartment = new keystone.List('OrgDepartment', {
    map: { name: 'title' },
    autokey: { path: 'slug', from: 'title', unique: true },
    defaultSort: 'organization name',
    drilldown: 'organization'
});

OrgDepartment.add({
    organization: { type: Types.Relationship, ref: 'Organization', required: true, initial: true, index: true },
    title: { type: Types.Text, required: true, initial: true },
    code: { type: Types.Text, required: true, initial: true, uppercase: true },
    color: { type: Types.Color, initial: true },
    description: { type: Types.Textarea }
});

OrgDepartment.relationship({ path: 'functions', ref: 'OrgFunction', refPath: 'department' });
OrgDepartment.relationship({ path: 'jobs', ref: 'Job', refPath: 'orgDepartment' });
OrgDepartment.relationship({ path: 'employees', ref: 'Employee', refPath: 'orgDepartment' });

OrgDepartment.defaultColumns = 'organization, name, color';

OrgDepartment.register();

/**
 * OrgFunction Model
 * =================
 */

var OrgFunction = new keystone.List('OrgFunction', {
    map: { name: 'title' },
    autokey: { path: 'slug', from: 'title', unique: true },
    defaultSort: 'organization department name',
    drilldown: 'organization department'
});

OrgFunction.add({
    organization: { type: Types.Relationship, ref: 'Organization', required: true, initial: true, index: true },
    title: { type: Types.Text, required: true, initial: true },
    code: { type: Types.Text, required: true, initial: true, uppercase: true },
    department: { type: Types.Relationship, ref: 'OrgDepartment', filters: { organization: ':organization' }, required: true, initial: true, index: true }, 
    description: { type: Types.Textarea }
});

OrgFunction.relationship({ path: 'jobs', ref: 'Job', refPath: 'orgFunction' });
OrgFunction.relationship({ path: 'employees', ref: 'Employee', refPath: 'orgFunction' });

OrgFunction.defaultColumns = 'organization, department, name';

OrgFunction.register();


/**
 * Organization Model
 * ==================
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
Organization.relationship({ path: 'developmentPlans', ref: 'DevelopmentPlan', refPath: 'organization' });
Organization.relationship({ path: 'developmentActivities', ref: 'DevelopmentActivity', refPath: 'organization' });
Organization.relationship({ path: 'roleAuthorizations', ref: 'RoleAuthorization', refPath: 'organization' });
Organization.relationship({ path: 'userAuthorizations', ref: 'UserAuthorization', refPath: 'organization' });

/**
 * Plugins
 */
Organization.schema.plugin(uniqueValidator, { message: '{PATH} already exists' });

Organization.register();
