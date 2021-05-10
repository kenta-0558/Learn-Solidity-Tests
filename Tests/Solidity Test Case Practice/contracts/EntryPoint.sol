// SPDX-License-Identifier: GPL-3.0
pragma solidity >0.7.0 <0.9.0;

import "./Background.sol";


contract EntryPoint {

    address public backgroundAddress;

    constructor(address _background) {
        backgroundAddress = _background;
    }

    function getBackgroundAddress() public view returns (address) {
        return backgroundAddress;
    }

    function storeTwoValues(uint _first, uint _second) public {
        Background(backgroundAddress).storeValue(_first);
        Background(backgroundAddress).storeValue(_second);
    }

    function getNumberOfValues() public view returns (uint) {
        return Background(backgroundAddress).getNumberOfValue();
    }
}