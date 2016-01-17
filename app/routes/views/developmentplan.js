var keystone = require('keystone'),
    _ = require('underscore'),
    DevelopmentPlan = keystone.list('DevelopmentPlan'),
    DevelopmentActivity = keystone.list('DevelopmentActivity');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// Set locals
	locals.section = 'development';
    locals.filters = {
        developmentplan: req.params.developmentplan
	};
    
    locals.statusOptions = _.pluck(DevelopmentPlan.fields['status'].ops, 'value');

    // initialize edit/post variables
    locals.validationErrors = {};
    
    // 1: get current developmentplan
    view.query('developmentplan', DevelopmentPlan.model.findOne()
            .where(locals.orgFilter)//always apply tenant filter first
            .where({ '_id': locals.filters.developmentplan })
            .populate('organization employee')
    );
    
    // 2: get related development activities
    view.query('activities', DevelopmentActivity.model.find()
            .where(locals.orgFilter)//always apply tenant filter first
            .where({ 'developmentPlan': locals.filters.developmentplan })
            .populate('organization employee developmentPlan method')
            .sort('deadline')
    );
    
    // 3: get all development methods
    view.query('developmentMethods', keystone.list('DevelopmentMethod').model.find());    
    
    /*
     * Manipulate a Development Plan: Update and Delete
     */

    // UPDATE developmentplan
    view.on('post', { action: 'update' }, function (next) {
        
        // set locals for edit form
        locals.validationErrors = {};
        
        // find the development plan
        var q = DevelopmentPlan.model.findOne()
            .where(locals.orgFilter)//always apply org filter first
            .where({ '_id': locals.filters.developmentplan });
        
        q.exec(function (err, developmentplan) {
            if (err) {
                req.flash('error', err);
                return next();
            }
            
            if (!developmentplan) {
                // no results 
                req.flash('warning', 'We cannot find a matching development plan');
                return next();
            }

            // developmentplan found, update it
            var updater = developmentplan.getUpdateHandler(req);
            
            updater.process(req.body, {
                flashErrors: true,
                fields: 'status, period, goals, strengths, weaknesses',
                errorMessage: 'There was a problem with your update:'
            }, function (err, result) {
                if (err) {
                    locals.validationErrors = err.errors;
                } else {
                    req.flash('success', 'Update successfully completed.');
                }
                //next();
                res.redirect('back');
            });

        });
    });
    
    // DELETE developmentplan    
    view.on('post', { action: 'delete' }, function (next) {
        console.log('### Removing the plan ...');
        // remove the development it
        DevelopmentPlan.model.findById(req.body.planId).exec(function (err, developmentplan){
            if (err) {
                req.flash('error', err);
                return next();
            }
            
            if (!developmentplan) {
                req.flash('error', 'Cannot find the development plan to delete');
                return next();
            }
            
            // all is well, remove the development plan
            // note that you need to call remove on the doc so the middleware can be triggered!
            developmentplan.remove(function (err) {
                if (err) {
                    req.flash('error', err);
                    return next();
                }
                
                // delete successful!
                req.flash('success', 'Delete successfully completed.');
                res.redirect('/developmentplans');

            });
            
        });
    });


    /*
     * Manipulate related activities: Create, Update, and Delete
     */
    // Create a single activity that belongs to development plan
    view.on('post', { action: 'create-activity' }, function (next) {
        
        // get the current development plan to attach the activity to it
        var q = DevelopmentPlan.model.findOne()
            .where(locals.orgFilter)//always apply org filter first
            .where({ '_id': locals.filters.developmentplan });
        
        q.exec(function (err, developmentplan) {
            if (err) {
                req.flash('error', err);
                return next();
            }
            
            if (!developmentplan) {
                // no results 
                req.flash('warning', 'We cannot find a matching development plan');
                return next();
            }
            
            // all is well, Go! 
            // create a new activity and save
            var newActivity = new DevelopmentActivity.model({
                organization: developmentplan.organization,
                employee: developmentplan.employee,
                developmentPlan: developmentplan.id,
                title: req.body.title,
                method: req.body.method,
                targetSkill: req.body.targetSkill,
                deadline: req.body.deadline,
                completed: req.body.completed,
                remarks: req.body.remarks
            });
            
            newActivity.save(function (err) {
                if (err) {
                    req.flash('error', err);
                    return next();
                }
                
                // create successful!
                req.flash('success', 'Add activity successfully completed.');
                res.redirect('back');
            });
        });
    });

    // Updating a single activity that belongs to development plan
    view.on('post', { action: 'update-activity' }, function (next) {
        
        // set locals for edit form
        locals.validationErrors = {};
        
        // find the assessment
        var q = DevelopmentActivity.model.findOne()
            .where(locals.orgFilter)//always apply org filter first
            .where({ '_id': req.body.activityId });
        
        q.exec(function (err, developmentactivity) {
            if (err) {
                req.flash('error', err);
                return next();
            }
            
            if (!developmentactivity) {
                // no results 
                req.flash('warning', 'We cannot find a matching development activity');
                return next();
            }
            
            // developmentactivity found, update it
            var updater = developmentactivity.getUpdateHandler(req);
            
            updater.process(req.body, {
                flashErrors: true,
                fields: 'title, method, targetSkill, deadline, completed, remarks',
                errorMessage: 'There was a problem with your update:'
            }, function (err, result) {
                if (err) {
                    locals.validationErrors = err.errors;
                } else {
                    req.flash('success', 'Update activity successfully completed.');
                }
                //next();
                res.redirect('back');
            });

        });

    });
    
    // Delete a single activity that belongs to development plan
    view.on('post', { action: 'delete-activity' }, function (next) {
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
    });
    
	// Render the view
	view.render('developmentplan');	
};
