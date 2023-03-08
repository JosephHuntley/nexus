"use strict";
exports.id = 239;
exports.ids = [239];
exports.modules = {

/***/ 9239:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$s": () => (/* binding */ InnerBox),
/* harmony export */   "Dx": () => (/* binding */ Title),
/* harmony export */   "Xi": () => (/* binding */ TitleSecondary),
/* harmony export */   "Z0": () => (/* binding */ Separator),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "xv": () => (/* binding */ Text)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_normalize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4535);
/* harmony import */ var styled_normalize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_normalize__WEBPACK_IMPORTED_MODULE_1__);


const GlobalStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)(["", ";*{box-sizing:border-box;margin:0;padding:0;}html{font-size:62.5%;scroll-behavior:smooth;}body{font-family:", ";font-size:1.6rem;background:", ";color:", ";cursor:default;}h1,h2,h3,h4,h5,h6,button{font-family:", ";}a{text-decoration:none;}li{list-style:none;}"], styled_normalize__WEBPACK_IMPORTED_MODULE_1__.normalize, props => props.theme.fonts.main, props => props.theme.colors.bg_secondary, props => props.theme.colors.text_primary, props => props.theme.fonts.title);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalStyles);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h2.withConfig({
  displayName: "globals__Title",
  componentId: "sc-pe57z5-0"
})(["font-size:26px;font-weight:bold;color:", ";line-height:39px;"], props => props.theme.colors.text_primary);
const TitleSecondary = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h2.withConfig({
  displayName: "globals__TitleSecondary",
  componentId: "sc-pe57z5-1"
})(["font-size:20px;font-style:normal;font-weight:375;color:", ";"], props => props.theme.colors.text_secondary);
const Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "globals__Text",
  componentId: "sc-pe57z5-2"
})(["font-size:15px;font-weight:600;color:", ";line-height:24px;"], props => props.theme.colors.text_secondary);
const Separator = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "globals__Separator",
  componentId: "sc-pe57z5-3"
})(["border:0.5px solid ", ";margin:0 10px;"], props => props.theme.colors.text_secondary);
const InnerBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "globals__InnerBox",
  componentId: "sc-pe57z5-4"
})(["width:100%;height:", ";display:flex;flex-direction:", ";justify-content:center;align-items:center;gap:", ";@media ", "{gap:", ";}"], props => props.height, props => props.direction, props => props.gap, props => props.theme.breakpoints.md, props => props.md_gap);

/***/ })

};
;