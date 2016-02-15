// async functions to be used in multiple routes
var keystone = require('keystone'),
    VerificationToken = keystone.list('VerificationToken');

module.exports = {

    // async: create a verification token
    // expects a user id in results, and returns the token or error
    createToken: function (callback, results) {
        var userId = results.user._id;
        VerificationToken.model.create({ 'user': userId }, function (err, vtoken) {
            if (err) return callback(err);
            // saved!
            callback(null, vtoken);
        });
    },

    // async: send verifiction email to registered user 
    // expects user and token in results
    sendVerificationEmail: function (callback, results) {
        var user = results.user;
        var token = results.token;
    
        new keystone.Email('user-verification').send({
            to: user.email,
            from: {
                name: 'CapableIT',
                email: 'no-reply@knowledge-passion.com'
            },
            subject: '[CapableIT] Please, verify your email',
            user: user,
            token: token
        }, callback);
    }
};