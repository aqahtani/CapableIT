var keystone = require('keystone'),
    _ = require('underscore'),
    Assessment = keystone.list('Assessment');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// Set locals
	locals.section = 'assess';
    locals.filters = {
		assessment: req.params.assessment
	};
    
    locals.statusOptions = _.pluck(Assessment.fields['status'].ops, 'value');

    // initialize edit/post variables
    locals.validationErrors = {};
    
    // 1: query current assessment 
    view.query('assessment', Assessment.model.findOne()
            .where(locals.orgFilter)//always apply tenant filter first
            .where({ '_id': locals.filters.assessment })
            .populate('organization employee doneBy job english.targetLevel english.currentLevel professional.skills behavioral.skills')
    );
    
    // 2: get skill levels and labels
    view.query('hardlevels', keystone.list('HardLevel').model.find().sort('grade'));
    view.query('softlevels', keystone.list('SoftLevel').model.find().sort('grade'));
    view.query('englishlevels', keystone.list('EnglishLevel').model.find().sort('grade'));
    
    // Updating assessment
    view.on('post', { action: 'update' }, function (next) {
        
        // set locals for edit form
        locals.validationErrors = {};
        
        // find the assessment
        var q = Assessment.model.findOne()
            .where(locals.orgFilter)//always apply org filter first
            .where({ '_id': locals.filters.assessment });
        
        q.exec(function (err, assessment) {
            if (err) {
                req.flash('error', err);
                return next();
            }
            
            if (!assessment) {
                // no results 
                req.flash('warning', 'We cannot find a matching assessment');
                return next();
            }

            // assessment found, update it
            var updater = assessment.getUpdateHandler(req);
            
            updater.process(req.body, {
                flashErrors: true,
                fields: 'status, overview, knowledge, experience, english.currentLevel, professional.currentLevels, behavioral.currentLevels',
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
    
    // Analyse assessment: basically extracting gaps 
    view.on('post', { action: 'analyze' }, function (next) {
        // find the assessment
        var q = Assessment.model.findOne()
            .where(locals.orgFilter)//always apply org filter first
            .where({ '_id': locals.filters.assessment });
        
        q.exec(function (err, assessment) {
            if (err) {
                req.flash('error', err);
                return next();
            }
            
            if (!assessment) {
                // no results 
                req.flash('warning', 'We cannot find a matching assessment');
                return next();
            }
            
            // check to see if the assessment has already been analyzed!
            if (assessment.analyzed) {
                req.flash('info', 'Assessment has already been analyzed');
                return next();
            }

            // assessment found, extract gaps from it
            assessment.extractGaps(function (err, result) {
                if (err) {
                    req.flash('error', err);
                } else {
                    req.flash('success', 'Assessment has been analyzed successfully.');
                }
                //next();
                res.redirect('back');
            });
        });
    });
    
    // Reset assessment analysis: basically reseting all related gaps 
    view.on('post', { action: 'unanalyze' }, function (next) {
        // find the assessment
        var q = Assessment.model.findOne()
            .where(locals.orgFilter)//always apply org filter first
            .where({ '_id': locals.filters.assessment });
        
        q.exec(function (err, assessment) {
            if (err) {
                req.flash('error', err);
                return next();
            }
            
            if (!assessment) {
                // no results 
                req.flash('warning', 'We cannot find a matching assessment');
                return next();
            }
            
            // check to see if the assessment has already been analyzed!
            if (!assessment.analyzed) {
                req.flash('info', 'Assessment has has not yet been analyzed');
                return next();
            }
            
            // assessment found, reset its gaps
            assessment.resetGaps(function (err, result) {
                if (err) {
                    req.flash('error', err);
                } else {
                    req.flash('success', 'Assessment has been reset successfully.');
                }
                next();
                //res.redirect('back');
            });
        });
    });

	// Render the view
	view.render('assessment');	
};
