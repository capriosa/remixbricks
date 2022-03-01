import {
  Layout_default
} from "/build/_shared/chunk-KN4EIKDG.js";
import {
  ErrorMessage_default
} from "/build/_shared/chunk-UUTDVM6V.js";
import {
  Outlet
} from "/build/_shared/chunk-ZJGLMS3J.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-Y2PWL7JR.js";

// browser-route-module:/Users/md/github-repos/remixbricks/app/routes/blog.tsx?browser
init_react();

// app/routes/blog.tsx
init_react();
function Blog() {
  return /* @__PURE__ */ React.createElement(Layout_default, null, /* @__PURE__ */ React.createElement(Outlet, null));
}
var meta = () => {
  return {
    title: "Blog"
  };
};
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ React.createElement(Layout_default, null, /* @__PURE__ */ React.createElement(ErrorMessage_default, {
    error
  }));
}
export {
  ErrorBoundary,
  Blog as default,
  meta
};
//# sourceMappingURL=/build/routes/blog-5Q6SPNCZ.js.map
