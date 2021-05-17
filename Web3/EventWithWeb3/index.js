const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545');

const init = async () => {
    
    const EventsContract = require('./build/contracts/Events.json');
    
    const id = await web3.eth.net.getId();
    const deployedNetwork = EventsContract.networks[id];

    const contract = new web3.eth.Contract(
        EventsContract.abi,
        deployedNetwork.address
    );

    console.log(contract);
}

init();