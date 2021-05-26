import { expect } from 'chai';
import { BigNumber, Contract } from 'ethers';
import { ethers } from 'hardhat';
import { smockit, smoddit } from '@eth-optimism/smock';
import { MyERC20, MyOtherContract } from '../typechain';

describe("MyERC20 and other contract", () => {
    let myERC20: Contract;

    beforeEach(async () => {
        const MyERC20Factory = await ethers.getContractFactory("MyERC20");
        myERC20 = await MyERC20Factory.deploy();
        await myERC20.deployed();
    });

    it("call mintUp in myERC20", async function() {
        const MyMockContract = await smockit(myERC20);
        
        const MyOtherContractFactory = await ethers.getContractFactory("MyOtherContract");
        const myOtherContract = await MyOtherContractFactory.deploy(MyMockContract.address);

        const mockedMintAmount = 30;
        MyMockContract.smocked.mintUpTo.will.return.with(mockedMintAmount);

        const to = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
		const amount = 100;

        await myOtherContract.myOtherFunction(to, amount);
        
        expect(MyMockContract.smocked.mintUpTo.calls.length).to.be.equal(1);

        console.log(MyMockContract.smocked.mintUpTo.calls);

        expect(MyMockContract.smocked.mintUpTo.calls[0]._to).to.be.equals(to);

        expect(MyMockContract.smocked.mintUpTo.calls[0]._amount.toString()).to.equal(amount.toString());
    });

    it ("call mintUp in MyERC20", async () => {
        const myModifiableERC20Factory = await smoddit("MyERC20");
        const myModifiableERC20 = await myModifiableERC20Factory.deploy();

        const myOtherContractFactory = await ethers.getContractFactory("MyOtherContract");

        const myOtherContract = await myOtherContractFactory.deploy(myModifiableERC20.address);

        await myModifiableERC20.transferOwnership(myOtherContract.address);

        const to = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
        const transferAmount = 100;

        const mockedBalance = BigNumber.from("10");

        myModifiableERC20.smodify.put({
            _balances: {
                [to]: mockedBalance,
            }
        });

        expect((await myModifiableERC20.balanceOf(to)).toString()).to.equal(mockedBalance.toString());

        await myOtherContract.myOtherFunction(to, transferAmount);
        expect((await myModifiableERC20.balanceOf(to)).toString()).to.equal(transferAmount.toString());
    });
})