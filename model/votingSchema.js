const mongoose = require('mongoose');

const VotingStartSchema = new mongoose.Schema({
    isVotingStart:{
        type: Boolean,
        required:true,
    }
});

const VoteTimerSchema = new mongoose.Schema({
    voteTimer: {
        type: String,
    }
});

const Enrollment_NumberSchema = new mongoose.Schema({
    "Enrollment Number": String,
    Branch: String,
    Div: String
  });


const votingStart = mongoose.model("votingStart",VotingStartSchema);
const votingTimer = mongoose.model("votingTimer", VoteTimerSchema);
const enrollmentJSON = mongoose.model("enrollmentJSON", Enrollment_NumberSchema);

module.exports = {
    votingStart: votingStart,
    votingTimer: votingTimer,
    enrollmentJSON:enrollmentJSON,
};