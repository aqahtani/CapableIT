(function () {
    // Make all charts created to be responsive, 
    // and resize when the browser window does
    Chart.defaults.global.responsive = true;
    Chart.defaults.global.maintainAspectRatio = false;

    /**** Assessment Skill Gaps Charting ****/
    
    // get the hard skill gaps
    var hardLabels = $("#hardGapsChart").data('cit-assessment-hardlabels');
    var hardTargets = $("#hardGapsChart").data('cit-assessment-hardtargets');
    var hardSelfCurrents = $("#hardGapsChart").data('cit-assessment-hardselfcurrents');
    var hardPrimeCurrents = $("#hardGapsChart").data('cit-assessment-hardprimecurrents');
    // get the soft skill gaps
    var softLabels = $("#softGapsChart").data('cit-assessment-softlabels');
    var softTargets = $("#softGapsChart").data('cit-assessment-softtargets');
    var softSelfCurrents = $("#softGapsChart").data('cit-assessment-softselfcurrents');
    var softPrimeCurrents = $("#softGapsChart").data('cit-assessment-softprimecurrents');

    // compose data 
    var hardData = {
        labels: hardLabels,
        datasets: [
            {
                label: "Target Levels",
                fillColor: "rgba(231,76,60,0.3)",
                strokeColor: "rgba(231,76,60,1)",
                pointColor: "rgba(231,76,60,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(231,76,60,1)",
                data: hardTargets
            },
            {
                label: "Self Assessment",
                fillColor: "rgba(42,147,217,0.3)",
                strokeColor: "rgba(42,147,217,1)",
                pointColor: "rgba(42,147,217,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(42,147,217,1)",
                data: hardSelfCurrents
            },
            {
                label: "Prime Assessment",
                fillColor: "rgba(24,188,156,0.3)",
                strokeColor: "rgba(24,188,156,1)",
                pointColor: "rgba(24,188,156,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(24,188,156,1)",
                data: hardPrimeCurrents
            }
        ]
    };
    
    var softData = {
        labels: softLabels,
        datasets: [
            {
                label: "Target Levels",
                fillColor: "rgba(243,156,18,0.3)",
                strokeColor: "rgba(243,156,18,1)",
                pointColor: "rgba(243,156,18,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(243,156,18,1)",
                data: softTargets
            },
            {
                label: "Self Assessment",
                fillColor: "rgba(42,147,217,0.3)",
                strokeColor: "rgba(42,147,217,1)",
                pointColor: "rgba(42,147,217,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(42,147,217,1)",
                data: softSelfCurrents
            },
            {
                label: "Prime Assessment",
                fillColor: "rgba(24,188,156,0.3)",
                strokeColor: "rgba(24,188,156,1)",
                pointColor: "rgba(24,188,156,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(24,188,156,1)",
                data: softPrimeCurrents
            }
        ]
    };
    
    // Get context with jQuery - using jQuery's .get() method.
    // This will get the first returned node in the jQuery collection.
    var hardCtx = $("#hardGapsChart").get(0).getContext("2d");
    var softCtx = $("#softGapsChart").get(0).getContext("2d");

    // create charts
    var hardRadarChart = new Chart(hardCtx).Radar(hardData, {
        //name: 'Professional Skill Assessments',
        scaleOverride: true,
        scaleSteps: 7,
        scaleStepWidth: 1,
        scaleStartValue: 0
    });
    //$("#hardGapsChartLegend").append(hardRadarChart.generateLegend());
    
    var softRadarChart = new Chart(softCtx).Radar(softData, {
        scaleOverride: true,
        scaleSteps: 5,
        scaleStepWidth: 1,
        scaleStartValue: 0,
    });
    
    
})();