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
	
	// Load the current employee
	view.on('init', function(next) {
        
        // if no employee filter is set, use the current user's employee id
        var empFilter = '';
        if (locals.filters.employee) {
            empFilter = { 'slug' : locals.filters.employee };
        }
        else {
            empFilter = { '_id' : req.user.employee };
        }

		var q = keystone.list('Employee').model.findOne()
            .where(locals.orgFilter) //always apply tenant filter first
            .where(empFilter)
            .populate('organization orgDepartment orgFunction job english.level');
		
        q.exec(function (err, result) {
            if (err) {
                req.flash('error', err);
                return next();
            }

            if (!result) { // no results
                // apparantly, user and employee tenants do not match 
                req.flash('warning', 'We cannot find a matching employee profile');
                return next();
            }
            // employee found, return it
			locals.data.employee = result;
			next();
		});
		
    });
    
    // Load the relationships and queue a view.query() for each
    view.on('init', function (next) {
    
        if (locals.data.employee) {
            // push a query on the view for each relationship found
            // maintaining the filters on organization and employee
            view.query('data.assessments', keystone.list('Assessment').model.find()
                .where(locals.orgFilter)//always apply tenant filter first
                .where('employee', locals.data.employee.id)
                .populate('doneBy job')
            );
        }
    
        next();
    });
    
    // Posting a new a employee profile
    view.on('post', { action: 'update' }, function (next) {
        
        // find the employee using id:
        var q = Employee.model.findOne()
            .where(locals.orgFilter)//always apply tenant filter first
            .where({ '_id': locals.filters.employee });
        
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
	view.render('employee');
};
