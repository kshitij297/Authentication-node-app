const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    Id: {
        type: Number,
        required: [true, "Id is required"]
    },
    Name: {
        type: String,
        required: [true, "Name is required"]
    },
    Password: {
        type: String,
        required: [true, "Password is required"]
    },
    Email: {
        type: String,
        required: [true, "Email is required"]
    },
    City: {
        type: String,
        required: [true, "City is required"]
    },
    Country: {
        type: String,
        required: [true, "Country is required"]
    },
})

module.exports = mongoose.model('user',userSchema);