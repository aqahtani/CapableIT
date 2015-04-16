(function () {
    // Make all charts created to be responsive, 
    // and resize when the browser window does
    Chart.defaults.global.responsive = true;
    Chart.defaults.global.maintainAspectRatio = false;

    /**** Assessment Skill Gaps Charting ****/
    
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