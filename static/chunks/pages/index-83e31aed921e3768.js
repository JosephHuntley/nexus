(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7285:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var i=(0,n(2648).Z)(n(7294)).default.createContext({});t.AmpStateContext=i},354:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=e.hybrid,i=e.hasQuery;return void 0!==t&&t||void 0!==n&&n&&void 0!==i&&i}},6505:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=c,t.default=void 0;var i=n(6495).Z,r=n(2648).Z,o=(0,n(1598).Z)(n(7294)),d=r(n(148)),a=n(7285),u=n(523),s=n(354);function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}n(2783);var f=["name","httpEquiv","charSet","itemProp"];function h(e,t){var n,r,d,a,u=t.inAmpMode;return e.reduce(l,[]).reverse().concat(c(u).reverse()).filter((n=new Set,r=new Set,d=new Set,a={},function(e){var t=!0,i=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){i=!0;var o=e.key.slice(e.key.indexOf("$")+1);n.has(o)?t=!1:n.add(o)}switch(e.type){case"title":case"base":r.has(e.type)?t=!1:r.add(e.type);break;case"meta":for(var u=0,s=f.length;u<s;u++){var c=f[u];if(e.props.hasOwnProperty(c)){if("charSet"===c)d.has(c)?t=!1:d.add(c);else{var l=e.props[c],h=a[c]||new Set;("name"!==c||!i)&&h.has(l)?t=!1:(h.add(l),a[c]=h)}}}}return t})).reverse().map(function(e,t){var n=e.key||t;if(!u&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(t){return e.props.href.startsWith(t)})){var r=i({},e.props||{});return r["data-href"]=r.href,r.href=void 0,r["data-optimized-fonts"]=!0,o.default.cloneElement(e,r)}return o.default.cloneElement(e,{key:n})})}t.default=function(e){var t=e.children,n=o.useContext(a.AmpStateContext),i=o.useContext(u.HeadManagerContext);return o.default.createElement(d.default,{reduceComponentsToState:h,headManager:i,inAmpMode:s.isInAmpMode(n)},t)},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},148:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n=e.headManager,a=e.reduceComponentsToState;function u(){if(n&&n.mountedInstances){var t=i.Children.toArray(Array.from(n.mountedInstances).filter(Boolean));n.updateHead(a(t,e))}}return r&&(null==n||null==(t=n.mountedInstances)||t.add(e.children),u()),o(function(){var t;return null==n||null==(t=n.mountedInstances)||t.add(e.children),function(){var t;null==n||null==(t=n.mountedInstances)||t.delete(e.children)}}),o(function(){return n&&(n._pendingUpdate=u),function(){n&&(n._pendingUpdate=u)}}),d(function(){return n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null),function(){n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null)}}),null};var i=(0,n(1598).Z)(n(7294)),r=!1,o=i.useLayoutEffect,d=r?function(){}:i.useEffect},2783:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.warnOnce=void 0,t.warnOnce=function(e){}},369:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}}),n(7294);var i=n(9521).default.div.withConfig({displayName:"BoxStyles__Container",componentId:"sc-1ftzha6-0"})(["border:1px solid ",";background:",";border-radius:",";overflow:auto;white-space:nowrap;width:",";height:",";box-shadow:",";&:hover{box-shadow:none;}@media ","{width:",";height:",";}"],function(e){return e.theme.colors.text_secondary},function(e){return e.theme.colors.bg_white},function(e){return e.radius},function(e){return e.width},function(e){return e.height},function(e){return e.isShadow&&"#fff"===e.theme.colors.bg_white?"0px 4px 4px rgba(0, 0, 0, 0.25)":"none"},function(e){return e.theme.breakpoints.md},function(e){return e.md_width},function(e){return e.md_height}),r=n(5893),o=function(e){var t=e.children,n=e.width,o=e.height,d=e.isShadow,a=e.radius,u=e.md_height,s=e.md_width;return(0,r.jsx)(i,{width:void 0===n?"328px":n,height:void 0===o?"237px":o,isShadow:void 0===d||d,radius:void 0===a?"40px":a,md_height:void 0===u?"inherit":u,md_width:void 0===s?"0px":s,children:t})}},2940:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}}),n(7294);var i=n(9521).default.button.withConfig({displayName:"ButtonStyles__MainButton",componentId:"sc-sq0y54-0"})(["width:125px;height:29px;background-color:",";color:#fff;box-shadow:",";border-radius:3px;border:none;cursor:pointer;"],function(e){return e.theme.colors.bg_primary},function(e){return"#fff"===e.theme.colors.bg_white?"0px 4px 4px rgba(0, 0, 0, 0.25)":"none"}),r=n(5893),o=function(e){var t=e.click,n=e.children;return(0,r.jsx)(i,{onClick:void 0===t?function(){}:t,children:n})}},2419:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var i=n(7294),r=n(9008),o=n.n(r),d=n(9521),a=d.default.main.withConfig({displayName:"indexStyles__Main",componentId:"sc-1orrdjm-0"})(["height:100%;width:100%;display:flex;flex-direction:row;@media ","{flex-direction:column;}"],function(e){return e.theme.breakpoints.md}),u=d.default.section.withConfig({displayName:"indexStyles__LeftSide",componentId:"sc-1orrdjm-1"})(["background-color:",";height:100vh;width:50vw;display:flex;justify-content:center;align-items:center;padding:0 77px;@media ","{width:100vw;height:90vh;padding:0 45px;}"],function(e){return e.theme.colors.bg_primary},function(e){return e.theme.breakpoints.md}),s=d.default.h1.withConfig({displayName:"indexStyles__Text",componentId:"sc-1orrdjm-2"})(["font-family:'Poppins';font-style:normal;font-weight:800;font-size:40px;line-height:60px;display:flex;align-items:center;text-align:center;color:#ffffff;text-shadow:0px 4px 4px rgba(0,0,0,0.25);@media ","{font-size:35px;}"],function(e){return e.theme.breakpoints.md}),c=d.default.section.withConfig({displayName:"indexStyles__RightSide",componentId:"sc-1orrdjm-3"})(["background-color:",";height:100vh;width:50vw;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:84px;@media ","{width:100vw;height:90vh;padding:0 45px;}"],function(e){return e.theme.colors.bg_secondary},function(e){return e.theme.breakpoints.md}),l=d.default.h1.withConfig({displayName:"indexStyles__Title",componentId:"sc-1orrdjm-4"})(["color:",";font-weight:600;font-size:32px;line-height:48px;display:flex;align-items:center;text-align:center;"],function(e){return e.theme.colors.text_primary}),f=d.default.div.withConfig({displayName:"indexStyles__Field",componentId:"sc-1orrdjm-5"})(["display:flex;flex-direction:row;gap:30px;@media ","{flex-direction:column;gap:10px;}"],function(e){return e.theme.breakpoints.md}),h=d.default.label.withConfig({displayName:"indexStyles__Label",componentId:"sc-1orrdjm-6"})(["color:",";font-weight:600;font-size:26px;line-height:39px;@media ","{text-align:center;}"],function(e){return e.theme.colors.text_primary},function(e){return e.theme.breakpoints.md}),p=d.default.input.withConfig({displayName:"indexStyles__Input",componentId:"sc-1orrdjm-7"})(["width:284px;height:50px;font-size:24px;padding:0 10px;background:#ffffff;border:1px solid ",";box-shadow:0px 4px 4px rgba(0,0,0,0.25);border-radius:3px;"],function(e){return e.theme.colors.text_secondary}),m=n(369),x=n(9239),g=n(2940),v=n(1163),w=n(5893);function y(){var e=(0,i.useState)(""),t=e[0],n=e[1],r=(0,i.useState)(""),d=r[0],y=r[1],_=(0,i.useState)(""),b=_[0],j=_[1],S=(0,i.useState)(""),k=S[0],C=S[1],I=(0,i.useState)(""),M=I[0],N=I[1],E=(0,i.useState)(""),O=E[0],P=E[1],T=(0,v.useRouter)();return(0,i.useEffect)(function(){"Welcome to"!=t?setTimeout(function(){return n("Welcome to".slice(0,t.length+1))},200):"Nexus    "!==d?setTimeout(function(){return y("Nexus    ".slice(0,d.length+1))},200):"The Innovative"!==b?setTimeout(function(){return j("The Innovative".slice(0,b.length+1))},200):"Human Resource Management System"!==k&&setTimeout(function(){return C("Human Resource Management System".slice(0,k.length+1))},200)},[t,d,b,k]),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(o(),{children:[(0,w.jsx)("title",{children:"Login"}),(0,w.jsx)("meta",{name:"description",content:"HRIS Nexus Authentication Page"}),(0,w.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,w.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,w.jsxs)(a,{children:[(0,w.jsx)(u,{children:(0,w.jsxs)(s,{children:[t,(0,w.jsx)("br",{}),d,(0,w.jsx)("br",{}),(0,w.jsx)("br",{}),b,(0,w.jsx)("br",{}),k]})}),(0,w.jsxs)(c,{children:[(0,w.jsx)(l,{children:"Login"}),(0,w.jsx)(m.Z,{radius:"10px",width:"40vw",height:"335px",md_height:"335px",md_width:"80vw",children:(0,w.jsxs)(x.$s,{direction:"column",height:"100%",gap:"50px",md_gap:"25px",children:[(0,w.jsxs)(f,{children:[(0,w.jsx)(h,{htmlFor:"username",children:"Username:"}),(0,w.jsx)(p,{type:"email",name:"username",value:M,onChange:function(e){return N(e.target.value)}})]}),(0,w.jsxs)(f,{children:[(0,w.jsx)(h,{htmlFor:"password",children:"Password:"}),(0,w.jsx)(p,{type:"password",name:"password",value:O,onChange:function(e){return P(e.target.value)}})]}),(0,w.jsx)(g.Z,{click:function(){T.push("/dashboard")},children:"Submit"})]})})]})]})]})}},8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2419)}])},9008:function(e,t,n){e.exports=n(6505)},1163:function(e,t,n){e.exports=n(1587)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);