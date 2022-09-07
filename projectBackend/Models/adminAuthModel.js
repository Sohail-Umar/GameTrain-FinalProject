const mongoose = require("mongoose");

const adminAuthentication = new mongoose.Schema({
    fullname: {
        type: String
    },

    email: {
        type: String,
        required: true,
        // unique: true
    },

    password: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model("AuthAdmin", adminAuthentication)