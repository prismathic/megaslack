const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  }
})
UserSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('User',UserSchema);
