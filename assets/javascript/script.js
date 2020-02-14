$("#submit-name").on("click", function(event) {
  event.preventDefault();
  // Create a panel to show news results
  $('#response').append('<div></div>', {
    addClass: 'panel panel-default',
  });
  $('response').append('<div></div>', {

  })
});
    $("#newsButton").on("click", function(event) {
      var restaurantName = $(this).val();
      console.log("Button Clicked: "+restaurantName);
      // Create a div within the response block to show news results
          $('#response').append('<div></div>');
          $('response').append('<div></div>');
          $("div").attr("id","column-two");
         
      });

  
  // Get the input values

  
  var url =
    "https://newsapi.org/v2/everything?" +
    "q=" +
    restaurantName + " restaurant" +
    "&language=en&" +
    "sortBy=publishedAt&" +
    "apiKey=bfc8e374d6df45af85688db28a5bf373";

  console.log(url);
  // var req = new Request(url);



  $.get(url).done(function(response) {
    // console.log(response.articles);
    updatePage(response.articles);


  // var twitter = 'https://api.twitter.com/1.1/search/tweets.json?q=' +
  //  restaurantName ;

  // var req = new Request(twitter);

  // fetch(req)
  // .then(function(response) {
  // console.log(response.json());
  // })

  /**
   * takes API data (JSON/object) and turns it into elements on the page
   * - object containing News API data
   */
  function updatePage(articles) {
    console.log(articles);
    // Get from the form the number of results to display
    // API doesn't have a "limit" parameter, so we have to do this ourselves
    var numArticles = $("#article-count").val();

    // Log the News API data to console, where it will show up as an object

    for (var i = 0; i < 15; i++) {
      // Get specific article info for current index
      var article = articles[i];

      // Increase the articleCount (track article # - starting at 1)
      var articleCount = i + 1;

      // Create the  list group to contain the articles and add the article content for each
      var $articleList = $("<ul>");
      $articleList.addClass("list-group");
      $("#article-section").append($articleList);

      // If the article has a headline, log and append to $articleList
      var headline = article.title;
      var $articleListItem = $("<li class='list-group-item articleHeadline'>");

      if (headline) {
        console.log("Headline",headline);
        $articleListItem.append(
          "<span class='label label-primary'>" + 
            articleCount +
            "</span>" +
            "<h3 class='title-style'>" +
            "<a>" +
            headline +
            "</a></h3>"
        );
        $("a").attr("href", article.url);
      }
      // format date 
      function formatDate(pubDate) {
        console.log(moment(pubDate).format('dddd MMM Do, YYYY'));
        return(moment(pubDate).format('dddd MMM Do, YYYY'));
        }

      // If the article has a byline, log and append to $articleList
      var byline = article.author;

      // Log published date, and append to document if exists
      var pubDate = article.publishedAt;
      
      console.log(article.publishedAt);
      if (pubDate) {
        formatDate(pubDate);
        $articleListItem.append("<h5>" + formatDate(pubDate) + "</h5>");
      }

      // Append and log url
      $articleListItem.append(
        "<a href='" + article.url + "'>" + article.url + "</a>"
      );
      console.log(article.url);

      // Append the article
      $articleList.append($articleListItem);
    }
  }
});
