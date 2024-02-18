// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

// Foundry
import {DSTest} from "ds-test/test.sol";
import {console} from "forge-std/console.sol";
import "forge-std/Script.sol";

// Solecs
import {World} from "solecs/World.sol";
import {Component} from "solecs/Component.sol";
import {getAddressById} from "solecs/utils.sol";
import {IUint256Component} from "solecs/interfaces/IUint256Component.sol";
import {ISystem} from "solecs/interfaces/ISystem.sol";
import {IComponent} from "solecs/interfaces/IComponent.sol";

import {UintComponent} from "components/UintComponent.sol";

struct DeployResult {
    World world;
    address deployer;
}

library LibDeploy {
    function deploy(
        address _deployer,
        address _world,
        bool _reuseComponents
    ) internal returns (DeployResult memory result) {
        result.deployer = _deployer;

        // ------------------------
        // Deploy
        // ------------------------

        // Deploy world
        result.world = _world == address(0) ? new World() : World(_world);
        if (_world == address(0)) result.world.init(); // Init if it's a fresh world

        // Deploy components
        if (!_reuseComponents) {
            IComponent comp;

            console.log("Deploying Component");
            comp = new UintComponent(address(result.world));
            console.log(address(comp));
        }
    }
}

contract Deploy is Script {
    function run() public returns (World world, uint256 startBlock) {
        startBlock = block.number;

        uint256 deployerPriv = 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80;
        address deployer = address(0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266);

        vm.startBroadcast(deployerPriv);
        DeployResult memory result = LibDeploy.deploy(
            deployer,
            address(0),
            false
        );
        world = result.world;
    }
}
