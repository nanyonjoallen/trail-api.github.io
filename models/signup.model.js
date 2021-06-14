const mongoose = require('mongoose');
const ReviewSchema = require('./review.schema');

const ReviewModel = mongoose.model('Review', ReviewSchema, 'reviews');

module.exports = ReviewModel;