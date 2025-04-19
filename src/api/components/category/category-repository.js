const {category} = require('../../../models');

async function findAll() {
  return await db.Category.findAll();
}

async function findById(id) {
  return await db.Category.findByPk(id);
}

async function create(data) {
  return await db.Category.create(data);
}

async function update(id, data) {
  const category = await db.Category.findByPk(id);
  if (!category) return null;
  await category.update(data);
  return category;
}

async function remove(id) {
  const category = await db.Category.findByPk(id);
  if (!category) return null;
  await category.destroy();
  return true;
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove,
};
