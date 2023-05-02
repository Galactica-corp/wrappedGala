import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";

dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: "0.4.18",
  networks: {
    galaDevnet: {
      url: process.env.GALA_DEVNET_URL || "",
      accounts:
        process.env.GALA_PRIVATE_KEY !== undefined ? [process.env.GALA_PRIVATE_KEY] : [],
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: {
      galaDevnet: "something"!, // not needed for now, I guess
    },
    customChains: [
      {
        network: "galaDevnet",
        chainId: 41233,
        urls: {
          apiURL: "https://explorer-devnet-41233.galactica.com/api",
          browserURL: "https://explorer-devnet-41233.galactica.com/"
        }
      },
    ]
  },
};

export default config;
