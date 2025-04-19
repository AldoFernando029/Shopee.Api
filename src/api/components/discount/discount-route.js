const express = require('express');
const router = express.Router();
const discountController = require('./discount-controller');

module.exports = (app) => {
    app.use('/api/discounts', router);


router.get('/', discountController.getAll);
router.get('/:id',discountController.getById);
router.post('/', discountController.create);
router.put('/:id', discountController.update);
router.delete('/:id', discountController.remove);
};