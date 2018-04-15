function getQuote() {
    var url = 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';
    $.ajaxSetup({ cache: false }); // necessary to actually provide a new quote each time this function is called
    $.ajax({
        url: url,
        success: function(data) {
            var post = data.pop();
            var $title = $('#quote-title').html('<i class="far fa-arrow-alt-circle-right"></i>   ' + post.title);
            var $content = $('#quote-content').html(post.content);
        }
    });

    document.getElementById('quote-title').innerHTML = $title; 
    document.getElementById('quote-content').innerHTML = $content; 
};

//initialize the first quote to appear prior to the Action Event.
getQuote(); 

// twitter functionality 
function tweetQuote() {
    var quoteToTweet = $(".quote").text();
    var authorToTweet = $(".author").text(); 
    var myURL = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(quoteToTweet + authorToTweet);
    window.open(myURL, 'twitter');
    return false; 
};


