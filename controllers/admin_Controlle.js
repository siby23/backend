const { generateAccessToken, generateRefreshToken } = require('../controllers/auth_Contoller')
let refresh_tokens = []

// @description < controller to login admin>
// @version < 27-02-2023>
// @body {email,password} for login admin
module.exports.admin_login = async (req, res, next) => {
    try {
        let { email, password } = req.body
        if (email === process.env.Admin_emial && password === process.env.Admin_password) {

            let accestoken = await generateAccessToken(process.env.Admin_id)
            let reffreshtoken = await generateRefreshToken(process.env.Admin_id)
            refresh_tokens.push(reffreshtoken)
            res.status(200).cookie(
                "accesstoken", accestoken, {
                httponly: true,
                path: '/',
                maxAge: 7 * 24 * 60 * 1000,
                sameSite: "strict"

            }).json({ reffreshtoken })
        } else {
            res.status(400).json({ message: "incorect credentials" })
        }
    } catch (error) {
        next(error)
    }
}

// @description < controller to provideing re-access to the protected routes>
// @version < 27-02-2023>
// @body {refresh token} for re-access to the protected routes
module.exports.refresh_token = () => {

}

// @description < controller to loe out from the site>
// @version < 27-02-2023>
// @body {refresh token } for geting log out from the session
module.exports.admin_logout = () => {

}