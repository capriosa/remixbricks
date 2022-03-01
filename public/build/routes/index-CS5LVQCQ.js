import "/build/_shared/chunk-GBYJDOUQ.js";
import {
  B,
  Ee,
  xe
} from "/build/_shared/chunk-SEO2H4MT.js";
import "/build/_shared/chunk-WWOOHIFR.js";
import {
  Layout_default
} from "/build/_shared/chunk-YFJPB2ZL.js";
import {
  ErrorMessage_default
} from "/build/_shared/chunk-UUTDVM6V.js";
import {
  useLoaderData
} from "/build/_shared/chunk-PNJMPGEZ.js";
import {
  React,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-Y2PWL7JR.js";

// browser-route-module:/Users/md/github-repos/my-remix-app/app/routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();
var import_react = __toESM(require_react());
var Page = () => {
  const { page } = useLoaderData();
  const { pageTypes, bricks } = (0, import_react.useContext)(B);
  const pageOk = page ? xe(page, pageTypes, bricks) : null;
  return /* @__PURE__ */ React.createElement(Layout_default, null, /* @__PURE__ */ React.createElement(Ee, {
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
//# sourceMappingURL=/build/routes/index-CS5LVQCQ.js.map
