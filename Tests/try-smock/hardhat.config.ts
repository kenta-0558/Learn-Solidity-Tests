import '@nomiclabs/hardhat-waffle';
import "@nomiclabs/hardhat-ethers";
import '@openzeppelin/hardhat-upgrades';
import '@typechain/hardhat';
import { HardhatUserConfig } from 'hardhat/types';

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  solidity: {
    compilers: [{ version: '0.8.3', settings: {
      outputSelection: {
        "*": {
            "*": ["storageLayout"],
        },
      },
    } }],
  },
}

export default config;

