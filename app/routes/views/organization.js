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
    locals.data = {
        organization: {},
	};
    
    // Load the current organization
    view.on('init', function (next) {
        var q = keystone.list('Organization').model.findOne()
            .where({ '_id' : locals.filters.organization });

        q.exec(function (err, result) {
            if (err) {
                req.flash('error', err.message);
                return next();
            }

            if (!result) { 
                // no results
                req.flash('warning', 'You are not part of any organization');
                return next();
            }

            locals.data.organization = result;
            next();
        });
		
    });
        
    // Load the relationships and queue a view.query() for each
    view.on('init', function (next) {
        
        if (locals.data.organization) { 
            // get an array of relationships
            var rels = _.values(keystone.list('Organization').relationships);
        
            // push a query on the view for each relationship found
            // maintaining the filters on organization
            _.each(rels, function (rel) {
                view.query(rel.path, keystone.list(rel.ref).model.find()
                    .where(locals.orgFilter)
                    .limit(5))
            });
        }

        next();
    });
    
	// Render the view
	view.render('organization');
	
};
