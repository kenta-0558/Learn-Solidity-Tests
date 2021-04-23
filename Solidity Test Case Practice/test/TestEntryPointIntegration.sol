// SPDX-License-Identifier: GPL-3.0
pragma solidity >0.7.0 <0.9.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Background.sol";
import "../contracts/EntryPoint.sol";

contract TestIntegrationEntryPoint {

    Background public background;
    EntryPoint public entryPoint;

    function beforeEach() public {
        background = new Background();
        entryPoint = new EntryPoint(address(background));    
    }

    function testStoreValues() public {
        uint value1 = 3;
        uint value2 = 5;
        entryPoint.storeTwoValues(value1, value2);  
        uint result1 = background.getValue(0);
        uint result2 = background.getValue(1);
        Assert.equal(value1, result1, "value 1 should be correct");
        Assert.equal(value2, result2, "value 2 should be correct");
    }
    
    function testGetNumberOfValues() public {
        uint resultEntryPoint = entryPoint.getNumberOfValues();
        Assert.equal(resultEntryPoint, 0, "call correct getNumberOfValues");

        entryPoint.storeTwoValues(7, 17);
        uint resultAfterCallingStoreTwoValues = entryPoint.getNumberOfValues();
        Assert.equal(resultAfterCallingStoreTwoValues, 2, "call correct getNumberOfValues");

        entryPoint.storeTwoValues(6, 16);
        uint result2AfterCallingStoreTwoValues = entryPoint.getNumberOfValues();
        Assert.equal(result2AfterCallingStoreTwoValues, 4, "call correct getNumberOfValues");
    }
}

