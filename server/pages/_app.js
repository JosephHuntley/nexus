"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ useDarkMode)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useDarkMode = () => {
  const {
    0: theme,
    1: setTheme
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('light');

  const setMode = mode => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    theme === 'light' ? setMode('dark') : setMode('light');
    window.location.reload();
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);
  return [theme, themeToggler];
};

/***/ }),

/***/ 2071:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
// EXTERNAL MODULE: ./src/customHooks/useDarkMode.tsx
var useDarkMode = __webpack_require__(2042);
;// CONCATENATED MODULE: ./src/themes/default.js
const theme = {
  // Temp fonts
  fonts: {
    title: 'Poppins, sans-serif',
    main: 'Poppins, sans-serif'
  },
  // Colors for layout
  colors: {
    bg_primary: '#5A57FF',
    bg_secondary: '#FAF9FF',
    bg_white: '#fff',
    text_primary: '#353535',
    text_secondary: '#888888',
    side_links: '#cccccc'
  },
  // Breakpoints for responsive design
  breakpoints: {
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (max-width: 1280px)'
  }
};
/* harmony default export */ const themes_default = (theme);
;// CONCATENATED MODULE: ./src/themes/darkMode.js
const darkMode_theme = {
  // Temp fonts
  fonts: {
    title: 'Poppins, sans-serif',
    main: 'Poppins, sans-serif'
  },
  // Colors for layout
  colors: {
    bg_primary: '#5A57FF',
    bg_secondary: '#353535',
    bg_white: '#555',
    text_primary: '#fff',
    text_secondary: '#FAF9FF',
    side_links: '#cccccc'
  },
  // Breakpoints for responsive design
  breakpoints: {
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (max-width: 1280px)'
  }
};
/* harmony default export */ const darkMode = (darkMode_theme);
// EXTERNAL MODULE: ./src/styles/globals.ts
var globals = __webpack_require__(9239);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/styles/Theme.tsx








const Theme = ({
  children
}) => {
  const [theme, themeToggler] = (0,useDarkMode/* useDarkMode */.v)();
  const themeMode = theme === 'light' ? themes_default : darkMode;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_styled_components_.ThemeProvider, {
    theme: themeMode,
    children: [/*#__PURE__*/jsx_runtime_.jsx(globals/* default */.ZP, {}), children]
  });
};

/* harmony default export */ const styles_Theme = (Theme);
;// CONCATENATED MODULE: ./src/pages/_app.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function App({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(styles_Theme, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
  });
}

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 4535:
/***/ ((module) => {

module.exports = require("styled-normalize");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [239], () => (__webpack_exec__(2071)));
module.exports = __webpack_exports__;

})();