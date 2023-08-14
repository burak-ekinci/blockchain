const Blockchain = require("./blockchain");

const bitcoin = new Blockchain();

const bc1 ={
    "chain": [
    {
    "index": 1,
    "timestamp": 1691916830148,
    "transactions": [],
    "nonce": 100,
    "hash": "0",
    "previousBlockHash": "0"
    },
    {
    "index": 2,
    "timestamp": 1691916835910,
    "transactions": [],
    "nonce": 5672,
    "hash": "00002b62f1205be4a02b5f13b07344e7dbbe80088ec44327c34971412405da12",
    "previousBlockHash": "0"
    },
    {
    "index": 3,
    "timestamp": 1691916844348,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "e4e06e7b-672d-4128-9ade-b323bbda69e0",
    "transactionId": "44c6fd014d414c3c81b7c225bd644b61"
    }
    ],
    "nonce": 36154,
    "hash": "000087a433dc4753fc67ef397339554e0de810df9499f4e71070de5efae7514a",
    "previousBlockHash": "00002b62f1205be4a02b5f13b07344e7dbbe80088ec44327c34971412405da12"
    },
    {
    "index": 4,
    "timestamp": 1691916852562,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "e4e06e7b-672d-4128-9ade-b323bbda69e0",
    "transactionId": "e012c61a3fec491ca917223a26f07a3c"
    }
    ],
    "nonce": 102532,
    "hash": "0000f5218d771dc43d9eb902d80a110c82a05ccb7f00b8a28def8602e78fad1d",
    "previousBlockHash": "000087a433dc4753fc67ef397339554e0de810df9499f4e71070de5efae7514a"
    },
    {
    "index": 5,
    "timestamp": 1691916856507,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "e4e06e7b-672d-4128-9ade-b323bbda69e0",
    "transactionId": "0356dbd34c6f4c019add552c31e3c161"
    }
    ],
    "nonce": 24230,
    "hash": "00007ac95275ee204a47b1febb46c360fe510c1d7bcf0845b93f2844760af708",
    "previousBlockHash": "0000f5218d771dc43d9eb902d80a110c82a05ccb7f00b8a28def8602e78fad1d"
    }
    ],
    "pendingTransactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "e4e06e7b-672d-4128-9ade-b323bbda69e0",
    "transactionId": "4504f834a42f46d998ceb3d4986d26a3"
    }
    ],
    "currentNodeUrl": "http://localhost:3001",
    "networkNodes": []
    }

console.log("VALID : " + bitcoin.chainIsValid(bc1.chain));
