const express = require('express');
const router = express.Router();
const wishlistController = require('./wishlist-controller');

module.exports = (app) => {
    app.use('/api/wishlist', router);
    
router.get('/:userId', wishlistController.getWishlistByUser);
router.post('/:userId', wishlistController.addToWishlist);
router.delete('/:userId/:productId', wishlistController.removeFromWishlist);
};
