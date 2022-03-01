import "/build/_shared/chunk-3SYJTZZI.js";
import {
  A,
  Se,
  be
} from "/build/_shared/chunk-JVB6DQQK.js";
import "/build/_shared/chunk-WWOOHIFR.js";
import {
  Layout_default
} from "/build/_shared/chunk-KN4EIKDG.js";
import {
  ErrorMessage_default
} from "/build/_shared/chunk-UUTDVM6V.js";
import {
  useLoaderData
} from "/build/_shared/chunk-ZJGLMS3J.js";
import {
  React,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-Y2PWL7JR.js";

// browser-route-module:/Users/md/github-repos/remixbricks/app/routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();
var import_react = __toESM(require_react());
var Page = () => {
  const { page } = useLoaderData();
  const { pageTypes, bricks } = (0, import_react.useContext)(A);
  const pageOk = page ? Se(page, pageTypes, bricks) : null;
  return /* @__PURE__ */ React.createElement(Layout_default, null, /* @__PURE__ */ React.createElement(be, {
    page: pageOk
  }));
};
var meta = () => {
  return {
    title: "React Bricks Blog"
  };
};
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ React.createElement(Layout_default, null, /* @__PURE__ */ React.createElement(ErrorMessage_default, {
    error
  }));
}
var routes_default = Page;
export {
  ErrorBoundary,
  routes_default as default,
  meta
};
//# sourceMappingURL=/build/routes/index-VZUWTWZE.js.map
