const express = require('express');
const dashboardController = require('../../controller/admin/dashboard.controller');
const route = express.Router();
route.get('/', dashboardController.index);
module.exports =route;