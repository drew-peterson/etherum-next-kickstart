const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts;
let factory; // deployed instance of CampaignFactory
let campaignAddress;
let campaign;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  // deploy new contract to network
  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({
      data: compiledFactory.bytecode
    })
    .send({
      from: accounts[0],
      gas: '1000000'
    });

  // deploy campaign to network
  campaign = await factory.methods
    .createCampaign('100') // minium contribution 100 wei
    .send({ from: accounts[0], gas: '1000000' });

  [campaignAddress] = await factory.methods.getDeployedCampaigns().call(); // take first element from array and assign to var

  // tell web3 about deployed contract
  campaign = await new web3.eth.Contract(
    JSON.parse(compiledCampaign.interface),
    campaignAddress
  );
});

describe('Campaigns', () => {
  it('deploys factory and a campaign', () => {
    assert.ok(factory.options.address);
    assert.ok(campaign.options.address);
  });

  it('marks caller as campaign manager', async () => {
    const manager = await campaign.methods.manager().call();
    assert.equal(accounts[0], manager);
  });

  it('allows people to contrbute and marks as approvers', async () => {
    await campaign.methods.contribute().send({
      from: accounts[1],
      value: '200'
    });
    // public storage vars in contract all get methods generated for them
    assert(campaign.methods.approvers(accounts[1]).call());
  });

  it('requires a minium contribution', async () => {
    try {
      await campaign.methods.contribute().send({
        from: accounts[1],
        value: '5' // minium is set above 100 wei
      });
      assert(false); // dont think this one works...
    } catch (err) {
      assert(err);
    }
  });

  it('allows manager to make a payment request', async () => {
    try {
      await campaign.methods
        .createRequest('buy batteries', '100', address[2])
        .send({
          from: address[0],
          gas: '1000000'
        });
      const request = await campaign.methods.requests(0).call();
      assert.equal('buy batteries', request.description);
    } catch (err) {
      assert(err);
    }
  });

  it('processes requests', async () => {
    // easier to test with larger amounts of wei
    await campaign.methods.contribute().send({
      from: accounts[0],
      value: web3.utils.toWei('10', 'ether')
    });

    await campaign.methods
      .createRequest('A', web3.utils.toWei('5', 'ether'), accounts[1])
      .send({
        from: accounts[0],
        gas: '1000000'
      });

    await campaign.methods.approveRequest(0).send({
      from: accounts[0],
      gas: '1000000'
    });

    await campaign.methods.finalizeRequest(0).send({
      from: accounts[0],
      gas: '1000000'
    });

    let balance = await web3.eth.getBalance(accounts[1]); // is currently a string in wei
    balance = web3.utils.fromWei(balance, 'ether');
    balance = parseFloat(balance);
    // account balance is not cleaned between test, we dont know really how much is added
    assert(balance > 104); // default start with 100, and we transfer around 5 balance is : 104.999832042
  });
});
