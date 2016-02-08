//- **************************************
//- DASHBOARD/jobs
//- **************************************

var keystone = require('keystone'),
    _ = require('underscore'),
    Job = keystone.list('Job');

exports = module.exports = function (req, res) {
    
    var view = new keystone.View(req, res),
        locals = res.locals;
    
    // Set locals
    locals.section = 'dashboard';
    locals.validationErrors = {};

    // Load all organization jobs
    view.query('jobs', Job.model.find()
        .where(locals.orgFilter)
        .populate('orgDepartment', 'name')
        .populate('orgFunction', 'name')
        .populate('reportsTo', 'title altTitle')
        .sort('title')
    );
    
    // Create a new job
    view.on('post', { action: 'create-job' }, function (next) {
        
        // create a new job and save
        var newJob = new Job.model({
            organization: locals.organization, //global organization
            title: req.body.title,
            altTitle: req.body.altTitle,
            code: req.body.code,
            reportsTo: req.body.reportsTo
        });
        
        newJob.save(function (err, doc) {
            if (err) {
                req.flash('error', {
                    type: 'ValidationError',
                    title: 'There was an error creating the job:',
                    list: _.pluck(err.errors, 'message')
                });
                return res.redirect('back');
            };
            
            // create successful!
            req.flash('success', 'Add job successfully completed.');
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
                req.flash('error', 'Cannot find the job profile to delete');
                return next();
            }
            
            // all is well, remove the job
            // note that you need to call remove on the doc so the middleware can be triggered!
            doc.remove(function (err) {
                if (err) {
                    req.flash('error', err);
                    return next();
                }
                
                // delete successful!
                req.flash('success', 'Delete job successfully completed.');
                return res.redirect('back');
            });
        });
    });

    // Render the view
    view.render('dashboard/jobs');
	
};
