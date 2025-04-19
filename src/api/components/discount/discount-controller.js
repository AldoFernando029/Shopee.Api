const userService = require('./discount-service');
const {errorResponder, errorTypes} = require('../../../core/errors');

async function getAllUsers(req, res, next) {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    next(error);
  }
}

async function getUserById(req, res, next) {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    next(error);
  }
}

async function createUser(req, res, next) {
  try {
    const created = await userService.createUser(req.body);
    res.status(201).json(created);
  } catch (error) {
    next(error);
  }
}

async function updateUser(req, res, next) {
  try {
    const updated = await userService.updateUser(req.params.id, req.body);
    if (!updated) return res.status(404).json({ message: 'User not found' });
    res.json(updated);
  } catch (error) {
    next(error);
  }
}

async function deleteUser(req, res, next) {
  try {
    const deleted = await userService.deleteUser(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted' });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
