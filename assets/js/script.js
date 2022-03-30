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
   
       
   var hours = ["8:00", "9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00"];   
   // coding to set up schedule layout
   
   // jQuery.each(hours, function(index,value) {
   // console.log("index", index, "value", value);
   // });

   $(".saveBtn").on("click", function() {
   var apptTime = $(this).prev().prev().find("p").html()// I want this to be the hour for the save-8 button
   var apptDetails = $(this).prev().val() // want this to be the text tied to save-8 id need to stringify this text
   var appointment = {
      Time: apptTime,
      Details: apptDetails
   } 
   console.log(appointment);
   localStorage.setItem("appointment", JSON.stringify(appointment));

});   
 


// //    localStorage.setItem("apptTime", apptTime, "apptDetails", apptDetails);
// //    i++   
// // }
// // });

//    // create array of time block values to use for local storage options; hour (apptTime) and description (apptDetails) are children of row time-block.
  

// //    //based on current time, determine if appointment is already past (red) or future(green)
   var currentHour = (date.format('HH:mm'));
      
   // //index each hour appointent slot
   // jQuery.each(hours, function(index,value) {
   //    console.log("index", index, "value", value);
   // });
  
   // if hour < currenttoday, red; if hour is > today, green, else default
  for(var i = 8; i < hours.length+8;) {
      $(".time-block").each(function() {
         var hours = parseInt($(this).attr("id"))

         if (hours[i] === currentHour) {
            $(this).addClass("present");
         } 
         else if (hours[i] > currentHour) {  
            $(this).addClass("future");// time slot takes on .future class
         }
         else {
            $(this).addClass("past"); // time slot takes on ".past" class
         }  
      });
      i++
   }
});