const express = require("express");
const router = express.Router();
const articles = require('.././models/postsModel')

router
  .get('/posts',(req, res, next) => {
    articles.find({}, (err, articles) =>{
      if (err)
        res.send(err)
        res
          .status(200)
          .render('posts', {articles: articles})
      })
    })
  .get('/addNewPost', function(req, res){
      res
        .status(200)
        .render('newPost')
      })
  .post('/addNewPost', async (req, res) => {
      const addArticle = await new articles ({
        title: req.body.title,
        summary: req.body.summary,
        body: req.body.body,
        slug: req.body.title
        
      })
      setTimeout(async function(){
       await addArticle.save();
      articles.find({}, (err, articles) =>{
        if (err)
          res.send(err)
          res
            .status(200)
            .render('posts', {articles: articles})
        })
    },1000 )
    })


module.exports = router;