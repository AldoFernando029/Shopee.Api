const express = require('express');
const router = express.Router();
const categoryController = require('./category-controller');

module.exports = (app) => {
    app.use('/api/categories', router);
    
router.get('/', categoryController.getAllCategories);
router.get('/:id', categoryController.getCategoryById);
router.post('/', categoryController.createCategory);
router.put('/:id', categoryController.updateCategory);
router.delete('/:id', categoryController.deleteCategory);
};
