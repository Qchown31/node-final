const express = require("express");
const router = express.Router();
const articles = require('.././models/postsModel')
const slugify = require('slugify')


router

  .get('/NeedaDrink', function(req, res){
    res
      .status(200)
      .render('index')
    })

  .get('/articles',(req, res, next) => {
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
        slug: slugify(req.body.title, { lower: true })
        
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

    .get('/articles/:slug', function(req, res){
      var article = req.params.slug;  
      
      articles.findOne({slug : article}, function(res, req, err, result)
      
      {      

        if  (err) {
          res.send('error')
        }

        var Article = {
          title : result.title,
          summary : result.summary,
          body : result.body,   
          
        } 
        
        res.render('getpost',
          {Article : Article}
          
        );
       
      })
    })

  
      
  

 


module.exports = router;