const User = require("../models/user.model");
const constants = require("../utils/constants");

const validateUserRequestBody = (req, res, next) => {
  try {
    // Validate the userName
    if (!req.body.name) {
      res.status(400).send({
        message: "Failed ! Bad Request, userName field is not passed or empty",
      });
      return;
    }

    // Validate the userId
    if (!req.body.userId) {
      res.status(500).send({
        message: "User id is not Present",
      });
      return;
    }
    // Let's check if the user id is already present
    const user = User.findOne({ userId: req.body.userId });
    if (user != null) {
      res.status(400).send({
        message:
          "Failed ! Bad Request, userId field is already registered, Please change and try",
      });
      return;
    }
    // Check for email
    if (!req.body.email) {
      res.status(500).send({
        message: "Failed ! Bad Request, Email field is not passed or empty",
      });
      return;
    }
    // Let's check if email id is unique or not
    const user1 = User.findOne({ email: req.body.email });
    if (email != null) {
      res.status(400).send({
        message:
          "Failed ! Bad Request, email id field is already registered, Please change and try",
      });
      return;
    }

    // Validating the userType
    const possibleUserTypes = [
      constants.userTypes.customer,
      constants.userTypes.engineer,
      constants.userTypes.admin,
    ];
    if (req.body.userTypes && !possibleUserTypes.includes(req.body.userTypes)) {
      res.status(400).send({
        message: "userType passed is invalid ! .. Please correct and re-try !",
      });
      return;
    }
    // validate the password
    if (!req.body.password) {
      res.status(400).send({
        message: "Failed ! Bad Request, password field is not passed or empty",
      });
      return;
    }
  } catch (err) {
    console.log("Error while validating user", err);
  }

  next();
};

module.exports = {
  validateUserRequestBody : validateUserRequestBody,
}