// import the model
const {Review, reviews} = require('../models/Review');
const  ReviewModel = require('../models/review.model');

const fetchAllReviews = async () => {
    let response 
    try  {
        response = await ReviewModel.find();
        return { data: response }
    } catch(error) {
        return error;
    }
    // ReviewModel.find()
    // .then(cb, err)  // promise has been resolved
    // .catch() // while trying to resolve a promise an error happened and the promise was rejected
    
}

const createReview = async (review) => {
    // use mongodb to create a new object
    const {fullName, message} = review;
    let reviewData = new ReviewModel({fullName, message})
    return await reviewData.save()
}

const fetchReview = async (id) => {
    // retrieve a single item
    let review;
    try {
        review  = await ReviewModel.findById({_id:id})
        if(!review) return {message: "Review does not exist"}
        return review
    }
    catch (error) {
        return error
    }
}

const updateReview = async (_id, message) => {
     // retrieve a single item and update it
     try {
         await ReviewModel.findByIdAndUpdate(_id, { message }).exec()
         return {message: "Review updated succesfully"}
     }
     catch (error) {
         return error
     }
}

const deleteReview = async (_id) => {
    try {
        await ReviewModel.findByIdAndDelete(_id).exec()
        return {message: "Review removed succesfully"}
    }
    catch (error) {
        return error
    }
}
module.exports = {
    fetchAllReviews,
    createReview,
    fetchReview,
    updateReview,
    deleteReview
}