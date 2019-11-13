const express = require("express");
const router = express.Router();
const articles = require('.././models/postsModel')
const articleList = require('.././fixtures/article')
router
  .route('/posts')
  .get((req, res, next) => {
    articles.find({}, (err, articles) =>{
      if (err)
        res.send(err)
        res
          .status(200)
          .render('posts', {articles: articles})
      })
    })
 


module.exports = router;