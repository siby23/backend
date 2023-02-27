const mongoose=require('mongoose')


const connect=()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/test").then(()=>{
        console.log("connected to mongodb");
    }).catch((error)=>{
        console.log(error,"mongo error");
    })
}

module.exports=connect