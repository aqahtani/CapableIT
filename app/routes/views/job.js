var keystone = require('keystone'),
    Job = keystone.list('Job'),
	async = require('async');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
        locals = res.locals,
        t = req.t;
	
	// Set locals
	locals.section = 'organize';
    locals.filters = {
		job: req.params.job
    };
    locals.validationErrors = {};
    
    // 1: load current job
    view.query('job', Job.model.findOne()
            .where(locals.orgFilter)//always apply tenant filter first
            .where({ '_id': locals.filters.job })
            .populate('organization reportsTo orgDepartment orgFunction jobTasks english.level professional.skills behavioral.skills')
    );
        
    // 2. Load all organization jobs
    view.query('jobs', Job.model.find()
        .where(locals.orgFilter)
        .populate('orgDepartment', 'title')
        .populate('orgFunction', 'title')
        .populate('reportsTo', 'title altTitle')
        .sort('title')
    );
    
    // 3: get skill levels and definitions
    view.query('hardlevels', keystone.list('HardLevel').model.find().sort('grade'));
    view.query('softlevels', keystone.list('SoftLevel').model.find().sort('grade'));
    view.query('englishlevels', keystone.list('EnglishLevel').model.find().sort('grade'));
    
    // 4: get hard and soft skills
    view.query('hardSkills', keystone.list('HardSkill').model.find().sort('number'));
    view.query('softSkills', keystone.list('SoftSkill').model.find().sort('number'));

    // UPDATE job 
    view.on('post', { action: 'update-job' }, function (next) {
        
        // set locals for edit form
        locals.validationErrors = {};
        
        // find the employee
        Job.model.findOne()
        .where(locals.orgFilter)//always apply tenant filter first
        .where('_id', locals.filters.job)
        .exec(function (err, job) {
            if (err) {
                req.flash('error', err);
                return next();
            }
            
            if (!job) {
                // no results 
                req.flash('warning', t('flash.warn.nomatch'));
                return next();
            }
            
            // job found, update it
            var updater = job.getUpdateHandler(req);
            
            // reset empty fields to make sure they are deleted from target job
            if (!req.body.tasks) {
                req.body.tasks = [];
                req.body.authorities = [];
            };

            if (!req.body['professional.skills']) {
                req.body['professional.skills'] = [];
                req.body['professional.levels'] = [];
            };
            
            if (!req.body['behavioral.skills']) {
                req.body['behavioral.skills'] = [];
                req.body['behavioral.levels'] = [];
            };
            
            updater.process(req.body, {
                flashErrors: true,
                fields: 'title, altTitle, code, role, level, senior, reportsTo, tasks, authorities, environment, audience, internal, external, english.level, knowledge, experience, professional.skills, professional.levels, behavioral.skills, behavioral.levels',
                errorMessage: t('flash.error.update')
            }, function (err, result) {
                if (err) {
                    locals.validationErrors = err.errors;
                    return next();
                };
                // all is well
                req.flash('success', t('flash.success.update'));
                return res.redirect('back');
            });

        });

    });


	// Render the view
	view.render('job');
};
