// SPDX-License-Identifier: GPL-3.0
pragma solidity >0.7.0 <0.9.0;

contract Background {

    uint[] private values;

    function storeValue(uint _value) public {
        values.push(_value);
    }

    function getValue(uint _index) public view returns (uint) {
        return values[_index];
    } 

    function getNumberOfValue() public view returns (uint) {
        return values.length;
    }
}