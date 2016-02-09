var keystone = require('keystone'),
    Types = keystone.Field.Types,
    uniqueValidator = require('mongoose-unique-validator'),
    _ = require('underscore'),
    async = require("async");

/**
 * Assessment Model
 * ================
 */

var Assessment = new keystone.List('Assessment', {
    defaultSort: 'organization -createdAt',
    drilldown: 'organization'
});

Assessment.add({
    organization: { type: Types.Relationship, ref: 'Organization', required: true, initial: true },
    createdAt: { type: Date, required: true, default: Date.now },
    status: { type: Types.Select, options: 'draft, final, archived', required: true, default: 'new', index: true },
    // prime: indicates a reference assessment that can be taken for final analysis
    prime: { type: Types.Boolean, default: false, index: true }, 
    // analyzed: indicated whether or not this assessment has already been analyzed (i.e. gaps extracted)
    analyzed: { type: Types.Boolean, default: false, index: true }, 
    // period: indicates the period of assessment such as 2014, 2015, ...
    period: { type: Types.Text, match: [/^\d\d\d\d$/, "The period has to match a valid year YYYY ({VALUE})"], required: true, initial: true, index: true },
    employee: { type: Types.Relationship, ref: 'Employee', filters: { organization: ':organization' }, required: true, initial: true, index: true },
    doneBy: { type: Types.Relationship, ref: 'Employee', filters: { organization: ':organization' }, required: true, initial: true, index: true },
    job: { type: Types.Relationship, ref: 'Job', filters: { organization: ':organization' }, required: true, initial: true }
}, 'General Assessment', {
    overview: { type: Types.Textarea, height: 150 },
    knowledge: { type: Types.Textarea, height: 150 },
    experience: { type: Types.Textarea, height: 150 },
}, 'Skill Assessment', {
    english: {
        currentLevel: { type: Types.Relationship, ref: 'EnglishLevel' },
        targetLevel: { type: Types.Relationship, ref: 'EnglishLevel' }
    },
    professional: {
        skills: { type: Types.Relationship, ref: 'HardSkill', many: true },
        currentLevels: { type: Types.NumberArray },
        targetLevels: { type: Types.NumberArray }
    },
    behavioral: {
        skills: { type: Types.Relationship, ref: 'SoftSkill', many: true },
        currentLevels: { type: Types.NumberArray },
        targetLevels: { type: Types.NumberArray }
    }
});

Assessment.defaultColumns = 'organization|10%, createdAt, employee, doneBy, job, status';

/**
 * Plugins
 */
//Assessment.schema.plugin(uniqueValidator, { message: '{PATH} already exists' });

// PRE MIDDLEWARE 
// ==============

