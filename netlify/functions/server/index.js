var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// server.js
var server_exports = {};
__export(server_exports, {
  handler: () => handler
});
init_react();
var import_netlify = require("@remix-run/netlify");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/md/github-repos/remixbricks/app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
init_react();
var import_remix3 = __toESM(require_remix());
var import_frontend5 = require("react-bricks/frontend");

// app/react-bricks/config.ts
init_react();
var import_frontend4 = require("react-bricks/frontend");

// app/react-bricks/bricks/index.ts
init_react();
var import_blog = __toESM(require("react-bricks-ui/blog"));
var import_website = __toESM(require("react-bricks-ui/website"));

// app/react-bricks/bricks/MyHeroUnit.tsx
init_react();
var import_react = __toESM(require("react"));
var import_frontend = require("react-bricks/frontend");
var MyHeroUnit = ({ padding }) => {
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: `max-w-xl mx-auto px-6 ${padding === "big" ? "py-20" : "py-12"}`
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "flex flex-col items-center"
  }, /* @__PURE__ */ import_react.default.createElement(import_frontend.Image, {
    propName: "icon",
    alt: "Icon",
    maxWidth: 80,
    aspectRatio: 1,
    imageClassName: "w-20 mb-5"
  }), /* @__PURE__ */ import_react.default.createElement(import_frontend.Text, {
    renderBlock: (props) => /* @__PURE__ */ import_react.default.createElement("h1", {
      className: "text-3xl sm:text-4xl text-center font-black text-gray-900 dark:text-white leading-tight mb-3"
    }, props.children),
    renderPlaceholder: (props) => /* @__PURE__ */ import_react.default.createElement("span", {
      className: "opacity-30"
    }, props.children),
    placeholder: "Type a title...",
    propName: "title"
  }), /* @__PURE__ */ import_react.default.createElement(import_frontend.RichText, {
    renderBlock: (props) => /* @__PURE__ */ import_react.default.createElement("p", {
      className: "text-xl text-center leading-relaxed text-gray-700 dark:text-gray-100"
    }, props.children),
    placeholder: "Type a text...",
    propName: "text",
    allowedFeatures: [
      import_frontend.types.RichTextFeatures.Bold,
      import_frontend.types.RichTextFeatures.Italic,
      import_frontend.types.RichTextFeatures.Highlight,
      import_frontend.types.RichTextFeatures.Code,
      import_frontend.types.RichTextFeatures.Link
    ],
    renderCode: (props) => /* @__PURE__ */ import_react.default.createElement("code", {
      className: "text-sm py-1 px-2 bg-gray-200 dark:bg-gray-700 rounded"
    }, props.children)
  })));
};
MyHeroUnit.schema = {
  name: "my-hero-unit",
  label: "Custom Hero Unit",
  getDefaultProps: () => ({
    padding: "big",
    title: "This is a custom Hero Unit",
    text: "We are a hi-tech web development company committed to deliver great products on time. We love to understand our customers' needs and exceed expectations."
  }),
  sideEditProps: [
    {
      name: "padding",
      label: "Padding",
      type: import_frontend.types.SideEditPropType.Select,
      selectOptions: {
        display: import_frontend.types.OptionsDisplay.Select,
        options: [
          { value: "big", label: "Big Padding" },
          { value: "small", label: "Small Padding" }
        ]
      }
    }
  ]
};
var MyHeroUnit_default = MyHeroUnit;

// app/react-bricks/bricks/MdwpHeroUnit.tsx
init_react();
var import_react2 = __toESM(require("react"));
var import_frontend2 = require("react-bricks/frontend");

// app/react-bricks/utils/colors.ts
init_react();
var HeadlineAlignment = [
  {
    label: "Left",
    value: "left"
  },
  {
    label: "Center",
    value: "center"
  },
  {
    label: "Right",
    value: "right"
  }
];
var ParagraphAlignment = [
  {
    label: "Left",
    value: "left"
  },
  {
    label: "Center",
    value: "center"
  },
  {
    label: "Right",
    value: "right"
  }
];
var Colors = [
  {
    label: "Brown",
    value: { color: "#462c37", className: "text-brown" }
  },
  {
    label: "Light brown",
    value: { color: "#a8938c", className: "text-light-brown" }
  },
  {
    label: "Red",
    value: { color: "#ae1e2c", className: "text-red" }
  },
  {
    label: "Orange",
    value: { color: "#ca383b", className: "text-orange" }
  },
  {
    label: "Light gray",
    value: { color: "#e8e9e1", className: "text-gray" }
  }
];
var ParagraphColors = [
  {
    label: "Brown",
    value: { color: "#462c37", className: "text-brown" }
  },
  {
    label: "Light brown",
    value: { color: "#a8938c", className: "text-light-brown" }
  },
  {
    label: "Red",
    value: { color: "#ae1e2c", className: "text-red" }
  },
  {
    label: "Orange",
    value: { color: "#ca383b", className: "text-orange" }
  },
  {
    label: "Light gray",
    value: { color: "#e8e9e1", className: "text-gray" }
  }
];
var BgColors = [
  {
    label: "Brown",
    value: { color: "#462c37", className: "bg-brown" }
  },
  {
    label: "Light brown",
    value: { color: "#a8938c", className: "bg-light-brown" }
  },
  {
    label: "Red",
    value: { color: "#ae1e2c", className: "bg-red" }
  },
  {
    label: "Orange",
    value: { color: "#ca383b", className: "bg-orange" }
  },
  {
    label: "Light gray",
    value: { color: "#e8e9e1", className: "bg-gray" }
  }
];

// app/react-bricks/bricks/MdwpHeroUnit.tsx
var MdwpBgHeroUnit = ({ background, color, bgColor, paragraphColor, headlineAlignment, paragraphAlignment, fullHeight }) => {
  return /* @__PURE__ */ import_react2.default.createElement("section", {
    style: { backgroundImage: `url(${background.src})` },
    className: `w-full flex items-center px-6 pb-12 antialiased bg-cover  
    
    
    ${fullHeight ? "min-h-screen" : ""}`
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: `mx-auto max-w-7xl `
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "container max-w-lg px-4 py-32 mx-auto text-left md:max-w-none md:text-center"
  }, /* @__PURE__ */ import_react2.default.createElement(import_frontend2.Text, {
    renderBlock: (props) => /* @__PURE__ */ import_react2.default.createElement("h1", {
      className: `text-5xl font-extrabold leading-10 tracking-tight text-${headlineAlignment} ${bgColor.className} sm:leading-none md:text-6xl lg:text-7xl
            ${color == null ? void 0 : color.className}
            `
    }, props.children),
    placeholder: "Type a title...",
    propName: "title"
  }), /* @__PURE__ */ import_react2.default.createElement(import_frontend2.RichText, {
    renderBlock: (props) => /* @__PURE__ */ import_react2.default.createElement("p", {
      className: `mx-auto mt-5 ${paragraphColor == null ? void 0 : paragraphColor.className} text-${paragraphAlignment} md:mt-12 md:max-w-lg lg:text-lg`
    }, props.children),
    placeholder: "Type a text...",
    propName: "text",
    allowedFeatures: [
      import_frontend2.types.RichTextFeatures.Bold,
      import_frontend2.types.RichTextFeatures.Italic,
      import_frontend2.types.RichTextFeatures.Highlight,
      import_frontend2.types.RichTextFeatures.Code,
      import_frontend2.types.RichTextFeatures.Link
    ],
    renderCode: (props) => /* @__PURE__ */ import_react2.default.createElement("code", {
      className: "text-sm py-1 px-2 bg-gray-200 dark:bg-gray-700 rounded"
    }, props.children)
  }))));
};
MdwpBgHeroUnit.schema = {
  name: "mdwp-hero-unit",
  label: "mdwp Hero Unit",
  getDefaultProps: () => ({
    Color: { color: "#000000", className: "text-black" },
    ParagraphColor: { color: "#ffffff", className: "text-white" },
    BgColor: { color: "#ffffff", className: "bg-white" },
    HeadlineAlignment: { className: "text-center" },
    ParagraphAlignment: { className: "text-center" },
    fullHeight: false,
    title: "This is a custom Hero Unit",
    text: "We are a hi-tech web development company committed to deliver great products on time. We love to understand our customers' needs and exceed expectations."
  }),
  sideEditProps: [
    {
      name: "background",
      label: "Background Image",
      type: import_frontend2.types.SideEditPropType.Image
    },
    {
      name: "color",
      label: "Headline Color",
      type: import_frontend2.types.SideEditPropType.Select,
      selectOptions: {
        display: import_frontend2.types.OptionsDisplay.Color,
        options: Colors
      }
    },
    {
      name: "bgColor",
      label: "Headline Background Color",
      type: import_frontend2.types.SideEditPropType.Select,
      selectOptions: {
        display: import_frontend2.types.OptionsDisplay.Color,
        options: BgColors
      }
    },
    {
      name: "paragraphColor",
      label: "Paragraph Color",
      type: import_frontend2.types.SideEditPropType.Select,
      selectOptions: {
        display: import_frontend2.types.OptionsDisplay.Color,
        options: ParagraphColors
      }
    },
    {
      name: "headlineAlignment",
      label: "Headline Alignment",
      type: import_frontend2.types.SideEditPropType.Select,
      selectOptions: {
        display: import_frontend2.types.OptionsDisplay.Select,
        options: HeadlineAlignment
      }
    },
    {
      name: "paragraphAlignment",
      label: "Paragraph Alignment",
      type: import_frontend2.types.SideEditPropType.Select,
      selectOptions: {
        display: import_frontend2.types.OptionsDisplay.Select,
        options: ParagraphAlignment
      }
    },
    {
      name: "fullHeight",
      label: "Full Height",
      type: import_frontend2.types.SideEditPropType.Boolean
    }
  ]
};
var MdwpHeroUnit_default = MdwpBgHeroUnit;

// app/react-bricks/bricks/index.ts
var bricks = [
  ...import_website.default,
  ...import_blog.default,
  MyHeroUnit_default,
  MdwpHeroUnit_default
];
var bricks_default = bricks;

// app/react-bricks/pageTypes.ts
init_react();
var import_frontend3 = require("react-bricks/frontend");
var pageTypes = [
  {
    name: "page",
    pluralName: "pages",
    defaultLocked: false,
    defaultStatus: import_frontend3.types.PageStatus.Published,
    getDefaultContent: () => [],
    excludedBlockTypes: [
      "title",
      "paragraph",
      "video",
      "image",
      "quote",
      "social-embed",
      "code-block",
      "tweet-light"
    ]
  },
  {
    name: "blog",
    pluralName: "Blog",
    getDefaultContent: () => [],
    allowedBlockTypes: [
      "title",
      "paragraph",
      "video",
      "image",
      "quote",
      "social-embed",
      "code-block",
      "tweet",
      "tweet-light"
    ]
  }
];
var pageTypes_default = pageTypes;

// app/react-bricks/RemixLink.tsx
init_react();
var import_remix2 = __toESM(require_remix());
var RemixLink = ({
  href,
  className,
  activeClassName,
  isAdmin,
  children
}) => {
  const location = (0, import_remix2.useLocation)();
  let anchorClassName = "";
  if (location.pathname === href) {
    anchorClassName = activeClassName || "";
  } else {
    anchorClassName = className || "";
  }
  return /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: href
  }, /* @__PURE__ */ React.createElement("a", {
    className: anchorClassName
  }, children));
};
var RemixLink_default = RemixLink;

// app/react-bricks/config.ts
var config = {
  appId: "",
  apiKey: "",
  pageTypes: pageTypes_default,
  bricks: bricks_default,
  logo: "/logo.svg",
  renderLocalLink: RemixLink_default,
  navigate: () => {
  },
  loginPath: "/admin",
  editorPath: "/admin/editor",
  playgroundPath: "/admin/playground",
  appSettingsPath: "/admin/app-settings",
  useCssInJs: false,
  appRootElement: "#root",
  clickToEditSide: import_frontend4.types.ClickToEditSide.BottomRight,
  customFields: [],
  enableAutoSave: true,
  disableSaveIfInvalidProps: false
};
var config_default = config;

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-EBX6DNBN.css";

// app/components/ErrorMessage.tsx
init_react();
var ErrorMessage = ({ error }) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "container mx-auto max-w-5xl px-6 my-12"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bg-red-50 py-3 px-6 border-2 border-red-200 flex flex-col items-center"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-xl font-extrabold mb-2"
  }, "Something went wrong"), /* @__PURE__ */ React.createElement("p", null, "Error: ", error.message)));
};
var ErrorMessage_default = ErrorMessage;

