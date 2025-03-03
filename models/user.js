const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {
        type : String,
        required : true,
    },
    email: {
    type: String,
    required: true,
    unique: true
    },
    password: {
        type: String,
        required : true,
        min: 6,
        max: 15
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: true
    },
    verificationToken: {
        type: String
    },
    verificationExp : {
        type: Number
    },
    IsVerified: {
        type : Boolean,
        default : false
    }
    })
    
const userModel = mongoose.model("users", userSchema)

module.exports = userModel