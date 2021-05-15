// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.5.1;


contract Test {
    
    string name;

    function changeName(string memory _newName) public {
        name = _newName;
    }
}