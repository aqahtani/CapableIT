var keystone = require('keystone'),
    Types = keystone.Field.Types,
    qrImage = require('qr-image'),
    uniqueValidator = require('mongoose-unique-validator');

/**
 * Employee Model
 * ==============
 */

var Employee = new keystone.List('Employee', {
    autokey: { path: 'slug', from: 'name', unique: true },
    defaultSort: 'organization orgDepartment orgFunction name',
    drilldown: 'organization orgDepartment orgFunction'
});

Employee.add({
    name: { type: Types.Name, initial: true, required: true, index: true, unique: true },
    arName: { type: Types.Text, initial: true, label: 'Arabic Name', index: true, unique: true },
    empId: { type: Types.Text, initial: true, required: true, index: true, unique: true, label: 'Employee ID' },
    email: { type: Types.Email, initial: true, required: true, index: true, unique: true },	
    telephone: { type: Types.Text }
}, 'Organization', {
    organization: { type: Types.Relationship, ref: 'Organization', required: true, initial: true, index: true },
    orgDepartment: { type: Types.Relationship, ref: 'OrgDepartment', filters: { organization: ':organization' }, initial: true },
    orgFunction: { type: Types.Relationship, ref: 'OrgFunction', filters: { organization: ':organization', department: ':orgDepartment' }, initial: true },
    job: { type: Types.Relationship, ref: 'Job', filters: { organization: ':organization' }, initial: true }
}, 'Education and Certification', {
    english: {
        level: { type: Types.Relationship, ref: 'EnglishLevel' }
    },
    education: {
        field: { type: Types.Text },
        level: { type: Types.Select, options: 'HighSchool, Diploma, Bachelor, Masters, PhD', default: 'Bachelor', index: true }
    },
    certificates: { type: Types.TextArray }
}, 'Other Details', {
    formalTitle: { type: Types.Text },
    photo: { type: Types.CloudinaryImage, autoCleanup : true },
    birthDate: { type: Types.Date },
    bio: { type: Types.Textarea, height: 150 },
    qrCode: { type: String, noedit: true, hidden: true },
});

Employee.defaultColumns = 'organization|10%, name, slug, arName, job, email, orgDepartment, orgFunction';

// relationships
Employee.relationship({ path: 'assessments', ref: 'Assessment', refPath: 'employee' });

// auto create qrqrCode once a new student is created
Employee.schema.pre('save', function (next) {
    if (this.isNew) {
        // qrCode is set by generating a qrqrCode SVG from id
        this.qrCode = qrImage.imageSync(this.id, { type: 'svg' });
    }
    next();
});

/**
 * Plugins
 */
Employee.schema.plugin(uniqueValidator, { message: '{PATH} already exists' });

Employee.register();
