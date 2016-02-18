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
        locals = res.locals;
    
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
                //logger.warn('[contact] Cannot submit an enquiry', logger.details({ 'Error' : err }));
                data.message = 'Oops, please make sure you fill all fields appropriately';
            } else {
                logger.info('[contact] New enquiry posted', logger.details({ 'Enquiry' : enquiry }));
                data.message = 'We\'ve got your message, thanks!';
            }
            next();
        });
        
    });
    
    view.render(function (err) {
        res.json(data)
    });

}