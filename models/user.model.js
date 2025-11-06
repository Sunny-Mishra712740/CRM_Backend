const mongoose = require("mongoose");
const constants = require("../utils/constants");

const userSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true,
    },
    userId:{
        type : String,
        required : true,
        unique : true,
    },
    password:{
        type : String,
        required : true,
        minLength : 7,
    },
    email:{
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        minLength : 10,
    },
    userType:{
        type : String,
        enum : [constants.userTypes.customer, constants.userTypes.engineer, constants.userTypes.admin],
        required : true,
        default : constants.userTypes.customer,
    },
    userStatus : {
        type : String,
        enum : [constants.userStatus.approved, constants.userStatus.pending, constants.userStatus.blocked],
        required : true,
        default : constants.userStatus.approved,
    }
},{timestamps : true, versionKey : false});

module.exports = mongoose.model("User", userSchema)

