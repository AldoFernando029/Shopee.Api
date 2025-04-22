const authService = require('./auth-service');
const  {errorResponder, errorTypes}  = require('../../../core/errors');
const  {hashPassword}  = require('../../../utils/password');


async function register(req, res, next) {
  try {
    const user = await authService.register(req.body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
}

async function login(req, res, next) {
  try {
    const token = await authService.login(req.body);
    if (!token) return res.status(401).json({ message: 'Token verify error' });
    res.json({ token });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  register,
  login,
  errorResponder,
  errorTypes,
  hashPassword,
};
