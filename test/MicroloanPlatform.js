const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("MicroloanPlatform", function () {
  let contract;
  let owner, borrower;

  beforeEach(async function () {
    [owner, borrower] = await ethers.getSigners();
    const Contract = await ethers.getContractFactory("MicroloanPlatform");
    contract = await Contract.deploy();
    await contract.waitForDeployment();
  });

  it("should deploy correctly", async function () {
    expect(await contract.getLoanCounter()).to.equal(0);
  });
});
