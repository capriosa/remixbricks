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
      className: `text-5xl font-extrabold leading-10 tracking-tight text-${headlineAlignment} 
            ${bgColor.className} sm:leading-none md:text-6xl lg:text-7xl
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
    className: "inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-gray bg-orange border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
  }, "Purchase Now"), /* @__PURE__ */ import_react2.default.createElement("span", {
    className: "absolute top-0 right-0 px-2 py-1 -mt-12 -mr-6 text-xs font-medium leading-tight text-white bg-light-brown rounded-full"
  }, "only $15/mo")), /* @__PURE__ */ import_react2.default.createElement("a", {
    href: "#",
    className: "mt-12 text-sm text-orange"
  }, "Learn More"))));
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
var assets_manifest_default = { "version": "34dd67a0", "entry": { "module": "/build/entry.client-AT4QJFLA.js", "imports": ["/build/_shared/chunk-WWOOHIFR.js", "/build/_shared/chunk-PNJMPGEZ.js", "/build/_shared/chunk-Y2PWL7JR.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-53Y2RUN2.js", "imports": ["/build/_shared/chunk-XKMTCRFU.js", "/build/_shared/chunk-KDHMD3VE.js", "/build/_shared/chunk-GBYJDOUQ.js", "/build/_shared/chunk-SEO2H4MT.js", "/build/_shared/chunk-UUTDVM6V.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/admin/app-settings": { "id": "routes/admin/app-settings", "parentId": "root", "path": "admin/app-settings", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/admin/app-settings-WOK4E745.js", "imports": ["/build/_shared/chunk-TUSY52DF.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/admin/editor": { "id": "routes/admin/editor", "parentId": "root", "path": "admin/editor", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/admin/editor-6QML6T43.js", "imports": ["/build/_shared/chunk-TUSY52DF.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/admin/index": { "id": "routes/admin/index", "parentId": "root", "path": "admin", "index": true, "caseSensitive": void 0, "module": "/build/routes/admin/index-NHDHHWBS.js", "imports": ["/build/_shared/chunk-TUSY52DF.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/admin/playground": { "id": "routes/admin/playground", "parentId": "root", "path": "admin/playground", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/admin/playground-6HT74D2Z.js", "imports": ["/build/_shared/chunk-TUSY52DF.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog": { "id": "routes/blog", "parentId": "root", "path": "blog", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog-WGAYTEGU.js", "imports": ["/build/_shared/chunk-YFJPB2ZL.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/blog/list": { "id": "routes/blog/list", "parentId": "routes/blog", "path": "list", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/list-43BHJQIW.js", "imports": ["/build/_shared/chunk-GBYJDOUQ.js", "/build/_shared/chunk-SEO2H4MT.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/posts/$slug": { "id": "routes/blog/posts/$slug", "parentId": "routes/blog", "path": "posts/:slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/posts/$slug-P5LV2CN6.js", "imports": ["/build/_shared/chunk-GBYJDOUQ.js", "/build/_shared/chunk-SEO2H4MT.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/thumbnails": { "id": "routes/blog/thumbnails", "parentId": "routes/blog", "path": "thumbnails", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/thumbnails-EPIFU5U4.js", "imports": ["/build/_shared/chunk-XKMTCRFU.js", "/build/_shared/chunk-GBYJDOUQ.js", "/build/_shared/chunk-SEO2H4MT.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-EQK7GEVU.js", "imports": ["/build/_shared/chunk-YFJPB2ZL.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true } }, "url": "/build/manifest-34DD67A0.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi8uLi8uLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L1VzZXJzL21kL2dpdGh1Yi1yZXBvcy9yZW1peGJyaWNrcy9hcHAvcm9vdC50c3giLCAiLi4vLi4vLi4vYXBwL3JlYWN0LWJyaWNrcy9jb25maWcudHMiLCAiLi4vLi4vLi4vYXBwL3JlYWN0LWJyaWNrcy9icmlja3MvaW5kZXgudHMiLCAiLi4vLi4vLi4vYXBwL3JlYWN0LWJyaWNrcy9icmlja3MvTXlIZXJvVW5pdC50c3giLCAiLi4vLi4vLi4vYXBwL3JlYWN0LWJyaWNrcy9icmlja3MvTWR3cEhlcm9Vbml0LnRzeCIsICIuLi8uLi8uLi9hcHAvcmVhY3QtYnJpY2tzL3V0aWxzL2NvbG9ycy50cyIsICIuLi8uLi8uLi9hcHAvcmVhY3QtYnJpY2tzL3BhZ2VUeXBlcy50cyIsICIuLi8uLi8uLi9hcHAvcmVhY3QtYnJpY2tzL1JlbWl4TGluay50c3giLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvRXJyb3JNZXNzYWdlLnRzeCIsICJyb3V0ZTovVXNlcnMvbWQvZ2l0aHViLXJlcG9zL3JlbWl4YnJpY2tzL2FwcC9yb3V0ZXMvYWRtaW4vYXBwLXNldHRpbmdzLnRzeCIsICJyb3V0ZTovVXNlcnMvbWQvZ2l0aHViLXJlcG9zL3JlbWl4YnJpY2tzL2FwcC9yb3V0ZXMvYWRtaW4vcGxheWdyb3VuZC50c3giLCAicm91dGU6L1VzZXJzL21kL2dpdGh1Yi1yZXBvcy9yZW1peGJyaWNrcy9hcHAvcm91dGVzL2FkbWluL2VkaXRvci50c3giLCAicm91dGU6L1VzZXJzL21kL2dpdGh1Yi1yZXBvcy9yZW1peGJyaWNrcy9hcHAvcm91dGVzL2FkbWluL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvbWQvZ2l0aHViLXJlcG9zL3JlbWl4YnJpY2tzL2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0xheW91dC50c3giLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvSGVhZGVyLnRzeCIsICIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9Gb290ZXIudHN4IiwgInJvdXRlOi9Vc2Vycy9tZC9naXRodWItcmVwb3MvcmVtaXhicmlja3MvYXBwL3JvdXRlcy9ibG9nLnRzeCIsICJyb3V0ZTovVXNlcnMvbWQvZ2l0aHViLXJlcG9zL3JlbWl4YnJpY2tzL2FwcC9yb3V0ZXMvYmxvZy9wb3N0cy8kc2x1Zy50c3giLCAicm91dGU6L1VzZXJzL21kL2dpdGh1Yi1yZXBvcy9yZW1peGJyaWNrcy9hcHAvcm91dGVzL2Jsb2cvdGh1bWJuYWlscy50c3giLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvUG9zdFRodW1ibmFpbC50c3giLCAicm91dGU6L1VzZXJzL21kL2dpdGh1Yi1yZXBvcy9yZW1peGJyaWNrcy9hcHAvcm91dGVzL2Jsb2cvbGlzdC50c3giLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvUG9zdExpc3RJdGVtLnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJpbXBvcnQgeyBjcmVhdGVSZXF1ZXN0SGFuZGxlciB9IGZyb20gXCJAcmVtaXgtcnVuL25ldGxpZnlcIjtcbmltcG9ydCAqIGFzIGJ1aWxkIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjtcblxuLypcbiAqIFJldHVybnMgYSBjb250ZXh0IG9iamVjdCB3aXRoIGF0IG1vc3QgMyBrZXlzOlxuICogIC0gYG5ldGxpZnlHcmFwaFRva2VuYDogcmF3IGF1dGhlbnRpY2F0aW9uIHRva2VuIHRvIHVzZSB3aXRoIE5ldGxpZnkgR3JhcGhcbiAqICAtIGBjbGllbnROZXRsaWZ5R3JhcGhBY2Nlc3NUb2tlbmA6IEZvciB1c2Ugd2l0aCBKV1RzIGdlbmVyYXRlZCBieVxuICogICAgYG5ldGxpZnktZ3JhcGgtYXV0aGAuXG4gKiAgLSBgbmV0bGlmeUdyYXBoU2lnbmF0dXJlYDogYSBzaWduYXR1cmUgZm9yIHN1YnNjcmlwdGlvbiBldmVudHMuIFdpbGwgYmVcbiAqICAgIHByZXNlbnQgaWYgYSBzZWNyZXQgaXMgc2V0LlxuICovXG5mdW5jdGlvbiBnZXRMb2FkQ29udGV4dChldmVudCwgY29udGV4dCkge1xuICBsZXQgcmF3QXV0aG9yaXphdGlvblN0cmluZztcbiAgbGV0IG5ldGxpZnlHcmFwaFRva2VuO1xuXG4gIGlmIChldmVudC5hdXRobGlmeVRva2VuICE9IG51bGwpIHtcbiAgICBuZXRsaWZ5R3JhcGhUb2tlbiA9IGV2ZW50LmF1dGhsaWZ5VG9rZW47XG4gIH1cblxuICBjb25zdCBhdXRoSGVhZGVyID0gZXZlbnQuaGVhZGVyc1tcImF1dGhvcml6YXRpb25cIl07XG4gIGNvbnN0IGdyYXBoU2lnbmF0dXJlSGVhZGVyID0gZXZlbnQuaGVhZGVyc1tcIngtbmV0bGlmeS1ncmFwaC1zaWduYXR1cmVcIl07XG5cbiAgaWYgKGF1dGhIZWFkZXIgIT0gbnVsbCAmJiAvQmVhcmVyIC9naS50ZXN0KGF1dGhIZWFkZXIpKSB7XG4gICAgcmF3QXV0aG9yaXphdGlvblN0cmluZyA9IGF1dGhIZWFkZXIuc3BsaXQoXCIgXCIpWzFdO1xuICB9XG5cbiAgY29uc3QgbG9hZENvbnRleHQgPSB7XG4gICAgY2xpZW50TmV0bGlmeUdyYXBoQWNjZXNzVG9rZW46IHJhd0F1dGhvcml6YXRpb25TdHJpbmcsXG4gICAgbmV0bGlmeUdyYXBoVG9rZW46IG5ldGxpZnlHcmFwaFRva2VuLFxuICAgIG5ldGxpZnlHcmFwaFNpZ25hdHVyZTogZ3JhcGhTaWduYXR1cmVIZWFkZXIsXG4gIH07XG5cbiAgLy8gUmVtb3ZlIGtleXMgd2l0aCB1bmRlZmluZWQgdmFsdWVzXG4gIE9iamVjdC5rZXlzKGxvYWRDb250ZXh0KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAobG9hZENvbnRleHRba2V5XSA9PSBudWxsKSB7XG4gICAgICBkZWxldGUgbG9hZENvbnRleHRba2V5XTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBsb2FkQ29udGV4dDtcbn1cblxuZXhwb3J0IGNvbnN0IGhhbmRsZXIgPSBjcmVhdGVSZXF1ZXN0SGFuZGxlcih7XG4gIGJ1aWxkLFxuICBnZXRMb2FkQ29udGV4dCxcbiAgbW9kZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYsXG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvbWQvZ2l0aHViLXJlcG9zL3JlbWl4YnJpY2tzL2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9tZC9naXRodWItcmVwb3MvcmVtaXhicmlja3MvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9tZC9naXRodWItcmVwb3MvcmVtaXhicmlja3MvYXBwL3JvdXRlcy9hZG1pbi9hcHAtc2V0dGluZ3MudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9tZC9naXRodWItcmVwb3MvcmVtaXhicmlja3MvYXBwL3JvdXRlcy9hZG1pbi9wbGF5Z3JvdW5kLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvbWQvZ2l0aHViLXJlcG9zL3JlbWl4YnJpY2tzL2FwcC9yb3V0ZXMvYWRtaW4vZWRpdG9yLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvVXNlcnMvbWQvZ2l0aHViLXJlcG9zL3JlbWl4YnJpY2tzL2FwcC9yb3V0ZXMvYWRtaW4vaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9Vc2Vycy9tZC9naXRodWItcmVwb3MvcmVtaXhicmlja3MvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiL1VzZXJzL21kL2dpdGh1Yi1yZXBvcy9yZW1peGJyaWNrcy9hcHAvcm91dGVzL2Jsb2cudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTcgZnJvbSBcIi9Vc2Vycy9tZC9naXRodWItcmVwb3MvcmVtaXhicmlja3MvYXBwL3JvdXRlcy9ibG9nL3Bvc3RzLyRzbHVnLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCIvVXNlcnMvbWQvZ2l0aHViLXJlcG9zL3JlbWl4YnJpY2tzL2FwcC9yb3V0ZXMvYmxvZy90aHVtYm5haWxzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU5IGZyb20gXCIvVXNlcnMvbWQvZ2l0aHViLXJlcG9zL3JlbWl4YnJpY2tzL2FwcC9yb3V0ZXMvYmxvZy9saXN0LnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRtaW4vYXBwLXNldHRpbmdzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hZG1pbi9hcHAtc2V0dGluZ3NcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYWRtaW4vYXBwLXNldHRpbmdzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9hZG1pbi9wbGF5Z3JvdW5kXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hZG1pbi9wbGF5Z3JvdW5kXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFkbWluL3BsYXlncm91bmRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL2FkbWluL2VkaXRvclwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYWRtaW4vZWRpdG9yXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFkbWluL2VkaXRvclwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRtaW4vaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2FkbWluL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFkbWluXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU0XG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU1XG4gICAgfSxcbiAgXCJyb3V0ZXMvYmxvZ1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYmxvZ1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJibG9nXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTZcbiAgICB9LFxuICBcInJvdXRlcy9ibG9nL3Bvc3RzLyRzbHVnXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ibG9nL3Bvc3RzLyRzbHVnXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvYmxvZ1wiLFxuICAgICAgcGF0aDogXCJwb3N0cy86c2x1Z1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU3XG4gICAgfSxcbiAgXCJyb3V0ZXMvYmxvZy90aHVtYm5haWxzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ibG9nL3RodW1ibmFpbHNcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9ibG9nXCIsXG4gICAgICBwYXRoOiBcInRodW1ibmFpbHNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOFxuICAgIH0sXG4gIFwicm91dGVzL2Jsb2cvbGlzdFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYmxvZy9saXN0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvYmxvZ1wiLFxuICAgICAgcGF0aDogXCJsaXN0XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTlcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG4gIHVzZU5hdmlnYXRlLFxuICB1c2VMb2FkZXJEYXRhLFxufSBmcm9tICdyZW1peCdcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBSZWFjdEJyaWNrcyB9IGZyb20gJ3JlYWN0LWJyaWNrcy9mcm9udGVuZCdcbmltcG9ydCBjb25maWcgZnJvbSAnLi9yZWFjdC1icmlja3MvY29uZmlnJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vdGFpbHdpbmQuY3NzJ1xuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICcuL2NvbXBvbmVudHMvRXJyb3JNZXNzYWdlJ1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH1dXG59XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7IHRpdGxlOiAnUmVtaXggQmxvZyBTdGFydGVyIHdpdGggUmVhY3QgQnJpY2tzJyB9XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGFwaUtleSA9IHByb2Nlc3MuZW52LkFQSV9LRVkgfHwgXCJjNTcxMjA3NC0yYjYyLTRmYTItOGJkNy1lN2Y5OGQ4NzAyYmZcIlxuICBjb25zdCBhcHBJZCA9IHByb2Nlc3MuZW52LkFQUF9JRCB8fCBcImI4NjNjNzk3LTkxZGQtNGUxOS05MzliLTNmYTJjY2YyOGJmNlwiXG5cbiAgaWYgKCFhcGlLZXkgfHwgIWFwcElkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIFJlYWN0IEJyaWNrcyBjcmVkZW50aWFscyBpbiAuZW52IGZpbGUnKVxuICB9XG5cbiAgcmV0dXJuIHsgYXBwSWQsIGFwaUtleSB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpXG4gIGNvbnN0IHsgYXBwSWQsIGFwaUtleSB9ID0gdXNlTG9hZGVyRGF0YSgpXG5cbiAgY29uc3QgcmVhY3RCcmlja3NDb25maWcgPSB7XG4gICAgLi4uY29uZmlnLFxuICAgIGFwcElkLFxuICAgIGFwaUtleSxcbiAgICBuYXZpZ2F0ZTogKHBhdGg6IHN0cmluZykgPT4gbmF2aWdhdGUocGF0aCksXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keSBpZD1cInJvb3RcIj5cbiAgICAgICAgPFJlYWN0QnJpY2tzIHsuLi5yZWFjdEJyaWNrc0NvbmZpZ30+XG4gICAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8L1JlYWN0QnJpY2tzPlxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnICYmIDxMaXZlUmVsb2FkIC8+fVxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKVxufVxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQm91bmRhcnkoeyBlcnJvciB9OiB7IGVycm9yOiBFcnJvciB9KSB7XG4gIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gIHJldHVybiAoXG4gICAgPGh0bWw+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPHRpdGxlPk9oIG5vITwvdGl0bGU+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxFcnJvck1lc3NhZ2UgZXJyb3I9e2Vycm9yfSAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKVxufVxuIiwgImltcG9ydCB7IHR5cGVzIH0gZnJvbSAncmVhY3QtYnJpY2tzL2Zyb250ZW5kJ1xuXG5pbXBvcnQgYnJpY2tzIGZyb20gJy4vYnJpY2tzJ1xuaW1wb3J0IHBhZ2VUeXBlcyBmcm9tICcuL3BhZ2VUeXBlcydcbmltcG9ydCBSZW1peExpbmsgZnJvbSAnLi9SZW1peExpbmsnXG5cbmNvbnN0IGNvbmZpZzogdHlwZXMuUmVhY3RCcmlja3NDb25maWcgPSB7XG4gIGFwcElkOiAnJywgLy9wcm9jZXNzLmVudi5BUFBfSUQgYXMgc3RyaW5nIHx8ICcnLFxuICBhcGlLZXk6ICcnLCAvL3Byb2Nlc3MuZW52LkFQSV9LRVkgYXMgc3RyaW5nIHx8ICcnLFxuICBwYWdlVHlwZXMsXG4gIGJyaWNrcyxcbiAgbG9nbzogJy9sb2dvLnN2ZycsXG4gIC8vIC8vIGNvbnRlbnRDbGFzc05hbWU6ICdjb250ZW50JywgLy8gRGVmaW5lZCBkeW5hbWljYWxseVxuICAvLyAvLyBpc0RhcmtDb2xvck1vZGU6IC4uLiwgICAgICAgIC8vIGluIF9hcHAudHN4XG4gIC8vIC8vIHRvZ2dsZUNvbG9yTW9kZTogLi4uLCAgICAgICAgLy8gdG8gbWFuYWdlIERhcmsgTW9kZVxuICByZW5kZXJMb2NhbExpbms6IFJlbWl4TGluayxcbiAgbmF2aWdhdGU6ICgpID0+IHt9LFxuICBsb2dpblBhdGg6ICcvYWRtaW4nLFxuICBlZGl0b3JQYXRoOiAnL2FkbWluL2VkaXRvcicsXG4gIHBsYXlncm91bmRQYXRoOiAnL2FkbWluL3BsYXlncm91bmQnLFxuICBhcHBTZXR0aW5nc1BhdGg6ICcvYWRtaW4vYXBwLXNldHRpbmdzJyxcbiAgdXNlQ3NzSW5KczogZmFsc2UsXG4gIGFwcFJvb3RFbGVtZW50OiAnI3Jvb3QnLFxuICBjbGlja1RvRWRpdFNpZGU6IHR5cGVzLkNsaWNrVG9FZGl0U2lkZS5Cb3R0b21SaWdodCxcbiAgY3VzdG9tRmllbGRzOiBbXSxcbiAgLy8gLy9yZXNwb25zaXZlQnJlYWtwb2ludHM6IFt7IHR5cGU6IHR5cGVzLkRldmljZVR5cGUuUGhvbmUsIHdpZHRoOiA0ODAsIGxhYmVsOiAnU21hcnRwaG9uZSd9XSxcbiAgZW5hYmxlQXV0b1NhdmU6IHRydWUsXG4gIGRpc2FibGVTYXZlSWZJbnZhbGlkUHJvcHM6IGZhbHNlLFxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25maWdcbiIsICJpbXBvcnQgeyB0eXBlcyB9IGZyb20gJ3JlYWN0LWJyaWNrcy9mcm9udGVuZCdcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFJFQUNUIEJSSUNLUyBVSVxuLy8gWW91IG1heSBhbHNvIGltcG9ydCB7IFNpbmdsZSBCcmlja3MgfVxuLy8gdG8gcmVkdWNlIHRoZSBidW5kbGUgc2l6ZVxuaW1wb3J0IEJsb2cgZnJvbSAncmVhY3QtYnJpY2tzLXVpL2Jsb2cnXG5pbXBvcnQgV2Vic2l0ZSBmcm9tICdyZWFjdC1icmlja3MtdWkvd2Vic2l0ZSdcblxuLy8gRXhhbXBsZSBjdXN0b20gYnJpY2tcbmltcG9ydCBNeUhlcm9Vbml0IGZyb20gJy4vTXlIZXJvVW5pdCdcbmltcG9ydCBNZHdwSGVyb1VuaXQgZnJvbSAnLi9NZHdwSGVyb1VuaXQnXG5cbmNvbnN0IGJyaWNrczogdHlwZXMuQnJpY2s8YW55PltdID0gW1xuICAuLi5XZWJzaXRlLFxuICAuLi5CbG9nLFxuICBNeUhlcm9Vbml0LFxuICBNZHdwSGVyb1VuaXRcbiAgLy8gUHV0IGhlcmUgeW91ciBvdGhlciBicmlja3MuLi5cbl1cblxuZXhwb3J0IGRlZmF1bHQgYnJpY2tzXG4iLCAiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUZXh0LCBSaWNoVGV4dCwgSW1hZ2UsIHR5cGVzIH0gZnJvbSAncmVhY3QtYnJpY2tzL2Zyb250ZW5kJ1xuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2NhbCBUeXBlc1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxudHlwZSBQYWRkaW5nID0gJ2JpZycgfCAnc21hbGwnXG5cbmludGVyZmFjZSBIZXJvVW5pdFByb3BzIHtcbiAgcGFkZGluZzogUGFkZGluZ1xuICB0aXRsZTogc3RyaW5nXG4gIHRleHQ6IHN0cmluZ1xufVxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDb21wb25lbnQgdG8gYmUgcmVuZGVyZWRcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmNvbnN0IE15SGVyb1VuaXQ6IHR5cGVzLkJyaWNrPEhlcm9Vbml0UHJvcHM+ID0gKHsgcGFkZGluZyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtgbWF4LXcteGwgbXgtYXV0byBweC02ICR7XG4gICAgICAgIHBhZGRpbmcgPT09ICdiaWcnID8gJ3B5LTIwJyA6ICdweS0xMidcbiAgICAgIH1gfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgcHJvcE5hbWU9XCJpY29uXCJcbiAgICAgICAgICBhbHQ9XCJJY29uXCJcbiAgICAgICAgICBtYXhXaWR0aD17ODB9XG4gICAgICAgICAgYXNwZWN0UmF0aW89ezF9XG4gICAgICAgICAgaW1hZ2VDbGFzc05hbWU9XCJ3LTIwIG1iLTVcIlxuICAgICAgICAvPlxuICAgICAgICA8VGV4dFxuICAgICAgICAgIHJlbmRlckJsb2NrPXsocHJvcHMpID0+IChcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBzbTp0ZXh0LTR4bCB0ZXh0LWNlbnRlciBmb250LWJsYWNrIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlIGxlYWRpbmctdGlnaHQgbWItM1wiPlxuICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICl9XG4gICAgICAgICAgcmVuZGVyUGxhY2Vob2xkZXI9eyhwcm9wcykgPT4gKFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3BhY2l0eS0zMFwiPntwcm9wcy5jaGlsZHJlbn08L3NwYW4+XG4gICAgICAgICAgKX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgYSB0aXRsZS4uLlwiXG4gICAgICAgICAgcHJvcE5hbWU9XCJ0aXRsZVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxSaWNoVGV4dFxuICAgICAgICAgIHJlbmRlckJsb2NrPXsocHJvcHMpID0+IChcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC1jZW50ZXIgbGVhZGluZy1yZWxheGVkIHRleHQtZ3JheS03MDAgZGFyazp0ZXh0LWdyYXktMTAwXCI+XG4gICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICApfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSBhIHRleHQuLi5cIlxuICAgICAgICAgIHByb3BOYW1lPVwidGV4dFwiXG4gICAgICAgICAgYWxsb3dlZEZlYXR1cmVzPXtbXG4gICAgICAgICAgICB0eXBlcy5SaWNoVGV4dEZlYXR1cmVzLkJvbGQsXG4gICAgICAgICAgICB0eXBlcy5SaWNoVGV4dEZlYXR1cmVzLkl0YWxpYyxcbiAgICAgICAgICAgIHR5cGVzLlJpY2hUZXh0RmVhdHVyZXMuSGlnaGxpZ2h0LFxuICAgICAgICAgICAgdHlwZXMuUmljaFRleHRGZWF0dXJlcy5Db2RlLFxuICAgICAgICAgICAgdHlwZXMuUmljaFRleHRGZWF0dXJlcy5MaW5rLFxuICAgICAgICAgIF19XG4gICAgICAgICAgcmVuZGVyQ29kZT17KHByb3BzKSA9PiAoXG4gICAgICAgICAgICA8Y29kZSBjbGFzc05hbWU9XCJ0ZXh0LXNtIHB5LTEgcHgtMiBiZy1ncmF5LTIwMCBkYXJrOmJnLWdyYXktNzAwIHJvdW5kZWRcIj5cbiAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9jb2RlPlxuICAgICAgICAgICl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBCcmljayBTY2hlbWFcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbk15SGVyb1VuaXQuc2NoZW1hID0ge1xuICBuYW1lOiAnbXktaGVyby11bml0JyxcbiAgbGFiZWw6ICdDdXN0b20gSGVybyBVbml0JyxcbiAgZ2V0RGVmYXVsdFByb3BzOiAoKSA9PiAoe1xuICAgIHBhZGRpbmc6ICdiaWcnLFxuICAgIHRpdGxlOiAnVGhpcyBpcyBhIGN1c3RvbSBIZXJvIFVuaXQnLFxuICAgIHRleHQ6IFwiV2UgYXJlIGEgaGktdGVjaCB3ZWIgZGV2ZWxvcG1lbnQgY29tcGFueSBjb21taXR0ZWQgdG8gZGVsaXZlciBncmVhdCBwcm9kdWN0cyBvbiB0aW1lLiBXZSBsb3ZlIHRvIHVuZGVyc3RhbmQgb3VyIGN1c3RvbWVycycgbmVlZHMgYW5kIGV4Y2VlZCBleHBlY3RhdGlvbnMuXCIsXG4gIH0pLFxuICBzaWRlRWRpdFByb3BzOiBbXG4gICAge1xuICAgICAgbmFtZTogJ3BhZGRpbmcnLFxuICAgICAgbGFiZWw6ICdQYWRkaW5nJyxcbiAgICAgIHR5cGU6IHR5cGVzLlNpZGVFZGl0UHJvcFR5cGUuU2VsZWN0LFxuICAgICAgc2VsZWN0T3B0aW9uczoge1xuICAgICAgICBkaXNwbGF5OiB0eXBlcy5PcHRpb25zRGlzcGxheS5TZWxlY3QsXG4gICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICB7IHZhbHVlOiAnYmlnJywgbGFiZWw6ICdCaWcgUGFkZGluZycgfSxcbiAgICAgICAgICB7IHZhbHVlOiAnc21hbGwnLCBsYWJlbDogJ1NtYWxsIFBhZGRpbmcnIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0sXG4gIF0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15SGVyb1VuaXRcbiIsICJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRleHQsIFJpY2hUZXh0LCB0eXBlcyB9IGZyb20gJ3JlYWN0LWJyaWNrcy9mcm9udGVuZCdcbmltcG9ydCB7IENvbG9ycywgQmdDb2xvcnMsIFBhcmFncmFwaENvbG9ycywgSGVhZGxpbmVBbGlnbm1lbnQsIFBhcmFncmFwaEFsaWdubWVudCB9IGZyb20gJy4uL3V0aWxzL2NvbG9ycydcblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTG9jYWwgVHlwZXNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW50ZXJmYWNlIEhlcm9Vbml0UHJvcHMge1xuICBjb2xvcjogdHlwZXMuSUNvbG9yXG4gIHBhcmFncmFwaENvbG9yOiB0eXBlcy5JQ29sb3JcbiAgYmdDb2xvcjogdHlwZXMuSUNvbG9yXG4gIGhlYWRsaW5lQWxpZ25tZW50PzogICdsZWZ0JyB8ICdjZW50ZXInIHwgJ3JpZ2h0J1xuICBwYXJhZ3JhcGhBbGlnbm1lbnQ/OiAgJ2xlZnQnIHwgJ2NlbnRlcicgfCAncmlnaHQnXG4gIGZ1bGxIZWlnaHQ6IGJvb2xlYW5cbiAgYmFja2dyb3VuZDogdHlwZXMuSUltYWdlU291cmNlXG4gIHRpdGxlOiBzdHJpbmdcbiAgdGV4dDogc3RyaW5nXG59XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENvbXBvbmVudCB0byBiZSByZW5kZXJlZFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuY29uc3QgTWR3cEJnSGVyb1VuaXQ6IHR5cGVzLkJyaWNrPEhlcm9Vbml0UHJvcHM+ID0gKHsgYmFja2dyb3VuZCwgY29sb3IsIGJnQ29sb3IsIHBhcmFncmFwaENvbG9yLCBoZWFkbGluZUFsaWdubWVudCwgcGFyYWdyYXBoQWxpZ25tZW50LGZ1bGxIZWlnaHQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgICBcbiAgICA8c2VjdGlvbiBcbiAgICBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogYHVybCgke2JhY2tncm91bmQuc3JjfSlgfX0gXG4gICAgXG4gICAgY2xhc3NOYW1lPXtgdy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIHB4LTYgcGItMTIgYW50aWFsaWFzZWQgYmctY292ZXIgIFxuICAgIFxuICAgICR7XG4gICAgICBmdWxsSGVpZ2h0ID8gJ21pbi1oLXNjcmVlbicgOiAnJ1xuICAgIH1gfT5cbiAgICAgIFxuICBcbiAgICA8ZGl2IGNsYXNzTmFtZT17YG14LWF1dG8gbWF4LXctN3hsIGB9PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG1heC13LWxnIHB4LTQgcHktMzIgbXgtYXV0byB0ZXh0LWxlZnQgbWQ6bWF4LXctbm9uZSBtZDp0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8VGV4dFxuICAgICAgICAgIHJlbmRlckJsb2NrPXsocHJvcHMpID0+IChcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2B0ZXh0LTV4bCBmb250LWV4dHJhYm9sZCBsZWFkaW5nLTEwIHRyYWNraW5nLXRpZ2h0IHRleHQtJHtoZWFkbGluZUFsaWdubWVudH0gXG4gICAgICAgICAgICAke1xuICAgICAgICAgICAgICBiZ0NvbG9yLmNsYXNzTmFtZVxuICAgICAgICAgICAgfSBzbTpsZWFkaW5nLW5vbmUgbWQ6dGV4dC02eGwgbGc6dGV4dC03eGxcbiAgICAgICAgICAgICR7Y29sb3I/LmNsYXNzTmFtZX1cbiAgICAgICAgICAgIGB9PlxuICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICl9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIGEgdGl0bGUuLi5cIlxuICAgICAgICAgIHByb3BOYW1lPVwidGl0bGVcIlxuICAgICAgICAvPlxuICAgICAgICA8UmljaFRleHRcbiAgICAgICAgICByZW5kZXJCbG9jaz17KHByb3BzKSA9PiAoXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2BteC1hdXRvIG10LTUgJHtwYXJhZ3JhcGhDb2xvcj8uY2xhc3NOYW1lfSBcbiAgICAgICAgICAgIHRleHQtJHtwYXJhZ3JhcGhBbGlnbm1lbnR9IFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBtZDptdC0xMiBtZDptYXgtdy1sZyBsZzp0ZXh0LWxnYH0+XG4gICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICApfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSBhIHRleHQuLi5cIlxuICAgICAgICAgIHByb3BOYW1lPVwidGV4dFwiXG4gICAgICAgICAgYWxsb3dlZEZlYXR1cmVzPXtbXG4gICAgICAgICAgICB0eXBlcy5SaWNoVGV4dEZlYXR1cmVzLkJvbGQsXG4gICAgICAgICAgICB0eXBlcy5SaWNoVGV4dEZlYXR1cmVzLkl0YWxpYyxcbiAgICAgICAgICAgIHR5cGVzLlJpY2hUZXh0RmVhdHVyZXMuSGlnaGxpZ2h0LFxuICAgICAgICAgICAgdHlwZXMuUmljaFRleHRGZWF0dXJlcy5Db2RlLFxuICAgICAgICAgICAgdHlwZXMuUmljaFRleHRGZWF0dXJlcy5MaW5rLFxuICAgICAgICAgIF19XG4gICAgICAgICAgcmVuZGVyQ29kZT17KHByb3BzKSA9PiAoXG4gICAgICAgICAgICA8Y29kZSBjbGFzc05hbWU9XCJ0ZXh0LXNtIHB5LTEgcHgtMiBiZy1ncmF5LTIwMCBkYXJrOmJnLWdyYXktNzAwIHJvdW5kZWRcIj5cbiAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9jb2RlPlxuICAgICAgICAgICl9XG4gICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIG10LTEyIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVsYXRpdmUgaW5saW5lLWZsZXggdy1mdWxsIG1kOnctYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI19cIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCBweC04IHB5LTQgdGV4dC1iYXNlIGZvbnQtYm9sZCBsZWFkaW5nLTYgdGV4dC1ncmF5IGJnLW9yYW5nZSBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHJvdW5kZWQtZnVsbCBtZDp3LWF1dG8gaG92ZXI6YmctaW5kaWdvLTUwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1pbmRpZ28tNjAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBQdXJjaGFzZSBOb3dcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCByaWdodC0wIHB4LTIgcHktMSAtbXQtMTIgLW1yLTYgdGV4dC14cyBmb250LW1lZGl1bSBsZWFkaW5nLXRpZ2h0IHRleHQtd2hpdGUgYmctbGlnaHQtYnJvd24gcm91bmRlZC1mdWxsXCI+b25seSAkMTUvbW88L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwibXQtMTIgdGV4dC1zbSB0ZXh0LW9yYW5nZVwiPkxlYXJuIE1vcmU8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgIFxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBCcmljayBTY2hlbWFcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbk1kd3BCZ0hlcm9Vbml0LnNjaGVtYSA9IHtcbiAgbmFtZTogJ21kd3AtaGVyby11bml0JyxcbiAgbGFiZWw6J21kd3AgSGVybyBVbml0JyxcbiAgZ2V0RGVmYXVsdFByb3BzOiAoKSA9PiAoe1xuICAgIENvbG9yOiB7IGNvbG9yOiAnIzAwMDAwMCcsIGNsYXNzTmFtZTogJ3RleHQtYmxhY2snIH0sXG4gICAgUGFyYWdyYXBoQ29sb3I6IHsgY29sb3I6ICcjZmZmZmZmJywgY2xhc3NOYW1lOiAndGV4dC13aGl0ZScgfSxcbiAgICBCZ0NvbG9yOiB7IGNvbG9yOiAnI2ZmZmZmZicsIGNsYXNzTmFtZTogJ2JnLXdoaXRlJyB9LFxuICAgIEhlYWRsaW5lQWxpZ25tZW50OiB7IGNsYXNzTmFtZTogJ3RleHQtY2VudGVyJyB9LFxuICAgIFBhcmFncmFwaEFsaWdubWVudDogeyBjbGFzc05hbWU6ICd0ZXh0LWNlbnRlcicgfSxcbiAgICBmdWxsSGVpZ2h0OiBmYWxzZSxcbiAgICB0aXRsZTogJ1RoaXMgaXMgYSBjdXN0b20gSGVybyBVbml0JyxcbiAgICB0ZXh0OiBcIldlIGFyZSBhIGhpLXRlY2ggd2ViIGRldmVsb3BtZW50IGNvbXBhbnkgY29tbWl0dGVkIHRvIGRlbGl2ZXIgZ3JlYXQgcHJvZHVjdHMgb24gdGltZS4gV2UgbG92ZSB0byB1bmRlcnN0YW5kIG91ciBjdXN0b21lcnMnIG5lZWRzIGFuZCBleGNlZWQgZXhwZWN0YXRpb25zLlwiLFxuICB9KSxcbiAgc2lkZUVkaXRQcm9wczogW1xuICAgIHtcbiAgICAgIG5hbWU6ICdiYWNrZ3JvdW5kJyxcbiAgICAgIGxhYmVsOiAnQmFja2dyb3VuZCBJbWFnZScsXG4gICAgICB0eXBlOiB0eXBlcy5TaWRlRWRpdFByb3BUeXBlLkltYWdlLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2NvbG9yJyxcbiAgICAgIGxhYmVsOiAnSGVhZGxpbmUgQ29sb3InLFxuICAgICAgdHlwZTogdHlwZXMuU2lkZUVkaXRQcm9wVHlwZS5TZWxlY3QsXG4gICAgICBzZWxlY3RPcHRpb25zOiB7XG4gICAgICAgIGRpc3BsYXk6IHR5cGVzLk9wdGlvbnNEaXNwbGF5LkNvbG9yLFxuICAgICAgICBvcHRpb25zOiBDb2xvcnNcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnYmdDb2xvcicsXG4gICAgICBsYWJlbDogJ0hlYWRsaW5lIEJhY2tncm91bmQgQ29sb3InLFxuICAgICAgdHlwZTogdHlwZXMuU2lkZUVkaXRQcm9wVHlwZS5TZWxlY3QsXG4gICAgICBzZWxlY3RPcHRpb25zOiB7XG4gICAgICAgIGRpc3BsYXk6IHR5cGVzLk9wdGlvbnNEaXNwbGF5LkNvbG9yLFxuICAgICAgICBvcHRpb25zOiBCZ0NvbG9yc1xuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdwYXJhZ3JhcGhDb2xvcicsXG4gICAgICBsYWJlbDogJ1BhcmFncmFwaCBDb2xvcicsXG4gICAgICB0eXBlOiB0eXBlcy5TaWRlRWRpdFByb3BUeXBlLlNlbGVjdCxcbiAgICAgIHNlbGVjdE9wdGlvbnM6IHtcbiAgICAgICAgZGlzcGxheTogdHlwZXMuT3B0aW9uc0Rpc3BsYXkuQ29sb3IsXG4gICAgICAgIG9wdGlvbnM6IFBhcmFncmFwaENvbG9yc1xuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdoZWFkbGluZUFsaWdubWVudCcsXG4gICAgICBsYWJlbDogJ0hlYWRsaW5lIEFsaWdubWVudCcsXG4gICAgICB0eXBlOiB0eXBlcy5TaWRlRWRpdFByb3BUeXBlLlNlbGVjdCxcbiAgICAgIHNlbGVjdE9wdGlvbnM6IHtcbiAgICAgICAgZGlzcGxheTogdHlwZXMuT3B0aW9uc0Rpc3BsYXkuU2VsZWN0LFxuICAgICAgICBvcHRpb25zOiBIZWFkbGluZUFsaWdubWVudFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdwYXJhZ3JhcGhBbGlnbm1lbnQnLFxuICAgICAgbGFiZWw6ICdQYXJhZ3JhcGggQWxpZ25tZW50JyxcbiAgICAgIHR5cGU6IHR5cGVzLlNpZGVFZGl0UHJvcFR5cGUuU2VsZWN0LFxuICAgICAgc2VsZWN0T3B0aW9uczoge1xuICAgICAgICBkaXNwbGF5OiB0eXBlcy5PcHRpb25zRGlzcGxheS5TZWxlY3QsXG4gICAgICAgIG9wdGlvbnM6IFBhcmFncmFwaEFsaWdubWVudFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdmdWxsSGVpZ2h0JyxcbiAgICAgIGxhYmVsOiAnRnVsbCBIZWlnaHQnLFxuICAgICAgdHlwZTogdHlwZXMuU2lkZUVkaXRQcm9wVHlwZS5Cb29sZWFuLFxuICAgIH0sXG4gIF0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1kd3BCZ0hlcm9Vbml0XG4iLCAiZXhwb3J0IGNvbnN0IEhlYWRsaW5lQWxpZ25tZW50ID0gW1xuICB7XG4gICAgbGFiZWw6ICdMZWZ0JyxcbiAgICB2YWx1ZTogJ2xlZnQnXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ0NlbnRlcicsXG4gICAgdmFsdWU6ICdjZW50ZXInXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ1JpZ2h0JyxcbiAgICB2YWx1ZTogJ3JpZ2h0J1xuICB9XG5dXG5cbmV4cG9ydCBjb25zdCBQYXJhZ3JhcGhBbGlnbm1lbnQgPSBbXG4gIHtcbiAgICBsYWJlbDogJ0xlZnQnLFxuICAgIHZhbHVlOiAnbGVmdCdcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnQ2VudGVyJyxcbiAgICB2YWx1ZTogJ2NlbnRlcidcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnUmlnaHQnLFxuICAgIHZhbHVlOiAncmlnaHQnXG4gIH1cbl1cblxuZXhwb3J0IGNvbnN0IENvbG9ycyA9IFtcbiAgXG4gIHtcbiAgICBsYWJlbDogJ0Jyb3duJyxcbiAgICB2YWx1ZTogeyBjb2xvcjogJyM0NjJjMzcnLCBjbGFzc05hbWU6ICd0ZXh0LWJyb3duJyB9LFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdMaWdodCBicm93bicsXG4gICAgdmFsdWU6IHsgY29sb3I6ICcjYTg5MzhjJywgY2xhc3NOYW1lOiAndGV4dC1saWdodC1icm93bicgfSxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnUmVkJyxcbiAgICB2YWx1ZTogeyBjb2xvcjogJyNhZTFlMmMnLCBjbGFzc05hbWU6ICd0ZXh0LXJlZCcgfSxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnT3JhbmdlJyxcbiAgICB2YWx1ZTogeyBjb2xvcjogJyNjYTM4M2InLCBjbGFzc05hbWU6ICd0ZXh0LW9yYW5nZScgfSxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnTGlnaHQgZ3JheScsXG4gICAgdmFsdWU6IHsgY29sb3I6ICcjZThlOWUxJywgY2xhc3NOYW1lOiAndGV4dC1ncmF5JyB9LFxuICB9LFxuXVxuXG5leHBvcnQgY29uc3QgUGFyYWdyYXBoQ29sb3JzID0gW1xuICBcbiAge1xuICAgIGxhYmVsOiAnQnJvd24nLFxuICAgIHZhbHVlOiB7IGNvbG9yOiAnIzQ2MmMzNycsIGNsYXNzTmFtZTogJ3RleHQtYnJvd24nIH0sXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ0xpZ2h0IGJyb3duJyxcbiAgICB2YWx1ZTogeyBjb2xvcjogJyNhODkzOGMnLCBjbGFzc05hbWU6ICd0ZXh0LWxpZ2h0LWJyb3duJyB9LFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdSZWQnLFxuICAgIHZhbHVlOiB7IGNvbG9yOiAnI2FlMWUyYycsIGNsYXNzTmFtZTogJ3RleHQtcmVkJyB9LFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdPcmFuZ2UnLFxuICAgIHZhbHVlOiB7IGNvbG9yOiAnI2NhMzgzYicsIGNsYXNzTmFtZTogJ3RleHQtb3JhbmdlJyB9LFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdMaWdodCBncmF5JyxcbiAgICB2YWx1ZTogeyBjb2xvcjogJyNlOGU5ZTEnLCBjbGFzc05hbWU6ICd0ZXh0LWdyYXknIH0sXG4gIH0sXG5dXG5cbmV4cG9ydCBjb25zdCBCZ0NvbG9ycyA9IFtcbiAgXG4gIHtcbiAgICBsYWJlbDogJ0Jyb3duJyxcbiAgICB2YWx1ZTogeyBjb2xvcjogJyM0NjJjMzcnLCBjbGFzc05hbWU6ICdiZy1icm93bicgfSxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnTGlnaHQgYnJvd24nLFxuICAgIHZhbHVlOiB7IGNvbG9yOiAnI2E4OTM4YycsIGNsYXNzTmFtZTogJ2JnLWxpZ2h0LWJyb3duJyB9LFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdSZWQnLFxuICAgIHZhbHVlOiB7IGNvbG9yOiAnI2FlMWUyYycsIGNsYXNzTmFtZTogJ2JnLXJlZCcgfSxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnT3JhbmdlJyxcbiAgICB2YWx1ZTogeyBjb2xvcjogJyNjYTM4M2InLCBjbGFzc05hbWU6ICdiZy1vcmFuZ2UnIH0sXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ0xpZ2h0IGdyYXknLFxuICAgIHZhbHVlOiB7IGNvbG9yOiAnI2U4ZTllMScsIGNsYXNzTmFtZTogJ2JnLWdyYXknIH0sXG4gIH0sXG5dIiwgImltcG9ydCB7IHR5cGVzIH0gZnJvbSAncmVhY3QtYnJpY2tzL2Zyb250ZW5kJ1xuXG5jb25zdCBwYWdlVHlwZXM6IHR5cGVzLklQYWdlVHlwZVtdID0gW1xuICB7XG4gICAgbmFtZTogJ3BhZ2UnLFxuICAgIHBsdXJhbE5hbWU6ICdwYWdlcycsXG4gICAgZGVmYXVsdExvY2tlZDogZmFsc2UsXG4gICAgZGVmYXVsdFN0YXR1czogdHlwZXMuUGFnZVN0YXR1cy5QdWJsaXNoZWQsXG4gICAgZ2V0RGVmYXVsdENvbnRlbnQ6ICgpID0+IFtdLFxuICAgIGV4Y2x1ZGVkQmxvY2tUeXBlczogW1xuICAgICAgJ3RpdGxlJyxcbiAgICAgICdwYXJhZ3JhcGgnLFxuICAgICAgJ3ZpZGVvJyxcbiAgICAgICdpbWFnZScsXG4gICAgICAncXVvdGUnLFxuICAgICAgJ3NvY2lhbC1lbWJlZCcsXG4gICAgICAnY29kZS1ibG9jaycsXG4gICAgICAndHdlZXQtbGlnaHQnLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnYmxvZycsXG4gICAgcGx1cmFsTmFtZTogJ0Jsb2cnLFxuICAgIGdldERlZmF1bHRDb250ZW50OiAoKSA9PiBbXSxcbiAgICBhbGxvd2VkQmxvY2tUeXBlczogW1xuICAgICAgJ3RpdGxlJyxcbiAgICAgICdwYXJhZ3JhcGgnLFxuICAgICAgJ3ZpZGVvJyxcbiAgICAgICdpbWFnZScsXG4gICAgICAncXVvdGUnLFxuICAgICAgJ3NvY2lhbC1lbWJlZCcsXG4gICAgICAnY29kZS1ibG9jaycsXG4gICAgICAndHdlZXQnLFxuICAgICAgJ3R3ZWV0LWxpZ2h0JyxcbiAgICBdLFxuICB9LFxuXVxuXG5leHBvcnQgZGVmYXVsdCBwYWdlVHlwZXNcbiIsICJpbXBvcnQgeyBMaW5rLCB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgdHlwZXMgfSBmcm9tICdyZWFjdC1icmlja3MvZnJvbnRlbmQnXG5cbmNvbnN0IFJlbWl4TGluazogdHlwZXMuUmVuZGVyTG9jYWxMaW5rID0gKHtcbiAgaHJlZixcbiAgY2xhc3NOYW1lLFxuICBhY3RpdmVDbGFzc05hbWUsXG4gIGlzQWRtaW4sXG4gIGNoaWxkcmVuLFxufSkgPT4ge1xuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKClcblxuICBsZXQgYW5jaG9yQ2xhc3NOYW1lID0gJydcblxuICBpZiAobG9jYXRpb24ucGF0aG5hbWUgPT09IGhyZWYpIHtcbiAgICBhbmNob3JDbGFzc05hbWUgPSBhY3RpdmVDbGFzc05hbWUgfHwgJydcbiAgfSBlbHNlIHtcbiAgICBhbmNob3JDbGFzc05hbWUgPSBjbGFzc05hbWUgfHwgJydcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExpbmsgdG89e2hyZWZ9PlxuICAgICAgPGEgY2xhc3NOYW1lPXthbmNob3JDbGFzc05hbWV9PntjaGlsZHJlbn08L2E+XG4gICAgPC9MaW5rPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlbWl4TGlua1xuIiwgImludGVyZmFjZSBFcnJvck1lc3NhZ2VQcm9wcyB7XG4gIGVycm9yOiBFcnJvclxufVxuXG5jb25zdCBFcnJvck1lc3NhZ2U6IFJlYWN0LkZDPEVycm9yTWVzc2FnZVByb3BzPiA9ICh7IGVycm9yIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIG1heC13LTV4bCBweC02IG15LTEyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXJlZC01MCBweS0zIHB4LTYgYm9yZGVyLTIgYm9yZGVyLXJlZC0yMDAgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1leHRyYWJvbGQgbWItMlwiPlNvbWV0aGluZyB3ZW50IHdyb25nPC9oMj5cbiAgICAgICAgPHA+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yTWVzc2FnZVxuIiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBBZG1pbiwgQXBwU2V0dGluZ3MgfSBmcm9tICdyZWFjdC1icmlja3MnXG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICdSZWFjdCBCcmlja3MgQXBwIFNldHRpbmdzJyxcbiAgfVxufVxuXG5jb25zdCBBZG1pbkFwcFNldHRpbmdzOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8QWRtaW4+XG4gICAgICA8QXBwU2V0dGluZ3MgLz5cbiAgICA8L0FkbWluPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkbWluQXBwU2V0dGluZ3NcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgQWRtaW4sIFBsYXlncm91bmQgfSBmcm9tICdyZWFjdC1icmlja3MnXG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICdSZWFjdCBCcmlja3MgUGxheWdyb3VuZCcsXG4gIH1cbn1cblxuY29uc3QgQWRtaW5QbGF5Z3JvdW5kOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8QWRtaW4+XG4gICAgICA8UGxheWdyb3VuZCAvPlxuICAgIDwvQWRtaW4+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWRtaW5QbGF5Z3JvdW5kXG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IEFkbWluLCBFZGl0b3IgfSBmcm9tICdyZWFjdC1icmlja3MnXG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICdSZWFjdCBCcmlja3MgRWRpdG9yJyxcbiAgfVxufVxuXG5jb25zdCBBZG1pbkVkaXRvcjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEFkbWluPlxuICAgICAgPEVkaXRvciAvPlxuICAgIDwvQWRtaW4+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWRtaW5FZGl0b3JcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgQWRtaW4sIExvZ2luIH0gZnJvbSAncmVhY3QtYnJpY2tzJ1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiAnUmVhY3QgQnJpY2tzIExvZ2luJyxcbiAgfVxufVxuXG5jb25zdCBBZG1pbkxvZ2luOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8QWRtaW4gaXNMb2dpbj5cbiAgICAgIDxMb2dpbiAvPlxuICAgIDwvQWRtaW4+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWRtaW5Mb2dpblxuIiwgImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQge1xuICBSZWFjdEJyaWNrc0NvbnRleHQsXG4gIFBhZ2VWaWV3ZXIsXG4gIGZldGNoUGFnZSxcbiAgY2xlYW5QYWdlLFxufSBmcm9tICdyZWFjdC1icmlja3MvZnJvbnRlbmQnXG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gJ34vY29tcG9uZW50cy9FcnJvck1lc3NhZ2UnXG5pbXBvcnQgTGF5b3V0IGZyb20gJ34vY29tcG9uZW50cy9MYXlvdXQnXG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IEhPTUVfUEFHRSA9ICdob21lJ1xuICB0cnkge1xuICAgIGNvbnN0IHBhZ2UgPSBhd2FpdCBmZXRjaFBhZ2UoSE9NRV9QQUdFLCBwcm9jZXNzLmVudi5BUElfS0VZIGFzIHN0cmluZylcbiAgICByZXR1cm4geyBwYWdlIH1cbiAgfSBjYXRjaCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgZmluZCB0aGUgXCIke0hPTUVfUEFHRX1cIiBwYWdlLmApXG4gIH1cbn1cblxuY29uc3QgUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgeyBwYWdlIH0gPSB1c2VMb2FkZXJEYXRhKClcbiAgLy8gQ2xlYW4gdGhlIHJlY2VpdmVkIGNvbnRlbnRcbiAgLy8gUmVtb3ZlcyB1bmtub3duIG9yIG5vdCBhbGxvd2VkIGJyaWNrc1xuICBjb25zdCB7IHBhZ2VUeXBlcywgYnJpY2tzIH0gPSB1c2VDb250ZXh0KFJlYWN0QnJpY2tzQ29udGV4dClcbiAgY29uc3QgcGFnZU9rID0gcGFnZSA/IGNsZWFuUGFnZShwYWdlLCBwYWdlVHlwZXMsIGJyaWNrcykgOiBudWxsXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPFBhZ2VWaWV3ZXIgcGFnZT17cGFnZU9rfSAvPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICdSZWFjdCBCcmlja3MgQmxvZycsXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQm91bmRhcnkoeyBlcnJvciB9OiB7IGVycm9yOiBFcnJvciB9KSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxFcnJvck1lc3NhZ2UgZXJyb3I9e2Vycm9yfSAvPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VcbiIsICJpbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3RlcidcblxuY29uc3QgTGF5b3V0OiBSZWFjdC5GQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWluLWgtc2NyZWVuIGp1c3RpZnktYmV0d2VlbiBmb250LWNvbnRlbnQgYW50aWFsaWFzZWRcIj5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImlzb2xhdGUgbWItYXV0b1wiPntjaGlsZHJlbn08L21haW4+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4J1xuXG5jb25zdCBIZWFkZXI6IFJlYWN0LkZDID0gKCkgPT4gKFxuICA8aGVhZGVyIGNsYXNzTmFtZT1cImJnLXdoaXRlIHNtOmgtMjAgcHktNSBib3JkZXItYiBzbTpzdGlja3kgdG9wLTAgei0xMFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNXhsIG14LWF1dG8gcHgtNlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBzbTpqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBpdGVtcy1jZW50ZXIgbWItNCBzbTptYi0wXCI+XG4gICAgICAgICAgPGEgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPVwiL3JlYWN0LWJyaWNrcy1sb2dvLnN2Z1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNDhcIlxuICAgICAgICAgICAgICBhbHQ9XCJSZWFjdCBCcmlja3NcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTptbC04IGZsZXggc3BhY2UteC01IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9ibG9nL2xpc3RcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtcGluay03MDBcIj5cbiAgICAgICAgICAgICAgUG9zdCBMaXN0XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICB0bz1cIi9ibG9nL3RodW1ibmFpbHNcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtcGluay03MDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBQb3N0IFRodW1ibmFpbHNcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgdG89XCIvYWRtaW5cIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTIgcHgtNSByb3VuZGVkIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gYmctY3lhbi01MDAgaG92ZXI6YmctY3lhbi02MDAgaG92ZXI6c2hhZG93LWxnIHRyYW5zaXRpb24gZHVyYXRpb24tMjAwXCJcbiAgICAgICAgPlxuICAgICAgICAgIEVkaXQgY29udGVudFxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9oZWFkZXI+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuIiwgImNvbnN0IEZvb3RlciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImJnLWdyYXktNTAgYm9yZGVyLXQgcHktMTIgaC0zMlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy01eGwgbXgtYXV0byBmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNFwiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cIi9yZWFjdC1icmlja3MtaWNvbi5zdmdcIlxuICAgICAgICAgICAgYWx0PVwiUmVhY3QgQnJpY2tzXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctOFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwcGVyY2FzZSB0ZXh0LXNtIHRyYWNraW5nLXdpZGVyXCI+XG4gICAgICAgICAgICBSZW1peCBibG9nIHN0YXJ0ZXJcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCB0ZXh0LXNtXCI+XG4gICAgICAgICAgXHUwMEE5IHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9eycgJ31cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9yZWFjdGJyaWNrcy5jb21cIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LXBpbmstNjAwXCI+XG4gICAgICAgICAgICBSZWFjdCBCcmlja3NcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9mb290ZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyXG4iLCAiaW1wb3J0IHsgT3V0bGV0IH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IExheW91dCBmcm9tICd+L2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICd+L2NvbXBvbmVudHMvRXJyb3JNZXNzYWdlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKCkge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8T3V0bGV0IC8+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogJ0Jsb2cnLFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFcnJvckJvdW5kYXJ5KHsgZXJyb3IgfTogeyBlcnJvcjogRXJyb3IgfSkge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8RXJyb3JNZXNzYWdlIGVycm9yPXtlcnJvcn0gLz5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuIiwgImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIFJlYWN0QnJpY2tzQ29udGV4dCxcbiAgUGFnZVZpZXdlcixcbiAgZmV0Y2hQYWdlLFxuICBjbGVhblBhZ2UsXG59IGZyb20gJ3JlYWN0LWJyaWNrcy9mcm9udGVuZCdcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCdcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnXG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoeyBwYXJhbXMgfTogeyBwYXJhbXM6IHsgc2x1Zzogc3RyaW5nIH0gfSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHBhZ2UgPSBhd2FpdCBmZXRjaFBhZ2UocGFyYW1zLnNsdWcsIHByb2Nlc3MuZW52LkFQSV9LRVkgYXMgc3RyaW5nKVxuICAgIHJldHVybiB7IHBhZ2UgfVxuICB9IGNhdGNoIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBmaW5kIHRoZSBcIiR7cGFyYW1zLnNsdWd9XCIgcG9zdC5gKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoeyBkYXRhIH0pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogZGF0YT8ucGFnZT8ubWV0YT8udGl0bGUgfHwgJ0Jsb2cgcG9zdCcsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSgpIHtcbiAgY29uc3QgeyBwYWdlIH0gPSB1c2VMb2FkZXJEYXRhKClcbiAgLy8gQ2xlYW4gdGhlIHJlY2VpdmVkIGNvbnRlbnRcbiAgLy8gUmVtb3ZlcyB1bmtub3duIG9yIG5vdCBhbGxvd2VkIGJyaWNrc1xuICBjb25zdCB7IHBhZ2VUeXBlcywgYnJpY2tzIH0gPSB1c2VDb250ZXh0KFJlYWN0QnJpY2tzQ29udGV4dClcbiAgY29uc3QgcGFnZU9rID0gcGFnZSA/IGNsZWFuUGFnZShwYWdlLCBwYWdlVHlwZXMsIGJyaWNrcykgOiBudWxsXG5cbiAgcmV0dXJuIDxQYWdlVmlld2VyIHBhZ2U9e3BhZ2VPa30gLz5cbn1cbiIsICJpbXBvcnQgeyBmZXRjaFBhZ2VzLCB0eXBlcyB9IGZyb20gJ3JlYWN0LWJyaWNrcy9mcm9udGVuZCdcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCdcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcydcblxuaW1wb3J0IFBvc3RUaHVtYm5haWwgZnJvbSAnfi9jb21wb25lbnRzL1Bvc3RUaHVtYm5haWwnXG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZmV0Y2hQYWdlcyhwcm9jZXNzLmVudi5BUElfS0VZIGFzIHN0cmluZywge1xuICAgIHR5cGU6ICdibG9nJyxcbiAgICBwYWdlU2l6ZTogMTAwMCxcbiAgICBzb3J0OiAnLXB1Ymxpc2hlZEF0JyxcbiAgfSlcbiAgcmV0dXJuIHsgcG9zdHMgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUaHVtYm5haWxzKCkge1xuICBjb25zdCB7IHBvc3RzIH0gPSB1c2VMb2FkZXJEYXRhPHsgcG9zdHM6IHR5cGVzLlBhZ2VGcm9tTGlzdFtdIH0+KClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG1heC13LTV4bCBteC1hdXRvIHB5LTE2IHB4LTZcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTR4bCBzbTp0ZXh0LTZ4bCBsZzp0ZXh0LTd4bCBsZWFkaW5nLW5vbmUgZm9udC1ibGFjayB0cmFja2luZy10aWdodCB0ZXh0LWdyYXktOTAwIHBiLTQgbXQtMTAgc206bXQtMTIgbWItNFwiPlxuICAgICAgICBCbG9nXG4gICAgICA8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0xMCBmbGV4IGZsZXgtd3JhcFwiPlxuICAgICAgICB7cG9zdHM/Lm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgIDxQb3N0VGh1bWJuYWlsXG4gICAgICAgICAgICBrZXk9e3Bvc3QuaWR9XG4gICAgICAgICAgICBocmVmPXtgL2Jsb2cvcG9zdHMvJHtwb3N0LnNsdWd9YH1cbiAgICAgICAgICAgIHRpdGxlPXtwb3N0Lm5hbWV9XG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17cG9zdC5tZXRhLmRlc2NyaXB0aW9uIX1cbiAgICAgICAgICAgIGRhdGU9e2RheWpzKHBvc3QucHVibGlzaGVkQXQpLmZvcm1hdCgnREQvTU0vWVlZWScpfVxuICAgICAgICAgICAgaW1hZ2U9e1xuICAgICAgICAgICAgICBwb3N0Lm1ldGEuZmVhdHVyZWRJbWFnZSB8fFxuICAgICAgICAgICAgICAnaHR0cHM6Ly9pbWFnZXMucmVhY3Ricmlja3MuY29tL29yaWdpbmFsLzhiMTk3NGEwLTkxYTgtNGFiNC1iMDE0LTgzZjYwMTkyZjliNS5zdmcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCdcblxuaW50ZXJmYWNlIFBvc3RUaHVtYm5haWxQcm9wcyB7XG4gIGhyZWY6IHN0cmluZ1xuICB0aXRsZTogc3RyaW5nXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmdcbiAgZGF0ZTogc3RyaW5nXG4gIGltYWdlOiBhbnlcbn1cblxuY29uc3QgUG9zdFRodW1ibmFpbDogUmVhY3QuRkM8UG9zdFRodW1ibmFpbFByb3BzPiA9ICh7XG4gIGhyZWYsXG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgZGF0ZSxcbiAgaW1hZ2UsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExpbmsgY2xhc3NOYW1lPVwidy0xLzIgbWItOCBwLTggZ3JvdXBcIiB0bz17aHJlZn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e2ltYWdlfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCBoLTYwIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyIHRyYW5zaXRpb24tdHJhbnNmb3JtIHJvdW5kZWRcIlxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGJvdHRvbS0wIGxlZnQtMCByaWdodC0wIGJnLWN5YW4tNTAwIG9wYWNpdHktMCBncm91cC1ob3ZlcjpvcGFjaXR5LTQwIHRyYW5zaXRpb24tb3BhY2l0eSByb3VuZGVkXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS00IHRleHQteHMgdXBwZXJjYXNlIHRleHQtZ3JheS01MDBcIj57ZGF0ZX08L2Rpdj5cblxuICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTMgdGV4dC0yeGwgZm9udC1leHRyYWJvbGQgdGV4dC1ncmF5LTkwMCBncm91cC1ob3Zlcjp0ZXh0LWN5YW4tNTAwIHRyYW5zaXRpb24tY29sb3JzXCI+XG4gICAgICAgIHt0aXRsZX1cbiAgICAgIDwvaDM+XG5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDAgbWItNFwiPntkZXNjcmlwdGlvbn08L3A+XG4gICAgPC9MaW5rPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RUaHVtYm5haWxcbiIsICJpbXBvcnQgeyBmZXRjaFBhZ2VzLCBmZXRjaFRhZ3MsIHR5cGVzIH0gZnJvbSAncmVhY3QtYnJpY2tzL2Zyb250ZW5kJ1xuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSwgTGluayB9IGZyb20gJ3JlbWl4J1xuXG5pbXBvcnQgQmxvZ0xpc3RJdGVtIGZyb20gJ34vY29tcG9uZW50cy9Qb3N0TGlzdEl0ZW0nXG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoKSA9PiB7XG4gIFxuICBjb25zdCBwb3N0cyA9IGF3YWl0IGZldGNoUGFnZXMocHJvY2Vzcy5lbnYuQVBJX0tFWSBhcyBzdHJpbmcsIHtcbiAgICB0eXBlOiAnYmxvZycsXG4gICAgcGFnZVNpemU6IDEwMDAsXG4gICAgc29ydDogJy1wdWJsaXNoZWRBdCcsXG4gIH0pXG5cbiAgY29uc3QgeyBpdGVtczogdGFncyB9ID0gYXdhaXQgZmV0Y2hUYWdzKHByb2Nlc3MuZW52LkFQSV9LRVkgYXMgc3RyaW5nKVxuICB0YWdzLnNvcnQoKVxuXG4gIHJldHVybiB7IHBvc3RzLCB0YWdzIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdCgpIHtcbiAgY29uc3QgeyBwb3N0cywgdGFncyB9ID1cbiAgICB1c2VMb2FkZXJEYXRhPHsgcG9zdHM6IHR5cGVzLlBhZ2VGcm9tTGlzdFtdOyB0YWdzOiBzdHJpbmdbXSB9PigpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC00eGwgc206dGV4dC02eGwgbGc6dGV4dC03eGwgbGVhZGluZy1ub25lIGZvbnQtYmxhY2sgdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTkwMCBwYi00IG10LTEwIHNtOm10LTEyIG1iLTRcIj5cbiAgICAgICAgQmxvZ1xuICAgICAgPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNnhsIG14LWF1dG8gcHgtOCBweS0xNiBmbGV4IHNwYWNlLXgtMjRcIj5cbiAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3sgZmxleDogJzIgMiAwJyB9fSBjbGFzc05hbWU9XCJmbGV4LTIgc3BhY2UteS04XCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtcGluay01MDAgdXBwZXJjYXNlIG1iLTggdHJhY2tpbmctd2lkZXN0IGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgUmVjZW50bHkgcHVibGlzaGVkXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICB7cG9zdHM/Lm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgICAgPEJsb2dMaXN0SXRlbVxuICAgICAgICAgICAgICBrZXk9e3Bvc3QuaWR9XG4gICAgICAgICAgICAgIHRpdGxlPXtwb3N0Lm5hbWV9XG4gICAgICAgICAgICAgIGhyZWY9e2AvYmxvZy9wb3N0cy8ke3Bvc3Quc2x1Z31gfVxuICAgICAgICAgICAgICBjb250ZW50PXtwb3N0Lm1ldGEuZGVzY3JpcHRpb24gfHwgJyd9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZsZXgtMSBzcGFjZS15LTE2XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXBpbmstNTAwIHVwcGVyY2FzZSBtYi04IHRyYWNraW5nLXdpZGVzdCBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgVGFnc1xuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIHt0YWdzXG4gICAgICAgICAgICAgICAgPy5maWx0ZXIoKHRhZykgPT4gdGFnICE9PSAncG9wdWxhcicpXG4gICAgICAgICAgICAgICAgLm1hcCgodGFnKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICB0bz17YC90YWcvJHt0YWd9YH1cbiAgICAgICAgICAgICAgICAgICAga2V5PXt0YWd9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB0ZXh0LXNtIGZvbnQtYm9sZCBtci0yIG1iLTIgdHJhbnNmb3JtIGR1cmF0aW9uLTIwMCB0ZXh0LWN5YW4tODAwIGJnLWN5YW4tMTAwIGhvdmVyOmJnLWN5YW4tMjAwIGhvdmVyOnRleHQtY3lhbi05MDAgcm91bmRlZC1tZCBweC0yIHB5LTFcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiIHN0eWxlPXt7IHpJbmRleDogLTEgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAge3RhZ31cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1waW5rLTUwMCB1cHBlcmNhc2UgbWItOCB0cmFja2luZy13aWRlc3QgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgIE1vc3QgUG9wdWxhclxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAge3Bvc3RzXG4gICAgICAgICAgICAgICAgPy5maWx0ZXIoKHBvc3QpID0+IHBvc3QudGFncy5maW5kKCh0YWcpID0+IHRhZyA9PT0gJ3BvcHVsYXInKSlcbiAgICAgICAgICAgICAgICAubWFwKChwb3N0KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtwb3N0LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXtwb3N0LnNsdWd9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTkwMCBob3Zlcjp0ZXh0LWN5YW4tNjAwIGZvbnQtYm9sZCB0ZXh0LWxnIGxlYWRpbmctMTAgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge3Bvc3QubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4J1xuXG5pbnRlcmZhY2UgUG9zdExpc3RJdGVtUHJvcHMge1xuICB0aXRsZTogc3RyaW5nXG4gIGhyZWY6IHN0cmluZ1xuICBjb250ZW50OiBzdHJpbmdcbn1cblxuY29uc3QgUG9zdExpc3RJdGVtOiBSZWFjdC5GQzxQb3N0TGlzdEl0ZW1Qcm9wcz4gPSAoe1xuICB0aXRsZSxcbiAgaHJlZixcbiAgY29udGVudCxcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGlua1xuICAgICAgdG89e2hyZWZ9XG4gICAgICBjbGFzc05hbWU9XCJmbGV4LTEgYmxvY2sgZ3JvdXAgcHktNCB0ZXh0LWdyYXktOTAwIGhvdmVyOmJnLWdyYXktNTAgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwIHAtNiAtbS02IHJvdW5kZWRcIlxuICAgID5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC0yeGxcIj57dGl0bGV9PC9oMz5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTQgbGVhZGluZy02IHRleHQtbGdcIj57Y29udGVudH08L3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG10LTQgdGV4dC1jeWFuLTUwMCBncm91cC1ob3Zlcjp0ZXh0LWN5YW4tNjAwIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci0yIGdyb3VwLWhvdmVyOm1yLTQgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCI+XG4gICAgICAgICAgUmVhZCBNb3JlXG4gICAgICAgIDwvZGl2PlxuICAgICAgICAmcmFxdW87XG4gICAgICA8L2Rpdj5cbiAgICA8L0xpbms+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdExpc3RJdGVtXG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonMzRkZDY3YTAnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LUFUNFFKRkxBLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1XV09PSElGUi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVBOSk1QR0VaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWTJQV0w3SlIuanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LTUzWTJSVU4yLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1YS01UQ1JGVS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUtESE1EM1ZFLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstR0JZSkRPVVEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1TRU8ySDRNVC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVVVVERWTTZWLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOnRydWV9LCdyb3V0ZXMvYWRtaW4vYXBwLXNldHRpbmdzJzp7J2lkJzoncm91dGVzL2FkbWluL2FwcC1zZXR0aW5ncycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhZG1pbi9hcHAtc2V0dGluZ3MnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYWRtaW4vYXBwLXNldHRpbmdzLVdPSzRFNzQ1LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1UVVNZNTJERi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYWRtaW4vZWRpdG9yJzp7J2lkJzoncm91dGVzL2FkbWluL2VkaXRvcicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhZG1pbi9lZGl0b3InLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYWRtaW4vZWRpdG9yLTZRTUw2VDQzLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1UVVNZNTJERi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYWRtaW4vaW5kZXgnOnsnaWQnOidyb3V0ZXMvYWRtaW4vaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYWRtaW4nLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2FkbWluL2luZGV4LU5IREhIV0JTLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1UVVNZNTJERi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYWRtaW4vcGxheWdyb3VuZCc6eydpZCc6J3JvdXRlcy9hZG1pbi9wbGF5Z3JvdW5kJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2FkbWluL3BsYXlncm91bmQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYWRtaW4vcGxheWdyb3VuZC02SFQ3NEQyWi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstVFVTWTUyREYuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Jsb2cnOnsnaWQnOidyb3V0ZXMvYmxvZycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidibG9nJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Jsb2ctV0dBWVRFR1UuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVlGSlBCMlpMLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5Jzp0cnVlfSwncm91dGVzL2Jsb2cvbGlzdCc6eydpZCc6J3JvdXRlcy9ibG9nL2xpc3QnLCdwYXJlbnRJZCc6J3JvdXRlcy9ibG9nJywncGF0aCc6J2xpc3QnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYmxvZy9saXN0LTQzQkhKUUlXLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1HQllKRE9VUS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVNFTzJINE1ULmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Jsb2cvcG9zdHMvJHNsdWcnOnsnaWQnOidyb3V0ZXMvYmxvZy9wb3N0cy8kc2x1ZycsJ3BhcmVudElkJzoncm91dGVzL2Jsb2cnLCdwYXRoJzoncG9zdHMvOnNsdWcnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYmxvZy9wb3N0cy8kc2x1Zy1QNUxWMkNONi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstR0JZSkRPVVEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1TRU8ySDRNVC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9ibG9nL3RodW1ibmFpbHMnOnsnaWQnOidyb3V0ZXMvYmxvZy90aHVtYm5haWxzJywncGFyZW50SWQnOidyb3V0ZXMvYmxvZycsJ3BhdGgnOid0aHVtYm5haWxzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Jsb2cvdGh1bWJuYWlscy1FUElGVTVVNC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstWEtNVENSRlUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1HQllKRE9VUS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVNFTzJINE1ULmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LUVRSzdHRVZVLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1ZRkpQQjJaTC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5Jzp0cnVlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC0zNERENjdBMC5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFBQTtBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxzQ0FBc0M7QUFBQSxNQUNuRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG1DQUFtQztBQUFBLE1BQ2hFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFHakMsQUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLGdCQUFnQixRQUFRO0FBSTVCLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsOEJBQThCO0FBQUEsTUFDM0QsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFB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O0FBQUEsSUFDRSxPQUFPO0FBQUEsSUFDUCxPQUFPLEVBQUUsT0FBTyxXQUFXLFdBQVc7QUFBQTtBQUFBLEVBRXhDO0FBQUEsSUFDRSxPQUFPO0FBQUEsSUFDUCxPQUFPLEVBQUUsT0FBTyxXQUFXLFdBQVc7QUFBQTtBQUFBLEVBRXhDO0FBQUEsSUFDRSxPQUFPO0FBQUEsSUFDUCxPQUFPLEVBQUUsT0FBTyxXQUFXLFdBQVc7QUFBQTtBQUFBLEVBRXhDO0FBQUEsSUFDRSxPQUFPO0FBQUEsSUFDUCxPQUFPLEVBQUUsT0FBTyxXQUFXLFdBQVc7QUFBQTtBQUFBLEVBRXhDO0FBQUEsSUFDRSxPQUFPO0FBQUEsSUFDUCxPQUFPLEVBQUUsT0FBTyxXQUFXLFdBQVc7QUFBQTtBQUFBO0FBSW5DLElBQU0sa0JBQWtCO0FBQUEsRUFFN0I7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLE9BQU8sRUFBRSxPQUFPLFdBQVcsV0FBVztBQUFBO0FBQUEsRUFFeEM7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLE9BQU8sRUFBRSxPQUFPLFdBQVcsV0FBVztBQUFBO0FBQUEsRUFFeEM7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLE9BQU8sRUFBRSxPQUFPLFdBQVcsV0FBVztBQUFBO0FBQUEsRUFFeEM7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLE9BQU8sRUFBRSxPQUFPLFdBQVcsV0FBVztBQUFBO0FBQUEsRUFFeEM7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLE9BQU8sRUFBRSxPQUFPLFdBQVcsV0FBVztBQUFBO0FBQUE7QUFJbkMsSUFBTSxXQUFXO0FBQUEsRUFFdEI7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLE9BQU8sRUFBRSxPQUFPLFdBQVcsV0FBVztBQUFBO0FBQUEsRUFFeEM7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLE9BQU8sRUFBRSxPQUFPLFdBQVcsV0FBVztBQUFBO0FBQUEsRUFFeEM7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLE9BQU8sRUFBRSxPQUFPLFdBQVcsV0FBVztBQUFBO0FBQUEsRUFF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QUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLGdCQUFnQjtBQUFBLElBQ1osSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixlQUFlO0FBQUEsSUFDWCxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLDJCQUEyQjtBQUFBLElBQ3ZCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosMEJBQTBCO0FBQUEsSUFDdEIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixvQkFBb0I7QUFBQSxJQUNoQixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQTs7O0FEbEZkLHdCQUF3QixPQUFPLFNBQVM7QUFDdEMsTUFBSTtBQUNKLE1BQUk7QUFFSixNQUFJLE1BQU0saUJBQWlCLE1BQU07QUFDL0Isd0JBQW9CLE1BQU07QUFBQTtBQUc1QixRQUFNLGFBQWEsTUFBTSxRQUFRO0FBQ2pDLFFBQU0sdUJBQXVCLE1BQU0sUUFBUTtBQUUzQyxNQUFJLGNBQWMsUUFBUSxZQUFZLEtBQUssYUFBYTtBQUN0RCw2QkFBeUIsV0FBVyxNQUFNLEtBQUs7QUFBQTtBQUdqRCxRQUFNLGNBQWM7QUFBQSxJQUNsQiwrQkFBK0I7QUFBQSxJQUMvQjtBQUFBLElBQ0EsdUJBQXVCO0FBQUE7QUFJekIsU0FBTyxLQUFLLGFBQWEsUUFBUSxDQUFDLFFBQVE7QUFDeEMsUUFBSSxZQUFZLFFBQVEsTUFBTTtBQUM1QixhQUFPLFlBQVk7QUFBQTtBQUFBO0FBSXZCLFNBQU87QUFBQTtBQUdGLElBQU0sVUFBVSx5Q0FBcUI7QUFBQSxFQUMxQztBQUFBLEVBQ0E7QUFBQSxFQUNBLE1BQU07QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
