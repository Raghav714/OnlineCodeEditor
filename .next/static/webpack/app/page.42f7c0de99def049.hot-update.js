"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/resizable.tsx":
/*!******************************************!*\
  !*** ./src/app/components/resizable.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_resizable_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/resizable.css */ \"(app-pages-browser)/./src/app/styles/resizable.css\");\n\nvar _s = $RefreshSig$();\n\n\nconst Resizable = (param)=>{\n    let { leftPanel, rightPanel } = param;\n    _s();\n    const [width, setWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(100);\n    const [mouseDown, setMouseDown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [startX, setStartX] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [startWidth, setStartWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(100);\n    const handleMouseDown = (e)=>{\n        setStartX(e.clientX);\n        setStartWidth(width);\n        setMouseDown(true);\n        e.preventDefault();\n    };\n    const handleMouseMove = (e)=>{\n        if (mouseDown) {\n            const newWidth = startWidth + (e.clientX - startX);\n            setWidth(newWidth > 0 ? newWidth : 0);\n        }\n    };\n    const handleMouseUp = ()=>{\n        setMouseDown(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"resizable-container\",\n        onMouseMove: mouseDown ? handleMouseMove : undefined,\n        onMouseUp: handleMouseUp,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"editor-container\",\n                style: {\n                    width: width\n                },\n                children: leftPanel\n            }, void 0, false, {\n                fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/resizable.tsx\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"resize\",\n                onMouseDown: handleMouseDown\n            }, void 0, false, {\n                fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/resizable.tsx\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"output-container\",\n                children: rightPanel\n            }, void 0, false, {\n                fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/resizable.tsx\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/resizable.tsx\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Resizable, \"LPjZd21EiWRhj15Q4zwAL/HNoZ8=\");\n_c = Resizable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Resizable);\nvar _c;\n$RefreshReg$(_c, \"Resizable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9yZXNpemFibGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBbUQ7QUFDbkI7QUFPaEMsTUFBTUUsWUFBc0M7UUFBQyxFQUFFQyxTQUFTLEVBQUVDLFVBQVUsRUFBRTs7SUFDbEUsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFTO0lBQzNDLE1BQU0sQ0FBQ00sV0FBV0MsYUFBYSxHQUFHUCwrQ0FBUUEsQ0FBVTtJQUNwRCxNQUFNLENBQUNRLFFBQVFDLFVBQVUsR0FBR1QsK0NBQVFBLENBQVM7SUFDN0MsTUFBTSxDQUFDVSxZQUFZQyxjQUFjLEdBQUdYLCtDQUFRQSxDQUFTO0lBRXJELE1BQU1ZLGtCQUFrQixDQUFDQztRQUNyQkosVUFBVUksRUFBRUMsT0FBTztRQUNuQkgsY0FBY1A7UUFDZEcsYUFBYTtRQUNiTSxFQUFFRSxjQUFjO0lBQ3BCO0lBRUEsTUFBTUMsa0JBQWtCLENBQUNIO1FBQ3JCLElBQUlQLFdBQVc7WUFDWCxNQUFNVyxXQUFXUCxhQUFjRyxDQUFBQSxFQUFFQyxPQUFPLEdBQUdOLE1BQUs7WUFDaERILFNBQVNZLFdBQVcsSUFBSUEsV0FBVztRQUN2QztJQUNKO0lBRUEsTUFBTUMsZ0JBQWdCO1FBQ2xCWCxhQUFhO0lBQ2pCO0lBRUEscUJBRUksOERBQUNZO1FBQUlDLFdBQVU7UUFDWEMsYUFBYWYsWUFBWVUsa0JBQWtCTTtRQUMzQ0MsV0FBV0w7OzBCQUVYLDhEQUFDQztnQkFBSUMsV0FBVTtnQkFBbUJJLE9BQU87b0JBQUVwQixPQUFPQTtnQkFBTTswQkFDbkRGOzs7Ozs7MEJBRUwsOERBQUNpQjtnQkFBSUMsV0FBVTtnQkFBU0ssYUFBYWI7Ozs7OzswQkFFckMsOERBQUNPO2dCQUFJQyxXQUFVOzBCQUNWakI7Ozs7Ozs7Ozs7OztBQUtqQjtHQXpDTUY7S0FBQUE7QUEyQ04sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL3Jlc2l6YWJsZS50c3g/MGU5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICcuLi9zdHlsZXMvcmVzaXphYmxlLmNzcydcblxuaW50ZXJmYWNlIFJlc2l6YWJsZVByb3BzIHtcbiAgICBsZWZ0UGFuZWw6IFJlYWN0Tm9kZTtcbiAgICByaWdodFBhbmVsOiBSZWFjdE5vZGU7XG59XG5cbmNvbnN0IFJlc2l6YWJsZTogUmVhY3QuRkM8UmVzaXphYmxlUHJvcHM+ID0gKHsgbGVmdFBhbmVsLCByaWdodFBhbmVsIH0pID0+IHtcbiAgICBjb25zdCBbd2lkdGgsIHNldFdpZHRoXSA9IHVzZVN0YXRlPG51bWJlcj4oMTAwKTtcbiAgICBjb25zdCBbbW91c2VEb3duLCBzZXRNb3VzZURvd25dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIGNvbnN0IFtzdGFydFgsIHNldFN0YXJ0WF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuICAgIGNvbnN0IFtzdGFydFdpZHRoLCBzZXRTdGFydFdpZHRoXSA9IHVzZVN0YXRlPG51bWJlcj4oMTAwKTtcblxuICAgIGNvbnN0IGhhbmRsZU1vdXNlRG93biA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xuICAgICAgICBzZXRTdGFydFgoZS5jbGllbnRYKTtcbiAgICAgICAgc2V0U3RhcnRXaWR0aCh3aWR0aCk7XG4gICAgICAgIHNldE1vdXNlRG93bih0cnVlKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVNb3VzZU1vdmUgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgICAgICAgaWYgKG1vdXNlRG93bikge1xuICAgICAgICAgICAgY29uc3QgbmV3V2lkdGggPSBzdGFydFdpZHRoICsgKGUuY2xpZW50WCAtIHN0YXJ0WCk7XG4gICAgICAgICAgICBzZXRXaWR0aChuZXdXaWR0aCA+IDAgPyBuZXdXaWR0aCA6IDApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZU1vdXNlVXAgPSAoKSA9PiB7XG4gICAgICAgIHNldE1vdXNlRG93bihmYWxzZSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXNpemFibGUtY29udGFpbmVyXCJcbiAgICAgICAgICAgIG9uTW91c2VNb3ZlPXttb3VzZURvd24gPyBoYW5kbGVNb3VzZU1vdmUgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICBvbk1vdXNlVXA9e2hhbmRsZU1vdXNlVXB9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdG9yLWNvbnRhaW5lclwiIHN0eWxlPXt7IHdpZHRoOiB3aWR0aCB9fT5cbiAgICAgICAgICAgICAgICB7bGVmdFBhbmVsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc2l6ZVwiIG9uTW91c2VEb3duPXtoYW5kbGVNb3VzZURvd259IC8+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0cHV0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIHtyaWdodFBhbmVsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcblxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXNpemFibGU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlJlc2l6YWJsZSIsImxlZnRQYW5lbCIsInJpZ2h0UGFuZWwiLCJ3aWR0aCIsInNldFdpZHRoIiwibW91c2VEb3duIiwic2V0TW91c2VEb3duIiwic3RhcnRYIiwic2V0U3RhcnRYIiwic3RhcnRXaWR0aCIsInNldFN0YXJ0V2lkdGgiLCJoYW5kbGVNb3VzZURvd24iLCJlIiwiY2xpZW50WCIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlTW91c2VNb3ZlIiwibmV3V2lkdGgiLCJoYW5kbGVNb3VzZVVwIiwiZGl2IiwiY2xhc3NOYW1lIiwib25Nb3VzZU1vdmUiLCJ1bmRlZmluZWQiLCJvbk1vdXNlVXAiLCJzdHlsZSIsIm9uTW91c2VEb3duIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/resizable.tsx\n"));

/***/ })

});