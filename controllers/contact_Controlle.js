const User=require('../models/mongo_db/contact_Schema')

module.exports.get_all_contact =async () => {
console.log("successfully verified");
// let user=await new User({
//     name:"siby",
//     age:2
// })
// user.save(User)
// console.log(user);
let result =await User.find({})
console.log(result,"result");
}



module.exports.get_single_contact = () => {

}


module.exports.add_contact = () => {

}


module.exports.update_contact = () => {

}


module.exports.delete_contact = () => {

}