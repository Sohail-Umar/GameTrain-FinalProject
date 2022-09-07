const jwt = require("jsonwebtoken")
const multer = require('multer')

const checkValidData = (req, res, next) => {

    if (!req.body.fullname) {
        res.status(400).json({ message: "Full Name is required" })
    }


    if (!req.body.email) {
        res.status(400).json({ message: "Email is required" })
    }


    if (!req.body.password) {
        res.status(400).json({ message: "Password is required" })
    }
    next();
}


const checkSigninData = (req, res, next) => {

    if (!req.body.email) {
        res.status(400).json({ message: "Email is required" })
        return;
    }


    if (!req.body.password) {
        res.status(400).json({ message: "Password is required" })
        return;
    }
    next();
}

const verify = (req, res, next) => {
    const token = req.headers.auth_key;

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET)
        req.user = user
        next();
    } catch (error) {
        res.status(401).json("Invalid, Not AUthorize")
    }

}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'productImage/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + "." + file.mimetype.split("/")[1])
    }
})

const upload = multer({ storage: storage }).single("anything")









module.exports = { checkValidData, checkSigninData, verify, upload }