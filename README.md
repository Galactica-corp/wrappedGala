# Wrapped GNET
Simple smart contract for wrapping GNET as ERC20 token. Derived from https://etherscan.io/address/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2#code

## Deploy
For the first time, setup and adjust network parameters as needed:
```shell
cp .env.example .env
```

Then you can deploy it:
```shell
npx hardhat run scripts/deployWGNET.ts --network galaDevnet
```
