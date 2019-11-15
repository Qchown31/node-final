const express = require("express");
const router = express.Router();
const User = require('.././models/usersModel')
// using the subscribe page to add the user to the DB
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
    .render('thankyou')
  })
  










module.exports = router;