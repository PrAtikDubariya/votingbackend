const loginContractAddress = "0xa7CC77dBfB2Ff1CcC67D844C0e616Cd237a1511D";
const loginABI = [
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
        "internalType": "bool",
        "name": "",
        "type": "bool"
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
    "name": "getSignUpStruct",
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
    "name": "modifySignUpData",
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
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
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
    "name": "signIn",
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
    "name": "signUpStudents",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

const voterRegistrationContractAddress = "0x0462ABaC27840cb6f6B2D8509D794d78F5F2DFBF";
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
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
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
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
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
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

const candidateRegistrationContractAddress = "0xD64C5B66fcA9c6f0eaD0C28eD245Cef4A78379fB";
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
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
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
    "name": "registerCandidate",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
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
    "name": "sendVote",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

const VoteContractAddress = "0x42c350ac7bE3ea30808015DCF82B0c846fD35884";
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
    "name": "castVote",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "hasVote",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "registeredVoter",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "registeredCanidate",
            "type": "bool"
          }
        ],
        "internalType": "struct Vote.VoteConditions",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

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
