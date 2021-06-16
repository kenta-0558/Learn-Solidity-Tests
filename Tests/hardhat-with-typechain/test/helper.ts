const { ethers } = require("hardhat");
import { BigNumber, Contract, Signer } from 'ethers';
const { MockProvider } = require("ethereum-waffle");

let provider;

export function getSharedProvider() {
    if (!provider) {
        provider = new MockProvider();
    }
    return provider;
}

// export const getProvider = async () => {
    
// }

export const test = async () => {
    const signers = await ethers.signers();
    console.log(signers);
};

