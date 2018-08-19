import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // code executed in browser and metamask exists
  web3 = new Web3(window.web3.currentProvider); // want to use the yarn version of web3 not metamask
} else {
  // on the server OR user is not running metamask
  // we create on provider using infra account
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/72972aa10e524654bf0e375268025a04'
  );

  web3 = new Web3(provider);
}

export default web3;
