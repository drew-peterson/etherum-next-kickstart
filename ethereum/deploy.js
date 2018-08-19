const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  'prefer assist inspire mixed swap write owner guess fan duck devote gift', // connect to my personal metaMax account
  'https://rinkeby.infura.io/v3/72972aa10e524654bf0e375268025a04'
);

const web3 = new Web3(provider);

// need to deploy to rinkby network w/ node deploy.js

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('attempting to deploy from account:', accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({
      data: '0x' + compiledFactory.bytecode
    })
    .send({ gas: '1000000', from: accounts[0] });
  console.log('Contract deployed to: ', result.options.address); // 0x0143CCD9d70F38188325EdC0B593cB0d6fcf7D93
};
deploy();
