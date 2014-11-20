var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
    locals.section = 'home';
    locals.data = {
        organization: {}
    };
    
    // Load the organization information
    view.on('init', function (next) {
        // loadup the organization if the user has one
        if (locals.orgId) {
            var q = keystone.list('Organization').model.findOne()
            .where({ _id : locals.orgId });
            
            q.exec(function (err, result) {
                if (!err && !result) {
                    // no error and no results?!
                    // apparantly, user and employee tenants do not match 
                    req.flash('info', 'You do not have any organizations');
                }
                locals.data.organization = result;
                next(err);
            });
        }
        else {
            next();
        }
    });
	
	// Render the view
	view.render('index');
	
};
