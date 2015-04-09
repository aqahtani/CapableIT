var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * HardSkillGap Model
 * ====================
 */

var HardSkillGap = new keystone.List('HardSkillGap');

HardSkillGap.add({
    // references to where this gap came from
    organization: { type: Types.Relationship, ref: 'Organization', required: true, initial: true, index: true },
    employee: { type: Types.Relationship, ref: 'Employee', filters: { organization: ':organization' }, index: true },    
    job: { type: Types.Relationship, ref: 'Job', filters: { organization: ':organization' }, index: true },
    orgDepartment: { type: Types.Relationship, ref: 'OrgDepartment', filters: { organization: ':organization' }, index: true },
    orgFunction: { type: Types.Relationship, ref: 'OrgFunction', filters: { organization: ':organization' }, index: true },
    skill: { type: Types.Relationship, ref: 'HardSkill', index: true },
    assessment: { type: Types.Relationship, ref: 'Assessment', filters: { organization: ':organization' }, index: true },
    // job info
    jobLevel: { type: Types.Number },
    jobRole: { type: Types.Text },
    isSenior: { type: Types.Boolean },
    // gap info
    period: { type: Types.Text, index: true },
    gap: { type: Types.Number },
    current: { type: Types.Number },
    target: { type: Types.Number }
});

HardSkillGap.defaultColumns = 'organization, employee, job, assessment, period, skill, current, target, gap';

HardSkillGap.register();

/**
 * SoftSkillGap Model
 * ====================
 */

var SoftSkillGap = new keystone.List('SoftSkillGap');

SoftSkillGap.add({
    // references to where this gap came from
    organization: { type: Types.Relationship, ref: 'Organization', required: true, initial: true, index: true },
    employee: { type: Types.Relationship, ref: 'Employee', filters: { organization: ':organization' }, index: true },    
    job: { type: Types.Relationship, ref: 'Job', filters: { organization: ':organization' }, index: true },
    orgDepartment: { type: Types.Relationship, ref: 'OrgDepartment', filters: { organization: ':organization' }, index: true },
    orgFunction: { type: Types.Relationship, ref: 'OrgFunction', filters: { organization: ':organization' }, index: true },
    skill: { type: Types.Relationship, ref: 'SoftSkill', index: true },
    assessment: { type: Types.Relationship, ref: 'Assessment', filters: { organization: ':organization' }, index: true },
    // job info
    jobLevel: { type: Types.Number },
    jobRole: { type: Types.Text },
    isSenior: { type: Types.Boolean },
    // gap info
    period: { type: Types.Text, index: true },
    gap: { type: Types.Number },
    current: { type: Types.Number },
    target: { type: Types.Number }
});

SoftSkillGap.defaultColumns = 'organization, employee, job, assessment, period, skill, current, target, gap';

SoftSkillGap.register();

/**
 * EnglishSkillGap Model
 * ====================
 */

var EnglishSkillGap = new keystone.List('EnglishSkillGap');

EnglishSkillGap.add({
    // references to where this gap came from
    organization: { type: Types.Relationship, ref: 'Organization', required: true, initial: true, index: true },
    employee: { type: Types.Relationship, ref: 'Employee', filters: { organization: ':organization' }, index: true },    
    job: { type: Types.Relationship, ref: 'Job', filters: { organization: ':organization' }, index: true },
    orgDepartment: { type: Types.Relationship, ref: 'OrgDepartment', filters: { organization: ':organization' }, index: true },
    orgFunction: { type: Types.Relationship, ref: 'OrgFunction', filters: { organization: ':organization' }, index: true },
    skill: { type: Types.Text, default: 'English Language Skills', index: true },
    assessment: { type: Types.Relationship, ref: 'Assessment', filters: { organization: ':organization' }, index: true },
    // job info
    jobLevel: { type: Types.Number },
    jobRole: { type: Types.Text },
    isSenior: { type: Types.Boolean },
    // gap info
    period: { type: Types.Text, index: true },
    gap: { type: Types.Number },
    current: { type: Types.Number },
    target: { type: Types.Number }
});

EnglishSkillGap.defaultColumns = 'organization, employee, job, assessment, period, skill, current, target, gap';

EnglishSkillGap.register();
