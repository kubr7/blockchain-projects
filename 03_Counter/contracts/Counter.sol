// contracts/Counter.sol
// SPDX-Licence-Identifier: MIT

pragma solidity ^0.8.0;

contract Counter{
     uint256 public count;

     function increment() public {
          count += 1;
     }

     function decrement() public {
          require(count > 0, "Counter can not go below 0");
          count -= 1;
     }
}