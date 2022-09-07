const ProductModel = require("../Models/productsModel")

const getAllProducts = async (req, res) => {

    try {
        const allUsers = await ProductModel.find()
        res.status(201).json(allUsers)

    } catch (error) {
        res.status(401).json(error)
    }
}

const addProduct = async (req, res) => {
    try {
        const newproduct = await ProductModel.create({
            productname: req.body.productname,
            description: req.body.description,
            category: req.body.category,
            price: req.body.price,
            image: req.file.filename

        })
        res.status(200).json(newproduct)
        return;
    } catch (error) {
        res.status(401).json(error)
        return
    }
}

module.exports = { getAllProducts, addProduct }