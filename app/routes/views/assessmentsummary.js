var keystone = require('keystone'),
    Employee = keystone.list('Employee'),
    Assessment = keystone.list('Assessment');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// Set locals
	locals.section = 'dashboard';
    locals.filters = {
		employee: req.user.employee
	};
    
    // 1: Load all assessments
    view.query('assessments', Assessment.model.find()
        .where(locals.orgFilter)
        //.where('doneBy', locals.filters.employee)
        .where('status', 'final')
        .select('createdAt status prime period doneBy employee job')
        .sort('-createdAt')
        .populate('doneBy', 'name')
        //.populate('employee', 'name')
        .populate('job', 'title')
    );
    
    // 2: load all employees
    view.query('employees', Employee.model.find()
        .where(locals.orgFilter)
        .select('name arName job')
        .populate('job', 'title')
        .sort('name.first name.last')
    );
    
    // Extracting gaps from assessment
    view.on('post', { action: 'analyzeall' }, function (next) {    
        // find all assessments that can be analyzed: 
        // i.e. prime and not anlyzed before
        var q = Assessment.model.find()
            .where(locals.orgFilter)//always apply org filter first
            .where('status', 'final')
            .where('prime', true)
            .where('analyzed', false)
            .select('id');

        q.exec(function (err, assessments) {
            if (err) {
                req.flash('error', err);
                return next();
            }
            
            if (!assessments.length) {
                req.flash('info', 'Cannot find assessments to analyze (prime and not analyzed before)');
                return next();
            }
            
            // assessments found, extract gaps from each
            var async = require("async");
            async.each(assessments, function (a, callback) {                
                // analyze assessment 'a'
                Assessment.model.findById(a.id, function (err, assessment) {
                    assessment.extractGaps(callback);
                });
                
            }, function (err) {
                // if any of the calls produced an error, err would equal that error
                if (err) {
                    // One of the iterations produced an error.
                    // All processing will now stop.
                    req.flash('error', 'Analysis aborted due to a failed assessment');
                    next(err);
                } else {
                    req.flash('success', 'All assessments have been analyzed successfully');
                    next();
                }
            });
        });
    });
    
    // Reset analysis: practically deleting all skill gaps, and 
    // reseting the analyzed flag for all prime assessments
    view.on('post', { action: 'resetall' }, function (next) {
        // find all assessments that can be unanalyzed: 
        // i.e. analyzed before 
        var q = Assessment.model.find()
            .where(locals.orgFilter)//always apply org filter first
            .where('status', 'final')
            .where('analyzed', true)
            .select('id');
        
        q.exec(function (err, assessments) {
            if (err) {
                req.flash('error', err);
                return next();
            }
            
            if (!assessments.length) {
                req.flash('info', 'Cannot find assessments to unanalyze');
                return next();
            }
            
            // assessments found, extract gaps from each
            var async = require("async");
            async.each(assessments, function (a, callback) {
                // analyze assessment 'a'
                Assessment.model.findById(a.id, function (err, assessment) {
                    assessment.resetGaps(callback);
                });
                
            }, function (err) {
                // if any of the calls produced an error, err would equal that error
                if (err) {
                    // One of the iterations produced an error.
                    // All processing will now stop.
                    req.flash('error', 'Unanalysis aborted due to a failed assessment');
                    next(err);
                } else {
                    req.flash('success', 'All assessments have been reset successfully');
                    next();
                }
            });
        });
    });

	// Render the view
	view.render('assessmentsummary');
	
};