Assessment.schema.pre('save', function (next) {
    var assessment = this;
    
    if (this.isNew) {
        // We don't actually execute the async action here
        // this one to get Job data
        var getJobSkills = function (callback) {
            // get the assigned Job 
            var Job = keystone.list('Job');
            Job.model.findById(assessment.job).exec(function (err, job) {
                if (err) return callback(err, null);
                if (!job) {
                    var e = new Error('you need to pick a job for assessment');
                    return callback(e, null);
                }
                
                var skills = {
                    english: {},
                    hard: {},
                    soft: {}
                };
                
                skills.english = job.english;
                skills.hard = job.professional;
                skills.soft = job.behavioral;

                // Async call is done, alert via callback
                callback(null, skills);
            });
        };
        
        // get user from assessor employee id
        // return error if no user is found (although it should never happen!)
        var getCreatorUser = function (callback) {
            
            keystone.list('User').model.findByEmployee(assessment.organization, assessment.doneBy, 
                function (err, user) {
                    if (err) return callback(err, null);
                    if (!user) {
                        var e = new Error('No user associated with creator of assessment');
                        return callback(e, null);
                    };
                    callback(null, user);
            });
        };
        
        // get user from assessed employee id 
        // and simply pass the callback as is (no need to raise error on empty result)
        var getAssessedUser = function (callback) {
            keystone.list('User').model.findByEmployee(assessment.organization, assessment.employee, callback);
        };

        // assigns the creator full permissions 
        var authorizeCreator = function (callback, results) {
            if (results.creatorUser) {
                keystone.list('UserAuthorization').model.authorize(
                    assessment.organization,
                    results.creatorUser._id,
                    '/assessment/' + assessment.id,
                    ['*'], callback);
            }
            else callback(null);
        };
        
        // assigns the assessed employee view permissions 
        var authorizeAssessed = function (callback, results) {
            if (results.assessedUser && (results.assessedUser.id != results.creatorUser.id)) {
                keystone.list('UserAuthorization').model.authorize(
                    assessment.organization,
                    results.assessedUser._id,
                    '/assessment/' + assessment.id,
                    ['view'], callback);
            }
            else {
                callback(null);
            }
        };

        async.auto({
            skills : getJobSkills,
            creatorUser: getCreatorUser,
            assessedUser: getAssessedUser, 
            creatorAuthorization: ['creatorUser', authorizeCreator],
            assessedAuthorization: ['creatorUser', 'assessedUser', authorizeAssessed]
        } , function (err, results) {
            // All tasks are done now and you have results as an object 
            // with the following { skills: { hard: ..., soft: ... } }
            if (!err) {
                // just copy over the skills to this assessment
                assessment.english.targetLevel = results.skills.english.level;
                assessment.professional.skills = results.skills.hard.skills;
                assessment.professional.targetLevels = results.skills.hard.levels;
                assessment.behavioral.skills = results.skills.soft.skills;
                assessment.behavioral.targetLevels = results.skills.soft.levels;
                next();
            }
            else {
                next(err);
            }
        });
    }
    else {
        next();
    }
});


// POST MIDDLEWARE 
// ===============

// make sure that associated authorizations are removed
// when an assessment is removed as well
Assessment.schema.post('remove', function (assessment) {
    
    // async: remove related authorizations
    var removeAuthorizations = function (callback) {
        keystone.list('UserAuthorization').model.removeResource(
            assessment.organization, 
            '/assessment/' + assessment.id,
            callback);
    };
    
    // async: clear hard skills
    var resetHards = function (callback) {
        keystone.list('HardSkillGap').model.remove({ 'assessment' : assessment.id }, callback);
    };
    
    // async: clear soft skills
    var resetSofts = function (callback) {
        keystone.list('SoftSkillGap').model.remove({ 'assessment' : assessment.id }, callback);
    };
    
    // async: clear english skills
    var resetEnglish = function (callback) {
        keystone.list('EnglishSkillGap').model.remove({ 'assessment' : assessment.id }, callback);
    };

    async.parallel([resetHards, resetSofts, resetEnglish, removeAuthorizations]);
});


// SCHEMA METHODS
// ==============

/* Schema Method: extractGaps()
 * extracts gaps from the current assessment into HardSkillGaps & SoftSkillGaps
 */
