const wishlistRepo = require('./wishlist-repository');

async function getWishlistByUser(userId) {
  return await wishlistRepo.findByUserId(userId);
}

async function addToWishlist(userId, productId) {
  // Cek apakah sudah ada
  const exists = await wishlistRepo.findByUserAndProduct(userId, productId);
  if (exists) return exists; // tidak duplikat

  return await wishlistRepo.create({ userId, productId });
}

async function removeFromWishlist(userId, productId) {
  return await wishlistRepo.remove(userId, productId);
}

module.exports = {
  getWishlistByUser,
  addToWishlist,
  removeFromWishlist,
};
