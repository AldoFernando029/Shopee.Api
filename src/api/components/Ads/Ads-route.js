const express = require('express');

const adsController = require('./Ads-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/ads/categories', route);

  // Get list of shop categories
  route.get('/', adsController.getShopCategories);

  // TODO: Get category by id (if supported by API)

  // TODO: Update category (not applicable for this API)

  // TODO: Delete category (not applicable for this API)
};
