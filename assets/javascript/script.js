$("#submit-name").on("click", function(event) {
  event.preventDefault();
  // Get the input values
  var restaurantName = $("#restaurantName")
    .val()
    .trim();

  var url =
    "https://newsapi.org/v2/everything?" +
    "q=" +
    restaurantName +
    "&language=en&" +
    "sortBy=popularity&" +
    "apiKey=bfc8e374d6df45af85688db28a5bf373";
  console.log(url);
  // var req = new Request(url);



  $.get(url).done(function(response) {
    // console.log(response.articles);
    updatePage(response.articles);
  });

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

    for (var i = 0; i < numArticles; i++) {
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
        console.log(headline);
        $articleListItem.append(
          "<span class='label label-primary'>" +
            articleCount +
            "</span>" +
            "<strong> " +
            headline +
            "</strong>"
        );
      }

      // If the article has a byline, log and append to $articleList
      var byline = article.author;

      // Log published date, and append to document if exists
      var pubDate = article.publishedAt;
      console.log(article.publishedAt);
      if (pubDate) {
        $articleListItem.append("<h5>" + article.publishedAt + "</h5>");
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