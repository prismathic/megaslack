const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title:{
    type:String,
    required:true
  },
  body:{
    type:String,
    required: true
  },
  date_added:{
    type:Date,
    required:true
  },
  user_id:{
    type:String,
    required:true
  },
  post_img:{
    type:String,
    required:false
  }
});
PostSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Post',PostSchema);
