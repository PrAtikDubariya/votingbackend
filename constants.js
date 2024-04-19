const loginContractAddress = "0x00c62c89d4225A6cb4a21f0cd18EFdB6eF97AEaD";
const loginABI = [
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "firstName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "lastName",
            "type": "string"
          },
          {
            "internalType": "uint64",
            "name": "admissionYear",
            "type": "uint64"
          },
          {
            "internalType": "string",
            "name": "enrollmentNumber",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "branch",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "gender",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "email",
            "type": "string"
          }
        ],
        "indexed": false,
        "internalType": "struct Login.SignUp",
        "name": "student",
        "type": "tuple"
      }
    ],
    "name": "StudentModify",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "hasDelete",
        "type": "bool"
      }
    ],
    "name": "StudentRemoved",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "enrollmentNumber",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "email",
        "type": "string"
      }
    ],
    "name": "StudentsSignUp",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "getAllSignUpData",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "firstName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "lastName",
            "type": "string"
          },
          {
            "internalType": "uint64",
            "name": "admissionYear",
            "type": "uint64"
          },
          {
            "internalType": "string",
            "name": "enrollmentNumber",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "branch",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "gender",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "email",
            "type": "string"
          }
        ],
        "internalType": "struct Login.SignUp[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_enrollmentNumber",
        "type": "string"
      }
    ],
    "name": "getSignUpData",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "firstName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "lastName",
            "type": "string"
          },
          {
            "internalType": "uint64",
            "name": "admissionYear",
            "type": "uint64"
          },
          {
            "internalType": "string",
            "name": "enrollmentNumber",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "branch",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "gender",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "email",
            "type": "string"
          }
        ],
        "internalType": "struct Login.SignUp",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_enrollmentNumber",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_role",
        "type": "string"
      }
    ],
    "name": "logIn",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "role",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "email",
            "type": "string"
          },
          {
            "internalType": "bool",
            "name": "isLogin",
            "type": "bool"
          }
        ],
        "internalType": "struct Login.AdminStudent",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_firstName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_lastName",
        "type": "string"
      },
      {
        "internalType": "uint64",
        "name": "_admissionYear",
        "type": "uint64"
      },
      {
        "internalType": "string",
        "name": "_enrollmentNumber",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_branch",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_gender",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_email",
        "type": "string"
      }
    ],
    "name": "modifyStudentSignUpData",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_enrollmentNumber",
        "type": "string"
      }
    ],
    "name": "removeAccount",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_firstName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_lastName",
        "type": "string"
      },
      {
        "internalType": "uint64",
        "name": "_admissionYear",
        "type": "uint64"
      },
      {
        "internalType": "string",
        "name": "_enrollmentNumber",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_branch",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_gender",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_email",
        "type": "string"
      }
    ],
    "name": "signUpStudents",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

const voterRegistrationContractAddress =
  "0xF1BB4d1173f738eCcea07779e6E5e2b980258c81";
const voterRegistrationABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_loginAddress",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "enrollmentNumber",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "email",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "hasVoted",
        "type": "bool"
      }
    ],
    "name": "VoterRegister",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "enrollmentNumber",
        "type": "string"
      }
    ],
    "name": "VoterRemoved",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "getAllVoters",
    "outputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "firstName",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "lastName",
                "type": "string"
              },
              {
                "internalType": "uint64",
                "name": "admissionYear",
                "type": "uint64"
              },
              {
                "internalType": "string",
                "name": "enrollmentNumber",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "branch",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "gender",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "email",
                "type": "string"
              }
            ],
            "internalType": "struct Login.SignUp",
            "name": "voter",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "hasVoted",
            "type": "bool"
          }
        ],
        "internalType": "struct VoterRegistration.Voter[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_voterId",
        "type": "string"
      }
    ],
    "name": "getVoter",
    "outputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "firstName",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "lastName",
                "type": "string"
              },
              {
                "internalType": "uint64",
                "name": "admissionYear",
                "type": "uint64"
              },
              {
                "internalType": "string",
                "name": "enrollmentNumber",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "branch",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "gender",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "email",
                "type": "string"
              }
            ],
            "internalType": "struct Login.SignUp",
            "name": "voter",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "hasVoted",
            "type": "bool"
          }
        ],
        "internalType": "struct VoterRegistration.Voter",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_voterId",
        "type": "string"
      }
    ],
    "name": "modifyVoter",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_voterId",
        "type": "string"
      }
    ],
    "name": "modifyVoterData",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_voterId",
        "type": "string"
      }
    ],
    "name": "registerVoter",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "removeAllVoters",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_voterId",
        "type": "string"
      }
    ],
    "name": "removeSingleVoter",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

