const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectDatabase = require("./Database/index")
const userRoutes = require("./Routes/userRoutes")
const adminRoutes = require("./Routes/adminRoutes")
const productRoutes = require("./Routes/productRoutes")
const path = require("path");

const app = express();

const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}
connectDatabase()

app.use(express.json());
app.use(cors(corsOptions))
app.use("/adminauth", adminRoutes)
app.use("/userauth", userRoutes)
app.use("/products", productRoutes)
app.use("/images", express.static(path.join(__dirname, "productImage")));

app.listen(process.env.PORT, () => {
    console.log(`server started  at port ${process.env.PORT}`)
})