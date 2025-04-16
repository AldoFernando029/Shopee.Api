const shopeeRepository = require('./shopee-repository');

async function getShopCategories(language) {
  return shopeeRepository.getShopCategories(language);
}

module.exports = {
  getShopCategories,
};
