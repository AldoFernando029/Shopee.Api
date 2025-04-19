const cartRepo = require('./cart-repository');

async function getCartByUser(userId) {
  return await cartRepo.findAllByUserId(userId);
}

async function addToCart(userId, { productId, quantity }) {
  const [item, created] = await cartRepo.findOrCreate(userId, productId, quantity);

  if (!created) {
    item.quantity += quantity;
    await cartRepo.save(item);
  }

  return item;
}

async function updateCartItem(itemId, { quantity }) {
  const item = await cartRepo.findById(itemId);
  if (!item) return null;

  item.quantity = quantity;
  await cartRepo.save(item);

  return item;
}

async function removeCartItem(itemId) {
  const item = await cartRepo.findById(itemId);
  if (!item) return null;

  await cartRepo.destroy(item);
  return true;
}

module.exports = {
  getCartByUser,
  addToCart,
  updateCartItem,
  removeCartItem,
};
