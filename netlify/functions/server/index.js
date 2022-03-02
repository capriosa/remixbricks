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
    style: { backgroundImage: `url(${background == null ? void 0 : background.src})` },
    className: `w-full flex items-center px-6 pb-12 antialiased bg-cover  
    
    ${fullHeight ? "min-h-screen" : ""}`
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: `mx-auto max-w-7xl `
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "container max-w-lg px-4 py-32 mx-auto md:max-w-none md:text-center"
  }, /* @__PURE__ */ import_react2.default.createElement(import_frontend2.Text, {
    renderBlock: (props) => /* @__PURE__ */ import_react2.default.createElement("h1", {
      className: `text-5xl font-extrabold leading-10 tracking-tight text-${headlineAlignment} 
            ${bgColor == null ? void 0 : bgColor.className} sm:leading-none md:text-6xl lg:text-7xl
            ${color == null ? void 0 : color.className}
            `
    }, props.children),
    placeholder: "Type a title...",
    propName: "title"
  }), /* @__PURE__ */ import_react2.default.createElement(import_frontend2.RichText, {
    renderBlock: (props) => /* @__PURE__ */ import_react2.default.createElement("p", {
      className: `mx-auto mt-5 ${paragraphColor == null ? void 0 : paragraphColor.className} 
            text-${paragraphAlignment} 
            
            md:mt-12 md:max-w-lg lg:text-lg`
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
  })), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "flex flex-col items-center mt-12 text-center"
  }, /* @__PURE__ */ import_react2.default.createElement("span", {
    className: "relative inline-flex w-full md:w-auto"
  }, /* @__PURE__ */ import_react2.default.createElement("a", {
    href: "#_",
    type: "button",
    className: "inline-flex hover:bg-orange items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-gray bg-orange border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
  }, "More Info")))));
};
MdwpBgHeroUnit.schema = {
  name: "mdwp-hero-unit",
  label: "mdwp Hero Unit",
  getDefaultProps: () => ({
    Color: { color: "#000000", className: "text-black" },
    ParagraphColor: { color: "#ffffff", className: "text-white" },
    Background: { className: "br-gray" },
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
  const apiKey = process.env.API_KEY || "c5712074-2b62-4fa2-8bd7-e7f98d8702bf";
  const appId = process.env.APP_ID || "b863c797-91dd-4e19-939b-3fa2ccf28bf6";
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
var assets_manifest_default = { "version": "b9288fb1", "entry": { "module": "/build/entry.client-AT4QJFLA.js", "imports": ["/build/_shared/chunk-WWOOHIFR.js", "/build/_shared/chunk-PNJMPGEZ.js", "/build/_shared/chunk-Y2PWL7JR.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-V5WQPZFH.js", "imports": ["/build/_shared/chunk-XKMTCRFU.js", "/build/_shared/chunk-KDHMD3VE.js", "/build/_shared/chunk-GBYJDOUQ.js", "/build/_shared/chunk-SEO2H4MT.js", "/build/_shared/chunk-UUTDVM6V.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/admin/app-settings": { "id": "routes/admin/app-settings", "parentId": "root", "path": "admin/app-settings", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/admin/app-settings-WOK4E745.js", "imports": ["/build/_shared/chunk-TUSY52DF.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/admin/editor": { "id": "routes/admin/editor", "parentId": "root", "path": "admin/editor", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/admin/editor-6QML6T43.js", "imports": ["/build/_shared/chunk-TUSY52DF.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/admin/index": { "id": "routes/admin/index", "parentId": "root", "path": "admin", "index": true, "caseSensitive": void 0, "module": "/build/routes/admin/index-NHDHHWBS.js", "imports": ["/build/_shared/chunk-TUSY52DF.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/admin/playground": { "id": "routes/admin/playground", "parentId": "root", "path": "admin/playground", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/admin/playground-6HT74D2Z.js", "imports": ["/build/_shared/chunk-TUSY52DF.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog": { "id": "routes/blog", "parentId": "root", "path": "blog", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog-WGAYTEGU.js", "imports": ["/build/_shared/chunk-YFJPB2ZL.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/blog/list": { "id": "routes/blog/list", "parentId": "routes/blog", "path": "list", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/list-43BHJQIW.js", "imports": ["/build/_shared/chunk-GBYJDOUQ.js", "/build/_shared/chunk-SEO2H4MT.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/posts/$slug": { "id": "routes/blog/posts/$slug", "parentId": "routes/blog", "path": "posts/:slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/posts/$slug-P5LV2CN6.js", "imports": ["/build/_shared/chunk-GBYJDOUQ.js", "/build/_shared/chunk-SEO2H4MT.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/thumbnails": { "id": "routes/blog/thumbnails", "parentId": "routes/blog", "path": "thumbnails", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/thumbnails-EPIFU5U4.js", "imports": ["/build/_shared/chunk-XKMTCRFU.js", "/build/_shared/chunk-GBYJDOUQ.js", "/build/_shared/chunk-SEO2H4MT.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-EQK7GEVU.js", "imports": ["/build/_shared/chunk-YFJPB2ZL.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true } }, "url": "/build/manifest-B9288FB1.js" };

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
  mode: "development"
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi8uLi8uLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L1VzZXJzL21kL2dpdGh1Yi1yZXBvcy9yZW1peGJyaWNrcy9hcHAvcm9vdC50c3giLCAiLi4vLi4vLi4vYXBwL3JlYWN0LWJyaWNrcy9jb25maWcudHMiLCAiLi4vLi4vLi4vYXBwL3JlYWN0LWJyaWNrcy9icmlja3MvaW5kZXgudHMiLCAiLi4vLi4vLi4vYXBwL3JlYWN0LWJyaWNrcy9icmlja3MvTXlIZXJvVW5pdC50c3giLCAiLi4vLi4vLi4vYXBwL3JlYWN0LWJyaWNrcy9icmlja3MvTWR3cEhlcm9Vbml0LnRzeCIsICIuLi8uLi8uLi9hcHAvcmVhY3QtYnJpY2tzL3V0aWxzL2NvbG9ycy50cyIsICIuLi8uLi8uLi9hcHAvcmVhY3QtYnJpY2tzL3BhZ2VUeXBlcy50cyIsICIuLi8uLi8uLi9hcHAvcmVhY3QtYnJpY2tzL1JlbWl4TGluay50c3giLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvRXJyb3JNZXNzYWdlLnRzeCIsICJyb3V0ZTovVXNlcnMvbWQvZ2l0aHViLXJlcG9zL3JlbWl4YnJpY2tzL2FwcC9yb3V0ZXMvYWRtaW4vYXBwLXNldHRpbmdzLnRzeCIsICJyb3V0ZTovVXNlcnMvbWQvZ2l0aHViLXJlcG9zL3JlbWl4YnJpY2tzL2FwcC9yb3V0ZXMvYWRtaW4vcGxheWdyb3VuZC50c3giLCAicm91dGU6L1VzZXJzL21kL2dpdGh1Yi1yZXBvcy9yZW1peGJyaWNrcy9hcHAvcm91dGVzL2FkbWluL2VkaXRvci50c3giLCAicm91dGU6L1VzZXJzL21kL2dpdGh1Yi1yZXBvcy9yZW1peGJyaWNrcy9hcHAvcm91dGVzL2FkbWluL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvbWQvZ2l0aHViLXJlcG9zL3JlbWl4YnJpY2tzL2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0xheW91dC50c3giLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvSGVhZGVyLnRzeCIsICIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9Gb290ZXIudHN4IiwgInJvdXRlOi9Vc2Vycy9tZC9naXRodWItcmVwb3MvcmVtaXhicmlja3MvYXBwL3JvdXRlcy9ibG9nLnRzeCIsICJyb3V0ZTovVXNlcnMvbWQvZ2l0aHViLXJlcG9zL3JlbWl4YnJpY2tzL2FwcC9yb3V0ZXMvYmxvZy9wb3N0cy8kc2x1Zy50c3giLCAicm91dGU6L1VzZXJzL21kL2dpdGh1Yi1yZXBvcy9yZW1peGJyaWNrcy9hcHAvcm91dGVzL2Jsb2cvdGh1bWJuYWlscy50c3giLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvUG9zdFRodW1ibmFpbC50c3giLCAicm91dGU6L1VzZXJzL21kL2dpdGh1Yi1yZXBvcy9yZW1peGJyaWNrcy9hcHAvcm91dGVzL2Jsb2cvbGlzdC50c3giLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvUG9zdExpc3RJdGVtLnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJpbXBvcnQgeyBjcmVhdGVSZXF1ZXN0SGFuZGxlciB9IGZyb20gXCJAcmVtaXgtcnVuL25ldGxpZnlcIjtcbmltcG9ydCAqIGFzIGJ1aWxkIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjtcblxuLypcbiAqIFJldHVybnMgYSBjb250ZXh0IG9iamVjdCB3aXRoIGF0IG1vc3QgMyBrZXlzOlxuICogIC0gYG5ldGxpZnlHcmFwaFRva2VuYDogcmF3IGF1dGhlbnRpY2F0aW9uIHRva2VuIHRvIHVzZSB3aXRoIE5ldGxpZnkgR3JhcGhcbiAqICAtIGBjbGllbnROZXRsaWZ5R3JhcGhBY2Nlc3NUb2tlbmA6IEZvciB1c2Ugd2l0aCBKV1RzIGdlbmVyYXRlZCBieVxuICogICAgYG5ldGxpZnktZ3JhcGgtYXV0aGAuXG4gKiAgLSBgbmV0bGlmeUdyYXBoU2lnbmF0dXJlYDogYSBzaWduYXR1cmUgZm9yIHN1YnNjcmlwdGlvbiBldmVudHMuIFdpbGwgYmVcbiAqICAgIHByZXNlbnQgaWYgYSBzZWNyZXQgaXMgc2V0LlxuICovXG5mdW5jdGlvbiBnZXRMb2FkQ29udGV4dChldmVudCwgY29udGV4dCkge1xuICBsZXQgcmF3QXV0aG9yaXphdGlvblN0cmluZztcbiAgbGV0IG5ldGxpZnlHcmFwaFRva2VuO1xuXG4gIGlmIChldmVudC5hdXRobGlmeVRva2VuICE9IG51bGwpIHtcbiAgICBuZXRsaWZ5R3JhcGhUb2tlbiA9IGV2ZW50LmF1dGhsaWZ5VG9rZW47XG4gIH1cblxuICBjb25zdCBhdXRoSGVhZGVyID0gZXZlbnQuaGVhZGVyc1tcImF1dGhvcml6YXRpb25cIl07XG4gIGNvbnN0IGdyYXBoU2lnbmF0dXJlSGVhZGVyID0gZXZlbnQuaGVhZGVyc1tcIngtbmV0bGlmeS1ncmFwaC1zaWduYXR1cmVcIl07XG5cbiAgaWYgKGF1dGhIZWFkZXIgIT0gbnVsbCAmJiAvQmVhcmVyIC9naS50ZXN0KGF1dGhIZWFkZXIpKSB7XG4gICAgcmF3QXV0aG9yaXphdGlvblN0cmluZyA9IGF1dGhIZWFkZXIuc3BsaXQoXCIgXCIpWzFdO1xuICB9XG5cbiAgY29uc3QgbG9hZENvbnRleHQgPSB7XG4gICAgY2xpZW50TmV0bGlmeUdyYXBoQWNjZXNzVG9rZW46IHJhd0F1dGhvcml6YXRpb25TdHJpbmcsXG4gICAgbmV0bGlmeUdyYXBoVG9rZW46IG5ldGxpZnlHcmFwaFRva2VuLFxuICAgIG5ldGxpZnlHcmFwaFNpZ25hdHVyZTogZ3JhcGhTaWduYXR1cmVIZWFkZXIsXG4gIH07XG5cbiAgLy8gUmVtb3ZlIGtleXMgd2l0aCB1bmRlZmluZWQgdmFsdWVzXG4gIE9iamVjdC5rZXlzKGxvYWRDb250ZXh0KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAobG9hZENvbnRleHRba2V5XSA9PSBudWxsKSB7XG4gICAgICBkZWxldGUgbG9hZENvbnRleHRba2V5XTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBsb2FkQ29udGV4dDtcbn1cblxuZXhwb3J0IGNvbnN0IGhhbmRsZXIgPSBjcmVhdGVSZXF1ZXN0SGFuZGxlcih7XG4gIGJ1aWxkLFxuICBnZXRMb2FkQ29udGV4dCxcbiAgbW9kZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYsXG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvbWQvZ2l0aHViLXJlcG9zL3JlbWl4YnJpY2tzL2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9tZC9naXRodWItcmVwb3MvcmVtaXhicmlja3MvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9tZC9naXRodWItcmVwb3MvcmVtaXhicmlja3MvYXBwL3JvdXRlcy9hZG1pbi9hcHAtc2V0dGluZ3MudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9tZC9naXRodWItcmVwb3MvcmVtaXhicmlja3MvYXBwL3JvdXRlcy9hZG1pbi9wbGF5Z3JvdW5kLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvbWQvZ2l0aHViLXJlcG9zL3JlbWl4YnJpY2tzL2FwcC9yb3V0ZXMvYWRtaW4vZWRpdG9yLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvVXNlcnMvbWQvZ2l0aHViLXJlcG9zL3JlbWl4YnJpY2tzL2FwcC9yb3V0ZXMvYWRtaW4vaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9Vc2Vycy9tZC9naXRodWItcmVwb3MvcmVtaXhicmlja3MvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiL1VzZXJzL21kL2dpdGh1Yi1yZXBvcy9yZW1peGJyaWNrcy9hcHAvcm91dGVzL2Jsb2cudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTcgZnJvbSBcIi9Vc2Vycy9tZC9naXRodWItcmVwb3MvcmVtaXhicmlja3MvYXBwL3JvdXRlcy9ibG9nL3Bvc3RzLyRzbHVnLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCIvVXNlcnMvbWQvZ2l0aHViLXJlcG9zL3JlbWl4YnJpY2tzL2FwcC9yb3V0ZXMvYmxvZy90aHVtYm5haWxzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU5IGZyb20gXCIvVXNlcnMvbWQvZ2l0aHViLXJlcG9zL3JlbWl4YnJpY2tzL2FwcC9yb3V0ZXMvYmxvZy9saXN0LnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRtaW4vYXBwLXNldHRpbmdzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hZG1pbi9hcHAtc2V0dGluZ3NcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYWRtaW4vYXBwLXNldHRpbmdzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9hZG1pbi9wbGF5Z3JvdW5kXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hZG1pbi9wbGF5Z3JvdW5kXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFkbWluL3BsYXlncm91bmRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL2FkbWluL2VkaXRvclwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYWRtaW4vZWRpdG9yXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFkbWluL2VkaXRvclwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRtaW4vaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2FkbWluL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFkbWluXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU0XG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU1XG4gICAgfSxcbiAgXCJyb3V0ZXMvYmxvZ1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYmxvZ1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJibG9nXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTZcbiAgICB9LFxuICBcInJvdXRlcy9ibG9nL3Bvc3RzLyRzbHVnXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ibG9nL3Bvc3RzLyRzbHVnXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvYmxvZ1wiLFxuICAgICAgcGF0aDogXCJwb3N0cy86c2x1Z1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU3XG4gICAgfSxcbiAgXCJyb3V0ZXMvYmxvZy90aHVtYm5haWxzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ibG9nL3RodW1ibmFpbHNcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9ibG9nXCIsXG4gICAgICBwYXRoOiBcInRodW1ibmFpbHNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOFxuICAgIH0sXG4gIFwicm91dGVzL2Jsb2cvbGlzdFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYmxvZy9saXN0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvYmxvZ1wiLFxuICAgICAgcGF0aDogXCJsaXN0XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTlcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG4gIHVzZU5hdmlnYXRlLFxuICB1c2VMb2FkZXJEYXRhLFxufSBmcm9tICdyZW1peCdcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBSZWFjdEJyaWNrcyB9IGZyb20gJ3JlYWN0LWJyaWNrcy9mcm9udGVuZCdcbmltcG9ydCBjb25maWcgZnJvbSAnLi9yZWFjdC1icmlja3MvY29uZmlnJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vdGFpbHdpbmQuY3NzJ1xuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICcuL2NvbXBvbmVudHMvRXJyb3JNZXNzYWdlJ1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH1dXG59XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7IHRpdGxlOiAnUmVtaXggQmxvZyBTdGFydGVyIHdpdGggUmVhY3QgQnJpY2tzJyB9XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGFwaUtleSA9IHByb2Nlc3MuZW52LkFQSV9LRVkgfHwgXCJjNTcxMjA3NC0yYjYyLTRmYTItOGJkNy1lN2Y5OGQ4NzAyYmZcIlxuICBjb25zdCBhcHBJZCA9IHByb2Nlc3MuZW52LkFQUF9JRCB8fCBcImI4NjNjNzk3LTkxZGQtNGUxOS05MzliLTNmYTJjY2YyOGJmNlwiXG5cbiAgaWYgKCFhcGlLZXkgfHwgIWFwcElkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIFJlYWN0IEJyaWNrcyBjcmVkZW50aWFscyBpbiAuZW52IGZpbGUnKVxuICB9XG5cbiAgcmV0dXJuIHsgYXBwSWQsIGFwaUtleSB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpXG4gIGNvbnN0IHsgYXBwSWQsIGFwaUtleSB9ID0gdXNlTG9hZGVyRGF0YSgpXG5cbiAgY29uc3QgcmVhY3RCcmlja3NDb25maWcgPSB7XG4gICAgLi4uY29uZmlnLFxuICAgIGFwcElkLFxuICAgIGFwaUtleSxcbiAgICBuYXZpZ2F0ZTogKHBhdGg6IHN0cmluZykgPT4gbmF2aWdhdGUocGF0aCksXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keSBpZD1cInJvb3RcIj5cbiAgICAgICAgPFJlYWN0QnJpY2tzIHsuLi5yZWFjdEJyaWNrc0NvbmZpZ30+XG4gICAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8L1JlYWN0QnJpY2tzPlxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnICYmIDxMaXZlUmVsb2FkIC8+fVxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKVxufVxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQm91bmRhcnkoeyBlcnJvciB9OiB7IGVycm9yOiBFcnJvciB9KSB7XG4gIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gIHJldHVybiAoXG4gICAgPGh0bWw+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPHRpdGxlPk9oIG5vITwvdGl0bGU+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxFcnJvck1lc3NhZ2UgZXJyb3I9e2Vycm9yfSAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKVxufVxuIiwgImltcG9ydCB7IHR5cGVzIH0gZnJvbSAncmVhY3QtYnJpY2tzL2Zyb250ZW5kJ1xuXG5pbXBvcnQgYnJpY2tzIGZyb20gJy4vYnJpY2tzJ1xuaW1wb3J0IHBhZ2VUeXBlcyBmcm9tICcuL3BhZ2VUeXBlcydcbmltcG9ydCBSZW1peExpbmsgZnJvbSAnLi9SZW1peExpbmsnXG5cbmNvbnN0IGNvbmZpZzogdHlwZXMuUmVhY3RCcmlja3NDb25maWcgPSB7XG4gIGFwcElkOiAnJywgLy9wcm9jZXNzLmVudi5BUFBfSUQgYXMgc3RyaW5nIHx8ICcnLFxuICBhcGlLZXk6ICcnLCAvL3Byb2Nlc3MuZW52LkFQSV9LRVkgYXMgc3RyaW5nIHx8ICcnLFxuICBwYWdlVHlwZXMsXG4gIGJyaWNrcyxcbiAgbG9nbzogJy9sb2dvLnN2ZycsXG4gIC8vIC8vIGNvbnRlbnRDbGFzc05hbWU6ICdjb250ZW50JywgLy8gRGVmaW5lZCBkeW5hbWljYWxseVxuICAvLyAvLyBpc0RhcmtDb2xvck1vZGU6IC4uLiwgICAgICAgIC8vIGluIF9hcHAudHN4XG4gIC8vIC8vIHRvZ2dsZUNvbG9yTW9kZTogLi4uLCAgICAgICAgLy8gdG8gbWFuYWdlIERhcmsgTW9kZVxuICByZW5kZXJMb2NhbExpbms6IFJlbWl4TGluayxcbiAgbmF2aWdhdGU6ICgpID0+IHt9LFxuICBsb2dpblBhdGg6ICcvYWRtaW4nLFxuICBlZGl0b3JQYXRoOiAnL2FkbWluL2VkaXRvcicsXG4gIHBsYXlncm91bmRQYXRoOiAnL2FkbWluL3BsYXlncm91bmQnLFxuICBhcHBTZXR0aW5nc1BhdGg6ICcvYWRtaW4vYXBwLXNldHRpbmdzJyxcbiAgdXNlQ3NzSW5KczogZmFsc2UsXG4gIGFwcFJvb3RFbGVtZW50OiAnI3Jvb3QnLFxuICBjbGlja1RvRWRpdFNpZGU6IHR5cGVzLkNsaWNrVG9FZGl0U2lkZS5Cb3R0b21SaWdodCxcbiAgY3VzdG9tRmllbGRzOiBbXSxcbiAgLy8gLy9yZXNwb25zaXZlQnJlYWtwb2ludHM6IFt7IHR5cGU6IHR5cGVzLkRldmljZVR5cGUuUGhvbmUsIHdpZHRoOiA0ODAsIGxhYmVsOiAnU21hcnRwaG9uZSd9XSxcbiAgZW5hYmxlQXV0b1NhdmU6IHRydWUsXG4gIGRpc2FibGVTYXZlSWZJbnZhbGlkUHJvcHM6IGZhbHNlLFxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25maWdcbiIsICJpbXBvcnQgeyB0eXBlcyB9IGZyb20gJ3JlYWN0LWJyaWNrcy9mcm9udGVuZCdcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFJFQUNUIEJSSUNLUyBVSVxuLy8gWW91IG1heSBhbHNvIGltcG9ydCB7IFNpbmdsZSBCcmlja3MgfVxuLy8gdG8gcmVkdWNlIHRoZSBidW5kbGUgc2l6ZVxuaW1wb3J0IEJsb2cgZnJvbSAncmVhY3QtYnJpY2tzLXVpL2Jsb2cnXG5pbXBvcnQgV2Vic2l0ZSBmcm9tICdyZWFjdC1icmlja3MtdWkvd2Vic2l0ZSdcblxuLy8gRXhhbXBsZSBjdXN0b20gYnJpY2tcbmltcG9ydCBNeUhlcm9Vbml0IGZyb20gJy4vTXlIZXJvVW5pdCdcbmltcG9ydCBNZHdwSGVyb1VuaXQgZnJvbSAnLi9NZHdwSGVyb1VuaXQnXG5cbmNvbnN0IGJyaWNrczogdHlwZXMuQnJpY2s8YW55PltdID0gW1xuICAuLi5XZWJzaXRlLFxuICAuLi5CbG9nLFxuICBNeUhlcm9Vbml0LFxuICBNZHdwSGVyb1VuaXRcbiAgLy8gUHV0IGhlcmUgeW91ciBvdGhlciBicmlja3MuLi5cbl1cblxuZXhwb3J0IGRlZmF1bHQgYnJpY2tzXG4iLCAiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUZXh0LCBSaWNoVGV4dCwgSW1hZ2UsIHR5cGVzIH0gZnJvbSAncmVhY3QtYnJpY2tzL2Zyb250ZW5kJ1xuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2NhbCBUeXBlc1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxudHlwZSBQYWRkaW5nID0gJ2JpZycgfCAnc21hbGwnXG5cbmludGVyZmFjZSBIZXJvVW5pdFByb3BzIHtcbiAgcGFkZGluZzogUGFkZGluZ1xuICB0aXRsZTogc3RyaW5nXG4gIHRleHQ6IHN0cmluZ1xufVxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDb21wb25lbnQgdG8gYmUgcmVuZGVyZWRcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmNvbnN0IE15SGVyb1VuaXQ6IHR5cGVzLkJyaWNrPEhlcm9Vbml0UHJvcHM+ID0gKHsgcGFkZGluZyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtgbWF4LXcteGwgbXgtYXV0byBweC02ICR7XG4gICAgICAgIHBhZGRpbmcgPT09ICdiaWcnID8gJ3B5LTIwJyA6ICdweS0xMidcbiAgICAgIH1gfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgcHJvcE5hbWU9XCJpY29uXCJcbiAgICAgICAgICBhbHQ9XCJJY29uXCJcbiAgICAgICAgICBtYXhXaWR0aD17ODB9XG4gICAgICAgICAgYXNwZWN0UmF0aW89ezF9XG4gICAgICAgICAgaW1hZ2VDbGFzc05hbWU9XCJ3LTIwIG1iLTVcIlxuICAgICAgICAvPlxuICAgICAgICA8VGV4dFxuICAgICAgICAgIHJlbmRlckJsb2NrPXsocHJvcHMpID0+IChcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBzbTp0ZXh0LTR4bCB0ZXh0LWNlbnRlciBmb250LWJsYWNrIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlIGxlYWRpbmctdGlnaHQgbWItM1wiPlxuICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICl9XG4gICAgICAgICAgcmVuZGVyUGxhY2Vob2xkZXI9eyhwcm9wcykgPT4gKFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3BhY2l0eS0zMFwiPntwcm9wcy5jaGlsZHJlbn08L3NwYW4+XG4gICAgICAgICAgKX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgYSB0aXRsZS4uLlwiXG4gICAgICAgICAgcHJvcE5hbWU9XCJ0aXRsZVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxSaWNoVGV4dFxuICAgICAgICAgIHJlbmRlckJsb2NrPXsocHJvcHMpID0+IChcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC1jZW50ZXIgbGVhZGluZy1yZWxheGVkIHRleHQtZ3JheS03MDAgZGFyazp0ZXh0LWdyYXktMTAwXCI+XG4gICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICApfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSBhIHRleHQuLi5cIlxuICAgICAgICAgIHByb3BOYW1lPVwidGV4dFwiXG4gICAgICAgICAgYWxsb3dlZEZlYXR1cmVzPXtbXG4gICAgICAgICAgICB0eXBlcy5SaWNoVGV4dEZlYXR1cmVzLkJvbGQsXG4gICAgICAgICAgICB0eXBlcy5SaWNoVGV4dEZlYXR1cmVzLkl0YWxpYyxcbiAgICAgICAgICAgIHR5cGVzLlJpY2hUZXh0RmVhdHVyZXMuSGlnaGxpZ2h0LFxuICAgICAgICAgICAgdHlwZXMuUmljaFRleHRGZWF0dXJlcy5Db2RlLFxuICAgICAgICAgICAgdHlwZXMuUmljaFRleHRGZWF0dXJlcy5MaW5rLFxuICAgICAgICAgIF19XG4gICAgICAgICAgcmVuZGVyQ29kZT17KHByb3BzKSA9PiAoXG4gICAgICAgICAgICA8Y29kZSBjbGFzc05hbWU9XCJ0ZXh0LXNtIHB5LTEgcHgtMiBiZy1ncmF5LTIwMCBkYXJrOmJnLWdyYXktNzAwIHJvdW5kZWRcIj5cbiAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9jb2RlPlxuICAgICAgICAgICl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBCcmljayBTY2hlbWFcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbk15SGVyb1VuaXQuc2NoZW1hID0ge1xuICBuYW1lOiAnbXktaGVyby11bml0JyxcbiAgbGFiZWw6ICdDdXN0b20gSGVybyBVbml0JyxcbiAgZ2V0RGVmYXVsdFByb3BzOiAoKSA9PiAoe1xuICAgIHBhZGRpbmc6ICdiaWcnLFxuICAgIHRpdGxlOiAnVGhpcyBpcyBhIGN1c3RvbSBIZXJvIFVuaXQnLFxuICAgIHRleHQ6IFwiV2UgYXJlIGEgaGktdGVjaCB3ZWIgZGV2ZWxvcG1lbnQgY29tcGFueSBjb21taXR0ZWQgdG8gZGVsaXZlciBncmVhdCBwcm9kdWN0cyBvbiB0aW1lLiBXZSBsb3ZlIHRvIHVuZGVyc3RhbmQgb3VyIGN1c3RvbWVycycgbmVlZHMgYW5kIGV4Y2VlZCBleHBlY3RhdGlvbnMuXCIsXG4gIH0pLFxuICBzaWRlRWRpdFByb3BzOiBbXG4gICAge1xuICAgICAgbmFtZTogJ3BhZGRpbmcnLFxuICAgICAgbGFiZWw6ICdQYWRkaW5nJyxcbiAgICAgIHR5cGU6IHR5cGVzLlNpZGVFZGl0UHJvcFR5cGUuU2VsZWN0LFxuICAgICAgc2VsZWN0T3B0aW9uczoge1xuICAgICAgICBkaXNwbGF5OiB0eXBlcy5PcHRpb25zRGlzcGxheS5TZWxlY3QsXG4gICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICB7IHZhbHVlOiAnYmlnJywgbGFiZWw6ICdCaWcgUGFkZGluZycgfSxcbiAgICAgICAgICB7IHZhbHVlOiAnc21hbGwnLCBsYWJlbDogJ1NtYWxsIFBhZGRpbmcnIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0sXG4gIF0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15SGVyb1VuaXRcbiIsICJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRleHQsIFJpY2hUZXh0LCB0eXBlcyB9IGZyb20gJ3JlYWN0LWJyaWNrcy9mcm9udGVuZCdcbmltcG9ydCB7IENvbG9ycywgQmdDb2xvcnMsIFBhcmFncmFwaENvbG9ycywgSGVhZGxpbmVBbGlnbm1lbnQsIFBhcmFncmFwaEFsaWdubWVudCB9IGZyb20gJy4uL3V0aWxzL2NvbG9ycydcblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTG9jYWwgVHlwZXNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW50ZXJmYWNlIEhlcm9Vbml0UHJvcHMge1xuICBjb2xvcjogdHlwZXMuSUNvbG9yXG4gIHBhcmFncmFwaENvbG9yOiB0eXBlcy5JQ29sb3JcbiAgYmdDb2xvcjogdHlwZXMuSUNvbG9yXG4gIGhlYWRsaW5lQWxpZ25tZW50PzogICdsZWZ0JyB8ICdjZW50ZXInIHwgJ3JpZ2h0J1xuICBwYXJhZ3JhcGhBbGlnbm1lbnQ/OiAgJ2xlZnQnIHwgJ2NlbnRlcicgfCAncmlnaHQnXG4gIGZ1bGxIZWlnaHQ6IGJvb2xlYW5cbiAgYmFja2dyb3VuZDogdHlwZXMuSUltYWdlU291cmNlXG4gIHRpdGxlOiBzdHJpbmdcbiAgdGV4dDogc3RyaW5nXG59XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENvbXBvbmVudCB0byBiZSByZW5kZXJlZFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuY29uc3QgTWR3cEJnSGVyb1VuaXQ6IHR5cGVzLkJyaWNrPEhlcm9Vbml0UHJvcHM+ID0gKHsgYmFja2dyb3VuZCwgY29sb3IsIGJnQ29sb3IsIHBhcmFncmFwaENvbG9yLCBoZWFkbGluZUFsaWdubWVudCwgcGFyYWdyYXBoQWxpZ25tZW50LGZ1bGxIZWlnaHQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgICBcbiAgICA8c2VjdGlvbiBcbiAgICBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogYHVybCgke2JhY2tncm91bmQ/LnNyY30pYH19IFxuICAgIFxuICAgIGNsYXNzTmFtZT17YHctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBweC02IHBiLTEyIGFudGlhbGlhc2VkIGJnLWNvdmVyICBcbiAgICBcbiAgICAke1xuICAgICAgZnVsbEhlaWdodCA/ICdtaW4taC1zY3JlZW4nIDogJydcbiAgICB9YH0+XG4gICAgICBcbiAgXG4gICAgPGRpdiBjbGFzc05hbWU9e2BteC1hdXRvIG1heC13LTd4bCBgfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtYXgtdy1sZyBweC00IHB5LTMyIG14LWF1dG8gbWQ6bWF4LXctbm9uZSBtZDp0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8VGV4dFxuICAgICAgICAgIHJlbmRlckJsb2NrPXsocHJvcHMpID0+IChcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2B0ZXh0LTV4bCBmb250LWV4dHJhYm9sZCBsZWFkaW5nLTEwIHRyYWNraW5nLXRpZ2h0IHRleHQtJHtoZWFkbGluZUFsaWdubWVudH0gXG4gICAgICAgICAgICAke1xuICAgICAgICAgICAgICBiZ0NvbG9yPy5jbGFzc05hbWVcbiAgICAgICAgICAgIH0gc206bGVhZGluZy1ub25lIG1kOnRleHQtNnhsIGxnOnRleHQtN3hsXG4gICAgICAgICAgICAke2NvbG9yPy5jbGFzc05hbWV9XG4gICAgICAgICAgICBgfT5cbiAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICApfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSBhIHRpdGxlLi4uXCJcbiAgICAgICAgICBwcm9wTmFtZT1cInRpdGxlXCJcbiAgICAgICAgLz5cbiAgICAgICAgPFJpY2hUZXh0XG4gICAgICAgICAgcmVuZGVyQmxvY2s9eyhwcm9wcykgPT4gKFxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgbXgtYXV0byBtdC01ICR7cGFyYWdyYXBoQ29sb3I/LmNsYXNzTmFtZX0gXG4gICAgICAgICAgICB0ZXh0LSR7cGFyYWdyYXBoQWxpZ25tZW50fSBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbWQ6bXQtMTIgbWQ6bWF4LXctbGcgbGc6dGV4dC1sZ2B9PlxuICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgKX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgYSB0ZXh0Li4uXCJcbiAgICAgICAgICBwcm9wTmFtZT1cInRleHRcIlxuICAgICAgICAgIGFsbG93ZWRGZWF0dXJlcz17W1xuICAgICAgICAgICAgdHlwZXMuUmljaFRleHRGZWF0dXJlcy5Cb2xkLFxuICAgICAgICAgICAgdHlwZXMuUmljaFRleHRGZWF0dXJlcy5JdGFsaWMsXG4gICAgICAgICAgICB0eXBlcy5SaWNoVGV4dEZlYXR1cmVzLkhpZ2hsaWdodCxcbiAgICAgICAgICAgIHR5cGVzLlJpY2hUZXh0RmVhdHVyZXMuQ29kZSxcbiAgICAgICAgICAgIHR5cGVzLlJpY2hUZXh0RmVhdHVyZXMuTGluayxcbiAgICAgICAgICBdfVxuICAgICAgICAgIHJlbmRlckNvZGU9eyhwcm9wcykgPT4gKFxuICAgICAgICAgICAgPGNvZGUgY2xhc3NOYW1lPVwidGV4dC1zbSBweS0xIHB4LTIgYmctZ3JheS0yMDAgZGFyazpiZy1ncmF5LTcwMCByb3VuZGVkXCI+XG4gICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvY29kZT5cbiAgICAgICAgICApfVxuICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBtdC0xMiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlbGF0aXZlIGlubGluZS1mbGV4IHctZnVsbCBtZDp3LWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNfXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGhvdmVyOmJnLW9yYW5nZSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIHB4LTggcHktNCB0ZXh0LWJhc2UgZm9udC1ib2xkIGxlYWRpbmctNiB0ZXh0LWdyYXkgYmctb3JhbmdlIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZC1mdWxsIG1kOnctYXV0byBob3ZlcjpiZy1pbmRpZ28tNTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLWluZGlnby02MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIE1vcmUgSW5mb1xuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgXG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEJyaWNrIFNjaGVtYVxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuTWR3cEJnSGVyb1VuaXQuc2NoZW1hID0ge1xuICBuYW1lOiAnbWR3cC1oZXJvLXVuaXQnLFxuICBsYWJlbDonbWR3cCBIZXJvIFVuaXQnLFxuICBnZXREZWZhdWx0UHJvcHM6ICgpID0+ICh7XG4gICAgQ29sb3I6IHsgY29sb3I6ICcjMDAwMDAwJywgY2xhc3NOYW1lOiAndGV4dC1ibGFjaycgfSxcbiAgICBQYXJhZ3JhcGhDb2xvcjogeyBjb2xvcjogJyNmZmZmZmYnLCBjbGFzc05hbWU6ICd0ZXh0LXdoaXRlJyB9LFxuICAgIEJhY2tncm91bmQ6IHtjbGFzc05hbWU6ICdici1ncmF5J30sXG4gICAgQmdDb2xvcjogeyBjb2xvcjogJyNmZmZmZmYnLCBjbGFzc05hbWU6ICdiZy13aGl0ZScgfSxcbiAgICBIZWFkbGluZUFsaWdubWVudDogeyBjbGFzc05hbWU6ICd0ZXh0LWNlbnRlcicgfSxcbiAgICBQYXJhZ3JhcGhBbGlnbm1lbnQ6IHsgY2xhc3NOYW1lOiAndGV4dC1jZW50ZXInIH0sXG4gICAgZnVsbEhlaWdodDogZmFsc2UsXG4gICAgdGl0bGU6ICdUaGlzIGlzIGEgY3VzdG9tIEhlcm8gVW5pdCcsXG4gICAgdGV4dDogXCJXZSBhcmUgYSBoaS10ZWNoIHdlYiBkZXZlbG9wbWVudCBjb21wYW55IGNvbW1pdHRlZCB0byBkZWxpdmVyIGdyZWF0IHByb2R1Y3RzIG9uIHRpbWUuIFdlIGxvdmUgdG8gdW5kZXJzdGFuZCBvdXIgY3VzdG9tZXJzJyBuZWVkcyBhbmQgZXhjZWVkIGV4cGVjdGF0aW9ucy5cIixcbiAgfSksXG4gIHNpZGVFZGl0UHJvcHM6IFtcbiAgICB7XG4gICAgICBuYW1lOiAnYmFja2dyb3VuZCcsXG4gICAgICBsYWJlbDogJ0JhY2tncm91bmQgSW1hZ2UnLFxuICAgICAgdHlwZTogdHlwZXMuU2lkZUVkaXRQcm9wVHlwZS5JbWFnZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdjb2xvcicsXG4gICAgICBsYWJlbDogJ0hlYWRsaW5lIENvbG9yJyxcbiAgICAgIHR5cGU6IHR5cGVzLlNpZGVFZGl0UHJvcFR5cGUuU2VsZWN0LFxuICAgICAgc2VsZWN0T3B0aW9uczoge1xuICAgICAgICBkaXNwbGF5OiB0eXBlcy5PcHRpb25zRGlzcGxheS5Db2xvcixcbiAgICAgICAgb3B0aW9uczogQ29sb3JzXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2JnQ29sb3InLFxuICAgICAgbGFiZWw6ICdIZWFkbGluZSBCYWNrZ3JvdW5kIENvbG9yJyxcbiAgICAgIHR5cGU6IHR5cGVzLlNpZGVFZGl0UHJvcFR5cGUuU2VsZWN0LFxuICAgICAgc2VsZWN0T3B0aW9uczoge1xuICAgICAgICBkaXNwbGF5OiB0eXBlcy5PcHRpb25zRGlzcGxheS5Db2xvcixcbiAgICAgICAgb3B0aW9uczogQmdDb2xvcnNcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAncGFyYWdyYXBoQ29sb3InLFxuICAgICAgbGFiZWw6ICdQYXJhZ3JhcGggQ29sb3InLFxuICAgICAgdHlwZTogdHlwZXMuU2lkZUVkaXRQcm9wVHlwZS5TZWxlY3QsXG4gICAgICBzZWxlY3RPcHRpb25zOiB7XG4gICAgICAgIGRpc3BsYXk6IHR5cGVzLk9wdGlvbnNEaXNwbGF5LkNvbG9yLFxuICAgICAgICBvcHRpb25zOiBQYXJhZ3JhcGhDb2xvcnNcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnaGVhZGxpbmVBbGlnbm1lbnQnLFxuICAgICAgbGFiZWw6ICdIZWFkbGluZSBBbGlnbm1lbnQnLFxuICAgICAgdHlwZTogdHlwZXMuU2lkZUVkaXRQcm9wVHlwZS5TZWxlY3QsXG4gICAgICBzZWxlY3RPcHRpb25zOiB7XG4gICAgICAgIGRpc3BsYXk6IHR5cGVzLk9wdGlvbnNEaXNwbGF5LlNlbGVjdCxcbiAgICAgICAgb3B0aW9uczogSGVhZGxpbmVBbGlnbm1lbnRcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAncGFyYWdyYXBoQWxpZ25tZW50JyxcbiAgICAgIGxhYmVsOiAnUGFyYWdyYXBoIEFsaWdubWVudCcsXG4gICAgICB0eXBlOiB0eXBlcy5TaWRlRWRpdFByb3BUeXBlLlNlbGVjdCxcbiAgICAgIHNlbGVjdE9wdGlvbnM6IHtcbiAgICAgICAgZGlzcGxheTogdHlwZXMuT3B0aW9uc0Rpc3BsYXkuU2VsZWN0LFxuICAgICAgICBvcHRpb25zOiBQYXJhZ3JhcGhBbGlnbm1lbnRcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnZnVsbEhlaWdodCcsXG4gICAgICBsYWJlbDogJ0Z1bGwgSGVpZ2h0JyxcbiAgICAgIHR5cGU6IHR5cGVzLlNpZGVFZGl0UHJvcFR5cGUuQm9vbGVhbixcbiAgICB9LFxuICBdLFxufVxuXG5leHBvcnQgZGVmYXVsdCBNZHdwQmdIZXJvVW5pdFxuIiwgImV4cG9ydCBjb25zdCBIZWFkbGluZUFsaWdubWVudCA9IFtcbiAge1xuICAgIGxhYmVsOiAnTGVmdCcsXG4gICAgdmFsdWU6ICdsZWZ0J1xuICB9LFxuICB7XG4gICAgbGFiZWw6ICdDZW50ZXInLFxuICAgIHZhbHVlOiAnY2VudGVyJ1xuICB9LFxuICB7XG4gICAgbGFiZWw6ICdSaWdodCcsXG4gICAgdmFsdWU6ICdyaWdodCdcbiAgfVxuXVxuXG5leHBvcnQgY29uc3QgUGFyYWdyYXBoQWxpZ25tZW50ID0gW1xuICB7XG4gICAgbGFiZWw6ICdMZWZ0JyxcbiAgICB2YWx1ZTogJ2xlZnQnXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ0NlbnRlcicsXG4gICAgdmFsdWU6ICdjZW50ZXInXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ1JpZ2h0JyxcbiAgICB2YWx1ZTogJ3JpZ2h0J1xuICB9XG5dXG5cbmV4cG9ydCBjb25zdCBDb2xvcnMgPSBbXG4gIFxuICB7XG4gICAgbGFiZWw6ICdCcm93bicsXG4gICAgdmFsdWU6IHsgY29sb3I6ICcjNDYyYzM3JywgY2xhc3NOYW1lOiAndGV4dC1icm93bicgfSxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnTGlnaHQgYnJvd24nLFxuICAgIHZhbHVlOiB7IGNvbG9yOiAnI2E4OTM4YycsIGNsYXNzTmFtZTogJ3RleHQtbGlnaHQtYnJvd24nIH0sXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ1JlZCcsXG4gICAgdmFsdWU6IHsgY29sb3I6ICcjYWUxZTJjJywgY2xhc3NOYW1lOiAndGV4dC1yZWQnIH0sXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ09yYW5nZScsXG4gICAgdmFsdWU6IHsgY29sb3I6ICcjY2EzODNiJywgY2xhc3NOYW1lOiAndGV4dC1vcmFuZ2UnIH0sXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ0xpZ2h0IGdyYXknLFxuICAgIHZhbHVlOiB7IGNvbG9yOiAnI2U4ZTllMScsIGNsYXNzTmFtZTogJ3RleHQtZ3JheScgfSxcbiAgfSxcbl1cblxuZXhwb3J0IGNvbnN0IFBhcmFncmFwaENvbG9ycyA9IFtcbiAgXG4gIHtcbiAgICBsYWJlbDogJ0Jyb3duJyxcbiAgICB2YWx1ZTogeyBjb2xvcjogJyM0NjJjMzcnLCBjbGFzc05hbWU6ICd0ZXh0LWJyb3duJyB9LFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdMaWdodCBicm93bicsXG4gICAgdmFsdWU6IHsgY29sb3I6ICcjYTg5MzhjJywgY2xhc3NOYW1lOiAndGV4dC1saWdodC1icm93bicgfSxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnUmVkJyxcbiAgICB2YWx1ZTogeyBjb2xvcjogJyNhZTFlMmMnLCBjbGFzc05hbWU6ICd0ZXh0LXJlZCcgfSxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnT3JhbmdlJyxcbiAgICB2YWx1ZTogeyBjb2xvcjogJyNjYTM4M2InLCBjbGFzc05hbWU6ICd0ZXh0LW9yYW5nZScgfSxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnTGlnaHQgZ3JheScsXG4gICAgdmFsdWU6IHsgY29sb3I6ICcjZThlOWUxJywgY2xhc3NOYW1lOiAndGV4dC1ncmF5JyB9LFxuICB9LFxuXVxuXG5leHBvcnQgY29uc3QgQmdDb2xvcnMgPSBbXG4gIFxuICB7XG4gICAgbGFiZWw6ICdCcm93bicsXG4gICAgdmFsdWU6IHsgY29sb3I6ICcjNDYyYzM3JywgY2xhc3NOYW1lOiAnYmctYnJvd24nIH0sXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ0xpZ2h0IGJyb3duJyxcbiAgICB2YWx1ZTogeyBjb2xvcjogJyNhODkzOGMnLCBjbGFzc05hbWU6ICdiZy1saWdodC1icm93bicgfSxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnUmVkJyxcbiAgICB2YWx1ZTogeyBjb2xvcjogJyNhZTFlMmMnLCBjbGFzc05hbWU6ICdiZy1yZWQnIH0sXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ09yYW5nZScsXG4gICAgdmFsdWU6IHsgY29sb3I6ICcjY2EzODNiJywgY2xhc3NOYW1lOiAnYmctb3JhbmdlJyB9LFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdMaWdodCBncmF5JyxcbiAgICB2YWx1ZTogeyBjb2xvcjogJyNlOGU5ZTEnLCBjbGFzc05hbWU6ICdiZy1ncmF5JyB9LFxuICB9LFxuXSIsICJpbXBvcnQgeyB0eXBlcyB9IGZyb20gJ3JlYWN0LWJyaWNrcy9mcm9udGVuZCdcblxuY29uc3QgcGFnZVR5cGVzOiB0eXBlcy5JUGFnZVR5cGVbXSA9IFtcbiAge1xuICAgIG5hbWU6ICdwYWdlJyxcbiAgICBwbHVyYWxOYW1lOiAncGFnZXMnLFxuICAgIGRlZmF1bHRMb2NrZWQ6IGZhbHNlLFxuICAgIGRlZmF1bHRTdGF0dXM6IHR5cGVzLlBhZ2VTdGF0dXMuUHVibGlzaGVkLFxuICAgIGdldERlZmF1bHRDb250ZW50OiAoKSA9PiBbXSxcbiAgICBleGNsdWRlZEJsb2NrVHlwZXM6IFtcbiAgICAgICd0aXRsZScsXG4gICAgICAncGFyYWdyYXBoJyxcbiAgICAgICd2aWRlbycsXG4gICAgICAnaW1hZ2UnLFxuICAgICAgJ3F1b3RlJyxcbiAgICAgICdzb2NpYWwtZW1iZWQnLFxuICAgICAgJ2NvZGUtYmxvY2snLFxuICAgICAgJ3R3ZWV0LWxpZ2h0JyxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ2Jsb2cnLFxuICAgIHBsdXJhbE5hbWU6ICdCbG9nJyxcbiAgICBnZXREZWZhdWx0Q29udGVudDogKCkgPT4gW10sXG4gICAgYWxsb3dlZEJsb2NrVHlwZXM6IFtcbiAgICAgICd0aXRsZScsXG4gICAgICAncGFyYWdyYXBoJyxcbiAgICAgICd2aWRlbycsXG4gICAgICAnaW1hZ2UnLFxuICAgICAgJ3F1b3RlJyxcbiAgICAgICdzb2NpYWwtZW1iZWQnLFxuICAgICAgJ2NvZGUtYmxvY2snLFxuICAgICAgJ3R3ZWV0JyxcbiAgICAgICd0d2VldC1saWdodCcsXG4gICAgXSxcbiAgfSxcbl1cblxuZXhwb3J0IGRlZmF1bHQgcGFnZVR5cGVzXG4iLCAiaW1wb3J0IHsgTGluaywgdXNlTG9jYXRpb24gfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IHR5cGVzIH0gZnJvbSAncmVhY3QtYnJpY2tzL2Zyb250ZW5kJ1xuXG5jb25zdCBSZW1peExpbms6IHR5cGVzLlJlbmRlckxvY2FsTGluayA9ICh7XG4gIGhyZWYsXG4gIGNsYXNzTmFtZSxcbiAgYWN0aXZlQ2xhc3NOYW1lLFxuICBpc0FkbWluLFxuICBjaGlsZHJlbixcbn0pID0+IHtcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpXG5cbiAgbGV0IGFuY2hvckNsYXNzTmFtZSA9ICcnXG5cbiAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lID09PSBocmVmKSB7XG4gICAgYW5jaG9yQ2xhc3NOYW1lID0gYWN0aXZlQ2xhc3NOYW1lIHx8ICcnXG4gIH0gZWxzZSB7XG4gICAgYW5jaG9yQ2xhc3NOYW1lID0gY2xhc3NOYW1lIHx8ICcnXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMaW5rIHRvPXtocmVmfT5cbiAgICAgIDxhIGNsYXNzTmFtZT17YW5jaG9yQ2xhc3NOYW1lfT57Y2hpbGRyZW59PC9hPlxuICAgIDwvTGluaz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZW1peExpbmtcbiIsICJpbnRlcmZhY2UgRXJyb3JNZXNzYWdlUHJvcHMge1xuICBlcnJvcjogRXJyb3Jcbn1cblxuY29uc3QgRXJyb3JNZXNzYWdlOiBSZWFjdC5GQzxFcnJvck1lc3NhZ2VQcm9wcz4gPSAoeyBlcnJvciB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBtYXgtdy01eGwgcHgtNiBteS0xMlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1yZWQtNTAgcHktMyBweC02IGJvcmRlci0yIGJvcmRlci1yZWQtMjAwIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtZXh0cmFib2xkIG1iLTJcIj5Tb21ldGhpbmcgd2VudCB3cm9uZzwvaDI+XG4gICAgICAgIDxwPkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBFcnJvck1lc3NhZ2VcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgQWRtaW4sIEFwcFNldHRpbmdzIH0gZnJvbSAncmVhY3QtYnJpY2tzJ1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiAnUmVhY3QgQnJpY2tzIEFwcCBTZXR0aW5ncycsXG4gIH1cbn1cblxuY29uc3QgQWRtaW5BcHBTZXR0aW5nczogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEFkbWluPlxuICAgICAgPEFwcFNldHRpbmdzIC8+XG4gICAgPC9BZG1pbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBZG1pbkFwcFNldHRpbmdzXG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IEFkbWluLCBQbGF5Z3JvdW5kIH0gZnJvbSAncmVhY3QtYnJpY2tzJ1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiAnUmVhY3QgQnJpY2tzIFBsYXlncm91bmQnLFxuICB9XG59XG5cbmNvbnN0IEFkbWluUGxheWdyb3VuZDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEFkbWluPlxuICAgICAgPFBsYXlncm91bmQgLz5cbiAgICA8L0FkbWluPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkbWluUGxheWdyb3VuZFxuIiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBBZG1pbiwgRWRpdG9yIH0gZnJvbSAncmVhY3QtYnJpY2tzJ1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiAnUmVhY3QgQnJpY2tzIEVkaXRvcicsXG4gIH1cbn1cblxuY29uc3QgQWRtaW5FZGl0b3I6IFJlYWN0LkZDID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxBZG1pbj5cbiAgICAgIDxFZGl0b3IgLz5cbiAgICA8L0FkbWluPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkbWluRWRpdG9yXG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IEFkbWluLCBMb2dpbiB9IGZyb20gJ3JlYWN0LWJyaWNrcydcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogJ1JlYWN0IEJyaWNrcyBMb2dpbicsXG4gIH1cbn1cblxuY29uc3QgQWRtaW5Mb2dpbjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEFkbWluIGlzTG9naW4+XG4gICAgICA8TG9naW4gLz5cbiAgICA8L0FkbWluPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkbWluTG9naW5cbiIsICJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHtcbiAgUmVhY3RCcmlja3NDb250ZXh0LFxuICBQYWdlVmlld2VyLFxuICBmZXRjaFBhZ2UsXG4gIGNsZWFuUGFnZSxcbn0gZnJvbSAncmVhY3QtYnJpY2tzL2Zyb250ZW5kJ1xuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICd+L2NvbXBvbmVudHMvRXJyb3JNZXNzYWdlJ1xuaW1wb3J0IExheW91dCBmcm9tICd+L2NvbXBvbmVudHMvTGF5b3V0J1xuXG5leHBvcnQgY29uc3QgbG9hZGVyID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBIT01FX1BBR0UgPSAnaG9tZSdcbiAgdHJ5IHtcbiAgICBjb25zdCBwYWdlID0gYXdhaXQgZmV0Y2hQYWdlKEhPTUVfUEFHRSwgcHJvY2Vzcy5lbnYuQVBJX0tFWSBhcyBzdHJpbmcpXG4gICAgcmV0dXJuIHsgcGFnZSB9XG4gIH0gY2F0Y2gge1xuICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGZpbmQgdGhlIFwiJHtIT01FX1BBR0V9XCIgcGFnZS5gKVxuICB9XG59XG5cbmNvbnN0IFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHsgcGFnZSB9ID0gdXNlTG9hZGVyRGF0YSgpXG4gIC8vIENsZWFuIHRoZSByZWNlaXZlZCBjb250ZW50XG4gIC8vIFJlbW92ZXMgdW5rbm93biBvciBub3QgYWxsb3dlZCBicmlja3NcbiAgY29uc3QgeyBwYWdlVHlwZXMsIGJyaWNrcyB9ID0gdXNlQ29udGV4dChSZWFjdEJyaWNrc0NvbnRleHQpXG4gIGNvbnN0IHBhZ2VPayA9IHBhZ2UgPyBjbGVhblBhZ2UocGFnZSwgcGFnZVR5cGVzLCBicmlja3MpIDogbnVsbFxuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxQYWdlVmlld2VyIHBhZ2U9e3BhZ2VPa30gLz5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiAnUmVhY3QgQnJpY2tzIEJsb2cnLFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFcnJvckJvdW5kYXJ5KHsgZXJyb3IgfTogeyBlcnJvcjogRXJyb3IgfSkge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8RXJyb3JNZXNzYWdlIGVycm9yPXtlcnJvcn0gLz5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlXG4iLCAiaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcidcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInXG5cbmNvbnN0IExheW91dDogUmVhY3QuRkMgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1pbi1oLXNjcmVlbiBqdXN0aWZ5LWJldHdlZW4gZm9udC1jb250ZW50IGFudGlhbGlhc2VkXCI+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJpc29sYXRlIG1iLWF1dG9cIj57Y2hpbGRyZW59PC9tYWluPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCdcblxuY29uc3QgSGVhZGVyOiBSZWFjdC5GQyA9ICgpID0+IChcbiAgPGhlYWRlciBjbGFzc05hbWU9XCJiZy13aGl0ZSBzbTpoLTIwIHB5LTUgYm9yZGVyLWIgc206c3RpY2t5IHRvcC0wIHotMTBcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTV4bCBteC1hdXRvIHB4LTZcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggZmxleC1jb2wgc206ZmxleC1yb3cganVzdGlmeS1jZW50ZXIgc206anVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgaXRlbXMtY2VudGVyIG1iLTQgc206bWItMFwiPlxuICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz1cIi9yZWFjdC1icmlja3MtbG9nby5zdmdcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTQ4XCJcbiAgICAgICAgICAgICAgYWx0PVwiUmVhY3QgQnJpY2tzXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206bWwtOCBmbGV4IHNwYWNlLXgtNSB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPExpbmsgdG89XCIvYmxvZy9saXN0XCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LXBpbmstNzAwXCI+XG4gICAgICAgICAgICAgIFBvc3QgTGlzdFxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgdG89XCIvYmxvZy90aHVtYm5haWxzXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LXBpbmstNzAwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgUG9zdCBUaHVtYm5haWxzXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TGlua1xuICAgICAgICAgIHRvPVwiL2FkbWluXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJweS0yIHB4LTUgcm91bmRlZCB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIGJnLWN5YW4tNTAwIGhvdmVyOmJnLWN5YW4tNjAwIGhvdmVyOnNoYWRvdy1sZyB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMFwiXG4gICAgICAgID5cbiAgICAgICAgICBFZGl0IGNvbnRlbnRcbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvaGVhZGVyPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcbiIsICJjb25zdCBGb290ZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGZvb3RlciBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIGJvcmRlci10IHB5LTEyIGgtMzJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNXhsIG14LWF1dG8gZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTRcIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9XCIvcmVhY3QtYnJpY2tzLWljb24uc3ZnXCJcbiAgICAgICAgICAgIGFsdD1cIlJlYWN0IEJyaWNrc1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LThcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdGV4dC1zbSB0cmFja2luZy13aWRlclwiPlxuICAgICAgICAgICAgUmVtaXggYmxvZyBzdGFydGVyXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgdGV4dC1zbVwiPlxuICAgICAgICAgIFx1MDBBOSB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfXsnICd9XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vcmVhY3Ricmlja3MuY29tXCIgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1waW5rLTYwMFwiPlxuICAgICAgICAgICAgUmVhY3QgQnJpY2tzXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9vdGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlclxuIiwgImltcG9ydCB7IE91dGxldCB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tICdyZW1peCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnfi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSAnfi9jb21wb25lbnRzL0Vycm9yTWVzc2FnZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZygpIHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPE91dGxldCAvPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICdCbG9nJyxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gRXJyb3JCb3VuZGFyeSh7IGVycm9yIH06IHsgZXJyb3I6IEVycm9yIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPEVycm9yTWVzc2FnZSBlcnJvcj17ZXJyb3J9IC8+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbiIsICJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBSZWFjdEJyaWNrc0NvbnRleHQsXG4gIFBhZ2VWaWV3ZXIsXG4gIGZldGNoUGFnZSxcbiAgY2xlYW5QYWdlLFxufSBmcm9tICdyZWFjdC1icmlja3MvZnJvbnRlbmQnXG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gJ3JlbWl4J1xuXG5leHBvcnQgY29uc3QgbG9hZGVyID0gYXN5bmMgKHsgcGFyYW1zIH06IHsgcGFyYW1zOiB7IHNsdWc6IHN0cmluZyB9IH0pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBwYWdlID0gYXdhaXQgZmV0Y2hQYWdlKHBhcmFtcy5zbHVnLCBwcm9jZXNzLmVudi5BUElfS0VZIGFzIHN0cmluZylcbiAgICByZXR1cm4geyBwYWdlIH1cbiAgfSBjYXRjaCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgZmluZCB0aGUgXCIke3BhcmFtcy5zbHVnfVwiIHBvc3QuYClcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKHsgZGF0YSB9KSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6IGRhdGE/LnBhZ2U/Lm1ldGE/LnRpdGxlIHx8ICdCbG9nIHBvc3QnLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XG4gIGNvbnN0IHsgcGFnZSB9ID0gdXNlTG9hZGVyRGF0YSgpXG4gIC8vIENsZWFuIHRoZSByZWNlaXZlZCBjb250ZW50XG4gIC8vIFJlbW92ZXMgdW5rbm93biBvciBub3QgYWxsb3dlZCBicmlja3NcbiAgY29uc3QgeyBwYWdlVHlwZXMsIGJyaWNrcyB9ID0gdXNlQ29udGV4dChSZWFjdEJyaWNrc0NvbnRleHQpXG4gIGNvbnN0IHBhZ2VPayA9IHBhZ2UgPyBjbGVhblBhZ2UocGFnZSwgcGFnZVR5cGVzLCBicmlja3MpIDogbnVsbFxuXG4gIHJldHVybiA8UGFnZVZpZXdlciBwYWdlPXtwYWdlT2t9IC8+XG59XG4iLCAiaW1wb3J0IHsgZmV0Y2hQYWdlcywgdHlwZXMgfSBmcm9tICdyZWFjdC1icmlja3MvZnJvbnRlbmQnXG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnXG5cbmltcG9ydCBQb3N0VGh1bWJuYWlsIGZyb20gJ34vY29tcG9uZW50cy9Qb3N0VGh1bWJuYWlsJ1xuXG5leHBvcnQgY29uc3QgbG9hZGVyID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBwb3N0cyA9IGF3YWl0IGZldGNoUGFnZXMocHJvY2Vzcy5lbnYuQVBJX0tFWSBhcyBzdHJpbmcsIHtcbiAgICB0eXBlOiAnYmxvZycsXG4gICAgcGFnZVNpemU6IDEwMDAsXG4gICAgc29ydDogJy1wdWJsaXNoZWRBdCcsXG4gIH0pXG4gIHJldHVybiB7IHBvc3RzIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGh1bWJuYWlscygpIHtcbiAgY29uc3QgeyBwb3N0cyB9ID0gdXNlTG9hZGVyRGF0YTx7IHBvc3RzOiB0eXBlcy5QYWdlRnJvbUxpc3RbXSB9PigpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtYXgtdy01eGwgbXgtYXV0byBweS0xNiBweC02XCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC00eGwgc206dGV4dC02eGwgbGc6dGV4dC03eGwgbGVhZGluZy1ub25lIGZvbnQtYmxhY2sgdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTkwMCBwYi00IG10LTEwIHNtOm10LTEyIG1iLTRcIj5cbiAgICAgICAgQmxvZ1xuICAgICAgPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMTAgZmxleCBmbGV4LXdyYXBcIj5cbiAgICAgICAge3Bvc3RzPy5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgICA8UG9zdFRodW1ibmFpbFxuICAgICAgICAgICAga2V5PXtwb3N0LmlkfVxuICAgICAgICAgICAgaHJlZj17YC9ibG9nL3Bvc3RzLyR7cG9zdC5zbHVnfWB9XG4gICAgICAgICAgICB0aXRsZT17cG9zdC5uYW1lfVxuICAgICAgICAgICAgZGVzY3JpcHRpb249e3Bvc3QubWV0YS5kZXNjcmlwdGlvbiF9XG4gICAgICAgICAgICBkYXRlPXtkYXlqcyhwb3N0LnB1Ymxpc2hlZEF0KS5mb3JtYXQoJ0REL01NL1lZWVknKX1cbiAgICAgICAgICAgIGltYWdlPXtcbiAgICAgICAgICAgICAgcG9zdC5tZXRhLmZlYXR1cmVkSW1hZ2UgfHxcbiAgICAgICAgICAgICAgJ2h0dHBzOi8vaW1hZ2VzLnJlYWN0YnJpY2tzLmNvbS9vcmlnaW5hbC84YjE5NzRhMC05MWE4LTRhYjQtYjAxNC04M2Y2MDE5MmY5YjUuc3ZnJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnXG5cbmludGVyZmFjZSBQb3N0VGh1bWJuYWlsUHJvcHMge1xuICBocmVmOiBzdHJpbmdcbiAgdGl0bGU6IHN0cmluZ1xuICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gIGRhdGU6IHN0cmluZ1xuICBpbWFnZTogYW55XG59XG5cbmNvbnN0IFBvc3RUaHVtYm5haWw6IFJlYWN0LkZDPFBvc3RUaHVtYm5haWxQcm9wcz4gPSAoe1xuICBocmVmLFxuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIGRhdGUsXG4gIGltYWdlLFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMaW5rIGNsYXNzTmFtZT1cInctMS8yIG1iLTggcC04IGdyb3VwXCIgdG89e2hyZWZ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPXtpbWFnZX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgaC02MCBvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlciB0cmFuc2l0aW9uLXRyYW5zZm9ybSByb3VuZGVkXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBib3R0b20tMCBsZWZ0LTAgcmlnaHQtMCBiZy1jeWFuLTUwMCBvcGFjaXR5LTAgZ3JvdXAtaG92ZXI6b3BhY2l0eS00MCB0cmFuc2l0aW9uLW9wYWNpdHkgcm91bmRlZFwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNCB0ZXh0LXhzIHVwcGVyY2FzZSB0ZXh0LWdyYXktNTAwXCI+e2RhdGV9PC9kaXY+XG5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi0zIHRleHQtMnhsIGZvbnQtZXh0cmFib2xkIHRleHQtZ3JheS05MDAgZ3JvdXAtaG92ZXI6dGV4dC1jeWFuLTUwMCB0cmFuc2l0aW9uLWNvbG9yc1wiPlxuICAgICAgICB7dGl0bGV9XG4gICAgICA8L2gzPlxuXG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwIG1iLTRcIj57ZGVzY3JpcHRpb259PC9wPlxuICAgIDwvTGluaz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0VGh1bWJuYWlsXG4iLCAiaW1wb3J0IHsgZmV0Y2hQYWdlcywgZmV0Y2hUYWdzLCB0eXBlcyB9IGZyb20gJ3JlYWN0LWJyaWNrcy9mcm9udGVuZCdcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEsIExpbmsgfSBmcm9tICdyZW1peCdcblxuaW1wb3J0IEJsb2dMaXN0SXRlbSBmcm9tICd+L2NvbXBvbmVudHMvUG9zdExpc3RJdGVtJ1xuXG5leHBvcnQgY29uc3QgbG9hZGVyID0gYXN5bmMgKCkgPT4ge1xuICBcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBmZXRjaFBhZ2VzKHByb2Nlc3MuZW52LkFQSV9LRVkgYXMgc3RyaW5nLCB7XG4gICAgdHlwZTogJ2Jsb2cnLFxuICAgIHBhZ2VTaXplOiAxMDAwLFxuICAgIHNvcnQ6ICctcHVibGlzaGVkQXQnLFxuICB9KVxuXG4gIGNvbnN0IHsgaXRlbXM6IHRhZ3MgfSA9IGF3YWl0IGZldGNoVGFncyhwcm9jZXNzLmVudi5BUElfS0VZIGFzIHN0cmluZylcbiAgdGFncy5zb3J0KClcblxuICByZXR1cm4geyBwb3N0cywgdGFncyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3QoKSB7XG4gIGNvbnN0IHsgcG9zdHMsIHRhZ3MgfSA9XG4gICAgdXNlTG9hZGVyRGF0YTx7IHBvc3RzOiB0eXBlcy5QYWdlRnJvbUxpc3RbXTsgdGFnczogc3RyaW5nW10gfT4oKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0b1wiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtNHhsIHNtOnRleHQtNnhsIGxnOnRleHQtN3hsIGxlYWRpbmctbm9uZSBmb250LWJsYWNrIHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS05MDAgcGItNCBtdC0xMCBzbTptdC0xMiBtYi00XCI+XG4gICAgICAgIEJsb2dcbiAgICAgIDwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTZ4bCBteC1hdXRvIHB4LTggcHktMTYgZmxleCBzcGFjZS14LTI0XCI+XG4gICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7IGZsZXg6ICcyIDIgMCcgfX0gY2xhc3NOYW1lPVwiZmxleC0yIHNwYWNlLXktOFwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXBpbmstNTAwIHVwcGVyY2FzZSBtYi04IHRyYWNraW5nLXdpZGVzdCBmb250LWJvbGRcIj5cbiAgICAgICAgICAgIFJlY2VudGx5IHB1Ymxpc2hlZFxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAge3Bvc3RzPy5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgICAgIDxCbG9nTGlzdEl0ZW1cbiAgICAgICAgICAgICAga2V5PXtwb3N0LmlkfVxuICAgICAgICAgICAgICB0aXRsZT17cG9zdC5uYW1lfVxuICAgICAgICAgICAgICBocmVmPXtgL2Jsb2cvcG9zdHMvJHtwb3N0LnNsdWd9YH1cbiAgICAgICAgICAgICAgY29udGVudD17cG9zdC5tZXRhLmRlc2NyaXB0aW9uIHx8ICcnfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4LTEgc3BhY2UteS0xNlwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1waW5rLTUwMCB1cHBlcmNhc2UgbWItOCB0cmFja2luZy13aWRlc3QgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgIFRhZ3NcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICB7dGFnc1xuICAgICAgICAgICAgICAgID8uZmlsdGVyKCh0YWcpID0+IHRhZyAhPT0gJ3BvcHVsYXInKVxuICAgICAgICAgICAgICAgIC5tYXAoKHRhZykgPT4gKFxuICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgdG89e2AvdGFnLyR7dGFnfWB9XG4gICAgICAgICAgICAgICAgICAgIGtleT17dGFnfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdGV4dC1zbSBmb250LWJvbGQgbXItMiBtYi0yIHRyYW5zZm9ybSBkdXJhdGlvbi0yMDAgdGV4dC1jeWFuLTgwMCBiZy1jeWFuLTEwMCBob3ZlcjpiZy1jeWFuLTIwMCBob3Zlcjp0ZXh0LWN5YW4tOTAwIHJvdW5kZWQtbWQgcHgtMiBweS0xXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIiBzdHlsZT17eyB6SW5kZXg6IC0xIH19IC8+XG4gICAgICAgICAgICAgICAgICAgIHt0YWd9XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtcGluay01MDAgdXBwZXJjYXNlIG1iLTggdHJhY2tpbmctd2lkZXN0IGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICBNb3N0IFBvcHVsYXJcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIHtwb3N0c1xuICAgICAgICAgICAgICAgID8uZmlsdGVyKChwb3N0KSA9PiBwb3N0LnRhZ3MuZmluZCgodGFnKSA9PiB0YWcgPT09ICdwb3B1bGFyJykpXG4gICAgICAgICAgICAgICAgLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17cG9zdC5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17cG9zdC5zbHVnfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS05MDAgaG92ZXI6dGV4dC1jeWFuLTYwMCBmb250LWJvbGQgdGV4dC1sZyBsZWFkaW5nLTEwIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtwb3N0Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCdcblxuaW50ZXJmYWNlIFBvc3RMaXN0SXRlbVByb3BzIHtcbiAgdGl0bGU6IHN0cmluZ1xuICBocmVmOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG59XG5cbmNvbnN0IFBvc3RMaXN0SXRlbTogUmVhY3QuRkM8UG9zdExpc3RJdGVtUHJvcHM+ID0gKHtcbiAgdGl0bGUsXG4gIGhyZWYsXG4gIGNvbnRlbnQsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExpbmtcbiAgICAgIHRvPXtocmVmfVxuICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIGJsb2NrIGdyb3VwIHB5LTQgdGV4dC1ncmF5LTkwMCBob3ZlcjpiZy1ncmF5LTUwIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTMwMCBwLTYgLW0tNiByb3VuZGVkXCJcbiAgICA+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtMnhsXCI+e3RpdGxlfTwvaDM+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtdC00IGxlYWRpbmctNiB0ZXh0LWxnXCI+e2NvbnRlbnR9PC9wPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBtdC00IHRleHQtY3lhbi01MDAgZ3JvdXAtaG92ZXI6dGV4dC1jeWFuLTYwMCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItMiBncm91cC1ob3Zlcjptci00IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiPlxuICAgICAgICAgIFJlYWQgTW9yZVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgJnJhcXVvO1xuICAgICAgPC9kaXY+XG4gICAgPC9MaW5rPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RMaXN0SXRlbVxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6J2I5Mjg4ZmIxJywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1BVDRRSkZMQS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstV1dPT0hJRlIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1QTkpNUEdFWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVkyUFdMN0pSLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC1WNVdRUFpGSC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstWEtNVENSRlUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1LREhNRDNWRS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUdCWUpET1VRLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstU0VPMkg0TVQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1VVVREVk02Vi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5Jzp0cnVlfSwncm91dGVzL2FkbWluL2FwcC1zZXR0aW5ncyc6eydpZCc6J3JvdXRlcy9hZG1pbi9hcHAtc2V0dGluZ3MnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYWRtaW4vYXBwLXNldHRpbmdzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2FkbWluL2FwcC1zZXR0aW5ncy1XT0s0RTc0NS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstVFVTWTUyREYuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2FkbWluL2VkaXRvcic6eydpZCc6J3JvdXRlcy9hZG1pbi9lZGl0b3InLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYWRtaW4vZWRpdG9yJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2FkbWluL2VkaXRvci02UU1MNlQ0My5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstVFVTWTUyREYuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2FkbWluL2luZGV4Jzp7J2lkJzoncm91dGVzL2FkbWluL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2FkbWluJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hZG1pbi9pbmRleC1OSERISFdCUy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstVFVTWTUyREYuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2FkbWluL3BsYXlncm91bmQnOnsnaWQnOidyb3V0ZXMvYWRtaW4vcGxheWdyb3VuZCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhZG1pbi9wbGF5Z3JvdW5kJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2FkbWluL3BsYXlncm91bmQtNkhUNzREMlouanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVRVU1k1MkRGLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9ibG9nJzp7J2lkJzoncm91dGVzL2Jsb2cnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYmxvZycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ibG9nLVdHQVlURUdVLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1ZRkpQQjJaTC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6dHJ1ZX0sJ3JvdXRlcy9ibG9nL2xpc3QnOnsnaWQnOidyb3V0ZXMvYmxvZy9saXN0JywncGFyZW50SWQnOidyb3V0ZXMvYmxvZycsJ3BhdGgnOidsaXN0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Jsb2cvbGlzdC00M0JISlFJVy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstR0JZSkRPVVEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1TRU8ySDRNVC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9ibG9nL3Bvc3RzLyRzbHVnJzp7J2lkJzoncm91dGVzL2Jsb2cvcG9zdHMvJHNsdWcnLCdwYXJlbnRJZCc6J3JvdXRlcy9ibG9nJywncGF0aCc6J3Bvc3RzLzpzbHVnJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Jsb2cvcG9zdHMvJHNsdWctUDVMVjJDTjYuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUdCWUpET1VRLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstU0VPMkg0TVQuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYmxvZy90aHVtYm5haWxzJzp7J2lkJzoncm91dGVzL2Jsb2cvdGh1bWJuYWlscycsJ3BhcmVudElkJzoncm91dGVzL2Jsb2cnLCdwYXRoJzondGh1bWJuYWlscycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ibG9nL3RodW1ibmFpbHMtRVBJRlU1VTQuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVhLTVRDUkZVLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstR0JZSkRPVVEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1TRU8ySDRNVC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1FUUs3R0VWVS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstWUZKUEIyWkwuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6dHJ1ZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtQjkyODhGQjEuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7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
