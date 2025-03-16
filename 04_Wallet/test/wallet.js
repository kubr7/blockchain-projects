// test/wallet.js
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Wallet Contract", function () {
     let Wallet, wallet, owner, addr1;

     beforeEach(async function () {
          [owner, addr1] = await ethers.getSigners();
          Wallet = await ethers.getContractFactory("Wallet");
          wallet = await Wallet.deploy();
          await wallet.waitForDeployment();
     });

     it("Should set the deployer as the owner", async function () {
          expect(await wallet.owner()).to.equal(owner.address);
     });

     it("Should allow deposits", async function () {
          const depositAmount = ethers.parseEther("1.0");

          await owner.sendTransaction({
               to: wallet.getAddress(),
               value: depositAmount,
          });

          expect(await wallet.getBalance()).to.equal(depositAmount);
     });

     it("Should allow the owner to withdraw funds", async function () {
          const depositAmount = ethers.parseEther("2.0");
          const withdrawAmount = ethers.parseEther("1.0");

          await owner.sendTransaction({
               to: wallet.address,
               value: depositAmount,
          });

          await wallet.withdraw(withdrawAmount);

          expect(await wallet.getBalance()).to.equal(depositAmount - withdrawAmount);
     });

     it("Should not allow non-owners to withdraw", async function () {
          await expect(wallet.connect(addr1).withdraw(ethers.parseEther("1.0")))
               .to.be.revertedWith("Only owner can withdraw");
     });

     it("Should not allow withdrawals exceeding the balance", async function () {
          const withdrawAmount = ethers.parseEther("1.0");

          await expect(wallet.withdraw(withdrawAmount))
               .to.be.revertedWith("Insufficient balance");
     });
});