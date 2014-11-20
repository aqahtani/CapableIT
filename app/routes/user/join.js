var keystone = require('keystone'),
    session = keystone.session,
    User = keystone.list('User');

exports = module.exports = function (req, res) {
    var view = new keystone.View(req, res),
        locals = res.locals;
    
    // Set locals
    locals.section = 'join';
    locals.formData = req.body || {};
    locals.validationErrors = {};
    locals.step = '1'; // default step: signup user
    locals.dump = '';
    
    // Step 1: create a new user
    view.on('post', { action: 'join' }, function (next) {
        
        var async = require("async");
        
        var createUser = function (callback) {    
            var newUser = new User.model(),
                updater = newUser.getUpdateHandler(req);
            
            updater.process(req.body, {
                flashErrors: true,
                fields: 'name, email, password',
                errorMessage: 'There was a problem with your registration:'
            }, function (err, result) {
                if (err) {
                    locals.validationErrors = err.errors;
                    callback(err, null);
                } else {
                    req.flash('success', "Congrats, you're registered.");
                    callback(null, result.item);
                }
            });
        }
        
        var createToken = function (callback, results) {
            var VerificationToken = keystone.list('VerificationToken');
            var userId = results.user._id;
            VerificationToken.model.create({ 'user': userId }, function (err, vtoken) {
                if (err) return callback(err);
                // saved!
                callback(null, vtoken);
            });
        }
        
        var sendVerificationEmail = function (callback, results) {
            var user = results.user;
            var token = results.token;

            new keystone.Email('user-verification').send({
                to: user.email,
                from: {
                    name: 'OrgIT',
                    email: 'info@knowledge-passion.com'
                },
                subject: 'OrgIT - Verify Your Email',
                user: user,
                token: token
            }, callback);
        }
        
        // call the create functions in serial
        async.auto({
            user: createUser, 
            token: ['user', createToken],
            email: ['user', 'token', sendVerificationEmail]
        }, 
        function (err, results) {
            // All tasks are done now and you have results as an object 
            
            if (err) {
                locals.step = '1';
                next(err);
            }
            else {
                locals.step = '2';
                locals.dump = results;
                next();
            }
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

    view.render('user/join');
}