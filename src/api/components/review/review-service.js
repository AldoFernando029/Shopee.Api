const reviewRepo = require('./review-repository');

async function getReviewsByProduct(productId) {
  return await reviewRepo.findByProductId(productId);
}

async function addReview(userId, { productId, rating, comment }) {
  return await reviewRepo.create({ userId, productId, rating, comment });
}

async function updateReview(reviewId, data) {
  const review = await reviewRepo.findById(reviewId);
  if (!review) return null;
  return await reviewRepo.update(review, data);
}

async function deleteReview(reviewId) {
  return await reviewRepo.destroy(reviewId);
}

module.exports = {
  getReviewsByProduct,
  addReview,
  updateReview,
  deleteReview,
};
