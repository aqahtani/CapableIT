var keystone = require('keystone');

exports = module.exports = function (req, res) {
    
    var view = new keystone.View(req, res),
        locals = res.locals;
    
    // Set locals
    locals.section = 'guide';
    
    // Load all hard skills categories and subcategories
    view.query('softlevels', keystone.list('SoftLevel').model.find()
        .sort('grade')
    );

    // Load all hard skills
    view.query('softskills', keystone.list('SoftSkill').model.find()
        .sort('number')
    );
    
    // Render the view
    view.render('softskills');
	
};
