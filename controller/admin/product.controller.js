const Product = require("../../models/product.model");
const filterStatusHelper = require("../../helpers/filterStatus");
const searchHelper = require("../../helpers/search");
const paginationHelper = require("../../helpers/pagination");
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
   const countProducts = await Product.countDocuments(find);
  let objectPagination= paginationHelper({
      currentPage :1,
      limitItems :4
  },
   req.query,
   countProducts  
)
//end pagination
  const products = await Product.find(find).limit(objectPagination.limitItems).skip(objectPagination.skip);

  res.render("admin/pages/products/index.pug", {
    pagetitle: "trang san pham",
    products: products,
    filterStatus: filterStatus,
    keyword:objectSearch.keyword,
    pagination: objectPagination
  });
}
//[PATCH] /admin/product/change-status/:status/:id
module.exports.changeStatus= async (req,res)=>{
  const status = req.params.status;
  const id = req.params.id;
    await Product.updateOne({_id:id},{status:status});
    res.redirect("back");   
}
//[PATCH] /admin/product/change-multi
module.exports.changeMulti= async (req,res)=>{
   const type = req.body.type;
   const ids = req.body.ids.split(", ");
console.log(type);
console.log(ids);
   switch(type){
    case "active":
      await Product.updateMany({_id:{$in: ids}}, {status: "active"});
      break;
    case "inactive":
      await Product.updateMany({_id:{$in: ids}}, {status: "inactive"});
      break;
    case "delete-all":
    await Product.updateMany({_id:{$in: ids}}, {deleted:true, deleteAt: new Date()});
    break;
    default:
      break;  
   }
  res.redirect("back");
  // res.send("ok")
}
//[DELETE] /admin/product/delete/:id
module.exports.deleteItem= async (req,res)=>{
  const id = req.params.id;

    // await Product.deleteOne({_id:id});
    await Product.updateOne(
      {_id:id},
      {deleted:true,
       deletedAt: new Date()
      }
      );
    res.redirect("back");   
}