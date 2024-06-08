require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    localhost: {
      url: "http://localhost:8545",
      
    },
    hardhat: {},
    //url: "http://127.0.0.1:8545"
  },
};