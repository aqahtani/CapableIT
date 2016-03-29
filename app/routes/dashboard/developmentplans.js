var keystone = require('keystone'),
    Employee = keystone.list('Employee'),
    DevelopmentPlan = keystone.list('DevelopmentPlan'),
    DevelopmentActivity = keystone.list('DevelopmentActivity');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// Set locals
	locals.section = 'developmentplans';
    
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
    
    // 3: Load all development activities
    view.query('activities', DevelopmentActivity.model.find()
        .where(locals.orgFilter)
        .populate('organization employee developmentPlan method targetHardSkills targetSoftSkills')
        .sort('deadline')
    );

	// Render the view
	view.render('dashboard/developmentplans');
	
};
