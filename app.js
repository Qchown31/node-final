const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require("body-parser");

dotenv.config({ path: './config.env'});
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

app.use(express.static(path.join(__dirname + '/assets')));
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.urlencoded({ extended: true }));

mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
}).then( () => {
  console.log('DB connected')
}).catch (err => {
  console.log('error')
}) 

app.get('/', function(req, res){
  res.status(200).send('test')
  });


app.use(function(req, res, err) {
  res.status(404);
  res.send('404: File Not Found');
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log( `running on ${port} `)
});

