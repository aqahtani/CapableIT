var keystone = require('keystone'),
    _ = require('underscore'),
	async = require('async');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// Init locals
    locals.section = 'organization';
    locals.filters = {
        organization: req.params.organization || locals.orgId
    };
    
    // Load the current organization
    view.query('organization', keystone.list('Organization').model.findOne()
            .where({ '_id' : locals.filters.organization })
    );
            
    // query all jobs
    view.query('jobs', keystone.list('Job').model.find()
        .where(locals.orgFilter) //always apply tenant filter first
        .limit(7)
        .populate('organization orgDepartment orgFunction')
        .populate('reportsTo', 'code title altTitle')
        .sort('title')
    );
    
    // query all employees
    view.query('employees', keystone.list('Employee').model.find()
        .where(locals.orgFilter)//always apply tenant filter first
        .limit(7)
        .populate('organization orgDepartment orgFunction')
        .populate('job', 'code title altTitle')
        .populate('manager', 'name arName')
        .sort('name.first name.last')
    );

	// Render the view
	view.render('organization');
	
};

//// Load the relationships and queue a view.query() for each
//view.on('init', function (next) {

//    if (locals.data.organization) { 
//        // get an array of relationships
//        var rels = _.values(keystone.list('Organization').relationships);

//        // push a query on the view for each relationship found
//        // maintaining the filters on organization
//        _.each(rels, function (rel) {
//            view.query(rel.path, keystone.list(rel.ref).model.find()
//                .where(locals.orgFilter)
//                .limit(5))
//        });
//    }

//    next();
//});
