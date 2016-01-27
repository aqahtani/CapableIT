var keystone = require('keystone');

exports = module.exports = function (req, res) {
    
    var view = new keystone.View(req, res),
        locals = res.locals;
    
    // Set locals
    locals.section = 'organize';
    
    // Load all organization jobs
    view.query('jobs', keystone.list('Job').paginate({
        filters: locals.orgFilter, //always apply tenant filter first
        page: req.query.page || 1,
        perPage: 10,
        maxPages: 10
    })
        .populate('organization orgDepartment orgFunction')
        .populate('reportsTo', 'code title altTitle')
        .sort('title')
    );
    
    // Render the view
    view.render('jobs');
	
};
