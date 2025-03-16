const { expect } = require("chai");

describe("StorageContract", function () {
     let Storagecontract, storageContract, owner;

     beforeEach(async function () {
          [owner] = await ethers.getSigners();
          Storagecontract = await ethers.getContractFactory("StorageContract");
          storageContract = await Storagecontract.deploy(25);
          await storageContract.waitForDeployment();
     });

     it("Should deploy with the correct value", async function () {
          expect(await storageContract.getNumber()).to.equal(25);
     });

     it("Should update the stored number", async function () {
          const tx = await storageContract.setNumber(100);
          await tx.wait();
          expect(await storageContract.getNumber()).to.equal(100);
     });

     it("Should allow multiple updates", async function () {
          await storageContract.setNumber(42);
          await storageContract.setNumber(99);
          expect(await storageContract.getNumber()).to.equal(99);
     });
})