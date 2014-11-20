var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Hard Skill Models
 * =================
 */

// ============================================================================
// Category Model
// ============================================================================
var HardSkillCategory = new keystone.List('HardSkillCategory', {
    map: { name: 'title' },
    autokey: { path: 'slug', from: 'title', unique: true },
    defaultSort: 'number'
});

HardSkillCategory.add({
    number: { type: Types.Number, required: true, initial: true },
    title: { type: Types.Text, required: true, initial: true },
    color: { type: Types.Color, initial: true },
});

HardSkillCategory.defaultColumns = 'number, title, color';

HardSkillCategory.register();

// ============================================================================
// Sub Category Model
// ============================================================================
var HardSkillSubCategory = new keystone.List('HardSkillSubCategory', {
    map: { name: 'title' },
    autokey: { path: 'slug', from: 'title', unique: true },
    defaultSort: 'category number'
});

HardSkillSubCategory.add({
    number: { type: Types.Number, required: true, initial: true },
    title: { type: Types.Text, required: true, initial: true },
    category: { type: Types.Relationship, ref: 'HardSkillCategory', initial: true, required: true, index: true }
});

HardSkillSubCategory.defaultColumns = 'category, number, title';

HardSkillSubCategory.register();

// ============================================================================
// Hard Level Model
// ============================================================================
var HardLevel = new keystone.List('HardLevel', {
    map: { name: 'title' },
    autokey: { path: 'slug', from: 'title', unique: true },
    defaultSort: '-grade'
});

HardLevel.add({
    grade: { type: Types.Number, required: true, initial: true },
    title: { type: Types.Text, required: true, initial: true },
    description: { type: Types.Markdown }
});

HardLevel.defaultColumns = 'grade, title';

HardLevel.register();

// ============================================================================
// Hard Skill Model
// ============================================================================
var HardSkill = new keystone.List('HardSkill', {
    map: { name: 'title' },
    autokey: { path: 'slug', from: 'title', unique: true },
    defaultSort: 'number'
});

HardSkill.add({
    number: { type: Types.Number, required: true, initial: true },
    code: { type: Types.Text, required: true, initial: true },
    title: { type: Types.Text, required: true, initial: true },
    category: { type: Types.Relationship, ref: 'HardSkillCategory', initial: true, required: true, index: true },
    subCategory: { type: Types.Relationship, ref: 'HardSkillSubCategory', filters: { category: ':category' }, initial: true, required: true, index: true },
    description: { type: Types.Textarea },
}, 'Skill Levels', {
    levels: {
        min: { type: Types.Number },
        max: { type: Types.Number },
        descriptions: { type: Types.TextArray }
    }
});

//HardSkill.relationship({ path: 'pointTransactions', ref: 'PointTransaction', refPath: 'pointTier' });

HardSkill.defaultColumns = 'number, code, title, category, subCategory, levels.min, levels.max';

HardSkill.register();
