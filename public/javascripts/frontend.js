console.log('front');

$(document).ready(function() {
  console.log('app.js loaded!');
  $.get('/api/art').success(function (art) {

      renderArt(art);
    });
  });
