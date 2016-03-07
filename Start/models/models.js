var mongoose = require('mongoose')
var Schema = mongoose.Schema;


 var postSchema = new Schema({
  created: {type: Schema.ObjectId, ref: 'User'},
  created_at: {type: Date, default: Date.now},
  text: String
 });

 var userSchema = new Schema({
  username: String,
  password: String,
  created_at: {type:Date, default: Date.now}
 });



 mongoose.model('Post', postSchema);
 mongoose.model('User', userSchema);

