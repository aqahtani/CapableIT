/**
 * Deletes all previous SFIA v5 categories and subcategories and 
 * replaces them with the new ones from v6
 * Also, deletes the retired skills of v5
 */

var keystone = require('keystone'),
	async = require('async'),
    HardSkillCategory = keystone.list('HardSkillCategory'),
    HardSkillSubCategory = keystone.list('HardSkillSubCategory'),
    HardLevel = keystone.list('HardLevel'),
    HardSkill = keystone.list('HardSkill'),
    _ = require('underscore');

// a function to delete all v5 categories
var delCats = function (callback) {
    console.log('Deleting existing categories ...');
    HardSkillCategory.model.find().remove(callback);
};

// a function to delete all v5 sub-categories
var delSubCats = function (callback) {
    console.log('Deleting existing sub-categories ...');
    HardSkillSubCategory.model.find().remove(callback);
};

// a function to delete all retired skills of v5
var delRetiredSkills = function (callback) {
    // the following are the codes of skills to retire in v6
    var skillsToRetire = ['SPIM', 'HFIN', 'TAUD', 'PROC', 'SURE', 'ACMG'];
    console.log('Deleting retired skills: %j ...', skillsToRetire);
    HardSkill.model.find({ code : { $in : skillsToRetire } }).remove(callback);
};

exports = module.exports = function (done) {    
    async.parallel([delCats, delSubCats, delRetiredSkills], done);
};
