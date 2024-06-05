//[GET] /admin/product
module.exports.index = (req,res)=>{
    res.render("admin/pages/products/index.pug",{
        pagetitle:"trang san pham",
    });

}