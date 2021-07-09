// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

import "hardhat/console.sol";


contract Test {

    uint public value;
    address public owner;

    constructor(uint _value) {
        value = _value;
        owner = msg.sender;
    } 

    function setValue(uint _newValue) external returns (bool) {
        require(_newValue > 5, "value must be more than 5");
        value = _newValue;
        return true;
    }
}