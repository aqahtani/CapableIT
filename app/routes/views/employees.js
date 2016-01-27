var keystone = require('keystone');

exports = module.exports = function (req, res) {
    
    var view = new keystone.View(req, res),
        locals = res.locals;
    
    // Set locals
    locals.section = 'employees';
    
    // Load all organization employees
    view.query('employees', keystone.list('Employee').paginate({
        filters: locals.orgFilter, //always apply tenant filter first
        page: req.query.page || 1,
        perPage: 12,
        maxPages: 10
    })
        .populate('organization orgDepartment orgFunction job manager')
        .sort('name.first name.last')
    );
        
    // Render the view
    view.render('employees');	
};
