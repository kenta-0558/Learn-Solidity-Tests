pragma solidity ^0.8.3;

import "hardhat/console.sol";
import "./MyERC20.sol";

contract MyOtherContent {

    MyERC20 private myERC20;

    constructor(MyERC20 _myERC20) {
        myERC20 = _myERC20;
    }

    function myOtherFunction(address _to, uint256 _amount) external returns (bool) {
        uint256 mintAmount = myERC20.minUpTo(_to, _amount);
        console.log("The minted amount was", mintAmount);
    }
}