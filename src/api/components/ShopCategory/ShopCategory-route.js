const express = require('express');

const shopeeController = require('./shopee-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/shopee/categories', route);

  // Get list of shop categories
  route.get('/', shopeeController.getShopCategories);
};
