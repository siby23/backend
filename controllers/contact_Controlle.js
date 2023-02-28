const db = require('../models/postgresql/index')
const contact = db.contact



/**
* 
* @description < controller to get all contacts>
* @version < 27-02-2023> 
*/
module.exports.get_all_contact = async (req, res, next) => {
    try {

        console.log("successfully verified");
        let contacts = await contact.findAll()
        console.log(contacts, "contactssssssss");
        res.status(200).json(contacts)
    } catch (error) {
        next(error)
    }

}


/**
* 
*@description < controller to get single contacts>
*@version < 27-02-2023>
*@param {user_id} for getting user details
*/


module.exports.get_single_contact = async (req, res, next) => {
    let user_id = req.params.id
    try {
        let single_user = await contact.findOne({ where: { id: user_id } })
        if (!single_user) throw res.status(404).json({ message: "No user found" })
    } catch (error) {
        next(error)
    }
}

/**
* 
*@description < controller to add contacts>
*@version < 27-02-2023>
*@body {name,location,mobile_nbr} for adding contact
*/
module.exports.add_contact = async (req, res, next) => {
    let { name, location, mobile_nbr } = req.body
    try {
        let isexist = await contact.findOne({ where: { mobile_nbr: mobile_nbr } })
        if (!isexist) {
            const create_contact = await contact.create({
                name, location, mobile_nbr
            })
            res.status(200).json({ message: "Succesfully added" })
        } else {
            res.status(409).json({ message: "Contact alredy exist" })
        }
    } catch (error) {
        next(error)
    }
}

/**
 * 
 * @description < controller to update contacts>
 * @version < 27-02-2023>
 * @body {name,location,mobile_nbr} for updateing contact
 * @params {user_id} for finding updateing contact
 */

module.exports.update_contact = async (req, res, next) => {
    let user_id = req.params.id
    let info = {
        name: req.body.name,
        location: req.body.location,
        mobile_nbr: req.body.mobile_nbr
    }
    try {
        let find_contact = await contact.findOne({ where: { id: user_id } })
        if (!find_contact) throw res.status(404).json({ message: "No user found" })
        let update_contatc = await contact.updateOne(info, { where: { id: user_id } })
        res.status(200).json({ message: "Updated Successfully" })
    } catch (error) {
        next(error)
    }
}

/**
 * 
*@description < controller to delete contacts>
*@version < 27-02-2023>
*@params {user_id} for finding contact and delete 
 */
module.exports.delete_contact = async (req, res, next) => {
    let user_id = req.params.id
    try {
        let find_contact = await contact.findOne({ where: { id: user_id } })

        if (!find_contact) throw res.status(404).json({ message: "No User Found" })

        let delete_contact = await contact.destroy({ where: { id: user_id } })
        res.status(200).json({ message: "Successfully Deleted" })
    } catch (error) {
        next(error)
    }
}