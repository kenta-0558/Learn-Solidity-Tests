import { ethers } from 'hardhat';
import { expect } from 'chai';
import { genABI } from '../src/genABI';

const TEST_ABI = genABI('Test');

console.log(TEST_ABI);

describe("Test contract", () => {
    it("Deployment", async () => {
        const Test = await ethers.getContractFactory("Test");
        const contract = await Test.deploy("Kiichi");
        const name = await contract.name(); 
        expect(name).to.equal("Kiichi"); 
    })
})