// scripts/deploy.js

const hre = require("hardhat");

async function main() {
     await hre.run('compile');

     console.log("Deploying Counter...");

     const Counter = await hre.ethers.getContractFactory("Counter");
     const counter = await Counter.deploy();

     await counter.waitForDeployment();

     console.log(`Contract deployed to: ${await counter.getAddress()}`);
}

main().catch((error) => {
     console.error(error);
     process.exit(1);
})