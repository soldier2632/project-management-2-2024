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
   //pagination
  let objectPagination={
      currentPage :1,
      limitItems :4
  }
  if(req.query.page){
    objectPagination.currentPage = parseInt(req.query.page);
  }
  objectPagination.skip = (objectPagination.currentPage-1)*objectPagination.limitItems;

const countProducts = await Product.countDocuments(find);       
const totalPage = Math.ceil(countProducts/objectPagination.limitItems);
objectPagination.totalPage = totalPage;
//end pagination
  const products = await Product.find(find).limit(objectPagination.limitItems).skip(objectPagination.skip);
  // console.log(products);
  res.render("admin/pages/products/index.pug", {
    pagetitle: "trang san pham",
    products: products,
    filterStatus: filterStatus,
    keyword:objectSearch.keyword,
    pagination: objectPagination,
  });
}