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

    const firstName = await contract.methods.getFirstName().call();
    console.log(firstName);

    const addresses = await web3.eth.getAccounts();
    await contract.methods.changeName("Ichina").send({
        from: addresses[0],
    });
    const newFirstName = await contract.methods.getFirstName().call();
    console.log(newFirstName);
}

init();