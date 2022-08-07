const mongoose = require("mongoose");
const { Schema } = mongoose;

const PostSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  message: String,
  date: { type: Date, default: Date.now },
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
