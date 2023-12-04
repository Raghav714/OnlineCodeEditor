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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _uiw_react_codemirror__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uiw/react-codemirror */ \"(app-pages-browser)/./node_modules/@uiw/react-codemirror/esm/index.js\");\n/* harmony import */ var _codemirror_lang_python__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @codemirror/lang-python */ \"(app-pages-browser)/./node_modules/@codemirror/lang-python/dist/index.js\");\n/* harmony import */ var _uiw_codemirror_theme_nord__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uiw/codemirror-theme-nord */ \"(app-pages-browser)/./node_modules/@uiw/codemirror-theme-nord/esm/index.js\");\n/* harmony import */ var _styles_codeEditor_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/codeEditor.css */ \"(app-pages-browser)/./src/app/styles/codeEditor.css\");\n\nvar _s = $RefreshSig$();\n\n\n\n// import { vscodeDark } from '@uiw/codemirror-theme-vscode';\n\n\nconst NEXT_PUBLIC_API_URL = \"http://localhost:8000/\";\nconst CodeEditor = (param)=>{\n    let { setOutput } = param;\n    _s();\n    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleKeyDown = async (e)=>{\n            if (e.shiftKey && e.key == \"Enter\") {\n                runCode();\n            }\n        };\n        window.addEventListener(\"keydown\", handleKeyDown);\n        return ()=>{\n            window.removeEventListener(\"keydown\", handleKeyDown);\n        };\n    }, []);\n    const runCode = async ()=>{\n        console.log(\"dksdsdsdskdl\");\n        try {\n            let requestOptions = {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    code: code\n                })\n            };\n            let response = await fetch(\"\".concat(NEXT_PUBLIC_API_URL), requestOptions);\n            let data = await response.json();\n            if (data && data.output) {\n                setOutput(data.output);\n            }\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"code-editor-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"editor-navbar-container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"submit-button run-button\",\n                    onClick: runCode,\n                    children: \"Run\"\n                }, void 0, false, {\n                    fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/codeEditor.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/codeEditor.tsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uiw_react_codemirror__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                className: \"editor\",\n                value: code,\n                onChange: setCode,\n                extensions: [\n                    (0,_codemirror_lang_python__WEBPACK_IMPORTED_MODULE_5__.python)()\n                ],\n                height: \"100%\",\n                theme: _uiw_codemirror_theme_nord__WEBPACK_IMPORTED_MODULE_3__.nord,\n                basicSetup: {\n                    lineNumbers: true,\n                    allowMultipleSelections: true,\n                    tabSize: 6\n                }\n            }, void 0, false, {\n                fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/codeEditor.tsx\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/codeEditor.tsx\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CodeEditor, \"FE42fR7c//TxniZM6R7Q0xMAMis=\");\n_c = CodeEditor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CodeEditor);\nvar _c;\n$RefreshReg$(_c, \"CodeEditor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9jb2RlRWRpdG9yLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWdFO0FBQ2pCO0FBQ0U7QUFDakQsNkRBQTZEO0FBQ1g7QUFDakI7QUFFakMsTUFBTU0sc0JBQXNCQyx3QkFBK0I7QUFNM0QsTUFBTUUsYUFBd0M7UUFBQyxFQUFFQyxTQUFTLEVBQUU7O0lBQ3hELE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHWCwrQ0FBUUEsQ0FBUztJQUV6Q0MsZ0RBQVNBLENBQUM7UUFDTixNQUFNVyxnQkFBZ0IsT0FBT0M7WUFDekIsSUFBSUEsRUFBRUMsUUFBUSxJQUFJRCxFQUFFRSxHQUFHLElBQUksU0FBUztnQkFDaENDO1lBQ0o7UUFDSjtRQUVBQyxPQUFPQyxnQkFBZ0IsQ0FBQyxXQUFXTjtRQUNuQyxPQUFPO1lBQVFLLE9BQU9FLG1CQUFtQixDQUFDLFdBQVdQO1FBQWU7SUFDeEUsR0FBRyxFQUFFO0lBRUwsTUFBTUksVUFBVTtRQUNaSSxRQUFRQyxHQUFHLENBQUM7UUFDWixJQUFJO1lBQ0EsSUFBSUMsaUJBQWlCO2dCQUNqQkMsUUFBUTtnQkFDUkMsU0FBUztvQkFDTCxnQkFBZ0I7Z0JBQ3BCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUVqQixNQUFNQTtnQkFBSztZQUN0QztZQUNBLElBQUlrQixXQUFXLE1BQU1DLE1BQU0sR0FBdUIsT0FBcEJ4QixzQkFBdUJpQjtZQUNyRCxJQUFJUSxPQUFPLE1BQU1GLFNBQVNHLElBQUk7WUFDOUIsSUFBSUQsUUFBUUEsS0FBS0UsTUFBTSxFQUFFO2dCQUNyQnZCLFVBQVVxQixLQUFLRSxNQUFNO1lBQ3pCO1FBQ0osRUFBRSxPQUFPQyxPQUFPO1lBQ1piLFFBQVFDLEdBQUcsQ0FBQ1k7UUFDaEI7SUFDSjtJQUdBLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNDO29CQUFPRCxXQUFVO29CQUEyQkUsU0FBU3JCOzhCQUFTOzs7Ozs7Ozs7OzswQkFJbkUsOERBQUNkLDZEQUFVQTtnQkFDUGlDLFdBQVU7Z0JBQ1ZHLE9BQU81QjtnQkFDUDZCLFVBQVU1QjtnQkFDVjZCLFlBQVk7b0JBQUNyQywrREFBTUE7aUJBQUc7Z0JBQ3RCc0MsUUFBTztnQkFDUEMsT0FBT3RDLDREQUFJQTtnQkFDWHVDLFlBQVk7b0JBQ1JDLGFBQWE7b0JBQ2JDLHlCQUF5QjtvQkFDekJDLFNBQVM7Z0JBQ2I7Ozs7Ozs7Ozs7OztBQUloQjtHQXpETXRDO0tBQUFBO0FBMEROLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9jb2RlRWRpdG9yLnRzeD9mMzllIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvZGVNaXJyb3IgZnJvbSAnQHVpdy9yZWFjdC1jb2RlbWlycm9yJztcbmltcG9ydCB7IHB5dGhvbiB9IGZyb20gXCJAY29kZW1pcnJvci9sYW5nLXB5dGhvblwiO1xuLy8gaW1wb3J0IHsgdnNjb2RlRGFyayB9IGZyb20gJ0B1aXcvY29kZW1pcnJvci10aGVtZS12c2NvZGUnO1xuaW1wb3J0IHsgbm9yZCB9IGZyb20gJ0B1aXcvY29kZW1pcnJvci10aGVtZS1ub3JkJztcbmltcG9ydCBcIi4uL3N0eWxlcy9jb2RlRWRpdG9yLmNzc1wiXG5cbmNvbnN0IE5FWFRfUFVCTElDX0FQSV9VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMXG5cbmludGVyZmFjZSBDb2RlRWRpdG9yUHJvcHMge1xuICAgIHNldE91dHB1dDogKGNvZGU6IHN0cmluZykgPT4gdm9pZDtcbn1cblxuY29uc3QgQ29kZUVkaXRvcjogUmVhY3QuRkM8Q29kZUVkaXRvclByb3BzPiA9ICh7IHNldE91dHB1dCB9KSA9PiB7XG4gICAgY29uc3QgW2NvZGUsIHNldENvZGVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSBhc3luYyAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGUuc2hpZnRLZXkgJiYgZS5rZXkgPT0gJ0VudGVyJykge1xuICAgICAgICAgICAgICAgIHJ1bkNvZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5RG93bik7XG4gICAgICAgIHJldHVybiAoKSA9PiB7IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5RG93bikgfVxuICAgIH0sIFtdKVxuXG4gICAgY29uc3QgcnVuQ29kZSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJka3Nkc2RzZHNrZGxcIilcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNvZGU6IGNvZGUgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke05FWFRfUFVCTElDX0FQSV9VUkx9YCwgcmVxdWVzdE9wdGlvbnMpO1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgICAgICAgIGlmIChkYXRhICYmIGRhdGEub3V0cHV0KSB7XG4gICAgICAgICAgICAgICAgc2V0T3V0cHV0KGRhdGEub3V0cHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2RlLWVkaXRvci1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdG9yLW5hdmJhci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInN1Ym1pdC1idXR0b24gcnVuLWJ1dHRvblwiIG9uQ2xpY2s9e3J1bkNvZGV9PlxuICAgICAgICAgICAgICAgICAgICBSdW5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVNaXJyb3JcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlZGl0b3JcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtjb2RlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRDb2RlfVxuICAgICAgICAgICAgICAgIGV4dGVuc2lvbnM9e1tweXRob24oKV19XG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgdGhlbWU9e25vcmR9XG4gICAgICAgICAgICAgICAgYmFzaWNTZXR1cD17e1xuICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWxsb3dNdWx0aXBsZVNlbGVjdGlvbnM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRhYlNpemU6IDYsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IENvZGVFZGl0b3I7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNvZGVNaXJyb3IiLCJweXRob24iLCJub3JkIiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJDb2RlRWRpdG9yIiwic2V0T3V0cHV0IiwiY29kZSIsInNldENvZGUiLCJoYW5kbGVLZXlEb3duIiwiZSIsInNoaWZ0S2V5Iiwia2V5IiwicnVuQ29kZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsInJlcXVlc3RPcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwib3V0cHV0IiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwidmFsdWUiLCJvbkNoYW5nZSIsImV4dGVuc2lvbnMiLCJoZWlnaHQiLCJ0aGVtZSIsImJhc2ljU2V0dXAiLCJsaW5lTnVtYmVycyIsImFsbG93TXVsdGlwbGVTZWxlY3Rpb25zIiwidGFiU2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/codeEditor.tsx\n"));

/***/ })

});