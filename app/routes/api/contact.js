/*
 * View for Route: /contact
 * Send a contact email
 * Returns: JSON
 * */
var keystone = require('keystone'),
    Enquiry = keystone.list('Enquiry'),
    logger = require('../../utils/logger');

exports = module.exports = function (req, res) {
    
    var view = new keystone.View(req, res),
        locals = res.locals,
        t = req.t;
    
    var data = {
        message: ''
    };
    
    // handle post method
    view.on('post', function (next) {
        
        var enquiry = req.body;
        
        var newEnquiry = new Enquiry.model(),
            updater = newEnquiry.getUpdateHandler(req);
        
        updater.process(enquiry, {
            flashErrors: false,
            fields: 'name, email, enquiryType, message'
        }, function (err) {
            if (err) {
                data.message = t('flash.error.required');
            } else {
                logger.info('[contact] New enquiry posted', logger.details({ 'Enquiry' : enquiry }));
                data.message = t('flash.success.contact');
            }
            next();
        });
        
    });
    
    view.render(function (err) {
        res.json(data)
    });

}