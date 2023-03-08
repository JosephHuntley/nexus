"use strict";
exports.id = 127;
exports.ids = [127];
exports.modules = {

/***/ 1127:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_Layout)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react-icons"
var external_react_icons_ = __webpack_require__(6698);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/layout/sidebar/SidebarStyles.js





const Section = external_styled_components_default().section.withConfig({
  displayName: "SidebarStyles__Section",
  componentId: "sc-f7j30y-0"
})(["background-color:", ";width:280px;min-height:600px;height:100%;border-radius:0 40px 40px 0;z-index:10;position:absolute;padding-top:64px;padding-bottom:64px;padding-left:86px;display:flex;flex-direction:column;justify-content:space-between;"], props => props.theme.colors.bg_primary);
const Links = external_styled_components_default().div.withConfig({
  displayName: "SidebarStyles__Links",
  componentId: "sc-f7j30y-1"
})(["margin-top:74px;display:flex;flex-direction:column;"]);
const StyledLink = external_styled_components_default()((link_default())).withConfig({
  displayName: "SidebarStyles__StyledLink",
  componentId: "sc-f7j30y-2"
})(["color:", ";font-size:16px;line-height:24px;padding-top:20px;padding-bottom:20px;display:flex;&:active{color:#ffffff;}&:hover{color:#ffffff;}"], props => props.route ? '#ffffff' : props.theme.colors.side_links);
const LogoutButton = external_styled_components_default().button.withConfig({
  displayName: "SidebarStyles__LogoutButton",
  componentId: "sc-f7j30y-3"
})(["color:", ";font-size:16px;line-height:24px;padding-top:20px;padding-bottom:20px;display:flex;background-color:transparent;border:transparent;&:hover{color:#ffffff;cursor:pointer;}"], props => props.theme.colors.side_links);

const MyProvider = ({
  className,
  children
}) => /*#__PURE__*/jsx_runtime_.jsx(external_react_icons_.IconContext.Provider, {
  value: {
    className
  },
  children: children
});

const Icon = external_styled_components_default()(MyProvider).withConfig({
  displayName: "SidebarStyles__Icon",
  componentId: "sc-f7j30y-4"
})(["width:24px;height:24px;margin-right:17px;background-color:", ";align-self:center;"], props => props.theme.colors.bg_primary);
const IconImg = external_styled_components_default()((image_default())).withConfig({
  displayName: "SidebarStyles__IconImg",
  componentId: "sc-f7j30y-5"
})(["width:24px;height:24px;margin-right:17px;background-color:", ";align-self:center;"], props => props.theme.colors.bg_primary);
;// CONCATENATED MODULE: ./src/components/logo/LogoStyles.ts

const Container = external_styled_components_default().div.withConfig({
  displayName: "LogoStyles__Container",
  componentId: "sc-1m4aqj3-0"
})(["display:flex;flex-direction:row;"]);
const LogoImg = external_styled_components_default().div.withConfig({
  displayName: "LogoStyles__LogoImg",
  componentId: "sc-1m4aqj3-1"
})(["border:10px solid #ffffff;width:44px;height:38px;margin-right:16px;"]);
const LogoText = external_styled_components_default().h1.withConfig({
  displayName: "LogoStyles__LogoText",
  componentId: "sc-1m4aqj3-2"
})(["color:", ";font-size:26px;font-weight:bold;line-height:0px;"], props => props.theme.colors.side_links);
;// CONCATENATED MODULE: ./src/components/logo/Logo.tsx





function Logo() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(LogoImg, {}), /*#__PURE__*/jsx_runtime_.jsx(LogoText, {
      children: "Nexus"
    })]
  });
}

/* harmony default export */ const logo_Logo = (Logo);
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(9847);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
// EXTERNAL MODULE: external "react-icons/hi"
var hi_ = __webpack_require__(1111);
// EXTERNAL MODULE: external "react-icons/bi"
var bi_ = __webpack_require__(6652);
// EXTERNAL MODULE: external "react-icons/vsc"
var vsc_ = __webpack_require__(382);
// EXTERNAL MODULE: external "react-icons/io5"
var io5_ = __webpack_require__(9989);
;// CONCATENATED MODULE: ./src/layout/sidebar/Sidebar.jsx













const Sidebar = () => {
  const router = (0,router_.useRouter)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Section, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx(logo_Logo, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Links, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledLink, {
          href: "/dashboard",
          route: router.asPath === '/dashboard',
          children: [/*#__PURE__*/jsx_runtime_.jsx(Icon, {
            className: "",
            children: /*#__PURE__*/jsx_runtime_.jsx(hi_.HiOutlineChartSquareBar, {})
          }), "Dashboard"]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledLink, {
          href: "/pay",
          route: router.asPath === '/pay',
          children: [/*#__PURE__*/jsx_runtime_.jsx(Icon, {
            className: "",
            children: /*#__PURE__*/jsx_runtime_.jsx(fa_.FaRegMoneyBillAlt, {})
          }), "Pay"]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledLink, {
          href: "/benefits",
          route: router.asPath === '/benefits',
          children: [/*#__PURE__*/jsx_runtime_.jsx(Icon, {
            className: "",
            children: /*#__PURE__*/jsx_runtime_.jsx(ai_.AiOutlineHeart, {})
          }), "Benefits"]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledLink, {
          href: "/timesheet",
          route: router.asPath === '/timesheet',
          children: [/*#__PURE__*/jsx_runtime_.jsx(Icon, {
            className: "",
            children: /*#__PURE__*/jsx_runtime_.jsx(bi_.BiSpreadsheet, {})
          }), "Timesheet"]
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Links, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledLink, {
        href: "/settings",
        route: router.asPath === '/settings',
        children: [/*#__PURE__*/jsx_runtime_.jsx(Icon, {
          className: "",
          children: /*#__PURE__*/jsx_runtime_.jsx(vsc_.VscSettings, {})
        }), "Settings"]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(LogoutButton, {
        onChange: () => {},
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Icon, {
          className: "",
          children: [' ', /*#__PURE__*/jsx_runtime_.jsx(io5_.IoExitOutline, {})]
        }), "Sign Out"]
      })]
    })]
  });
};

