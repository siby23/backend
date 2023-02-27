
const jwt = require('jsonwebtoken')


module.exports.generateAccessToken = (user) => {
    return new Promise((resolve, reject) => {
        resolve(

            jwt.sign({ user }, process.env.SECRET, { expiresIn: '1m' })
        )
    })


}


module.exports.generateRefreshToken = (user) => {
    return new Promise((resolve, reject) => {
        resolve(

            jwt.sign({ user }, process.env.SECRET, { expiresIn: '1d' })
        )
    })
}