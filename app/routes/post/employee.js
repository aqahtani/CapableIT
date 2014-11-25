var keystone = require('keystone'),
    _ = require('underscore'),
    Employee = keystone.list('Employee');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// Set locals
	locals.section = 'organization';
    locals.filters = {
        organization: req.params.organization,
        employee: req.params.employee
	};
    locals.data = {
        employee: null,
        assessments: []
    };
    
    // updating?
    locals.formData = req.body || {};
    locals.validationErrors = {};
	
    // Updating employee profile
    view.on('post', { action: 'update' }, function (next) {
        
        // find the employee using id:
        var q = Employee.model.findOne()
            .where(locals.orgFilter)//always apply tenant filter first
            .where({ 'slug': locals.filters.employee });
        
        q.exec(function (err, emp) {
            if (err) {
                req.flash('error', err);
                return next();
            }
            
            if (!emp)
            {
                // no results
                // apparantly, user and employee tenants do not match 
                req.flash('warning', 'We cannot find a matching employee profile');
                return next();
            }

            // employee found, update it
            //var newEmployee = new User.model(),
            updater = emp.getUpdateHandler(req);
            
            updater.process(req.body, {
                flashErrors: true,
                fields: 'arName',
                errorMessage: 'There was a problem with your update:'
            }, function (err, result) {
                if (err) {
                    locals.validationErrors = err.errors;
                } else {
                    req.flash('success', 'Update successfully completed.');
                }
                next();
            });

        });

    });

	// Render the view
	view.render('post/employee');
};
