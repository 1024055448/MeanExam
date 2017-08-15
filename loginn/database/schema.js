var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db = mongoose.connect('mongodb://localhost:27017/loginn');

var mySchema = new Schema({
	username:String,
	password:String
});
module.exports = mySchema;