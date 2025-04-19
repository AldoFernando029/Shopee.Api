const discountRepository = require('./discount-repository');

async function getAllUsers() {
  return await userRepository.findAll();
}

async function getUserById(id) {
  return await userRepository.findById(id);
}

async function createUser(data) {
  return await userRepository.create(data);
}

async function updateUser(id, data) {
  return await userRepository.update(id, data);
}

async function deleteUser(id) {
  return await userRepository.remove(id);
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
