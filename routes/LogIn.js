const express = require('express');
const router = express.Router();

const { SignUpCheck } = require("../controller/loginController.js");

router.post("/checksignup", SignUpCheck);


module.exports = router;