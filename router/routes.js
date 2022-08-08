const express = require('express');
const router = express.Router();
const {jwtAuth} = require('../middleware/jwtAuth');


const userController = require('../controller/userController');
const customProposalController = require('../controller/customProposalController');
const existingProposalController = require('../controller/existingProposalController');
const createUser = require("../controller/signUpController");

//Note: the post method takes two parameter name of the path and callbackfunc from userModel mode;
router.post('/create-user',userController.createUser);
router.get('/get-user',jwtAuth,userController.findUser);
router.put('/update-user',userController.updateUser);
router.delete('/delete-user',userController.deleteUser);


//Routes for customPropsoal
router.post('/create-custom-proposal',customProposalController.createCustomProposal);
router.get('/get-custom-proposal',customProposalController.findCustomProposal);
router.put('/update-custom-proposal',customProposalController.updateCustomProposal);
router.delete('/delete-custom-proposal',customProposalController.deleteCustomProposal);



//Routes for existingProposal
router.post('/create-existing-proposal',existingProposalController.createExistingProposal);
router.get('/get-existing-proposal',existingProposalController.findExistingProposal);
router.put('/update-existing-proposal',existingProposalController.updateExistingProposal);
router.delete('/delete-existing-proposal',existingProposalController.deleteExistingProposal);


//Routes for signup Model
router.post("/user-signup",createUser.signUpDetails);


module.exports = router;