const mongoose = require("mongoose");

const { Schema } = mongoose;

const signUpSchema = new Schema({
    firstname:{
    type:String,
    required:true
    },
    lastname:{
    type:String,
    required:true
    },
    email:{
    type:String,
    required:true,
    unique:true
    },
    password:{
    type:String,
    required:true
    }
});

const createUser = mongoose.model("signup",signUpSchema);
module.exports = createUser;
