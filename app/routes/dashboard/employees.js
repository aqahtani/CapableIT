//- **************************************
//- DASHBOARD/employees
//- **************************************

var keystone = require('keystone'),
    _ = require('underscore'),
    Employee = keystone.list('Employee'),
    Job = keystone.list('Job');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// Set locals
	locals.section = 'dashboard';
    locals.validationErrors = {};
    
    // 1: load all employees
    view.query('employees', Employee.model.find()
        .where(locals.orgFilter)
        .populate('job', 'title')
        .populate('orgDepartment', 'title')
        .populate('orgFunction', 'title')
        .sort('name.first name.last')
    );
    
    // 2: load all jobs
    view.query('jobs', Job.model.find()
        .where(locals.orgFilter)
        .sort('title')
    );
    
    // Create a new employee
    view.on('post', { action: 'create-employee' }, function (next) {
        
        // create a new employee and save
        var newEmployee = new Employee.model( {
            organization: locals.organization, //global organization
            name: { first: req.body.firstName, last: req.body.lastName },
            arName: req.body.arName,
            empId: req.body.empId,
            email: req.body.email,
            job: req.body.job === '' ? null : req.body.job
        });
        
        newEmployee.save(function (err, doc) {
            if (err) {
                req.flash('error', {
                    type: 'ValidationError',
                    title: 'There was an error creating employee profile:',
                    list: _.pluck(err.errors, 'message')
                });
                return res.redirect('back');
            };
            
            // create successful!
            req.flash('success', 'Add employee successfully completed.');
            return res.redirect('/employee/' + doc.id);
        });
    });

    // Change employee job assignment
    view.on('post', { action: 'assign-job' }, function (next) {
        
        // set locals for edit form
        locals.validationErrors = {};
        
        var empId = req.body.empId;

        // find the employee
        Employee.model.findOne()
        .where(locals.orgFilter)//always apply tenant filter first
        .where('_id', empId)
        .exec(function (err, emp) {
            if (err) {
                req.flash('error', err);
                return next();
            }
            
            if (!emp) {
                // no results 
                req.flash('warning', 'We cannot find a matching employee');
                return next();
            }
            
            // employee found, update it
            var updater = emp.getUpdateHandler(req);
            
            updater.process(req.body, {
                flashErrors: true,
                fields: 'job',
                errorMessage: 'There was a problem with your update:'
            }, function (err, result) {
                if (err) {
                    locals.validationErrors = err.errors;
                } else {
                    req.flash('success', 'Job assignment successfully completed.');
                }
                return res.redirect('back');
            });

        });

    });
    
    // DELETE employee
    view.on('post', { action: 'delete-employee' }, function (next) {
        
        var empId = req.body.empId;

        Employee.model.findOne()
        .where(locals.orgFilter)//always apply tenant filter first
        .where('_id', empId)
        .exec(function (err, employee) {
            if (err) {
                req.flash('error', err);
                return next();
            }
            
            if (!employee) {
                req.flash('error', 'Cannot find the employee profile to delete');
                return next();
            }
            
            // all is well, remove the employee
            // note that you need to call remove on the doc so the middleware can be triggered!
            employee.remove(function (err) {
                if (err) {
                    req.flash('error', err);
                    return next();
                }
                
                // delete successful!
                req.flash('success', 'Delete successfully completed.');
                return res.redirect('back');

            });
            
        });
    });

	// Render the view
	view.render('dashboard/employees');
	
};
