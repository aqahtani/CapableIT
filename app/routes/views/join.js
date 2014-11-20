var keystone = require('keystone'),
    session = keystone.session,
    User = keystone.list('User'), 
    Tenant = keystone.list('Tenant');

exports = module.exports = function (req, res) {
    var view = new keystone.View(req, res),
        locals = res.locals;
    
    // Set locals
    locals.section = 'join';
    locals.formData = req.body || {};
    locals.validationErrors = {};
    locals.step = '1'; // default step: signup user
    locals.tenantName = '';
    
    // Step 1: create a new user
    view.on('post', { action: 'join' }, function (next) {
        
        var newUser = new User.model(),
            updater = newUser.getUpdateHandler(req);
        
        updater.process(req.body, {
            flashErrors: true,
            fields: 'name, email, password',
            errorMessage: 'There was a problem with your registration:'
        }, function (err) {
            if (err) {
                locals.validationErrors = err.errors;
                locals.step = '1';
            } else {
                //req.flash('success', "Congrats, you're registered. Now, please login");
                locals.step = '2';
            }
            next();
        });
    });
    
    // Step 2: log the user in
    view.on('post', { action: 'login' }, function (next) {
        
        // prepare callbacks for success and failure
        var onFail = function () {
            req.flash('error', 'Sorry, that email and password combo are not valid.');
            locals.step = '2';
            next();
        };

        var onSuccess = function (user) {
            //req.flash('success', 'Welcome ' + user.name.first);
            locals.user = user;
            locals.step = "3";
            next();
        };
        
        // sign the user in using lib from keystone
        session.signin(req.body, req, res, onSuccess, onFail);
    });
    
    // Step 3: create tenant
    view.on('post', { action: 'tenant' }, function (next) {
        
        var newTenant = new Tenant.model(),
            updater = newTenant.getUpdateHandler(req);
        
        updater.process(req.body, {
            flashErrors: true,
            fields: 'name, url',
            errorMessage: 'There was a problem with your submission:'
        }, function (err, result) {
            if (err) {
                locals.validationErrors = err.errors;
                locals.step = "3";
            } else {
                //req.flash('success', 'Tenant created: ' + result.item.name );
                locals.tenantName = result.item.name;
                locals.step = "4";
            }
            next();
        });

    });

    view.render('join');
}