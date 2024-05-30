const express = require('express');
const routes = express.Router();
const homeController = require("../../controller/client/home.controller")
routes.get("/",homeController.index );
module.exports = routes;
