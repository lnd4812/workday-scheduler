// use Moment.js to display current date in a div (#displayMoment) 
var currentDayTime = moment().format('MMM DD, YYYY - hh:mm a'); 
$("#currentDay").html(currentDayTime); 

// What I want am attempting to do:
// 1. figure out how to add the rows to the display
   // I thought I would do so by running each hour through a "for" loop, but I can't figure out how to set it up
   // do I set up the For loop first and put the createPlanner before the return statement or is this completely wrong? 
// 2. when I add an appointment, I want to send it to local storage by clicking the "save" button
   // when the scheduler opens or the page refreshes, need to make sure that item is still there    
// 3. I need to compare appointment time against current time to determine if apppointment is already past due, coming up, or within current time


// set up the variable options for business hours from 8am to 5pm
var hourList = ["8:00", "9:00", "10:00,","11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];
var apptStatus = ["past", "present", "future"];

// pass hours into an array to set up the time blocks
//for (var i = 0; i < hourList.length; i++) 
  // var hourListTime = hourList[i]

// ///
var createPlanner = function(hourList) {
   var timeRowLi = $("<li>").addClass(".testing");
   var timeSpan = $("<span>").addClass("time-block");
   var rowTime = $("<p>").addClass("hour").text("hour");
   var apptDescription = $("<textarea>").addClass("description");
   var saveButton = $("button").addClass("saveBtn");

   timeRowLi.append(timeSpan, rowTime, apptDescription, saveButton);
};

// does this function actually need a previous function to allocate
   var loadAppt = function() {
   appt = JSON.parse(localStorage.getItem("appt"));

   // if nothing in local storage, create new object to track all appt arrays
   if (!appt) {
         appt = {
         hour: [],
         description:[]
      };

   
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
currentDayTime.trigger("focus");   

};

createPlanner();
