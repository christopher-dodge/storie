// importing required dependency
const mongoose = require("mongoose");

//Model for blog post created by user
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    },
// in my experience the author would be handled by the user model having an array perhaps called "posts" that references this Blog schema so not sure if we need this here or not.
  author: {
    type: string,
    default: false,
  },
  body: {
    type: String,
  },
  datePosted: {
    type: Date,
    default: Date.now,
  },
});

// exporting model to be used in other parts of the application
module.exports = mongoose.model("Blog", blogSchema);