Assessment.schema.methods.extractGaps = function (done) {
    var assessment = this;
    // only extract if not already done before
    if (!assessment.analyzed) {
        
        // this one to get Job data
        var getJob = function (callback) {
            // get the assigned Job 
            keystone.list('Job').model.findById(assessment.job).exec(callback);
        };
        
        // this one to get English target level
        var getEnglishTarget = function (callback) {
            // get the assigned Job 
            keystone.list('EnglishLevel').model.findById(assessment.english.targetLevel).exec(callback);
        };
        
        // this one to get English target level
        var getEnglishCurrent = function (callback) {
            // get the assigned Job 
            keystone.list('EnglishLevel').model.findById(assessment.english.currentLevel).exec(callback);
        };

        // async function to handle hard skills
        var extractHards = function (callback, results) {
            // build the hard skill gaps
            var hardGaps = [];
            for (var i = 0; i < assessment.professional.skills.length ; i++) {
                var target = assessment.professional.targetLevels[i];
                var current = assessment.professional.currentLevels[i];
                var gap = target - current;
                var hGap = {
                    'organization': assessment.organization,
                    'employee': assessment.employee,
                    'job': assessment.job,
                    'orgDepartment': results.job.orgDepartment,
                    'orgFunction': results.job.orgFunction,
                    'skill': assessment.professional.skills[i],
                    'assessment': assessment.id,
                    // job info
                    'jobLevel': results.job.level,
                    'jobRole': results.job.role,
                    'isSenior': results.job.senior,
                    // gap info
                    'period': assessment.period,
                    'gap': gap,
                    'current': current,
                    'target': target
                };
                hardGaps.push(hGap);
            }
            
            keystone.list('HardSkillGap').model.create(hardGaps, function (err) {
                if (err) return callback(err, hardGaps);
                // saved
                return callback(null, hardGaps);
            });
        };
        
        // async function to handle soft skills
        var extractSofts = function (callback, results) {
            // build the soft skill gaps
            var softGaps = [];
            for (var i = 0; i < assessment.behavioral.skills.length ; i++) {
                var target = assessment.behavioral.targetLevels[i];
                var current = assessment.behavioral.currentLevels[i];
                var gap = target - current;
                var sGap = {
                    'organization': assessment.organization,
                    'employee': assessment.employee,
                    'job': assessment.job,
                    'orgDepartment': results.job.orgDepartment,
                    'orgFunction': results.job.orgFunction,
                    'skill': assessment.behavioral.skills[i],
                    'assessment': assessment.id,
                    // job info
                    'jobLevel': results.job.level,
                    'jobRole': results.job.role,
                    'isSenior': results.job.senior,
                    // gap info
                    'period': assessment.period,
                    'gap': gap,
                    'current': current,
                    'target': target
                };
                softGaps.push(sGap);
            }
            
            keystone.list('SoftSkillGap').model.create(softGaps, function (err) {
                if (err) return callback(err, softGaps);
                // saved
                return callback(null, softGaps);
            });
        };
        
        // async function to handle english skill
        var extractEnglish = function (callback, results) {
            // build the english skill gaps
            
            var target = results.englishTarget.number;
            var current = results.englishCurrent.number;
            var gap = target - current;
            var eGap = {
                'organization': assessment.organization,
                'employee': assessment.employee,
                'job': assessment.job,
                'orgDepartment': results.job.orgDepartment,
                'orgFunction': results.job.orgFunction,
                'skill': 'English Language Skills',
                'assessment': assessment.id,
                // job info
                'jobLevel': results.job.level,
                'jobRole': results.job.role,
                'isSenior': results.job.senior,
                // gap info
                'period': assessment.period,
                'gap': gap,
                'current': current,
                'target': target
            };
            
            keystone.list('EnglishSkillGap').model.create(eGap, callback);
        };

        async.auto({
            job: getJob,
            englishTarget: getEnglishTarget,
            englishCurrent: getEnglishCurrent,
            hardGaps: ['job', extractHards],
            softGaps: ['job', extractSofts],
            engGaps: ['job', 'englishTarget', 'englishCurrent', extractEnglish],
        } , function (err, results) {
            // All tasks are done now and you have results as an object 
            // with the following { hardGaps , softGaps }
            if (err) return done(err, results);
            
            // set this assessment to "analyzed"
            assessment.analyzed = true;
            assessment.save(done);
            //return done(null, results);
        });
    }
    else return done();
};

/* Schema Method: resetGaps()
 * resets gaps of the current assessment by clearing related HardSkillGaps & SoftSkillGaps
 */
Assessment.schema.methods.resetGaps = function (done) {
    var assessment = this;
    
    // async function to clear hard skills
    var resetHards = function (callback) {
        keystone.list('HardSkillGap').model.remove({ 'assessment' : assessment.id }, callback);
    };
    
    // async function to handle soft skills
    var resetSofts = function (callback) {
        keystone.list('SoftSkillGap').model.remove({ 'assessment' : assessment.id }, callback);
    };
    
    // async function to clear english skills
    var resetEnglish = function (callback) {
        keystone.list('EnglishSkillGap').model.remove({ 'assessment' : assessment.id }, callback);
    };

    async.parallel([ resetHards , resetSofts, resetEnglish ] , function (err, results) {
        // All tasks are done now and you have results as an object 
        // with the following { hardGaps , softGaps }
        if (err) return done(err, results);
        
        // reset this assessment "analyzed" flag
        assessment.analyzed = false;
        assessment.save(done);
    });
};

Assessment.register();
