const Web3 = require('web3');
const web3 = new Web3("https://mainnet.infura.io/v3/cf78b0d0d1b6495abc36b4d30ef932ca");

const account = web3.eth.accounts.create();

console.log(account);
console.log(account.privateKey);
const privateKeyBuffer = Buffer.from(account.privateKey, 'hex');
console.log(privateKeyBuffer);