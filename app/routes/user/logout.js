var keystone = require('keystone'),
    session = keystone.session,
    logger = require("../../utils/logger");

exports = module.exports = function (req, res) {
    var user = req.user;

    session.signout(req, res, function () {
        logger.info('[logout] User signed out', logger.details({ 'User': user }));
        req.flash('success', 'You have been successfully logged out.  Come back again!');
        return res.redirect('/');
    });

    //view.render('user/login');
}