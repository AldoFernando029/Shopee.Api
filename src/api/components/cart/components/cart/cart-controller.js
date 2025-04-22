const cartService = require('./cart-service');
const { errorResponder, errorTypes } = require('../../../core/errors');


async function getCartByUser(req, res, next) {
  try {
    const userId = req.params.userId;
    const cart = await cartService.getCartByUser(userId);
    res.json(cart);
  } catch (error) {
    next(error);
  }
}

async function addToCart(req, res, next) {
  try {
    const userId = req.params.userId;
    const item = await cartService.addToCart(userId, req.body);
    res.status(201).json(item);
  } catch (error) {
    next(error);
  }
}

async function updateCartItem(req, res, next) {
  try {
    const itemId = req.params.itemId;
    const updated = await cartService.updateCartItem(itemId, req.body);
    if (!updated) return res.status(404).json({ message: 'Item not found' });
    res.json(updated);
  } catch (error) {
    next(error);
  }
}

async function removeCartItem(req, res, next) {
  try {
    const itemId = req.params.itemId;
    const deleted = await cartService.removeCartItem(itemId);
    if (!deleted) return res.status(404).json({ message: 'Item not found' });
    res.json({ message: 'Item removed from cart' });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getCartByUser,
  addToCart,
  updateCartItem,
  removeCartItem,
  errorResponder,
};
