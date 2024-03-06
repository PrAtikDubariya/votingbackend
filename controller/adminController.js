const ethers = require('ethers');
const votingStart = require('../model/votingSchema');
const votingTimer = require('../model/votingSchema');

require("dotenv").config();
const nodemailer = require('nodemailer');

const {
    loginContractAddress,
    loginABI,
    candidateRegistrationContractAddress,
    candidateRegistrationABI,
    voterRegistrationContractAddress,
    voterRegistrationABI,
    VoteContractAddress,
    VoteABI
} = require("../constants");
const votingSchema = require('../model/votingSchema');

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;


const provider = new ethers.JsonRpcProvider(SEPOLIA_RPC_URL);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

const loginContractInstance = new ethers.Contract(loginContractAddress, loginABI, wallet);
const voterContractInstance = new ethers.Contract(voterRegistrationContractAddress, voterRegistrationABI, wallet);
const candidateContractInstance = new ethers.Contract(candidateRegistrationContractAddress, candidateRegistrationABI, wallet);
const VoteContractInstance = new ethers.Contract(VoteContractAddress, VoteABI, wallet);

let transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    }
});

const enrollmentNumberLock = {}

const getAllVoters = async (req, res) => {
    
    try {

        const response = await voterContractInstance.getAllVoters();
        console.log(response);
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
        enrollmentNumber = enrollmentNumber.toUpperCase();

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

    let { enrollmentNumber } = req.body;
    enrollmentNumber = enrollmentNumber.toUpperCase();

    try {

        const response = await candidateContractInstance.getCandidatae(enrollmentNumber);

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
            if (enrollmentNumberLock[enrollmentNumber]) {
                console.log("CONSOLE",enrollmentNumberLock[enrollmentNumber]);
                res.json({
                    success: true,
                    candidate: candidateObject,
                    isLock:enrollmentNumberLock[enrollmentNumber]
                });
            } else {
                enrollmentNumberLock[enrollmentNumber] = true;
                console.log("console",enrollmentNumberLock[enrollmentNumber]);
                const response = await candidateContractInstance.registerCandidate(enrollmentNumber);
                const txResponse = await response.wait(1);
                console.log(await response.hash);

                const getCandidate = await candidateContractInstance.getCandidatae(enrollmentNumber);
                
                let info = transporter.sendMail({
                    from: `Voting Portal`,
                    to: `${getCandidate[0][6]}`,
                    subject: `Registered As Candidate`,
                    html: `<h2>Hey User,</h2>
                           <h3>Your registration for candidate is successful</h3>
                           <a href="https://sepolia.etherscan.io/tx/${response.hash}">Check Your Transaction</a>`
                });

                enrollmentNumberLock[enrollmentNumber] = false;
                res.json({
                    success: true,
                    candidate: candidateObject,
                    isLock:enrollmentNumberLock[enrollmentNumber]
                });
                delete enrollmentNumberLock[enrollmentNumber];
            }
        }

    } catch (error) {
        delete enrollmentNumberLock[enrollmentNumber];
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
        enrollmentNumber = enrollmentNumber.toUpperCase();

        const response = await voterContractInstance.removeSingleVoter(enrollmentNumber);
        const txResponse = await response.wait();
        console.log(await response.hash);

        res.json({
            success: true,
            message: "Voter Removed"
        });

    } catch (error) {
        res.json({
            success: false,
            message:"Voter Is Not Removed",
            error: error.toString()
        });
        console.log(error);
    }
}

const removeSignUpAccount = async (req,res) => {
    try {
        let { enrollmentNumber } = req.body;
        enrollmentNumber = enrollmentNumber.toUpperCase();
        const response = await loginContractInstance.removeAccount(enrollmentNumber);
        const isVoter = await voterContractInstance.removeSingleVoter(enrollmentNumber);

        res.json({
            success: true,
        })
    } catch (error) {
        res.json({
            success: false,
            error: error.toString()
        });
        console.log(error);
    }
}

const setVotingStatusTrue = async (req, res, io) => {
    try {

        const { votingDuration } = req.body;

        const setVotingTrue = await votingSchema.votingStart.findByIdAndUpdate('65d70acc4d27e3e1c6660b05',
            { isVotingStart: true },
            { new: true }
        );

        io.emit('votingStarted', { isVotingStart: setVotingTrue.isVotingStart });
        io.emit('votingDuration',{ votingDuration:votingDuration });

        res.json({
            success: true,
            isVotingStart:setVotingTrue.isVotingStart
        })
        
    } catch (error) {
        res.json({
            success: false,
            error: error.toString()
        });
        console.log(error);
    }
}

const setVotingStatusFalse = async (req, res,io) => {
    try {

        const setVotingFalse = await votingSchema.votingStart.findByIdAndUpdate('65d70acc4d27e3e1c6660b05',
            { isVotingStart: false },
            { new: true }
        );

        io.emit('votingEnded', { isVotingStart: setVotingFalse.isVotingStart });
        
        res.json({
            success: true,
            isVotingStart:setVotingFalse.isVotingStart
        })

    } catch (error) {
        res.json({
            success: false,
            error: error.toString()
        });
        console.log(error);
    }
}

const getVotingStatus = async (req, res) => {
    try {
        const response = await votingSchema.votingStart.findById('65d70acc4d27e3e1c6660b05');

        res.json({
            success: true,
            votingStatus: response.isVotingStart
        });
    } catch (error) {
        res.json({
            success: false,
            error: error.toString()
        });
        console.log(error);
    }
}

const processBatchedVotes = async (req, res) => {
    try {
        const response = await VoteContractInstance.processBatchedVotes();

        res.json({
            success: true,
            message:"Voting Successful"
        })

    } catch (error) {
        res.json({
            success: false,
            error: error.toString()
        });
        console.log(error);
    }
}

const resetPortal = async (req, res) => {
    try {
        const deleteBatchedVotes = await VoteContractInstance.deleteBatchedVotes();
        const removeAllCandidates = await candidateContractInstance.removeAllCandidates();
        const removeAllVoters = await voterContractInstance.removeAllVoters();

        res.json({
            success: true,
            message:"Everything Resets"
        })
    } catch (error) {
        res.json({
            success: false,
            error: error.toString()
        });
        console.log(error);
    }
}

const getWinner = async (req, res) => {
    try {
        const response = await candidateContractInstance.getWinner();
        res.json({
            success: true,
            winners: response
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
    getAllVoters: getAllVoters,
    registerCandidate: registerCandidate,
    removeAllCandidates: removeAllCandidates,
    removeAllVoter: removeAllVoter,
    getAllCandidate: getAllCandidate,
    getSingleVoter: getSingleVoter,
    removeSingleVoter: removeSingleVoter,
    removeSignUpAccount: removeSignUpAccount,
    setVotingStatusTrue: setVotingStatusTrue,
    setVotingStatusFalse: setVotingStatusFalse,
    getVotingStatus: getVotingStatus,
    processBatchedVotes: processBatchedVotes,
    getWinner: getWinner,
    resetPortal:resetPortal
}