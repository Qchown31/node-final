const express = require("express");
const router = express.Router();
const User = require('.././models/usersModel')

router
  .get('/sign-up', function(req, res){
    res
      .status(200)
      .render('profile')
    })
  .post('/sign-up', (req, res) => {
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