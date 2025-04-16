const express = require('express');
const discountController = require('./Discount-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/discounts', route);

  // Get list of discounts
  route.get('/', discountController.getDiscounts);

  // Create a new discount
  route.post('/', discountController.createDiscount);

  // Get a discount by id
  route.get('/:discount_id', discountController.getDiscountById);

  // Update a discount by id
  route.put('/:discount_id', discountController.updateDiscount);

  // Delete a discount by id
  route.delete('/:discount_id', discountController.deleteDiscount);
};

