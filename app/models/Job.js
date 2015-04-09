var keystone = require('keystone'),
    Types = keystone.Field.Types,
    qrImage = require('qr-image');

/**
 * Job Model
 * ==========
 */

var Job = new keystone.List('Job', {
    map: { name: 'title' },
    autokey: { path: 'slug', from: 'title', unique: true },
    defaultSort: 'organization orgDepartment orgFunction title',
    drilldown: 'organization orgDepartment orgFunction'
});

Job.add({
    organization: { type: Types.Relationship, ref: 'Organization', required: true, initial: true, index: true },
    code: { type: Types.Text, initial: true, index: true, unique: true },
    title: { type: Types.Text, initial: true, required: true, index: true },
    altTitle: { type: Types.Text, initial: true, index: true, label: 'Alternative Title' },
    reportsTo: { type: Types.Relationship, ref: 'Job', filters: { organization: ':organization' }, initial: true  },
    qrCode: { type: String, noedit: true, hidden: true },
    role: { type: Types.Select, options: 'General Manager, Director, Manager, Architect, Engineer, Analyst, Specialist, Administrator', index: true },
    level: { type: Types.Number, index: true },
    senior: { type: Types.Boolean, index: true },
    orgDepartment: { type: Types.Relationship, ref: 'OrgDepartment', filters: { organization: ':organization' }, initial: true, label: 'Department' },
    orgFunction: { type: Types.Relationship, ref: 'OrgFunction', filters: { organization: ':organization', department: ':orgDepartment' }, initial: true, label: 'Function' }
}, 'Responsibilities', {
    jobTasks: { type: Types.Relationship, ref: 'JobTask', filters: { organization: ':organization' }, many: true },
    authorities: { type: Types.TextArray }
}, 'Job Context', {
    environment: { type: Types.Text },
    audience: { type: Types.Text },
    internal: { type: Types.Text, label: 'Internal Interactions' },
    external: { type: Types.Text, label: 'External Interactions' }
}, 'Capabilities', {
    english: {
        level: { type: Types.Relationship, ref: 'EnglishLevel' }
    },
    knowledge: { type: Types.Textarea },
    experience: { type: Types.Textarea, label: 'Experience and Qualifications' },
    professional: {
        skills: { type: Types.Relationship, ref: 'HardSkill', many: true },
        levels: { type: Types.NumberArray }
    },
    behavioral: {
        skills: { type: Types.Relationship, ref: 'SoftSkill', many: true },
        levels: { type: Types.NumberArray }
    }
});

Job.relationship({ path: 'directReports', ref: 'Job', refPath: 'reportsTo' });
Job.relationship({ path: 'employees', ref: 'Employee', refPath: 'job' });

Job.defaultColumns = 'organization|10%, code, title, slug, reportsTo, orgDepartment, orgFunction';

// auto create qrcode once a new student is created
Job.schema.pre('save', function (next) {
    if (this.isNew) {
        // code is set by generating a qrcode SVG from id
        this.qrCode = qrImage.imageSync(this.id, { type: 'svg' });
    }
    next();
});

Job.register();
