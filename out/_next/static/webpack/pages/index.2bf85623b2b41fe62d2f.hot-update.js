webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ColorButtons/index.js":
/*!******************************************!*\
  !*** ./components/ColorButtons/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/andi/SideProject/shoes-customizer/components/ColorButtons/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar ColorButtons = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ColorButtons, _React$Component);\n\n  var _super = _createSuper(ColorButtons);\n\n  function ColorButtons() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ColorButtons);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ColorButtons, [{\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      var _this$props = this.props,\n          _this$props$shoePartN = _this$props.shoePartName,\n          shoePartName = _this$props$shoePartN === void 0 ? \"\" : _this$props$shoePartN,\n          _this$props$stateName = _this$props.stateName,\n          stateName = _this$props$stateName === void 0 ? \"\" : _this$props$stateName,\n          _this$props$stateNow = _this$props.stateNow,\n          stateNow = _this$props$stateNow === void 0 ? \"\" : _this$props$stateNow,\n          _this$props$colors = _this$props.colors,\n          colors = _this$props$colors === void 0 ? [] : _this$props$colors,\n          _this$props$changeCol = _this$props.changeColor,\n          changeColor = _this$props$changeCol === void 0 ? function () {} : _this$props$changeCol;\n      return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"Card\"], {\n        className: \"mb-3 py-3 px-4\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 7\n        }\n      }, __jsx(\"h5\", {\n        className: \"mb-3\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 9\n        }\n      }, shoePartName), __jsx(\"div\", {\n        className: \"d-flex align-items-center\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 9\n        }\n      }, colors.map(function (item) {\n        return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"Button\"], {\n          variant: \"outline-secondary\",\n          size: \"sm\",\n          className: \"ml-2\",\n          onClick: function onClick() {\n            return changeColor(stateName, item.value);\n          },\n          active: stateNow === item.value,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 15\n          }\n        }, __jsx(\"span\", {\n          style: {\n            height: 15,\n            width: 15,\n            backgroundColor: item.value,\n            borderRadius: \"50%\",\n            display: \"inline-block\"\n          },\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 17\n          }\n        }), __jsx(\"span\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 17\n          }\n        }, item.label));\n      })));\n    }\n  }]);\n\n  return ColorButtons;\n}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ColorButtons);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db2xvckJ1dHRvbnMvaW5kZXguanM/NGQ5NyJdLCJuYW1lcyI6WyJDb2xvckJ1dHRvbnMiLCJwcm9wcyIsInNob2VQYXJ0TmFtZSIsInN0YXRlTmFtZSIsInN0YXRlTm93IiwiY29sb3JzIiwiY2hhbmdlQ29sb3IiLCJtYXAiLCJpdGVtIiwidmFsdWUiLCJoZWlnaHQiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsImRpc3BsYXkiLCJsYWJlbCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUVNQSxZOzs7Ozs7Ozs7Ozs7OzZCQUNLO0FBQUE7O0FBQUEsd0JBT0gsS0FBS0MsS0FQRjtBQUFBLDhDQUVMQyxZQUZLO0FBQUEsVUFFTEEsWUFGSyxzQ0FFVSxFQUZWO0FBQUEsOENBR0xDLFNBSEs7QUFBQSxVQUdMQSxTQUhLLHNDQUdPLEVBSFA7QUFBQSw2Q0FJTEMsUUFKSztBQUFBLFVBSUxBLFFBSksscUNBSU0sRUFKTjtBQUFBLDJDQUtMQyxNQUxLO0FBQUEsVUFLTEEsTUFMSyxtQ0FLSSxFQUxKO0FBQUEsOENBTUxDLFdBTks7QUFBQSxVQU1MQSxXQU5LLHNDQU1TLFlBQU0sQ0FBRSxDQU5qQjtBQVFQLGFBQ0UsTUFBQyxvREFBRDtBQUFNLGlCQUFTLEVBQUMsZ0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFJLGlCQUFTLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQXNCSixZQUF0QixDQURGLEVBRUU7QUFBSyxpQkFBUyxFQUFDLDJCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDR0csTUFBTSxDQUFDRSxHQUFQLENBQVcsVUFBQ0MsSUFBRCxFQUFVO0FBQ3BCLGVBQ0UsTUFBQyxzREFBRDtBQUNFLGlCQUFPLEVBQUMsbUJBRFY7QUFFRSxjQUFJLEVBQUMsSUFGUDtBQUdFLG1CQUFTLEVBQUMsTUFIWjtBQUlFLGlCQUFPLEVBQUU7QUFBQSxtQkFBTUYsV0FBVyxDQUFDSCxTQUFELEVBQVlLLElBQUksQ0FBQ0MsS0FBakIsQ0FBakI7QUFBQSxXQUpYO0FBS0UsZ0JBQU0sRUFBRUwsUUFBUSxLQUFLSSxJQUFJLENBQUNDLEtBTDVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FPRTtBQUNFLGVBQUssRUFBRTtBQUNMQyxrQkFBTSxFQUFFLEVBREg7QUFFTEMsaUJBQUssRUFBRSxFQUZGO0FBR0xDLDJCQUFlLEVBQUVKLElBQUksQ0FBQ0MsS0FIakI7QUFJTEksd0JBQVksRUFBRSxLQUpUO0FBS0xDLG1CQUFPLEVBQUU7QUFMSixXQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFQRixFQWdCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQU9OLElBQUksQ0FBQ08sS0FBWixDQWhCRixDQURGO0FBb0JELE9BckJBLENBREgsQ0FGRixDQURGO0FBNkJEOzs7O0VBdEN3QkMsNENBQUssQ0FBQ0MsUzs7QUF5Q2xCakIsMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbG9yQnV0dG9ucy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcblxuY2xhc3MgQ29sb3JCdXR0b25zIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHNob2VQYXJ0TmFtZSA9IFwiXCIsXG4gICAgICBzdGF0ZU5hbWUgPSBcIlwiLFxuICAgICAgc3RhdGVOb3cgPSBcIlwiLFxuICAgICAgY29sb3JzID0gW10sXG4gICAgICBjaGFuZ2VDb2xvciA9ICgpID0+IHt9LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8Q2FyZCBjbGFzc05hbWU9XCJtYi0zIHB5LTMgcHgtNFwiPlxuICAgICAgICA8aDUgY2xhc3NOYW1lPVwibWItM1wiPntzaG9lUGFydE5hbWV9PC9oNT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAge2NvbG9ycy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZS1zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMlwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlQ29sb3Ioc3RhdGVOYW1lLCBpdGVtLnZhbHVlKX1cbiAgICAgICAgICAgICAgICBhY3RpdmU9e3N0YXRlTm93ID09PSBpdGVtLnZhbHVlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNSxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpdGVtLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0ubGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9DYXJkPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29sb3JCdXR0b25zO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ColorButtons/index.js\n");

/***/ })

})