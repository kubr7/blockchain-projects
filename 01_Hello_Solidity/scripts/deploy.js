//scripts/deploy.js

const hre = require("hardhat");

async function main() {
     const HelloSolidity = await hre.ethers.getContractFactory("HelloSolidity");
     const helloSolidity = await HelloSolidity.deploy("Hello World!");

     await helloSolidity.waitForDeployment();

     console.log(`Contract deployed to: ${await helloSolidity.getAddress()}`);
     console.log(`Initial Message: ${await helloSolidity.getMessage()}`);

     const tx = await helloSolidity.setMessage("Hello, Solidity!");
     await tx.wait();

     console.log(`Updated Message: ${await helloSolidity.getMessage()}`);
}

main().catch((error) => {
     console.error(error);
     process.exit(1);
});