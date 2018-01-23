var db = require("./models");

var favoriteList = [];
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
favoriteList.push({
    title: 'Hi, How Are You?',
    image: '/images/hi.jpg',
    address: '21st & Guadalupe'
});

db.Favorite.remove({}, function(err, favorites){

  db.Favorite.create(favoriteList, function(err, favorites){
    if (err) { return console.log('ERROR', err); }
    console.log("all favorites:", favorites);
    console.log("created", favorites.length, "favorites");
    process.exit();
  });
});

var usersList = [];
usersList.push({
  first_name: 'Jessica',
  last_name: 'Johnson',
  username: 'Jessica_Johnson',
  address: 'jessica.johnson@gmail.com'
});
usersList.push({
  first_name: 'Kim',
  last_name: 'Chi',
  username: 'Kim_Chi',
  address: 'kim.chi@gmail.com'
});
usersList.push({
  first_name: 'Les',
  last_name: 'Lee',
  username: 'Les_Lee',
  address: 'les.lee@gmail.com'
});

db.Users.remove({}, function(err, users){

  db.Users.create(usersList, function(err, users){
    if (err) { return console.log('ERROR', err); }
    console.log("all users:", users);
    console.log("created", users.length, "users");
    process.exit();
  });
});
