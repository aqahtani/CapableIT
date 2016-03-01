(function () {
        
    var select_department, $select_department;
    var select_function, $select_function;

    $select_department = $('#orgDepartment').selectize({
        valueField: '_id',
        labelField: 'title',
        searchField: 'title',
        allowEmptyOption: true,
        maxItems: 1,
        create: false,
        preload: true,
        load: function (query, callback) {
            //if (!query.length) return callback();
            $.ajax({
                url: '/api/departments', //?q=' + encodeURIComponent(query),
                type: 'GET',
                error: function () {
                    callback();
                },
                success: function (res) {
                    callback(res.departments);
                }
            });
        },
        // cascade functions select to department select
        onChange: function (value) {
            //if (!value.length) return;
            
            // reset function options
            select_function.disable();
            select_function.clearOptions();
            
            // now load functions that belong to this department
            select_function.load(function (callback) {
                $.ajax({
                    url: '/api/functions?department=' + value,
                    type: 'GET',
                    error: function () {
                        callback();
                    },
                    success: function (res) {
                        select_function.enable();
                        callback(res.functions_filtered);
                    }
                });
            });
        }
    });

    $select_function = $("#orgFunction").selectize({
        valueField: '_id',
        labelField: 'title',
        searchField: 'title',
        allowEmptyOption: true,
        maxItems: 1,
        create: false,
        // options are loaded when a department is selected
        /*
        preload: true,
        load: function (callback) {
            $.ajax({
                url: '/api/functions',
                type: 'GET',
                error: function () {
                    callback();
                },
                success: function (res) {
                    callback(res.functions);
                }
            });
        }
        */
    });

    // get a handle to the selectize objects
    if ($select_department.length) {
        select_department = $select_department[0].selectize;
    };
    if ($select_function.length) {
        select_function = $select_function[0].selectize;
        select_function.disable();
    };

    // Initialize Job Department/Function Assigment modal on show
    $('#formAssignDeptModal').on('show.bs.modal', function (event) {
        // Button that triggered the modal
        var button = $(event.relatedTarget);
        // Extract info from data-* attributes
        var jobId = button.data('cit-job-id');
        var jobTitle = button.data('cit-job-title');
        var jobAltTitle = button.data('cit-job-alt-title');
        var jobDepartmentTitle = button.data('cit-job-department-title');
        var jobDepartmentId = button.data('cit-job-department-id');
        var jobFunctionTitle = button.data('cit-job-function-title');
        var jobFunctionId = button.data('cit-job-function-id');
        
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this);
        // set text and values of modal elements
        modal.find('input[name="jobId"]').val(jobId);
        modal.find('#jobTitle').text(jobTitle);
        modal.find('#jobAltTitle').text(jobAltTitle);
        modal.find('#jobDepartmentTitle').text(jobDepartmentTitle);
        modal.find('#jobFunctionTitle').text(jobFunctionTitle);
        
        // reset department/function select elements
        select_department.clear(false);
        select_department.setValue(jobDepartmentId, false);
        
        // the following doesn't work as setting department above will reset function dropdown
        //select_function.clear(false);
        //select_function.setValue(jobFunctionId, false);
    });

    // Initialize Job Department/Function Assigment modal on show
    $('#formDeleteJobModal').on('show.bs.modal', function (event) {
        // Button that triggered the modal
        var button = $(event.relatedTarget);
        // Extract info from data-* attributes
        var jobId = button.data('cit-job-id');
        var jobTitle = button.data('cit-job-title');
        var jobAltTitle = button.data('cit-job-alt-title');
        
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this);
        // set text and values of modal elements
        modal.find('input[name="jobId"]').val(jobId);
        modal.find('#jobTitle').text(jobTitle);
        modal.find('#jobAltTitle').text(jobAltTitle);
    });

    /************* RESPONSIBILITIES **************/
    // enable multi-text input for responsibilities: tasks and authorities
    $('#field-responsibilities').on("click", ".btn-remove-item", function (e) {
        e.preventDefault();
        $(this).parent().parent().remove();
    });
    
    // dynamically adds items to responsibilities field
    $('#field-responsibilities .btn-add-item').on("click", function (e) {
        e.preventDefault();
        
        var html = 
        '<div class="input-group">' + 
            '<span class="input-group-addon"><span class="glyphicon glyphicon-ok-sign"></span></span>' +
            '<input type="text" name="tasks" value="" class="form-control", required/>' + 
            '<span class="input-group-addon"><span class="glyphicon glyphicon-user"></span></span>' +
            '<select name="authorities" id="authorities" class="form-control">' +
                '<option value="ACCOUNTABLE">ACCOUNTABLE</option>' +
                '<option value="RESPONSIBLE" selected>RESPONSIBLE</option>' +
                '<option value="CONSULTED">CONSULTED</option>' +
                '<option value="INFORMED">INFORMED</option>' +
            '</select><span class="input-group-btn">' +
            '<button type="button" class="btn btn-danger btn-remove-item"><span class="glyphicon glyphicon-remove"></span></button></span>' +
        '</div>';

        $(this).before(html);
    });

    /************* Fields for HARD SKILLS **************/
    // enable multi-text input for hard/professional: skills and levels
    $('#field-hard-skills').on("click", ".btn-remove-item", function (e) {
        e.preventDefault();
        $(this).parent().parent().remove();
    });
    
    // dynamically adds items to responsibilities field
    $('#field-hard-skills .btn-add-item').on("click", function (e) {
        e.preventDefault();
        
        var hardSkills = $("#field-hard-skills").data('cit-hardskills');
        
        var options = '';
        hardSkills.forEach(function (option) {
            options += '<option value="' + option._id + '">' + option.title +'</option>';
        });
        
        var html = 
            '<div class="input-group">' +
                '<span class="input-group-addon"><span class="glyphicon glyphicon-tasks"></span></span>' +
                '<select name="professional.skills" id="professional.skills" class="form-control">' + options + '</select>' +
                '<span class="input-group-addon"><span class="glyphicon glyphicon-stats"></span></span>' +
                '<input type="number" step="1" min="1" max="7" name="professional.levels" required="required" class="form-control"/>' +
                '<span class="input-group-btn">' +
                '<button type="button" class="btn btn-danger btn-remove-item"><span class="glyphicon glyphicon-remove"></span></button></span>' +
            '</div>';
        
        $(this).before(html);
    });

    /************* Fields for SOFT SKILLS **************/
    // enable multi-text input for soft/behavioral: skills and levels
    $('#field-soft-skills').on("click", ".btn-remove-item", function (e) {
        e.preventDefault();
        $(this).parent().parent().remove();
    });
    
    // dynamically adds items to responsibilities field
    $('#field-soft-skills .btn-add-item').on("click", function (e) {
        e.preventDefault();
        
        var softSkills = $("#field-soft-skills").data('cit-softskills');
        
        var options = '';
        softSkills.forEach(function (option) {
            options += '<option value="' + option._id + '">' + option.title + '</option>';
        });
        
        var html = 
            '<div class="input-group">' +
                '<span class="input-group-addon"><span class="glyphicon glyphicon-tasks"></span></span>' +
                '<select name="behavioral.skills" class="form-control">' + options + '</select>' +
                '<span class="input-group-addon"><span class="glyphicon glyphicon-stats"></span></span>' +
                '<input type="number" step="1" min="1" max="5" name="behavioral.levels" required="required" class="form-control"/>' +
                '<span class="input-group-btn">' +
                '<button type="button" class="btn btn-warning btn-remove-item"><span class="glyphicon glyphicon-remove"></span></button></span>' +
            '</div>';
        
        $(this).before(html);
    });

})();