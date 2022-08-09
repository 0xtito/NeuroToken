const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const hre = require('hardhat');
const ethers = require('ethers');

describe("Lock", function () {
  const initialSupply = ethers.utils.parseEther("1000");
  let token;
  async function preDeployment() {
    const [owner, otherAccount] = await hre.ethers.getSigners();

    const factory = await hre.ethers.getContractFactory('NeuroToken');
    const contract = await factory.deploy(initialSupply);
    await contract.deployed();
    

    return { contract, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("should have minted some to the deployer", async function () {
      const { contract, owner } = await loadFixture(preDeployment);
      const ownerAddress = owner.getAddress()

      expect( await contract.balanceOf(ownerAddress)).to.equal(initialSupply);

    });

    it("Should set the right owner", async function () {
      const { lock, owner } = await loadFixture(preDeployment);

    });

  });
});
