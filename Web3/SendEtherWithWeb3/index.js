const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545');

const init = async () => {
    
    const contract = require('./build/contracts/SendEther.json');

    console.log(contract);
}

init();
 