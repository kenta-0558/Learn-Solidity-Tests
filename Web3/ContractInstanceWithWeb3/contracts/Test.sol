// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.5.1;


contract Test {
    
    string name = "Kiichi";

    function getFirstName() public view returns (string memory) {
        return name;
    }

    // function getNameWithFamilyName() public view returns (string memory nameWithFirstName) {
    //     nameWithFirstName = name + " " + "Tsuchiya";
    //     return nameWithFirstName;
    // }

    function changeName(string memory _newName) public {
        name = _newName;
    }

}