const express = require('express');
const { getAllVoters, registerCandidate, removeAllCandidates, getAllCandidate, getSingleVoter } = require('../controller/adminController');
const adminRouter = express.Router();

adminRouter.post("/getallvoter", getAllVoters);
adminRouter.post("/registercandidate", registerCandidate);
adminRouter.post("/removeallcandidates", removeAllCandidates);
adminRouter.post("/getallcandidate", getAllCandidate);
adminRouter.post("/getsinglevoter", getSingleVoter);

module.exports = adminRouter;