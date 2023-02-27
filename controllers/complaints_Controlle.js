const Complaints = require('../models/mongo_db/complaints_Schema')


// @description < controller to get complaints of single user>
// @version < 27-02-2023>
// @params {user_id} for finding complaints of sinf=gle user>
module.exports.get_single_complaint = async (req, res, next) => {
    let user_id = req.params.id
    console.log(user_id);
    try {
        let single_complaint = await Complaints.find({ userid: user_id })
        if (!single_complaint) throw res.status(404).json({ message: "No compalints for this user" })
        res.status(200).json(single_complaint)

    } catch (error) {
        next(error) 
    }
}

// @description < controller to add complaint>
// @version < 27-02-2023>
// @body {userid,description} for add complaint
module.exports.add_complaint = async (req, res, next) => {
    let { userid, description } = req.body
    try {
        let complaints = await new Complaints({
            userid: userid,
            description: description,
            status: "opend",
            date: Date.now()
        })
        complaints.save(Complaints)
        console.log(complaints);
        res.status(200).json(complaints)

    } catch (error) {
        next(error)
    }
}

// @description < controller to update complaint>
// @version < 27-02-2023>
// @body {status} for updateing compliant
// @params {user_id} for finding updateing complaint
module.exports.update_complaint = async (req, res, next) => {
    let complaint_id = req.params.id
    let { status } = req.body
    try {
        let find_complaint = await Complaints.findOne({ _id: complaint_id })
        if (!find_complaint) throw res.status(404).json({ message: "No such complaint" })
        let updated_complaint = await Complaints.updateOne({ _id: complaint_id }, { $set: { status: status } })
        res.status(200).json(updated_complaint)
    } catch (error) {
        next(error)
    }
}

// @description < controller to update complaint>
// @version < 27-02-2023>
// @params {user_id} for finding updateing complaint
module.exports.delete_complaint = async (req, res, next) => {
    let user_id = req.params.id
    try {
        let deleting_complaits = await Complaints.deleteMany({ userid: user_id })
        res.status(200).json({ message: "Deleted Successfully" })
    } catch (error) {
        next(error)
    }
}