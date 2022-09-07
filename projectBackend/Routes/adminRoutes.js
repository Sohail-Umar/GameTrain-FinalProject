const express = require("express");
const controller = require("../Controllers/adminAuthController")
const authMiddleware = require("../Middleware/authMiddleware")


const router = express.Router();

router.post("/signup", authMiddleware.checkValidData, controller.adminSignUpController)

router.post("/signin", authMiddleware.verify, controller.adminSignInController)

// router.get("/me", userAuthMiddleware.verify, controller.getAllAdminData)

module.exports = router;