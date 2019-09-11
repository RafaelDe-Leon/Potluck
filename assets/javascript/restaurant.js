console.log("start of restaurant.js");


// //  create a keypress method for the enter key
// $("#inputZip.form-control").keypress(function (event) {
//   let key = event.keyCode;
//   if (key === 13) {
//     console.log("ENTER");
//   }
// })


let gKey = "AIzaSyBoVzLUOoUz5fBh-BmIDHhn8vhwVFMhMtI";
let zKey = "69e9f092ab51bf6c870b9892ace15ab6";


// get google API 
// replace ln 26-29 with google maps
// extract long/lat
// use long/lat in Zomato query

//  create a keypress method for the enter key
$("#inputZip").keypress(function (event) {
  let key = event.keyCode;
  if (key === 13) {
    console.log("ENTER");
    let zipCode = $("#inputZip").val();
    let gURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + zipCode + "&key=" + gKey;
    console.log(gURL);

    // use ajax function in google locations to get zipcode
    $.ajax({
      url: gURL,
      method: "GET",
    }).then(function (response) {
      console.log(response);
      let latID = response.results[0].geometry.location.lat;
      console.log(latID);
      let longID = response.results[0].geometry.location.lng;
      console.log(longID);
      let zURL = "https://developers.zomato.com/api/v2.1/search?entity_type=city&lat=" + latID + "&lon=" + longID + "&sort=real_distance&order=desc";
      $.ajax({
        url: zURL,
        method: "GET",
        headers: {
          'user-key': zKey
        }
      }).then(function (eateries) {
        console.log(eateries);
        for (let k = 0; k < 20; k++) {
          let rInfo = [
            eateries.restaurants[k].restaurant.name,
            eateries.restaurants[k].restaurant.location.address,
            eateries.restaurants[k].restaurant.phone_numbers,
            "Specializes in " + eateries.restaurants[k].restaurant.establishment[0],
          ];

          $("#restaurant").append(eateries[0].restaurant.name);
          
        };
      });
    });
  };
})
        // grab restaurant div by id


      //   // append rInfo to #restaurant
