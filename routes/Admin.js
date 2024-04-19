const express = require('express');
const { getAllVoters, registerCandidate, removeAllCandidates, getAllCandidate,
    getSingleVoter, removeAllVoter, removeSingleVoter,processBatchedVotes,
    removeSignUpAccount, setVotingStatusTrue, setVotingStatusFalse, getVotingStatus, getWinner, resetPortal } = require('../controller/adminController');
const adminRouter = express.Router();
const adminController = require('../controller/adminController');

adminRouter.post("/getallvoter", getAllVoters);
adminRouter.post("/registercandidate", registerCandidate);
adminRouter.post("/remove/allcandidates", removeAllCandidates);
adminRouter.post("/getallcandidate", getAllCandidate);
adminRouter.post("/getsinglevoter", getSingleVoter);
adminRouter.post("/remove/allvoters", removeAllVoter);
adminRouter.post("/remove/voter", removeSingleVoter);
adminRouter.post("/remove/signup", removeSignUpAccount);
// adminRouter.post("/set/voting/status/true", setVotingStatusTrue);
adminRouter.post("/set/voting/status/true", (req, res) => {
    adminController.setVotingStatusTrue(req, res, req.app.get('io'));
});
adminRouter.post("/set/voting/status/false", (req, res) => {
    adminController.setVotingStatusFalse(req, res, req.app.get('io'));
});
adminRouter.post("/get/voting/status", getVotingStatus);
adminRouter.post("/proceed/batch/votes", processBatchedVotes);
adminRouter.post("/get/winner", (req, res) => {
    adminController.getWinner(req, res, req.app.get('io'));
});
adminRouter.post("/reset/portal", resetPortal);

module.exports = adminRouter;