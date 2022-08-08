
const createUser = require("../model/signupModels");

exports.signUpDetails = async(req,res) => {
try{
    const newUser = new createUser({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        password:req.body.password
    })

    await newUser.save()
    return res.send({
        message:"Sign Up succesful",
        status:200,
        newUser
    });
}
catch(err) {
    res.json(err.message);
    console.log(err.message)
}
}