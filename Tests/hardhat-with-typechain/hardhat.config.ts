// /**
//  * @type import('hardhat/config').HardhatUserConfig
//  */
// module.exports = {
//   solidity: "0.7.3",
// };
import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
// import 'tsconfig-paths/register';
import '@typechain/hardhat';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';

// export default {
//   solidity: "0.7.3",
// };

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  solidity: {
    compilers: [{ version: '0.6.8', settings: {} }],
  },
}

export default config