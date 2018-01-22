var db = require("./models");

var favoriteList = [];

//push art objects into array
favoriteList.push({
    title: 'Til Death',
    image: 'public/images/tillDeath.jpg',
    address: 'address1'
});
favoriteList.push({
    title: 'title2',
    image: 'image2',
    address: 'address2'
});
favoriteList.push({
    title: 'title3',
    image: 'image3',
    address: 'address3'
});

db.Favorite.remove({}, function(err, favorites){

  db.Favorite.create(favoriteList, function(err, favorites){
    if (err) { return console.log('ERROR', err); }
    console.log("all favorites:", favorites);
    console.log("created", favorites.length, "favorites");
    process.exit();
  });

});
