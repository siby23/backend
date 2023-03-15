const jwt = require("jsonwebtoken")

module.exports.verify = (req, res, next) => {
    try {
        if (req.headers.cookie) {

            let cookie = req.headers.cookie.split(/[ =]+/)
            if (!cookie.includes('accesstoken')) throw ('no accesstoken found in cookie')

            let index = cookie.indexOf('accesstoken')
            let token = cookie[index + 1]
            // console.log(token, "token");
            jwt.verify(token, process.env.SECRET, (err, admin) => {
                if (err) throw res.json({ message: 'unautorised' })
                next()
            })
        } else {

            throw ("no cookie found")
        }
    } catch (error) {
        next(error)
    }

}