// route:/Users/md/github-repos/remixbricks/app/root.tsx
function links() {
  return [{ rel: "stylesheet", href: tailwind_default }];
}
var meta = () => {
  return { title: "Remix Blog Starter with React Bricks" };
};
var loader = () => {
  const apiKey = process.env.API_KEY;
  const appId = process.env.APP_ID;
  if (!apiKey || !appId) {
    throw new Error("Missing React Bricks credentials in .env file");
  }
  return { appId, apiKey };
};
function App() {
  const navigate = (0, import_remix3.useNavigate)();
  const { appId, apiKey } = (0, import_remix3.useLoaderData)();
  const reactBricksConfig = __spreadProps(__spreadValues({}, config_default), {
    appId,
    apiKey,
    navigate: (path) => navigate(path)
  });
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null)), /* @__PURE__ */ React.createElement("body", {
    id: "root"
  }, /* @__PURE__ */ React.createElement(import_frontend5.ReactBricks, __spreadValues({}, reactBricksConfig), /* @__PURE__ */ React.createElement(import_remix3.Outlet, null)), /* @__PURE__ */ React.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null), false));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement("html", null, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("title", null, "Oh no!"), /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(ErrorMessage_default, {
    error
  }), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null)));
}

// route:/Users/md/github-repos/remixbricks/app/routes/admin/app-settings.tsx
var app_settings_exports = {};
__export(app_settings_exports, {
  default: () => app_settings_default,
  meta: () => meta2
});
init_react();
var import_react3 = __toESM(require("react"));
var import_react_bricks = require("react-bricks");
var meta2 = () => {
  return {
    title: "React Bricks App Settings"
  };
};
var AdminAppSettings = () => {
  return /* @__PURE__ */ import_react3.default.createElement(import_react_bricks.Admin, null, /* @__PURE__ */ import_react3.default.createElement(import_react_bricks.AppSettings, null));
};
var app_settings_default = AdminAppSettings;

// route:/Users/md/github-repos/remixbricks/app/routes/admin/playground.tsx
var playground_exports = {};
__export(playground_exports, {
  default: () => playground_default,
  meta: () => meta3
});
init_react();
var import_react4 = __toESM(require("react"));
var import_react_bricks2 = require("react-bricks");
var meta3 = () => {
  return {
    title: "React Bricks Playground"
  };
};
var AdminPlayground = () => {
  return /* @__PURE__ */ import_react4.default.createElement(import_react_bricks2.Admin, null, /* @__PURE__ */ import_react4.default.createElement(import_react_bricks2.Playground, null));
};
var playground_default = AdminPlayground;

// route:/Users/md/github-repos/remixbricks/app/routes/admin/editor.tsx
var editor_exports = {};
__export(editor_exports, {
  default: () => editor_default,
  meta: () => meta4
});
init_react();
var import_react5 = __toESM(require("react"));
var import_react_bricks3 = require("react-bricks");
var meta4 = () => {
  return {
    title: "React Bricks Editor"
  };
};
var AdminEditor = () => {
  return /* @__PURE__ */ import_react5.default.createElement(import_react_bricks3.Admin, null, /* @__PURE__ */ import_react5.default.createElement(import_react_bricks3.Editor, null));
};
var editor_default = AdminEditor;

// route:/Users/md/github-repos/remixbricks/app/routes/admin/index.tsx
var admin_exports = {};
__export(admin_exports, {
  default: () => admin_default,
  meta: () => meta5
});
init_react();
var import_react6 = __toESM(require("react"));
var import_react_bricks4 = require("react-bricks");
var meta5 = () => {
  return {
    title: "React Bricks Login"
  };
};
var AdminLogin = () => {
  return /* @__PURE__ */ import_react6.default.createElement(import_react_bricks4.Admin, {
    isLogin: true
  }, /* @__PURE__ */ import_react6.default.createElement(import_react_bricks4.Login, null));
};
var admin_default = AdminLogin;

// route:/Users/md/github-repos/remixbricks/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  ErrorBoundary: () => ErrorBoundary2,
  default: () => routes_default,
  loader: () => loader2,
  meta: () => meta6
});
init_react();
var import_react7 = require("react");
var import_frontend6 = require("react-bricks/frontend");
var import_remix5 = __toESM(require_remix());

// app/components/Layout.tsx
init_react();

// app/components/Header.tsx
init_react();
var import_remix4 = __toESM(require_remix());
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
}, /* @__PURE__ */ React.createElement(import_remix4.Link, {
  to: "/blog/list",
  className: "text-gray-500 hover:text-pink-700"
}, "Post List"), /* @__PURE__ */ React.createElement(import_remix4.Link, {
  to: "/blog/thumbnails",
  className: "text-gray-500 hover:text-pink-700"
}, "Post Thumbnails"))), /* @__PURE__ */ React.createElement(import_remix4.Link, {
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

// route:/Users/md/github-repos/remixbricks/app/routes/index.tsx
var loader2 = async () => {
  const HOME_PAGE = "home";
  try {
    const page = await (0, import_frontend6.fetchPage)(HOME_PAGE, process.env.API_KEY);
    return { page };
  } catch {
    throw new Error(`Cannot find the "${HOME_PAGE}" page.`);
  }
};
var Page = () => {
  const { page } = (0, import_remix5.useLoaderData)();
  const { pageTypes: pageTypes2, bricks: bricks2 } = (0, import_react7.useContext)(import_frontend6.ReactBricksContext);
  const pageOk = page ? (0, import_frontend6.cleanPage)(page, pageTypes2, bricks2) : null;
  return /* @__PURE__ */ React.createElement(Layout_default, null, /* @__PURE__ */ React.createElement(import_frontend6.PageViewer, {
    page: pageOk
  }));
};
var meta6 = () => {
  return {
    title: "React Bricks Blog"
  };
};
function ErrorBoundary2({ error }) {
  return /* @__PURE__ */ React.createElement(Layout_default, null, /* @__PURE__ */ React.createElement(ErrorMessage_default, {
    error
  }));
}
var routes_default = Page;

// route:/Users/md/github-repos/remixbricks/app/routes/blog.tsx
var blog_exports = {};
__export(blog_exports, {
  ErrorBoundary: () => ErrorBoundary3,
  default: () => Blog2,
  meta: () => meta7
});
init_react();
var import_remix6 = __toESM(require_remix());
function Blog2() {
  return /* @__PURE__ */ React.createElement(Layout_default, null, /* @__PURE__ */ React.createElement(import_remix6.Outlet, null));
}
var meta7 = () => {
  return {
    title: "Blog"
  };
};
function ErrorBoundary3({ error }) {
  return /* @__PURE__ */ React.createElement(Layout_default, null, /* @__PURE__ */ React.createElement(ErrorMessage_default, {
    error
  }));
}

// route:/Users/md/github-repos/remixbricks/app/routes/blog/posts/$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  default: () => Page2,
  loader: () => loader3,
  meta: () => meta8
});
init_react();
var import_react8 = require("react");
var import_frontend7 = require("react-bricks/frontend");
var import_remix7 = __toESM(require_remix());
var loader3 = async ({ params }) => {
  try {
    const page = await (0, import_frontend7.fetchPage)(params.slug, process.env.API_KEY);
    return { page };
  } catch {
    throw new Error(`Cannot find the "${params.slug}" post.`);
  }
};
var meta8 = ({ data }) => {
  var _a, _b;
  return {
    title: ((_b = (_a = data == null ? void 0 : data.page) == null ? void 0 : _a.meta) == null ? void 0 : _b.title) || "Blog post"
  };
};
function Page2() {
  const { page } = (0, import_remix7.useLoaderData)();
  const { pageTypes: pageTypes2, bricks: bricks2 } = (0, import_react8.useContext)(import_frontend7.ReactBricksContext);
  const pageOk = page ? (0, import_frontend7.cleanPage)(page, pageTypes2, bricks2) : null;
  return /* @__PURE__ */ React.createElement(import_frontend7.PageViewer, {
    page: pageOk
  });
}

// route:/Users/md/github-repos/remixbricks/app/routes/blog/thumbnails.tsx
var thumbnails_exports = {};
__export(thumbnails_exports, {
  default: () => Thumbnails,
  loader: () => loader4
});
init_react();
var import_frontend8 = require("react-bricks/frontend");
var import_remix9 = __toESM(require_remix());
var import_dayjs = __toESM(require("dayjs"));

// app/components/PostThumbnail.tsx
init_react();
var import_remix8 = __toESM(require_remix());
var PostThumbnail = ({
  href,
  title,
  description,
  date,
  image
}) => {
  return /* @__PURE__ */ React.createElement(import_remix8.Link, {
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

// route:/Users/md/github-repos/remixbricks/app/routes/blog/thumbnails.tsx
var loader4 = async () => {
  const posts = await (0, import_frontend8.fetchPages)(process.env.API_KEY, {
    type: "blog",
    pageSize: 1e3,
    sort: "-publishedAt"
  });
  return { posts };
};
function Thumbnails() {
  const { posts } = (0, import_remix9.useLoaderData)();
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

// route:/Users/md/github-repos/remixbricks/app/routes/blog/list.tsx
var list_exports = {};
__export(list_exports, {
  default: () => List,
  loader: () => loader5
});
init_react();
var import_frontend9 = require("react-bricks/frontend");
var import_remix11 = __toESM(require_remix());

// app/components/PostListItem.tsx
init_react();
var import_react9 = __toESM(require("react"));
var import_remix10 = __toESM(require_remix());
var PostListItem = ({
  title,
  href,
  content
}) => {
  return /* @__PURE__ */ import_react9.default.createElement(import_remix10.Link, {
    to: href,
    className: "flex-1 block group py-4 text-gray-900 hover:bg-gray-50 transition-colors duration-300 p-6 -m-6 rounded"
  }, /* @__PURE__ */ import_react9.default.createElement("h3", {
    className: "font-bold text-2xl"
  }, title), /* @__PURE__ */ import_react9.default.createElement("p", {
    className: "mt-4 leading-6 text-lg"
  }, content), /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "flex items-center mt-4 text-cyan-500 group-hover:text-cyan-600 font-semibold"
  }, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "mr-2 group-hover:mr-4 transition-all duration-300"
  }, "Read More"), "\xBB"));
};
var PostListItem_default = PostListItem;

