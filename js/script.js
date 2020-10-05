// create an array for timeblocks

// loop to add timeblocks to container

$(document).ready(function() {
    var hours = {
        amHours: [7, 8, 9, 10, 11],
        pmHours: [12, 1, 2, 3, 4, 5, 6]
    };

    // AM hours

    for (var i=0; i< hours.amHours.length;  i++) {
        var newRow = $('<div class='row'></div>');
        $('.container').append(newRow);
        var hrCol = $(`<div class='col-1 time-block'>${hours.amHours[i]}AM</div>`);
        var textCol = $(`<textarea class="col-10" data-time=${colorChangeObject.amColorHours[i]}>Enter your notes here...</textarea>`);
        var buttonCol = $('<button class="col-1 saveBtn">Save</button>');
        $(newRow).append(hrCol, textCol, buttonCol);
    }

    // PM hours

    for (var i=0; i< hours.pmHours.length;  i++) {
        var newRow = $('<div class='row'></div>');
        $('.container').append(newRow);
        var hrCol = $(`<div class='col-1 time-block'>${hours.pmHours[i]}AM</div>`);
        var textCol = $(`<textarea class="col-10" data-time=${colorChangeObject.pmColorHours[i]}>Enter your notes here...</textarea>`);
        var buttonCol = $('<button class="col-1 saveBtn">Save</button>');
        $(newRow).append(hrCol, textCol, buttonCol);
    }

})