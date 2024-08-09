const Product = require("../../models/product.model")
//[GET] /products
module.exports.index = async (req, res) => {
    const products = await Product.find({
        status : "active",
        deleted : false,
    }).sort({position: "desc"});
    const newProducts= products.map(item =>{
        item.priceNew = (item.price*(100 - item.discountPercentage)/100).toFixed(0);
        return item;
    })
    res.render("client/pages/products/index.pug",{
        pagetitle: "trang san pham",
        products: newProducts,
    });
}
module.exports.detail = async (req, res) => {
    try {
        const find = {
          slug: req.params.slug,
          deleted: false,
          status:"active",
        };
        const product = await Product.findOne(find);
        console.log(product);
        res.render("client/pages/products/detail.pug", {
          pagetitle: "trang chi tiet san pham",
          product: product,
        });
      } catch (error) {
        res.redirect(`/products`);
      }
}