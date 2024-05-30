const express = require('express');
const routes = express.Router();
const productController = require('../../controller/client/product.controller')
routes.get('/', productController.index)
   module.exports = routes;