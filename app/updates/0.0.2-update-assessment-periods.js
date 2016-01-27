/**
 * This script fixes a problem with some assessments which still uses YYYYH1 format
 * for the period field.  Periods are now whole years only: YYYY
 */

var keystone = require('keystone'),
    Assessment = keystone.list('Assessment');

exports = module.exports = function(done) {
    Assessment.model.update({ 'period' : '2015H1' }, { 'period' : '2015' }, { multi: true }, done);
};
