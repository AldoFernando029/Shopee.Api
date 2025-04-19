const { discounts } = require('./discount-data.json');

async function findAllDiscounts() {
  return discounts;
}

async function findDiscountById(id) {
  return discounts.find(d => d.id === id);
}

async function createDiscount(discount) {
  discounts.push(discount);
  return discount;
}

async function updateDiscount(id, updateData) {
  const index = discounts.findIndex(d => d.id === id);
  if (index === -1) return null;
  discounts[index] = { ...discounts[index], ...updateData };
  return discounts[index];
}

async function deleteDiscount(id) {
  const index = discounts.findIndex(d => d.id === id);
  if (index === -1) return false;
  discounts.splice(index, 1);
  return true;
}
module.exports = {
  findAllDiscounts,
  findDiscountById,
  createDiscount,
  updateDiscount,
  deleteDiscount,
};
