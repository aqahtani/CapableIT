//- **************************************
//- DASHBOARD/jobs
//- **************************************

var keystone = require('keystone'),
    _ = require('underscore'),
    Job = keystone.list('Job'),
    OrgDepartment = keystone.list('OrgDepartment'),
    OrgFunction = keystone.list('OrgFunction');

exports = module.exports = function (req, res) {
    
    var view = new keystone.View(req, res),
        locals = res.locals,
        t = req.t;
    
    // Set locals
    locals.section = 'jobs';
    locals.validationErrors = {};

    // 1. Load all organization jobs
    view.query('jobs', Job.model.find()
        .where(locals.orgFilter)
        .populate('orgDepartment', 'title')
        .populate('orgFunction', 'title')
        .populate('reportsTo', 'title altTitle')
        .sort('title')
    );
    
    // 2. Load all organization departments
    view.query('orgDepts', OrgDepartment.model.find()
        .where(locals.orgFilter)
        .sort('title')
    );
    
    // 3. Load all organization functions
    view.query('orgFuncs', OrgFunction.model.find()
        .where(locals.orgFilter)
        .sort('title')
    );
    
    // Create a new job
    view.on('post', { action: 'create-job' }, function (next) {
        
        // initialize a new job 
        var newJob = new Job.model({
            organization: locals.organization, //global organization
        });
        
        // and save using keystone update handler
        var updater = newJob.getUpdateHandler(req);
        
        updater.process(req.body, {
            flashErrors: true,
            fields: 'title, altTitle, code, reportsTo',
            errorMessage: t('flash.error.create')
        }, function (err, doc) {
            if (err) {
                locals.validationErrors = err.errors;
                return next();
            };
            
            // create successful!
            req.flash('success', t('flash.success.create'));
            return res.redirect('/job/' + doc.id);
        });
        
    });
    
    // DELETE job
    view.on('post', { action: 'delete-job' }, function (next) {
        
        var jobId = req.body.jobId;
        
        Job.model.findOne()
        .where(locals.orgFilter)//always apply tenant filter first
        .where('_id', jobId)
        .exec(function (err, doc) {
            if (err) {
                req.flash('error', err);
                return next();
            }
            
            if (!doc) {
                req.flash('warning', t('flash.warn.nomatch'));
                return next();
            }
            
            // all is well, remove the job
            // note that you need to call remove on the doc so the middleware can be triggered!
            doc.remove(function (err) {
                if (err) {
                    req.flash('error', t('flash.error.delete'));
                    return next();
                }
                
                // delete successful!
                req.flash('success', t('flash.success.delete'));
                return res.redirect('back');
            });
        });
    });
    
    // Change job department assignment
    view.on('post', { action: 'assign-dept' }, function (next) {
        
        // set locals for edit form
        locals.validationErrors = {};
        
        var jobId = req.body.jobId;
        
        // find the job
        Job.model.findOne()
        .where(locals.orgFilter)//always apply tenant filter first
        .where('_id', jobId)
        .exec(function (err, job) {
            if (err) {
                req.flash('error', err);
                return next();
            }
            
            if (!job) {
                // no results 
                req.flash('warning', t('flash.warn.nomatch'));
                return next();
            }
            
            // job found, update it
            var updater = job.getUpdateHandler(req);
            
            updater.process(req.body, {
                flashErrors: true,
                fields: 'orgDepartment, orgFunction',
                errorMessage: t('flash.error.update')
            }, function (err, result) {
                if (err) {
                    locals.validationErrors = err.errors;
                } else {
                    req.flash('success', t('flash.success.update'));
                }
                return res.redirect('back');
            });

        });

    });

    // Render the view
    view.render('dashboard/jobs');
	
};