// route:/Users/md/github-repos/remixbricks/app/routes/blog/list.tsx
var loader5 = async () => {
  const posts = await (0, import_frontend9.fetchPages)(process.env.API_KEY, {
    type: "blog",
    pageSize: 1e3,
    sort: "-publishedAt"
  });
  const { items: tags } = await (0, import_frontend9.fetchTags)(process.env.API_KEY);
  tags.sort();
  return { posts, tags };
};
function List() {
  const { posts, tags } = (0, import_remix11.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "container mx-auto"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-center text-4xl sm:text-6xl lg:text-7xl leading-none font-black tracking-tight text-gray-900 pb-4 mt-10 sm:mt-12 mb-4"
  }, "Blog"), /* @__PURE__ */ React.createElement("div", {
    className: "max-w-6xl mx-auto px-8 py-16 flex space-x-24"
  }, /* @__PURE__ */ React.createElement("section", {
    style: { flex: "2 2 0" },
    className: "flex-2 space-y-8"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-pink-500 uppercase mb-8 tracking-widest font-bold"
  }, "Recently published"), posts == null ? void 0 : posts.map((post) => /* @__PURE__ */ React.createElement(PostListItem_default, {
    key: post.id,
    title: post.name,
    href: `/blog/posts/${post.slug}`,
    content: post.meta.description || ""
  }))), /* @__PURE__ */ React.createElement("section", {
    className: "flex-1 space-y-16"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", {
    className: "text-pink-500 uppercase mb-8 tracking-widest font-bold"
  }, "Tags"), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-wrap items-center"
  }, tags == null ? void 0 : tags.filter((tag) => tag !== "popular").map((tag) => /* @__PURE__ */ React.createElement(import_remix11.Link, {
    to: `/tag/${tag}`,
    key: tag,
    className: "inline-block text-sm font-bold mr-2 mb-2 transform duration-200 text-cyan-800 bg-cyan-100 hover:bg-cyan-200 hover:text-cyan-900 rounded-md px-2 py-1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "",
    style: { zIndex: -1 }
  }), tag)))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", {
    className: "text-pink-500 uppercase mb-8 tracking-widest font-bold"
  }, "Most Popular"), /* @__PURE__ */ React.createElement("ul", null, posts == null ? void 0 : posts.filter((post) => post.tags.find((tag) => tag === "popular")).map((post) => /* @__PURE__ */ React.createElement("li", {
    key: post.id
  }, /* @__PURE__ */ React.createElement("a", {
    href: post.slug,
    className: "text-gray-900 hover:text-cyan-600 font-bold text-lg leading-10 transition-colors"
  }, post.name))))))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "93c86c8a", "entry": { "module": "/build/entry.client-CK3IHIOB.js", "imports": ["/build/_shared/chunk-PFPRUAKN.js", "/build/_shared/chunk-VKOMOSWF.js", "/build/_shared/chunk-UPQWZGZB.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-AIUWXWBM.js", "imports": ["/build/_shared/chunk-WQXNTBS6.js", "/build/_shared/chunk-7DD2P4E2.js", "/build/_shared/chunk-WYYZD2DE.js", "/build/_shared/chunk-C3EW6UIY.js", "/build/_shared/chunk-2V34ZRAB.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/admin/app-settings": { "id": "routes/admin/app-settings", "parentId": "root", "path": "admin/app-settings", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/admin/app-settings-UG2G6NJY.js", "imports": ["/build/_shared/chunk-66SN2ALJ.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/admin/editor": { "id": "routes/admin/editor", "parentId": "root", "path": "admin/editor", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/admin/editor-TAIP5TAE.js", "imports": ["/build/_shared/chunk-66SN2ALJ.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/admin/index": { "id": "routes/admin/index", "parentId": "root", "path": "admin", "index": true, "caseSensitive": void 0, "module": "/build/routes/admin/index-ND76EYNN.js", "imports": ["/build/_shared/chunk-66SN2ALJ.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/admin/playground": { "id": "routes/admin/playground", "parentId": "root", "path": "admin/playground", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/admin/playground-J5DHJXXK.js", "imports": ["/build/_shared/chunk-66SN2ALJ.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog": { "id": "routes/blog", "parentId": "root", "path": "blog", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog-J3XTUF5Q.js", "imports": ["/build/_shared/chunk-PXOSTDAE.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/blog/list": { "id": "routes/blog/list", "parentId": "routes/blog", "path": "list", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/list-74KIWUNF.js", "imports": ["/build/_shared/chunk-WYYZD2DE.js", "/build/_shared/chunk-C3EW6UIY.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/posts/$slug": { "id": "routes/blog/posts/$slug", "parentId": "routes/blog", "path": "posts/:slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/posts/$slug-L7KHHNF2.js", "imports": ["/build/_shared/chunk-WYYZD2DE.js", "/build/_shared/chunk-C3EW6UIY.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/thumbnails": { "id": "routes/blog/thumbnails", "parentId": "routes/blog", "path": "thumbnails", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/thumbnails-BPDUXMSJ.js", "imports": ["/build/_shared/chunk-WQXNTBS6.js", "/build/_shared/chunk-WYYZD2DE.js", "/build/_shared/chunk-C3EW6UIY.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-4MVK4XYU.js", "imports": ["/build/_shared/chunk-PXOSTDAE.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true } }, "url": "/build/manifest-93C86C8A.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/admin/app-settings": {
    id: "routes/admin/app-settings",
    parentId: "root",
    path: "admin/app-settings",
    index: void 0,
    caseSensitive: void 0,
    module: app_settings_exports
  },
  "routes/admin/playground": {
    id: "routes/admin/playground",
    parentId: "root",
    path: "admin/playground",
    index: void 0,
    caseSensitive: void 0,
    module: playground_exports
  },
  "routes/admin/editor": {
    id: "routes/admin/editor",
    parentId: "root",
    path: "admin/editor",
    index: void 0,
    caseSensitive: void 0,
    module: editor_exports
  },
  "routes/admin/index": {
    id: "routes/admin/index",
    parentId: "root",
    path: "admin",
    index: true,
    caseSensitive: void 0,
    module: admin_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/blog": {
    id: "routes/blog",
    parentId: "root",
    path: "blog",
    index: void 0,
    caseSensitive: void 0,
    module: blog_exports
  },
  "routes/blog/posts/$slug": {
    id: "routes/blog/posts/$slug",
    parentId: "routes/blog",
    path: "posts/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/blog/thumbnails": {
    id: "routes/blog/thumbnails",
    parentId: "routes/blog",
    path: "thumbnails",
    index: void 0,
    caseSensitive: void 0,
    module: thumbnails_exports
  },
  "routes/blog/list": {
    id: "routes/blog/list",
    parentId: "routes/blog",
    path: "list",
    index: void 0,
    caseSensitive: void 0,
    module: list_exports
  }
};

// server.js
function getLoadContext(event, context) {
  let rawAuthorizationString;
  let netlifyGraphToken;
  if (event.authlifyToken != null) {
    netlifyGraphToken = event.authlifyToken;
  }
  const authHeader = event.headers["authorization"];
  const graphSignatureHeader = event.headers["x-netlify-graph-signature"];
  if (authHeader != null && /Bearer /gi.test(authHeader)) {
    rawAuthorizationString = authHeader.split(" ")[1];
  }
  const loadContext = {
    clientNetlifyGraphAccessToken: rawAuthorizationString,
    netlifyGraphToken,
    netlifyGraphSignature: graphSignatureHeader
  };
  Object.keys(loadContext).forEach((key) => {
    if (loadContext[key] == null) {
      delete loadContext[key];
    }
  });
  return loadContext;
}
var handler = (0, import_netlify.createRequestHandler)({
  build: server_build_exports,
  getLoadContext,
  mode: "production"
});
module.exports = __toCommonJS(server_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
/**
 * @remix-run/node v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi8uLi8uLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L1VzZXJzL21kL2dpdGh1Yi1yZXBvcy9yZW1peGJyaWNrcy9hcHAvcm9vdC50c3giLCAiLi4vLi4vLi4vYXBwL3JlYWN0LWJyaWNrcy9jb25maWcudHMiLCAiLi4vLi4vLi4vYXBwL3JlYWN0LWJyaWNrcy9icmlja3MvaW5kZXgudHMiLCAiLi4vLi4vLi4vYXBwL3JlYWN0LWJyaWNrcy9icmlja3MvTXlIZXJvVW5pdC50c3giLCAiLi4vLi4vLi4vYXBwL3JlYWN0LWJyaWNrcy9icmlja3MvTWR3cEhlcm9Vbml0LnRzeCIsICIuLi8uLi8uLi9hcHAvcmVhY3QtYnJpY2tzL3V0aWxzL2NvbG9ycy50cyIsICIuLi8uLi8uLi9hcHAvcmVhY3QtYnJpY2tzL3BhZ2VUeXBlcy50cyIsICIuLi8uLi8uLi9hcHAvcmVhY3QtYnJpY2tzL1JlbWl4TGluay50c3giLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvRXJyb3JNZXNzYWdlLnRzeCIsICJyb3V0ZTovVXNlcnMvbWQvZ2l0aHViLXJlcG9zL3JlbWl4YnJpY2tzL2FwcC9yb3V0ZXMvYWRtaW4vYXBwLXNldHRpbmdzLnRzeCIsICJyb3V0ZTovVXNlcnMvbWQvZ2l0aHViLXJlcG9zL3JlbWl4YnJpY2tzL2FwcC9yb3V0ZXMvYWRtaW4vcGxheWdyb3VuZC50c3giLCAicm91dGU6L1VzZXJzL21kL2dpdGh1Yi1yZXBvcy9yZW1peGJyaWNrcy9hcHAvcm91dGVzL2FkbWluL2VkaXRvci50c3giLCAicm91dGU6L1VzZXJzL21kL2dpdGh1Yi1yZXBvcy9yZW1peGJyaWNrcy9hcHAvcm91dGVzL2FkbWluL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvbWQvZ2l0aHViLXJlcG9zL3JlbWl4YnJpY2tzL2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0xheW91dC50c3giLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvSGVhZGVyLnRzeCIsICIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9Gb290ZXIudHN4IiwgInJvdXRlOi9Vc2Vycy9tZC9naXRodWItcmVwb3MvcmVtaXhicmlja3MvYXBwL3JvdXRlcy9ibG9nLnRzeCIsICJyb3V0ZTovVXNlcnMvbWQvZ2l0aHViLXJlcG9zL3JlbWl4YnJpY2tzL2FwcC9yb3V0ZXMvYmxvZy9wb3N0cy8kc2x1Zy50c3giLCAicm91dGU6L1VzZXJzL21kL2dpdGh1Yi1yZXBvcy9yZW1peGJyaWNrcy9hcHAvcm91dGVzL2Jsb2cvdGh1bWJuYWlscy50c3giLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvUG9zdFRodW1ibmFpbC50c3giLCAicm91dGU6L1VzZXJzL21kL2dpdGh1Yi1yZXBvcy9yZW1peGJyaWNrcy9hcHAvcm91dGVzL2Jsb2cvbGlzdC50c3giLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvUG9zdExpc3RJdGVtLnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJpbXBvcnQgeyBjcmVhdGVSZXF1ZXN0SGFuZGxlciB9IGZyb20gXCJAcmVtaXgtcnVuL25ldGxpZnlcIjtcbmltcG9ydCAqIGFzIGJ1aWxkIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjtcblxuLypcbiAqIFJldHVybnMgYSBjb250ZXh0IG9iamVjdCB3aXRoIGF0IG1vc3QgMyBrZXlzOlxuICogIC0gYG5ldGxpZnlHcmFwaFRva2VuYDogcmF3IGF1dGhlbnRpY2F0aW9uIHRva2VuIHRvIHVzZSB3aXRoIE5ldGxpZnkgR3JhcGhcbiAqICAtIGBjbGllbnROZXRsaWZ5R3JhcGhBY2Nlc3NUb2tlbmA6IEZvciB1c2Ugd2l0aCBKV1RzIGdlbmVyYXRlZCBieVxuICogICAgYG5ldGxpZnktZ3JhcGgtYXV0aGAuXG4gKiAgLSBgbmV0bGlmeUdyYXBoU2lnbmF0dXJlYDogYSBzaWduYXR1cmUgZm9yIHN1YnNjcmlwdGlvbiBldmVudHMuIFdpbGwgYmVcbiAqICAgIHByZXNlbnQgaWYgYSBzZWNyZXQgaXMgc2V0LlxuICovXG5mdW5jdGlvbiBnZXRMb2FkQ29udGV4dChldmVudCwgY29udGV4dCkge1xuICBsZXQgcmF3QXV0aG9yaXphdGlvblN0cmluZztcbiAgbGV0IG5ldGxpZnlHcmFwaFRva2VuO1xuXG4gIGlmIChldmVudC5hdXRobGlmeVRva2VuICE9IG51bGwpIHtcbiAgICBuZXRsaWZ5R3JhcGhUb2tlbiA9IGV2ZW50LmF1dGhsaWZ5VG9rZW47XG4gIH1cblxuICBjb25zdCBhdXRoSGVhZGVyID0gZXZlbnQuaGVhZGVyc1tcImF1dGhvcml6YXRpb25cIl07XG4gIGNvbnN0IGdyYXBoU2lnbmF0dXJlSGVhZGVyID0gZXZlbnQuaGVhZGVyc1tcIngtbmV0bGlmeS1ncmFwaC1zaWduYXR1cmVcIl07XG5cbiAgaWYgKGF1dGhIZWFkZXIgIT0gbnVsbCAmJiAvQmVhcmVyIC9naS50ZXN0KGF1dGhIZWFkZXIpKSB7XG4gICAgcmF3QXV0aG9yaXphdGlvblN0cmluZyA9IGF1dGhIZWFkZXIuc3BsaXQoXCIgXCIpWzFdO1xuICB9XG5cbiAgY29uc3QgbG9hZENvbnRleHQgPSB7XG4gICAgY2xpZW50TmV0bGlmeUdyYXBoQWNjZXNzVG9rZW46IHJhd0F1dGhvcml6YXRpb25TdHJpbmcsXG4gICAgbmV0bGlmeUdyYXBoVG9rZW46IG5ldGxpZnlHcmFwaFRva2VuLFxuICAgIG5ldGxpZnlHcmFwaFNpZ25hdHVyZTogZ3JhcGhTaWduYXR1cmVIZWFkZXIsXG4gIH07XG5cbiAgLy8gUmVtb3ZlIGtleXMgd2l0aCB1bmRlZmluZWQgdmFsdWVzXG4gIE9iamVjdC5rZXlzKGxvYWRDb250ZXh0KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAobG9hZENvbnRleHRba2V5XSA9PSBudWxsKSB7XG4gICAgICBkZWxldGUgbG9hZENvbnRleHRba2V5XTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBsb2FkQ29udGV4dDtcbn1cblxuZXhwb3J0IGNvbnN0IGhhbmRsZXIgPSBjcmVhdGVSZXF1ZXN0SGFuZGxlcih7XG4gIGJ1aWxkLFxuICBnZXRMb2FkQ29udGV4dCxcbiAgbW9kZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYsXG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvbWQvZ2l0aHViLXJlcG9zL3JlbWl4YnJpY2tzL2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9tZC9naXRodWItcmVwb3MvcmVtaXhicmlja3MvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9tZC9naXRodWItcmVwb3MvcmVtaXhicmlja3MvYXBwL3JvdXRlcy9hZG1pbi9hcHAtc2V0dGluZ3MudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9tZC9naXRodWItcmVwb3MvcmVtaXhicmlja3MvYXBwL3JvdXRlcy9hZG1pbi9wbGF5Z3JvdW5kLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvbWQvZ2l0aHViLXJlcG9zL3JlbWl4YnJpY2tzL2FwcC9yb3V0ZXMvYWRtaW4vZWRpdG9yLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvVXNlcnMvbWQvZ2l0aHViLXJlcG9zL3JlbWl4YnJpY2tzL2FwcC9yb3V0ZXMvYWRtaW4vaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9Vc2Vycy9tZC9naXRodWItcmVwb3MvcmVtaXhicmlja3MvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiL1VzZXJzL21kL2dpdGh1Yi1yZXBvcy9yZW1peGJyaWNrcy9hcHAvcm91dGVzL2Jsb2cudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTcgZnJvbSBcIi9Vc2Vycy9tZC9naXRodWItcmVwb3MvcmVtaXhicmlja3MvYXBwL3JvdXRlcy9ibG9nL3Bvc3RzLyRzbHVnLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCIvVXNlcnMvbWQvZ2l0aHViLXJlcG9zL3JlbWl4YnJpY2tzL2FwcC9yb3V0ZXMvYmxvZy90aHVtYm5haWxzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU5IGZyb20gXCIvVXNlcnMvbWQvZ2l0aHViLXJlcG9zL3JlbWl4YnJpY2tzL2FwcC9yb3V0ZXMvYmxvZy9saXN0LnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRtaW4vYXBwLXNldHRpbmdzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hZG1pbi9hcHAtc2V0dGluZ3NcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYWRtaW4vYXBwLXNldHRpbmdzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9hZG1pbi9wbGF5Z3JvdW5kXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hZG1pbi9wbGF5Z3JvdW5kXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFkbWluL3BsYXlncm91bmRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL2FkbWluL2VkaXRvclwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYWRtaW4vZWRpdG9yXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFkbWluL2VkaXRvclwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRtaW4vaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2FkbWluL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFkbWluXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU0XG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU1XG4gICAgfSxcbiAgXCJyb3V0ZXMvYmxvZ1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYmxvZ1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJibG9nXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTZcbiAgICB9LFxuICBcInJvdXRlcy9ibG9nL3Bvc3RzLyRzbHVnXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ibG9nL3Bvc3RzLyRzbHVnXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvYmxvZ1wiLFxuICAgICAgcGF0aDogXCJwb3N0cy86c2x1Z1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU3XG4gICAgfSxcbiAgXCJyb3V0ZXMvYmxvZy90aHVtYm5haWxzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ibG9nL3RodW1ibmFpbHNcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9ibG9nXCIsXG4gICAgICBwYXRoOiBcInRodW1ibmFpbHNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOFxuICAgIH0sXG4gIFwicm91dGVzL2Jsb2cvbGlzdFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYmxvZy9saXN0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvYmxvZ1wiLFxuICAgICAgcGF0aDogXCJsaXN0XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTlcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG4gIHVzZU5hdmlnYXRlLFxuICB1c2VMb2FkZXJEYXRhLFxufSBmcm9tICdyZW1peCdcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBSZWFjdEJyaWNrcyB9IGZyb20gJ3JlYWN0LWJyaWNrcy9mcm9udGVuZCdcbmltcG9ydCBjb25maWcgZnJvbSAnLi9yZWFjdC1icmlja3MvY29uZmlnJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vdGFpbHdpbmQuY3NzJ1xuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICcuL2NvbXBvbmVudHMvRXJyb3JNZXNzYWdlJ1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH1dXG59XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7IHRpdGxlOiAnUmVtaXggQmxvZyBTdGFydGVyIHdpdGggUmVhY3QgQnJpY2tzJyB9XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGFwaUtleSA9IHByb2Nlc3MuZW52LkFQSV9LRVlcbiAgY29uc3QgYXBwSWQgPSBwcm9jZXNzLmVudi5BUFBfSURcblxuICBpZiAoIWFwaUtleSB8fCAhYXBwSWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgUmVhY3QgQnJpY2tzIGNyZWRlbnRpYWxzIGluIC5lbnYgZmlsZScpXG4gIH1cblxuICByZXR1cm4geyBhcHBJZCwgYXBpS2V5IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKClcbiAgY29uc3QgeyBhcHBJZCwgYXBpS2V5IH0gPSB1c2VMb2FkZXJEYXRhKClcblxuICBjb25zdCByZWFjdEJyaWNrc0NvbmZpZyA9IHtcbiAgICAuLi5jb25maWcsXG4gICAgYXBwSWQsXG4gICAgYXBpS2V5LFxuICAgIG5hdmlnYXRlOiAocGF0aDogc3RyaW5nKSA9PiBuYXZpZ2F0ZShwYXRoKSxcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5IGlkPVwicm9vdFwiPlxuICAgICAgICA8UmVhY3RCcmlja3Mgey4uLnJlYWN0QnJpY2tzQ29uZmlnfT5cbiAgICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDwvUmVhY3RCcmlja3M+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgJiYgPExpdmVSZWxvYWQgLz59XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApXG59XG5leHBvcnQgZnVuY3Rpb24gRXJyb3JCb3VuZGFyeSh7IGVycm9yIH06IHsgZXJyb3I6IEVycm9yIH0pIHtcbiAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgcmV0dXJuIChcbiAgICA8aHRtbD5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8dGl0bGU+T2ggbm8hPC90aXRsZT5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPEVycm9yTWVzc2FnZSBlcnJvcj17ZXJyb3J9IC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApXG59XG4iLCAiaW1wb3J0IHsgdHlwZXMgfSBmcm9tICdyZWFjdC1icmlja3MvZnJvbnRlbmQnXG5cbmltcG9ydCBicmlja3MgZnJvbSAnLi9icmlja3MnXG5pbXBvcnQgcGFnZVR5cGVzIGZyb20gJy4vcGFnZVR5cGVzJ1xuaW1wb3J0IFJlbWl4TGluayBmcm9tICcuL1JlbWl4TGluaydcblxuY29uc3QgY29uZmlnOiB0eXBlcy5SZWFjdEJyaWNrc0NvbmZpZyA9IHtcbiAgYXBwSWQ6ICcnLCAvL3Byb2Nlc3MuZW52LkFQUF9JRCBhcyBzdHJpbmcgfHwgJycsXG4gIGFwaUtleTogJycsIC8vcHJvY2Vzcy5lbnYuQVBJX0tFWSBhcyBzdHJpbmcgfHwgJycsXG4gIHBhZ2VUeXBlcyxcbiAgYnJpY2tzLFxuICBsb2dvOiAnL2xvZ28uc3ZnJyxcbiAgLy8gLy8gY29udGVudENsYXNzTmFtZTogJ2NvbnRlbnQnLCAvLyBEZWZpbmVkIGR5bmFtaWNhbGx5XG4gIC8vIC8vIGlzRGFya0NvbG9yTW9kZTogLi4uLCAgICAgICAgLy8gaW4gX2FwcC50c3hcbiAgLy8gLy8gdG9nZ2xlQ29sb3JNb2RlOiAuLi4sICAgICAgICAvLyB0byBtYW5hZ2UgRGFyayBNb2RlXG4gIHJlbmRlckxvY2FsTGluazogUmVtaXhMaW5rLFxuICBuYXZpZ2F0ZTogKCkgPT4ge30sXG4gIGxvZ2luUGF0aDogJy9hZG1pbicsXG4gIGVkaXRvclBhdGg6ICcvYWRtaW4vZWRpdG9yJyxcbiAgcGxheWdyb3VuZFBhdGg6ICcvYWRtaW4vcGxheWdyb3VuZCcsXG4gIGFwcFNldHRpbmdzUGF0aDogJy9hZG1pbi9hcHAtc2V0dGluZ3MnLFxuICB1c2VDc3NJbkpzOiBmYWxzZSxcbiAgYXBwUm9vdEVsZW1lbnQ6ICcjcm9vdCcsXG4gIGNsaWNrVG9FZGl0U2lkZTogdHlwZXMuQ2xpY2tUb0VkaXRTaWRlLkJvdHRvbVJpZ2h0LFxuICBjdXN0b21GaWVsZHM6IFtdLFxuICAvLyAvL3Jlc3BvbnNpdmVCcmVha3BvaW50czogW3sgdHlwZTogdHlwZXMuRGV2aWNlVHlwZS5QaG9uZSwgd2lkdGg6IDQ4MCwgbGFiZWw6ICdTbWFydHBob25lJ31dLFxuICBlbmFibGVBdXRvU2F2ZTogdHJ1ZSxcbiAgZGlzYWJsZVNhdmVJZkludmFsaWRQcm9wczogZmFsc2UsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ1xuIiwgImltcG9ydCB7IHR5cGVzIH0gZnJvbSAncmVhY3QtYnJpY2tzL2Zyb250ZW5kJ1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUkVBQ1QgQlJJQ0tTIFVJXG4vLyBZb3UgbWF5IGFsc28gaW1wb3J0IHsgU2luZ2xlIEJyaWNrcyB9XG4vLyB0byByZWR1Y2UgdGhlIGJ1bmRsZSBzaXplXG5pbXBvcnQgQmxvZyBmcm9tICdyZWFjdC1icmlja3MtdWkvYmxvZydcbmltcG9ydCBXZWJzaXRlIGZyb20gJ3JlYWN0LWJyaWNrcy11aS93ZWJzaXRlJ1xuXG4vLyBFeGFtcGxlIGN1c3RvbSBicmlja1xuaW1wb3J0IE15SGVyb1VuaXQgZnJvbSAnLi9NeUhlcm9Vbml0J1xuaW1wb3J0IE1kd3BIZXJvVW5pdCBmcm9tICcuL01kd3BIZXJvVW5pdCdcblxuY29uc3QgYnJpY2tzOiB0eXBlcy5Ccmljazxhbnk+W10gPSBbXG4gIC4uLldlYnNpdGUsXG4gIC4uLkJsb2csXG4gIE15SGVyb1VuaXQsXG4gIE1kd3BIZXJvVW5pdFxuICAvLyBQdXQgaGVyZSB5b3VyIG90aGVyIGJyaWNrcy4uLlxuXVxuXG5leHBvcnQgZGVmYXVsdCBicmlja3NcbiIsICJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRleHQsIFJpY2hUZXh0LCBJbWFnZSwgdHlwZXMgfSBmcm9tICdyZWFjdC1icmlja3MvZnJvbnRlbmQnXG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvY2FsIFR5cGVzXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG50eXBlIFBhZGRpbmcgPSAnYmlnJyB8ICdzbWFsbCdcblxuaW50ZXJmYWNlIEhlcm9Vbml0UHJvcHMge1xuICBwYWRkaW5nOiBQYWRkaW5nXG4gIHRpdGxlOiBzdHJpbmdcbiAgdGV4dDogc3RyaW5nXG59XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENvbXBvbmVudCB0byBiZSByZW5kZXJlZFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuY29uc3QgTXlIZXJvVW5pdDogdHlwZXMuQnJpY2s8SGVyb1VuaXRQcm9wcz4gPSAoeyBwYWRkaW5nIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2BtYXgtdy14bCBteC1hdXRvIHB4LTYgJHtcbiAgICAgICAgcGFkZGluZyA9PT0gJ2JpZycgPyAncHktMjAnIDogJ3B5LTEyJ1xuICAgICAgfWB9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBwcm9wTmFtZT1cImljb25cIlxuICAgICAgICAgIGFsdD1cIkljb25cIlxuICAgICAgICAgIG1heFdpZHRoPXs4MH1cbiAgICAgICAgICBhc3BlY3RSYXRpbz17MX1cbiAgICAgICAgICBpbWFnZUNsYXNzTmFtZT1cInctMjAgbWItNVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxUZXh0XG4gICAgICAgICAgcmVuZGVyQmxvY2s9eyhwcm9wcykgPT4gKFxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIHNtOnRleHQtNHhsIHRleHQtY2VudGVyIGZvbnQtYmxhY2sgdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGUgbGVhZGluZy10aWdodCBtYi0zXCI+XG4gICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgKX1cbiAgICAgICAgICByZW5kZXJQbGFjZWhvbGRlcj17KHByb3BzKSA9PiAoXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvcGFjaXR5LTMwXCI+e3Byb3BzLmNoaWxkcmVufTwvc3Bhbj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSBhIHRpdGxlLi4uXCJcbiAgICAgICAgICBwcm9wTmFtZT1cInRpdGxlXCJcbiAgICAgICAgLz5cbiAgICAgICAgPFJpY2hUZXh0XG4gICAgICAgICAgcmVuZGVyQmxvY2s9eyhwcm9wcykgPT4gKFxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCB0ZXh0LWNlbnRlciBsZWFkaW5nLXJlbGF4ZWQgdGV4dC1ncmF5LTcwMCBkYXJrOnRleHQtZ3JheS0xMDBcIj5cbiAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICl9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIGEgdGV4dC4uLlwiXG4gICAgICAgICAgcHJvcE5hbWU9XCJ0ZXh0XCJcbiAgICAgICAgICBhbGxvd2VkRmVhdHVyZXM9e1tcbiAgICAgICAgICAgIHR5cGVzLlJpY2hUZXh0RmVhdHVyZXMuQm9sZCxcbiAgICAgICAgICAgIHR5cGVzLlJpY2hUZXh0RmVhdHVyZXMuSXRhbGljLFxuICAgICAgICAgICAgdHlwZXMuUmljaFRleHRGZWF0dXJlcy5IaWdobGlnaHQsXG4gICAgICAgICAgICB0eXBlcy5SaWNoVGV4dEZlYXR1cmVzLkNvZGUsXG4gICAgICAgICAgICB0eXBlcy5SaWNoVGV4dEZlYXR1cmVzLkxpbmssXG4gICAgICAgICAgXX1cbiAgICAgICAgICByZW5kZXJDb2RlPXsocHJvcHMpID0+IChcbiAgICAgICAgICAgIDxjb2RlIGNsYXNzTmFtZT1cInRleHQtc20gcHktMSBweC0yIGJnLWdyYXktMjAwIGRhcms6YmctZ3JheS03MDAgcm91bmRlZFwiPlxuICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L2NvZGU+XG4gICAgICAgICAgKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEJyaWNrIFNjaGVtYVxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuTXlIZXJvVW5pdC5zY2hlbWEgPSB7XG4gIG5hbWU6ICdteS1oZXJvLXVuaXQnLFxuICBsYWJlbDogJ0N1c3RvbSBIZXJvIFVuaXQnLFxuICBnZXREZWZhdWx0UHJvcHM6ICgpID0+ICh7XG4gICAgcGFkZGluZzogJ2JpZycsXG4gICAgdGl0bGU6ICdUaGlzIGlzIGEgY3VzdG9tIEhlcm8gVW5pdCcsXG4gICAgdGV4dDogXCJXZSBhcmUgYSBoaS10ZWNoIHdlYiBkZXZlbG9wbWVudCBjb21wYW55IGNvbW1pdHRlZCB0byBkZWxpdmVyIGdyZWF0IHByb2R1Y3RzIG9uIHRpbWUuIFdlIGxvdmUgdG8gdW5kZXJzdGFuZCBvdXIgY3VzdG9tZXJzJyBuZWVkcyBhbmQgZXhjZWVkIGV4cGVjdGF0aW9ucy5cIixcbiAgfSksXG4gIHNpZGVFZGl0UHJvcHM6IFtcbiAgICB7XG4gICAgICBuYW1lOiAncGFkZGluZycsXG4gICAgICBsYWJlbDogJ1BhZGRpbmcnLFxuICAgICAgdHlwZTogdHlwZXMuU2lkZUVkaXRQcm9wVHlwZS5TZWxlY3QsXG4gICAgICBzZWxlY3RPcHRpb25zOiB7XG4gICAgICAgIGRpc3BsYXk6IHR5cGVzLk9wdGlvbnNEaXNwbGF5LlNlbGVjdCxcbiAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgIHsgdmFsdWU6ICdiaWcnLCBsYWJlbDogJ0JpZyBQYWRkaW5nJyB9LFxuICAgICAgICAgIHsgdmFsdWU6ICdzbWFsbCcsIGxhYmVsOiAnU21hbGwgUGFkZGluZycgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgXSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlIZXJvVW5pdFxuIiwgImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVGV4dCwgUmljaFRleHQsIHR5cGVzIH0gZnJvbSAncmVhY3QtYnJpY2tzL2Zyb250ZW5kJ1xuaW1wb3J0IHsgQ29sb3JzLCBCZ0NvbG9ycywgUGFyYWdyYXBoQ29sb3JzLCBIZWFkbGluZUFsaWdubWVudCwgUGFyYWdyYXBoQWxpZ25tZW50IH0gZnJvbSAnLi4vdXRpbHMvY29sb3JzJ1xuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2NhbCBUeXBlc1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbnRlcmZhY2UgSGVyb1VuaXRQcm9wcyB7XG4gIGNvbG9yOiB0eXBlcy5JQ29sb3JcbiAgcGFyYWdyYXBoQ29sb3I6IHR5cGVzLklDb2xvclxuICBiZ0NvbG9yOiB0eXBlcy5JQ29sb3JcbiAgaGVhZGxpbmVBbGlnbm1lbnQ/OiAgJ2xlZnQnIHwgJ2NlbnRlcicgfCAncmlnaHQnXG4gIHBhcmFncmFwaEFsaWdubWVudD86ICAnbGVmdCcgfCAnY2VudGVyJyB8ICdyaWdodCdcbiAgZnVsbEhlaWdodDogYm9vbGVhblxuICBiYWNrZ3JvdW5kOiB0eXBlcy5JSW1hZ2VTb3VyY2VcbiAgdGl0bGU6IHN0cmluZ1xuICB0ZXh0OiBzdHJpbmdcbn1cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ29tcG9uZW50IHRvIGJlIHJlbmRlcmVkXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5jb25zdCBNZHdwQmdIZXJvVW5pdDogdHlwZXMuQnJpY2s8SGVyb1VuaXRQcm9wcz4gPSAoeyBiYWNrZ3JvdW5kLCBjb2xvciwgYmdDb2xvciwgcGFyYWdyYXBoQ29sb3IsIGhlYWRsaW5lQWxpZ25tZW50LCBwYXJhZ3JhcGhBbGlnbm1lbnQsZnVsbEhlaWdodCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgIFxuICAgIDxzZWN0aW9uIFxuICAgIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBgdXJsKCR7YmFja2dyb3VuZC5zcmN9KWB9fSBcbiAgICBcbiAgICBjbGFzc05hbWU9e2B3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIgcHgtNiBwYi0xMiBhbnRpYWxpYXNlZCBiZy1jb3ZlciAgXG4gICAgXG4gICAgXG4gICAgJHtcbiAgICAgIGZ1bGxIZWlnaHQgPyAnbWluLWgtc2NyZWVuJyA6ICcnXG4gICAgfWB9PlxuICAgICAgXG4gIFxuICAgIFxuICBcblxuICAgIFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgbXgtYXV0byBtYXgtdy03eGwgYH0+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbWF4LXctbGcgcHgtNCBweS0zMiBteC1hdXRvIHRleHQtbGVmdCBtZDptYXgtdy1ub25lIG1kOnRleHQtY2VudGVyXCI+XG4gICAgICAgIDxUZXh0XG4gICAgICAgICAgcmVuZGVyQmxvY2s9eyhwcm9wcykgPT4gKFxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17YHRleHQtNXhsIGZvbnQtZXh0cmFib2xkIGxlYWRpbmctMTAgdHJhY2tpbmctdGlnaHQgdGV4dC0ke2hlYWRsaW5lQWxpZ25tZW50fSAke1xuICAgICAgICAgICAgICBiZ0NvbG9yLmNsYXNzTmFtZVxuICAgICAgICAgICAgfSBzbTpsZWFkaW5nLW5vbmUgbWQ6dGV4dC02eGwgbGc6dGV4dC03eGxcbiAgICAgICAgICAgICR7Y29sb3I/LmNsYXNzTmFtZX1cbiAgICAgICAgICAgIGB9PlxuICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICl9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIGEgdGl0bGUuLi5cIlxuICAgICAgICAgIHByb3BOYW1lPVwidGl0bGVcIlxuICAgICAgICAvPlxuICAgICAgICA8UmljaFRleHRcbiAgICAgICAgICByZW5kZXJCbG9jaz17KHByb3BzKSA9PiAoXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2BteC1hdXRvIG10LTUgJHtwYXJhZ3JhcGhDb2xvcj8uY2xhc3NOYW1lfSB0ZXh0LSR7cGFyYWdyYXBoQWxpZ25tZW50fSBtZDptdC0xMiBtZDptYXgtdy1sZyBsZzp0ZXh0LWxnYH0+XG4gICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICApfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSBhIHRleHQuLi5cIlxuICAgICAgICAgIHByb3BOYW1lPVwidGV4dFwiXG4gICAgICAgICAgYWxsb3dlZEZlYXR1cmVzPXtbXG4gICAgICAgICAgICB0eXBlcy5SaWNoVGV4dEZlYXR1cmVzLkJvbGQsXG4gICAgICAgICAgICB0eXBlcy5SaWNoVGV4dEZlYXR1cmVzLkl0YWxpYyxcbiAgICAgICAgICAgIHR5cGVzLlJpY2hUZXh0RmVhdHVyZXMuSGlnaGxpZ2h0LFxuICAgICAgICAgICAgdHlwZXMuUmljaFRleHRGZWF0dXJlcy5Db2RlLFxuICAgICAgICAgICAgdHlwZXMuUmljaFRleHRGZWF0dXJlcy5MaW5rLFxuICAgICAgICAgIF19XG4gICAgICAgICAgcmVuZGVyQ29kZT17KHByb3BzKSA9PiAoXG4gICAgICAgICAgICA8Y29kZSBjbGFzc05hbWU9XCJ0ZXh0LXNtIHB5LTEgcHgtMiBiZy1ncmF5LTIwMCBkYXJrOmJnLWdyYXktNzAwIHJvdW5kZWRcIj5cbiAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9jb2RlPlxuICAgICAgICAgICl9XG4gICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEJyaWNrIFNjaGVtYVxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuTWR3cEJnSGVyb1VuaXQuc2NoZW1hID0ge1xuICBuYW1lOiAnbWR3cC1oZXJvLXVuaXQnLFxuICBsYWJlbDonbWR3cCBIZXJvIFVuaXQnLFxuICBnZXREZWZhdWx0UHJvcHM6ICgpID0+ICh7XG4gICAgQ29sb3I6IHsgY29sb3I6ICcjMDAwMDAwJywgY2xhc3NOYW1lOiAndGV4dC1ibGFjaycgfSxcbiAgICBQYXJhZ3JhcGhDb2xvcjogeyBjb2xvcjogJyNmZmZmZmYnLCBjbGFzc05hbWU6ICd0ZXh0LXdoaXRlJyB9LFxuICAgIEJnQ29sb3I6IHsgY29sb3I6ICcjZmZmZmZmJywgY2xhc3NOYW1lOiAnYmctd2hpdGUnIH0sXG4gICAgSGVhZGxpbmVBbGlnbm1lbnQ6IHsgY2xhc3NOYW1lOiAndGV4dC1jZW50ZXInIH0sXG4gICAgUGFyYWdyYXBoQWxpZ25tZW50OiB7IGNsYXNzTmFtZTogJ3RleHQtY2VudGVyJyB9LFxuICAgIGZ1bGxIZWlnaHQ6IGZhbHNlLFxuICAgIHRpdGxlOiAnVGhpcyBpcyBhIGN1c3RvbSBIZXJvIFVuaXQnLFxuICAgIHRleHQ6IFwiV2UgYXJlIGEgaGktdGVjaCB3ZWIgZGV2ZWxvcG1lbnQgY29tcGFueSBjb21taXR0ZWQgdG8gZGVsaXZlciBncmVhdCBwcm9kdWN0cyBvbiB0aW1lLiBXZSBsb3ZlIHRvIHVuZGVyc3RhbmQgb3VyIGN1c3RvbWVycycgbmVlZHMgYW5kIGV4Y2VlZCBleHBlY3RhdGlvbnMuXCIsXG4gIH0pLFxuICBzaWRlRWRpdFByb3BzOiBbXG4gICAge1xuICAgICAgbmFtZTogJ2JhY2tncm91bmQnLFxuICAgICAgbGFiZWw6ICdCYWNrZ3JvdW5kIEltYWdlJyxcbiAgICAgIHR5cGU6IHR5cGVzLlNpZGVFZGl0UHJvcFR5cGUuSW1hZ2UsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnY29sb3InLFxuICAgICAgbGFiZWw6ICdIZWFkbGluZSBDb2xvcicsXG4gICAgICB0eXBlOiB0eXBlcy5TaWRlRWRpdFByb3BUeXBlLlNlbGVjdCxcbiAgICAgIHNlbGVjdE9wdGlvbnM6IHtcbiAgICAgICAgZGlzcGxheTogdHlwZXMuT3B0aW9uc0Rpc3BsYXkuQ29sb3IsXG4gICAgICAgIG9wdGlvbnM6IENvbG9yc1xuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdiZ0NvbG9yJyxcbiAgICAgIGxhYmVsOiAnSGVhZGxpbmUgQmFja2dyb3VuZCBDb2xvcicsXG4gICAgICB0eXBlOiB0eXBlcy5TaWRlRWRpdFByb3BUeXBlLlNlbGVjdCxcbiAgICAgIHNlbGVjdE9wdGlvbnM6IHtcbiAgICAgICAgZGlzcGxheTogdHlwZXMuT3B0aW9uc0Rpc3BsYXkuQ29sb3IsXG4gICAgICAgIG9wdGlvbnM6IEJnQ29sb3JzXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ3BhcmFncmFwaENvbG9yJyxcbiAgICAgIGxhYmVsOiAnUGFyYWdyYXBoIENvbG9yJyxcbiAgICAgIHR5cGU6IHR5cGVzLlNpZGVFZGl0UHJvcFR5cGUuU2VsZWN0LFxuICAgICAgc2VsZWN0T3B0aW9uczoge1xuICAgICAgICBkaXNwbGF5OiB0eXBlcy5PcHRpb25zRGlzcGxheS5Db2xvcixcbiAgICAgICAgb3B0aW9uczogUGFyYWdyYXBoQ29sb3JzXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2hlYWRsaW5lQWxpZ25tZW50JyxcbiAgICAgIGxhYmVsOiAnSGVhZGxpbmUgQWxpZ25tZW50JyxcbiAgICAgIHR5cGU6IHR5cGVzLlNpZGVFZGl0UHJvcFR5cGUuU2VsZWN0LFxuICAgICAgc2VsZWN0T3B0aW9uczoge1xuICAgICAgICBkaXNwbGF5OiB0eXBlcy5PcHRpb25zRGlzcGxheS5TZWxlY3QsXG4gICAgICAgIG9wdGlvbnM6IEhlYWRsaW5lQWxpZ25tZW50XG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ3BhcmFncmFwaEFsaWdubWVudCcsXG4gICAgICBsYWJlbDogJ1BhcmFncmFwaCBBbGlnbm1lbnQnLFxuICAgICAgdHlwZTogdHlwZXMuU2lkZUVkaXRQcm9wVHlwZS5TZWxlY3QsXG4gICAgICBzZWxlY3RPcHRpb25zOiB7XG4gICAgICAgIGRpc3BsYXk6IHR5cGVzLk9wdGlvbnNEaXNwbGF5LlNlbGVjdCxcbiAgICAgICAgb3B0aW9uczogUGFyYWdyYXBoQWxpZ25tZW50XG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2Z1bGxIZWlnaHQnLFxuICAgICAgbGFiZWw6ICdGdWxsIEhlaWdodCcsXG4gICAgICB0eXBlOiB0eXBlcy5TaWRlRWRpdFByb3BUeXBlLkJvb2xlYW4sXG4gICAgfSxcbiAgXSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWR3cEJnSGVyb1VuaXRcbiIsICJleHBvcnQgY29uc3QgSGVhZGxpbmVBbGlnbm1lbnQgPSBbXG4gIHtcbiAgICBsYWJlbDogJ0xlZnQnLFxuICAgIHZhbHVlOiAnbGVmdCdcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnQ2VudGVyJyxcbiAgICB2YWx1ZTogJ2NlbnRlcidcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnUmlnaHQnLFxuICAgIHZhbHVlOiAncmlnaHQnXG4gIH1cbl1cblxuZXhwb3J0IGNvbnN0IFBhcmFncmFwaEFsaWdubWVudCA9IFtcbiAge1xuICAgIGxhYmVsOiAnTGVmdCcsXG4gICAgdmFsdWU6ICdsZWZ0J1xuICB9LFxuICB7XG4gICAgbGFiZWw6ICdDZW50ZXInLFxuICAgIHZhbHVlOiAnY2VudGVyJ1xuICB9LFxuICB7XG4gICAgbGFiZWw6ICdSaWdodCcsXG4gICAgdmFsdWU6ICdyaWdodCdcbiAgfVxuXVxuXG5leHBvcnQgY29uc3QgQ29sb3JzID0gW1xuICBcbiAge1xuICAgIGxhYmVsOiAnQnJvd24nLFxuICAgIHZhbHVlOiB7IGNvbG9yOiAnIzQ2MmMzNycsIGNsYXNzTmFtZTogJ3RleHQtYnJvd24nIH0sXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ0xpZ2h0IGJyb3duJyxcbiAgICB2YWx1ZTogeyBjb2xvcjogJyNhODkzOGMnLCBjbGFzc05hbWU6ICd0ZXh0LWxpZ2h0LWJyb3duJyB9LFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdSZWQnLFxuICAgIHZhbHVlOiB7IGNvbG9yOiAnI2FlMWUyYycsIGNsYXNzTmFtZTogJ3RleHQtcmVkJyB9LFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdPcmFuZ2UnLFxuICAgIHZhbHVlOiB7IGNvbG9yOiAnI2NhMzgzYicsIGNsYXNzTmFtZTogJ3RleHQtb3JhbmdlJyB9LFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdMaWdodCBncmF5JyxcbiAgICB2YWx1ZTogeyBjb2xvcjogJyNlOGU5ZTEnLCBjbGFzc05hbWU6ICd0ZXh0LWdyYXknIH0sXG4gIH0sXG5dXG5cbmV4cG9ydCBjb25zdCBQYXJhZ3JhcGhDb2xvcnMgPSBbXG4gIFxuICB7XG4gICAgbGFiZWw6ICdCcm93bicsXG4gICAgdmFsdWU6IHsgY29sb3I6ICcjNDYyYzM3JywgY2xhc3NOYW1lOiAndGV4dC1icm93bicgfSxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnTGlnaHQgYnJvd24nLFxuICAgIHZhbHVlOiB7IGNvbG9yOiAnI2E4OTM4YycsIGNsYXNzTmFtZTogJ3RleHQtbGlnaHQtYnJvd24nIH0sXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ1JlZCcsXG4gICAgdmFsdWU6IHsgY29sb3I6ICcjYWUxZTJjJywgY2xhc3NOYW1lOiAndGV4dC1yZWQnIH0sXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ09yYW5nZScsXG4gICAgdmFsdWU6IHsgY29sb3I6ICcjY2EzODNiJywgY2xhc3NOYW1lOiAndGV4dC1vcmFuZ2UnIH0sXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ0xpZ2h0IGdyYXknLFxuICAgIHZhbHVlOiB7IGNvbG9yOiAnI2U4ZTllMScsIGNsYXNzTmFtZTogJ3RleHQtZ3JheScgfSxcbiAgfSxcbl1cblxuZXhwb3J0IGNvbnN0IEJnQ29sb3JzID0gW1xuICBcbiAge1xuICAgIGxhYmVsOiAnQnJvd24nLFxuICAgIHZhbHVlOiB7IGNvbG9yOiAnIzQ2MmMzNycsIGNsYXNzTmFtZTogJ2JnLWJyb3duJyB9LFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdMaWdodCBicm93bicsXG4gICAgdmFsdWU6IHsgY29sb3I6ICcjYTg5MzhjJywgY2xhc3NOYW1lOiAnYmctbGlnaHQtYnJvd24nIH0sXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ1JlZCcsXG4gICAgdmFsdWU6IHsgY29sb3I6ICcjYWUxZTJjJywgY2xhc3NOYW1lOiAnYmctcmVkJyB9LFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdPcmFuZ2UnLFxuICAgIHZhbHVlOiB7IGNvbG9yOiAnI2NhMzgzYicsIGNsYXNzTmFtZTogJ2JnLW9yYW5nZScgfSxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnTGlnaHQgZ3JheScsXG4gICAgdmFsdWU6IHsgY29sb3I6ICcjZThlOWUxJywgY2xhc3NOYW1lOiAnYmctZ3JheScgfSxcbiAgfSxcbl0iLCAiaW1wb3J0IHsgdHlwZXMgfSBmcm9tICdyZWFjdC1icmlja3MvZnJvbnRlbmQnXG5cbmNvbnN0IHBhZ2VUeXBlczogdHlwZXMuSVBhZ2VUeXBlW10gPSBbXG4gIHtcbiAgICBuYW1lOiAncGFnZScsXG4gICAgcGx1cmFsTmFtZTogJ3BhZ2VzJyxcbiAgICBkZWZhdWx0TG9ja2VkOiBmYWxzZSxcbiAgICBkZWZhdWx0U3RhdHVzOiB0eXBlcy5QYWdlU3RhdHVzLlB1Ymxpc2hlZCxcbiAgICBnZXREZWZhdWx0Q29udGVudDogKCkgPT4gW10sXG4gICAgZXhjbHVkZWRCbG9ja1R5cGVzOiBbXG4gICAgICAndGl0bGUnLFxuICAgICAgJ3BhcmFncmFwaCcsXG4gICAgICAndmlkZW8nLFxuICAgICAgJ2ltYWdlJyxcbiAgICAgICdxdW90ZScsXG4gICAgICAnc29jaWFsLWVtYmVkJyxcbiAgICAgICdjb2RlLWJsb2NrJyxcbiAgICAgICd0d2VldC1saWdodCcsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdibG9nJyxcbiAgICBwbHVyYWxOYW1lOiAnQmxvZycsXG4gICAgZ2V0RGVmYXVsdENvbnRlbnQ6ICgpID0+IFtdLFxuICAgIGFsbG93ZWRCbG9ja1R5cGVzOiBbXG4gICAgICAndGl0bGUnLFxuICAgICAgJ3BhcmFncmFwaCcsXG4gICAgICAndmlkZW8nLFxuICAgICAgJ2ltYWdlJyxcbiAgICAgICdxdW90ZScsXG4gICAgICAnc29jaWFsLWVtYmVkJyxcbiAgICAgICdjb2RlLWJsb2NrJyxcbiAgICAgICd0d2VldCcsXG4gICAgICAndHdlZXQtbGlnaHQnLFxuICAgIF0sXG4gIH0sXG5dXG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2VUeXBlc1xuIiwgImltcG9ydCB7IExpbmssIHVzZUxvY2F0aW9uIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyB0eXBlcyB9IGZyb20gJ3JlYWN0LWJyaWNrcy9mcm9udGVuZCdcblxuY29uc3QgUmVtaXhMaW5rOiB0eXBlcy5SZW5kZXJMb2NhbExpbmsgPSAoe1xuICBocmVmLFxuICBjbGFzc05hbWUsXG4gIGFjdGl2ZUNsYXNzTmFtZSxcbiAgaXNBZG1pbixcbiAgY2hpbGRyZW4sXG59KSA9PiB7XG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKVxuXG4gIGxldCBhbmNob3JDbGFzc05hbWUgPSAnJ1xuXG4gIGlmIChsb2NhdGlvbi5wYXRobmFtZSA9PT0gaHJlZikge1xuICAgIGFuY2hvckNsYXNzTmFtZSA9IGFjdGl2ZUNsYXNzTmFtZSB8fCAnJ1xuICB9IGVsc2Uge1xuICAgIGFuY2hvckNsYXNzTmFtZSA9IGNsYXNzTmFtZSB8fCAnJ1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGluayB0bz17aHJlZn0+XG4gICAgICA8YSBjbGFzc05hbWU9e2FuY2hvckNsYXNzTmFtZX0+e2NoaWxkcmVufTwvYT5cbiAgICA8L0xpbms+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVtaXhMaW5rXG4iLCAiaW50ZXJmYWNlIEVycm9yTWVzc2FnZVByb3BzIHtcbiAgZXJyb3I6IEVycm9yXG59XG5cbmNvbnN0IEVycm9yTWVzc2FnZTogUmVhY3QuRkM8RXJyb3JNZXNzYWdlUHJvcHM+ID0gKHsgZXJyb3IgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gbWF4LXctNXhsIHB4LTYgbXktMTJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcmVkLTUwIHB5LTMgcHgtNiBib3JkZXItMiBib3JkZXItcmVkLTIwMCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWV4dHJhYm9sZCBtYi0yXCI+U29tZXRoaW5nIHdlbnQgd3Jvbmc8L2gyPlxuICAgICAgICA8cD5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JNZXNzYWdlXG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IEFkbWluLCBBcHBTZXR0aW5ncyB9IGZyb20gJ3JlYWN0LWJyaWNrcydcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogJ1JlYWN0IEJyaWNrcyBBcHAgU2V0dGluZ3MnLFxuICB9XG59XG5cbmNvbnN0IEFkbWluQXBwU2V0dGluZ3M6IFJlYWN0LkZDID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxBZG1pbj5cbiAgICAgIDxBcHBTZXR0aW5ncyAvPlxuICAgIDwvQWRtaW4+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWRtaW5BcHBTZXR0aW5nc1xuIiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBBZG1pbiwgUGxheWdyb3VuZCB9IGZyb20gJ3JlYWN0LWJyaWNrcydcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogJ1JlYWN0IEJyaWNrcyBQbGF5Z3JvdW5kJyxcbiAgfVxufVxuXG5jb25zdCBBZG1pblBsYXlncm91bmQ6IFJlYWN0LkZDID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxBZG1pbj5cbiAgICAgIDxQbGF5Z3JvdW5kIC8+XG4gICAgPC9BZG1pbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBZG1pblBsYXlncm91bmRcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgQWRtaW4sIEVkaXRvciB9IGZyb20gJ3JlYWN0LWJyaWNrcydcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogJ1JlYWN0IEJyaWNrcyBFZGl0b3InLFxuICB9XG59XG5cbmNvbnN0IEFkbWluRWRpdG9yOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8QWRtaW4+XG4gICAgICA8RWRpdG9yIC8+XG4gICAgPC9BZG1pbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBZG1pbkVkaXRvclxuIiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBBZG1pbiwgTG9naW4gfSBmcm9tICdyZWFjdC1icmlja3MnXG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICdSZWFjdCBCcmlja3MgTG9naW4nLFxuICB9XG59XG5cbmNvbnN0IEFkbWluTG9naW46IFJlYWN0LkZDID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxBZG1pbiBpc0xvZ2luPlxuICAgICAgPExvZ2luIC8+XG4gICAgPC9BZG1pbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBZG1pbkxvZ2luXG4iLCAiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tICdyZW1peCdcbmltcG9ydCB7XG4gIFJlYWN0QnJpY2tzQ29udGV4dCxcbiAgUGFnZVZpZXdlcixcbiAgZmV0Y2hQYWdlLFxuICBjbGVhblBhZ2UsXG59IGZyb20gJ3JlYWN0LWJyaWNrcy9mcm9udGVuZCdcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCdcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSAnfi9jb21wb25lbnRzL0Vycm9yTWVzc2FnZSdcbmltcG9ydCBMYXlvdXQgZnJvbSAnfi9jb21wb25lbnRzL0xheW91dCdcblxuZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgSE9NRV9QQUdFID0gJ2hvbWUnXG4gIHRyeSB7XG4gICAgY29uc3QgcGFnZSA9IGF3YWl0IGZldGNoUGFnZShIT01FX1BBR0UsIHByb2Nlc3MuZW52LkFQSV9LRVkgYXMgc3RyaW5nKVxuICAgIHJldHVybiB7IHBhZ2UgfVxuICB9IGNhdGNoIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBmaW5kIHRoZSBcIiR7SE9NRV9QQUdFfVwiIHBhZ2UuYClcbiAgfVxufVxuXG5jb25zdCBQYWdlID0gKCkgPT4ge1xuICBjb25zdCB7IHBhZ2UgfSA9IHVzZUxvYWRlckRhdGEoKVxuICAvLyBDbGVhbiB0aGUgcmVjZWl2ZWQgY29udGVudFxuICAvLyBSZW1vdmVzIHVua25vd24gb3Igbm90IGFsbG93ZWQgYnJpY2tzXG4gIGNvbnN0IHsgcGFnZVR5cGVzLCBicmlja3MgfSA9IHVzZUNvbnRleHQoUmVhY3RCcmlja3NDb250ZXh0KVxuICBjb25zdCBwYWdlT2sgPSBwYWdlID8gY2xlYW5QYWdlKHBhZ2UsIHBhZ2VUeXBlcywgYnJpY2tzKSA6IG51bGxcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8UGFnZVZpZXdlciBwYWdlPXtwYWdlT2t9IC8+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogJ1JlYWN0IEJyaWNrcyBCbG9nJyxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gRXJyb3JCb3VuZGFyeSh7IGVycm9yIH06IHsgZXJyb3I6IEVycm9yIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPEVycm9yTWVzc2FnZSBlcnJvcj17ZXJyb3J9IC8+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZVxuIiwgImltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJ1xuXG5jb25zdCBMYXlvdXQ6IFJlYWN0LkZDID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtaW4taC1zY3JlZW4ganVzdGlmeS1iZXR3ZWVuIGZvbnQtY29udGVudCBhbnRpYWxpYXNlZFwiPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiaXNvbGF0ZSBtYi1hdXRvXCI+e2NoaWxkcmVufTwvbWFpbj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnXG5cbmNvbnN0IEhlYWRlcjogUmVhY3QuRkMgPSAoKSA9PiAoXG4gIDxoZWFkZXIgY2xhc3NOYW1lPVwiYmctd2hpdGUgc206aC0yMCBweS01IGJvcmRlci1iIHNtOnN0aWNreSB0b3AtMCB6LTEwXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy01eGwgbXgtYXV0byBweC02XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IGp1c3RpZnktY2VudGVyIHNtOmp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IGl0ZW1zLWNlbnRlciBtYi00IHNtOm1iLTBcIj5cbiAgICAgICAgICA8YSBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9XCIvcmVhY3QtYnJpY2tzLWxvZ28uc3ZnXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy00OFwiXG4gICAgICAgICAgICAgIGFsdD1cIlJlYWN0IEJyaWNrc1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOm1sLTggZmxleCBzcGFjZS14LTUgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL2Jsb2cvbGlzdFwiIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgaG92ZXI6dGV4dC1waW5rLTcwMFwiPlxuICAgICAgICAgICAgICBQb3N0IExpc3RcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIHRvPVwiL2Jsb2cvdGh1bWJuYWlsc1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgaG92ZXI6dGV4dC1waW5rLTcwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFBvc3QgVGh1bWJuYWlsc1xuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPExpbmtcbiAgICAgICAgICB0bz1cIi9hZG1pblwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwicHktMiBweC01IHJvdW5kZWQgdGV4dC13aGl0ZSBmb250LW1lZGl1bSBiZy1jeWFuLTUwMCBob3ZlcjpiZy1jeWFuLTYwMCBob3ZlcjpzaGFkb3ctbGcgdHJhbnNpdGlvbiBkdXJhdGlvbi0yMDBcIlxuICAgICAgICA+XG4gICAgICAgICAgRWRpdCBjb250ZW50XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2hlYWRlcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG4iLCAiY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiYmctZ3JheS01MCBib3JkZXItdCBweS0xMiBoLTMyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTV4bCBteC1hdXRvIGZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC00XCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPVwiL3JlYWN0LWJyaWNrcy1pY29uLnN2Z1wiXG4gICAgICAgICAgICBhbHQ9XCJSZWFjdCBCcmlja3NcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy04XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQtc20gdHJhY2tpbmctd2lkZXJcIj5cbiAgICAgICAgICAgIFJlbWl4IGJsb2cgc3RhcnRlclxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIHRleHQtc21cIj5cbiAgICAgICAgICBcdTAwQTkge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX17JyAnfVxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3JlYWN0YnJpY2tzLmNvbVwiIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtcGluay02MDBcIj5cbiAgICAgICAgICAgIFJlYWN0IEJyaWNrc1xuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvb3Rlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXJcbiIsICJpbXBvcnQgeyBPdXRsZXQgfSBmcm9tICdyZW1peCdcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgTGF5b3V0IGZyb20gJ34vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gJ34vY29tcG9uZW50cy9FcnJvck1lc3NhZ2UnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2coKSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxPdXRsZXQgLz5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiAnQmxvZycsXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQm91bmRhcnkoeyBlcnJvciB9OiB7IGVycm9yOiBFcnJvciB9KSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxFcnJvck1lc3NhZ2UgZXJyb3I9e2Vycm9yfSAvPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG4iLCAiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgUmVhY3RCcmlja3NDb250ZXh0LFxuICBQYWdlVmlld2VyLFxuICBmZXRjaFBhZ2UsXG4gIGNsZWFuUGFnZSxcbn0gZnJvbSAncmVhY3QtYnJpY2tzL2Zyb250ZW5kJ1xuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tICdyZW1peCdcblxuZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jICh7IHBhcmFtcyB9OiB7IHBhcmFtczogeyBzbHVnOiBzdHJpbmcgfSB9KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcGFnZSA9IGF3YWl0IGZldGNoUGFnZShwYXJhbXMuc2x1ZywgcHJvY2Vzcy5lbnYuQVBJX0tFWSBhcyBzdHJpbmcpXG4gICAgcmV0dXJuIHsgcGFnZSB9XG4gIH0gY2F0Y2gge1xuICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGZpbmQgdGhlIFwiJHtwYXJhbXMuc2x1Z31cIiBwb3N0LmApXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICh7IGRhdGEgfSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBkYXRhPy5wYWdlPy5tZXRhPy50aXRsZSB8fCAnQmxvZyBwb3N0JyxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xuICBjb25zdCB7IHBhZ2UgfSA9IHVzZUxvYWRlckRhdGEoKVxuICAvLyBDbGVhbiB0aGUgcmVjZWl2ZWQgY29udGVudFxuICAvLyBSZW1vdmVzIHVua25vd24gb3Igbm90IGFsbG93ZWQgYnJpY2tzXG4gIGNvbnN0IHsgcGFnZVR5cGVzLCBicmlja3MgfSA9IHVzZUNvbnRleHQoUmVhY3RCcmlja3NDb250ZXh0KVxuICBjb25zdCBwYWdlT2sgPSBwYWdlID8gY2xlYW5QYWdlKHBhZ2UsIHBhZ2VUeXBlcywgYnJpY2tzKSA6IG51bGxcblxuICByZXR1cm4gPFBhZ2VWaWV3ZXIgcGFnZT17cGFnZU9rfSAvPlxufVxuIiwgImltcG9ydCB7IGZldGNoUGFnZXMsIHR5cGVzIH0gZnJvbSAncmVhY3QtYnJpY2tzL2Zyb250ZW5kJ1xuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJ1xuXG5pbXBvcnQgUG9zdFRodW1ibmFpbCBmcm9tICd+L2NvbXBvbmVudHMvUG9zdFRodW1ibmFpbCdcblxuZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBmZXRjaFBhZ2VzKHByb2Nlc3MuZW52LkFQSV9LRVkgYXMgc3RyaW5nLCB7XG4gICAgdHlwZTogJ2Jsb2cnLFxuICAgIHBhZ2VTaXplOiAxMDAwLFxuICAgIHNvcnQ6ICctcHVibGlzaGVkQXQnLFxuICB9KVxuICByZXR1cm4geyBwb3N0cyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRodW1ibmFpbHMoKSB7XG4gIGNvbnN0IHsgcG9zdHMgfSA9IHVzZUxvYWRlckRhdGE8eyBwb3N0czogdHlwZXMuUGFnZUZyb21MaXN0W10gfT4oKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbWF4LXctNXhsIG14LWF1dG8gcHktMTYgcHgtNlwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtNHhsIHNtOnRleHQtNnhsIGxnOnRleHQtN3hsIGxlYWRpbmctbm9uZSBmb250LWJsYWNrIHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS05MDAgcGItNCBtdC0xMCBzbTptdC0xMiBtYi00XCI+XG4gICAgICAgIEJsb2dcbiAgICAgIDwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTEwIGZsZXggZmxleC13cmFwXCI+XG4gICAgICAgIHtwb3N0cz8ubWFwKChwb3N0KSA9PiAoXG4gICAgICAgICAgPFBvc3RUaHVtYm5haWxcbiAgICAgICAgICAgIGtleT17cG9zdC5pZH1cbiAgICAgICAgICAgIGhyZWY9e2AvYmxvZy9wb3N0cy8ke3Bvc3Quc2x1Z31gfVxuICAgICAgICAgICAgdGl0bGU9e3Bvc3QubmFtZX1cbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwb3N0Lm1ldGEuZGVzY3JpcHRpb24hfVxuICAgICAgICAgICAgZGF0ZT17ZGF5anMocG9zdC5wdWJsaXNoZWRBdCkuZm9ybWF0KCdERC9NTS9ZWVlZJyl9XG4gICAgICAgICAgICBpbWFnZT17XG4gICAgICAgICAgICAgIHBvc3QubWV0YS5mZWF0dXJlZEltYWdlIHx8XG4gICAgICAgICAgICAgICdodHRwczovL2ltYWdlcy5yZWFjdGJyaWNrcy5jb20vb3JpZ2luYWwvOGIxOTc0YTAtOTFhOC00YWI0LWIwMTQtODNmNjAxOTJmOWI1LnN2ZydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4J1xuXG5pbnRlcmZhY2UgUG9zdFRodW1ibmFpbFByb3BzIHtcbiAgaHJlZjogc3RyaW5nXG4gIHRpdGxlOiBzdHJpbmdcbiAgZGVzY3JpcHRpb246IHN0cmluZ1xuICBkYXRlOiBzdHJpbmdcbiAgaW1hZ2U6IGFueVxufVxuXG5jb25zdCBQb3N0VGh1bWJuYWlsOiBSZWFjdC5GQzxQb3N0VGh1bWJuYWlsUHJvcHM+ID0gKHtcbiAgaHJlZixcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBkYXRlLFxuICBpbWFnZSxcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGluayBjbGFzc05hbWU9XCJ3LTEvMiBtYi04IHAtOCBncm91cFwiIHRvPXtocmVmfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17aW1hZ2V9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdy1mdWxsIGgtNjAgb2JqZWN0LWNvdmVyIG9iamVjdC1jZW50ZXIgdHJhbnNpdGlvbi10cmFuc2Zvcm0gcm91bmRlZFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgYm90dG9tLTAgbGVmdC0wIHJpZ2h0LTAgYmctY3lhbi01MDAgb3BhY2l0eS0wIGdyb3VwLWhvdmVyOm9wYWNpdHktNDAgdHJhbnNpdGlvbi1vcGFjaXR5IHJvdW5kZWRcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTQgdGV4dC14cyB1cHBlcmNhc2UgdGV4dC1ncmF5LTUwMFwiPntkYXRlfTwvZGl2PlxuXG4gICAgICA8aDMgY2xhc3NOYW1lPVwibWItMyB0ZXh0LTJ4bCBmb250LWV4dHJhYm9sZCB0ZXh0LWdyYXktOTAwIGdyb3VwLWhvdmVyOnRleHQtY3lhbi01MDAgdHJhbnNpdGlvbi1jb2xvcnNcIj5cbiAgICAgICAge3RpdGxlfVxuICAgICAgPC9oMz5cblxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMCBtYi00XCI+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICA8L0xpbms+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdFRodW1ibmFpbFxuIiwgImltcG9ydCB7IGZldGNoUGFnZXMsIGZldGNoVGFncywgdHlwZXMgfSBmcm9tICdyZWFjdC1icmlja3MvZnJvbnRlbmQnXG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhLCBMaW5rIH0gZnJvbSAncmVtaXgnXG5cbmltcG9ydCBCbG9nTGlzdEl0ZW0gZnJvbSAnfi9jb21wb25lbnRzL1Bvc3RMaXN0SXRlbSdcblxuZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jICgpID0+IHtcbiAgXG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZmV0Y2hQYWdlcyhwcm9jZXNzLmVudi5BUElfS0VZIGFzIHN0cmluZywge1xuICAgIHR5cGU6ICdibG9nJyxcbiAgICBwYWdlU2l6ZTogMTAwMCxcbiAgICBzb3J0OiAnLXB1Ymxpc2hlZEF0JyxcbiAgfSlcblxuICBjb25zdCB7IGl0ZW1zOiB0YWdzIH0gPSBhd2FpdCBmZXRjaFRhZ3MocHJvY2Vzcy5lbnYuQVBJX0tFWSBhcyBzdHJpbmcpXG4gIHRhZ3Muc29ydCgpXG5cbiAgcmV0dXJuIHsgcG9zdHMsIHRhZ3MgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXN0KCkge1xuICBjb25zdCB7IHBvc3RzLCB0YWdzIH0gPVxuICAgIHVzZUxvYWRlckRhdGE8eyBwb3N0czogdHlwZXMuUGFnZUZyb21MaXN0W107IHRhZ3M6IHN0cmluZ1tdIH0+KClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG9cIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTR4bCBzbTp0ZXh0LTZ4bCBsZzp0ZXh0LTd4bCBsZWFkaW5nLW5vbmUgZm9udC1ibGFjayB0cmFja2luZy10aWdodCB0ZXh0LWdyYXktOTAwIHBiLTQgbXQtMTAgc206bXQtMTIgbWItNFwiPlxuICAgICAgICBCbG9nXG4gICAgICA8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy02eGwgbXgtYXV0byBweC04IHB5LTE2IGZsZXggc3BhY2UteC0yNFwiPlxuICAgICAgICA8c2VjdGlvbiBzdHlsZT17eyBmbGV4OiAnMiAyIDAnIH19IGNsYXNzTmFtZT1cImZsZXgtMiBzcGFjZS15LThcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1waW5rLTUwMCB1cHBlcmNhc2UgbWItOCB0cmFja2luZy13aWRlc3QgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICBSZWNlbnRseSBwdWJsaXNoZWRcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIHtwb3N0cz8ubWFwKChwb3N0KSA9PiAoXG4gICAgICAgICAgICA8QmxvZ0xpc3RJdGVtXG4gICAgICAgICAgICAgIGtleT17cG9zdC5pZH1cbiAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QubmFtZX1cbiAgICAgICAgICAgICAgaHJlZj17YC9ibG9nL3Bvc3RzLyR7cG9zdC5zbHVnfWB9XG4gICAgICAgICAgICAgIGNvbnRlbnQ9e3Bvc3QubWV0YS5kZXNjcmlwdGlvbiB8fCAnJ31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleC0xIHNwYWNlLXktMTZcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtcGluay01MDAgdXBwZXJjYXNlIG1iLTggdHJhY2tpbmctd2lkZXN0IGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICBUYWdzXG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAge3RhZ3NcbiAgICAgICAgICAgICAgICA/LmZpbHRlcigodGFnKSA9PiB0YWcgIT09ICdwb3B1bGFyJylcbiAgICAgICAgICAgICAgICAubWFwKCh0YWcpID0+IChcbiAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgIHRvPXtgL3RhZy8ke3RhZ31gfVxuICAgICAgICAgICAgICAgICAgICBrZXk9e3RhZ31cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHRleHQtc20gZm9udC1ib2xkIG1yLTIgbWItMiB0cmFuc2Zvcm0gZHVyYXRpb24tMjAwIHRleHQtY3lhbi04MDAgYmctY3lhbi0xMDAgaG92ZXI6YmctY3lhbi0yMDAgaG92ZXI6dGV4dC1jeWFuLTkwMCByb3VuZGVkLW1kIHB4LTIgcHktMVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCIgc3R5bGU9e3sgekluZGV4OiAtMSB9fSAvPlxuICAgICAgICAgICAgICAgICAgICB7dGFnfVxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXBpbmstNTAwIHVwcGVyY2FzZSBtYi04IHRyYWNraW5nLXdpZGVzdCBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgTW9zdCBQb3B1bGFyXG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICB7cG9zdHNcbiAgICAgICAgICAgICAgICA/LmZpbHRlcigocG9zdCkgPT4gcG9zdC50YWdzLmZpbmQoKHRhZykgPT4gdGFnID09PSAncG9wdWxhcicpKVxuICAgICAgICAgICAgICAgIC5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3Bvc3QuaWR9PlxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3Bvc3Quc2x1Z31cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktOTAwIGhvdmVyOnRleHQtY3lhbi02MDAgZm9udC1ib2xkIHRleHQtbGcgbGVhZGluZy0xMCB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7cG9zdC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnXG5cbmludGVyZmFjZSBQb3N0TGlzdEl0ZW1Qcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmdcbiAgaHJlZjogc3RyaW5nXG4gIGNvbnRlbnQ6IHN0cmluZ1xufVxuXG5jb25zdCBQb3N0TGlzdEl0ZW06IFJlYWN0LkZDPFBvc3RMaXN0SXRlbVByb3BzPiA9ICh7XG4gIHRpdGxlLFxuICBocmVmLFxuICBjb250ZW50LFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMaW5rXG4gICAgICB0bz17aHJlZn1cbiAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBibG9jayBncm91cCBweS00IHRleHQtZ3JheS05MDAgaG92ZXI6YmctZ3JheS01MCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDAgcC02IC1tLTYgcm91bmRlZFwiXG4gICAgPlxuICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTJ4bFwiPnt0aXRsZX08L2gzPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibXQtNCBsZWFkaW5nLTYgdGV4dC1sZ1wiPntjb250ZW50fTwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbXQtNCB0ZXh0LWN5YW4tNTAwIGdyb3VwLWhvdmVyOnRleHQtY3lhbi02MDAgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLTIgZ3JvdXAtaG92ZXI6bXItNCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIj5cbiAgICAgICAgICBSZWFkIE1vcmVcbiAgICAgICAgPC9kaXY+XG4gICAgICAgICZyYXF1bztcbiAgICAgIDwvZGl2PlxuICAgIDwvTGluaz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0TGlzdEl0ZW1cbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOic5M2M4NmM4YScsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtQ0szSUhJT0IuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVBGUFJVQUtOLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVktPTU9TV0YuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1VUFFXWkdaQi5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtQUlVV1hXQk0uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVdRWE5UQlM2LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstN0REMlA0RTIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1XWVlaRDJERS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUMzRVc2VUlZLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstMlYzNFpSQUIuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6dHJ1ZX0sJ3JvdXRlcy9hZG1pbi9hcHAtc2V0dGluZ3MnOnsnaWQnOidyb3V0ZXMvYWRtaW4vYXBwLXNldHRpbmdzJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2FkbWluL2FwcC1zZXR0aW5ncycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hZG1pbi9hcHAtc2V0dGluZ3MtVUcyRzZOSlkuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTY2U04yQUxKLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hZG1pbi9lZGl0b3InOnsnaWQnOidyb3V0ZXMvYWRtaW4vZWRpdG9yJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2FkbWluL2VkaXRvcicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hZG1pbi9lZGl0b3ItVEFJUDVUQUUuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTY2U04yQUxKLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hZG1pbi9pbmRleCc6eydpZCc6J3JvdXRlcy9hZG1pbi9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhZG1pbicsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYWRtaW4vaW5kZXgtTkQ3NkVZTk4uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTY2U04yQUxKLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hZG1pbi9wbGF5Z3JvdW5kJzp7J2lkJzoncm91dGVzL2FkbWluL3BsYXlncm91bmQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYWRtaW4vcGxheWdyb3VuZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hZG1pbi9wbGF5Z3JvdW5kLUo1REhKWFhLLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay02NlNOMkFMSi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYmxvZyc6eydpZCc6J3JvdXRlcy9ibG9nJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Jsb2cnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYmxvZy1KM1hUVUY1US5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUFhPU1REQUUuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOnRydWV9LCdyb3V0ZXMvYmxvZy9saXN0Jzp7J2lkJzoncm91dGVzL2Jsb2cvbGlzdCcsJ3BhcmVudElkJzoncm91dGVzL2Jsb2cnLCdwYXRoJzonbGlzdCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ibG9nL2xpc3QtNzRLSVdVTkYuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVdZWVpEMkRFLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQzNFVzZVSVkuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYmxvZy9wb3N0cy8kc2x1Zyc6eydpZCc6J3JvdXRlcy9ibG9nL3Bvc3RzLyRzbHVnJywncGFyZW50SWQnOidyb3V0ZXMvYmxvZycsJ3BhdGgnOidwb3N0cy86c2x1ZycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ibG9nL3Bvc3RzLyRzbHVnLUw3S0hITkYyLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1XWVlaRDJERS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUMzRVc2VUlZLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Jsb2cvdGh1bWJuYWlscyc6eydpZCc6J3JvdXRlcy9ibG9nL3RodW1ibmFpbHMnLCdwYXJlbnRJZCc6J3JvdXRlcy9ibG9nJywncGF0aCc6J3RodW1ibmFpbHMnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYmxvZy90aHVtYm5haWxzLUJQRFVYTVNKLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1XUVhOVEJTNi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVdZWVpEMkRFLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQzNFVzZVSVkuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtNE1WSzRYWVUuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVBYT1NUREFFLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOnRydWV9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
