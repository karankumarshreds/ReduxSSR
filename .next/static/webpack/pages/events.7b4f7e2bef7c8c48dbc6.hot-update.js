webpackHotUpdate_N_E("pages/events",{

/***/ "./pages/events.js":
/*!*************************!*\
  !*** ./pages/events.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_illum_Work_Code_NextRedux_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_illum_Work_Code_NextRedux_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_illum_Work_Code_NextRedux_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_illum_Work_Code_NextRedux_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_eventActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/eventActions */ "./actions/eventActions.js");




var _jsxFileName = "C:\\Users\\illum\\Work\\Code\\NextRedux\\pages\\events.js",
    _this = undefined,
    _s = $RefreshSig$();





var Events = function Events(props) {
  _s();

  console.log('PROPS ====', props);
  var state = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state;
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
    children: "Events"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 10
  }, _this);
};

_s(Events, "dFAAPDNEsxQMpRpiSMZXJjfPktw=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c = Events;

Events.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(C_Users_illum_Work_Code_NextRedux_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_illum_Work_Code_NextRedux_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var store;
    return C_Users_illum_Work_Code_NextRedux_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            store = _ref.store;
            _context.next = 3;
            return store.dispatch(Object(_actions_eventActions__WEBPACK_IMPORTED_MODULE_5__["fetchEventAction"])());

          case 3:
            return _context.abrupt("return", {});

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

var mapStateToProps = function mapStateToProps(state) {
  return {
    state: state
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps)(Events));

var _c;

$RefreshReg$(_c, "Events");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzLmpzIl0sIm5hbWVzIjpbIkV2ZW50cyIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInN0YXRlIiwidXNlU2VsZWN0b3IiLCJnZXRJbml0aWFsUHJvcHMiLCJzdG9yZSIsImRpc3BhdGNoIiwiZmV0Y2hFdmVudEFjdGlvbiIsIm1hcFN0YXRlVG9Qcm9wcyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ3hCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCRixLQUExQjtBQUNBLE1BQU1HLEtBQUssR0FBR0MsK0RBQVcsQ0FBQyxVQUFDRCxLQUFEO0FBQUEsV0FBV0EsS0FBWDtBQUFBLEdBQUQsQ0FBekI7QUFDQSxzQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0QsQ0FKRDs7R0FBTUosTTtVQUVVSyx1RDs7O0tBRlZMLE07O0FBTU5BLE1BQU0sQ0FBQ00sZUFBUDtBQUFBLDJSQUF5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBU0MsaUJBQVQsUUFBU0EsS0FBVDtBQUFBO0FBQUEsbUJBQ2pCQSxLQUFLLENBQUNDLFFBQU4sQ0FBZUMsOEVBQWdCLEVBQS9CLENBRGlCOztBQUFBO0FBQUEsNkNBRWhCLEVBRmdCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXpCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUtBLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ04sS0FBRCxFQUFXO0FBQ2pDLFNBQU87QUFBRUEsU0FBSyxFQUFMQTtBQUFGLEdBQVA7QUFDRCxDQUZEOztBQUllTywwSEFBTyxDQUFDRCxlQUFELENBQVAsQ0FBeUJWLE1BQXpCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXZlbnRzLjdiNGY3ZTJiZWY3YzhjNDhkYmM2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0LCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgZmV0Y2hFdmVudEFjdGlvbiB9IGZyb20gJy4uL2FjdGlvbnMvZXZlbnRBY3Rpb25zJztcclxuXHJcbmNvbnN0IEV2ZW50cyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdQUk9QUyA9PT09JywgcHJvcHMpO1xyXG4gIGNvbnN0IHN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZSk7XHJcbiAgcmV0dXJuIDxoMT5FdmVudHM8L2gxPjtcclxufTtcclxuXHJcbkV2ZW50cy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBzdG9yZSB9KSA9PiB7XHJcbiAgYXdhaXQgc3RvcmUuZGlzcGF0Y2goZmV0Y2hFdmVudEFjdGlvbigpKTtcclxuICByZXR1cm4ge307XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4geyBzdGF0ZSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEV2ZW50cyk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=