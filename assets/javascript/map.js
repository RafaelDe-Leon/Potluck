$.ajaxPrefilter(function(options) {
  if (options.crossDomain && $.support.cors) {
    options.url = "https://cors-anywhere.herokuapp.com/" + options.url;
  }
});

//global variable to hold map
let idPressed = $("#column-one");
let currentLat = "";
let currentLan = "";
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

// on submit do this
$("#zipForm").submit(function(event) {
  event.preventDefault();
  // console.log();
  if (!currentZipCode) {
    return;
  }

  console.log("Zipcode Input was pressed");

  // adds class to the IDs
  $("#imageAreaTwo").addClass("area-two");
  $("#column-one").addClass("column-one");
  $("#third-section").addClass("third-section");
  $("#map-container").addClass("map-container");


  // may need later for future code
  // idPressed.append("<div class='row'>");
  // idPressed.append("<div class='col-md-4'");

  var zipCodeUrl = buildZipCodeRequestURI(currentZipCode);

  // ajax call
  $.ajax({
    url: zipCodeUrl,
    method: "GET"
  }).then(function(response) {
    console.log(response.lat);
    console.log(response.lng);

    var lat = response.lat;
    var lng = response.lng;

    currentLat = lat;
    currentLan = lng;
    initMap (lat , lng);
  });
});
// document.getElementById("zipForm");

// form.onsubmit = function(event) {
//   event.preventDefault();
//   console.log(event);
//   console.log(event.target, "event.target");
//   console.log(event.target.elements[0].value, "value");
// };

$(document).on("click", ".news-button", function() {
  $("#map-container").html("<div id='map' class=`col-md-6`></div>");
});

// function that ignites the map
function initMap(cord1 , cord2) {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: + cord1 , lng: + cord2 },
      zoom: 16
    });
  };

// zipcode to lang convert API

// https://www.zipcodeapi.com/rest/<api_key>/info.<format>/<zip_code>/<units>

// convert api key
// yJ2trlSNPpRXf9kpE7yo6JUn4z9BxJdvAMSK5XuJXn9my5Ksec22lfAMgZxpLNeM
