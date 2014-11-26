var keystone = require('keystone'),
	async = require('async');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// Set locals
	locals.section = 'job';
    locals.filters = {
		job: req.params.job
	};
    locals.data = {
        job: {}
    };
	
	// Load the current job
	view.on('init', function(next) {
		
		var q = keystone.list('Job').model.findOne()
            .where(locals.orgFilter)//always apply tenant filter first
            .where({ _id: locals.filters.job })
            .populate('organization reportsTo orgDepartment orgFunction jobTasks professional.skills behavioral.skills');
		
        q.exec(function (err, result) {
            if (!err && !result) { // no error and no results?!
                // apparantly, user and org do not match 
                req.flash('error', 'Cannot access this job!');
            }
			locals.data.job = result;
			next(err);
		});
		
	});
	
	// Render the view
	view.render('job');
	
};
