'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _CampaignFactory = require('./build/CampaignFactory.json');

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// point of this file is to import our instance of the campaignFactory so web3 can use it in other files.

var instance = new _web2.default.eth.Contract(JSON.parse(_CampaignFactory2.default.interface), '0x09cEd482A3a7b56C6Ce145aA40Ef4944030707f7' // location of deployed contract
);

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2ZhY3RvcnkuanMiXSwibmFtZXMiOlsid2ViMyIsIkNhbXBhaWduRmFjdG9yeSIsImluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQXFCOzs7Ozs7QUFFNUI7O0FBRUEsSUFBTSxlQUFlLGNBQUEsQUFBSyxJQUFULEFBQWEsU0FDNUIsS0FBQSxBQUFLLE1BQU0sMEJBREksQUFDZixBQUEyQixZQURaLEFBRWYsNkNBRkYsQUFBaUIsQUFFOEIsQUFHL0M7QUFMaUI7O2tCQUtqQixBQUFlIiwiZmlsZSI6ImZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RyZXdwZXRlcnNvbi9EZXNrdG9wL3R1dG9yaWFscy9ldGhlcmV1bS9raWNrc3RhcnQifQ==