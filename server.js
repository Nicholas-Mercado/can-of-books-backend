'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});

const Book = require('./models/book');
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3002;


app.get('/', (request, response) => {
  response.status(200).send('Greetings from server');
});

app.get('/books', getBooks);
app.post('/books', postBooks);
app.delete('/books/:id', deleteBooks);

async function getBooks(request, response, next) {
//do not need line 29 to 33-- maybe not??--could be useful
  try{
    let queryObject = {};
    if(request.query.email){
      queryObject.email = request.query.email;
    }
    //----------------------email.request.query
    let results = await Book.find(queryObject);
    response.status(200).send(results);
  } catch(error){
    next(error);
  }
}

async function postBooks(request, response, next){
  console.log(request.body);
  try{
    let createdBook = await Book.create(request.body);
    response.status(200).send(createdBook);
  } catch(error){
    next(error);
  }
}

async function deleteBooks(request, response, next){
  // access path parameter variable as an object property
  let id = request.params.id;
  //proof of life is good
  console.log(id);
  try{
    await Book.findByIdAndDelete(id);
    response.send('book deleted');
  } catch(error){
    next(error);
  }
}

app.get('*', (request, response) => {
  response.status(404).send('This aint it');
});

app.use((error, req, res, next) => {
  res.status(500).send(error.message);
});


app.listen(PORT, () => console.log(`listening on ${PORT}`));
