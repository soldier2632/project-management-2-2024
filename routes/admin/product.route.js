const express = require('express');
const productController = require('../../controller/admin/product.controller');

const routes = express.Router();

routes.get('/', productController.index);
routes.post('/change-status/:status/:id', productController.changeStatus);
routes.post('/change-multi', productController.changeMulti);
routes.post('/delete/:id', productController.deleteItem);
module.exports = routes;