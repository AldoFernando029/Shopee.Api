const authRepository = require('./auth-repository');
const { errorResponder, errorTypes } = require('../../../core/errors');
const { hashPassword } = require('../../../utils/password');



async function register({ username, email, password }) {
  const existingUser = await db.User.findOne({ where: { email } });
  if (existingUser) {
    throw new Error('Email already registered');
  }

  const user = await db.User.create({
    username,
    email,
    password, 
  });

  return {
    id: user.id,
    username: user.username,
    email: user.email,
  };
}

async function login({ email, password }) {
  const user = await db.User.findOne({ where: { email, password } });
  if (!user) return null;

  return {
    id: user.id,
    username: user.username,
    email: user.email,
    message: 'Login successful',
  };
}

module.exports = {
  register,
  login,
};
