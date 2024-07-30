const express = require('express');
const productController = require('../../controller/admin/product.controller');

const routes = express.Router();
//route.get
routes.get('/', productController.index);
//route.patch
routes.post('/change-status/:status/:id', productController.changeStatus);
routes.post('/change-multi', productController.changeMulti);
//route.delete
routes.post('/delete/:id', productController.deleteItem);
//route.get
routes.get('/create', productController.createItem);
//route.post
routes.post('/create',  productController.createPost);
module.exports = routes;