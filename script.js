// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  
  $("#currentDay").text(dayjs().format("dddd MMMM D")); // display current time 

  function createHour(hour, root){
    
    // dynamically display hour and current activity
    var block = $("<div>",{ id: "hour-" + hour}).appendTo(root); 
    if (hour < dayjs().hour()) { block.attr("class","row time-block past") } 
    if (hour == dayjs().hour()) { block.attr("class","row time-block present") }
    if (hour > dayjs().hour()) { block.attr("class","row time-block future") }
    if (hour > 11) { var time = " PM";} else { var time = " AM";}
    $("<div>",{ class: "col-2 col-md-1 hour text-center py-3"}).text((hour % 12) + time).appendTo(block);
    $("<textarea>",{ class: "col-8 col-md-10 description", rows: "3"}).text("test").appendTo(block);
    var button = $("<button>",{ class: "btn saveBtn col-2 col-md-1"}).attr("aria-label","save").appendTo(block);
    $("<i>",{ class: "fas fa-save"}).attr("aria-hidden","true").appendTo(button);

    // create listener to save new activity if save button is clicked
  }

  var root = document.body.childNodes[1];
  createHour(19, root);
  createHour(4, root);

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
