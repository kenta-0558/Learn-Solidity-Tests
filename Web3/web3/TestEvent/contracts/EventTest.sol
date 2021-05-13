// https://www.youtube.com/watch?v=oQ5yPKdjxFQ
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;


contract EventTest {

    uint nextId;

    event MyEvent (
        uint indexed id,
        uint indexed date,
        string value
    );
    
}