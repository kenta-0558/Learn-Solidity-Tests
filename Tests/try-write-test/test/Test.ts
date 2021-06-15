const { ethers } = require('hardhat');
const { expect } = require("chai");

describe("Test contract", () => {
    it("Deployment", async () => {
        const Test = await ethers.getContractFactory("Test");
        const contract = await Test.deploy("Kiichi");
        const name = await contract.name(); 
        expect(name).to.equal("Kiichi"); 
    })
})