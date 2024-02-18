// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import {Uint256Component} from "solecs/components/Uint256Component.sol";

uint256 constant ID = uint256(keccak256("component"));

// blockhash that item is to be revealed at
contract UintComponent is Uint256Component {
    constructor(address world) Uint256Component(world, ID) {}
}
