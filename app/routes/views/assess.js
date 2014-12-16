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

exports = module.exports = function (req, res) {
    
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
        .where('manager', locals.filters.employee)
        .select('name arName job')
        .populate('job', 'title')
        .sort('name.first name.last')
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
        .sort('name.first name.last')
    );
    
    // Render the view
    view.render('assess');
	
};
