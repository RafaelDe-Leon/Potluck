//global variable to hold map
// let map;
// let mapApiKey = "AIzaSyAM69XHYamrYzng19RSBBgUFIzDWmZ_6Y0";
// let mapUrl =
//   "https://maps.googleapis.com/maps/api/js?key=" +
//   mapApiKey +
//   "&callback=initMap";

// console.log(mapUrl);

// $.ajax({
//   url: mapUrl,
//   method: "GET"
// }).then(function(response) {

  // function that ingnites the map
  // function initMap() {
  //   map = new google.maps.Map(document.getElementById("map"), {
  //     center: { lat: -34.397, lng: 150.644 },
  //     zoom: 8
  //   });
  // }
// });


// Get the input field
let input = document.getElementById("inputZip");
let idPressed = $("#show-example");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keydown", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("inputZip").click();
    console.log("i have been pressed");
idPressed.append("<div class='row'>");
idPressed.append("<div class='col-md-3'>");
idPressed.append("<h1 class='main-color-yellow'> Hello </h1>");


  }
});