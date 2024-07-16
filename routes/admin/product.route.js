const express = require('express');
const productController = require('../../controller/admin/product.controller');

const routes = express.Router();

routes.get('/', productController.index);
routes.post('/change-status/:status/:id', productController.changeStatus);
routes.post('/change-multi', productController.changeMulti);
module.exports = routes;