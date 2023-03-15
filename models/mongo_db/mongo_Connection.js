const mongoose=require('mongoose')


const connect=()=>{
    mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
        console.log("connected to mongodb");
    }).catch((error)=>{
        console.log(error,"mongo error");
    })
}
 
module.exports=connect