const ethers = require('ethers');
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { loginABI, loginContractAddress, candidateRegistrationABI, candidateRegistrationContractAddress,
voterRegistrationABI,voterRegistrationContractAddress} = require("../constants");
const nodemailer = require('nodemailer');

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;


const provider = new ethers.JsonRpcProvider(SEPOLIA_RPC_URL);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

const contractInstance = new ethers.Contract(loginContractAddress, loginABI, wallet);
const candidateContractInstance = new ethers.Contract(
    candidateRegistrationContractAddress,
    candidateRegistrationABI,
    wallet
);
const voterContractInstance = new ethers.Contract(
    voterRegistrationContractAddress,
    voterRegistrationABI,
    wallet
);

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

        const response = await contractInstance.signUpStudents(firstName, lastName, 
            admissionYear, enrollmentNumber, branch, gender, email);
        
        const txResponse = await response.wait(1);
        console.log(await response.hash);
        console.log(txResponse);
        
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
                otp: otp,
                enrollmentNumber:enrollmentNumber
            })
            
        }
        else {
            res.json({
                success: true,
                isLogin: response.isLogin,
                role: response.role,
            });
        }
        
    } catch (error) {
        res.json({
            success:false,
            error: error,
        });
    }

}

const getSignUpStruct = async (req, res) => {

    const { enrollmentNumber } = req.body;
    console.log(enrollmentNumber);
    const enrollmentNumbers = enrollmentNumber.toLowerCase();
    console.log(enrollmentNumbers);
    try {

        const response = await contractInstance.getSignUpStruct(enrollmentNumbers);

        const signUpStruct = {
            firstName: response[0],
            lastName: response[1],
            admissionYear: Number(response[2]),
            enrollmentNumber: response[3],
            branch: response[4],
            gender: response[5],
            email: response[6],
        }

        console.log(signUpStruct);
        
        res.json({
            success: true,
            signUpStruct: signUpStruct
        });

        
    } catch (error) {
        res.json({
            success: false,
            error: error.toString()
        });
        console.log(error);
    }
}

const getAllSignUpData = async (req, res) => {
    
    try {

        const response = await contractInstance.getAllSignUpData();
        const signUpData = response.map(data => ({
            firstName: data.firstName,
            lastName: data.lastName,
            enrollmentNumber: data.enrollmentNumber,
            admissionYear: parseInt(data.admissionYear.toString()),
            branch: data.branch,
            gender: data.gender,
            email: data.email
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

const getOTPRegistration = async (req, res) => {
    const { enrollmentNumber } = req.body;

    const enrollmentNumbers = enrollmentNumber.toLowerCase();

    try {
        const response = await contractInstance.getSignUpStruct(enrollmentNumbers);

        const signUpStruct = {
            firstName: response[0],
            lastName: response[1],
            admissionYear: Number(response[2]),
            enrollmentNumber: response[3],
            branch: response[4],
            gender: response[5],
            email: response[6],
        }

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
                    to: `${signUpStruct.email}`,
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
            otp:otp,
        })

        
    } catch (error) {
        res.json({
            success: false,
            error: error.toString()
        });
        console.log(error);
    }

}

const registerVoter = async (req, res) => {
    try {
        const { enrollmentNumber } = req.body;
        const ENROLLMENT_NUMBER = enrollmentNumber.toLowerCase();

        const getVoter = await voterContractInstance.getVoter(ENROLLMENT_NUMBER);

        const voter = getVoter[0];

        const voterObject = {
            firstName: voter[0],
            lastName: voter[1],
            admissionYear: Number(voter[2]),
            enrollmentNumber: voter[3],
            branch: voter[4],
            gender: voter[5],
            email: voter[6],
            hasVoted:getVoter[1]
        }

        if (voterObject.enrollmentNumber.toLowerCase() === ENROLLMENT_NUMBER) {
            res.json({
                success: true,
                voterObject: voterObject
            });
        } else {
            const response = await voterContractInstance.registerVoter(ENROLLMENT_NUMBER);
            const txResponse = await response.wait(1);
            console.log(await response.hash);
            console.log(txResponse);
            res.json({
                success: true,
                voterObject: voterObject
            });
        }
        
    } catch (error) {
        res.json({
            success: false,
            error: error.toString()
        });
        console.log(error);
    }
}

const registerCandidate = async (req, res) => {
    try {
        const { enrollmentNumber } = req.body;
        const ENROLLMENT_NUMBER = enrollmentNumber.toLowerCase();

        const response = await candidateContractInstance.getCandidatae(ENROLLMENT_NUMBER);
        console.log(response);

        const candidateInfoArray = response[0];
        const voteCount = response[1];

        const candidateObject = {
            firstName: candidateInfoArray[0],
            lastName: candidateInfoArray[1],
            admissionYear: Number(candidateInfoArray[2]),
            enrollmentNumber: candidateInfoArray[3],
            branch: candidateInfoArray[4],
            gender: candidateInfoArray[5],
            email: candidateInfoArray[6],
            voteCount:Number(voteCount),
        };

        res.json({
            success: true,
            candidateObject:candidateObject
        });
    } catch (error) {
        res.json({
            success: true,
            error: error.toString()
        });
    }
}

module.exports = {
    getOTP: getOTP,
    SignUp: SignUp,
    SignIn: SignIn,
    getAllSignUpData: getAllSignUpData,
    getSignUpStruct: getSignUpStruct,
    registerVoter: registerVoter,
    registerCandidate: registerCandidate,
    getOTPRegistration, getOTPRegistration,
}