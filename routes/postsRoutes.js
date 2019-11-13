const express = require("express");
const router = express.Router();
const Article = require('.././models/postsModel')

router
  .get('/posts', function(req, res){
    res
      .status(200)
      .render('posts')
    })
 











module.exports = router;