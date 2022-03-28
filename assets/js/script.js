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


var apptTime = ["8:00", "9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00"];

// create array from values in hour (var apptTime) & description classes on click of saveBtn


// when save button clicked, input to textarea (classname "description" )
$(".description").on("click", "textarea", function() {
   var apptDetails = $(this).apptDetails().trim();
   var textInput = $("<textarea>").addClass("description").val(apptDetails); 
});


   // create array of time block values to use for local storage options; hour (apptTime) and description (apptDetails) are children of row time-block.
  

   //based on current time, determine if appointment is already past (red) or future(green)
   var currentHour = (date.format('HH:mm'));
      
   //index each hour appointent slot
   jQuery.each(apptTime, function(index,value) {
      console.log("index", index, "value", value);
   });
   console.log(apptTime);

   // if hour < currenttoday, red; if hour is > today, green, else default
  for(var i = 0; i < apptTime.length;) {
      $(".time-block").each(function() {
         var apptTime = parseInt($(this).attr("id"))

         if (apptTime === currentHour) {
            $(this).addClass("present");
         } 
         else if (apptTime > currentHour) 
         {  
            $(this).addClass("future");// time slot takes on .future class
         }
         else {
            $(this).addClass("past"); // time slot takes on ".past" class
         }  
      });
      i++
   }
});