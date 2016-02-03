var keystone = require('keystone'),
    Employee = keystone.list('Employee');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// Set locals
	locals.section = 'dashboard';
    locals.filters = {
		//employee: req.user.employee
	};
    
    // 1: load all employees
    view.query('employees', Employee.model.find()
        .where(locals.orgFilter)
        .populate('job', 'title')
        .populate('orgDepartment', 'name')
        .populate('orgFunction', 'name')
        .sort('name.first name.last')
    );
    
	// Render the view
	view.render('dashboard/employees');
	
};
