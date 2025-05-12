// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract AuthContract {
    mapping(string => bytes32) private userHashes;

    event UserRegistered(string email, bytes32 hash);
    event UserLoggedIn(string email, bool success);

    function register(string memory email, bytes32 hash) public {
        require(userHashes[email] == 0, "User already exists");
        userHashes[email] = hash;
        emit UserRegistered(email, hash);
    }

    function login(string memory email, bytes32 hash) public view returns (bool) {
        return userHashes[email] == hash;
    }
}
