const express = require('express');
const router = express.Router();
const cartController = require('./cart-controller');

module.exports = (app) => {
    app.use('/api/cart', router);

router.get('/:userId', cartController.getCartByUser);
router.post('/:userId', cartController.addToCart);
router.put('/item/:itemId', cartController.updateCartItem);
router.delete('/item/:itemId', cartController.removeCartItem);
};
