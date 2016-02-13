var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Article Model
 * =============
 */

var Article = new keystone.List('Article', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

Article.add({
    organization: { type: Types.Relationship, ref: 'Organization', required: true, initial: true, index: true },
    title: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	author: { type: Types.Relationship, ref: 'Employee', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	image: { type: Types.CloudinaryImage },
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
		extended: { type: Types.Html, wysiwyg: true, height: 400 }
	},
	categories: { type: Types.Relationship, ref: 'ArticleCategory', many: true }
});

Article.schema.virtual('content.full').get(function() {
	return this.content.extended || this.content.brief;
});

Article.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Article.register();
