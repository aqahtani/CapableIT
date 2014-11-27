(function () {
    
    // popovers and tooltips, whenever they are under .bs-component
    $('.bs-component [data-toggle="popover"]').popover();
    $('.bs-component [data-toggle="tooltip"]').tooltip();
    
    // enable multi-text input for TextArray fields
    $('.field-textarray').on("click", ".btn-remove-item", function (e) {
        e.preventDefault();
        $(this).parent().parent().remove();
    });
    
    $('.field-textarray .btn-add-item').on("click", function (e) {
        e.preventDefault();
        var name = $(this).parent().attr("data-field-path");
        $(this).before('<div class="input-group input-group-sm"><input type="text" name="' + name + '" value="" class="form-control" required><span class="input-group-btn"><button type="button" class="btn btn-danger btn-remove-item"><span class="glyphicon glyphicon-remove"></span></button></span></div>');
    });
    
})();