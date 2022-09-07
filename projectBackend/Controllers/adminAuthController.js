const AdminAuthModel = require("../Models/adminAuthModel")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt");


const adminSignUpController = async (req, res) => {
    const hashedPaswword = bcrypt.hashSync(req.body.password, 8)
    try {
        const user = await AdminAuthModel.create({
            fullname: req.body.fullname,
            email: req.body.email,
            password: hashedPaswword
        })

        const token = jwt.sign({
            fullname: user.fullname,
            email: user.email
        },
            process.env.JWT_SECRET, { expiresIn: 300 }
        )
        res.status(200).json({ message: "Successfully SignUp", token, user })
        return;
    } catch (error) {
        res.status(401).json(error)
        return
    }



    // res.send("User signup Route Working")
}

const adminSignInController = async (req, res) => {

    // try {
    console.log(req.body)
    if (!req.body.email) {
        res.status(401).json("email is required")
        return
    }

    const user = await AdminAuthModel.findOne({
        email: req.body.email
    })

    if (!user) {
        res.status(401).json({ message: "No Admin Found regarding given email" })
        return
    }

    if (req.body.password !== user.password) {
        res.status(401).json({ message: "Password Doesn't Match" })
        return
    }

    const token = jwt.sign({
        fullname: user.fullname,
        email: user.email
    },
        process.env.JWT_SECRET, { expiresIn: 300 }
    )
    res.status(200).json({ message: "Successfully SignIn", token })

    // } catch (error) {
    //     res.status(401).json(error)
    //     return
    // }


}

// const getAllAdminData = (req, res) => {

//     try {
//         const allUsers = UserModel.find()
//         res.status(201).json(allUsers)
//     } catch (error) {
//         res.status(401).json(error)
//     }
// }


module.exports = {
    adminSignInController, adminSignUpController
}