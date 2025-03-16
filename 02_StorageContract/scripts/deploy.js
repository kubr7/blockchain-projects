// scripts/deploy.js

const { error } = require("console");
const hre = require("hardhat");

async function main() {
     await hre.run("compile");
     console.log("Deploying StorageContract...");

     const Storage = await hre.ethers.getContractFactory("StorageContract");
     const storage = await Storage.deploy(25);
     await storage.waitForDeployment();

     console.log(`Contract deployed to: ${await storage.getAddress()}`);
     console.log(`Initial number: ${await storage.getNumber()}`);

     const tx = await storage.setNumber(100);
     await tx.wait();

     console.log(`Updated Number: ${await storage.getNumber()}`);

}

main().catch((error) => {
     console.error(error);
     process.exit(1);
})