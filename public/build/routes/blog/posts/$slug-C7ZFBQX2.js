import "/build/_shared/chunk-3SYJTZZI.js";
import {
  A,
  Se,
  be
} from "/build/_shared/chunk-JVB6DQQK.js";
import "/build/_shared/chunk-WWOOHIFR.js";
import {
  useLoaderData
} from "/build/_shared/chunk-ZJGLMS3J.js";
import {
  React,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-Y2PWL7JR.js";

// browser-route-module:/Users/md/github-repos/remixbricks/app/routes/blog/posts/$slug.tsx?browser
init_react();

// app/routes/blog/posts/$slug.tsx
init_react();
var import_react = __toESM(require_react());
var meta = ({ data }) => {
  var _a, _b;
  return {
    title: ((_b = (_a = data == null ? void 0 : data.page) == null ? void 0 : _a.meta) == null ? void 0 : _b.title) || "Blog post"
  };
};
function Page() {
  const { page } = useLoaderData();
  const { pageTypes, bricks } = (0, import_react.useContext)(A);
  const pageOk = page ? Se(page, pageTypes, bricks) : null;
  return /* @__PURE__ */ React.createElement(be, {
    page: pageOk
  });
}
export {
  Page as default,
  meta
};
//# sourceMappingURL=/build/routes/blog/posts/$slug-C7ZFBQX2.js.map
