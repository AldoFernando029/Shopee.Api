const express = require('express');

const product = require('./components/product/product-route');
const auth = require('./components/auth/auth-route');
const cart = require('./components/cart/cart-route');
const category = require('./components/category/category-route');
const notification = require('./components/notification/notification-route');
const order = require('./components/order/order-route');
const review = require('./components/review/review-route');
const shop = require('./components/shop/shop-route');
const wishlist = require('./components/wishlist/wishlist-route');

module.exports = () => {
  const app = express.Router();

  product(app);
  auth(app);
  cart(app);
  category(app);
  notification(app);
  order(app);
  review(app);
  shop(app);
  wishlist(app);

  return app;
};
