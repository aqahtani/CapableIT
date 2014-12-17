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
                fields: 'name, arName, empId, email, telephone, mobile, english.level, english.test, english.score, education.field, education.level, certificates, bio, birthDate',
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
