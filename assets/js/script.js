//variables defined
var time = moment();
var saveBtn = $(".saveBtn");

//displays current date formatted
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

//function that runs on initial start
function init() {
    //for each time block class run this function
    $(".time-block").each(function () {
        //set variable id to this specific time-block associated id
        var id = $(this).attr("id");
        //set variable schedule to whatever was in storage under previously specified id
        var schedule = localStorage.getItem(id);

        if (schedule !== null) {
            //this time block's children class schedule will contain the value of whatever was pulled from the local storage under id
            $(this).children(".schedule").val(schedule);
        }
    });
}

function pastPresentFuture() {
    hour = time.hours();
    $(".time-block").each(function () {
        var currentHour = parseInt($(this).attr("id"));

        if (currentHour > hour) {
            $(this).addClass("future");
        } else if (currentHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
}

saveBtn.on("click", function () {
    var time = $(".saveBtn").parent().attr("id");
    var schedule = $(".saveBtn").siblings(".schedule").val();

    localStorage.setItem(time, schedule);
});

init();
pastPresentFuture();