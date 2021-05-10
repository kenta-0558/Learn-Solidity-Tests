const Web3 = require('web3');
const web3 = new Web3("https://mainnet.infura.io/v3/cf78b0d0d1b6495abc36b4d30ef932ca");

// returns the current gas price oracle.
web3.eth.getGasPrice().then(result => {
    console.log(result);
    console.log(web3.utils.fromWei(result, 'ether'));
});

console.log(web3.utils.sha3("Kiichi"));

console.log(web3.utils.keccak256("Ichina"));

console.log(web3.utils.randomHex(32));

const _ = web3.utils._;

_.each({key1: 'Kiichi', key2: 'Ichina'}, (value, key) => {
    console.log(`${key}: ${value}`);
})





