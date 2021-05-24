import { ethers } from "hardhat";
// import chaiAsPromised from "chai-as-promised";
import { Counter__factory, Counter } from "../typechain";

import chai from "chai";
import chaiAsPromised from "chai-as-promised";
// import { solidity } from "ethereum-waffle";

chai.use(chaiAsPromised);
const { expect } = chai;

describe("COUNTER", () => {

    let counter: Counter;
    
    beforeEach(async () => {
        console.log("BeforeEach");
        const signers = await ethers.getSigners();

        const counterFactory = (await ethers.getContractFactory("Counter")) as Counter__factory;
        counter = await counterFactory.deploy();
        await counter.deployed();

        const initialCount = await counter.getCount();
        console.log(initialCount);
        expect(initialCount).to.equal(0);
        expect(counter.address).to.properAddress;
    });

    describe("Countup", async () => {
        it ("should count up", async () => {
            await counter.countUp();
            let count = await counter.getCount();
            expect(count).to.equal(1);
        });
    });

    describe("Count down", async () => {
        it("should count down", async () => {
            await counter.countUp();
            await counter.countdown();

            const count = await counter.getCount();
            expect(count).to.equal(0);
        });
    });

    
});