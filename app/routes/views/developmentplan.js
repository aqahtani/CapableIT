var keystone = require('keystone'),
    _ = require('underscore'),
    DevelopmentPlan = keystone.list('DevelopmentPlan'),
    DevelopmentActivity = keystone.list('DevelopmentActivity'),
    HardSkillGap = keystone.list('HardSkillGap'),
    SoftSkillGap = keystone.list('SoftSkillGap');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
        locals = res.locals,
        t = req.t;
	
	// Set locals
	locals.section = 'develop';
    locals.filters = {
        developmentPlan: req.params.developmentplan,
        employee: req.user.employee
    };
    
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
            DevelopmentPlan.model.findOne()
            .where(locals.orgFilter) //always apply tenant filter first
            .where('_id', locals.filters.developmentPlan)
            .populate('organization employee approvedBy')
            .exec(function (err, developmentPlan) {
                if (err || !developmentPlan) return callback(t('flash.warn.nomatch'));
                // development plan found, return it
                callback(null, developmentPlan);
            });
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
                return res.redirect('/developmentplans');
            };
            
            locals.developmentPlan = results.developmentPlan;
            locals.hardGaps = results.hardGaps;
            locals.softGaps = results.softGaps;
            return next();
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
                req.flash('warning', t('flash.warn.nomatch'));
                return next();
            }

            // developmentPlan found, update it
            var updater = developmentPlan.getUpdateHandler(req);
            
            // reset approvals of the plan upon any edit on major fields
            req.body.approvedBy = [];

            updater.process(req.body, {
                flashErrors: true,
                fields: 'status, approvedBy, period, goals, strengths, weaknesses',
                errorMessage: t('flash.error.update')
            }, function (err, result) {
                if (err) {
                    locals.validationErrors = err.errors;
                } else {
                    req.flash('success', t('flash.success.update'));
                }
                return res.redirect('back');
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
                req.flash('warning', t('flash.warn.nomatch'));
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
                req.flash('success', t('flash.success.delete'));
                return res.redirect('/developmentplans');

            });
            
        });
    });
    
    // APPROVE developmentPlan    
    view.on('post', { action: 'approve' }, function (next) {
        var planId = req.body.planId;
        var employee = locals.filters.employee;
        
        DevelopmentPlan.model.findOne()
        .where(locals.orgFilter)//always apply org filter first
        .where({ '_id': planId })
        .exec(function (err, developmentPlan) {
            if (err) {
                req.flash('error', err);
                return next();
            }
            
            if (!developmentPlan) {
                req.flash('warning', t('flash.warn.nomatch'));
                return next();
            }
            
            // all is well, update approval list of the development plan 
            // note that you need to call save on the doc so the middleware can be triggered!
            
            // only push the employee if he didn't approve already
            var exists = _.find(developmentPlan.approvedBy, function (value) { return _.isEqual(value, employee); });
            
            if (exists) {
                // already approved!
                req.flash('info', t('flash.info.approved'));
                return res.redirect('back');
            };
            
            // else, go and update approvals lis
            developmentPlan.approvedBy.push(employee);
                
            developmentPlan.save(function (err) {
                if (err) {
                    req.flash('error', err);
                    return next();
                };
                    
                // approve successful!
                req.flash('success', t('flash.success.approve'));
                return res.redirect('back');
            });
            
        });
    });
    
    // RESET Approval of developmentPlan    
    view.on('post', { action: 'unapprove' }, function (next) {
        var planId = req.body.planId;
        var employee = locals.filters.employee;
        
        DevelopmentPlan.model.findOne()
        .where(locals.orgFilter)//always apply org filter first
        .where({ '_id': planId })
        .exec(function (err, developmentPlan) {
            if (err) {
                req.flash('error', err);
                return next();
            }
            
            if (!developmentPlan) {
                req.flash('warning', t('flash.warn.nomatch'));
                return next();
            }
            
            // all is well, unapprove the development plan 
            // note that you need to call save on the doc so the middleware can be triggered!
            
            // remove this employee from approvals list
            // simple equality doesn't work on ObjectId's 
            // that's why I'm using isEqual() to compare contents of two object ids
            developmentPlan.approvedBy = _.reject(developmentPlan.approvedBy, function (value) { return _.isEqual(value, employee); });
            
            developmentPlan.save(function (err) {
                if (err) {
                    req.flash('error', err);
                    return next();
                }
                
                // approved successful!
                req.flash('success', t('flash.success.unapprove'));
                return res.redirect('back');
            });
        });
    });


    /*
     * Manipulate related activities: Create, Update, and Delete
     */   

    // Create a single activity that belongs to development plan
    view.on('post', { action: 'create-activity' }, function (next) {
        
        // set locals for edit form
        locals.validationErrors = {};

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
                req.flash('warning', t('flash.warn.nomatch'));
                return next();
            }
            
            // all is well, Go!
            // inistialize a new development activity  
            var newActivity = new DevelopmentActivity.model({
                organization: developmentPlan.organization,
                employee: developmentPlan.employee,
                developmentPlan: developmentPlan.id
            });
            
            // and use keystone update handler to create it!
            var updater = newActivity.getUpdateHandler(req);
            
            updater.process(req.body, {
                flashErrors: true,
                fields: 'title, method, targetHardSkills, targetSoftSkills, deadline, duration, progress, remarks',
                errorMessage: t('flash.error.create')
            }, function (err, result) {
                if (err) {
                    locals.validationErrors = err.errors;
                    return next();
                };
                // else, create is successful
                req.flash('success', t('flash.success.create'));
                return res.redirect('back');
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
                req.flash('warning', t('flash.warn.nomatch'));
                return next();
            }
            
            // developmentactivity found, update it
            var updater = developmentactivity.getUpdateHandler(req);
            
            // make sure that target skills are set to empty if not submitted
            if (!req.body.targetHardSkills) req.body.targetHardSkills = [];
            if (!req.body.targetSoftSkills) req.body.targetSoftSkills = [];

            updater.process(req.body, {
                flashErrors: true,
                fields: 'title, method, targetHardSkills, targetSoftSkills, deadline, duration, progress, remarks',
                errorMessage: t('flash.error.update')
            }, function (err, result) {
                if (err) {
                    locals.validationErrors = err.errors;
                    return next();
                };
                // else, update is successful
                req.flash('success', t('flash.success.update'));
                return res.redirect('back');
            });

        });

    });
    
    // Delete a single activity that belongs to development plan
    view.on('post', { action: 'delete-activity' }, function (next) {
        // find the activity
        DevelopmentActivity.model.findOne()
        .where(locals.orgFilter)//always apply org filter first
        .where({ '_id': req.body.activityId })
        .exec(function (err, activity) {
            if (err) {
                req.flash('error', err);
                return next();
            };
            
            if (!activity) {
                req.flash('warning', t('flash.warn.nomatch'));
                return next();
            };
            // remove it
            activity.remove(function (err) {
                if (err) {
                    req.flash('error', err);
                    return next();
                };

                // remove successful!
                req.flash('success', t('flash.success.delete'));
                return res.redirect('back');
            }); 
        });
    });
    
	// Render the view
	view.render('developmentplan');	
};
