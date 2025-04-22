const {review} = require('../../../models');

async function findByProductId(productId) {
  return await db.Review.findAll({
    where: { productId },
    include: [{ model: db.User, as: 'user' }],
    order: [['createdAt', 'DESC']],
  });
}

async function create(data) {
  return await db.Review.create(data);
}

async function findById(reviewId) {
  return await db.Review.findByPk(reviewId);
}

async function update(review, data) {
  return await review.update(data);
}

async function destroy(reviewId) {
  return await db.Review.destroy({ where: { id: reviewId } });
}

module.exports = {
  findByProductId,
  create,
  findById,
  update,
  destroy,
};
