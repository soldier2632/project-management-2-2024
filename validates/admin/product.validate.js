module.exports.createPost = (req,res,next)=>{
    if (!req.body.title) {
        req.flash("error", `vui lòng nhập tiêu đề`);
        res.redirect("back");
        return;
      }
    if (req.body.title.length < 8 ) {
        req.flash("error", `vui lòng nhập tiêu đề nhiều hơn 8 ký tự`);
        res.redirect("back");
        return;
      }  
       next();
}