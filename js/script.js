// create an array for timeblocks

// loop to add timeblocks to container

$(document).ready(function() {
    $(".saveBtn").on("click", function() {
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, value);
    });

    function updateHour() {
        var currentHour = moment().hours();
        $(".time-block").each(function() {
            var hour = parseInt($(this).attr("id").split(""));
            if (hour < currentHour) {
                $(this).addClass("past");
            } else if (hour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });

    }
    
    updateHour();

    var interval = setInterval(updateHour, 15000);

    // load data from local storage

    $("#hour-7 .description").val(localStorage.getItem("hour-7"));
    $("#hour-8 .description").val(localStorage.getItem("hour-8"));
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-9 .description").val(localStorage.getItem("hour-10"));
    $("#hour-9 .description").val(localStorage.getItem("hour-11"));
    $("#hour-9 .description").val(localStorage.getItem("hour-12")); 
    $("#hour-9 .description").val(localStorage.getItem("hour-1"));
    $("#hour-9 .description").val(localStorage.getItem("hour-2"));
    $("#hour-9 .description").val(localStorage.getItem("hour-3"));
    $("#hour-9 .description").val(localStorage.getItem("hour-4"));
    $("#hour-9 .description").val(localStorage.getItem("hour-5"));


   
    // // AM hours

    // for (var i=0; i< hours.amHours.length;  i++) {
    //     var newRow = $('<div class='row'></div>');
    //     $('.container').append(newRow);
    //     var hrCol = $(`<div class='col-1 time-block'>${hours.amHours[i]}AM</div>`);
    //     var textCol = $(`<textarea class="col-10" data-time=${colorChangeObject.amColorHours[i]}>Enter your notes here...</textarea>`);
    //     var buttonCol = $('<button class="col-1 saveBtn">Save</button>');
    //     $(newRow).append(hrCol, textCol, buttonCol);
    // }

    // // PM hours

    // for (var i=0; i< hours.pmHours.length;  i++) {
    //     var newRow = $('<div class='row'></div>');
    //     $('.container').append(newRow);
    //     var hrCol = $(`<div class='col-1 time-block'>${hours.pmHours[i]}AM</div>`);
    //     var textCol = $(`<textarea class="col-10" data-time=${colorChangeObject.pmColorHours[i]}>Enter your notes here...</textarea>`);
    //     var buttonCol = $('<button class="col-1 saveBtn">Save</button>');
    //     $(newRow).append(hrCol, textCol, buttonCol);
    // } 

    // // loading local storage    
    // var load = localStorage.getItem("storage"); 
    // if(load !== null) {
    //     storage = JSON.parse(load);
    //     $("textarea").each(function(index) {
    //         $(this).val(storage [7 + index]);
    //     });
    // }

    //Displaying current time
    $("#currentDay").text(dayjs().format("ddd, MMM DD, YYYY"));


//     // Saving data to local storage

//     $("button").on("click", function () { //when button is clicked, get content, and save it to temp storage, then send to local storage
//         var str = $(this).prev().val();
//         var idx = $(this).prev().prev().attr("data-time");
//         storage[idx] = str;
//         localStorage.setItem("storage", JSON.stringify(storage));
//       });

// })