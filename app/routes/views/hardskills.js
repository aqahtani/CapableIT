var keystone = require('keystone');

exports = module.exports = function (req, res) {
    
    var view = new keystone.View(req, res),
        locals = res.locals;
    
    // Set locals
    locals.section = 'guide';
    
    // Load all hard skills categories and subcategories
    view.query('hsCategories', keystone.list('HardSkillCategory').model.find()
        .sort('number')
    );
    view.query('hsSubCategories', keystone.list('HardSkillSubCategory').model.find()
        .populate('category')
        .sort('number')
    );
    
    // load all hard skill levels
    view.query('hardlevels', keystone.list('HardLevel').model.find()
        .sort('grade')
    );

    // Load all hard skills
    view.query('hardskills', keystone.list('HardSkill').model.find()
        .populate('category subCategory')
        .sort('number')
    );
    
    // Render the view
    view.render('hardskills');
	
};
