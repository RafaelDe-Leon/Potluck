// Firebase for Apps
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDZ14hkAIfRW7aJMS61i1gUBBsausAImfw",
  authDomain: "restaurant-hype.firebaseapp.com",
  databaseURL: "https://restaurant-hype.firebaseio.com",
  projectId: "restaurant-hype",
  storageBucket: "",
  messagingSenderId: "328234147973",
  appId: "1:328234147973:web:8006c605ff9b7eadb409ec"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//global variable to hold map
let map;
let mapApiKey = AIzaSyAM69XHYamrYzng19RSBBgUFIzDWmZ_6Y0;
let mapUrl =
  "https://maps.googleapis.com/maps/api/js?key=" +
  mapApiKey +
  "&callback=initMap";

console.log(mapUrl);

// function that ingnites the map
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8
  });
}
