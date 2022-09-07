const mongoose = require("mongoose");

const userAuthentication = new mongoose.Schema({
    fullname: {
        type: String
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "productData"
        }
    ]
})


module.exports = mongoose.model("AuthUser", userAuthentication)