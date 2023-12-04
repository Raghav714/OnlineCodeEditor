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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _uiw_react_codemirror__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uiw/react-codemirror */ \"(app-pages-browser)/./node_modules/@uiw/react-codemirror/esm/index.js\");\n/* harmony import */ var _codemirror_lang_python__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @codemirror/lang-python */ \"(app-pages-browser)/./node_modules/@codemirror/lang-python/dist/index.js\");\n/* harmony import */ var _uiw_codemirror_theme_nord__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uiw/codemirror-theme-nord */ \"(app-pages-browser)/./node_modules/@uiw/codemirror-theme-nord/esm/index.js\");\n/* harmony import */ var _styles_codeEditor_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/codeEditor.css */ \"(app-pages-browser)/./src/app/styles/codeEditor.css\");\n\nvar _s = $RefreshSig$();\n\n\n\n// import { vscodeDark } from '@uiw/codemirror-theme-vscode';\n\n\nconst NEXT_PUBLIC_API_URL = \"http://localhost:8000/\";\nconst CodeEditor = (param)=>{\n    let { setOutput } = param;\n    _s();\n    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleKeyDown = (e)=>{\n            if (e.shiftKey && e.key == \"Enter\") {\n                console.log(\"kssdsds\");\n                runCode();\n            }\n        };\n        window.addEventListener(\"keydown\", handleKeyDown);\n        return ()=>{\n            window.removeEventListener(\"keydown\", handleKeyDown);\n        };\n    }, []);\n    const runCode = async ()=>{\n        try {\n            let requestOptions = {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    code: code\n                })\n            };\n            let response = await fetch(\"\".concat(NEXT_PUBLIC_API_URL), requestOptions);\n            let data = await response.json();\n            if (data && data.output) {\n                setOutput(data.output);\n            }\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"code-editor-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"editor-navbar-container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"submit-button run-button\",\n                    onClick: runCode,\n                    children: \"Run\"\n                }, void 0, false, {\n                    fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/codeEditor.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/codeEditor.tsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uiw_react_codemirror__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                className: \"editor\",\n                value: code,\n                onChange: setCode,\n                extensions: [\n                    (0,_codemirror_lang_python__WEBPACK_IMPORTED_MODULE_5__.python)()\n                ],\n                height: \"100%\",\n                theme: _uiw_codemirror_theme_nord__WEBPACK_IMPORTED_MODULE_3__.nord,\n                basicSetup: {\n                    lineNumbers: true,\n                    allowMultipleSelections: true,\n                    tabSize: 6\n                }\n            }, void 0, false, {\n                fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/codeEditor.tsx\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/codeEditor.tsx\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CodeEditor, \"FE42fR7c//TxniZM6R7Q0xMAMis=\");\n_c = CodeEditor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CodeEditor);\nvar _c;\n$RefreshReg$(_c, \"CodeEditor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9jb2RlRWRpdG9yLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWdFO0FBQ2pCO0FBQ0U7QUFDakQsNkRBQTZEO0FBQ1g7QUFDakI7QUFFakMsTUFBTU0sc0JBQXNCQyx3QkFBK0I7QUFNM0QsTUFBTUUsYUFBd0M7UUFBQyxFQUFFQyxTQUFTLEVBQUU7O0lBQ3hELE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHWCwrQ0FBUUEsQ0FBUztJQUV6Q0MsZ0RBQVNBLENBQUM7UUFDTixNQUFNVyxnQkFBZ0IsQ0FBQ0M7WUFDbkIsSUFBSUEsRUFBRUMsUUFBUSxJQUFJRCxFQUFFRSxHQUFHLElBQUksU0FBUztnQkFDaENDLFFBQVFDLEdBQUcsQ0FBQztnQkFDWkM7WUFDSjtRQUNKO1FBRUFDLE9BQU9DLGdCQUFnQixDQUFDLFdBQVdSO1FBQ25DLE9BQU87WUFBUU8sT0FBT0UsbUJBQW1CLENBQUMsV0FBV1Q7UUFBZTtJQUN4RSxHQUFHLEVBQUU7SUFFTCxNQUFNTSxVQUFVO1FBQ1osSUFBSTtZQUNBLElBQUlJLGlCQUFpQjtnQkFDakJDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ0wsZ0JBQWdCO2dCQUNwQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUFFakIsTUFBTUE7Z0JBQUs7WUFDdEM7WUFDQSxJQUFJa0IsV0FBVyxNQUFNQyxNQUFNLEdBQXVCLE9BQXBCeEIsc0JBQXVCaUI7WUFDckQsSUFBSVEsT0FBTyxNQUFNRixTQUFTRyxJQUFJO1lBQzlCLElBQUlELFFBQVFBLEtBQUtFLE1BQU0sRUFBRTtnQkFDckJ2QixVQUFVcUIsS0FBS0UsTUFBTTtZQUN6QjtRQUNKLEVBQUUsT0FBT0MsT0FBTztZQUNaakIsUUFBUUMsR0FBRyxDQUFDZ0I7UUFDaEI7SUFDSjtJQUdBLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNDO29CQUFPRCxXQUFVO29CQUEyQkUsU0FBU25COzhCQUFTOzs7Ozs7Ozs7OzswQkFJbkUsOERBQUNoQiw2REFBVUE7Z0JBQ1BpQyxXQUFVO2dCQUNWRyxPQUFPNUI7Z0JBQ1A2QixVQUFVNUI7Z0JBQ1Y2QixZQUFZO29CQUFDckMsK0RBQU1BO2lCQUFHO2dCQUN0QnNDLFFBQU87Z0JBQ1BDLE9BQU90Qyw0REFBSUE7Z0JBQ1h1QyxZQUFZO29CQUNSQyxhQUFhO29CQUNiQyx5QkFBeUI7b0JBQ3pCQyxTQUFTO2dCQUNiOzs7Ozs7Ozs7Ozs7QUFJaEI7R0F6RE10QztLQUFBQTtBQTBETiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvY29kZUVkaXRvci50c3g/ZjM5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2UgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb2RlTWlycm9yIGZyb20gJ0B1aXcvcmVhY3QtY29kZW1pcnJvcic7XG5pbXBvcnQgeyBweXRob24gfSBmcm9tIFwiQGNvZGVtaXJyb3IvbGFuZy1weXRob25cIjtcbi8vIGltcG9ydCB7IHZzY29kZURhcmsgfSBmcm9tICdAdWl3L2NvZGVtaXJyb3ItdGhlbWUtdnNjb2RlJztcbmltcG9ydCB7IG5vcmQgfSBmcm9tICdAdWl3L2NvZGVtaXJyb3ItdGhlbWUtbm9yZCc7XG5pbXBvcnQgXCIuLi9zdHlsZXMvY29kZUVkaXRvci5jc3NcIlxuXG5jb25zdCBORVhUX1BVQkxJQ19BUElfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTFxuXG5pbnRlcmZhY2UgQ29kZUVkaXRvclByb3BzIHtcbiAgICBzZXRPdXRwdXQ6IChjb2RlOiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmNvbnN0IENvZGVFZGl0b3I6IFJlYWN0LkZDPENvZGVFZGl0b3JQcm9wcz4gPSAoeyBzZXRPdXRwdXQgfSkgPT4ge1xuICAgIGNvbnN0IFtjb2RlLCBzZXRDb2RlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChlLnNoaWZ0S2V5ICYmIGUua2V5ID09ICdFbnRlcicpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImtzc2RzZHNcIilcbiAgICAgICAgICAgICAgICBydW5Db2RlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleURvd24pO1xuICAgICAgICByZXR1cm4gKCkgPT4geyB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleURvd24pIH1cbiAgICB9LCBbXSlcblxuICAgIGNvbnN0IHJ1bkNvZGUgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjb2RlOiBjb2RlIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtORVhUX1BVQkxJQ19BUElfVVJMfWAsIHJlcXVlc3RPcHRpb25zKTtcbiAgICAgICAgICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLm91dHB1dCkge1xuICAgICAgICAgICAgICAgIHNldE91dHB1dChkYXRhLm91dHB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29kZS1lZGl0b3ItY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRvci1uYXZiYXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzdWJtaXQtYnV0dG9uIHJ1bi1idXR0b25cIiBvbkNsaWNrPXtydW5Db2RlfT5cbiAgICAgICAgICAgICAgICAgICAgUnVuXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlTWlycm9yXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZWRpdG9yXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Y29kZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0Q29kZX1cbiAgICAgICAgICAgICAgICBleHRlbnNpb25zPXtbcHl0aG9uKCldfVxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgIHRoZW1lPXtub3JkfVxuICAgICAgICAgICAgICAgIGJhc2ljU2V0dXA9e3tcbiAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcnM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFsbG93TXVsdGlwbGVTZWxlY3Rpb25zOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0YWJTaXplOiA2LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5leHBvcnQgZGVmYXVsdCBDb2RlRWRpdG9yO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDb2RlTWlycm9yIiwicHl0aG9uIiwibm9yZCIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiQ29kZUVkaXRvciIsInNldE91dHB1dCIsImNvZGUiLCJzZXRDb2RlIiwiaGFuZGxlS2V5RG93biIsImUiLCJzaGlmdEtleSIsImtleSIsImNvbnNvbGUiLCJsb2ciLCJydW5Db2RlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZXF1ZXN0T3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsIm91dHB1dCIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsInZhbHVlIiwib25DaGFuZ2UiLCJleHRlbnNpb25zIiwiaGVpZ2h0IiwidGhlbWUiLCJiYXNpY1NldHVwIiwibGluZU51bWJlcnMiLCJhbGxvd011bHRpcGxlU2VsZWN0aW9ucyIsInRhYlNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/codeEditor.tsx\n"));

/***/ })

});