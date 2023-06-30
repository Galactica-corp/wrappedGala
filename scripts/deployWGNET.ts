import { ethers, run } from "hardhat";

async function main() {
  const wGnetFactory = await ethers.getContractFactory("WGNET9");
  const wGnet = await wGnetFactory.deploy();

  await wGnet.deployed();

  console.log("wGNET deployed to:", wGnet.address);

  await run("verify:verify", {
    contract: "contracts/WGNET9.sol:WGNET9",
    address: wGnet.address,
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
