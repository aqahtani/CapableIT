
exports = module.exports = function (req, res) {
	
    // get the language code requested 
	ln = req.params.language;

    // set a cookie for the new language, 
    // i18next will pick from there and default to it
    res.cookie('lang', ln);

    // flash a message to user telling him that langage has changed
    // in his own chosen language!
	req.flash('info', req.t('msg.language_changed', { lng: ln }));

    // redirect the request back to the referrer 
    // will default to / when missing
	return res.redirect('back');

};