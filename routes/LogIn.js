const express = require('express');
const router = express.Router();

const { getOTP,SignUp, SignIn, getAllSignUpData } = require("../controller/loginController.js");

router.post("/getotp", getOTP);
router.post("/signup", SignUp);
router.post("/signin", SignIn);
router.post("/getalldata", getAllSignUpData);

module.exports = router;