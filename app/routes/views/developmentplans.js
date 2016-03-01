var keystone = require('keystone'),
    Employee = keystone.list('Employee'),
    DevelopmentPlan = keystone.list('DevelopmentPlan'),
    _ = require('underscore');


exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
        locals = res.locals,
        t = req.t;
	
	// Set locals
	locals.section = 'develop';
    locals.filters = {
		employee: req.user.employee
    };
    locals.validationErrors = {};

    locals.data = {
        directReports : [],
        secondReports : [],
        reportsDevelopmentPlans : []
    };
	
    // 1: Load all plans for this employee
    view.query('developmentplans', DevelopmentPlan.model.find()
        .where(locals.orgFilter)
        .where('employee', locals.filters.employee)
        .sort('-createdAt')
        .populate('employee', 'name arName')
        .populate('approvedBy', 'name arName')
    );
    
    // 2: get current employee
    view.query('employee', Employee.model.findOne()
        .where(locals.orgFilter)//always apply tenant filter first
        .where({ '_id' : locals.filters.employee })
        .select('name arName job')
        .populate('job', 'title')
    );
    
    // 3: get current employee's direct reports    
    //view.query('directReports', Employee.model.find()
    //    .where(locals.orgFilter)//always apply tenant filter first
    //    .where('manager', locals.filters.employee)
    //    .select('name arName job')
    //    .populate('job', 'title')
    //    .sort('name.first name.last')
    //);
    
    // 4: load all development plans of direct reports
    view.on('init', function (next) {
        
        var async = require('async');
        
        // async function to load all direct reports
        var getDirectReports = function (callback) {
            Employee.model.find()
                .where(locals.orgFilter)//always apply tenant filter first
                .where('manager', locals.filters.employee)
                .select('name arName job')
                .populate('job', 'title')
                .sort('name.first name.last')
                .exec(callback);
        };
        
        // async function to load all 2nd level reports
        var getSecondReports = function (callback, results) {
            // results.directReports contains all employees reporting to this one
            var empIds = _.pluck(results.directReports, '_id');
            
            Employee.model.find()
                .where(locals.orgFilter)//always apply tenant filter first
                .where('manager').in(empIds)
                .select('name arName job')
                .populate('job', 'title')
                .sort('name.first name.last')
                .exec(callback);
        };

        // async function to load all development plans of direct reports
        var getDevelopmentPlans = function (callback, results) {
            // results.directReports contains all employees reporting to this one
            // results.secondReports contains all 2nd level reports
            var empIds = _.union(_.pluck(results.directReports, '_id'), _.pluck(results.secondReports, '_id'));
            
            DevelopmentPlan.model.find()
                .where(locals.orgFilter)//always apply tenant filter first
                .where('employee').in(empIds)
                .where('status', 'final')
                .populate('employee', 'name arName')
                .populate('approvedBy', 'name arName')
                .exec(callback);
        };

        async.auto({
            directReports: getDirectReports,
            secondReports: ['directReports', getSecondReports],
            developmentPlans: ['directReports', 'secondReports', getDevelopmentPlans]
        }, function (err, results) {
            if (err) {
                req.flash('error', err);
                return next();
            };

            locals.data.directReports = results.directReports;
            locals.data.secondReports = results.secondReports;
            locals.data.reportsDevelopmentPlans = results.developmentPlans;
            next();
        });		
    });
    
    // Create a new development plan
    view.on('post', { action: 'create-developmentplan' }, function (next) {
        
        // create a new development plan and use update handler
        var newPlan = new DevelopmentPlan.model({
            organization: locals.organization, //global organization
            employee: req.user.employee // current user employee id
        });
        var updater = newPlan.getUpdateHandler(req);
        
        updater.process(req.body, {
            flashErrors: true,
            fields: 'period, goals, strengths, weaknesses',
            errorMessage: t('flash.error.create')
        }, function (err, doc) {
            if (err) {
                locals.validationErrors = err.errors;
                return next();
            };

            // create successful!
            req.flash('success', t('flash.success.create'));
            return res.redirect('/developmentplan/' + doc.id);
        });

    });

	// Render the view
	view.render('developmentplans');
	
};
