# NFT-Contract-Testing

<div align="left">
<a href="https://trufflesuite.com" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/DEMYSTIF/DEMYSTIF/main/assets/icons/truffle.svg" width="36" height="36" alt="Truffle" /></a>
</div>

Go to the truffle folder

```bash
cd truffle
```

Install truffle globally

```bash
npm install -g truffle
```

Test the contract

```bash
truffle test
```

Deploy the contract (edit truffle-config.js at first)

```bash
truffle migrate
```

Debug transaction

```bash
truffle debug <transactionHash>
```

<div align="left">
<a href="https://hardhat.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/DEMYSTIF/DEMYSTIF/main/assets/icons/hardhat.svg" width="36" height="36" alt="Hardhat" /></a>
</div>

Go to the hardhat folder

```bash
cd hardhat
```

Install dependencies

```bash
npm install
```

Test the contract

```bash
npx hardhat test
```

Measure code coverage

```bash
npx hardhat coverage
```

Run blockchain simulation (alternative of ganache)

```bash
npx hardhat node
```

Deploy the contract (edit hardhat.config.js at first)

```bash
npx hardhat run script/deploy.js
```
