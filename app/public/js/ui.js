(function () {
  
    // bootstrap-datetimepicker 
    // https://eonasdan.github.io/bootstrap-datetimepicker
    // date picker only
    $(".datepicker").datetimepicker({
        format: 'YYYY-MM-DD'
    });
    
    // date & time picker
    $(".datetimepicker").datetimepicker();
    
    // select2: enhanced select
    $(".select2").select2({
        theme: "bootstrap",
        placeholder: "Select ...",
        //allowClear: true
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
    
    // create-assessment button click posts data from modal to /assess/new
    $('#create-assessment').on("click", function (e) {
        var createBtn = $(this);
        var modal = $("#assessModal");
        var viewBtn = modal.find('#view-assessment');
        var msgAlert = modal.find('#dataMessage');
        var employeeId = modal.find('.modal-body input[name="employeeId"]').val();
        var jobId = modal.find('.modal-body input[name="jobId"]').val();
        
        // initiate post with employee and job data
        $.post("/api/assess/new", {
            "employee": employeeId, 
            "job": jobId
        })
        .done(function (data) {
            if (data.created) {
                msgAlert.text(data.message);
                msgAlert.addClass('alert-success');
                viewBtn.attr('href', '/assessment/' + data.assessment);
                viewBtn.removeClass('hidden');
            }
            else {
                msgAlert.text(data.message);
                msgAlert.addClass('alert-danger');
            }
        })
        .fail(function () {
            msgAlert.text('Cannot create assessment at this time, please try again later.');
            msgAlert.addClass('alert-danger');
        })
        .always(function () {
            msgAlert.removeClass('hidden');
            createBtn.addClass('hidden');
        });
    });
    
    // initialize modal on show
    $('#assessModal').on('show.bs.modal', function (event) {
        // Button that triggered the modal
        var button = $(event.relatedTarget);
        // Extract info from data-* attributes
        var employeeName = button.data('employee-name');
        var employeeId = button.data('employee-id');
        var jobTitle = button.data('job-title');
        var jobId = button.data('job-id');
        
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this);
        // set text and values of modal elements
        modal.find('.modal-body input[name="employeeId"]').val(employeeId);
        modal.find('.modal-body input[name="jobId"]').val(jobId);
        modal.find('#employeeName').text(employeeName);
        modal.find('#jobTitle').text(jobTitle);
        
        // reset shown/hidden buttons
        modal.find('#view-assessment').addClass('hidden');
        modal.find('#create-assessment').removeClass('hidden');
        var msgAlert = modal.find('#dataMessage');
        msgAlert.text('');
        msgAlert.removeClass('alert-success alert-danger');
        msgAlert.addClass('hidden');
    });

})();