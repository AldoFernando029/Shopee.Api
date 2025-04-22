const express = require('express');
const router = express.Router();
const shopController = require('./shop-controller');

module.exports = (app) => {
    app.use('/api/shops', router);

router.get('/', shopController.getAllShops);
router.get('/:id', shopController.getShopById);
router.post('/', shopController.createShop);
router.put('/:id', shopController.updateShop);
router.delete('/:id', shopController.deleteShop);
};
