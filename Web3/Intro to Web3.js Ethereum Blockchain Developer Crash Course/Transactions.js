https://medium.com/moonbeam-network/using-the-ethereum-web3-library-to-send-transactions-in-moonbeam-5b8593767904
const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545');

const addressFrom = "0x60ba65778dCFdF132459326F7A1C44A353B9B1c9";
const addressTo ="0xB4DfCe97257ed1082f2047b26114FE57275EF028";

const getBalance = (address) => {
    web3.eth.getBalance(address)
        .then(console.log);
}

getBalance(addressFrom);
getBalance(addressTo);

const deploy = async () => {
    console.log("Kiichi");
    console.log(`Transaction from ${addressFrom} to ${addressTo}`);

    const createTransaction = await web3.eth.accounts.signTransaction({
        to: addressTo,
        value: web3.utils.toWei('100', 'ether'),
        gas: ' 21000',
    }, "0xe87dc14a6990327560f1624b68b42b9a09719eaaa5f0f3cb6a2bb42e60324631")
    .then(console.log);
}

deploy();






