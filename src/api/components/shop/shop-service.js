const shopRepository = require('./shop-repository');

async function getAllShops() {
  return await shopRepository.findAll();
}

async function getShopById(id) {
  return await shopRepository.findById(id);
}

async function createShop(data) {
  return await shopRepository.create(data);
}

async function updateShop(id, data) {
  return await shopRepository.update(id, data);
}

async function deleteShop(id) {
  return await shopRepository.remove(id);
}

module.exports = {
  getAllShops,
  getShopById,
  createShop,
  updateShop,
  deleteShop,
};