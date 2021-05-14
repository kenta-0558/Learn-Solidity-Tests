const EventTest = artifacts.require("EventTest");

modules.exports = function(deployer) {
    deployer.deploy(EventTest);
}