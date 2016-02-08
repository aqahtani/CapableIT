/**
 * Deletes all previous SFIA v5 categories and subcategories 
 * preparing for new cats and subcats from v6
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

exports = module.exports = function (done) {    
    async.parallel([delCats, delSubCats], done);
};
