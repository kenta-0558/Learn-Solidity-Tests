const EthereumTx = require('ethereumjs-tx').Transaction

const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545');

const address1 = "0x132740EA756C7c45A35d22dE57Bd4A10E889135E";
const address2 = "0xDa1575654bBa8BA0b2a5C06Ef5581730d7141Aa1";

const privateKey1 = Buffer.from("d0c0731cadf3d7226f2acb93f98c222bd46b794a7ee0ca87fd4e3c606bef2c93", 'hex');

web3.eth.getTransactionCount(address1, (err, txCount) => {

    const txObject = {
        nonce: web3.utils.toHex(txCount),
        to: address2,
        value: web3.utils.toHex(web3.utils.toWei('50', 'ether')),
        gasLimit: web3.utils.toHex(21000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
    }

    const tx = new EthereumTx(txObject);
    tx.sign(privateKey1);

    const serializedTx = tx.serialize();
    const raw = '0x' + serializedTx.toString('hex');

    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
        console.log('txHash: ', txHash);
    })
})