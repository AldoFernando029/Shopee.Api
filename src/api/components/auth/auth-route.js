const express = require('express');
const router = express.Router();
const authController = require('./auth-controller');

module.exports = (app) => {
    app.use('/api/auth', router);

router.post('/register', authController.register);
router.post('/login', authController.login);
};
