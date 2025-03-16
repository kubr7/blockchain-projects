// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    struct Candidate {
        string name;
        uint256 votes;
    }

    mapping(uint256 => Candidate) public candidates;
    uint256 public candidateCount;

    function addCandidate(string memory name) public {
        candidates[candidateCount] = Candidate(name, 0);
        candidateCount++;
    }

    function vote(uint256 candidateIndex) public {
        require(candidateIndex < candidateCount, "Invalid candidate");
        candidates[candidateIndex].votes++;
    }

    function getVotes(uint256 candidateIndex) public view returns (uint256) {
        return candidates[candidateIndex].votes;
    }
}
