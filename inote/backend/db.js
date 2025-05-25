
const mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost:27017/';

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURL);
    console.log('Connected to mongo successfully.');
  } catch (error) {
    console.error('Error connecting to mongo:', error);
  }
}

module.exports = connectToMongo;
