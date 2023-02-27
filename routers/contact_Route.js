const route = require("express").Router()
const { get_all_contact, get_single_contact, add_contact, update_contact, delete_contact } = require('../controllers/contact_Controlle')
const {verify} = require('../middlewares/jwt_Verify')

route.get('/get_all_contact', verify, get_all_contact)
route.get('/get_single_contact/:id', get_single_contact)
route.post('/add_contact', add_contact)
route.patch('/update_contact/:id', update_contact)
route.delete('/delete_contact/:id', delete_contact)


module.exports = route