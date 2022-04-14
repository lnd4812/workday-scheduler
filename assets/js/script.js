// use Moment.js to display current date in a div (with help from Stackoverflow) 
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
   
   // on click of saved button for specific hour, store any text entered for that hour to local storage
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

         // create array to enable storage of more than one item in Scheduler and convert to string
         apptmts.push(appointment);
         localStorage.setItem("apptmts", JSON.stringify(apptmts));
      });

      // retrieve array data from localStorage into variable "information"
      var information = JSON.parse(window.localStorage.getItem("apptmts"));
      
      // enable any information saved to localStorage to persist after browser opened / screen refreshed
      if (information) {
         for (var i = 0; i < information.length; i++) {
            var timeRow = information[i];
            var timeBlockElId = timeRow.timeBlockEl;
            var timeBlockHTMLEl = document.getElementById("timeBlockElId");
            timeBlockHTMLEl.innerText = timeRow.details;
         }  
      } 
   });  
         
   // if hour attached to each time block is earlier than current time (by hour), background is red, if later, background is green, otherwise grey
   $(".time").each(function() {
      var time = parseInt($(this).html());
            
      // get current time, in hours, for comparison relative to time when webpage is being viewed
      var currentHour = parseInt(moment().hour());
         
      // to more easily enable change of class to associated textarea
      var timeId = $(this).attr("id");
      var descriptionId = "#timeblock-" + timeId;

      // change class based on current time vs. each timeblock's time
      if (time < currentHour) {
         // textarea color shows grey if hour has already gone by
         $(descriptionId).addClass("past");
      } else if
         // textarea color is green if time is later than current hour
         (time > currentHour) {
         $(descriptionId).addClass("future");
      } else // current hour/ textarea is red
         $(descriptionId).addClass("present");
   });// time.each(function)

}); // currentDay