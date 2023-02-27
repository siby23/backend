const route = require("express").Router()
const { get_single_complaint, add_complaint, update_complaint, delete_complaint }= require('../controllers/complaints_Controlle')

route.get('/get_single_complaint/:id',get_single_complaint)
route.post('/add_complaint',add_complaint)
route.patch('/update_complaint',update_complaint)
route.delete('/delete_complaint',delete_complaint)



module.exports=route