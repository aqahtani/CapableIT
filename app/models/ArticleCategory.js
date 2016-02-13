var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * ArticleCategory Model
 * =====================
 */

var ArticleCategory = new keystone.List('ArticleCategory', {
    autokey: { from: 'name', path: 'key', unique: true }
});

ArticleCategory.add({
    name: { type: String, required: true }
});

ArticleCategory.relationship({ path: 'articles', ref: 'Article', refPath: 'categories' });

ArticleCategory.register();
