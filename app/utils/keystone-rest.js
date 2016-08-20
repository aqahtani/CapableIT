// Restify your models using keystone-rest:
var keystoneRest = require('keystone-rest'),
    keystone = require('keystone');

// get references to selected keystone models
// SOFT SKILLS
var EnglishLevel = keystone.list('EnglishLevel'),
    SoftLevel = keystone.list('SoftLevel'),
    SoftSkill = keystone.list('SoftSkill');

// HARD SKILLS
var HardSkillCategory = keystone.list('HardSkillCategory'),
    HardSkillSubCategory = keystone.list('HardSkillSubCategory'),
    HardLevel = keystone.list('HardLevel'),
    HardSkill = keystone.list('HardSkill');

// CONTENT
var Post = keystone.list('Post'),
    PostCategory = keystone.list('PostCategory');

// create routes for each model with given http methods
// keystone-rest plugs in routes under /api/
// list -> /api/collection, ex: /api/englishlevels
// show -> /api/collection/item, ex: /api/englishlevels/mastery
keystoneRest.addRoutes(EnglishLevel, 'list show');
keystoneRest.addRoutes(SoftLevel, 'list show');
keystoneRest.addRoutes(SoftSkill, 'list show');
keystoneRest.addRoutes(HardSkillCategory, 'list show');
keystoneRest.addRoutes(HardSkillSubCategory, 'list show');
keystoneRest.addRoutes(HardLevel, 'list show');
keystoneRest.addRoutes(HardSkill, 'list show');
keystoneRest.addRoutes(Post, 'list show');
keystoneRest.addRoutes(PostCategory, 'list show');

module.exports = keystoneRest;