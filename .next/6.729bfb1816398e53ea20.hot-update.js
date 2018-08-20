webpackHotUpdate(6,{

/***/ 1173:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(481);

var _axios = __webpack_require__(1181);

var _axios2 = _interopRequireDefault(_axios);

var _Layout = __webpack_require__(1155);

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = __webpack_require__(724);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/drewpeterson/Desktop/tutorials/ethereum/kickstart/pages/drew.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/drewpeterson/Desktop/tutorials/ethereum/kickstart/pages/drew.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/drew")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi43MjliZmIxODE2Mzk4ZTUzZWEyMC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvZHJldy5qcz81M2NkODIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDYXJkLCBCdXR0b24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vcm91dGVzJztcblxuY2xhc3MgRHJldyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgbWVzc2FnZTogJydcbiAgfTtcblxuICBkcmV3ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoJy9kcmV3Jyk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2U6IHJlcy5kYXRhLm1lc3NhZ2UgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8TGluayByb3V0ZT1cIi9cIj5cbiAgICAgICAgICA8YSBocmVmPVwiXCI+QmFjazwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8QnV0dG9uIGNvbnRlbnQ9XCJHZXQgU2VjcmV0IE1lc3NhZ2UgW1BPU1RdXCIgb25DbGljaz17dGhpcy5kcmV3fSAvPlxuICAgICAgICA8aDE+c2VjcmV0IG1lc3NhZ2UgaXM6IHt0aGlzLnN0YXRlLm1lc3NhZ2V9PC9oMT5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJldztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2RyZXcuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUFBOztBQUFBO0FBQUE7Ozs7OztBQU1BO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9