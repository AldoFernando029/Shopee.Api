const orderRepo = require('./order-repository');

async function getOrdersByUser(userId) {
  return await orderRepo.findByUserId(userId);
}

async function getOrderDetail(orderId) {
  return await orderRepo.findById(orderId);
}

async function createOrder(userId, { items, totalAmount }) {
  const result = await db.sequelize.transaction(async (t) => {
    const order = await orderRepo.create({ userId, totalAmount }, { transaction: t });

    const orderItemsData = items.map(item => ({
      orderId: order.id,
      productId: item.productId,
      quantity: item.quantity,
      price: item.price,
    }));

    await orderRepo.bulkCreateItems(orderItemsData, { transaction: t });

    return order;
  });

  return result;
}

async function updateOrderStatus(orderId, status) {
  const order = await orderRepo.findById(orderId);
  if (!order) return null;
  order.status = status;
  await orderRepo.save(order);
  return order;
}

module.exports = {
  getOrdersByUser,
  getOrderDetail,
  createOrder,
  updateOrderStatus,
};
