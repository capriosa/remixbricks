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

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
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
var MdwpHeroUnit = ({ background, color, bgColor, paragraphColor, headlineAlignment, paragraphAlignment, fullHeight }) => {
  return /* @__PURE__ */ import_react2.default.createElement("section", {
    className: `w-full flex items-center px-6 pb-12 antialiased bg-cover  
    
    ${bgColor.className}
    ${fullHeight ? "min-h-screen" : ""}`
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: `mx-auto max-w-7xl `
  }, /* @__PURE__ */ import_react2.default.createElement(import_frontend2.Image, {
    propName: "icon",
    alt: "Icon",
    maxWidth: 1200,
    aspectRatio: 1,
    imageClassName: "w-full mb-5"
  }), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "container absolute z-50 max-w-lg px-4 py-32 mx-auto text-left md:max-w-none md:text-center"
  }, /* @__PURE__ */ import_react2.default.createElement(import_frontend2.Text, {
    renderBlock: (props) => /* @__PURE__ */ import_react2.default.createElement("h1", {
      className: `text-5xl font-extrabold leading-10 tracking-tight text-${headlineAlignment} sm:leading-none md:text-6xl lg:text-7xl
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
MdwpHeroUnit.schema = {
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
var MdwpHeroUnit_default = MdwpHeroUnit;

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
  }, /* @__PURE__ */ React.createElement(import_frontend5.ReactBricks, __spreadValues({}, reactBricksConfig), /* @__PURE__ */ React.createElement(import_remix3.Outlet, null)), /* @__PURE__ */ React.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null), /* @__PURE__ */ React.createElement(import_remix3.LiveReload, null)));
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
var assets_manifest_default = { "version": "3c088d75", "entry": { "module": "/build/entry.client-PQZBYKIU.js", "imports": ["/build/_shared/chunk-WWOOHIFR.js", "/build/_shared/chunk-ZJGLMS3J.js", "/build/_shared/chunk-Y2PWL7JR.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-UHURTVZ7.js", "imports": ["/build/_shared/chunk-XKMTCRFU.js", "/build/_shared/chunk-65LQOD6J.js", "/build/_shared/chunk-3SYJTZZI.js", "/build/_shared/chunk-JVB6DQQK.js", "/build/_shared/chunk-UUTDVM6V.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/admin/app-settings": { "id": "routes/admin/app-settings", "parentId": "root", "path": "admin/app-settings", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/admin/app-settings-HRPPBGYG.js", "imports": ["/build/_shared/chunk-U4545I3U.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/admin/editor": { "id": "routes/admin/editor", "parentId": "root", "path": "admin/editor", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/admin/editor-V6PDRUZQ.js", "imports": ["/build/_shared/chunk-U4545I3U.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/admin/index": { "id": "routes/admin/index", "parentId": "root", "path": "admin", "index": true, "caseSensitive": void 0, "module": "/build/routes/admin/index-KD6U7HPS.js", "imports": ["/build/_shared/chunk-U4545I3U.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/admin/playground": { "id": "routes/admin/playground", "parentId": "root", "path": "admin/playground", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/admin/playground-AH5UHY6K.js", "imports": ["/build/_shared/chunk-U4545I3U.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog": { "id": "routes/blog", "parentId": "root", "path": "blog", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog-5Q6SPNCZ.js", "imports": ["/build/_shared/chunk-KN4EIKDG.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/blog/list": { "id": "routes/blog/list", "parentId": "routes/blog", "path": "list", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/list-PLHT6YCH.js", "imports": ["/build/_shared/chunk-3SYJTZZI.js", "/build/_shared/chunk-JVB6DQQK.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/posts/$slug": { "id": "routes/blog/posts/$slug", "parentId": "routes/blog", "path": "posts/:slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/posts/$slug-C7ZFBQX2.js", "imports": ["/build/_shared/chunk-3SYJTZZI.js", "/build/_shared/chunk-JVB6DQQK.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/thumbnails": { "id": "routes/blog/thumbnails", "parentId": "routes/blog", "path": "thumbnails", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/thumbnails-OQH4ASKY.js", "imports": ["/build/_shared/chunk-XKMTCRFU.js", "/build/_shared/chunk-3SYJTZZI.js", "/build/_shared/chunk-JVB6DQQK.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-VZUWTWZE.js", "imports": ["/build/_shared/chunk-KN4EIKDG.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true } }, "url": "/build/manifest-3C088D75.js" };

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
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOi9Vc2Vycy9tZC9naXRodWItcmVwb3MvcmVtaXhicmlja3MvYXBwL3Jvb3QudHN4IiwgIi4uL2FwcC9yZWFjdC1icmlja3MvY29uZmlnLnRzIiwgIi4uL2FwcC9yZWFjdC1icmlja3MvYnJpY2tzL2luZGV4LnRzIiwgIi4uL2FwcC9yZWFjdC1icmlja3MvYnJpY2tzL015SGVyb1VuaXQudHN4IiwgIi4uL2FwcC9yZWFjdC1icmlja3MvYnJpY2tzL01kd3BIZXJvVW5pdC50c3giLCAiLi4vYXBwL3JlYWN0LWJyaWNrcy91dGlscy9jb2xvcnMudHMiLCAiLi4vYXBwL3JlYWN0LWJyaWNrcy9wYWdlVHlwZXMudHMiLCAiLi4vYXBwL3JlYWN0LWJyaWNrcy9SZW1peExpbmsudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0Vycm9yTWVzc2FnZS50c3giLCAicm91dGU6L1VzZXJzL21kL2dpdGh1Yi1yZXBvcy9yZW1peGJyaWNrcy9hcHAvcm91dGVzL2FkbWluL2FwcC1zZXR0aW5ncy50c3giLCAicm91dGU6L1VzZXJzL21kL2dpdGh1Yi1yZXBvcy9yZW1peGJyaWNrcy9hcHAvcm91dGVzL2FkbWluL3BsYXlncm91bmQudHN4IiwgInJvdXRlOi9Vc2Vycy9tZC9naXRodWItcmVwb3MvcmVtaXhicmlja3MvYXBwL3JvdXRlcy9hZG1pbi9lZGl0b3IudHN4IiwgInJvdXRlOi9Vc2Vycy9tZC9naXRodWItcmVwb3MvcmVtaXhicmlja3MvYXBwL3JvdXRlcy9hZG1pbi9pbmRleC50c3giLCAicm91dGU6L1VzZXJzL21kL2dpdGh1Yi1yZXBvcy9yZW1peGJyaWNrcy9hcHAvcm91dGVzL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9MYXlvdXQudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0hlYWRlci50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvRm9vdGVyLnRzeCIsICJyb3V0ZTovVXNlcnMvbWQvZ2l0aHViLXJlcG9zL3JlbWl4YnJpY2tzL2FwcC9yb3V0ZXMvYmxvZy50c3giLCAicm91dGU6L1VzZXJzL21kL2dpdGh1Yi1yZXBvcy9yZW1peGJyaWNrcy9hcHAvcm91dGVzL2Jsb2cvcG9zdHMvJHNsdWcudHN4IiwgInJvdXRlOi9Vc2Vycy9tZC9naXRodWItcmVwb3MvcmVtaXhicmlja3MvYXBwL3JvdXRlcy9ibG9nL3RodW1ibmFpbHMudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1Bvc3RUaHVtYm5haWwudHN4IiwgInJvdXRlOi9Vc2Vycy9tZC9naXRodWItcmVwb3MvcmVtaXhicmlja3MvYXBwL3JvdXRlcy9ibG9nL2xpc3QudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1Bvc3RMaXN0SXRlbS50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuMlxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiZXhwb3J0ICogZnJvbSBcIkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZFwiOyIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvbWQvZ2l0aHViLXJlcG9zL3JlbWl4YnJpY2tzL2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9tZC9naXRodWItcmVwb3MvcmVtaXhicmlja3MvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9tZC9naXRodWItcmVwb3MvcmVtaXhicmlja3MvYXBwL3JvdXRlcy9hZG1pbi9hcHAtc2V0dGluZ3MudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9tZC9naXRodWItcmVwb3MvcmVtaXhicmlja3MvYXBwL3JvdXRlcy9hZG1pbi9wbGF5Z3JvdW5kLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvbWQvZ2l0aHViLXJlcG9zL3JlbWl4YnJpY2tzL2FwcC9yb3V0ZXMvYWRtaW4vZWRpdG9yLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvVXNlcnMvbWQvZ2l0aHViLXJlcG9zL3JlbWl4YnJpY2tzL2FwcC9yb3V0ZXMvYWRtaW4vaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9Vc2Vycy9tZC9naXRodWItcmVwb3MvcmVtaXhicmlja3MvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiL1VzZXJzL21kL2dpdGh1Yi1yZXBvcy9yZW1peGJyaWNrcy9hcHAvcm91dGVzL2Jsb2cudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTcgZnJvbSBcIi9Vc2Vycy9tZC9naXRodWItcmVwb3MvcmVtaXhicmlja3MvYXBwL3JvdXRlcy9ibG9nL3Bvc3RzLyRzbHVnLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCIvVXNlcnMvbWQvZ2l0aHViLXJlcG9zL3JlbWl4YnJpY2tzL2FwcC9yb3V0ZXMvYmxvZy90aHVtYm5haWxzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU5IGZyb20gXCIvVXNlcnMvbWQvZ2l0aHViLXJlcG9zL3JlbWl4YnJpY2tzL2FwcC9yb3V0ZXMvYmxvZy9saXN0LnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRtaW4vYXBwLXNldHRpbmdzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hZG1pbi9hcHAtc2V0dGluZ3NcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYWRtaW4vYXBwLXNldHRpbmdzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9hZG1pbi9wbGF5Z3JvdW5kXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hZG1pbi9wbGF5Z3JvdW5kXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFkbWluL3BsYXlncm91bmRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL2FkbWluL2VkaXRvclwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYWRtaW4vZWRpdG9yXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFkbWluL2VkaXRvclwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRtaW4vaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2FkbWluL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFkbWluXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU0XG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU1XG4gICAgfSxcbiAgXCJyb3V0ZXMvYmxvZ1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYmxvZ1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJibG9nXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTZcbiAgICB9LFxuICBcInJvdXRlcy9ibG9nL3Bvc3RzLyRzbHVnXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ibG9nL3Bvc3RzLyRzbHVnXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvYmxvZ1wiLFxuICAgICAgcGF0aDogXCJwb3N0cy86c2x1Z1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU3XG4gICAgfSxcbiAgXCJyb3V0ZXMvYmxvZy90aHVtYm5haWxzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ibG9nL3RodW1ibmFpbHNcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9ibG9nXCIsXG4gICAgICBwYXRoOiBcInRodW1ibmFpbHNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOFxuICAgIH0sXG4gIFwicm91dGVzL2Jsb2cvbGlzdFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYmxvZy9saXN0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvYmxvZ1wiLFxuICAgICAgcGF0aDogXCJsaXN0XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTlcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG4gIHVzZU5hdmlnYXRlLFxuICB1c2VMb2FkZXJEYXRhLFxufSBmcm9tICdyZW1peCdcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBSZWFjdEJyaWNrcyB9IGZyb20gJ3JlYWN0LWJyaWNrcy9mcm9udGVuZCdcbmltcG9ydCBjb25maWcgZnJvbSAnLi9yZWFjdC1icmlja3MvY29uZmlnJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vdGFpbHdpbmQuY3NzJ1xuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICcuL2NvbXBvbmVudHMvRXJyb3JNZXNzYWdlJ1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH1dXG59XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7IHRpdGxlOiAnUmVtaXggQmxvZyBTdGFydGVyIHdpdGggUmVhY3QgQnJpY2tzJyB9XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGFwaUtleSA9IHByb2Nlc3MuZW52LkFQSV9LRVlcbiAgY29uc3QgYXBwSWQgPSBwcm9jZXNzLmVudi5BUFBfSURcblxuICBpZiAoIWFwaUtleSB8fCAhYXBwSWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgUmVhY3QgQnJpY2tzIGNyZWRlbnRpYWxzIGluIC5lbnYgZmlsZScpXG4gIH1cblxuICByZXR1cm4geyBhcHBJZCwgYXBpS2V5IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKClcbiAgY29uc3QgeyBhcHBJZCwgYXBpS2V5IH0gPSB1c2VMb2FkZXJEYXRhKClcblxuICBjb25zdCByZWFjdEJyaWNrc0NvbmZpZyA9IHtcbiAgICAuLi5jb25maWcsXG4gICAgYXBwSWQsXG4gICAgYXBpS2V5LFxuICAgIG5hdmlnYXRlOiAocGF0aDogc3RyaW5nKSA9PiBuYXZpZ2F0ZShwYXRoKSxcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5IGlkPVwicm9vdFwiPlxuICAgICAgICA8UmVhY3RCcmlja3Mgey4uLnJlYWN0QnJpY2tzQ29uZmlnfT5cbiAgICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDwvUmVhY3RCcmlja3M+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgJiYgPExpdmVSZWxvYWQgLz59XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApXG59XG5leHBvcnQgZnVuY3Rpb24gRXJyb3JCb3VuZGFyeSh7IGVycm9yIH06IHsgZXJyb3I6IEVycm9yIH0pIHtcbiAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgcmV0dXJuIChcbiAgICA8aHRtbD5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8dGl0bGU+T2ggbm8hPC90aXRsZT5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPEVycm9yTWVzc2FnZSBlcnJvcj17ZXJyb3J9IC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApXG59XG4iLCAiaW1wb3J0IHsgdHlwZXMgfSBmcm9tICdyZWFjdC1icmlja3MvZnJvbnRlbmQnXG5cbmltcG9ydCBicmlja3MgZnJvbSAnLi9icmlja3MnXG5pbXBvcnQgcGFnZVR5cGVzIGZyb20gJy4vcGFnZVR5cGVzJ1xuaW1wb3J0IFJlbWl4TGluayBmcm9tICcuL1JlbWl4TGluaydcblxuY29uc3QgY29uZmlnOiB0eXBlcy5SZWFjdEJyaWNrc0NvbmZpZyA9IHtcbiAgYXBwSWQ6ICcnLCAvL3Byb2Nlc3MuZW52LkFQUF9JRCBhcyBzdHJpbmcgfHwgJycsXG4gIGFwaUtleTogJycsIC8vcHJvY2Vzcy5lbnYuQVBJX0tFWSBhcyBzdHJpbmcgfHwgJycsXG4gIHBhZ2VUeXBlcyxcbiAgYnJpY2tzLFxuICBsb2dvOiAnL2xvZ28uc3ZnJyxcbiAgLy8gLy8gY29udGVudENsYXNzTmFtZTogJ2NvbnRlbnQnLCAvLyBEZWZpbmVkIGR5bmFtaWNhbGx5XG4gIC8vIC8vIGlzRGFya0NvbG9yTW9kZTogLi4uLCAgICAgICAgLy8gaW4gX2FwcC50c3hcbiAgLy8gLy8gdG9nZ2xlQ29sb3JNb2RlOiAuLi4sICAgICAgICAvLyB0byBtYW5hZ2UgRGFyayBNb2RlXG4gIHJlbmRlckxvY2FsTGluazogUmVtaXhMaW5rLFxuICBuYXZpZ2F0ZTogKCkgPT4ge30sXG4gIGxvZ2luUGF0aDogJy9hZG1pbicsXG4gIGVkaXRvclBhdGg6ICcvYWRtaW4vZWRpdG9yJyxcbiAgcGxheWdyb3VuZFBhdGg6ICcvYWRtaW4vcGxheWdyb3VuZCcsXG4gIGFwcFNldHRpbmdzUGF0aDogJy9hZG1pbi9hcHAtc2V0dGluZ3MnLFxuICB1c2VDc3NJbkpzOiBmYWxzZSxcbiAgYXBwUm9vdEVsZW1lbnQ6ICcjcm9vdCcsXG4gIGNsaWNrVG9FZGl0U2lkZTogdHlwZXMuQ2xpY2tUb0VkaXRTaWRlLkJvdHRvbVJpZ2h0LFxuICBjdXN0b21GaWVsZHM6IFtdLFxuICAvLyAvL3Jlc3BvbnNpdmVCcmVha3BvaW50czogW3sgdHlwZTogdHlwZXMuRGV2aWNlVHlwZS5QaG9uZSwgd2lkdGg6IDQ4MCwgbGFiZWw6ICdTbWFydHBob25lJ31dLFxuICBlbmFibGVBdXRvU2F2ZTogdHJ1ZSxcbiAgZGlzYWJsZVNhdmVJZkludmFsaWRQcm9wczogZmFsc2UsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ1xuIiwgImltcG9ydCB7IHR5cGVzIH0gZnJvbSAncmVhY3QtYnJpY2tzL2Zyb250ZW5kJ1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUkVBQ1QgQlJJQ0tTIFVJXG4vLyBZb3UgbWF5IGFsc28gaW1wb3J0IHsgU2luZ2xlIEJyaWNrcyB9XG4vLyB0byByZWR1Y2UgdGhlIGJ1bmRsZSBzaXplXG5pbXBvcnQgQmxvZyBmcm9tICdyZWFjdC1icmlja3MtdWkvYmxvZydcbmltcG9ydCBXZWJzaXRlIGZyb20gJ3JlYWN0LWJyaWNrcy11aS93ZWJzaXRlJ1xuXG4vLyBFeGFtcGxlIGN1c3RvbSBicmlja1xuaW1wb3J0IE15SGVyb1VuaXQgZnJvbSAnLi9NeUhlcm9Vbml0J1xuaW1wb3J0IE1kd3BIZXJvVW5pdCBmcm9tICcuL01kd3BIZXJvVW5pdCdcblxuY29uc3QgYnJpY2tzOiB0eXBlcy5Ccmljazxhbnk+W10gPSBbXG4gIC4uLldlYnNpdGUsXG4gIC4uLkJsb2csXG4gIE15SGVyb1VuaXQsXG4gIE1kd3BIZXJvVW5pdFxuICAvLyBQdXQgaGVyZSB5b3VyIG90aGVyIGJyaWNrcy4uLlxuXVxuXG5leHBvcnQgZGVmYXVsdCBicmlja3NcbiIsICJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRleHQsIFJpY2hUZXh0LCBJbWFnZSwgdHlwZXMgfSBmcm9tICdyZWFjdC1icmlja3MvZnJvbnRlbmQnXG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvY2FsIFR5cGVzXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG50eXBlIFBhZGRpbmcgPSAnYmlnJyB8ICdzbWFsbCdcblxuaW50ZXJmYWNlIEhlcm9Vbml0UHJvcHMge1xuICBwYWRkaW5nOiBQYWRkaW5nXG4gIHRpdGxlOiBzdHJpbmdcbiAgdGV4dDogc3RyaW5nXG59XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENvbXBvbmVudCB0byBiZSByZW5kZXJlZFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuY29uc3QgTXlIZXJvVW5pdDogdHlwZXMuQnJpY2s8SGVyb1VuaXRQcm9wcz4gPSAoeyBwYWRkaW5nIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2BtYXgtdy14bCBteC1hdXRvIHB4LTYgJHtcbiAgICAgICAgcGFkZGluZyA9PT0gJ2JpZycgPyAncHktMjAnIDogJ3B5LTEyJ1xuICAgICAgfWB9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBwcm9wTmFtZT1cImljb25cIlxuICAgICAgICAgIGFsdD1cIkljb25cIlxuICAgICAgICAgIG1heFdpZHRoPXs4MH1cbiAgICAgICAgICBhc3BlY3RSYXRpbz17MX1cbiAgICAgICAgICBpbWFnZUNsYXNzTmFtZT1cInctMjAgbWItNVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxUZXh0XG4gICAgICAgICAgcmVuZGVyQmxvY2s9eyhwcm9wcykgPT4gKFxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIHNtOnRleHQtNHhsIHRleHQtY2VudGVyIGZvbnQtYmxhY2sgdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGUgbGVhZGluZy10aWdodCBtYi0zXCI+XG4gICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgKX1cbiAgICAgICAgICByZW5kZXJQbGFjZWhvbGRlcj17KHByb3BzKSA9PiAoXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvcGFjaXR5LTMwXCI+e3Byb3BzLmNoaWxkcmVufTwvc3Bhbj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSBhIHRpdGxlLi4uXCJcbiAgICAgICAgICBwcm9wTmFtZT1cInRpdGxlXCJcbiAgICAgICAgLz5cbiAgICAgICAgPFJpY2hUZXh0XG4gICAgICAgICAgcmVuZGVyQmxvY2s9eyhwcm9wcykgPT4gKFxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCB0ZXh0LWNlbnRlciBsZWFkaW5nLXJlbGF4ZWQgdGV4dC1ncmF5LTcwMCBkYXJrOnRleHQtZ3JheS0xMDBcIj5cbiAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICl9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIGEgdGV4dC4uLlwiXG4gICAgICAgICAgcHJvcE5hbWU9XCJ0ZXh0XCJcbiAgICAgICAgICBhbGxvd2VkRmVhdHVyZXM9e1tcbiAgICAgICAgICAgIHR5cGVzLlJpY2hUZXh0RmVhdHVyZXMuQm9sZCxcbiAgICAgICAgICAgIHR5cGVzLlJpY2hUZXh0RmVhdHVyZXMuSXRhbGljLFxuICAgICAgICAgICAgdHlwZXMuUmljaFRleHRGZWF0dXJlcy5IaWdobGlnaHQsXG4gICAgICAgICAgICB0eXBlcy5SaWNoVGV4dEZlYXR1cmVzLkNvZGUsXG4gICAgICAgICAgICB0eXBlcy5SaWNoVGV4dEZlYXR1cmVzLkxpbmssXG4gICAgICAgICAgXX1cbiAgICAgICAgICByZW5kZXJDb2RlPXsocHJvcHMpID0+IChcbiAgICAgICAgICAgIDxjb2RlIGNsYXNzTmFtZT1cInRleHQtc20gcHktMSBweC0yIGJnLWdyYXktMjAwIGRhcms6YmctZ3JheS03MDAgcm91bmRlZFwiPlxuICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L2NvZGU+XG4gICAgICAgICAgKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEJyaWNrIFNjaGVtYVxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuTXlIZXJvVW5pdC5zY2hlbWEgPSB7XG4gIG5hbWU6ICdteS1oZXJvLXVuaXQnLFxuICBsYWJlbDogJ0N1c3RvbSBIZXJvIFVuaXQnLFxuICBnZXREZWZhdWx0UHJvcHM6ICgpID0+ICh7XG4gICAgcGFkZGluZzogJ2JpZycsXG4gICAgdGl0bGU6ICdUaGlzIGlzIGEgY3VzdG9tIEhlcm8gVW5pdCcsXG4gICAgdGV4dDogXCJXZSBhcmUgYSBoaS10ZWNoIHdlYiBkZXZlbG9wbWVudCBjb21wYW55IGNvbW1pdHRlZCB0byBkZWxpdmVyIGdyZWF0IHByb2R1Y3RzIG9uIHRpbWUuIFdlIGxvdmUgdG8gdW5kZXJzdGFuZCBvdXIgY3VzdG9tZXJzJyBuZWVkcyBhbmQgZXhjZWVkIGV4cGVjdGF0aW9ucy5cIixcbiAgfSksXG4gIHNpZGVFZGl0UHJvcHM6IFtcbiAgICB7XG4gICAgICBuYW1lOiAncGFkZGluZycsXG4gICAgICBsYWJlbDogJ1BhZGRpbmcnLFxuICAgICAgdHlwZTogdHlwZXMuU2lkZUVkaXRQcm9wVHlwZS5TZWxlY3QsXG4gICAgICBzZWxlY3RPcHRpb25zOiB7XG4gICAgICAgIGRpc3BsYXk6IHR5cGVzLk9wdGlvbnNEaXNwbGF5LlNlbGVjdCxcbiAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgIHsgdmFsdWU6ICdiaWcnLCBsYWJlbDogJ0JpZyBQYWRkaW5nJyB9LFxuICAgICAgICAgIHsgdmFsdWU6ICdzbWFsbCcsIGxhYmVsOiAnU21hbGwgUGFkZGluZycgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgXSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlIZXJvVW5pdFxuIiwgImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVGV4dCwgUmljaFRleHQsIEltYWdlLCB0eXBlcyB9IGZyb20gJ3JlYWN0LWJyaWNrcy9mcm9udGVuZCdcbmltcG9ydCB7IENvbG9ycywgQmdDb2xvcnMsIFBhcmFncmFwaENvbG9ycywgSGVhZGxpbmVBbGlnbm1lbnQsIFBhcmFncmFwaEFsaWdubWVudCB9IGZyb20gJy4uL3V0aWxzL2NvbG9ycydcblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTG9jYWwgVHlwZXNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW50ZXJmYWNlIEhlcm9Vbml0UHJvcHMge1xuICBjb2xvcjogdHlwZXMuSUNvbG9yXG4gIHBhcmFncmFwaENvbG9yOiB0eXBlcy5JQ29sb3JcbiAgYmdDb2xvcjogdHlwZXMuSUNvbG9yXG4gIGhlYWRsaW5lQWxpZ25tZW50PzogICdsZWZ0JyB8ICdjZW50ZXInIHwgJ3JpZ2h0J1xuICBwYXJhZ3JhcGhBbGlnbm1lbnQ/OiAgJ2xlZnQnIHwgJ2NlbnRlcicgfCAncmlnaHQnXG4gIGZ1bGxIZWlnaHQ6IGJvb2xlYW5cbiAgYmFja2dyb3VuZDogdHlwZXMuSUltYWdlU291cmNlXG4gIHRpdGxlOiBzdHJpbmdcbiAgdGV4dDogc3RyaW5nXG59XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENvbXBvbmVudCB0byBiZSByZW5kZXJlZFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuY29uc3QgTWR3cEhlcm9Vbml0OiB0eXBlcy5CcmljazxIZXJvVW5pdFByb3BzPiA9ICh7IGJhY2tncm91bmQsIGNvbG9yLCBiZ0NvbG9yLCBwYXJhZ3JhcGhDb2xvciwgaGVhZGxpbmVBbGlnbm1lbnQsIHBhcmFncmFwaEFsaWdubWVudCxmdWxsSGVpZ2h0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICBcbiAgICA8c2VjdGlvbiBcbiAgICBcbiAgICBcbiAgICAvL3N0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBgdXJsKCR7YmFja2dyb3VuZC5zcmN9KWB9fSBcbiAgICBcblxuICAgIGNsYXNzTmFtZT17YHctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBweC02IHBiLTEyIGFudGlhbGlhc2VkIGJnLWNvdmVyICBcbiAgICBcbiAgICAke1xuICAgICAgYmdDb2xvci5jbGFzc05hbWVcbiAgICB9XG4gICAgJHtcbiAgICAgIGZ1bGxIZWlnaHQgPyAnbWluLWgtc2NyZWVuJyA6ICcnXG4gICAgfWB9PlxuICAgIFxuICBcbiAgICA8ZGl2IGNsYXNzTmFtZT17YG14LWF1dG8gbWF4LXctN3hsIGB9PlxuICAgIDxJbWFnZVxuICAgICAgICAgIHByb3BOYW1lPVwiaWNvblwiXG4gICAgICAgICAgYWx0PVwiSWNvblwiXG4gICAgICAgICAgbWF4V2lkdGg9ezEyMDB9XG4gICAgICAgICAgYXNwZWN0UmF0aW89ezF9XG4gICAgICAgICAgaW1hZ2VDbGFzc05hbWU9XCJ3LWZ1bGwgbWItNVwiXG4gICAgICAgIC8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgYWJzb2x1dGUgei01MCBtYXgtdy1sZyBweC00IHB5LTMyIG14LWF1dG8gdGV4dC1sZWZ0IG1kOm1heC13LW5vbmUgbWQ6dGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPFRleHRcbiAgICAgICAgICByZW5kZXJCbG9jaz17KHByb3BzKSA9PiAoXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtgdGV4dC01eGwgZm9udC1leHRyYWJvbGQgbGVhZGluZy0xMCB0cmFja2luZy10aWdodCB0ZXh0LSR7aGVhZGxpbmVBbGlnbm1lbnR9IHNtOmxlYWRpbmctbm9uZSBtZDp0ZXh0LTZ4bCBsZzp0ZXh0LTd4bFxuICAgICAgICAgICAgJHtjb2xvcj8uY2xhc3NOYW1lfVxuICAgICAgICAgICAgYH0+XG4gICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgKX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgYSB0aXRsZS4uLlwiXG4gICAgICAgICAgcHJvcE5hbWU9XCJ0aXRsZVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxSaWNoVGV4dFxuICAgICAgICAgIHJlbmRlckJsb2NrPXsocHJvcHMpID0+IChcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YG14LWF1dG8gbXQtNSAke3BhcmFncmFwaENvbG9yPy5jbGFzc05hbWV9IHRleHQtJHtwYXJhZ3JhcGhBbGlnbm1lbnR9IG1kOm10LTEyIG1kOm1heC13LWxnIGxnOnRleHQtbGdgfT5cbiAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICl9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIGEgdGV4dC4uLlwiXG4gICAgICAgICAgcHJvcE5hbWU9XCJ0ZXh0XCJcbiAgICAgICAgICBhbGxvd2VkRmVhdHVyZXM9e1tcbiAgICAgICAgICAgIHR5cGVzLlJpY2hUZXh0RmVhdHVyZXMuQm9sZCxcbiAgICAgICAgICAgIHR5cGVzLlJpY2hUZXh0RmVhdHVyZXMuSXRhbGljLFxuICAgICAgICAgICAgdHlwZXMuUmljaFRleHRGZWF0dXJlcy5IaWdobGlnaHQsXG4gICAgICAgICAgICB0eXBlcy5SaWNoVGV4dEZlYXR1cmVzLkNvZGUsXG4gICAgICAgICAgICB0eXBlcy5SaWNoVGV4dEZlYXR1cmVzLkxpbmssXG4gICAgICAgICAgXX1cbiAgICAgICAgICByZW5kZXJDb2RlPXsocHJvcHMpID0+IChcbiAgICAgICAgICAgIDxjb2RlIGNsYXNzTmFtZT1cInRleHQtc20gcHktMSBweC0yIGJnLWdyYXktMjAwIGRhcms6YmctZ3JheS03MDAgcm91bmRlZFwiPlxuICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L2NvZGU+XG4gICAgICAgICAgKX1cbiAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQnJpY2sgU2NoZW1hXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5NZHdwSGVyb1VuaXQuc2NoZW1hID0ge1xuICBuYW1lOiAnbWR3cC1oZXJvLXVuaXQnLFxuICBsYWJlbDonbWR3cCBIZXJvIFVuaXQnLFxuICBnZXREZWZhdWx0UHJvcHM6ICgpID0+ICh7XG4gICAgQ29sb3I6IHsgY29sb3I6ICcjMDAwMDAwJywgY2xhc3NOYW1lOiAndGV4dC1ibGFjaycgfSxcbiAgICBQYXJhZ3JhcGhDb2xvcjogeyBjb2xvcjogJyNmZmZmZmYnLCBjbGFzc05hbWU6ICd0ZXh0LXdoaXRlJyB9LFxuICAgIEJnQ29sb3I6IHsgY29sb3I6ICcjZmZmZmZmJywgY2xhc3NOYW1lOiAnYmctd2hpdGUnIH0sXG4gICAgSGVhZGxpbmVBbGlnbm1lbnQ6IHsgY2xhc3NOYW1lOiAndGV4dC1jZW50ZXInIH0sXG4gICAgUGFyYWdyYXBoQWxpZ25tZW50OiB7IGNsYXNzTmFtZTogJ3RleHQtY2VudGVyJyB9LFxuICAgIGZ1bGxIZWlnaHQ6IGZhbHNlLFxuICAgIHRpdGxlOiAnVGhpcyBpcyBhIGN1c3RvbSBIZXJvIFVuaXQnLFxuICAgIHRleHQ6IFwiV2UgYXJlIGEgaGktdGVjaCB3ZWIgZGV2ZWxvcG1lbnQgY29tcGFueSBjb21taXR0ZWQgdG8gZGVsaXZlciBncmVhdCBwcm9kdWN0cyBvbiB0aW1lLiBXZSBsb3ZlIHRvIHVuZGVyc3RhbmQgb3VyIGN1c3RvbWVycycgbmVlZHMgYW5kIGV4Y2VlZCBleHBlY3RhdGlvbnMuXCIsXG4gIH0pLFxuICBzaWRlRWRpdFByb3BzOiBbXG4gICAge1xuICAgICAgbmFtZTogJ2JhY2tncm91bmQnLFxuICAgICAgbGFiZWw6ICdCYWNrZ3JvdW5kIEltYWdlJyxcbiAgICAgIHR5cGU6IHR5cGVzLlNpZGVFZGl0UHJvcFR5cGUuSW1hZ2UsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnY29sb3InLFxuICAgICAgbGFiZWw6ICdIZWFkbGluZSBDb2xvcicsXG4gICAgICB0eXBlOiB0eXBlcy5TaWRlRWRpdFByb3BUeXBlLlNlbGVjdCxcbiAgICAgIHNlbGVjdE9wdGlvbnM6IHtcbiAgICAgICAgZGlzcGxheTogdHlwZXMuT3B0aW9uc0Rpc3BsYXkuQ29sb3IsXG4gICAgICAgIG9wdGlvbnM6IENvbG9yc1xuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdiZ0NvbG9yJyxcbiAgICAgIGxhYmVsOiAnSGVhZGxpbmUgQmFja2dyb3VuZCBDb2xvcicsXG4gICAgICB0eXBlOiB0eXBlcy5TaWRlRWRpdFByb3BUeXBlLlNlbGVjdCxcbiAgICAgIHNlbGVjdE9wdGlvbnM6IHtcbiAgICAgICAgZGlzcGxheTogdHlwZXMuT3B0aW9uc0Rpc3BsYXkuQ29sb3IsXG4gICAgICAgIG9wdGlvbnM6IEJnQ29sb3JzXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ3BhcmFncmFwaENvbG9yJyxcbiAgICAgIGxhYmVsOiAnUGFyYWdyYXBoIENvbG9yJyxcbiAgICAgIHR5cGU6IHR5cGVzLlNpZGVFZGl0UHJvcFR5cGUuU2VsZWN0LFxuICAgICAgc2VsZWN0T3B0aW9uczoge1xuICAgICAgICBkaXNwbGF5OiB0eXBlcy5PcHRpb25zRGlzcGxheS5Db2xvcixcbiAgICAgICAgb3B0aW9uczogUGFyYWdyYXBoQ29sb3JzXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2hlYWRsaW5lQWxpZ25tZW50JyxcbiAgICAgIGxhYmVsOiAnSGVhZGxpbmUgQWxpZ25tZW50JyxcbiAgICAgIHR5cGU6IHR5cGVzLlNpZGVFZGl0UHJvcFR5cGUuU2VsZWN0LFxuICAgICAgc2VsZWN0T3B0aW9uczoge1xuICAgICAgICBkaXNwbGF5OiB0eXBlcy5PcHRpb25zRGlzcGxheS5TZWxlY3QsXG4gICAgICAgIG9wdGlvbnM6IEhlYWRsaW5lQWxpZ25tZW50XG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ3BhcmFncmFwaEFsaWdubWVudCcsXG4gICAgICBsYWJlbDogJ1BhcmFncmFwaCBBbGlnbm1lbnQnLFxuICAgICAgdHlwZTogdHlwZXMuU2lkZUVkaXRQcm9wVHlwZS5TZWxlY3QsXG4gICAgICBzZWxlY3RPcHRpb25zOiB7XG4gICAgICAgIGRpc3BsYXk6IHR5cGVzLk9wdGlvbnNEaXNwbGF5LlNlbGVjdCxcbiAgICAgICAgb3B0aW9uczogUGFyYWdyYXBoQWxpZ25tZW50XG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2Z1bGxIZWlnaHQnLFxuICAgICAgbGFiZWw6ICdGdWxsIEhlaWdodCcsXG4gICAgICB0eXBlOiB0eXBlcy5TaWRlRWRpdFByb3BUeXBlLkJvb2xlYW4sXG4gICAgfSxcbiAgXSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWR3cEhlcm9Vbml0XG4iLCAiZXhwb3J0IGNvbnN0IEhlYWRsaW5lQWxpZ25tZW50ID0gW1xuICB7XG4gICAgbGFiZWw6ICdMZWZ0JyxcbiAgICB2YWx1ZTogJ2xlZnQnXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ0NlbnRlcicsXG4gICAgdmFsdWU6ICdjZW50ZXInXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ1JpZ2h0JyxcbiAgICB2YWx1ZTogJ3JpZ2h0J1xuICB9XG5dXG5cbmV4cG9ydCBjb25zdCBQYXJhZ3JhcGhBbGlnbm1lbnQgPSBbXG4gIHtcbiAgICBsYWJlbDogJ0xlZnQnLFxuICAgIHZhbHVlOiAnbGVmdCdcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnQ2VudGVyJyxcbiAgICB2YWx1ZTogJ2NlbnRlcidcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnUmlnaHQnLFxuICAgIHZhbHVlOiAncmlnaHQnXG4gIH1cbl1cblxuZXhwb3J0IGNvbnN0IENvbG9ycyA9IFtcbiAgXG4gIHtcbiAgICBsYWJlbDogJ0Jyb3duJyxcbiAgICB2YWx1ZTogeyBjb2xvcjogJyM0NjJjMzcnLCBjbGFzc05hbWU6ICd0ZXh0LWJyb3duJyB9LFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdMaWdodCBicm93bicsXG4gICAgdmFsdWU6IHsgY29sb3I6ICcjYTg5MzhjJywgY2xhc3NOYW1lOiAndGV4dC1saWdodC1icm93bicgfSxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnUmVkJyxcbiAgICB2YWx1ZTogeyBjb2xvcjogJyNhZTFlMmMnLCBjbGFzc05hbWU6ICd0ZXh0LXJlZCcgfSxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnT3JhbmdlJyxcbiAgICB2YWx1ZTogeyBjb2xvcjogJyNjYTM4M2InLCBjbGFzc05hbWU6ICd0ZXh0LW9yYW5nZScgfSxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnTGlnaHQgZ3JheScsXG4gICAgdmFsdWU6IHsgY29sb3I6ICcjZThlOWUxJywgY2xhc3NOYW1lOiAndGV4dC1ncmF5JyB9LFxuICB9LFxuXVxuXG5leHBvcnQgY29uc3QgUGFyYWdyYXBoQ29sb3JzID0gW1xuICBcbiAge1xuICAgIGxhYmVsOiAnQnJvd24nLFxuICAgIHZhbHVlOiB7IGNvbG9yOiAnIzQ2MmMzNycsIGNsYXNzTmFtZTogJ3RleHQtYnJvd24nIH0sXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ0xpZ2h0IGJyb3duJyxcbiAgICB2YWx1ZTogeyBjb2xvcjogJyNhODkzOGMnLCBjbGFzc05hbWU6ICd0ZXh0LWxpZ2h0LWJyb3duJyB9LFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdSZWQnLFxuICAgIHZhbHVlOiB7IGNvbG9yOiAnI2FlMWUyYycsIGNsYXNzTmFtZTogJ3RleHQtcmVkJyB9LFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdPcmFuZ2UnLFxuICAgIHZhbHVlOiB7IGNvbG9yOiAnI2NhMzgzYicsIGNsYXNzTmFtZTogJ3RleHQtb3JhbmdlJyB9LFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdMaWdodCBncmF5JyxcbiAgICB2YWx1ZTogeyBjb2xvcjogJyNlOGU5ZTEnLCBjbGFzc05hbWU6ICd0ZXh0LWdyYXknIH0sXG4gIH0sXG5dXG5cbmV4cG9ydCBjb25zdCBCZ0NvbG9ycyA9IFtcbiAgXG4gIHtcbiAgICBsYWJlbDogJ0Jyb3duJyxcbiAgICB2YWx1ZTogeyBjb2xvcjogJyM0NjJjMzcnLCBjbGFzc05hbWU6ICdiZy1icm93bicgfSxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnTGlnaHQgYnJvd24nLFxuICAgIHZhbHVlOiB7IGNvbG9yOiAnI2E4OTM4YycsIGNsYXNzTmFtZTogJ2JnLWxpZ2h0LWJyb3duJyB9LFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdSZWQnLFxuICAgIHZhbHVlOiB7IGNvbG9yOiAnI2FlMWUyYycsIGNsYXNzTmFtZTogJ2JnLXJlZCcgfSxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnT3JhbmdlJyxcbiAgICB2YWx1ZTogeyBjb2xvcjogJyNjYTM4M2InLCBjbGFzc05hbWU6ICdiZy1vcmFuZ2UnIH0sXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ0xpZ2h0IGdyYXknLFxuICAgIHZhbHVlOiB7IGNvbG9yOiAnI2U4ZTllMScsIGNsYXNzTmFtZTogJ2JnLWdyYXknIH0sXG4gIH0sXG5dIiwgImltcG9ydCB7IHR5cGVzIH0gZnJvbSAncmVhY3QtYnJpY2tzL2Zyb250ZW5kJ1xuXG5jb25zdCBwYWdlVHlwZXM6IHR5cGVzLklQYWdlVHlwZVtdID0gW1xuICB7XG4gICAgbmFtZTogJ3BhZ2UnLFxuICAgIHBsdXJhbE5hbWU6ICdwYWdlcycsXG4gICAgZGVmYXVsdExvY2tlZDogZmFsc2UsXG4gICAgZGVmYXVsdFN0YXR1czogdHlwZXMuUGFnZVN0YXR1cy5QdWJsaXNoZWQsXG4gICAgZ2V0RGVmYXVsdENvbnRlbnQ6ICgpID0+IFtdLFxuICAgIGV4Y2x1ZGVkQmxvY2tUeXBlczogW1xuICAgICAgJ3RpdGxlJyxcbiAgICAgICdwYXJhZ3JhcGgnLFxuICAgICAgJ3ZpZGVvJyxcbiAgICAgICdpbWFnZScsXG4gICAgICAncXVvdGUnLFxuICAgICAgJ3NvY2lhbC1lbWJlZCcsXG4gICAgICAnY29kZS1ibG9jaycsXG4gICAgICAndHdlZXQtbGlnaHQnLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnYmxvZycsXG4gICAgcGx1cmFsTmFtZTogJ0Jsb2cnLFxuICAgIGdldERlZmF1bHRDb250ZW50OiAoKSA9PiBbXSxcbiAgICBhbGxvd2VkQmxvY2tUeXBlczogW1xuICAgICAgJ3RpdGxlJyxcbiAgICAgICdwYXJhZ3JhcGgnLFxuICAgICAgJ3ZpZGVvJyxcbiAgICAgICdpbWFnZScsXG4gICAgICAncXVvdGUnLFxuICAgICAgJ3NvY2lhbC1lbWJlZCcsXG4gICAgICAnY29kZS1ibG9jaycsXG4gICAgICAndHdlZXQnLFxuICAgICAgJ3R3ZWV0LWxpZ2h0JyxcbiAgICBdLFxuICB9LFxuXVxuXG5leHBvcnQgZGVmYXVsdCBwYWdlVHlwZXNcbiIsICJpbXBvcnQgeyBMaW5rLCB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgdHlwZXMgfSBmcm9tICdyZWFjdC1icmlja3MvZnJvbnRlbmQnXG5cbmNvbnN0IFJlbWl4TGluazogdHlwZXMuUmVuZGVyTG9jYWxMaW5rID0gKHtcbiAgaHJlZixcbiAgY2xhc3NOYW1lLFxuICBhY3RpdmVDbGFzc05hbWUsXG4gIGlzQWRtaW4sXG4gIGNoaWxkcmVuLFxufSkgPT4ge1xuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKClcblxuICBsZXQgYW5jaG9yQ2xhc3NOYW1lID0gJydcblxuICBpZiAobG9jYXRpb24ucGF0aG5hbWUgPT09IGhyZWYpIHtcbiAgICBhbmNob3JDbGFzc05hbWUgPSBhY3RpdmVDbGFzc05hbWUgfHwgJydcbiAgfSBlbHNlIHtcbiAgICBhbmNob3JDbGFzc05hbWUgPSBjbGFzc05hbWUgfHwgJydcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExpbmsgdG89e2hyZWZ9PlxuICAgICAgPGEgY2xhc3NOYW1lPXthbmNob3JDbGFzc05hbWV9PntjaGlsZHJlbn08L2E+XG4gICAgPC9MaW5rPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlbWl4TGlua1xuIiwgImludGVyZmFjZSBFcnJvck1lc3NhZ2VQcm9wcyB7XG4gIGVycm9yOiBFcnJvclxufVxuXG5jb25zdCBFcnJvck1lc3NhZ2U6IFJlYWN0LkZDPEVycm9yTWVzc2FnZVByb3BzPiA9ICh7IGVycm9yIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIG1heC13LTV4bCBweC02IG15LTEyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXJlZC01MCBweS0zIHB4LTYgYm9yZGVyLTIgYm9yZGVyLXJlZC0yMDAgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1leHRyYWJvbGQgbWItMlwiPlNvbWV0aGluZyB3ZW50IHdyb25nPC9oMj5cbiAgICAgICAgPHA+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yTWVzc2FnZVxuIiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBBZG1pbiwgQXBwU2V0dGluZ3MgfSBmcm9tICdyZWFjdC1icmlja3MnXG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICdSZWFjdCBCcmlja3MgQXBwIFNldHRpbmdzJyxcbiAgfVxufVxuXG5jb25zdCBBZG1pbkFwcFNldHRpbmdzOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8QWRtaW4+XG4gICAgICA8QXBwU2V0dGluZ3MgLz5cbiAgICA8L0FkbWluPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkbWluQXBwU2V0dGluZ3NcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgQWRtaW4sIFBsYXlncm91bmQgfSBmcm9tICdyZWFjdC1icmlja3MnXG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICdSZWFjdCBCcmlja3MgUGxheWdyb3VuZCcsXG4gIH1cbn1cblxuY29uc3QgQWRtaW5QbGF5Z3JvdW5kOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8QWRtaW4+XG4gICAgICA8UGxheWdyb3VuZCAvPlxuICAgIDwvQWRtaW4+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWRtaW5QbGF5Z3JvdW5kXG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IEFkbWluLCBFZGl0b3IgfSBmcm9tICdyZWFjdC1icmlja3MnXG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICdSZWFjdCBCcmlja3MgRWRpdG9yJyxcbiAgfVxufVxuXG5jb25zdCBBZG1pbkVkaXRvcjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEFkbWluPlxuICAgICAgPEVkaXRvciAvPlxuICAgIDwvQWRtaW4+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWRtaW5FZGl0b3JcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgQWRtaW4sIExvZ2luIH0gZnJvbSAncmVhY3QtYnJpY2tzJ1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiAnUmVhY3QgQnJpY2tzIExvZ2luJyxcbiAgfVxufVxuXG5jb25zdCBBZG1pbkxvZ2luOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8QWRtaW4gaXNMb2dpbj5cbiAgICAgIDxMb2dpbiAvPlxuICAgIDwvQWRtaW4+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWRtaW5Mb2dpblxuIiwgImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQge1xuICBSZWFjdEJyaWNrc0NvbnRleHQsXG4gIFBhZ2VWaWV3ZXIsXG4gIGZldGNoUGFnZSxcbiAgY2xlYW5QYWdlLFxufSBmcm9tICdyZWFjdC1icmlja3MvZnJvbnRlbmQnXG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gJ34vY29tcG9uZW50cy9FcnJvck1lc3NhZ2UnXG5pbXBvcnQgTGF5b3V0IGZyb20gJ34vY29tcG9uZW50cy9MYXlvdXQnXG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IEhPTUVfUEFHRSA9ICdob21lJ1xuICB0cnkge1xuICAgIGNvbnN0IHBhZ2UgPSBhd2FpdCBmZXRjaFBhZ2UoSE9NRV9QQUdFLCBwcm9jZXNzLmVudi5BUElfS0VZIGFzIHN0cmluZylcbiAgICByZXR1cm4geyBwYWdlIH1cbiAgfSBjYXRjaCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgZmluZCB0aGUgXCIke0hPTUVfUEFHRX1cIiBwYWdlLmApXG4gIH1cbn1cblxuY29uc3QgUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgeyBwYWdlIH0gPSB1c2VMb2FkZXJEYXRhKClcbiAgLy8gQ2xlYW4gdGhlIHJlY2VpdmVkIGNvbnRlbnRcbiAgLy8gUmVtb3ZlcyB1bmtub3duIG9yIG5vdCBhbGxvd2VkIGJyaWNrc1xuICBjb25zdCB7IHBhZ2VUeXBlcywgYnJpY2tzIH0gPSB1c2VDb250ZXh0KFJlYWN0QnJpY2tzQ29udGV4dClcbiAgY29uc3QgcGFnZU9rID0gcGFnZSA/IGNsZWFuUGFnZShwYWdlLCBwYWdlVHlwZXMsIGJyaWNrcykgOiBudWxsXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPFBhZ2VWaWV3ZXIgcGFnZT17cGFnZU9rfSAvPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICdSZWFjdCBCcmlja3MgQmxvZycsXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQm91bmRhcnkoeyBlcnJvciB9OiB7IGVycm9yOiBFcnJvciB9KSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxFcnJvck1lc3NhZ2UgZXJyb3I9e2Vycm9yfSAvPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VcbiIsICJpbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3RlcidcblxuY29uc3QgTGF5b3V0OiBSZWFjdC5GQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWluLWgtc2NyZWVuIGp1c3RpZnktYmV0d2VlbiBmb250LWNvbnRlbnQgYW50aWFsaWFzZWRcIj5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImlzb2xhdGUgbWItYXV0b1wiPntjaGlsZHJlbn08L21haW4+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4J1xuXG5jb25zdCBIZWFkZXI6IFJlYWN0LkZDID0gKCkgPT4gKFxuICA8aGVhZGVyIGNsYXNzTmFtZT1cImJnLXdoaXRlIHNtOmgtMjAgcHktNSBib3JkZXItYiBzbTpzdGlja3kgdG9wLTAgei0xMFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNXhsIG14LWF1dG8gcHgtNlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBzbTpqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBpdGVtcy1jZW50ZXIgbWItNCBzbTptYi0wXCI+XG4gICAgICAgICAgPGEgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPVwiL3JlYWN0LWJyaWNrcy1sb2dvLnN2Z1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNDhcIlxuICAgICAgICAgICAgICBhbHQ9XCJSZWFjdCBCcmlja3NcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTptbC04IGZsZXggc3BhY2UteC01IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9ibG9nL2xpc3RcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtcGluay03MDBcIj5cbiAgICAgICAgICAgICAgUG9zdCBMaXN0XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICB0bz1cIi9ibG9nL3RodW1ibmFpbHNcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtcGluay03MDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBQb3N0IFRodW1ibmFpbHNcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgdG89XCIvYWRtaW5cIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTIgcHgtNSByb3VuZGVkIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gYmctY3lhbi01MDAgaG92ZXI6YmctY3lhbi02MDAgaG92ZXI6c2hhZG93LWxnIHRyYW5zaXRpb24gZHVyYXRpb24tMjAwXCJcbiAgICAgICAgPlxuICAgICAgICAgIEVkaXQgY29udGVudFxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9oZWFkZXI+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuIiwgImNvbnN0IEZvb3RlciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImJnLWdyYXktNTAgYm9yZGVyLXQgcHktMTIgaC0zMlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy01eGwgbXgtYXV0byBmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNFwiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cIi9yZWFjdC1icmlja3MtaWNvbi5zdmdcIlxuICAgICAgICAgICAgYWx0PVwiUmVhY3QgQnJpY2tzXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctOFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwcGVyY2FzZSB0ZXh0LXNtIHRyYWNraW5nLXdpZGVyXCI+XG4gICAgICAgICAgICBSZW1peCBibG9nIHN0YXJ0ZXJcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCB0ZXh0LXNtXCI+XG4gICAgICAgICAgXHUwMEE5IHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9eycgJ31cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9yZWFjdGJyaWNrcy5jb21cIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LXBpbmstNjAwXCI+XG4gICAgICAgICAgICBSZWFjdCBCcmlja3NcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9mb290ZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyXG4iLCAiaW1wb3J0IHsgT3V0bGV0IH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IExheW91dCBmcm9tICd+L2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICd+L2NvbXBvbmVudHMvRXJyb3JNZXNzYWdlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKCkge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8T3V0bGV0IC8+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogJ0Jsb2cnLFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFcnJvckJvdW5kYXJ5KHsgZXJyb3IgfTogeyBlcnJvcjogRXJyb3IgfSkge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8RXJyb3JNZXNzYWdlIGVycm9yPXtlcnJvcn0gLz5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuIiwgImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIFJlYWN0QnJpY2tzQ29udGV4dCxcbiAgUGFnZVZpZXdlcixcbiAgZmV0Y2hQYWdlLFxuICBjbGVhblBhZ2UsXG59IGZyb20gJ3JlYWN0LWJyaWNrcy9mcm9udGVuZCdcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCdcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnXG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoeyBwYXJhbXMgfTogeyBwYXJhbXM6IHsgc2x1Zzogc3RyaW5nIH0gfSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHBhZ2UgPSBhd2FpdCBmZXRjaFBhZ2UocGFyYW1zLnNsdWcsIHByb2Nlc3MuZW52LkFQSV9LRVkgYXMgc3RyaW5nKVxuICAgIHJldHVybiB7IHBhZ2UgfVxuICB9IGNhdGNoIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBmaW5kIHRoZSBcIiR7cGFyYW1zLnNsdWd9XCIgcG9zdC5gKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoeyBkYXRhIH0pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogZGF0YT8ucGFnZT8ubWV0YT8udGl0bGUgfHwgJ0Jsb2cgcG9zdCcsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSgpIHtcbiAgY29uc3QgeyBwYWdlIH0gPSB1c2VMb2FkZXJEYXRhKClcbiAgLy8gQ2xlYW4gdGhlIHJlY2VpdmVkIGNvbnRlbnRcbiAgLy8gUmVtb3ZlcyB1bmtub3duIG9yIG5vdCBhbGxvd2VkIGJyaWNrc1xuICBjb25zdCB7IHBhZ2VUeXBlcywgYnJpY2tzIH0gPSB1c2VDb250ZXh0KFJlYWN0QnJpY2tzQ29udGV4dClcbiAgY29uc3QgcGFnZU9rID0gcGFnZSA/IGNsZWFuUGFnZShwYWdlLCBwYWdlVHlwZXMsIGJyaWNrcykgOiBudWxsXG5cbiAgcmV0dXJuIDxQYWdlVmlld2VyIHBhZ2U9e3BhZ2VPa30gLz5cbn1cbiIsICJpbXBvcnQgeyBmZXRjaFBhZ2VzLCB0eXBlcyB9IGZyb20gJ3JlYWN0LWJyaWNrcy9mcm9udGVuZCdcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCdcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcydcblxuaW1wb3J0IFBvc3RUaHVtYm5haWwgZnJvbSAnfi9jb21wb25lbnRzL1Bvc3RUaHVtYm5haWwnXG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZmV0Y2hQYWdlcyhwcm9jZXNzLmVudi5BUElfS0VZIGFzIHN0cmluZywge1xuICAgIHR5cGU6ICdibG9nJyxcbiAgICBwYWdlU2l6ZTogMTAwMCxcbiAgICBzb3J0OiAnLXB1Ymxpc2hlZEF0JyxcbiAgfSlcbiAgcmV0dXJuIHsgcG9zdHMgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUaHVtYm5haWxzKCkge1xuICBjb25zdCB7IHBvc3RzIH0gPSB1c2VMb2FkZXJEYXRhPHsgcG9zdHM6IHR5cGVzLlBhZ2VGcm9tTGlzdFtdIH0+KClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG1heC13LTV4bCBteC1hdXRvIHB5LTE2IHB4LTZcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTR4bCBzbTp0ZXh0LTZ4bCBsZzp0ZXh0LTd4bCBsZWFkaW5nLW5vbmUgZm9udC1ibGFjayB0cmFja2luZy10aWdodCB0ZXh0LWdyYXktOTAwIHBiLTQgbXQtMTAgc206bXQtMTIgbWItNFwiPlxuICAgICAgICBCbG9nXG4gICAgICA8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0xMCBmbGV4IGZsZXgtd3JhcFwiPlxuICAgICAgICB7cG9zdHM/Lm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgIDxQb3N0VGh1bWJuYWlsXG4gICAgICAgICAgICBrZXk9e3Bvc3QuaWR9XG4gICAgICAgICAgICBocmVmPXtgL2Jsb2cvcG9zdHMvJHtwb3N0LnNsdWd9YH1cbiAgICAgICAgICAgIHRpdGxlPXtwb3N0Lm5hbWV9XG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17cG9zdC5tZXRhLmRlc2NyaXB0aW9uIX1cbiAgICAgICAgICAgIGRhdGU9e2RheWpzKHBvc3QucHVibGlzaGVkQXQpLmZvcm1hdCgnREQvTU0vWVlZWScpfVxuICAgICAgICAgICAgaW1hZ2U9e1xuICAgICAgICAgICAgICBwb3N0Lm1ldGEuZmVhdHVyZWRJbWFnZSB8fFxuICAgICAgICAgICAgICAnaHR0cHM6Ly9pbWFnZXMucmVhY3Ricmlja3MuY29tL29yaWdpbmFsLzhiMTk3NGEwLTkxYTgtNGFiNC1iMDE0LTgzZjYwMTkyZjliNS5zdmcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCdcblxuaW50ZXJmYWNlIFBvc3RUaHVtYm5haWxQcm9wcyB7XG4gIGhyZWY6IHN0cmluZ1xuICB0aXRsZTogc3RyaW5nXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmdcbiAgZGF0ZTogc3RyaW5nXG4gIGltYWdlOiBhbnlcbn1cblxuY29uc3QgUG9zdFRodW1ibmFpbDogUmVhY3QuRkM8UG9zdFRodW1ibmFpbFByb3BzPiA9ICh7XG4gIGhyZWYsXG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgZGF0ZSxcbiAgaW1hZ2UsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExpbmsgY2xhc3NOYW1lPVwidy0xLzIgbWItOCBwLTggZ3JvdXBcIiB0bz17aHJlZn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e2ltYWdlfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCBoLTYwIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyIHRyYW5zaXRpb24tdHJhbnNmb3JtIHJvdW5kZWRcIlxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGJvdHRvbS0wIGxlZnQtMCByaWdodC0wIGJnLWN5YW4tNTAwIG9wYWNpdHktMCBncm91cC1ob3ZlcjpvcGFjaXR5LTQwIHRyYW5zaXRpb24tb3BhY2l0eSByb3VuZGVkXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS00IHRleHQteHMgdXBwZXJjYXNlIHRleHQtZ3JheS01MDBcIj57ZGF0ZX08L2Rpdj5cblxuICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTMgdGV4dC0yeGwgZm9udC1leHRyYWJvbGQgdGV4dC1ncmF5LTkwMCBncm91cC1ob3Zlcjp0ZXh0LWN5YW4tNTAwIHRyYW5zaXRpb24tY29sb3JzXCI+XG4gICAgICAgIHt0aXRsZX1cbiAgICAgIDwvaDM+XG5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDAgbWItNFwiPntkZXNjcmlwdGlvbn08L3A+XG4gICAgPC9MaW5rPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RUaHVtYm5haWxcbiIsICJpbXBvcnQgeyBmZXRjaFBhZ2VzLCBmZXRjaFRhZ3MsIHR5cGVzIH0gZnJvbSAncmVhY3QtYnJpY2tzL2Zyb250ZW5kJ1xuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSwgTGluayB9IGZyb20gJ3JlbWl4J1xuXG5pbXBvcnQgQmxvZ0xpc3RJdGVtIGZyb20gJ34vY29tcG9uZW50cy9Qb3N0TGlzdEl0ZW0nXG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoKSA9PiB7XG4gIFxuICBjb25zdCBwb3N0cyA9IGF3YWl0IGZldGNoUGFnZXMocHJvY2Vzcy5lbnYuQVBJX0tFWSBhcyBzdHJpbmcsIHtcbiAgICB0eXBlOiAnYmxvZycsXG4gICAgcGFnZVNpemU6IDEwMDAsXG4gICAgc29ydDogJy1wdWJsaXNoZWRBdCcsXG4gIH0pXG5cbiAgY29uc3QgeyBpdGVtczogdGFncyB9ID0gYXdhaXQgZmV0Y2hUYWdzKHByb2Nlc3MuZW52LkFQSV9LRVkgYXMgc3RyaW5nKVxuICB0YWdzLnNvcnQoKVxuXG4gIHJldHVybiB7IHBvc3RzLCB0YWdzIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdCgpIHtcbiAgY29uc3QgeyBwb3N0cywgdGFncyB9ID1cbiAgICB1c2VMb2FkZXJEYXRhPHsgcG9zdHM6IHR5cGVzLlBhZ2VGcm9tTGlzdFtdOyB0YWdzOiBzdHJpbmdbXSB9PigpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC00eGwgc206dGV4dC02eGwgbGc6dGV4dC03eGwgbGVhZGluZy1ub25lIGZvbnQtYmxhY2sgdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTkwMCBwYi00IG10LTEwIHNtOm10LTEyIG1iLTRcIj5cbiAgICAgICAgQmxvZ1xuICAgICAgPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNnhsIG14LWF1dG8gcHgtOCBweS0xNiBmbGV4IHNwYWNlLXgtMjRcIj5cbiAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3sgZmxleDogJzIgMiAwJyB9fSBjbGFzc05hbWU9XCJmbGV4LTIgc3BhY2UteS04XCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtcGluay01MDAgdXBwZXJjYXNlIG1iLTggdHJhY2tpbmctd2lkZXN0IGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgUmVjZW50bHkgcHVibGlzaGVkXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICB7cG9zdHM/Lm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgICAgPEJsb2dMaXN0SXRlbVxuICAgICAgICAgICAgICBrZXk9e3Bvc3QuaWR9XG4gICAgICAgICAgICAgIHRpdGxlPXtwb3N0Lm5hbWV9XG4gICAgICAgICAgICAgIGhyZWY9e2AvYmxvZy9wb3N0cy8ke3Bvc3Quc2x1Z31gfVxuICAgICAgICAgICAgICBjb250ZW50PXtwb3N0Lm1ldGEuZGVzY3JpcHRpb24gfHwgJyd9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZsZXgtMSBzcGFjZS15LTE2XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXBpbmstNTAwIHVwcGVyY2FzZSBtYi04IHRyYWNraW5nLXdpZGVzdCBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgVGFnc1xuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIHt0YWdzXG4gICAgICAgICAgICAgICAgPy5maWx0ZXIoKHRhZykgPT4gdGFnICE9PSAncG9wdWxhcicpXG4gICAgICAgICAgICAgICAgLm1hcCgodGFnKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICB0bz17YC90YWcvJHt0YWd9YH1cbiAgICAgICAgICAgICAgICAgICAga2V5PXt0YWd9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB0ZXh0LXNtIGZvbnQtYm9sZCBtci0yIG1iLTIgdHJhbnNmb3JtIGR1cmF0aW9uLTIwMCB0ZXh0LWN5YW4tODAwIGJnLWN5YW4tMTAwIGhvdmVyOmJnLWN5YW4tMjAwIGhvdmVyOnRleHQtY3lhbi05MDAgcm91bmRlZC1tZCBweC0yIHB5LTFcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiIHN0eWxlPXt7IHpJbmRleDogLTEgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAge3RhZ31cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1waW5rLTUwMCB1cHBlcmNhc2UgbWItOCB0cmFja2luZy13aWRlc3QgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgIE1vc3QgUG9wdWxhclxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAge3Bvc3RzXG4gICAgICAgICAgICAgICAgPy5maWx0ZXIoKHBvc3QpID0+IHBvc3QudGFncy5maW5kKCh0YWcpID0+IHRhZyA9PT0gJ3BvcHVsYXInKSlcbiAgICAgICAgICAgICAgICAubWFwKChwb3N0KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtwb3N0LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXtwb3N0LnNsdWd9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTkwMCBob3Zlcjp0ZXh0LWN5YW4tNjAwIGZvbnQtYm9sZCB0ZXh0LWxnIGxlYWRpbmctMTAgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge3Bvc3QubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4J1xuXG5pbnRlcmZhY2UgUG9zdExpc3RJdGVtUHJvcHMge1xuICB0aXRsZTogc3RyaW5nXG4gIGhyZWY6IHN0cmluZ1xuICBjb250ZW50OiBzdHJpbmdcbn1cblxuY29uc3QgUG9zdExpc3RJdGVtOiBSZWFjdC5GQzxQb3N0TGlzdEl0ZW1Qcm9wcz4gPSAoe1xuICB0aXRsZSxcbiAgaHJlZixcbiAgY29udGVudCxcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGlua1xuICAgICAgdG89e2hyZWZ9XG4gICAgICBjbGFzc05hbWU9XCJmbGV4LTEgYmxvY2sgZ3JvdXAgcHktNCB0ZXh0LWdyYXktOTAwIGhvdmVyOmJnLWdyYXktNTAgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwIHAtNiAtbS02IHJvdW5kZWRcIlxuICAgID5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC0yeGxcIj57dGl0bGV9PC9oMz5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTQgbGVhZGluZy02IHRleHQtbGdcIj57Y29udGVudH08L3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG10LTQgdGV4dC1jeWFuLTUwMCBncm91cC1ob3Zlcjp0ZXh0LWN5YW4tNjAwIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci0yIGdyb3VwLWhvdmVyOm1yLTQgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCI+XG4gICAgICAgICAgUmVhZCBNb3JlXG4gICAgICAgIDwvZGl2PlxuICAgICAgICAmcmFxdW87XG4gICAgICA8L2Rpdj5cbiAgICA8L0xpbms+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdExpc3RJdGVtXG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonM2MwODhkNzUnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LVBRWkJZS0lVLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1XV09PSElGUi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVpKR0xNUzNKLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWTJQV0w3SlIuanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LVVIVVJUVlo3LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1YS01UQ1JGVS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTY1TFFPRDZKLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstM1NZSlRaWkkuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1KVkI2RFFRSy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVVVVERWTTZWLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOnRydWV9LCdyb3V0ZXMvYWRtaW4vYXBwLXNldHRpbmdzJzp7J2lkJzoncm91dGVzL2FkbWluL2FwcC1zZXR0aW5ncycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhZG1pbi9hcHAtc2V0dGluZ3MnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYWRtaW4vYXBwLXNldHRpbmdzLUhSUFBCR1lHLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1VNDU0NUkzVS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYWRtaW4vZWRpdG9yJzp7J2lkJzoncm91dGVzL2FkbWluL2VkaXRvcicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhZG1pbi9lZGl0b3InLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYWRtaW4vZWRpdG9yLVY2UERSVVpRLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1VNDU0NUkzVS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYWRtaW4vaW5kZXgnOnsnaWQnOidyb3V0ZXMvYWRtaW4vaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYWRtaW4nLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2FkbWluL2luZGV4LUtENlU3SFBTLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1VNDU0NUkzVS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYWRtaW4vcGxheWdyb3VuZCc6eydpZCc6J3JvdXRlcy9hZG1pbi9wbGF5Z3JvdW5kJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2FkbWluL3BsYXlncm91bmQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYWRtaW4vcGxheWdyb3VuZC1BSDVVSFk2Sy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstVTQ1NDVJM1UuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Jsb2cnOnsnaWQnOidyb3V0ZXMvYmxvZycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidibG9nJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Jsb2ctNVE2U1BOQ1ouanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUtONEVJS0RHLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5Jzp0cnVlfSwncm91dGVzL2Jsb2cvbGlzdCc6eydpZCc6J3JvdXRlcy9ibG9nL2xpc3QnLCdwYXJlbnRJZCc6J3JvdXRlcy9ibG9nJywncGF0aCc6J2xpc3QnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYmxvZy9saXN0LVBMSFQ2WUNILmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay0zU1lKVFpaSS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUpWQjZEUVFLLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Jsb2cvcG9zdHMvJHNsdWcnOnsnaWQnOidyb3V0ZXMvYmxvZy9wb3N0cy8kc2x1ZycsJ3BhcmVudElkJzoncm91dGVzL2Jsb2cnLCdwYXRoJzoncG9zdHMvOnNsdWcnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYmxvZy9wb3N0cy8kc2x1Zy1DN1pGQlFYMi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstM1NZSlRaWkkuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1KVkI2RFFRSy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9ibG9nL3RodW1ibmFpbHMnOnsnaWQnOidyb3V0ZXMvYmxvZy90aHVtYm5haWxzJywncGFyZW50SWQnOidyb3V0ZXMvYmxvZycsJ3BhdGgnOid0aHVtYm5haWxzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Jsb2cvdGh1bWJuYWlscy1PUUg0QVNLWS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstWEtNVENSRlUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0zU1lKVFpaSS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUpWQjZEUVFLLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LVZaVVdUV1pFLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1LTjRFSUtERy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5Jzp0cnVlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC0zQzA4OEQ3NS5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFBQTtBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUs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
