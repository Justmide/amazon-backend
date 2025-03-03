const ratingsModel = require("../models/ratings")

const uploadRatings = async (req, res) =>{
    try {
        const ratings = await ratingsModel.create(req.body)
        if (!ratings) {
            res.status(400).json({
                status: "error",
                message: "failed to send ratings"
            })
            return
        }
        res.status(201).json({
            status: "Sent!",
            message: "✅ ratings sent successfully",
            ratings
        })
    } catch (error) {
       console.error(error);
    }
}

module.exports = uploadRatings