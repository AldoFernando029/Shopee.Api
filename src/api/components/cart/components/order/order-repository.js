const {order} = require('../../../models');

async function findByUserId(userId) {
  return await db.Order.findAll({
    where: { userId },
    include: [
      {
        model: db.OrderItem,
        as: 'items',
        include: [{ model: db.Product, as: 'product' }],
      },
    ],
    order: [['createdAt', 'DESC']],
  });
}

async function findById(orderId) {
  return await db.Order.findByPk(orderId, {
    include: [
      {
        model: db.OrderItem,
        as: 'items',
        include: [{ model: db.Product, as: 'product' }],
      },
    ],
  });
}

async function create(orderData, options = {}) {
  return await db.Order.create(orderData, options);
}

async function bulkCreateItems(items, options = {}) {
  return await db.OrderItem.bulkCreate(items, options);
}

async function save(order) {
  return await order.save();
}

module.exports = {
  findByUserId,
  findById,
  create,
  bulkCreateItems,
  save,
};
