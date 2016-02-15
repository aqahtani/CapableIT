var keystone = require('keystone'),
    _ = require('underscore'),
    util = require('util'),
    User = keystone.list('User'),
    UserAuthorization = keystone.list('UserAuthorization');

exports = module.exports = function (req, res) {
    
    var view = new keystone.View(req, res),
        locals = res.locals;
    
    // Set locals
    locals.section = 'user';
    locals.filters = {
        user: req.user
    };

    // 1. query current user
    view.query('userProfile', User.model.findById(locals.filters.user)
        .populate('organization employee roles')
    );
    
    // 2. query user authorizations
    view.query('userAuthorizations', UserAuthorization.model.find()
        .where('user', locals.filters.user)
        .populate('permissions')
    );
    
    // Render the view
    view.render('user/profile');
};