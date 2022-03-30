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


   // on click of saved button for specific hour, save any text entered for that hour to local storage
   // how do I get this to save something each time a new appointment is added? - ".each loop?"
   
   $(document).ready(function() {
      const apptmts = JSON.parse(localStorage.apptmts || '[]');
      $(".saveBtn").on("click", function() {
      event.preventDefault(); {
         var apptTime = $(this).prev().prev().find("p").html()
         var apptDetails = $(this).prev().val() 
         var appointment = {
            Time: apptTime,
            Details: apptDetails
         }
      };    
      apptmts.push(appointment);
      localStorage.setItem("apptmts", JSON.stringify(apptmts));

      var information = JSON.parse(window.localStorage.getItem("apptmts"));
      console.log(information);
    }); 
   });
   // enable any information stored to persist even if screen refreshed
   
   
   //    //based on current time, determine if appointment is already past (red) or future(green)
   // var currentHour = (date.format('HH:mm'));
      
   // //index each hour appointent slot
   // jQuery.each(hours, function(index,value) {
   //    console.log("index", index, "value", value);
   // });
  
   // if hour < currenttoday, red; if hour is > today, green, else default
//   for(var i = 8; i < hours.length+8;) {
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
//    }
});