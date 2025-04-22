const reviewService = require('./review-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getReviewsByProduct(req, res, next) {
  try {
    const productId = req.params.productId;
    const reviews = await reviewService.getReviewsByProduct(productId);
    res.json(reviews);
  } catch (error) {
    next(error);
  }
}

async function addReview(req, res, next) {
  try {
    const userId = req.params.userId;
    const { productId, rating, comment } = req.body;
    const review = await reviewService.addReview(userId, { productId, rating, comment });
    res.status(201).json(review);
  } catch (error) {
    next(error);
  }
}

async function updateReview(req, res, next) {
  try {
    const reviewId = req.params.reviewId;
    const { rating, comment } = req.body;
    const updated = await reviewService.updateReview(reviewId, { rating, comment });
    res.json(updated);
  } catch (error) {
    next(error);
  }
}

async function deleteReview(req, res, next) {
  try {
    const reviewId = req.params.reviewId;
    await reviewService.deleteReview(reviewId);
    res.json({ message: 'Review deleted' });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getReviewsByProduct,
  addReview,
  updateReview,
  deleteReview,
};
