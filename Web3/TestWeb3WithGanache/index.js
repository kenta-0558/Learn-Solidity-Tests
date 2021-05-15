const Web3 = require('web3');
const Test = require('./build/contracts/Test.json');

const web3 = new Web3('http://127.0.0.1:8545');

const init = async () => {
    
    const id = await web3.eth.net.getId();
    const deployedNetwork = Test.networks[id];

    const contract = new web3.eth.Contract(
        Test.abi,
        deployedNetwork.address
    );

    console.log(contract);
}

init();