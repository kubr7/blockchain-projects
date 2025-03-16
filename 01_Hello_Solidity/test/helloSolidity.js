const { expect } = require("chai");

describe("HelloSolidity", function () {
     let HelloSolidity, helloSolidity, owner;

     beforeEach(async function () {
          [owner] = await ethers.getSigners();
          HelloSolidity = await ethers.getContractFactory("HelloSolidity");
          helloSolidity = await HelloSolidity.deploy("Hello World!");
          await helloSolidity.waitForDeployment();
     });

     it("Should deploy with the correct initial message", async function () {
          expect(await helloSolidity.getMessage()).to.equal("Hello World!");
     });

     it("Should update the message", async function () {
          const tx = await helloSolidity.setMessage("Hello, Solidity!");
          await tx.wait();
          expect(await helloSolidity.getMessage()).to.equal("Hello, Solidity!");
     });
});