/**
 * Updates skills to match SFIA v6
 */

var keystone = require('keystone'),
	async = require('async'),
    HardSkillCategory = keystone.list('HardSkillCategory'),
    HardSkillSubCategory = keystone.list('HardSkillSubCategory'),
    HardLevel = keystone.list('HardLevel'),
    HardSkill = keystone.list('HardSkill'),
    _ = require('underscore'),
    util = require('util');

// load categories, subcategories and skills of the SFIA v6
var skillLevels = require('./sfia6.js').skills;

var getCats = function(callback) {
    HardSkillCategory.model.find().exec(callback);
};

var getSubCats = function(callback) {
    HardSkillSubCategory.model.find().exec(callback);
};


var updateSkill = function (results, skill, callback) {
    console.log('Processing Skill: %s', skill.title);
    
    // set category and subcategry to their id's
    var cat = _.findWhere(results.categories, { title: skill.category });
    var subCat = _.findWhere(results.subCategories, { title: skill.subCategory });
    skill.category = cat.id;
    skill.subCategory = subCat.id;        
        
    // update or insert if necessary
    var query = { 'code': skill.code };
    var options = { upsert: true };
    HardSkill.model.findOneAndUpdate(query, skill, options, callback);
};

exports = module.exports = function (done) {  
    // collapse all levels under their own skill item
    var rawSkills = _.groupBy(skillLevels, 'title');
    
    // build a new list of skills to update
    var skills = [];
    var i = 1;
    _.each(rawSkills, function (skill, key, list) {
        // skill contains a list of skill levels and descriptions for a single skill
        // so sort by level to have a propoer mapping to single skill item
        var s = _.sortBy(skill, 'level');
        
        // create a new skill matching the HardSkill model 
        var newSkill = {
            "number": i++,
            "category": s[0].category,
            "subCategory": s[0].subCategory,
            "title": key,
            "slug": keystone.utils.slug(key),
            "code": s[0].code,
            "description": s[0].description,
            "levels.min": _.min(_.pluck(s, 'level')),
            "levels.max": _.max(_.pluck(s, 'level')),
            "levels.descriptions": _.pluck(s, 'levelDescription')
        };
        skills.push(newSkill);
    });
    
    // you now have a list of skills ready for the update process
    async.parallel({
        categories: getCats, 
        subCategories: getSubCats
    }, function (err, results) {
        async.forEach(skills, async.apply(updateSkill, results), function (err, stats) {
            stats && console.log(stats.message);
            done(err);
        });
    });
};