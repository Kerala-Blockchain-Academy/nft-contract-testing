const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NFT", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.

  let nftContract;

  it("Should deploy the contract", async function () {
    const [owner, otherAccount] = await ethers.getSigners();

    const NFT = await ethers.getContractFactory("NFT");
    nftContract = await NFT.deploy();

    expect(nftContract.deployTransaction.from).to.equal(owner.address);
  });

  it("Should fetch the name", async function () {
    expect(await nftContract.name()).to.equal("HashTag");
  });

  it("Should fetch the symbol", async function () {
    expect(await nftContract.symbol()).to.equal("HT");
  });

  it("Should mint the NFT", async function () {
    const mintTrx = await nftContract.MintNFT(
      "0x3f5e3a0E8D2B8406bFbaa9B9559e21A3234530d0"
    );

    expect(mintTrx.blockNumber).to.be.above(1);
  });

  it("Should fetch the NFT", async function () {
    const nftOneOwner = await nftContract.ownerOf(1);

    expect(nftOneOwner).to.equal("0x3f5e3a0E8D2B8406bFbaa9B9559e21A3234530d0");
  });

  it("Should fetch the URI", async function () {
    const URI = await nftContract.tokenURI(1);

    expect(URI).to.equal("genesis");
  });

  it("Should update the URI", async function () {
    const URITrx = await nftContract.changeTokenURI("revelations");
    expect(URITrx.blockNumber).to.be.above(2);
  });

  it("Should fetch the new URI", async function () {
    const URI = await nftContract.tokenURI(1);

    expect(URI).to.equal("revelations");
  });

  it("Should revert the transaction", async function () {
    const [owner, otherAccount] = await ethers.getSigners();

    await expect(
      nftContract.connect(otherAccount).changeTokenURI("revelations")
    ).to.be.revertedWith("You're not authorized");
  });
});
