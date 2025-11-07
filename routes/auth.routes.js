const express = require("express");
const route = express.Router();
const authController = require("../controllers/auth.controller");
const verifyUserReqBody = require("../middlewares/verifyUserReqBody") 

route.post("/auth/signUp", [verifyUserReqBody.validateUserRequestBody], authController.signUp);
route.post("/auth/signIn", authController.signIn);

module.exports = route;