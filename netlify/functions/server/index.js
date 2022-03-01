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
var assets_manifest_default = { "version": "29e26736", "entry": { "module": "/build/entry.client-PIRBD3BD.js", "imports": ["/build/_shared/chunk-K5MMEP4S.js", "/build/_shared/chunk-2D22RMZX.js", "/build/_shared/chunk-V4KJ432X.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-SIDHSUW4.js", "imports": ["/build/_shared/chunk-QGYXKWJL.js", "/build/_shared/chunk-QW427YQF.js", "/build/_shared/chunk-K4TJ452B.js", "/build/_shared/chunk-YW36JN7I.js", "/build/_shared/chunk-BFBDWVSL.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/admin/app-settings": { "id": "routes/admin/app-settings", "parentId": "root", "path": "admin/app-settings", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/admin/app-settings-MRD4VYOF.js", "imports": ["/build/_shared/chunk-EMDWMQGK.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/admin/editor": { "id": "routes/admin/editor", "parentId": "root", "path": "admin/editor", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/admin/editor-WGMYN56X.js", "imports": ["/build/_shared/chunk-EMDWMQGK.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/admin/index": { "id": "routes/admin/index", "parentId": "root", "path": "admin", "index": true, "caseSensitive": void 0, "module": "/build/routes/admin/index-FVCAXAR4.js", "imports": ["/build/_shared/chunk-EMDWMQGK.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/admin/playground": { "id": "routes/admin/playground", "parentId": "root", "path": "admin/playground", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/admin/playground-AIJ5ADJW.js", "imports": ["/build/_shared/chunk-EMDWMQGK.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog": { "id": "routes/blog", "parentId": "root", "path": "blog", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog-BU7L6QKX.js", "imports": ["/build/_shared/chunk-EJETHIZZ.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/blog/list": { "id": "routes/blog/list", "parentId": "routes/blog", "path": "list", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/list-ZRXGWNDS.js", "imports": ["/build/_shared/chunk-K4TJ452B.js", "/build/_shared/chunk-YW36JN7I.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/posts/$slug": { "id": "routes/blog/posts/$slug", "parentId": "routes/blog", "path": "posts/:slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/posts/$slug-JSCHZ3M7.js", "imports": ["/build/_shared/chunk-K4TJ452B.js", "/build/_shared/chunk-YW36JN7I.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/thumbnails": { "id": "routes/blog/thumbnails", "parentId": "routes/blog", "path": "thumbnails", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/thumbnails-FL4ILDI5.js", "imports": ["/build/_shared/chunk-QGYXKWJL.js", "/build/_shared/chunk-K4TJ452B.js", "/build/_shared/chunk-YW36JN7I.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-VBEMOUVB.js", "imports": ["/build/_shared/chunk-EJETHIZZ.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true } }, "url": "/build/manifest-29E26736.js" };

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
