const mongoos = require('mongoose')

const uershcema =new mongoos.Schema({
name:String,
age:Number
})

let user= mongoos.model("user",uershcema)

module.exports=user