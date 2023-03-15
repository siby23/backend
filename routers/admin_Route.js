const route = require("express").Router()

const { admin_login, admin_logout, refresh_token } = require('../controllers/admin_Controlle')

route.post('/login', admin_login)
route.post('/logout', admin_logout)
route.post('/refresh_toket', refresh_token)


module.exports = route