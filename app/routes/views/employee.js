var keystone = require('keystone'),
    _ = require('underscore'),
    util = require('util'),
    Employee = keystone.list('Employee');

exports = module.exports = function (req, res) {
    
    var view = new keystone.View(req, res),
        locals = res.locals;
    
    // Set locals
    locals.section = 'organize';
    locals.filters = {
        employee: req.params.employee || req.user.employee
    };
    locals.validationErrors = {};

    /*
    // Cloudinary images are uploaded via the update handeler
    // in case you want direct brower upload, then see:
    // http://cloudinary.com/documentation/node_image_upload#direct_uploading_from_the_browser
    if (keystone.get('cloudinary config')) {
        var cloudinaryUpload = cloudinary.uploader.direct_upload();
        locals.cloudinary = {
            cloud_name: keystone.get('cloudinary config').cloud_name,
            api_key: keystone.get('cloudinary config').api_key,
            timestamp: cloudinaryUpload.hidden_fields.timestamp,
            signature: cloudinaryUpload.hidden_fields.signature,
            prefix: keystone.get('cloudinary prefix') || '',
            folders: keystone.get('cloudinary folders'),
            uploader: cloudinary.uploader
        };
        locals.cloudinary_js_config = cloudinary.cloudinary_js_config();
        locals.cloudinary_cors = '/js/lib/cloundinary/cloudinary_cors.html';
    };
    */

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
        .select('createdAt status prime doneBy employee job professional behavioral')
        .sort('-createdAt')
        .populate('doneBy', 'name')
        .populate('employee', 'name')
        .populate('job', 'title')
        .populate('professional.skills', 'title')
        .populate('behavioral.skills', 'title')
    );
    
    // query all english levels
    view.query('englishLevels', keystone.list('EnglishLevel').model.find());    
    
    /*
     * Manipulate an Employee: Update and Delete
     */

    // UPDATE employee profile
    view.on('post', { action: 'update' }, function (next) {
        
        // set locals for edit form
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
            var updater = emp.getUpdateHandler(req);
            
            updater.process(req.body, {
                flashErrors: true,
                fields: 'name, arName, empId, email, telephone, mobile, english.level, english.test, english.score, education.field, education.level, certificates, bio, photo',
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
    
    // DELETE employee
    view.on('post', { action: 'delete' }, function (next) {
        
        Employee.model.findById(req.body.empId).exec(function (err, employee) {
            if (err) {
                req.flash('error', err);
                return next();
            }
            
            if (!employee) {
                req.flash('error', 'Cannot find the employee profile to delete');
                return next();
            }
            
            // all is well, remove the employee
            // note that you need to call remove on the doc so the middleware can be triggered!
            employee.remove(function (err) {
                if (err) {
                    req.flash('error', err);
                    return next();
                }
                
                // delete successful!
                req.flash('success', 'Delete successfully completed.');
                res.redirect('/employees');

            });
            
        });
    });


    // Render the view
    view.render('employee');
};
