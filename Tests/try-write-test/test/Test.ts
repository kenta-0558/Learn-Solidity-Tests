import { ethers } from "hardhat";
import { expect } from 'chai';
import { genABI } from '../src/genABI';
import { getProvider, deploy, getSigners } from './helper';

const TEST_ABI = genABI('Test');

console.log(TEST_ABI);

describe("Test contract", () => {
    it("Deployment", async () => {
        
        const contract = await deploy("Test", undefined, 'Kiichi');
        const name = await contract.name(); 
        expect(name).to.equal("Kiichi"); 
    })
    
    console.log(getProvider());
    console.log(getSigners().then(signers => {
        for (let i = 0; i < signers.length; i++) {
            console.log(signers[i].address);
            signers[i].provider.getBlockNumber().then(result => console.log(result));
        }
    }));
})