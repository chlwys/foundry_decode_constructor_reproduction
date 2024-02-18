// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

// Foundry
import {DSTest} from "ds-test/test.sol";
import {console} from "forge-std/console.sol";

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
    function run() public returns (IWorld world, uint256 startBlock) {
        startBlock = block.number;

        address deployer = address(uint160(uint256(keccak256())));
        vm.startBroadcast(deployerPriv);
        DeployResult memory result = LibDeploy.deploy(deployer, 0, reuseComps);
        world = worldAddr == address(0) ? result.world : IWorld(worldAddr);
    }
}
