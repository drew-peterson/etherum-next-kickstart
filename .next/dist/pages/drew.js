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

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/drewpeterson/Desktop/tutorials/ethereum/kickstart/pages/drew.js?entry';


var Drew = function (_Component) {
  (0, _inherits3.default)(Drew, _Component);

  function Drew() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Drew);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Drew.__proto__ || (0, _getPrototypeOf2.default)(Drew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      message: ''
    }, _this.drew = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var res;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _axios2.default.post('/drew');

            case 2:
              res = _context.sent;

              _this.setState({ message: res.data.message });

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Drew, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement('a', { href: '', __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, 'Back')), _react2.default.createElement(_semanticUiReact.Button, { content: 'Get Secret Message [POST]', onClick: this.drew, __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, 'secret message is: ', this.state.message));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt('return', {});

              case 1:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps() {
        return _ref3.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Drew;
}(_react.Component);

exports.default = Drew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2RyZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiQnV0dG9uIiwiYXhpb3MiLCJMYXlvdXQiLCJMaW5rIiwiRHJldyIsInN0YXRlIiwibWVzc2FnZSIsImRyZXciLCJwb3N0IiwicmVzIiwic2V0U3RhdGUiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTTs7QUFDZixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBWTs7Ozs7OztJQUVmLEE7Ozs7Ozs7Ozs7Ozs7Ozt3TSxBQUtKO2VBQVEsQUFDRyxBO0FBREgsQUFDTixhQUdGLEEsZ0ZBQU8sbUJBQUE7VUFBQTtvRUFBQTtrQkFBQTsyQ0FBQTtpQkFBQTs4QkFBQTtxQkFDYSxnQkFBQSxBQUFNLEtBRG5CLEFBQ2EsQUFBVzs7aUJBQXZCO0FBREQsNkJBRUw7O29CQUFBLEFBQUssU0FBUyxFQUFFLFNBQVMsSUFBQSxBQUFJLEtBRnhCLEFBRUwsQUFBYyxBQUFvQjs7aUJBRjdCO2lCQUFBOzhCQUFBOztBQUFBO2tCQUFBO0E7Ozs7OzZCQUtFLEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtvQkFBWjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxPQUFHLE1BQUgsQUFBUTtvQkFBUjtzQkFBQTtBQUFBO1NBRkosQUFDRSxBQUNFLEFBRUYsMEJBQUEsQUFBQyx5Q0FBTyxTQUFSLEFBQWdCLDZCQUE0QixTQUFTLEtBQXJELEFBQTBEO29CQUExRDtzQkFKRixBQUlFLEFBQ0E7QUFEQTswQkFDQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBd0IsNEJBQUEsQUFBSyxNQU5qQyxBQUNFLEFBS0UsQUFBbUMsQUFHeEM7Ozs7Ozs7Ozs7a0RBdEJRLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFGUSxBLEFBMkJuQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJkcmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kcmV3cGV0ZXJzb24vRGVza3RvcC90dXRvcmlhbHMvZXRoZXJldW0va2lja3N0YXJ0In0=