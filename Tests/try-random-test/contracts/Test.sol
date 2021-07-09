// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

import "hardhat/console.sol";


contract Test {

    uint public value;
    address public owner;

    event valueChanged(uint oldValue, uint newValue);

    constructor(uint _value) {
        value = _value;
        owner = msg.sender;
    } 

    function setValue(uint _newValue) external returns (bool) {
        require(_newValue > 5, "value must be more than 5");
        uint oldValue = value;
        value = _newValue;
        emit valueChanged(oldValue, _newValue);
        return true;
    }
}