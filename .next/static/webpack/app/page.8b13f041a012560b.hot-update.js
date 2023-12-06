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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _uiw_react_codemirror__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uiw/react-codemirror */ \"(app-pages-browser)/./node_modules/@uiw/react-codemirror/esm/index.js\");\n/* harmony import */ var _resources_contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resources/contexts */ \"(app-pages-browser)/./src/app/resources/contexts.tsx\");\n/* harmony import */ var _codemirror_lang_python__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @codemirror/lang-python */ \"(app-pages-browser)/./node_modules/@codemirror/lang-python/dist/index.js\");\n/* harmony import */ var _resources_themes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../resources/themes */ \"(app-pages-browser)/./src/app/resources/themes.tsx\");\n/* harmony import */ var _styles_codeEditor_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/codeEditor.css */ \"(app-pages-browser)/./src/app/styles/codeEditor.css\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst NEXT_PUBLIC_API_URL = \"http://localhost:8000/\";\nconst CodeEditor = (param)=>{\n    let { setOutput } = param;\n    _s();\n    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { value: isMinimal } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_resources_contexts__WEBPACK_IMPORTED_MODULE_3__.MinimalContext);\n    const { value: theme } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_resources_contexts__WEBPACK_IMPORTED_MODULE_3__.ThemeContext);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(theme);\n    }, []);\n    const runCode = async ()=>{\n        try {\n            setOutput(\"\");\n            let requestOptions = {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    code: code\n                })\n            };\n            let response = await fetch(\"\".concat(NEXT_PUBLIC_API_URL), requestOptions);\n            let data = await response.json();\n            if (data && data.output) {\n                setOutput(data.output);\n            }\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const runCodeCommand = (view)=>{\n        runCode();\n        return true;\n    };\n    const customKeymap = _uiw_react_codemirror__WEBPACK_IMPORTED_MODULE_2__.keymap.of([\n        {\n            key: \"Shift-Enter\",\n            run: runCodeCommand,\n            preventDefault: true\n        }\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"code-editor-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(isMinimal ? \"hidden\" : \"visible\", \" editor-navbar-container\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"submit-button run-button\",\n                    onClick: runCode,\n                    children: \"Run\"\n                }, void 0, false, {\n                    fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/codeEditor.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/codeEditor.tsx\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uiw_react_codemirror__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                className: \"editor\",\n                value: code,\n                onChange: setCode,\n                extensions: [\n                    (0,_codemirror_lang_python__WEBPACK_IMPORTED_MODULE_6__.python)(),\n                    customKeymap\n                ],\n                height: \"100%\",\n                theme: _resources_themes__WEBPACK_IMPORTED_MODULE_4__[\"default\"][theme],\n                basicSetup: {\n                    lineNumbers: true,\n                    allowMultipleSelections: true,\n                    tabSize: 5\n                }\n            }, void 0, false, {\n                fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/codeEditor.tsx\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/codeEditor.tsx\",\n        lineNumber: 58,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CodeEditor, \"zfbAH6FUulkMXviUbafvZjOvFM8=\");\n_c = CodeEditor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CodeEditor);\nvar _c;\n$RefreshReg$(_c, \"CodeEditor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9jb2RlRWRpdG9yLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF1RTtBQUNTO0FBQ1g7QUFDcEI7QUFDTjtBQUNWO0FBRWpDLE1BQU1VLHNCQUFzQkMsd0JBQStCO0FBTzNELE1BQU1FLGFBQXdDO1FBQUMsRUFBRUMsU0FBUyxFQUFFOztJQUN4RCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR2YsK0NBQVFBLENBQVM7SUFDekMsTUFBTSxFQUFFZ0IsT0FBT0MsU0FBUyxFQUFFLEdBQUdmLGlEQUFVQSxDQUFDRywrREFBY0E7SUFDdEQsTUFBTSxFQUFFVyxPQUFPRSxLQUFLLEVBQUUsR0FBR2hCLGlEQUFVQSxDQUFDSSw2REFBWUE7SUFFaERMLGdEQUFTQSxDQUFDO1FBQ05rQixRQUFRQyxHQUFHLENBQUNGO0lBQ2hCLEdBQUcsRUFBRTtJQUVMLE1BQU1HLFVBQVU7UUFDWixJQUFJO1lBQ0FSLFVBQVU7WUFDVixJQUFJUyxpQkFBaUI7Z0JBQ2pCQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNMLGdCQUFnQjtnQkFDcEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBRWIsTUFBTUE7Z0JBQUs7WUFDdEM7WUFDQSxJQUFJYyxXQUFXLE1BQU1DLE1BQU0sR0FBdUIsT0FBcEJwQixzQkFBdUJhO1lBQ3JELElBQUlRLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtZQUM5QixJQUFJRCxRQUFRQSxLQUFLRSxNQUFNLEVBQUU7Z0JBQ3JCbkIsVUFBVWlCLEtBQUtFLE1BQU07WUFDekI7UUFDSixFQUFFLE9BQU9DLE9BQU87WUFDWmQsUUFBUUMsR0FBRyxDQUFDYTtRQUNoQjtJQUNKO0lBRUEsTUFBTUMsaUJBQTBCLENBQUNDO1FBQzdCZDtRQUNBLE9BQU87SUFDWDtJQUVBLE1BQU1lLGVBQWVoQyx5REFBTUEsQ0FBQ2lDLEVBQUUsQ0FBQztRQUFDO1lBQzVCQyxLQUFLO1lBQ0xDLEtBQUtMO1lBQ0xNLGdCQUFnQjtRQUNwQjtLQUFFO0lBSUYscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVyxHQUFvQyxPQUFqQ3pCLFlBQVksV0FBVyxXQUFVOzBCQUNoRCw0RUFBQzBCO29CQUFPRCxXQUFVO29CQUEyQkUsU0FBU3ZCOzhCQUFTOzs7Ozs7Ozs7OzswQkFJbkUsOERBQUNsQiw2REFBVUE7Z0JBQ1B1QyxXQUFVO2dCQUNWMUIsT0FBT0Y7Z0JBQ1ArQixVQUFVOUI7Z0JBQ1YrQixZQUFZO29CQUFDdkMsK0RBQU1BO29CQUFJNkI7aUJBQWE7Z0JBQ3BDVyxRQUFPO2dCQUNQN0IsT0FBT1YseURBQVEsQ0FBQ1UsTUFBTTtnQkFDdEI4QixZQUFZO29CQUNSQyxhQUFhO29CQUNiQyx5QkFBeUI7b0JBQ3pCQyxTQUFTO2dCQUNiOzs7Ozs7Ozs7Ozs7QUFJaEI7R0FoRU12QztLQUFBQTtBQWlFTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvY29kZUVkaXRvci50c3g/ZjM5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29kZU1pcnJvciwgeyBrZXltYXAsIENvbW1hbmQsIEVkaXRvclZpZXcgfSBmcm9tICdAdWl3L3JlYWN0LWNvZGVtaXJyb3InO1xuaW1wb3J0IHsgTWluaW1hbENvbnRleHQsIFRoZW1lQ29udGV4dCB9IGZyb20gXCIuLi9yZXNvdXJjZXMvY29udGV4dHNcIjtcbmltcG9ydCB7IHB5dGhvbiB9IGZyb20gXCJAY29kZW1pcnJvci9sYW5nLXB5dGhvblwiO1xuaW1wb3J0IFRoZW1lTWFwIGZyb20gXCIuLi9yZXNvdXJjZXMvdGhlbWVzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvY29kZUVkaXRvci5jc3NcIlxuXG5jb25zdCBORVhUX1BVQkxJQ19BUElfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTFxuXG5pbnRlcmZhY2UgQ29kZUVkaXRvclByb3BzIHtcbiAgICBzZXRPdXRwdXQ6IChjb2RlOiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cblxuY29uc3QgQ29kZUVkaXRvcjogUmVhY3QuRkM8Q29kZUVkaXRvclByb3BzPiA9ICh7IHNldE91dHB1dCB9KSA9PiB7XG4gICAgY29uc3QgW2NvZGUsIHNldENvZGVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgICBjb25zdCB7IHZhbHVlOiBpc01pbmltYWwgfSA9IHVzZUNvbnRleHQoTWluaW1hbENvbnRleHQpO1xuICAgIGNvbnN0IHsgdmFsdWU6IHRoZW1lIH0gPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGVtZSlcbiAgICB9LCBbXSlcblxuICAgIGNvbnN0IHJ1bkNvZGUgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXRPdXRwdXQoXCJcIik7XG4gICAgICAgICAgICBsZXQgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjb2RlOiBjb2RlIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtORVhUX1BVQkxJQ19BUElfVVJMfWAsIHJlcXVlc3RPcHRpb25zKTtcbiAgICAgICAgICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLm91dHB1dCkge1xuICAgICAgICAgICAgICAgIHNldE91dHB1dChkYXRhLm91dHB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBydW5Db2RlQ29tbWFuZDogQ29tbWFuZCA9ICh2aWV3OiBFZGl0b3JWaWV3KSA9PiB7XG4gICAgICAgIHJ1bkNvZGUoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxuICAgIGNvbnN0IGN1c3RvbUtleW1hcCA9IGtleW1hcC5vZihbe1xuICAgICAgICBrZXk6IFwiU2hpZnQtRW50ZXJcIixcbiAgICAgICAgcnVuOiBydW5Db2RlQ29tbWFuZCxcbiAgICAgICAgcHJldmVudERlZmF1bHQ6IHRydWUsXG4gICAgfV0pO1xuXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29kZS1lZGl0b3ItY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7aXNNaW5pbWFsID8gJ2hpZGRlbicgOiAndmlzaWJsZSd9IGVkaXRvci1uYXZiYXItY29udGFpbmVyYH0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzdWJtaXQtYnV0dG9uIHJ1bi1idXR0b25cIiBvbkNsaWNrPXtydW5Db2RlfT5cbiAgICAgICAgICAgICAgICAgICAgUnVuXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlTWlycm9yXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZWRpdG9yXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Y29kZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0Q29kZX1cbiAgICAgICAgICAgICAgICBleHRlbnNpb25zPXtbcHl0aG9uKCksIGN1c3RvbUtleW1hcF19XG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgdGhlbWU9e1RoZW1lTWFwW3RoZW1lXX1cbiAgICAgICAgICAgICAgICBiYXNpY1NldHVwPXt7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXJzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhbGxvd011bHRpcGxlU2VsZWN0aW9uczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGFiU2l6ZTogNSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgQ29kZUVkaXRvcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsIkNvZGVNaXJyb3IiLCJrZXltYXAiLCJNaW5pbWFsQ29udGV4dCIsIlRoZW1lQ29udGV4dCIsInB5dGhvbiIsIlRoZW1lTWFwIiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJDb2RlRWRpdG9yIiwic2V0T3V0cHV0IiwiY29kZSIsInNldENvZGUiLCJ2YWx1ZSIsImlzTWluaW1hbCIsInRoZW1lIiwiY29uc29sZSIsImxvZyIsInJ1bkNvZGUiLCJyZXF1ZXN0T3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsIm91dHB1dCIsImVycm9yIiwicnVuQ29kZUNvbW1hbmQiLCJ2aWV3IiwiY3VzdG9tS2V5bWFwIiwib2YiLCJrZXkiLCJydW4iLCJwcmV2ZW50RGVmYXVsdCIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJvbkNoYW5nZSIsImV4dGVuc2lvbnMiLCJoZWlnaHQiLCJiYXNpY1NldHVwIiwibGluZU51bWJlcnMiLCJhbGxvd011bHRpcGxlU2VsZWN0aW9ucyIsInRhYlNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/codeEditor.tsx\n"));

/***/ })

});