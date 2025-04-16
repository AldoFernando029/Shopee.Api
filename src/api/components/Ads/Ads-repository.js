const { ShopeeCategories } = require('../../../models');

async function getShopCategories() {
  return ShopeeCategories.find({});
}

module.exports = {
  getShopCategories,
};
