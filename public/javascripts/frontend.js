//RENDER ALL FAVORITES
$(document).ready(function() {
  console.log('frontend.js loaded!');
  $.get('/api/favorites').success(function (favorites) {
    favorites.forEach(function(favorite) {
      renderArtFavorite(favorite);
      renderUserFavorite(favorite);
    });
  });
});

//NAVIGATION
$('#artButton').click(function() {
  window.location.href = "/art"
});

$('#loginButton').click(function() {
  window.location.href = "/login"
});

$('#aboutButton').click(function() {
  window.location.href = "/"
});

//UPDATE WHEN SUBMIT ADD FAVORITES
// get favoriten-form by id attach a submit event to it
  //triggers function that prevents default, send content of the form to the server right away
  // serialize favorite form values and store in formData variable
  //console.log form data
  // use ajax $.post to send request to /api/favorites, send formData with request, if request succeeds triggers function that S2S4
    // logs favorite after post
    //render new favorite
  // then reset
  // $('#favorite-form form').on('submit', function(e) {
  //   e.preventDefault();
  //   var formData = $(this).serialize();
  //   console.log('formData', formData);
  //   $.post('/api/favorites', formData, function(favorite) {
  //     console.log('favorite after POST', favorite);
  //     renderUserFavorite(favorite);
  //   });
  //   $(this).trigger("reset");
  // });

//ADD FAVORITE
$('.addDeath').on('click', handleAddDeathClick);

function handleAddDeathClick(e) {
  console.log('someone wants to add favorite id=' + this.id );

  $.get('/api/user/favorites/' + this.id).success(function(favorite) {
    console.log('got');
    renderUserFavorite(favorite);

    $.post('/api/user/favorites/' + this.id)
      .success(function(favorite) {
        console.log('favorite', favorite);
    });
  });
}

// DELETE
$('#userFavorites').on('click', '.delete-favorite', handleDeleteFavoriteClick);

function handleDeleteFavoriteClick(e) {
    var favoriteId = $(this).parents('.favorite').data('favorite-id');
      console.log('someone wants to delete favorite id=' + favoriteId );

    $.ajax({
      method: 'DELETE',
      url: ('/api/favorites/' + favoriteId),
        success: function() {
          console.log("Deleted");
          $('[data-favorite-id='+ favoriteId + ']').remove();
        }
      });
}

// GET ROW 
function getFavoriteRowById(id) {
  return $('[data-favorite-id=' + id + ']');
}

// GENERATE USER FAVORITE HTML
function generateUserFavoriteHtml(favorite) {
  var favoriteUserHtml =
    "        <!-- one favorite -->" +
                // each favorite has data-favorite-id attribute that's value is favorite._id
      "        <div class='row favorite' data-favorite-id='" + favorite._id + "'>" +
      "          <div class='col-md-10 col-md-offset-1'>" +
      "            <div class='panel panel-default'>" +
      "              <div class='panel-body'>" +
      "              <!-- begin favorite internal row -->" +
      "                <div class='row'>" +
      "                  <div class='col-md-3 col-xs-12 thumbnail favorite-art'>" +
      "                     <img src=" + favorite.image +  " alt='favorite image'>" +
      "                  </div>" +
      "                  <div id='address-and-title' class='col-md-9 col-xs-12'>" +
      "                    <ul class='list-group'>" +
      "                      <li class='list-group-item'>" +
      "                        <h4 class='inline-header'>Title:</h4>" +
      "                        <span class='favorite-title'>" + favorite.title + "</span>" +
      "                      </li>" +
      "                      <li class='list-group-item'>" +
      "                        <h4 class='inline-header'>Address:</h4>" +
      "                        <span class='address'>" + favorite.address + "</span>" +
      "                      </li>" +
      "</ul>" +
      "                  </div>" +
      "                </div>" +
      "                <!-- end of favorite internal row -->" +
      "              </div>" + // end of panel-body
      "              <div class='panel-footer'>" +
                    // delete button
      "                <button class='btn btn-danger delete-favorite'>Delete Favorite</button>" +
      "              </div>" +
      "            </div>" +
      "          </div>" +
      "          <!-- end one favorite -->";
      return favoriteUserHtml;
}

// GENERATE ART PAGE FAVORITE HTML
function generateArtFavoriteHtml(favorite) {
    var favoriteArtHtml =
      "        <!-- one favorite -->" +
                // each favorite has data-favorite-id attribute that's value is favorite._id
      "        <div class='row favorite' data-favorite-id='" + favorite._id + "'>" +
      "          <div class='col-md-10 col-md-offset-1'>" +
      "            <div class='panel panel-default'>" +
      "              <div class='panel-body'>" +
      "              <!-- begin favorite internal row -->" +
      "                <div class='row'>" +
      "                  <div class='col-md-3 col-xs-12 thumbnail favorite-art'>" +
      "                     <img src=" + favorite.image +  " alt='favorite image'>" +
      "                  </div>" +
      "                  <div id='address-and-title' class='col-md-9 col-xs-12'>" +
      "                    <ul class='list-group'>" +
      "                      <li class='list-group-item'>" +
      "                        <h4 class='inline-header'>Title:</h4>" +
      "                        <span class='favorite-title'>" + favorite.title + "</span>" +
      "                      </li>" +
      "                      <li class='list-group-item'>" +
      "                        <h4 class='inline-header'>Address:</h4>" +
      "                        <span class='address'>" + favorite.address + "</span>" +
      "                      </li>" +
      "</ul>" +
      "                  </div>" +
      "                </div>" +
      "                <!-- end of favorite internal row -->" +
      "              </div>" + // end of panel-body
      "            </div>" +
      "          </div>" +
      "          <!-- end one favorite -->";
      return favoriteArtHtml;
}

// RENDER ONE USER FAVORITE
function renderUserFavorite(favorite) {
    var html = generateUserFavoriteHtml(favorite);
    console.log('rendering user favorite:', favorite);
    $('#userFavorites').prepend(html);
}

// RENDER ONE ART FAVORITE
function renderArtFavorite(favorite) {
    var html = generateArtFavoriteHtml(favorite);
    console.log('rendering art favorite:', favorite);
    $('#artFavorites').prepend(html);
}
