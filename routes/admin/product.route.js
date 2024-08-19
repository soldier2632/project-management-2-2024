const multer = require("multer");
const express = require("express");
const productController = require("../../controller/admin/product.controller");
// const storageMulter = require("../../helpers/storageMulter.js");
const uploadMiddeware = require("../../middlewares/admin/uploadCloud.middleware");
const validate = require("../../validates/admin/product.validate.js");
const upload = multer();

const routes = express.Router();
//routes.get
routes.get("/", productController.index);
//routes.patch
routes.post("/change-status/:status/:id", productController.changeStatus);
routes.post("/change-multi", productController.changeMulti);
//routes.delete
routes.post("/delete/:id", productController.deleteItem);
//routes.get
routes.get("/create", productController.createItem);
//routes.post
routes.post(
  "/create",
  upload.single("thumbnail"),
  uploadMiddeware.upload,
  validate.createPost,
  productController.createPost
);
//routes.get
routes.get("/edit/:id", productController.edit);
//routes.patch
routes.post(
  "/edit/:id",
  upload.single("thumbnail"),
  uploadMiddeware.upload,
  validate.createPost,
  productController.editPatch
);
//routes.get
routes.get("/detail/:id", productController.detail);
module.exports = routes;
