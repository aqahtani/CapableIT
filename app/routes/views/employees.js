var keystone = require('keystone');

exports = module.exports = function (req, res) {
    
    var view = new keystone.View(req, res),
        locals = res.locals;
    
    // Set locals
    locals.section = 'employees';
    locals.data = {
        employees: []
    };
    
    // Load all organization employees
    view.on('init', function (next) {
        
        var q = keystone.list('Employee').paginate({
            filters: locals.orgFilter, //always apply tenant filter first
            page: req.query.page || 1,
            perPage: 10,
            maxPages: 10
        }).populate('organization orgDepartment orgFunction job');
        
        q.exec(function (err, result) {
            if (err) {
                req.flash('error', err.message);
                return next();
            }
            
            locals.data.employees = result;
            next();
        });
		
    });
    
    // Render the view
    view.render('employees');	
};
