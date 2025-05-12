

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
