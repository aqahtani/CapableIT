/**
 * Updates job tasks to a text array instead of relationship
 */

var keystone = require('keystone'),
    async = require('async'),
    Job = keystone.list('Job'),
    JobTask = keystone.list('JobTask'),
    _ = require('underscore'),
    util = require('util');

//var getJobs = function(callback) {
//    Job.model.find()
//    .populate('jobTasks')
//    .exec(callback);
//};

var updateJob = function (job, callback) {
    // reset job tasks to a simple array
    job.tasks = _.pluck(job.jobTasks, 'title');
    job.jobTasks = [];

    job.save(function (err) {
        if (err) return callback (err);
        // job has been saved
        console.log('Successfully processed job: %s', job.title);
        return callback();
    });
};

exports = module.exports = function (done) {  
    Job.model.find()
    .populate('jobTasks')
    .exec(function (err, jobs) {
        if (err) return done(err);
        async.forEach(jobs, updateJob, done);
    });
};