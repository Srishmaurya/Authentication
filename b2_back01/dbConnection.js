const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://srishti:srishti23@sris.oz23ob4.mongodb.net/b4s?retryWrites=true&w=majority&appName=Sris')
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.error('Error connecting to MongoDB:', err));