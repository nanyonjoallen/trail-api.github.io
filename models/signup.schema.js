const mongoose = require('mongoose');

// structure of our data to be stored
const ReviewSchema = new mongoose.Schema({
  fullName: String,
  message: String
});

// const ReviewModel = mongoose.model('Review', ReviewSchema, 'reviews');

// module.exports =  ReviewModel;
module.exports = ReviewSchema;