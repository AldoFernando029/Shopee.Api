const express = require('express');
const discountController = require('./discount-controller');

const route = express.Router();

module.exports = (app) => {
    app.use('/api/discounts', route);
    
    route.get('/', discountController.getAllUsers);
    
    route.get('/:id',discountController.getUserById);
    
    route.post('/', discountController.createUser);
    
    route.put('/:id', discountController.updateUser);

    route.delete('/:id', discountController.deleteUser);
};
