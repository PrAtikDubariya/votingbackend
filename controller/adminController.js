const ethers = require('ethers');
require("dotenv").config();
const {
    // loginABI,
    // loginContractAddress,
    candidateRegistrationContractAddress,
    candidateRegistrationABI,
    voterRegistrationContractAddress,
    voterRegistrationABI
} = require("../constants");

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;


const provider = new ethers.JsonRpcProvider(SEPOLIA_RPC_URL);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

// const contractInstance = new ethers.Contract(loginContractAddress, loginABI, wallet);
const voterContractInstance = new ethers.Contract(voterRegistrationContractAddress, voterRegistrationABI, wallet);
const candidateContractInstance = new ethers.Contract(candidateRegistrationContractAddress, candidateRegistrationABI, wallet);

const enrollmentNumberLock = {}

const getAllVoters = async (req, res) => {
    
    try {

        const response = await voterContractInstance.getAllVoters();
        const voterData = response.map(voter => {
            return {
                firstName: voter[0][0],
                lastName: voter[0][1],
                admissionYear: Number(voter[0][2]),
                enrollmentNumber: voter[0][3],
                branch: voter[0][4],
                gender: voter[0][5],
                email: voter[0][6],
                hasVoted: voter[1],
            };
          });
        console.log(response);
        res.json({
            success: true,
            voterData:voterData,
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
        let { enrollmentNumber } = req.body;
        enrollmentNumber = enrollmentNumber.toLowerCase();

        const response = await voterContractInstance.getVoter(enrollmentNumber);
        const voterData = {
            firstName: response[0][0],
            lastName: response[0][1],
            admissionYear: Number(response[0][2]),
            enrollmentNumber: response[0][3],
            branch: response[0][4],
            gender: response[0][5],
            email: response[0][6],
            hasVoted: response[1],
        };

        res.json({
            success: true,
            voterData: voterData
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.toString()
        });
    }

}

const registerCandidate = async (req, res) => {

    const { enrollmentNumber } = req.body;
    const enrollmentNumbers = enrollmentNumber.toLowerCase();

    try {

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

        if (candidateObject.enrollmentNumber === enrollmentNumbers) {
            res.json({
                success: true,
                candidate: candidateObject,
            });
        }
        else {
            if (enrollmentNumberLock[enrollmentNumbers]) {
                console.log("CONSOLE",enrollmentNumberLock[enrollmentNumbers]);
                res.json({
                    success: true,
                    candidate: candidateObject,
                    isLock:enrollmentNumberLock[enrollmentNumbers]
                });
            } else {
                enrollmentNumberLock[enrollmentNumbers] = true;
                console.log("console",enrollmentNumberLock[enrollmentNumbers]);
                const response = await candidateContractInstance.registerCandidate(enrollmentNumbers);
                const txResponse = await response.wait(1);
                console.log(await response.hash);
                

                enrollmentNumberLock[enrollmentNumbers] = false;
                res.json({
                    success: true,
                    candidate: candidateObject,
                    isLock:enrollmentNumberLock[enrollmentNumbers]
                });
                delete enrollmentNumberLock[enrollmentNumbers];
            }
        }

    } catch (error) {
        delete enrollmentNumberLock[enrollmentNumbers];
        res.json({
            success: false,
            error: error.toString()
        });
        console.log(error);
    }

}

const removeAllCandidates = async (req, res) => {
    try {
        const response = await candidateContractInstance.removeAllCandidates();
        const txResponse = await response.wait(1);
        console.log(await response.hash);
        console.log(txResponse);
        
        res.json({
            success: true,
            message:"All Candidate has been removed"
        });
    } catch (error) {
        res.json({
            success: false,
            error: error.toString()
        });
        console.log(error);
    }
}

const removeAllVoter = async (req, res) => {
    try {
        const response = await voterContractInstance.removeAllVoters();
        const txResponse = await response.wait(1);
        console.log(response.hash);
        res.json({
            success: true,
            message:"All Voters has been removed"
        });
    } catch (error) {
        res.json({
            success: false,
            error: error.toString()
        });
        console.log(error);
    }
}

const removeSingleVoter = async (req, res) => {
    try {
        let { enrollmentNumber } = req.body;
        enrollmentNumber = enrollmentNumber.toLowerCase();

        const response = await voterContractInstance.removeSingleVoter(enrollmentNumber);
        const txResponse = await response.wait();
        console.log(await response.hash);

        res.json({
            success: true,
            isRemoved: response
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
                admissionYear: Number(candidate[0][2]),
                enrollmentNumber: candidate[0][3],
                branch: candidate[0][4],
                gender: candidate[0][5],
                email: candidate[0][6],
                voteCount: Number(candidate[1]),
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
    removeAllVoter: removeAllVoter,
    getAllCandidate: getAllCandidate,
    getSingleVoter: getSingleVoter,
    removeSingleVoter: removeSingleVoter,
}