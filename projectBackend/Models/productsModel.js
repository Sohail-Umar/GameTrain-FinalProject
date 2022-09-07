const mongoose = require("mongoose");

const productData = new mongoose.Schema({
    productname: {
        type: String
    },

    description: {
        type: String,
        // required: true,
    },

    category: {
        type: String,
        // required: true
    },

    price: {
        type: Number,
        // required: true
    },
    image: {
        type: String
    }
})


module.exports = mongoose.model("productData", productData)