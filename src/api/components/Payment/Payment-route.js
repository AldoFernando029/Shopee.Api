const express = require('express');

const paymentController = require('./Payment-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/payments', route);

  // Create a new payment
  route.post('/', paymentController.createPayment);
};