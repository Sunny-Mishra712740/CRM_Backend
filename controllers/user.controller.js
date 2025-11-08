// This is controller files for supporting users related APIs

const User = require("../models/user.model");


// Constoller for fetch all the users details

exports.findAll = async (req, res) => {
    const users = await User.findAll();
}



