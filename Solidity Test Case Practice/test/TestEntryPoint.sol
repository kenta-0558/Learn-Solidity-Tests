// SPDX-License-Identifier: GPL-3.0
pragma solidity >0.7.0 <0.9.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Background.sol";
import "../contracts/EntryPoint.sol";


contract TestEntryPoint {

    function testConstructorAndGetBackgroundAddress() public {
        
        Background background = new Background();

        EntryPoint entryPoint = new EntryPoint(address(background));

        address expected = address(background);
        address backgroundAddress = entryPoint.getBackgroundAddress();
        
        Assert.equal(expected, backgroundAddress, "set correct address for EntryPoint contract");
    }
}



