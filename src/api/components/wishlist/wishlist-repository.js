const {wishlist} = require('../../../models');

async function findByUserId(userId) {
  return await db.Wishlist.findAll({
    where: { userId },
    include: [{ model: db.Product, as: 'product' }],
    order: [['createdAt', 'DESC']],
  });
}

async function findByUserAndProduct(userId, productId) {
  return await db.Wishlist.findOne({
    where: { userId, productId },
  });
}

async function create(data) {
  return await db.Wishlist.create(data);
}

async function remove(userId, productId) {
  return await db.Wishlist.destroy({
    where: { userId, productId },
  });
}

module.exports = {
  findByUserId,
  findByUserAndProduct,
  create,
  remove,
};
