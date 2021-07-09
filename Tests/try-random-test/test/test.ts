import { createFixtureLoader } from "ethereum-waffle";
import { Contract, Wallet } from "ethers";

const { expect } = require("chai");
const { ethers, waffle } = require("hardhat");


// const TEST_ADDRESSES: [string, string] = [
//     '0x1000000000000000000000000000000000000000',
//     '0x2000000000000000000000000000000000000000',
// ];

describe("Test.sol", () => {
    // let wallet: Wallet, other: Wallet;
    let wallet: Wallet, other: Wallet;
    let loadFixure: ReturnType<typeof createFixtureLoader>;
    let factory: Contract;

    const fixure = async () => {
        const Test = await ethers.getContractFactory("Test");
        const factory = await Test.deploy(7);
        return factory;
    }

    before('create fixture loader', async () => {
        [wallet, other] = await ethers.getSigners();
        loadFixure = createFixtureLoader([wallet, other]);
    })

    beforeEach('deploy factory', async () => {
        factory = await loadFixure(fixure);
    })

    describe ("constructor", () => {
        it ("value", async () => {
            expect(await factory.value()).to.equal(7);
        })   
        
        it ("owner", async () => {
            expect(await factory.owner()).to.equal(wallet.address);
        })

    })

    describe ("setValue", () => {

        it ("setValue success", async () => {
            const result = await factory.callStatic.setValue(8);
            expect(result).to.be.true;
        })

        it ("setValue fail", async () => {
            expect(factory.setValue(3)).to.be.revertedWith("value must be more than 5");
        })

        it ("emit valueChanged", async () => {
            expect(factory.setValue(10))
                 .to.emit(factory, 'valueChanged')
                 .withArgs(7, 10);
        })
    })
    
})