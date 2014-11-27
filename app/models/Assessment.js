var keystone = require('keystone'),
    Types = keystone.Field.Types,
    uniqueValidator = require('mongoose-unique-validator');

/**
 * Assessment Model
 * ================
 */

var Assessment = new keystone.List('Assessment', {
    defaultSort: '-createdAt',
    drilldown: 'organization'
});

Assessment.add({
    organization: { type: Types.Relationship, ref: 'Organization', required: true, initial: true },
    createdAt: { type: Date, default: Date.now },
    employee: { type: Types.Relationship, ref: 'Employee', required: true, initial: true },
    doneBy: { type: Types.Relationship, ref: 'Employee', required: true, initial: true },
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

Assessment.defaultColumns = 'organization|10%, createdAt, employee, doneBy, job';

/**
 * Plugins
 */
//Assessment.schema.plugin(uniqueValidator, { message: '{PATH} already exists' });

Assessment.schema.pre('save', function (next) {
    var that = this;
    
    if (this.isNew) {
        var async = require("async");
        
        // We don't actually execute the async action here
        // this one to get Job data
        var getJobSkills = function (callback) {
            // get the assigned Job 
            var Job = keystone.list('Job');
            Job.model.findById(that.job).exec(function (err, job) {
                if (err) {
                    callback(err, null);
                    return;
                };
                
                if (!job) {
                    var e = new Error('you need to pick a job for assessment');
                    callback(e, null);
                    return;
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

        async.auto({ skills: getJobSkills } , function (err, results) {
            // All tasks are done now and you have results as an object 
            // with the following { skills: { hard: ..., soft: ... } }
            
            if (!err) {
                // just copy over the skills to this assessment
                that.english.targetLevel = results.skills.english.level;
                that.professional.skills = results.skills.hard.skills;
                that.professional.targetLevels = results.skills.hard.levels;
                that.behavioral.skills = results.skills.soft.skills;
                that.behavioral.targetLevels = results.skills.soft.levels;
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


Assessment.register();
