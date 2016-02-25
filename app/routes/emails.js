/**
 * This file defines the email tests for your project.
 * 
 * Each email test should provide the locals used to render the
 * email template for preview.
 * 
 * Values can either be an object (for simple tests), or a
 * function that calls a callback(err, locals).
 * 
 * Sample generated emails, based on the keys and methods below,
 * can be previewed at /keystone/test-email/{key}
 */

var keystone = require('keystone');

module.exports = {
	
	/** New Enquiry Notifications */
	
	'enquiry-notification': function(req, res, callback) {
		
		// To test enquiry notifications we create a dummy enquiry that
		// is not saved to the database, but passed to the template.
		
		var Enquiry = keystone.list('Enquiry');
		
		var newEnquiry = new Enquiry.model({
			name: { first: 'Test', last: 'User' },
			email: 'contact@' + process.env.DOMAIN,
			phone: '+61 2 1234 5678',
			enquiryType: 'message',
			message: { md: 'Nice enquiry notification.' }
		});
		
		callback(null, {
			admin: 'Admin User',
			enquiry: newEnquiry,
			enquiry_url: '/keystone/enquiries/'
		});
		
    },

    'reset-password' : function (req, res, callback) {
        
        // To test reset-password we create a dummy user that
        // is not saved to the database, but passed to the template.
        
        var User = keystone.list('User');
        
        var newUser = new User.model({
            name: { first: 'Test', last: 'User' },
            email: 'user@test.com',
            resetPasswordKey: 'DummYReSETKeY'
        });
        
        callback(null, {
            user: newUser,
            subject: '[CapableIT] Reset your password',
            to: newUser.email,
            from: {
                name: 'CapableIT',
                email: 'no-reply@' + process.env.DOMAIN
            }
        });
		
    },

    'verify-email' : function (req, res, callback) {
        
        // To test verify-email we create a dummy user that
        // is not saved to the database, but passed to the template.
        
        var User = keystone.list('User');
        
        var newUser = new User.model({
            name: { first: 'Test', last: 'User' },
            email: 'user@test.com',
            emailVerificationKey: 'DummYReSETKeY'
        });
        
        callback(null, {
            user: newUser,
            brand: 'CapableIT',
            subject: '[CapableIT] Reset your password',
            to: newUser.email,
            from: {
                name: 'CapableIT',
                email: 'no-reply@' + process.env.DOMAIN
            }
        });
		
    }

	
};
