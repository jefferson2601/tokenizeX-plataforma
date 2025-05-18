async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying with account:", deployer.address);

  const TokenizeX1155 = await ethers.getContractFactory("TokenizeX1155");
  const tokenizeX1155 = await TokenizeX1155.deploy();

  await tokenizeX1155.deployed();

  console.log("TokenizeX1155 deployed to:", tokenizeX1155.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
