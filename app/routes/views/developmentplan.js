var keystone = require('keystone'),
    _ = require('underscore'),
    DevelopmentPlan = keystone.list('DevelopmentPlan'),
    DevelopmentActivity = keystone.list('DevelopmentActivity'),
    HardSkillGap = keystone.list('HardSkillGap'),
    SoftSkillGap = keystone.list('SoftSkillGap');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// Set locals
	locals.section = 'development';
    locals.filters = {
        developmentPlan: req.params.developmentplan,
        employee: req.user.employee
    };
    
    locals.statusOptions = _.pluck(DevelopmentPlan.fields['status'].ops, 'value');

    // initialize edit/post variables
    locals.validationErrors = {};
    
    // 1: get current developmentPlan --> moved to 'init' to get related skill gaps 
    //view.query('developmentPlan', DevelopmentPlan.model.findOne()
    //        .where(locals.orgFilter)//always apply tenant filter first
    //        .where({ '_id': locals.filters.developmentPlan })
    //        .populate('organization employee approvedBy')
    //);
    
    // 2: get related development activities
    view.query('activities', DevelopmentActivity.model.find()
            .where(locals.orgFilter)//always apply tenant filter first
            .where({ 'developmentPlan': locals.filters.developmentPlan })
            .populate('organization employee developmentPlan method targetHardSkills targetSoftSkills')
            .sort('deadline')
    );
    
    // 3: get all development methods
    view.query('developmentMethods', keystone.list('DevelopmentMethod').model.find());
    
    // 4: get all hard skills to highlight in development plan
    view.query('hardSkills', keystone.list('HardSkill').model.find());

    // 5: get all soft skills to highlight in development plan
    view.query('softSkills', keystone.list('SoftSkill').model.find());
    
    // 5: get all soft skill gaps to highlight in development plan
    //view.query('softGaps', keystone.list('SoftSkillGap').model.find()
    //    .where(locals.orgFilter)
    //    .where({ 'employee': locals.filters.employee })
    //    .populate('skill')
    //    .sort('-gap')
    //);
    
    view.on('init', function (next) {
        var async = require('async');
        
        // async function to load current development plan
        var getDevelopmentPlan = function (callback) {
            DevelopmentPlan.model.findById(locals.filters.developmentPlan)
                .populate('organization employee approvedBy')
                .exec(callback);
        };
        
        var getHardGaps = function (callback, results) {
            // results contains the development plan
            var empId = results.developmentPlan.employee;

            HardSkillGap.model.find()
                .where(locals.orgFilter)
                .where({ 'employee': empId })
                .populate('skill')
                .sort('-gap')
                .exec(callback)
        };
        
        var getSoftGaps = function (callback, results) {
            // results contains the development plan
            var empId = results.developmentPlan.employee;
            
            SoftSkillGap.model.find()
                .where(locals.orgFilter)
                .where({ 'employee': empId })
                .populate('skill')
                .sort('-gap')
                .exec(callback)
        };

        async.auto({
            developmentPlan: getDevelopmentPlan,
            hardGaps: ['developmentPlan', getHardGaps],
            softGaps: ['developmentPlan', getSoftGaps]
        }, function (err, results) {
            if (err) {
                req.flash('error', err);
                return next();
            };
            
            locals.developmentPlan = results.developmentPlan;
            locals.hardGaps = results.hardGaps;
            locals.softGaps = results.softGaps;
            next();
        });
    });

    /*
     * Manipulate a Development Plan: Update, Delete, and Approve
     */

    // UPDATE developmentPlan
    view.on('post', { action: 'update' }, function (next) {
        
        // set locals for edit form
        locals.validationErrors = {};
        
        // find the development plan
        var q = DevelopmentPlan.model.findOne()
            .where(locals.orgFilter)//always apply org filter first
            .where({ '_id': locals.filters.developmentPlan });
        
        q.exec(function (err, developmentPlan) {
            if (err) {
                req.flash('error', err);
                return next();
            }
            
            if (!developmentPlan) {
                // no results 
                req.flash('warning', 'We cannot find a matching development plan');
                return next();
            }

            // developmentPlan found, update it
            var updater = developmentPlan.getUpdateHandler(req);
            
            // reset approval of the plan upon any edit
            req.body.approved = false;

            updater.process(req.body, {
                flashErrors: true,
                fields: 'status, approved, period, goals, strengths, weaknesses',
                errorMessage: 'There was a problem with your update:'
            }, function (err, result) {
                if (err) {
                    locals.validationErrors = err.errors;
                } else {
                    req.flash('success', 'Update successfully completed.');
                    req.flash('warning', 'Development plan approval has been reset');
                }
                res.redirect('back');
            });

        });
    });
    
    // DELETE developmentPlan    
    view.on('post', { action: 'delete' }, function (next) {
        // remove the development it
        DevelopmentPlan.model.findById(req.body.planId).exec(function (err, developmentPlan){
            if (err) {
                req.flash('error', err);
                return next();
            }
            
            if (!developmentPlan) {
                req.flash('error', 'Cannot find the development plan to delete');
                return next();
            }
            
            // all is well, remove the development plan
            // note that you need to call remove on the doc so the middleware can be triggered!
            developmentPlan.remove(function (err) {
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
    
    // [UN]APPROVE developmentPlan    
    view.on('post', { action: 'approve' }, function (next) {
        
        DevelopmentPlan.model.findById(req.body.planId).exec(function (err, developmentPlan) {
            if (err) {
                req.flash('error', err);
                return next();
            }
            
            if (!developmentPlan) {
                req.flash('error', 'Cannot find the development plan');
                return next();
            }
            
            // all is well, toggle the development plan 'approved' flag, and set/reset approvedBy
            // note that you need to call save on the doc so the middleware can be triggered!
            developmentPlan.approved = !developmentPlan.approved;
            developmentPlan.approvedBy = (developmentPlan.approved ? locals.filters.employee : null);

            developmentPlan.save(function (err) {
                if (err) {
                    req.flash('error', err);
                    return next();
                }
                
                // approved successful!
                req.flash('success', 'Successfully completed.');
                res.redirect('back');
            });
        });
    });

    /*
     * Manipulate related activities: Create, Update, and Delete
     */

    // async functions: 
    //var getDevelopmentPlan = function (callback) { 
    //    DevelopmentPlan.model.findOne()
    //        .where(locals.orgFilter)//always apply org filter first
    //        .where({ '_id': locals.filters.developmentPlan })
    //        .exec(callback);
    //};
    
    var resetDevelopmentPlanApproval = function (callback) {
        DevelopmentPlan.model.findOne()
            .where(locals.orgFilter)//always apply org filter first
            .where({ '_id': locals.filters.developmentPlan })
            .exec(function (err, developmentPlan) {   
                developmentPlan.approved = false;
                developmentPlan.save(callback);
        });
    };
    

    // Create a single activity that belongs to development plan
    view.on('post', { action: 'create-activity' }, function (next) {
        
        // get the current development plan to attach the activity to it
        var q = DevelopmentPlan.model.findOne()
            .where(locals.orgFilter)//always apply org filter first
            .where({ '_id': locals.filters.developmentPlan });
        
        q.exec(function (err, developmentPlan) {
            if (err) {
                req.flash('error', err);
                return next();
            }
            
            if (!developmentPlan) {
                // no results 
                req.flash('warning', 'We cannot find a matching development plan');
                return next();
            }
            
            // all is well, Go! 
            // create a new activity and save
            var newActivity = new DevelopmentActivity.model({
                organization: developmentPlan.organization,
                employee: developmentPlan.employee,
                developmentPlan: developmentPlan.id,
                title: req.body.title,
                method: req.body.method,
                deadline: req.body.deadline,
                completed: req.body.completed,
                targetSkills: {
                    professional: req.body.targetHardSkills,
                    behavioral: req.body.targetSoftSkills
                },
                remarks: req.body.remarks
            });
            
            newActivity.save(function (err) {
                if (err) {
                    // req.flash('error', err);
                    locals.validationErrors = err.errors;
                    req.flash('error', {
                        type: 'ValidationError',
                        title: 'There was an error creating your development activity:',
                        list: _.pluck(err.errors, 'message')
                    });
                    return next();
                }
                
                // create activity successful!
                // reset approval of the development plan
                developmentPlan.approved = false;
                developmentPlan.save(function (err) {
                    req.flash('success', 'Add activity successfully completed.');
                    req.flash('warning', 'Development plan approval has been reset');
                    res.redirect('back');
                });
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
                fields: 'title, method, targetHardSkills, targetSoftSkills, deadline, completed, remarks',
                errorMessage: 'There was a problem with your update:'
            }, function (err, result) {
                if (err) {
                    locals.validationErrors = err.errors;
                    return next();
                };
                
                // update successful!
                resetDevelopmentPlanApproval(function (err) {
                    if (err) {
                        req.flash('error', err);
                        return next();
                    }
                    req.flash('success', 'Update activity successfully completed.');
                    req.flash('warning', 'Development plan approval has been reset');
                    res.redirect('back');
                });
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
            resetDevelopmentPlanApproval(function (err) {
                if (err) {
                    req.flash('error', err);
                    return next();
                } 
                req.flash('success', 'Delete activity successfully completed.');
                req.flash('warning', 'Development plan approval has been reset');
                res.redirect('back');
            });
                
        });
    });
    
	// Render the view
	view.render('developmentplan');	
};
