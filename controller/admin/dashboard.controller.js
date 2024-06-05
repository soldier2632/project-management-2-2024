//[GET] /admin/dashboard
module.exports.index = (req,res)=>{
    res.render("admin/pages/dashboard/index.pug",{
        pagetitle:"trang tong quan",
    });
    // res.send("fuck u tony")

}