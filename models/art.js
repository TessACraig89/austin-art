var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//create new schema, song Schema S3S1 TC
  //keys used to define properties and their schema types
var ArtSchema = new Schema({
  title: String,
  image: String
});

var Art = mongoose.model('Art', ArtSchema);

module.exports = Art;
