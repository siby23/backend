
const jwt = require('jsonwebtoken')

/**
* 
* @description < creating acces token>
* @version < 15-03-2023>
* @param {user} <for creaitng acess token>
*/
module.exports.generateAccessToken = (user) => {
    return new Promise((resolve, reject) => {
        resolve(

            jwt.sign({ user }, process.env.SECRET, { expiresIn: '1d' })
        )
    })


}

/**
 * 
 * @description < creating refresh token>
 * @version < 15-03-2023>
 * @param {*} <for creating refresh token>
 * @returns 
 */
module.exports.generateRefreshToken = (user) => {
    return new Promise((resolve, reject) => {
        resolve(

            jwt.sign({ user }, process.env.SECRET, { expiresIn: '1d' })
        )
    })
}