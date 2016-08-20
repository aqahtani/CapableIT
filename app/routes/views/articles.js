var keystone = require('keystone'),
    Article = keystone.list('Article'),
    ArticleCategory = keystone.list('ArticleCategory'),
	async = require('async');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// Init locals
	locals.section = 'articles';
	locals.filters = {
		category: req.params.category
	};
	locals.data = {
		articles: [],
		categories: []
	};
	
	// Load all categories
	view.on('init', function(next) {
		
		ArticleCategory.model.find().sort('name').exec(function(err, results) {
			
			if (err || !results.length) {
				return next(err);
			}
			
			locals.data.categories = results;
			
			// Load the counts for each category
			async.each(locals.data.categories, function(category, next) {
				
                Article.model.count()
                .where(locals.orgFilter)//always apply tenant filter first
                .where('category').in([category.id])
                .exec(function (err, count) {
					category.articleCount = count;
					next(err);
				});
				
			}, function(err) {
				next(err);
			});
			
		});
		
	});
	
	// Load the current category filter
	view.on('init', function(next) {
		
		if (req.params.category) {
			ArticleCategory.model.findOne({ key: locals.filters.category }).exec(function(err, result) {
				locals.data.category = result;
				next(err);
			});
		} else {
			next();
		}
		
	});
	
	// Load the articles
	view.on('init', function(next) {
		
        var q = Article.paginate({
            page: req.query.page || 1,
            perPage: 10,
            maxPages: 10
        })
        .where(locals.orgFilter)//always apply tenant filter first
		.where('state', 'published')
		.sort('-publishedDate')
		.populate('author categories');
		
		if (locals.data.category) {
			q.where('categories').in([locals.data.category]);
		}
		
		q.exec(function(err, results) {
			locals.data.articles = results;
			next(err);
		});
		
	});
	
	// Render the view
	view.render('articles');
	
};
