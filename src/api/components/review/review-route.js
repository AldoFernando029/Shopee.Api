const express = require('express');
const router = express.Router();
const reviewController = require('./review-controller');

module.exports = (app) => {
    app.use('/api/reviews', router);
    
router.get('/product/:productId', reviewController.getReviewsByProduct);
router.post('/:userId', reviewController.addReview);
router.put('/:reviewId', reviewController.updateReview);
router.delete('/:reviewId', reviewController.deleteReview);


};