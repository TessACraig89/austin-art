// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.
//require ./models
var db = require("./models");

//create emoty art list
var artList = [];

//push art objects into array
artList.push({
    title: 'Til Death',
    image: 'public/images/tillDeath.jpg',
    address: 'fweffefef'
});


// db.Art.remove({}, function(err, arts){
//
//   db.Art.create(artList, function(err, arts){
//     if (err) { return console.log('ERROR', err); }
//     console.log("all arts:", art);
//     console.log("created", art.length, "arts");
//     process.exit();
//   });
//
// });
