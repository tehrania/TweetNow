$(document).ready(function() {
$('input.tweetbutton').on('submit', function(e){
  e.preventDefault()
  $('h2').html("we are updating your tweet")
  $.ajax({
    url: "/",
    type: "post",
    data: $(this).serialize()
  }).done(function(response){
    console.log(response)
    $('h2').empty()
  })
})


});
