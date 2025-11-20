const express = require("express");
const route = express.Router();
const userController = require("../controllers/user.controller");
const veriftyUserReqBody = require("../middlewares/verifyUserReqBody");


route.get("/users", userController.findAll);

module.exports = route;