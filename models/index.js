// require mongoose
var mongoose = require("mongoose");

//connect mongoose
mongoose.connect("mongodb://localhost/austin-art");

//require favorite model
var Favorite = require('./favorites');


//export favorite model
module.exports.Favorite = Favorite;
