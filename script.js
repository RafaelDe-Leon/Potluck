
$("#submit-name").on("click", function(event) {
    event.preventDefault();
    // Get the input values
    var restaurantName = $("#restaurantName").val().trim();


var url = 'https://newsapi.org/v2/everything?' +
'q=' + restaurantName +
'&from=2019-09-05&' +
'sortBy=popularity&' +
'apiKey=bfc8e374d6df45af85688db28a5bf373';

var req = new Request(url);

fetch(req)
.then(function(response) {
console.log(response.json());
})
})