var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// Set locals
	locals.section = 'employee';
    locals.filters = {
        organization: req.params.organization,
        employee: req.params.employee,
		assessment: req.params.assessment
	};
    locals.data = {
        assessment: {}
	};
	
	// Load the current assessment
	view.on('init', function(next) {
		
		var q = keystone.list('Assessment').model.findOne()
            .where(locals.orgFilter) //always apply tenant filter first
            .where({ _id: locals.filters.assessment })
            .populate('organization employee doneBy job english.targetLevel english.currentLevel professional.skills behavioral.skills');
		
        q.exec(function (err, result) {
            if (!err && !result) { // no error and no results?!
                // apparantly, user and org do not match 
                req.flash('error', 'Cannot access this assessment!');
            }
			locals.data.assessment = result;
			next(err);
		});
		
	});
	
	// Render the view
	view.render('assessment');
	
};
