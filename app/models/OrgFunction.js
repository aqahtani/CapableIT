var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * OrgFunction Model
 * ===================
 */

var OrgFunction = new keystone.List('OrgFunction', {
    defaultSort: 'organization department name',
    drilldown: 'organization department'
});

OrgFunction.add({
    organization: { type: Types.Relationship, ref: 'Organization', required: true, initial: true, index: true },
    name: { type: Types.Text, required: true, initial: true },
    code: { type: Types.Text, required: true, initial: true, uppercase: true },
    department: { type: Types.Relationship, ref: 'OrgDepartment', required: true, initial: true, index: true }, 
    description: { type: Types.Textarea }
});

OrgFunction.relationship({ path: 'jobs', ref: 'Job', refPath: 'orgFunction' });
OrgFunction.relationship({ path: 'employees', ref: 'Employee', refPath: 'orgFunction' });

OrgFunction.defaultColumns = 'organization, department, name';

OrgFunction.register();
