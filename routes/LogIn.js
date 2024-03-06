const express = require('express');
const router = express.Router();

const { getOTP, SignUp, SignIn, getAllSignUpData,
    getSignUpStruct, registerVoter, registerCandidate, getOTPRegistration, submitVotes } = require("../controller/loginController.js");

router.post("/getotp", getOTP);
router.post("/signup", SignUp);
router.post("/signin", SignIn);
router.post("/getalldata", getAllSignUpData);
router.post("/getsinglesignup", getSignUpStruct);
router.post("/registervoter", registerVoter);
router.post("/registercandidate", registerCandidate);
router.post("/getotp/registration", getOTPRegistration);
router.post("/cast/vote", submitVotes);



module.exports = router;