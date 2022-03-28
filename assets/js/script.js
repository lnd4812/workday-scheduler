// use Moment.js to display current date in a div, with help from Stackoverflow 
var datetime = null;
var date = null;

var update = function () {
   date = moment(new Date())
   datetime.html(date.format('DD MMMM YYYY, h:mm:ss a'));
};

$(document).ready(function() {
   datetime = $("#currentDay")
   update();
   setInterval(update, 1000);
});

// create array of time block values to use for local storage options

//var timeBlockHour = ["8:00", "9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00"];
var Index = 10;

// clicking save button sends appointment to local storage - index using id reference for each hour/details combination
// need to create variable representing the appointment input  
var createAppointment = $("saveBtn").on("click", function() {
var appointment = "";

for (var i = 0; i < Index; i++) {
   var apptTime = $("#hour[i]").val();
   var apptDetails = $("#detail[i]").val()
   appointment.push({
      time: apptTime,
      text: apptDetails
   });
  console.log(appointment);
  
  i=i++
}
});

createAppointment();

//based on current time, determine if appointment is already past (red) or future(green)
function compareTime() {

   var currentHour = moment().format("hh a");
   console.log(currentHour);
   
   //if hour < today, red; if hour is > today, green, else default
   $(".time-block").each(function() {
      var apptTime = parseInt($(this).attr("id"))

      if (apptTime < currentHour) {
        $(this).addClass("past");// time slot takes on ".past" class
      } 
      
      else if (apptTime > currentHour) {  
        $(this).addClass("future");// time slot takes on .future class
      }
      else {
      $(this).addClass("present");
   }  

datetime.trigger("focus");   

  })}
