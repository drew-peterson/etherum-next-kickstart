'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // code executed in browser and metamask exists
  web3 = new _web2.default(window.web3.currentProvider); // want to use the yarn version of web3 not metamask
} else {
  // on the server OR user is not running metamask
  // we create on provider using infra account
  var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/72972aa10e524654bf0e375268025a04');

  web3 = new _web2.default(provider);
}

exports.default = web3;