var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * OrgDepartment Model
 * ===================
 */

var OrgDepartment = new keystone.List('OrgDepartment', {
    defaultSort: 'organization name',
    drilldown: 'organization'
});

OrgDepartment.add({
    organization: { type: Types.Relationship, ref: 'Organization', required: true, initial: true, index: true },
    name: { type: Types.Text, required: true, initial: true },
    code: { type: Types.Text, required: true, initial: true, uppercase: true },
    color: { type: Types.Color, initial: true },
    description: { type: Types.Textarea }
});

OrgDepartment.relationship({ path: 'functions', ref: 'OrgFunction', refPath: 'department' });
OrgDepartment.relationship({ path: 'jobs', ref: 'Job', refPath: 'orgDepartment' });
OrgDepartment.relationship({ path: 'employees', ref: 'Employee', refPath: 'orgDepartment' });

OrgDepartment.defaultColumns = 'organization, name, color';

OrgDepartment.register();
