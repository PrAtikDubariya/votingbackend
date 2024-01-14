const router = require("express").Router();
const ethers = require('ethers');
require("dotenv").config();
const {abi,contractAddress } = require("../constants");

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;


const provider = new ethers.JsonRpcProvider(SEPOLIA_RPC_URL);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
const contractInstance = new ethers.Contract(contractAddress, abi, wallet);

const SignUpCheck = async (req, res) => {

    try {

        const {enrollmentNumber} = req.body;
        console.log(enrollmentNumber);

        const Response = await contractInstance.getSignUpData(enrollmentNumber);
        console.log(Response);

        res.json(Response);

    } catch (error) {
        res.json({ error: error });
    }

}

const SignUp = async (req, res) => {
    
    try {

        const {firstName,lastName,enrollmentNumber,admissionYear,branch,gender,setPassword,confirmPassword} = req.body;
        
    } catch (error) {
        res.json({ error: error });
    }

}

module.exports = {
    SignUpCheck: SignUpCheck,
    SignUp:SignUp,
}