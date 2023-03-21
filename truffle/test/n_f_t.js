const NFT = artifacts.require("NFT");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("NFT", function (accounts) {
  let nftContract;

  it("should deploy the contract", async function () {
    nftContract = await NFT.deployed();
    const deployer = nftContract.constructor.class_defaults.from;

    assert.isTrue(deployer === accounts[0]);
  });

  it("Should fetch the name", async function () {
    const name = await nftContract.name();

    assert.equal(name, "HashTag");
  });

  it("Should fetch the symbol", async function () {
    const symbol = await nftContract.symbol();

    assert.equal(symbol, "HT");
  });

  it("Should mint the NFT", async function () {
    const mintTrx = await nftContract.MintNFT(
      "0x3f5e3a0E8D2B8406bFbaa9B9559e21A3234530d0"
    );

    assert.isAbove(mintTrx.receipt.blockNumber, 1);
  });

  it("Should fetch the NFT", async function () {
    const nftOneOwner = await nftContract.ownerOf(1);

    assert.equal(nftOneOwner, "0x3f5e3a0E8D2B8406bFbaa9B9559e21A3234530d0");
  });

  it("Should fetch the URI", async function () {
    const URI = await nftContract.tokenURI(1);

    assert.equal(URI, "genesis");
  });

  it("Should update the URI", async function () {
    const URITrx = await nftContract.changeTokenURI("revelations");

    assert.isAbove(URITrx.receipt.blockNumber, 2);
  });

  it("Should fetch the new URI", async function () {
    const URI = await nftContract.tokenURI(1);

    assert.equal(URI, "revelations");
  });

  it("Should revert the transaction", async function () {
    try {
      const URITrx = await nftContract.changeTokenURI("revelations", {
        from: accounts[1],
      });
    } catch (error) {
      assert.equal(error.data.reason, "You're not authorized");
    }
  });
});
