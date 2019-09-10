//global variable to hold map
let map;
let mapApiKey = "AIzaSyAM69XHYamrYzng19RSBBgUFIzDWmZ_6Y0";
let mapUrl =
  "https://maps.googleapis.com/maps/api/js?key=" +
  mapApiKey +
  "&callback=initMap";
// grab the zipcode
let zipcode;
// zipcode key from converter
let zipcodeKey =
  "8FiYHj3y9Don2RS4h6Q3q72bywLcJFAOWdzrASt2Dch9LA0gsRE3V9OGwTuNTFoC";

// url from zipcode converter
let zipCodeConvert =
  "https://www.zipcodeapi.com/rest/" +
  zipcodeKey +
  "/info.json/" +
  zipcode +
  "/degrees";


  // function that ingnites the map
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8
  }); 


// when news-button is clicked

// $(document.on("click", function() {

// // ajax call
//   $.ajax({
//     url: zipCodeConvert,
//     method: "GET"
//   }).then(function(response){
//     console.log(response.lat);
//     });
//   }));



// zipcode to lang convert API

// https://www.zipcodeapi.com/rest/<api_key>/info.<format>/<zip_code>/<units>

// api key
// 8FiYHj3y9Don2RS4h6Q3q72bywLcJFAOWdzrASt2Dch9LA0gsRE3V9OGwTuNTFoC
