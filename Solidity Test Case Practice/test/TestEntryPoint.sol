// SPDX-License-Identifier: GPL-3.0
pragma solidity >0.7.0 <0.9.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Background.sol";
import "../contracts/EntryPoint.sol";


contract TestEntryPoint {

    function testConstructorAndGetBackgroundAddress() {
        
        Background background = new Background();

        EntryPoint entryPoint = new EntryPoint(address(background));

        address expected = address(background);
        address backgroundAddress = entryPoint.getBackgroundAddress();
        
        Assert.equal(expected, backgroundAddress, "set correct address for EntryPoint contract");
    }
}

contract TestIntegrationEntryPoint {

    BackgroundTest public backgroundTest;
    EntryPoint public entryPoint;

    function beforeEach() public {
        backgroundTest = new BackgroundTest();
        entryPoint = new EntryPoint(address(backgroundTest));    
    }

}

contract BackgroundTest is Background {

    uint[] public values;

    function storeValue(uint _value) public {
        values.push(_value);
    }

    function getNumberOfValues() public view returns (uint) {
        return 999;
    }
}

