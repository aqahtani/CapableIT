(function () {
    
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
    
    
    /**** Assessment Skill Gaps Charting ****/

    // Make all charts created to be responsive, 
    // and resize when the browser window does
    Chart.defaults.global.responsive = true;
    Chart.defaults.global.maintainAspectRatio = false;
        
    // get the hard and soft skill gaps
    var hardLabels = $("#hardGapsChart").data('cit-assessment-hardlabels');
    var hardTargets = $("#hardGapsChart").data('cit-assessment-hardtargets');
    var hardCurrents = $("#hardGapsChart").data('cit-assessment-hardcurrents');
    var softLabels = $("#softGapsChart").data('cit-assessment-softlabels');
    var softTargets = $("#softGapsChart").data('cit-assessment-softtargets');
    var softCurrents = $("#softGapsChart").data('cit-assessment-softcurrents');

    // compose data 
    var hardData = {
        labels: hardLabels,
        datasets: [
            {
                label: "Target Levels",
                fillColor: "rgba(231,76,60,0.2)",
                strokeColor: "rgba(231,76,60,1)",
                pointColor: "rgba(231,76,60,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(231,76,60,1)",
                data: hardTargets
            },
            {
                label: "Current Levels",
                fillColor: "rgba(42,147,217,0.2)",
                strokeColor: "rgba(42,147,217,1)",
                pointColor: "rgba(42,147,217,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(42,147,217,1)",
                data: hardCurrents
            }
        ]
    };

    var softData = {
        labels: softLabels,
        datasets: [
            {
                label: "Target Levels",
                fillColor: "rgba(243,156,18,0.2)",
                strokeColor: "rgba(243,156,18,1)",
                pointColor: "rgba(243,156,18,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(243,156,18,1)",
                data: softTargets
            },
            {
                label: "Current Levels",
                fillColor: "rgba(42,147,217,0.2)",
                strokeColor: "rgba(42,147,217,1)",
                pointColor: "rgba(42,147,217,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(42,147,217,1)",
                data: softCurrents
            }
        ]
    };
    
    // Get context with jQuery - using jQuery's .get() method.
    // This will get the first returned node in the jQuery collection.
    var hardCtx = $("#hardGapsChart").get(0).getContext("2d");
    var softCtx = $("#softGapsChart").get(0).getContext("2d");

    // create charts
    var hardRadarChart = new Chart(hardCtx).Radar(hardData, {
        scaleOverride: true,
        scaleSteps: 7,
        scaleStepWidth: 1,
        scaleStartValue: 0,
    });
    var softRadarChart = new Chart(softCtx).Radar(softData, {
        scaleOverride: true,
        scaleSteps: 5,
        scaleStepWidth: 1,
        scaleStartValue: 0,
    });
    
})();