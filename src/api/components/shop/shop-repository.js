const {shop} = require('../../../models'); // asumsi Sequelize

async function findAll() {
  return await db.Shop.findAll();
}

async function findById(id) {
  return await db.Shop.findByPk(id);
}

async function create(data) {
  return await db.Shop.create(data);
}

async function update(id, data) {
  const shop = await db.Shop.findByPk(id);
  if (!shop) return null;
  await shop.update(data);
  return shop;
}

async function remove(id) {
  const shop = await db.Shop.findByPk(id);
  if (!shop) return null;
  await shop.destroy();
  return true;
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove,
};
