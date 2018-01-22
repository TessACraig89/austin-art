// document ready 1
//use ajax to get the favorites && Render them on the page
//use ajax $.get to get all favorites from server
// on success render each favorite for all favorites
$(document).ready(function() {
  console.log('frontend.js loaded!');
  $.get('/api/favorites').success(function (favorites) {
    console.log(favorites);
    favorites.forEach(function(favorite) {
      render(favorite);
      console.log('hi');
    });

  });
});

  //nav buttons
  $('#artButton').click(function() {
    window.location.href = "/art"
  });

  $('#loginButton').click(function() {
    window.location.href = "/login"
  });

  $('#aboutButton').click(function() {
    window.location.href = "/"
  });

// DELETE
  // call handleDeleteFavoriteClick function when delete-favorite modal button is clicked
    // $('#favorites').on('click', '.delete-favorite', handleDeleteFavoriteClick);

  // handleDeleteFavoriteClick function
    // get current favorite's favorite-id data and store in favoriteId variable
    // log someone wants to delete favorite  and favoriteId
    // get value from songName input field and store in songName variable
    //use $.ajax to send a
      //DELETE request to /api/favorites/:favorite_id
      // on success call function
        // log that favorite has been deleted
        // select favorite using using data-favorite-id and favoriteId and remove
  // function handleDeleteFavoriteClick(e) {
  //   var favoriteId = $(this).parents('.favorite').data('favorite-id');
  //   console.log('someone wants to delete favorite id=' + favoriteId );
  //   $.ajax({
  //     method: 'DELETE',
  //     url: ('/api/favorites/' + favoriteId),
  //     success: function() {
  //       console.log("He's dead Jim");
  //       $('[data-favorite-id='+ favoriteId + ']').remove();
  //     }
  //   });
  // }

// generate just the html for an Favorite row
//   function generateFavoriteHtml(favorite) {
//     var favoriteHtml =
//     "        <!-- one favorite -->" +
//                 // each favorite has data-favorite-id attribute that's value is favorite._id
//       "        <div class='row favorite' data-favorite-id='" + favorite._id + "'>" +
//       "          <div class='col-md-10 col-md-offset-1'>" +
//       "            <div class='panel panel-default'>" +
//       "              <div class='panel-body'>" +
//       "              <!-- begin favorite internal row -->" +
//       "                <div class='row'>" +
//       "                  <div class='col-md-3 col-xs-12 thumbnail favorite-art'>" +
//       "                     <img src='" + "http://placehold.it/400x400'" +  " alt='favorite image'>" +
//       "                  </div>" +
//       "                  <div class='col-md-9 col-xs-12'>" +
//       "                    <ul class='list-group'>" +
//       "                      <li class='list-group-item'>" +
//       "                        <h4 class='inline-header'>Favorite Title:</h4>" +
//       "                        <span class='favorite-title'>" + favorite.title + "</span>" +
//       "                      </li>" +
//       "                      <li class='list-group-item'>" +
//       "                        <h4 class='inline-header'>Favorite Address:</h4>" +
//       "                        <span class='address'>" + favorite.address + "</span>" +
//       "                      </li>" +
//       "<!-- end one album -->";
//         return favoriteHtml;
// }
//
// // this function takes a single favorite and renders it to the page
//   //edit the function renderFavorite to display one Favorite on the page.
// function renderFavorite(favorite) {
//     var html = generateFavoriteHtml(favorite);
//     console.log('rendering favorite:', favorite);
//
//     $('#favorites').prepend(html);
// }
