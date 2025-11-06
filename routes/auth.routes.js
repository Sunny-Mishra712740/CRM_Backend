const express = require("express");
const route = express.Router();
const authController = require("../controllers/auth.controller");
const verifyUserReqBody = require("../middlewares/verifyUserReqBody") 

route.post("/auth/signup", [verifyUserReqBody.validateUserRequestBody], authController.signUp);

module.exports = route;