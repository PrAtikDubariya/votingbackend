const loginContractAddress = "0x21E84307458A986272a6dE8FEAEe4325AD0c959C";
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

const voterRegistrationContractAddress = "0xdEF2a17258E788647D37eca0F95626221dc97f8F";
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
  }
];

const candidateRegistrationContractAddress = "0x2F21712FA84e28ca68FCAc26648C42c4bf74a5d2";
const candidateRegistrationABI = [
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

const VoteContractAddress = "0xC975B3bCE76B0Ba2352270D5a67F8F30EaAAA828";
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
