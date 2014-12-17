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
    telephone: { type: Types.Text },
    mobile: { type: Types.Text }
}, 'Organization', {
    organization: { type: Types.Relationship, ref: 'Organization', required: true, initial: true, index: true },
    job: { type: Types.Relationship, ref: 'Job', filters: { organization: ':organization' }, initial: true },
    orgDepartment: { type: Types.Relationship, ref: 'OrgDepartment', filters: { organization: ':organization' } },
    orgFunction: { type: Types.Relationship, ref: 'OrgFunction', filters: { organization: ':organization' } },
    manager: { type: Types.Relationship, ref: 'Employee', filters: { organization: ':organization' }, index: true}
}, 'Education and Certification', {
    english: {
        level: { type: Types.Relationship, ref: 'EnglishLevel' },
        test: { type: Types.Select, options: 'TOEFL IBT, IELTS' },
        score: { type: Types.Number }
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
Employee.relationship({ path: 'directReports', ref: 'Employee', refPath: 'manager' });
Employee.relationship({ path: 'assessments', ref: 'Assessment', refPath: 'employee' });
Employee.relationship({ path: 'user', ref: 'User', refPath: 'employee' });

// auto create qrqrCode once a new student is created
Employee.schema.pre('save', function (next) {
    if (this.isNew) {
        // qrCode is set by generating a qrqrCode SVG from id
        this.qrCode = qrImage.imageSync(this.id, { type: 'svg' });
    }
    next();
});

// set/reset manager if job is changed
Employee.schema.pre('save', function (next) {
    var employee = this;
    
    if (this.isModified('job')) {
        if (!this.job) {
            // job has been reset to none
            this.manager = null;
            this.orgDepartment = null;
            this.orgFunction = null;
            return next();
        }
        
        // we have a new job that is set
        this.setManager(this.job, function (err, results) {
            if (err) {
                console.log("Error in setManager(): %j", err);
                return next(err);
            }
            if (!results.employee) {
                console.log("Warning: setManager() coudn't find a manager for : %j", employee._id);
                return next(err);
            }
            // manager set successfully
            console.log("Successfully set employee's manager to : %j", results.employee.manager);
            next();
        });
    }
    else next();
});

// assign user roles given as names: e.g. 'edit', 'view', ...
Employee.schema.methods.setManager = function (job, done) {
    var employee = this;
    
    // otherwise, go and find the manager of the assigned job
    var async = require("async");
    
    // this one to get job reporting
    var getJob = function (callback) {
        // get job reporting 
        keystone.list('Job').model.findOne()
        .where({ '_id' : job })
        .exec(function (err, j) {
            if (err) return callback(err, null);
            if (!j) return callback(null);
            // Async call is done, alert via callback
            callback(null, j);
        });
    };
    
    // this one is to set employee's dept and function 
    var setDeptFunction = function (callback, results) {
        // incoming is the job
        employee.orgDepartment = results.job.orgDepartment;
        employee.orgFunction = results.job.orgFunction;
        callback(null, employee.orgDepartment);
    };
    
    // this one to get manager (employee) from job.reportsTo
    var getManager = function (callback, results) {
        // incoming is the employee's job
        var mgrJob = results.job.reportsTo;
        
        if (mgrJob) {
            // get employee of the managing job
            keystone.list('Employee').model.findOne()
                        .where({ 'job' : mgrJob })
                        .exec(function (err, mgr) {
                if (err) return callback(err, null);
                // Async call is done, alert via callback
                callback(null, mgr);
            });
        }
        else return callback(null);
    };
    
    // this one is to set employee's manager 
    var setManager = function (callback, results) {
        var mgr = results.manager;
        // incoming is the manager
        if (!mgr) {
            employee.manager = null;
            return callback(null);
        }
        // otherwise, go set employee's manager
        employee.manager = mgr._id;
        callback(null, employee);
    };
    
    async.auto({
        job : getJob,
        dept : ['job', setDeptFunction],
        manager: ['job', getManager],
        employee : ['manager', setManager]
    }, done);
};

/**
 * Plugins
 */
Employee.schema.plugin(uniqueValidator, { message: '{PATH} already exists' });

Employee.register();
