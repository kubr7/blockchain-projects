const { ethers } = require("hardhat");

async function main() {
     const contractAddress = "0xf0a77eaf1dc64c3536c7778666c6d992392316aba318f46ba84c9497967f5e6f"; // Use the deployed contract address
     const HelloSolidity = await ethers.getContractFactory("HelloSolidity");
     const helloSolidity = HelloSolidity.attach(contractAddress);

     console.log(`Current Message: ${await helloSolidity.getMessage()}`);

     const tx = await helloSolidity.setMessage("Hello from script!");
     await tx.wait();

     console.log(`Updated Message: ${await helloSolidity.getMessage()}`);
}

main().catch((error) => {
     console.error(error);
     process.exit(1);
});