    // time variables 
    var hour = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
    var displayHour = ["9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm"];

    // Displaying current time
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    // var currentTime = moment();


    // looping hours and current time

    for (i = 0; i < hour.length; i++) {
        var createDiv = $(` <div id = "hour-${hour[i]}" class = "row time-block" value = ${hour[i]} > `);
        var createTextArea = $("<textarea>");
        $(".container").append(createDiv);
        var currentTime = displayHour[i];

        createDiv.append($("<div class = 'col-10 hour' >").text(currentTime));
        createDiv.append(createTextArea.attr("class", "col-10 description").attr("id", "memo-area"));
        createDiv.append($("<button class = 'col-1 saveBtn button' >").text("save"));

        if (moment().format("Hour") == hour[i]) {
            $("#hour-" + hour[i]).addClass("present")
        } else if (moment().format("Hour") > hour[i]) {
            $("#hour-" + hour[i]).addClass("past")
        } else if (moment().format("Hour") < hour[i]) {
            $("#hour-" + hour[i]).addClass("future")
        }
    }

    $(".saveBtn").on("click", function () {
        var value = $(this).siblings(".description").val();
        var key = $(this).parent().attr("id");
        localStorage.setItem(key, value);
    })

    //loading in local storage
    $("#hour-7 .description").val(localStorage.getItem("hour-7"));
    $("#hour-8 .description").val(localStorage.getItem("hour-8"));
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"))