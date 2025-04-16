const discountRepository = require('./Discount-repository');

async function getDiscounts() {
  return discountRepository.getDiscounts();
}

async function createDiscount(discount_name, discount_value, start_time, end_time) {
  return discountRepository.createDiscount(discount_name, discount_value, start_time, end_time);
}

module.exports = {
  getDiscounts,
  createDiscount,
};
