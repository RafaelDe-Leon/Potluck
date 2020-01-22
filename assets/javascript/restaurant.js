console.log('restaurant.js');

let gKey = 'AIzaSyBoVzLUOoUz5fBh-BmIDHhn8vhwVFMhMtI';
let zKey = '69e9f092ab51bf6c870b9892ace15ab6';

let letsEat = function() {
  // get google API
  // replace ln 26-29 with google maps
  // extract long/lat
  // use long/lat in Zomato query

  //  create a keypress method for the enter key
  $('#inputZip').keypress(function(event) {
    let key = event.keyCode;
    if (key === 13) {
      console.log('ENTER');
      let zipCode = $('#inputZip').val();
      let gURL =
        'https://maps.googleapis.com/maps/api/geocode/json?address=' +
        zipCode +
        '&key=' +
        gKey;
      console.log(gURL);

      // use ajax function in google locations to get zipcode
      $.ajax({
        url: gURL,
        method: 'GET'
      }).then(function(response) {
        console.log(response);
        let latID = response.results[0].geometry.location.lat;
        console.log(latID);
        let longID = response.results[0].geometry.location.lng;
        console.log(longID);
        let zURL =
          'https://developers.zomato.com/api/v2.1/search?entity_type=city&lat=' +
          latID +
          '&lon=' +
          longID +
          '&sort=real_distance&order=desc';
        $.ajax({
          url: zURL,
          method: 'GET',
          headers: {
            'user-key': zKey
          }
        }).then(function(eateries) {
          console.log(eateries);
          for (let k = 0; k < 15; k++) {
            // create eats variable for restaurant array
            let eats = eateries.restaurants[k];
            // create a variable to store incremental value
            let eatsCount = k + 1;
            // create a name variable for restaurants
            let name = eateries.restaurants[k].restaurant.name;
            // create an address variable for restaurants
            let address = eateries.restaurants[k].restaurant.location.address;
            // create a phone variable for restaurants
            let phone =
              'Phone: ' + eateries.restaurants[k].restaurant.phone_numbers;
            // console.log(phone)
            let listings = $('#restaurant');
            listings.append(
              '<div class="row">' +
                '<div class="col-md-12">' +
                '<h3>' +
                name +
                '</h3>' +
                '<p>' +
                address +
                '</p>' +
                '<p>' +
                phone +
                '</p> <span><button class="btn btn-primary"> News </button></span>' +
                '</div>' +
                '</div>'
            );
          }
        });
      });
    }
  });
};
letsEat();
