// scripts/deploy.js
const hre = require("hardhat");

async function main() {
     await hre.run('compile');

     console.log("Deploying Wallet...");

     const Wallet = await hre.ethers.getContractFactory("Wallet");
     const wallet = await Wallet.deploy();

     await wallet.waitForDeployment();

     console.log(`Contract deployed to: ${await wallet.getAddress()}`);
}

main().catch((error) => {
     console.error(error);
     process.exit(1);
})