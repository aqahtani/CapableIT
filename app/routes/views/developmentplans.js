var keystone = require('keystone'),
    Employee = keystone.list('Employee'),
    DevelopmentPlan = keystone.list('DevelopmentPlan');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// Set locals
	locals.section = 'development';
    locals.filters = {
		employee: req.user.employee
	};
	
    // 1: Load all plans for this employee
    view.query('developmentplans', DevelopmentPlan.model.find()
        .where(locals.orgFilter)
        .where('employee', locals.filters.employee)
        .select('createdAt employee status period goals strenghts weaknesses')
        .sort('-createdAt')
        .populate('employee', 'name')
    );
    
    // 2: get current employee
    view.query('employee', Employee.model.findOne()
        .where(locals.orgFilter)//always apply tenant filter first
        .where({ '_id' : locals.filters.employee })
        .select('name arName job')
        .populate('job', 'title')
    );
    
    // 3: get current employee's direct reports    
    view.query('directReports', Employee.model.find()
        .where(locals.orgFilter)//always apply tenant filter first
        .where('manager', locals.filters.employee)
        .select('name arName job')
        .populate('job', 'title')
        .sort('name.first name.last')
    );

	// Render the view
	view.render('developmentplans');
	
};
