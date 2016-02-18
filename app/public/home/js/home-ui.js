(function () {
  
    $('#contact-send').on("click", function (e) {
        var sendBtn = $(this);
        sendBtn.addClass('disabled');
        var contactForm = $("#contact-form");
        var contactName = $("#contact-name").val();
        var contactEmail = $("#contact-email").val();
        var contactMessage = $("#contact-message").val();
        var contactAlert = $('#contact-alert');
        
        // clear any previous alerts
        contactAlert.text('');
        // initiate post with enquiry data
        $.post("/api/contact", {
            name: { full : contactName }, 
            email: contactEmail,
            enquiryType: 'message',
            message: contactMessage
        })
        .done(function (data) {
            contactForm.trigger('reset');
            contactAlert.text(data.message);
        })
        .fail(function () {
            contactAlert.text('Cannot send your enquiry now, please try again later!');
            //msgAlert.addClass('alert-danger');
        });
    });

})();