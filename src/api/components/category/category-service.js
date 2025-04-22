const categoryRepository = require('./category-repository');

async function getAllCategories() {
  return await categoryRepository.findAll();
}

async function getCategoryById(id) {
  return await categoryRepository.findById(id);
}

async function createCategory(data) {
  return await categoryRepository.create(data);
}

async function updateCategory(id, data) {
  return await categoryRepository.update(id, data);
}

async function deleteCategory(id) {
  return await categoryRepository.remove(id);
}

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
