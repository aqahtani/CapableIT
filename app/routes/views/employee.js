var keystone = require('keystone'),
    _ = require('underscore');

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
        employee: {}
        //assessments: []
	};
	
	// Load the current employee
	view.on('init', function(next) {
		
		var q = keystone.list('Employee').model.findOne()
            .where(locals.orgFilter) //always apply tenant filter first
            .where({ slug: locals.filters.employee })
            .populate('organization orgDepartment orgFunction job english.level');
		
        q.exec(function (err, result) {
            if (!err && !result) { // no error and no results?!
                // apparantly, user and employee tenants do not match 
                req.flash('error', 'Cannot access this employee!');
            }
			locals.data.employee = result;
			next(err);
		});
		
    });
    
    //view.query('assessments', keystone.list('Assessment').model.find()        
    //    .where(locals.orgFilter) //always apply tenant filter first
    //    .where({ employee: locals.filters.employee })
    //    .populate('doneBy job')
    //);
    
    // Load the relationships and queue a view.query() for each
    
    view.on('init', function (next) {
    
        if (locals.data.employee) {
            // push a query on the view for each relationship found
            // maintaining the filters on organization and employee
            view.query('assessments', keystone.list('Assessment').model.find()
                .where(locals.orgFilter)//always apply tenant filter first
                .where('employee', locals.data.employee.id)
                .populate('doneBy job')
            );
        }
    
        next();
    });
    

    // Load the relationships and queue a view.query() for each
    
    //view.on('init', function (next) {
        
    //    if (locals.data.employee) {
    //        // get an array of relationships
    //        var rels = _.values(keystone.list('Employee').relationships);
            
    //        // push a query on the view for each relationship found
    //        // maintaining the filters on organization and employee
    //        _.each(rels, function (rel) {
    //            view.query(rel.path, keystone.list(rel.ref).paginate({
    //                    filters: locals.orgFilter,
    //                    page: req.query.page || 1,
    //                    perPage: 5,
    //                    maxPages: 10
    //                })
    //                .where(rel.refPath, locals.data.employee.id)
    //            );
    //        });
    //    }
        
    //    next();
    //});
	
	// Render the view
	view.render('employee');
	
};
