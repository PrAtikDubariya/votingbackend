const express = require('express');
const { getAllVoters, registerCandidate, removeAllCandidates, getAllCandidate, getSingleVoter, removeAllVoter, removeSingleVoter } = require('../controller/adminController');
const adminRouter = express.Router();

adminRouter.post("/getallvoter", getAllVoters);
adminRouter.post("/registercandidate", registerCandidate);
adminRouter.post("/remove/allcandidates", removeAllCandidates);
adminRouter.post("/getallcandidate", getAllCandidate);
adminRouter.post("/getsinglevoter", getSingleVoter);
adminRouter.post("/remove/allvoters", removeAllVoter);
adminRouter.post("/remove/voter", removeSingleVoter);

module.exports = adminRouter;