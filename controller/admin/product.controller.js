const Product = require("../../models/product.model");
const filterStatusHelper = require("../../helpers/filterStatus");
const searchHelper = require("../../helpers/search");
//[GET] /admin/product
module.exports.index = async (req, res) => {
  const filterStatus = filterStatusHelper(req.query);
  const objectSearch = searchHelper(req.query);
  let find = {
    deleted: false,
  };
  if (req.query.status) {
    find.status = req.query.status;
  }
    if(objectSearch.regex){
     find.title= objectSearch.regex;
   }
  const products = await Product.find(find);
  // console.log(products);
  res.render("admin/pages/products/index.pug", {
    pagetitle: "trang san pham",
    products: products,
    filterStatus: filterStatus,
    keyword:objectSearch.keyword,
  });
}