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

/***/ "(app-pages-browser)/./src/app/components/settings.tsx":
/*!*****************************************!*\
  !*** ./src/app/components/settings.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main */ \"(app-pages-browser)/./src/app/main.tsx\");\n/* harmony import */ var _styles_settings_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/settings.css */ \"(app-pages-browser)/./src/app/styles/settings.css\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Settings = (param)=>{\n    let { isOpen } = param;\n    _s();\n    const { value: isMinimal, setValue: setIsMinimal } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_main__WEBPACK_IMPORTED_MODULE_2__.MinimalContext);\n    const handleToggleMinimal = ()=>{\n        setIsMinimal(!isMinimal);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"settings-container \".concat(isOpen ? \"display\" : \"hide\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"settings-modal\",\n            children: [\n                \"Settings!\",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleToggleMinimal,\n                    children: \"ToggleMinimal\"\n                }, void 0, false, {\n                    fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/settings.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/settings.tsx\",\n            lineNumber: 17,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/settings.tsx\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Settings, \"jt8KQtDGQto+dSTBoDRJrB101HU=\");\n_c = Settings;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Settings);\nvar _c;\n$RefreshReg$(_c, \"Settings\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBK0Q7QUFDdEI7QUFDVDtBQU1oQyxNQUFNRyxXQUFvQztRQUFDLEVBQUVDLE1BQU0sRUFBRTs7SUFDakQsTUFBTSxFQUFFQyxPQUFPQyxTQUFTLEVBQUVDLFVBQVVDLFlBQVksRUFBRSxHQUFHUCxpREFBVUEsQ0FBQ0MsaURBQWNBO0lBRTlFLE1BQU1PLHNCQUFzQjtRQUN4QkQsYUFBYSxDQUFDRjtJQUNsQjtJQUNBLHFCQUNJLDhEQUFDSTtRQUFJQyxXQUFXLHNCQUFrRCxPQUE1QlAsU0FBVSxZQUFZO2tCQUN4RCw0RUFBQ007WUFBSUMsV0FBVTs7Z0JBQWlCOzhCQUU1Qiw4REFBQ0M7b0JBQU9DLFNBQVNKOzhCQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdEQ7R0FkTU47S0FBQUE7QUFnQk4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL3NldHRpbmdzLnRzeD85OWNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNaW5pbWFsQ29udGV4dCB9IGZyb20gXCIuLi9tYWluXCI7XG5pbXBvcnQgJy4uL3N0eWxlcy9zZXR0aW5ncy5jc3MnO1xuXG5pbnRlcmZhY2UgU2V0dGluZ3NQcm9wcyB7XG4gICAgaXNPcGVuOiBib29sZWFuXG59XG5cbmNvbnN0IFNldHRpbmdzOiBSZWFjdC5GQzxTZXR0aW5nc1Byb3BzPiA9ICh7IGlzT3BlbiB9KSA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZTogaXNNaW5pbWFsLCBzZXRWYWx1ZTogc2V0SXNNaW5pbWFsIH0gPSB1c2VDb250ZXh0KE1pbmltYWxDb250ZXh0KTtcblxuICAgIGNvbnN0IGhhbmRsZVRvZ2dsZU1pbmltYWwgPSAoKSA9PiB7XG4gICAgICAgIHNldElzTWluaW1hbCghaXNNaW5pbWFsKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHNldHRpbmdzLWNvbnRhaW5lciAke2lzT3BlbiA/IGBkaXNwbGF5YCA6IGBoaWRlYH1gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3MtbW9kYWxcIj5cbiAgICAgICAgICAgICAgICBTZXR0aW5ncyFcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZU1pbmltYWx9PlRvZ2dsZU1pbmltYWw8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsIk1pbmltYWxDb250ZXh0IiwiU2V0dGluZ3MiLCJpc09wZW4iLCJ2YWx1ZSIsImlzTWluaW1hbCIsInNldFZhbHVlIiwic2V0SXNNaW5pbWFsIiwiaGFuZGxlVG9nZ2xlTWluaW1hbCIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/settings.tsx\n"));

/***/ })

});