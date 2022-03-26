// Initialize today 
//var today = "";

// use Moment.js to display current date in a div (#displayMoment) 
var today = moment().format('MMM DD, YYYY - hh:mm a'); 
$("#currentDay").html(today); 

// set up the variable options for business hours from 8am to 5pm
var hour = ["8:00", "9:00", "10:00,","11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];
index = 0;

// create the appointment slots - hours on left, descriptions on right with saved buttons on far right

// "description section" is input field
// information input goes set into local storage.  When page is refreshed, information "gets" extracted from local storage

// based on current time, determine if appointment is already past (red) or future(green)
// if hour < today, red; if hour is > today, green, else default