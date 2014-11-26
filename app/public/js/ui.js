(function () {
    
    //var $button = $("<div id='source-button' class='btn btn-primary btn-xs'>&lt; &gt;</div>").click(function () {
    //    var html = $(this).parent().html();
    //    html = cleanSource(html);
    //    $("#source-modal pre").text(html);
    //    $("#source-modal").modal();
    //});
    
    $('.bs-component [data-toggle="popover"]').popover();
    $('.bs-component [data-toggle="tooltip"]').tooltip();
    
    //$(".bs-component").hover(function () {
    //    $(this).append($button);
    //    $button.show();
    //}, function () {
    //    $button.hide();
    //});
    
    //function cleanSource(html) {
    //    var lines = html.split(/\n/);
        
    //    lines.shift();
    //    lines.splice(-1, 1);
        
    //    var indentSize = lines[0].length - lines[0].trim().length,
    //        re = new RegExp(" {" + indentSize + "}");
        
    //    lines = lines.map(function (line) {
    //        if (line.match(re)) {
    //            line = line.substring(indentSize);
    //        }
            
    //        return line;
    //    });
        
    //    lines = lines.join("\n");
        
    //    return lines;
    //}

    function elFormatResult(el) {
        var markup = '<div color="' + el.color + '">' + el.grade + ' - ' + el.title + '</div>';
        
        return markup;
    }
    
    function elFormatSelection(el) {
        return '<div color="' + el.color + '">' + el.grade + '</div>';
    }
    
    $("#english-level").select2({
        placeholder: "Select English Level",
        //minimumInputLength: 1,
        ajax: {
            // instead of writing the function to execute the request we use Select2's convenient helper
            url: "/api/englishlevels",
            dataType: 'json',
            quietMillis: 500,
            //data: { results: data },
            //data: { id: '_id', text: 'grade' },
            results: function (data) {
                // parse the results into the format expected by Select2.
                // since we are using custom formatting functions we do not need to alter the remote JSON data
                return { results: data, id: '_id', text: 'grade' };
            },
        //cache: true
        },
        initSelection: function (element, callback) {
            // the input tag has a value attribute preloaded that points to a preselected repository's id
            // this function resolves that id attribute to an object that select2 can render
            // using its formatResult renderer - that way the repository name is shown preselected
            var id = $(element).val();
            if (id !== "") {
                $.ajax("/api/englishlevels/" + id, {
                    dataType: "json"
                }).done(function (data) { callback(data); });
            }
        },
        formatResult: elFormatResult, // omitted for brevity, see the source of this page
        formatSelection: elFormatSelection,  // omitted for brevity, see the source of this page
        dropdownCssClass: "bigdrop", // apply css that makes the dropdown taller
        escapeMarkup: function (m) { return m; } // we do not want to escape markup since we are displaying html in results
    });

})();