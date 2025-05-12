

require('@nomicfoundation/hardhat-toolbox');

module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/bf9531dea07e4c8d8f280ec62b10db93", // Replace with your Infura or Alchemy Sepolia URL
      accounts: ["8d6a55702e6186390a29887a06ead4c057148e8b7e8d5bac556148b666f244f8"], // NEVER expose this in frontend or GitHub!
    },
  },
};


