var keystone = require('keystone'),
    _ = require('underscore'),
    DevelopmentPlan = keystone.list('DevelopmentPlan');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// Set locals
	locals.section = 'develop';
    
    // initialize edit/post variables
    locals.validationErrors = {};
    
    // Create a new development plan
    view.on('post', { action: 'create' }, function (next) {
        
        // create a new activity and save
        var newPlan = new DevelopmentPlan.model({
            organization: locals.organization, //global organization
            employee: req.user.employee, // current user employee id
            period: req.body.period,
            goals: req.body.goals,
            strengths: req.body.strengths,
            weaknesses: req.body.weaknesses
        });
            
        newPlan.save(function (err) {
            if (err) {
                req.flash('error', {
                    type: 'ValidationError',
                    title: 'There was an error creating your development plan:',
                    list: _.pluck(err.errors, 'message')
                });
                return res.redirect('back');
            }
                
            // create successful!
            req.flash('success', 'Add development plan successfully completed.');
            return res.redirect('back');
        });
    });
    
	// Render the view
	view.render('developmentplans');	
};
