const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require("body-parser");

const postRouter = require('./routes/postsRoutes');
const userRouter = require('./routes/usersRoutes')

dotenv.config({ path: './config.env'});
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

// Setting up paths and views to reference 
app.use(express.static(path.join(__dirname + '/assets')));
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.urlencoded({ extended: true }));

// connecting to the atlas DB
mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
}).then( () => {
  console.log('DB connected')
}).catch (err => {
  console.log('error')
}) 

// use this to parse data to json
app.use(bodyParser.json());
// running my routes
app.use('/', postRouter)
app.use('/', userRouter)


// cathing all unexpected requests 
app.all('*', (req, res, err) => {
  res.status(404);
  res.send('404: File Not Found');
});

// starting server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log( `running on ${port} `)
});

