var keystone = require('keystone'),
    Employee = keystone.list('Employee'),
    DevelopmentPlan = keystone.list('DevelopmentPlan');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// Set locals
	locals.section = 'dashboard';
    
    // 1: Load all development plans
    view.query('developmentPlans', DevelopmentPlan.model.find()
        .where(locals.orgFilter)
        .populate('approvedBy', 'name arName')
        .sort('-createdAt')
    );
    
    // 2: load all employees
    view.query('employees', Employee.model.find()
        .where(locals.orgFilter)
        .select('name arName job')
        .populate('job', 'title')
        .sort('name.first name.last')
    );


	// Render the view
	view.render('dashboard/developmentplans');
	
};
