var keystone = require('keystone'),
    _ = require('underscore'),
    util = require('util'),
    Employee = keystone.list('Employee');

exports = module.exports = function (req, res) {
    
    var view = new keystone.View(req, res),
        locals = res.locals,
        t = req.t;
    
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

    // query current employee
    view.query('employee', keystone.list('Employee').model.findOne()
        .where(locals.orgFilter)//always apply tenant filter first
        .where('_id', locals.filters.employee)
        .populate('organization orgDepartment orgFunction')
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
                req.flash('warning', t('flash.warn.nomatch'));
                return next();
            }
            
            // employee found, update it
            var updater = emp.getUpdateHandler(req);
            
            updater.process(req.body, {
                flashErrors: true,
                fields: 'name, arName, empId, email, telephone, mobile, birthDate, formalTitle, english.test, english.score, education.field, education.level, certificates, bio, photo',
                errorMessage: t('flash.error.update')
            }, function (err, result) {
                if (err) {
                    locals.validationErrors = err.errors;
                } else {
                    req.flash('success', t('flash.success.update'));
                }
                //next();
                return res.redirect('back');
            });

        });

    });

    // Render the view
    view.render('employee');
};
