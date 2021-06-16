const { ethers } = require('hardhat');
import { BigNumber, Contract, Signer } from "ethers";
const { MockProvider } = require("ethereum-waffle");

let provider;

export function getProvider() {
    if (!provider) {
        provider = new MockProvider();
    }
    return provider;
}

let signers;

export function getSigners() {
    if (!signers) {
        signers = ethers.getSigners();
    }
    return signers;
}

// export async function summon<T=Contract>(contractName: string, ABI: any, args: Array<any> = [], signer: Signer| undefined, linkings: Array<string>=[]): Promise<T> {
//     return _summon();
// }
export async function deploy(contractName: string, signer: Signer | undefined, argu: string | undefined): Promise<Contract> {
    const _factory = await ethers.getContractFactory(contractName, signer);
    const _Contract = await _factory.deploy(argu);
    return _Contract;    
}