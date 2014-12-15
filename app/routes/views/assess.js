/*
 * View for Route: /assess
 * Enables employee to initiate an assessment
 * 
 * */
var keystone = require('keystone'),
    _ = require('underscore'),
    util = require('util'),
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
	
    // 1: get current employee
    view.query('employee', Employee.model.findOne()
                .where(locals.orgFilter)//always apply tenant filter first
                .where({ '_id' : locals.filters.employee })
                .select('name arName job')
                .populate('job', 'title')
    );
    
    // 2: get current employee's direct reports
    view.query('directReports', Employee.model.find()
                .where(locals.orgFilter)//always apply tenant filter first
                .where({ 'manager' : locals.filters.employee })
                .select('name arName job')
                .populate('job', 'title')
    );
    
    // 3: get all employees
    view.query('employees', Employee.paginate({
        filters: locals.orgFilter, //always apply org filter first
        page: req.query.page || 1,
        perPage: 10,
        maxPages: 10
    })
    .select('name arName job')
    .populate('job', 'title')
    );

    //Employee.model.find()
    //            .where(locals.orgFilter)
    //            .select('name arName job')
    //            .populate('job', 'title');


	// Render the view
	view.render('assess');
	
};

// Initialize view for creating a new assessment
//view.on('init', function(next) {

//       var async = require("async");

//       // 1: get current employee
//       var getEmployee = function (callback) {

//           var q = Employee.model.findOne()
//               .where(locals.orgFilter)//always apply tenant filter first
//               .where({ '_id' : locals.filters.employee })
//               .populate('job');

//           q.exec(function (err, emp) {
//               if (err) return callback(err);

//               if (!emp) {
//                   // no results
//                   var e = new Error('Cannot find employee');
//                   return callback(e);
//               }

//               callback(null, emp);
//           });
//       };

//       // 2: get current employee's direct reports
//       var getDirectReports = function (callback) {

//           var q = Employee.model.find()
//               .where(locals.orgFilter)//always apply tenant filter first
//               .where({ 'manager' : locals.filters.employee })
//               .populate('job');

//           q.exec(function (err, emps) {
//               if (err) return callback(err);
//               callback(null, emps);
//           });
//       };

//       async.auto({
//           employee: getEmployee,
//           directReports: getDirectReports
//       } , function (err, results) {
//           if (err) return next(err);

//           locals.data.employee = results.employee;
//           locals.data.directReports = results.directReports;
//           next();
//       });

//});
