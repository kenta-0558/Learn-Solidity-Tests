const Web3 = require("web3");

const rpuURL = "https://mainnet.infura.io/v3/cf78b0d0d1b6495abc36b4d30ef932ca";

const web3 = new Web3(rpuURL);

const address = "0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B";

web3.eth.getBalance(address, (err, wei) => {
    balance = web3.utils.fromWei(wei, "ether");
    console.log(balance);
});

