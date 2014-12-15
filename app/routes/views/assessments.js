var keystone = require('keystone'),
    Assessment = keystone.list('Assessment');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// Set locals
	locals.section = 'assessments';
    locals.filters = {
		employee: req.user.employee
	};
	
    // Load all assessments done by this employee
    view.query('assessments', Assessment.paginate({
        page: req.query.page || 1,
        perPage: 10,
        maxPages: 10
    })
        .where(locals.orgFilter)
        .where({ 'doneBy': locals.filters.employee })
        .select('createdAt status doneBy employee job')
        .sort('-createdAt')
        .populate('doneBy', 'name')
        .populate('employee', 'name')
        .populate('job', 'title')
    );

	// Render the view
	view.render('assessments');
	
};
