const EntryPoint = artifacts.require("../contracts/EntryPoint.sol");

contract("EntryPoint", accounts => {
    describe("Storing Values", () => {
        it("Stores correctly", async() => {
            const entryPoint = await EntryPoint.deployed();
            console.log(entryPoint);
            let numberOfValues = await entryPoint.getNumberOfValues();
            assert.equal(numberOfValues.toString(), 0);
            

            await entryPoint.storeTwoValues(2, 4);
            numberOfValues = await entryPoint.getNumberOfValues();
            assert.equal(numberOfValues, 2);
        })    
    })
})
