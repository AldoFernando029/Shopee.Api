const express = require('express');

const route = express.Router();
const loginController = require('./login-controller');

module.exports = (app) => {
  app.use('/authentication', route);

  route.post('/login', loginController.userLogin);
};
