import {
  require_dayjs_min
} from "/build/_shared/chunk-XKMTCRFU.js";
import "/build/_shared/chunk-GBYJDOUQ.js";
import "/build/_shared/chunk-SEO2H4MT.js";
import "/build/_shared/chunk-WWOOHIFR.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-PNJMPGEZ.js";
import {
  React,
  __toESM,
  init_react
} from "/build/_shared/chunk-Y2PWL7JR.js";

// browser-route-module:/Users/md/github-repos/my-remix-app/app/routes/blog/thumbnails.tsx?browser
init_react();

// app/routes/blog/thumbnails.tsx
init_react();
var import_dayjs = __toESM(require_dayjs_min());

// app/components/PostThumbnail.tsx
init_react();
var PostThumbnail = ({
  href,
  title,
  description,
  date,
  image
}) => {
  return /* @__PURE__ */ React.createElement(Link, {
    className: "w-1/2 mb-8 p-8 group",
    to: href
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative"
  }, /* @__PURE__ */ React.createElement("img", {
    src: image,
    className: "block w-full h-60 object-cover object-center transition-transform rounded"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "absolute top-0 bottom-0 left-0 right-0 bg-cyan-500 opacity-0 group-hover:opacity-40 transition-opacity rounded"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "my-4 text-xs uppercase text-gray-500"
  }, date), /* @__PURE__ */ React.createElement("h3", {
    className: "mb-3 text-2xl font-extrabold text-gray-900 group-hover:text-cyan-500 transition-colors"
  }, title), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-700 mb-4"
  }, description));
};
var PostThumbnail_default = PostThumbnail;

// app/routes/blog/thumbnails.tsx
function Thumbnails() {
  const { posts } = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    className: "container max-w-5xl mx-auto py-16 px-6"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-center text-4xl sm:text-6xl lg:text-7xl leading-none font-black tracking-tight text-gray-900 pb-4 mt-10 sm:mt-12 mb-4"
  }, "Blog"), /* @__PURE__ */ React.createElement("div", {
    className: "py-10 flex flex-wrap"
  }, posts == null ? void 0 : posts.map((post) => /* @__PURE__ */ React.createElement(PostThumbnail_default, {
    key: post.id,
    href: `/blog/posts/${post.slug}`,
    title: post.name,
    description: post.meta.description,
    date: (0, import_dayjs.default)(post.publishedAt).format("DD/MM/YYYY"),
    image: post.meta.featuredImage || "https://images.reactbricks.com/original/8b1974a0-91a8-4ab4-b014-83f60192f9b5.svg"
  }))));
}
export {
  Thumbnails as default
};
//# sourceMappingURL=/build/routes/blog/thumbnails-NXVZHJPX.js.map
