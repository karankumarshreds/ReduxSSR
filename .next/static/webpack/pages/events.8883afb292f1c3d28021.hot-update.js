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
    _this = undefined;





var Events = function Events(props) {
  console.log('PROPS ====', props.events);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
    children: "Events"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 10
  }, _this);
};

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

var mapStateToProps = function mapStateToProps(_ref3) {
  var events = _ref3.events;
  return {
    events: events
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzLmpzIl0sIm5hbWVzIjpbIkV2ZW50cyIsInByb3BzIiwiY29uc29sZSIsImxvZyIsImV2ZW50cyIsImdldEluaXRpYWxQcm9wcyIsInN0b3JlIiwiZGlzcGF0Y2giLCJmZXRjaEV2ZW50QWN0aW9uIiwibWFwU3RhdGVUb1Byb3BzIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBVztBQUN4QkMsU0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQkYsS0FBSyxDQUFDRyxNQUFoQztBQUNBLHNCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQUhEOztLQUFNSixNOztBQUtOQSxNQUFNLENBQUNLLGVBQVA7QUFBQSwyUkFBeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVNDLGlCQUFULFFBQVNBLEtBQVQ7QUFBQTtBQUFBLG1CQUNqQkEsS0FBSyxDQUFDQyxRQUFOLENBQWVDLDhFQUFnQixFQUEvQixDQURpQjs7QUFBQTtBQUFBLDZDQUVoQixFQUZnQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF6Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFLQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLFFBQWdCO0FBQUEsTUFBYkwsTUFBYSxTQUFiQSxNQUFhO0FBQ3RDLFNBQU87QUFBRUEsVUFBTSxFQUFOQTtBQUFGLEdBQVA7QUFDRCxDQUZEOztBQUllTSwwSEFBTyxDQUFDRCxlQUFELENBQVAsQ0FBeUJULE1BQXpCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXZlbnRzLjg4ODNhZmIyOTJmMWMzZDI4MDIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBmZXRjaEV2ZW50QWN0aW9uIH0gZnJvbSAnLi4vYWN0aW9ucy9ldmVudEFjdGlvbnMnO1xyXG5cclxuY29uc3QgRXZlbnRzID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ1BST1BTID09PT0nLCBwcm9wcy5ldmVudHMpO1xyXG4gIHJldHVybiA8aDE+RXZlbnRzPC9oMT47XHJcbn07XHJcblxyXG5FdmVudHMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgc3RvcmUgfSkgPT4ge1xyXG4gIGF3YWl0IHN0b3JlLmRpc3BhdGNoKGZldGNoRXZlbnRBY3Rpb24oKSk7XHJcbiAgcmV0dXJuIHt9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgZXZlbnRzIH0pID0+IHtcclxuICByZXR1cm4geyBldmVudHMgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShFdmVudHMpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9