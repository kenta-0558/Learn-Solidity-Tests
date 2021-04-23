const EntryPoint = artifacts.require("../contracts/EntryPoint.sol");

contract("EntryPoint", accounts => {
    describe("Storing Values", () => {
        it("Stores correctly", async() => {
            const entryPoint = await EntryPoint.deployed();

            let numberOfValues = await entryPoint.getNumberOfValues();
            numberOfValues.toString().should.equal("0");

            await entryPoint.storeTwoValues(2, 4);
            numberOfValues = await entryPoint.getNumberOfValues();
            numberOfValues.toString().should.equal("2");
        })    
    })
})
