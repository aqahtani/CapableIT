var keystone = require('keystone'),
    Types = keystone.Field.Types,
    uniqueValidator = require('mongoose-unique-validator'),
    _ = require('underscore');

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
    var assessment = this;
    
    if (this.isNew) {
        var async = require("async");
        
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
        
        var getUser = function (callback) {
            keystone.list('User').model.findOne()
            .where({
                'organization': assessment.organization,
                'employee': assessment.doneBy
            }).select('id').exec(function (err, user) {
                if (err) return callback(err, null);
                if (!user) {
                    var e = new Error('no user associated with creator of assessment');
                    return callback(e, null);
                }

                callback(null, user);
            });
        };

        // assigns the creator full permissions 
        var authorizeCreator = function (callback, results) {
            keystone.list('UserAuthorization').model.authorize(
                assessment.organization,
                results.user._id,
                '/assessment/' + assessment.id,
                ['*'], callback);
        };

        async.auto({
            skills : getJobSkills,
            user: getUser, 
            authorization: ['user', authorizeCreator]
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

// make sure that associated authorizations are removed
// when an assessment is removed as well
Assessment.schema.post('remove', function (assessment) {
    keystone.list('UserAuthorization').model.removeResource(
        assessment.organization, 
        '/assessment/' + assessment.id,
        function (err) {
            console.log('Assessment (%s) has been removed along with its authorizations', assessment._id);
        });
});

Assessment.register();
