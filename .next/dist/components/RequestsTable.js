'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RequestsTable = function (_Component) {
  (0, _inherits3.default)(RequestsTable, _Component);

  function RequestsTable() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestsTable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestsTable.__proto__ || (0, _getPrototypeOf2.default)(RequestsTable)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      loading: false
    }, _this.onApprove = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(index) {
        var campaign, accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                campaign = (0, _campaign2.default)(_this.props.address);
                _context.next = 3;
                return _web2.default.eth.getAccounts();

              case 3:
                accounts = _context.sent;

                _this.setState({ loading: true });
                _context.prev = 5;
                _context.next = 8;
                return campaign.methods.approveRequest(index).send({
                  from: accounts[0]
                });

              case 8:
                _routes.Router.replaceRoute('/campaign/' + _this.props.address + '/requests');
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](5);

                console.log('err', _context.t0);

              case 14:
                _this.setState({ loading: false });

              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[5, 11]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RequestsTable, [{
    key: 'renderCells',
    value: function renderCells(_ref3, index) {
      var _this3 = this;

      var value = _ref3.value,
          description = _ref3.description,
          recipient = _ref3.recipient,
          approvalCount = _ref3.approvalCount;
      var Cell = _semanticUiReact.Table.Cell;
      var approversCount = this.props.approversCount;
      var loading = this.state.loading;

      return [_react2.default.createElement(Cell, { key: 0 }, index), _react2.default.createElement(Cell, { key: 1 }, description), _react2.default.createElement(Cell, { key: 2 }, _web2.default.utils.fromWei(value, 'ether')), _react2.default.createElement(Cell, { key: 3 }, recipient), _react2.default.createElement(Cell, { key: 4 }, approvalCount, '/', approversCount), _react2.default.createElement(Cell, { key: 5 }, _react2.default.createElement(_semanticUiReact.Button, {
        loading: loading,
        color: 'green',
        basic: true,
        onClick: function onClick() {
          return _this3.onApprove(index);
        }
      }, 'Approve')), _react2.default.createElement(Cell, { key: 6 }, _react2.default.createElement(_semanticUiReact.Button, { color: 'red', basic: true }, 'Finalize'))];
    }
  }, {
    key: 'renderRows',
    value: function renderRows() {
      var _this4 = this;

      var Row = _semanticUiReact.Table.Row,
          Cell = _semanticUiReact.Table.Cell;

      return this.props.requests.map(function (request, index) {
        return _react2.default.createElement(Row, { key: index }, _this4.renderCells(request, index));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var Header = _semanticUiReact.Table.Header,
          Row = _semanticUiReact.Table.Row,
          HeaderCell = _semanticUiReact.Table.HeaderCell,
          Body = _semanticUiReact.Table.Body,
          Cell = _semanticUiReact.Table.Cell;

      return _react2.default.createElement(_semanticUiReact.Table, null, _react2.default.createElement(Header, null, _react2.default.createElement(Row, null, _react2.default.createElement(HeaderCell, null, 'ID'), _react2.default.createElement(HeaderCell, null, 'Descripti'), _react2.default.createElement(HeaderCell, null, 'Amount'), _react2.default.createElement(HeaderCell, null, 'Recipient'), _react2.default.createElement(HeaderCell, null, 'Approval Count'), _react2.default.createElement(HeaderCell, null, 'Approve'), _react2.default.createElement(HeaderCell, null, 'Finalize'))), _react2.default.createElement(Body, null, this.renderRows()));
    }
  }]);

  return RequestsTable;
}(_react.Component);

exports.default = RequestsTable;