'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);

const Book = require('./models/book.js');

async function seed(){
  await Book.create({
    title: 'The Growth Mindset',
    email: 'ryan@codefellows.com',
    description: 'Dweck coined the terms fixed mindset and growth mindset to describe the underlying beliefs people have about learning and intelligence. When students believe they can get smarter, they understand that effort makes them stronger. Therefore they put in extra time and effort, and that leads to higher achievement.',
    status: true
  });

  await Book.create({
    title: 'Hyperion',
    email: 'cameroncodefellows@gmail.com',
    description: 'On the eve of Armageddon, with the entire galaxy at war, seven pilgrims set forth on a final voyage to Hyperion seeking the answers to the unsolved riddles of their lives.',
    status: true
  });

  await Book.create({
    title: 'The Queen of Attolia',
    email: 'sheyna@codefellows.com',
    description: 'When Eugenides finds his small mountain country at war with Attolia, he must steal a man, he must steal a queen, he must steal peace. But his greatest triumph—and his greatest loss—comes in capturing something that the Queen of Attolia thought she had sacrificed long ago.',
    status: true
  });

  await Book.create({
    title: 'The way of the kings',
    email: 'nicholasamerc@gmail.com',
    description: 'Shallan, a minor lighteyed woman whose family and lands are in danger, hatches a daring plot to switch a broken Soulcaster (a device that allows people to change objects to other things) with a working one belonging to Jasnah Kholin, sister of the Alethi king.',
    status: true
  });

  await Book.create({
    title: 'The Martian',
    email: 'bradyjcamp@gmail.com',
    description: 'The Martian tells the story of Mark Watney, an astronaut on the Ares 3 mission to Mars. After a terrible storm almost destroys the ship and the base, the crew of his ship believe he is dead.',
    status: true
  });

  mongoose.disconnect();
}

seed();
