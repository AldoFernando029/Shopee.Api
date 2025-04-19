const {cart} = require('../../../models');

async function findAllByUserId(userId) {
  return await db.Cart.findAll({
    where: { userId },
    include: [{ model: db.Product, as: 'product' }],
  });
}

async function findOrCreate(userId, productId, quantity) {
  return await db.Cart.findOrCreate({
    where: { userId, productId },
    defaults: { quantity },
  });
}

async function findById(itemId) {
  return await db.Cart.findByPk(itemId);
}

async function save(item) {
  return await item.save();
}

async function destroy(item) {
  return await item.destroy();
}

module.exports = {
  findAllByUserId,
  findOrCreate,
  findById,
  save,
  destroy,
};
