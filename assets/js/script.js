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

// function that checks hour block against the current time
function pastPresentFuture() {
    // variable hour = moment.hours()
    hour = time.hours();
    //for each time block run the function that grabs the id for the current block and runs it against the if statement
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

//waits for click on any save button class and runs function
saveBtn.on("click", function () {
    //grabs the id from parent attribute
    var time = $(this).parent().attr("id");
    //grabs the value of sibling class .schedule
    var schedule = $(this).siblings(".schedule").val();

    localStorage.setItem(time, schedule);
});

init();
pastPresentFuture();