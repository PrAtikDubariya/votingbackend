const router = require("express").Router();
const ethers = require('ethers');
require("dotenv").config();
const { loginABI, loginContractAddress } = require("../constants");
const nodemailer = require('nodemailer');

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;


const provider = new ethers.JsonRpcProvider(SEPOLIA_RPC_URL);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
const contractInstance = new ethers.Contract(loginContractAddress, loginABI, wallet);

function OTPGenerator(min, max) {
    
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);

}


const SignUpCheck = async (enrollmentNumber) => {

        console.log(enrollmentNumber);

        const Response = await contractInstance.getSignUpData(enrollmentNumber);
        console.log(Response);

        return Response;

}

const getOTP = async (req, res) => {
    
    try {
        const { enrollmentNumber,email } = req.body;
        
        const Response = await SignUpCheck(enrollmentNumber);
        console.log(enrollmentNumber,email);
        if (!Response) {
            const otp = OTPGenerator(100000, 999999);
            console.log(otp);
            try {

                let transporter = nodemailer.createTransport({
                    host: process.env.MAIL_HOST,
                    auth: {
                        user: process.env.MAIL_USER,
                        pass: process.env.MAIL_PASS,
                    }
                });

                console.log(email);
            
                let info = transporter.sendMail({
                    from: `Voting Portal`,
                    to: `${email}`,
                    subject: `OTP for Voting Portal`,
                    html: `<h2>Hey User,</h2>
                           <h3>Thank you for Sign Up</h3>
                           <p>Your One Time Password is : ${otp}</p>`
                });
                
            } catch (error) {
                console.log(error);
            }

            res.json({
                otp: otp,
                alreadySignUp:Response
            });
            
        }
        else {
            res.json({
                alreadySignUp: Response,
            });
        }
        
    } catch (error) {
        res.json({
            error: error,
        });
    }
    

}

const SignUp = async (req, res) => {
    
    try {

        const { firstName, lastName, enrollmentNumber, admissionYear, branch, gender, email } = req.body;

        await contractInstance.signUpStudents(firstName, lastName, 
            admissionYear,enrollmentNumber, branch, gender, email);
        
        res.json({
            success:true,
            signUp:true,
         });

    } catch (error) {
        res.json({ error: error });
        console.log(error);
    }

}

const SignIn = async (req, res) => {
    
    try {

        const { enrollmentNumber, role } = req.body;

        const response = await contractInstance.signIn(enrollmentNumber, role);


        if (response.isLogin) {

            const otp = OTPGenerator(100000, 999999);

            try {

                let transporter = nodemailer.createTransport({
                    host: process.env.MAIL_HOST,
                    auth: {
                        user: process.env.MAIL_USER,
                        pass: process.env.MAIL_PASS,
                    }
                });

                console.log(response.email);
            
                let info = transporter.sendMail({
                    from: `Voting Portal`,
                    to: `${response.email}`,
                    subject: `OTP for Voting Portal`,
                    html: `<h2>Hey User,</h2>
                           <h3>Thank you for Sign Up</h3>
                           <p>Your One Time Password is : ${otp}</p>`
                });
                
            } catch (error) {
                console.log(error);
            }
            console.log(otp);
            res.json({
                success: true,
                isLogin: response.isLogin,
                role: response.role,
                otp:otp,
            })
            
        }
        else {
            res.json({
                success:true,
                isLogin: response.isLogin,
                role:response.role
            })
        }
        
    } catch (error) {
        res.json({
            success:false,
            error: error,
        });
    }

}

const getAllSignUpData = async (req, res) => {
    
    try {

        const response = await contractInstance.getAllSignUpData();
        
        const signUpData = response.map(data => ({
            firstName: data.firstName,
            lastName: data.lastName,
            enrollmentNumber: data.enrollmentNumber,
        }));
        
        res.json({
            success: true,
            signUpData: signUpData
        });

        
    } catch (error) {
        res.json({
            success: false,
            error: error.toString()
        });
        console.log(error);
    }

}

module.exports = {
    getOTP: getOTP,
    SignUp: SignUp,
    SignIn: SignIn,
    getAllSignUpData:getAllSignUpData,
}