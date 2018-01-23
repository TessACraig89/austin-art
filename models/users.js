var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
  first_name: String,
  last_name: String,
  username: String,
  address: String
});

var Users = mongoose.model('Users', UsersSchema);

module.exports = Users;
