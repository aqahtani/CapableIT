var keystone = require('keystone'),
    session = keystone.session,
    logger = require("../../utils/logger");

exports = module.exports = function (req, res) {
    var user = req.user,
        t = req.t;

    session.signout(req, res, function () {
        logger.info('[logout] User signed out', logger.details({ 'User': user }));
        req.flash('success', t('flash.success.logout'));
        return res.redirect('/');
    });

    //view.render('user/login');
}