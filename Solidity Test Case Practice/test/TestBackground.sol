// SPDX-License-Identifier: GPL-3.0
pragma solidity >0.7.0 <0.9.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Background.sol";


contract TestBackground {

    Background public background;

    function beforeEach() public {
        background = new Background();
    }

    function testStoreValue() public {
        uint value = 5;
        background.storeValue(value);
        uint result = background.getValue(0);
        assert.equal(result, value, "store correct value with storeValue function");
    }

    function testNumberOfValues() public {
        uint value = 33;
        background.storeValue(value);
        uint numberOfValues = background.getNumberOfValues();
        assert.equal(numberOfValues, 1, "get correct length of values array");
    }
}