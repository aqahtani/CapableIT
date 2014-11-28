var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// Set locals
	locals.section = 'jobs';
    locals.data = {
        jobs: []
    };
	
	// Load all organization jobs
	view.on('init', function(next) {
		
		var q = keystone.list('Job').paginate({
            filters: locals.orgFilter, //always apply tenant filter first
            page: req.query.page || 1,
            perPage: 10,
            maxPages: 10
        }).populate('organization reportsTo orgDepartment orgFunction');
		
        q.exec(function (err, result) {
            if (err) {
                req.flash('error', err.message);
                return next();
            }

			locals.data.jobs = result;
			next();
		});
		
	});
	
	// Render the view
	view.render('jobs');
	
};
