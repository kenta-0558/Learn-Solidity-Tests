// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.5.1;


contract SendEther {

    string public functionCalled;

    function sendEther() external payable {
        functionCalled = "sendEther";
    }

    function() external payable {
        functionCalled = "fallback";
    }
}