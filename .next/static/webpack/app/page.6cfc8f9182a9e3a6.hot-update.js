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

/***/ "(app-pages-browser)/./src/app/components/codeEditor.tsx":
/*!*******************************************!*\
  !*** ./src/app/components/codeEditor.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _uiw_react_codemirror__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uiw/react-codemirror */ \"(app-pages-browser)/./node_modules/@uiw/react-codemirror/esm/index.js\");\n/* harmony import */ var _codemirror_lang_python__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @codemirror/lang-python */ \"(app-pages-browser)/./node_modules/@codemirror/lang-python/dist/index.js\");\n/* harmony import */ var _uiw_codemirror_theme_nord__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uiw/codemirror-theme-nord */ \"(app-pages-browser)/./node_modules/@uiw/codemirror-theme-nord/esm/index.js\");\n/* harmony import */ var _styles_codeEditor_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/codeEditor.css */ \"(app-pages-browser)/./src/app/styles/codeEditor.css\");\n\nvar _s = $RefreshSig$();\n\n\n\n// import { vscodeDark } from '@uiw/codemirror-theme-vscode';\n\n\nconst NEXT_PUBLIC_API_URL = \"http://localhost:8000/\";\nconst CodeEditor = (param)=>{\n    let { setOutput } = param;\n    _s();\n    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleKeyDown = (e)=>{\n            if (e.key == \"Enter\" && e.shiftKey) {\n                console.log(\"kssdsds\");\n            }\n        };\n        window.addEventListener(\"keydown\", handleKeyDown);\n        return ()=>{\n            window.removeEventListener(\"keydown\", handleKeyDown);\n        };\n    }, []);\n    const runCode = async ()=>{\n        try {\n            let requestOptions = {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    code: code\n                })\n            };\n            let response = await fetch(\"\".concat(NEXT_PUBLIC_API_URL), requestOptions);\n            let data = await response.json();\n            if (data && data.output) {\n                setOutput(data.output);\n            }\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"code-editor-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"editor-navbar-container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"submit-button run-button\",\n                    onClick: runCode,\n                    children: \"Run\"\n                }, void 0, false, {\n                    fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/codeEditor.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/codeEditor.tsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uiw_react_codemirror__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                className: \"editor\",\n                value: code,\n                onChange: setCode,\n                extensions: [\n                    (0,_codemirror_lang_python__WEBPACK_IMPORTED_MODULE_5__.python)()\n                ],\n                height: \"100%\",\n                theme: _uiw_codemirror_theme_nord__WEBPACK_IMPORTED_MODULE_3__.nord,\n                basicSetup: {\n                    lineNumbers: true,\n                    allowMultipleSelections: true,\n                    tabSize: 6\n                }\n            }, void 0, false, {\n                fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/codeEditor.tsx\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/codeEditor.tsx\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CodeEditor, \"FE42fR7c//TxniZM6R7Q0xMAMis=\");\n_c = CodeEditor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CodeEditor);\nvar _c;\n$RefreshReg$(_c, \"CodeEditor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9jb2RlRWRpdG9yLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWdFO0FBQ2pCO0FBQ0U7QUFDakQsNkRBQTZEO0FBQ1g7QUFDakI7QUFFakMsTUFBTU0sc0JBQXNCQyx3QkFBK0I7QUFNM0QsTUFBTUUsYUFBd0M7UUFBQyxFQUFFQyxTQUFTLEVBQUU7O0lBQ3hELE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHWCwrQ0FBUUEsQ0FBUztJQUV6Q0MsZ0RBQVNBLENBQUM7UUFDTixNQUFNVyxnQkFBZ0IsQ0FBQ0M7WUFDbkIsSUFBSUEsRUFBRUMsR0FBRyxJQUFJLFdBQVdELEVBQUVFLFFBQVEsRUFBRTtnQkFDaENDLFFBQVFDLEdBQUcsQ0FBQztZQUVoQjtRQUNKO1FBRUFDLE9BQU9DLGdCQUFnQixDQUFDLFdBQVdQO1FBQ25DLE9BQU87WUFBUU0sT0FBT0UsbUJBQW1CLENBQUMsV0FBV1I7UUFBZTtJQUN4RSxHQUFHLEVBQUU7SUFFTCxNQUFNUyxVQUFVO1FBQ1osSUFBSTtZQUNBLElBQUlDLGlCQUFpQjtnQkFDakJDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ0wsZ0JBQWdCO2dCQUNwQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUFFakIsTUFBTUE7Z0JBQUs7WUFDdEM7WUFDQSxJQUFJa0IsV0FBVyxNQUFNQyxNQUFNLEdBQXVCLE9BQXBCeEIsc0JBQXVCaUI7WUFDckQsSUFBSVEsT0FBTyxNQUFNRixTQUFTRyxJQUFJO1lBQzlCLElBQUlELFFBQVFBLEtBQUtFLE1BQU0sRUFBRTtnQkFDckJ2QixVQUFVcUIsS0FBS0UsTUFBTTtZQUN6QjtRQUNKLEVBQUUsT0FBT0MsT0FBTztZQUNaakIsUUFBUUMsR0FBRyxDQUFDZ0I7UUFDaEI7SUFDSjtJQUdBLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNDO29CQUFPRCxXQUFVO29CQUEyQkUsU0FBU2hCOzhCQUFTOzs7Ozs7Ozs7OzswQkFJbkUsOERBQUNuQiw2REFBVUE7Z0JBQ1BpQyxXQUFVO2dCQUNWRyxPQUFPNUI7Z0JBQ1A2QixVQUFVNUI7Z0JBQ1Y2QixZQUFZO29CQUFDckMsK0RBQU1BO2lCQUFHO2dCQUN0QnNDLFFBQU87Z0JBQ1BDLE9BQU90Qyw0REFBSUE7Z0JBQ1h1QyxZQUFZO29CQUNSQyxhQUFhO29CQUNiQyx5QkFBeUI7b0JBQ3pCQyxTQUFTO2dCQUNiOzs7Ozs7Ozs7Ozs7QUFJaEI7R0F6RE10QztLQUFBQTtBQTBETiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvY29kZUVkaXRvci50c3g/ZjM5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2UgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb2RlTWlycm9yIGZyb20gJ0B1aXcvcmVhY3QtY29kZW1pcnJvcic7XG5pbXBvcnQgeyBweXRob24gfSBmcm9tIFwiQGNvZGVtaXJyb3IvbGFuZy1weXRob25cIjtcbi8vIGltcG9ydCB7IHZzY29kZURhcmsgfSBmcm9tICdAdWl3L2NvZGVtaXJyb3ItdGhlbWUtdnNjb2RlJztcbmltcG9ydCB7IG5vcmQgfSBmcm9tICdAdWl3L2NvZGVtaXJyb3ItdGhlbWUtbm9yZCc7XG5pbXBvcnQgXCIuLi9zdHlsZXMvY29kZUVkaXRvci5jc3NcIlxuXG5jb25zdCBORVhUX1BVQkxJQ19BUElfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTFxuXG5pbnRlcmZhY2UgQ29kZUVkaXRvclByb3BzIHtcbiAgICBzZXRPdXRwdXQ6IChjb2RlOiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmNvbnN0IENvZGVFZGl0b3I6IFJlYWN0LkZDPENvZGVFZGl0b3JQcm9wcz4gPSAoeyBzZXRPdXRwdXQgfSkgPT4ge1xuICAgIGNvbnN0IFtjb2RlLCBzZXRDb2RlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChlLmtleSA9PSAnRW50ZXInICYmIGUuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImtzc2RzZHNcIilcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlEb3duKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHsgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlEb3duKSB9XG4gICAgfSwgW10pXG5cbiAgICBjb25zdCBydW5Db2RlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY29kZTogY29kZSB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7TkVYVF9QVUJMSUNfQVBJX1VSTH1gLCByZXF1ZXN0T3B0aW9ucyk7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5vdXRwdXQpIHtcbiAgICAgICAgICAgICAgICBzZXRPdXRwdXQoZGF0YS5vdXRwdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvZGUtZWRpdG9yLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0b3ItbmF2YmFyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic3VibWl0LWJ1dHRvbiBydW4tYnV0dG9uXCIgb25DbGljaz17cnVuQ29kZX0+XG4gICAgICAgICAgICAgICAgICAgIFJ1blxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZU1pcnJvclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVkaXRvclwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NvZGV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldENvZGV9XG4gICAgICAgICAgICAgICAgZXh0ZW5zaW9ucz17W3B5dGhvbigpXX1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICB0aGVtZT17bm9yZH1cbiAgICAgICAgICAgICAgICBiYXNpY1NldHVwPXt7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXJzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhbGxvd011bHRpcGxlU2VsZWN0aW9uczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGFiU2l6ZTogNixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgQ29kZUVkaXRvcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ29kZU1pcnJvciIsInB5dGhvbiIsIm5vcmQiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwicHJvY2VzcyIsImVudiIsIkNvZGVFZGl0b3IiLCJzZXRPdXRwdXQiLCJjb2RlIiwic2V0Q29kZSIsImhhbmRsZUtleURvd24iLCJlIiwia2V5Iiwic2hpZnRLZXkiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJydW5Db2RlIiwicmVxdWVzdE9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJvdXRwdXQiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZXh0ZW5zaW9ucyIsImhlaWdodCIsInRoZW1lIiwiYmFzaWNTZXR1cCIsImxpbmVOdW1iZXJzIiwiYWxsb3dNdWx0aXBsZVNlbGVjdGlvbnMiLCJ0YWJTaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/codeEditor.tsx\n"));

/***/ })

});