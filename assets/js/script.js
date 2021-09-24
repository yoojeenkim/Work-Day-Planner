var time = moment();
var saveBtn = $(".saveBtn");

$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

function startScheduler() {

    $(".time-block").each(function () {
        var id = $(this).attr("id");
        var schedule = localStorage.getItem(id);

        if (schedule !== null) {
            $(this).children(".schedule").val(schedule);
        }
    });
}

function pastPresentFuture() {
    hour = time.hours();
    $(".time-block").each(function () {
        var thisHour = parseInt($(this).attr("id"));

        if (thisHour > hour) {
            $(this).addClass("future")
        }
        else if (thisHour === hour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("past");
        }
    })
}

saveBtn.on("click", function () {
    var time = $(".saveBtn").parent().attr("id");
    var schedule = $(".saveBtn").siblings(".schedule").val();

    localStorage.setItem(time, schedule);
});

startScheduler();
pastPresentFuture();