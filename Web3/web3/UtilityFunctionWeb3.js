const Web3 = require('web3');
const web3 = new Web3("http://localhost:8545");

const value = 1;
console.log(web3.utils.toWei(value.toString()));
console.log(web3.utils.toWei(value.toString(), 'gwei'));

console.log(web3.utils.fromWei('1000000000000000000', 'ether'));
console.log(web3.utils.fromWei('1000000000', 'gwei'));

const BN = web3.utils.BN;

console.log(new BN(12345).toString());

const number = new BN(56789);

console.log(web3.utils.isBN(number));

console.log(web3.utils.asciiToHex("Kiichi"));