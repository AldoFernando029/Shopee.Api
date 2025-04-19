const wishlistService = require('./wishlist-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getWishlistByUser(req, res, next) {
  try {
    const userId = req.params.userId;
    const wishlist = await wishlistService.getWishlistByUser(userId);
    res.json(wishlist);
  } catch (error) {
    next(error);
  }
}

async function addToWishlist(req, res, next) {
  try {
    const userId = req.params.userId;
    const { productId } = req.body;
    const item = await wishlistService.addToWishlist(userId, productId);
    res.status(201).json(item);
  } catch (error) {
    next(error);
  }
}

async function removeFromWishlist(req, res, next) {
  try {
    const userId = req.params.userId;
    const productId = req.params.productId;
    await wishlistService.removeFromWishlist(userId, productId);
    res.json({ message: 'Product removed from wishlist' });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getWishlistByUser,
  addToWishlist,
  removeFromWishlist,
};
