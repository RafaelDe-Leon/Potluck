$.ajaxPrefilter(function(options) {
  if (options.crossDomain && $.support.cors) {
      options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
  }
});

//global variable to hold map
var currentZipCode = "";
let map;
let mapApiKey = "AIzaSyAM69XHYamrYzng19RSBBgUFIzDWmZ_6Y0";
let mapUrl =
  "https://maps.googleapis.com/maps/api/js?key=" +
  mapApiKey +
  "&callback=initMap";

function buildZipCodeRequestURI(zipCode) {
  // zipcode key from converter
  let zipcodeKey =
    "yJ2trlSNPpRXf9kpE7yo6JUn4z9BxJdvAMSK5XuJXn9my5Ksec22lfAMgZxpLNeM";

  // url from zipcode converter
  let url =
    "https://www.zipcodeapi.com/rest/" +
    zipcodeKey +
    "/info.json/" +
    zipCode +
    "/degrees";

  return url;
}

// $("#inputZip")
// function zipcode() {

// };

// stores when a change of zipcode is changed
$("#inputZip").change(function() {
  currentZipCode = $(this).val();
  console.log(currentZipCode, "zip code");
});

$("#zipForm").submit(function(event) {
  event.preventDefault();
  // console.log();
  if (!currentZipCode) {
    return;
  }

 var zipCodeUrl = buildZipCodeRequestURI(currentZipCode);

  // ajax call
  $.ajax({
    url: zipCodeUrl,
    method: "GET"
  }).then(function(response) {
    console.log(response.lat);
    console.log(response.lng);

    
  });
});
// document.getElementById("zipForm");

// form.onsubmit = function(event) {
//   event.preventDefault();
//   console.log(event);
//   console.log(event.target, "event.target");
//   console.log(event.target.elements[0].value, "value");
// };

// function that ingnites the map
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8
  });
}

initMap();

// zipcode to lang convert API

// https://www.zipcodeapi.com/rest/<api_key>/info.<format>/<zip_code>/<units>

// convert api key
// yJ2trlSNPpRXf9kpE7yo6JUn4z9BxJdvAMSK5XuJXn9my5Ksec22lfAMgZxpLNeM
