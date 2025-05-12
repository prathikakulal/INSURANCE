// // // const hre = require("hardhat");

// // // async function main() {
// // //   const AuthContract = await hre.ethers.getContractFactory("AuthContract");
// // //   const auth = await AuthContract.deploy();
// // //   await auth.deployed();
// // //   console.log("AuthContract deployed to:", auth.target);
// // // }

// // // main().catch((error) => {
// // //   console.error(error);
// // //   process.exitCode = 1;
// // // });


// // // const hre = require("hardhat");

// // // async function main() {
// // //   const AuthContract = await hre.ethers.getContractFactory("AuthContract");
// // //   const auth = await AuthContract.deploy();
// // //   await auth.deployed();
// // //   console.log("AuthContract deployed to:", auth.address); // ✅ Correct
// // // }

// // // main().catch((error) => {
// // //   console.error(error);
// // //   process.exitCode = 1;
// // // });


// // const hre = require("hardhat");

// // async function main() {
// //   const AuthContract = await hre.ethers.getContractFactory("AuthContract");
// //   const auth = await AuthContract.deploy();

// //   // Instead of auth.deployed(), use waitForDeployment()
// //   await auth.waitForDeployment();

// //   console.log("AuthContract deployed to:", await auth.getAddress());
// // }

// // main().catch((error) => {
// //   console.error(error);
// //   process.exitCode = 1;
// // });



// const hre = require("hardhat");

// async function main() {
//   const AuthContract = await hre.ethers.getContractFactory("AuthContract");
//   const auth = await AuthContract.deploy();
//   await auth.waitForDeployment();
//   console.log("AuthContract deployed to:", await auth.getAddress());
// }

// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });



const hre = require("hardhat");

async function main() {
  const AuthContract = await hre.ethers.getContractFactory("AuthContract");
  const auth = await AuthContract.deploy();
  await auth.waitForDeployment();

  console.log("AuthContract deployed to:", await auth.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
