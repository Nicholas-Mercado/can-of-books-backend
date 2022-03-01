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
const PORT = process.env.PORT || 3002;


app.get('/', (request, response) => {
  response.status(200).send('Greetings from server');
});

app.get('/books', getBooks);

async function getBooks(request, response, next) {
  
  try{
    let queryObject = {};
    if(request.query.email){
      queryObject.email = request.query.email;
    }

    let results = await Book.find(queryObject);
    response.status(200).send(results);
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