/* harmony default export */ const sidebar_Sidebar = (Sidebar);
;// CONCATENATED MODULE: ./src/layout/header/HeaderStyles.ts


const Header = external_styled_components_default().header.withConfig({
  displayName: "HeaderStyles__Header",
  componentId: "sc-1apw4v9-0"
})(["width:100%;height:92px;position:absolute;background-color:", ";"], props => props.theme.colors.bg_white);
const HeaderStyles_Container = external_styled_components_default().div.withConfig({
  displayName: "HeaderStyles__Container",
  componentId: "sc-1apw4v9-1"
})(["margin-top:20px;position:absolute;right:118px;display:flex;flex-direction:row;"]);
const Avatar = external_styled_components_default()((link_default())).withConfig({
  displayName: "HeaderStyles__Avatar",
  componentId: "sc-1apw4v9-2"
})(["border-radius:100%;width:66px;height:66px;filter:drop-shadow(0px 4px 4px rgba(0,0,0,0.25));"]);
const UserInfo = external_styled_components_default().div.withConfig({
  displayName: "HeaderStyles__UserInfo",
  componentId: "sc-1apw4v9-3"
})(["display:flex;flex-direction:column;margin-left:17px;align-self:center;"]);
const Name = external_styled_components_default().p.withConfig({
  displayName: "HeaderStyles__Name",
  componentId: "sc-1apw4v9-4"
})(["color:", ";font-size:16px;line-height:24px;"], props => props.theme.colors.text_primary);
const Email = external_styled_components_default().p.withConfig({
  displayName: "HeaderStyles__Email",
  componentId: "sc-1apw4v9-5"
})(["color:", ";font-size:12px;line-height:18px;"], props => props.theme.colors.text_secondary);
;// CONCATENATED MODULE: ./public/profile_pic.png
/* harmony default export */ const profile_pic = ({"src":"/_next/static/media/profile_pic.f177cdde.png","height":74,"width":74,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABC0lEQVR42mMAgQvXHogdPHx6y8LFK3/t2X/s1+lzN7Zu3XNMjAEE/v//z37t2v1z7e3d/xkYGP65e3r9O3Pmyv9z52+cW7NyMztD3+Segpmzp/y31lP8We7n9N/P3vz/kmXzfx49evL/gQNH8xlMHWUX6toy/N/REP9nb33q/55o1/+2Ngx/YlMC/2fnxi1kcHA2bjL0NP2/pMDz5+Zc3/95nhb/A4Ktf4YHyf739eJuYnA00ZVXtVV/W5AY8H9tquX/6XnJ/1Oycv6HRTi+i/FTU2CAApvZEydevTcz78+NNZP/OMbkXWVgcLFlAIGM3CQmEJ1Q18+zb0q5476VMx0ZGCR5QGKhCSlMANsSd/GM4jI0AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/layout/header/Header.tsx







function Navbar() {
  return /*#__PURE__*/jsx_runtime_.jsx(Header, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(HeaderStyles_Container, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Avatar, {
        href: "/settings",
        children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
          src: profile_pic,
          alt: "Avatar"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(UserInfo, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Name, {
          children: "Joseph Huntley"
        }), /*#__PURE__*/jsx_runtime_.jsx(Email, {
          children: "Joseph.Huntley@outlook.com"
        })]
      })]
    })
  });
}

/* harmony default export */ const header_Header = (Navbar);
;// CONCATENATED MODULE: ./src/layout/LayoutStyles.ts

const Main = external_styled_components_default().main.withConfig({
  displayName: "LayoutStyles__Main",
  componentId: "sc-18ffsvk-0"
})(["padding-top:96px;padding-left:280px;"]);
;// CONCATENATED MODULE: ./src/layout/Layout.tsx









function Layout({
  children
}) {
  const router = (0,router_.useRouter)();
  let isLoggedIn = true; // TODO: Handle redirect if user not logged in.

  (0,external_react_.useEffect)(() => {
    if (!isLoggedIn) {
      router.push('/');
    }
  }, [isLoggedIn]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(header_Header, {}), /*#__PURE__*/jsx_runtime_.jsx(sidebar_Sidebar, {}), /*#__PURE__*/jsx_runtime_.jsx(Main, {
      children: children
    })]
  });
}

/* harmony default export */ const layout_Layout = (Layout);

/***/ })

};
;