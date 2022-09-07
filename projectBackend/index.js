const express = require("express");
require("dotenv").config();
const connectDatabase = require("./Database/index")
const userRoutes = require("./Routes/userRoutes")
const adminRoutes = require("./Routes/adminRoutes")
const productRoutes = require("./Routes/productRoutes")

const app = express();
connectDatabase()

app.use(express.json());
app.use("/adminauth", adminRoutes)
app.use("/userauth", userRoutes)
app.use("/products", productRoutes)

app.listen(process.env.PORT, () => {
    console.log(`server started  at port ${process.env.PORT}`)
})