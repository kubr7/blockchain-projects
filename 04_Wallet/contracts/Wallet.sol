// contracts/Wallet.sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

contract Wallet {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function deposit() public payable {}

    function withdraw(uint256 amount) public {
        require(msg.sender == owner, "Only owner can withdraw");
        require(address(this).balance >= amount, "Insufficient balance");
        payable(msg.sender).transfer(amount);
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
