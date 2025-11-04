const User = require("../models/user.model");

const VerifySignUpBody = (req, res, next) => {
  try {
    // Check for name
    if (!name) {
      res.status(500).send({
        message: "Failed ! Name was not provided in your request body",
      });
    
    // Check for userId
    // Check for email
    // Check for password
    // Check for 
    }
  } catch (err) {
    console.log("Error while validating user", err);
  }
};
