(function () {
  
    // bootstrap-datetimepicker 
    // https://eonasdan.github.io/bootstrap-datetimepicker
    // date picker only
    $(".datepicker").datetimepicker({
        format: 'YYYY-MM-DD'
    });
    
    // date & time picker
    $(".datetimepicker").datetimepicker();
    
    // Selectize
    $('.selectize-required').selectize({
        valueField: '_id',
        labelField: 'title',
        searchField: 'title',
        maxItems: 1,
        create: false
    });

    $('.selectize-optional').selectize({
        valueField: '_id',
        labelField: 'title',
        searchField: 'title',
        allowEmptyOption: true,
        maxItems: 1,
        create: false
    });
    
    $('.selectize-multiple').selectize({
        valueField: '_id',
        labelField: 'title',
        searchField: 'title',
        allowEmptyOption: true,
        maxItems: null,
        create: false
    });

    // jasny-bootstrap: fileinput
    $('.fileinput').fileinput();
    
    // DataTables for any table with ".datatable" class
    $(document).ready(function () {
        $('.datatables').DataTable();
    });
    
    // popovers and tooltips, whenever they are under .bs-component
    $('.bs-component [data-toggle="popover"]').popover();
    $('.bs-component [data-toggle="tooltip"]').tooltip();
    
    // enable multi-text input for TextArray fields
    $('.field-textarray').on("click", ".btn-remove-item", function (e) {
        e.preventDefault();
        $(this).parent().parent().remove();
    });
    
    // dynamically adds items to the same field
    $('.field-textarray .btn-add-item').on("click", function (e) {
        e.preventDefault();
        var name = $(this).parent().attr("data-field-path");
        $(this).before('<div class="input-group input-group-sm"><input type="text" name="' + name + '" value="" class="form-control" required><span class="input-group-btn"><button type="button" class="btn btn-danger btn-remove-item"><span class="glyphicon glyphicon-remove"></span></button></span></div>');
    });
    
})();