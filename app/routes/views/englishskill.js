var keystone = require('keystone');

exports = module.exports = function (req, res) {
    
    var view = new keystone.View(req, res),
        locals = res.locals;
    
    // Set locals
    locals.section = 'guide';
    
    // Load all hard skills categories and subcategories
    view.query('englishlevels', keystone.list('EnglishLevel').model.find()
        .sort('-grade')
    );
    
    // Render the view
    view.render('englishskill');
	
};
