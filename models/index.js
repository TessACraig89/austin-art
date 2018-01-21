// require mongoose
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/austin-art");

//require art model
var Art = require('./art');


//export art model
module.exports.Art = Art;
