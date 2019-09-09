let input = document.getElementById("inputZip");
let idPressed = $("#column-one");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keydown", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("inputZip").click();
    console.log("i have been pressed");
    $("#column-one").addClass("column-one");
    idPressed.append("<div class='row'>");
    idPressed.append("<div class='col-md-3'");
    idPressed.append("<h1> Test </h1>");

   


   
  }
});
