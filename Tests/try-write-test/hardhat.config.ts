// /**
//  * @type import('hardhat/config').HardhatUserConfig
//  */
// import "@nomiclabs/hardhat-waffle";

// module.exports = {
//   solidity: "0.7.3",
// };
import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";
// import 'tsconfig-paths/register';

const config: HardhatUserConfig = {
  solidity: "0.7.3",  
};

export default config;
