const Blockchain = require("./blockchain");

const bitcoin = new Blockchain();

const preivousBlockHash = "hellobenburaksoon";
const currentBlockData = [
  {
    amount: 1,
    sender: "heso",
    recipient: "burak",
  },
];

console.log(bitcoin.hashBlock(preivousBlockHash, currentBlockData, 132671));
// console.log(bitcoin.proofOfWork(preivousBlockHash, currentBlockData))
