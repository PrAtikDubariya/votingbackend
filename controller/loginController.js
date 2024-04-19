const ethers = require('ethers');
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { loginABI, loginContractAddress, candidateRegistrationABI, candidateRegistrationContractAddress,
voterRegistrationABI,voterRegistrationContractAddress, VoteContractAddress, VoteABI} = require("../constants");
const nodemailer = require('nodemailer');
const enrollmentJSON = require("../model/votingSchema");
const votingSchema = require('../model/votingSchema');


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

const VoteContractInstance = new ethers.Contract(VoteContractAddress, VoteABI, wallet);

let transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    }
});

function OTPGenerator(min, max) {
    
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);

}


const SignUpCheck = async (enrollmentNumber) => {

    console.log(enrollmentNumber);

    const response = await contractInstance.getSignUpData(enrollmentNumber);
    console.log(response);
    
    if (response[3] === "") {
        return false;
    } else {
        return true;
    }

}

const getOTP = async (req, res) => {
    
    try {
        let { enrollmentNumber,email } = req.body;
        enrollmentNumber = enrollmentNumber.toUpperCase();
        const Response = await SignUpCheck(enrollmentNumber);
        console.log(enrollmentNumber,email);
        if (!Response) {
            const otp = OTPGenerator(100000, 999999);
            console.log(otp);
            try {

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

        let { firstName, lastName, enrollmentNumber, admissionYear, branch, gender, email } = req.body;

        enrollmentNumber = enrollmentNumber.toUpperCase();
        gender = gender.toUpperCase();
        branch = branch.toUpperCase();
        console.log(enrollmentNumber,branch,gender);
        const response = await contractInstance.signUpStudents(firstName, lastName, 
            admissionYear, enrollmentNumber, branch, gender, email);
        
        const txResponse = await response.wait(1);
        const hash = await response.hash;
        console.log(hash);
        console.log(txResponse);

        let info = transporter.sendMail({
            from: `Voting Portal`,
            to: `${email}`,
            subject: `OTP for Voting Portal`,
            html: `<h2>Hey User,</h2>
                   <h3>Thank you for Sign Up</h3>
                   <a href="https://sepolia.etherscan.io/tx/${hash}">Confirm Your Transaction</a>`
        });

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

        let { enrollmentNumber, role } = req.body;

        if (enrollmentNumber === "ldrp123") {
            enrollmentNumber = enrollmentNumber;
        } else {
            enrollmentNumber = enrollmentNumber.toUpperCase();   
        }

        const response = await contractInstance.logIn(enrollmentNumber, role);

        if (response.isLogin) {

            const otp = OTPGenerator(100000, 999999);

            try {

                console.log(response.email);
            
                let info = transporter.sendMail({
                    from: `Voting Portal`,
                    to: `${response.email}`,
                    subject: `OTP for Voting Portal`,
                    html: `<h2>Hey User,</h2>
                           <h3>Thank you for Log In</h3>
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

    let { enrollmentNumber } = req.body;
    console.log(enrollmentNumber);
    enrollmentNumber = enrollmentNumber.toUpperCase();
    console.log(enrollmentNumber);
    try {

        const response = await contractInstance.getSignUpData(enrollmentNumber);

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
    let { enrollmentNumber } = req.body;

    enrollmentNumber = enrollmentNumber.toUpperCase();

    try {
        const response = await contractInstance.getSignUpData(enrollmentNumber);

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
        let { enrollmentNumber } = req.body;
        enrollmentNumber = enrollmentNumber.toUpperCase();

        const verifyEnrollment = await votingSchema.enrollmentJSON.findOne({ "Enrollment Number": enrollmentNumber });
        const getVoter = await voterContractInstance.getVoter(enrollmentNumber);

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

        if (verifyEnrollment !== null &&  enrollmentNumber === verifyEnrollment['Enrollment Number']) {
            if (voterObject.enrollmentNumber.toUpperCase() === enrollmentNumber) {
                res.json({
                    success: true,
                    message:`${verifyEnrollment['Enrollment Number']} is Already Registered `,
                    voterObject: voterObject
                });
            } else {
                const response = await voterContractInstance.registerVoter(enrollmentNumber);
                const txResponse = await response.wait(1);
                console.log(await response.hash);
                console.log(txResponse);
    
                const getVoter = await voterContractInstance.getVoter(enrollmentNumber);
                
                let info = transporter.sendMail({
                    from: `Voting Portal`,
                    to: `${getVoter[0][6]}`,
                    subject: `Sucessful Registration`,
                    html: `<h2>Hey User,</h2>
                           <h3>Thank you for Register as Voter</h3>
                           <a href="https://sepolia.etherscan.io/tx/${response.hash}">Check Your Transaction</a>`
                });
    
                res.json({
                    success: true,
                    voterObject: voterObject
                });
            }
        } else {
            res.json({
                success: true,
                message:`${enrollmentNumber} is Not Valid`,
                voterObject:voterObject
            })
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
        let { enrollmentNumber } = req.body;
        enrollmentNumber = enrollmentNumber.toUpperCase();

        const response = await candidateContractInstance.getCandidatae(enrollmentNumber);
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
            success: false,
            error: error.toString()
        });
    }
}

const submitVotes = async (req, res) => {
    try {

        let { voterId, candidateId } = req.body;
        voterId = voterId.toUpperCase();
        candidateId = candidateId.enrollmentNumber.toUpperCase();
        console.log(voterId, candidateId);

        const response = await VoteContractInstance.submitVotes(voterId, candidateId);
        const txReceipt = await response.wait(1);
            
        const eventFilter = VoteContractInstance.filters.VoteConditions();
        const events = await VoteContractInstance.queryFilter(eventFilter);
        let VoteConditions = {
                hasVoted: false,
                registeredVoter: false,
                registeredCandidate:false
        };
        events.forEach(event => {
            VoteConditions.hasVoted = event.args[0]
            VoteConditions.registeredVoter = event.args[1]
            VoteConditions.registeredCandidate = event.args[2]
        });
        console.log(VoteConditions);
        if (VoteConditions.hasVoted) {
            console.log(`${voterId} Already Voted`);
            res.json({
                success: true,
                message: `${voterId} Already Voted`,
                VoteConditions: VoteConditions
            });
        } else {
            console.log(`${voterId} has voted`);
            res.json({
                success: true,
                message: `${voterId} has Voted`,
                VoteConditions: VoteConditions
            });
        }
    } catch (error) {
        res.json({
            success: false,
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
    submitVotes: submitVotes,
}