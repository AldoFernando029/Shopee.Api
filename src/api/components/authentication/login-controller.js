const { errorResponder, errorTypes } = require('../../../core/errors');
const loginService = require('./login-service');

async function userLogin(req, res, next) {
  try {
    const { email, password } = req.body;

    if (!email) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Email is required');
    }

    if (!password || password.length < 8) {
      throw errorResponder(
        errorTypes.INVALID_PASSWORD,
        'Password must be at least 8 characters long'
      );
    }

    const user = await loginService.userLogin(email, password);

    if (!user) {
      return res.status(403).json({ error: 'INVALID_PASSWORD' });
    }

    return res.status(200).json({ message: 'Success', user });
  } catch (error) {
    return next(error);
  }
}

module.exports = { userLogin };
