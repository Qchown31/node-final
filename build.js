/* For your convenience, this script will build sample collections during development. You will need to supply your own .env to supply your connection details */

const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const articles = require('./fixtures/article');
const users = require('./fixtures/users');

const uri = process.env.DATABASE;
MongoClient.connect(uri,{ useUnifiedTopology: true,useNewUrlParser: true }, function(err, client) {
   if(err) {
      console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected...');
   // perform actions on the collection object

   const db = client.db("final-project");

   const artCol = db.collection('articles');

   artCol.drop();
   artCol.insertMany(articles, function(err, cursor) {
    if (err) {
      console.log('There was a problem');
    }
    console.log(cursor.insertedCount);
  });

  const userCol = db.collection('users');

  userCol.drop();
  userCol.insertMany(users, function(err, cursor) {
   if (err) {
     console.log('There was a problem');
   }
   console.log(cursor.insertedCount);
 });

  client.close();
});