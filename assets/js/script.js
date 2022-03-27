// use Moment.js to display current date in a div with a little help from Stackoverflow 
var datetime = null;
var date = null;

var update = function () {
   date = moment(new Date())
   datetime.html(date.format('dddgi, MMMM YYYY, h:mm:ss a'));
};

$(document).ready(function() {
   datetime = $("#currentDay")
   update();
   setInterval(update, 1000);
});


var apptStatus = ["past", "present", "future"];



   
      // save button in textarea of description (does a variable need to be declared here to append )
      $(".textarea").on("click", function() {
         var saveAppt=$("saveBtn").addClass(".btn");
         saveAppt.append(saveBtn);
            localStorage.setItem("appt", JSON.stringify(appt));
      })
      //based on current time, determine if appointment is already past (red) or future(green)
var currentHour = moment().format("hh a");
console.log(currentHour);
   // if hour < today, red; if hour is > today, green, else default
   if (apptTime < currentHour) {
      $(this).addClass("past");// time slot takes on ".past" class
   } 
   else if (apptTime > currentHour) {
      $(this).addClass("future");// time slot takes on .future class
   }
   else {
      $(this).addClass("present");
   }  
// function to ensure appointment is displayed when planner first opens or screen is refreshed
currentDayTime.trigger("focus");   




