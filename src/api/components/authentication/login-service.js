const usersRepository = require('./login-repository');

async function userLogin(email, password) {
  return usersRepository.userLogin(email, password);
}

module.exports = {
  userLogin,
};
