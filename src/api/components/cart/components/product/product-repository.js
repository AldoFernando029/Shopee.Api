const {Product} = require('../../../models'); 

async function findAll() {
  return await db.Product.findAll();
}

async function findById(id) {
  return await db.Product.findByPk(id);
}

module.exports = {
  findAll,
  findById,
};
