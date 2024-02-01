const router = require("express").Router();
const ethers = require('ethers');
require("dotenv").config();
const { loginABI, loginContractAddress } = require("../constants");

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;


const provider = new ethers.JsonRpcProvider(SEPOLIA_RPC_URL);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
const contractInstance = new ethers.Contract(loginContractAddress, loginABI, wallet);

module.exports = {
}