const hre = require("hardhat");
const ethers = require('ethers');

const tokenAddress = "0xcCC5F18b8b1e937017450E39565A475E4dF0183e";

const airdrop = ['0xc53bf942c381A14036675502Ae69A54595f9c2A8', '0x446D078afc01D63D4BB41Da179072954EC3F5719'];

async function main() {
  const initialSupply = ethers.utils.parseEther("1000"); // 18 decimals
  const token = await hre.ethers.getContractAt('NeuroToken',tokenAddress);

  for (let i = 0; i < airdrop.length; i++) {
    await token.transfer(airdrop[i], ethers.utils.parseEther("250"));
  }


  console.log(`The tx hash is: ${contract.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});