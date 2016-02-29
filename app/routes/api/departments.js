/*
 * View for Route: /api/departments
 * Returns a list of departments in JSON
 * */
var keystone = require('keystone'),
    _ = require('underscore'),
    util = require('util'),
    OrgDepartment = keystone.list('OrgDepartment');

exports = module.exports = function (req, res) {
    
    var view = new keystone.View(req, res),
        locals = res.locals,
        t = req.t;
    
    // Set locals
    locals.filters = {
        q: new RegExp('.*' + req.query.q + '.*', 'i')
    };
    
    // initialize data to be returned as JSON
    locals.data = {
        department_count: 0,
        departments: []
    };
    
    // Load all organization departments
    view.query('orgDepts', OrgDepartment.model.find()
        .where(locals.orgFilter)
        //.where('title', locals.filters.q)
        .sort('title')
    );
    
    view.query('orgDeptsCount', OrgDepartment.model.find()
        .where(locals.orgFilter)
        .count()
    );

    view.render(function (err) {
        locals.data.departments = locals.orgDepts;
        locals.data.department_count = locals.orgDeptsCount;
        res.json(locals.data);
    });

}