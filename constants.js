const contractAddress = "0x039cD6333faBf578245322f066F25e65dB13B5E8";
const abi = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "string",
        "name": "enrollmentNumber",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "firstName",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "lastName",
        "type": "string"
      }
    ],
    "name": "StudentRegister",
    "type": "event"
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

module.exports = {
  contractAddress,
  abi,
};
