function getQuote() {
    $.ajax({
        url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
        success: function(data) {
            var post = data.shift();
            $('#quote-title').html('<i class="far fa-arrow-alt-circle-right"></i>   ' + post.title);
            $('#quote-content').html(post.content);
        }
    });
    cache: false;
};

//initialize the first quote to appear prior to the Action Event.
getQuote(); 

// Action Event to trigger the generation of a new quote. 
$("#generate-quote").on("click", function () {
    cache: false; 
    getQuote(); 
});
