const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545');

const init = async () => {
    
    const MyContract = require('./build/contracts/SendEther.json');

    const id = await web3.eth.net.getId();
    const deployedNetwork = MyContract.networks[id];

    console.log(id);
    console.log(deployedNetwork);
    const contract = new web3.eth.Contract(
        MyContract.abi,
        deployedNetwork.address
    );
}

init();
 