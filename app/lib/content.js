var _ = require('underscore');

/**
 * Content Class
 *
 * Accessed via `content`
 */

var Content = function () { };

/* OLDer canDo functions:

Content.prototype.canEdit = function (user, permits) {
    // if not valid user object or not permits
    // then consider not editable (false) 
    if (!user || !permits) return false;
    
    // get a combined list of permittions
    var permissions = _.flatten(_.pluck(permits, 'permissions'), true);
    // user can edit if given either 'edit' or '*' permission
    return _.contains(permissions, 'edit') || _.contains(permissions, '*');
};

Content.prototype.canDelete = function (user, permits) {
    // if not valid user object or not permits
    // then consider not editable (false) 
    if (!user || !permits) return false;
    
    // get a combined list of permittions
    var permissions = _.flatten(_.pluck(permits, 'permissions'), true);
    // user can edit if given either 'delete' or '*' permission
    return _.contains(permissions, 'delete') || _.contains(permissions, '*');
};
*/

Content.prototype.canDo = function (user, permits, action) {
    // if not valid user object or not permits
    // then consider not editable (false) 
    if (!user || !permits || !action) return false;
    
    // get a combined list of permittions
    var permissions = _.flatten(_.pluck(permits, 'permissions'), true);

    // user can 'action' if given either 'action' or '*' permission
    return _.contains(permissions, action) || _.contains(permissions, '*');
};

/**
 * The exported object is an instance of Content.
 */

module.exports = exports = new Content();
