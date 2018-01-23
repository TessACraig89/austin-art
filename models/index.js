var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/austin-art");

//require models
var Favorite = require('./favorites');
var Users = require('./users');

//export models
module.exports.Favorite = Favorite;
module.exports.Users = Users;
