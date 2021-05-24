pragma solidity ^0.8.3;

// import "hardhat/console.sol";


contract Counter {
    uint256 count = 0;

    event CountedTo(uint256 number);

    function getCount() public view returns (uint256) {
        return count;
    }

    function countUp() public returns (uint256) {
        uint256 newCount = count + 1;
        require(newCount > count, "uint256 0verflow");

        count = newCount;

        emit CountedTo(count);
        return count;
    }

    function countdown() public returns (uint256) {
        uint256 newCount = count - 1;
        require(newCount < count, "uint256 underfloww");

        count = newCount;

        emit CountedTo(count);
        return count;
    }
}