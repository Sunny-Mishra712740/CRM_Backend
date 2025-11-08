const User = require("../models/user.model");
const constants = require("../utils/constants");

const validateUserRequestBody = async (req, res, next) => {
  try {
    // Validate name
    if (!req.body.name) {
      return res.status(400).send({
        message: "Failed! Bad Request, name field is not passed or empty",
      });
    }

    // Validate userId
    if (!req.body.userId) {
      return res.status(400).send({
        message: "Failed! Bad Request, userId field is not passed or empty",
      });
    }

    // Check if userId already exists
    const existingUser = await User.findOne({ userId: req.body.userId });
    if (existingUser) {
      return res.status(400).send({
        message:
          "Failed! Bad Request, userId field is already registered, Please change and try",
      });
    }

    // Validate email
    if (!req.body.email) {
      return res.status(400).send({
        message: "Failed! Bad Request, Email field is not passed or empty",
      });
    }

    // Check if email already exists
    const existingEmail = await User.findOne({ email: req.body.email });
    if (existingEmail) {
      return res.status(400).send({
        message:
          "Failed! Bad Request, email field is already registered, Please change and try",
      });
    }

    // Validate userType
    const possibleUserTypes = [
      constants.userTypes.customer,
      constants.userTypes.engineer,
      constants.userTypes.admin,
    ];

    if (
      req.body.userType &&
      !possibleUserTypes.includes(req.body.userType)
    ) {
      return res.status(400).send({
        message: "userType passed is invalid! Please correct and retry.",
      });
    }

    // Validate password
    if (!req.body.password) {
      return res.status(400).send({
        message: "Failed! Bad Request, password field is not passed or empty",
      });
    }

    next(); // ✅ only call next() if everything is fine
  } catch (err) {
    console.log("Error while validating user:", err);
    return res.status(500).send({
      message: "Internal server error while validating user request",
    });
  }
};

module.exports = {
  validateUserRequestBody,
};
