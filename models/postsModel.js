
const mongoose = require('mongoose')
const slugify = require('slugify')
const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true
    },
    summary: {
      type: String,
      require: true
    },
    body: {
      type: String,
      require: true
    },
    slug: {
      type: String,
      required: true,
    
    }
  }
);




const articles = mongoose.model('articles', articleSchema);

module.exports = articles;
