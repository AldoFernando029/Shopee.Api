const shopService = require('./shop-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getAllShops(req, res, next) {
  try {
    const shops = await shopService.getAllShops();
    res.json(shops);
  } catch (error) {
    next(error);
  }
}

async function getShopById(req, res, next) {
  try {
    const shop = await shopService.getShopById(req.params.id);
    if (!shop) return res.status(404).json({ message: 'Shop not found' });
    res.json(shop);
  } catch (error) {
    next(error);
  }
}

async function createShop(req, res, next) {
  try {
    const created = await shopService.createShop(req.body);
    res.status(201).json(created);
  } catch (error) {
    next(error);
  }
}

async function updateShop(req, res, next) {
  try {
    const updated = await shopService.updateShop(req.params.id, req.body);
    if (!updated) return res.status(404).json({ message: 'Shop not found' });
    res.json(updated);
  } catch (error) {
    next(error);
  }
}

async function deleteShop(req, res, next) {
  try {
    const deleted = await shopService.deleteShop(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Shop not found' });
    res.json({ message: 'Shop deleted' });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllShops,
  getShopById,
  createShop,
  updateShop,
  deleteShop,
};
