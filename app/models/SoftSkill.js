var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Soft Skill Models
 * =================
 */

// ============================================================================
// English Level Model
// ============================================================================
var EnglishLevel = new keystone.List('EnglishLevel', {
    map: { name: 'title' },
    //autokey: { path: 'slug', from: 'title', unique: true },
    defaultSort: '-grade'
});

EnglishLevel.add({
    category: { type: Types.Select, options: 'Proficient, Independent, Basic', default: 'Basic', initial: true },
    grade: { type: Types.Text, required: true, initial: true },
    title: { type: Types.Text, required: true, initial: true },
    color: { type: Types.Color, initial: true  },
    description: { type: Types.Textarea }
});

EnglishLevel.defaultColumns = 'category, grade, title, color';

EnglishLevel.register();

// ============================================================================
// Soft Level Model
// ============================================================================
var SoftLevel = new keystone.List('SoftLevel', {
    map: { name: 'title' },
    autokey: { path: 'slug', from: 'title', unique: true },
    defaultSort: '-grade'
});

SoftLevel.add({
    grade: { type: Types.Number, required: true, initial: true },
    title: { type: Types.Text, required: true, initial: true },
    description: { type: Types.Markdown }
});

SoftLevel.defaultColumns = 'grade, title';

SoftLevel.register();

// ============================================================================
// Soft Skill Model
// ============================================================================
var SoftSkill = new keystone.List('SoftSkill', {
    map: { name: 'title' },
    autokey: { path: 'slug', from: 'title', unique: true },
    defaultSort: 'number'
});

SoftSkill.add({
    number: { type: Types.Number, required: true, initial: true },
    title: { type: Types.Text, required: true, initial: true },
    color: { type: Types.Color, initial: true },
    description: { type: Types.Textarea },
    levelDescriptions: { type: Types.TextArray }
});

SoftSkill.defaultColumns = 'number, title, color';

SoftSkill.register();