const candidateRegistrationContractAddress =
  "0x23C1F36A3baac80D67C7D3C3586c547287FF679c";
const candidateRegistrationABI =  [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_loginAddress",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "enrollmentNumber",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "email",
        "type": "string"
      }
    ],
    "name": "CandidateRegister",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "enrollmentNumber",
        "type": "string"
      }
    ],
    "name": "CandidateRemoved",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "firstName",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "lastName",
                "type": "string"
              },
              {
                "internalType": "uint64",
                "name": "admissionYear",
                "type": "uint64"
              },
              {
                "internalType": "string",
                "name": "enrollmentNumber",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "branch",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "gender",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "email",
                "type": "string"
              }
            ],
            "internalType": "struct Login.SignUp",
            "name": "candidate",
            "type": "tuple"
          },
          {
            "internalType": "uint64",
            "name": "voteCount",
            "type": "uint64"
          }
        ],
        "indexed": false,
        "internalType": "struct CandidateRegistration.Candidate[]",
        "name": "winners",
        "type": "tuple[]"
      }
    ],
    "name": "WinnerGet",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "getAllCandidate",
    "outputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "firstName",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "lastName",
                "type": "string"
              },
              {
                "internalType": "uint64",
                "name": "admissionYear",
                "type": "uint64"
              },
              {
                "internalType": "string",
                "name": "enrollmentNumber",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "branch",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "gender",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "email",
                "type": "string"
              }
            ],
            "internalType": "struct Login.SignUp",
            "name": "candidate",
            "type": "tuple"
          },
          {
            "internalType": "uint64",
            "name": "voteCount",
            "type": "uint64"
          }
        ],
        "internalType": "struct CandidateRegistration.Candidate[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_candidateId",
        "type": "string"
      }
    ],
    "name": "getCandidatae",
    "outputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "firstName",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "lastName",
                "type": "string"
              },
              {
                "internalType": "uint64",
                "name": "admissionYear",
                "type": "uint64"
              },
              {
                "internalType": "string",
                "name": "enrollmentNumber",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "branch",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "gender",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "email",
                "type": "string"
              }
            ],
            "internalType": "struct Login.SignUp",
            "name": "candidate",
            "type": "tuple"
          },
          {
            "internalType": "uint64",
            "name": "voteCount",
            "type": "uint64"
          }
        ],
        "internalType": "struct CandidateRegistration.Candidate",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getWinner",
    "outputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "firstName",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "lastName",
                "type": "string"
              },
              {
                "internalType": "uint64",
                "name": "admissionYear",
                "type": "uint64"
              },
              {
                "internalType": "string",
                "name": "enrollmentNumber",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "branch",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "gender",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "email",
                "type": "string"
              }
            ],
            "internalType": "struct Login.SignUp",
            "name": "candidate",
            "type": "tuple"
          },
          {
            "internalType": "uint64",
            "name": "voteCount",
            "type": "uint64"
          }
        ],
        "internalType": "struct CandidateRegistration.Candidate[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_candidateId",
        "type": "string"
      }
    ],
    "name": "modfiyCandidateData",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_candidateId",
        "type": "string"
      }
    ],
    "name": "registerCandidate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "removeAllCandidates",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_candidateId",
        "type": "string"
      }
    ],
    "name": "removeSingleCandidate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_candidateId",
        "type": "string"
      }
    ],
    "name": "sendVote",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

const VoteContractAddress = "0x63169F6Dc77977e4776850E38fc31289D2850f08";
const VoteABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_voterRegistrationContract",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_candidateRegistrationContract",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "hasVote",
        "type": "bool"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "registeredVoter",
        "type": "bool"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "registeredCanidate",
        "type": "bool"
      }
    ],
    "name": "VoteConditions",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "deleteBatchedVotes",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getVotingStatus",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "processBatchedVotes",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "setVotingStatusFalse",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "setVotingStatusTrue",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_voterId",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_candidateId",
        "type": "string"
      }
    ],
    "name": "submitVotes",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
// 447 988
module.exports = {
  loginContractAddress,
  loginABI,
  voterRegistrationContractAddress,
  voterRegistrationABI,
  candidateRegistrationContractAddress,
  candidateRegistrationABI,
  VoteContractAddress,
  VoteABI,
};