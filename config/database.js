const mongoose = require("mongoose");

module.exports.connect = async ()=>{
    try{
       await mongoose.connect(process.env.MONGO_URI);
       console.log("connect thanh cong");
    }catch(error){
       console.log("loi");
    }
}


