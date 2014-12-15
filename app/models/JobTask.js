var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * JobTask Model
 * =============
 */

var JobTask = new keystone.List('JobTask', {
	map: { name: 'title' },
    defaultSort: 'organization title',
    drilldown: 'organization'
});

JobTask.add({
    organization: { type: Types.Relationship, ref: 'Organization', required: true, initial: true, index: true },
    title: { type: String, initial: true, required: true }
});

JobTask.defaultColumns = 'organization|10%, title';
JobTask.register();
