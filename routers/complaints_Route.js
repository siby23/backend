const route = require("express").Router()
const { get_single_complaint, add_complaint, update_complaint, delete_complaint }= require('../controllers/complaints_Controlle')
const {verify} =require('../middlewares/jwt_Verify')

route.get('/get_single_complaint/:id',verify,get_single_complaint)
route.post('/add_complaint',verify,add_complaint)
route.patch('/update_complaint/:id',verify,update_complaint)
route.delete('/delete_complaint/:id',verify,delete_complaint)



module.exports=route