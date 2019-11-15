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
// redner the articles from the DB on the page
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
      // takes what you put in the forms and adds it to the bottom of the page while saving to the DB
  .post('/addNewPost', async (req, res) => {
      const addArticle = await new articles ({
        title: req.body.title,
        summary: req.body.summary,
        body: req.body.body,
        // used slugify to make sure it has the same format as the articles you supplied us with
        slug: slugify(req.body.title, { lower: true })
        
      })
      // was planning on using the setTimeout function to build 3 loading dots but ran out of time so didn't get around to it
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
// set up findOne to load one article at a time 
    .get('/articles/:slug', async function(req, res){
      var article = req.params.slug;  
      
      var article = await articles.findOne({slug : article}, function(err, result)
      {      

        if  (err) {
          res.send('error')
        }
      return result
      
      });  
      res.render('getpost',
      {Article : article}
    )}) ;

  
      
  

 


module.exports = router;