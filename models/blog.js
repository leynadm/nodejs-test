const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create our schema that defines the structure
const blogSchema = new Schema(
  {
    title: {
      type: String,
      reqired: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create a model based on our schema
const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
