const Product = require('../../models/product.model');
//[GET] /admin/product
module.exports.index = async (req,res)=>{
    const products = await Product.find({
        deleted : false,
    });
    res.render("admin/pages/products/index.pug",{
        pagetitle:"trang san pham",
        products : products
    });

}