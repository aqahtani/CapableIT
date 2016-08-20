var _ = require('underscore');

/**
 * Content Class
 *
 * Accessed via `content`
 */

var Content = function () { };

Content.prototype.canDo = function (user, permits, action) {
    // if not valid user object or not permits
    // then consider not cannot do! (false) 
    if (!user || !permits || !action) return false;
    
    // get a combined list of permittions
    var permissions = _.flatten(_.pluck(permits, 'permissions'), true);

    // user can 'action' if given either 'action' or '*' permission for all 
    // permissions except for 'approve' which needs to be mentioned by name
    if (action === 'approve') return _.contains(permissions, action)
    else return _.contains(permissions, action) || _.contains(permissions, '*');
};

Content.prototype.hasRole = function (user, role) {
    // if no valid user object or no authorizations, or not given role name
    // then consider not cannot do! (false) 
    if (!user || !role) return false;
    
    // is role in the list of user's role names
    return _.contains(user.roleNames, role);
};

/**
 * The exported object is an instance of Content.
 */

module.exports = exports = new Content();
