var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var FavoriteSchema = new Schema({
  title: String,
  image: String,
  address: String
});

var Favorite = mongoose.model('Favorite', FavoriteSchema);

module.exports = Favorite;
