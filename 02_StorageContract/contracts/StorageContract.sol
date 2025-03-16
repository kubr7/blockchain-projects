//contracts/StorageContract.sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract StorageContract {
    uint256 private storedNumber;

    constructor(uint256 _initialNumber) {
        storedNumber = _initialNumber;
    }

    function setNumber(uint256 _newNumber) public {
        storedNumber = _newNumber;
    }

    function getNumber() public view returns (uint256) {
        return storedNumber;
    }
}
