const express = require("express");
const router = express.Router();
const User = require('.././models/usersModel')

router
  .get('/subscribe', function(req, res){
    res
      .status(200)
      .render('profile')
    })
  .post('/subscribe', (req, res) => {
    const addUser =  new User ({
      name: req.body.name,
      email: req.body.email,
      
    })
    addUser.save()
    res
    .status(200)
    .render('index')
  })
  










module.exports = router;