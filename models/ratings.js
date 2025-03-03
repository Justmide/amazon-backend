const mongoose = require("mongoose")

const ratingSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true,
    },
    tags: {
        type: String,
    }
})


const ratingsModel = mongoose.model("ratings", ratingSchema)

module.exports = ratingsModel