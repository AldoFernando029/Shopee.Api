const orderService = require('./order-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getOrdersByUser(req, res, next) {
  try {
    const userId = req.params.userId;
    const orders = await orderService.getOrdersByUser(userId);
    res.json(orders);
  } catch (error) {
    next(error);
  }
}

async function getOrderDetail(req, res, next) {
  try {
    const orderId = req.params.orderId;
    const order = await orderService.getOrderDetail(orderId);
    if (!order) return res.status(404).json({ message: 'Order not found' });
    res.json(order);
  } catch (error) {
    next(error);
  }
}

async function createOrder(req, res, next) {
  try {
    const userId = req.params.userId;
    const order = await orderService.createOrder(userId, req.body);
    res.status(201).json(order);
  } catch (error) {
    next(error);
  }
}

async function updateOrderStatus(req, res, next) {
  try {
    const orderId = req.params.orderId;
    const updated = await orderService.updateOrderStatus(orderId, req.body.status);
    if (!updated) return res.status(404).json({ message: 'Order not found' });
    res.json(updated);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getOrdersByUser,
  getOrderDetail,
  createOrder,
  updateOrderStatus,
};
