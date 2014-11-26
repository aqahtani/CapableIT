var keystone = require('keystone'),
    _ = require('underscore'),
    Employee = keystone.list('Employee');

exports = module.exports = function (req, res) {
    
    var view = new keystone.View(req, res),
        locals = res.locals;
    
    // Set locals
    locals.section = 'organization';
    locals.filters = {
        employee: req.params.employee || req.user.employee
    };
    locals.data = {
        englishLevels : [],
        employee: null,
        assessments: []
    };
    locals.validationErrors = {};
    
    // Load the current employee
    view.on('init', function (next) {
        
        var async = require("async");
        
        var getEnglishLevels = function (callback) {
            keystone.list('EnglishLevel').model.find().exec(function (err, results) {
                if (err) return callback(err);
                
                callback(null, results);
            });
        };
        
        var getEmployee = function (callback) {
            
            var q = keystone.list('Employee').model.findOne()
                .where(locals.orgFilter)//always apply tenant filter first
                .where({ '_id' : locals.filters.employee })
                .populate('organization orgDepartment orgFunction job english.level');
            
            q.exec(function (err, result) {
                if (err) return callback(err);
                
                if (!result) {
                    // no results
                    // apparantly, user and employee tenants do not match 
                    req.flash('warning', 'We cannot find a matching employee profile');
                    return callback(null);
                }
                
                callback(null, result);
            });
        };
        
        // Load assessments of the current employee
        var getEmpAssessments = function (callback, results) {
            
            var q = keystone.list('Assessment').model.find()
                    .where(locals.orgFilter)//always apply tenant filter first
                    .where('employee', results.employee.id)
                    .populate('doneBy job');
                
            q.exec(function (err, result) {
                if (err) return callback(err);
                callback(null, result);
            });
        };

        async.auto({
            englishLevels : getEnglishLevels,
            employee : getEmployee,
            assessments: [ 'employee', getEmpAssessments]
        }, 
        function (err, results) {
            // All tasks are done now and you have results as an object 
            if (err) {
                req.flash('error', err);
                return next();
            }
            
            // success: set locals for english levels, employee, and assessments
            locals.data.englishLevels = results.englishLevels;
            locals.data.employee = results.employee;
            locals.data.assessments = results.assessments;
            
            // initialize 
            locals.formData = results.employee;
            // reset some nested formData fields to match the form elements
            locals.formData['name.full'] = locals.formData.name.first + ' ' + locals.formData.name.last;
            locals.formData['english.level'] = locals.formData.english.level.id;
            locals.formData['education.field'] = locals.formData.education.field;
            locals.formData['education.level'] = locals.formData.education.level;
            next();
        });
    });
    
    // Updating employee profile
    view.on('post', { action: 'update' }, function (next) {
        
        // set locals for edit form
        locals.formData = req.body || {};
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
                fields: 'name, arName, empId, email, telephone, english.level, education.field, education.level',
                errorMessage: 'There was a problem with your update:'
            }, function (err, result) {
                if (err) {
                    locals.validationErrors = err.errors;
                } else {
                    req.flash('success', 'Update successfully completed.');
                }
                next();
            });

        });

    });
    
    // Render the view
    view.render('employee');
};
