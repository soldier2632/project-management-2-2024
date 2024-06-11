const Product = require("../../models/product.model");
const filterStatusHelper = require("../../helper/filterStatus");
//[GET] /admin/product
module.exports.index = async (req, res) => {
  const filterStatus = filterStatusHelper(req.query);
 
   let keyword = "";
  
  let find = {
    deleted: false,
  };
  if (req.query.status) {
    find.status = req.query.status;
  }
   if(req.query.keyword){
    keyword = req.query.keyword;
    const regex = new RegExp(keyword, "i");
    find.title = regex;
   }
  const products = await Product.find(find);
  // console.log(products);
  res.render("admin/pages/products/index.pug", {
    pagetitle: "trang san pham",
    products: products,
    filterStatus: filterStatus,
    keyword:keyword
  });
}