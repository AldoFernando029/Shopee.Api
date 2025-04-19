const express = require('express');
const router = express.Router();
const orderController = require('./order-controller');

module.exports = (app) => { 
    app.use('/api/orders', router);
    
router.get('/user/:userId', orderController.getOrdersByUser);
router.get('/:orderId', orderController.getOrderDetail);
router.post('/:userId', orderController.createOrder);
router.put('/:orderId/status', orderController.updateOrderStatus);
};