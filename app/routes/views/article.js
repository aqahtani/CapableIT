var keystone = require('keystone'),
	Article = keystone.list('Article');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// Set locals
	locals.section = 'articles';
	locals.filters = {
		article: req.params.article
	};
	
    // Load the current article
    view.query('article', Article.model.findOne()
    .where(locals.orgFilter)//always apply tenant filter first
    .where('slug', locals.filters.article)
    .where('state', 'published')  
    .populate('author categories')
    );
		
	// Load other articles
    view.query('articles', Article.model.find()
    .where(locals.orgFilter)//always apply tenant filter first
    .where('state', 'published')
    .populate('author categories')
    .sort('-publishedDate')
    .limit('4')
    );
    
	// Render the view
	view.render('article');
	
};
