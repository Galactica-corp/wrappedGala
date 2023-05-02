import { ethers, run } from "hardhat";

async function main() {
  const wGalaFactory = await ethers.getContractFactory("WGALA9");
  const wGala = await wGalaFactory.deploy();

  await wGala.deployed();

  console.log("wGALA deployed to:", wGala.address);

  await run("verify:verify", {
    contract: "contracts/WGALA9.sol:WGALA9",
    address: wGala.address,
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
