const hre = require("hardhat");

async function main() {
     // Compile the contract (if not already compiled)
     await hre.run("compile");

     console.log("Deploying ToDoList contract...");

     // Get the contract factory
     const ToDoList = await hre.ethers.getContractFactory("ToDoList");

     // Deploy the contract
     const todoList = await ToDoList.deploy();
     await todoList.waitForDeployment();

     console.log("ToDoList contract deployed at:", await todoList.getAddress());
}

// Handle errors and execute main function
main().catch((error) => {
     console.error(error);
     process.exitCode = 1;
});