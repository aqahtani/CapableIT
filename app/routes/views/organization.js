var keystone = require('keystone'),
    _ = require('underscore'),
	async = require('async');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// Init locals
    locals.section = 'organization';
    locals.filters = {
        organization: req.params.organization
    };
    locals.data = {
        organization: {},
        jobs: []
	};
    
    // Load the current organization
    view.on('init', function (next) {
        var q = keystone.list('Organization').model.findOne()
            .where({ slug: locals.filters.organization });

        q.exec(function (err, result) {
            if (!err && !result) { // no error and no results?!
                // apparantly, user and school tenants do not match 
                req.flash('error', 'You do not have any organizations!');
            }
            locals.data.organization = result;
            next(err);
        });
		
    });
        
    // Load the relationships and queue a view.query() for each
    view.on('init', function (next) {
        
        if (locals.data.organization) { 
            // get an array of relationships
            var rels = _.values(keystone.list('Organization').relationships);
        
            // push a query on the view for each relationship found
            // maintaining the filters on school and tenant
            _.each(rels, function (rel) {
                view.query(rel.path, keystone.list(rel.ref).paginate({
                    filters: locals.orgFilter,
                    page: req.query.page || 1,
                    perPage: 8,
                    maxPages: 10
                })
                );
            });
        }

        next();
    });
    
	// Render the view
	view.render('organization');
	
};
