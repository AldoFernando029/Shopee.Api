const {auth} = require('../../../models');

async function findByEmail(email) {
  return await User.findOne({ email } );
}

async function createUser(data) {
  return await User.create(data);
}

module.exports = {
  findByEmail,
  createUser,
};
