var keystone = require('keystone'),
    Job = keystone.list('Job'),
    OrgDepartment = keystone.list('OrgDepartment'),
    OrgFunction = keystone.list('OrgFunction'),
    Employee = keystone.list('Employee'),
    Assessment = keystone.list('Assessment'),
    DevelopmentPlan = keystone.list('DevelopmentPlan');

exports = module.exports = function (req, res) {
    
    var view = new keystone.View(req, res),
        locals = res.locals;
    
    locals.section = 'dashboard';
    
    // 1. Load all organization jobs
    view.query('jobs', Job.model.find()
        .where(locals.orgFilter)
        .populate('orgDepartment', 'title')
        .populate('orgFunction', 'title')
        .populate('reportsTo', 'title altTitle')
        .sort('title')
    );
    
    // 2. Load all organization departments
    view.query('orgDepts', OrgDepartment.model.find()
        .where(locals.orgFilter)
        .sort('title')
    );
    
    // 3. Load all organization functions
    view.query('orgFuncs', OrgFunction.model.find()
        .where(locals.orgFilter)
        .sort('title')
    );
    
    // 4: load all employees
    view.query('employees', Employee.model.find()
        .where(locals.orgFilter)
        .populate('job', 'title')
        .populate('orgDepartment', 'title')
        .populate('orgFunction', 'title')
        .sort('name.first name.last')
    );
    
    // 5: Load all assessments
    view.query('assessments', Assessment.model.find()
        .where(locals.orgFilter)
        .where('status', 'final')
        .select('createdAt status prime period doneBy employee job')
        .sort('-createdAt')
        .populate('doneBy', 'name')
        .populate('job', 'title')
    );

    // 6: Load all development plans
    view.query('developmentPlans', DevelopmentPlan.model.find()
        .where(locals.orgFilter)
        .where('status', 'final')
        .populate('approvedBy', 'name arName')
        .sort('-createdAt')
    );
    
    // Render the view
    view.render('dashboard/home');
	
};
