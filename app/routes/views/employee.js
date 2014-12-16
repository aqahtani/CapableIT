var keystone = require('keystone'),
    _ = require('underscore'),
    util = require('util'),
    Employee = keystone.list('Employee');

exports = module.exports = function (req, res) {
    
    var view = new keystone.View(req, res),
        locals = res.locals;
    
    // Set locals
    locals.section = 'employees';
    locals.filters = {
        employee: req.params.employee || req.user.employee
    };
    //locals.data = {
    //    englishLevels : [],
    //    employee: null,
    //    assessments: []
    //};
    locals.validationErrors = {};
    //locals.formData = {};
    
    // get education.level and english.test options from list fileds options
    locals.eduLevelOptions = _.pluck(keystone.list('Employee').fields['education.level'].ops, 'value');
    locals.engTestOptions = _.pluck(keystone.list('Employee').fields['english.test'].ops, 'value');
    
    // query current employee
    view.query('employee', keystone.list('Employee').model.findOne()
        .where(locals.orgFilter)//always apply tenant filter first
        .where('_id', locals.filters.employee)
        .populate('organization orgDepartment orgFunction english.level')
        .populate('job', 'code title altTitle')
        .populate('manager', 'name arName')
    );
    
    // query employee's assessments
    view.query('assessments', keystone.list('Assessment').model.find()
        .where(locals.orgFilter)//always apply tenant filter first
        .where('employee', locals.filters.employee)
        .where('status', 'final')
        .select('createdAt status doneBy employee job')
        .sort('-createdAt')
        .populate('doneBy', 'name')
        .populate('employee', 'name')
        .populate('job', 'title')
    );
    
    // query all english levels
    view.query('englishLevels', keystone.list('EnglishLevel').model.find());
    
    // Load the current employee
    //view.on('init', function (next) {
    
    //    var async = require("async");
    
    //    var getEnglishLevels = function (callback) {
    //        keystone.list('EnglishLevel').model.find().exec(function (err, results) {
    //            if (err) return callback(err);
    
    //            callback(null, results);
    //        });
    //    };
    
    //    var getEmployee = function (callback) {
    
    //        var q = keystone.list('Employee').model.findOne()
    //            .where(locals.orgFilter)//always apply tenant filter first
    //            .where({ '_id' : locals.filters.employee })
    //            .populate('organization orgDepartment orgFunction job english.level');
    
    //        q.exec(function (err, result) {
    //            if (err) return callback(err);
    
    //            if (!result) {
    //                // no results
    //                var e = new Error('Cannot find employee');
    //                return callback(e);
    //            }
    
    //            callback(null, result);
    //        });
    //    };
    
    //    // Load assessments of the current employee
    //    var getEmpAssessments = function (callback, results) {
    //        var q = keystone.list('Assessment').model.find()
    //                .where(locals.orgFilter)//always apply tenant filter first
    //                .where('employee', results.employee.id)
    //                .populate('doneBy job');
    
    //        q.exec(function (err, result) {
    //            if (err) return callback(err);
    //            callback(null, result);
    //        });
    //    };
    
    //    async.auto({
    //        englishLevels : getEnglishLevels,
    //        employee : getEmployee,
    //        assessments: ['employee', getEmpAssessments]
    //    }, 
    //    function (err, results) {
    //        // All tasks are done now and you have results as an object 
    //        if (err) {
    //            req.flash('error', err.message);
    //            return next();
    //        }
    
    //        // get education.level and english.test options from list fileds options
    //        locals.data.eduLevelOptions = _.pluck(keystone.list('Employee').fields['education.level'].ops, 'value');
    //        locals.data.engTestOptions = _.pluck(keystone.list('Employee').fields['english.test'].ops, 'value');
    
    //        // success: set locals for english levels, employee, and assessments
    //        locals.data.englishLevels = results.englishLevels;
    //        locals.data.employee = results.employee;
    //        locals.data.assessments = results.assessments;
    
    //        // initialize 
    //        locals.formData = results.employee;
    //        // reset some nested formData fields to match the form elements
    //        locals.formData['name.full'] = locals.formData.name.first + ' ' + locals.formData.name.last;
    //        locals.formData['english.level'] = locals.formData.english.level ? locals.formData.english.level.id : '';
    //        locals.formData['english.test'] = locals.formData.english.test;
    //        locals.formData['english.score'] = locals.formData.english.score;
    //        locals.formData['education.field'] = locals.formData.education.field;
    //        locals.formData['education.level'] = locals.formData.education.level;
    //        next();
    //    });
    //});
    
    // Updating employee profile
    view.on('post', { action: 'update' }, function (next) {
        
        // set locals for edit form
        //locals.formData = req.body || {};
        locals.validationErrors = {};
        
        // find the employee
        var q = Employee.model.findOne()
            .where(locals.orgFilter)//always apply tenant filter first
            .where({ '_id': locals.filters.employee });
        
        q.exec(function (err, emp) {
            if (err) {
                req.flash('error', err);
                return next();
            }
            
            if (!emp) {
                // no results 
                req.flash('warning', 'We cannot find a matching employee profile');
                return next();
            }
            
            // employee found, update it
            updater = emp.getUpdateHandler(req);
            
            updater.process(req.body, {
                flashErrors: true,
                fields: 'name, arName, empId, email, telephone, english.level, english.test, english.score, education.field, education.level, certificates, bio',
                errorMessage: 'There was a problem with your update:'
            }, function (err, result) {
                if (err) {
                    locals.validationErrors = err.errors;
                } else {
                    req.flash('success', 'Update successfully completed.');
                }
                //next();
                res.redirect('back');
            });

        });

    });
    
    // Render the view
    view.render('employee');
};
