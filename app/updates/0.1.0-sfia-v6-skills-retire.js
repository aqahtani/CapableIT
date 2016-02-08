/**
 * This cleans up retired skills from v5, preparing to move to v6
 * 1. Reset references to retired skills in the Job, Assessment, SkillGap documents
 * 2. Delete retired skills 
 */

var keystone = require('keystone'),
    async = require('async'),
    Job = keystone.list('Job'),
    Assessment = keystone.list('Assessment'),
    HardSkill = keystone.list('HardSkill'),
    _ = require('underscore');

var skillsToRetire = ['SPIM', 'HFIN', 'TAUD', 'PROC', 'SURE', 'ACMG'];

var getRetiredSkills = function (callback) {
    HardSkill.model.find()
    .where('code').in(skillsToRetire)
    .exec(callback);
};

var getJobs = function(callback) {
    Job.model.find().exec(callback);
};

var getAssessments = function (callback) {
    Assessment.model.find().exec(callback);
};

var updateJobs = function (callback, results) {
    // results contains: retiredSkills, jobs
    var retiredIds = _.pluck(results.retiredSkills, 'id');
    var jobs = results.jobs;
    
    // a function to be used in async calls 
    function updateJob(job, done) {
        var newSkills = [];
        var newLevels = [];
        var needsProcessing = false;

        for (i = 0; i < job.professional.skills.length; i++) {
            var found = _.contains(retiredIds, String(job.professional.skills[i]));
            if (found) {
                //console.log('-- skipping one retired skill in job: %s', job.title);
                needsProcessing = true;
            }
            else {
                //console.log('++ pushing one in: %s', job.title);
                newSkills.push(job.professional.skills[i]);
                newLevels.push(job.professional.levels[i]);
            }
        };
        
        if (!needsProcessing) {
            console.log('Skipping clean job: %s', job.title);
            return done();
        };

        job.professional.skills = newSkills;
        job.professional.levels = newLevels;
        job.save(function (err) {
            if (err) return done(err);
            // job has been saved
            console.log('Successfully retired skills in job: %s', job.title);
            return done();
        });
    };

    async.each(jobs, updateJob, callback);
};


var updateAssessments = function (callback, results) {
    // results contains: retiredSkills, assessments
    var retiredIds = _.pluck(results.retiredSkills, 'id');
    var assessments = results.assessments;
    
    // a function to be used in async calls 
    function updateAssessment(assessment, done) {
        var newSkills = [];
        var newCurrentLevels = [];
        var newTargetLevels = [];
        var needsProcessing = false;
        
        for (i = 0; i < assessment.professional.skills.length; i++) {
            var found = _.contains(retiredIds, String(assessment.professional.skills[i]));
            if (found) {
                needsProcessing = true;
            }
            else {
                newSkills.push(assessment.professional.skills[i]);
                newCurrentLevels.push(assessment.professional.currentLevels[i] || 1);
                newTargetLevels.push(assessment.professional.targetLevels[i] || 1);
            }
        };
        
        if (!needsProcessing) {
            console.log('Skipping clean assessment: %s', assessment.id);
            return done();
        };
        
        assessment.professional.skills = newSkills;
        assessment.professional.currentLevels = newCurrentLevels;
        assessment.professional.targetLevels = newTargetLevels;

        assessment.save(function (err) {
            if (err) return done(err);
            // assessment has been saved
            console.log('Successfully retired skills in assessment: %s', assessment.id);
            return done();
        });
    };
    
    async.each(assessments, updateAssessment, callback);
};

// a function to delete all retired skills of v5
var delRetiredSkills = function (callback) {
    // the following are the codes of skills to retire in v6
    console.log('Deleting retired skills: %j ...', skillsToRetire);
    HardSkill.model.find({ code : { $in : skillsToRetire } }).remove(callback);
};

exports = module.exports = function (done) {
    async.auto({
        retiredSkills: getRetiredSkills, 
        jobs: getJobs,
        assessments: getAssessments,
        updatedJobs: ['retiredSkills', 'jobs', updateJobs],
        updatedAssessments: ['retiredSkills', 'assessments', updateAssessments],
        deletedSkills: ['updatedJobs', 'updatedAssessments', delRetiredSkills]
    }, function (err) {
        if (err) {
            console.log('Error: %s', err.message);
            return done(err);
        };
        // assessment has been saved
        console.log('Successfully completed cleaning up of retired skills from v5');
        return done();
    });
};
