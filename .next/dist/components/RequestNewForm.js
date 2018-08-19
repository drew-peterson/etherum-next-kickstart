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

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _routes = require('../routes');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RequestNewForm = function (_Component) {
  (0, _inherits3.default)(RequestNewForm, _Component);

  function RequestNewForm() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestNewForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestNewForm.__proto__ || (0, _getPrototypeOf2.default)(RequestNewForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: '',
      description: '',
      recipient: '',
      loading: false,
      errorMessage: false
    }, _this.handleSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e) {
        var _this$state, description, recipient, value, campaign, accounts, message;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                _this$state = _this.state, description = _this$state.description, recipient = _this$state.recipient, value = _this$state.value;
                campaign = (0, _campaign2.default)(_this.props.address);
                _context.next = 5;
                return _web2.default.eth.getAccounts();

              case 5:
                accounts = _context.sent;

                _this.setState({ loading: true, errorMessage: '' });
                _context.prev = 7;
                _context.next = 10;
                return campaign.methods.createRequest(description, _web2.default.utils.toWei(value, 'ether'), recipient).send({
                  from: accounts[0]
                });

              case 10:
                _routes.Router.pushRoute('/campaign/' + _this.props.address + '/requests');
                _context.next = 17;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context['catch'](7);
                message = _context.t0.message;

                _this.setState({ errorMessage: message });

              case 17:
                _this.setState({ loading: false });

              case 18:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[7, 13]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RequestNewForm, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _state = this.state,
          loading = _state.loading,
          errorMessage = _state.errorMessage,
          value = _state.value,
          description = _state.description,
          recipient = _state.recipient;

      return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.handleSubmit, error: !!errorMessage }, _react2.default.createElement(_semanticUiReact.Form.Field, null, _react2.default.createElement('label', { htmlFor: '' }, 'Description'), _react2.default.createElement(_semanticUiReact.Input, {
        value: description,
        onChange: function onChange(e) {
          return _this3.setState({ description: e.target.value });
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, null, _react2.default.createElement('label', { htmlFor: '' }, 'Value in Ether'), _react2.default.createElement(_semanticUiReact.Input, {
        value: value,
        label: 'Ether',
        labelPosition: 'right',
        onChange: function onChange(e) {
          return _this3.setState({ value: e.target.value });
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, null, _react2.default.createElement('label', { htmlFor: '' }, 'Recipient'), _react2.default.createElement(_semanticUiReact.Input, {
        value: recipient,
        onChange: function onChange(e) {
          return _this3.setState({ recipient: e.target.value });
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops..', content: errorMessage }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: loading }, 'Create!'));
    }
  }]);

  return RequestNewForm;
}(_react.Component);

exports.default = RequestNewForm;