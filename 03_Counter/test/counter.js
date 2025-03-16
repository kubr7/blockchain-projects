const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter", function () {
     let Counter, counter, owner;

     beforeEach(async function () {
          [owner] = await ethers.getSigners();
          Counter = await ethers.getContractFactory("Counter");
          counter = await Counter.deploy();
          await counter.waitForDeployment();
     });

     it("Should initialize count to 0", async function () {
          expect(await counter.count()).to.equal(0);
     });

     it("Should increment count", async function () {
          await counter.increment();
          expect(await counter.count()).to.equal(1);
     });

     it("Should decrement count", async function () {
          await counter.increment();
          await counter.decrement();
          expect(await counter.count()).to.equal(0);
     });

     it("Should not allow decrement below 0", async function () {
          await expect(counter.decrement()).to.be.revertedWith("Counter can not go below 0");
     });
});
