 
let signups = []; // temporary database / store

class Signup {
    constructor() {
        this.name = 'name'
    }; // only add params idf you intend to initialize with data
    static  fetchSignups() {
        return signups.length ? signups: 'No reviews have been added';
    };
    static addSignup (review) {
        return reviews.push(review);
    }
    static getSingleReview(id) {
        let review;
        
       if (reviews.length) {
          review = reviews.find(review => review.pk == id);
        }

       if(Object.keys(review).length) {
           return {review}
       }
       return {message: 'Review not found'};
       
    }

    static updateReview(id, data) {
        let review;
        if (reviews.length) {
            
        } else {
            return {message: "No reviews to update"}
        }
        if(review) {
            let updatedReview = {...review, message: data}
            let position = reviews.findIndex(review =>review.pk == id);
            reviews[position] = updatedReview;
            return {review : reviews[position]}
        } else {
            return {message: 'review not found'}
        }
    }

    static removeReview(id) {
        let review;
        if (reviews.length) {
            review = reviews.find(review => review.pk == id);
            if(!review) {
                return {message: 'review does not exist'}
            } else {
            reviews = reviews.filter(review => review.pk !== id);
            return {message: 'Review removed successfully'}
            }
        } else {
            return { message: "No reviews to delete"}
        }
    }
};


module.exports = {
    Review,
    reviews
}

