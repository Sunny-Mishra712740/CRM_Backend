const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();
const User = require("./models/user.model");
const bcryptjs = require("bcryptjs");


mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/CRM')
const db = mongoose.connection
db.on("error", () => {
    console.log("Error while connecting to the mongoDB")
})
db.once("open", () => {
    console.log("Connected to MongoDB")
    init()
})

// Admin Created
async function init() {
    const user = await User.findOne({userId: "admin"})
    if(!user){
        console.log("Admin is not present")
        const admin = await User.create({
            name: "Sunny",
            userId: "admin",
            email: "sunnymishra836935@gmail.com",
            userType: "ADMIN",
            password: bcryptjs.hashSync("Welcome1", 8)
        })
        console.log("Admin is created", admin)
    }else {
        console.log("Admin user is already present")
    }
}


// Starting the Server

const PORT = process.env.PORT || 7777;
console.log(process.env.PORT)
app.listen(PORT, () => {
    console.log(`Server is listening to the port num : ${PORT}`)
})
