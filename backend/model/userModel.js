const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "please provide your name"]
    },
    phoneNo: {
        type: Number,
        required: [true, "provide the PhoneNo"],
        maxLength: [10, "please check the number"]
    },
    email: {
        type: String,
        required: [true, 'please provide the email'],
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    password: {
        type: String,
        required: [true, "insert your Password"],
        minLength: 8
    },
    token: {
        type: String
    }
})
module.exports = mongoose.model("user", userSchema)