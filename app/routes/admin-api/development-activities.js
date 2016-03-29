/*
 * View for Route: /api/development-activities
 * Returns a list of all development activities in JSON or CSV format
 * */
var keystone = require('keystone'),
    _ = require('underscore'),
    json2csv = require('json2csv'),
    DevelopmentActivity = keystone.list('DevelopmentActivity');

exports = module.exports = function (req, res) {
    
    var view = new keystone.View(req, res),
        locals = res.locals,
        t = req.t;
    
    // initialize data to be returned as JSON
    locals.data = {
        activities_count : 0,
        activities : []
    };
    
    // Load all development activities for the current organization
    view.on('init', function (next) {
        
        var q = DevelopmentActivity.model.find()
        .where(locals.orgFilter)
        .select('employee developmentPlan title method deadline duration progress targetHardSkills targetSoftSkills remarks')
        .populate('employee', 'name')
        .populate('developmentPlan', 'createdAt period status approvedBy')
        .populate('method', 'title')
        .populate('targetHardSkills', 'title')
        .populate('targetSoftSkills', 'title')
        .sort('deadline');

        q.exec(function (err, results) {
            locals.data.activities = results;
            next(err);
        });
		
    });
    
    // Load count of development activities for the current organization
    view.on('init', function (next) {
        
        var q = DevelopmentActivity.model.find()
        .where(locals.orgFilter)
        .count();
        
        q.exec(function (err, results) {
            locals.data.activities_count = results;
            next(err);
        });
		
    });

    view.on('get', { format: 'csv' }, function (next) {
        
        // construct the fields, the top row of the output 
        var fields = [
            { label: 'Title', value: 'title' }, 
            {
                label: 'Employee', 
                value: function (row) {
                    return row.employee.name.first + ' ' + row.employee.name.last;
                }
            },
            // Development Plan: createdAt period status approvedBy
            {
                label: 'Plan Date', 
                value: function (row) { return row.developmentPlan._.createdAt.format('YYYY-MM-DD') }
            },
            { label: 'Plan Period', value: 'developmentPlan.period' },
            { label: 'Plan Status', value: 'developmentPlan.status' },
            {
                label: 'Plan Approved', 
                value: function (row) { return row.developmentPlan.approvedBy.length ? 'Yes' : 'No' }
            },
            // Development Method
            { label: 'Method', value: 'method.title' }, 
            {
                label: 'Deadline', 
                value: function (row) { return row._.deadline.format('YYYY-MM-DD') }
            }, 
            { label: 'Duration', value: 'duration' },
            { label: 'Progress', value: 'progress' }, 
            {
                label: 'Completed', 
                value: function (row) { return row.completed ? 'Yes' : 'No' }
            }
        ];

        var data = locals.data.activities;

        json2csv({ data: data, fields: fields }, function (err, csv) {
            if (err) {
                res.statusCode = 500;
                return res.end(err.message);
            }
            res.attachment('development-activities.csv');
            return res.send(csv);
        });
    });

    view.render(function (err) {
        //locals.data.activities = locals.activities;
        //locals.data.activities_count = locals.activitiesCount;
        res.json(locals.data);
    });

}