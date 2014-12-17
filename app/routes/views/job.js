var keystone = require('keystone'),
	async = require('async');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// Set locals
	locals.section = 'jobs';
    locals.filters = {
		job: req.params.job
	};
    
    // 1: query current job
    view.query('job', keystone.list('Job').model.findOne()
            .where(locals.orgFilter)//always apply tenant filter first
            .where({ '_id': locals.filters.job })
            .populate('organization reportsTo orgDepartment orgFunction jobTasks english.level professional.skills behavioral.skills')
    );
    
    // 2: get skill levels and definitions
    view.query('hardlevels', keystone.list('HardLevel').model.find().sort('grade'));
    view.query('softlevels', keystone.list('SoftLevel').model.find().sort('grade'));
    view.query('englishlevels', keystone.list('EnglishLevel').model.find().sort('grade'));
	
	// Render the view
	view.render('job');
};
