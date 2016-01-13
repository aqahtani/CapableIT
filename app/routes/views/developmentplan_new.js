var keystone = require('keystone'),
    _ = require('underscore'),
    DevelopmentPlan = keystone.list('DevelopmentPlan');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// Set locals
	locals.section = 'development';
    
    // initialize edit/post variables
    locals.validationErrors = {};
    
    // Create a new development plan
    view.on('post', { action: 'create' }, function (next) {
        
        // create a new activity and save
        var newPlan = new DevelopmentPlan.model({
            organization: locals.orgId, //global orgId
            employee: req.user.employee, // current user employee id
            period: req.body.period,
            goals: req.body.goals,
            strengths: req.body.strengths,
            weaknesses: req.body.weaknesses
        });
            
        newPlan.save(function (err) {
            if (err) {
                req.flash('error', err);
                return next();
            }
                
            // create successful!
            req.flash('success', 'Add development plan successfully completed.');
            res.redirect('back');
        });
    });

    
    // Delete a single activity that belongs to development plan
    /*view.on('post', { action: 'delete-activity' }, function (next) {
        // find the assessment, and remove it
        DevelopmentActivity.model.findById(req.body.activityId)
            .remove(function (err) {
            if (err) {
                req.flash('error', err);
                return next();
            }
            
            // delete successful!
            req.flash('success', 'Delete activity successfully completed.');
            res.redirect('back');
        });
    });*/
    
	// Render the view
	view.render('developmentplans');	
};
