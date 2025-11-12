// This is controller files for supporting users related APIs

const objectConverter = require("../utils/objectConverter");

const User = require("../models/user.model");


// Constoller for fetch all the users details

exports.findAll = async (req, res) => {
    const users = await User.findAll();

    return res.status(200).send(objectConverter(users))
}

console.log("hello")
function func(){
console.log("Hey this is sunny");
}

console.log("My name is sunny mishra")


