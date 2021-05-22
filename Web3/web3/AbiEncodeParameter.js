const Web3 = require('web3');

let web3 = new Web3("http://localhost:8545");

const getEncoded = (name, age, nationality) => {

    const parameter = {
        name,
        age,
        nationality
    };

    const encoded = web3.eth.abi.encodeParameter(
        {
            "Person": {
                "name": "string",
                "age": "uint",
                "nationality": "string"
            },
        },
        parameter
    ); 

    return encoded;
}

const encoded = getEncoded("Ichina", 4, "japanese");

console.log(encoded);