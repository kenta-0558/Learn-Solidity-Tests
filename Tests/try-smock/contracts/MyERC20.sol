pragma solidity ^0.8.3;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyERC20 is ERC20, Ownable {
    
    constructor() ERC20("KIICHI TOKEN", "KTT") {}

    function mintUpTo(address _to, uint256 _amount) external onlyOwner returns (uint256) {
        uint256 currentBalance = balanceOf(_to);

        if (currentBalance >= _amount) return 0;

        uint256 mintBalance = _amount - currentBalance;
        _mint(_to, mintBalance);

        return mintBalance;
    }
}