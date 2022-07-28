

var today = moment();

// (time and textArea)
var timeblockEl = document.querySelector(".container");

var timeblockEl = document.querySelector(".container");

// shows day of thw week, date and time
$("#currentday").text(today.format("LLLL"));


$(".saveBtn").on('click', function(){
    var textvalue = $(this).siblings(".desciption").val();

    var timekey = $(this).parent().attr("id");

    localStorage.setItem(timekey,textvalue);
});


$('#hour8 .description').val(localStorage.getItem('hour8'));
$('#hour9 .description').val(localStorage.getItem('hour9'));
$('#hour10 .description').val(localStorage.getItem('hour10'));
$('#hour11 .description').val(localStorage.getItem('hour11'));
$('#hour12 .description').val(localStorage.getItem('hour12'));
$('#hour13 .description').val(localStorage.getItem('hour13'));
$('#hour14 .description').val(localStorage.getItem('hour14'));
$('#hour15 .description').val(localStorage.getItem('hour15'));
$('#hour16 .description').val(localStorage.getItem('hour16'));
$('#hour17 .description').val(localStorage.getItem('hour17'));


function auditTask() {
    var currenthour = today.hours();

    $(".time-block").each(function(){
    var timeId = parseInt($(this).attr('id').split("hour")[1]);
    if (timeId < currenthour) {
        $(this).addClass("past");
        $(this).addClass("future");
        $(this).addClass("present");
    }
    else{
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).removeClass('future');

    }
    } );
}

auditTask()

setTimeout(function(){

    location = "";
}, 1000 * 60);
