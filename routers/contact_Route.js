const route = require("express").Router()
const { get_all_contact, get_single_contact, add_contact, update_contact, delete_contact, search_contact } = require('../controllers/contact_Controlle')
const {verify} = require('../middlewares/jwt_Verify')

route.get('/get_all_contact', verify, get_all_contact)
route.get('/get_single_contact/:id',verify, get_single_contact)
route.post('/add_contact',verify, add_contact)
route.patch('/update_contact/:id',verify, update_contact)
route.delete('/delete_contact/:id',verify, delete_contact)
route.post('/search_contact',search_contact)


module.exports = route  