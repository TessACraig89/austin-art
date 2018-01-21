console.log('front');
$(document).ready(function() {
  console.log('app.js loaded!');
  $.get('/api/art').done(function (art) {
      console.log('done');
      // renderArt(art);
    });
  });

  //button
  $('#artButton').click(function() {
    window.location.href = "/art"
  });

  $('#loginButton').click(function() {
    window.location.href = "/login"
  });

  $('#aboutButton').click(function() {
    window.location.href = "/"
  });
  // function renderArt(art) {
  //   var html = generateArtHtml(art);
  //   console.log('rendering album:', album);
  //
  //   $('#albums').prepend(html);
  // }
