const express = require("express");
const controller = require("../Controllers/userAuthController")
const authMiddleware = require("../Middleware/authMiddleware")


const router = express.Router();

router.post("/signup", controller.userSignUpController)

router.post("/signin", authMiddleware.checkSigninData, controller.userSignInController)

module.exports = router;