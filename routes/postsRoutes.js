const express = require("express");
const router = express.Router();
const Article = require('.././models/postsModel')
const articleList = require('.././fixtures/article')
router
  .get('/posts', function(req, res, next){
    res
      .status(200)
      .render('posts', {articleList: articleList})
    })
 











module.exports = router;