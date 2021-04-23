const Background = artifacts.require('Background');
const EntryPoint = artifacts.require('EntryPoint');

module.exports = async (deployer) => {
    await deployer.deploy(Background);
    const background = await Background.deployed();
    
    await deployer.deploy(EntryPoint, background.address);
    const entryPoint = await EntryPoint.deployed();
}