const User = require("../models/user.model");

const validateUserRequestBody = (req, res, next) => {
  try {
    // Validate the userName
    if (!req.body.name) {
      res.status(400).send({
        message: "Failed ! Bad Request, userName field is not passed or empty",
      });
      return;

      // Validate the userId
      if (!req.body.userId) {
        res.status(500).send({
          message: "User id is not Present",
        });
      }
      // Let's check if the user id is already present
      const user = User.findOne({ userId: req.body.userId });
      if (user != null) {
        res.status(400).send({
          message:
            "Failed ! Bad Request, userId field is already registered, Please change and try",
        });
      }
      // Check for email
      if (!req.body.email) {
        res.status(500).send({
          message: "Failed ! Bad Request, Email field is not passed or empty",
        });
      }
      // Let's check if the user id is already present
      const email = User.findOne({ email: req.body.email });
      if (email != null) {
        res.status(400).send({
          message:
            "Failed ! Bad Request, userId field is already registered, Please change and try",
        });
      }

      // Check for password
      // Check for
    }
  } catch (err) {
    console.log("Error while validating user", err);
  }
};
