const ethers = require('ethers');
require("dotenv").config();
const { loginABI,
    loginContractAddress,
    candidateRegistrationContractAddress,
    candidateRegistrationABI
} = require("../constants");

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;


const provider = new ethers.JsonRpcProvider(SEPOLIA_RPC_URL);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
const contractInstance = new ethers.Contract(loginContractAddress, loginABI, wallet);

const candidateContractInstance = new ethers.Contract(candidateRegistrationContractAddress, candidateRegistrationABI, wallet);

const getAllVoters = async (req, res) => {
    
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

const getSingleVoter = async (req, res) => {
    
    try {

        const { enrollmentNumber } = req.body;
        const enrollmentNumbers = enrollmentNumber.toLowerCase();

        const response = await contractInstance.getSignUpStruct(enrollmentNumbers);

        const signUpData = {
            firstName: response[0],
            lastName: response[1],
            admissionYear: Number(response[2]),
            enrollmentNumber: response[3],
            branch: response[4],
            gender: response[5],
            email: response[6],
        }
        
        res.json({
            success: true,
            signUpData: signUpData
        });

        console.log(response);

        res.json({
            success: true,
            SingleVoter:signUpData,
        })

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
        const enrollmentNumbers = enrollmentNumber.toLowerCase();

        const response = await candidateContractInstance.getCandidatae(enrollmentNumbers);

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

        if (candidateObject.enrollmentNumber === enrollmentNumber) {
            res.json({
                success: true,
                candidate: candidateObject,
            });
        }
        else {
            await candidateContractInstance.registerCandidate(enrollmentNumber);
            
            res.json({
                success: true,
                candidate:candidateObject,
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

const removeAllCandidates = async (req, res) => {
    try {
        await candidateContractInstance.removeAllCandidates();
        res.json({
            success: true
        });
    } catch (error) {
        res.json({
            success: false,
            error: error.toString()
        });
        console.log(error);
    }
}

const getAllCandidate = async (req, res) => {
    try {

        const response = await candidateContractInstance.getAllCandidate();

        const candidateData = response.map(candidate => {
            return {
                firstName: candidate[0][0],
                lastName: candidate[0][1],
                admissionYear: Number(candidate[0][2]), // Convert to Number
                enrollmentNumber: candidate[0][3],
                branch: candidate[0][4],
                gender: candidate[0][5],
                email: candidate[0][6],
                voteCount: Number(candidate[1]), // Convert to Number
            };
          });

        res.json({
            success: true,
            candidateData:candidateData
        })
        
    } catch (error) {
        res.json({
            success: false,
            error: error.toString()
        });
        console.log(error);
    }
}

module.exports = {
    getAllVoters: getAllVoters,
    registerCandidate: registerCandidate,
    removeAllCandidates: removeAllCandidates,
    getAllCandidate: getAllCandidate,
    getSingleVoter: getSingleVoter,
}