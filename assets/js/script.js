// use Moment.js to display current date in a div (#displayMoment) 
var currentDayTime = moment().format('MMM DD, YYYY - hh:mm a'); 
$("#currentDay").html(currentDayTime); 

// set up the variable options for business hours from 8am to 5pm
var hourList = ["8:00", "9:00", "10:00,","11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];
var index = 0;

// pass hours into an array to set up the time blocks
for (var i = 0; i < hourList.length; i++) 
   // hour = hourList[i]    
    

// function that assigns value to apptTime and apptDescription to pass through createAppt function
// initialize values as blank
var apptTime = "" 
var apptDescription = "";


// does this function actually need a previous function to allocate
var createAppt = function(apptTime, apptDescription) {
   var apptLi = $("<li>").addClass("layout");
   var apptSpanHour = $("<span>").addClass("hour");
   var apptP = $("<p>").addClass("hour").text(apptTime);

   var apptSpanDesc = $("<span>").addClass("time-block");
   var apptText = $("<textarea>").addClass("description").text(apptDescription);

   apptLi.append(apptSpanHour, apptP) +(apptSpanDesc, apptText);
   var appt = apptTime + apptDescription;

   $("#daytimer-" + appt).append(apptLi);
};
   var loadAppt = function() {
   appt = JSON.parse(localStorage.getItem("appt"));

   // if nothing in local storage, create new object to track all appt arrays
   if (!appt) {
      appt = {
         hour: [],
         description:[]
      };

   //$.each(appt, function(appt, arr) {
   //console.log(appt, arr);
   //arr.forEach(function(appt) {
    //  createAppt()
  // })

      // save button in textarea of description (does a variable need to be declared here to append )
      $(".textarea").on("click", function() {
         var saveAppt=$("saveBtn").addClass(".btn");
         saveAppt.append(saveBtn);
            localStorage.setItem("appt", JSON.stringify(appt));
      })
   };


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
CurrentDayTime.trigger("focus");   

};
