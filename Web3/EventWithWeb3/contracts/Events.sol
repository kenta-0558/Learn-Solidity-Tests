// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.5.1;


contract Events {

    event MyEvent {
        uint indexed id,
        uint indexed date,
        string value
    };

    uint nextId;

    function emitEvent(string calldata _value) external {
        emit MyEvent(nextId, block.timestamp, _value);
        nextId++;
    }
}