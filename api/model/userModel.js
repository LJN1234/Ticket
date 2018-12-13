
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var userSchema = new Schema({
	userName:{type:String,required:true},
	userPass:{type:String,required:true}
});
let userModel = mongoose.model('user',userSchema);
module.exports = userModel;

