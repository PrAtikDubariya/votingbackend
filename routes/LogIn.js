const express = require('express');
const router = express.Router();

const { getOTP,SignUp, SignIn } = require("../controller/loginController.js");

router.post("/getotp", getOTP);
router.post("/signup", SignUp);
router.post("/signin", SignIn);

module.exports = router;