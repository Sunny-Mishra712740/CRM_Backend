// This is controller files for supporting users related APIs

const objectConverter = require("../utils/objectConverter");

const User = require("../models/user.model");


// Constoller for fetch all the users details

exports.findAll = async (req, res) => {
    const users = await User.find();
    console.log(users)
    console.log(objectConverter.userResponse(users));
    return res.status(200).send(objectConverter.userResponse(users));
}

