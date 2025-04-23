const { ethers } = require("hardhat");

async function main() {
  const MicroloanPlatform = await ethers.deployContract("MicroloanPlatform"); // Deploy the contract
  await MicroloanPlatform.waitForDeployment(); // Wait for deployment

  console.log(
    `MicroloanPlatform deployed at: ${await MicroloanPlatform.getAddress()}`
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
