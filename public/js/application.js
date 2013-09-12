$(document).ready(function() {

  $('input.tweetbutton').on('click', function(e){
    e.preventDefault()
    $('h2').append("we are updating your tweet")
    $.ajax({
      url: "/",
      type: "post",
      data: $(this).serialize()
    }).done(function(){
    $('h2').remove()
    })
  })


});
