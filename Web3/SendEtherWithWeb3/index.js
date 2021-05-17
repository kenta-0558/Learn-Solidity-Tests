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

    const addresses = await web3.eth.getAccounts();

    await contract.methods.sendEther().send({
        from: addresses[0],
        value: '100000'
    });

    console.log(await contract.methods.functionCalled().call());

    await web3.eth.sendTransaction({
        from: addresses[0],
        to: contract.options.address,
        value: '100000'
    });

    console.log(await contract.methods.functionCalled().call());

    await web3.eth.sendTransaction({
        from: addresses[0],
        to: addresses[1],
        value: '100000000'
    });

    console.log(await web3.eth.getBalance(addresses[1]));
}

init();
 