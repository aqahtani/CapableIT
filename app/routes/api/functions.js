/*
 * View for Route: /api/departments
 * Returns a list of departments in JSON
 * */
var keystone = require('keystone'),
    _ = require('underscore'),
    util = require('util'),
    OrgFunction = keystone.list('OrgFunction');

exports = module.exports = function (req, res) {
    
    var view = new keystone.View(req, res),
        locals = res.locals,
        t = req.t;
    
    // Set locals
    locals.filters = {
        q: new RegExp('.*' + req.query.q + '.*', 'i'),
        department: req.query.department
    };
    
    // initialize data to be returned as JSON
    locals.data = {
        function_count: 0,
        functions: []
    };
    
    view.query('orgFuncs', OrgFunction.model.find()
        .where(locals.orgFilter)
        //.where('title', locals.filters.q)
        .sort('title')
    );
    
    view.query('orgFuncsFiltered', OrgFunction.model.find()
        .where(locals.orgFilter)
        .where('department', locals.filters.department)
        .sort('title')
    );

    view.query('orgFuncsCount', OrgFunction.model.find()
        .where(locals.orgFilter)
        .count()
    );

    view.render(function (err) {
        locals.data.functions = locals.orgFuncs;
        locals.data.functions_filtered = locals.orgFuncsFiltered;
        locals.data.function_count = locals.orgFuncsCount;
        res.json(locals.data);
    });

}