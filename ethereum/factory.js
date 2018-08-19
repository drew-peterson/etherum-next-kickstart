import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

// point of this file is to import our instance of the campaignFactory so web3 can use it in other files.

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x09cEd482A3a7b56C6Ce145aA40Ef4944030707f7' // location of deployed contract
);

export default instance;
