// use Moment.js to display current date in a div, with help from Stackoverflow 
var currentTime = null;
var date = null;

var update = function () {
   date = moment(new Date())
   currentTime.html(date.format('DD MMMM YYYY, HH:mm:ss'));
};

$(document).ready(function() {
   currentTime = $("#currentDay")
   update();
   setInterval(update, 1000);
   
   // on click of saved button for specific hour, save any text entered for that hour to local storage
   $(document).ready(function() {
      const apptmts = JSON.parse(localStorage.apptmts || '[]');
      $(".saveBtn").on("click", function(event) {
         event.preventDefault(); 
         var apptTime = $(this).prev().prev().find("p").html()
         var apptEl = $(this).prev().attr("id") 
         var apptDetails = $(this).prev().val() 
         var appointment = {
            time: apptTime,
            timeBlockEl: apptEl,
            details: apptDetails        
         }   

         // create array to enable storage of more than one item in Scheduler
         apptmts.push(appointment);
         localStorage.setItem("apptmts", JSON.stringify(apptmts));
      });

      // retrieve information from localStorage
      var information = JSON.parse(window.localStorage.getItem("apptmts"));
      
      // enable any information stored to persist even if screen refreshed
      if (information) {
         for (var i = 0; i < information.length; i++) {
            var timeRow = information[i];
            var timeBlockElId = timeRow.timeBlockEl;
            var timeBlockHTMLEl = document.getElementById(timeBlockElId);
            timeBlockHTMLEl.innerText = timeRow.details;
         }  
      } 
   });  
      // if hour attached to each time block is earlier than current time (by hour), background is red, if later, background is green, otherwise grey
         
      // create an array of all hours in the schedule
         var hours = ["08:00", "09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00"];              
         
         // get current time, in hours, when site is being viewed for comparison
         var currentHour = parseInt(date.format('HH:00'));
         console.log(currentHour)
         
         for (var i = 0; i < hours.length; ) {
            if (parseInt(hours[i]) < currentHour) {
               $("#timeblock-" + [i]).addClass("past");
            }
            else if (parseInt(hours) > currentHour) {
               $("#timeblock-" + [i]).addClass("future");
            }
            else { 
               $("#timeblock-" + [i]).addClass("present");
                        }
            console.log(parseInt(hours[i]));
            i++
         }
             
   
}); // currentDay