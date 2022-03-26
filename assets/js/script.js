// set variable in which to store appointments
var appts = {};

// use Moment.js to display current date in a div (#displayMoment) 
var today = moment().format('MMM DD YYYYY - hh:mm a');  
console.log(today);

// set up the variable options for hour
var hour = ["8:00", "9:00", "10:00,","11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"];

// set up function to enable appointments to be created
var createAppt = function(apptText, apptDate) {
  // create elements that make up appointment
  var apptLi = $("<li>").addClass("appt-slot-item");
  var apptP = $("<p>").addClass("m-1").text(apptText);

// append span and p element to parent li
apptLi.append(apptSpan, apptP);

// check due date
  auditAppt(apptLi);

// append to ul list on the page
  $("#appt-" + apptDate).append(apptLi);
};

// load appointment information saved into local Storage
var loadAppt = function() {
  appts = JSON.parse(localStorage.getItem("appts"));

  // if nothing in localStorage, create a new object to track all appt status arrays
  if (!appts) {
    appts = {
      time: [],
      location: [],
      purpose: []
    };
  }

  // loop over object properties
  $.each(appt, function(list, arr) {
    console.log(list, arr);
    // then loop over sub-array
    arr.forEach(function(appt) {
      createAppt(appt.text, appt.date, list);
    });
  });
};

var saveAppt = function() {
  localStorage.setItem("appts", JSON.stringify(appts));
};

// enable draggable/sortable feature on appt-slot elements
$(".card .appt-slot").sortable({
  // enable dragging across lists
  connectWith: $(".card .appt-slot"),
  scroll: false,
  tolerance: "pointer",
  helper: "clone",
  activate: function(event, ui) {
    $(this).addClass("dropover");
  },
  deactivate: function(event, ui) {
    $(this).removeClass("dropover");
  },
  over: function(event) {
    $(this).addClass("dropover-active", event.target);
  },
  out: function(event) {
    $(this).removeClass("dropover-active", event.target);
    console.log(event);
  },
  update: function() {
    var tempArr = [];

    // loop over current set of children in sortable list
    $(this).children().each(function() {
        // save values in temp array
        tempArr.push({
          text: $(this).find("p").text().trim(),
          date: $(this).find("span").text().trim(),
        });
      });

    // trim down list's ID to match object property
    var arrName = $(this).attr("id").replace("list-", "");

    // update array on appts object and save
    appts[arrName] = tempArr;
    saveAppts();
  },
  stop: function(event) {
    $(this).removeClass("dropover");
  }
});

// modal was triggered
$("#appt-form-modal").on("show.bs.modal", function() {
  // clear values
  $("#modalapptDescription, #modalDueDate").val("");
});

// modal is fully visible
$("#appt-form-modal").on("shown.bs.modal", function() {
  // highlight textarea
  $("#modalapptDescription").trigger("focus");
});

// save button if modal was clicked
$("#appt-form-modal .btn-primary").click(function() {
  // get form values
  var apptText = $("#modalapptDescription").val();
  var apptDate = $("#modalDueDate").val();
    
  if (apptText && apptDate) {
    createAppt(apptText, apptDate, apptTime[i]);

    // close modal
    $("#appt-form-modal").modal("hide");

    // save in appts array
    appts.apptTime.push({
      text: apptText,
      date: apptDate,
    });

    saveAppts();
  }
});

// appt text was clicked
$(".appt-slot").on("click", "p", function() {
  // get current text of p element
  var text = $(this).text().trim();

  // replace p element with a new textarea
  var textInput = $("<textarea>").addClass("form-control").val(text);
  $(this).replaceWith(textInput);

  // auto focus new element
  textInput.trigger("focus");
});

// editable field was un-focused
$(".appt-slot").on("blur", "textarea", function() {
  // get current value of textarea
  var text = $(this).val();

  // get status type and position in the list
  var status = $(this).closest(".appt-slot").attr("id").replace("list-", "");
  var index = $(this).closest(".appt-slot-item").index();

  // update appt in array and re-save to localstorage
  appts[status][index].text = text;
  saveAppts();

  // recreate p element
  var apptP = $("<p>").addClass("m-1").text(text);

  // replace textarea with new content
  $(this).replaceWith(apptP);
});

// due date/time was clicked
$(".appt-slot").on("click", "span", function() {
  // get current text
  var date = $(this).text().trim();
 
  // create new input element
  var dateInput = $("<input>").attr("type", "text").addClass("form-control").val(date);
  
  $(this).replaceWith(dateInput);

  // enable jquery ui datepicker
  dateInput.datepicker({
    //minDate: 1,
    onClose: function() {
      // when calendar is closed, force a "change" event on the 'dateInput' & / or timeInput
      $(this).trigger("change");
    }
  });

  // automatically bring up the calendar
  dateInput.trigger("focus");
});

// value of due date or time was changed
$(".appt-slot").on("change", "input[type='text']", function() {
  var date = $(this).val();

  // get status type and position in the list
  var status = $(this).closest(".appt-slot").attr("id").replace("list-", "");
  var index = $(this).closest(".appt-slot-item").index();

  // update appt in array and re-save to localstorage
  appts[status][index].date = date;
  saveAppts();

  // recreate span and insert in place of input element
  var apptSpan = $("<span>").addClass("badge badge-primary badge-pill").text(date);
    $(this).replaceWith(apptSpan);

  // Pass appt's <li> element into auditappt() to check new due date
  auditAppt($(apptSpan).closest(".appt-slot-item"));  
});

$(" .card .appt-slot").sortable({
  connectWith: $(" .card .appt-slot"),
  scroll: false,
  tolerance: "pointer",
  helper: "clone",
  activate: function(event) {
    $(this).addClass("dropover");
   
  }, 
  deactivate: function(event) {
    $(this).removeClass("dropover");
    console.log("deactivate", this);
  },
  over: function(event) {
    $(this).addClass("dropover-active", event-target);
    console.log("over", event.target);
  },
  update: function(event) {
    // array to store the appt data in
    var tempArr = [];
    
    // loop over current set of children
    $(this).children().each(function() {
      var text = $(this).find("p").text().trim();

      var date = $(this).find("span").text().trim();

      // add appt data to the temp array as an object
      tempArr.push({text: text,date: date});  
     
    });

    // trim down list's ID to match object property
    var arrName = $(this).attr("id").replace("list-", "");

      //update array on appts object and save
      appts[arrName] = tempArr;
      saveAppts();

    console.log(tempArr);
   }
});


// add modal to enter information by date, set that item up for saving in local storage

// add css that changes time block colour based on date/time of appt compared to current time

// add "save" button