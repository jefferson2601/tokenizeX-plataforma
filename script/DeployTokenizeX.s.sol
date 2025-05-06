// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {Script} from "forge-std/Script.sol";
import {TokenizeX1155} from "../src/TokenizeX1155.sol";
import {console} from "forge-std/console.sol";

contract DeployTokenizeX1155 is Script {
    function run() external returns (TokenizeX1155) {
        // Recupera a chave privada do ambiente
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        
        // Inicia a transação de broadcast com a chave privada do deployer
        vm.startBroadcast(deployerPrivateKey);

        // Deploy do contrato TokenizeX1155
        TokenizeX1155 tokenizeX1155 = new TokenizeX1155();

        // Finaliza o broadcast
        vm.stopBroadcast();

        // Logs para facilitar a verificação do deploy
        console.log("TokenizeX1155 deployed at:", address(tokenizeX1155));
        
        return tokenizeX1155;
    }
}