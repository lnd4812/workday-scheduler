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

jQuery.each(hours, function(index,value) {
   console.log("index", index, "value", value);
 });
});



$("#save-8").on("click", function() {
   var apptTime = $(this).parent().attr("id")
   var apptDetails = $(this).siblings(".description").val() 
   console.log(apptTime, apptDetails);
   localStorage.setItem("apptTime", "apptDetails", JSON.stringify(apptTime, apptDetails));
});

  

   



// //    localStorage.setItem("apptTime", apptTime, "apptDetails", apptDetails);
// //    i++   
// // }
// // });

//    // create array of time block values to use for local storage options; hour (apptTime) and description (apptDetails) are children of row time-block.
  

//    //based on current time, determine if appointment is already past (red) or future(green)
//    var currentHour = (date.format('HH:mm'));
      
//    // //index each hour appointent slot
//    // jQuery.each(hours, function(index,value) {
//    //    console.log("index", index, "value", value);
//    // });
  
//    // if hour < currenttoday, red; if hour is > today, green, else default
//   for(var i = 0; i < hours.length;) {
//       $(".time-block").each(function() {
//          var hours = parseInt($(this).attr("id"))

//          if (hours[i] === currentHour) {
//             $(this).addClass("present");
//          } 
//          else if (hours[i] > currentHour) {  
//             $(this).addClass("future");// time slot takes on .future class
//          }
//          else {
//             $(this).addClass("past"); // time slot takes on ".past" class
//          }  
//       });
//       i++
  
// });