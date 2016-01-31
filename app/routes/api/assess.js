/*
 * View for Route: /assess/new
 * Creates a new assessment
 * Returns: JSON
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
    locals.filters = {
        employee: req.user.employee
    };
    
    // initialize data to be returned as JSON
    locals.data = {
        created: false,
        message: '',
        assessment: null
    }
    
    // handle post method
    view.on('post', function (next) {
        if (req.body) {
            var today = new Date();
            var newAssessment = {
                'organization': locals.organization,
                'status': 'draft',
                'doneBy': locals.filters.employee,
                'employee': req.body.employee,
                'job': req.body.job,
                'period': today.getFullYear()
            };
            
            Assessment.model.create(newAssessment, function (err, doc) {
                if (err) {
                    locals.data.message = err.message;
                    return next(err);
                }
                // item created
                locals.data.created = true;
                locals.data.message = 'A new assessment has been created';
                locals.data.assessment = doc.id;

                next();
            });
        }
        else {
            locals.data.message = 'No data submitted!';
            next();
        }
    });
    
    view.render(function (err) {
        res.json(locals.data)
    });

}