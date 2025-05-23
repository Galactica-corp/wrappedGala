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
    galaAndromeda: {
      url: process.env.GNET_DEVNET_URL || "",
      accounts:
        process.env.GNET_PRIVATE_KEY !== undefined ? [process.env.GNET_PRIVATE_KEY] : [],
    },
    reticulum: {
      url: 'https://evm-rpc-http-reticulum.galactica.com/',
      accounts:
        process.env.GNET_PRIVATE_KEY !== undefined ? [process.env.GNET_PRIVATE_KEY] : [],
    },
    cassiopeia: {
      url: 'https://galactica-cassiopeia.g.alchemy.com/public',
      accounts: [process.env.GalaTestnetDeployerPrivateKey || ""],
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: {
      galaAndromeda: "something"!, // not needed for now, I guess
      reticulum: "something"!, // not needed for now, I guess
      cassiopeia: process.env.ALCHEMY_API_KEY ?? '',
    },
    customChains: [
      {
        network: "galaAndromeda",
        chainId: 41238,
        urls: {
          apiURL: "https://explorer-andromeda.galactica.com/api",
          browserURL: "https://explorer-andromeda.galactica.com/"
        }
      },
      {
        network: 'reticulum',
        chainId: 9302,
        urls: {
          apiURL: 'https://explorer-reticulum.galactica.com/api',
          browserURL: 'https://explorer-reticulum.galactica.com/',
        },
      },
      {
        network: 'cassiopeia',
        chainId: 843843,
        urls: {
          apiURL: 'https://galactica-cassiopeia.explorer.alchemy.com/api',
          browserURL: 'https://galactica-cassiopeia.explorer.alchemy.com/',
        },
      },
    ]
  },
};

export default config;
