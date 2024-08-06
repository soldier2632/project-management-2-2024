const multer = require("multer");
const express = require("express");
const productController = require("../../controller/admin/product.controller");
const storageMulter = require("../../helpers/storageMulter.js");
const validate = require("../../validates/admin/product.validate.js");
const upload = multer({ storage: storageMulter()});
const routes = express.Router();
//route.get
routes.get("/", productController.index);
//route.patch
routes.post("/change-status/:status/:id", productController.changeStatus);
routes.post("/change-multi", productController.changeMulti);
//route.delete
routes.post("/delete/:id", productController.deleteItem);
//route.get
routes.get("/create", productController.createItem);
//route.post
routes.post("/create", upload.single("thumbnail"),validate.createPost, productController.createPost);
module.exports = routes;
