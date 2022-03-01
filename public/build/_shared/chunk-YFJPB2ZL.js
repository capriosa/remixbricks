import {
  Link
} from "/build/_shared/chunk-PNJMPGEZ.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-Y2PWL7JR.js";

// app/components/Layout.tsx
init_react();

// app/components/Header.tsx
init_react();
var Header = () => /* @__PURE__ */ React.createElement("header", {
  className: "bg-white sm:h-20 py-5 border-b sm:sticky top-0 z-10"
}, /* @__PURE__ */ React.createElement("div", {
  className: "max-w-5xl mx-auto px-6"
}, /* @__PURE__ */ React.createElement("div", {
  className: "w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center"
}, /* @__PURE__ */ React.createElement("div", {
  className: "flex flex-col sm:flex-row items-center mb-4 sm:mb-0"
}, /* @__PURE__ */ React.createElement("a", {
  href: "/"
}, /* @__PURE__ */ React.createElement("img", {
  src: "/react-bricks-logo.svg",
  className: "w-48",
  alt: "React Bricks"
})), /* @__PURE__ */ React.createElement("div", {
  className: "sm:ml-8 flex space-x-5 text-center"
}, /* @__PURE__ */ React.createElement(Link, {
  to: "/blog/list",
  className: "text-gray-500 hover:text-pink-700"
}, "Post List"), /* @__PURE__ */ React.createElement(Link, {
  to: "/blog/thumbnails",
  className: "text-gray-500 hover:text-pink-700"
}, "Post Thumbnails"))), /* @__PURE__ */ React.createElement(Link, {
  to: "/admin",
  className: "py-2 px-5 rounded text-white font-medium bg-cyan-500 hover:bg-cyan-600 hover:shadow-lg transition duration-200"
}, "Edit content"))));
var Header_default = Header;

// app/components/Footer.tsx
init_react();
var Footer = () => {
  return /* @__PURE__ */ React.createElement("footer", {
    className: "bg-gray-50 border-t py-12 h-32"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "max-w-5xl mx-auto flex justify-between"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center space-x-4"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/react-bricks-icon.svg",
    alt: "React Bricks",
    className: "w-8"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "uppercase text-sm tracking-wider"
  }, "Remix blog starter")), /* @__PURE__ */ React.createElement("div", {
    className: "text-gray-500 text-sm"
  }, "\xA9 ", new Date().getFullYear(), " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://reactbricks.com",
    className: "hover:text-pink-600"
  }, "React Bricks"))));
};
var Footer_default = Footer;

// app/components/Layout.tsx
var Layout = ({ children }) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col min-h-screen justify-between font-content antialiased"
  }, /* @__PURE__ */ React.createElement(Header_default, null), /* @__PURE__ */ React.createElement("main", {
    className: "isolate mb-auto"
  }, children), /* @__PURE__ */ React.createElement(Footer_default, null));
};
var Layout_default = Layout;

export {
  Layout_default
};
//# sourceMappingURL=/build/_shared/chunk-YFJPB2ZL.js.map
