"use strict";
exports.id = 369;
exports.ids = [369];
exports.modules = {

/***/ 369:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Box_Box)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/Box/BoxStyles.ts

const Container = external_styled_components_default().div.withConfig({
  displayName: "BoxStyles__Container",
  componentId: "sc-1ftzha6-0"
})(["border:1px solid ", ";background:", ";border-radius:", ";overflow:auto;white-space:nowrap;width:", ";height:", ";box-shadow:", ";&:hover{box-shadow:none;}@media ", "{width:", ";height:", ";}"], props => props.theme.colors.text_secondary, props => props.theme.colors.bg_white, props => props.radius, props => props.width, props => props.height, props => props.isShadow ? props.theme.colors.bg_white === '#fff' ? '0px 4px 4px rgba(0, 0, 0, 0.25)' : 'none' : 'none', props => props.theme.breakpoints.md, props => props.md_width, props => props.md_height);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Box/Box.tsx




function Box({
  children,
  width = '328px',
  height = '237px',
  isShadow = true,
  radius = '40px',
  md_height = 'inherit',
  md_width = '0px'
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(Container, {
    width: width,
    height: height,
    isShadow: isShadow,
    radius: radius,
    md_height: md_height,
    md_width: md_width,
    children: children
  });
}

/* harmony default export */ const Box_Box = (Box);

/***/ })

};
;