# StockBlock
Decentralized Stock Photo marketplace using the Ethereum Blockchain. <br />
Made by: Sean Remedios & Taylor Simpson <br />
*for Local Hack Day 2017 at Queen's University* <br />

![alt text](https://raw.githubusercontent.com/SeanRemedios/StockBlock/master/StockBlock/app/pictures/stockblock.png "StockBlock") <br />

## Installation

### Install Node Version Manager
To install or update nvm, you can use cURL:
```sh
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.6/install.sh | bash
```

### Install Node and Npm
To install or update node and npm, you can use nvm:
```
nvm install node
```

### Install Depdencies
To install or update the relevant dependencies, you can use the npm script:
```
npm run depends
```
The npm script installs the following dependendcies:
- Embark Framework
- Ethereum testrpc
- IPFS

### Adding the MetaMask extension
To add the MetaMask extension to Google Chrome, go to the following link and add the extension: <br />
https://metamask.io/

## Usage
1. Open a terminal window run the following command to start the ipfs daemon:
```
ipfs daemon
```
2. Open another terminal window and run the following command to start the testrpc blockchain:
```
testrpc
```
3. Open another terminal window and run the following command to start the embark framework, compile the contracts and complete all the necessary steps to get the program launched:
```
embark run
```
4. Open a browser window (preferably Google Chrome) and add the testrpc mnemonic to MetaMask by clicking: `Import Existing DEN`
5. Go to http://localhost:8000/ to view the webpage.

## Devpost
Check the project out on Devpost: https://devpost.com/software/stock-block

## More Information
For more information visit the following links:
- Solidity: http://solidity.readthedocs.io/en/develop/index.html
- MetaMask: https://metamask.io
- Embark: https://github.com/iurimatias/embark-framework
- IPFS: https://ipfs.io
- IPFS GitHub: https://github.com/ipfs/ipfs
- Testrpc: https://www.npmjs.com/package/ethereumjs-testrpc
- Web3: https://github.com/ethereum/web3.js/
