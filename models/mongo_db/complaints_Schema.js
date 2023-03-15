const mongoos = require('mongoose')

const complaintShcema =new mongoos.Schema({
userid:String,
description:String,
status:String,
date:String,
next:String
})

let complaints= mongoos.model("complaints",complaintShcema)

module.exports=complaints