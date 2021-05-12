const Web3 = require("web3");
const web3 = new Web3("http://localhost:8545");

async function getBlockNumber() {
    const latestBlockNumber = await web3.eth.getBlockNumber();
    console.log(latestBlockNumber);
    return latestBlockNumber;
}

const getAccount = (accounts) => {
    for (let i = 0; i < accounts.length; i++) {
        console.log(accounts[i]);
    }
}

async function getAccounts() {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    getAccount(accounts);
}

getBlockNumber(); 

getAccounts();

