/* FETCH LIBRARY HOURS */
<!-- Script for updating Burns Lib hours-->
<script>
$(document).ready(function(){
    var libID = 507;
    var libName = "BurnsLibrary";
    // grab each library's data from the output and place it where it needs to go
    function setHours(data){
        var libList = $(data["out"]).find("ul#" + libID);
        var todaysHours = $(data["out"]).find("ul.today li.hours").html();

        if (libList && libList.length > 0){
            $("div#" + libName).append(todaysHours);
            $("div#weekly_hours_container").append(libList.clone());
        }

        if ($("#libstatus") && $("#libstatus").length){
            var isopen = $("#nowopen");
            var libstatus = "closed"
            if (isopen && isopen.length){
                libstatus = "Open";
            }
            $("#libstatus").html("<strong>" + libstatus + "</strong>");
        }
    };

    // call to the hours api
    $.ajax({
        type: "GET",
        url: "//arc.bc.edu/libhours/libweeklyhours.php",
        jsonp: "callback",
        dataType: "jsonp",
        cache: true,
        contentType: "application/javascript",
        data: {l: libID},
        headers: {'Cache-Control': 'max-age=60'},
        success: setHours,
        error: function(){
            $("div#weekly_hours_container").html("Error retrieving hours");
        },
    });
});
</script>