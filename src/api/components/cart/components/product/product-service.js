const productRepository = require('./product-repository');

async function getAllProducts() {
  return await productRepository.findAll();
}

async function getProductById(id) {
  return await productRepository.findById(id);
}

async function createProduct(data) {
  return await productRepository.create(data);
}

async function updateProduct(id, data) {
  return await productRepository.update(id, data);
}

async function deleteProduct(id) {
  return await productRepository.remove(id);
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
