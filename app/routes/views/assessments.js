var keystone = require('keystone'),
    Employee = keystone.list('Employee'),
    Assessment = keystone.list('Assessment');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// Set locals
	locals.section = 'assessments';
    locals.filters = {
		employee: req.user.employee
	};
	
    // 1: Load all assessments done by this employee
    view.query('assessments', Assessment.model.find()
        .where(locals.orgFilter)
        .where('doneBy', locals.filters.employee)
        .select('createdAt status doneBy employee job')
        .sort('-createdAt')
        .populate('doneBy', 'name')
        .populate('employee', 'name')
        .populate('job', 'title')
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
    
    // 4: get all employees
    view.query('employees', Employee.paginate({
        filters: locals.orgFilter, //always apply org filter first
        page: req.query.page || 1,
        perPage: 10,
        maxPages: 10
    })
        .select('name arName job')
        .populate('job', 'title')
        .sort('name.first name.last')
    );

	// Render the view
	view.render('assessments');
	
};
