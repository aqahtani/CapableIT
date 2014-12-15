var keystone = require('keystone'),
    _ = require('underscore'),
    Assessment = keystone.list('Assessment');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// Set locals
	locals.section = 'assessments';
    locals.filters = {
		assessment: req.params.assessment
	};
    
    locals.statusOptions = _.pluck(Assessment.fields['status'].ops, 'value');

    // initialize edit/post variables
    locals.validationErrors = {};
    
    // query current assessment 
    view.query('assessment', Assessment.model.findOne()
            .where(locals.orgFilter)//always apply tenant filter first
            .where({ '_id': locals.filters.assessment })
            .populate('organization employee doneBy job english.targetLevel english.currentLevel professional.skills behavioral.skills')
    );
    
    // query all english levels
    view.query('englishLevels', keystone.list('EnglishLevel').model.find());
    
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
	
	// Render the view
	view.render('assessment');
	
};
