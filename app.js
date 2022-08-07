const PORT = 3000;
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Post = require("./models/Post");
const moment = require("moment");

moment.locale("tr");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");

mongoose.connect("mongodb://127.0.0.1:27017/test-blog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", async (req, res) => {
  const posts = await Post.find({});
  res.render("index", {
    posts: posts,
    moment: moment,
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/posts/:id", async (req, res) => {
  const postId = req.params.id;
  const postItem = await Post.findById(postId);
  res.render("post", {
    postItem: postItem,
    moment: moment,
  });
});

app.get("/add_post", (req, res) => {
  res.render("add_post");
});

app.listen(PORT, () => {
  console.log(`Port ${PORT} dinleniyor...`);
});
