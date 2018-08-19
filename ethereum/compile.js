const path = require('path');
const solc = require('solc');
const fs = require('fs-extra'); // improved version of node fs

const buildPath = path.resolve(__dirname, 'build'); // __dirname = etherium folder
fs.removeSync(buildPath); // remove folder and everything inside

// read contract
const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');
// compile solidity contracts
const output = solc.compile(source, 1).contracts; // want the 2 contracts with keys of :Campaign, :CampaignFactory

fs.ensureDirSync(buildPath); // if directory does not exists create build folder
// iterate over contracts object
for (let contract in output) {
  // write a json file to a specified directory
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(':', '') + '.json'), // file path and name
    output[contract] // content to write to file
  );
}
