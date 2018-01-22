var db = require("./models");

var favoriteList = [];

//push art objects into array
favoriteList.push({
    title: 'Band Together',
    image: '/images/bangTogether.jpg',
    address: 'E. 6th & Chicon'
});
favoriteList.push({
    title: "You're My Butter Half",
    image: '/images/butter.jpg',
    address: '2000 E MLK Jr Blvd'
});
favoriteList.push({
    title: 'Chicon Wall',
    image: '/images/chicon.jpg',
    address: 'E. 12th & Chicon'
});
favoriteList.push({
    title: 'Til Death',
    image: '/images/tillDeath.jpg',
    address: 'E. 7th & Waller'
});

db.Favorite.remove({}, function(err, favorites){

  db.Favorite.create(favoriteList, function(err, favorites){
    if (err) { return console.log('ERROR', err); }
    console.log("all favorites:", favorites);
    console.log("created", favorites.length, "favorites");
    process.exit();
  });

});
