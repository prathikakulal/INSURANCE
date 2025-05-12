// // // require("@nomicfoundation/hardhat-toolbox");

// // // /** @type import('hardhat/config').HardhatUserConfig */
// // // module.exports = {
// // //   solidity: "0.8.28",
// // // };



// // require("@nomicfoundation/hardhat-toolbox");

// // module.exports = {
// //   solidity: "0.8.20",
// //   networks: {
// //     sepolia: {
// //       url: "https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID", // Replace with your Infura or Alchemy URL
// //       accounts: ["YOUR_PRIVATE_KEY"], // NEVER expose in production!
// //     },
// //   },
// // };



// require("@nomicfoundation/hardhat-toolbox");
// require("dotenv").config();

// module.exports = {
//   solidity: "0.8.20",
//   networks: {
//     sepolia: {
//       url: "https://rpc.ankr.com/eth_sepolia",
//       accounts: [`0x${process.env.PRIVATE_KEY}`],
//     },
//   },
// };


// require("@nomicfoundation/hardhat-toolbox");

// module.exports = {
//   solidity: "0.8.20",
//   networks: {
//     sepolia: {
//       url: "https://sepolia.infura.io/v3/bf9531dea07e4c8d8f280ec62b10db93", // Replace with your Infura or Alchemy URL
//       accounts: ["df57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e"], // NEVER expose in production!
//     },
//   },
// };


require('@nomicfoundation/hardhat-toolbox');

module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/bf9531dea07e4c8d8f280ec62b10db93", // Replace with your Infura or Alchemy Sepolia URL
      accounts: ["PUT YOUR PRIVATE KEY"], // NEVER expose this in frontend or GitHub!
    },
  },
};


