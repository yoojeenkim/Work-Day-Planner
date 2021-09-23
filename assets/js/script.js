var time = moment();
var hourNine = $("#9");
var hourTen = $("#10");
var hourEleven = $("#11");
var hourTwelve = $("#12");
var hourThirteen = $("#13");
var hourFourteen = $("#14");
var hourFifteen = $("#15");
var hourSixteen = $("#16");
var hourSeventeen = $("#17");
var saveBtn = $(".saveBtn");

$("#currentDay").text(moment().format('MMMM Do, YYYY'));

function startScheduler() {

    $(".time-block").each(function () {
        var id = $(this).attr("id");
        var schedule = localStorage.getItem(id);

        if (schedule !== null) {
            $(this).children(".schedule").val(schedule);
        }
    })
}

saveBtn.on("click", function() {
    var time = $(this).parent().attr("id");
    var schedule = $(this).siblings(".schedule").val();

    localStorage.setItem(time,schedule);
});

function pastPresentFuture() {
    hour = time.hours();
    $(".time-block").each(function() {
        var thisHour = parseInt($(this).attr("id"));

        if (thisHour > hour) {
            $(this).addClass("future");
        }
        else if (thisHour === hour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("past");
        }
    })
}

startScheduler();
pastPresentFuture();