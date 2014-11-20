//var keystone = require('keystone'),
//    User = keystone.list('User');

//// extract relevant fields from user
//// to be used in returned results
//var parseUser = function (user) {
//    userData = {
//        id: user._id,
//        name: user.name.full,
//        email: user.email,
//        isAdmin: user.isAdmin
//    };
//    return userData;
//};

//// return all users
//exports = module.exports = function (req, res) {
//    User.model.find().exec(function (err, users) {
//        if (err) return res.apiError('database error', err);
//        //if (!users.length) return res.apiError('no users found');
        
//        var results = { success: true };
//        results.users = [];
        
//        for (i = 0; i < users.length; i++) {
//            results.users.push(parseUser(users[i]));
//        };

//        return res.apiResponse(results);
//    });
//};  