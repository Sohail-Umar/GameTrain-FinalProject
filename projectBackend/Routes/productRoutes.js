const express = require("express");
const controller = require("../Controllers/productController")
const authMiddleware = require("../Middleware/authMiddleware")

const router = express.Router();

router.get("/allproducts", controller.getAllProducts)
router.post("/addproduct", authMiddleware.upload, controller.addProduct)

module.exports = router;