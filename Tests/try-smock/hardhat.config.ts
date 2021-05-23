// import { task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "@openzeppelin/hardhat-upgrades";
import { HardhatUserConfig } from 'hardhat/config';

// module.exports = {
//   solidity: "0.7.3",
// };
const config: HardhatUserConfig = {
  solidity: {
    version: '0.7.0',
    settings: {
      outputSelection: {
        "*": {
            "*": ["storageLayout"],
        },
      },
    }
  },
}