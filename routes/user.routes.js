const express = require("express");
const route = express.Router();
const authController = require("../controllers/userController");
const veriftyUserReqBody = require("../middlewares/verifyUserReqBody");


route.post("/auth/signup",[veriftyUserReqBody.validateUserRequestBody], authController.sig)