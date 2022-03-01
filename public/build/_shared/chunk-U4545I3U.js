import {
  FaBold,
  FaCode,
  FaHighlighter,
  FaItalic,
  FaLink,
  FaListOl,
  FaListUl,
  FaQuoteRight
} from "/build/_shared/chunk-65LQOD6J.js";
import {
  A,
  B,
  C,
  E,
  Ee,
  FiAlertTriangle,
  FiArrowDown,
  FiArrowUp,
  FiBox,
  FiCheck,
  FiChevronDown,
  FiChevronRight,
  FiChevronUp,
  FiClock,
  FiCopy,
  FiCpu,
  FiEye,
  FiEyeOff,
  FiFile,
  FiGlobe,
  FiGrid,
  FiLock,
  FiMaximize2,
  FiMenu,
  FiMinimize2,
  FiMoon,
  FiPlus,
  FiPower,
  FiSearch,
  FiSettings,
  FiShare2,
  FiShoppingCart,
  FiTrash2,
  FiUmbrella,
  FiUnlock,
  FiUsers,
  FiX,
  GenIcon,
  H,
  I,
  Ie,
  J,
  N,
  Pe,
  Se,
  Te,
  Y,
  ae,
  b,
  f,
  g,
  h,
  he,
  j,
  k,
  ke,
  m,
  me,
  ne,
  oe,
  p,
  re,
  require_axios,
  require_classnames,
  require_dist,
  s,
  te,
  ue,
  useMutation,
  useQuery,
  useQueryClient,
  v,
  ve,
  xe,
  y
} from "/build/_shared/chunk-JVB6DQQK.js";
import {
  require_react_dom
} from "/build/_shared/chunk-WWOOHIFR.js";
import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS,
  __toESM,
  init_react,
  require_object_assign,
  require_react
} from "/build/_shared/chunk-Y2PWL7JR.js";

// node_modules/direction/index.js
var require_direction = __commonJS({
  "node_modules/direction/index.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = direction;
    var RTL = "\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC";
    var LTR = "A-Za-z\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u0300-\u0590\u0800-\u1FFF\u200E\u2C00-\uFB1C\uFE00-\uFE6F\uFEFD-\uFFFF";
    var rtl = new RegExp("^[^" + LTR + "]*[" + RTL + "]");
    var ltr = new RegExp("^[^" + RTL + "]*[" + LTR + "]");
    function direction(value) {
      value = String(value || "");
      if (rtl.test(value)) {
        return "rtl";
      }
      if (ltr.test(value)) {
        return "ltr";
      }
      return "neutral";
    }
  }
});

// node_modules/lodash/isObject.js
var require_isObject = __commonJS({
  "node_modules/lodash/isObject.js"(exports, module) {
    init_react();
    function isObject3(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    module.exports = isObject3;
  }
});

// node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS({
  "node_modules/lodash/_freeGlobal.js"(exports, module) {
    init_react();
    var freeGlobal = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis;
    module.exports = freeGlobal;
  }
});

// node_modules/lodash/_root.js
var require_root = __commonJS({
  "node_modules/lodash/_root.js"(exports, module) {
    init_react();
    var freeGlobal = require_freeGlobal();
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    module.exports = root;
  }
});

// node_modules/lodash/now.js
var require_now = __commonJS({
  "node_modules/lodash/now.js"(exports, module) {
    init_react();
    var root = require_root();
    var now = function() {
      return root.Date.now();
    };
    module.exports = now;
  }
});

// node_modules/lodash/_trimmedEndIndex.js
var require_trimmedEndIndex = __commonJS({
  "node_modules/lodash/_trimmedEndIndex.js"(exports, module) {
    init_react();
    var reWhitespace = /\s/;
    function trimmedEndIndex(string2) {
      var index2 = string2.length;
      while (index2-- && reWhitespace.test(string2.charAt(index2))) {
      }
      return index2;
    }
    module.exports = trimmedEndIndex;
  }
});

// node_modules/lodash/_baseTrim.js
var require_baseTrim = __commonJS({
  "node_modules/lodash/_baseTrim.js"(exports, module) {
    init_react();
    var trimmedEndIndex = require_trimmedEndIndex();
    var reTrimStart = /^\s+/;
    function baseTrim(string2) {
      return string2 ? string2.slice(0, trimmedEndIndex(string2) + 1).replace(reTrimStart, "") : string2;
    }
    module.exports = baseTrim;
  }
});

// node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS({
  "node_modules/lodash/_Symbol.js"(exports, module) {
    init_react();
    var root = require_root();
    var Symbol2 = root.Symbol;
    module.exports = Symbol2;
  }
});

// node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS({
  "node_modules/lodash/_getRawTag.js"(exports, module) {
    init_react();
    var Symbol2 = require_Symbol();
    var objectProto = Object.prototype;
    var hasOwnProperty2 = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function getRawTag(value) {
      var isOwn = hasOwnProperty2.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e2) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    module.exports = getRawTag;
  }
});

// node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS({
  "node_modules/lodash/_objectToString.js"(exports, module) {
    init_react();
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    module.exports = objectToString;
  }
});

// node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  "node_modules/lodash/_baseGetTag.js"(exports, module) {
    init_react();
    var Symbol2 = require_Symbol();
    var getRawTag = require_getRawTag();
    var objectToString = require_objectToString();
    var nullTag = "[object Null]";
    var undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    module.exports = baseGetTag;
  }
});

// node_modules/lodash/isObjectLike.js
var require_isObjectLike = __commonJS({
  "node_modules/lodash/isObjectLike.js"(exports, module) {
    init_react();
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    module.exports = isObjectLike;
  }
});

// node_modules/lodash/isSymbol.js
var require_isSymbol = __commonJS({
  "node_modules/lodash/isSymbol.js"(exports, module) {
    init_react();
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var symbolTag = "[object Symbol]";
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
    }
    module.exports = isSymbol;
  }
});

// node_modules/lodash/toNumber.js
var require_toNumber = __commonJS({
  "node_modules/lodash/toNumber.js"(exports, module) {
    init_react();
    var baseTrim = require_baseTrim();
    var isObject3 = require_isObject();
    var isSymbol = require_isSymbol();
    var NAN = 0 / 0;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject3(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject3(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = baseTrim(value);
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module.exports = toNumber;
  }
});

// node_modules/lodash/debounce.js
var require_debounce = __commonJS({
  "node_modules/lodash/debounce.js"(exports, module) {
    init_react();
    var isObject3 = require_isObject();
    var now = require_now();
    var toNumber = require_toNumber();
    var FUNC_ERROR_TEXT = "Expected a function";
    var nativeMax = Math.max;
    var nativeMin = Math.min;
    function debounce4(func2, wait, options) {
      var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
      if (typeof func2 != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject3(options)) {
        leading = !!options.leading;
        maxing = "maxWait" in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = void 0;
        lastInvokeTime = time;
        result = func2.apply(thisArg, args);
        return result;
      }
      function leadingEdge(time) {
        lastInvokeTime = time;
        timerId = setTimeout(timerExpired, wait);
        return leading ? invokeFunc(time) : result;
      }
      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
        return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
      }
      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
      }
      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        timerId = setTimeout(timerExpired, remainingWait(time));
      }
      function trailingEdge(time) {
        timerId = void 0;
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = void 0;
        return result;
      }
      function cancel() {
        if (timerId !== void 0) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = void 0;
      }
      function flush() {
        return timerId === void 0 ? result : trailingEdge(now());
      }
      function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
          if (timerId === void 0) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            clearTimeout(timerId);
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === void 0) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }
    module.exports = debounce4;
  }
});

// node_modules/lodash/throttle.js
var require_throttle = __commonJS({
  "node_modules/lodash/throttle.js"(exports, module) {
    init_react();
    var debounce4 = require_debounce();
    var isObject3 = require_isObject();
    var FUNC_ERROR_TEXT = "Expected a function";
    function throttle2(func2, wait, options) {
      var leading = true, trailing = true;
      if (typeof func2 != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject3(options)) {
        leading = "leading" in options ? !!options.leading : leading;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      return debounce4(func2, wait, {
        "leading": leading,
        "maxWait": wait,
        "trailing": trailing
      });
    }
    module.exports = throttle2;
  }
});

// node_modules/slate-react/node_modules/is-hotkey/lib/index.js
var require_lib = __commonJS({
  "node_modules/slate-react/node_modules/is-hotkey/lib/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var IS_MAC = typeof window != "undefined" && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform);
    var MODIFIERS = {
      alt: "altKey",
      control: "ctrlKey",
      meta: "metaKey",
      shift: "shiftKey"
    };
    var ALIASES = {
      add: "+",
      break: "pause",
      cmd: "meta",
      command: "meta",
      ctl: "control",
      ctrl: "control",
      del: "delete",
      down: "arrowdown",
      esc: "escape",
      ins: "insert",
      left: "arrowleft",
      mod: IS_MAC ? "meta" : "control",
      opt: "alt",
      option: "alt",
      return: "enter",
      right: "arrowright",
      space: " ",
      spacebar: " ",
      up: "arrowup",
      win: "meta",
      windows: "meta"
    };
    var CODES = {
      backspace: 8,
      tab: 9,
      enter: 13,
      shift: 16,
      control: 17,
      alt: 18,
      pause: 19,
      capslock: 20,
      escape: 27,
      " ": 32,
      pageup: 33,
      pagedown: 34,
      end: 35,
      home: 36,
      arrowleft: 37,
      arrowup: 38,
      arrowright: 39,
      arrowdown: 40,
      insert: 45,
      delete: 46,
      meta: 91,
      numlock: 144,
      scrolllock: 145,
      ";": 186,
      "=": 187,
      ",": 188,
      "-": 189,
      ".": 190,
      "/": 191,
      "`": 192,
      "[": 219,
      "\\": 220,
      "]": 221,
      "'": 222
    };
    for (f3 = 1; f3 < 20; f3++) {
      CODES["f" + f3] = 111 + f3;
    }
    var f3;
    function isHotkey(hotkey, options, event) {
      if (options && !("byKey" in options)) {
        event = options;
        options = null;
      }
      if (!Array.isArray(hotkey)) {
        hotkey = [hotkey];
      }
      var array = hotkey.map(function(string2) {
        return parseHotkey(string2, options);
      });
      var check = function check2(e2) {
        return array.some(function(object) {
          return compareHotkey(object, e2);
        });
      };
      var ret = event == null ? check : check(event);
      return ret;
    }
    function isCodeHotkey(hotkey, event) {
      return isHotkey(hotkey, event);
    }
    function isKeyHotkey2(hotkey, event) {
      return isHotkey(hotkey, { byKey: true }, event);
    }
    function parseHotkey(hotkey, options) {
      var byKey = options && options.byKey;
      var ret = {};
      hotkey = hotkey.replace("++", "+add");
      var values = hotkey.split("+");
      var length = values.length;
      for (var k3 in MODIFIERS) {
        ret[MODIFIERS[k3]] = false;
      }
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = void 0;
      try {
        for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var value = _step.value;
          var optional = value.endsWith("?") && value.length > 1;
          if (optional) {
            value = value.slice(0, -1);
          }
          var name = toKeyName(value);
          var modifier = MODIFIERS[name];
          if (length === 1 || !modifier) {
            if (byKey) {
              ret.key = name;
            } else {
              ret.which = toKeyCode(value);
            }
          }
          if (modifier) {
            ret[modifier] = optional ? null : true;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
      return ret;
    }
    function compareHotkey(object, event) {
      for (var key in object) {
        var expected = object[key];
        var actual = void 0;
        if (expected == null) {
          continue;
        }
        if (key === "key" && event.key != null) {
          actual = event.key.toLowerCase();
        } else if (key === "which") {
          actual = expected === 91 && event.which === 93 ? 91 : event.which;
        } else {
          actual = event[key];
        }
        if (actual == null && expected === false) {
          continue;
        }
        if (actual !== expected) {
          return false;
        }
      }
      return true;
    }
    function toKeyCode(name) {
      name = toKeyName(name);
      var code = CODES[name] || name.toUpperCase().charCodeAt(0);
      return code;
    }
    function toKeyName(name) {
      name = name.toLowerCase();
      name = ALIASES[name] || name;
      return name;
    }
    exports.default = isHotkey;
    exports.isHotkey = isHotkey;
    exports.isCodeHotkey = isCodeHotkey;
    exports.isKeyHotkey = isKeyHotkey2;
    exports.parseHotkey = parseHotkey;
    exports.compareHotkey = compareHotkey;
    exports.toKeyCode = toKeyCode;
    exports.toKeyName = toKeyName;
  }
});

// node_modules/is-hotkey/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/is-hotkey/lib/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var IS_MAC = typeof window != "undefined" && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform);
    var MODIFIERS = {
      alt: "altKey",
      control: "ctrlKey",
      meta: "metaKey",
      shift: "shiftKey"
    };
    var ALIASES = {
      add: "+",
      break: "pause",
      cmd: "meta",
      command: "meta",
      ctl: "control",
      ctrl: "control",
      del: "delete",
      down: "arrowdown",
      esc: "escape",
      ins: "insert",
      left: "arrowleft",
      mod: IS_MAC ? "meta" : "control",
      opt: "alt",
      option: "alt",
      return: "enter",
      right: "arrowright",
      space: " ",
      spacebar: " ",
      up: "arrowup",
      win: "meta",
      windows: "meta"
    };
    var CODES = {
      backspace: 8,
      tab: 9,
      enter: 13,
      shift: 16,
      control: 17,
      alt: 18,
      pause: 19,
      capslock: 20,
      escape: 27,
      " ": 32,
      pageup: 33,
      pagedown: 34,
      end: 35,
      home: 36,
      arrowleft: 37,
      arrowup: 38,
      arrowright: 39,
      arrowdown: 40,
      insert: 45,
      delete: 46,
      meta: 91,
      numlock: 144,
      scrolllock: 145,
      ";": 186,
      "=": 187,
      ",": 188,
      "-": 189,
      ".": 190,
      "/": 191,
      "`": 192,
      "[": 219,
      "\\": 220,
      "]": 221,
      "'": 222
    };
    for (f3 = 1; f3 < 20; f3++) {
      CODES["f" + f3] = 111 + f3;
    }
    var f3;
    function isHotkey(hotkey, options, event) {
      if (options && !("byKey" in options)) {
        event = options;
        options = null;
      }
      if (!Array.isArray(hotkey)) {
        hotkey = [hotkey];
      }
      var array = hotkey.map(function(string2) {
        return parseHotkey(string2, options);
      });
      var check = function check2(e2) {
        return array.some(function(object) {
          return compareHotkey(object, e2);
        });
      };
      var ret = event == null ? check : check(event);
      return ret;
    }
    function isCodeHotkey(hotkey, event) {
      return isHotkey(hotkey, event);
    }
    function isKeyHotkey2(hotkey, event) {
      return isHotkey(hotkey, { byKey: true }, event);
    }
    function parseHotkey(hotkey, options) {
      var byKey = options && options.byKey;
      var ret = {};
      hotkey = hotkey.replace("++", "+add");
      var values = hotkey.split("+");
      var length = values.length;
      for (var k3 in MODIFIERS) {
        ret[MODIFIERS[k3]] = false;
      }
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = void 0;
      try {
        for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var value = _step.value;
          var optional = value.endsWith("?") && value.length > 1;
          if (optional) {
            value = value.slice(0, -1);
          }
          var name = toKeyName(value);
          var modifier = MODIFIERS[name];
          if (value.length > 1 && !modifier && !ALIASES[value] && !CODES[name]) {
            throw new TypeError('Unknown modifier: "' + value + '"');
          }
          if (length === 1 || !modifier) {
            if (byKey) {
              ret.key = name;
            } else {
              ret.which = toKeyCode(value);
            }
          }
          if (modifier) {
            ret[modifier] = optional ? null : true;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
      return ret;
    }
    function compareHotkey(object, event) {
      for (var key in object) {
        var expected = object[key];
        var actual = void 0;
        if (expected == null) {
          continue;
        }
        if (key === "key" && event.key != null) {
          actual = event.key.toLowerCase();
        } else if (key === "which") {
          actual = expected === 91 && event.which === 93 ? 91 : event.which;
        } else {
          actual = event[key];
        }
        if (actual == null && expected === false) {
          continue;
        }
        if (actual !== expected) {
          return false;
        }
      }
      return true;
    }
    function toKeyCode(name) {
      name = toKeyName(name);
      var code = CODES[name] || name.toUpperCase().charCodeAt(0);
      return code;
    }
    function toKeyName(name) {
      name = name.toLowerCase();
      name = ALIASES[name] || name;
      return name;
    }
    exports.default = isHotkey;
    exports.isHotkey = isHotkey;
    exports.isCodeHotkey = isCodeHotkey;
    exports.isKeyHotkey = isKeyHotkey2;
    exports.parseHotkey = parseHotkey;
    exports.compareHotkey = compareHotkey;
    exports.toKeyCode = toKeyCode;
    exports.toKeyName = toKeyName;
  }
});

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    init_react();
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element4 = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment4 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement4(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element4;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment4;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement4;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module) {
    "use strict";
    init_react();
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    init_react();
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    init_react();
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    init_react();
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x2) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error2;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                err.name = "Invariant Violation";
                throw err;
              }
              error2 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error2 = ex;
            }
            if (error2 && !(error2 instanceof Error)) {
              printWarning((componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error2 + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).");
            }
            if (error2 instanceof Error && !(error2.message in loggedTypeFailures)) {
              loggedTypeFailures[error2.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning("Failed " + location + " type: " + error2.message + (stack != null ? stack : ""));
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    init_react();
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x2) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x2, y3) {
        if (x2 === y3) {
          return x2 !== 0 || 1 / x2 === 1 / y3;
        } else {
          return x2 !== x2 && y3 !== y3;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate2) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3) {
                printWarning("You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.");
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate2(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate2(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."), { expectedType });
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate2(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i2 = 0; i2 < propValue.length; i2++) {
            var error2 = typeChecker(propValue, i2, componentName, location, propFullName + "[" + i2 + "]", ReactPropTypesSecret);
            if (error2 instanceof Error) {
              return error2;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function createElementTypeChecker() {
        function validate2(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function createElementTypeTypeChecker() {
        function validate2(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate2(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning("Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).");
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate2(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i2 = 0; i2 < expectedValues.length; i2++) {
            if (is(propValue, expectedValues[i2])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate2);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate2(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error2 = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error2 instanceof Error) {
                return error2;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
          var checker = arrayOfTypeCheckers[i2];
          if (typeof checker !== "function") {
            printWarning("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i2 + ".");
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate2(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i3 = 0; i3 < arrayOfTypeCheckers.length; i3++) {
            var checker2 = arrayOfTypeCheckers[i3];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate2);
      }
      function createNodeChecker() {
        function validate2(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError((componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`.");
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate2(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error2 = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error2) {
              return error2;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate2(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  "));
            }
            var error2 = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error2) {
              return error2;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    init_react();
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/file-selector/node_modules/tslib/tslib.js
var require_tslib = __commonJS({
  "node_modules/file-selector/node_modules/tslib/tslib.js"(exports, module) {
    init_react();
    var __extends2;
    var __assign3;
    var __rest2;
    var __decorate2;
    var __param2;
    var __metadata2;
    var __awaiter2;
    var __generator2;
    var __exportStar2;
    var __values2;
    var __read2;
    var __spread2;
    var __spreadArrays3;
    var __spreadArray2;
    var __await2;
    var __asyncGenerator2;
    var __asyncDelegator2;
    var __asyncValues2;
    var __makeTemplateObject2;
    var __importStar2;
    var __importDefault2;
    var __classPrivateFieldGet2;
    var __classPrivateFieldSet2;
    var __createBinding2;
    (function(factory) {
      var root = typeof globalThis === "object" ? globalThis : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module === "object" && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
      } else {
        factory(createExporter(root));
      }
      function createExporter(exports2, previous) {
        if (exports2 !== root) {
          if (typeof Object.create === "function") {
            Object.defineProperty(exports2, "__esModule", { value: true });
          } else {
            exports2.__esModule = true;
          }
        }
        return function(id, v3) {
          return exports2[id] = previous ? previous(id, v3) : v3;
        };
      }
    })(function(exporter) {
      var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b3) {
        d2.__proto__ = b3;
      } || function(d2, b3) {
        for (var p3 in b3)
          if (Object.prototype.hasOwnProperty.call(b3, p3))
            d2[p3] = b3[p3];
      };
      __extends2 = function(d2, b3) {
        if (typeof b3 !== "function" && b3 !== null)
          throw new TypeError("Class extends value " + String(b3) + " is not a constructor or null");
        extendStatics(d2, b3);
        function __() {
          this.constructor = d2;
        }
        d2.prototype = b3 === null ? Object.create(b3) : (__.prototype = b3.prototype, new __());
      };
      __assign3 = Object.assign || function(t3) {
        for (var s3, i2 = 1, n4 = arguments.length; i2 < n4; i2++) {
          s3 = arguments[i2];
          for (var p3 in s3)
            if (Object.prototype.hasOwnProperty.call(s3, p3))
              t3[p3] = s3[p3];
        }
        return t3;
      };
      __rest2 = function(s3, e2) {
        var t3 = {};
        for (var p3 in s3)
          if (Object.prototype.hasOwnProperty.call(s3, p3) && e2.indexOf(p3) < 0)
            t3[p3] = s3[p3];
        if (s3 != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i2 = 0, p3 = Object.getOwnPropertySymbols(s3); i2 < p3.length; i2++) {
            if (e2.indexOf(p3[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s3, p3[i2]))
              t3[p3[i2]] = s3[p3[i2]];
          }
        return t3;
      };
      __decorate2 = function(decorators, target, key, desc) {
        var c2 = arguments.length, r3 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r3 = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i2 = decorators.length - 1; i2 >= 0; i2--)
            if (d2 = decorators[i2])
              r3 = (c2 < 3 ? d2(r3) : c2 > 3 ? d2(target, key, r3) : d2(target, key)) || r3;
        return c2 > 3 && r3 && Object.defineProperty(target, key, r3), r3;
      };
      __param2 = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata2 = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter2 = function(thisArg, _arguments, P2, generator) {
        function adopt(value) {
          return value instanceof P2 ? value : new P2(function(resolve) {
            resolve(value);
          });
        }
        return new (P2 || (P2 = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e2) {
              reject(e2);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e2) {
              reject(e2);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      __generator2 = function(thisArg, body) {
        var _2 = { label: 0, sent: function() {
          if (t3[0] & 1)
            throw t3[1];
          return t3[1];
        }, trys: [], ops: [] }, f3, y3, t3, g3;
        return g3 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g3[Symbol.iterator] = function() {
          return this;
        }), g3;
        function verb(n4) {
          return function(v3) {
            return step([n4, v3]);
          };
        }
        function step(op) {
          if (f3)
            throw new TypeError("Generator is already executing.");
          while (_2)
            try {
              if (f3 = 1, y3 && (t3 = op[0] & 2 ? y3["return"] : op[0] ? y3["throw"] || ((t3 = y3["return"]) && t3.call(y3), 0) : y3.next) && !(t3 = t3.call(y3, op[1])).done)
                return t3;
              if (y3 = 0, t3)
                op = [op[0] & 2, t3.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t3 = op;
                  break;
                case 4:
                  _2.label++;
                  return { value: op[1], done: false };
                case 5:
                  _2.label++;
                  y3 = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _2.ops.pop();
                  _2.trys.pop();
                  continue;
                default:
                  if (!(t3 = _2.trys, t3 = t3.length > 0 && t3[t3.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _2 = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t3 || op[1] > t3[0] && op[1] < t3[3])) {
                    _2.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _2.label < t3[1]) {
                    _2.label = t3[1];
                    t3 = op;
                    break;
                  }
                  if (t3 && _2.label < t3[2]) {
                    _2.label = t3[2];
                    _2.ops.push(op);
                    break;
                  }
                  if (t3[2])
                    _2.ops.pop();
                  _2.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _2);
            } catch (e2) {
              op = [6, e2];
              y3 = 0;
            } finally {
              f3 = t3 = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      __exportStar2 = function(m2, o2) {
        for (var p3 in m2)
          if (p3 !== "default" && !Object.prototype.hasOwnProperty.call(o2, p3))
            __createBinding2(o2, m2, p3);
      };
      __createBinding2 = Object.create ? function(o2, m2, k3, k22) {
        if (k22 === void 0)
          k22 = k3;
        Object.defineProperty(o2, k22, { enumerable: true, get: function() {
          return m2[k3];
        } });
      } : function(o2, m2, k3, k22) {
        if (k22 === void 0)
          k22 = k3;
        o2[k22] = m2[k3];
      };
      __values2 = function(o2) {
        var s3 = typeof Symbol === "function" && Symbol.iterator, m2 = s3 && o2[s3], i2 = 0;
        if (m2)
          return m2.call(o2);
        if (o2 && typeof o2.length === "number")
          return {
            next: function() {
              if (o2 && i2 >= o2.length)
                o2 = void 0;
              return { value: o2 && o2[i2++], done: !o2 };
            }
          };
        throw new TypeError(s3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      __read2 = function(o2, n4) {
        var m2 = typeof Symbol === "function" && o2[Symbol.iterator];
        if (!m2)
          return o2;
        var i2 = m2.call(o2), r3, ar2 = [], e2;
        try {
          while ((n4 === void 0 || n4-- > 0) && !(r3 = i2.next()).done)
            ar2.push(r3.value);
        } catch (error2) {
          e2 = { error: error2 };
        } finally {
          try {
            if (r3 && !r3.done && (m2 = i2["return"]))
              m2.call(i2);
          } finally {
            if (e2)
              throw e2.error;
          }
        }
        return ar2;
      };
      __spread2 = function() {
        for (var ar2 = [], i2 = 0; i2 < arguments.length; i2++)
          ar2 = ar2.concat(__read2(arguments[i2]));
        return ar2;
      };
      __spreadArrays3 = function() {
        for (var s3 = 0, i2 = 0, il = arguments.length; i2 < il; i2++)
          s3 += arguments[i2].length;
        for (var r3 = Array(s3), k3 = 0, i2 = 0; i2 < il; i2++)
          for (var a2 = arguments[i2], j3 = 0, jl = a2.length; j3 < jl; j3++, k3++)
            r3[k3] = a2[j3];
        return r3;
      };
      __spreadArray2 = function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i2 = 0, l2 = from.length, ar2; i2 < l2; i2++) {
            if (ar2 || !(i2 in from)) {
              if (!ar2)
                ar2 = Array.prototype.slice.call(from, 0, i2);
              ar2[i2] = from[i2];
            }
          }
        return to.concat(ar2 || Array.prototype.slice.call(from));
      };
      __await2 = function(v3) {
        return this instanceof __await2 ? (this.v = v3, this) : new __await2(v3);
      };
      __asyncGenerator2 = function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var g3 = generator.apply(thisArg, _arguments || []), i2, q2 = [];
        return i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
          return this;
        }, i2;
        function verb(n4) {
          if (g3[n4])
            i2[n4] = function(v3) {
              return new Promise(function(a2, b3) {
                q2.push([n4, v3, a2, b3]) > 1 || resume(n4, v3);
              });
            };
        }
        function resume(n4, v3) {
          try {
            step(g3[n4](v3));
          } catch (e2) {
            settle(q2[0][3], e2);
          }
        }
        function step(r3) {
          r3.value instanceof __await2 ? Promise.resolve(r3.value.v).then(fulfill, reject) : settle(q2[0][2], r3);
        }
        function fulfill(value) {
          resume("next", value);
        }
        function reject(value) {
          resume("throw", value);
        }
        function settle(f3, v3) {
          if (f3(v3), q2.shift(), q2.length)
            resume(q2[0][0], q2[0][1]);
        }
      };
      __asyncDelegator2 = function(o2) {
        var i2, p3;
        return i2 = {}, verb("next"), verb("throw", function(e2) {
          throw e2;
        }), verb("return"), i2[Symbol.iterator] = function() {
          return this;
        }, i2;
        function verb(n4, f3) {
          i2[n4] = o2[n4] ? function(v3) {
            return (p3 = !p3) ? { value: __await2(o2[n4](v3)), done: n4 === "return" } : f3 ? f3(v3) : v3;
          } : f3;
        }
      };
      __asyncValues2 = function(o2) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m2 = o2[Symbol.asyncIterator], i2;
        return m2 ? m2.call(o2) : (o2 = typeof __values2 === "function" ? __values2(o2) : o2[Symbol.iterator](), i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
          return this;
        }, i2);
        function verb(n4) {
          i2[n4] = o2[n4] && function(v3) {
            return new Promise(function(resolve, reject) {
              v3 = o2[n4](v3), settle(resolve, reject, v3.done, v3.value);
            });
          };
        }
        function settle(resolve, reject, d2, v3) {
          Promise.resolve(v3).then(function(v5) {
            resolve({ value: v5, done: d2 });
          }, reject);
        }
      };
      __makeTemplateObject2 = function(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw });
        } else {
          cooked.raw = raw;
        }
        return cooked;
      };
      var __setModuleDefault = Object.create ? function(o2, v3) {
        Object.defineProperty(o2, "default", { enumerable: true, value: v3 });
      } : function(o2, v3) {
        o2["default"] = v3;
      };
      __importStar2 = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k3 in mod)
            if (k3 !== "default" && Object.prototype.hasOwnProperty.call(mod, k3))
              __createBinding2(result, mod, k3);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      __importDefault2 = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet2 = function(receiver, state, kind, f3) {
        if (kind === "a" && !f3)
          throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f3 : !state.has(receiver))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f3 : kind === "a" ? f3.call(receiver) : f3 ? f3.value : state.get(receiver);
      };
      __classPrivateFieldSet2 = function(receiver, state, value, kind, f3) {
        if (kind === "m")
          throw new TypeError("Private method is not writable");
        if (kind === "a" && !f3)
          throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f3 : !state.has(receiver))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f3.call(receiver, value) : f3 ? f3.value = value : state.set(receiver, value), value;
      };
      exporter("__extends", __extends2);
      exporter("__assign", __assign3);
      exporter("__rest", __rest2);
      exporter("__decorate", __decorate2);
      exporter("__param", __param2);
      exporter("__metadata", __metadata2);
      exporter("__awaiter", __awaiter2);
      exporter("__generator", __generator2);
      exporter("__exportStar", __exportStar2);
      exporter("__createBinding", __createBinding2);
      exporter("__values", __values2);
      exporter("__read", __read2);
      exporter("__spread", __spread2);
      exporter("__spreadArrays", __spreadArrays3);
      exporter("__spreadArray", __spreadArray2);
      exporter("__await", __await2);
      exporter("__asyncGenerator", __asyncGenerator2);
      exporter("__asyncDelegator", __asyncDelegator2);
      exporter("__asyncValues", __asyncValues2);
      exporter("__makeTemplateObject", __makeTemplateObject2);
      exporter("__importStar", __importStar2);
      exporter("__importDefault", __importDefault2);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet2);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet2);
    });
  }
});

// node_modules/attr-accept/dist/es/index.js
var require_es = __commonJS({
  "node_modules/attr-accept/dist/es/index.js"(exports) {
    "use strict";
    init_react();
    exports.__esModule = true;
    exports.default = function(file, acceptedFiles) {
      if (file && acceptedFiles) {
        var acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(",");
        var fileName = file.name || "";
        var mimeType = (file.type || "").toLowerCase();
        var baseMimeType = mimeType.replace(/\/.*$/, "");
        return acceptedFilesArray.some(function(type) {
          var validType = type.trim().toLowerCase();
          if (validType.charAt(0) === ".") {
            return fileName.toLowerCase().endsWith(validType);
          } else if (validType.endsWith("/*")) {
            return baseMimeType === validType.replace(/\/.*$/, "");
          }
          return mimeType === validType;
        });
      }
      return true;
    };
  }
});

// node_modules/react-modal/lib/helpers/tabbable.js
var require_tabbable = __commonJS({
  "node_modules/react-modal/lib/helpers/tabbable.js"(exports, module) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = findTabbableDescendants;
    var tabbableNode = /input|select|textarea|button|object/;
    function hidesContents(element) {
      var zeroSize = element.offsetWidth <= 0 && element.offsetHeight <= 0;
      if (zeroSize && !element.innerHTML)
        return true;
      try {
        var style = window.getComputedStyle(element);
        return zeroSize ? style.getPropertyValue("overflow") !== "visible" || element.scrollWidth <= 0 && element.scrollHeight <= 0 : style.getPropertyValue("display") == "none";
      } catch (exception) {
        console.warn("Failed to inspect element style");
        return false;
      }
    }
    function visible(element) {
      var parentElement = element;
      var rootNode = element.getRootNode && element.getRootNode();
      while (parentElement) {
        if (parentElement === document.body)
          break;
        if (rootNode && parentElement === rootNode)
          parentElement = rootNode.host.parentNode;
        if (hidesContents(parentElement))
          return false;
        parentElement = parentElement.parentNode;
      }
      return true;
    }
    function focusable(element, isTabIndexNotNaN) {
      var nodeName = element.nodeName.toLowerCase();
      var res = tabbableNode.test(nodeName) && !element.disabled || (nodeName === "a" ? element.href || isTabIndexNotNaN : isTabIndexNotNaN);
      return res && visible(element);
    }
    function tabbable(element) {
      var tabIndex = element.getAttribute("tabindex");
      if (tabIndex === null)
        tabIndex = void 0;
      var isTabIndexNaN = isNaN(tabIndex);
      return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN);
    }
    function findTabbableDescendants(element) {
      var descendants = [].slice.call(element.querySelectorAll("*"), 0).reduce(function(finished, el) {
        return finished.concat(!el.shadowRoot ? [el] : findTabbableDescendants(el.shadowRoot));
      }, []);
      return descendants.filter(tabbable);
    }
    module.exports = exports["default"];
  }
});

// node_modules/react-modal/lib/helpers/focusManager.js
var require_focusManager = __commonJS({
  "node_modules/react-modal/lib/helpers/focusManager.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.resetState = resetState;
    exports.log = log;
    exports.handleBlur = handleBlur;
    exports.handleFocus = handleFocus;
    exports.markForFocusLater = markForFocusLater;
    exports.returnFocus = returnFocus;
    exports.popWithoutFocus = popWithoutFocus;
    exports.setupScopedFocus = setupScopedFocus;
    exports.teardownScopedFocus = teardownScopedFocus;
    var _tabbable = require_tabbable();
    var _tabbable2 = _interopRequireDefault(_tabbable);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var focusLaterElements = [];
    var modalElement = null;
    var needToFocus = false;
    function resetState() {
      focusLaterElements = [];
    }
    function log() {
      if (true) {
        console.log("focusManager ----------");
        focusLaterElements.forEach(function(f3) {
          var check = f3 || {};
          console.log(check.nodeName, check.className, check.id);
        });
        console.log("end focusManager ----------");
      }
    }
    function handleBlur() {
      needToFocus = true;
    }
    function handleFocus() {
      if (needToFocus) {
        needToFocus = false;
        if (!modalElement) {
          return;
        }
        setTimeout(function() {
          if (modalElement.contains(document.activeElement)) {
            return;
          }
          var el = (0, _tabbable2.default)(modalElement)[0] || modalElement;
          el.focus();
        }, 0);
      }
    }
    function markForFocusLater() {
      focusLaterElements.push(document.activeElement);
    }
    function returnFocus() {
      var preventScroll = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
      var toFocus = null;
      try {
        if (focusLaterElements.length !== 0) {
          toFocus = focusLaterElements.pop();
          toFocus.focus({ preventScroll });
        }
        return;
      } catch (e2) {
        console.warn(["You tried to return focus to", toFocus, "but it is not in the DOM anymore"].join(" "));
      }
    }
    function popWithoutFocus() {
      focusLaterElements.length > 0 && focusLaterElements.pop();
    }
    function setupScopedFocus(element) {
      modalElement = element;
      if (window.addEventListener) {
        window.addEventListener("blur", handleBlur, false);
        document.addEventListener("focus", handleFocus, true);
      } else {
        window.attachEvent("onBlur", handleBlur);
        document.attachEvent("onFocus", handleFocus);
      }
    }
    function teardownScopedFocus() {
      modalElement = null;
      if (window.addEventListener) {
        window.removeEventListener("blur", handleBlur);
        document.removeEventListener("focus", handleFocus);
      } else {
        window.detachEvent("onBlur", handleBlur);
        document.detachEvent("onFocus", handleFocus);
      }
    }
  }
});

// node_modules/react-modal/lib/helpers/scopeTab.js
var require_scopeTab = __commonJS({
  "node_modules/react-modal/lib/helpers/scopeTab.js"(exports, module) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = scopeTab;
    var _tabbable = require_tabbable();
    var _tabbable2 = _interopRequireDefault(_tabbable);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function getActiveElement() {
      var el = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
      return el.activeElement.shadowRoot ? getActiveElement(el.activeElement.shadowRoot) : el.activeElement;
    }
    function scopeTab(node2, event) {
      var tabbable = (0, _tabbable2.default)(node2);
      if (!tabbable.length) {
        event.preventDefault();
        return;
      }
      var target = void 0;
      var shiftKey = event.shiftKey;
      var head = tabbable[0];
      var tail = tabbable[tabbable.length - 1];
      var activeElement = getActiveElement();
      if (node2 === activeElement) {
        if (!shiftKey)
          return;
        target = tail;
      }
      if (tail === activeElement && !shiftKey) {
        target = head;
      }
      if (head === activeElement && shiftKey) {
        target = tail;
      }
      if (target) {
        event.preventDefault();
        target.focus();
        return;
      }
      var checkSafari = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
      var isSafariDesktop = checkSafari != null && checkSafari[1] != "Chrome" && /\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null;
      if (!isSafariDesktop)
        return;
      var x2 = tabbable.indexOf(activeElement);
      if (x2 > -1) {
        x2 += shiftKey ? -1 : 1;
      }
      target = tabbable[x2];
      if (typeof target === "undefined") {
        event.preventDefault();
        target = shiftKey ? tail : head;
        target.focus();
        return;
      }
      event.preventDefault();
      target.focus();
    }
    module.exports = exports["default"];
  }
});

// node_modules/warning/warning.js
var require_warning = __commonJS({
  "node_modules/warning/warning.js"(exports, module) {
    "use strict";
    init_react();
    var __DEV__ = true;
    var warning = function() {
    };
    if (__DEV__) {
      printWarning = function printWarning2(format2, args) {
        var len = arguments.length;
        args = new Array(len > 1 ? len - 1 : 0);
        for (var key = 1; key < len; key++) {
          args[key - 1] = arguments[key];
        }
        var argIndex = 0;
        var message = "Warning: " + format2.replace(/%s/g, function() {
          return args[argIndex++];
        });
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x2) {
        }
      };
      warning = function(condition, format2, args) {
        var len = arguments.length;
        args = new Array(len > 2 ? len - 2 : 0);
        for (var key = 2; key < len; key++) {
          args[key - 2] = arguments[key];
        }
        if (format2 === void 0) {
          throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
        }
        if (!condition) {
          printWarning.apply(null, [format2].concat(args));
        }
      };
    }
    var printWarning;
    module.exports = warning;
  }
});

// node_modules/exenv/index.js
var require_exenv = __commonJS({
  "node_modules/exenv/index.js"(exports, module) {
    init_react();
    (function() {
      "use strict";
      var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
      var ExecutionEnvironment = {
        canUseDOM,
        canUseWorkers: typeof Worker !== "undefined",
        canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
        canUseViewport: canUseDOM && !!window.screen
      };
      if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define(function() {
          return ExecutionEnvironment;
        });
      } else if (typeof module !== "undefined" && module.exports) {
        module.exports = ExecutionEnvironment;
      } else {
        window.ExecutionEnvironment = ExecutionEnvironment;
      }
    })();
  }
});

// node_modules/react-modal/lib/helpers/safeHTMLElement.js
var require_safeHTMLElement = __commonJS({
  "node_modules/react-modal/lib/helpers/safeHTMLElement.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.canUseDOM = exports.SafeNodeList = exports.SafeHTMLCollection = void 0;
    var _exenv = require_exenv();
    var _exenv2 = _interopRequireDefault(_exenv);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var EE = _exenv2.default;
    var SafeHTMLElement = EE.canUseDOM ? window.HTMLElement : {};
    var SafeHTMLCollection = exports.SafeHTMLCollection = EE.canUseDOM ? window.HTMLCollection : {};
    var SafeNodeList = exports.SafeNodeList = EE.canUseDOM ? window.NodeList : {};
    var canUseDOM = exports.canUseDOM = EE.canUseDOM;
    exports.default = SafeHTMLElement;
  }
});

// node_modules/react-modal/lib/helpers/ariaAppHider.js
var require_ariaAppHider = __commonJS({
  "node_modules/react-modal/lib/helpers/ariaAppHider.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.resetState = resetState;
    exports.log = log;
    exports.assertNodeList = assertNodeList;
    exports.setElement = setElement;
    exports.validateElement = validateElement;
    exports.hide = hide2;
    exports.show = show;
    exports.documentNotReadyOrSSRTesting = documentNotReadyOrSSRTesting;
    var _warning = require_warning();
    var _warning2 = _interopRequireDefault(_warning);
    var _safeHTMLElement = require_safeHTMLElement();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var globalElement = null;
    function resetState() {
      if (globalElement) {
        if (globalElement.removeAttribute) {
          globalElement.removeAttribute("aria-hidden");
        } else if (globalElement.length != null) {
          globalElement.forEach(function(element) {
            return element.removeAttribute("aria-hidden");
          });
        } else {
          document.querySelectorAll(globalElement).forEach(function(element) {
            return element.removeAttribute("aria-hidden");
          });
        }
      }
      globalElement = null;
    }
    function log() {
      if (true) {
        var check = globalElement || {};
        console.log("ariaAppHider ----------");
        console.log(check.nodeName, check.className, check.id);
        console.log("end ariaAppHider ----------");
      }
    }
    function assertNodeList(nodeList, selector) {
      if (!nodeList || !nodeList.length) {
        throw new Error("react-modal: No elements were found for selector " + selector + ".");
      }
    }
    function setElement(element) {
      var useElement = element;
      if (typeof useElement === "string" && _safeHTMLElement.canUseDOM) {
        var el = document.querySelectorAll(useElement);
        assertNodeList(el, useElement);
        useElement = el;
      }
      globalElement = useElement || globalElement;
      return globalElement;
    }
    function validateElement(appElement) {
      var el = appElement || globalElement;
      if (el) {
        return Array.isArray(el) || el instanceof HTMLCollection || el instanceof NodeList ? el : [el];
      } else {
        (0, _warning2.default)(false, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" "));
        return [];
      }
    }
    function hide2(appElement) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = void 0;
      try {
        for (var _iterator = validateElement(appElement)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var el = _step.value;
          el.setAttribute("aria-hidden", "true");
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
    function show(appElement) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = void 0;
      try {
        for (var _iterator2 = validateElement(appElement)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var el = _step2.value;
          el.removeAttribute("aria-hidden");
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
    function documentNotReadyOrSSRTesting() {
      globalElement = null;
    }
  }
});

// node_modules/react-modal/lib/helpers/classList.js
var require_classList = __commonJS({
  "node_modules/react-modal/lib/helpers/classList.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.resetState = resetState;
    exports.log = log;
    var htmlClassList = {};
    var docBodyClassList = {};
    function removeClass(at, cls) {
      at.classList.remove(cls);
    }
    function resetState() {
      var htmlElement = document.getElementsByTagName("html")[0];
      for (var cls in htmlClassList) {
        removeClass(htmlElement, htmlClassList[cls]);
      }
      var body = document.body;
      for (var _cls in docBodyClassList) {
        removeClass(body, docBodyClassList[_cls]);
      }
      htmlClassList = {};
      docBodyClassList = {};
    }
    function log() {
      if (true) {
        var classes = document.getElementsByTagName("html")[0].className;
        var buffer = "Show tracked classes:\n\n";
        buffer += "<html /> (" + classes + "):\n  ";
        for (var x2 in htmlClassList) {
          buffer += "  " + x2 + " " + htmlClassList[x2] + "\n  ";
        }
        classes = document.body.className;
        buffer += "\n\ndoc.body (" + classes + "):\n  ";
        for (var _x in docBodyClassList) {
          buffer += "  " + _x + " " + docBodyClassList[_x] + "\n  ";
        }
        buffer += "\n";
        console.log(buffer);
      }
    }
    var incrementReference = function incrementReference2(poll, className) {
      if (!poll[className]) {
        poll[className] = 0;
      }
      poll[className] += 1;
      return className;
    };
    var decrementReference = function decrementReference2(poll, className) {
      if (poll[className]) {
        poll[className] -= 1;
      }
      return className;
    };
    var trackClass = function trackClass2(classListRef, poll, classes) {
      classes.forEach(function(className) {
        incrementReference(poll, className);
        classListRef.add(className);
      });
    };
    var untrackClass = function untrackClass2(classListRef, poll, classes) {
      classes.forEach(function(className) {
        decrementReference(poll, className);
        poll[className] === 0 && classListRef.remove(className);
      });
    };
    var add = exports.add = function add2(element, classString) {
      return trackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
    };
    var remove = exports.remove = function remove2(element, classString) {
      return untrackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
    };
  }
});

// node_modules/react-modal/lib/helpers/portalOpenInstances.js
var require_portalOpenInstances = __commonJS({
  "node_modules/react-modal/lib/helpers/portalOpenInstances.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.log = log;
    exports.resetState = resetState;
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var PortalOpenInstances = function PortalOpenInstances2() {
      var _this = this;
      _classCallCheck(this, PortalOpenInstances2);
      this.register = function(openInstance) {
        if (_this.openInstances.indexOf(openInstance) !== -1) {
          if (true) {
            console.warn("React-Modal: Cannot register modal instance that's already open");
          }
          return;
        }
        _this.openInstances.push(openInstance);
        _this.emit("register");
      };
      this.deregister = function(openInstance) {
        var index2 = _this.openInstances.indexOf(openInstance);
        if (index2 === -1) {
          if (true) {
            console.warn("React-Modal: Unable to deregister " + openInstance + " as it was never registered");
          }
          return;
        }
        _this.openInstances.splice(index2, 1);
        _this.emit("deregister");
      };
      this.subscribe = function(callback) {
        _this.subscribers.push(callback);
      };
      this.emit = function(eventType) {
        _this.subscribers.forEach(function(subscriber) {
          return subscriber(eventType, _this.openInstances.slice());
        });
      };
      this.openInstances = [];
      this.subscribers = [];
    };
    var portalOpenInstances = new PortalOpenInstances();
    function log() {
      console.log("portalOpenInstances ----------");
      console.log(portalOpenInstances.openInstances.length);
      portalOpenInstances.openInstances.forEach(function(p3) {
        return console.log(p3);
      });
      console.log("end portalOpenInstances ----------");
    }
    function resetState() {
      portalOpenInstances = new PortalOpenInstances();
    }
    exports.default = portalOpenInstances;
  }
});

// node_modules/react-modal/lib/helpers/bodyTrap.js
var require_bodyTrap = __commonJS({
  "node_modules/react-modal/lib/helpers/bodyTrap.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.resetState = resetState;
    exports.log = log;
    var _portalOpenInstances = require_portalOpenInstances();
    var _portalOpenInstances2 = _interopRequireDefault(_portalOpenInstances);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var before = void 0;
    var after = void 0;
    var instances = [];
    function resetState() {
      var _arr = [before, after];
      for (var _i = 0; _i < _arr.length; _i++) {
        var item = _arr[_i];
        if (!item)
          continue;
        item.parentNode && item.parentNode.removeChild(item);
      }
      before = after = null;
      instances = [];
    }
    function log() {
      console.log("bodyTrap ----------");
      console.log(instances.length);
      var _arr2 = [before, after];
      for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
        var item = _arr2[_i2];
        var check = item || {};
        console.log(check.nodeName, check.className, check.id);
      }
      console.log("edn bodyTrap ----------");
    }
    function focusContent() {
      if (instances.length === 0) {
        if (true) {
          console.warn("React-Modal: Open instances > 0 expected");
        }
        return;
      }
      instances[instances.length - 1].focusContent();
    }
    function bodyTrap(eventType, openInstances) {
      if (!before && !after) {
        before = document.createElement("div");
        before.setAttribute("data-react-modal-body-trap", "");
        before.style.position = "absolute";
        before.style.opacity = "0";
        before.setAttribute("tabindex", "0");
        before.addEventListener("focus", focusContent);
        after = before.cloneNode();
        after.addEventListener("focus", focusContent);
      }
      instances = openInstances;
      if (instances.length > 0) {
        if (document.body.firstChild !== before) {
          document.body.insertBefore(before, document.body.firstChild);
        }
        if (document.body.lastChild !== after) {
          document.body.appendChild(after);
        }
      } else {
        if (before.parentElement) {
          before.parentElement.removeChild(before);
        }
        if (after.parentElement) {
          after.parentElement.removeChild(after);
        }
      }
    }
    _portalOpenInstances2.default.subscribe(bodyTrap);
  }
});

// node_modules/react-modal/lib/components/ModalPortal.js
var require_ModalPortal = __commonJS({
  "node_modules/react-modal/lib/components/ModalPortal.js"(exports, module) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _extends = Object.assign || function(target) {
      for (var i2 = 1; i2 < arguments.length; i2++) {
        var source = arguments[i2];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i2 = 0; i2 < props.length; i2++) {
          var descriptor = props[i2];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _react = require_react();
    var _propTypes = require_prop_types();
    var _propTypes2 = _interopRequireDefault(_propTypes);
    var _focusManager = require_focusManager();
    var focusManager = _interopRequireWildcard(_focusManager);
    var _scopeTab = require_scopeTab();
    var _scopeTab2 = _interopRequireDefault(_scopeTab);
    var _ariaAppHider = require_ariaAppHider();
    var ariaAppHider = _interopRequireWildcard(_ariaAppHider);
    var _classList = require_classList();
    var classList = _interopRequireWildcard(_classList);
    var _safeHTMLElement = require_safeHTMLElement();
    var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);
    var _portalOpenInstances = require_portalOpenInstances();
    var _portalOpenInstances2 = _interopRequireDefault(_portalOpenInstances);
    require_bodyTrap();
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self2, call) {
      if (!self2) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self2;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var CLASS_NAMES = {
      overlay: "ReactModal__Overlay",
      content: "ReactModal__Content"
    };
    var TAB_KEY = 9;
    var ESC_KEY = 27;
    var ariaHiddenInstances = 0;
    var ModalPortal = function(_Component) {
      _inherits(ModalPortal2, _Component);
      function ModalPortal2(props) {
        _classCallCheck(this, ModalPortal2);
        var _this = _possibleConstructorReturn(this, (ModalPortal2.__proto__ || Object.getPrototypeOf(ModalPortal2)).call(this, props));
        _this.setOverlayRef = function(overlay) {
          _this.overlay = overlay;
          _this.props.overlayRef && _this.props.overlayRef(overlay);
        };
        _this.setContentRef = function(content) {
          _this.content = content;
          _this.props.contentRef && _this.props.contentRef(content);
        };
        _this.afterClose = function() {
          var _this$props = _this.props, appElement = _this$props.appElement, ariaHideApp = _this$props.ariaHideApp, htmlOpenClassName = _this$props.htmlOpenClassName, bodyOpenClassName = _this$props.bodyOpenClassName;
          bodyOpenClassName && classList.remove(document.body, bodyOpenClassName);
          htmlOpenClassName && classList.remove(document.getElementsByTagName("html")[0], htmlOpenClassName);
          if (ariaHideApp && ariaHiddenInstances > 0) {
            ariaHiddenInstances -= 1;
            if (ariaHiddenInstances === 0) {
              ariaAppHider.show(appElement);
            }
          }
          if (_this.props.shouldFocusAfterRender) {
            if (_this.props.shouldReturnFocusAfterClose) {
              focusManager.returnFocus(_this.props.preventScroll);
              focusManager.teardownScopedFocus();
            } else {
              focusManager.popWithoutFocus();
            }
          }
          if (_this.props.onAfterClose) {
            _this.props.onAfterClose();
          }
          _portalOpenInstances2.default.deregister(_this);
        };
        _this.open = function() {
          _this.beforeOpen();
          if (_this.state.afterOpen && _this.state.beforeClose) {
            clearTimeout(_this.closeTimer);
            _this.setState({ beforeClose: false });
          } else {
            if (_this.props.shouldFocusAfterRender) {
              focusManager.setupScopedFocus(_this.node);
              focusManager.markForFocusLater();
            }
            _this.setState({ isOpen: true }, function() {
              _this.openAnimationFrame = requestAnimationFrame(function() {
                _this.setState({ afterOpen: true });
                if (_this.props.isOpen && _this.props.onAfterOpen) {
                  _this.props.onAfterOpen({
                    overlayEl: _this.overlay,
                    contentEl: _this.content
                  });
                }
              });
            });
          }
        };
        _this.close = function() {
          if (_this.props.closeTimeoutMS > 0) {
            _this.closeWithTimeout();
          } else {
            _this.closeWithoutTimeout();
          }
        };
        _this.focusContent = function() {
          return _this.content && !_this.contentHasFocus() && _this.content.focus({ preventScroll: true });
        };
        _this.closeWithTimeout = function() {
          var closesAt = Date.now() + _this.props.closeTimeoutMS;
          _this.setState({ beforeClose: true, closesAt }, function() {
            _this.closeTimer = setTimeout(_this.closeWithoutTimeout, _this.state.closesAt - Date.now());
          });
        };
        _this.closeWithoutTimeout = function() {
          _this.setState({
            beforeClose: false,
            isOpen: false,
            afterOpen: false,
            closesAt: null
          }, _this.afterClose);
        };
        _this.handleKeyDown = function(event) {
          if (event.keyCode === TAB_KEY) {
            (0, _scopeTab2.default)(_this.content, event);
          }
          if (_this.props.shouldCloseOnEsc && event.keyCode === ESC_KEY) {
            event.stopPropagation();
            _this.requestClose(event);
          }
        };
        _this.handleOverlayOnClick = function(event) {
          if (_this.shouldClose === null) {
            _this.shouldClose = true;
          }
          if (_this.shouldClose && _this.props.shouldCloseOnOverlayClick) {
            if (_this.ownerHandlesClose()) {
              _this.requestClose(event);
            } else {
              _this.focusContent();
            }
          }
          _this.shouldClose = null;
        };
        _this.handleContentOnMouseUp = function() {
          _this.shouldClose = false;
        };
        _this.handleOverlayOnMouseDown = function(event) {
          if (!_this.props.shouldCloseOnOverlayClick && event.target == _this.overlay) {
            event.preventDefault();
          }
        };
        _this.handleContentOnClick = function() {
          _this.shouldClose = false;
        };
        _this.handleContentOnMouseDown = function() {
          _this.shouldClose = false;
        };
        _this.requestClose = function(event) {
          return _this.ownerHandlesClose() && _this.props.onRequestClose(event);
        };
        _this.ownerHandlesClose = function() {
          return _this.props.onRequestClose;
        };
        _this.shouldBeClosed = function() {
          return !_this.state.isOpen && !_this.state.beforeClose;
        };
        _this.contentHasFocus = function() {
          return document.activeElement === _this.content || _this.content.contains(document.activeElement);
        };
        _this.buildClassName = function(which, additional) {
          var classNames2 = (typeof additional === "undefined" ? "undefined" : _typeof(additional)) === "object" ? additional : {
            base: CLASS_NAMES[which],
            afterOpen: CLASS_NAMES[which] + "--after-open",
            beforeClose: CLASS_NAMES[which] + "--before-close"
          };
          var className = classNames2.base;
          if (_this.state.afterOpen) {
            className = className + " " + classNames2.afterOpen;
          }
          if (_this.state.beforeClose) {
            className = className + " " + classNames2.beforeClose;
          }
          return typeof additional === "string" && additional ? className + " " + additional : className;
        };
        _this.attributesFromObject = function(prefix, items) {
          return Object.keys(items).reduce(function(acc, name) {
            acc[prefix + "-" + name] = items[name];
            return acc;
          }, {});
        };
        _this.state = {
          afterOpen: false,
          beforeClose: false
        };
        _this.shouldClose = null;
        _this.moveFromContentToOverlay = null;
        return _this;
      }
      _createClass(ModalPortal2, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          if (this.props.isOpen) {
            this.open();
          }
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
          if (true) {
            if (prevProps.bodyOpenClassName !== this.props.bodyOpenClassName) {
              console.warn('React-Modal: "bodyOpenClassName" prop has been modified. This may cause unexpected behavior when multiple modals are open.');
            }
            if (prevProps.htmlOpenClassName !== this.props.htmlOpenClassName) {
              console.warn('React-Modal: "htmlOpenClassName" prop has been modified. This may cause unexpected behavior when multiple modals are open.');
            }
          }
          if (this.props.isOpen && !prevProps.isOpen) {
            this.open();
          } else if (!this.props.isOpen && prevProps.isOpen) {
            this.close();
          }
          if (this.props.shouldFocusAfterRender && this.state.isOpen && !prevState.isOpen) {
            this.focusContent();
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          if (this.state.isOpen) {
            this.afterClose();
          }
          clearTimeout(this.closeTimer);
          cancelAnimationFrame(this.openAnimationFrame);
        }
      }, {
        key: "beforeOpen",
        value: function beforeOpen() {
          var _props = this.props, appElement = _props.appElement, ariaHideApp = _props.ariaHideApp, htmlOpenClassName = _props.htmlOpenClassName, bodyOpenClassName = _props.bodyOpenClassName;
          bodyOpenClassName && classList.add(document.body, bodyOpenClassName);
          htmlOpenClassName && classList.add(document.getElementsByTagName("html")[0], htmlOpenClassName);
          if (ariaHideApp) {
            ariaHiddenInstances += 1;
            ariaAppHider.hide(appElement);
          }
          _portalOpenInstances2.default.register(this);
        }
      }, {
        key: "render",
        value: function render2() {
          var _props2 = this.props, id = _props2.id, className = _props2.className, overlayClassName = _props2.overlayClassName, defaultStyles = _props2.defaultStyles, children = _props2.children;
          var contentStyles = className ? {} : defaultStyles.content;
          var overlayStyles = overlayClassName ? {} : defaultStyles.overlay;
          if (this.shouldBeClosed()) {
            return null;
          }
          var overlayProps = {
            ref: this.setOverlayRef,
            className: this.buildClassName("overlay", overlayClassName),
            style: _extends({}, overlayStyles, this.props.style.overlay),
            onClick: this.handleOverlayOnClick,
            onMouseDown: this.handleOverlayOnMouseDown
          };
          var contentProps = _extends({
            id,
            ref: this.setContentRef,
            style: _extends({}, contentStyles, this.props.style.content),
            className: this.buildClassName("content", className),
            tabIndex: "-1",
            onKeyDown: this.handleKeyDown,
            onMouseDown: this.handleContentOnMouseDown,
            onMouseUp: this.handleContentOnMouseUp,
            onClick: this.handleContentOnClick,
            role: this.props.role,
            "aria-label": this.props.contentLabel
          }, this.attributesFromObject("aria", _extends({ modal: true }, this.props.aria)), this.attributesFromObject("data", this.props.data || {}), {
            "data-testid": this.props.testId
          });
          var contentElement = this.props.contentElement(contentProps, children);
          return this.props.overlayElement(overlayProps, contentElement);
        }
      }]);
      return ModalPortal2;
    }(_react.Component);
    ModalPortal.defaultProps = {
      style: {
        overlay: {},
        content: {}
      },
      defaultStyles: {}
    };
    ModalPortal.propTypes = {
      isOpen: _propTypes2.default.bool.isRequired,
      defaultStyles: _propTypes2.default.shape({
        content: _propTypes2.default.object,
        overlay: _propTypes2.default.object
      }),
      style: _propTypes2.default.shape({
        content: _propTypes2.default.object,
        overlay: _propTypes2.default.object
      }),
      className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
      overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
      bodyOpenClassName: _propTypes2.default.string,
      htmlOpenClassName: _propTypes2.default.string,
      ariaHideApp: _propTypes2.default.bool,
      appElement: _propTypes2.default.oneOfType([_propTypes2.default.instanceOf(_safeHTMLElement2.default), _propTypes2.default.instanceOf(_safeHTMLElement.SafeHTMLCollection), _propTypes2.default.instanceOf(_safeHTMLElement.SafeNodeList), _propTypes2.default.arrayOf(_propTypes2.default.instanceOf(_safeHTMLElement2.default))]),
      onAfterOpen: _propTypes2.default.func,
      onAfterClose: _propTypes2.default.func,
      onRequestClose: _propTypes2.default.func,
      closeTimeoutMS: _propTypes2.default.number,
      shouldFocusAfterRender: _propTypes2.default.bool,
      shouldCloseOnOverlayClick: _propTypes2.default.bool,
      shouldReturnFocusAfterClose: _propTypes2.default.bool,
      preventScroll: _propTypes2.default.bool,
      role: _propTypes2.default.string,
      contentLabel: _propTypes2.default.string,
      aria: _propTypes2.default.object,
      data: _propTypes2.default.object,
      children: _propTypes2.default.node,
      shouldCloseOnEsc: _propTypes2.default.bool,
      overlayRef: _propTypes2.default.func,
      contentRef: _propTypes2.default.func,
      id: _propTypes2.default.string,
      overlayElement: _propTypes2.default.func,
      contentElement: _propTypes2.default.func,
      testId: _propTypes2.default.string
    };
    exports.default = ModalPortal;
    module.exports = exports["default"];
  }
});

// node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
var react_lifecycles_compat_es_exports = {};
__export(react_lifecycles_compat_es_exports, {
  polyfill: () => polyfill
});
function componentWillMount() {
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== void 0) {
    this.setState(state);
  }
}
function componentWillReceiveProps(nextProps) {
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== void 0 ? state : null;
  }
  this.setState(updater.bind(this));
}
function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(prevProps, prevState);
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}
function polyfill(Component) {
  var prototype = Component.prototype;
  if (!prototype || !prototype.isReactComponent) {
    throw new Error("Can only polyfill class components");
  }
  if (typeof Component.getDerivedStateFromProps !== "function" && typeof prototype.getSnapshotBeforeUpdate !== "function") {
    return Component;
  }
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === "function") {
    foundWillMountName = "componentWillMount";
  } else if (typeof prototype.UNSAFE_componentWillMount === "function") {
    foundWillMountName = "UNSAFE_componentWillMount";
  }
  if (typeof prototype.componentWillReceiveProps === "function") {
    foundWillReceivePropsName = "componentWillReceiveProps";
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === "function") {
    foundWillReceivePropsName = "UNSAFE_componentWillReceiveProps";
  }
  if (typeof prototype.componentWillUpdate === "function") {
    foundWillUpdateName = "componentWillUpdate";
  } else if (typeof prototype.UNSAFE_componentWillUpdate === "function") {
    foundWillUpdateName = "UNSAFE_componentWillUpdate";
  }
  if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
    var componentName = Component.displayName || Component.name;
    var newApiName = typeof Component.getDerivedStateFromProps === "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
    throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" + componentName + " uses " + newApiName + " but also contains the following legacy lifecycles:" + (foundWillMountName !== null ? "\n  " + foundWillMountName : "") + (foundWillReceivePropsName !== null ? "\n  " + foundWillReceivePropsName : "") + (foundWillUpdateName !== null ? "\n  " + foundWillUpdateName : "") + "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks");
  }
  if (typeof Component.getDerivedStateFromProps === "function") {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }
  if (typeof prototype.getSnapshotBeforeUpdate === "function") {
    if (typeof prototype.componentDidUpdate !== "function") {
      throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");
    }
    prototype.componentWillUpdate = componentWillUpdate;
    var componentDidUpdate = prototype.componentDidUpdate;
    prototype.componentDidUpdate = function componentDidUpdatePolyfill(prevProps, prevState, maybeSnapshot) {
      var snapshot = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : maybeSnapshot;
      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }
  return Component;
}
var init_react_lifecycles_compat_es = __esm({
  "node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js"() {
    init_react();
    componentWillMount.__suppressDeprecationWarning = true;
    componentWillReceiveProps.__suppressDeprecationWarning = true;
    componentWillUpdate.__suppressDeprecationWarning = true;
  }
});

// node_modules/react-modal/lib/components/Modal.js
var require_Modal = __commonJS({
  "node_modules/react-modal/lib/components/Modal.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.bodyOpenClassName = exports.portalClassName = void 0;
    var _extends = Object.assign || function(target) {
      for (var i2 = 1; i2 < arguments.length; i2++) {
        var source = arguments[i2];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i2 = 0; i2 < props.length; i2++) {
          var descriptor = props[i2];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _react = require_react();
    var _react2 = _interopRequireDefault(_react);
    var _reactDom = require_react_dom();
    var _reactDom2 = _interopRequireDefault(_reactDom);
    var _propTypes = require_prop_types();
    var _propTypes2 = _interopRequireDefault(_propTypes);
    var _ModalPortal = require_ModalPortal();
    var _ModalPortal2 = _interopRequireDefault(_ModalPortal);
    var _ariaAppHider = require_ariaAppHider();
    var ariaAppHider = _interopRequireWildcard(_ariaAppHider);
    var _safeHTMLElement = require_safeHTMLElement();
    var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);
    var _reactLifecyclesCompat = (init_react_lifecycles_compat_es(), __toCommonJS(react_lifecycles_compat_es_exports));
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self2, call) {
      if (!self2) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self2;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var portalClassName = exports.portalClassName = "ReactModalPortal";
    var bodyOpenClassName = exports.bodyOpenClassName = "ReactModal__Body--open";
    var isReact16 = _safeHTMLElement.canUseDOM && _reactDom2.default.createPortal !== void 0;
    var createHTMLElement = function createHTMLElement2(name) {
      return document.createElement(name);
    };
    var getCreatePortal = function getCreatePortal2() {
      return isReact16 ? _reactDom2.default.createPortal : _reactDom2.default.unstable_renderSubtreeIntoContainer;
    };
    function getParentElement(parentSelector) {
      return parentSelector();
    }
    var Modal = function(_Component) {
      _inherits(Modal2, _Component);
      function Modal2() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, Modal2);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Modal2.__proto__ || Object.getPrototypeOf(Modal2)).call.apply(_ref, [this].concat(args))), _this), _this.removePortal = function() {
          !isReact16 && _reactDom2.default.unmountComponentAtNode(_this.node);
          var parent = getParentElement(_this.props.parentSelector);
          if (parent && parent.contains(_this.node)) {
            parent.removeChild(_this.node);
          } else {
            console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.');
          }
        }, _this.portalRef = function(ref) {
          _this.portal = ref;
        }, _this.renderPortal = function(props) {
          var createPortal2 = getCreatePortal();
          var portal = createPortal2(_this, _react2.default.createElement(_ModalPortal2.default, _extends({ defaultStyles: Modal2.defaultStyles }, props)), _this.node);
          _this.portalRef(portal);
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }
      _createClass(Modal2, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          if (!_safeHTMLElement.canUseDOM)
            return;
          if (!isReact16) {
            this.node = createHTMLElement("div");
          }
          this.node.className = this.props.portalClassName;
          var parent = getParentElement(this.props.parentSelector);
          parent.appendChild(this.node);
          !isReact16 && this.renderPortal(this.props);
        }
      }, {
        key: "getSnapshotBeforeUpdate",
        value: function getSnapshotBeforeUpdate(prevProps) {
          var prevParent = getParentElement(prevProps.parentSelector);
          var nextParent = getParentElement(this.props.parentSelector);
          return { prevParent, nextParent };
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, _2, snapshot) {
          if (!_safeHTMLElement.canUseDOM)
            return;
          var _props = this.props, isOpen = _props.isOpen, portalClassName2 = _props.portalClassName;
          if (prevProps.portalClassName !== portalClassName2) {
            this.node.className = portalClassName2;
          }
          var prevParent = snapshot.prevParent, nextParent = snapshot.nextParent;
          if (nextParent !== prevParent) {
            prevParent.removeChild(this.node);
            nextParent.appendChild(this.node);
          }
          if (!prevProps.isOpen && !isOpen)
            return;
          !isReact16 && this.renderPortal(this.props);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          if (!_safeHTMLElement.canUseDOM || !this.node || !this.portal)
            return;
          var state = this.portal.state;
          var now = Date.now();
          var closesAt = state.isOpen && this.props.closeTimeoutMS && (state.closesAt || now + this.props.closeTimeoutMS);
          if (closesAt) {
            if (!state.beforeClose) {
              this.portal.closeWithTimeout();
            }
            setTimeout(this.removePortal, closesAt - now);
          } else {
            this.removePortal();
          }
        }
      }, {
        key: "render",
        value: function render2() {
          if (!_safeHTMLElement.canUseDOM || !isReact16) {
            return null;
          }
          if (!this.node && isReact16) {
            this.node = createHTMLElement("div");
          }
          var createPortal2 = getCreatePortal();
          return createPortal2(_react2.default.createElement(_ModalPortal2.default, _extends({
            ref: this.portalRef,
            defaultStyles: Modal2.defaultStyles
          }, this.props)), this.node);
        }
      }], [{
        key: "setAppElement",
        value: function setAppElement(element) {
          ariaAppHider.setElement(element);
        }
      }]);
      return Modal2;
    }(_react.Component);
    Modal.propTypes = {
      isOpen: _propTypes2.default.bool.isRequired,
      style: _propTypes2.default.shape({
        content: _propTypes2.default.object,
        overlay: _propTypes2.default.object
      }),
      portalClassName: _propTypes2.default.string,
      bodyOpenClassName: _propTypes2.default.string,
      htmlOpenClassName: _propTypes2.default.string,
      className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
        base: _propTypes2.default.string.isRequired,
        afterOpen: _propTypes2.default.string.isRequired,
        beforeClose: _propTypes2.default.string.isRequired
      })]),
      overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
        base: _propTypes2.default.string.isRequired,
        afterOpen: _propTypes2.default.string.isRequired,
        beforeClose: _propTypes2.default.string.isRequired
      })]),
      appElement: _propTypes2.default.oneOfType([_propTypes2.default.instanceOf(_safeHTMLElement2.default), _propTypes2.default.instanceOf(_safeHTMLElement.SafeHTMLCollection), _propTypes2.default.instanceOf(_safeHTMLElement.SafeNodeList), _propTypes2.default.arrayOf(_propTypes2.default.instanceOf(_safeHTMLElement2.default))]),
      onAfterOpen: _propTypes2.default.func,
      onRequestClose: _propTypes2.default.func,
      closeTimeoutMS: _propTypes2.default.number,
      ariaHideApp: _propTypes2.default.bool,
      shouldFocusAfterRender: _propTypes2.default.bool,
      shouldCloseOnOverlayClick: _propTypes2.default.bool,
      shouldReturnFocusAfterClose: _propTypes2.default.bool,
      preventScroll: _propTypes2.default.bool,
      parentSelector: _propTypes2.default.func,
      aria: _propTypes2.default.object,
      data: _propTypes2.default.object,
      role: _propTypes2.default.string,
      contentLabel: _propTypes2.default.string,
      shouldCloseOnEsc: _propTypes2.default.bool,
      overlayRef: _propTypes2.default.func,
      contentRef: _propTypes2.default.func,
      id: _propTypes2.default.string,
      overlayElement: _propTypes2.default.func,
      contentElement: _propTypes2.default.func
    };
    Modal.defaultProps = {
      isOpen: false,
      portalClassName,
      bodyOpenClassName,
      role: "dialog",
      ariaHideApp: true,
      closeTimeoutMS: 0,
      shouldFocusAfterRender: true,
      shouldCloseOnEsc: true,
      shouldCloseOnOverlayClick: true,
      shouldReturnFocusAfterClose: true,
      preventScroll: false,
      parentSelector: function parentSelector() {
        return document.body;
      },
      overlayElement: function overlayElement(props, contentEl) {
        return _react2.default.createElement("div", props, contentEl);
      },
      contentElement: function contentElement(props, children) {
        return _react2.default.createElement("div", props, children);
      }
    };
    Modal.defaultStyles = {
      overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(255, 255, 255, 0.75)"
      },
      content: {
        position: "absolute",
        top: "40px",
        left: "40px",
        right: "40px",
        bottom: "40px",
        border: "1px solid #ccc",
        background: "#fff",
        overflow: "auto",
        WebkitOverflowScrolling: "touch",
        borderRadius: "4px",
        outline: "none",
        padding: "20px"
      }
    };
    (0, _reactLifecyclesCompat.polyfill)(Modal);
    if (true) {
      Modal.setCreateHTMLElement = function(fn5) {
        return createHTMLElement = fn5;
      };
    }
    exports.default = Modal;
  }
});

// node_modules/react-modal/lib/index.js
var require_lib3 = __commonJS({
  "node_modules/react-modal/lib/index.js"(exports, module) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _Modal = require_Modal();
    var _Modal2 = _interopRequireDefault(_Modal);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = _Modal2.default;
    module.exports = exports["default"];
  }
});

// node_modules/lodash.debounce/index.js
var require_lodash = __commonJS({
  "node_modules/lodash.debounce/index.js"(exports, module) {
    init_react();
    var FUNC_ERROR_TEXT = "Expected a function";
    var NAN = 0 / 0;
    var symbolTag = "[object Symbol]";
    var reTrim = /^\s+|\s+$/g;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    var freeGlobal = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    var nativeMax = Math.max;
    var nativeMin = Math.min;
    var now = function() {
      return root.Date.now();
    };
    function debounce4(func2, wait, options) {
      var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
      if (typeof func2 != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject3(options)) {
        leading = !!options.leading;
        maxing = "maxWait" in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = void 0;
        lastInvokeTime = time;
        result = func2.apply(thisArg, args);
        return result;
      }
      function leadingEdge(time) {
        lastInvokeTime = time;
        timerId = setTimeout(timerExpired, wait);
        return leading ? invokeFunc(time) : result;
      }
      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result2 = wait - timeSinceLastCall;
        return maxing ? nativeMin(result2, maxWait - timeSinceLastInvoke) : result2;
      }
      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
      }
      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        timerId = setTimeout(timerExpired, remainingWait(time));
      }
      function trailingEdge(time) {
        timerId = void 0;
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = void 0;
        return result;
      }
      function cancel() {
        if (timerId !== void 0) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = void 0;
      }
      function flush() {
        return timerId === void 0 ? result : trailingEdge(now());
      }
      function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
          if (timerId === void 0) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === void 0) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }
    function isObject3(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject3(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject3(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, "");
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module.exports = debounce4;
  }
});

// node_modules/toggle-selection/index.js
var require_toggle_selection = __commonJS({
  "node_modules/toggle-selection/index.js"(exports, module) {
    init_react();
    module.exports = function() {
      var selection = document.getSelection();
      if (!selection.rangeCount) {
        return function() {
        };
      }
      var active = document.activeElement;
      var ranges = [];
      for (var i2 = 0; i2 < selection.rangeCount; i2++) {
        ranges.push(selection.getRangeAt(i2));
      }
      switch (active.tagName.toUpperCase()) {
        case "INPUT":
        case "TEXTAREA":
          active.blur();
          break;
        default:
          active = null;
          break;
      }
      selection.removeAllRanges();
      return function() {
        selection.type === "Caret" && selection.removeAllRanges();
        if (!selection.rangeCount) {
          ranges.forEach(function(range) {
            selection.addRange(range);
          });
        }
        active && active.focus();
      };
    };
  }
});

// node_modules/copy-to-clipboard/index.js
var require_copy_to_clipboard = __commonJS({
  "node_modules/copy-to-clipboard/index.js"(exports, module) {
    "use strict";
    init_react();
    var deselectCurrent = require_toggle_selection();
    var clipboardToIE11Formatting = {
      "text/plain": "Text",
      "text/html": "Url",
      "default": "Text"
    };
    var defaultMessage = "Copy to clipboard: #{key}, Enter";
    function format2(message) {
      var copyKey = (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") + "+C";
      return message.replace(/#{\s*key\s*}/g, copyKey);
    }
    function copy(text, options) {
      var debug, message, reselectPrevious, range, selection, mark, success2 = false;
      if (!options) {
        options = {};
      }
      debug = options.debug || false;
      try {
        reselectPrevious = deselectCurrent();
        range = document.createRange();
        selection = document.getSelection();
        mark = document.createElement("span");
        mark.textContent = text;
        mark.style.all = "unset";
        mark.style.position = "fixed";
        mark.style.top = 0;
        mark.style.clip = "rect(0, 0, 0, 0)";
        mark.style.whiteSpace = "pre";
        mark.style.webkitUserSelect = "text";
        mark.style.MozUserSelect = "text";
        mark.style.msUserSelect = "text";
        mark.style.userSelect = "text";
        mark.addEventListener("copy", function(e2) {
          e2.stopPropagation();
          if (options.format) {
            e2.preventDefault();
            if (typeof e2.clipboardData === "undefined") {
              debug && console.warn("unable to use e.clipboardData");
              debug && console.warn("trying IE specific stuff");
              window.clipboardData.clearData();
              var format3 = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"];
              window.clipboardData.setData(format3, text);
            } else {
              e2.clipboardData.clearData();
              e2.clipboardData.setData(options.format, text);
            }
          }
          if (options.onCopy) {
            e2.preventDefault();
            options.onCopy(e2.clipboardData);
          }
        });
        document.body.appendChild(mark);
        range.selectNodeContents(mark);
        selection.addRange(range);
        var successful = document.execCommand("copy");
        if (!successful) {
          throw new Error("copy command was unsuccessful");
        }
        success2 = true;
      } catch (err) {
        debug && console.error("unable to copy using execCommand: ", err);
        debug && console.warn("trying IE specific stuff");
        try {
          window.clipboardData.setData(options.format || "text", text);
          options.onCopy && options.onCopy(window.clipboardData);
          success2 = true;
        } catch (err2) {
          debug && console.error("unable to copy using clipboardData: ", err2);
          debug && console.error("falling back to prompt");
          message = format2("message" in options ? options.message : defaultMessage);
          window.prompt(message, text);
        }
      } finally {
        if (selection) {
          if (typeof selection.removeRange == "function") {
            selection.removeRange(range);
          } else {
            selection.removeAllRanges();
          }
        }
        if (mark) {
          document.body.removeChild(mark);
        }
        reselectPrevious();
      }
      return success2;
    }
    module.exports = copy;
  }
});

// node_modules/react-copy-to-clipboard/lib/Component.js
var require_Component = __commonJS({
  "node_modules/react-copy-to-clipboard/lib/Component.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CopyToClipboard = void 0;
    var _react = _interopRequireDefault(require_react());
    var _copyToClipboard = _interopRequireDefault(require_copy_to_clipboard());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _typeof(obj) {
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    function ownKeys5(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly)
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread5(target) {
      for (var i2 = 1; i2 < arguments.length; i2++) {
        var source = arguments[i2] != null ? arguments[i2] : {};
        if (i2 % 2) {
          ownKeys5(source, true).forEach(function(key) {
            _defineProperty6(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys5(source).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _objectWithoutProperties5(source, excluded) {
      if (source == null)
        return {};
      var target = _objectWithoutPropertiesLoose6(source, excluded);
      var key, i2;
      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
          key = sourceSymbolKeys[i2];
          if (excluded.indexOf(key) >= 0)
            continue;
          if (!Object.prototype.propertyIsEnumerable.call(source, key))
            continue;
          target[key] = source[key];
        }
      }
      return target;
    }
    function _objectWithoutPropertiesLoose6(source, excluded) {
      if (source == null)
        return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i2;
      for (i2 = 0; i2 < sourceKeys.length; i2++) {
        key = sourceKeys[i2];
        if (excluded.indexOf(key) >= 0)
          continue;
        target[key] = source[key];
      }
      return target;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i2 = 0; i2 < props.length; i2++) {
        var descriptor = props[i2];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _possibleConstructorReturn(self2, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self2);
    }
    function _getPrototypeOf(o2) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o3) {
        return o3.__proto__ || Object.getPrototypeOf(o3);
      };
      return _getPrototypeOf(o2);
    }
    function _assertThisInitialized(self2) {
      if (self2 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self2;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o2, p3) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o3, p4) {
        o3.__proto__ = p4;
        return o3;
      };
      return _setPrototypeOf(o2, p3);
    }
    function _defineProperty6(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var CopyToClipboard = /* @__PURE__ */ function(_React$PureComponent) {
      _inherits(CopyToClipboard2, _React$PureComponent);
      function CopyToClipboard2() {
        var _getPrototypeOf2;
        var _this;
        _classCallCheck(this, CopyToClipboard2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CopyToClipboard2)).call.apply(_getPrototypeOf2, [this].concat(args)));
        _defineProperty6(_assertThisInitialized(_this), "onClick", function(event) {
          var _this$props = _this.props, text = _this$props.text, onCopy = _this$props.onCopy, children = _this$props.children, options = _this$props.options;
          var elem = _react["default"].Children.only(children);
          var result = (0, _copyToClipboard["default"])(text, options);
          if (onCopy) {
            onCopy(text, result);
          }
          if (elem && elem.props && typeof elem.props.onClick === "function") {
            elem.props.onClick(event);
          }
        });
        return _this;
      }
      _createClass(CopyToClipboard2, [{
        key: "render",
        value: function render2() {
          var _this$props2 = this.props, _text = _this$props2.text, _onCopy = _this$props2.onCopy, _options = _this$props2.options, children = _this$props2.children, props = _objectWithoutProperties5(_this$props2, ["text", "onCopy", "options", "children"]);
          var elem = _react["default"].Children.only(children);
          return _react["default"].cloneElement(elem, _objectSpread5({}, props, {
            onClick: this.onClick
          }));
        }
      }]);
      return CopyToClipboard2;
    }(_react["default"].PureComponent);
    exports.CopyToClipboard = CopyToClipboard;
    _defineProperty6(CopyToClipboard, "defaultProps", {
      onCopy: void 0,
      options: void 0
    });
  }
});

// node_modules/react-copy-to-clipboard/lib/index.js
var require_lib4 = __commonJS({
  "node_modules/react-copy-to-clipboard/lib/index.js"(exports, module) {
    "use strict";
    init_react();
    var _require = require_Component();
    var CopyToClipboard = _require.CopyToClipboard;
    CopyToClipboard.CopyToClipboard = CopyToClipboard;
    module.exports = CopyToClipboard;
  }
});

// node_modules/react-error-boundary/dist/react-error-boundary.umd.js
var require_react_error_boundary_umd = __commonJS({
  "node_modules/react-error-boundary/dist/react-error-boundary.umd.js"(exports, module) {
    init_react();
    (function(global2, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require_react()) : typeof define === "function" && define.amd ? define(["exports", "react"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.ReactErrorBoundary = {}, global2.React));
    })(exports, function(exports2, React8) {
      "use strict";
      function _interopNamespace(e2) {
        if (e2 && e2.__esModule)
          return e2;
        var n4 = /* @__PURE__ */ Object.create(null);
        if (e2) {
          Object.keys(e2).forEach(function(k3) {
            if (k3 !== "default") {
              var d2 = Object.getOwnPropertyDescriptor(e2, k3);
              Object.defineProperty(n4, k3, d2.get ? d2 : {
                enumerable: true,
                get: function() {
                  return e2[k3];
                }
              });
            }
          });
        }
        n4["default"] = e2;
        return Object.freeze(n4);
      }
      var React__namespace = /* @__PURE__ */ _interopNamespace(React8);
      function _setPrototypeOf(o2, p3) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o3, p4) {
          o3.__proto__ = p4;
          return o3;
        };
        return _setPrototypeOf(o2, p3);
      }
      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        _setPrototypeOf(subClass, superClass);
      }
      var changedArray = function changedArray2(a2, b3) {
        if (a2 === void 0) {
          a2 = [];
        }
        if (b3 === void 0) {
          b3 = [];
        }
        return a2.length !== b3.length || a2.some(function(item, index2) {
          return !Object.is(item, b3[index2]);
        });
      };
      var initialState2 = {
        error: null
      };
      var ErrorBoundary = /* @__PURE__ */ function(_React$Component) {
        _inheritsLoose(ErrorBoundary2, _React$Component);
        function ErrorBoundary2() {
          var _this;
          for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
            _args[_key] = arguments[_key];
          }
          _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;
          _this.state = initialState2;
          _this.resetErrorBoundary = function() {
            var _this$props;
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }
            _this.props.onReset == null ? void 0 : (_this$props = _this.props).onReset.apply(_this$props, args);
            _this.reset();
          };
          return _this;
        }
        ErrorBoundary2.getDerivedStateFromError = function getDerivedStateFromError(error2) {
          return {
            error: error2
          };
        };
        var _proto = ErrorBoundary2.prototype;
        _proto.reset = function reset() {
          this.setState(initialState2);
        };
        _proto.componentDidCatch = function componentDidCatch(error2, info2) {
          var _this$props$onError, _this$props2;
          (_this$props$onError = (_this$props2 = this.props).onError) == null ? void 0 : _this$props$onError.call(_this$props2, error2, info2);
        };
        _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
          var error2 = this.state.error;
          var resetKeys = this.props.resetKeys;
          if (error2 !== null && prevState.error !== null && changedArray(prevProps.resetKeys, resetKeys)) {
            var _this$props$onResetKe, _this$props3;
            (_this$props$onResetKe = (_this$props3 = this.props).onResetKeysChange) == null ? void 0 : _this$props$onResetKe.call(_this$props3, prevProps.resetKeys, resetKeys);
            this.reset();
          }
        };
        _proto.render = function render2() {
          var error2 = this.state.error;
          var _this$props4 = this.props, fallbackRender = _this$props4.fallbackRender, FallbackComponent = _this$props4.FallbackComponent, fallback = _this$props4.fallback;
          if (error2 !== null) {
            var _props = {
              error: error2,
              resetErrorBoundary: this.resetErrorBoundary
            };
            if (/* @__PURE__ */ React__namespace.isValidElement(fallback)) {
              return fallback;
            } else if (typeof fallbackRender === "function") {
              return fallbackRender(_props);
            } else if (FallbackComponent) {
              return /* @__PURE__ */ React__namespace.createElement(FallbackComponent, _props);
            } else {
              throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop");
            }
          }
          return this.props.children;
        };
        return ErrorBoundary2;
      }(React__namespace.Component);
      function withErrorBoundary(Component, errorBoundaryProps) {
        var Wrapped = function Wrapped2(props) {
          return /* @__PURE__ */ React__namespace.createElement(ErrorBoundary, errorBoundaryProps, /* @__PURE__ */ React__namespace.createElement(Component, props));
        };
        var name = Component.displayName || Component.name || "Unknown";
        Wrapped.displayName = "withErrorBoundary(" + name + ")";
        return Wrapped;
      }
      function useErrorHandler(givenError) {
        var _React$useState = React__namespace.useState(null), error2 = _React$useState[0], setError = _React$useState[1];
        if (givenError != null)
          throw givenError;
        if (error2 != null)
          throw error2;
        return setError;
      }
      exports2.ErrorBoundary = ErrorBoundary;
      exports2.useErrorHandler = useErrorHandler;
      exports2.withErrorBoundary = withErrorBoundary;
      Object.defineProperty(exports2, "__esModule", { value: true });
    });
  }
});

// node_modules/color-name/index.js
var require_color_name = __commonJS({
  "node_modules/color-name/index.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = {
      "aliceblue": [240, 248, 255],
      "antiquewhite": [250, 235, 215],
      "aqua": [0, 255, 255],
      "aquamarine": [127, 255, 212],
      "azure": [240, 255, 255],
      "beige": [245, 245, 220],
      "bisque": [255, 228, 196],
      "black": [0, 0, 0],
      "blanchedalmond": [255, 235, 205],
      "blue": [0, 0, 255],
      "blueviolet": [138, 43, 226],
      "brown": [165, 42, 42],
      "burlywood": [222, 184, 135],
      "cadetblue": [95, 158, 160],
      "chartreuse": [127, 255, 0],
      "chocolate": [210, 105, 30],
      "coral": [255, 127, 80],
      "cornflowerblue": [100, 149, 237],
      "cornsilk": [255, 248, 220],
      "crimson": [220, 20, 60],
      "cyan": [0, 255, 255],
      "darkblue": [0, 0, 139],
      "darkcyan": [0, 139, 139],
      "darkgoldenrod": [184, 134, 11],
      "darkgray": [169, 169, 169],
      "darkgreen": [0, 100, 0],
      "darkgrey": [169, 169, 169],
      "darkkhaki": [189, 183, 107],
      "darkmagenta": [139, 0, 139],
      "darkolivegreen": [85, 107, 47],
      "darkorange": [255, 140, 0],
      "darkorchid": [153, 50, 204],
      "darkred": [139, 0, 0],
      "darksalmon": [233, 150, 122],
      "darkseagreen": [143, 188, 143],
      "darkslateblue": [72, 61, 139],
      "darkslategray": [47, 79, 79],
      "darkslategrey": [47, 79, 79],
      "darkturquoise": [0, 206, 209],
      "darkviolet": [148, 0, 211],
      "deeppink": [255, 20, 147],
      "deepskyblue": [0, 191, 255],
      "dimgray": [105, 105, 105],
      "dimgrey": [105, 105, 105],
      "dodgerblue": [30, 144, 255],
      "firebrick": [178, 34, 34],
      "floralwhite": [255, 250, 240],
      "forestgreen": [34, 139, 34],
      "fuchsia": [255, 0, 255],
      "gainsboro": [220, 220, 220],
      "ghostwhite": [248, 248, 255],
      "gold": [255, 215, 0],
      "goldenrod": [218, 165, 32],
      "gray": [128, 128, 128],
      "green": [0, 128, 0],
      "greenyellow": [173, 255, 47],
      "grey": [128, 128, 128],
      "honeydew": [240, 255, 240],
      "hotpink": [255, 105, 180],
      "indianred": [205, 92, 92],
      "indigo": [75, 0, 130],
      "ivory": [255, 255, 240],
      "khaki": [240, 230, 140],
      "lavender": [230, 230, 250],
      "lavenderblush": [255, 240, 245],
      "lawngreen": [124, 252, 0],
      "lemonchiffon": [255, 250, 205],
      "lightblue": [173, 216, 230],
      "lightcoral": [240, 128, 128],
      "lightcyan": [224, 255, 255],
      "lightgoldenrodyellow": [250, 250, 210],
      "lightgray": [211, 211, 211],
      "lightgreen": [144, 238, 144],
      "lightgrey": [211, 211, 211],
      "lightpink": [255, 182, 193],
      "lightsalmon": [255, 160, 122],
      "lightseagreen": [32, 178, 170],
      "lightskyblue": [135, 206, 250],
      "lightslategray": [119, 136, 153],
      "lightslategrey": [119, 136, 153],
      "lightsteelblue": [176, 196, 222],
      "lightyellow": [255, 255, 224],
      "lime": [0, 255, 0],
      "limegreen": [50, 205, 50],
      "linen": [250, 240, 230],
      "magenta": [255, 0, 255],
      "maroon": [128, 0, 0],
      "mediumaquamarine": [102, 205, 170],
      "mediumblue": [0, 0, 205],
      "mediumorchid": [186, 85, 211],
      "mediumpurple": [147, 112, 219],
      "mediumseagreen": [60, 179, 113],
      "mediumslateblue": [123, 104, 238],
      "mediumspringgreen": [0, 250, 154],
      "mediumturquoise": [72, 209, 204],
      "mediumvioletred": [199, 21, 133],
      "midnightblue": [25, 25, 112],
      "mintcream": [245, 255, 250],
      "mistyrose": [255, 228, 225],
      "moccasin": [255, 228, 181],
      "navajowhite": [255, 222, 173],
      "navy": [0, 0, 128],
      "oldlace": [253, 245, 230],
      "olive": [128, 128, 0],
      "olivedrab": [107, 142, 35],
      "orange": [255, 165, 0],
      "orangered": [255, 69, 0],
      "orchid": [218, 112, 214],
      "palegoldenrod": [238, 232, 170],
      "palegreen": [152, 251, 152],
      "paleturquoise": [175, 238, 238],
      "palevioletred": [219, 112, 147],
      "papayawhip": [255, 239, 213],
      "peachpuff": [255, 218, 185],
      "peru": [205, 133, 63],
      "pink": [255, 192, 203],
      "plum": [221, 160, 221],
      "powderblue": [176, 224, 230],
      "purple": [128, 0, 128],
      "rebeccapurple": [102, 51, 153],
      "red": [255, 0, 0],
      "rosybrown": [188, 143, 143],
      "royalblue": [65, 105, 225],
      "saddlebrown": [139, 69, 19],
      "salmon": [250, 128, 114],
      "sandybrown": [244, 164, 96],
      "seagreen": [46, 139, 87],
      "seashell": [255, 245, 238],
      "sienna": [160, 82, 45],
      "silver": [192, 192, 192],
      "skyblue": [135, 206, 235],
      "slateblue": [106, 90, 205],
      "slategray": [112, 128, 144],
      "slategrey": [112, 128, 144],
      "snow": [255, 250, 250],
      "springgreen": [0, 255, 127],
      "steelblue": [70, 130, 180],
      "tan": [210, 180, 140],
      "teal": [0, 128, 128],
      "thistle": [216, 191, 216],
      "tomato": [255, 99, 71],
      "turquoise": [64, 224, 208],
      "violet": [238, 130, 238],
      "wheat": [245, 222, 179],
      "white": [255, 255, 255],
      "whitesmoke": [245, 245, 245],
      "yellow": [255, 255, 0],
      "yellowgreen": [154, 205, 50]
    };
  }
});

// node_modules/simple-swizzle/node_modules/is-arrayish/index.js
var require_is_arrayish = __commonJS({
  "node_modules/simple-swizzle/node_modules/is-arrayish/index.js"(exports, module) {
    init_react();
    module.exports = function isArrayish(obj) {
      if (!obj || typeof obj === "string") {
        return false;
      }
      return obj instanceof Array || Array.isArray(obj) || obj.length >= 0 && (obj.splice instanceof Function || Object.getOwnPropertyDescriptor(obj, obj.length - 1) && obj.constructor.name !== "String");
    };
  }
});

// node_modules/simple-swizzle/index.js
var require_simple_swizzle = __commonJS({
  "node_modules/simple-swizzle/index.js"(exports, module) {
    "use strict";
    init_react();
    var isArrayish = require_is_arrayish();
    var concat = Array.prototype.concat;
    var slice = Array.prototype.slice;
    var swizzle = module.exports = function swizzle2(args) {
      var results = [];
      for (var i2 = 0, len = args.length; i2 < len; i2++) {
        var arg = args[i2];
        if (isArrayish(arg)) {
          results = concat.call(results, slice.call(arg));
        } else {
          results.push(arg);
        }
      }
      return results;
    };
    swizzle.wrap = function(fn5) {
      return function() {
        return fn5(swizzle(arguments));
      };
    };
  }
});

// node_modules/color-string/index.js
var require_color_string = __commonJS({
  "node_modules/color-string/index.js"(exports, module) {
    init_react();
    var colorNames = require_color_name();
    var swizzle = require_simple_swizzle();
    var hasOwnProperty2 = Object.hasOwnProperty;
    var reverseNames = {};
    for (name in colorNames) {
      if (hasOwnProperty2.call(colorNames, name)) {
        reverseNames[colorNames[name]] = name;
      }
    }
    var name;
    var cs = module.exports = {
      to: {},
      get: {}
    };
    cs.get = function(string2) {
      var prefix = string2.substring(0, 3).toLowerCase();
      var val;
      var model;
      switch (prefix) {
        case "hsl":
          val = cs.get.hsl(string2);
          model = "hsl";
          break;
        case "hwb":
          val = cs.get.hwb(string2);
          model = "hwb";
          break;
        default:
          val = cs.get.rgb(string2);
          model = "rgb";
          break;
      }
      if (!val) {
        return null;
      }
      return { model, value: val };
    };
    cs.get.rgb = function(string2) {
      if (!string2) {
        return null;
      }
      var abbr = /^#([a-f0-9]{3,4})$/i;
      var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
      var rgba = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
      var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
      var keyword = /^(\w+)$/;
      var rgb = [0, 0, 0, 1];
      var match;
      var i2;
      var hexAlpha;
      if (match = string2.match(hex)) {
        hexAlpha = match[2];
        match = match[1];
        for (i2 = 0; i2 < 3; i2++) {
          var i22 = i2 * 2;
          rgb[i2] = parseInt(match.slice(i22, i22 + 2), 16);
        }
        if (hexAlpha) {
          rgb[3] = parseInt(hexAlpha, 16) / 255;
        }
      } else if (match = string2.match(abbr)) {
        match = match[1];
        hexAlpha = match[3];
        for (i2 = 0; i2 < 3; i2++) {
          rgb[i2] = parseInt(match[i2] + match[i2], 16);
        }
        if (hexAlpha) {
          rgb[3] = parseInt(hexAlpha + hexAlpha, 16) / 255;
        }
      } else if (match = string2.match(rgba)) {
        for (i2 = 0; i2 < 3; i2++) {
          rgb[i2] = parseInt(match[i2 + 1], 0);
        }
        if (match[4]) {
          if (match[5]) {
            rgb[3] = parseFloat(match[4]) * 0.01;
          } else {
            rgb[3] = parseFloat(match[4]);
          }
        }
      } else if (match = string2.match(per)) {
        for (i2 = 0; i2 < 3; i2++) {
          rgb[i2] = Math.round(parseFloat(match[i2 + 1]) * 2.55);
        }
        if (match[4]) {
          if (match[5]) {
            rgb[3] = parseFloat(match[4]) * 0.01;
          } else {
            rgb[3] = parseFloat(match[4]);
          }
        }
      } else if (match = string2.match(keyword)) {
        if (match[1] === "transparent") {
          return [0, 0, 0, 0];
        }
        if (!hasOwnProperty2.call(colorNames, match[1])) {
          return null;
        }
        rgb = colorNames[match[1]];
        rgb[3] = 1;
        return rgb;
      } else {
        return null;
      }
      for (i2 = 0; i2 < 3; i2++) {
        rgb[i2] = clamp(rgb[i2], 0, 255);
      }
      rgb[3] = clamp(rgb[3], 0, 1);
      return rgb;
    };
    cs.get.hsl = function(string2) {
      if (!string2) {
        return null;
      }
      var hsl = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
      var match = string2.match(hsl);
      if (match) {
        var alpha = parseFloat(match[4]);
        var h3 = (parseFloat(match[1]) % 360 + 360) % 360;
        var s3 = clamp(parseFloat(match[2]), 0, 100);
        var l2 = clamp(parseFloat(match[3]), 0, 100);
        var a2 = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
        return [h3, s3, l2, a2];
      }
      return null;
    };
    cs.get.hwb = function(string2) {
      if (!string2) {
        return null;
      }
      var hwb = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
      var match = string2.match(hwb);
      if (match) {
        var alpha = parseFloat(match[4]);
        var h3 = (parseFloat(match[1]) % 360 + 360) % 360;
        var w2 = clamp(parseFloat(match[2]), 0, 100);
        var b3 = clamp(parseFloat(match[3]), 0, 100);
        var a2 = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
        return [h3, w2, b3, a2];
      }
      return null;
    };
    cs.to.hex = function() {
      var rgba = swizzle(arguments);
      return "#" + hexDouble(rgba[0]) + hexDouble(rgba[1]) + hexDouble(rgba[2]) + (rgba[3] < 1 ? hexDouble(Math.round(rgba[3] * 255)) : "");
    };
    cs.to.rgb = function() {
      var rgba = swizzle(arguments);
      return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ")" : "rgba(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ", " + rgba[3] + ")";
    };
    cs.to.rgb.percent = function() {
      var rgba = swizzle(arguments);
      var r3 = Math.round(rgba[0] / 255 * 100);
      var g3 = Math.round(rgba[1] / 255 * 100);
      var b3 = Math.round(rgba[2] / 255 * 100);
      return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + r3 + "%, " + g3 + "%, " + b3 + "%)" : "rgba(" + r3 + "%, " + g3 + "%, " + b3 + "%, " + rgba[3] + ")";
    };
    cs.to.hsl = function() {
      var hsla = swizzle(arguments);
      return hsla.length < 4 || hsla[3] === 1 ? "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)" : "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, " + hsla[3] + ")";
    };
    cs.to.hwb = function() {
      var hwba = swizzle(arguments);
      var a2 = "";
      if (hwba.length >= 4 && hwba[3] !== 1) {
        a2 = ", " + hwba[3];
      }
      return "hwb(" + hwba[0] + ", " + hwba[1] + "%, " + hwba[2] + "%" + a2 + ")";
    };
    cs.to.keyword = function(rgb) {
      return reverseNames[rgb.slice(0, 3)];
    };
    function clamp(num, min2, max2) {
      return Math.min(Math.max(min2, num), max2);
    }
    function hexDouble(num) {
      var str = Math.round(num).toString(16).toUpperCase();
      return str.length < 2 ? "0" + str : str;
    }
  }
});

// node_modules/color-convert/conversions.js
var require_conversions = __commonJS({
  "node_modules/color-convert/conversions.js"(exports, module) {
    init_react();
    var cssKeywords = require_color_name();
    var reverseKeywords = {};
    for (const key of Object.keys(cssKeywords)) {
      reverseKeywords[cssKeywords[key]] = key;
    }
    var convert = {
      rgb: { channels: 3, labels: "rgb" },
      hsl: { channels: 3, labels: "hsl" },
      hsv: { channels: 3, labels: "hsv" },
      hwb: { channels: 3, labels: "hwb" },
      cmyk: { channels: 4, labels: "cmyk" },
      xyz: { channels: 3, labels: "xyz" },
      lab: { channels: 3, labels: "lab" },
      lch: { channels: 3, labels: "lch" },
      hex: { channels: 1, labels: ["hex"] },
      keyword: { channels: 1, labels: ["keyword"] },
      ansi16: { channels: 1, labels: ["ansi16"] },
      ansi256: { channels: 1, labels: ["ansi256"] },
      hcg: { channels: 3, labels: ["h", "c", "g"] },
      apple: { channels: 3, labels: ["r16", "g16", "b16"] },
      gray: { channels: 1, labels: ["gray"] }
    };
    module.exports = convert;
    for (const model of Object.keys(convert)) {
      if (!("channels" in convert[model])) {
        throw new Error("missing channels property: " + model);
      }
      if (!("labels" in convert[model])) {
        throw new Error("missing channel labels property: " + model);
      }
      if (convert[model].labels.length !== convert[model].channels) {
        throw new Error("channel and label counts mismatch: " + model);
      }
      const { channels, labels } = convert[model];
      delete convert[model].channels;
      delete convert[model].labels;
      Object.defineProperty(convert[model], "channels", { value: channels });
      Object.defineProperty(convert[model], "labels", { value: labels });
    }
    convert.rgb.hsl = function(rgb) {
      const r3 = rgb[0] / 255;
      const g3 = rgb[1] / 255;
      const b3 = rgb[2] / 255;
      const min2 = Math.min(r3, g3, b3);
      const max2 = Math.max(r3, g3, b3);
      const delta = max2 - min2;
      let h3;
      let s3;
      if (max2 === min2) {
        h3 = 0;
      } else if (r3 === max2) {
        h3 = (g3 - b3) / delta;
      } else if (g3 === max2) {
        h3 = 2 + (b3 - r3) / delta;
      } else if (b3 === max2) {
        h3 = 4 + (r3 - g3) / delta;
      }
      h3 = Math.min(h3 * 60, 360);
      if (h3 < 0) {
        h3 += 360;
      }
      const l2 = (min2 + max2) / 2;
      if (max2 === min2) {
        s3 = 0;
      } else if (l2 <= 0.5) {
        s3 = delta / (max2 + min2);
      } else {
        s3 = delta / (2 - max2 - min2);
      }
      return [h3, s3 * 100, l2 * 100];
    };
    convert.rgb.hsv = function(rgb) {
      let rdif;
      let gdif;
      let bdif;
      let h3;
      let s3;
      const r3 = rgb[0] / 255;
      const g3 = rgb[1] / 255;
      const b3 = rgb[2] / 255;
      const v3 = Math.max(r3, g3, b3);
      const diff = v3 - Math.min(r3, g3, b3);
      const diffc = function(c2) {
        return (v3 - c2) / 6 / diff + 1 / 2;
      };
      if (diff === 0) {
        h3 = 0;
        s3 = 0;
      } else {
        s3 = diff / v3;
        rdif = diffc(r3);
        gdif = diffc(g3);
        bdif = diffc(b3);
        if (r3 === v3) {
          h3 = bdif - gdif;
        } else if (g3 === v3) {
          h3 = 1 / 3 + rdif - bdif;
        } else if (b3 === v3) {
          h3 = 2 / 3 + gdif - rdif;
        }
        if (h3 < 0) {
          h3 += 1;
        } else if (h3 > 1) {
          h3 -= 1;
        }
      }
      return [
        h3 * 360,
        s3 * 100,
        v3 * 100
      ];
    };
    convert.rgb.hwb = function(rgb) {
      const r3 = rgb[0];
      const g3 = rgb[1];
      let b3 = rgb[2];
      const h3 = convert.rgb.hsl(rgb)[0];
      const w2 = 1 / 255 * Math.min(r3, Math.min(g3, b3));
      b3 = 1 - 1 / 255 * Math.max(r3, Math.max(g3, b3));
      return [h3, w2 * 100, b3 * 100];
    };
    convert.rgb.cmyk = function(rgb) {
      const r3 = rgb[0] / 255;
      const g3 = rgb[1] / 255;
      const b3 = rgb[2] / 255;
      const k3 = Math.min(1 - r3, 1 - g3, 1 - b3);
      const c2 = (1 - r3 - k3) / (1 - k3) || 0;
      const m2 = (1 - g3 - k3) / (1 - k3) || 0;
      const y3 = (1 - b3 - k3) / (1 - k3) || 0;
      return [c2 * 100, m2 * 100, y3 * 100, k3 * 100];
    };
    function comparativeDistance(x2, y3) {
      return (x2[0] - y3[0]) ** 2 + (x2[1] - y3[1]) ** 2 + (x2[2] - y3[2]) ** 2;
    }
    convert.rgb.keyword = function(rgb) {
      const reversed = reverseKeywords[rgb];
      if (reversed) {
        return reversed;
      }
      let currentClosestDistance = Infinity;
      let currentClosestKeyword;
      for (const keyword of Object.keys(cssKeywords)) {
        const value = cssKeywords[keyword];
        const distance = comparativeDistance(rgb, value);
        if (distance < currentClosestDistance) {
          currentClosestDistance = distance;
          currentClosestKeyword = keyword;
        }
      }
      return currentClosestKeyword;
    };
    convert.keyword.rgb = function(keyword) {
      return cssKeywords[keyword];
    };
    convert.rgb.xyz = function(rgb) {
      let r3 = rgb[0] / 255;
      let g3 = rgb[1] / 255;
      let b3 = rgb[2] / 255;
      r3 = r3 > 0.04045 ? ((r3 + 0.055) / 1.055) ** 2.4 : r3 / 12.92;
      g3 = g3 > 0.04045 ? ((g3 + 0.055) / 1.055) ** 2.4 : g3 / 12.92;
      b3 = b3 > 0.04045 ? ((b3 + 0.055) / 1.055) ** 2.4 : b3 / 12.92;
      const x2 = r3 * 0.4124 + g3 * 0.3576 + b3 * 0.1805;
      const y3 = r3 * 0.2126 + g3 * 0.7152 + b3 * 0.0722;
      const z2 = r3 * 0.0193 + g3 * 0.1192 + b3 * 0.9505;
      return [x2 * 100, y3 * 100, z2 * 100];
    };
    convert.rgb.lab = function(rgb) {
      const xyz = convert.rgb.xyz(rgb);
      let x2 = xyz[0];
      let y3 = xyz[1];
      let z2 = xyz[2];
      x2 /= 95.047;
      y3 /= 100;
      z2 /= 108.883;
      x2 = x2 > 8856e-6 ? x2 ** (1 / 3) : 7.787 * x2 + 16 / 116;
      y3 = y3 > 8856e-6 ? y3 ** (1 / 3) : 7.787 * y3 + 16 / 116;
      z2 = z2 > 8856e-6 ? z2 ** (1 / 3) : 7.787 * z2 + 16 / 116;
      const l2 = 116 * y3 - 16;
      const a2 = 500 * (x2 - y3);
      const b3 = 200 * (y3 - z2);
      return [l2, a2, b3];
    };
    convert.hsl.rgb = function(hsl) {
      const h3 = hsl[0] / 360;
      const s3 = hsl[1] / 100;
      const l2 = hsl[2] / 100;
      let t22;
      let t3;
      let val;
      if (s3 === 0) {
        val = l2 * 255;
        return [val, val, val];
      }
      if (l2 < 0.5) {
        t22 = l2 * (1 + s3);
      } else {
        t22 = l2 + s3 - l2 * s3;
      }
      const t1 = 2 * l2 - t22;
      const rgb = [0, 0, 0];
      for (let i2 = 0; i2 < 3; i2++) {
        t3 = h3 + 1 / 3 * -(i2 - 1);
        if (t3 < 0) {
          t3++;
        }
        if (t3 > 1) {
          t3--;
        }
        if (6 * t3 < 1) {
          val = t1 + (t22 - t1) * 6 * t3;
        } else if (2 * t3 < 1) {
          val = t22;
        } else if (3 * t3 < 2) {
          val = t1 + (t22 - t1) * (2 / 3 - t3) * 6;
        } else {
          val = t1;
        }
        rgb[i2] = val * 255;
      }
      return rgb;
    };
    convert.hsl.hsv = function(hsl) {
      const h3 = hsl[0];
      let s3 = hsl[1] / 100;
      let l2 = hsl[2] / 100;
      let smin = s3;
      const lmin = Math.max(l2, 0.01);
      l2 *= 2;
      s3 *= l2 <= 1 ? l2 : 2 - l2;
      smin *= lmin <= 1 ? lmin : 2 - lmin;
      const v3 = (l2 + s3) / 2;
      const sv = l2 === 0 ? 2 * smin / (lmin + smin) : 2 * s3 / (l2 + s3);
      return [h3, sv * 100, v3 * 100];
    };
    convert.hsv.rgb = function(hsv) {
      const h3 = hsv[0] / 60;
      const s3 = hsv[1] / 100;
      let v3 = hsv[2] / 100;
      const hi = Math.floor(h3) % 6;
      const f3 = h3 - Math.floor(h3);
      const p3 = 255 * v3 * (1 - s3);
      const q2 = 255 * v3 * (1 - s3 * f3);
      const t3 = 255 * v3 * (1 - s3 * (1 - f3));
      v3 *= 255;
      switch (hi) {
        case 0:
          return [v3, t3, p3];
        case 1:
          return [q2, v3, p3];
        case 2:
          return [p3, v3, t3];
        case 3:
          return [p3, q2, v3];
        case 4:
          return [t3, p3, v3];
        case 5:
          return [v3, p3, q2];
      }
    };
    convert.hsv.hsl = function(hsv) {
      const h3 = hsv[0];
      const s3 = hsv[1] / 100;
      const v3 = hsv[2] / 100;
      const vmin = Math.max(v3, 0.01);
      let sl;
      let l2;
      l2 = (2 - s3) * v3;
      const lmin = (2 - s3) * vmin;
      sl = s3 * vmin;
      sl /= lmin <= 1 ? lmin : 2 - lmin;
      sl = sl || 0;
      l2 /= 2;
      return [h3, sl * 100, l2 * 100];
    };
    convert.hwb.rgb = function(hwb) {
      const h3 = hwb[0] / 360;
      let wh = hwb[1] / 100;
      let bl = hwb[2] / 100;
      const ratio = wh + bl;
      let f3;
      if (ratio > 1) {
        wh /= ratio;
        bl /= ratio;
      }
      const i2 = Math.floor(6 * h3);
      const v3 = 1 - bl;
      f3 = 6 * h3 - i2;
      if ((i2 & 1) !== 0) {
        f3 = 1 - f3;
      }
      const n4 = wh + f3 * (v3 - wh);
      let r3;
      let g3;
      let b3;
      switch (i2) {
        default:
        case 6:
        case 0:
          r3 = v3;
          g3 = n4;
          b3 = wh;
          break;
        case 1:
          r3 = n4;
          g3 = v3;
          b3 = wh;
          break;
        case 2:
          r3 = wh;
          g3 = v3;
          b3 = n4;
          break;
        case 3:
          r3 = wh;
          g3 = n4;
          b3 = v3;
          break;
        case 4:
          r3 = n4;
          g3 = wh;
          b3 = v3;
          break;
        case 5:
          r3 = v3;
          g3 = wh;
          b3 = n4;
          break;
      }
      return [r3 * 255, g3 * 255, b3 * 255];
    };
    convert.cmyk.rgb = function(cmyk) {
      const c2 = cmyk[0] / 100;
      const m2 = cmyk[1] / 100;
      const y3 = cmyk[2] / 100;
      const k3 = cmyk[3] / 100;
      const r3 = 1 - Math.min(1, c2 * (1 - k3) + k3);
      const g3 = 1 - Math.min(1, m2 * (1 - k3) + k3);
      const b3 = 1 - Math.min(1, y3 * (1 - k3) + k3);
      return [r3 * 255, g3 * 255, b3 * 255];
    };
    convert.xyz.rgb = function(xyz) {
      const x2 = xyz[0] / 100;
      const y3 = xyz[1] / 100;
      const z2 = xyz[2] / 100;
      let r3;
      let g3;
      let b3;
      r3 = x2 * 3.2406 + y3 * -1.5372 + z2 * -0.4986;
      g3 = x2 * -0.9689 + y3 * 1.8758 + z2 * 0.0415;
      b3 = x2 * 0.0557 + y3 * -0.204 + z2 * 1.057;
      r3 = r3 > 31308e-7 ? 1.055 * r3 ** (1 / 2.4) - 0.055 : r3 * 12.92;
      g3 = g3 > 31308e-7 ? 1.055 * g3 ** (1 / 2.4) - 0.055 : g3 * 12.92;
      b3 = b3 > 31308e-7 ? 1.055 * b3 ** (1 / 2.4) - 0.055 : b3 * 12.92;
      r3 = Math.min(Math.max(0, r3), 1);
      g3 = Math.min(Math.max(0, g3), 1);
      b3 = Math.min(Math.max(0, b3), 1);
      return [r3 * 255, g3 * 255, b3 * 255];
    };
    convert.xyz.lab = function(xyz) {
      let x2 = xyz[0];
      let y3 = xyz[1];
      let z2 = xyz[2];
      x2 /= 95.047;
      y3 /= 100;
      z2 /= 108.883;
      x2 = x2 > 8856e-6 ? x2 ** (1 / 3) : 7.787 * x2 + 16 / 116;
      y3 = y3 > 8856e-6 ? y3 ** (1 / 3) : 7.787 * y3 + 16 / 116;
      z2 = z2 > 8856e-6 ? z2 ** (1 / 3) : 7.787 * z2 + 16 / 116;
      const l2 = 116 * y3 - 16;
      const a2 = 500 * (x2 - y3);
      const b3 = 200 * (y3 - z2);
      return [l2, a2, b3];
    };
    convert.lab.xyz = function(lab) {
      const l2 = lab[0];
      const a2 = lab[1];
      const b3 = lab[2];
      let x2;
      let y3;
      let z2;
      y3 = (l2 + 16) / 116;
      x2 = a2 / 500 + y3;
      z2 = y3 - b3 / 200;
      const y22 = y3 ** 3;
      const x22 = x2 ** 3;
      const z22 = z2 ** 3;
      y3 = y22 > 8856e-6 ? y22 : (y3 - 16 / 116) / 7.787;
      x2 = x22 > 8856e-6 ? x22 : (x2 - 16 / 116) / 7.787;
      z2 = z22 > 8856e-6 ? z22 : (z2 - 16 / 116) / 7.787;
      x2 *= 95.047;
      y3 *= 100;
      z2 *= 108.883;
      return [x2, y3, z2];
    };
    convert.lab.lch = function(lab) {
      const l2 = lab[0];
      const a2 = lab[1];
      const b3 = lab[2];
      let h3;
      const hr2 = Math.atan2(b3, a2);
      h3 = hr2 * 360 / 2 / Math.PI;
      if (h3 < 0) {
        h3 += 360;
      }
      const c2 = Math.sqrt(a2 * a2 + b3 * b3);
      return [l2, c2, h3];
    };
    convert.lch.lab = function(lch) {
      const l2 = lch[0];
      const c2 = lch[1];
      const h3 = lch[2];
      const hr2 = h3 / 360 * 2 * Math.PI;
      const a2 = c2 * Math.cos(hr2);
      const b3 = c2 * Math.sin(hr2);
      return [l2, a2, b3];
    };
    convert.rgb.ansi16 = function(args, saturation = null) {
      const [r3, g3, b3] = args;
      let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation;
      value = Math.round(value / 50);
      if (value === 0) {
        return 30;
      }
      let ansi = 30 + (Math.round(b3 / 255) << 2 | Math.round(g3 / 255) << 1 | Math.round(r3 / 255));
      if (value === 2) {
        ansi += 60;
      }
      return ansi;
    };
    convert.hsv.ansi16 = function(args) {
      return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
    };
    convert.rgb.ansi256 = function(args) {
      const r3 = args[0];
      const g3 = args[1];
      const b3 = args[2];
      if (r3 === g3 && g3 === b3) {
        if (r3 < 8) {
          return 16;
        }
        if (r3 > 248) {
          return 231;
        }
        return Math.round((r3 - 8) / 247 * 24) + 232;
      }
      const ansi = 16 + 36 * Math.round(r3 / 255 * 5) + 6 * Math.round(g3 / 255 * 5) + Math.round(b3 / 255 * 5);
      return ansi;
    };
    convert.ansi16.rgb = function(args) {
      let color = args % 10;
      if (color === 0 || color === 7) {
        if (args > 50) {
          color += 3.5;
        }
        color = color / 10.5 * 255;
        return [color, color, color];
      }
      const mult = (~~(args > 50) + 1) * 0.5;
      const r3 = (color & 1) * mult * 255;
      const g3 = (color >> 1 & 1) * mult * 255;
      const b3 = (color >> 2 & 1) * mult * 255;
      return [r3, g3, b3];
    };
    convert.ansi256.rgb = function(args) {
      if (args >= 232) {
        const c2 = (args - 232) * 10 + 8;
        return [c2, c2, c2];
      }
      args -= 16;
      let rem;
      const r3 = Math.floor(args / 36) / 5 * 255;
      const g3 = Math.floor((rem = args % 36) / 6) / 5 * 255;
      const b3 = rem % 6 / 5 * 255;
      return [r3, g3, b3];
    };
    convert.rgb.hex = function(args) {
      const integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
      const string2 = integer.toString(16).toUpperCase();
      return "000000".substring(string2.length) + string2;
    };
    convert.hex.rgb = function(args) {
      const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!match) {
        return [0, 0, 0];
      }
      let colorString = match[0];
      if (match[0].length === 3) {
        colorString = colorString.split("").map((char) => {
          return char + char;
        }).join("");
      }
      const integer = parseInt(colorString, 16);
      const r3 = integer >> 16 & 255;
      const g3 = integer >> 8 & 255;
      const b3 = integer & 255;
      return [r3, g3, b3];
    };
    convert.rgb.hcg = function(rgb) {
      const r3 = rgb[0] / 255;
      const g3 = rgb[1] / 255;
      const b3 = rgb[2] / 255;
      const max2 = Math.max(Math.max(r3, g3), b3);
      const min2 = Math.min(Math.min(r3, g3), b3);
      const chroma = max2 - min2;
      let grayscale;
      let hue;
      if (chroma < 1) {
        grayscale = min2 / (1 - chroma);
      } else {
        grayscale = 0;
      }
      if (chroma <= 0) {
        hue = 0;
      } else if (max2 === r3) {
        hue = (g3 - b3) / chroma % 6;
      } else if (max2 === g3) {
        hue = 2 + (b3 - r3) / chroma;
      } else {
        hue = 4 + (r3 - g3) / chroma;
      }
      hue /= 6;
      hue %= 1;
      return [hue * 360, chroma * 100, grayscale * 100];
    };
    convert.hsl.hcg = function(hsl) {
      const s3 = hsl[1] / 100;
      const l2 = hsl[2] / 100;
      const c2 = l2 < 0.5 ? 2 * s3 * l2 : 2 * s3 * (1 - l2);
      let f3 = 0;
      if (c2 < 1) {
        f3 = (l2 - 0.5 * c2) / (1 - c2);
      }
      return [hsl[0], c2 * 100, f3 * 100];
    };
    convert.hsv.hcg = function(hsv) {
      const s3 = hsv[1] / 100;
      const v3 = hsv[2] / 100;
      const c2 = s3 * v3;
      let f3 = 0;
      if (c2 < 1) {
        f3 = (v3 - c2) / (1 - c2);
      }
      return [hsv[0], c2 * 100, f3 * 100];
    };
    convert.hcg.rgb = function(hcg) {
      const h3 = hcg[0] / 360;
      const c2 = hcg[1] / 100;
      const g3 = hcg[2] / 100;
      if (c2 === 0) {
        return [g3 * 255, g3 * 255, g3 * 255];
      }
      const pure = [0, 0, 0];
      const hi = h3 % 1 * 6;
      const v3 = hi % 1;
      const w2 = 1 - v3;
      let mg = 0;
      switch (Math.floor(hi)) {
        case 0:
          pure[0] = 1;
          pure[1] = v3;
          pure[2] = 0;
          break;
        case 1:
          pure[0] = w2;
          pure[1] = 1;
          pure[2] = 0;
          break;
        case 2:
          pure[0] = 0;
          pure[1] = 1;
          pure[2] = v3;
          break;
        case 3:
          pure[0] = 0;
          pure[1] = w2;
          pure[2] = 1;
          break;
        case 4:
          pure[0] = v3;
          pure[1] = 0;
          pure[2] = 1;
          break;
        default:
          pure[0] = 1;
          pure[1] = 0;
          pure[2] = w2;
      }
      mg = (1 - c2) * g3;
      return [
        (c2 * pure[0] + mg) * 255,
        (c2 * pure[1] + mg) * 255,
        (c2 * pure[2] + mg) * 255
      ];
    };
    convert.hcg.hsv = function(hcg) {
      const c2 = hcg[1] / 100;
      const g3 = hcg[2] / 100;
      const v3 = c2 + g3 * (1 - c2);
      let f3 = 0;
      if (v3 > 0) {
        f3 = c2 / v3;
      }
      return [hcg[0], f3 * 100, v3 * 100];
    };
    convert.hcg.hsl = function(hcg) {
      const c2 = hcg[1] / 100;
      const g3 = hcg[2] / 100;
      const l2 = g3 * (1 - c2) + 0.5 * c2;
      let s3 = 0;
      if (l2 > 0 && l2 < 0.5) {
        s3 = c2 / (2 * l2);
      } else if (l2 >= 0.5 && l2 < 1) {
        s3 = c2 / (2 * (1 - l2));
      }
      return [hcg[0], s3 * 100, l2 * 100];
    };
    convert.hcg.hwb = function(hcg) {
      const c2 = hcg[1] / 100;
      const g3 = hcg[2] / 100;
      const v3 = c2 + g3 * (1 - c2);
      return [hcg[0], (v3 - c2) * 100, (1 - v3) * 100];
    };
    convert.hwb.hcg = function(hwb) {
      const w2 = hwb[1] / 100;
      const b3 = hwb[2] / 100;
      const v3 = 1 - b3;
      const c2 = v3 - w2;
      let g3 = 0;
      if (c2 < 1) {
        g3 = (v3 - c2) / (1 - c2);
      }
      return [hwb[0], c2 * 100, g3 * 100];
    };
    convert.apple.rgb = function(apple) {
      return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
    };
    convert.rgb.apple = function(rgb) {
      return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
    };
    convert.gray.rgb = function(args) {
      return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
    };
    convert.gray.hsl = function(args) {
      return [0, 0, args[0]];
    };
    convert.gray.hsv = convert.gray.hsl;
    convert.gray.hwb = function(gray) {
      return [0, 100, gray[0]];
    };
    convert.gray.cmyk = function(gray) {
      return [0, 0, 0, gray[0]];
    };
    convert.gray.lab = function(gray) {
      return [gray[0], 0, 0];
    };
    convert.gray.hex = function(gray) {
      const val = Math.round(gray[0] / 100 * 255) & 255;
      const integer = (val << 16) + (val << 8) + val;
      const string2 = integer.toString(16).toUpperCase();
      return "000000".substring(string2.length) + string2;
    };
    convert.rgb.gray = function(rgb) {
      const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
      return [val / 255 * 100];
    };
  }
});

// node_modules/color-convert/route.js
var require_route = __commonJS({
  "node_modules/color-convert/route.js"(exports, module) {
    init_react();
    var conversions = require_conversions();
    function buildGraph() {
      const graph = {};
      const models = Object.keys(conversions);
      for (let len = models.length, i2 = 0; i2 < len; i2++) {
        graph[models[i2]] = {
          distance: -1,
          parent: null
        };
      }
      return graph;
    }
    function deriveBFS(fromModel) {
      const graph = buildGraph();
      const queue = [fromModel];
      graph[fromModel].distance = 0;
      while (queue.length) {
        const current = queue.pop();
        const adjacents = Object.keys(conversions[current]);
        for (let len = adjacents.length, i2 = 0; i2 < len; i2++) {
          const adjacent = adjacents[i2];
          const node2 = graph[adjacent];
          if (node2.distance === -1) {
            node2.distance = graph[current].distance + 1;
            node2.parent = current;
            queue.unshift(adjacent);
          }
        }
      }
      return graph;
    }
    function link(from, to) {
      return function(args) {
        return to(from(args));
      };
    }
    function wrapConversion(toModel, graph) {
      const path = [graph[toModel].parent, toModel];
      let fn5 = conversions[graph[toModel].parent][toModel];
      let cur = graph[toModel].parent;
      while (graph[cur].parent) {
        path.unshift(graph[cur].parent);
        fn5 = link(conversions[graph[cur].parent][cur], fn5);
        cur = graph[cur].parent;
      }
      fn5.conversion = path;
      return fn5;
    }
    module.exports = function(fromModel) {
      const graph = deriveBFS(fromModel);
      const conversion = {};
      const models = Object.keys(graph);
      for (let len = models.length, i2 = 0; i2 < len; i2++) {
        const toModel = models[i2];
        const node2 = graph[toModel];
        if (node2.parent === null) {
          continue;
        }
        conversion[toModel] = wrapConversion(toModel, graph);
      }
      return conversion;
    };
  }
});

// node_modules/color-convert/index.js
var require_color_convert = __commonJS({
  "node_modules/color-convert/index.js"(exports, module) {
    init_react();
    var conversions = require_conversions();
    var route = require_route();
    var convert = {};
    var models = Object.keys(conversions);
    function wrapRaw(fn5) {
      const wrappedFn = function(...args) {
        const arg0 = args[0];
        if (arg0 === void 0 || arg0 === null) {
          return arg0;
        }
        if (arg0.length > 1) {
          args = arg0;
        }
        return fn5(args);
      };
      if ("conversion" in fn5) {
        wrappedFn.conversion = fn5.conversion;
      }
      return wrappedFn;
    }
    function wrapRounded(fn5) {
      const wrappedFn = function(...args) {
        const arg0 = args[0];
        if (arg0 === void 0 || arg0 === null) {
          return arg0;
        }
        if (arg0.length > 1) {
          args = arg0;
        }
        const result = fn5(args);
        if (typeof result === "object") {
          for (let len = result.length, i2 = 0; i2 < len; i2++) {
            result[i2] = Math.round(result[i2]);
          }
        }
        return result;
      };
      if ("conversion" in fn5) {
        wrappedFn.conversion = fn5.conversion;
      }
      return wrappedFn;
    }
    models.forEach((fromModel) => {
      convert[fromModel] = {};
      Object.defineProperty(convert[fromModel], "channels", { value: conversions[fromModel].channels });
      Object.defineProperty(convert[fromModel], "labels", { value: conversions[fromModel].labels });
      const routes = route(fromModel);
      const routeModels = Object.keys(routes);
      routeModels.forEach((toModel) => {
        const fn5 = routes[toModel];
        convert[fromModel][toModel] = wrapRounded(fn5);
        convert[fromModel][toModel].raw = wrapRaw(fn5);
      });
    });
    module.exports = convert;
  }
});

// node_modules/color/index.js
var require_color = __commonJS({
  "node_modules/color/index.js"(exports, module) {
    init_react();
    var colorString = require_color_string();
    var convert = require_color_convert();
    var _slice = [].slice;
    var skippedModels = [
      "keyword",
      "gray",
      "hex"
    ];
    var hashedModelKeys = {};
    for (const model of Object.keys(convert)) {
      hashedModelKeys[_slice.call(convert[model].labels).sort().join("")] = model;
    }
    var limiters = {};
    function Color(object, model) {
      if (!(this instanceof Color)) {
        return new Color(object, model);
      }
      if (model && model in skippedModels) {
        model = null;
      }
      if (model && !(model in convert)) {
        throw new Error("Unknown model: " + model);
      }
      let i2;
      let channels;
      if (object == null) {
        this.model = "rgb";
        this.color = [0, 0, 0];
        this.valpha = 1;
      } else if (object instanceof Color) {
        this.model = object.model;
        this.color = object.color.slice();
        this.valpha = object.valpha;
      } else if (typeof object === "string") {
        const result = colorString.get(object);
        if (result === null) {
          throw new Error("Unable to parse color from string: " + object);
        }
        this.model = result.model;
        channels = convert[this.model].channels;
        this.color = result.value.slice(0, channels);
        this.valpha = typeof result.value[channels] === "number" ? result.value[channels] : 1;
      } else if (object.length > 0) {
        this.model = model || "rgb";
        channels = convert[this.model].channels;
        const newArray = _slice.call(object, 0, channels);
        this.color = zeroArray(newArray, channels);
        this.valpha = typeof object[channels] === "number" ? object[channels] : 1;
      } else if (typeof object === "number") {
        this.model = "rgb";
        this.color = [
          object >> 16 & 255,
          object >> 8 & 255,
          object & 255
        ];
        this.valpha = 1;
      } else {
        this.valpha = 1;
        const keys = Object.keys(object);
        if ("alpha" in object) {
          keys.splice(keys.indexOf("alpha"), 1);
          this.valpha = typeof object.alpha === "number" ? object.alpha : 0;
        }
        const hashedKeys = keys.sort().join("");
        if (!(hashedKeys in hashedModelKeys)) {
          throw new Error("Unable to parse color from object: " + JSON.stringify(object));
        }
        this.model = hashedModelKeys[hashedKeys];
        const labels = convert[this.model].labels;
        const color = [];
        for (i2 = 0; i2 < labels.length; i2++) {
          color.push(object[labels[i2]]);
        }
        this.color = zeroArray(color);
      }
      if (limiters[this.model]) {
        channels = convert[this.model].channels;
        for (i2 = 0; i2 < channels; i2++) {
          const limit = limiters[this.model][i2];
          if (limit) {
            this.color[i2] = limit(this.color[i2]);
          }
        }
      }
      this.valpha = Math.max(0, Math.min(1, this.valpha));
      if (Object.freeze) {
        Object.freeze(this);
      }
    }
    Color.prototype = {
      toString() {
        return this.string();
      },
      toJSON() {
        return this[this.model]();
      },
      string(places) {
        let self2 = this.model in colorString.to ? this : this.rgb();
        self2 = self2.round(typeof places === "number" ? places : 1);
        const args = self2.valpha === 1 ? self2.color : self2.color.concat(this.valpha);
        return colorString.to[self2.model](args);
      },
      percentString(places) {
        const self2 = this.rgb().round(typeof places === "number" ? places : 1);
        const args = self2.valpha === 1 ? self2.color : self2.color.concat(this.valpha);
        return colorString.to.rgb.percent(args);
      },
      array() {
        return this.valpha === 1 ? this.color.slice() : this.color.concat(this.valpha);
      },
      object() {
        const result = {};
        const channels = convert[this.model].channels;
        const labels = convert[this.model].labels;
        for (let i2 = 0; i2 < channels; i2++) {
          result[labels[i2]] = this.color[i2];
        }
        if (this.valpha !== 1) {
          result.alpha = this.valpha;
        }
        return result;
      },
      unitArray() {
        const rgb = this.rgb().color;
        rgb[0] /= 255;
        rgb[1] /= 255;
        rgb[2] /= 255;
        if (this.valpha !== 1) {
          rgb.push(this.valpha);
        }
        return rgb;
      },
      unitObject() {
        const rgb = this.rgb().object();
        rgb.r /= 255;
        rgb.g /= 255;
        rgb.b /= 255;
        if (this.valpha !== 1) {
          rgb.alpha = this.valpha;
        }
        return rgb;
      },
      round(places) {
        places = Math.max(places || 0, 0);
        return new Color(this.color.map(roundToPlace(places)).concat(this.valpha), this.model);
      },
      alpha(value) {
        if (arguments.length > 0) {
          return new Color(this.color.concat(Math.max(0, Math.min(1, value))), this.model);
        }
        return this.valpha;
      },
      red: getset("rgb", 0, maxfn(255)),
      green: getset("rgb", 1, maxfn(255)),
      blue: getset("rgb", 2, maxfn(255)),
      hue: getset(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, (value) => (value % 360 + 360) % 360),
      saturationl: getset("hsl", 1, maxfn(100)),
      lightness: getset("hsl", 2, maxfn(100)),
      saturationv: getset("hsv", 1, maxfn(100)),
      value: getset("hsv", 2, maxfn(100)),
      chroma: getset("hcg", 1, maxfn(100)),
      gray: getset("hcg", 2, maxfn(100)),
      white: getset("hwb", 1, maxfn(100)),
      wblack: getset("hwb", 2, maxfn(100)),
      cyan: getset("cmyk", 0, maxfn(100)),
      magenta: getset("cmyk", 1, maxfn(100)),
      yellow: getset("cmyk", 2, maxfn(100)),
      black: getset("cmyk", 3, maxfn(100)),
      x: getset("xyz", 0, maxfn(100)),
      y: getset("xyz", 1, maxfn(100)),
      z: getset("xyz", 2, maxfn(100)),
      l: getset("lab", 0, maxfn(100)),
      a: getset("lab", 1),
      b: getset("lab", 2),
      keyword(value) {
        if (arguments.length > 0) {
          return new Color(value);
        }
        return convert[this.model].keyword(this.color);
      },
      hex(value) {
        if (arguments.length > 0) {
          return new Color(value);
        }
        return colorString.to.hex(this.rgb().round().color);
      },
      hexa(value) {
        if (arguments.length > 0) {
          return new Color(value);
        }
        const rgbArray = this.rgb().round().color;
        let alphaHex = Math.round(this.valpha * 255).toString(16).toUpperCase();
        if (alphaHex.length === 1) {
          alphaHex = "0" + alphaHex;
        }
        return colorString.to.hex(rgbArray) + alphaHex;
      },
      rgbNumber() {
        const rgb = this.rgb().color;
        return (rgb[0] & 255) << 16 | (rgb[1] & 255) << 8 | rgb[2] & 255;
      },
      luminosity() {
        const rgb = this.rgb().color;
        const lum = [];
        for (const [i2, element] of rgb.entries()) {
          const chan = element / 255;
          lum[i2] = chan <= 0.03928 ? chan / 12.92 : ((chan + 0.055) / 1.055) ** 2.4;
        }
        return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
      },
      contrast(color2) {
        const lum1 = this.luminosity();
        const lum2 = color2.luminosity();
        if (lum1 > lum2) {
          return (lum1 + 0.05) / (lum2 + 0.05);
        }
        return (lum2 + 0.05) / (lum1 + 0.05);
      },
      level(color2) {
        const contrastRatio = this.contrast(color2);
        if (contrastRatio >= 7.1) {
          return "AAA";
        }
        return contrastRatio >= 4.5 ? "AA" : "";
      },
      isDark() {
        const rgb = this.rgb().color;
        const yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1e3;
        return yiq < 128;
      },
      isLight() {
        return !this.isDark();
      },
      negate() {
        const rgb = this.rgb();
        for (let i2 = 0; i2 < 3; i2++) {
          rgb.color[i2] = 255 - rgb.color[i2];
        }
        return rgb;
      },
      lighten(ratio) {
        const hsl = this.hsl();
        hsl.color[2] += hsl.color[2] * ratio;
        return hsl;
      },
      darken(ratio) {
        const hsl = this.hsl();
        hsl.color[2] -= hsl.color[2] * ratio;
        return hsl;
      },
      saturate(ratio) {
        const hsl = this.hsl();
        hsl.color[1] += hsl.color[1] * ratio;
        return hsl;
      },
      desaturate(ratio) {
        const hsl = this.hsl();
        hsl.color[1] -= hsl.color[1] * ratio;
        return hsl;
      },
      whiten(ratio) {
        const hwb = this.hwb();
        hwb.color[1] += hwb.color[1] * ratio;
        return hwb;
      },
      blacken(ratio) {
        const hwb = this.hwb();
        hwb.color[2] += hwb.color[2] * ratio;
        return hwb;
      },
      grayscale() {
        const rgb = this.rgb().color;
        const value = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
        return Color.rgb(value, value, value);
      },
      fade(ratio) {
        return this.alpha(this.valpha - this.valpha * ratio);
      },
      opaquer(ratio) {
        return this.alpha(this.valpha + this.valpha * ratio);
      },
      rotate(degrees) {
        const hsl = this.hsl();
        let hue = hsl.color[0];
        hue = (hue + degrees) % 360;
        hue = hue < 0 ? 360 + hue : hue;
        hsl.color[0] = hue;
        return hsl;
      },
      mix(mixinColor, weight) {
        if (!mixinColor || !mixinColor.rgb) {
          throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
        }
        const color1 = mixinColor.rgb();
        const color2 = this.rgb();
        const p3 = weight === void 0 ? 0.5 : weight;
        const w2 = 2 * p3 - 1;
        const a2 = color1.alpha() - color2.alpha();
        const w1 = ((w2 * a2 === -1 ? w2 : (w2 + a2) / (1 + w2 * a2)) + 1) / 2;
        const w22 = 1 - w1;
        return Color.rgb(w1 * color1.red() + w22 * color2.red(), w1 * color1.green() + w22 * color2.green(), w1 * color1.blue() + w22 * color2.blue(), color1.alpha() * p3 + color2.alpha() * (1 - p3));
      }
    };
    for (const model of Object.keys(convert)) {
      if (skippedModels.includes(model)) {
        continue;
      }
      const channels = convert[model].channels;
      Color.prototype[model] = function() {
        if (this.model === model) {
          return new Color(this);
        }
        if (arguments.length > 0) {
          return new Color(arguments, model);
        }
        const newAlpha = typeof arguments[channels] === "number" ? channels : this.valpha;
        return new Color(assertArray(convert[this.model][model].raw(this.color)).concat(newAlpha), model);
      };
      Color[model] = function(color) {
        if (typeof color === "number") {
          color = zeroArray(_slice.call(arguments), channels);
        }
        return new Color(color, model);
      };
    }
    function roundTo(number2, places) {
      return Number(number2.toFixed(places));
    }
    function roundToPlace(places) {
      return function(number2) {
        return roundTo(number2, places);
      };
    }
    function getset(model, channel, modifier) {
      model = Array.isArray(model) ? model : [model];
      for (const m2 of model) {
        (limiters[m2] || (limiters[m2] = []))[channel] = modifier;
      }
      model = model[0];
      return function(value) {
        let result;
        if (arguments.length > 0) {
          if (modifier) {
            value = modifier(value);
          }
          result = this[model]();
          result.color[channel] = value;
          return result;
        }
        result = this[model]().color[channel];
        if (modifier) {
          result = modifier(result);
        }
        return result;
      };
    }
    function maxfn(max2) {
      return function(v3) {
        return Math.max(0, Math.min(max2, v3));
      };
    }
    function assertArray(value) {
      return Array.isArray(value) ? value : [value];
    }
    function zeroArray(array, length) {
      for (let i2 = 0; i2 < length; i2++) {
        if (typeof array[i2] !== "number") {
          array[i2] = 0;
        }
      }
      return array;
    }
    module.exports = Color;
  }
});

// node_modules/react-tag-autocomplete/dist/ReactTags.umd.js
var require_ReactTags_umd = __commonJS({
  "node_modules/react-tag-autocomplete/dist/ReactTags.umd.js"(exports, module) {
    init_react();
    (function(global2, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require_react(), require_prop_types()) : typeof define === "function" && define.amd ? define(["react", "prop-types"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, global2.ReactTags = factory(global2.React, global2.PropTypes));
    })(exports, function(React8, PropTypes2) {
      "use strict";
      function _interopDefaultLegacy(e2) {
        return e2 && typeof e2 === "object" && "default" in e2 ? e2 : { "default": e2 };
      }
      var React__default = /* @__PURE__ */ _interopDefaultLegacy(React8);
      var PropTypes__default = /* @__PURE__ */ _interopDefaultLegacy(PropTypes2);
      function Tag(props) {
        return React__default["default"].createElement("button", { type: "button", className: props.classNames.selectedTag, title: props.removeButtonText, onClick: props.onDelete }, React__default["default"].createElement("span", { className: props.classNames.selectedTagName }, props.tag.name));
      }
      var SIZER_STYLES = {
        position: "absolute",
        width: 0,
        height: 0,
        visibility: "hidden",
        overflow: "scroll",
        whiteSpace: "pre"
      };
      var STYLE_PROPS = [
        "fontSize",
        "fontFamily",
        "fontWeight",
        "fontStyle",
        "letterSpacing",
        "textTransform"
      ];
      var Input = /* @__PURE__ */ function(superclass) {
        function Input2(props) {
          superclass.call(this, props);
          this.state = { inputWidth: null };
          this.input = React__default["default"].createRef();
          this.sizer = React__default["default"].createRef();
        }
        if (superclass)
          Input2.__proto__ = superclass;
        Input2.prototype = Object.create(superclass && superclass.prototype);
        Input2.prototype.constructor = Input2;
        Input2.prototype.componentDidMount = function componentDidMount() {
          if (this.props.autoresize) {
            this.copyInputStyles();
            this.updateInputWidth();
          }
        };
        Input2.prototype.componentDidUpdate = function componentDidUpdate(ref) {
          var query = ref.query;
          var placeholderText = ref.placeholderText;
          if (query !== this.props.query || placeholderText !== this.props.placeholderText) {
            this.updateInputWidth();
          }
        };
        Input2.prototype.copyInputStyles = function copyInputStyles() {
          var this$1$1 = this;
          var inputStyle = window.getComputedStyle(this.input.current);
          STYLE_PROPS.forEach(function(prop) {
            this$1$1.sizer.current.style[prop] = inputStyle[prop];
          });
        };
        Input2.prototype.updateInputWidth = function updateInputWidth() {
          var inputWidth;
          if (this.props.autoresize) {
            inputWidth = Math.ceil(this.sizer.current.scrollWidth) + 2;
          }
          if (inputWidth !== this.state.inputWidth) {
            this.setState({ inputWidth });
          }
        };
        Input2.prototype.render = function render2() {
          var ref = this.props;
          var id = ref.id;
          var query = ref.query;
          var ariaLabelText = ref.ariaLabelText;
          var placeholderText = ref.placeholderText;
          var expanded = ref.expanded;
          var classNames2 = ref.classNames;
          var inputAttributes = ref.inputAttributes;
          var inputEventHandlers = ref.inputEventHandlers;
          var index2 = ref.index;
          return React__default["default"].createElement("div", { className: classNames2.searchWrapper }, React__default["default"].createElement("input", Object.assign({}, inputAttributes, inputEventHandlers, { ref: this.input, value: query, placeholder: placeholderText, className: classNames2.searchInput, role: "combobox", "aria-autocomplete": "list", "aria-label": ariaLabelText || placeholderText, "aria-owns": id, "aria-activedescendant": index2 > -1 ? id + "-" + index2 : null, "aria-expanded": expanded, style: { width: this.state.inputWidth } })), React__default["default"].createElement("div", { ref: this.sizer, style: SIZER_STYLES }, query || placeholderText));
        };
        return Input2;
      }(React__default["default"].Component);
      function escapeForRegExp(string2) {
        return string2.replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&");
      }
      function matchAny(string2) {
        return new RegExp(escapeForRegExp(string2), "gi");
      }
      function matchPartial(string2) {
        return new RegExp("(?:^|\\s)" + escapeForRegExp(string2), "i");
      }
      function matchExact(string2) {
        return new RegExp("^" + escapeForRegExp(string2) + "$", "i");
      }
      function markIt(name, query) {
        var regexp = matchAny(query);
        return name.replace(regexp, "<mark>$&</mark>");
      }
      function DefaultSuggestionComponent(ref) {
        var item = ref.item;
        var query = ref.query;
        return React__default["default"].createElement("span", { dangerouslySetInnerHTML: { __html: markIt(item.name, query) } });
      }
      function Suggestions(props) {
        var SuggestionComponent = props.suggestionComponent || DefaultSuggestionComponent;
        var options = props.options.map(function(item, index2) {
          var key = props.id + "-" + index2;
          var classNames2 = [];
          if (props.index === index2) {
            classNames2.push(props.classNames.suggestionActive);
          }
          if (item.disabled) {
            classNames2.push(props.classNames.suggestionDisabled);
          }
          return React__default["default"].createElement("li", {
            id: key,
            key,
            role: "option",
            className: classNames2.join(" "),
            "aria-disabled": Boolean(item.disabled),
            onMouseDown: function(e2) {
              return e2.preventDefault();
            },
            onClick: function() {
              return props.addTag(item);
            }
          }, item.prefix ? React__default["default"].createElement("span", { className: props.classNames.suggestionPrefix }, item.prefix, " ") : null, item.disableMarkIt ? item.name : React__default["default"].createElement(SuggestionComponent, { item, query: props.query }));
        });
        return React__default["default"].createElement("div", { className: props.classNames.suggestions }, React__default["default"].createElement("ul", { role: "listbox", id: props.id }, options));
      }
      function focusNextElement(scope, currentTarget) {
        var interactiveEls = scope.querySelectorAll("a,button,input");
        var currentEl = Array.prototype.findIndex.call(interactiveEls, function(element) {
          return element === currentTarget;
        });
        var nextEl = interactiveEls[currentEl - 1] || interactiveEls[currentEl + 1];
        if (nextEl) {
          nextEl.focus();
        }
      }
      var KEYS = {
        ENTER: "Enter",
        TAB: "Tab",
        BACKSPACE: "Backspace",
        UP_ARROW: "ArrowUp",
        UP_ARROW_COMPAT: "Up",
        DOWN_ARROW: "ArrowDown",
        DOWN_ARROW_COMPAT: "Down"
      };
      var CLASS_NAMES = {
        root: "react-tags",
        rootFocused: "is-focused",
        selected: "react-tags__selected",
        selectedTag: "react-tags__selected-tag",
        selectedTagName: "react-tags__selected-tag-name",
        search: "react-tags__search",
        searchWrapper: "react-tags__search-wrapper",
        searchInput: "react-tags__search-input",
        suggestions: "react-tags__suggestions",
        suggestionActive: "is-active",
        suggestionDisabled: "is-disabled",
        suggestionPrefix: "react-tags__suggestion-prefix"
      };
      function findMatchIndex(options, query) {
        return options.findIndex(function(option) {
          return matchExact(query).test(option.name);
        });
      }
      function pressDelimiter() {
        if (this.state.query.length >= this.props.minQueryLength) {
          var match = findMatchIndex(this.state.options, this.state.query);
          var index2 = this.state.index === -1 ? match : this.state.index;
          var tag = index2 > -1 ? this.state.options[index2] : null;
          if (tag) {
            this.addTag(tag);
          } else if (this.props.allowNew) {
            this.addTag({ name: this.state.query });
          }
        }
      }
      function pressUpKey(e2) {
        e2.preventDefault();
        var size = this.state.options.length - 1;
        this.setState({ index: this.state.index <= 0 ? size : this.state.index - 1 });
      }
      function pressDownKey(e2) {
        e2.preventDefault();
        var size = this.state.options.length - 1;
        this.setState({ index: this.state.index >= size ? 0 : this.state.index + 1 });
      }
      function pressBackspaceKey() {
        if (!this.state.query.length) {
          this.deleteTag(this.props.tags.length - 1);
        }
      }
      function defaultSuggestionsFilter(item, query) {
        var regexp = matchPartial(query);
        return regexp.test(item.name);
      }
      function getOptions2(props, state) {
        var options;
        if (props.suggestionsTransform) {
          options = props.suggestionsTransform(state.query, props.suggestions);
        } else {
          options = props.suggestions.filter(function(item) {
            return props.suggestionsFilter(item, state.query);
          });
        }
        options = options.slice(0, props.maxSuggestionsLength);
        if (props.allowNew && props.newTagText && findMatchIndex(options, state.query) === -1) {
          options.push({ id: 0, name: state.query, prefix: props.newTagText, disableMarkIt: true });
        } else if (props.noSuggestionsText && options.length === 0) {
          options.push({ id: 0, name: props.noSuggestionsText, disabled: true, disableMarkIt: true });
        }
        return options;
      }
      var ReactTags = /* @__PURE__ */ function(superclass) {
        function ReactTags2(props) {
          superclass.call(this, props);
          this.state = {
            query: "",
            focused: false,
            index: -1
          };
          this.inputEventHandlers = {
            onChange: function() {
            },
            onBlur: this.onBlur.bind(this),
            onFocus: this.onFocus.bind(this),
            onInput: this.onInput.bind(this),
            onKeyDown: this.onKeyDown.bind(this)
          };
          this.container = React__default["default"].createRef();
          this.input = React__default["default"].createRef();
        }
        if (superclass)
          ReactTags2.__proto__ = superclass;
        ReactTags2.prototype = Object.create(superclass && superclass.prototype);
        ReactTags2.prototype.constructor = ReactTags2;
        ReactTags2.prototype.onInput = function onInput(e2) {
          var query = e2.target.value;
          if (this.props.onInput) {
            this.props.onInput(query);
          }
          if (query.length === this.state.query.length + 1 && this.props.delimiters.indexOf(query.slice(-1)) > -1) {
            pressDelimiter.call(this);
          } else if (query !== this.state.query) {
            this.setState({ query });
          }
        };
        ReactTags2.prototype.onKeyDown = function onKeyDown(e2) {
          if (this.props.delimiters.indexOf(e2.key) > -1) {
            if (this.state.query || this.state.index > -1) {
              e2.preventDefault();
            }
            pressDelimiter.call(this);
          }
          if (e2.key === KEYS.BACKSPACE && this.props.allowBackspace) {
            pressBackspaceKey.call(this, e2);
          }
          if (e2.key === KEYS.UP_ARROW || e2.key === KEYS.UP_ARROW_COMPAT) {
            pressUpKey.call(this, e2);
          }
          if (e2.key === KEYS.DOWN_ARROW || e2.key === KEYS.DOWN_ARROW_COMPAT) {
            pressDownKey.call(this, e2);
          }
        };
        ReactTags2.prototype.onClick = function onClick(e2) {
          if (document.activeElement !== e2.target) {
            this.focusInput();
          }
        };
        ReactTags2.prototype.onBlur = function onBlur() {
          this.setState({ focused: false, index: -1 });
          if (this.props.onBlur) {
            this.props.onBlur();
          }
          if (this.props.addOnBlur) {
            pressDelimiter.call(this);
          }
        };
        ReactTags2.prototype.onFocus = function onFocus() {
          this.setState({ focused: true });
          if (this.props.onFocus) {
            this.props.onFocus();
          }
        };
        ReactTags2.prototype.onDeleteTag = function onDeleteTag(index2, event) {
          if (this.container.current) {
            focusNextElement(this.container.current, event.currentTarget);
          }
          this.deleteTag(index2);
        };
        ReactTags2.prototype.addTag = function addTag(tag) {
          if (tag.disabled) {
            return;
          }
          if (typeof this.props.onValidate === "function" && !this.props.onValidate(tag)) {
            return;
          }
          this.props.onAddition({ id: tag.id, name: tag.name });
          this.clearInput();
        };
        ReactTags2.prototype.deleteTag = function deleteTag(i2) {
          this.props.onDelete(i2);
        };
        ReactTags2.prototype.clearInput = function clearInput() {
          this.setState({
            query: "",
            index: -1
          });
        };
        ReactTags2.prototype.clearSelectedIndex = function clearSelectedIndex() {
          this.setState({ index: -1 });
        };
        ReactTags2.prototype.focusInput = function focusInput() {
          if (this.input.current && this.input.current.input.current) {
            this.input.current.input.current.focus();
          }
        };
        ReactTags2.prototype.render = function render2() {
          var this$1$1 = this;
          var TagComponent = this.props.tagComponent || Tag;
          var expanded = this.state.focused && this.state.query.length >= this.props.minQueryLength;
          var classNames2 = Object.assign({}, CLASS_NAMES, this.props.classNames);
          var rootClassNames = [classNames2.root];
          this.state.focused && rootClassNames.push(classNames2.rootFocused);
          return React__default["default"].createElement("div", { ref: this.container, className: rootClassNames.join(" "), onClick: this.onClick.bind(this) }, React__default["default"].createElement("div", {
            className: classNames2.selected,
            "aria-relevant": "additions removals",
            "aria-live": "polite"
          }, this.props.tags.map(function(tag, i2) {
            return React__default["default"].createElement(TagComponent, {
              key: i2,
              tag,
              removeButtonText: this$1$1.props.removeButtonText,
              classNames: classNames2,
              onDelete: this$1$1.onDeleteTag.bind(this$1$1, i2)
            });
          })), React__default["default"].createElement("div", { className: classNames2.search }, React__default["default"].createElement(Input, Object.assign({}, this.state, { id: this.props.id, ref: this.input, classNames: classNames2, inputAttributes: this.props.inputAttributes, inputEventHandlers: this.inputEventHandlers, autoresize: this.props.autoresize, expanded, placeholderText: this.props.placeholderText, ariaLabelText: this.props.ariaLabelText })), expanded && this.state.options.length ? React__default["default"].createElement(Suggestions, Object.assign({}, this.state, { id: this.props.id, classNames: classNames2, expanded, addTag: this.addTag.bind(this), suggestionComponent: this.props.suggestionComponent })) : null));
        };
        ReactTags2.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
          if (state.prevQuery !== state.query || state.prevSuggestions !== props.suggestions) {
            return {
              prevQuery: state.query,
              prevSuggestions: props.suggestions,
              options: getOptions2(props, state)
            };
          }
          return null;
        };
        return ReactTags2;
      }(React__default["default"].Component);
      ReactTags.defaultProps = {
        id: "ReactTags",
        tags: [],
        placeholderText: "Add new tag",
        removeButtonText: "Click to remove tag",
        noSuggestionsText: null,
        newTagText: null,
        suggestions: [],
        suggestionsFilter: defaultSuggestionsFilter,
        suggestionsTransform: null,
        autoresize: true,
        classNames: CLASS_NAMES,
        delimiters: [KEYS.TAB, KEYS.ENTER],
        minQueryLength: 2,
        maxSuggestionsLength: 6,
        allowNew: false,
        allowBackspace: true,
        addOnBlur: false,
        tagComponent: null,
        suggestionComponent: null,
        inputAttributes: {}
      };
      ReactTags.propTypes = {
        id: PropTypes__default["default"].string,
        tags: PropTypes__default["default"].arrayOf(PropTypes__default["default"].object),
        placeholderText: PropTypes__default["default"].string,
        ariaLabelText: PropTypes__default["default"].string,
        removeButtonText: PropTypes__default["default"].string,
        noSuggestionsText: PropTypes__default["default"].string,
        newTagText: PropTypes__default["default"].string,
        suggestions: PropTypes__default["default"].arrayOf(PropTypes__default["default"].object),
        suggestionsFilter: PropTypes__default["default"].func,
        suggestionsTransform: PropTypes__default["default"].func,
        autoresize: PropTypes__default["default"].bool,
        delimiters: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string),
        onDelete: PropTypes__default["default"].func.isRequired,
        onAddition: PropTypes__default["default"].func.isRequired,
        onInput: PropTypes__default["default"].func,
        onFocus: PropTypes__default["default"].func,
        onBlur: PropTypes__default["default"].func,
        onValidate: PropTypes__default["default"].func,
        minQueryLength: PropTypes__default["default"].number,
        maxSuggestionsLength: PropTypes__default["default"].number,
        classNames: PropTypes__default["default"].object,
        allowNew: PropTypes__default["default"].bool,
        allowBackspace: PropTypes__default["default"].bool,
        addOnBlur: PropTypes__default["default"].bool,
        tagComponent: PropTypes__default["default"].oneOfType([
          PropTypes__default["default"].func,
          PropTypes__default["default"].element
        ]),
        suggestionComponent: PropTypes__default["default"].oneOfType([
          PropTypes__default["default"].func,
          PropTypes__default["default"].element
        ]),
        inputAttributes: PropTypes__default["default"].object
      };
      return ReactTags;
    });
  }
});

// node_modules/react-bricks/react-bricks.esm.js
init_react();
var ue2 = __toESM(require_react());
var import_react5 = __toESM(require_react());

// node_modules/slate/dist/index.es.js
init_react();

// node_modules/is-plain-object/dist/is-plain-object.mjs
init_react();
function isObject(o2) {
  return Object.prototype.toString.call(o2) === "[object Object]";
}
function isPlainObject(o2) {
  var ctor, prot;
  if (isObject(o2) === false)
    return false;
  ctor = o2.constructor;
  if (ctor === void 0)
    return true;
  prot = ctor.prototype;
  if (isObject(prot) === false)
    return false;
  if (prot.hasOwnProperty("isPrototypeOf") === false) {
    return false;
  }
  return true;
}

// node_modules/immer/dist/immer.esm.js
init_react();
function n(n4) {
  for (var r3 = arguments.length, t3 = Array(r3 > 1 ? r3 - 1 : 0), e2 = 1; e2 < r3; e2++)
    t3[e2 - 1] = arguments[e2];
  if (true) {
    var i2 = Y2[n4], o2 = i2 ? typeof i2 == "function" ? i2.apply(null, t3) : i2 : "unknown error nr: " + n4;
    throw Error("[Immer] " + o2);
  }
  throw Error("[Immer] minified error nr: " + n4 + (t3.length ? " " + t3.map(function(n5) {
    return "'" + n5 + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function r(n4) {
  return !!n4 && !!n4[Q];
}
function t(n4) {
  return !!n4 && (function(n5) {
    if (!n5 || typeof n5 != "object")
      return false;
    var r3 = Object.getPrototypeOf(n5);
    if (r3 === null)
      return true;
    var t3 = Object.hasOwnProperty.call(r3, "constructor") && r3.constructor;
    return t3 === Object || typeof t3 == "function" && Function.toString.call(t3) === Z;
  }(n4) || Array.isArray(n4) || !!n4[L] || !!n4.constructor[L] || s2(n4) || v2(n4));
}
function i(n4, r3, t3) {
  t3 === void 0 && (t3 = false), o(n4) === 0 ? (t3 ? Object.keys : nn)(n4).forEach(function(e2) {
    t3 && typeof e2 == "symbol" || r3(e2, n4[e2], n4);
  }) : n4.forEach(function(t4, e2) {
    return r3(e2, t4, n4);
  });
}
function o(n4) {
  var r3 = n4[Q];
  return r3 ? r3.i > 3 ? r3.i - 4 : r3.i : Array.isArray(n4) ? 1 : s2(n4) ? 2 : v2(n4) ? 3 : 0;
}
function u(n4, r3) {
  return o(n4) === 2 ? n4.has(r3) : Object.prototype.hasOwnProperty.call(n4, r3);
}
function a(n4, r3) {
  return o(n4) === 2 ? n4.get(r3) : n4[r3];
}
function f2(n4, r3, t3) {
  var e2 = o(n4);
  e2 === 2 ? n4.set(r3, t3) : e2 === 3 ? (n4.delete(r3), n4.add(t3)) : n4[r3] = t3;
}
function c(n4, r3) {
  return n4 === r3 ? n4 !== 0 || 1 / n4 == 1 / r3 : n4 != n4 && r3 != r3;
}
function s2(n4) {
  return X && n4 instanceof Map;
}
function v2(n4) {
  return q && n4 instanceof Set;
}
function p2(n4) {
  return n4.o || n4.t;
}
function l(n4) {
  if (Array.isArray(n4))
    return Array.prototype.slice.call(n4);
  var r3 = rn(n4);
  delete r3[Q];
  for (var t3 = nn(r3), e2 = 0; e2 < t3.length; e2++) {
    var i2 = t3[e2], o2 = r3[i2];
    o2.writable === false && (o2.writable = true, o2.configurable = true), (o2.get || o2.set) && (r3[i2] = { configurable: true, writable: true, enumerable: o2.enumerable, value: n4[i2] });
  }
  return Object.create(Object.getPrototypeOf(n4), r3);
}
function d(n4, e2) {
  return e2 === void 0 && (e2 = false), y2(n4) || r(n4) || !t(n4) ? n4 : (o(n4) > 1 && (n4.set = n4.add = n4.clear = n4.delete = h2), Object.freeze(n4), e2 && i(n4, function(n5, r3) {
    return d(r3, true);
  }, true), n4);
}
function h2() {
  n(2);
}
function y2(n4) {
  return n4 == null || typeof n4 != "object" || Object.isFrozen(n4);
}
function b2(r3) {
  var t3 = tn[r3];
  return t3 || n(18, r3), t3;
}
function _() {
  return U || n(0), U;
}
function j2(n4, r3) {
  r3 && (b2("Patches"), n4.u = [], n4.s = [], n4.v = r3);
}
function O(n4) {
  g2(n4), n4.p.forEach(S), n4.p = null;
}
function g2(n4) {
  n4 === U && (U = n4.l);
}
function w(n4) {
  return U = { p: [], l: U, h: n4, m: true, _: 0 };
}
function S(n4) {
  var r3 = n4[Q];
  r3.i === 0 || r3.i === 1 ? r3.j() : r3.O = true;
}
function P(r3, e2) {
  e2._ = e2.p.length;
  var i2 = e2.p[0], o2 = r3 !== void 0 && r3 !== i2;
  return e2.h.g || b2("ES5").S(e2, r3, o2), o2 ? (i2[Q].P && (O(e2), n(4)), t(r3) && (r3 = M(e2, r3), e2.l || x(e2, r3)), e2.u && b2("Patches").M(i2[Q].t, r3, e2.u, e2.s)) : r3 = M(e2, i2, []), O(e2), e2.u && e2.v(e2.u, e2.s), r3 !== H2 ? r3 : void 0;
}
function M(n4, r3, t3) {
  if (y2(r3))
    return r3;
  var e2 = r3[Q];
  if (!e2)
    return i(r3, function(i2, o3) {
      return A2(n4, e2, r3, i2, o3, t3);
    }, true), r3;
  if (e2.A !== n4)
    return r3;
  if (!e2.P)
    return x(n4, e2.t, true), e2.t;
  if (!e2.I) {
    e2.I = true, e2.A._--;
    var o2 = e2.i === 4 || e2.i === 5 ? e2.o = l(e2.k) : e2.o;
    i(e2.i === 3 ? new Set(o2) : o2, function(r4, i2) {
      return A2(n4, e2, o2, r4, i2, t3);
    }), x(n4, o2, false), t3 && n4.u && b2("Patches").R(e2, t3, n4.u, n4.s);
  }
  return e2.o;
}
function A2(e2, i2, o2, a2, c2, s3) {
  if (c2 === o2 && n(5), r(c2)) {
    var v3 = M(e2, c2, s3 && i2 && i2.i !== 3 && !u(i2.D, a2) ? s3.concat(a2) : void 0);
    if (f2(o2, a2, v3), !r(v3))
      return;
    e2.m = false;
  }
  if (t(c2) && !y2(c2)) {
    if (!e2.h.F && e2._ < 1)
      return;
    M(e2, c2), i2 && i2.A.l || x(e2, c2);
  }
}
function x(n4, r3, t3) {
  t3 === void 0 && (t3 = false), n4.h.F && n4.m && d(r3, t3);
}
function z(n4, r3) {
  var t3 = n4[Q];
  return (t3 ? p2(t3) : n4)[r3];
}
function I2(n4, r3) {
  if (r3 in n4)
    for (var t3 = Object.getPrototypeOf(n4); t3; ) {
      var e2 = Object.getOwnPropertyDescriptor(t3, r3);
      if (e2)
        return e2;
      t3 = Object.getPrototypeOf(t3);
    }
}
function k2(n4) {
  n4.P || (n4.P = true, n4.l && k2(n4.l));
}
function E2(n4) {
  n4.o || (n4.o = l(n4.t));
}
function R(n4, r3, t3) {
  var e2 = s2(r3) ? b2("MapSet").N(r3, t3) : v2(r3) ? b2("MapSet").T(r3, t3) : n4.g ? function(n5, r4) {
    var t4 = Array.isArray(n5), e3 = { i: t4 ? 1 : 0, A: r4 ? r4.A : _(), P: false, I: false, D: {}, l: r4, t: n5, k: null, o: null, j: null, C: false }, i2 = e3, o2 = en;
    t4 && (i2 = [e3], o2 = on);
    var u2 = Proxy.revocable(i2, o2), a2 = u2.revoke, f3 = u2.proxy;
    return e3.k = f3, e3.j = a2, f3;
  }(r3, t3) : b2("ES5").J(r3, t3);
  return (t3 ? t3.A : _()).p.push(e2), e2;
}
function D(e2) {
  return r(e2) || n(22, e2), function n4(r3) {
    if (!t(r3))
      return r3;
    var e3, u2 = r3[Q], c2 = o(r3);
    if (u2) {
      if (!u2.P && (u2.i < 4 || !b2("ES5").K(u2)))
        return u2.t;
      u2.I = true, e3 = F(r3, c2), u2.I = false;
    } else
      e3 = F(r3, c2);
    return i(e3, function(r4, t3) {
      u2 && a(u2.t, r4) === t3 || f2(e3, r4, n4(t3));
    }), c2 === 3 ? new Set(e3) : e3;
  }(e2);
}
function F(n4, r3) {
  switch (r3) {
    case 2:
      return new Map(n4);
    case 3:
      return Array.from(n4);
  }
  return l(n4);
}
var G;
var U;
var W = typeof Symbol != "undefined" && typeof Symbol("x") == "symbol";
var X = typeof Map != "undefined";
var q = typeof Set != "undefined";
var B2 = typeof Proxy != "undefined" && Proxy.revocable !== void 0 && typeof Reflect != "undefined";
var H2 = W ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = true, G);
var L = W ? Symbol.for("immer-draftable") : "__$immer_draftable";
var Q = W ? Symbol.for("immer-state") : "__$immer_state";
var V = typeof Symbol != "undefined" && Symbol.iterator || "@@iterator";
var Y2 = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(n4) {
  return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + n4;
}, 4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.", 5: "Immer forbids circular references", 6: "The first or second argument to `produce` must be a function", 7: "The third argument to `produce` must be a function or undefined", 8: "First argument to `createDraft` must be a plain object, an array, or an immerable object", 9: "First argument to `finishDraft` must be a draft returned by `createDraft`", 10: "The given draft is already finalized", 11: "Object.defineProperty() cannot be used on an Immer draft", 12: "Object.setPrototypeOf() cannot be used on an Immer draft", 13: "Immer only supports deleting array indices", 14: "Immer only supports setting array indices and the 'length' property", 15: function(n4) {
  return "Cannot apply patch, path doesn't resolve: " + n4;
}, 16: 'Sets cannot have "replace" patches.', 17: function(n4) {
  return "Unsupported patch operation: " + n4;
}, 18: function(n4) {
  return "The plugin for '" + n4 + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + n4 + "()` when initializing your application.";
}, 20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available", 21: function(n4) {
  return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + n4 + "'";
}, 22: function(n4) {
  return "'current' expects a draft, got: " + n4;
}, 23: function(n4) {
  return "'original' expects a draft, got: " + n4;
}, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" };
var Z = "" + Object.prototype.constructor;
var nn = typeof Reflect != "undefined" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(n4) {
  return Object.getOwnPropertyNames(n4).concat(Object.getOwnPropertySymbols(n4));
} : Object.getOwnPropertyNames;
var rn = Object.getOwnPropertyDescriptors || function(n4) {
  var r3 = {};
  return nn(n4).forEach(function(t3) {
    r3[t3] = Object.getOwnPropertyDescriptor(n4, t3);
  }), r3;
};
var tn = {};
var en = { get: function(n4, r3) {
  if (r3 === Q)
    return n4;
  var e2 = p2(n4);
  if (!u(e2, r3))
    return function(n5, r4, t3) {
      var e3, i3 = I2(r4, t3);
      return i3 ? "value" in i3 ? i3.value : (e3 = i3.get) === null || e3 === void 0 ? void 0 : e3.call(n5.k) : void 0;
    }(n4, e2, r3);
  var i2 = e2[r3];
  return n4.I || !t(i2) ? i2 : i2 === z(n4.t, r3) ? (E2(n4), n4.o[r3] = R(n4.A.h, i2, n4)) : i2;
}, has: function(n4, r3) {
  return r3 in p2(n4);
}, ownKeys: function(n4) {
  return Reflect.ownKeys(p2(n4));
}, set: function(n4, r3, t3) {
  var e2 = I2(p2(n4), r3);
  if (e2 == null ? void 0 : e2.set)
    return e2.set.call(n4.k, t3), true;
  if (!n4.P) {
    var i2 = z(p2(n4), r3), o2 = i2 == null ? void 0 : i2[Q];
    if (o2 && o2.t === t3)
      return n4.o[r3] = t3, n4.D[r3] = false, true;
    if (c(t3, i2) && (t3 !== void 0 || u(n4.t, r3)))
      return true;
    E2(n4), k2(n4);
  }
  return n4.o[r3] === t3 && typeof t3 != "number" && (t3 !== void 0 || r3 in n4.o) || (n4.o[r3] = t3, n4.D[r3] = true, true);
}, deleteProperty: function(n4, r3) {
  return z(n4.t, r3) !== void 0 || r3 in n4.t ? (n4.D[r3] = false, E2(n4), k2(n4)) : delete n4.D[r3], n4.o && delete n4.o[r3], true;
}, getOwnPropertyDescriptor: function(n4, r3) {
  var t3 = p2(n4), e2 = Reflect.getOwnPropertyDescriptor(t3, r3);
  return e2 ? { writable: true, configurable: n4.i !== 1 || r3 !== "length", enumerable: e2.enumerable, value: t3[r3] } : e2;
}, defineProperty: function() {
  n(11);
}, getPrototypeOf: function(n4) {
  return Object.getPrototypeOf(n4.t);
}, setPrototypeOf: function() {
  n(12);
} };
var on = {};
i(en, function(n4, r3) {
  on[n4] = function() {
    return arguments[0] = arguments[0][0], r3.apply(this, arguments);
  };
}), on.deleteProperty = function(r3, t3) {
  return isNaN(parseInt(t3)) && n(13), on.set.call(this, r3, t3, void 0);
}, on.set = function(r3, t3, e2) {
  return t3 !== "length" && isNaN(parseInt(t3)) && n(14), en.set.call(this, r3[0], t3, e2, r3[0]);
};
var un = function() {
  function e2(r3) {
    var e3 = this;
    this.g = B2, this.F = true, this.produce = function(r4, i3, o2) {
      if (typeof r4 == "function" && typeof i3 != "function") {
        var u2 = i3;
        i3 = r4;
        var a2 = e3;
        return function(n4) {
          var r5 = this;
          n4 === void 0 && (n4 = u2);
          for (var t3 = arguments.length, e4 = Array(t3 > 1 ? t3 - 1 : 0), o3 = 1; o3 < t3; o3++)
            e4[o3 - 1] = arguments[o3];
          return a2.produce(n4, function(n5) {
            var t4;
            return (t4 = i3).call.apply(t4, [r5, n5].concat(e4));
          });
        };
      }
      var f3;
      if (typeof i3 != "function" && n(6), o2 !== void 0 && typeof o2 != "function" && n(7), t(r4)) {
        var c2 = w(e3), s3 = R(e3, r4, void 0), v3 = true;
        try {
          f3 = i3(s3), v3 = false;
        } finally {
          v3 ? O(c2) : g2(c2);
        }
        return typeof Promise != "undefined" && f3 instanceof Promise ? f3.then(function(n4) {
          return j2(c2, o2), P(n4, c2);
        }, function(n4) {
          throw O(c2), n4;
        }) : (j2(c2, o2), P(f3, c2));
      }
      if (!r4 || typeof r4 != "object") {
        if ((f3 = i3(r4)) === void 0 && (f3 = r4), f3 === H2 && (f3 = void 0), e3.F && d(f3, true), o2) {
          var p3 = [], l2 = [];
          b2("Patches").M(r4, f3, p3, l2), o2(p3, l2);
        }
        return f3;
      }
      n(21, r4);
    }, this.produceWithPatches = function(n4, r4) {
      if (typeof n4 == "function")
        return function(r5) {
          for (var t4 = arguments.length, i4 = Array(t4 > 1 ? t4 - 1 : 0), o3 = 1; o3 < t4; o3++)
            i4[o3 - 1] = arguments[o3];
          return e3.produceWithPatches(r5, function(r6) {
            return n4.apply(void 0, [r6].concat(i4));
          });
        };
      var t3, i3, o2 = e3.produce(n4, r4, function(n5, r5) {
        t3 = n5, i3 = r5;
      });
      return typeof Promise != "undefined" && o2 instanceof Promise ? o2.then(function(n5) {
        return [n5, t3, i3];
      }) : [o2, t3, i3];
    }, typeof (r3 == null ? void 0 : r3.useProxies) == "boolean" && this.setUseProxies(r3.useProxies), typeof (r3 == null ? void 0 : r3.autoFreeze) == "boolean" && this.setAutoFreeze(r3.autoFreeze);
  }
  var i2 = e2.prototype;
  return i2.createDraft = function(e3) {
    t(e3) || n(8), r(e3) && (e3 = D(e3));
    var i3 = w(this), o2 = R(this, e3, void 0);
    return o2[Q].C = true, g2(i3), o2;
  }, i2.finishDraft = function(r3, t3) {
    var e3 = r3 && r3[Q];
    e3 && e3.C || n(9), e3.I && n(10);
    var i3 = e3.A;
    return j2(i3, t3), P(void 0, i3);
  }, i2.setAutoFreeze = function(n4) {
    this.F = n4;
  }, i2.setUseProxies = function(r3) {
    r3 && !B2 && n(20), this.g = r3;
  }, i2.applyPatches = function(n4, t3) {
    var e3;
    for (e3 = t3.length - 1; e3 >= 0; e3--) {
      var i3 = t3[e3];
      if (i3.path.length === 0 && i3.op === "replace") {
        n4 = i3.value;
        break;
      }
    }
    e3 > -1 && (t3 = t3.slice(e3 + 1));
    var o2 = b2("Patches").$;
    return r(n4) ? o2(n4, t3) : this.produce(n4, function(n5) {
      return o2(n5, t3);
    });
  }, e2;
}();
var an = new un();
var fn = an.produce;
var cn = an.produceWithPatches.bind(an);
var sn = an.setAutoFreeze.bind(an);
var vn = an.setUseProxies.bind(an);
var pn = an.applyPatches.bind(an);
var ln = an.createDraft.bind(an);
var dn = an.finishDraft.bind(an);

// node_modules/slate/dist/index.es.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var DIRTY_PATHS = /* @__PURE__ */ new WeakMap();
var DIRTY_PATH_KEYS = /* @__PURE__ */ new WeakMap();
var FLUSHING = /* @__PURE__ */ new WeakMap();
var NORMALIZING = /* @__PURE__ */ new WeakMap();
var PATH_REFS = /* @__PURE__ */ new WeakMap();
var POINT_REFS = /* @__PURE__ */ new WeakMap();
var RANGE_REFS = /* @__PURE__ */ new WeakMap();
function ownKeys$9(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$9(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    if (i2 % 2) {
      ownKeys$9(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$9(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var createEditor = () => {
  var editor = {
    children: [],
    operations: [],
    selection: null,
    marks: null,
    isInline: () => false,
    isVoid: () => false,
    onChange: () => {
    },
    apply: (op) => {
      for (var ref of Editor.pathRefs(editor)) {
        PathRef.transform(ref, op);
      }
      for (var _ref of Editor.pointRefs(editor)) {
        PointRef.transform(_ref, op);
      }
      for (var _ref2 of Editor.rangeRefs(editor)) {
        RangeRef.transform(_ref2, op);
      }
      var oldDirtyPaths = DIRTY_PATHS.get(editor) || [];
      var oldDirtyPathKeys = DIRTY_PATH_KEYS.get(editor) || /* @__PURE__ */ new Set();
      var dirtyPaths;
      var dirtyPathKeys;
      var add = (path2) => {
        if (path2) {
          var key = path2.join(",");
          if (!dirtyPathKeys.has(key)) {
            dirtyPathKeys.add(key);
            dirtyPaths.push(path2);
          }
        }
      };
      if (Path.operationCanTransformPath(op)) {
        dirtyPaths = [];
        dirtyPathKeys = /* @__PURE__ */ new Set();
        for (var path of oldDirtyPaths) {
          var newPath = Path.transform(path, op);
          add(newPath);
        }
      } else {
        dirtyPaths = oldDirtyPaths;
        dirtyPathKeys = oldDirtyPathKeys;
      }
      var newDirtyPaths = getDirtyPaths(op);
      for (var _path of newDirtyPaths) {
        add(_path);
      }
      DIRTY_PATHS.set(editor, dirtyPaths);
      DIRTY_PATH_KEYS.set(editor, dirtyPathKeys);
      Transforms.transform(editor, op);
      editor.operations.push(op);
      Editor.normalize(editor);
      if (op.type === "set_selection") {
        editor.marks = null;
      }
      if (!FLUSHING.get(editor)) {
        FLUSHING.set(editor, true);
        Promise.resolve().then(() => {
          FLUSHING.set(editor, false);
          editor.onChange();
          editor.operations = [];
        });
      }
    },
    addMark: (key, value) => {
      var {
        selection
      } = editor;
      if (selection) {
        if (Range.isExpanded(selection)) {
          Transforms.setNodes(editor, {
            [key]: value
          }, {
            match: Text.isText,
            split: true
          });
        } else {
          var marks = _objectSpread$9(_objectSpread$9({}, Editor.marks(editor) || {}), {}, {
            [key]: value
          });
          editor.marks = marks;
          if (!FLUSHING.get(editor)) {
            editor.onChange();
          }
        }
      }
    },
    deleteBackward: (unit) => {
      var {
        selection
      } = editor;
      if (selection && Range.isCollapsed(selection)) {
        Transforms.delete(editor, {
          unit,
          reverse: true
        });
      }
    },
    deleteForward: (unit) => {
      var {
        selection
      } = editor;
      if (selection && Range.isCollapsed(selection)) {
        Transforms.delete(editor, {
          unit
        });
      }
    },
    deleteFragment: (direction) => {
      var {
        selection
      } = editor;
      if (selection && Range.isExpanded(selection)) {
        Transforms.delete(editor, {
          reverse: direction === "backward"
        });
      }
    },
    getFragment: () => {
      var {
        selection
      } = editor;
      if (selection) {
        return Node.fragment(editor, selection);
      }
      return [];
    },
    insertBreak: () => {
      Transforms.splitNodes(editor, {
        always: true
      });
    },
    insertFragment: (fragment) => {
      Transforms.insertFragment(editor, fragment);
    },
    insertNode: (node2) => {
      Transforms.insertNodes(editor, node2);
    },
    insertText: (text) => {
      var {
        selection,
        marks
      } = editor;
      if (selection) {
        if (marks) {
          var node2 = _objectSpread$9({
            text
          }, marks);
          Transforms.insertNodes(editor, node2);
        } else {
          Transforms.insertText(editor, text);
        }
        editor.marks = null;
      }
    },
    normalizeNode: (entry) => {
      var [node2, path] = entry;
      if (Text.isText(node2)) {
        return;
      }
      if (Element2.isElement(node2) && node2.children.length === 0) {
        var child = {
          text: ""
        };
        Transforms.insertNodes(editor, child, {
          at: path.concat(0),
          voids: true
        });
        return;
      }
      var shouldHaveInlines = Editor.isEditor(node2) ? false : Element2.isElement(node2) && (editor.isInline(node2) || node2.children.length === 0 || Text.isText(node2.children[0]) || editor.isInline(node2.children[0]));
      var n4 = 0;
      for (var i2 = 0; i2 < node2.children.length; i2++, n4++) {
        var currentNode = Node.get(editor, path);
        if (Text.isText(currentNode))
          continue;
        var _child = node2.children[i2];
        var prev = currentNode.children[n4 - 1];
        var isLast = i2 === node2.children.length - 1;
        var isInlineOrText = Text.isText(_child) || Element2.isElement(_child) && editor.isInline(_child);
        if (isInlineOrText !== shouldHaveInlines) {
          Transforms.removeNodes(editor, {
            at: path.concat(n4),
            voids: true
          });
          n4--;
        } else if (Element2.isElement(_child)) {
          if (editor.isInline(_child)) {
            if (prev == null || !Text.isText(prev)) {
              var newChild = {
                text: ""
              };
              Transforms.insertNodes(editor, newChild, {
                at: path.concat(n4),
                voids: true
              });
              n4++;
            } else if (isLast) {
              var _newChild = {
                text: ""
              };
              Transforms.insertNodes(editor, _newChild, {
                at: path.concat(n4 + 1),
                voids: true
              });
              n4++;
            }
          }
        } else {
          if (prev != null && Text.isText(prev)) {
            if (Text.equals(_child, prev, {
              loose: true
            })) {
              Transforms.mergeNodes(editor, {
                at: path.concat(n4),
                voids: true
              });
              n4--;
            } else if (prev.text === "") {
              Transforms.removeNodes(editor, {
                at: path.concat(n4 - 1),
                voids: true
              });
              n4--;
            } else if (_child.text === "") {
              Transforms.removeNodes(editor, {
                at: path.concat(n4),
                voids: true
              });
              n4--;
            }
          }
        }
      }
    },
    removeMark: (key) => {
      var {
        selection
      } = editor;
      if (selection) {
        if (Range.isExpanded(selection)) {
          Transforms.unsetNodes(editor, key, {
            match: Text.isText,
            split: true
          });
        } else {
          var marks = _objectSpread$9({}, Editor.marks(editor) || {});
          delete marks[key];
          editor.marks = marks;
          if (!FLUSHING.get(editor)) {
            editor.onChange();
          }
        }
      }
    }
  };
  return editor;
};
var getDirtyPaths = (op) => {
  switch (op.type) {
    case "insert_text":
    case "remove_text":
    case "set_node": {
      var {
        path
      } = op;
      return Path.levels(path);
    }
    case "insert_node": {
      var {
        node: node2,
        path: _path2
      } = op;
      var levels = Path.levels(_path2);
      var descendants = Text.isText(node2) ? [] : Array.from(Node.nodes(node2), (_ref3) => {
        var [, p4] = _ref3;
        return _path2.concat(p4);
      });
      return [...levels, ...descendants];
    }
    case "merge_node": {
      var {
        path: _path3
      } = op;
      var ancestors = Path.ancestors(_path3);
      var previousPath = Path.previous(_path3);
      return [...ancestors, previousPath];
    }
    case "move_node": {
      var {
        path: _path4,
        newPath
      } = op;
      if (Path.equals(_path4, newPath)) {
        return [];
      }
      var oldAncestors = [];
      var newAncestors = [];
      for (var ancestor of Path.ancestors(_path4)) {
        var p3 = Path.transform(ancestor, op);
        oldAncestors.push(p3);
      }
      for (var _ancestor of Path.ancestors(newPath)) {
        var _p = Path.transform(_ancestor, op);
        newAncestors.push(_p);
      }
      var newParent = newAncestors[newAncestors.length - 1];
      var newIndex = newPath[newPath.length - 1];
      var resultPath = newParent.concat(newIndex);
      return [...oldAncestors, ...newAncestors, resultPath];
    }
    case "remove_node": {
      var {
        path: _path5
      } = op;
      var _ancestors = Path.ancestors(_path5);
      return [..._ancestors];
    }
    case "split_node": {
      var {
        path: _path6
      } = op;
      var _levels = Path.levels(_path6);
      var nextPath = Path.next(_path6);
      return [..._levels, nextPath];
    }
    default: {
      return [];
    }
  }
};
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i2;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
      key = sourceSymbolKeys[i2];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
var getCharacterDistance = function getCharacterDistance2(str) {
  var isRTL = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var isLTR = !isRTL;
  var codepoints = isRTL ? codepointsIteratorRTL(str) : str;
  var left2 = CodepointType.None;
  var right2 = CodepointType.None;
  var distance = 0;
  var gb11 = null;
  var gb12Or13 = null;
  for (var char of codepoints) {
    var code = char.codePointAt(0);
    if (!code)
      break;
    var type = getCodepointType(char, code);
    [left2, right2] = isLTR ? [right2, type] : [type, left2];
    if (intersects(left2, CodepointType.ZWJ) && intersects(right2, CodepointType.ExtPict)) {
      if (isLTR) {
        gb11 = endsWithEmojiZWJ(str.substring(0, distance));
      } else {
        gb11 = endsWithEmojiZWJ(str.substring(0, str.length - distance));
      }
      if (!gb11)
        break;
    }
    if (intersects(left2, CodepointType.RI) && intersects(right2, CodepointType.RI)) {
      if (gb12Or13 !== null) {
        gb12Or13 = !gb12Or13;
      } else {
        if (isLTR) {
          gb12Or13 = true;
        } else {
          gb12Or13 = endsWithOddNumberOfRIs(str.substring(0, str.length - distance));
        }
      }
      if (!gb12Or13)
        break;
    }
    if (left2 !== CodepointType.None && right2 !== CodepointType.None && isBoundaryPair(left2, right2)) {
      break;
    }
    distance += char.length;
  }
  return distance || 1;
};
var SPACE = /\s/;
var PUNCTUATION = /[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;
var CHAMELEON = /['\u2018\u2019]/;
var getWordDistance = function getWordDistance2(text) {
  var isRTL = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var dist = 0;
  var started = false;
  while (text.length > 0) {
    var charDist = getCharacterDistance(text, isRTL);
    var [char, remaining] = splitByCharacterDistance(text, charDist, isRTL);
    if (isWordCharacter(char, remaining, isRTL)) {
      started = true;
      dist += charDist;
    } else if (!started) {
      dist += charDist;
    } else {
      break;
    }
    text = remaining;
  }
  return dist;
};
var splitByCharacterDistance = (str, dist, isRTL) => {
  if (isRTL) {
    var at = str.length - dist;
    return [str.slice(at, str.length), str.slice(0, at)];
  }
  return [str.slice(0, dist), str.slice(dist)];
};
var isWordCharacter = function isWordCharacter2(char, remaining) {
  var isRTL = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  if (SPACE.test(char)) {
    return false;
  }
  if (CHAMELEON.test(char)) {
    var charDist = getCharacterDistance(remaining, isRTL);
    var [nextChar, nextRemaining] = splitByCharacterDistance(remaining, charDist, isRTL);
    if (isWordCharacter2(nextChar, nextRemaining, isRTL)) {
      return true;
    }
  }
  if (PUNCTUATION.test(char)) {
    return false;
  }
  return true;
};
var codepointsIteratorRTL = function* codepointsIteratorRTL2(str) {
  var end2 = str.length - 1;
  for (var i2 = 0; i2 < str.length; i2++) {
    var char1 = str.charAt(end2 - i2);
    if (isLowSurrogate(char1.charCodeAt(0))) {
      var char2 = str.charAt(end2 - i2 - 1);
      if (isHighSurrogate(char2.charCodeAt(0))) {
        yield char2 + char1;
        i2++;
        continue;
      }
    }
    yield char1;
  }
};
var isHighSurrogate = (charCode) => {
  return charCode >= 55296 && charCode <= 56319;
};
var isLowSurrogate = (charCode) => {
  return charCode >= 56320 && charCode <= 57343;
};
var CodepointType;
(function(CodepointType2) {
  CodepointType2[CodepointType2["None"] = 0] = "None";
  CodepointType2[CodepointType2["Extend"] = 1] = "Extend";
  CodepointType2[CodepointType2["ZWJ"] = 2] = "ZWJ";
  CodepointType2[CodepointType2["RI"] = 4] = "RI";
  CodepointType2[CodepointType2["Prepend"] = 8] = "Prepend";
  CodepointType2[CodepointType2["SpacingMark"] = 16] = "SpacingMark";
  CodepointType2[CodepointType2["L"] = 32] = "L";
  CodepointType2[CodepointType2["V"] = 64] = "V";
  CodepointType2[CodepointType2["T"] = 128] = "T";
  CodepointType2[CodepointType2["LV"] = 256] = "LV";
  CodepointType2[CodepointType2["LVT"] = 512] = "LVT";
  CodepointType2[CodepointType2["ExtPict"] = 1024] = "ExtPict";
  CodepointType2[CodepointType2["Any"] = 2048] = "Any";
})(CodepointType || (CodepointType = {}));
var reExtend = /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/;
var rePrepend = /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/;
var reSpacingMark = /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/;
var reL = /^[\u1100-\u115F\uA960-\uA97C]$/;
var reV = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/;
var reT = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/;
var reLV = /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/;
var reLVT = /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/;
var reExtPict = /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/;
var getCodepointType = (char, code) => {
  var type = CodepointType.Any;
  if (char.search(reExtend) !== -1) {
    type |= CodepointType.Extend;
  }
  if (code === 8205) {
    type |= CodepointType.ZWJ;
  }
  if (code >= 127462 && code <= 127487) {
    type |= CodepointType.RI;
  }
  if (char.search(rePrepend) !== -1) {
    type |= CodepointType.Prepend;
  }
  if (char.search(reSpacingMark) !== -1) {
    type |= CodepointType.SpacingMark;
  }
  if (char.search(reL) !== -1) {
    type |= CodepointType.L;
  }
  if (char.search(reV) !== -1) {
    type |= CodepointType.V;
  }
  if (char.search(reT) !== -1) {
    type |= CodepointType.T;
  }
  if (char.search(reLV) !== -1) {
    type |= CodepointType.LV;
  }
  if (char.search(reLVT) !== -1) {
    type |= CodepointType.LVT;
  }
  if (char.search(reExtPict) !== -1) {
    type |= CodepointType.ExtPict;
  }
  return type;
};
function intersects(x2, y3) {
  return (x2 & y3) !== 0;
}
var NonBoundaryPairs = [
  [CodepointType.L, CodepointType.L | CodepointType.V | CodepointType.LV | CodepointType.LVT],
  [CodepointType.LV | CodepointType.V, CodepointType.V | CodepointType.T],
  [CodepointType.LVT | CodepointType.T, CodepointType.T],
  [CodepointType.Any, CodepointType.Extend | CodepointType.ZWJ],
  [CodepointType.Any, CodepointType.SpacingMark],
  [CodepointType.Prepend, CodepointType.Any],
  [CodepointType.ZWJ, CodepointType.ExtPict],
  [CodepointType.RI, CodepointType.RI]
];
function isBoundaryPair(left2, right2) {
  return NonBoundaryPairs.findIndex((r3) => intersects(left2, r3[0]) && intersects(right2, r3[1])) === -1;
}
var endingEmojiZWJ = /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/;
var endsWithEmojiZWJ = (str) => {
  return str.search(endingEmojiZWJ) !== -1;
};
var endingRIs = /(?:\uD83C[\uDDE6-\uDDFF])+$/g;
var endsWithOddNumberOfRIs = (str) => {
  var match = str.match(endingRIs);
  if (match === null) {
    return false;
  } else {
    var numRIs = match[0].length / 2;
    return numRIs % 2 === 1;
  }
};
var isElement = (value) => {
  return isPlainObject(value) && Node.isNodeList(value.children) && !Editor.isEditor(value);
};
var Element2 = {
  isAncestor(value) {
    return isPlainObject(value) && Node.isNodeList(value.children);
  },
  isElement,
  isElementList(value) {
    return Array.isArray(value) && value.every((val) => Element2.isElement(val));
  },
  isElementProps(props) {
    return props.children !== void 0;
  },
  isElementType: function isElementType(value, elementVal) {
    var elementKey = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "type";
    return isElement(value) && value[elementKey] === elementVal;
  },
  matches(element, props) {
    for (var key in props) {
      if (key === "children") {
        continue;
      }
      if (element[key] !== props[key]) {
        return false;
      }
    }
    return true;
  }
};
var _excluded$4 = ["text"];
var _excluded2$3 = ["text"];
function ownKeys$8(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$8(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    if (i2 % 2) {
      ownKeys$8(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$8(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var IS_EDITOR_CACHE = /* @__PURE__ */ new WeakMap();
var Editor = {
  above(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      voids = false,
      mode = "lowest",
      at = editor.selection,
      match
    } = options;
    if (!at) {
      return;
    }
    var path = Editor.path(editor, at);
    var reverse = mode === "lowest";
    for (var [n4, p3] of Editor.levels(editor, {
      at: path,
      voids,
      match,
      reverse
    })) {
      if (!Text.isText(n4) && !Path.equals(path, p3)) {
        return [n4, p3];
      }
    }
  },
  addMark(editor, key, value) {
    editor.addMark(key, value);
  },
  after(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var anchor = Editor.point(editor, at, {
      edge: "end"
    });
    var focus = Editor.end(editor, []);
    var range = {
      anchor,
      focus
    };
    var {
      distance = 1
    } = options;
    var d2 = 0;
    var target;
    for (var p3 of Editor.positions(editor, _objectSpread$8(_objectSpread$8({}, options), {}, {
      at: range
    }))) {
      if (d2 > distance) {
        break;
      }
      if (d2 !== 0) {
        target = p3;
      }
      d2++;
    }
    return target;
  },
  before(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var anchor = Editor.start(editor, []);
    var focus = Editor.point(editor, at, {
      edge: "start"
    });
    var range = {
      anchor,
      focus
    };
    var {
      distance = 1
    } = options;
    var d2 = 0;
    var target;
    for (var p3 of Editor.positions(editor, _objectSpread$8(_objectSpread$8({}, options), {}, {
      at: range,
      reverse: true
    }))) {
      if (d2 > distance) {
        break;
      }
      if (d2 !== 0) {
        target = p3;
      }
      d2++;
    }
    return target;
  },
  deleteBackward(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      unit = "character"
    } = options;
    editor.deleteBackward(unit);
  },
  deleteForward(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      unit = "character"
    } = options;
    editor.deleteForward(unit);
  },
  deleteFragment(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      direction = "forward"
    } = options;
    editor.deleteFragment(direction);
  },
  edges(editor, at) {
    return [Editor.start(editor, at), Editor.end(editor, at)];
  },
  end(editor, at) {
    return Editor.point(editor, at, {
      edge: "end"
    });
  },
  first(editor, at) {
    var path = Editor.path(editor, at, {
      edge: "start"
    });
    return Editor.node(editor, path);
  },
  fragment(editor, at) {
    var range = Editor.range(editor, at);
    var fragment = Node.fragment(editor, range);
    return fragment;
  },
  hasBlocks(editor, element) {
    return element.children.some((n4) => Editor.isBlock(editor, n4));
  },
  hasInlines(editor, element) {
    return element.children.some((n4) => Text.isText(n4) || Editor.isInline(editor, n4));
  },
  hasTexts(editor, element) {
    return element.children.every((n4) => Text.isText(n4));
  },
  insertBreak(editor) {
    editor.insertBreak();
  },
  insertFragment(editor, fragment) {
    editor.insertFragment(fragment);
  },
  insertNode(editor, node2) {
    editor.insertNode(node2);
  },
  insertText(editor, text) {
    editor.insertText(text);
  },
  isBlock(editor, value) {
    return Element2.isElement(value) && !editor.isInline(value);
  },
  isEditor(value) {
    if (!isPlainObject(value))
      return false;
    var cachedIsEditor = IS_EDITOR_CACHE.get(value);
    if (cachedIsEditor !== void 0) {
      return cachedIsEditor;
    }
    var isEditor = typeof value.addMark === "function" && typeof value.apply === "function" && typeof value.deleteBackward === "function" && typeof value.deleteForward === "function" && typeof value.deleteFragment === "function" && typeof value.insertBreak === "function" && typeof value.insertFragment === "function" && typeof value.insertNode === "function" && typeof value.insertText === "function" && typeof value.isInline === "function" && typeof value.isVoid === "function" && typeof value.normalizeNode === "function" && typeof value.onChange === "function" && typeof value.removeMark === "function" && (value.marks === null || isPlainObject(value.marks)) && (value.selection === null || Range.isRange(value.selection)) && Node.isNodeList(value.children) && Operation.isOperationList(value.operations);
    IS_EDITOR_CACHE.set(value, isEditor);
    return isEditor;
  },
  isEnd(editor, point, at) {
    var end2 = Editor.end(editor, at);
    return Point.equals(point, end2);
  },
  isEdge(editor, point, at) {
    return Editor.isStart(editor, point, at) || Editor.isEnd(editor, point, at);
  },
  isEmpty(editor, element) {
    var {
      children
    } = element;
    var [first] = children;
    return children.length === 0 || children.length === 1 && Text.isText(first) && first.text === "" && !editor.isVoid(element);
  },
  isInline(editor, value) {
    return Element2.isElement(value) && editor.isInline(value);
  },
  isNormalizing(editor) {
    var isNormalizing = NORMALIZING.get(editor);
    return isNormalizing === void 0 ? true : isNormalizing;
  },
  isStart(editor, point, at) {
    if (point.offset !== 0) {
      return false;
    }
    var start2 = Editor.start(editor, at);
    return Point.equals(point, start2);
  },
  isVoid(editor, value) {
    return Element2.isElement(value) && editor.isVoid(value);
  },
  last(editor, at) {
    var path = Editor.path(editor, at, {
      edge: "end"
    });
    return Editor.node(editor, path);
  },
  leaf(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var path = Editor.path(editor, at, options);
    var node2 = Node.leaf(editor, path);
    return [node2, path];
  },
  *levels(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      at = editor.selection,
      reverse = false,
      voids = false
    } = options;
    var {
      match
    } = options;
    if (match == null) {
      match = () => true;
    }
    if (!at) {
      return;
    }
    var levels = [];
    var path = Editor.path(editor, at);
    for (var [n4, p3] of Node.levels(editor, path)) {
      if (!match(n4, p3)) {
        continue;
      }
      levels.push([n4, p3]);
      if (!voids && Editor.isVoid(editor, n4)) {
        break;
      }
    }
    if (reverse) {
      levels.reverse();
    }
    yield* levels;
  },
  marks(editor) {
    var {
      marks,
      selection
    } = editor;
    if (!selection) {
      return null;
    }
    if (marks) {
      return marks;
    }
    if (Range.isExpanded(selection)) {
      var [match] = Editor.nodes(editor, {
        match: Text.isText
      });
      if (match) {
        var [_node] = match;
        var _rest = _objectWithoutProperties(_node, _excluded$4);
        return _rest;
      } else {
        return {};
      }
    }
    var {
      anchor
    } = selection;
    var {
      path
    } = anchor;
    var [node2] = Editor.leaf(editor, path);
    if (anchor.offset === 0) {
      var prev = Editor.previous(editor, {
        at: path,
        match: Text.isText
      });
      var block = Editor.above(editor, {
        match: (n4) => Editor.isBlock(editor, n4)
      });
      if (prev && block) {
        var [prevNode, prevPath] = prev;
        var [, blockPath] = block;
        if (Path.isAncestor(blockPath, prevPath)) {
          node2 = prevNode;
        }
      }
    }
    var rest = _objectWithoutProperties(node2, _excluded2$3);
    return rest;
  },
  next(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      mode = "lowest",
      voids = false
    } = options;
    var {
      match,
      at = editor.selection
    } = options;
    if (!at) {
      return;
    }
    var pointAfterLocation = Editor.after(editor, at, {
      voids
    });
    if (!pointAfterLocation)
      return;
    var [, to] = Editor.last(editor, []);
    var span = [pointAfterLocation.path, to];
    if (Path.isPath(at) && at.length === 0) {
      throw new Error("Cannot get the next node from the root node!");
    }
    if (match == null) {
      if (Path.isPath(at)) {
        var [parent] = Editor.parent(editor, at);
        match = (n4) => parent.children.includes(n4);
      } else {
        match = () => true;
      }
    }
    var [next] = Editor.nodes(editor, {
      at: span,
      match,
      mode,
      voids
    });
    return next;
  },
  node(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var path = Editor.path(editor, at, options);
    var node2 = Node.get(editor, path);
    return [node2, path];
  },
  *nodes(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      at = editor.selection,
      mode = "all",
      universal = false,
      reverse = false,
      voids = false
    } = options;
    var {
      match
    } = options;
    if (!match) {
      match = () => true;
    }
    if (!at) {
      return;
    }
    var from;
    var to;
    if (Span.isSpan(at)) {
      from = at[0];
      to = at[1];
    } else {
      var first = Editor.path(editor, at, {
        edge: "start"
      });
      var last = Editor.path(editor, at, {
        edge: "end"
      });
      from = reverse ? last : first;
      to = reverse ? first : last;
    }
    var nodeEntries = Node.nodes(editor, {
      reverse,
      from,
      to,
      pass: (_ref) => {
        var [n4] = _ref;
        return voids ? false : Editor.isVoid(editor, n4);
      }
    });
    var matches = [];
    var hit;
    for (var [node2, path] of nodeEntries) {
      var isLower = hit && Path.compare(path, hit[1]) === 0;
      if (mode === "highest" && isLower) {
        continue;
      }
      if (!match(node2, path)) {
        if (universal && !isLower && Text.isText(node2)) {
          return;
        } else {
          continue;
        }
      }
      if (mode === "lowest" && isLower) {
        hit = [node2, path];
        continue;
      }
      var emit = mode === "lowest" ? hit : [node2, path];
      if (emit) {
        if (universal) {
          matches.push(emit);
        } else {
          yield emit;
        }
      }
      hit = [node2, path];
    }
    if (mode === "lowest" && hit) {
      if (universal) {
        matches.push(hit);
      } else {
        yield hit;
      }
    }
    if (universal) {
      yield* matches;
    }
  },
  normalize(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      force = false
    } = options;
    var getDirtyPaths2 = (editor2) => {
      return DIRTY_PATHS.get(editor2) || [];
    };
    var getDirtyPathKeys = (editor2) => {
      return DIRTY_PATH_KEYS.get(editor2) || /* @__PURE__ */ new Set();
    };
    var popDirtyPath = (editor2) => {
      var path = getDirtyPaths2(editor2).pop();
      var key = path.join(",");
      getDirtyPathKeys(editor2).delete(key);
      return path;
    };
    if (!Editor.isNormalizing(editor)) {
      return;
    }
    if (force) {
      var allPaths = Array.from(Node.nodes(editor), (_ref2) => {
        var [, p3] = _ref2;
        return p3;
      });
      var allPathKeys = new Set(allPaths.map((p3) => p3.join(",")));
      DIRTY_PATHS.set(editor, allPaths);
      DIRTY_PATH_KEYS.set(editor, allPathKeys);
    }
    if (getDirtyPaths2(editor).length === 0) {
      return;
    }
    Editor.withoutNormalizing(editor, () => {
      for (var dirtyPath of getDirtyPaths2(editor)) {
        if (Node.has(editor, dirtyPath)) {
          var entry = Editor.node(editor, dirtyPath);
          var [node2, _2] = entry;
          if (Element2.isElement(node2) && node2.children.length === 0) {
            editor.normalizeNode(entry);
          }
        }
      }
      var max2 = getDirtyPaths2(editor).length * 42;
      var m2 = 0;
      while (getDirtyPaths2(editor).length !== 0) {
        if (m2 > max2) {
          throw new Error("\n            Could not completely normalize the editor after ".concat(max2, " iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state.\n          "));
        }
        var _dirtyPath = popDirtyPath(editor);
        if (Node.has(editor, _dirtyPath)) {
          var _entry = Editor.node(editor, _dirtyPath);
          editor.normalizeNode(_entry);
        }
        m2++;
      }
    });
  },
  parent(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var path = Editor.path(editor, at, options);
    var parentPath = Path.parent(path);
    var entry = Editor.node(editor, parentPath);
    return entry;
  },
  path(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var {
      depth,
      edge
    } = options;
    if (Path.isPath(at)) {
      if (edge === "start") {
        var [, firstPath] = Node.first(editor, at);
        at = firstPath;
      } else if (edge === "end") {
        var [, lastPath] = Node.last(editor, at);
        at = lastPath;
      }
    }
    if (Range.isRange(at)) {
      if (edge === "start") {
        at = Range.start(at);
      } else if (edge === "end") {
        at = Range.end(at);
      } else {
        at = Path.common(at.anchor.path, at.focus.path);
      }
    }
    if (Point.isPoint(at)) {
      at = at.path;
    }
    if (depth != null) {
      at = at.slice(0, depth);
    }
    return at;
  },
  hasPath(editor, path) {
    return Node.has(editor, path);
  },
  pathRef(editor, path) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var {
      affinity = "forward"
    } = options;
    var ref = {
      current: path,
      affinity,
      unref() {
        var {
          current
        } = ref;
        var pathRefs = Editor.pathRefs(editor);
        pathRefs.delete(ref);
        ref.current = null;
        return current;
      }
    };
    var refs = Editor.pathRefs(editor);
    refs.add(ref);
    return ref;
  },
  pathRefs(editor) {
    var refs = PATH_REFS.get(editor);
    if (!refs) {
      refs = /* @__PURE__ */ new Set();
      PATH_REFS.set(editor, refs);
    }
    return refs;
  },
  point(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var {
      edge = "start"
    } = options;
    if (Path.isPath(at)) {
      var path;
      if (edge === "end") {
        var [, lastPath] = Node.last(editor, at);
        path = lastPath;
      } else {
        var [, firstPath] = Node.first(editor, at);
        path = firstPath;
      }
      var node2 = Node.get(editor, path);
      if (!Text.isText(node2)) {
        throw new Error("Cannot get the ".concat(edge, " point in the node at path [").concat(at, "] because it has no ").concat(edge, " text node."));
      }
      return {
        path,
        offset: edge === "end" ? node2.text.length : 0
      };
    }
    if (Range.isRange(at)) {
      var [start2, end2] = Range.edges(at);
      return edge === "start" ? start2 : end2;
    }
    return at;
  },
  pointRef(editor, point) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var {
      affinity = "forward"
    } = options;
    var ref = {
      current: point,
      affinity,
      unref() {
        var {
          current
        } = ref;
        var pointRefs = Editor.pointRefs(editor);
        pointRefs.delete(ref);
        ref.current = null;
        return current;
      }
    };
    var refs = Editor.pointRefs(editor);
    refs.add(ref);
    return ref;
  },
  pointRefs(editor) {
    var refs = POINT_REFS.get(editor);
    if (!refs) {
      refs = /* @__PURE__ */ new Set();
      POINT_REFS.set(editor, refs);
    }
    return refs;
  },
  *positions(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      at = editor.selection,
      unit = "offset",
      reverse = false,
      voids = false
    } = options;
    if (!at) {
      return;
    }
    var range = Editor.range(editor, at);
    var [start2, end2] = Range.edges(range);
    var first = reverse ? end2 : start2;
    var isNewBlock = false;
    var blockText = "";
    var distance = 0;
    var leafTextRemaining = 0;
    var leafTextOffset = 0;
    for (var [node2, path] of Editor.nodes(editor, {
      at,
      reverse,
      voids
    })) {
      if (Element2.isElement(node2)) {
        if (!voids && editor.isVoid(node2)) {
          yield Editor.start(editor, path);
          continue;
        }
        if (editor.isInline(node2))
          continue;
        if (Editor.hasInlines(editor, node2)) {
          var e2 = Path.isAncestor(path, end2.path) ? end2 : Editor.end(editor, path);
          var s3 = Path.isAncestor(path, start2.path) ? start2 : Editor.start(editor, path);
          blockText = Editor.string(editor, {
            anchor: s3,
            focus: e2
          }, {
            voids
          });
          isNewBlock = true;
        }
      }
      if (Text.isText(node2)) {
        var isFirst = Path.equals(path, first.path);
        if (isFirst) {
          leafTextRemaining = reverse ? first.offset : node2.text.length - first.offset;
          leafTextOffset = first.offset;
        } else {
          leafTextRemaining = node2.text.length;
          leafTextOffset = reverse ? leafTextRemaining : 0;
        }
        if (isFirst || isNewBlock || unit === "offset") {
          yield {
            path,
            offset: leafTextOffset
          };
          isNewBlock = false;
        }
        while (true) {
          if (distance === 0) {
            if (blockText === "")
              break;
            distance = calcDistance(blockText, unit, reverse);
            blockText = splitByCharacterDistance(blockText, distance, reverse)[1];
          }
          leafTextOffset = reverse ? leafTextOffset - distance : leafTextOffset + distance;
          leafTextRemaining = leafTextRemaining - distance;
          if (leafTextRemaining < 0) {
            distance = -leafTextRemaining;
            break;
          }
          distance = 0;
          yield {
            path,
            offset: leafTextOffset
          };
        }
      }
    }
    function calcDistance(text, unit2, reverse2) {
      if (unit2 === "character") {
        return getCharacterDistance(text, reverse2);
      } else if (unit2 === "word") {
        return getWordDistance(text, reverse2);
      } else if (unit2 === "line" || unit2 === "block") {
        return text.length;
      }
      return 1;
    }
  },
  previous(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      mode = "lowest",
      voids = false
    } = options;
    var {
      match,
      at = editor.selection
    } = options;
    if (!at) {
      return;
    }
    var pointBeforeLocation = Editor.before(editor, at, {
      voids
    });
    if (!pointBeforeLocation) {
      return;
    }
    var [, to] = Editor.first(editor, []);
    var span = [pointBeforeLocation.path, to];
    if (Path.isPath(at) && at.length === 0) {
      throw new Error("Cannot get the previous node from the root node!");
    }
    if (match == null) {
      if (Path.isPath(at)) {
        var [parent] = Editor.parent(editor, at);
        match = (n4) => parent.children.includes(n4);
      } else {
        match = () => true;
      }
    }
    var [previous] = Editor.nodes(editor, {
      reverse: true,
      at: span,
      match,
      mode,
      voids
    });
    return previous;
  },
  range(editor, at, to) {
    if (Range.isRange(at) && !to) {
      return at;
    }
    var start2 = Editor.start(editor, at);
    var end2 = Editor.end(editor, to || at);
    return {
      anchor: start2,
      focus: end2
    };
  },
  rangeRef(editor, range) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var {
      affinity = "forward"
    } = options;
    var ref = {
      current: range,
      affinity,
      unref() {
        var {
          current
        } = ref;
        var rangeRefs = Editor.rangeRefs(editor);
        rangeRefs.delete(ref);
        ref.current = null;
        return current;
      }
    };
    var refs = Editor.rangeRefs(editor);
    refs.add(ref);
    return ref;
  },
  rangeRefs(editor) {
    var refs = RANGE_REFS.get(editor);
    if (!refs) {
      refs = /* @__PURE__ */ new Set();
      RANGE_REFS.set(editor, refs);
    }
    return refs;
  },
  removeMark(editor, key) {
    editor.removeMark(key);
  },
  setNormalizing(editor, isNormalizing) {
    NORMALIZING.set(editor, isNormalizing);
  },
  start(editor, at) {
    return Editor.point(editor, at, {
      edge: "start"
    });
  },
  string(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var {
      voids = false
    } = options;
    var range = Editor.range(editor, at);
    var [start2, end2] = Range.edges(range);
    var text = "";
    for (var [node2, path] of Editor.nodes(editor, {
      at: range,
      match: Text.isText,
      voids
    })) {
      var t3 = node2.text;
      if (Path.equals(path, end2.path)) {
        t3 = t3.slice(0, end2.offset);
      }
      if (Path.equals(path, start2.path)) {
        t3 = t3.slice(start2.offset);
      }
      text += t3;
    }
    return text;
  },
  unhangRange(editor, range) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var {
      voids = false
    } = options;
    var [start2, end2] = Range.edges(range);
    if (start2.offset !== 0 || end2.offset !== 0 || Range.isCollapsed(range)) {
      return range;
    }
    var endBlock = Editor.above(editor, {
      at: end2,
      match: (n4) => Editor.isBlock(editor, n4)
    });
    var blockPath = endBlock ? endBlock[1] : [];
    var first = Editor.start(editor, start2);
    var before = {
      anchor: first,
      focus: end2
    };
    var skip = true;
    for (var [node2, path] of Editor.nodes(editor, {
      at: before,
      match: Text.isText,
      reverse: true,
      voids
    })) {
      if (skip) {
        skip = false;
        continue;
      }
      if (node2.text !== "" || Path.isBefore(path, blockPath)) {
        end2 = {
          path,
          offset: node2.text.length
        };
        break;
      }
    }
    return {
      anchor: start2,
      focus: end2
    };
  },
  void(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Editor.above(editor, _objectSpread$8(_objectSpread$8({}, options), {}, {
      match: (n4) => Editor.isVoid(editor, n4)
    }));
  },
  withoutNormalizing(editor, fn5) {
    var value = Editor.isNormalizing(editor);
    Editor.setNormalizing(editor, false);
    try {
      fn5();
    } finally {
      Editor.setNormalizing(editor, value);
    }
    Editor.normalize(editor);
  }
};
var Span = {
  isSpan(value) {
    return Array.isArray(value) && value.length === 2 && value.every(Path.isPath);
  }
};
var _excluded$3 = ["children"];
var _excluded2$2 = ["text"];
var IS_NODE_LIST_CACHE = /* @__PURE__ */ new WeakMap();
var Node = {
  ancestor(root, path) {
    var node2 = Node.get(root, path);
    if (Text.isText(node2)) {
      throw new Error("Cannot get the ancestor node at path [".concat(path, "] because it refers to a text node instead: ").concat(node2));
    }
    return node2;
  },
  *ancestors(root, path) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    for (var p3 of Path.ancestors(path, options)) {
      var n4 = Node.ancestor(root, p3);
      var entry = [n4, p3];
      yield entry;
    }
  },
  child(root, index2) {
    if (Text.isText(root)) {
      throw new Error("Cannot get the child of a text node: ".concat(JSON.stringify(root)));
    }
    var c2 = root.children[index2];
    if (c2 == null) {
      throw new Error("Cannot get child at index `".concat(index2, "` in node: ").concat(JSON.stringify(root)));
    }
    return c2;
  },
  *children(root, path) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var {
      reverse = false
    } = options;
    var ancestor = Node.ancestor(root, path);
    var {
      children
    } = ancestor;
    var index2 = reverse ? children.length - 1 : 0;
    while (reverse ? index2 >= 0 : index2 < children.length) {
      var child = Node.child(ancestor, index2);
      var childPath = path.concat(index2);
      yield [child, childPath];
      index2 = reverse ? index2 - 1 : index2 + 1;
    }
  },
  common(root, path, another) {
    var p3 = Path.common(path, another);
    var n4 = Node.get(root, p3);
    return [n4, p3];
  },
  descendant(root, path) {
    var node2 = Node.get(root, path);
    if (Editor.isEditor(node2)) {
      throw new Error("Cannot get the descendant node at path [".concat(path, "] because it refers to the root editor node instead: ").concat(node2));
    }
    return node2;
  },
  *descendants(root) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    for (var [node2, path] of Node.nodes(root, options)) {
      if (path.length !== 0) {
        yield [node2, path];
      }
    }
  },
  *elements(root) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    for (var [node2, path] of Node.nodes(root, options)) {
      if (Element2.isElement(node2)) {
        yield [node2, path];
      }
    }
  },
  extractProps(node2) {
    if (Element2.isAncestor(node2)) {
      var properties = _objectWithoutProperties(node2, _excluded$3);
      return properties;
    } else {
      var properties = _objectWithoutProperties(node2, _excluded2$2);
      return properties;
    }
  },
  first(root, path) {
    var p3 = path.slice();
    var n4 = Node.get(root, p3);
    while (n4) {
      if (Text.isText(n4) || n4.children.length === 0) {
        break;
      } else {
        n4 = n4.children[0];
        p3.push(0);
      }
    }
    return [n4, p3];
  },
  fragment(root, range) {
    if (Text.isText(root)) {
      throw new Error("Cannot get a fragment starting from a root text node: ".concat(JSON.stringify(root)));
    }
    var newRoot = fn({
      children: root.children
    }, (r3) => {
      var [start2, end2] = Range.edges(range);
      var nodeEntries = Node.nodes(r3, {
        reverse: true,
        pass: (_ref) => {
          var [, path2] = _ref;
          return !Range.includes(range, path2);
        }
      });
      for (var [, path] of nodeEntries) {
        if (!Range.includes(range, path)) {
          var parent = Node.parent(r3, path);
          var index2 = path[path.length - 1];
          parent.children.splice(index2, 1);
        }
        if (Path.equals(path, end2.path)) {
          var leaf = Node.leaf(r3, path);
          leaf.text = leaf.text.slice(0, end2.offset);
        }
        if (Path.equals(path, start2.path)) {
          var _leaf = Node.leaf(r3, path);
          _leaf.text = _leaf.text.slice(start2.offset);
        }
      }
      if (Editor.isEditor(r3)) {
        r3.selection = null;
      }
    });
    return newRoot.children;
  },
  get(root, path) {
    var node2 = root;
    for (var i2 = 0; i2 < path.length; i2++) {
      var p3 = path[i2];
      if (Text.isText(node2) || !node2.children[p3]) {
        throw new Error("Cannot find a descendant at path [".concat(path, "] in node: ").concat(JSON.stringify(root)));
      }
      node2 = node2.children[p3];
    }
    return node2;
  },
  has(root, path) {
    var node2 = root;
    for (var i2 = 0; i2 < path.length; i2++) {
      var p3 = path[i2];
      if (Text.isText(node2) || !node2.children[p3]) {
        return false;
      }
      node2 = node2.children[p3];
    }
    return true;
  },
  isNode(value) {
    return Text.isText(value) || Element2.isElement(value) || Editor.isEditor(value);
  },
  isNodeList(value) {
    if (!Array.isArray(value)) {
      return false;
    }
    var cachedResult = IS_NODE_LIST_CACHE.get(value);
    if (cachedResult !== void 0) {
      return cachedResult;
    }
    var isNodeList2 = value.every((val) => Node.isNode(val));
    IS_NODE_LIST_CACHE.set(value, isNodeList2);
    return isNodeList2;
  },
  last(root, path) {
    var p3 = path.slice();
    var n4 = Node.get(root, p3);
    while (n4) {
      if (Text.isText(n4) || n4.children.length === 0) {
        break;
      } else {
        var i2 = n4.children.length - 1;
        n4 = n4.children[i2];
        p3.push(i2);
      }
    }
    return [n4, p3];
  },
  leaf(root, path) {
    var node2 = Node.get(root, path);
    if (!Text.isText(node2)) {
      throw new Error("Cannot get the leaf node at path [".concat(path, "] because it refers to a non-leaf node: ").concat(node2));
    }
    return node2;
  },
  *levels(root, path) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    for (var p3 of Path.levels(path, options)) {
      var n4 = Node.get(root, p3);
      yield [n4, p3];
    }
  },
  matches(node2, props) {
    return Element2.isElement(node2) && Element2.isElementProps(props) && Element2.matches(node2, props) || Text.isText(node2) && Text.isTextProps(props) && Text.matches(node2, props);
  },
  *nodes(root) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      pass,
      reverse = false
    } = options;
    var {
      from = [],
      to
    } = options;
    var visited = /* @__PURE__ */ new Set();
    var p3 = [];
    var n4 = root;
    while (true) {
      if (to && (reverse ? Path.isBefore(p3, to) : Path.isAfter(p3, to))) {
        break;
      }
      if (!visited.has(n4)) {
        yield [n4, p3];
      }
      if (!visited.has(n4) && !Text.isText(n4) && n4.children.length !== 0 && (pass == null || pass([n4, p3]) === false)) {
        visited.add(n4);
        var nextIndex = reverse ? n4.children.length - 1 : 0;
        if (Path.isAncestor(p3, from)) {
          nextIndex = from[p3.length];
        }
        p3 = p3.concat(nextIndex);
        n4 = Node.get(root, p3);
        continue;
      }
      if (p3.length === 0) {
        break;
      }
      if (!reverse) {
        var newPath = Path.next(p3);
        if (Node.has(root, newPath)) {
          p3 = newPath;
          n4 = Node.get(root, p3);
          continue;
        }
      }
      if (reverse && p3[p3.length - 1] !== 0) {
        var _newPath = Path.previous(p3);
        p3 = _newPath;
        n4 = Node.get(root, p3);
        continue;
      }
      p3 = Path.parent(p3);
      n4 = Node.get(root, p3);
      visited.add(n4);
    }
  },
  parent(root, path) {
    var parentPath = Path.parent(path);
    var p3 = Node.get(root, parentPath);
    if (Text.isText(p3)) {
      throw new Error("Cannot get the parent of path [".concat(path, "] because it does not exist in the root."));
    }
    return p3;
  },
  string(node2) {
    if (Text.isText(node2)) {
      return node2.text;
    } else {
      return node2.children.map(Node.string).join("");
    }
  },
  *texts(root) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    for (var [node2, path] of Node.nodes(root, options)) {
      if (Text.isText(node2)) {
        yield [node2, path];
      }
    }
  }
};
function ownKeys$7(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$7(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    if (i2 % 2) {
      ownKeys$7(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$7(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var Operation = {
  isNodeOperation(value) {
    return Operation.isOperation(value) && value.type.endsWith("_node");
  },
  isOperation(value) {
    if (!isPlainObject(value)) {
      return false;
    }
    switch (value.type) {
      case "insert_node":
        return Path.isPath(value.path) && Node.isNode(value.node);
      case "insert_text":
        return typeof value.offset === "number" && typeof value.text === "string" && Path.isPath(value.path);
      case "merge_node":
        return typeof value.position === "number" && Path.isPath(value.path) && isPlainObject(value.properties);
      case "move_node":
        return Path.isPath(value.path) && Path.isPath(value.newPath);
      case "remove_node":
        return Path.isPath(value.path) && Node.isNode(value.node);
      case "remove_text":
        return typeof value.offset === "number" && typeof value.text === "string" && Path.isPath(value.path);
      case "set_node":
        return Path.isPath(value.path) && isPlainObject(value.properties) && isPlainObject(value.newProperties);
      case "set_selection":
        return value.properties === null && Range.isRange(value.newProperties) || value.newProperties === null && Range.isRange(value.properties) || isPlainObject(value.properties) && isPlainObject(value.newProperties);
      case "split_node":
        return Path.isPath(value.path) && typeof value.position === "number" && isPlainObject(value.properties);
      default:
        return false;
    }
  },
  isOperationList(value) {
    return Array.isArray(value) && value.every((val) => Operation.isOperation(val));
  },
  isSelectionOperation(value) {
    return Operation.isOperation(value) && value.type.endsWith("_selection");
  },
  isTextOperation(value) {
    return Operation.isOperation(value) && value.type.endsWith("_text");
  },
  inverse(op) {
    switch (op.type) {
      case "insert_node": {
        return _objectSpread$7(_objectSpread$7({}, op), {}, {
          type: "remove_node"
        });
      }
      case "insert_text": {
        return _objectSpread$7(_objectSpread$7({}, op), {}, {
          type: "remove_text"
        });
      }
      case "merge_node": {
        return _objectSpread$7(_objectSpread$7({}, op), {}, {
          type: "split_node",
          path: Path.previous(op.path)
        });
      }
      case "move_node": {
        var {
          newPath,
          path
        } = op;
        if (Path.equals(newPath, path)) {
          return op;
        }
        if (Path.isSibling(path, newPath)) {
          return _objectSpread$7(_objectSpread$7({}, op), {}, {
            path: newPath,
            newPath: path
          });
        }
        var inversePath = Path.transform(path, op);
        var inverseNewPath = Path.transform(Path.next(path), op);
        return _objectSpread$7(_objectSpread$7({}, op), {}, {
          path: inversePath,
          newPath: inverseNewPath
        });
      }
      case "remove_node": {
        return _objectSpread$7(_objectSpread$7({}, op), {}, {
          type: "insert_node"
        });
      }
      case "remove_text": {
        return _objectSpread$7(_objectSpread$7({}, op), {}, {
          type: "insert_text"
        });
      }
      case "set_node": {
        var {
          properties,
          newProperties
        } = op;
        return _objectSpread$7(_objectSpread$7({}, op), {}, {
          properties: newProperties,
          newProperties: properties
        });
      }
      case "set_selection": {
        var {
          properties: _properties,
          newProperties: _newProperties
        } = op;
        if (_properties == null) {
          return _objectSpread$7(_objectSpread$7({}, op), {}, {
            properties: _newProperties,
            newProperties: null
          });
        } else if (_newProperties == null) {
          return _objectSpread$7(_objectSpread$7({}, op), {}, {
            properties: null,
            newProperties: _properties
          });
        } else {
          return _objectSpread$7(_objectSpread$7({}, op), {}, {
            properties: _newProperties,
            newProperties: _properties
          });
        }
      }
      case "split_node": {
        return _objectSpread$7(_objectSpread$7({}, op), {}, {
          type: "merge_node",
          path: Path.next(op.path)
        });
      }
    }
  }
};
var Path = {
  ancestors(path) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      reverse = false
    } = options;
    var paths = Path.levels(path, options);
    if (reverse) {
      paths = paths.slice(1);
    } else {
      paths = paths.slice(0, -1);
    }
    return paths;
  },
  common(path, another) {
    var common = [];
    for (var i2 = 0; i2 < path.length && i2 < another.length; i2++) {
      var av = path[i2];
      var bv = another[i2];
      if (av !== bv) {
        break;
      }
      common.push(av);
    }
    return common;
  },
  compare(path, another) {
    var min2 = Math.min(path.length, another.length);
    for (var i2 = 0; i2 < min2; i2++) {
      if (path[i2] < another[i2])
        return -1;
      if (path[i2] > another[i2])
        return 1;
    }
    return 0;
  },
  endsAfter(path, another) {
    var i2 = path.length - 1;
    var as = path.slice(0, i2);
    var bs = another.slice(0, i2);
    var av = path[i2];
    var bv = another[i2];
    return Path.equals(as, bs) && av > bv;
  },
  endsAt(path, another) {
    var i2 = path.length;
    var as = path.slice(0, i2);
    var bs = another.slice(0, i2);
    return Path.equals(as, bs);
  },
  endsBefore(path, another) {
    var i2 = path.length - 1;
    var as = path.slice(0, i2);
    var bs = another.slice(0, i2);
    var av = path[i2];
    var bv = another[i2];
    return Path.equals(as, bs) && av < bv;
  },
  equals(path, another) {
    return path.length === another.length && path.every((n4, i2) => n4 === another[i2]);
  },
  hasPrevious(path) {
    return path[path.length - 1] > 0;
  },
  isAfter(path, another) {
    return Path.compare(path, another) === 1;
  },
  isAncestor(path, another) {
    return path.length < another.length && Path.compare(path, another) === 0;
  },
  isBefore(path, another) {
    return Path.compare(path, another) === -1;
  },
  isChild(path, another) {
    return path.length === another.length + 1 && Path.compare(path, another) === 0;
  },
  isCommon(path, another) {
    return path.length <= another.length && Path.compare(path, another) === 0;
  },
  isDescendant(path, another) {
    return path.length > another.length && Path.compare(path, another) === 0;
  },
  isParent(path, another) {
    return path.length + 1 === another.length && Path.compare(path, another) === 0;
  },
  isPath(value) {
    return Array.isArray(value) && (value.length === 0 || typeof value[0] === "number");
  },
  isSibling(path, another) {
    if (path.length !== another.length) {
      return false;
    }
    var as = path.slice(0, -1);
    var bs = another.slice(0, -1);
    var al = path[path.length - 1];
    var bl = another[another.length - 1];
    return al !== bl && Path.equals(as, bs);
  },
  levels(path) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      reverse = false
    } = options;
    var list = [];
    for (var i2 = 0; i2 <= path.length; i2++) {
      list.push(path.slice(0, i2));
    }
    if (reverse) {
      list.reverse();
    }
    return list;
  },
  next(path) {
    if (path.length === 0) {
      throw new Error("Cannot get the next path of a root path [".concat(path, "], because it has no next index."));
    }
    var last = path[path.length - 1];
    return path.slice(0, -1).concat(last + 1);
  },
  operationCanTransformPath(operation) {
    switch (operation.type) {
      case "insert_node":
      case "remove_node":
      case "merge_node":
      case "split_node":
      case "move_node":
        return true;
      default:
        return false;
    }
  },
  parent(path) {
    if (path.length === 0) {
      throw new Error("Cannot get the parent path of the root path [".concat(path, "]."));
    }
    return path.slice(0, -1);
  },
  previous(path) {
    if (path.length === 0) {
      throw new Error("Cannot get the previous path of a root path [".concat(path, "], because it has no previous index."));
    }
    var last = path[path.length - 1];
    if (last <= 0) {
      throw new Error("Cannot get the previous path of a first child path [".concat(path, "] because it would result in a negative index."));
    }
    return path.slice(0, -1).concat(last - 1);
  },
  relative(path, ancestor) {
    if (!Path.isAncestor(ancestor, path) && !Path.equals(path, ancestor)) {
      throw new Error("Cannot get the relative path of [".concat(path, "] inside ancestor [").concat(ancestor, "], because it is not above or equal to the path."));
    }
    return path.slice(ancestor.length);
  },
  transform(path, operation) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return fn(path, (p3) => {
      var {
        affinity = "forward"
      } = options;
      if (!path || (path === null || path === void 0 ? void 0 : path.length) === 0) {
        return;
      }
      if (p3 === null) {
        return null;
      }
      switch (operation.type) {
        case "insert_node": {
          var {
            path: op
          } = operation;
          if (Path.equals(op, p3) || Path.endsBefore(op, p3) || Path.isAncestor(op, p3)) {
            p3[op.length - 1] += 1;
          }
          break;
        }
        case "remove_node": {
          var {
            path: _op
          } = operation;
          if (Path.equals(_op, p3) || Path.isAncestor(_op, p3)) {
            return null;
          } else if (Path.endsBefore(_op, p3)) {
            p3[_op.length - 1] -= 1;
          }
          break;
        }
        case "merge_node": {
          var {
            path: _op2,
            position
          } = operation;
          if (Path.equals(_op2, p3) || Path.endsBefore(_op2, p3)) {
            p3[_op2.length - 1] -= 1;
          } else if (Path.isAncestor(_op2, p3)) {
            p3[_op2.length - 1] -= 1;
            p3[_op2.length] += position;
          }
          break;
        }
        case "split_node": {
          var {
            path: _op3,
            position: _position
          } = operation;
          if (Path.equals(_op3, p3)) {
            if (affinity === "forward") {
              p3[p3.length - 1] += 1;
            } else if (affinity === "backward")
              ;
            else {
              return null;
            }
          } else if (Path.endsBefore(_op3, p3)) {
            p3[_op3.length - 1] += 1;
          } else if (Path.isAncestor(_op3, p3) && path[_op3.length] >= _position) {
            p3[_op3.length - 1] += 1;
            p3[_op3.length] -= _position;
          }
          break;
        }
        case "move_node": {
          var {
            path: _op4,
            newPath: onp
          } = operation;
          if (Path.equals(_op4, onp)) {
            return;
          }
          if (Path.isAncestor(_op4, p3) || Path.equals(_op4, p3)) {
            var copy = onp.slice();
            if (Path.endsBefore(_op4, onp) && _op4.length < onp.length) {
              copy[_op4.length - 1] -= 1;
            }
            return copy.concat(p3.slice(_op4.length));
          } else if (Path.isSibling(_op4, onp) && (Path.isAncestor(onp, p3) || Path.equals(onp, p3))) {
            if (Path.endsBefore(_op4, p3)) {
              p3[_op4.length - 1] -= 1;
            } else {
              p3[_op4.length - 1] += 1;
            }
          } else if (Path.endsBefore(onp, p3) || Path.equals(onp, p3) || Path.isAncestor(onp, p3)) {
            if (Path.endsBefore(_op4, p3)) {
              p3[_op4.length - 1] -= 1;
            }
            p3[onp.length - 1] += 1;
          } else if (Path.endsBefore(_op4, p3)) {
            if (Path.equals(onp, p3)) {
              p3[onp.length - 1] += 1;
            }
            p3[_op4.length - 1] -= 1;
          }
          break;
        }
      }
    });
  }
};
var PathRef = {
  transform(ref, op) {
    var {
      current,
      affinity
    } = ref;
    if (current == null) {
      return;
    }
    var path = Path.transform(current, op, {
      affinity
    });
    ref.current = path;
    if (path == null) {
      ref.unref();
    }
  }
};
function ownKeys$6(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$6(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    if (i2 % 2) {
      ownKeys$6(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$6(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var Point = {
  compare(point, another) {
    var result = Path.compare(point.path, another.path);
    if (result === 0) {
      if (point.offset < another.offset)
        return -1;
      if (point.offset > another.offset)
        return 1;
      return 0;
    }
    return result;
  },
  isAfter(point, another) {
    return Point.compare(point, another) === 1;
  },
  isBefore(point, another) {
    return Point.compare(point, another) === -1;
  },
  equals(point, another) {
    return point.offset === another.offset && Path.equals(point.path, another.path);
  },
  isPoint(value) {
    return isPlainObject(value) && typeof value.offset === "number" && Path.isPath(value.path);
  },
  transform(point, op) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return fn(point, (p3) => {
      if (p3 === null) {
        return null;
      }
      var {
        affinity = "forward"
      } = options;
      var {
        path,
        offset: offset2
      } = p3;
      switch (op.type) {
        case "insert_node":
        case "move_node": {
          p3.path = Path.transform(path, op, options);
          break;
        }
        case "insert_text": {
          if (Path.equals(op.path, path) && op.offset <= offset2) {
            p3.offset += op.text.length;
          }
          break;
        }
        case "merge_node": {
          if (Path.equals(op.path, path)) {
            p3.offset += op.position;
          }
          p3.path = Path.transform(path, op, options);
          break;
        }
        case "remove_text": {
          if (Path.equals(op.path, path) && op.offset <= offset2) {
            p3.offset -= Math.min(offset2 - op.offset, op.text.length);
          }
          break;
        }
        case "remove_node": {
          if (Path.equals(op.path, path) || Path.isAncestor(op.path, path)) {
            return null;
          }
          p3.path = Path.transform(path, op, options);
          break;
        }
        case "split_node": {
          if (Path.equals(op.path, path)) {
            if (op.position === offset2 && affinity == null) {
              return null;
            } else if (op.position < offset2 || op.position === offset2 && affinity === "forward") {
              p3.offset -= op.position;
              p3.path = Path.transform(path, op, _objectSpread$6(_objectSpread$6({}, options), {}, {
                affinity: "forward"
              }));
            }
          } else {
            p3.path = Path.transform(path, op, options);
          }
          break;
        }
      }
    });
  }
};
var PointRef = {
  transform(ref, op) {
    var {
      current,
      affinity
    } = ref;
    if (current == null) {
      return;
    }
    var point = Point.transform(current, op, {
      affinity
    });
    ref.current = point;
    if (point == null) {
      ref.unref();
    }
  }
};
var _excluded$2 = ["anchor", "focus"];
function ownKeys$5(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$5(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    if (i2 % 2) {
      ownKeys$5(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$5(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var Range = {
  edges(range) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      reverse = false
    } = options;
    var {
      anchor,
      focus
    } = range;
    return Range.isBackward(range) === reverse ? [anchor, focus] : [focus, anchor];
  },
  end(range) {
    var [, end2] = Range.edges(range);
    return end2;
  },
  equals(range, another) {
    return Point.equals(range.anchor, another.anchor) && Point.equals(range.focus, another.focus);
  },
  includes(range, target) {
    if (Range.isRange(target)) {
      if (Range.includes(range, target.anchor) || Range.includes(range, target.focus)) {
        return true;
      }
      var [rs, re2] = Range.edges(range);
      var [ts, te2] = Range.edges(target);
      return Point.isBefore(rs, ts) && Point.isAfter(re2, te2);
    }
    var [start2, end2] = Range.edges(range);
    var isAfterStart = false;
    var isBeforeEnd = false;
    if (Point.isPoint(target)) {
      isAfterStart = Point.compare(target, start2) >= 0;
      isBeforeEnd = Point.compare(target, end2) <= 0;
    } else {
      isAfterStart = Path.compare(target, start2.path) >= 0;
      isBeforeEnd = Path.compare(target, end2.path) <= 0;
    }
    return isAfterStart && isBeforeEnd;
  },
  intersection(range, another) {
    var rest = _objectWithoutProperties(range, _excluded$2);
    var [s1, e1] = Range.edges(range);
    var [s22, e2] = Range.edges(another);
    var start2 = Point.isBefore(s1, s22) ? s22 : s1;
    var end2 = Point.isBefore(e1, e2) ? e1 : e2;
    if (Point.isBefore(end2, start2)) {
      return null;
    } else {
      return _objectSpread$5({
        anchor: start2,
        focus: end2
      }, rest);
    }
  },
  isBackward(range) {
    var {
      anchor,
      focus
    } = range;
    return Point.isAfter(anchor, focus);
  },
  isCollapsed(range) {
    var {
      anchor,
      focus
    } = range;
    return Point.equals(anchor, focus);
  },
  isExpanded(range) {
    return !Range.isCollapsed(range);
  },
  isForward(range) {
    return !Range.isBackward(range);
  },
  isRange(value) {
    return isPlainObject(value) && Point.isPoint(value.anchor) && Point.isPoint(value.focus);
  },
  *points(range) {
    yield [range.anchor, "anchor"];
    yield [range.focus, "focus"];
  },
  start(range) {
    var [start2] = Range.edges(range);
    return start2;
  },
  transform(range, op) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return fn(range, (r3) => {
      if (r3 === null) {
        return null;
      }
      var {
        affinity = "inward"
      } = options;
      var affinityAnchor;
      var affinityFocus;
      if (affinity === "inward") {
        var isCollapsed = Range.isCollapsed(r3);
        if (Range.isForward(r3)) {
          affinityAnchor = "forward";
          affinityFocus = isCollapsed ? affinityAnchor : "backward";
        } else {
          affinityAnchor = "backward";
          affinityFocus = isCollapsed ? affinityAnchor : "forward";
        }
      } else if (affinity === "outward") {
        if (Range.isForward(r3)) {
          affinityAnchor = "backward";
          affinityFocus = "forward";
        } else {
          affinityAnchor = "forward";
          affinityFocus = "backward";
        }
      } else {
        affinityAnchor = affinity;
        affinityFocus = affinity;
      }
      var anchor = Point.transform(r3.anchor, op, {
        affinity: affinityAnchor
      });
      var focus = Point.transform(r3.focus, op, {
        affinity: affinityFocus
      });
      if (!anchor || !focus) {
        return null;
      }
      r3.anchor = anchor;
      r3.focus = focus;
    });
  }
};
var RangeRef = {
  transform(ref, op) {
    var {
      current,
      affinity
    } = ref;
    if (current == null) {
      return;
    }
    var path = Range.transform(current, op, {
      affinity
    });
    ref.current = path;
    if (path == null) {
      ref.unref();
    }
  }
};
var isDeepEqual = (node2, another) => {
  for (var key in node2) {
    var a2 = node2[key];
    var b3 = another[key];
    if (isPlainObject(a2) && isPlainObject(b3)) {
      if (!isDeepEqual(a2, b3))
        return false;
    } else if (Array.isArray(a2) && Array.isArray(b3)) {
      if (a2.length !== b3.length)
        return false;
      for (var i2 = 0; i2 < a2.length; i2++) {
        if (a2[i2] !== b3[i2])
          return false;
      }
    } else if (a2 !== b3) {
      return false;
    }
  }
  for (var _key in another) {
    if (node2[_key] === void 0 && another[_key] !== void 0) {
      return false;
    }
  }
  return true;
};
var _excluded$1 = ["text"];
var _excluded2$1 = ["anchor", "focus"];
function ownKeys$4(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$4(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    if (i2 % 2) {
      ownKeys$4(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$4(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var Text = {
  equals(text, another) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var {
      loose = false
    } = options;
    function omitText(obj) {
      var rest = _objectWithoutProperties(obj, _excluded$1);
      return rest;
    }
    return isDeepEqual(loose ? omitText(text) : text, loose ? omitText(another) : another);
  },
  isText(value) {
    return isPlainObject(value) && typeof value.text === "string";
  },
  isTextList(value) {
    return Array.isArray(value) && value.every((val) => Text.isText(val));
  },
  isTextProps(props) {
    return props.text !== void 0;
  },
  matches(text, props) {
    for (var key in props) {
      if (key === "text") {
        continue;
      }
      if (!text.hasOwnProperty(key) || text[key] !== props[key]) {
        return false;
      }
    }
    return true;
  },
  decorations(node2, decorations) {
    var leaves = [_objectSpread$4({}, node2)];
    for (var dec of decorations) {
      var rest = _objectWithoutProperties(dec, _excluded2$1);
      var [start2, end2] = Range.edges(dec);
      var next = [];
      var o2 = 0;
      for (var leaf of leaves) {
        var {
          length
        } = leaf.text;
        var offset2 = o2;
        o2 += length;
        if (start2.offset <= offset2 && end2.offset >= o2) {
          Object.assign(leaf, rest);
          next.push(leaf);
          continue;
        }
        if (start2.offset !== end2.offset && (start2.offset === o2 || end2.offset === offset2) || start2.offset > o2 || end2.offset < offset2 || end2.offset === offset2 && offset2 !== 0) {
          next.push(leaf);
          continue;
        }
        var middle = leaf;
        var before = void 0;
        var after = void 0;
        if (end2.offset < o2) {
          var off = end2.offset - offset2;
          after = _objectSpread$4(_objectSpread$4({}, middle), {}, {
            text: middle.text.slice(off)
          });
          middle = _objectSpread$4(_objectSpread$4({}, middle), {}, {
            text: middle.text.slice(0, off)
          });
        }
        if (start2.offset > offset2) {
          var _off = start2.offset - offset2;
          before = _objectSpread$4(_objectSpread$4({}, middle), {}, {
            text: middle.text.slice(0, _off)
          });
          middle = _objectSpread$4(_objectSpread$4({}, middle), {}, {
            text: middle.text.slice(_off)
          });
        }
        Object.assign(middle, rest);
        if (before) {
          next.push(before);
        }
        next.push(middle);
        if (after) {
          next.push(after);
        }
      }
      leaves = next;
    }
    return leaves;
  }
};
function ownKeys$3(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$3(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    if (i2 % 2) {
      ownKeys$3(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$3(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var applyToDraft = (editor, selection, op) => {
  switch (op.type) {
    case "insert_node": {
      var {
        path,
        node: node2
      } = op;
      var parent = Node.parent(editor, path);
      var index2 = path[path.length - 1];
      if (index2 > parent.children.length) {
        throw new Error('Cannot apply an "insert_node" operation at path ['.concat(path, "] because the destination is past the end of the node."));
      }
      parent.children.splice(index2, 0, node2);
      if (selection) {
        for (var [point, key] of Range.points(selection)) {
          selection[key] = Point.transform(point, op);
        }
      }
      break;
    }
    case "insert_text": {
      var {
        path: _path,
        offset: offset2,
        text
      } = op;
      if (text.length === 0)
        break;
      var _node = Node.leaf(editor, _path);
      var before = _node.text.slice(0, offset2);
      var after = _node.text.slice(offset2);
      _node.text = before + text + after;
      if (selection) {
        for (var [_point, _key] of Range.points(selection)) {
          selection[_key] = Point.transform(_point, op);
        }
      }
      break;
    }
    case "merge_node": {
      var {
        path: _path2
      } = op;
      var _node2 = Node.get(editor, _path2);
      var prevPath = Path.previous(_path2);
      var prev = Node.get(editor, prevPath);
      var _parent = Node.parent(editor, _path2);
      var _index = _path2[_path2.length - 1];
      if (Text.isText(_node2) && Text.isText(prev)) {
        prev.text += _node2.text;
      } else if (!Text.isText(_node2) && !Text.isText(prev)) {
        prev.children.push(..._node2.children);
      } else {
        throw new Error('Cannot apply a "merge_node" operation at path ['.concat(_path2, "] to nodes of different interfaces: ").concat(_node2, " ").concat(prev));
      }
      _parent.children.splice(_index, 1);
      if (selection) {
        for (var [_point2, _key2] of Range.points(selection)) {
          selection[_key2] = Point.transform(_point2, op);
        }
      }
      break;
    }
    case "move_node": {
      var {
        path: _path3,
        newPath
      } = op;
      if (Path.isAncestor(_path3, newPath)) {
        throw new Error("Cannot move a path [".concat(_path3, "] to new path [").concat(newPath, "] because the destination is inside itself."));
      }
      var _node3 = Node.get(editor, _path3);
      var _parent2 = Node.parent(editor, _path3);
      var _index2 = _path3[_path3.length - 1];
      _parent2.children.splice(_index2, 1);
      var truePath = Path.transform(_path3, op);
      var newParent = Node.get(editor, Path.parent(truePath));
      var newIndex = truePath[truePath.length - 1];
      newParent.children.splice(newIndex, 0, _node3);
      if (selection) {
        for (var [_point3, _key3] of Range.points(selection)) {
          selection[_key3] = Point.transform(_point3, op);
        }
      }
      break;
    }
    case "remove_node": {
      var {
        path: _path4
      } = op;
      var _index3 = _path4[_path4.length - 1];
      var _parent3 = Node.parent(editor, _path4);
      _parent3.children.splice(_index3, 1);
      if (selection) {
        for (var [_point4, _key4] of Range.points(selection)) {
          var result = Point.transform(_point4, op);
          if (selection != null && result != null) {
            selection[_key4] = result;
          } else {
            var _prev = void 0;
            var next = void 0;
            for (var [n4, p3] of Node.texts(editor)) {
              if (Path.compare(p3, _path4) === -1) {
                _prev = [n4, p3];
              } else {
                next = [n4, p3];
                break;
              }
            }
            var preferNext = false;
            if (_prev && next) {
              if (Path.equals(next[1], _path4)) {
                preferNext = !Path.hasPrevious(next[1]);
              } else {
                preferNext = Path.common(_prev[1], _path4).length < Path.common(next[1], _path4).length;
              }
            }
            if (_prev && !preferNext) {
              _point4.path = _prev[1];
              _point4.offset = _prev[0].text.length;
            } else if (next) {
              _point4.path = next[1];
              _point4.offset = 0;
            } else {
              selection = null;
            }
          }
        }
      }
      break;
    }
    case "remove_text": {
      var {
        path: _path5,
        offset: _offset,
        text: _text
      } = op;
      if (_text.length === 0)
        break;
      var _node4 = Node.leaf(editor, _path5);
      var _before = _node4.text.slice(0, _offset);
      var _after = _node4.text.slice(_offset + _text.length);
      _node4.text = _before + _after;
      if (selection) {
        for (var [_point5, _key5] of Range.points(selection)) {
          selection[_key5] = Point.transform(_point5, op);
        }
      }
      break;
    }
    case "set_node": {
      var {
        path: _path6,
        properties,
        newProperties
      } = op;
      if (_path6.length === 0) {
        throw new Error("Cannot set properties on the root node!");
      }
      var _node5 = Node.get(editor, _path6);
      for (var _key6 in newProperties) {
        if (_key6 === "children" || _key6 === "text") {
          throw new Error('Cannot set the "'.concat(_key6, '" property of nodes!'));
        }
        var value = newProperties[_key6];
        if (value == null) {
          delete _node5[_key6];
        } else {
          _node5[_key6] = value;
        }
      }
      for (var _key7 in properties) {
        if (!newProperties.hasOwnProperty(_key7)) {
          delete _node5[_key7];
        }
      }
      break;
    }
    case "set_selection": {
      var {
        newProperties: _newProperties
      } = op;
      if (_newProperties == null) {
        selection = _newProperties;
      } else {
        if (selection == null) {
          if (!Range.isRange(_newProperties)) {
            throw new Error('Cannot apply an incomplete "set_selection" operation properties '.concat(JSON.stringify(_newProperties), " when there is no current selection."));
          }
          selection = _objectSpread$3({}, _newProperties);
        }
        for (var _key8 in _newProperties) {
          var _value = _newProperties[_key8];
          if (_value == null) {
            if (_key8 === "anchor" || _key8 === "focus") {
              throw new Error('Cannot remove the "'.concat(_key8, '" selection property'));
            }
            delete selection[_key8];
          } else {
            selection[_key8] = _value;
          }
        }
      }
      break;
    }
    case "split_node": {
      var {
        path: _path7,
        position,
        properties: _properties
      } = op;
      if (_path7.length === 0) {
        throw new Error('Cannot apply a "split_node" operation at path ['.concat(_path7, "] because the root node cannot be split."));
      }
      var _node6 = Node.get(editor, _path7);
      var _parent4 = Node.parent(editor, _path7);
      var _index4 = _path7[_path7.length - 1];
      var newNode;
      if (Text.isText(_node6)) {
        var _before2 = _node6.text.slice(0, position);
        var _after2 = _node6.text.slice(position);
        _node6.text = _before2;
        newNode = _objectSpread$3(_objectSpread$3({}, _properties), {}, {
          text: _after2
        });
      } else {
        var _before3 = _node6.children.slice(0, position);
        var _after3 = _node6.children.slice(position);
        _node6.children = _before3;
        newNode = _objectSpread$3(_objectSpread$3({}, _properties), {}, {
          children: _after3
        });
      }
      _parent4.children.splice(_index4 + 1, 0, newNode);
      if (selection) {
        for (var [_point6, _key9] of Range.points(selection)) {
          selection[_key9] = Point.transform(_point6, op);
        }
      }
      break;
    }
  }
  return selection;
};
var GeneralTransforms = {
  transform(editor, op) {
    editor.children = ln(editor.children);
    var selection = editor.selection && ln(editor.selection);
    try {
      selection = applyToDraft(editor, selection, op);
    } finally {
      editor.children = dn(editor.children);
      if (selection) {
        editor.selection = r(selection) ? dn(selection) : selection;
      } else {
        editor.selection = null;
      }
    }
  }
};
var _excluded = ["text"];
var _excluded2 = ["children"];
function ownKeys$2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$2(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    if (i2 % 2) {
      ownKeys$2(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$2(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var NodeTransforms = {
  insertNodes(editor, nodes) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        hanging = false,
        voids = false,
        mode = "lowest"
      } = options;
      var {
        at,
        match,
        select
      } = options;
      if (Node.isNode(nodes)) {
        nodes = [nodes];
      }
      if (nodes.length === 0) {
        return;
      }
      var [node2] = nodes;
      if (!at) {
        if (editor.selection) {
          at = editor.selection;
        } else if (editor.children.length > 0) {
          at = Editor.end(editor, []);
        } else {
          at = [0];
        }
        select = true;
      }
      if (select == null) {
        select = false;
      }
      if (Range.isRange(at)) {
        if (!hanging) {
          at = Editor.unhangRange(editor, at);
        }
        if (Range.isCollapsed(at)) {
          at = at.anchor;
        } else {
          var [, end2] = Range.edges(at);
          var pointRef = Editor.pointRef(editor, end2);
          Transforms.delete(editor, {
            at
          });
          at = pointRef.unref();
        }
      }
      if (Point.isPoint(at)) {
        if (match == null) {
          if (Text.isText(node2)) {
            match = (n4) => Text.isText(n4);
          } else if (editor.isInline(node2)) {
            match = (n4) => Text.isText(n4) || Editor.isInline(editor, n4);
          } else {
            match = (n4) => Editor.isBlock(editor, n4);
          }
        }
        var [entry] = Editor.nodes(editor, {
          at: at.path,
          match,
          mode,
          voids
        });
        if (entry) {
          var [, _matchPath] = entry;
          var pathRef = Editor.pathRef(editor, _matchPath);
          var isAtEnd = Editor.isEnd(editor, at, _matchPath);
          Transforms.splitNodes(editor, {
            at,
            match,
            mode,
            voids
          });
          var path = pathRef.unref();
          at = isAtEnd ? Path.next(path) : path;
        } else {
          return;
        }
      }
      var parentPath = Path.parent(at);
      var index2 = at[at.length - 1];
      if (!voids && Editor.void(editor, {
        at: parentPath
      })) {
        return;
      }
      for (var _node of nodes) {
        var _path = parentPath.concat(index2);
        index2++;
        editor.apply({
          type: "insert_node",
          path: _path,
          node: _node
        });
        at = Path.next(at);
      }
      at = Path.previous(at);
      if (select) {
        var point = Editor.end(editor, at);
        if (point) {
          Transforms.select(editor, point);
        }
      }
    });
  },
  liftNodes(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        at = editor.selection,
        mode = "lowest",
        voids = false
      } = options;
      var {
        match
      } = options;
      if (match == null) {
        match = Path.isPath(at) ? matchPath(editor, at) : (n4) => Editor.isBlock(editor, n4);
      }
      if (!at) {
        return;
      }
      var matches = Editor.nodes(editor, {
        at,
        match,
        mode,
        voids
      });
      var pathRefs = Array.from(matches, (_ref) => {
        var [, p3] = _ref;
        return Editor.pathRef(editor, p3);
      });
      for (var pathRef of pathRefs) {
        var path = pathRef.unref();
        if (path.length < 2) {
          throw new Error("Cannot lift node at a path [".concat(path, "] because it has a depth of less than `2`."));
        }
        var parentNodeEntry = Editor.node(editor, Path.parent(path));
        var [parent, parentPath] = parentNodeEntry;
        var index2 = path[path.length - 1];
        var {
          length
        } = parent.children;
        if (length === 1) {
          var toPath = Path.next(parentPath);
          Transforms.moveNodes(editor, {
            at: path,
            to: toPath,
            voids
          });
          Transforms.removeNodes(editor, {
            at: parentPath,
            voids
          });
        } else if (index2 === 0) {
          Transforms.moveNodes(editor, {
            at: path,
            to: parentPath,
            voids
          });
        } else if (index2 === length - 1) {
          var _toPath = Path.next(parentPath);
          Transforms.moveNodes(editor, {
            at: path,
            to: _toPath,
            voids
          });
        } else {
          var splitPath = Path.next(path);
          var _toPath2 = Path.next(parentPath);
          Transforms.splitNodes(editor, {
            at: splitPath,
            voids
          });
          Transforms.moveNodes(editor, {
            at: path,
            to: _toPath2,
            voids
          });
        }
      }
    });
  },
  mergeNodes(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        match,
        at = editor.selection
      } = options;
      var {
        hanging = false,
        voids = false,
        mode = "lowest"
      } = options;
      if (!at) {
        return;
      }
      if (match == null) {
        if (Path.isPath(at)) {
          var [parent] = Editor.parent(editor, at);
          match = (n4) => parent.children.includes(n4);
        } else {
          match = (n4) => Editor.isBlock(editor, n4);
        }
      }
      if (!hanging && Range.isRange(at)) {
        at = Editor.unhangRange(editor, at);
      }
      if (Range.isRange(at)) {
        if (Range.isCollapsed(at)) {
          at = at.anchor;
        } else {
          var [, end2] = Range.edges(at);
          var pointRef = Editor.pointRef(editor, end2);
          Transforms.delete(editor, {
            at
          });
          at = pointRef.unref();
          if (options.at == null) {
            Transforms.select(editor, at);
          }
        }
      }
      var [current] = Editor.nodes(editor, {
        at,
        match,
        voids,
        mode
      });
      var prev = Editor.previous(editor, {
        at,
        match,
        voids,
        mode
      });
      if (!current || !prev) {
        return;
      }
      var [node2, path] = current;
      var [prevNode, prevPath] = prev;
      if (path.length === 0 || prevPath.length === 0) {
        return;
      }
      var newPath = Path.next(prevPath);
      var commonPath = Path.common(path, prevPath);
      var isPreviousSibling = Path.isSibling(path, prevPath);
      var levels = Array.from(Editor.levels(editor, {
        at: path
      }), (_ref2) => {
        var [n4] = _ref2;
        return n4;
      }).slice(commonPath.length).slice(0, -1);
      var emptyAncestor = Editor.above(editor, {
        at: path,
        mode: "highest",
        match: (n4) => levels.includes(n4) && hasSingleChildNest(editor, n4)
      });
      var emptyRef = emptyAncestor && Editor.pathRef(editor, emptyAncestor[1]);
      var properties;
      var position;
      if (Text.isText(node2) && Text.isText(prevNode)) {
        var rest = _objectWithoutProperties(node2, _excluded);
        position = prevNode.text.length;
        properties = rest;
      } else if (Element2.isElement(node2) && Element2.isElement(prevNode)) {
        var rest = _objectWithoutProperties(node2, _excluded2);
        position = prevNode.children.length;
        properties = rest;
      } else {
        throw new Error("Cannot merge the node at path [".concat(path, "] with the previous sibling because it is not the same kind: ").concat(JSON.stringify(node2), " ").concat(JSON.stringify(prevNode)));
      }
      if (!isPreviousSibling) {
        Transforms.moveNodes(editor, {
          at: path,
          to: newPath,
          voids
        });
      }
      if (emptyRef) {
        Transforms.removeNodes(editor, {
          at: emptyRef.current,
          voids
        });
      }
      if (Element2.isElement(prevNode) && Editor.isEmpty(editor, prevNode) || Text.isText(prevNode) && prevNode.text === "" && prevPath[prevPath.length - 1] !== 0) {
        Transforms.removeNodes(editor, {
          at: prevPath,
          voids
        });
      } else {
        editor.apply({
          type: "merge_node",
          path: newPath,
          position,
          properties
        });
      }
      if (emptyRef) {
        emptyRef.unref();
      }
    });
  },
  moveNodes(editor, options) {
    Editor.withoutNormalizing(editor, () => {
      var {
        to,
        at = editor.selection,
        mode = "lowest",
        voids = false
      } = options;
      var {
        match
      } = options;
      if (!at) {
        return;
      }
      if (match == null) {
        match = Path.isPath(at) ? matchPath(editor, at) : (n4) => Editor.isBlock(editor, n4);
      }
      var toRef = Editor.pathRef(editor, to);
      var targets = Editor.nodes(editor, {
        at,
        match,
        mode,
        voids
      });
      var pathRefs = Array.from(targets, (_ref3) => {
        var [, p3] = _ref3;
        return Editor.pathRef(editor, p3);
      });
      for (var pathRef of pathRefs) {
        var path = pathRef.unref();
        var newPath = toRef.current;
        if (path.length !== 0) {
          editor.apply({
            type: "move_node",
            path,
            newPath
          });
        }
        if (toRef.current && Path.isSibling(newPath, path) && Path.isAfter(newPath, path)) {
          toRef.current = Path.next(toRef.current);
        }
      }
      toRef.unref();
    });
  },
  removeNodes(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        hanging = false,
        voids = false,
        mode = "lowest"
      } = options;
      var {
        at = editor.selection,
        match
      } = options;
      if (!at) {
        return;
      }
      if (match == null) {
        match = Path.isPath(at) ? matchPath(editor, at) : (n4) => Editor.isBlock(editor, n4);
      }
      if (!hanging && Range.isRange(at)) {
        at = Editor.unhangRange(editor, at);
      }
      var depths = Editor.nodes(editor, {
        at,
        match,
        mode,
        voids
      });
      var pathRefs = Array.from(depths, (_ref4) => {
        var [, p3] = _ref4;
        return Editor.pathRef(editor, p3);
      });
      for (var pathRef of pathRefs) {
        var path = pathRef.unref();
        if (path) {
          var [node2] = Editor.node(editor, path);
          editor.apply({
            type: "remove_node",
            path,
            node: node2
          });
        }
      }
    });
  },
  setNodes(editor, props) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        match,
        at = editor.selection
      } = options;
      var {
        hanging = false,
        mode = "lowest",
        split = false,
        voids = false
      } = options;
      if (!at) {
        return;
      }
      if (match == null) {
        match = Path.isPath(at) ? matchPath(editor, at) : (n4) => Editor.isBlock(editor, n4);
      }
      if (!hanging && Range.isRange(at)) {
        at = Editor.unhangRange(editor, at);
      }
      if (split && Range.isRange(at)) {
        if (Range.isCollapsed(at) && Editor.leaf(editor, at.anchor)[0].text.length > 0) {
          return;
        }
        var rangeRef = Editor.rangeRef(editor, at, {
          affinity: "inward"
        });
        var [start2, end2] = Range.edges(at);
        var splitMode = mode === "lowest" ? "lowest" : "highest";
        var endAtEndOfNode = Editor.isEnd(editor, end2, end2.path);
        Transforms.splitNodes(editor, {
          at: end2,
          match,
          mode: splitMode,
          voids,
          always: !endAtEndOfNode
        });
        var startAtStartOfNode = Editor.isStart(editor, start2, start2.path);
        Transforms.splitNodes(editor, {
          at: start2,
          match,
          mode: splitMode,
          voids,
          always: !startAtStartOfNode
        });
        at = rangeRef.unref();
        if (options.at == null) {
          Transforms.select(editor, at);
        }
      }
      for (var [node2, path] of Editor.nodes(editor, {
        at,
        match,
        mode,
        voids
      })) {
        var properties = {};
        var newProperties = {};
        if (path.length === 0) {
          continue;
        }
        var hasChanges = false;
        for (var k3 in props) {
          if (k3 === "children" || k3 === "text") {
            continue;
          }
          if (props[k3] !== node2[k3]) {
            hasChanges = true;
            if (node2.hasOwnProperty(k3))
              properties[k3] = node2[k3];
            if (props[k3] != null)
              newProperties[k3] = props[k3];
          }
        }
        if (hasChanges) {
          editor.apply({
            type: "set_node",
            path,
            properties,
            newProperties
          });
        }
      }
    });
  },
  splitNodes(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        mode = "lowest",
        voids = false
      } = options;
      var {
        match,
        at = editor.selection,
        height = 0,
        always = false
      } = options;
      if (match == null) {
        match = (n4) => Editor.isBlock(editor, n4);
      }
      if (Range.isRange(at)) {
        at = deleteRange(editor, at);
      }
      if (Path.isPath(at)) {
        var path = at;
        var point = Editor.point(editor, path);
        var [parent] = Editor.parent(editor, path);
        match = (n4) => n4 === parent;
        height = point.path.length - path.length + 1;
        at = point;
        always = true;
      }
      if (!at) {
        return;
      }
      var beforeRef = Editor.pointRef(editor, at, {
        affinity: "backward"
      });
      var [highest] = Editor.nodes(editor, {
        at,
        match,
        mode,
        voids
      });
      if (!highest) {
        return;
      }
      var voidMatch = Editor.void(editor, {
        at,
        mode: "highest"
      });
      var nudge = 0;
      if (!voids && voidMatch) {
        var [voidNode, voidPath] = voidMatch;
        if (Element2.isElement(voidNode) && editor.isInline(voidNode)) {
          var after = Editor.after(editor, voidPath);
          if (!after) {
            var text = {
              text: ""
            };
            var afterPath = Path.next(voidPath);
            Transforms.insertNodes(editor, text, {
              at: afterPath,
              voids
            });
            after = Editor.point(editor, afterPath);
          }
          at = after;
          always = true;
        }
        var siblingHeight = at.path.length - voidPath.length;
        height = siblingHeight + 1;
        always = true;
      }
      var afterRef = Editor.pointRef(editor, at);
      var depth = at.path.length - height;
      var [, highestPath] = highest;
      var lowestPath = at.path.slice(0, depth);
      var position = height === 0 ? at.offset : at.path[depth] + nudge;
      for (var [node2, _path2] of Editor.levels(editor, {
        at: lowestPath,
        reverse: true,
        voids
      })) {
        var split = false;
        if (_path2.length < highestPath.length || _path2.length === 0 || !voids && Editor.isVoid(editor, node2)) {
          break;
        }
        var _point = beforeRef.current;
        var isEnd = Editor.isEnd(editor, _point, _path2);
        if (always || !beforeRef || !Editor.isEdge(editor, _point, _path2)) {
          split = true;
          var properties = Node.extractProps(node2);
          editor.apply({
            type: "split_node",
            path: _path2,
            position,
            properties
          });
        }
        position = _path2[_path2.length - 1] + (split || isEnd ? 1 : 0);
      }
      if (options.at == null) {
        var _point2 = afterRef.current || Editor.end(editor, []);
        Transforms.select(editor, _point2);
      }
      beforeRef.unref();
      afterRef.unref();
    });
  },
  unsetNodes(editor, props) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!Array.isArray(props)) {
      props = [props];
    }
    var obj = {};
    for (var key of props) {
      obj[key] = null;
    }
    Transforms.setNodes(editor, obj, options);
  },
  unwrapNodes(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        mode = "lowest",
        split = false,
        voids = false
      } = options;
      var {
        at = editor.selection,
        match
      } = options;
      if (!at) {
        return;
      }
      if (match == null) {
        match = Path.isPath(at) ? matchPath(editor, at) : (n4) => Editor.isBlock(editor, n4);
      }
      if (Path.isPath(at)) {
        at = Editor.range(editor, at);
      }
      var rangeRef = Range.isRange(at) ? Editor.rangeRef(editor, at) : null;
      var matches = Editor.nodes(editor, {
        at,
        match,
        mode,
        voids
      });
      var pathRefs = Array.from(matches, (_ref5) => {
        var [, p3] = _ref5;
        return Editor.pathRef(editor, p3);
      }).reverse();
      var _loop = function _loop2(pathRef2) {
        var path = pathRef2.unref();
        var [node2] = Editor.node(editor, path);
        var range = Editor.range(editor, path);
        if (split && rangeRef) {
          range = Range.intersection(rangeRef.current, range);
        }
        Transforms.liftNodes(editor, {
          at: range,
          match: (n4) => Element2.isAncestor(node2) && node2.children.includes(n4),
          voids
        });
      };
      for (var pathRef of pathRefs) {
        _loop(pathRef);
      }
      if (rangeRef) {
        rangeRef.unref();
      }
    });
  },
  wrapNodes(editor, element) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        mode = "lowest",
        split = false,
        voids = false
      } = options;
      var {
        match,
        at = editor.selection
      } = options;
      if (!at) {
        return;
      }
      if (match == null) {
        if (Path.isPath(at)) {
          match = matchPath(editor, at);
        } else if (editor.isInline(element)) {
          match = (n4) => Editor.isInline(editor, n4) || Text.isText(n4);
        } else {
          match = (n4) => Editor.isBlock(editor, n4);
        }
      }
      if (split && Range.isRange(at)) {
        var [start2, end2] = Range.edges(at);
        var rangeRef = Editor.rangeRef(editor, at, {
          affinity: "inward"
        });
        Transforms.splitNodes(editor, {
          at: end2,
          match,
          voids
        });
        Transforms.splitNodes(editor, {
          at: start2,
          match,
          voids
        });
        at = rangeRef.unref();
        if (options.at == null) {
          Transforms.select(editor, at);
        }
      }
      var roots = Array.from(Editor.nodes(editor, {
        at,
        match: editor.isInline(element) ? (n4) => Editor.isBlock(editor, n4) : (n4) => Editor.isEditor(n4),
        mode: "lowest",
        voids
      }));
      for (var [, rootPath] of roots) {
        var a2 = Range.isRange(at) ? Range.intersection(at, Editor.range(editor, rootPath)) : at;
        if (!a2) {
          continue;
        }
        var matches = Array.from(Editor.nodes(editor, {
          at: a2,
          match,
          mode,
          voids
        }));
        if (matches.length > 0) {
          var _ret = function() {
            var [first] = matches;
            var last = matches[matches.length - 1];
            var [, firstPath] = first;
            var [, lastPath] = last;
            if (firstPath.length === 0 && lastPath.length === 0) {
              return "continue";
            }
            var commonPath = Path.equals(firstPath, lastPath) ? Path.parent(firstPath) : Path.common(firstPath, lastPath);
            var range = Editor.range(editor, firstPath, lastPath);
            var commonNodeEntry = Editor.node(editor, commonPath);
            var [commonNode] = commonNodeEntry;
            var depth = commonPath.length + 1;
            var wrapperPath = Path.next(lastPath.slice(0, depth));
            var wrapper = _objectSpread$2(_objectSpread$2({}, element), {}, {
              children: []
            });
            Transforms.insertNodes(editor, wrapper, {
              at: wrapperPath,
              voids
            });
            Transforms.moveNodes(editor, {
              at: range,
              match: (n4) => Element2.isAncestor(commonNode) && commonNode.children.includes(n4),
              to: wrapperPath.concat(0),
              voids
            });
          }();
          if (_ret === "continue")
            continue;
        }
      }
    });
  }
};
var hasSingleChildNest = (editor, node2) => {
  if (Element2.isElement(node2)) {
    var element = node2;
    if (Editor.isVoid(editor, node2)) {
      return true;
    } else if (element.children.length === 1) {
      return hasSingleChildNest(editor, element.children[0]);
    } else {
      return false;
    }
  } else if (Editor.isEditor(node2)) {
    return false;
  } else {
    return true;
  }
};
var deleteRange = (editor, range) => {
  if (Range.isCollapsed(range)) {
    return range.anchor;
  } else {
    var [, end2] = Range.edges(range);
    var pointRef = Editor.pointRef(editor, end2);
    Transforms.delete(editor, {
      at: range
    });
    return pointRef.unref();
  }
};
var matchPath = (editor, path) => {
  var [node2] = Editor.node(editor, path);
  return (n4) => n4 === node2;
};
function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$1(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    if (i2 % 2) {
      ownKeys$1(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$1(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var SelectionTransforms = {
  collapse(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      edge = "anchor"
    } = options;
    var {
      selection
    } = editor;
    if (!selection) {
      return;
    } else if (edge === "anchor") {
      Transforms.select(editor, selection.anchor);
    } else if (edge === "focus") {
      Transforms.select(editor, selection.focus);
    } else if (edge === "start") {
      var [start2] = Range.edges(selection);
      Transforms.select(editor, start2);
    } else if (edge === "end") {
      var [, end2] = Range.edges(selection);
      Transforms.select(editor, end2);
    }
  },
  deselect(editor) {
    var {
      selection
    } = editor;
    if (selection) {
      editor.apply({
        type: "set_selection",
        properties: selection,
        newProperties: null
      });
    }
  },
  move(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      selection
    } = editor;
    var {
      distance = 1,
      unit = "character",
      reverse = false
    } = options;
    var {
      edge = null
    } = options;
    if (!selection) {
      return;
    }
    if (edge === "start") {
      edge = Range.isBackward(selection) ? "focus" : "anchor";
    }
    if (edge === "end") {
      edge = Range.isBackward(selection) ? "anchor" : "focus";
    }
    var {
      anchor,
      focus
    } = selection;
    var opts = {
      distance,
      unit
    };
    var props = {};
    if (edge == null || edge === "anchor") {
      var point = reverse ? Editor.before(editor, anchor, opts) : Editor.after(editor, anchor, opts);
      if (point) {
        props.anchor = point;
      }
    }
    if (edge == null || edge === "focus") {
      var _point = reverse ? Editor.before(editor, focus, opts) : Editor.after(editor, focus, opts);
      if (_point) {
        props.focus = _point;
      }
    }
    Transforms.setSelection(editor, props);
  },
  select(editor, target) {
    var {
      selection
    } = editor;
    target = Editor.range(editor, target);
    if (selection) {
      Transforms.setSelection(editor, target);
      return;
    }
    if (!Range.isRange(target)) {
      throw new Error("When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(JSON.stringify(target)));
    }
    editor.apply({
      type: "set_selection",
      properties: selection,
      newProperties: target
    });
  },
  setPoint(editor, props) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var {
      selection
    } = editor;
    var {
      edge = "both"
    } = options;
    if (!selection) {
      return;
    }
    if (edge === "start") {
      edge = Range.isBackward(selection) ? "focus" : "anchor";
    }
    if (edge === "end") {
      edge = Range.isBackward(selection) ? "anchor" : "focus";
    }
    var {
      anchor,
      focus
    } = selection;
    var point = edge === "anchor" ? anchor : focus;
    Transforms.setSelection(editor, {
      [edge === "anchor" ? "anchor" : "focus"]: _objectSpread$1(_objectSpread$1({}, point), props)
    });
  },
  setSelection(editor, props) {
    var {
      selection
    } = editor;
    var oldProps = {};
    var newProps = {};
    if (!selection) {
      return;
    }
    for (var k3 in props) {
      if (k3 === "anchor" && props.anchor != null && !Point.equals(props.anchor, selection.anchor) || k3 === "focus" && props.focus != null && !Point.equals(props.focus, selection.focus) || k3 !== "anchor" && k3 !== "focus" && props[k3] !== selection[k3]) {
        oldProps[k3] = selection[k3];
        newProps[k3] = props[k3];
      }
    }
    if (Object.keys(oldProps).length > 0) {
      editor.apply({
        type: "set_selection",
        properties: oldProps,
        newProperties: newProps
      });
    }
  }
};
var TextTransforms = {
  delete(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        reverse = false,
        unit = "character",
        distance = 1,
        voids = false
      } = options;
      var {
        at = editor.selection,
        hanging = false
      } = options;
      if (!at) {
        return;
      }
      if (Range.isRange(at) && Range.isCollapsed(at)) {
        at = at.anchor;
      }
      if (Point.isPoint(at)) {
        var furthestVoid = Editor.void(editor, {
          at,
          mode: "highest"
        });
        if (!voids && furthestVoid) {
          var [, voidPath] = furthestVoid;
          at = voidPath;
        } else {
          var opts = {
            unit,
            distance
          };
          var target = reverse ? Editor.before(editor, at, opts) || Editor.start(editor, []) : Editor.after(editor, at, opts) || Editor.end(editor, []);
          at = {
            anchor: at,
            focus: target
          };
          hanging = true;
        }
      }
      if (Path.isPath(at)) {
        Transforms.removeNodes(editor, {
          at,
          voids
        });
        return;
      }
      if (Range.isCollapsed(at)) {
        return;
      }
      if (!hanging) {
        var [, _end] = Range.edges(at);
        var endOfDoc = Editor.end(editor, []);
        if (!Point.equals(_end, endOfDoc)) {
          at = Editor.unhangRange(editor, at, {
            voids
          });
        }
      }
      var [start2, end2] = Range.edges(at);
      var startBlock = Editor.above(editor, {
        match: (n4) => Editor.isBlock(editor, n4),
        at: start2,
        voids
      });
      var endBlock = Editor.above(editor, {
        match: (n4) => Editor.isBlock(editor, n4),
        at: end2,
        voids
      });
      var isAcrossBlocks = startBlock && endBlock && !Path.equals(startBlock[1], endBlock[1]);
      var isSingleText = Path.equals(start2.path, end2.path);
      var startVoid = voids ? null : Editor.void(editor, {
        at: start2,
        mode: "highest"
      });
      var endVoid = voids ? null : Editor.void(editor, {
        at: end2,
        mode: "highest"
      });
      if (startVoid) {
        var before = Editor.before(editor, start2);
        if (before && startBlock && Path.isAncestor(startBlock[1], before.path)) {
          start2 = before;
        }
      }
      if (endVoid) {
        var after = Editor.after(editor, end2);
        if (after && endBlock && Path.isAncestor(endBlock[1], after.path)) {
          end2 = after;
        }
      }
      var matches = [];
      var lastPath;
      for (var entry of Editor.nodes(editor, {
        at,
        voids
      })) {
        var [node2, path] = entry;
        if (lastPath && Path.compare(path, lastPath) === 0) {
          continue;
        }
        if (!voids && Editor.isVoid(editor, node2) || !Path.isCommon(path, start2.path) && !Path.isCommon(path, end2.path)) {
          matches.push(entry);
          lastPath = path;
        }
      }
      var pathRefs = Array.from(matches, (_ref) => {
        var [, p3] = _ref;
        return Editor.pathRef(editor, p3);
      });
      var startRef = Editor.pointRef(editor, start2);
      var endRef = Editor.pointRef(editor, end2);
      if (!isSingleText && !startVoid) {
        var _point = startRef.current;
        var [_node] = Editor.leaf(editor, _point);
        var {
          path: _path
        } = _point;
        var {
          offset: offset2
        } = start2;
        var text = _node.text.slice(offset2);
        if (text.length > 0)
          editor.apply({
            type: "remove_text",
            path: _path,
            offset: offset2,
            text
          });
      }
      for (var pathRef of pathRefs) {
        var _path2 = pathRef.unref();
        Transforms.removeNodes(editor, {
          at: _path2,
          voids
        });
      }
      if (!endVoid) {
        var _point2 = endRef.current;
        var [_node2] = Editor.leaf(editor, _point2);
        var {
          path: _path3
        } = _point2;
        var _offset = isSingleText ? start2.offset : 0;
        var _text = _node2.text.slice(_offset, end2.offset);
        if (_text.length > 0)
          editor.apply({
            type: "remove_text",
            path: _path3,
            offset: _offset,
            text: _text
          });
      }
      if (!isSingleText && isAcrossBlocks && endRef.current && startRef.current) {
        Transforms.mergeNodes(editor, {
          at: endRef.current,
          hanging: true,
          voids
        });
      }
      var point = reverse ? startRef.unref() || endRef.unref() : endRef.unref() || startRef.unref();
      if (options.at == null && point) {
        Transforms.select(editor, point);
      }
    });
  },
  insertFragment(editor, fragment) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        hanging = false,
        voids = false
      } = options;
      var {
        at = editor.selection
      } = options;
      if (!fragment.length) {
        return;
      }
      if (!at) {
        return;
      } else if (Range.isRange(at)) {
        if (!hanging) {
          at = Editor.unhangRange(editor, at);
        }
        if (Range.isCollapsed(at)) {
          at = at.anchor;
        } else {
          var [, end2] = Range.edges(at);
          if (!voids && Editor.void(editor, {
            at: end2
          })) {
            return;
          }
          var pointRef = Editor.pointRef(editor, end2);
          Transforms.delete(editor, {
            at
          });
          at = pointRef.unref();
        }
      } else if (Path.isPath(at)) {
        at = Editor.start(editor, at);
      }
      if (!voids && Editor.void(editor, {
        at
      })) {
        return;
      }
      var inlineElementMatch = Editor.above(editor, {
        at,
        match: (n4) => Editor.isInline(editor, n4),
        mode: "highest",
        voids
      });
      if (inlineElementMatch) {
        var [, _inlinePath] = inlineElementMatch;
        if (Editor.isEnd(editor, at, _inlinePath)) {
          var after = Editor.after(editor, _inlinePath);
          at = after;
        } else if (Editor.isStart(editor, at, _inlinePath)) {
          var before = Editor.before(editor, _inlinePath);
          at = before;
        }
      }
      var blockMatch = Editor.above(editor, {
        match: (n4) => Editor.isBlock(editor, n4),
        at,
        voids
      });
      var [, blockPath] = blockMatch;
      var isBlockStart = Editor.isStart(editor, at, blockPath);
      var isBlockEnd = Editor.isEnd(editor, at, blockPath);
      var isBlockEmpty = isBlockStart && isBlockEnd;
      var mergeStart = !isBlockStart || isBlockStart && isBlockEnd;
      var mergeEnd = !isBlockEnd;
      var [, firstPath] = Node.first({
        children: fragment
      }, []);
      var [, lastPath] = Node.last({
        children: fragment
      }, []);
      var matches = [];
      var matcher = (_ref2) => {
        var [n4, p3] = _ref2;
        var isRoot = p3.length === 0;
        if (isRoot) {
          return false;
        }
        if (isBlockEmpty) {
          return true;
        }
        if (mergeStart && Path.isAncestor(p3, firstPath) && Element2.isElement(n4) && !editor.isVoid(n4) && !editor.isInline(n4)) {
          return false;
        }
        if (mergeEnd && Path.isAncestor(p3, lastPath) && Element2.isElement(n4) && !editor.isVoid(n4) && !editor.isInline(n4)) {
          return false;
        }
        return true;
      };
      for (var entry of Node.nodes({
        children: fragment
      }, {
        pass: matcher
      })) {
        if (matcher(entry)) {
          matches.push(entry);
        }
      }
      var starts = [];
      var middles = [];
      var ends = [];
      var starting = true;
      var hasBlocks = false;
      for (var [node2] of matches) {
        if (Element2.isElement(node2) && !editor.isInline(node2)) {
          starting = false;
          hasBlocks = true;
          middles.push(node2);
        } else if (starting) {
          starts.push(node2);
        } else {
          ends.push(node2);
        }
      }
      var [inlineMatch] = Editor.nodes(editor, {
        at,
        match: (n4) => Text.isText(n4) || Editor.isInline(editor, n4),
        mode: "highest",
        voids
      });
      var [, inlinePath] = inlineMatch;
      var isInlineStart = Editor.isStart(editor, at, inlinePath);
      var isInlineEnd = Editor.isEnd(editor, at, inlinePath);
      var middleRef = Editor.pathRef(editor, isBlockEnd ? Path.next(blockPath) : blockPath);
      var endRef = Editor.pathRef(editor, isInlineEnd ? Path.next(inlinePath) : inlinePath);
      var blockPathRef = Editor.pathRef(editor, blockPath);
      Transforms.splitNodes(editor, {
        at,
        match: (n4) => hasBlocks ? Editor.isBlock(editor, n4) : Text.isText(n4) || Editor.isInline(editor, n4),
        mode: hasBlocks ? "lowest" : "highest",
        voids
      });
      var startRef = Editor.pathRef(editor, !isInlineStart || isInlineStart && isInlineEnd ? Path.next(inlinePath) : inlinePath);
      Transforms.insertNodes(editor, starts, {
        at: startRef.current,
        match: (n4) => Text.isText(n4) || Editor.isInline(editor, n4),
        mode: "highest",
        voids
      });
      if (isBlockEmpty && middles.length) {
        Transforms.delete(editor, {
          at: blockPathRef.unref(),
          voids
        });
      }
      Transforms.insertNodes(editor, middles, {
        at: middleRef.current,
        match: (n4) => Editor.isBlock(editor, n4),
        mode: "lowest",
        voids
      });
      Transforms.insertNodes(editor, ends, {
        at: endRef.current,
        match: (n4) => Text.isText(n4) || Editor.isInline(editor, n4),
        mode: "highest",
        voids
      });
      if (!options.at) {
        var path;
        if (ends.length > 0) {
          path = Path.previous(endRef.current);
        } else if (middles.length > 0) {
          path = Path.previous(middleRef.current);
        } else {
          path = Path.previous(startRef.current);
        }
        var _end2 = Editor.end(editor, path);
        Transforms.select(editor, _end2);
      }
      startRef.unref();
      middleRef.unref();
      endRef.unref();
    });
  },
  insertText(editor, text) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        voids = false
      } = options;
      var {
        at = editor.selection
      } = options;
      if (!at) {
        return;
      }
      if (Path.isPath(at)) {
        at = Editor.range(editor, at);
      }
      if (Range.isRange(at)) {
        if (Range.isCollapsed(at)) {
          at = at.anchor;
        } else {
          var end2 = Range.end(at);
          if (!voids && Editor.void(editor, {
            at: end2
          })) {
            return;
          }
          var start2 = Range.start(at);
          var pointRef = Editor.pointRef(editor, start2);
          Transforms.delete(editor, {
            at,
            voids
          });
          at = pointRef.unref();
          Transforms.setSelection(editor, {
            anchor: at,
            focus: at
          });
        }
      }
      if (!voids && Editor.void(editor, {
        at
      })) {
        return;
      }
      var {
        path,
        offset: offset2
      } = at;
      if (text.length > 0)
        editor.apply({
          type: "insert_text",
          path,
          offset: offset2,
          text
        });
    });
  }
};
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    if (i2 % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var Transforms = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, GeneralTransforms), NodeTransforms), SelectionTransforms), TextTransforms);

// node_modules/slate-react/dist/index.es.js
init_react();
var import_react = __toESM(require_react());
var import_direction = __toESM(require_direction());
var import_debounce = __toESM(require_debounce());
var import_throttle = __toESM(require_throttle());

// node_modules/scroll-into-view-if-needed/es/index.js
init_react();

// node_modules/compute-scroll-into-view/dist/index.module.js
init_react();
function t2(t3) {
  return typeof t3 == "object" && t3 != null && t3.nodeType === 1;
}
function e(t3, e2) {
  return (!e2 || t3 !== "hidden") && t3 !== "visible" && t3 !== "clip";
}
function n2(t3, n4) {
  if (t3.clientHeight < t3.scrollHeight || t3.clientWidth < t3.scrollWidth) {
    var r3 = getComputedStyle(t3, null);
    return e(r3.overflowY, n4) || e(r3.overflowX, n4) || function(t4) {
      var e2 = function(t5) {
        if (!t5.ownerDocument || !t5.ownerDocument.defaultView)
          return null;
        try {
          return t5.ownerDocument.defaultView.frameElement;
        } catch (t6) {
          return null;
        }
      }(t4);
      return !!e2 && (e2.clientHeight < t4.scrollHeight || e2.clientWidth < t4.scrollWidth);
    }(t3);
  }
  return false;
}
function r2(t3, e2, n4, r3, i2, o2, l2, d2) {
  return o2 < t3 && l2 > e2 || o2 > t3 && l2 < e2 ? 0 : o2 <= t3 && d2 <= n4 || l2 >= e2 && d2 >= n4 ? o2 - t3 - r3 : l2 > e2 && d2 < n4 || o2 < t3 && d2 > n4 ? l2 - e2 + i2 : 0;
}
function index_module_default(e2, i2) {
  var o2 = window, l2 = i2.scrollMode, d2 = i2.block, u2 = i2.inline, h3 = i2.boundary, a2 = i2.skipOverflowHiddenElements, c2 = typeof h3 == "function" ? h3 : function(t3) {
    return t3 !== h3;
  };
  if (!t2(e2))
    throw new TypeError("Invalid target");
  for (var f3 = document.scrollingElement || document.documentElement, s3 = [], p3 = e2; t2(p3) && c2(p3); ) {
    if ((p3 = p3.parentElement) === f3) {
      s3.push(p3);
      break;
    }
    p3 != null && p3 === document.body && n2(p3) && !n2(document.documentElement) || p3 != null && n2(p3, a2) && s3.push(p3);
  }
  for (var m2 = o2.visualViewport ? o2.visualViewport.width : innerWidth, g3 = o2.visualViewport ? o2.visualViewport.height : innerHeight, w2 = window.scrollX || pageXOffset, v3 = window.scrollY || pageYOffset, W2 = e2.getBoundingClientRect(), b3 = W2.height, H3 = W2.width, y3 = W2.top, E3 = W2.right, M2 = W2.bottom, V2 = W2.left, x2 = d2 === "start" || d2 === "nearest" ? y3 : d2 === "end" ? M2 : y3 + b3 / 2, I3 = u2 === "center" ? V2 + H3 / 2 : u2 === "end" ? E3 : V2, C2 = [], T = 0; T < s3.length; T++) {
    var k3 = s3[T], B3 = k3.getBoundingClientRect(), D2 = B3.height, O2 = B3.width, R2 = B3.top, X2 = B3.right, Y3 = B3.bottom, L2 = B3.left;
    if (l2 === "if-needed" && y3 >= 0 && V2 >= 0 && M2 <= g3 && E3 <= m2 && y3 >= R2 && M2 <= Y3 && V2 >= L2 && E3 <= X2)
      return C2;
    var S2 = getComputedStyle(k3), j3 = parseInt(S2.borderLeftWidth, 10), q2 = parseInt(S2.borderTopWidth, 10), z2 = parseInt(S2.borderRightWidth, 10), A3 = parseInt(S2.borderBottomWidth, 10), F2 = 0, G2 = 0, J2 = "offsetWidth" in k3 ? k3.offsetWidth - k3.clientWidth - j3 - z2 : 0, K = "offsetHeight" in k3 ? k3.offsetHeight - k3.clientHeight - q2 - A3 : 0;
    if (f3 === k3)
      F2 = d2 === "start" ? x2 : d2 === "end" ? x2 - g3 : d2 === "nearest" ? r2(v3, v3 + g3, g3, q2, A3, v3 + x2, v3 + x2 + b3, b3) : x2 - g3 / 2, G2 = u2 === "start" ? I3 : u2 === "center" ? I3 - m2 / 2 : u2 === "end" ? I3 - m2 : r2(w2, w2 + m2, m2, j3, z2, w2 + I3, w2 + I3 + H3, H3), F2 = Math.max(0, F2 + v3), G2 = Math.max(0, G2 + w2);
    else {
      F2 = d2 === "start" ? x2 - R2 - q2 : d2 === "end" ? x2 - Y3 + A3 + K : d2 === "nearest" ? r2(R2, Y3, D2, q2, A3 + K, x2, x2 + b3, b3) : x2 - (R2 + D2 / 2) + K / 2, G2 = u2 === "start" ? I3 - L2 - j3 : u2 === "center" ? I3 - (L2 + O2 / 2) + J2 / 2 : u2 === "end" ? I3 - X2 + z2 + J2 : r2(L2, X2, O2, j3, z2 + J2, I3, I3 + H3, H3);
      var N2 = k3.scrollLeft, P2 = k3.scrollTop;
      x2 += P2 - (F2 = Math.max(0, Math.min(P2 + F2, k3.scrollHeight - D2 + K))), I3 += N2 - (G2 = Math.max(0, Math.min(N2 + G2, k3.scrollWidth - O2 + J2)));
    }
    C2.push({ el: k3, top: F2, left: G2 });
  }
  return C2;
}

// node_modules/scroll-into-view-if-needed/es/index.js
function isOptionsObject(options) {
  return options === Object(options) && Object.keys(options).length !== 0;
}
function defaultBehavior(actions, behavior) {
  if (behavior === void 0) {
    behavior = "auto";
  }
  var canSmoothScroll = "scrollBehavior" in document.body.style;
  actions.forEach(function(_ref) {
    var el = _ref.el, top2 = _ref.top, left2 = _ref.left;
    if (el.scroll && canSmoothScroll) {
      el.scroll({
        top: top2,
        left: left2,
        behavior
      });
    } else {
      el.scrollTop = top2;
      el.scrollLeft = left2;
    }
  });
}
function getOptions(options) {
  if (options === false) {
    return {
      block: "end",
      inline: "nearest"
    };
  }
  if (isOptionsObject(options)) {
    return options;
  }
  return {
    block: "start",
    inline: "nearest"
  };
}
function scrollIntoView(target, options) {
  var isTargetAttached = target.isConnected || target.ownerDocument.documentElement.contains(target);
  if (isOptionsObject(options) && typeof options.behavior === "function") {
    return options.behavior(isTargetAttached ? index_module_default(target, options) : []);
  }
  if (!isTargetAttached) {
    return;
  }
  var computeOptions = getOptions(options);
  return defaultBehavior(index_module_default(target, computeOptions), computeOptions.behavior);
}
var es_default = scrollIntoView;

// node_modules/slate-react/dist/index.es.js
var import_is_hotkey = __toESM(require_lib());
var import_react_dom = __toESM(require_react_dom());
function _defineProperty2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectWithoutPropertiesLoose2(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties2(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose2(source, excluded);
  var key, i2;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
      key = sourceSymbolKeys[i2];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
var IS_IOS = typeof navigator !== "undefined" && typeof window !== "undefined" && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
var IS_APPLE = typeof navigator !== "undefined" && /Mac OS X/.test(navigator.userAgent);
var IS_ANDROID = typeof navigator !== "undefined" && /Android/.test(navigator.userAgent);
var IS_FIREFOX = typeof navigator !== "undefined" && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
var IS_SAFARI = typeof navigator !== "undefined" && /Version\/[\d\.]+.*Safari/.test(navigator.userAgent);
var IS_EDGE_LEGACY = typeof navigator !== "undefined" && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])/i.test(navigator.userAgent);
var IS_CHROME = typeof navigator !== "undefined" && /Chrome/i.test(navigator.userAgent);
var IS_CHROME_LEGACY = typeof navigator !== "undefined" && /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])/i.test(navigator.userAgent);
var IS_FIREFOX_LEGACY = typeof navigator !== "undefined" && /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])).*/i.test(navigator.userAgent);
var IS_QQBROWSER = typeof navigator !== "undefined" && /.*QQBrowser/.test(navigator.userAgent);
var IS_UC_MOBILE = typeof navigator !== "undefined" && /.*UCBrowser/.test(navigator.userAgent);
var IS_WECHATBROWSER = typeof navigator !== "undefined" && /.*Wechat/.test(navigator.userAgent);
var CAN_USE_DOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
var HAS_BEFORE_INPUT_SUPPORT = !IS_CHROME_LEGACY && !IS_EDGE_LEGACY && typeof globalThis !== "undefined" && globalThis.InputEvent && typeof globalThis.InputEvent.prototype.getTargetRanges === "function";
var useIsomorphicLayoutEffect = CAN_USE_DOM ? import_react.useLayoutEffect : import_react.useEffect;
var String2 = (props) => {
  var {
    isLast,
    leaf,
    parent,
    text
  } = props;
  var editor = useSlateStatic();
  var path = ReactEditor.findPath(editor, text);
  var parentPath = Path.parent(path);
  if (editor.isVoid(parent)) {
    return /* @__PURE__ */ import_react.default.createElement(ZeroWidthString, {
      length: Node.string(parent).length
    });
  }
  if (leaf.text === "" && parent.children[parent.children.length - 1] === text && !editor.isInline(parent) && Editor.string(editor, parentPath) === "") {
    return /* @__PURE__ */ import_react.default.createElement(ZeroWidthString, {
      isLineBreak: true
    });
  }
  if (leaf.text === "") {
    return /* @__PURE__ */ import_react.default.createElement(ZeroWidthString, null);
  }
  if (isLast && leaf.text.slice(-1) === "\n") {
    return /* @__PURE__ */ import_react.default.createElement(TextString, {
      isTrailing: true,
      text: leaf.text
    });
  }
  return /* @__PURE__ */ import_react.default.createElement(TextString, {
    text: leaf.text
  });
};
var TextString = (props) => {
  var {
    text,
    isTrailing = false
  } = props;
  var ref = (0, import_react.useRef)(null);
  var getTextContent = () => {
    return "".concat(text !== null && text !== void 0 ? text : "").concat(isTrailing ? "\n" : "");
  };
  useIsomorphicLayoutEffect(() => {
    var textWithTrailing = getTextContent();
    if (ref.current && ref.current.textContent !== textWithTrailing) {
      ref.current.textContent = textWithTrailing;
    }
  });
  if (!ref.current) {
    return /* @__PURE__ */ import_react.default.createElement("span", {
      "data-slate-string": true,
      ref
    }, getTextContent());
  }
  return /* @__PURE__ */ import_react.default.createElement("span", {
    "data-slate-string": true,
    ref
  });
};
var ZeroWidthString = (props) => {
  var {
    length = 0,
    isLineBreak: isLineBreak2 = false
  } = props;
  return /* @__PURE__ */ import_react.default.createElement("span", {
    "data-slate-zero-width": isLineBreak2 ? "n" : "z",
    "data-slate-length": length
  }, "\uFEFF", isLineBreak2 ? /* @__PURE__ */ import_react.default.createElement("br", null) : null);
};
var NODE_TO_INDEX = /* @__PURE__ */ new WeakMap();
var NODE_TO_PARENT = /* @__PURE__ */ new WeakMap();
var EDITOR_TO_WINDOW = /* @__PURE__ */ new WeakMap();
var EDITOR_TO_ELEMENT = /* @__PURE__ */ new WeakMap();
var ELEMENT_TO_NODE = /* @__PURE__ */ new WeakMap();
var NODE_TO_ELEMENT = /* @__PURE__ */ new WeakMap();
var NODE_TO_KEY = /* @__PURE__ */ new WeakMap();
var EDITOR_TO_KEY_TO_ELEMENT = /* @__PURE__ */ new WeakMap();
var IS_READ_ONLY = /* @__PURE__ */ new WeakMap();
var IS_FOCUSED = /* @__PURE__ */ new WeakMap();
var IS_COMPOSING = /* @__PURE__ */ new WeakMap();
var IS_ON_COMPOSITION_END = /* @__PURE__ */ new WeakMap();
var EDITOR_ON_COMPOSITION_TEXT = /* @__PURE__ */ new WeakMap();
var EDITOR_TO_ON_CHANGE = /* @__PURE__ */ new WeakMap();
var NODE_TO_RESTORE_DOM = /* @__PURE__ */ new WeakMap();
var PLACEHOLDER_SYMBOL = Symbol("placeholder");
var Leaf = (props) => {
  var {
    leaf,
    isLast,
    text,
    parent,
    renderPlaceholder,
    renderLeaf = (props2) => /* @__PURE__ */ import_react.default.createElement(DefaultLeaf, Object.assign({}, props2))
  } = props;
  var placeholderRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    var placeholderEl = placeholderRef === null || placeholderRef === void 0 ? void 0 : placeholderRef.current;
    var editorEl = document.querySelector('[data-slate-editor="true"]');
    if (!placeholderEl || !editorEl) {
      return;
    }
    editorEl.style.minHeight = "".concat(placeholderEl.clientHeight, "px");
    return () => {
      editorEl.style.minHeight = "auto";
    };
  }, [placeholderRef, leaf]);
  var children = /* @__PURE__ */ import_react.default.createElement(String2, {
    isLast,
    leaf,
    parent,
    text
  });
  if (leaf[PLACEHOLDER_SYMBOL]) {
    var placeholderProps = {
      children: leaf.placeholder,
      attributes: {
        "data-slate-placeholder": true,
        style: {
          position: "absolute",
          pointerEvents: "none",
          width: "100%",
          maxWidth: "100%",
          display: "block",
          opacity: "0.333",
          userSelect: "none",
          textDecoration: "none"
        },
        contentEditable: false,
        ref: placeholderRef
      }
    };
    children = /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, renderPlaceholder(placeholderProps), children);
  }
  var attributes = {
    "data-slate-leaf": true
  };
  return renderLeaf({
    attributes,
    children,
    leaf,
    text
  });
};
var MemoizedLeaf = /* @__PURE__ */ import_react.default.memo(Leaf, (prev, next) => {
  return next.parent === prev.parent && next.isLast === prev.isLast && next.renderLeaf === prev.renderLeaf && next.renderPlaceholder === prev.renderPlaceholder && next.text === prev.text && Text.equals(next.leaf, prev.leaf) && next.leaf[PLACEHOLDER_SYMBOL] === prev.leaf[PLACEHOLDER_SYMBOL];
});
var DefaultLeaf = (props) => {
  var {
    attributes,
    children
  } = props;
  return /* @__PURE__ */ import_react.default.createElement("span", Object.assign({}, attributes), children);
};
var _excluded$32 = ["anchor", "focus"];
var _excluded22 = ["anchor", "focus"];
var shallowCompare = (obj1, obj2) => Object.keys(obj1).length === Object.keys(obj2).length && Object.keys(obj1).every((key) => obj2.hasOwnProperty(key) && obj1[key] === obj2[key]);
var isDecoratorRangeListEqual = (list, another) => {
  if (list.length !== another.length) {
    return false;
  }
  for (var i2 = 0; i2 < list.length; i2++) {
    var range = list[i2];
    var other = another[i2];
    var rangeOwnProps = _objectWithoutProperties2(range, _excluded$32);
    var otherOwnProps = _objectWithoutProperties2(other, _excluded22);
    if (!Range.equals(range, other) || range[PLACEHOLDER_SYMBOL] !== other[PLACEHOLDER_SYMBOL] || !shallowCompare(rangeOwnProps, otherOwnProps)) {
      return false;
    }
  }
  return true;
};
function useContentKey(node2) {
  var contentKeyRef = (0, import_react.useRef)(0);
  var updateAnimationFrameRef = (0, import_react.useRef)(null);
  var [, setForceRerenderCounter] = (0, import_react.useState)(0);
  (0, import_react.useEffect)(() => {
    NODE_TO_RESTORE_DOM.set(node2, () => {
      if (updateAnimationFrameRef.current) {
        return;
      }
      updateAnimationFrameRef.current = requestAnimationFrame(() => {
        setForceRerenderCounter((state) => state + 1);
        updateAnimationFrameRef.current = null;
      });
      contentKeyRef.current++;
    });
    return () => {
      NODE_TO_RESTORE_DOM.delete(node2);
    };
  }, [node2]);
  if (updateAnimationFrameRef.current) {
    cancelAnimationFrame(updateAnimationFrameRef.current);
    updateAnimationFrameRef.current = null;
  }
  return contentKeyRef.current;
}
var Text2 = (props) => {
  var {
    decorations,
    isLast,
    parent,
    renderPlaceholder,
    renderLeaf,
    text
  } = props;
  var editor = useSlateStatic();
  var ref = (0, import_react.useRef)(null);
  var leaves = Text.decorations(text, decorations);
  var key = ReactEditor.findKey(editor, text);
  var children = [];
  for (var i2 = 0; i2 < leaves.length; i2++) {
    var leaf = leaves[i2];
    children.push(/* @__PURE__ */ import_react.default.createElement(MemoizedLeaf, {
      isLast: isLast && i2 === leaves.length - 1,
      key: "".concat(key.id, "-").concat(i2),
      renderPlaceholder,
      leaf,
      text,
      parent,
      renderLeaf
    }));
  }
  useIsomorphicLayoutEffect(() => {
    var KEY_TO_ELEMENT = EDITOR_TO_KEY_TO_ELEMENT.get(editor);
    if (ref.current) {
      KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 ? void 0 : KEY_TO_ELEMENT.set(key, ref.current);
      NODE_TO_ELEMENT.set(text, ref.current);
      ELEMENT_TO_NODE.set(ref.current, text);
    } else {
      KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 ? void 0 : KEY_TO_ELEMENT.delete(key);
      NODE_TO_ELEMENT.delete(text);
    }
  });
  var contentKey = IS_ANDROID ? useContentKey(text) : void 0;
  return /* @__PURE__ */ import_react.default.createElement("span", {
    "data-slate-node": "text",
    ref,
    key: contentKey
  }, children);
};
var MemoizedText = /* @__PURE__ */ import_react.default.memo(Text2, (prev, next) => {
  return next.parent === prev.parent && next.isLast === prev.isLast && next.renderLeaf === prev.renderLeaf && next.text === prev.text && isDecoratorRangeListEqual(next.decorations, prev.decorations);
});
var Element3 = (props) => {
  var {
    decorations,
    element,
    renderElement = (p3) => /* @__PURE__ */ import_react.default.createElement(DefaultElement, Object.assign({}, p3)),
    renderPlaceholder,
    renderLeaf,
    selection
  } = props;
  var ref = (0, import_react.useRef)(null);
  var editor = useSlateStatic();
  var readOnly = useReadOnly();
  var isInline = editor.isInline(element);
  var key = ReactEditor.findKey(editor, element);
  var children = useChildren({
    decorations,
    node: element,
    renderElement,
    renderPlaceholder,
    renderLeaf,
    selection
  });
  var attributes = {
    "data-slate-node": "element",
    ref
  };
  if (isInline) {
    attributes["data-slate-inline"] = true;
  }
  if (!isInline && Editor.hasInlines(editor, element)) {
    var text = Node.string(element);
    var dir = (0, import_direction.default)(text);
    if (dir === "rtl") {
      attributes.dir = dir;
    }
  }
  if (Editor.isVoid(editor, element)) {
    attributes["data-slate-void"] = true;
    if (!readOnly && isInline) {
      attributes.contentEditable = false;
    }
    var Tag = isInline ? "span" : "div";
    var [[_text]] = Node.texts(element);
    children = readOnly ? null : /* @__PURE__ */ import_react.default.createElement(Tag, {
      "data-slate-spacer": true,
      style: {
        height: "0",
        color: "transparent",
        outline: "none",
        position: "absolute"
      }
    }, /* @__PURE__ */ import_react.default.createElement(MemoizedText, {
      renderPlaceholder,
      decorations: [],
      isLast: false,
      parent: element,
      text: _text
    }));
    NODE_TO_INDEX.set(_text, 0);
    NODE_TO_PARENT.set(_text, element);
  }
  useIsomorphicLayoutEffect(() => {
    var KEY_TO_ELEMENT = EDITOR_TO_KEY_TO_ELEMENT.get(editor);
    if (ref.current) {
      KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 ? void 0 : KEY_TO_ELEMENT.set(key, ref.current);
      NODE_TO_ELEMENT.set(element, ref.current);
      ELEMENT_TO_NODE.set(ref.current, element);
    } else {
      KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 ? void 0 : KEY_TO_ELEMENT.delete(key);
      NODE_TO_ELEMENT.delete(element);
    }
  });
  var content = renderElement({
    attributes,
    children,
    element
  });
  if (IS_ANDROID) {
    var contentKey = useContentKey(element);
    return /* @__PURE__ */ import_react.default.createElement(import_react.Fragment, {
      key: contentKey
    }, content);
  }
  return content;
};
var MemoizedElement = /* @__PURE__ */ import_react.default.memo(Element3, (prev, next) => {
  return prev.element === next.element && prev.renderElement === next.renderElement && prev.renderLeaf === next.renderLeaf && isDecoratorRangeListEqual(prev.decorations, next.decorations) && (prev.selection === next.selection || !!prev.selection && !!next.selection && Range.equals(prev.selection, next.selection));
});
var DefaultElement = (props) => {
  var {
    attributes,
    children,
    element
  } = props;
  var editor = useSlateStatic();
  var Tag = editor.isInline(element) ? "span" : "div";
  return /* @__PURE__ */ import_react.default.createElement(Tag, Object.assign({}, attributes, {
    style: {
      position: "relative"
    }
  }), children);
};
var EditorContext = /* @__PURE__ */ (0, import_react.createContext)(null);
var useSlateStatic = () => {
  var editor = (0, import_react.useContext)(EditorContext);
  if (!editor) {
    throw new Error("The `useSlateStatic` hook must be used inside the <Slate> component's context.");
  }
  return editor;
};
var DecorateContext = /* @__PURE__ */ (0, import_react.createContext)(() => []);
var useDecorate = () => {
  return (0, import_react.useContext)(DecorateContext);
};
var SelectedContext = /* @__PURE__ */ (0, import_react.createContext)(false);
var useChildren = (props) => {
  var {
    decorations,
    node: node2,
    renderElement,
    renderPlaceholder,
    renderLeaf,
    selection
  } = props;
  var decorate = useDecorate();
  var editor = useSlateStatic();
  var path = ReactEditor.findPath(editor, node2);
  var children = [];
  var isLeafBlock = Element2.isElement(node2) && !editor.isInline(node2) && Editor.hasInlines(editor, node2);
  for (var i2 = 0; i2 < node2.children.length; i2++) {
    var p3 = path.concat(i2);
    var n4 = node2.children[i2];
    var key = ReactEditor.findKey(editor, n4);
    var range = Editor.range(editor, p3);
    var sel = selection && Range.intersection(range, selection);
    var ds = decorate([n4, p3]);
    for (var dec of decorations) {
      var d2 = Range.intersection(dec, range);
      if (d2) {
        ds.push(d2);
      }
    }
    if (Element2.isElement(n4)) {
      children.push(/* @__PURE__ */ import_react.default.createElement(SelectedContext.Provider, {
        key: "provider-".concat(key.id),
        value: !!sel
      }, /* @__PURE__ */ import_react.default.createElement(MemoizedElement, {
        decorations: ds,
        element: n4,
        key: key.id,
        renderElement,
        renderPlaceholder,
        renderLeaf,
        selection: sel
      })));
    } else {
      children.push(/* @__PURE__ */ import_react.default.createElement(MemoizedText, {
        decorations: ds,
        key: key.id,
        isLast: isLeafBlock && i2 === node2.children.length - 1,
        parent: node2,
        renderPlaceholder,
        renderLeaf,
        text: n4
      }));
    }
    NODE_TO_INDEX.set(n4, i2);
    NODE_TO_PARENT.set(n4, node2);
  }
  return children;
};
var HOTKEYS = {
  bold: "mod+b",
  compose: ["down", "left", "right", "up", "backspace", "enter"],
  moveBackward: "left",
  moveForward: "right",
  moveWordBackward: "ctrl+left",
  moveWordForward: "ctrl+right",
  deleteBackward: "shift?+backspace",
  deleteForward: "shift?+delete",
  extendBackward: "shift+left",
  extendForward: "shift+right",
  italic: "mod+i",
  splitBlock: "shift?+enter",
  undo: "mod+z"
};
var APPLE_HOTKEYS = {
  moveLineBackward: "opt+up",
  moveLineForward: "opt+down",
  moveWordBackward: "opt+left",
  moveWordForward: "opt+right",
  deleteBackward: ["ctrl+backspace", "ctrl+h"],
  deleteForward: ["ctrl+delete", "ctrl+d"],
  deleteLineBackward: "cmd+shift?+backspace",
  deleteLineForward: ["cmd+shift?+delete", "ctrl+k"],
  deleteWordBackward: "opt+shift?+backspace",
  deleteWordForward: "opt+shift?+delete",
  extendLineBackward: "opt+shift+up",
  extendLineForward: "opt+shift+down",
  redo: "cmd+shift+z",
  transposeCharacter: "ctrl+t"
};
var WINDOWS_HOTKEYS = {
  deleteWordBackward: "ctrl+shift?+backspace",
  deleteWordForward: "ctrl+shift?+delete",
  redo: ["ctrl+y", "ctrl+shift+z"]
};
var create = (key) => {
  var generic = HOTKEYS[key];
  var apple = APPLE_HOTKEYS[key];
  var windows = WINDOWS_HOTKEYS[key];
  var isGeneric = generic && (0, import_is_hotkey.isKeyHotkey)(generic);
  var isApple = apple && (0, import_is_hotkey.isKeyHotkey)(apple);
  var isWindows = windows && (0, import_is_hotkey.isKeyHotkey)(windows);
  return (event) => {
    if (isGeneric && isGeneric(event))
      return true;
    if (IS_APPLE && isApple && isApple(event))
      return true;
    if (!IS_APPLE && isWindows && isWindows(event))
      return true;
    return false;
  };
};
var Hotkeys = {
  isBold: create("bold"),
  isCompose: create("compose"),
  isMoveBackward: create("moveBackward"),
  isMoveForward: create("moveForward"),
  isDeleteBackward: create("deleteBackward"),
  isDeleteForward: create("deleteForward"),
  isDeleteLineBackward: create("deleteLineBackward"),
  isDeleteLineForward: create("deleteLineForward"),
  isDeleteWordBackward: create("deleteWordBackward"),
  isDeleteWordForward: create("deleteWordForward"),
  isExtendBackward: create("extendBackward"),
  isExtendForward: create("extendForward"),
  isExtendLineBackward: create("extendLineBackward"),
  isExtendLineForward: create("extendLineForward"),
  isItalic: create("italic"),
  isMoveLineBackward: create("moveLineBackward"),
  isMoveLineForward: create("moveLineForward"),
  isMoveWordBackward: create("moveWordBackward"),
  isMoveWordForward: create("moveWordForward"),
  isRedo: create("redo"),
  isSplitBlock: create("splitBlock"),
  isTransposeCharacter: create("transposeCharacter"),
  isUndo: create("undo")
};
var ReadOnlyContext = /* @__PURE__ */ (0, import_react.createContext)(false);
var useReadOnly = () => {
  return (0, import_react.useContext)(ReadOnlyContext);
};
var SlateContext = /* @__PURE__ */ (0, import_react.createContext)(null);
var useSlate = () => {
  var context = (0, import_react.useContext)(SlateContext);
  if (!context) {
    throw new Error("The `useSlate` hook must be used inside the <Slate> component's context.");
  }
  var [editor] = context;
  return editor;
};
var getDefaultView = (value) => {
  return value && value.ownerDocument && value.ownerDocument.defaultView || null;
};
var isDOMComment = (value) => {
  return isDOMNode(value) && value.nodeType === 8;
};
var isDOMElement = (value) => {
  return isDOMNode(value) && value.nodeType === 1;
};
var isDOMNode = (value) => {
  var window2 = getDefaultView(value);
  return !!window2 && value instanceof window2.Node;
};
var isDOMSelection = (value) => {
  var window2 = value && value.anchorNode && getDefaultView(value.anchorNode);
  return !!window2 && value instanceof window2.Selection;
};
var isDOMText = (value) => {
  return isDOMNode(value) && value.nodeType === 3;
};
var isPlainTextOnlyPaste = (event) => {
  return event.clipboardData && event.clipboardData.getData("text/plain") !== "" && event.clipboardData.types.length === 1;
};
var normalizeDOMPoint = (domPoint) => {
  var [node2, offset2] = domPoint;
  if (isDOMElement(node2) && node2.childNodes.length) {
    var isLast = offset2 === node2.childNodes.length;
    var index2 = isLast ? offset2 - 1 : offset2;
    [node2, index2] = getEditableChildAndIndex(node2, index2, isLast ? "backward" : "forward");
    isLast = index2 < offset2;
    while (isDOMElement(node2) && node2.childNodes.length) {
      var i2 = isLast ? node2.childNodes.length - 1 : 0;
      node2 = getEditableChild(node2, i2, isLast ? "backward" : "forward");
    }
    offset2 = isLast && node2.textContent != null ? node2.textContent.length : 0;
  }
  return [node2, offset2];
};
var hasShadowRoot = () => {
  return !!(window.document.activeElement && window.document.activeElement.shadowRoot);
};
var getEditableChildAndIndex = (parent, index2, direction) => {
  var {
    childNodes
  } = parent;
  var child = childNodes[index2];
  var i2 = index2;
  var triedForward = false;
  var triedBackward = false;
  while (isDOMComment(child) || isDOMElement(child) && child.childNodes.length === 0 || isDOMElement(child) && child.getAttribute("contenteditable") === "false") {
    if (triedForward && triedBackward) {
      break;
    }
    if (i2 >= childNodes.length) {
      triedForward = true;
      i2 = index2 - 1;
      direction = "backward";
      continue;
    }
    if (i2 < 0) {
      triedBackward = true;
      i2 = index2 + 1;
      direction = "forward";
      continue;
    }
    child = childNodes[i2];
    index2 = i2;
    i2 += direction === "forward" ? 1 : -1;
  }
  return [child, index2];
};
var getEditableChild = (parent, index2, direction) => {
  var [child] = getEditableChildAndIndex(parent, index2, direction);
  return child;
};
var getPlainText = (domNode) => {
  var text = "";
  if (isDOMText(domNode) && domNode.nodeValue) {
    return domNode.nodeValue;
  }
  if (isDOMElement(domNode)) {
    for (var childNode of Array.from(domNode.childNodes)) {
      text += getPlainText(childNode);
    }
    var display = getComputedStyle(domNode).getPropertyValue("display");
    if (display === "block" || display === "list" || domNode.tagName === "BR") {
      text += "\n";
    }
  }
  return text;
};
var catchSlateFragment = /data-slate-fragment="(.+?)"/m;
var getSlateFragmentAttribute = (dataTransfer) => {
  var htmlData = dataTransfer.getData("text/html");
  var [, fragment] = htmlData.match(catchSlateFragment) || [];
  return fragment;
};
var getClipboardData = (dataTransfer) => {
  if (!dataTransfer.getData("application/x-slate-fragment")) {
    var fragment = getSlateFragmentAttribute(dataTransfer);
    if (fragment) {
      var clipboardData = new DataTransfer();
      dataTransfer.types.forEach((type) => {
        clipboardData.setData(type, dataTransfer.getData(type));
      });
      clipboardData.setData("application/x-slate-fragment", fragment);
      return clipboardData;
    }
  }
  return dataTransfer;
};
var _excluded$22 = ["autoFocus", "decorate", "onDOMBeforeInput", "placeholder", "readOnly", "renderElement", "renderLeaf", "renderPlaceholder", "scrollSelectionIntoView", "style", "as"];
function ownKeys$12(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$12(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    if (i2 % 2) {
      ownKeys$12(Object(source), true).forEach(function(key) {
        _defineProperty2(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$12(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var Children = (props) => /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, useChildren(props));
var Editable$1 = (props) => {
  var {
    autoFocus,
    decorate = defaultDecorate,
    onDOMBeforeInput: propsOnDOMBeforeInput,
    placeholder,
    readOnly = false,
    renderElement,
    renderLeaf,
    renderPlaceholder = (props2) => /* @__PURE__ */ import_react.default.createElement(DefaultPlaceholder, Object.assign({}, props2)),
    scrollSelectionIntoView = defaultScrollSelectionIntoView,
    style = {},
    as: Component = "div"
  } = props, attributes = _objectWithoutProperties2(props, _excluded$22);
  var editor = useSlate();
  var [isComposing, setIsComposing] = (0, import_react.useState)(false);
  var ref = (0, import_react.useRef)(null);
  var deferredOperations = (0, import_react.useRef)([]);
  IS_READ_ONLY.set(editor, readOnly);
  var state = (0, import_react.useMemo)(() => ({
    isComposing: false,
    hasInsertPrefixInCompositon: false,
    isDraggingInternally: false,
    isUpdatingSelection: false,
    latestElement: null
  }), []);
  useIsomorphicLayoutEffect(() => {
    var window2;
    if (ref.current && (window2 = getDefaultView(ref.current))) {
      EDITOR_TO_WINDOW.set(editor, window2);
      EDITOR_TO_ELEMENT.set(editor, ref.current);
      NODE_TO_ELEMENT.set(editor, ref.current);
      ELEMENT_TO_NODE.set(ref.current, editor);
    } else {
      NODE_TO_ELEMENT.delete(editor);
    }
    var {
      selection
    } = editor;
    var root = ReactEditor.findDocumentOrShadowRoot(editor);
    var domSelection = root.getSelection();
    if (state.isComposing || !domSelection || !ReactEditor.isFocused(editor)) {
      return;
    }
    var hasDomSelection = domSelection.type !== "None";
    if (!selection && !hasDomSelection) {
      return;
    }
    var editorElement = EDITOR_TO_ELEMENT.get(editor);
    var hasDomSelectionInEditor = false;
    if (editorElement.contains(domSelection.anchorNode) && editorElement.contains(domSelection.focusNode)) {
      hasDomSelectionInEditor = true;
    }
    if (hasDomSelection && hasDomSelectionInEditor && selection) {
      var slateRange = ReactEditor.toSlateRange(editor, domSelection, {
        exactMatch: true,
        suppressThrow: true
      });
      if (slateRange && Range.equals(slateRange, selection)) {
        return;
      }
    }
    if (selection && !ReactEditor.hasRange(editor, selection)) {
      editor.selection = ReactEditor.toSlateRange(editor, domSelection, {
        exactMatch: false,
        suppressThrow: false
      });
      return;
    }
    state.isUpdatingSelection = true;
    var newDomRange = selection && ReactEditor.toDOMRange(editor, selection);
    if (newDomRange) {
      if (Range.isBackward(selection)) {
        domSelection.setBaseAndExtent(newDomRange.endContainer, newDomRange.endOffset, newDomRange.startContainer, newDomRange.startOffset);
      } else {
        domSelection.setBaseAndExtent(newDomRange.startContainer, newDomRange.startOffset, newDomRange.endContainer, newDomRange.endOffset);
      }
      scrollSelectionIntoView(editor, newDomRange);
    } else {
      domSelection.removeAllRanges();
    }
    setTimeout(() => {
      if (newDomRange && IS_FIREFOX) {
        var el = ReactEditor.toDOMNode(editor, editor);
        el.focus();
      }
      state.isUpdatingSelection = false;
    });
  });
  (0, import_react.useEffect)(() => {
    if (ref.current && autoFocus) {
      ref.current.focus();
    }
  }, [autoFocus]);
  var onDOMSelectionChange = (0, import_react.useCallback)((0, import_throttle.default)(() => {
    if (!state.isComposing && !state.isUpdatingSelection && !state.isDraggingInternally) {
      var root = ReactEditor.findDocumentOrShadowRoot(editor);
      var {
        activeElement
      } = root;
      var el = ReactEditor.toDOMNode(editor, editor);
      var domSelection = root.getSelection();
      if (activeElement === el) {
        state.latestElement = activeElement;
        IS_FOCUSED.set(editor, true);
      } else {
        IS_FOCUSED.delete(editor);
      }
      if (!domSelection) {
        return Transforms.deselect(editor);
      }
      var {
        anchorNode,
        focusNode
      } = domSelection;
      var anchorNodeSelectable = hasEditableTarget(editor, anchorNode) || isTargetInsideNonReadonlyVoid(editor, anchorNode);
      var focusNodeSelectable = hasEditableTarget(editor, focusNode) || isTargetInsideNonReadonlyVoid(editor, focusNode);
      if (anchorNodeSelectable && focusNodeSelectable) {
        var range = ReactEditor.toSlateRange(editor, domSelection, {
          exactMatch: false,
          suppressThrow: false
        });
        Transforms.select(editor, range);
      }
    }
  }, 100), [readOnly]);
  var scheduleOnDOMSelectionChange = (0, import_react.useMemo)(() => (0, import_debounce.default)(onDOMSelectionChange, 0), [onDOMSelectionChange]);
  var onDOMBeforeInput = (0, import_react.useCallback)((event) => {
    if (!readOnly && hasEditableTarget(editor, event.target) && !isDOMEventHandled(event, propsOnDOMBeforeInput)) {
      scheduleOnDOMSelectionChange.flush();
      onDOMSelectionChange.flush();
      var {
        selection
      } = editor;
      var {
        inputType: type
      } = event;
      var data = event.dataTransfer || event.data || void 0;
      if (type === "insertCompositionText" || type === "deleteCompositionText") {
        return;
      }
      var native = false;
      if (type === "insertText" && selection && Range.isCollapsed(selection) && event.data && event.data.length === 1 && /[a-z ]/i.test(event.data) && selection.anchor.offset !== 0) {
        native = true;
        if (editor.marks) {
          native = false;
        }
        var {
          anchor
        } = selection;
        var inline = Editor.above(editor, {
          at: anchor,
          match: (n4) => Editor.isInline(editor, n4),
          mode: "highest"
        });
        if (inline) {
          var [, inlinePath] = inline;
          if (Editor.isEnd(editor, selection.anchor, inlinePath)) {
            native = false;
          }
        }
      }
      if (!native) {
        event.preventDefault();
      }
      if (!type.startsWith("delete") || type.startsWith("deleteBy")) {
        var [targetRange] = event.getTargetRanges();
        if (targetRange) {
          var range = ReactEditor.toSlateRange(editor, targetRange, {
            exactMatch: false,
            suppressThrow: false
          });
          if (!selection || !Range.equals(selection, range)) {
            Transforms.select(editor, range);
          }
        }
      }
      if (selection && Range.isExpanded(selection) && type.startsWith("delete")) {
        var direction = type.endsWith("Backward") ? "backward" : "forward";
        Editor.deleteFragment(editor, {
          direction
        });
        return;
      }
      switch (type) {
        case "deleteByComposition":
        case "deleteByCut":
        case "deleteByDrag": {
          Editor.deleteFragment(editor);
          break;
        }
        case "deleteContent":
        case "deleteContentForward": {
          Editor.deleteForward(editor);
          break;
        }
        case "deleteContentBackward": {
          Editor.deleteBackward(editor);
          break;
        }
        case "deleteEntireSoftLine": {
          Editor.deleteBackward(editor, {
            unit: "line"
          });
          Editor.deleteForward(editor, {
            unit: "line"
          });
          break;
        }
        case "deleteHardLineBackward": {
          Editor.deleteBackward(editor, {
            unit: "block"
          });
          break;
        }
        case "deleteSoftLineBackward": {
          Editor.deleteBackward(editor, {
            unit: "line"
          });
          break;
        }
        case "deleteHardLineForward": {
          Editor.deleteForward(editor, {
            unit: "block"
          });
          break;
        }
        case "deleteSoftLineForward": {
          Editor.deleteForward(editor, {
            unit: "line"
          });
          break;
        }
        case "deleteWordBackward": {
          Editor.deleteBackward(editor, {
            unit: "word"
          });
          break;
        }
        case "deleteWordForward": {
          Editor.deleteForward(editor, {
            unit: "word"
          });
          break;
        }
        case "insertLineBreak":
        case "insertParagraph": {
          Editor.insertBreak(editor);
          break;
        }
        case "insertFromComposition":
        case "insertFromDrop":
        case "insertFromPaste":
        case "insertFromYank":
        case "insertReplacementText":
        case "insertText": {
          if (type === "insertFromComposition") {
            state.isComposing && setIsComposing(false);
            state.isComposing = false;
          }
          if ((data === null || data === void 0 ? void 0 : data.constructor.name) === "DataTransfer") {
            ReactEditor.insertData(editor, data);
          } else if (typeof data === "string") {
            if (native) {
              deferredOperations.current.push(() => Editor.insertText(editor, data));
            } else {
              Editor.insertText(editor, data);
            }
          }
          break;
        }
      }
    }
  }, [readOnly, propsOnDOMBeforeInput]);
  useIsomorphicLayoutEffect(() => {
    if (ref.current && HAS_BEFORE_INPUT_SUPPORT) {
      ref.current.addEventListener("beforeinput", onDOMBeforeInput);
    }
    return () => {
      if (ref.current && HAS_BEFORE_INPUT_SUPPORT) {
        ref.current.removeEventListener("beforeinput", onDOMBeforeInput);
      }
    };
  }, [onDOMBeforeInput]);
  useIsomorphicLayoutEffect(() => {
    var window2 = ReactEditor.getWindow(editor);
    window2.document.addEventListener("selectionchange", scheduleOnDOMSelectionChange);
    return () => {
      window2.document.removeEventListener("selectionchange", scheduleOnDOMSelectionChange);
    };
  }, [scheduleOnDOMSelectionChange]);
  var decorations = decorate([editor, []]);
  if (placeholder && editor.children.length === 1 && Array.from(Node.texts(editor)).length === 1 && Node.string(editor) === "" && !isComposing) {
    var start2 = Editor.start(editor, []);
    decorations.push({
      [PLACEHOLDER_SYMBOL]: true,
      placeholder,
      anchor: start2,
      focus: start2
    });
  }
  return /* @__PURE__ */ import_react.default.createElement(ReadOnlyContext.Provider, {
    value: readOnly
  }, /* @__PURE__ */ import_react.default.createElement(DecorateContext.Provider, {
    value: decorate
  }, /* @__PURE__ */ import_react.default.createElement(Component, Object.assign({
    role: readOnly ? void 0 : "textbox"
  }, attributes, {
    spellCheck: HAS_BEFORE_INPUT_SUPPORT || !CAN_USE_DOM ? attributes.spellCheck : false,
    autoCorrect: HAS_BEFORE_INPUT_SUPPORT || !CAN_USE_DOM ? attributes.autoCorrect : "false",
    autoCapitalize: HAS_BEFORE_INPUT_SUPPORT || !CAN_USE_DOM ? attributes.autoCapitalize : "false",
    "data-slate-editor": true,
    "data-slate-node": "value",
    contentEditable: !readOnly,
    zindex: -1,
    suppressContentEditableWarning: true,
    ref,
    style: _objectSpread$12({
      position: "relative",
      outline: "none",
      whiteSpace: "pre-wrap",
      wordWrap: "break-word"
    }, style),
    onBeforeInput: (0, import_react.useCallback)((event) => {
      if (!HAS_BEFORE_INPUT_SUPPORT && !readOnly && !isEventHandled(event, attributes.onBeforeInput) && hasEditableTarget(editor, event.target)) {
        event.preventDefault();
        if (!state.isComposing) {
          var text = event.data;
          Editor.insertText(editor, text);
        }
      }
    }, [readOnly]),
    onInput: (0, import_react.useCallback)((event) => {
      for (var op of deferredOperations.current) {
        op();
      }
      deferredOperations.current = [];
    }, []),
    onBlur: (0, import_react.useCallback)((event) => {
      if (readOnly || state.isUpdatingSelection || !hasEditableTarget(editor, event.target) || isEventHandled(event, attributes.onBlur)) {
        return;
      }
      var root = ReactEditor.findDocumentOrShadowRoot(editor);
      if (state.latestElement === root.activeElement) {
        return;
      }
      var {
        relatedTarget
      } = event;
      var el = ReactEditor.toDOMNode(editor, editor);
      if (relatedTarget === el) {
        return;
      }
      if (isDOMElement(relatedTarget) && relatedTarget.hasAttribute("data-slate-spacer")) {
        return;
      }
      if (relatedTarget != null && isDOMNode(relatedTarget) && ReactEditor.hasDOMNode(editor, relatedTarget)) {
        var node2 = ReactEditor.toSlateNode(editor, relatedTarget);
        if (Element2.isElement(node2) && !editor.isVoid(node2)) {
          return;
        }
      }
      if (IS_SAFARI) {
        var domSelection = root.getSelection();
        domSelection === null || domSelection === void 0 ? void 0 : domSelection.removeAllRanges();
      }
      IS_FOCUSED.delete(editor);
    }, [readOnly, attributes.onBlur]),
    onClick: (0, import_react.useCallback)((event) => {
      if (!readOnly && hasTarget(editor, event.target) && !isEventHandled(event, attributes.onClick) && isDOMNode(event.target)) {
        var node2 = ReactEditor.toSlateNode(editor, event.target);
        var path = ReactEditor.findPath(editor, node2);
        if (Editor.hasPath(editor, path)) {
          var lookupNode = Node.get(editor, path);
          if (lookupNode === node2) {
            var _start = Editor.start(editor, path);
            var end2 = Editor.end(editor, path);
            var startVoid = Editor.void(editor, {
              at: _start
            });
            var endVoid = Editor.void(editor, {
              at: end2
            });
            if (startVoid && endVoid && Path.equals(startVoid[1], endVoid[1])) {
              var range = Editor.range(editor, _start);
              Transforms.select(editor, range);
            }
          }
        }
      }
    }, [readOnly, attributes.onClick]),
    onCompositionEnd: (0, import_react.useCallback)((event) => {
      if (hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onCompositionEnd)) {
        state.isComposing && setIsComposing(false);
        state.isComposing = false;
        if (!IS_SAFARI && !IS_FIREFOX_LEGACY && !IS_IOS && !IS_QQBROWSER && !IS_WECHATBROWSER && !IS_UC_MOBILE && event.data) {
          Editor.insertText(editor, event.data);
        }
        if (editor.selection && Range.isCollapsed(editor.selection)) {
          var leafPath = editor.selection.anchor.path;
          var currentTextNode = Node.leaf(editor, leafPath);
          if (state.hasInsertPrefixInCompositon) {
            state.hasInsertPrefixInCompositon = false;
            Editor.withoutNormalizing(editor, () => {
              var text = currentTextNode.text.replace(/^\uFEFF/, "");
              Transforms.delete(editor, {
                distance: currentTextNode.text.length,
                reverse: true
              });
              Editor.insertText(editor, text);
            });
          }
        }
      }
    }, [attributes.onCompositionEnd]),
    onCompositionUpdate: (0, import_react.useCallback)((event) => {
      if (hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onCompositionUpdate)) {
        !state.isComposing && setIsComposing(true);
        state.isComposing = true;
      }
    }, [attributes.onCompositionUpdate]),
    onCompositionStart: (0, import_react.useCallback)((event) => {
      if (hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onCompositionStart)) {
        var {
          selection,
          marks
        } = editor;
        if (selection) {
          if (Range.isExpanded(selection)) {
            Editor.deleteFragment(editor);
            return;
          }
          var inline = Editor.above(editor, {
            match: (n4) => Editor.isInline(editor, n4),
            mode: "highest"
          });
          if (inline) {
            var [, inlinePath] = inline;
            if (Editor.isEnd(editor, selection.anchor, inlinePath)) {
              var point = Editor.after(editor, inlinePath);
              Transforms.setSelection(editor, {
                anchor: point,
                focus: point
              });
            }
          }
          if (marks) {
            state.hasInsertPrefixInCompositon = true;
            Transforms.insertNodes(editor, _objectSpread$12({
              text: "\uFEFF"
            }, marks), {
              select: true
            });
          }
        }
      }
    }, [attributes.onCompositionStart]),
    onCopy: (0, import_react.useCallback)((event) => {
      if (hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onCopy)) {
        event.preventDefault();
        ReactEditor.setFragmentData(editor, event.clipboardData, "copy");
      }
    }, [attributes.onCopy]),
    onCut: (0, import_react.useCallback)((event) => {
      if (!readOnly && hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onCut)) {
        event.preventDefault();
        ReactEditor.setFragmentData(editor, event.clipboardData, "cut");
        var {
          selection
        } = editor;
        if (selection) {
          if (Range.isExpanded(selection)) {
            Editor.deleteFragment(editor);
          } else {
            var node2 = Node.parent(editor, selection.anchor.path);
            if (Editor.isVoid(editor, node2)) {
              Transforms.delete(editor);
            }
          }
        }
      }
    }, [readOnly, attributes.onCut]),
    onDragOver: (0, import_react.useCallback)((event) => {
      if (hasTarget(editor, event.target) && !isEventHandled(event, attributes.onDragOver)) {
        var node2 = ReactEditor.toSlateNode(editor, event.target);
        if (Editor.isVoid(editor, node2)) {
          event.preventDefault();
        }
      }
    }, [attributes.onDragOver]),
    onDragStart: (0, import_react.useCallback)((event) => {
      if (!readOnly && hasTarget(editor, event.target) && !isEventHandled(event, attributes.onDragStart)) {
        var node2 = ReactEditor.toSlateNode(editor, event.target);
        var path = ReactEditor.findPath(editor, node2);
        var voidMatch = Editor.isVoid(editor, node2) || Editor.void(editor, {
          at: path,
          voids: true
        });
        if (voidMatch) {
          var range = Editor.range(editor, path);
          Transforms.select(editor, range);
        }
        state.isDraggingInternally = true;
        ReactEditor.setFragmentData(editor, event.dataTransfer, "drag");
      }
    }, [readOnly, attributes.onDragStart]),
    onDrop: (0, import_react.useCallback)((event) => {
      if (!readOnly && hasTarget(editor, event.target) && !isEventHandled(event, attributes.onDrop)) {
        event.preventDefault();
        var draggedRange = editor.selection;
        var range = ReactEditor.findEventRange(editor, event);
        var data = event.dataTransfer;
        Transforms.select(editor, range);
        if (state.isDraggingInternally) {
          if (draggedRange && !Range.equals(draggedRange, range) && !Editor.void(editor, {
            at: range,
            voids: true
          })) {
            Transforms.delete(editor, {
              at: draggedRange
            });
          }
        }
        ReactEditor.insertData(editor, data);
        if (!ReactEditor.isFocused(editor)) {
          ReactEditor.focus(editor);
        }
      }
      state.isDraggingInternally = false;
    }, [readOnly, attributes.onDrop]),
    onDragEnd: (0, import_react.useCallback)((event) => {
      if (!readOnly && state.isDraggingInternally && attributes.onDragEnd && hasTarget(editor, event.target)) {
        attributes.onDragEnd(event);
      }
      state.isDraggingInternally = false;
    }, [readOnly, attributes.onDragEnd]),
    onFocus: (0, import_react.useCallback)((event) => {
      if (!readOnly && !state.isUpdatingSelection && hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onFocus)) {
        var el = ReactEditor.toDOMNode(editor, editor);
        var root = ReactEditor.findDocumentOrShadowRoot(editor);
        state.latestElement = root.activeElement;
        if (IS_FIREFOX && event.target !== el) {
          el.focus();
          return;
        }
        IS_FOCUSED.set(editor, true);
      }
    }, [readOnly, attributes.onFocus]),
    onKeyDown: (0, import_react.useCallback)((event) => {
      if (!readOnly && !state.isComposing && hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onKeyDown)) {
        var {
          nativeEvent
        } = event;
        var {
          selection
        } = editor;
        var element = editor.children[selection !== null ? selection.focus.path[0] : 0];
        var isRTL = (0, import_direction.default)(Node.string(element)) === "rtl";
        if (Hotkeys.isRedo(nativeEvent)) {
          event.preventDefault();
          var maybeHistoryEditor = editor;
          if (typeof maybeHistoryEditor.redo === "function") {
            maybeHistoryEditor.redo();
          }
          return;
        }
        if (Hotkeys.isUndo(nativeEvent)) {
          event.preventDefault();
          var _maybeHistoryEditor = editor;
          if (typeof _maybeHistoryEditor.undo === "function") {
            _maybeHistoryEditor.undo();
          }
          return;
        }
        if (Hotkeys.isMoveLineBackward(nativeEvent)) {
          event.preventDefault();
          Transforms.move(editor, {
            unit: "line",
            reverse: true
          });
          return;
        }
        if (Hotkeys.isMoveLineForward(nativeEvent)) {
          event.preventDefault();
          Transforms.move(editor, {
            unit: "line"
          });
          return;
        }
        if (Hotkeys.isExtendLineBackward(nativeEvent)) {
          event.preventDefault();
          Transforms.move(editor, {
            unit: "line",
            edge: "focus",
            reverse: true
          });
          return;
        }
        if (Hotkeys.isExtendLineForward(nativeEvent)) {
          event.preventDefault();
          Transforms.move(editor, {
            unit: "line",
            edge: "focus"
          });
          return;
        }
        if (Hotkeys.isMoveBackward(nativeEvent)) {
          event.preventDefault();
          if (selection && Range.isCollapsed(selection)) {
            Transforms.move(editor, {
              reverse: !isRTL
            });
          } else {
            Transforms.collapse(editor, {
              edge: "start"
            });
          }
          return;
        }
        if (Hotkeys.isMoveForward(nativeEvent)) {
          event.preventDefault();
          if (selection && Range.isCollapsed(selection)) {
            Transforms.move(editor, {
              reverse: isRTL
            });
          } else {
            Transforms.collapse(editor, {
              edge: "end"
            });
          }
          return;
        }
        if (Hotkeys.isMoveWordBackward(nativeEvent)) {
          event.preventDefault();
          if (selection && Range.isExpanded(selection)) {
            Transforms.collapse(editor, {
              edge: "focus"
            });
          }
          Transforms.move(editor, {
            unit: "word",
            reverse: !isRTL
          });
          return;
        }
        if (Hotkeys.isMoveWordForward(nativeEvent)) {
          event.preventDefault();
          if (selection && Range.isExpanded(selection)) {
            Transforms.collapse(editor, {
              edge: "focus"
            });
          }
          Transforms.move(editor, {
            unit: "word",
            reverse: isRTL
          });
          return;
        }
        if (!HAS_BEFORE_INPUT_SUPPORT) {
          if (Hotkeys.isBold(nativeEvent) || Hotkeys.isItalic(nativeEvent) || Hotkeys.isTransposeCharacter(nativeEvent)) {
            event.preventDefault();
            return;
          }
          if (Hotkeys.isSplitBlock(nativeEvent)) {
            event.preventDefault();
            Editor.insertBreak(editor);
            return;
          }
          if (Hotkeys.isDeleteBackward(nativeEvent)) {
            event.preventDefault();
            if (selection && Range.isExpanded(selection)) {
              Editor.deleteFragment(editor, {
                direction: "backward"
              });
            } else {
              Editor.deleteBackward(editor);
            }
            return;
          }
          if (Hotkeys.isDeleteForward(nativeEvent)) {
            event.preventDefault();
            if (selection && Range.isExpanded(selection)) {
              Editor.deleteFragment(editor, {
                direction: "forward"
              });
            } else {
              Editor.deleteForward(editor);
            }
            return;
          }
          if (Hotkeys.isDeleteLineBackward(nativeEvent)) {
            event.preventDefault();
            if (selection && Range.isExpanded(selection)) {
              Editor.deleteFragment(editor, {
                direction: "backward"
              });
            } else {
              Editor.deleteBackward(editor, {
                unit: "line"
              });
            }
            return;
          }
          if (Hotkeys.isDeleteLineForward(nativeEvent)) {
            event.preventDefault();
            if (selection && Range.isExpanded(selection)) {
              Editor.deleteFragment(editor, {
                direction: "forward"
              });
            } else {
              Editor.deleteForward(editor, {
                unit: "line"
              });
            }
            return;
          }
          if (Hotkeys.isDeleteWordBackward(nativeEvent)) {
            event.preventDefault();
            if (selection && Range.isExpanded(selection)) {
              Editor.deleteFragment(editor, {
                direction: "backward"
              });
            } else {
              Editor.deleteBackward(editor, {
                unit: "word"
              });
            }
            return;
          }
          if (Hotkeys.isDeleteWordForward(nativeEvent)) {
            event.preventDefault();
            if (selection && Range.isExpanded(selection)) {
              Editor.deleteFragment(editor, {
                direction: "forward"
              });
            } else {
              Editor.deleteForward(editor, {
                unit: "word"
              });
            }
            return;
          }
        } else {
          if (IS_CHROME || IS_SAFARI) {
            if (selection && (Hotkeys.isDeleteBackward(nativeEvent) || Hotkeys.isDeleteForward(nativeEvent)) && Range.isCollapsed(selection)) {
              var currentNode = Node.parent(editor, selection.anchor.path);
              if (Element2.isElement(currentNode) && Editor.isVoid(editor, currentNode) && Editor.isInline(editor, currentNode)) {
                event.preventDefault();
                Editor.deleteBackward(editor, {
                  unit: "block"
                });
                return;
              }
            }
          }
        }
      }
    }, [readOnly, attributes.onKeyDown]),
    onPaste: (0, import_react.useCallback)((event) => {
      if (!readOnly && hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onPaste)) {
        if (!HAS_BEFORE_INPUT_SUPPORT || isPlainTextOnlyPaste(event.nativeEvent)) {
          event.preventDefault();
          ReactEditor.insertData(editor, event.clipboardData);
        }
      }
    }, [readOnly, attributes.onPaste])
  }), /* @__PURE__ */ import_react.default.createElement(Children, {
    decorations,
    node: editor,
    renderElement,
    renderPlaceholder,
    renderLeaf,
    selection: editor.selection
  }))));
};
var DefaultPlaceholder = (_ref) => {
  var {
    attributes,
    children
  } = _ref;
  return /* @__PURE__ */ import_react.default.createElement("span", Object.assign({}, attributes), children);
};
var defaultDecorate = () => [];
var defaultScrollSelectionIntoView = (editor, domRange) => {
  if (!editor.selection || editor.selection && Range.isCollapsed(editor.selection)) {
    var leafEl = domRange.startContainer.parentElement;
    leafEl.getBoundingClientRect = domRange.getBoundingClientRect.bind(domRange);
    es_default(leafEl, {
      scrollMode: "if-needed"
    });
    delete leafEl.getBoundingClientRect;
  }
};
var hasTarget = (editor, target) => {
  return isDOMNode(target) && ReactEditor.hasDOMNode(editor, target);
};
var hasEditableTarget = (editor, target) => {
  return isDOMNode(target) && ReactEditor.hasDOMNode(editor, target, {
    editable: true
  });
};
var isTargetInsideNonReadonlyVoid = (editor, target) => {
  if (IS_READ_ONLY.get(editor))
    return false;
  var slateNode = hasTarget(editor, target) && ReactEditor.toSlateNode(editor, target);
  return Editor.isVoid(editor, slateNode);
};
var isEventHandled = (event, handler) => {
  if (!handler) {
    return false;
  }
  var shouldTreatEventAsHandled = handler(event);
  if (shouldTreatEventAsHandled != null) {
    return shouldTreatEventAsHandled;
  }
  return event.isDefaultPrevented() || event.isPropagationStopped();
};
var isDOMEventHandled = (event, handler) => {
  if (!handler) {
    return false;
  }
  var shouldTreatEventAsHandled = handler(event);
  if (shouldTreatEventAsHandled != null) {
    return shouldTreatEventAsHandled;
  }
  return event.defaultPrevented;
};
function getDiffStart(prev, next) {
  var length = Math.min(prev.length, next.length);
  for (var i2 = 0; i2 < length; i2++) {
    if (prev.charAt(i2) !== next.charAt(i2))
      return i2;
  }
  if (prev.length !== next.length)
    return length;
  return null;
}
function getDiffEnd(prev, next, max2) {
  var prevLength = prev.length;
  var nextLength = next.length;
  var length = Math.min(prevLength, nextLength, max2);
  for (var i2 = 0; i2 < length; i2++) {
    var prevChar = prev.charAt(prevLength - i2 - 1);
    var nextChar = next.charAt(nextLength - i2 - 1);
    if (prevChar !== nextChar)
      return i2;
  }
  if (prev.length !== next.length)
    return length;
  return null;
}
function getDiffOffsets(prev, next) {
  if (prev === next)
    return null;
  var start2 = getDiffStart(prev, next);
  if (start2 === null)
    return null;
  var maxEnd = Math.min(prev.length - start2, next.length - start2);
  var end2 = getDiffEnd(prev, next, maxEnd);
  if (end2 === null)
    return null;
  return {
    start: start2,
    end: end2
  };
}
function sliceText(text, offsets) {
  return text.slice(offsets.start, text.length - offsets.end);
}
function diffText(prev, next) {
  if (prev === void 0 || next === void 0)
    return null;
  var offsets = getDiffOffsets(prev, next);
  if (offsets == null)
    return null;
  var insertText = sliceText(next, offsets);
  var removeText = sliceText(prev, offsets);
  return {
    start: offsets.start,
    end: prev.length - offsets.end,
    insertText,
    removeText
  };
}
function combineInsertedText(insertedText) {
  return insertedText.reduce((acc, _ref) => {
    var {
      text
    } = _ref;
    return "".concat(acc).concat(text.insertText);
  }, "");
}
function getTextInsertion(editor, domNode) {
  var node2 = ReactEditor.toSlateNode(editor, domNode);
  if (!Text.isText(node2)) {
    return void 0;
  }
  var prevText = node2.text;
  var nextText = domNode.textContent;
  if (nextText.endsWith("\n")) {
    nextText = nextText.slice(0, nextText.length - 1);
  }
  if (nextText !== prevText) {
    var textDiff = diffText(prevText, nextText);
    if (textDiff !== null) {
      var textPath = ReactEditor.findPath(editor, node2);
      return {
        text: textDiff,
        path: textPath
      };
    }
  }
  return void 0;
}
function normalizeTextInsertionRange(editor, range, _ref2) {
  var {
    path,
    text
  } = _ref2;
  var insertionRange = {
    anchor: {
      path,
      offset: text.start
    },
    focus: {
      path,
      offset: text.end
    }
  };
  if (!range || !Range.isCollapsed(range)) {
    return insertionRange;
  }
  var {
    insertText,
    removeText
  } = text;
  var isSingleCharacterInsertion = insertText.length === 1 || removeText.length === 1;
  if (isSingleCharacterInsertion && Path.equals(range.anchor.path, path)) {
    var [_text] = Array.from(Editor.nodes(editor, {
      at: range,
      match: Text.isText
    }));
    if (_text) {
      var [node2] = _text;
      var {
        anchor
      } = range;
      var characterBeforeAnchor = node2.text[anchor.offset - 1];
      var characterAfterAnchor = node2.text[anchor.offset];
      if (insertText.length === 1 && insertText === characterAfterAnchor) {
        return range;
      }
      if (removeText.length === 1 && removeText === characterBeforeAnchor) {
        return {
          anchor: {
            path,
            offset: anchor.offset - 1
          },
          focus: {
            path,
            offset: anchor.offset
          }
        };
      }
    }
  }
  return insertionRange;
}
var n3 = 0;
var Key = class {
  constructor() {
    this.id = "".concat(n3++);
  }
};
var ReactEditor = {
  getWindow(editor) {
    var window2 = EDITOR_TO_WINDOW.get(editor);
    if (!window2) {
      throw new Error("Unable to find a host window element for this editor");
    }
    return window2;
  },
  findKey(editor, node2) {
    var key = NODE_TO_KEY.get(node2);
    if (!key) {
      key = new Key();
      NODE_TO_KEY.set(node2, key);
    }
    return key;
  },
  findPath(editor, node2) {
    var path = [];
    var child = node2;
    while (true) {
      var parent = NODE_TO_PARENT.get(child);
      if (parent == null) {
        if (Editor.isEditor(child)) {
          return path;
        } else {
          break;
        }
      }
      var i2 = NODE_TO_INDEX.get(child);
      if (i2 == null) {
        break;
      }
      path.unshift(i2);
      child = parent;
    }
    throw new Error("Unable to find the path for Slate node: ".concat(JSON.stringify(node2)));
  },
  findDocumentOrShadowRoot(editor) {
    var el = ReactEditor.toDOMNode(editor, editor);
    var root = el.getRootNode();
    if ((root instanceof Document || root instanceof ShadowRoot) && root.getSelection != null) {
      return root;
    }
    return el.ownerDocument;
  },
  isFocused(editor) {
    return !!IS_FOCUSED.get(editor);
  },
  isReadOnly(editor) {
    return !!IS_READ_ONLY.get(editor);
  },
  blur(editor) {
    var el = ReactEditor.toDOMNode(editor, editor);
    var root = ReactEditor.findDocumentOrShadowRoot(editor);
    IS_FOCUSED.set(editor, false);
    if (root.activeElement === el) {
      el.blur();
    }
  },
  focus(editor) {
    var el = ReactEditor.toDOMNode(editor, editor);
    var root = ReactEditor.findDocumentOrShadowRoot(editor);
    IS_FOCUSED.set(editor, true);
    if (root.activeElement !== el) {
      el.focus({
        preventScroll: true
      });
    }
  },
  deselect(editor) {
    ReactEditor.toDOMNode(editor, editor);
    var {
      selection
    } = editor;
    var root = ReactEditor.findDocumentOrShadowRoot(editor);
    var domSelection = root.getSelection();
    if (domSelection && domSelection.rangeCount > 0) {
      domSelection.removeAllRanges();
    }
    if (selection) {
      Transforms.deselect(editor);
    }
  },
  hasDOMNode(editor, target) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var {
      editable = false
    } = options;
    var editorEl = ReactEditor.toDOMNode(editor, editor);
    var targetEl;
    try {
      targetEl = isDOMElement(target) ? target : target.parentElement;
    } catch (err) {
      if (!err.message.includes('Permission denied to access property "nodeType"')) {
        throw err;
      }
    }
    if (!targetEl) {
      return false;
    }
    return targetEl.closest("[data-slate-editor]") === editorEl && (!editable || targetEl.isContentEditable ? true : typeof targetEl.isContentEditable === "boolean" && targetEl.closest('[contenteditable="false"]') === editorEl || !!targetEl.getAttribute("data-slate-zero-width"));
  },
  insertData(editor, data) {
    editor.insertData(data);
  },
  insertFragmentData(editor, data) {
    return editor.insertFragmentData(data);
  },
  insertTextData(editor, data) {
    return editor.insertTextData(data);
  },
  setFragmentData(editor, data, originEvent) {
    editor.setFragmentData(data, originEvent);
  },
  toDOMNode(editor, node2) {
    var KEY_TO_ELEMENT = EDITOR_TO_KEY_TO_ELEMENT.get(editor);
    var domNode = Editor.isEditor(node2) ? EDITOR_TO_ELEMENT.get(editor) : KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 ? void 0 : KEY_TO_ELEMENT.get(ReactEditor.findKey(editor, node2));
    if (!domNode) {
      throw new Error("Cannot resolve a DOM node from Slate node: ".concat(JSON.stringify(node2)));
    }
    return domNode;
  },
  toDOMPoint(editor, point) {
    var [node2] = Editor.node(editor, point.path);
    var el = ReactEditor.toDOMNode(editor, node2);
    var domPoint;
    if (Editor.void(editor, {
      at: point
    })) {
      point = {
        path: point.path,
        offset: 0
      };
    }
    var selector = "[data-slate-string], [data-slate-zero-width]";
    var texts = Array.from(el.querySelectorAll(selector));
    var start2 = 0;
    for (var text of texts) {
      var domNode = text.childNodes[0];
      if (domNode == null || domNode.textContent == null) {
        continue;
      }
      var {
        length
      } = domNode.textContent;
      var attr = text.getAttribute("data-slate-length");
      var trueLength = attr == null ? length : parseInt(attr, 10);
      var end2 = start2 + trueLength;
      if (point.offset <= end2) {
        var offset2 = Math.min(length, Math.max(0, point.offset - start2));
        domPoint = [domNode, offset2];
        break;
      }
      start2 = end2;
    }
    if (!domPoint) {
      throw new Error("Cannot resolve a DOM point from Slate point: ".concat(JSON.stringify(point)));
    }
    return domPoint;
  },
  toDOMRange(editor, range) {
    var {
      anchor,
      focus
    } = range;
    var isBackward = Range.isBackward(range);
    var domAnchor = ReactEditor.toDOMPoint(editor, anchor);
    var domFocus = Range.isCollapsed(range) ? domAnchor : ReactEditor.toDOMPoint(editor, focus);
    var window2 = ReactEditor.getWindow(editor);
    var domRange = window2.document.createRange();
    var [startNode, startOffset] = isBackward ? domFocus : domAnchor;
    var [endNode, endOffset] = isBackward ? domAnchor : domFocus;
    var startEl = isDOMElement(startNode) ? startNode : startNode.parentElement;
    var isStartAtZeroWidth = !!startEl.getAttribute("data-slate-zero-width");
    var endEl = isDOMElement(endNode) ? endNode : endNode.parentElement;
    var isEndAtZeroWidth = !!endEl.getAttribute("data-slate-zero-width");
    domRange.setStart(startNode, isStartAtZeroWidth ? 1 : startOffset);
    domRange.setEnd(endNode, isEndAtZeroWidth ? 1 : endOffset);
    return domRange;
  },
  toSlateNode(editor, domNode) {
    var domEl = isDOMElement(domNode) ? domNode : domNode.parentElement;
    if (domEl && !domEl.hasAttribute("data-slate-node")) {
      domEl = domEl.closest("[data-slate-node]");
    }
    var node2 = domEl ? ELEMENT_TO_NODE.get(domEl) : null;
    if (!node2) {
      throw new Error("Cannot resolve a Slate node from DOM node: ".concat(domEl));
    }
    return node2;
  },
  findEventRange(editor, event) {
    if ("nativeEvent" in event) {
      event = event.nativeEvent;
    }
    var {
      clientX: x2,
      clientY: y3,
      target
    } = event;
    if (x2 == null || y3 == null) {
      throw new Error("Cannot resolve a Slate range from a DOM event: ".concat(event));
    }
    var node2 = ReactEditor.toSlateNode(editor, event.target);
    var path = ReactEditor.findPath(editor, node2);
    if (Editor.isVoid(editor, node2)) {
      var rect = target.getBoundingClientRect();
      var isPrev = editor.isInline(node2) ? x2 - rect.left < rect.left + rect.width - x2 : y3 - rect.top < rect.top + rect.height - y3;
      var edge = Editor.point(editor, path, {
        edge: isPrev ? "start" : "end"
      });
      var point = isPrev ? Editor.before(editor, edge) : Editor.after(editor, edge);
      if (point) {
        var _range = Editor.range(editor, point);
        return _range;
      }
    }
    var domRange;
    var {
      document: document2
    } = ReactEditor.getWindow(editor);
    if (document2.caretRangeFromPoint) {
      domRange = document2.caretRangeFromPoint(x2, y3);
    } else {
      var position = document2.caretPositionFromPoint(x2, y3);
      if (position) {
        domRange = document2.createRange();
        domRange.setStart(position.offsetNode, position.offset);
        domRange.setEnd(position.offsetNode, position.offset);
      }
    }
    if (!domRange) {
      throw new Error("Cannot resolve a Slate range from a DOM event: ".concat(event));
    }
    var range = ReactEditor.toSlateRange(editor, domRange, {
      exactMatch: false,
      suppressThrow: false
    });
    return range;
  },
  toSlatePoint(editor, domPoint, options) {
    var {
      exactMatch,
      suppressThrow
    } = options;
    var [nearestNode, nearestOffset] = exactMatch ? domPoint : normalizeDOMPoint(domPoint);
    var parentNode = nearestNode.parentNode;
    var textNode = null;
    var offset2 = 0;
    if (parentNode) {
      var _domNode$textContent;
      var voidNode = parentNode.closest('[data-slate-void="true"]');
      var leafNode = parentNode.closest("[data-slate-leaf]");
      var domNode = null;
      if (leafNode) {
        textNode = leafNode.closest('[data-slate-node="text"]');
        if (textNode) {
          var window2 = ReactEditor.getWindow(editor);
          var range = window2.document.createRange();
          range.setStart(textNode, 0);
          range.setEnd(nearestNode, nearestOffset);
          var contents = range.cloneContents();
          var removals = [...Array.prototype.slice.call(contents.querySelectorAll("[data-slate-zero-width]")), ...Array.prototype.slice.call(contents.querySelectorAll("[contenteditable=false]"))];
          removals.forEach((el) => {
            el.parentNode.removeChild(el);
          });
          offset2 = contents.textContent.length;
          domNode = textNode;
        }
      } else if (voidNode) {
        leafNode = voidNode.querySelector("[data-slate-leaf]");
        if (!leafNode) {
          offset2 = 1;
        } else {
          textNode = leafNode.closest('[data-slate-node="text"]');
          domNode = leafNode;
          offset2 = domNode.textContent.length;
          domNode.querySelectorAll("[data-slate-zero-width]").forEach((el) => {
            offset2 -= el.textContent.length;
          });
        }
      }
      if (domNode && offset2 === domNode.textContent.length && (parentNode.hasAttribute("data-slate-zero-width") || IS_FIREFOX && (_domNode$textContent = domNode.textContent) !== null && _domNode$textContent !== void 0 && _domNode$textContent.endsWith("\n\n"))) {
        offset2--;
      }
    }
    if (!textNode) {
      if (suppressThrow) {
        return null;
      }
      throw new Error("Cannot resolve a Slate point from DOM point: ".concat(domPoint));
    }
    var slateNode = ReactEditor.toSlateNode(editor, textNode);
    var path = ReactEditor.findPath(editor, slateNode);
    return {
      path,
      offset: offset2
    };
  },
  toSlateRange(editor, domRange, options) {
    var {
      exactMatch,
      suppressThrow
    } = options;
    var el = isDOMSelection(domRange) ? domRange.anchorNode : domRange.startContainer;
    var anchorNode;
    var anchorOffset;
    var focusNode;
    var focusOffset;
    var isCollapsed;
    if (el) {
      if (isDOMSelection(domRange)) {
        anchorNode = domRange.anchorNode;
        anchorOffset = domRange.anchorOffset;
        focusNode = domRange.focusNode;
        focusOffset = domRange.focusOffset;
        if (IS_CHROME && hasShadowRoot()) {
          isCollapsed = domRange.anchorNode === domRange.focusNode && domRange.anchorOffset === domRange.focusOffset;
        } else {
          isCollapsed = domRange.isCollapsed;
        }
      } else {
        anchorNode = domRange.startContainer;
        anchorOffset = domRange.startOffset;
        focusNode = domRange.endContainer;
        focusOffset = domRange.endOffset;
        isCollapsed = domRange.collapsed;
      }
    }
    if (anchorNode == null || focusNode == null || anchorOffset == null || focusOffset == null) {
      throw new Error("Cannot resolve a Slate range from DOM range: ".concat(domRange));
    }
    var anchor = ReactEditor.toSlatePoint(editor, [anchorNode, anchorOffset], {
      exactMatch,
      suppressThrow
    });
    if (!anchor) {
      return null;
    }
    var focus = isCollapsed ? anchor : ReactEditor.toSlatePoint(editor, [focusNode, focusOffset], {
      exactMatch,
      suppressThrow
    });
    if (!focus) {
      return null;
    }
    var range = {
      anchor,
      focus
    };
    if (Range.isExpanded(range) && Range.isForward(range) && isDOMElement(focusNode) && Editor.void(editor, {
      at: range.focus,
      mode: "highest"
    })) {
      range = Editor.unhangRange(editor, range, {
        voids: true
      });
    }
    return range;
  },
  hasRange(editor, range) {
    var {
      anchor,
      focus
    } = range;
    return Editor.hasPath(editor, anchor.path) && Editor.hasPath(editor, focus.path);
  }
};
function gatherMutationData(editor, mutations) {
  var addedNodes = [];
  var removedNodes = [];
  var insertedText = [];
  var characterDataMutations = [];
  mutations.forEach((mutation) => {
    switch (mutation.type) {
      case "childList": {
        if (mutation.addedNodes.length) {
          mutation.addedNodes.forEach((addedNode) => {
            addedNodes.push(addedNode);
          });
        }
        mutation.removedNodes.forEach((removedNode) => {
          removedNodes.push(removedNode);
        });
        break;
      }
      case "characterData": {
        characterDataMutations.push(mutation);
        var {
          parentNode
        } = mutation.target;
        if (!parentNode) {
          return;
        }
        var textInsertion = getTextInsertion(editor, parentNode);
        if (!textInsertion) {
          return;
        }
        if (insertedText.some((_ref) => {
          var {
            path
          } = _ref;
          return Path.equals(path, textInsertion.path);
        })) {
          return;
        }
        insertedText.push(textInsertion);
      }
    }
  });
  return {
    addedNodes,
    removedNodes,
    insertedText,
    characterDataMutations
  };
}
var isLineBreak = (editor, _ref2) => {
  var {
    addedNodes
  } = _ref2;
  var {
    selection
  } = editor;
  var parentNode = selection ? Node.parent(editor, selection.anchor.path) : null;
  var parentDOMNode = parentNode ? ReactEditor.toDOMNode(editor, parentNode) : null;
  if (!parentDOMNode) {
    return false;
  }
  return addedNodes.some((addedNode) => addedNode instanceof HTMLElement && addedNode.tagName === (parentDOMNode === null || parentDOMNode === void 0 ? void 0 : parentDOMNode.tagName));
};
var isDeletion = (_2, _ref3) => {
  var {
    removedNodes
  } = _ref3;
  return removedNodes.length > 0;
};
var isReplaceExpandedSelection = (_ref4, _ref5) => {
  var {
    selection
  } = _ref4;
  var {
    removedNodes
  } = _ref5;
  return selection ? Range.isExpanded(selection) && removedNodes.length > 0 : false;
};
var isTextInsertion = (_2, _ref6) => {
  var {
    insertedText
  } = _ref6;
  return insertedText.length > 0;
};
var isRemoveLeafNodes = (_2, _ref7) => {
  var {
    addedNodes,
    characterDataMutations,
    removedNodes
  } = _ref7;
  return removedNodes.length > 0 && addedNodes.length === 0 && characterDataMutations.length > 0;
};
var AndroidInputManager = class {
  constructor(editor, restoreDOM) {
    this.editor = editor;
    this.restoreDOM = restoreDOM;
    this.flush = (mutations) => {
      try {
        this.reconcileMutations(mutations);
      } catch (err) {
        console.error(err);
        this.restoreDOM();
      }
    };
    this.reconcileMutations = (mutations) => {
      var mutationData = gatherMutationData(this.editor, mutations);
      var {
        insertedText,
        removedNodes
      } = mutationData;
      if (isReplaceExpandedSelection(this.editor, mutationData)) {
        var text = combineInsertedText(insertedText);
        this.replaceExpandedSelection(text);
      } else if (isLineBreak(this.editor, mutationData)) {
        this.insertBreak();
      } else if (isRemoveLeafNodes(this.editor, mutationData)) {
        this.removeLeafNodes(removedNodes);
      } else if (isDeletion(this.editor, mutationData)) {
        this.deleteBackward();
      } else if (isTextInsertion(this.editor, mutationData)) {
        this.insertText(insertedText);
      }
    };
    this.insertText = (insertedText) => {
      var {
        selection
      } = this.editor;
      if (IS_COMPOSING.get(this.editor) || IS_ON_COMPOSITION_END.get(this.editor)) {
        EDITOR_ON_COMPOSITION_TEXT.set(this.editor, insertedText);
        IS_ON_COMPOSITION_END.set(this.editor, false);
        return;
      }
      insertedText.forEach((insertion) => {
        var text = insertion.text.insertText;
        var at = normalizeTextInsertionRange(this.editor, selection, insertion);
        Transforms.setSelection(this.editor, at);
        Editor.insertText(this.editor, text);
      });
    };
    this.insertBreak = () => {
      var {
        selection
      } = this.editor;
      Editor.insertBreak(this.editor);
      this.restoreDOM();
      if (selection) {
        setTimeout(() => {
          if (this.editor.selection && Range.equals(selection, this.editor.selection)) {
            Transforms.move(this.editor);
          }
        }, 100);
      }
    };
    this.replaceExpandedSelection = (text) => {
      Editor.deleteFragment(this.editor);
      if (text.length) {
        Editor.insertText(this.editor, text);
      }
      this.restoreDOM();
    };
    this.deleteBackward = () => {
      Editor.deleteBackward(this.editor);
      ReactEditor.focus(this.editor);
      this.restoreDOM();
    };
    this.removeLeafNodes = (nodes) => {
      for (var node2 of nodes) {
        var slateNode = ReactEditor.toSlateNode(this.editor, node2);
        if (slateNode) {
          var path = ReactEditor.findPath(this.editor, slateNode);
          Transforms.delete(this.editor, {
            at: path
          });
          this.restoreDOM();
        }
      }
    };
    this.editor = editor;
    this.restoreDOM = restoreDOM;
  }
};
function useMutationObserver(node2, callback, options) {
  var [mutationObserver] = (0, import_react.useState)(() => new MutationObserver(callback));
  useIsomorphicLayoutEffect(() => {
    mutationObserver.disconnect();
  });
  (0, import_react.useEffect)(() => {
    if (!node2.current) {
      throw new Error("Failed to attach MutationObserver, `node` is undefined");
    }
    mutationObserver.observe(node2.current, options);
    return mutationObserver.disconnect.bind(mutationObserver);
  });
}
var MUTATION_OBSERVER_CONFIG$1 = {
  childList: true,
  characterData: true,
  subtree: true
};
function findClosestKnowSlateNode(domNode) {
  var _domEl;
  var domEl = isDOMElement(domNode) ? domNode : domNode.parentElement;
  if (domEl && !domEl.hasAttribute("data-slate-node")) {
    domEl = domEl.closest("[data-slate-node]");
  }
  var slateNode = domEl && ELEMENT_TO_NODE.get(domEl);
  if (slateNode) {
    return slateNode;
  }
  return (_domEl = domEl) !== null && _domEl !== void 0 && _domEl.parentElement ? findClosestKnowSlateNode(domEl.parentElement) : null;
}
function useRestoreDom(node2, receivedUserInput) {
  var editor = useSlateStatic();
  var mutatedNodes = (0, import_react.useRef)(/* @__PURE__ */ new Set());
  var handleDOMMutation = (0, import_react.useCallback)((mutations) => {
    if (!receivedUserInput.current) {
      return;
    }
    mutations.forEach((_ref) => {
      var {
        target
      } = _ref;
      var slateNode = findClosestKnowSlateNode(target);
      if (!slateNode) {
        return;
      }
      return mutatedNodes.current.add(slateNode);
    });
  }, []);
  useMutationObserver(node2, handleDOMMutation, MUTATION_OBSERVER_CONFIG$1);
  mutatedNodes.current.clear();
  var restore = (0, import_react.useCallback)(() => {
    var mutated = Array.from(mutatedNodes.current.values());
    var nodesToRestore = mutated.filter((n4) => !mutated.some((m2) => Path.isParent(ReactEditor.findPath(editor, m2), ReactEditor.findPath(editor, n4))));
    nodesToRestore.forEach((n4) => {
      var _NODE_TO_RESTORE_DOM$;
      (_NODE_TO_RESTORE_DOM$ = NODE_TO_RESTORE_DOM.get(n4)) === null || _NODE_TO_RESTORE_DOM$ === void 0 ? void 0 : _NODE_TO_RESTORE_DOM$();
    });
    mutatedNodes.current.clear();
  }, []);
  return restore;
}
function useTrackUserInput() {
  var editor = useSlateStatic();
  var receivedUserInput = (0, import_react.useRef)(false);
  var animationFrameRef = (0, import_react.useRef)(null);
  var onUserInput = (0, import_react.useCallback)(() => {
    if (receivedUserInput.current === false) {
      var window2 = ReactEditor.getWindow(editor);
      receivedUserInput.current = true;
      if (animationFrameRef.current) {
        window2.cancelAnimationFrame(animationFrameRef.current);
      }
      animationFrameRef.current = window2.requestAnimationFrame(() => {
        receivedUserInput.current = false;
        animationFrameRef.current = null;
      });
    }
  }, []);
  (0, import_react.useEffect)(() => {
    if (receivedUserInput.current) {
      receivedUserInput.current = false;
    }
  });
  return {
    receivedUserInput,
    onUserInput
  };
}
var MUTATION_OBSERVER_CONFIG = {
  childList: true,
  characterData: true,
  characterDataOldValue: true,
  subtree: true
};
function useAndroidInputManager(node2) {
  var editor = useSlateStatic();
  var {
    receivedUserInput,
    onUserInput
  } = useTrackUserInput();
  var restoreDom = useRestoreDom(node2, receivedUserInput);
  var inputManager = (0, import_react.useMemo)(() => new AndroidInputManager(editor, restoreDom), [restoreDom, editor]);
  var timeoutId = (0, import_react.useRef)(null);
  var isReconciling = (0, import_react.useRef)(false);
  var flush = (0, import_react.useCallback)((mutations) => {
    if (!receivedUserInput.current) {
      return;
    }
    isReconciling.current = true;
    inputManager.flush(mutations);
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    timeoutId.current = setTimeout(() => {
      isReconciling.current = false;
      timeoutId.current = null;
    }, 250);
  }, []);
  useMutationObserver(node2, flush, MUTATION_OBSERVER_CONFIG);
  return {
    isReconciling,
    onUserInput
  };
}
var _excluded$12 = ["autoFocus", "decorate", "onDOMBeforeInput", "placeholder", "readOnly", "renderElement", "renderLeaf", "renderPlaceholder", "style", "as"];
function ownKeys2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    if (i2 % 2) {
      ownKeys2(Object(source), true).forEach(function(key) {
        _defineProperty2(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys2(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var RESOLVE_DELAY = 20;
var AndroidEditable = (props) => {
  var {
    autoFocus,
    decorate = defaultDecorate,
    onDOMBeforeInput: propsOnDOMBeforeInput,
    placeholder,
    readOnly = false,
    renderElement,
    renderLeaf,
    renderPlaceholder = (props2) => /* @__PURE__ */ import_react.default.createElement(DefaultPlaceholder, Object.assign({}, props2)),
    style = {},
    as: Component = "div"
  } = props, attributes = _objectWithoutProperties2(props, _excluded$12);
  var editor = useSlate();
  var [isComposing, setIsComposing] = (0, import_react.useState)(false);
  var ref = (0, import_react.useRef)(null);
  var inputManager = useAndroidInputManager(ref);
  IS_READ_ONLY.set(editor, readOnly);
  var state = (0, import_react.useMemo)(() => ({
    isComposing: false,
    isUpdatingSelection: false,
    latestElement: null
  }), []);
  var contentKey = useContentKey(editor);
  useIsomorphicLayoutEffect(() => {
    var window2;
    if (ref.current && (window2 = getDefaultView(ref.current))) {
      EDITOR_TO_WINDOW.set(editor, window2);
      EDITOR_TO_ELEMENT.set(editor, ref.current);
      NODE_TO_ELEMENT.set(editor, ref.current);
      ELEMENT_TO_NODE.set(ref.current, editor);
    } else {
      NODE_TO_ELEMENT.delete(editor);
    }
    try {
      var {
        selection
      } = editor;
      var root = ReactEditor.findDocumentOrShadowRoot(editor);
      var domSelection = root.getSelection();
      if (state.isComposing || !domSelection || !ReactEditor.isFocused(editor)) {
        return;
      }
      var hasDomSelection = domSelection.type !== "None";
      if (!selection && !hasDomSelection) {
        return;
      }
      var editorElement = EDITOR_TO_ELEMENT.get(editor);
      var hasDomSelectionInEditor = false;
      if (editorElement.contains(domSelection.anchorNode) && editorElement.contains(domSelection.focusNode)) {
        hasDomSelectionInEditor = true;
      }
      if (hasDomSelection && hasDomSelectionInEditor && selection) {
        var slateRange = ReactEditor.toSlateRange(editor, domSelection, {
          exactMatch: true,
          suppressThrow: true
        });
        if (slateRange && Range.equals(slateRange, selection)) {
          return;
        }
      }
      if (selection && !ReactEditor.hasRange(editor, selection)) {
        editor.selection = ReactEditor.toSlateRange(editor, domSelection, {
          exactMatch: false,
          suppressThrow: false
        });
        return;
      }
      var el = ReactEditor.toDOMNode(editor, editor);
      state.isUpdatingSelection = true;
      var newDomRange = selection && ReactEditor.toDOMRange(editor, selection);
      if (newDomRange) {
        if (Range.isBackward(selection)) {
          domSelection.setBaseAndExtent(newDomRange.endContainer, newDomRange.endOffset, newDomRange.startContainer, newDomRange.startOffset);
        } else {
          domSelection.setBaseAndExtent(newDomRange.startContainer, newDomRange.startOffset, newDomRange.endContainer, newDomRange.endOffset);
        }
        var leafEl = newDomRange.startContainer.parentElement;
        leafEl.getBoundingClientRect = newDomRange.getBoundingClientRect.bind(newDomRange);
        es_default(leafEl, {
          scrollMode: "if-needed",
          boundary: el
        });
        delete leafEl.getBoundingClientRect;
      } else {
        domSelection.removeAllRanges();
      }
      setTimeout(() => {
        state.isUpdatingSelection = false;
      });
    } catch (_unused) {
      state.isUpdatingSelection = false;
    }
  });
  (0, import_react.useEffect)(() => {
    if (ref.current && autoFocus) {
      ref.current.focus();
    }
  }, [autoFocus]);
  var onDOMSelectionChange = (0, import_react.useCallback)((0, import_throttle.default)(() => {
    try {
      if (!state.isComposing && !state.isUpdatingSelection && !inputManager.isReconciling.current) {
        var root = ReactEditor.findDocumentOrShadowRoot(editor);
        var {
          activeElement
        } = root;
        var el = ReactEditor.toDOMNode(editor, editor);
        var domSelection = root.getSelection();
        if (activeElement === el) {
          state.latestElement = activeElement;
          IS_FOCUSED.set(editor, true);
        } else {
          IS_FOCUSED.delete(editor);
        }
        if (!domSelection) {
          return Transforms.deselect(editor);
        }
        var {
          anchorNode,
          focusNode
        } = domSelection;
        var anchorNodeSelectable = hasEditableTarget(editor, anchorNode) || isTargetInsideNonReadonlyVoid(editor, anchorNode);
        var focusNodeSelectable = hasEditableTarget(editor, focusNode) || isTargetInsideNonReadonlyVoid(editor, focusNode);
        if (anchorNodeSelectable && focusNodeSelectable) {
          var range = ReactEditor.toSlateRange(editor, domSelection, {
            exactMatch: false,
            suppressThrow: false
          });
          Transforms.select(editor, range);
        } else {
          Transforms.deselect(editor);
        }
      }
    } catch (_unused2) {
    }
  }, 100), [readOnly]);
  var scheduleOnDOMSelectionChange = (0, import_react.useMemo)(() => (0, import_debounce.default)(onDOMSelectionChange, 0), [onDOMSelectionChange]);
  var onDOMBeforeInput = (0, import_react.useCallback)((event) => {
    if (!readOnly && hasEditableTarget(editor, event.target) && !isDOMEventHandled(event, propsOnDOMBeforeInput)) {
      scheduleOnDOMSelectionChange.flush();
      inputManager.onUserInput();
    }
  }, [readOnly, propsOnDOMBeforeInput]);
  useIsomorphicLayoutEffect(() => {
    var node2 = ref.current;
    node2 === null || node2 === void 0 ? void 0 : node2.addEventListener("beforeinput", onDOMBeforeInput);
    return () => node2 === null || node2 === void 0 ? void 0 : node2.removeEventListener("beforeinput", onDOMBeforeInput);
  }, [contentKey, propsOnDOMBeforeInput]);
  useIsomorphicLayoutEffect(() => {
    var window2 = ReactEditor.getWindow(editor);
    window2.document.addEventListener("selectionchange", scheduleOnDOMSelectionChange);
    return () => {
      window2.document.removeEventListener("selectionchange", scheduleOnDOMSelectionChange);
    };
  }, [scheduleOnDOMSelectionChange]);
  var decorations = decorate([editor, []]);
  if (placeholder && editor.children.length === 1 && Array.from(Node.texts(editor)).length === 1 && Node.string(editor) === "" && !isComposing) {
    var start2 = Editor.start(editor, []);
    decorations.push({
      [PLACEHOLDER_SYMBOL]: true,
      placeholder,
      anchor: start2,
      focus: start2
    });
  }
  return /* @__PURE__ */ import_react.default.createElement(ReadOnlyContext.Provider, {
    value: readOnly
  }, /* @__PURE__ */ import_react.default.createElement(DecorateContext.Provider, {
    value: decorate
  }, /* @__PURE__ */ import_react.default.createElement(Component, Object.assign({
    key: contentKey,
    role: readOnly ? void 0 : "textbox"
  }, attributes, {
    spellCheck: attributes.spellCheck,
    autoCorrect: attributes.autoCorrect,
    autoCapitalize: attributes.autoCapitalize,
    "data-slate-editor": true,
    "data-slate-node": "value",
    contentEditable: readOnly ? void 0 : true,
    suppressContentEditableWarning: true,
    ref,
    style: _objectSpread2({
      position: "relative",
      outline: "none",
      whiteSpace: "pre-wrap",
      wordWrap: "break-word"
    }, style),
    onCopy: (0, import_react.useCallback)((event) => {
      if (hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onCopy)) {
        event.preventDefault();
        ReactEditor.setFragmentData(editor, event.clipboardData, "copy");
      }
    }, [attributes.onCopy]),
    onCut: (0, import_react.useCallback)((event) => {
      if (!readOnly && hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onCut)) {
        event.preventDefault();
        ReactEditor.setFragmentData(editor, event.clipboardData, "cut");
        var {
          selection
        } = editor;
        if (selection) {
          if (Range.isExpanded(selection)) {
            Editor.deleteFragment(editor);
          } else {
            var node2 = Node.parent(editor, selection.anchor.path);
            if (Editor.isVoid(editor, node2)) {
              Transforms.delete(editor);
            }
          }
        }
      }
    }, [readOnly, attributes.onCut]),
    onFocus: (0, import_react.useCallback)((event) => {
      if (!readOnly && !state.isUpdatingSelection && hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onFocus)) {
        var root = ReactEditor.findDocumentOrShadowRoot(editor);
        state.latestElement = root.activeElement;
        IS_FOCUSED.set(editor, true);
      }
    }, [readOnly, attributes.onFocus]),
    onBlur: (0, import_react.useCallback)((event) => {
      if (readOnly || state.isUpdatingSelection || !hasEditableTarget(editor, event.target) || isEventHandled(event, attributes.onBlur)) {
        return;
      }
      var root = ReactEditor.findDocumentOrShadowRoot(editor);
      if (state.latestElement === root.activeElement) {
        return;
      }
      var {
        relatedTarget
      } = event;
      var el = ReactEditor.toDOMNode(editor, editor);
      if (relatedTarget === el) {
        return;
      }
      if (isDOMElement(relatedTarget) && relatedTarget.hasAttribute("data-slate-spacer")) {
        return;
      }
      if (relatedTarget != null && isDOMNode(relatedTarget) && ReactEditor.hasDOMNode(editor, relatedTarget)) {
        var node2 = ReactEditor.toSlateNode(editor, relatedTarget);
        if (Element2.isElement(node2) && !editor.isVoid(node2)) {
          return;
        }
      }
      IS_FOCUSED.delete(editor);
    }, [readOnly, attributes.onBlur]),
    onClick: (0, import_react.useCallback)((event) => {
      if (!readOnly && hasTarget(editor, event.target) && !isEventHandled(event, attributes.onClick) && isDOMNode(event.target)) {
        var node2 = ReactEditor.toSlateNode(editor, event.target);
        var path = ReactEditor.findPath(editor, node2);
        if (Editor.hasPath(editor, path)) {
          var lookupNode = Node.get(editor, path);
          if (lookupNode === node2) {
            var _start = Editor.start(editor, path);
            var end2 = Editor.end(editor, path);
            var startVoid = Editor.void(editor, {
              at: _start
            });
            var endVoid = Editor.void(editor, {
              at: end2
            });
            if (startVoid && endVoid && Path.equals(startVoid[1], endVoid[1])) {
              var range = Editor.range(editor, _start);
              Transforms.select(editor, range);
            }
          }
        }
      }
    }, [readOnly, attributes.onClick]),
    onCompositionEnd: (0, import_react.useCallback)((event) => {
      if (hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onCompositionEnd)) {
        scheduleOnDOMSelectionChange.flush();
        setTimeout(() => {
          state.isComposing && setIsComposing(false);
          state.isComposing = false;
          IS_COMPOSING.set(editor, false);
          IS_ON_COMPOSITION_END.set(editor, true);
          var insertedText = EDITOR_ON_COMPOSITION_TEXT.get(editor) || [];
          if (!insertedText.length) {
            return;
          }
          EDITOR_ON_COMPOSITION_TEXT.set(editor, []);
          var {
            selection
          } = editor;
          insertedText.forEach((insertion) => {
            var text = insertion.text.insertText;
            var at = normalizeTextInsertionRange(editor, selection, insertion);
            Transforms.setSelection(editor, at);
            Editor.insertText(editor, text);
          });
        }, RESOLVE_DELAY);
      }
    }, [attributes.onCompositionEnd]),
    onCompositionUpdate: (0, import_react.useCallback)((event) => {
      if (hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onCompositionUpdate)) {
        !state.isComposing && setIsComposing(true);
        state.isComposing = true;
        IS_COMPOSING.set(editor, true);
      }
    }, [attributes.onCompositionUpdate]),
    onCompositionStart: (0, import_react.useCallback)((event) => {
      if (hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onCompositionStart)) {
        !state.isComposing && setIsComposing(true);
        state.isComposing = true;
        IS_COMPOSING.set(editor, true);
      }
    }, [attributes.onCompositionStart]),
    onPaste: (0, import_react.useCallback)((event) => {
      event.clipboardData = getClipboardData(event.clipboardData);
      if (hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onPaste) && !readOnly) {
        event.preventDefault();
        ReactEditor.insertData(editor, event.clipboardData);
      }
    }, [readOnly, attributes.onPaste])
  }), useChildren({
    decorations,
    node: editor,
    renderElement,
    renderPlaceholder,
    renderLeaf,
    selection: editor.selection
  }))));
};
var FocusedContext = /* @__PURE__ */ (0, import_react.createContext)(false);
var _excluded3 = ["editor", "children", "onChange", "value"];
var Slate = (props) => {
  var {
    editor,
    children,
    onChange,
    value
  } = props, rest = _objectWithoutProperties2(props, _excluded3);
  var unmountRef = (0, import_react.useRef)(false);
  var [context, setContext] = import_react.default.useState(() => {
    if (!Node.isNodeList(value)) {
      throw new Error("[Slate] value is invalid! Expected a list of elements" + "but got: ".concat(JSON.stringify(value)));
    }
    if (!Editor.isEditor(editor)) {
      throw new Error("[Slate] editor is invalid! you passed:" + "".concat(JSON.stringify(editor)));
    }
    editor.children = value;
    Object.assign(editor, rest);
    return [editor];
  });
  var onContextChange = (0, import_react.useCallback)(() => {
    onChange(editor.children);
    setContext([editor]);
  }, [onChange]);
  EDITOR_TO_ON_CHANGE.set(editor, onContextChange);
  (0, import_react.useEffect)(() => {
    return () => {
      EDITOR_TO_ON_CHANGE.set(editor, () => {
      });
      unmountRef.current = true;
    };
  }, []);
  var [isFocused, setIsFocused] = (0, import_react.useState)(ReactEditor.isFocused(editor));
  (0, import_react.useEffect)(() => {
    setIsFocused(ReactEditor.isFocused(editor));
  });
  useIsomorphicLayoutEffect(() => {
    var fn5 = () => {
      setTimeout(() => {
        if (unmountRef.current) {
          return;
        }
        setIsFocused(ReactEditor.isFocused(editor));
      }, 0);
    };
    document.addEventListener("focus", fn5, true);
    document.addEventListener("blur", fn5, true);
    return () => {
      document.removeEventListener("focus", fn5, true);
      document.removeEventListener("blur", fn5, true);
    };
  }, []);
  return /* @__PURE__ */ import_react.default.createElement(SlateContext.Provider, {
    value: context
  }, /* @__PURE__ */ import_react.default.createElement(EditorContext.Provider, {
    value: editor
  }, /* @__PURE__ */ import_react.default.createElement(FocusedContext.Provider, {
    value: isFocused
  }, children)));
};
var doRectsIntersect = (rect, compareRect) => {
  var middle = (compareRect.top + compareRect.bottom) / 2;
  return rect.top <= middle && rect.bottom >= middle;
};
var areRangesSameLine = (editor, range1, range2) => {
  var rect1 = ReactEditor.toDOMRange(editor, range1).getBoundingClientRect();
  var rect2 = ReactEditor.toDOMRange(editor, range2).getBoundingClientRect();
  return doRectsIntersect(rect1, rect2) && doRectsIntersect(rect2, rect1);
};
var findCurrentLineRange = (editor, parentRange) => {
  var parentRangeBoundary = Editor.range(editor, Range.end(parentRange));
  var positions = Array.from(Editor.positions(editor, {
    at: parentRange
  }));
  var left2 = 0;
  var right2 = positions.length;
  var middle = Math.floor(right2 / 2);
  if (areRangesSameLine(editor, Editor.range(editor, positions[left2]), parentRangeBoundary)) {
    return Editor.range(editor, positions[left2], parentRangeBoundary);
  }
  if (positions.length < 2) {
    return Editor.range(editor, positions[positions.length - 1], parentRangeBoundary);
  }
  while (middle !== positions.length && middle !== left2) {
    if (areRangesSameLine(editor, Editor.range(editor, positions[middle]), parentRangeBoundary)) {
      right2 = middle;
    } else {
      left2 = middle;
    }
    middle = Math.floor((left2 + right2) / 2);
  }
  return Editor.range(editor, positions[right2], parentRangeBoundary);
};
var withReact = (editor) => {
  var e2 = editor;
  var {
    apply,
    onChange,
    deleteBackward
  } = e2;
  EDITOR_TO_KEY_TO_ELEMENT.set(e2, /* @__PURE__ */ new WeakMap());
  e2.deleteBackward = (unit) => {
    if (unit !== "line") {
      return deleteBackward(unit);
    }
    if (editor.selection && Range.isCollapsed(editor.selection)) {
      var parentBlockEntry = Editor.above(editor, {
        match: (n4) => Editor.isBlock(editor, n4),
        at: editor.selection
      });
      if (parentBlockEntry) {
        var [, parentBlockPath] = parentBlockEntry;
        var parentElementRange = Editor.range(editor, parentBlockPath, editor.selection.anchor);
        var currentLineRange = findCurrentLineRange(e2, parentElementRange);
        if (!Range.isCollapsed(currentLineRange)) {
          Transforms.delete(editor, {
            at: currentLineRange
          });
        }
      }
    }
  };
  e2.apply = (op) => {
    var matches = [];
    switch (op.type) {
      case "insert_text":
      case "remove_text":
      case "set_node": {
        for (var [node2, path] of Editor.levels(e2, {
          at: op.path
        })) {
          var key = ReactEditor.findKey(e2, node2);
          matches.push([path, key]);
        }
        break;
      }
      case "insert_node":
      case "remove_node":
      case "merge_node":
      case "split_node": {
        for (var [_node, _path] of Editor.levels(e2, {
          at: Path.parent(op.path)
        })) {
          var _key = ReactEditor.findKey(e2, _node);
          matches.push([_path, _key]);
        }
        break;
      }
      case "move_node": {
        for (var [_node2, _path2] of Editor.levels(e2, {
          at: Path.common(Path.parent(op.path), Path.parent(op.newPath))
        })) {
          var _key2 = ReactEditor.findKey(e2, _node2);
          matches.push([_path2, _key2]);
        }
        break;
      }
    }
    apply(op);
    for (var [_path3, _key3] of matches) {
      var [_node3] = Editor.node(e2, _path3);
      NODE_TO_KEY.set(_node3, _key3);
    }
  };
  e2.setFragmentData = (data) => {
    var {
      selection
    } = e2;
    if (!selection) {
      return;
    }
    var [start2, end2] = Range.edges(selection);
    var startVoid = Editor.void(e2, {
      at: start2.path
    });
    var endVoid = Editor.void(e2, {
      at: end2.path
    });
    if (Range.isCollapsed(selection) && !startVoid) {
      return;
    }
    var domRange = ReactEditor.toDOMRange(e2, selection);
    var contents = domRange.cloneContents();
    var attach = contents.childNodes[0];
    contents.childNodes.forEach((node2) => {
      if (node2.textContent && node2.textContent.trim() !== "") {
        attach = node2;
      }
    });
    if (endVoid) {
      var [voidNode] = endVoid;
      var r3 = domRange.cloneRange();
      var domNode = ReactEditor.toDOMNode(e2, voidNode);
      r3.setEndAfter(domNode);
      contents = r3.cloneContents();
    }
    if (startVoid) {
      attach = contents.querySelector("[data-slate-spacer]");
    }
    Array.from(contents.querySelectorAll("[data-slate-zero-width]")).forEach((zw) => {
      var isNewline = zw.getAttribute("data-slate-zero-width") === "n";
      zw.textContent = isNewline ? "\n" : "";
    });
    if (isDOMText(attach)) {
      var span = attach.ownerDocument.createElement("span");
      span.style.whiteSpace = "pre";
      span.appendChild(attach);
      contents.appendChild(span);
      attach = span;
    }
    var fragment = e2.getFragment();
    var string2 = JSON.stringify(fragment);
    var encoded = window.btoa(encodeURIComponent(string2));
    attach.setAttribute("data-slate-fragment", encoded);
    data.setData("application/x-slate-fragment", encoded);
    var div2 = contents.ownerDocument.createElement("div");
    div2.appendChild(contents);
    div2.setAttribute("hidden", "true");
    contents.ownerDocument.body.appendChild(div2);
    data.setData("text/html", div2.innerHTML);
    data.setData("text/plain", getPlainText(div2));
    contents.ownerDocument.body.removeChild(div2);
    return data;
  };
  e2.insertData = (data) => {
    if (!e2.insertFragmentData(data)) {
      e2.insertTextData(data);
    }
  };
  e2.insertFragmentData = (data) => {
    var fragment = data.getData("application/x-slate-fragment") || getSlateFragmentAttribute(data);
    if (fragment) {
      var decoded = decodeURIComponent(window.atob(fragment));
      var parsed = JSON.parse(decoded);
      e2.insertFragment(parsed);
      return true;
    }
    return false;
  };
  e2.insertTextData = (data) => {
    var text = data.getData("text/plain");
    if (text) {
      var lines = text.split(/\r\n|\r|\n/);
      var split = false;
      for (var line of lines) {
        if (split) {
          Transforms.splitNodes(e2, {
            always: true
          });
        }
        e2.insertText(line);
        split = true;
      }
      return true;
    }
    return false;
  };
  e2.onChange = () => {
    import_react_dom.default.unstable_batchedUpdates(() => {
      var onContextChange = EDITOR_TO_ON_CHANGE.get(e2);
      if (onContextChange) {
        onContextChange();
      }
      onChange();
    });
  };
  return e2;
};
var Editable = IS_ANDROID ? AndroidEditable : Editable$1;

// node_modules/slate-history/dist/index.es.js
init_react();
var History = {
  isHistory(value) {
    return isPlainObject(value) && Array.isArray(value.redos) && Array.isArray(value.undos) && (value.redos.length === 0 || Operation.isOperationList(value.redos[0])) && (value.undos.length === 0 || Operation.isOperationList(value.undos[0]));
  }
};
var SAVING = /* @__PURE__ */ new WeakMap();
var MERGING = /* @__PURE__ */ new WeakMap();
var HistoryEditor = {
  isHistoryEditor(value) {
    return History.isHistory(value.history) && Editor.isEditor(value);
  },
  isMerging(editor) {
    return MERGING.get(editor);
  },
  isSaving(editor) {
    return SAVING.get(editor);
  },
  redo(editor) {
    editor.redo();
  },
  undo(editor) {
    editor.undo();
  },
  withoutMerging(editor, fn5) {
    var prev = HistoryEditor.isMerging(editor);
    MERGING.set(editor, false);
    fn5();
    MERGING.set(editor, prev);
  },
  withoutSaving(editor, fn5) {
    var prev = HistoryEditor.isSaving(editor);
    SAVING.set(editor, false);
    fn5();
    SAVING.set(editor, prev);
  }
};
var withHistory = (editor) => {
  var e2 = editor;
  var {
    apply
  } = e2;
  e2.history = {
    undos: [],
    redos: []
  };
  e2.redo = () => {
    var {
      history
    } = e2;
    var {
      redos
    } = history;
    if (redos.length > 0) {
      var batch = redos[redos.length - 1];
      HistoryEditor.withoutSaving(e2, () => {
        Editor.withoutNormalizing(e2, () => {
          for (var op of batch) {
            e2.apply(op);
          }
        });
      });
      history.redos.pop();
      history.undos.push(batch);
    }
  };
  e2.undo = () => {
    var {
      history
    } = e2;
    var {
      undos
    } = history;
    if (undos.length > 0) {
      var batch = undos[undos.length - 1];
      HistoryEditor.withoutSaving(e2, () => {
        Editor.withoutNormalizing(e2, () => {
          var inverseOps = batch.map(Operation.inverse).reverse();
          for (var op of inverseOps) {
            e2.apply(op);
          }
        });
      });
      history.redos.push(batch);
      history.undos.pop();
    }
  };
  e2.apply = (op) => {
    var {
      operations,
      history
    } = e2;
    var {
      undos
    } = history;
    var lastBatch = undos[undos.length - 1];
    var lastOp = lastBatch && lastBatch[lastBatch.length - 1];
    var overwrite = shouldOverwrite(op, lastOp);
    var save = HistoryEditor.isSaving(e2);
    var merge = HistoryEditor.isMerging(e2);
    if (save == null) {
      save = shouldSave(op);
    }
    if (save) {
      if (merge == null) {
        if (lastBatch == null) {
          merge = false;
        } else if (operations.length !== 0) {
          merge = true;
        } else {
          merge = shouldMerge(op, lastOp) || overwrite;
        }
      }
      if (lastBatch && merge) {
        if (overwrite) {
          lastBatch.pop();
        }
        lastBatch.push(op);
      } else {
        var batch = [op];
        undos.push(batch);
      }
      while (undos.length > 100) {
        undos.shift();
      }
      if (shouldClear(op)) {
        history.redos = [];
      }
    }
    apply(op);
  };
  return e2;
};
var shouldMerge = (op, prev) => {
  if (op.type === "set_selection") {
    return true;
  }
  if (prev && op.type === "insert_text" && prev.type === "insert_text" && op.offset === prev.offset + prev.text.length && Path.equals(op.path, prev.path)) {
    return true;
  }
  if (prev && op.type === "remove_text" && prev.type === "remove_text" && op.offset + op.text.length === prev.offset && Path.equals(op.path, prev.path)) {
    return true;
  }
  return false;
};
var shouldSave = (op, prev) => {
  if (op.type === "set_selection" && (op.properties == null || op.newProperties == null)) {
    return false;
  }
  return true;
};
var shouldOverwrite = (op, prev) => {
  if (prev && op.type === "set_selection" && prev.type === "set_selection") {
    return true;
  }
  return false;
};
var shouldClear = (op) => {
  if (op.type === "set_selection") {
    return false;
  }
  return true;
};

// node_modules/react-bricks/react-bricks.esm.js
var import_is_hotkey2 = __toESM(require_lib2());

// node_modules/@tippyjs/react/dist/tippy-react.esm.js
init_react();

// node_modules/tippy.js/dist/tippy.esm.js
init_react();

// node_modules/@popperjs/core/lib/index.js
init_react();

// node_modules/@popperjs/core/lib/enums.js
init_react();
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

// node_modules/@popperjs/core/lib/modifiers/index.js
init_react();

// node_modules/@popperjs/core/lib/modifiers/applyStyles.js
init_react();

// node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
init_react();
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}

// node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
init_react();

// node_modules/@popperjs/core/lib/dom-utils/getWindow.js
init_react();
function getWindow(node2) {
  if (node2 == null) {
    return window;
  }
  if (node2.toString() !== "[object Window]") {
    var ownerDocument = node2.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node2;
}

// node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function isElement2(node2) {
  var OwnElement = getWindow(node2).Element;
  return node2 instanceof OwnElement || node2 instanceof Element;
}
function isHTMLElement(node2) {
  var OwnElement = getWindow(node2).HTMLElement;
  return node2 instanceof OwnElement || node2 instanceof HTMLElement;
}
function isShadowRoot(node2) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node2).ShadowRoot;
  return node2 instanceof OwnElement || node2 instanceof ShadowRoot;
}

// node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles_default = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect,
  requires: ["computeStyles"]
};

// node_modules/@popperjs/core/lib/modifiers/arrow.js
init_react();

// node_modules/@popperjs/core/lib/utils/getBasePlacement.js
init_react();
function getBasePlacement(placement) {
  return placement.split("-")[0];
}

// node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
init_react();

// node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
init_react();

// node_modules/@popperjs/core/lib/utils/math.js
init_react();
var max = Math.max;
var min = Math.min;
var round = Math.round;

// node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function getBoundingClientRect(element, includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  var rect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (isHTMLElement(element) && includeScale) {
    var offsetHeight = element.offsetHeight;
    var offsetWidth = element.offsetWidth;
    if (offsetWidth > 0) {
      scaleX = round(rect.width) / offsetWidth || 1;
    }
    if (offsetHeight > 0) {
      scaleY = round(rect.height) / offsetHeight || 1;
    }
  }
  return {
    width: rect.width / scaleX,
    height: rect.height / scaleY,
    top: rect.top / scaleY,
    right: rect.right / scaleX,
    bottom: rect.bottom / scaleY,
    left: rect.left / scaleX,
    x: rect.left / scaleX,
    y: rect.top / scaleY
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}

// node_modules/@popperjs/core/lib/dom-utils/contains.js
init_react();
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}

// node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
init_react();

// node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
init_react();
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}

// node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
init_react();
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}

// node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
init_react();

// node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
init_react();
function getDocumentElement(element) {
  return ((isElement2(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}

// node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
}

// node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
  var isIE = navigator.userAgent.indexOf("Trident") !== -1;
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle2(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle2(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}

// node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
init_react();
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}

// node_modules/@popperjs/core/lib/utils/within.js
init_react();
function within(min2, value, max2) {
  return max(min2, min(value, max2));
}
function withinMaxClamp(min2, value, max2) {
  var v3 = within(min2, value, max2);
  return v3 > max2 ? max2 : v3;
}

// node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
init_react();

// node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
init_react();
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

// node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

// node_modules/@popperjs/core/lib/utils/expandToHashMap.js
init_react();
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

// node_modules/@popperjs/core/lib/modifiers/arrow.js
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect2(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (true) {
    if (!isHTMLElement(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "));
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    if (true) {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
    }
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow_default = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect2,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};

// node_modules/@popperjs/core/lib/modifiers/computeStyles.js
init_react();

// node_modules/@popperjs/core/lib/utils/getVariation.js
init_react();
function getVariation(placement) {
  return placement.split("-")[1];
}

// node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref) {
  var x2 = _ref.x, y3 = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x2 * dpr) / dpr || 0,
    y: round(y3 * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x2 = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y3 = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x: x2,
    y: y3
  }) : {
    x: x2,
    y: y3
  };
  x2 = _ref3.x;
  y3 = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle2(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
      y3 -= offsetY - popperRect.height;
      y3 *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
      x2 -= offsetX - popperRect.width;
      x2 *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x2,
    y: y3
  }) : {
    x: x2,
    y: y3
  };
  x2 = _ref4.x;
  y3 = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x2 + "px, " + y3 + "px)" : "translate3d(" + x2 + "px, " + y3 + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y3 + "px" : "", _Object$assign2[sideX] = hasX ? x2 + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  if (true) {
    var transitionProperty = getComputedStyle2(state.elements.popper).transitionProperty || "";
    if (adaptive && ["transform", "top", "right", "bottom", "left"].some(function(property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', "\n\n", 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", "\n\n", "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
    }
  }
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles_default = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};

// node_modules/@popperjs/core/lib/modifiers/eventListeners.js
init_react();
var passive = {
  passive: true
};
function effect3(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners_default = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn2() {
  },
  effect: effect3,
  data: {}
};

// node_modules/@popperjs/core/lib/modifiers/flip.js
init_react();

// node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
init_react();
var hash = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash[matched];
  });
}

// node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
init_react();
var hash2 = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash2[matched];
  });
}

// node_modules/@popperjs/core/lib/utils/detectOverflow.js
init_react();

// node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
init_react();

// node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
init_react();

// node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
init_react();

// node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
init_react();
function getWindowScroll(node2) {
  var win = getWindow(node2);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

// node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x2 = 0;
  var y3 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x2 = visualViewport.offsetLeft;
      y3 = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x2 + getWindowScrollBarX(element),
    y: y3
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
init_react();
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x2 = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y3 = -winScroll.scrollTop;
  if (getComputedStyle2(body || html).direction === "rtl") {
    x2 += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x: x2,
    y: y3
  };
}

// node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
init_react();

// node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
init_react();

// node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
init_react();
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle2(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

// node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function getScrollParent(node2) {
  if (["html", "body", "#document"].indexOf(getNodeName(node2)) >= 0) {
    return node2.ownerDocument.body;
  }
  if (isHTMLElement(node2) && isScrollParent(node2)) {
    return node2;
  }
  return getScrollParent(getParentNode(node2));
}

// node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
}

// node_modules/@popperjs/core/lib/utils/rectToClientRect.js
init_react();
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isElement2(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle2(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement2(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement2(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

// node_modules/@popperjs/core/lib/utils/computeOffsets.js
init_react();
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
      default:
    }
  }
  return offsets;
}

// node_modules/@popperjs/core/lib/utils/detectOverflow.js
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement2(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}

// node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
init_react();
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements2.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements2;
    if (true) {
      console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" "));
    }
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a2, b3) {
    return overflows[a2] - overflows[b3];
  });
}

// node_modules/@popperjs/core/lib/modifiers/flip.js
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i2 = 0; i2 < placements2.length; i2++) {
    var placement = placements2[i2];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break")
        break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip_default = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};

// node_modules/@popperjs/core/lib/modifiers/hide.js
init_react();
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide_default = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};

// node_modules/@popperjs/core/lib/modifiers/offset.js
init_react();
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x2 = _data$state$placement.x, y3 = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x2;
    state.modifiersData.popperOffsets.y += y3;
  }
  state.modifiersData[name] = data;
}
var offset_default = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};

// node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
init_react();
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets_default = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};

// node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
init_react();

// node_modules/@popperjs/core/lib/utils/getAltAxis.js
init_react();
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}

// node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min2 = offset2 + overflow[mainSide];
    var max2 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset2, tether ? max(max2, tetherMax) : max2);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
var preventOverflow_default = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};

// node_modules/@popperjs/core/lib/createPopper.js
init_react();

// node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
init_react();

// node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
init_react();

// node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
init_react();
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function getNodeScroll(node2) {
  if (node2 === getWindow(node2) || !isHTMLElement(node2)) {
    return getWindowScroll(node2);
  } else {
    return getHTMLElementScroll(node2);
  }
}

// node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

// node_modules/@popperjs/core/lib/utils/orderModifiers.js
init_react();
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

// node_modules/@popperjs/core/lib/utils/debounce.js
init_react();
function debounce2(fn5) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn5());
        });
      });
    }
    return pending;
  };
}

// node_modules/@popperjs/core/lib/utils/validateModifiers.js
init_react();

// node_modules/@popperjs/core/lib/utils/format.js
init_react();
function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  return [].concat(args).reduce(function(p3, c2) {
    return p3.replace(/%s/, c2);
  }, str);
}

// node_modules/@popperjs/core/lib/utils/validateModifiers.js
var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function validateModifiers(modifiers) {
  modifiers.forEach(function(modifier) {
    [].concat(Object.keys(modifier), VALID_PROPERTIES).filter(function(value, index2, self2) {
      return self2.indexOf(value) === index2;
    }).forEach(function(key) {
      switch (key) {
        case "name":
          if (typeof modifier.name !== "string") {
            console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', '"' + String(modifier.name) + '"'));
          }
          break;
        case "enabled":
          if (typeof modifier.enabled !== "boolean") {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', '"' + String(modifier.enabled) + '"'));
          }
          break;
        case "phase":
          if (modifierPhases.indexOf(modifier.phase) < 0) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(", "), '"' + String(modifier.phase) + '"'));
          }
          break;
        case "fn":
          if (typeof modifier.fn !== "function") {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', '"' + String(modifier.fn) + '"'));
          }
          break;
        case "effect":
          if (modifier.effect != null && typeof modifier.effect !== "function") {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', '"' + String(modifier.fn) + '"'));
          }
          break;
        case "requires":
          if (modifier.requires != null && !Array.isArray(modifier.requires)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', '"' + String(modifier.requires) + '"'));
          }
          break;
        case "requiresIfExists":
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', '"' + String(modifier.requiresIfExists) + '"'));
          }
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + modifier.name + '" modifier, valid properties are ' + VALID_PROPERTIES.map(function(s3) {
            return '"' + s3 + '"';
          }).join(", ") + '; but "' + key + '" was provided.');
      }
      modifier.requires && modifier.requires.forEach(function(requirement) {
        if (modifiers.find(function(mod) {
          return mod.name === requirement;
        }) == null) {
          console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

// node_modules/@popperjs/core/lib/utils/uniqueBy.js
init_react();
function uniqueBy(arr, fn5) {
  var identifiers = /* @__PURE__ */ new Set();
  return arr.filter(function(item) {
    var identifier = fn5(item);
    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

// node_modules/@popperjs/core/lib/utils/mergeByName.js
init_react();
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}

// node_modules/@popperjs/core/lib/createPopper.js
var INVALID_ELEMENT_ERROR = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.";
var INFINITE_LOOP_ERROR = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.";
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper2(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement2(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m2) {
          return m2.enabled;
        });
        if (true) {
          var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function(_ref) {
            var name = _ref.name;
            return name;
          });
          validateModifiers(modifiers);
          if (getBasePlacement(state.options.placement) === auto) {
            var flipModifier = state.orderedModifiers.find(function(_ref2) {
              var name = _ref2.name;
              return name === "flip";
            });
            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
            }
          }
          var _getComputedStyle = getComputedStyle2(popper2), marginTop = _getComputedStyle.marginTop, marginRight = _getComputedStyle.marginRight, marginBottom = _getComputedStyle.marginBottom, marginLeft = _getComputedStyle.marginLeft;
          if ([marginTop, marginRight, marginBottom, marginLeft].some(function(margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
          }
        }
        runModifierEffects();
        return instance.update();
      },
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          if (true) {
            console.error(INVALID_ELEMENT_ERROR);
          }
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;
        for (var index2 = 0; index2 < state.orderedModifiers.length; index2++) {
          if (true) {
            __debug_loops__ += 1;
            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }
          if (state.reset === true) {
            state.reset = false;
            index2 = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index2], fn5 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn5 === "function") {
            state = fn5({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      update: debounce2(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      if (true) {
        console.error(INVALID_ELEMENT_ERROR);
      }
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref3) {
        var name = _ref3.name, _ref3$options = _ref3.options, options2 = _ref3$options === void 0 ? {} : _ref3$options, effect5 = _ref3.effect;
        if (typeof effect5 === "function") {
          var cleanupFn = effect5({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn5) {
        return fn5();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}

// node_modules/@popperjs/core/lib/popper.js
init_react();
var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
var createPopper = /* @__PURE__ */ popperGenerator({
  defaultModifiers
});

// node_modules/tippy.js/dist/tippy.esm.js
var BOX_CLASS = "tippy-box";
var CONTENT_CLASS = "tippy-content";
var BACKDROP_CLASS = "tippy-backdrop";
var ARROW_CLASS = "tippy-arrow";
var SVG_ARROW_CLASS = "tippy-svg-arrow";
var TOUCH_OPTIONS = {
  passive: true,
  capture: true
};
var TIPPY_DEFAULT_APPEND_TO = function TIPPY_DEFAULT_APPEND_TO2() {
  return document.body;
};
function hasOwnProperty(obj, key) {
  return {}.hasOwnProperty.call(obj, key);
}
function getValueAtIndexOrReturn(value, index2, defaultValue) {
  if (Array.isArray(value)) {
    var v3 = value[index2];
    return v3 == null ? Array.isArray(defaultValue) ? defaultValue[index2] : defaultValue : v3;
  }
  return value;
}
function isType(value, type) {
  var str = {}.toString.call(value);
  return str.indexOf("[object") === 0 && str.indexOf(type + "]") > -1;
}
function invokeWithArgsOrReturn(value, args) {
  return typeof value === "function" ? value.apply(void 0, args) : value;
}
function debounce3(fn5, ms) {
  if (ms === 0) {
    return fn5;
  }
  var timeout;
  return function(arg) {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      fn5(arg);
    }, ms);
  };
}
function removeProperties(obj, keys) {
  var clone = Object.assign({}, obj);
  keys.forEach(function(key) {
    delete clone[key];
  });
  return clone;
}
function splitBySpaces(value) {
  return value.split(/\s+/).filter(Boolean);
}
function normalizeToArray(value) {
  return [].concat(value);
}
function pushIfUnique(arr, value) {
  if (arr.indexOf(value) === -1) {
    arr.push(value);
  }
}
function unique(arr) {
  return arr.filter(function(item, index2) {
    return arr.indexOf(item) === index2;
  });
}
function getBasePlacement2(placement) {
  return placement.split("-")[0];
}
function arrayFrom(value) {
  return [].slice.call(value);
}
function removeUndefinedProps(obj) {
  return Object.keys(obj).reduce(function(acc, key) {
    if (obj[key] !== void 0) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}
function div() {
  return document.createElement("div");
}
function isElement3(value) {
  return ["Element", "Fragment"].some(function(type) {
    return isType(value, type);
  });
}
function isNodeList(value) {
  return isType(value, "NodeList");
}
function isMouseEvent(value) {
  return isType(value, "MouseEvent");
}
function isReferenceElement(value) {
  return !!(value && value._tippy && value._tippy.reference === value);
}
function getArrayOfElements(value) {
  if (isElement3(value)) {
    return [value];
  }
  if (isNodeList(value)) {
    return arrayFrom(value);
  }
  if (Array.isArray(value)) {
    return value;
  }
  return arrayFrom(document.querySelectorAll(value));
}
function setTransitionDuration(els, value) {
  els.forEach(function(el) {
    if (el) {
      el.style.transitionDuration = value + "ms";
    }
  });
}
function setVisibilityState(els, state) {
  els.forEach(function(el) {
    if (el) {
      el.setAttribute("data-state", state);
    }
  });
}
function getOwnerDocument(elementOrElements) {
  var _element$ownerDocumen;
  var _normalizeToArray = normalizeToArray(elementOrElements), element = _normalizeToArray[0];
  return element != null && (_element$ownerDocumen = element.ownerDocument) != null && _element$ownerDocumen.body ? element.ownerDocument : document;
}
function isCursorOutsideInteractiveBorder(popperTreeData, event) {
  var clientX = event.clientX, clientY = event.clientY;
  return popperTreeData.every(function(_ref) {
    var popperRect = _ref.popperRect, popperState = _ref.popperState, props = _ref.props;
    var interactiveBorder = props.interactiveBorder;
    var basePlacement = getBasePlacement2(popperState.placement);
    var offsetData = popperState.modifiersData.offset;
    if (!offsetData) {
      return true;
    }
    var topDistance = basePlacement === "bottom" ? offsetData.top.y : 0;
    var bottomDistance = basePlacement === "top" ? offsetData.bottom.y : 0;
    var leftDistance = basePlacement === "right" ? offsetData.left.x : 0;
    var rightDistance = basePlacement === "left" ? offsetData.right.x : 0;
    var exceedsTop = popperRect.top - clientY + topDistance > interactiveBorder;
    var exceedsBottom = clientY - popperRect.bottom - bottomDistance > interactiveBorder;
    var exceedsLeft = popperRect.left - clientX + leftDistance > interactiveBorder;
    var exceedsRight = clientX - popperRect.right - rightDistance > interactiveBorder;
    return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
  });
}
function updateTransitionEndListener(box, action, listener) {
  var method = action + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(event) {
    box[method](event, listener);
  });
}
function actualContains(parent, child) {
  var target = child;
  while (target) {
    var _target$getRootNode;
    if (parent.contains(target)) {
      return true;
    }
    target = target.getRootNode == null ? void 0 : (_target$getRootNode = target.getRootNode()) == null ? void 0 : _target$getRootNode.host;
  }
  return false;
}
var currentInput = {
  isTouch: false
};
var lastMouseMoveTime = 0;
function onDocumentTouchStart() {
  if (currentInput.isTouch) {
    return;
  }
  currentInput.isTouch = true;
  if (window.performance) {
    document.addEventListener("mousemove", onDocumentMouseMove);
  }
}
function onDocumentMouseMove() {
  var now = performance.now();
  if (now - lastMouseMoveTime < 20) {
    currentInput.isTouch = false;
    document.removeEventListener("mousemove", onDocumentMouseMove);
  }
  lastMouseMoveTime = now;
}
function onWindowBlur() {
  var activeElement = document.activeElement;
  if (isReferenceElement(activeElement)) {
    var instance = activeElement._tippy;
    if (activeElement.blur && !instance.state.isVisible) {
      activeElement.blur();
    }
  }
}
function bindGlobalEventListeners() {
  document.addEventListener("touchstart", onDocumentTouchStart, TOUCH_OPTIONS);
  window.addEventListener("blur", onWindowBlur);
}
var isBrowser = typeof window !== "undefined" && typeof document !== "undefined";
var isIE11 = isBrowser ? !!window.msCrypto : false;
function createMemoryLeakWarning(method) {
  var txt = method === "destroy" ? "n already-" : " ";
  return [method + "() was called on a" + txt + "destroyed instance. This is a no-op but", "indicates a potential memory leak."].join(" ");
}
function clean(value) {
  var spacesAndTabs = /[ \t]{2,}/g;
  var lineStartWithSpaces = /^[ \t]*/gm;
  return value.replace(spacesAndTabs, " ").replace(lineStartWithSpaces, "").trim();
}
function getDevMessage(message) {
  return clean("\n  %ctippy.js\n\n  %c" + clean(message) + "\n\n  %c\u{1F477}\u200D This is a development-only message. It will be removed in production.\n  ");
}
function getFormattedMessage(message) {
  return [
    getDevMessage(message),
    "color: #00C584; font-size: 1.3em; font-weight: bold;",
    "line-height: 1.5",
    "color: #a6a095;"
  ];
}
var visitedMessages;
if (true) {
  resetVisitedMessages();
}
function resetVisitedMessages() {
  visitedMessages = /* @__PURE__ */ new Set();
}
function warnWhen(condition, message) {
  if (condition && !visitedMessages.has(message)) {
    var _console;
    visitedMessages.add(message);
    (_console = console).warn.apply(_console, getFormattedMessage(message));
  }
}
function errorWhen(condition, message) {
  if (condition && !visitedMessages.has(message)) {
    var _console2;
    visitedMessages.add(message);
    (_console2 = console).error.apply(_console2, getFormattedMessage(message));
  }
}
function validateTargets(targets) {
  var didPassFalsyValue = !targets;
  var didPassPlainObject = Object.prototype.toString.call(targets) === "[object Object]" && !targets.addEventListener;
  errorWhen(didPassFalsyValue, ["tippy() was passed", "`" + String(targets) + "`", "as its targets (first) argument. Valid types are: String, Element,", "Element[], or NodeList."].join(" "));
  errorWhen(didPassPlainObject, ["tippy() was passed a plain object which is not supported as an argument", "for virtual positioning. Use props.getReferenceClientRect instead."].join(" "));
}
var pluginProps = {
  animateFill: false,
  followCursor: false,
  inlinePositioning: false,
  sticky: false
};
var renderProps = {
  allowHTML: false,
  animation: "fade",
  arrow: true,
  content: "",
  inertia: false,
  maxWidth: 350,
  role: "tooltip",
  theme: "",
  zIndex: 9999
};
var defaultProps = Object.assign({
  appendTo: TIPPY_DEFAULT_APPEND_TO,
  aria: {
    content: "auto",
    expanded: "auto"
  },
  delay: 0,
  duration: [300, 250],
  getReferenceClientRect: null,
  hideOnClick: true,
  ignoreAttributes: false,
  interactive: false,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  moveTransition: "",
  offset: [0, 10],
  onAfterUpdate: function onAfterUpdate() {
  },
  onBeforeUpdate: function onBeforeUpdate() {
  },
  onCreate: function onCreate() {
  },
  onDestroy: function onDestroy() {
  },
  onHidden: function onHidden() {
  },
  onHide: function onHide() {
  },
  onMount: function onMount() {
  },
  onShow: function onShow() {
  },
  onShown: function onShown() {
  },
  onTrigger: function onTrigger() {
  },
  onUntrigger: function onUntrigger() {
  },
  onClickOutside: function onClickOutside() {
  },
  placement: "top",
  plugins: [],
  popperOptions: {},
  render: null,
  showOnCreate: false,
  touch: true,
  trigger: "mouseenter focus",
  triggerTarget: null
}, pluginProps, renderProps);
var defaultKeys = Object.keys(defaultProps);
var setDefaultProps = function setDefaultProps2(partialProps) {
  if (true) {
    validateProps(partialProps, []);
  }
  var keys = Object.keys(partialProps);
  keys.forEach(function(key) {
    defaultProps[key] = partialProps[key];
  });
};
function getExtendedPassedProps(passedProps) {
  var plugins = passedProps.plugins || [];
  var pluginProps2 = plugins.reduce(function(acc, plugin) {
    var name = plugin.name, defaultValue = plugin.defaultValue;
    if (name) {
      var _name;
      acc[name] = passedProps[name] !== void 0 ? passedProps[name] : (_name = defaultProps[name]) != null ? _name : defaultValue;
    }
    return acc;
  }, {});
  return Object.assign({}, passedProps, pluginProps2);
}
function getDataAttributeProps(reference2, plugins) {
  var propKeys = plugins ? Object.keys(getExtendedPassedProps(Object.assign({}, defaultProps, {
    plugins
  }))) : defaultKeys;
  var props = propKeys.reduce(function(acc, key) {
    var valueAsString = (reference2.getAttribute("data-tippy-" + key) || "").trim();
    if (!valueAsString) {
      return acc;
    }
    if (key === "content") {
      acc[key] = valueAsString;
    } else {
      try {
        acc[key] = JSON.parse(valueAsString);
      } catch (e2) {
        acc[key] = valueAsString;
      }
    }
    return acc;
  }, {});
  return props;
}
function evaluateProps(reference2, props) {
  var out = Object.assign({}, props, {
    content: invokeWithArgsOrReturn(props.content, [reference2])
  }, props.ignoreAttributes ? {} : getDataAttributeProps(reference2, props.plugins));
  out.aria = Object.assign({}, defaultProps.aria, out.aria);
  out.aria = {
    expanded: out.aria.expanded === "auto" ? props.interactive : out.aria.expanded,
    content: out.aria.content === "auto" ? props.interactive ? null : "describedby" : out.aria.content
  };
  return out;
}
function validateProps(partialProps, plugins) {
  if (partialProps === void 0) {
    partialProps = {};
  }
  if (plugins === void 0) {
    plugins = [];
  }
  var keys = Object.keys(partialProps);
  keys.forEach(function(prop) {
    var nonPluginProps = removeProperties(defaultProps, Object.keys(pluginProps));
    var didPassUnknownProp = !hasOwnProperty(nonPluginProps, prop);
    if (didPassUnknownProp) {
      didPassUnknownProp = plugins.filter(function(plugin) {
        return plugin.name === prop;
      }).length === 0;
    }
    warnWhen(didPassUnknownProp, ["`" + prop + "`", "is not a valid prop. You may have spelled it incorrectly, or if it's", "a plugin, forgot to pass it in an array as props.plugins.", "\n\n", "All props: https://atomiks.github.io/tippyjs/v6/all-props/\n", "Plugins: https://atomiks.github.io/tippyjs/v6/plugins/"].join(" "));
  });
}
var innerHTML = function innerHTML2() {
  return "innerHTML";
};
function dangerouslySetInnerHTML(element, html) {
  element[innerHTML()] = html;
}
function createArrowElement(value) {
  var arrow2 = div();
  if (value === true) {
    arrow2.className = ARROW_CLASS;
  } else {
    arrow2.className = SVG_ARROW_CLASS;
    if (isElement3(value)) {
      arrow2.appendChild(value);
    } else {
      dangerouslySetInnerHTML(arrow2, value);
    }
  }
  return arrow2;
}
function setContent(content, props) {
  if (isElement3(props.content)) {
    dangerouslySetInnerHTML(content, "");
    content.appendChild(props.content);
  } else if (typeof props.content !== "function") {
    if (props.allowHTML) {
      dangerouslySetInnerHTML(content, props.content);
    } else {
      content.textContent = props.content;
    }
  }
}
function getChildren(popper2) {
  var box = popper2.firstElementChild;
  var boxChildren = arrayFrom(box.children);
  return {
    box,
    content: boxChildren.find(function(node2) {
      return node2.classList.contains(CONTENT_CLASS);
    }),
    arrow: boxChildren.find(function(node2) {
      return node2.classList.contains(ARROW_CLASS) || node2.classList.contains(SVG_ARROW_CLASS);
    }),
    backdrop: boxChildren.find(function(node2) {
      return node2.classList.contains(BACKDROP_CLASS);
    })
  };
}
function render(instance) {
  var popper2 = div();
  var box = div();
  box.className = BOX_CLASS;
  box.setAttribute("data-state", "hidden");
  box.setAttribute("tabindex", "-1");
  var content = div();
  content.className = CONTENT_CLASS;
  content.setAttribute("data-state", "hidden");
  setContent(content, instance.props);
  popper2.appendChild(box);
  box.appendChild(content);
  onUpdate(instance.props, instance.props);
  function onUpdate(prevProps, nextProps) {
    var _getChildren = getChildren(popper2), box2 = _getChildren.box, content2 = _getChildren.content, arrow2 = _getChildren.arrow;
    if (nextProps.theme) {
      box2.setAttribute("data-theme", nextProps.theme);
    } else {
      box2.removeAttribute("data-theme");
    }
    if (typeof nextProps.animation === "string") {
      box2.setAttribute("data-animation", nextProps.animation);
    } else {
      box2.removeAttribute("data-animation");
    }
    if (nextProps.inertia) {
      box2.setAttribute("data-inertia", "");
    } else {
      box2.removeAttribute("data-inertia");
    }
    box2.style.maxWidth = typeof nextProps.maxWidth === "number" ? nextProps.maxWidth + "px" : nextProps.maxWidth;
    if (nextProps.role) {
      box2.setAttribute("role", nextProps.role);
    } else {
      box2.removeAttribute("role");
    }
    if (prevProps.content !== nextProps.content || prevProps.allowHTML !== nextProps.allowHTML) {
      setContent(content2, instance.props);
    }
    if (nextProps.arrow) {
      if (!arrow2) {
        box2.appendChild(createArrowElement(nextProps.arrow));
      } else if (prevProps.arrow !== nextProps.arrow) {
        box2.removeChild(arrow2);
        box2.appendChild(createArrowElement(nextProps.arrow));
      }
    } else if (arrow2) {
      box2.removeChild(arrow2);
    }
  }
  return {
    popper: popper2,
    onUpdate
  };
}
render.$$tippy = true;
var idCounter = 1;
var mouseMoveListeners = [];
var mountedInstances = [];
function createTippy(reference2, passedProps) {
  var props = evaluateProps(reference2, Object.assign({}, defaultProps, getExtendedPassedProps(removeUndefinedProps(passedProps))));
  var showTimeout;
  var hideTimeout;
  var scheduleHideAnimationFrame;
  var isVisibleFromClick = false;
  var didHideDueToDocumentMouseDown = false;
  var didTouchMove = false;
  var ignoreOnFirstUpdate = false;
  var lastTriggerEvent;
  var currentTransitionEndListener;
  var onFirstUpdate;
  var listeners = [];
  var debouncedOnMouseMove = debounce3(onMouseMove, props.interactiveDebounce);
  var currentTarget;
  var id = idCounter++;
  var popperInstance = null;
  var plugins = unique(props.plugins);
  var state = {
    isEnabled: true,
    isVisible: false,
    isDestroyed: false,
    isMounted: false,
    isShown: false
  };
  var instance = {
    id,
    reference: reference2,
    popper: div(),
    popperInstance,
    props,
    state,
    plugins,
    clearDelayTimeouts,
    setProps,
    setContent: setContent2,
    show,
    hide: hide2,
    hideWithInteractivity,
    enable,
    disable,
    unmount,
    destroy
  };
  if (!props.render) {
    if (true) {
      errorWhen(true, "render() function has not been supplied.");
    }
    return instance;
  }
  var _props$render = props.render(instance), popper2 = _props$render.popper, onUpdate = _props$render.onUpdate;
  popper2.setAttribute("data-tippy-root", "");
  popper2.id = "tippy-" + instance.id;
  instance.popper = popper2;
  reference2._tippy = instance;
  popper2._tippy = instance;
  var pluginsHooks = plugins.map(function(plugin) {
    return plugin.fn(instance);
  });
  var hasAriaExpanded = reference2.hasAttribute("aria-expanded");
  addListeners();
  handleAriaExpandedAttribute();
  handleStyles();
  invokeHook("onCreate", [instance]);
  if (props.showOnCreate) {
    scheduleShow();
  }
  popper2.addEventListener("mouseenter", function() {
    if (instance.props.interactive && instance.state.isVisible) {
      instance.clearDelayTimeouts();
    }
  });
  popper2.addEventListener("mouseleave", function() {
    if (instance.props.interactive && instance.props.trigger.indexOf("mouseenter") >= 0) {
      getDocument().addEventListener("mousemove", debouncedOnMouseMove);
    }
  });
  return instance;
  function getNormalizedTouchSettings() {
    var touch = instance.props.touch;
    return Array.isArray(touch) ? touch : [touch, 0];
  }
  function getIsCustomTouchBehavior() {
    return getNormalizedTouchSettings()[0] === "hold";
  }
  function getIsDefaultRenderFn() {
    var _instance$props$rende;
    return !!((_instance$props$rende = instance.props.render) != null && _instance$props$rende.$$tippy);
  }
  function getCurrentTarget() {
    return currentTarget || reference2;
  }
  function getDocument() {
    var parent = getCurrentTarget().parentNode;
    return parent ? getOwnerDocument(parent) : document;
  }
  function getDefaultTemplateChildren() {
    return getChildren(popper2);
  }
  function getDelay(isShow) {
    if (instance.state.isMounted && !instance.state.isVisible || currentInput.isTouch || lastTriggerEvent && lastTriggerEvent.type === "focus") {
      return 0;
    }
    return getValueAtIndexOrReturn(instance.props.delay, isShow ? 0 : 1, defaultProps.delay);
  }
  function handleStyles(fromHide) {
    if (fromHide === void 0) {
      fromHide = false;
    }
    popper2.style.pointerEvents = instance.props.interactive && !fromHide ? "" : "none";
    popper2.style.zIndex = "" + instance.props.zIndex;
  }
  function invokeHook(hook, args, shouldInvokePropsHook) {
    if (shouldInvokePropsHook === void 0) {
      shouldInvokePropsHook = true;
    }
    pluginsHooks.forEach(function(pluginHooks) {
      if (pluginHooks[hook]) {
        pluginHooks[hook].apply(pluginHooks, args);
      }
    });
    if (shouldInvokePropsHook) {
      var _instance$props;
      (_instance$props = instance.props)[hook].apply(_instance$props, args);
    }
  }
  function handleAriaContentAttribute() {
    var aria = instance.props.aria;
    if (!aria.content) {
      return;
    }
    var attr = "aria-" + aria.content;
    var id2 = popper2.id;
    var nodes = normalizeToArray(instance.props.triggerTarget || reference2);
    nodes.forEach(function(node2) {
      var currentValue = node2.getAttribute(attr);
      if (instance.state.isVisible) {
        node2.setAttribute(attr, currentValue ? currentValue + " " + id2 : id2);
      } else {
        var nextValue = currentValue && currentValue.replace(id2, "").trim();
        if (nextValue) {
          node2.setAttribute(attr, nextValue);
        } else {
          node2.removeAttribute(attr);
        }
      }
    });
  }
  function handleAriaExpandedAttribute() {
    if (hasAriaExpanded || !instance.props.aria.expanded) {
      return;
    }
    var nodes = normalizeToArray(instance.props.triggerTarget || reference2);
    nodes.forEach(function(node2) {
      if (instance.props.interactive) {
        node2.setAttribute("aria-expanded", instance.state.isVisible && node2 === getCurrentTarget() ? "true" : "false");
      } else {
        node2.removeAttribute("aria-expanded");
      }
    });
  }
  function cleanupInteractiveMouseListeners() {
    getDocument().removeEventListener("mousemove", debouncedOnMouseMove);
    mouseMoveListeners = mouseMoveListeners.filter(function(listener) {
      return listener !== debouncedOnMouseMove;
    });
  }
  function onDocumentPress(event) {
    if (currentInput.isTouch) {
      if (didTouchMove || event.type === "mousedown") {
        return;
      }
    }
    var actualTarget = event.composedPath && event.composedPath()[0] || event.target;
    if (instance.props.interactive && actualContains(popper2, actualTarget)) {
      return;
    }
    if (normalizeToArray(instance.props.triggerTarget || reference2).some(function(el) {
      return actualContains(el, actualTarget);
    })) {
      if (currentInput.isTouch) {
        return;
      }
      if (instance.state.isVisible && instance.props.trigger.indexOf("click") >= 0) {
        return;
      }
    } else {
      invokeHook("onClickOutside", [instance, event]);
    }
    if (instance.props.hideOnClick === true) {
      instance.clearDelayTimeouts();
      instance.hide();
      didHideDueToDocumentMouseDown = true;
      setTimeout(function() {
        didHideDueToDocumentMouseDown = false;
      });
      if (!instance.state.isMounted) {
        removeDocumentPress();
      }
    }
  }
  function onTouchMove() {
    didTouchMove = true;
  }
  function onTouchStart() {
    didTouchMove = false;
  }
  function addDocumentPress() {
    var doc = getDocument();
    doc.addEventListener("mousedown", onDocumentPress, true);
    doc.addEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
    doc.addEventListener("touchstart", onTouchStart, TOUCH_OPTIONS);
    doc.addEventListener("touchmove", onTouchMove, TOUCH_OPTIONS);
  }
  function removeDocumentPress() {
    var doc = getDocument();
    doc.removeEventListener("mousedown", onDocumentPress, true);
    doc.removeEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
    doc.removeEventListener("touchstart", onTouchStart, TOUCH_OPTIONS);
    doc.removeEventListener("touchmove", onTouchMove, TOUCH_OPTIONS);
  }
  function onTransitionedOut(duration, callback) {
    onTransitionEnd(duration, function() {
      if (!instance.state.isVisible && popper2.parentNode && popper2.parentNode.contains(popper2)) {
        callback();
      }
    });
  }
  function onTransitionedIn(duration, callback) {
    onTransitionEnd(duration, callback);
  }
  function onTransitionEnd(duration, callback) {
    var box = getDefaultTemplateChildren().box;
    function listener(event) {
      if (event.target === box) {
        updateTransitionEndListener(box, "remove", listener);
        callback();
      }
    }
    if (duration === 0) {
      return callback();
    }
    updateTransitionEndListener(box, "remove", currentTransitionEndListener);
    updateTransitionEndListener(box, "add", listener);
    currentTransitionEndListener = listener;
  }
  function on3(eventType, handler, options) {
    if (options === void 0) {
      options = false;
    }
    var nodes = normalizeToArray(instance.props.triggerTarget || reference2);
    nodes.forEach(function(node2) {
      node2.addEventListener(eventType, handler, options);
      listeners.push({
        node: node2,
        eventType,
        handler,
        options
      });
    });
  }
  function addListeners() {
    if (getIsCustomTouchBehavior()) {
      on3("touchstart", onTrigger2, {
        passive: true
      });
      on3("touchend", onMouseLeave, {
        passive: true
      });
    }
    splitBySpaces(instance.props.trigger).forEach(function(eventType) {
      if (eventType === "manual") {
        return;
      }
      on3(eventType, onTrigger2);
      switch (eventType) {
        case "mouseenter":
          on3("mouseleave", onMouseLeave);
          break;
        case "focus":
          on3(isIE11 ? "focusout" : "blur", onBlurOrFocusOut);
          break;
        case "focusin":
          on3("focusout", onBlurOrFocusOut);
          break;
      }
    });
  }
  function removeListeners() {
    listeners.forEach(function(_ref) {
      var node2 = _ref.node, eventType = _ref.eventType, handler = _ref.handler, options = _ref.options;
      node2.removeEventListener(eventType, handler, options);
    });
    listeners = [];
  }
  function onTrigger2(event) {
    var _lastTriggerEvent;
    var shouldScheduleClickHide = false;
    if (!instance.state.isEnabled || isEventListenerStopped(event) || didHideDueToDocumentMouseDown) {
      return;
    }
    var wasFocused = ((_lastTriggerEvent = lastTriggerEvent) == null ? void 0 : _lastTriggerEvent.type) === "focus";
    lastTriggerEvent = event;
    currentTarget = event.currentTarget;
    handleAriaExpandedAttribute();
    if (!instance.state.isVisible && isMouseEvent(event)) {
      mouseMoveListeners.forEach(function(listener) {
        return listener(event);
      });
    }
    if (event.type === "click" && (instance.props.trigger.indexOf("mouseenter") < 0 || isVisibleFromClick) && instance.props.hideOnClick !== false && instance.state.isVisible) {
      shouldScheduleClickHide = true;
    } else {
      scheduleShow(event);
    }
    if (event.type === "click") {
      isVisibleFromClick = !shouldScheduleClickHide;
    }
    if (shouldScheduleClickHide && !wasFocused) {
      scheduleHide(event);
    }
  }
  function onMouseMove(event) {
    var target = event.target;
    var isCursorOverReferenceOrPopper = getCurrentTarget().contains(target) || popper2.contains(target);
    if (event.type === "mousemove" && isCursorOverReferenceOrPopper) {
      return;
    }
    var popperTreeData = getNestedPopperTree().concat(popper2).map(function(popper3) {
      var _instance$popperInsta;
      var instance2 = popper3._tippy;
      var state2 = (_instance$popperInsta = instance2.popperInstance) == null ? void 0 : _instance$popperInsta.state;
      if (state2) {
        return {
          popperRect: popper3.getBoundingClientRect(),
          popperState: state2,
          props
        };
      }
      return null;
    }).filter(Boolean);
    if (isCursorOutsideInteractiveBorder(popperTreeData, event)) {
      cleanupInteractiveMouseListeners();
      scheduleHide(event);
    }
  }
  function onMouseLeave(event) {
    var shouldBail = isEventListenerStopped(event) || instance.props.trigger.indexOf("click") >= 0 && isVisibleFromClick;
    if (shouldBail) {
      return;
    }
    if (instance.props.interactive) {
      instance.hideWithInteractivity(event);
      return;
    }
    scheduleHide(event);
  }
  function onBlurOrFocusOut(event) {
    if (instance.props.trigger.indexOf("focusin") < 0 && event.target !== getCurrentTarget()) {
      return;
    }
    if (instance.props.interactive && event.relatedTarget && popper2.contains(event.relatedTarget)) {
      return;
    }
    scheduleHide(event);
  }
  function isEventListenerStopped(event) {
    return currentInput.isTouch ? getIsCustomTouchBehavior() !== event.type.indexOf("touch") >= 0 : false;
  }
  function createPopperInstance() {
    destroyPopperInstance();
    var _instance$props2 = instance.props, popperOptions = _instance$props2.popperOptions, placement = _instance$props2.placement, offset2 = _instance$props2.offset, getReferenceClientRect = _instance$props2.getReferenceClientRect, moveTransition = _instance$props2.moveTransition;
    var arrow2 = getIsDefaultRenderFn() ? getChildren(popper2).arrow : null;
    var computedReference = getReferenceClientRect ? {
      getBoundingClientRect: getReferenceClientRect,
      contextElement: getReferenceClientRect.contextElement || getCurrentTarget()
    } : reference2;
    var tippyModifier = {
      name: "$$tippy",
      enabled: true,
      phase: "beforeWrite",
      requires: ["computeStyles"],
      fn: function fn5(_ref2) {
        var state2 = _ref2.state;
        if (getIsDefaultRenderFn()) {
          var _getDefaultTemplateCh = getDefaultTemplateChildren(), box = _getDefaultTemplateCh.box;
          ["placement", "reference-hidden", "escaped"].forEach(function(attr) {
            if (attr === "placement") {
              box.setAttribute("data-placement", state2.placement);
            } else {
              if (state2.attributes.popper["data-popper-" + attr]) {
                box.setAttribute("data-" + attr, "");
              } else {
                box.removeAttribute("data-" + attr);
              }
            }
          });
          state2.attributes.popper = {};
        }
      }
    };
    var modifiers = [{
      name: "offset",
      options: {
        offset: offset2
      }
    }, {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    }, {
      name: "flip",
      options: {
        padding: 5
      }
    }, {
      name: "computeStyles",
      options: {
        adaptive: !moveTransition
      }
    }, tippyModifier];
    if (getIsDefaultRenderFn() && arrow2) {
      modifiers.push({
        name: "arrow",
        options: {
          element: arrow2,
          padding: 3
        }
      });
    }
    modifiers.push.apply(modifiers, (popperOptions == null ? void 0 : popperOptions.modifiers) || []);
    instance.popperInstance = createPopper(computedReference, popper2, Object.assign({}, popperOptions, {
      placement,
      onFirstUpdate,
      modifiers
    }));
  }
  function destroyPopperInstance() {
    if (instance.popperInstance) {
      instance.popperInstance.destroy();
      instance.popperInstance = null;
    }
  }
  function mount() {
    var appendTo = instance.props.appendTo;
    var parentNode;
    var node2 = getCurrentTarget();
    if (instance.props.interactive && appendTo === TIPPY_DEFAULT_APPEND_TO || appendTo === "parent") {
      parentNode = node2.parentNode;
    } else {
      parentNode = invokeWithArgsOrReturn(appendTo, [node2]);
    }
    if (!parentNode.contains(popper2)) {
      parentNode.appendChild(popper2);
    }
    instance.state.isMounted = true;
    createPopperInstance();
    if (true) {
      warnWhen(instance.props.interactive && appendTo === defaultProps.appendTo && node2.nextElementSibling !== popper2, ["Interactive tippy element may not be accessible via keyboard", "navigation because it is not directly after the reference element", "in the DOM source order.", "\n\n", "Using a wrapper <div> or <span> tag around the reference element", "solves this by creating a new parentNode context.", "\n\n", "Specifying `appendTo: document.body` silences this warning, but it", "assumes you are using a focus management solution to handle", "keyboard navigation.", "\n\n", "See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity"].join(" "));
    }
  }
  function getNestedPopperTree() {
    return arrayFrom(popper2.querySelectorAll("[data-tippy-root]"));
  }
  function scheduleShow(event) {
    instance.clearDelayTimeouts();
    if (event) {
      invokeHook("onTrigger", [instance, event]);
    }
    addDocumentPress();
    var delay = getDelay(true);
    var _getNormalizedTouchSe = getNormalizedTouchSettings(), touchValue = _getNormalizedTouchSe[0], touchDelay = _getNormalizedTouchSe[1];
    if (currentInput.isTouch && touchValue === "hold" && touchDelay) {
      delay = touchDelay;
    }
    if (delay) {
      showTimeout = setTimeout(function() {
        instance.show();
      }, delay);
    } else {
      instance.show();
    }
  }
  function scheduleHide(event) {
    instance.clearDelayTimeouts();
    invokeHook("onUntrigger", [instance, event]);
    if (!instance.state.isVisible) {
      removeDocumentPress();
      return;
    }
    if (instance.props.trigger.indexOf("mouseenter") >= 0 && instance.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(event.type) >= 0 && isVisibleFromClick) {
      return;
    }
    var delay = getDelay(false);
    if (delay) {
      hideTimeout = setTimeout(function() {
        if (instance.state.isVisible) {
          instance.hide();
        }
      }, delay);
    } else {
      scheduleHideAnimationFrame = requestAnimationFrame(function() {
        instance.hide();
      });
    }
  }
  function enable() {
    instance.state.isEnabled = true;
  }
  function disable() {
    instance.hide();
    instance.state.isEnabled = false;
  }
  function clearDelayTimeouts() {
    clearTimeout(showTimeout);
    clearTimeout(hideTimeout);
    cancelAnimationFrame(scheduleHideAnimationFrame);
  }
  function setProps(partialProps) {
    if (true) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("setProps"));
    }
    if (instance.state.isDestroyed) {
      return;
    }
    invokeHook("onBeforeUpdate", [instance, partialProps]);
    removeListeners();
    var prevProps = instance.props;
    var nextProps = evaluateProps(reference2, Object.assign({}, prevProps, removeUndefinedProps(partialProps), {
      ignoreAttributes: true
    }));
    instance.props = nextProps;
    addListeners();
    if (prevProps.interactiveDebounce !== nextProps.interactiveDebounce) {
      cleanupInteractiveMouseListeners();
      debouncedOnMouseMove = debounce3(onMouseMove, nextProps.interactiveDebounce);
    }
    if (prevProps.triggerTarget && !nextProps.triggerTarget) {
      normalizeToArray(prevProps.triggerTarget).forEach(function(node2) {
        node2.removeAttribute("aria-expanded");
      });
    } else if (nextProps.triggerTarget) {
      reference2.removeAttribute("aria-expanded");
    }
    handleAriaExpandedAttribute();
    handleStyles();
    if (onUpdate) {
      onUpdate(prevProps, nextProps);
    }
    if (instance.popperInstance) {
      createPopperInstance();
      getNestedPopperTree().forEach(function(nestedPopper) {
        requestAnimationFrame(nestedPopper._tippy.popperInstance.forceUpdate);
      });
    }
    invokeHook("onAfterUpdate", [instance, partialProps]);
  }
  function setContent2(content) {
    instance.setProps({
      content
    });
  }
  function show() {
    if (true) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("show"));
    }
    var isAlreadyVisible = instance.state.isVisible;
    var isDestroyed = instance.state.isDestroyed;
    var isDisabled = !instance.state.isEnabled;
    var isTouchAndTouchDisabled = currentInput.isTouch && !instance.props.touch;
    var duration = getValueAtIndexOrReturn(instance.props.duration, 0, defaultProps.duration);
    if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) {
      return;
    }
    if (getCurrentTarget().hasAttribute("disabled")) {
      return;
    }
    invokeHook("onShow", [instance], false);
    if (instance.props.onShow(instance) === false) {
      return;
    }
    instance.state.isVisible = true;
    if (getIsDefaultRenderFn()) {
      popper2.style.visibility = "visible";
    }
    handleStyles();
    addDocumentPress();
    if (!instance.state.isMounted) {
      popper2.style.transition = "none";
    }
    if (getIsDefaultRenderFn()) {
      var _getDefaultTemplateCh2 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh2.box, content = _getDefaultTemplateCh2.content;
      setTransitionDuration([box, content], 0);
    }
    onFirstUpdate = function onFirstUpdate2() {
      var _instance$popperInsta2;
      if (!instance.state.isVisible || ignoreOnFirstUpdate) {
        return;
      }
      ignoreOnFirstUpdate = true;
      void popper2.offsetHeight;
      popper2.style.transition = instance.props.moveTransition;
      if (getIsDefaultRenderFn() && instance.props.animation) {
        var _getDefaultTemplateCh3 = getDefaultTemplateChildren(), _box = _getDefaultTemplateCh3.box, _content = _getDefaultTemplateCh3.content;
        setTransitionDuration([_box, _content], duration);
        setVisibilityState([_box, _content], "visible");
      }
      handleAriaContentAttribute();
      handleAriaExpandedAttribute();
      pushIfUnique(mountedInstances, instance);
      (_instance$popperInsta2 = instance.popperInstance) == null ? void 0 : _instance$popperInsta2.forceUpdate();
      invokeHook("onMount", [instance]);
      if (instance.props.animation && getIsDefaultRenderFn()) {
        onTransitionedIn(duration, function() {
          instance.state.isShown = true;
          invokeHook("onShown", [instance]);
        });
      }
    };
    mount();
  }
  function hide2() {
    if (true) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("hide"));
    }
    var isAlreadyHidden = !instance.state.isVisible;
    var isDestroyed = instance.state.isDestroyed;
    var isDisabled = !instance.state.isEnabled;
    var duration = getValueAtIndexOrReturn(instance.props.duration, 1, defaultProps.duration);
    if (isAlreadyHidden || isDestroyed || isDisabled) {
      return;
    }
    invokeHook("onHide", [instance], false);
    if (instance.props.onHide(instance) === false) {
      return;
    }
    instance.state.isVisible = false;
    instance.state.isShown = false;
    ignoreOnFirstUpdate = false;
    isVisibleFromClick = false;
    if (getIsDefaultRenderFn()) {
      popper2.style.visibility = "hidden";
    }
    cleanupInteractiveMouseListeners();
    removeDocumentPress();
    handleStyles(true);
    if (getIsDefaultRenderFn()) {
      var _getDefaultTemplateCh4 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh4.box, content = _getDefaultTemplateCh4.content;
      if (instance.props.animation) {
        setTransitionDuration([box, content], duration);
        setVisibilityState([box, content], "hidden");
      }
    }
    handleAriaContentAttribute();
    handleAriaExpandedAttribute();
    if (instance.props.animation) {
      if (getIsDefaultRenderFn()) {
        onTransitionedOut(duration, instance.unmount);
      }
    } else {
      instance.unmount();
    }
  }
  function hideWithInteractivity(event) {
    if (true) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("hideWithInteractivity"));
    }
    getDocument().addEventListener("mousemove", debouncedOnMouseMove);
    pushIfUnique(mouseMoveListeners, debouncedOnMouseMove);
    debouncedOnMouseMove(event);
  }
  function unmount() {
    if (true) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("unmount"));
    }
    if (instance.state.isVisible) {
      instance.hide();
    }
    if (!instance.state.isMounted) {
      return;
    }
    destroyPopperInstance();
    getNestedPopperTree().forEach(function(nestedPopper) {
      nestedPopper._tippy.unmount();
    });
    if (popper2.parentNode) {
      popper2.parentNode.removeChild(popper2);
    }
    mountedInstances = mountedInstances.filter(function(i2) {
      return i2 !== instance;
    });
    instance.state.isMounted = false;
    invokeHook("onHidden", [instance]);
  }
  function destroy() {
    if (true) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("destroy"));
    }
    if (instance.state.isDestroyed) {
      return;
    }
    instance.clearDelayTimeouts();
    instance.unmount();
    removeListeners();
    delete reference2._tippy;
    instance.state.isDestroyed = true;
    invokeHook("onDestroy", [instance]);
  }
}
function tippy(targets, optionalProps) {
  if (optionalProps === void 0) {
    optionalProps = {};
  }
  var plugins = defaultProps.plugins.concat(optionalProps.plugins || []);
  if (true) {
    validateTargets(targets);
    validateProps(optionalProps, plugins);
  }
  bindGlobalEventListeners();
  var passedProps = Object.assign({}, optionalProps, {
    plugins
  });
  var elements = getArrayOfElements(targets);
  if (true) {
    var isSingleContentElement = isElement3(passedProps.content);
    var isMoreThanOneReferenceElement = elements.length > 1;
    warnWhen(isSingleContentElement && isMoreThanOneReferenceElement, ["tippy() was passed an Element as the `content` prop, but more than", "one tippy instance was created by this invocation. This means the", "content element will only be appended to the last tippy instance.", "\n\n", "Instead, pass the .innerHTML of the element, or use a function that", "returns a cloned version of the element instead.", "\n\n", "1) content: element.innerHTML\n", "2) content: () => element.cloneNode(true)"].join(" "));
  }
  var instances = elements.reduce(function(acc, reference2) {
    var instance = reference2 && createTippy(reference2, passedProps);
    if (instance) {
      acc.push(instance);
    }
    return acc;
  }, []);
  return isElement3(targets) ? instances[0] : instances;
}
tippy.defaultProps = defaultProps;
tippy.setDefaultProps = setDefaultProps;
tippy.currentInput = currentInput;
var applyStylesModifier = Object.assign({}, applyStyles_default, {
  effect: function effect4(_ref) {
    var state = _ref.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }
  }
});
tippy.setDefaultProps({
  render
});
var tippy_esm_default = tippy;

// node_modules/@tippyjs/react/dist/tippy-react.esm.js
var import_react2 = __toESM(require_react());
var import_react_dom2 = __toESM(require_react_dom());
function _objectWithoutPropertiesLoose3(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var isBrowser2 = typeof window !== "undefined" && typeof document !== "undefined";
function preserveRef(ref, node2) {
  if (ref) {
    if (typeof ref === "function") {
      ref(node2);
    }
    if ({}.hasOwnProperty.call(ref, "current")) {
      ref.current = node2;
    }
  }
}
function ssrSafeCreateDiv() {
  return isBrowser2 && document.createElement("div");
}
function toDataAttributes(attrs) {
  var dataAttrs = {
    "data-placement": attrs.placement
  };
  if (attrs.referenceHidden) {
    dataAttrs["data-reference-hidden"] = "";
  }
  if (attrs.escaped) {
    dataAttrs["data-escaped"] = "";
  }
  return dataAttrs;
}
function deepEqual(x2, y3) {
  if (x2 === y3) {
    return true;
  } else if (typeof x2 === "object" && x2 != null && typeof y3 === "object" && y3 != null) {
    if (Object.keys(x2).length !== Object.keys(y3).length) {
      return false;
    }
    for (var prop in x2) {
      if (y3.hasOwnProperty(prop)) {
        if (!deepEqual(x2[prop], y3[prop])) {
          return false;
        }
      } else {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}
function uniqueByShape(arr) {
  var output = [];
  arr.forEach(function(item) {
    if (!output.find(function(outputItem) {
      return deepEqual(item, outputItem);
    })) {
      output.push(item);
    }
  });
  return output;
}
function deepPreserveProps(instanceProps, componentProps) {
  var _instanceProps$popper, _componentProps$poppe;
  return Object.assign({}, componentProps, {
    popperOptions: Object.assign({}, instanceProps.popperOptions, componentProps.popperOptions, {
      modifiers: uniqueByShape([].concat(((_instanceProps$popper = instanceProps.popperOptions) == null ? void 0 : _instanceProps$popper.modifiers) || [], ((_componentProps$poppe = componentProps.popperOptions) == null ? void 0 : _componentProps$poppe.modifiers) || []))
    })
  });
}
var useIsomorphicLayoutEffect2 = isBrowser2 ? import_react2.useLayoutEffect : import_react2.useEffect;
function useMutableBox(initialValue) {
  var ref = (0, import_react2.useRef)();
  if (!ref.current) {
    ref.current = typeof initialValue === "function" ? initialValue() : initialValue;
  }
  return ref.current;
}
function updateClassName(box, action, classNames2) {
  classNames2.split(/\s+/).forEach(function(name) {
    if (name) {
      box.classList[action](name);
    }
  });
}
var classNamePlugin = {
  name: "className",
  defaultValue: "",
  fn: function fn3(instance) {
    var box = instance.popper.firstElementChild;
    var isDefaultRenderFn = function isDefaultRenderFn2() {
      var _instance$props$rende;
      return !!((_instance$props$rende = instance.props.render) == null ? void 0 : _instance$props$rende.$$tippy);
    };
    function add() {
      if (instance.props.className && !isDefaultRenderFn()) {
        if (true) {
          console.warn(["@tippyjs/react: Cannot use `className` prop in conjunction with", "`render` prop. Place the className on the element you are", "rendering."].join(" "));
        }
        return;
      }
      updateClassName(box, "add", instance.props.className);
    }
    function remove() {
      if (isDefaultRenderFn()) {
        updateClassName(box, "remove", instance.props.className);
      }
    }
    return {
      onCreate: add,
      onBeforeUpdate: remove,
      onAfterUpdate: add
    };
  }
};
function TippyGenerator(tippy2) {
  function Tippy(_ref) {
    var children = _ref.children, content = _ref.content, visible = _ref.visible, singleton = _ref.singleton, render2 = _ref.render, reference2 = _ref.reference, _ref$disabled = _ref.disabled, disabled = _ref$disabled === void 0 ? false : _ref$disabled, _ref$ignoreAttributes = _ref.ignoreAttributes, ignoreAttributes = _ref$ignoreAttributes === void 0 ? true : _ref$ignoreAttributes, __source = _ref.__source, __self = _ref.__self, restOfNativeProps = _objectWithoutPropertiesLoose3(_ref, ["children", "content", "visible", "singleton", "render", "reference", "disabled", "ignoreAttributes", "__source", "__self"]);
    var isControlledMode = visible !== void 0;
    var isSingletonMode = singleton !== void 0;
    var _useState = (0, import_react2.useState)(false), mounted = _useState[0], setMounted = _useState[1];
    var _useState2 = (0, import_react2.useState)({}), attrs = _useState2[0], setAttrs = _useState2[1];
    var _useState3 = (0, import_react2.useState)(), singletonContent = _useState3[0], setSingletonContent = _useState3[1];
    var mutableBox = useMutableBox(function() {
      return {
        container: ssrSafeCreateDiv(),
        renders: 1
      };
    });
    var props = Object.assign({
      ignoreAttributes
    }, restOfNativeProps, {
      content: mutableBox.container
    });
    if (isControlledMode) {
      if (true) {
        ["trigger", "hideOnClick", "showOnCreate"].forEach(function(nativeStateProp) {
          if (props[nativeStateProp] !== void 0) {
            console.warn(["@tippyjs/react: Cannot specify `" + nativeStateProp + "` prop in", "controlled mode (`visible` prop)"].join(" "));
          }
        });
      }
      props.trigger = "manual";
      props.hideOnClick = false;
    }
    if (isSingletonMode) {
      disabled = true;
    }
    var computedProps = props;
    var plugins = props.plugins || [];
    if (render2) {
      computedProps = Object.assign({}, props, {
        plugins: isSingletonMode && singleton.data != null ? [].concat(plugins, [{
          fn: function fn5() {
            return {
              onTrigger: function onTrigger2(instance, event) {
                var node2 = singleton.data.children.find(function(_ref2) {
                  var instance2 = _ref2.instance;
                  return instance2.reference === event.currentTarget;
                });
                instance.state.$$activeSingletonInstance = node2.instance;
                setSingletonContent(node2.content);
              }
            };
          }
        }]) : plugins,
        render: function render3() {
          return {
            popper: mutableBox.container
          };
        }
      });
    }
    var deps = [reference2].concat(children ? [children.type] : []);
    useIsomorphicLayoutEffect2(function() {
      var element = reference2;
      if (reference2 && reference2.hasOwnProperty("current")) {
        element = reference2.current;
      }
      var instance = tippy2(element || mutableBox.ref || ssrSafeCreateDiv(), Object.assign({}, computedProps, {
        plugins: [classNamePlugin].concat(props.plugins || [])
      }));
      mutableBox.instance = instance;
      if (disabled) {
        instance.disable();
      }
      if (visible) {
        instance.show();
      }
      if (isSingletonMode) {
        singleton.hook({
          instance,
          content,
          props: computedProps,
          setSingletonContent
        });
      }
      setMounted(true);
      return function() {
        instance.destroy();
        singleton == null ? void 0 : singleton.cleanup(instance);
      };
    }, deps);
    useIsomorphicLayoutEffect2(function() {
      var _instance$popperInsta;
      if (mutableBox.renders === 1) {
        mutableBox.renders++;
        return;
      }
      var instance = mutableBox.instance;
      instance.setProps(deepPreserveProps(instance.props, computedProps));
      (_instance$popperInsta = instance.popperInstance) == null ? void 0 : _instance$popperInsta.forceUpdate();
      if (disabled) {
        instance.disable();
      } else {
        instance.enable();
      }
      if (isControlledMode) {
        if (visible) {
          instance.show();
        } else {
          instance.hide();
        }
      }
      if (isSingletonMode) {
        singleton.hook({
          instance,
          content,
          props: computedProps,
          setSingletonContent
        });
      }
    });
    useIsomorphicLayoutEffect2(function() {
      var _instance$props$poppe;
      if (!render2) {
        return;
      }
      var instance = mutableBox.instance;
      instance.setProps({
        popperOptions: Object.assign({}, instance.props.popperOptions, {
          modifiers: [].concat((((_instance$props$poppe = instance.props.popperOptions) == null ? void 0 : _instance$props$poppe.modifiers) || []).filter(function(_ref3) {
            var name = _ref3.name;
            return name !== "$$tippyReact";
          }), [{
            name: "$$tippyReact",
            enabled: true,
            phase: "beforeWrite",
            requires: ["computeStyles"],
            fn: function fn5(_ref4) {
              var _state$modifiersData;
              var state = _ref4.state;
              var hideData = (_state$modifiersData = state.modifiersData) == null ? void 0 : _state$modifiersData.hide;
              if (attrs.placement !== state.placement || attrs.referenceHidden !== (hideData == null ? void 0 : hideData.isReferenceHidden) || attrs.escaped !== (hideData == null ? void 0 : hideData.hasPopperEscaped)) {
                setAttrs({
                  placement: state.placement,
                  referenceHidden: hideData == null ? void 0 : hideData.isReferenceHidden,
                  escaped: hideData == null ? void 0 : hideData.hasPopperEscaped
                });
              }
              state.attributes.popper = {};
            }
          }])
        })
      });
    }, [attrs.placement, attrs.referenceHidden, attrs.escaped].concat(deps));
    return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, children ? /* @__PURE__ */ (0, import_react2.cloneElement)(children, {
      ref: function ref(node2) {
        mutableBox.ref = node2;
        preserveRef(children.ref, node2);
      }
    }) : null, mounted && /* @__PURE__ */ (0, import_react_dom2.createPortal)(render2 ? render2(toDataAttributes(attrs), singletonContent, mutableBox.instance) : content, mutableBox.container));
  }
  return Tippy;
}
var forwardRef = function(Tippy, defaultProps3) {
  return /* @__PURE__ */ (0, import_react2.forwardRef)(function TippyWrapper(_ref, _ref2) {
    var children = _ref.children, props = _objectWithoutPropertiesLoose3(_ref, ["children"]);
    return /* @__PURE__ */ import_react2.default.createElement(Tippy, Object.assign({}, defaultProps3, props), children ? /* @__PURE__ */ (0, import_react2.cloneElement)(children, {
      ref: function ref(node2) {
        preserveRef(_ref2, node2);
        preserveRef(children.ref, node2);
      }
    }) : null);
  });
};
var index = /* @__PURE__ */ forwardRef(/* @__PURE__ */ TippyGenerator(tippy_esm_default));
var tippy_react_esm_default = index;

// node_modules/react-icons/md/index.esm.js
init_react();
function MdDesktopMac(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M0 0h24v24H0z" } }, { "tag": "path", "attr": { "d": "M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z" } }] })(props);
}
function MdSmartphone(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M0 0h24v24H0z" } }, { "tag": "path", "attr": { "d": "M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" } }] })(props);
}
function MdTabletMac(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M18.5 0h-14A2.5 2.5 0 002 2.5v19A2.5 2.5 0 004.5 24h14a2.5 2.5 0 002.5-2.5v-19A2.5 2.5 0 0018.5 0zm-7 23c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7.5-4H4V3h15v16z" } }] })(props);
}
function MdLooks3(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M.01 0h24v24h-24z" } }, { "tag": "path", "attr": { "d": "M19.01 3h-14c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 7.5c0 .83-.67 1.5-1.5 1.5.83 0 1.5.67 1.5 1.5V15a2 2 0 01-2 2h-4v-2h4v-2h-2v-2h2V9h-4V7h4a2 2 0 012 2v1.5z" } }] })(props);
}
function MdLooks4(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M0 0h24v24H0z" } }, { "tag": "path", "attr": { "d": "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 14h-2v-4H9V7h2v4h2V7h2v10z" } }] })(props);
}
function MdLooks5(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M0 0h24v24H0z" } }, { "tag": "path", "attr": { "d": "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 6h-4v2h2a2 2 0 012 2v2a2 2 0 01-2 2H9v-2h4v-2H9V7h6v2z" } }] })(props);
}
function MdLooks6(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M0 0h24v24H0z" } }, { "tag": "path", "attr": { "d": "M11 15h2v-2h-2v2zm8-12H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 6h-4v2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V9a2 2 0 012-2h4v2z" } }] })(props);
}
function MdLooksOne(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M0 0h24v24H0z" } }, { "tag": "path", "attr": { "d": "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h-2V7h4v10z" } }] })(props);
}
function MdLooksTwo(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M0 0h24v24H0z" } }, { "tag": "path", "attr": { "d": "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 8a2 2 0 01-2 2h-2v2h4v2H9v-4a2 2 0 012-2h2V9H9V7h4a2 2 0 012 2v2z" } }] })(props);
}

// node_modules/react-bricks/react-bricks.esm.js
var import_classnames2 = __toESM(require_classnames());

// node_modules/react-dropzone/dist/es/index.js
init_react();
var import_react3 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/file-selector/dist/es5/index.js
init_react();

// node_modules/file-selector/dist/es5/file-selector.js
init_react();

// node_modules/file-selector/node_modules/tslib/modules/index.js
init_react();
var import_tslib = __toESM(require_tslib(), 1);
var {
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __exportStar,
  __createBinding,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet
} = import_tslib.default;

// node_modules/file-selector/dist/es5/file.js
init_react();
var COMMON_MIME_TYPES = /* @__PURE__ */ new Map([
  ["aac", "audio/aac"],
  ["abw", "application/x-abiword"],
  ["arc", "application/x-freearc"],
  ["avif", "image/avif"],
  ["avi", "video/x-msvideo"],
  ["azw", "application/vnd.amazon.ebook"],
  ["bin", "application/octet-stream"],
  ["bmp", "image/bmp"],
  ["bz", "application/x-bzip"],
  ["bz2", "application/x-bzip2"],
  ["cda", "application/x-cdf"],
  ["csh", "application/x-csh"],
  ["css", "text/css"],
  ["csv", "text/csv"],
  ["doc", "application/msword"],
  ["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
  ["eot", "application/vnd.ms-fontobject"],
  ["epub", "application/epub+zip"],
  ["gz", "application/gzip"],
  ["gif", "image/gif"],
  ["htm", "text/html"],
  ["html", "text/html"],
  ["ico", "image/vnd.microsoft.icon"],
  ["ics", "text/calendar"],
  ["jar", "application/java-archive"],
  ["jpeg", "image/jpeg"],
  ["jpg", "image/jpeg"],
  ["js", "text/javascript"],
  ["json", "application/json"],
  ["jsonld", "application/ld+json"],
  ["mid", "audio/midi"],
  ["midi", "audio/midi"],
  ["mjs", "text/javascript"],
  ["mp3", "audio/mpeg"],
  ["mp4", "video/mp4"],
  ["mpeg", "video/mpeg"],
  ["mpkg", "application/vnd.apple.installer+xml"],
  ["odp", "application/vnd.oasis.opendocument.presentation"],
  ["ods", "application/vnd.oasis.opendocument.spreadsheet"],
  ["odt", "application/vnd.oasis.opendocument.text"],
  ["oga", "audio/ogg"],
  ["ogv", "video/ogg"],
  ["ogx", "application/ogg"],
  ["opus", "audio/opus"],
  ["otf", "font/otf"],
  ["png", "image/png"],
  ["pdf", "application/pdf"],
  ["php", "application/x-httpd-php"],
  ["ppt", "application/vnd.ms-powerpoint"],
  ["pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"],
  ["rar", "application/vnd.rar"],
  ["rtf", "application/rtf"],
  ["sh", "application/x-sh"],
  ["svg", "image/svg+xml"],
  ["swf", "application/x-shockwave-flash"],
  ["tar", "application/x-tar"],
  ["tif", "image/tiff"],
  ["tiff", "image/tiff"],
  ["ts", "video/mp2t"],
  ["ttf", "font/ttf"],
  ["txt", "text/plain"],
  ["vsd", "application/vnd.visio"],
  ["wav", "audio/wav"],
  ["weba", "audio/webm"],
  ["webm", "video/webm"],
  ["webp", "image/webp"],
  ["woff", "font/woff"],
  ["woff2", "font/woff2"],
  ["xhtml", "application/xhtml+xml"],
  ["xls", "application/vnd.ms-excel"],
  ["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
  ["xml", "application/xml"],
  ["xul", "application/vnd.mozilla.xul+xml"],
  ["zip", "application/zip"],
  ["7z", "application/x-7z-compressed"],
  ["mkv", "video/x-matroska"],
  ["mov", "video/quicktime"],
  ["msg", "application/vnd.ms-outlook"]
]);
function toFileWithPath(file, path) {
  var f3 = withMimeType(file);
  if (typeof f3.path !== "string") {
    var webkitRelativePath = file.webkitRelativePath;
    Object.defineProperty(f3, "path", {
      value: typeof path === "string" ? path : typeof webkitRelativePath === "string" && webkitRelativePath.length > 0 ? webkitRelativePath : file.name,
      writable: false,
      configurable: false,
      enumerable: true
    });
  }
  return f3;
}
function withMimeType(file) {
  var name = file.name;
  var hasExtension = name && name.lastIndexOf(".") !== -1;
  if (hasExtension && !file.type) {
    var ext = name.split(".").pop().toLowerCase();
    var type = COMMON_MIME_TYPES.get(ext);
    if (type) {
      Object.defineProperty(file, "type", {
        value: type,
        writable: false,
        configurable: false,
        enumerable: true
      });
    }
  }
  return file;
}

// node_modules/file-selector/dist/es5/file-selector.js
var FILES_TO_IGNORE = [
  ".DS_Store",
  "Thumbs.db"
];
function fromEvent(evt) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(_a) {
      if (isObject2(evt) && isDataTransfer(evt)) {
        return [2, getDataTransferFiles(evt.dataTransfer, evt.type)];
      } else if (isChangeEvt(evt)) {
        return [2, getInputFiles(evt)];
      } else if (Array.isArray(evt) && evt.every(function(item) {
        return "getFile" in item && typeof item.getFile === "function";
      })) {
        return [2, getFsHandleFiles(evt)];
      }
      return [2, []];
    });
  });
}
function isDataTransfer(value) {
  return isObject2(value.dataTransfer);
}
function isChangeEvt(value) {
  return isObject2(value) && isObject2(value.target);
}
function isObject2(v3) {
  return typeof v3 === "object" && v3 !== null;
}
function getInputFiles(evt) {
  return fromList(evt.target.files).map(function(file) {
    return toFileWithPath(file);
  });
}
function getFsHandleFiles(handles) {
  return __awaiter(this, void 0, void 0, function() {
    var files;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          return [4, Promise.all(handles.map(function(h3) {
            return h3.getFile();
          }))];
        case 1:
          files = _a.sent();
          return [2, files.map(function(file) {
            return toFileWithPath(file);
          })];
      }
    });
  });
}
function getDataTransferFiles(dt, type) {
  return __awaiter(this, void 0, void 0, function() {
    var items, files;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (dt === null) {
            return [2, []];
          }
          if (!dt.items)
            return [3, 2];
          items = fromList(dt.items).filter(function(item) {
            return item.kind === "file";
          });
          if (type !== "drop") {
            return [2, items];
          }
          return [4, Promise.all(items.map(toFilePromises))];
        case 1:
          files = _a.sent();
          return [2, noIgnoredFiles(flatten(files))];
        case 2:
          return [2, noIgnoredFiles(fromList(dt.files).map(function(file) {
            return toFileWithPath(file);
          }))];
      }
    });
  });
}
function noIgnoredFiles(files) {
  return files.filter(function(file) {
    return FILES_TO_IGNORE.indexOf(file.name) === -1;
  });
}
function fromList(items) {
  if (items === null) {
    return [];
  }
  var files = [];
  for (var i2 = 0; i2 < items.length; i2++) {
    var file = items[i2];
    files.push(file);
  }
  return files;
}
function toFilePromises(item) {
  if (typeof item.webkitGetAsEntry !== "function") {
    return fromDataTransferItem(item);
  }
  var entry = item.webkitGetAsEntry();
  if (entry && entry.isDirectory) {
    return fromDirEntry(entry);
  }
  return fromDataTransferItem(item);
}
function flatten(items) {
  return items.reduce(function(acc, files) {
    return __spread(acc, Array.isArray(files) ? flatten(files) : [files]);
  }, []);
}
function fromDataTransferItem(item) {
  var file = item.getAsFile();
  if (!file) {
    return Promise.reject(item + " is not a File");
  }
  var fwp = toFileWithPath(file);
  return Promise.resolve(fwp);
}
function fromEntry(entry) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(_a) {
      return [2, entry.isDirectory ? fromDirEntry(entry) : fromFileEntry(entry)];
    });
  });
}
function fromDirEntry(entry) {
  var reader = entry.createReader();
  return new Promise(function(resolve, reject) {
    var entries = [];
    function readEntries() {
      var _this = this;
      reader.readEntries(function(batch) {
        return __awaiter(_this, void 0, void 0, function() {
          var files, err_1, items;
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                if (!!batch.length)
                  return [3, 5];
                _a.label = 1;
              case 1:
                _a.trys.push([1, 3, , 4]);
                return [4, Promise.all(entries)];
              case 2:
                files = _a.sent();
                resolve(files);
                return [3, 4];
              case 3:
                err_1 = _a.sent();
                reject(err_1);
                return [3, 4];
              case 4:
                return [3, 6];
              case 5:
                items = Promise.all(batch.map(fromEntry));
                entries.push(items);
                readEntries();
                _a.label = 6;
              case 6:
                return [2];
            }
          });
        });
      }, function(err) {
        reject(err);
      });
    }
    readEntries();
  });
}
function fromFileEntry(entry) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(_a) {
      return [2, new Promise(function(resolve, reject) {
        entry.file(function(file) {
          var fwp = toFileWithPath(file, entry.fullPath);
          resolve(fwp);
        }, function(err) {
          reject(err);
        });
      })];
    });
  });
}

// node_modules/react-dropzone/dist/es/utils/index.js
init_react();
var import_attr_accept = __toESM(require_es());
function ownKeys3(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread3(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    i2 % 2 ? ownKeys3(Object(source), true).forEach(function(key) {
      _defineProperty3(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys3(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty3(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray(arr, i2) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i2) || _unsupportedIterableToArray(arr, i2) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o2, minLen) {
  if (!o2)
    return;
  if (typeof o2 === "string")
    return _arrayLikeToArray(o2, minLen);
  var n4 = Object.prototype.toString.call(o2).slice(8, -1);
  if (n4 === "Object" && o2.constructor)
    n4 = o2.constructor.name;
  if (n4 === "Map" || n4 === "Set")
    return Array.from(o2);
  if (n4 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n4))
    return _arrayLikeToArray(o2, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
    arr2[i2] = arr[i2];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i2) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n2 = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n2 = (_s = _i.next()).done); _n2 = true) {
      _arr.push(_s.value);
      if (i2 && _arr.length === i2)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n2 && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
var FILE_INVALID_TYPE = "file-invalid-type";
var FILE_TOO_LARGE = "file-too-large";
var FILE_TOO_SMALL = "file-too-small";
var TOO_MANY_FILES = "too-many-files";
var getInvalidTypeRejectionErr = function getInvalidTypeRejectionErr2(accept) {
  accept = Array.isArray(accept) && accept.length === 1 ? accept[0] : accept;
  var messageSuffix = Array.isArray(accept) ? "one of ".concat(accept.join(", ")) : accept;
  return {
    code: FILE_INVALID_TYPE,
    message: "File type must be ".concat(messageSuffix)
  };
};
var getTooLargeRejectionErr = function getTooLargeRejectionErr2(maxSize) {
  return {
    code: FILE_TOO_LARGE,
    message: "File is larger than ".concat(maxSize, " ").concat(maxSize === 1 ? "byte" : "bytes")
  };
};
var getTooSmallRejectionErr = function getTooSmallRejectionErr2(minSize) {
  return {
    code: FILE_TOO_SMALL,
    message: "File is smaller than ".concat(minSize, " ").concat(minSize === 1 ? "byte" : "bytes")
  };
};
var TOO_MANY_FILES_REJECTION = {
  code: TOO_MANY_FILES,
  message: "Too many files"
};
function fileAccepted(file, accept) {
  var isAcceptable = file.type === "application/x-moz-file" || (0, import_attr_accept.default)(file, accept);
  return [isAcceptable, isAcceptable ? null : getInvalidTypeRejectionErr(accept)];
}
function fileMatchSize(file, minSize, maxSize) {
  if (isDefined(file.size)) {
    if (isDefined(minSize) && isDefined(maxSize)) {
      if (file.size > maxSize)
        return [false, getTooLargeRejectionErr(maxSize)];
      if (file.size < minSize)
        return [false, getTooSmallRejectionErr(minSize)];
    } else if (isDefined(minSize) && file.size < minSize)
      return [false, getTooSmallRejectionErr(minSize)];
    else if (isDefined(maxSize) && file.size > maxSize)
      return [false, getTooLargeRejectionErr(maxSize)];
  }
  return [true, null];
}
function isDefined(value) {
  return value !== void 0 && value !== null;
}
function allFilesAccepted(_ref) {
  var files = _ref.files, accept = _ref.accept, minSize = _ref.minSize, maxSize = _ref.maxSize, multiple = _ref.multiple, maxFiles = _ref.maxFiles;
  if (!multiple && files.length > 1 || multiple && maxFiles >= 1 && files.length > maxFiles) {
    return false;
  }
  return files.every(function(file) {
    var _fileAccepted = fileAccepted(file, accept), _fileAccepted2 = _slicedToArray(_fileAccepted, 1), accepted = _fileAccepted2[0];
    var _fileMatchSize = fileMatchSize(file, minSize, maxSize), _fileMatchSize2 = _slicedToArray(_fileMatchSize, 1), sizeMatch = _fileMatchSize2[0];
    return accepted && sizeMatch;
  });
}
function isPropagationStopped(event) {
  if (typeof event.isPropagationStopped === "function") {
    return event.isPropagationStopped();
  } else if (typeof event.cancelBubble !== "undefined") {
    return event.cancelBubble;
  }
  return false;
}
function isEvtWithFiles(event) {
  if (!event.dataTransfer) {
    return !!event.target && !!event.target.files;
  }
  return Array.prototype.some.call(event.dataTransfer.types, function(type) {
    return type === "Files" || type === "application/x-moz-file";
  });
}
function onDocumentDragOver(event) {
  event.preventDefault();
}
function isIe(userAgent) {
  return userAgent.indexOf("MSIE") !== -1 || userAgent.indexOf("Trident/") !== -1;
}
function isEdge(userAgent) {
  return userAgent.indexOf("Edge/") !== -1;
}
function isIeOrEdge() {
  var userAgent = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return isIe(userAgent) || isEdge(userAgent);
}
function composeEventHandlers() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }
  return function(event) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    return fns.some(function(fn5) {
      if (!isPropagationStopped(event) && fn5) {
        fn5.apply(void 0, [event].concat(args));
      }
      return isPropagationStopped(event);
    });
  };
}
function canUseFileSystemAccessAPI() {
  return "showOpenFilePicker" in window;
}
function filePickerOptionsTypes(accept) {
  accept = typeof accept === "string" ? accept.split(",") : accept;
  return [{
    description: "everything",
    accept: Array.isArray(accept) ? accept.filter(function(item) {
      return item === "audio/*" || item === "video/*" || item === "image/*" || item === "text/*" || /\w+\/[-+.\w]+/g.test(item);
    }).reduce(function(a2, b3) {
      return _objectSpread3(_objectSpread3({}, a2), {}, _defineProperty3({}, b3, []));
    }, {}) : {}
  }];
}

// node_modules/react-dropzone/dist/es/index.js
var _excluded4 = ["children"];
var _excluded23 = ["open"];
var _excluded32 = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"];
var _excluded42 = ["refKey", "onChange", "onClick"];
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray2(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray2(arr);
}
function _slicedToArray2(arr, i2) {
  return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i2) || _unsupportedIterableToArray2(arr, i2) || _nonIterableRest2();
}
function _nonIterableRest2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray2(o2, minLen) {
  if (!o2)
    return;
  if (typeof o2 === "string")
    return _arrayLikeToArray2(o2, minLen);
  var n4 = Object.prototype.toString.call(o2).slice(8, -1);
  if (n4 === "Object" && o2.constructor)
    n4 = o2.constructor.name;
  if (n4 === "Map" || n4 === "Set")
    return Array.from(o2);
  if (n4 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n4))
    return _arrayLikeToArray2(o2, minLen);
}
function _arrayLikeToArray2(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
    arr2[i2] = arr[i2];
  }
  return arr2;
}
function _iterableToArrayLimit2(arr, i2) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n2 = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n2 = (_s = _i.next()).done); _n2 = true) {
      _arr.push(_s.value);
      if (i2 && _arr.length === i2)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n2 && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles2(arr) {
  if (Array.isArray(arr))
    return arr;
}
function ownKeys4(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread4(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    i2 % 2 ? ownKeys4(Object(source), true).forEach(function(key) {
      _defineProperty4(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys4(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty4(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectWithoutProperties3(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose4(source, excluded);
  var key, i2;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
      key = sourceSymbolKeys[i2];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose4(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Dropzone = /* @__PURE__ */ (0, import_react3.forwardRef)(function(_ref, ref) {
  var children = _ref.children, params = _objectWithoutProperties3(_ref, _excluded4);
  var _useDropzone = useDropzone(params), open = _useDropzone.open, props = _objectWithoutProperties3(_useDropzone, _excluded23);
  (0, import_react3.useImperativeHandle)(ref, function() {
    return {
      open
    };
  }, [open]);
  return /* @__PURE__ */ import_react3.default.createElement(import_react3.Fragment, null, children(_objectSpread4(_objectSpread4({}, props), {}, {
    open
  })));
});
Dropzone.displayName = "Dropzone";
var defaultProps2 = {
  disabled: false,
  getFilesFromEvent: fromEvent,
  maxSize: Infinity,
  minSize: 0,
  multiple: true,
  maxFiles: 0,
  preventDropOnDocument: true,
  noClick: false,
  noKeyboard: false,
  noDrag: false,
  noDragEventsBubbling: false,
  validator: null,
  useFsAccessApi: false
};
Dropzone.defaultProps = defaultProps2;
Dropzone.propTypes = {
  children: import_prop_types.default.func,
  accept: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.arrayOf(import_prop_types.default.string)]),
  multiple: import_prop_types.default.bool,
  preventDropOnDocument: import_prop_types.default.bool,
  noClick: import_prop_types.default.bool,
  noKeyboard: import_prop_types.default.bool,
  noDrag: import_prop_types.default.bool,
  noDragEventsBubbling: import_prop_types.default.bool,
  minSize: import_prop_types.default.number,
  maxSize: import_prop_types.default.number,
  maxFiles: import_prop_types.default.number,
  disabled: import_prop_types.default.bool,
  getFilesFromEvent: import_prop_types.default.func,
  onFileDialogCancel: import_prop_types.default.func,
  onFileDialogOpen: import_prop_types.default.func,
  useFsAccessApi: import_prop_types.default.bool,
  onDragEnter: import_prop_types.default.func,
  onDragLeave: import_prop_types.default.func,
  onDragOver: import_prop_types.default.func,
  onDrop: import_prop_types.default.func,
  onDropAccepted: import_prop_types.default.func,
  onDropRejected: import_prop_types.default.func,
  validator: import_prop_types.default.func
};
var initialState = {
  isFocused: false,
  isFileDialogActive: false,
  isDragActive: false,
  isDragAccept: false,
  isDragReject: false,
  draggedFiles: [],
  acceptedFiles: [],
  fileRejections: []
};
function useDropzone() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var _defaultProps$options = _objectSpread4(_objectSpread4({}, defaultProps2), options), accept = _defaultProps$options.accept, disabled = _defaultProps$options.disabled, getFilesFromEvent = _defaultProps$options.getFilesFromEvent, maxSize = _defaultProps$options.maxSize, minSize = _defaultProps$options.minSize, multiple = _defaultProps$options.multiple, maxFiles = _defaultProps$options.maxFiles, onDragEnter = _defaultProps$options.onDragEnter, onDragLeave = _defaultProps$options.onDragLeave, onDragOver = _defaultProps$options.onDragOver, onDrop = _defaultProps$options.onDrop, onDropAccepted = _defaultProps$options.onDropAccepted, onDropRejected = _defaultProps$options.onDropRejected, onFileDialogCancel = _defaultProps$options.onFileDialogCancel, onFileDialogOpen = _defaultProps$options.onFileDialogOpen, useFsAccessApi = _defaultProps$options.useFsAccessApi, preventDropOnDocument = _defaultProps$options.preventDropOnDocument, noClick = _defaultProps$options.noClick, noKeyboard = _defaultProps$options.noKeyboard, noDrag = _defaultProps$options.noDrag, noDragEventsBubbling = _defaultProps$options.noDragEventsBubbling, validator = _defaultProps$options.validator;
  var onFileDialogOpenCb = (0, import_react3.useMemo)(function() {
    return typeof onFileDialogOpen === "function" ? onFileDialogOpen : noop;
  }, [onFileDialogOpen]);
  var onFileDialogCancelCb = (0, import_react3.useMemo)(function() {
    return typeof onFileDialogCancel === "function" ? onFileDialogCancel : noop;
  }, [onFileDialogCancel]);
  var rootRef = (0, import_react3.useRef)(null);
  var inputRef = (0, import_react3.useRef)(null);
  var _useReducer = (0, import_react3.useReducer)(reducer, initialState), _useReducer2 = _slicedToArray2(_useReducer, 2), state = _useReducer2[0], dispatch = _useReducer2[1];
  var isFocused = state.isFocused, isFileDialogActive = state.isFileDialogActive, draggedFiles = state.draggedFiles;
  var onWindowFocus = function onWindowFocus2() {
    if (isFileDialogActive) {
      setTimeout(function() {
        if (inputRef.current) {
          var files = inputRef.current.files;
          if (!files.length) {
            dispatch({
              type: "closeDialog"
            });
            onFileDialogCancelCb();
          }
        }
      }, 300);
    }
  };
  (0, import_react3.useEffect)(function() {
    if (useFsAccessApi && canUseFileSystemAccessAPI()) {
      return function() {
      };
    }
    window.addEventListener("focus", onWindowFocus, false);
    return function() {
      window.removeEventListener("focus", onWindowFocus, false);
    };
  }, [inputRef, isFileDialogActive, onFileDialogCancelCb, useFsAccessApi]);
  var dragTargetsRef = (0, import_react3.useRef)([]);
  var onDocumentDrop = function onDocumentDrop2(event) {
    if (rootRef.current && rootRef.current.contains(event.target)) {
      return;
    }
    event.preventDefault();
    dragTargetsRef.current = [];
  };
  (0, import_react3.useEffect)(function() {
    if (preventDropOnDocument) {
      document.addEventListener("dragover", onDocumentDragOver, false);
      document.addEventListener("drop", onDocumentDrop, false);
    }
    return function() {
      if (preventDropOnDocument) {
        document.removeEventListener("dragover", onDocumentDragOver);
        document.removeEventListener("drop", onDocumentDrop);
      }
    };
  }, [rootRef, preventDropOnDocument]);
  var onDragEnterCb = (0, import_react3.useCallback)(function(event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);
    dragTargetsRef.current = [].concat(_toConsumableArray(dragTargetsRef.current), [event.target]);
    if (isEvtWithFiles(event)) {
      Promise.resolve(getFilesFromEvent(event)).then(function(draggedFiles2) {
        if (isPropagationStopped(event) && !noDragEventsBubbling) {
          return;
        }
        dispatch({
          draggedFiles: draggedFiles2,
          isDragActive: true,
          type: "setDraggedFiles"
        });
        if (onDragEnter) {
          onDragEnter(event);
        }
      });
    }
  }, [getFilesFromEvent, onDragEnter, noDragEventsBubbling]);
  var onDragOverCb = (0, import_react3.useCallback)(function(event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);
    var hasFiles = isEvtWithFiles(event);
    if (hasFiles && event.dataTransfer) {
      try {
        event.dataTransfer.dropEffect = "copy";
      } catch (_unused) {
      }
    }
    if (hasFiles && onDragOver) {
      onDragOver(event);
    }
    return false;
  }, [onDragOver, noDragEventsBubbling]);
  var onDragLeaveCb = (0, import_react3.useCallback)(function(event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);
    var targets = dragTargetsRef.current.filter(function(target) {
      return rootRef.current && rootRef.current.contains(target);
    });
    var targetIdx = targets.indexOf(event.target);
    if (targetIdx !== -1) {
      targets.splice(targetIdx, 1);
    }
    dragTargetsRef.current = targets;
    if (targets.length > 0) {
      return;
    }
    dispatch({
      isDragActive: false,
      type: "setDraggedFiles",
      draggedFiles: []
    });
    if (isEvtWithFiles(event) && onDragLeave) {
      onDragLeave(event);
    }
  }, [rootRef, onDragLeave, noDragEventsBubbling]);
  var setFiles = (0, import_react3.useCallback)(function(files, event) {
    var acceptedFiles = [];
    var fileRejections = [];
    files.forEach(function(file) {
      var _fileAccepted = fileAccepted(file, accept), _fileAccepted2 = _slicedToArray2(_fileAccepted, 2), accepted = _fileAccepted2[0], acceptError = _fileAccepted2[1];
      var _fileMatchSize = fileMatchSize(file, minSize, maxSize), _fileMatchSize2 = _slicedToArray2(_fileMatchSize, 2), sizeMatch = _fileMatchSize2[0], sizeError = _fileMatchSize2[1];
      var customErrors = validator ? validator(file) : null;
      if (accepted && sizeMatch && !customErrors) {
        acceptedFiles.push(file);
      } else {
        var errors = [acceptError, sizeError];
        if (customErrors) {
          errors = errors.concat(customErrors);
        }
        fileRejections.push({
          file,
          errors: errors.filter(function(e2) {
            return e2;
          })
        });
      }
    });
    if (!multiple && acceptedFiles.length > 1 || multiple && maxFiles >= 1 && acceptedFiles.length > maxFiles) {
      acceptedFiles.forEach(function(file) {
        fileRejections.push({
          file,
          errors: [TOO_MANY_FILES_REJECTION]
        });
      });
      acceptedFiles.splice(0);
    }
    dispatch({
      acceptedFiles,
      fileRejections,
      type: "setFiles"
    });
    if (onDrop) {
      onDrop(acceptedFiles, fileRejections, event);
    }
    if (fileRejections.length > 0 && onDropRejected) {
      onDropRejected(fileRejections, event);
    }
    if (acceptedFiles.length > 0 && onDropAccepted) {
      onDropAccepted(acceptedFiles, event);
    }
  }, [dispatch, multiple, accept, minSize, maxSize, maxFiles, onDrop, onDropAccepted, onDropRejected, validator]);
  var onDropCb = (0, import_react3.useCallback)(function(event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);
    dragTargetsRef.current = [];
    if (isEvtWithFiles(event)) {
      Promise.resolve(getFilesFromEvent(event)).then(function(files) {
        if (isPropagationStopped(event) && !noDragEventsBubbling) {
          return;
        }
        setFiles(files, event);
      });
    }
    dispatch({
      type: "reset"
    });
  }, [getFilesFromEvent, setFiles, noDragEventsBubbling]);
  var openFileDialog = (0, import_react3.useCallback)(function() {
    if (useFsAccessApi && canUseFileSystemAccessAPI()) {
      dispatch({
        type: "openDialog"
      });
      onFileDialogOpenCb();
      var opts = {
        multiple,
        types: filePickerOptionsTypes(accept)
      };
      window.showOpenFilePicker(opts).then(function(handles) {
        return getFilesFromEvent(handles);
      }).then(function(files) {
        return setFiles(files, null);
      }).catch(function(e2) {
        return onFileDialogCancelCb(e2);
      }).finally(function() {
        return dispatch({
          type: "closeDialog"
        });
      });
      return;
    }
    if (inputRef.current) {
      dispatch({
        type: "openDialog"
      });
      onFileDialogOpenCb();
      inputRef.current.value = null;
      inputRef.current.click();
    }
  }, [dispatch, onFileDialogOpenCb, onFileDialogCancelCb, useFsAccessApi, setFiles, accept, multiple]);
  var onKeyDownCb = (0, import_react3.useCallback)(function(event) {
    if (!rootRef.current || !rootRef.current.isEqualNode(event.target)) {
      return;
    }
    if (event.keyCode === 32 || event.keyCode === 13) {
      event.preventDefault();
      openFileDialog();
    }
  }, [rootRef, inputRef, openFileDialog]);
  var onFocusCb = (0, import_react3.useCallback)(function() {
    dispatch({
      type: "focus"
    });
  }, []);
  var onBlurCb = (0, import_react3.useCallback)(function() {
    dispatch({
      type: "blur"
    });
  }, []);
  var onClickCb = (0, import_react3.useCallback)(function() {
    if (noClick) {
      return;
    }
    if (isIeOrEdge()) {
      setTimeout(openFileDialog, 0);
    } else {
      openFileDialog();
    }
  }, [inputRef, noClick, openFileDialog]);
  var composeHandler = function composeHandler2(fn5) {
    return disabled ? null : fn5;
  };
  var composeKeyboardHandler = function composeKeyboardHandler2(fn5) {
    return noKeyboard ? null : composeHandler(fn5);
  };
  var composeDragHandler = function composeDragHandler2(fn5) {
    return noDrag ? null : composeHandler(fn5);
  };
  var stopPropagation = function stopPropagation2(event) {
    if (noDragEventsBubbling) {
      event.stopPropagation();
    }
  };
  var getRootProps = (0, import_react3.useMemo)(function() {
    return function() {
      var _ref2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref2$refKey = _ref2.refKey, refKey = _ref2$refKey === void 0 ? "ref" : _ref2$refKey, role = _ref2.role, onKeyDown = _ref2.onKeyDown, onFocus = _ref2.onFocus, onBlur = _ref2.onBlur, onClick = _ref2.onClick, onDragEnter2 = _ref2.onDragEnter, onDragOver2 = _ref2.onDragOver, onDragLeave2 = _ref2.onDragLeave, onDrop2 = _ref2.onDrop, rest = _objectWithoutProperties3(_ref2, _excluded32);
      return _objectSpread4(_objectSpread4(_defineProperty4({
        onKeyDown: composeKeyboardHandler(composeEventHandlers(onKeyDown, onKeyDownCb)),
        onFocus: composeKeyboardHandler(composeEventHandlers(onFocus, onFocusCb)),
        onBlur: composeKeyboardHandler(composeEventHandlers(onBlur, onBlurCb)),
        onClick: composeHandler(composeEventHandlers(onClick, onClickCb)),
        onDragEnter: composeDragHandler(composeEventHandlers(onDragEnter2, onDragEnterCb)),
        onDragOver: composeDragHandler(composeEventHandlers(onDragOver2, onDragOverCb)),
        onDragLeave: composeDragHandler(composeEventHandlers(onDragLeave2, onDragLeaveCb)),
        onDrop: composeDragHandler(composeEventHandlers(onDrop2, onDropCb)),
        role: typeof role === "string" && role !== "" ? role : "button"
      }, refKey, rootRef), !disabled && !noKeyboard ? {
        tabIndex: 0
      } : {}), rest);
    };
  }, [rootRef, onKeyDownCb, onFocusCb, onBlurCb, onClickCb, onDragEnterCb, onDragOverCb, onDragLeaveCb, onDropCb, noKeyboard, noDrag, disabled]);
  var onInputElementClick = (0, import_react3.useCallback)(function(event) {
    event.stopPropagation();
  }, []);
  var getInputProps = (0, import_react3.useMemo)(function() {
    return function() {
      var _ref3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref3$refKey = _ref3.refKey, refKey = _ref3$refKey === void 0 ? "ref" : _ref3$refKey, onChange = _ref3.onChange, onClick = _ref3.onClick, rest = _objectWithoutProperties3(_ref3, _excluded42);
      var inputProps = _defineProperty4({
        accept,
        multiple,
        type: "file",
        style: {
          display: "none"
        },
        onChange: composeHandler(composeEventHandlers(onChange, onDropCb)),
        onClick: composeHandler(composeEventHandlers(onClick, onInputElementClick)),
        autoComplete: "off",
        tabIndex: -1
      }, refKey, inputRef);
      return _objectSpread4(_objectSpread4({}, inputProps), rest);
    };
  }, [inputRef, accept, multiple, onDropCb, disabled]);
  var fileCount = draggedFiles.length;
  var isDragAccept = fileCount > 0 && allFilesAccepted({
    files: draggedFiles,
    accept,
    minSize,
    maxSize,
    multiple,
    maxFiles
  });
  var isDragReject = fileCount > 0 && !isDragAccept;
  return _objectSpread4(_objectSpread4({}, state), {}, {
    isDragAccept,
    isDragReject,
    isFocused: isFocused && !disabled,
    getRootProps,
    getInputProps,
    rootRef,
    inputRef,
    open: composeHandler(openFileDialog)
  });
}
function reducer(state, action) {
  switch (action.type) {
    case "focus":
      return _objectSpread4(_objectSpread4({}, state), {}, {
        isFocused: true
      });
    case "blur":
      return _objectSpread4(_objectSpread4({}, state), {}, {
        isFocused: false
      });
    case "openDialog":
      return _objectSpread4(_objectSpread4({}, initialState), {}, {
        isFileDialogActive: true
      });
    case "closeDialog":
      return _objectSpread4(_objectSpread4({}, state), {}, {
        isFileDialogActive: false
      });
    case "setDraggedFiles":
      var isDragActive = action.isDragActive, draggedFiles = action.draggedFiles;
      return _objectSpread4(_objectSpread4({}, state), {}, {
        draggedFiles,
        isDragActive
      });
    case "setFiles":
      return _objectSpread4(_objectSpread4({}, state), {}, {
        acceptedFiles: action.acceptedFiles,
        fileRejections: action.fileRejections
      });
    case "reset":
      return _objectSpread4({}, initialState);
    default:
      return state;
  }
}
function noop() {
}

// node_modules/react-bricks/react-bricks.esm.js
var import_react_modal = __toESM(require_lib3());
var import_axios = __toESM(require_axios());

// node_modules/rb-cogo-toast/dist/index.es.js
init_react();
var import_react4 = __toESM(require_react());
var import_react_dom3 = __toESM(require_react_dom());
var import_prop_types2 = __toESM(require_prop_types());
var __assign2 = function() {
  return (__assign2 = Object.assign || function(t3) {
    for (var n4, e2 = 1, o2 = arguments.length; e2 < o2; e2++)
      for (var i2 in n4 = arguments[e2])
        Object.prototype.hasOwnProperty.call(n4, i2) && (t3[i2] = n4[i2]);
    return t3;
  }).apply(this, arguments);
};
function __spreadArrays2() {
  for (var t3 = 0, n4 = 0, e2 = arguments.length; n4 < e2; n4++)
    t3 += arguments[n4].length;
  var o2 = Array(t3), i2 = 0;
  for (n4 = 0; n4 < e2; n4++)
    for (var a2 = arguments[n4], r3 = 0, c2 = a2.length; r3 < c2; r3++, i2++)
      o2[i2] = a2[r3];
  return o2;
}
var success = function(t3) {
  return import_react4.default.createElement("svg", __assign2({ viewBox: "0 0 426.667 426.667", width: 18, height: 18 }, t3), import_react4.default.createElement("path", { d: "M213.333 0C95.518 0 0 95.514 0 213.333s95.518 213.333 213.333 213.333c117.828 0 213.333-95.514 213.333-213.333S331.157 0 213.333 0zm-39.134 322.918l-93.935-93.931 31.309-31.309 62.626 62.622 140.894-140.898 31.309 31.309-172.203 172.207z", fill: "#6ac259" }));
};
var warn = function(t3) {
  return import_react4.default.createElement("svg", __assign2({ viewBox: "0 0 310.285 310.285", width: 18, height: 18 }, t3), import_react4.default.createElement("path", { d: "M264.845 45.441C235.542 16.139 196.583 0 155.142 0 113.702 0 74.743 16.139 45.44 45.441 16.138 74.743 0 113.703 0 155.144c0 41.439 16.138 80.399 45.44 109.701 29.303 29.303 68.262 45.44 109.702 45.44s80.399-16.138 109.702-45.44c29.303-29.302 45.44-68.262 45.44-109.701.001-41.441-16.137-80.401-45.439-109.703zm-132.673 3.895a12.587 12.587 0 0 1 9.119-3.873h28.04c3.482 0 6.72 1.403 9.114 3.888 2.395 2.485 3.643 5.804 3.514 9.284l-4.634 104.895c-.263 7.102-6.26 12.933-13.368 12.933H146.33c-7.112 0-13.099-5.839-13.345-12.945L128.64 58.594c-.121-3.48 1.133-6.773 3.532-9.258zm23.306 219.444c-16.266 0-28.532-12.844-28.532-29.876 0-17.223 12.122-30.211 28.196-30.211 16.602 0 28.196 12.423 28.196 30.211.001 17.591-11.456 29.876-27.86 29.876z", fill: "#FFDA44" }));
};
var loading = function(t3) {
  return import_react4.default.createElement("div", __assign2({ className: "ct-icon-loading" }, t3));
};
var info = function(t3) {
  return import_react4.default.createElement("svg", __assign2({ viewBox: "0 0 23.625 23.625", width: 18, height: 18 }, t3), import_react4.default.createElement("path", { d: "M11.812 0C5.289 0 0 5.289 0 11.812s5.289 11.813 11.812 11.813 11.813-5.29 11.813-11.813S18.335 0 11.812 0zm2.459 18.307c-.608.24-1.092.422-1.455.548a3.838 3.838 0 0 1-1.262.189c-.736 0-1.309-.18-1.717-.539s-.611-.814-.611-1.367c0-.215.015-.435.045-.659a8.23 8.23 0 0 1 .147-.759l.761-2.688c.067-.258.125-.503.171-.731.046-.23.068-.441.068-.633 0-.342-.071-.582-.212-.717-.143-.135-.412-.201-.813-.201-.196 0-.398.029-.605.09-.205.063-.383.12-.529.176l.201-.828c.498-.203.975-.377 1.43-.521a4.225 4.225 0 0 1 1.29-.218c.731 0 1.295.178 1.692.53.395.353.594.812.594 1.376 0 .117-.014.323-.041.617a4.129 4.129 0 0 1-.152.811l-.757 2.68a7.582 7.582 0 0 0-.167.736 3.892 3.892 0 0 0-.073.626c0 .356.079.599.239.728.158.129.435.194.827.194.185 0 .392-.033.626-.097.232-.064.4-.121.506-.17l-.203.827zm-.134-10.878a1.807 1.807 0 0 1-1.275.492c-.496 0-.924-.164-1.28-.492a1.57 1.57 0 0 1-.533-1.193c0-.465.18-.865.533-1.196a1.812 1.812 0 0 1 1.28-.497c.497 0 .923.165 1.275.497.353.331.53.731.53 1.196 0 .467-.177.865-.53 1.193z", fill: "#006DF0" }));
};
var error = function(t3) {
  return import_react4.default.createElement("svg", __assign2({ viewBox: "0 0 51.976 51.976", width: 18, height: 18 }, t3), import_react4.default.createElement("path", { d: "M44.373 7.603c-10.137-10.137-26.632-10.138-36.77 0-10.138 10.138-10.137 26.632 0 36.77s26.632 10.138 36.77 0c10.137-10.138 10.137-26.633 0-36.77zm-8.132 28.638a2 2 0 0 1-2.828 0l-7.425-7.425-7.778 7.778a2 2 0 1 1-2.828-2.828l7.778-7.778-7.425-7.425a2 2 0 1 1 2.828-2.828l7.425 7.425 7.071-7.071a2 2 0 1 1 2.828 2.828l-7.071 7.071 7.425 7.425a2 2 0 0 1 0 2.828z", fill: "#D80027" }));
};
var Icons = { success, warn, loading, info, error };
var colors = { success: "#6EC05F", info: "#1271EC", warn: "#FED953", error: "#D60A2E", loading: "#0088ff" };
var Toast = function(t3) {
  var n4, e2, o2, i2, a2 = "margin" + ((t3.position || "top-center").includes("bottom") ? "Bottom" : "Top"), r3 = ["ct-toast", t3.onClick ? " ct-cursor-pointer" : "", "ct-toast-" + t3.type].join(" "), c2 = (((e2 = t3.bar) === null || e2 === void 0 ? void 0 : e2.size) || "3px") + " " + (((o2 = t3.bar) === null || o2 === void 0 ? void 0 : o2.style) || "solid") + " " + (((i2 = t3.bar) === null || i2 === void 0 ? void 0 : i2.color) || colors[t3.type]), s3 = Icons[t3.type], l2 = (0, import_react4.useState)(((n4 = { opacity: 0 })[a2] = -15, n4)), d2 = l2[0], u2 = l2[1], f3 = __assign2({ paddingLeft: t3.heading ? 25 : void 0, minHeight: t3.heading ? 50 : void 0, borderLeft: c2 }, d2), p3 = function() {
    var n5;
    u2(((n5 = { opacity: 0 })[a2] = "-15px", n5)), setTimeout(function() {
      t3.onHide(t3.id, t3.position);
    }, 300);
  };
  (0, import_react4.useEffect)(function() {
    var n5, e3 = setTimeout(function() {
      var t4;
      u2(((t4 = { opacity: 1 })[a2] = "15px", t4));
    }, 50);
    return t3.hideAfter !== 0 && (n5 = setTimeout(function() {
      p3();
    }, 1e3 * t3.hideAfter)), function() {
      clearTimeout(e3), n5 && clearTimeout(n5);
    };
  }, []), (0, import_react4.useEffect)(function() {
    t3.show || p3();
  }, [t3.show]);
  var g3 = { tabIndex: 0, onClick: t3.onClick, onKeyPress: function(n5) {
    n5.keyCode === 13 && t3.onClick(n5);
  } };
  return import_react4.default.createElement("div", __assign2({ className: r3, role: t3.role ? t3.role : "status", style: f3 }, t3.onClick ? g3 : {}), t3.renderIcon ? t3.renderIcon() : import_react4.default.createElement(s3, null), import_react4.default.createElement("div", { className: t3.heading ? "ct-text-group-heading" : "ct-text-group" }, t3.heading && import_react4.default.createElement("h4", { className: "ct-heading" }, t3.heading), import_react4.default.createElement("div", { className: "ct-text" }, t3.text)));
};
Toast.propTypes = { type: import_prop_types2.string.isRequired, text: (0, import_prop_types2.oneOfType)([import_prop_types2.string, import_prop_types2.node]).isRequired, show: import_prop_types2.bool, onHide: import_prop_types2.func, id: (0, import_prop_types2.oneOfType)([import_prop_types2.string, import_prop_types2.number]), hideAfter: import_prop_types2.number, heading: import_prop_types2.string, position: import_prop_types2.string, renderIcon: import_prop_types2.func, bar: (0, import_prop_types2.shape)({}), onClick: import_prop_types2.func, role: import_prop_types2.string }, Toast.defaultProps = { id: void 0, show: true, onHide: void 0, hideAfter: 3, heading: void 0, position: "top-center", renderIcon: void 0, bar: {}, onClick: void 0, role: "status" };
var camelCase = function(t3) {
  return t3.replace(/-([a-z])/g, function(t4) {
    return t4[1].toUpperCase();
  });
};
var defaultToasts = { topLeft: [], topCenter: [], topRight: [], bottomLeft: [], bottomCenter: [], bottomRight: [] };
var ToastContainer = function(t3) {
  var n4 = t3.toast, e2 = t3.hiddenID, o2 = (0, import_react4.useState)(defaultToasts), i2 = o2[0], a2 = o2[1];
  (0, import_react4.useEffect)(function() {
    n4 && a2(function(t4) {
      var e3, o3 = camelCase(n4.position || "top-center");
      return __assign2(__assign2({}, t4), ((e3 = {})[o3] = __spreadArrays2(t4[o3], [n4]), e3));
    });
  }, [n4]);
  var r3 = function(t4, n5) {
    a2(function(e3) {
      var o3, i3 = camelCase(n5 || "top-center");
      return __assign2(__assign2({}, e3), ((o3 = {})[i3] = e3[i3].filter(function(n6) {
        return n6.id !== t4;
      }), o3));
    });
  }, c2 = ["Left", "Center", "Right"];
  return import_react4.default.createElement(import_react4.default.Fragment, null, ["top", "bottom"].map(function(t4) {
    return import_react4.default.createElement("div", { key: "row_" + t4, className: "ct-row" }, c2.map(function(n5) {
      var o3 = "" + t4 + n5, a3 = ["ct-group", t4 === "bottom" ? "ct-flex-bottom" : ""].join(" ");
      return import_react4.default.createElement("div", { key: o3, className: a3 }, i2[o3].map(function(t5) {
        return import_react4.default.createElement(Toast, __assign2({ key: o3 + "_" + t5.id }, t5, { id: t5.id, text: t5.text, type: t5.type, onClick: t5.onClick, hideAfter: t5.hideAfter, show: e2 !== t5.id, onHide: r3 }));
      }));
    }));
  }));
};
function styleInject(t3, n4) {
  n4 === void 0 && (n4 = {});
  var e2 = n4.insertAt;
  if (t3 && typeof document != "undefined") {
    var o2 = document.head || document.getElementsByTagName("head")[0], i2 = document.createElement("style");
    i2.type = "text/css", e2 === "top" && o2.firstChild ? o2.insertBefore(i2, o2.firstChild) : o2.appendChild(i2), i2.styleSheet ? i2.styleSheet.cssText = t3 : i2.appendChild(document.createTextNode(t3));
  }
}
ToastContainer.propTypes = { toast: (0, import_prop_types2.shape)({}), hiddenID: import_prop_types2.number }, ToastContainer.defaultProps = { toast: void 0, hiddenID: void 0 };
var css_248z = "#ct-container {\n	position: fixed;\n	width: 100%;\n	height: 100vh;\n	top: 0px;\n	left: 0px;\n	z-index: 2000;\n	display: flex;\n	flex-direction: column;\n	justify-content: space-between;\n	pointer-events: none;\n	overflow: hidden;\n}\n\n.ct-row {\n	display: flex;\n	justify-content: space-between;\n}\n\n.ct-group {\n	flex: 1;\n	margin: 10px 20px;\n	display: flex;\n	flex-direction: column;\n	align-items: center;\n}\n\n.ct-group:first-child {\n	align-items: flex-start;\n}\n\n.ct-group:last-child {\n	align-items: flex-end;\n}\n\n.ct-flex-bottom {\n	justify-content: flex-end;\n}\n\n.ct-toast {\n	display: flex;\n	justify-content: center;\n	align-items: center;\n	padding: 12px 20px;\n	background-color: #fff;\n	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n	color: #000;\n	border-radius: 4px;\n	margin: 0px;\n	opacity: 1;\n	transition: 0.3s all ease-in-out;\n	min-height: 45px;\n	pointer-events: all;\n}\n\n.ct-toast:focus {\n	outline: none;\n}\n\n.ct-toast svg {\n	min-width: 18px;\n}\n\n.ct-cursor-pointer {\n	cursor: pointer;\n}\n\n.ct-icon-loading {\n	display: inline-block;\n	width: 20px;\n	height: 20px;\n}\n\n.ct-icon-loading:after {\n	content: ' ';\n	display: block;\n	width: 14px;\n	height: 14px;\n	margin: 1px;\n	border-radius: 50%;\n	border: 2px solid #0088ff;\n	border-color: #0088ff transparent #0088ff transparent;\n	animation: ct-icon-loading 1.2s linear infinite;\n}\n\n@keyframes ct-icon-loading {\n	0% {\n		transform: rotate(0deg);\n	}\n	100% {\n		transform: rotate(360deg);\n	}\n}\n\n.ct-text-group {\n	margin-left: 15px;\n}\n\n.ct-text-group-heading {\n	margin-left: 25px;\n}\n\n.ct-heading {\n	font-size: 18px;\n	margin: 0px;\n	margin-bottom: 5px;\n}\n\n.ct-text {\n	font-size: 14px;\n}\n\n@media (max-width: 768px) {\n	.ct-row {\n		justify-content: flex-start;\n		flex-direction: column;\n		margin: 7px 0px;\n	}\n\n	.ct-group {\n		flex: none;\n		margin: 0px;\n	}\n\n	.ct-toast {\n		margin: 8px 15px;\n		width: initial;\n	}\n}\n";
styleInject(css_248z);
var ctToastCount = 0;
var cogoToast = function(t3, n4) {
  var e2 = document.getElementById((n4 == null ? void 0 : n4.toastContainerID) || "ct-container");
  e2 || ((e2 = document.createElement("div")).id = "ct-container", document.body.appendChild(e2)), ctToastCount += 1;
  var o2 = 1e3 * ((n4 == null ? void 0 : n4.hideAfter) === void 0 ? 3 : n4.hideAfter), i2 = __assign2({ id: ctToastCount, text: t3 }, n4);
  import_react_dom3.default.render(import_react4.default.createElement(ToastContainer, { toast: i2 }), e2);
  var a2 = new Promise(function(t4) {
    setTimeout(function() {
      t4();
    }, o2);
  });
  return a2.hide = function() {
    import_react_dom3.default.render(import_react4.default.createElement(ToastContainer, { hiddenID: i2.id }), e2);
  }, a2;
};
cogoToast.success = function(t3, n4) {
  return cogoToast(t3, __assign2(__assign2({}, n4), { type: "success" }));
}, cogoToast.warn = function(t3, n4) {
  return cogoToast(t3, __assign2(__assign2({}, n4), { type: "warn" }));
}, cogoToast.info = function(t3, n4) {
  return cogoToast(t3, __assign2(__assign2({}, n4), { type: "info" }));
}, cogoToast.error = function(t3, n4) {
  return cogoToast(t3, __assign2(__assign2({}, n4), { type: "error" }));
}, cogoToast.loading = function(t3, n4) {
  return cogoToast(t3, __assign2(__assign2({}, n4), { type: "loading" }));
};
var index_es_default = cogoToast;

// node_modules/react-icons/vsc/index.esm.js
init_react();
function VscNewFile(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 16 16", "fill": "currentColor" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "clipRule": "evenodd", "d": "M9.5 1.1l3.4 3.5.1.4v2h-1V6H8V2H3v11h4v1H2.5l-.5-.5v-12l.5-.5h6.7l.3.1zM9 2v3h2.9L9 2zm4 14h-1v-3H9v-1h3V9h1v3h3v1h-3v3z" } }] })(props);
}

// node_modules/uuid/dist/esm-browser/index.js
init_react();

// node_modules/uuid/dist/esm-browser/rng.js
init_react();
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== "undefined" && typeof msCrypto.getRandomValues === "function" && msCrypto.getRandomValues.bind(msCrypto);
    if (!getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
  }
  return getRandomValues(rnds8);
}

// node_modules/uuid/dist/esm-browser/stringify.js
init_react();

// node_modules/uuid/dist/esm-browser/validate.js
init_react();

// node_modules/uuid/dist/esm-browser/regex.js
init_react();
var regex_default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

// node_modules/uuid/dist/esm-browser/validate.js
function validate(uuid) {
  return typeof uuid === "string" && regex_default.test(uuid);
}
var validate_default = validate;

// node_modules/uuid/dist/esm-browser/stringify.js
var byteToHex = [];
for (i2 = 0; i2 < 256; ++i2) {
  byteToHex.push((i2 + 256).toString(16).substr(1));
}
var i2;
function stringify(arr) {
  var offset2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var uuid = (byteToHex[arr[offset2 + 0]] + byteToHex[arr[offset2 + 1]] + byteToHex[arr[offset2 + 2]] + byteToHex[arr[offset2 + 3]] + "-" + byteToHex[arr[offset2 + 4]] + byteToHex[arr[offset2 + 5]] + "-" + byteToHex[arr[offset2 + 6]] + byteToHex[arr[offset2 + 7]] + "-" + byteToHex[arr[offset2 + 8]] + byteToHex[arr[offset2 + 9]] + "-" + byteToHex[arr[offset2 + 10]] + byteToHex[arr[offset2 + 11]] + byteToHex[arr[offset2 + 12]] + byteToHex[arr[offset2 + 13]] + byteToHex[arr[offset2 + 14]] + byteToHex[arr[offset2 + 15]]).toLowerCase();
  if (!validate_default(uuid)) {
    throw TypeError("Stringified UUID is invalid");
  }
  return uuid;
}
var stringify_default = stringify;

// node_modules/uuid/dist/esm-browser/v4.js
init_react();
function v4(options, buf, offset2) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset2 = offset2 || 0;
    for (var i2 = 0; i2 < 16; ++i2) {
      buf[offset2 + i2] = rnds[i2];
    }
    return buf;
  }
  return stringify_default(rnds);
}
var v4_default = v4;

// node_modules/react-bricks/react-bricks.esm.js
var import_lodash = __toESM(require_lodash());

// node_modules/rc-switch/es/index.js
init_react();

// node_modules/@babel/runtime/helpers/esm/defineProperty.js
init_react();
function _defineProperty5(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

// node_modules/@babel/runtime/helpers/esm/slicedToArray.js
init_react();

// node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
init_react();
function _arrayWithHoles3(arr) {
  if (Array.isArray(arr))
    return arr;
}

// node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
init_react();
function _iterableToArrayLimit3(arr, i2) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n2 = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n2 = (_s = _i.next()).done); _n2 = true) {
      _arr.push(_s.value);
      if (i2 && _arr.length === i2)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n2 && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}

// node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
init_react();

// node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
init_react();
function _arrayLikeToArray3(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
    arr2[i2] = arr[i2];
  }
  return arr2;
}

// node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
function _unsupportedIterableToArray3(o2, minLen) {
  if (!o2)
    return;
  if (typeof o2 === "string")
    return _arrayLikeToArray3(o2, minLen);
  var n4 = Object.prototype.toString.call(o2).slice(8, -1);
  if (n4 === "Object" && o2.constructor)
    n4 = o2.constructor.name;
  if (n4 === "Map" || n4 === "Set")
    return Array.from(o2);
  if (n4 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n4))
    return _arrayLikeToArray3(o2, minLen);
}

// node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
init_react();
function _nonIterableRest3() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// node_modules/@babel/runtime/helpers/esm/slicedToArray.js
function _slicedToArray3(arr, i2) {
  return _arrayWithHoles3(arr) || _iterableToArrayLimit3(arr, i2) || _unsupportedIterableToArray3(arr, i2) || _nonIterableRest3();
}

// node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
init_react();

// node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
init_react();
function _objectWithoutPropertiesLoose5(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}

// node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
function _objectWithoutProperties4(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose5(source, excluded);
  var key, i2;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
      key = sourceSymbolKeys[i2];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}

// node_modules/rc-switch/es/index.js
var React7 = __toESM(require_react());
var import_classnames = __toESM(require_classnames());

// node_modules/rc-util/es/hooks/useMergedState.js
init_react();
var React6 = __toESM(require_react());
function useControlledState(defaultStateValue, option) {
  var _ref = option || {}, defaultValue = _ref.defaultValue, value = _ref.value, onChange = _ref.onChange, postState = _ref.postState;
  var _React$useState = React6.useState(function() {
    if (value !== void 0) {
      return value;
    }
    if (defaultValue !== void 0) {
      return typeof defaultValue === "function" ? defaultValue() : defaultValue;
    }
    return typeof defaultStateValue === "function" ? defaultStateValue() : defaultStateValue;
  }), _React$useState2 = _slicedToArray3(_React$useState, 2), innerValue = _React$useState2[0], setInnerValue = _React$useState2[1];
  var mergedValue = value !== void 0 ? value : innerValue;
  if (postState) {
    mergedValue = postState(mergedValue);
  }
  var onChangeRef = React6.useRef(onChange);
  onChangeRef.current = onChange;
  var triggerChange = React6.useCallback(function(newValue) {
    setInnerValue(newValue);
    if (mergedValue !== newValue && onChangeRef.current) {
      onChangeRef.current(newValue, mergedValue);
    }
  }, [mergedValue, onChangeRef]);
  var firstRenderRef = React6.useRef(true);
  React6.useEffect(function() {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    if (value === void 0) {
      setInnerValue(value);
    }
  }, [value]);
  return [mergedValue, triggerChange];
}

// node_modules/rc-util/es/KeyCode.js
init_react();
var KeyCode = {
  MAC_ENTER: 3,
  BACKSPACE: 8,
  TAB: 9,
  NUM_CENTER: 12,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  PAUSE: 19,
  CAPS_LOCK: 20,
  ESC: 27,
  SPACE: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  PRINT_SCREEN: 44,
  INSERT: 45,
  DELETE: 46,
  ZERO: 48,
  ONE: 49,
  TWO: 50,
  THREE: 51,
  FOUR: 52,
  FIVE: 53,
  SIX: 54,
  SEVEN: 55,
  EIGHT: 56,
  NINE: 57,
  QUESTION_MARK: 63,
  A: 65,
  B: 66,
  C: 67,
  D: 68,
  E: 69,
  F: 70,
  G: 71,
  H: 72,
  I: 73,
  J: 74,
  K: 75,
  L: 76,
  M: 77,
  N: 78,
  O: 79,
  P: 80,
  Q: 81,
  R: 82,
  S: 83,
  T: 84,
  U: 85,
  V: 86,
  W: 87,
  X: 88,
  Y: 89,
  Z: 90,
  META: 91,
  WIN_KEY_RIGHT: 92,
  CONTEXT_MENU: 93,
  NUM_ZERO: 96,
  NUM_ONE: 97,
  NUM_TWO: 98,
  NUM_THREE: 99,
  NUM_FOUR: 100,
  NUM_FIVE: 101,
  NUM_SIX: 102,
  NUM_SEVEN: 103,
  NUM_EIGHT: 104,
  NUM_NINE: 105,
  NUM_MULTIPLY: 106,
  NUM_PLUS: 107,
  NUM_MINUS: 109,
  NUM_PERIOD: 110,
  NUM_DIVISION: 111,
  F1: 112,
  F2: 113,
  F3: 114,
  F4: 115,
  F5: 116,
  F6: 117,
  F7: 118,
  F8: 119,
  F9: 120,
  F10: 121,
  F11: 122,
  F12: 123,
  NUMLOCK: 144,
  SEMICOLON: 186,
  DASH: 189,
  EQUALS: 187,
  COMMA: 188,
  PERIOD: 190,
  SLASH: 191,
  APOSTROPHE: 192,
  SINGLE_QUOTE: 222,
  OPEN_SQUARE_BRACKET: 219,
  BACKSLASH: 220,
  CLOSE_SQUARE_BRACKET: 221,
  WIN_KEY: 224,
  MAC_FF_META: 224,
  WIN_IME: 229,
  isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e2) {
    var keyCode = e2.keyCode;
    if (e2.altKey && !e2.ctrlKey || e2.metaKey || keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
      return false;
    }
    switch (keyCode) {
      case KeyCode.ALT:
      case KeyCode.CAPS_LOCK:
      case KeyCode.CONTEXT_MENU:
      case KeyCode.CTRL:
      case KeyCode.DOWN:
      case KeyCode.END:
      case KeyCode.ESC:
      case KeyCode.HOME:
      case KeyCode.INSERT:
      case KeyCode.LEFT:
      case KeyCode.MAC_FF_META:
      case KeyCode.META:
      case KeyCode.NUMLOCK:
      case KeyCode.NUM_CENTER:
      case KeyCode.PAGE_DOWN:
      case KeyCode.PAGE_UP:
      case KeyCode.PAUSE:
      case KeyCode.PRINT_SCREEN:
      case KeyCode.RIGHT:
      case KeyCode.SHIFT:
      case KeyCode.UP:
      case KeyCode.WIN_KEY:
      case KeyCode.WIN_KEY_RIGHT:
        return false;
      default:
        return true;
    }
  },
  isCharacterKey: function isCharacterKey(keyCode) {
    if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
      return true;
    }
    if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
      return true;
    }
    if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
      return true;
    }
    if (window.navigator.userAgent.indexOf("WebKit") !== -1 && keyCode === 0) {
      return true;
    }
    switch (keyCode) {
      case KeyCode.SPACE:
      case KeyCode.QUESTION_MARK:
      case KeyCode.NUM_PLUS:
      case KeyCode.NUM_MINUS:
      case KeyCode.NUM_PERIOD:
      case KeyCode.NUM_DIVISION:
      case KeyCode.SEMICOLON:
      case KeyCode.DASH:
      case KeyCode.EQUALS:
      case KeyCode.COMMA:
      case KeyCode.PERIOD:
      case KeyCode.SLASH:
      case KeyCode.APOSTROPHE:
      case KeyCode.SINGLE_QUOTE:
      case KeyCode.OPEN_SQUARE_BRACKET:
      case KeyCode.BACKSLASH:
      case KeyCode.CLOSE_SQUARE_BRACKET:
        return true;
      default:
        return false;
    }
  }
};
var KeyCode_default = KeyCode;

// node_modules/rc-switch/es/index.js
var Switch = React7.forwardRef(function(_ref, ref) {
  var _classNames;
  var _ref$prefixCls = _ref.prefixCls, prefixCls = _ref$prefixCls === void 0 ? "rc-switch" : _ref$prefixCls, className = _ref.className, checked = _ref.checked, defaultChecked = _ref.defaultChecked, disabled = _ref.disabled, loadingIcon = _ref.loadingIcon, checkedChildren = _ref.checkedChildren, unCheckedChildren = _ref.unCheckedChildren, onClick = _ref.onClick, onChange = _ref.onChange, onKeyDown = _ref.onKeyDown, restProps = _objectWithoutProperties4(_ref, ["prefixCls", "className", "checked", "defaultChecked", "disabled", "loadingIcon", "checkedChildren", "unCheckedChildren", "onClick", "onChange", "onKeyDown"]);
  var _useMergedState = useControlledState(false, {
    value: checked,
    defaultValue: defaultChecked
  }), _useMergedState2 = _slicedToArray3(_useMergedState, 2), innerChecked = _useMergedState2[0], setInnerChecked = _useMergedState2[1];
  function triggerChange(newChecked, event) {
    var mergedChecked = innerChecked;
    if (!disabled) {
      mergedChecked = newChecked;
      setInnerChecked(mergedChecked);
      onChange === null || onChange === void 0 ? void 0 : onChange(mergedChecked, event);
    }
    return mergedChecked;
  }
  function onInternalKeyDown(e2) {
    if (e2.which === KeyCode_default.LEFT) {
      triggerChange(false, e2);
    } else if (e2.which === KeyCode_default.RIGHT) {
      triggerChange(true, e2);
    }
    onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(e2);
  }
  function onInternalClick(e2) {
    var ret = triggerChange(!innerChecked, e2);
    onClick === null || onClick === void 0 ? void 0 : onClick(ret, e2);
  }
  var switchClassName = (0, import_classnames.default)(prefixCls, className, (_classNames = {}, _defineProperty5(_classNames, "".concat(prefixCls, "-checked"), innerChecked), _defineProperty5(_classNames, "".concat(prefixCls, "-disabled"), disabled), _classNames));
  return React7.createElement("button", Object.assign({}, restProps, {
    type: "button",
    role: "switch",
    "aria-checked": innerChecked,
    disabled,
    className: switchClassName,
    ref,
    onKeyDown: onInternalKeyDown,
    onClick: onInternalClick
  }), loadingIcon, React7.createElement("span", {
    className: "".concat(prefixCls, "-inner")
  }, innerChecked ? checkedChildren : unCheckedChildren));
});
Switch.displayName = "Switch";
var es_default2 = Switch;

// node_modules/react-bricks/react-bricks.esm.js
var import_copy_to_clipboard = __toESM(require_copy_to_clipboard());
var import_react_copy_to_clipboard = __toESM(require_lib4());
var import_react_error_boundary = __toESM(require_react_error_boundary_umd());
var import_react_dom4 = __toESM(require_react_dom());

// node_modules/react-icons/ai/index.esm.js
init_react();
function AiOutlineDelete(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 1024 1024" }, "child": [{ "tag": "path", "attr": { "d": "M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z" } }] })(props);
}

// node_modules/react-bricks/react-bricks.esm.js
var import_color = __toESM(require_color());
var Kt = function(e2, t3, n4) {
  if (Text.isText(e2))
    return t3.filter(function(e3) {
      return e3.type === "Mark";
    }).reduce(function(t4, n5) {
      return e2[n5.name] ? n5.renderLeaf({ children: t4 }) : t4;
    }, e2.text);
  var r3 = t3.filter(function(e3) {
    return e3.type === "List";
  }).find(function(t4) {
    return e2.type === t4.name;
  });
  if (r3) {
    var a2 = Qt(e2, t3);
    return r3.renderElement({ children: a2.map(function(e3, t4) {
      return ue2.createElement(ue2.Fragment, { key: t4 }, r3.renderItemElement({ children: e3 }));
    }), element: { url: e2.url } });
  }
  var o2 = Qt(e2, t3, n4), i2 = t3.filter(function(e3) {
    return e3.type === "Block";
  }).find(function(t4) {
    return e2.type === t4.name;
  });
  return i2 ? i2.renderElement({ children: o2, element: { url: e2.url } }) : n4 ? n4({ children: o2, element: { type: "", children: [] }, attributes: { ref: null } }) : o2;
};
var Qt = function(e2, t3, n4) {
  var r3;
  return (r3 = e2.children) === null || r3 === void 0 ? void 0 : r3.map(function(e3, r4) {
    return ue2.createElement(ue2.Fragment, { key: r4 }, Kt(e3, t3, n4));
  });
};
var qt = ue2.createContext({ isAdmin: false, currentPage: { pageId: "" }, setCurrentPage: function() {
}, previewMode: false, setPreviewMode: function() {
}, sidebarCollapsed: false, setSidebarCollapsed: function() {
}, getStyles: function() {
  return [];
}, getStylesheets: function() {
  return [];
} });
var Zt = function(t3) {
  var n4 = t3.normalizeNode;
  return t3.normalizeNode = function(r3) {
    var a2 = v(r3, 2), o2 = a2[0], i2 = a2[1];
    return i2.length === 0 && t3.children.length > 1 && Transforms.mergeNodes(t3), n4([o2, i2]);
  }, t3;
};
var Gt = [{ type: "paragraph", children: [{ text: "New text" }] }];
var _t = typeof window != "undefined" && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform);
var $t = function(e2) {
  var t3 = e2.rtRef, n4 = e2.plugins, r3 = e2.blockRef, a2 = useSlate(), o2 = a2.selection;
  if (!o2 || !ReactEditor.isFocused(a2) || Range.isCollapsed(o2) || Editor.string(a2, o2) === "")
    return null;
  var i2 = document.getElementById("rb-admin-frame"), l2 = i2 && i2.contentWindow && i2.contentWindow.document.getElementById("rb-content-frame"), c2 = l2 && l2.contentWindow ? l2.contentWindow.getSelection() : null;
  if (!c2)
    return null;
  if ((c2 == null ? void 0 : c2.rangeCount) === 0)
    return null;
  var s3 = c2 ? c2.getRangeAt(0) : null, d2 = s3 ? s3.getBoundingClientRect() : null;
  if (!d2)
    return null;
  var u2 = t3.current && t3.current.getBoundingClientRect(), m2 = r3.current && r3.current.getBoundingClientRect(), p3 = 38 * n4.length, g3 = m2.width, f3 = u2.x - m2.x, h3 = d2.left - u2.left + (d2.width - p3) / 2;
  return h3 = (h3 = h3 < 3 - f3 ? 3 - f3 : h3) + p3 + f3 + 3 > g3 ? g3 - f3 - p3 - 3 : h3, ue2.createElement("div", null, ue2.createElement("style", null, "\n.toolbar {\n  display: flex;\n  background-color: #1a202c;\n  overflow: hidden;\n  font-size: 0.875rem;\n  border-radius: 0.25rem;\n}\n\n.toolbar button {\n  font-family: inherit;\n  font-size: 100%;\n  line-height: 1.15;\n  margin: 0;\n  overflow: visible;\n  -webkit-appearance: button;\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n  cursor: pointer;\n  border: none;\n  background-color: transparent;\n}\n.toolbar button:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n.toolbar button {\n  padding: 0.75rem;\n}"), ue2.createElement("div", { className: "toolbar", style: { position: "absolute", zIndex: 100, top: d2.top - u2.top - 42, left: h3 } }, n4.map(function(e3) {
    if (!e3.button)
      return null;
    var r4 = {};
    e3.button.isActive(a2) ? (r4.color = "#f6e05e", r4.backgroundColor = "black") : r4.color = "white";
    var o3 = e3.hotKey ? _t ? e3.hotKey.replace("mod", "cmd") : e3.hotKey.replace("mod", "ctrl") : "";
    return ue2.createElement(tippy_react_esm_default, { key: e3.name, appendTo: t3.current, content: "".concat(e3.label).concat(e3.hotKey ? " (".concat(o3, ")") : "") }, ue2.createElement("button", { style: r4, onMouseDown: function(t4) {
      t4.preventDefault(), e3.toggle(a2, n4);
    } }, e3.button.icon));
  })));
};
var en2 = function(e2) {
  var t3 = e2.renderBlock, r3 = e2.placeholder, a2 = e2.renderPlaceholder, o2 = e2.propName, l2 = e2.plugins, s3 = l2 === void 0 ? [] : l2, u2 = e2.multiline, p3 = u2 === void 0 || u2, g3 = (0, import_react5.useRef)(null), f3 = withHistory(withReact(createEditor()));
  s3.forEach(function(e3) {
    if (e3.isInline) {
      var t4 = f3.isInline;
      f3.isInline = function(n4) {
        return n4.type === e3.name || t4(n4);
      };
    }
    e3.enhanceEditor && (f3 = e3.enhanceEditor(f3));
  }), p3 || (f3 = Zt(f3));
  var h3 = (0, import_react5.useMemo)(function() {
    return f3;
  }, []), b3 = (0, import_react5.useContext)(qt), v3 = b3.isAdmin, x2 = b3.previewMode, y3 = (0, import_react5.useContext)(E), w2 = y3.values, k3 = y3.onChange, E3 = y3.contentRef, C2 = x2 || !v3, A3 = w2[o2], N2 = (0, import_react5.useCallback)(function(e3) {
    var t4 = e3.children, n4 = e3.attributes;
    if (!a2)
      return null;
    n4.style;
    var r4 = m(n4, ["style"]);
    return ue2.cloneElement(a2({ children: t4 }), r4);
  }, [w2]), S2 = (0, import_react5.useCallback)(function(e3) {
    var n4 = e3.element, r4 = e3.children, a3 = e3.attributes, o3 = s3.find(function(e4) {
      return e4.renderElement && n4.type === e4.name;
    });
    if (o3 && o3.renderElement)
      return o3.renderElement({ element: n4, children: r4, attributes: a3 });
    var i2 = s3.find(function(e4) {
      return e4.renderItemElement && n4.type === e4.itemName;
    });
    return i2 && i2.renderItemElement ? i2.renderItemElement({ element: n4, children: r4, attributes: a3 }) : ue2.cloneElement(t3({ children: r4, attributes: a3, element: n4 }), a3);
  }, [w2]), I3 = (0, import_react5.useCallback)(function(e3) {
    var t4 = e3.attributes, n4 = e3.children, r4 = e3.leaf, a3 = e3.text;
    return s3.filter(function(e4) {
      return e4.type === "Mark";
    }).forEach(function(e4) {
      r4[e4.name] && e4.renderLeaf && (n4 = e4.renderLeaf({ attributes: t4, children: n4, leaf: r4, text: a3 }));
    }), ue2.createElement("span", p({}, t4), n4);
  }, [w2]);
  if (C2) {
    var L2 = A3;
    return A3 ? (typeof A3 == "string" && (L2 = I.deserialize(A3)), ue2.createElement(ue2.Fragment, null, L2.map(function(e3, n4) {
      return ue2.createElement(ue2.Fragment, { key: n4 }, Kt(e3, s3, t3));
    }))) : null;
  }
  var B3 = A3;
  A3 ? typeof A3 == "string" && (B3 = I.deserialize(A3)) : B3 = I.deserialize("New text");
  var z2 = {};
  return a2 && (z2 = { renderPlaceholder: N2 }), ue2.createElement("div", { ref: g3, style: { position: "relative" } }, ue2.createElement(Slate, { editor: h3, value: B3, onChange: function(e3) {
    w2[o2] !== e3 && k3(o2, e3);
  } }, ue2.createElement($t, { rtRef: g3, blockRef: E3, plugins: s3 }), ue2.createElement(Editable, p({ placeholder: r3, renderElement: S2, renderLeaf: I3, readOnly: C2, onKeyDown: function(e3) {
    var t4, n4;
    try {
      for (var r4 = h(s3), a3 = r4.next(); !a3.done; a3 = r4.next()) {
        var o3 = a3.value;
        o3.hotKey && (0, import_is_hotkey2.default)(o3.hotKey, e3) && o3.toggle(h3, s3);
      }
    } catch (e4) {
      t4 = { error: e4 };
    } finally {
      try {
        a3 && !a3.done && (n4 = r4.return) && n4.call(r4);
      } finally {
        if (t4)
          throw t4.error;
      }
    }
  } }, z2))));
};
var tn2 = function(e2, t3) {
  var n4 = Editor.marks(e2);
  return !!n4 && n4[t3] === true;
};
var nn2 = function(e2) {
  var t3 = { type: "Mark", name: e2.name, label: e2.label || e2.name[0].toUpperCase() + e2.name.slice(1), hotKey: e2.hotKey, renderLeaf: e2.render, toggle: function(t4) {
    !function(e3, t5) {
      var n4, r3 = tn2(e3, t5);
      Transforms.setNodes(e3, ((n4 = {})[t5] = !r3 || null, n4), { match: Text.isText, split: true });
    }(t4, e2.name);
  } };
  return e2.icon && (t3.button = { isActive: function(t4) {
    return tn2(t4, e2.name);
  }, icon: e2.icon }), t3;
};
var rn2 = nn2({ name: "bold", hotKey: "mod+b", render: function(e2) {
  return ue2.createElement("strong", null, e2.children);
}, icon: ue2.createElement(FaBold, null) });
var an2 = nn2({ name: "italic", hotKey: "mod+i", render: function(e2) {
  return ue2.createElement("em", null, e2.children);
}, icon: ue2.createElement(FaItalic, null) });
var on2 = nn2({ name: "code", hotKey: "mod+`", render: function(e2) {
  return ue2.createElement("code", { style: { margin: "0 1px", display: "inline-block", padding: "3px 6px", fontSize: "0.875rem", lineHeight: 1.25, maxWidth: "100%", fontFamily: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace', borderRadius: "3px", backgroundColor: "#F5F7F9" } }, e2.children);
}, icon: ue2.createElement(FaCode, null) });
var ln2 = nn2({ name: "highlight", hotKey: "mod+h", render: function(e2) {
  return ue2.createElement("mark", { style: { paddingLeft: 4, paddingRight: 4, borderRadius: 2, backgroundColor: "#ff0", color: "#0f0f05" } }, e2.children);
}, icon: ue2.createElement(FaHighlighter, null) });
var cn2 = /^((((?:\w+:)?\/\/)(\S+))|(mailto:(\S+@)(\S+))|(tel:(\S+)))$/;
var sn2 = /^localhost[\:?\d]*(?:[^\:?\d]\S*)?$/;
var dn2 = /^[^\s\.]+\.\S{2,}$/;
var un2 = /^((mailto:(\S+@)(\S+))|(tel:(\S+)))$/;
function mn(e2) {
  if (typeof e2 != "string")
    return false;
  var t3 = e2.match(cn2);
  if (!t3)
    return false;
  var n4 = t3[1];
  return !!n4 && !!(sn2.test(n4) || dn2.test(n4) || un2.test(n4));
}
var pn2;
var gn = function(e2) {
  var t3 = e2.href, n4 = e2.children, r3 = e2.target, a2 = e2.className, o2 = m(e2, ["href", "children", "target", "className"]), i2 = (0, import_react5.useContext)(A).renderLocalLink, l2 = (0, import_react5.useContext)(qt), s3 = l2.isAdmin, u2 = l2.previewMode, m2 = !s3 || u2, p3 = m2 ? { href: t3 } : {};
  return /^\/(?!\/)/.test(t3) ? i2 && m2 ? i2(p({ href: t3, target: r3, children: n4, className: a2 }, o2)) : (i2 || console.warn("Local path found in Link, but no renderLocalLink function was provided. Rendering <a> as fallback"), ue2.createElement("a", p({}, p3, { target: r3, className: a2 }, o2), n4)) : ue2.createElement("a", p({}, p3, { target: r3, className: a2 }, o2), n4);
};
var fn4 = function(e2, t3) {
  e2.selection && vn2(e2, t3);
};
var hn = function(e2) {
  var t3 = Editor.nodes(e2, { match: function(e3) {
    return !Editor.isEditor(e3) && Element2.isElement(e3) && e3.type === "link";
  } }).next().value;
  return !!t3 && !!t3[0];
};
var bn = function(e2) {
  Transforms.unwrapNodes(e2, { match: function(e3) {
    return !Editor.isEditor(e3) && Element2.isElement(e3) && e3.type === "link";
  } });
};
var vn2 = function(e2, t3) {
  hn(e2) && bn(e2);
  var n4 = e2.selection, r3 = n4 && Range.isCollapsed(n4), a2 = { type: "link", url: t3, children: r3 ? [{ text: t3 }] : [] };
  r3 ? Transforms.insertNodes(e2, a2) : (Transforms.wrapNodes(e2, a2, { split: true }), Transforms.collapse(e2, { edge: "end" }));
};
var xn = { type: "Block", name: "link", label: "Link", isInline: true, renderElement: function(e2) {
  var t3 = e2.attributes, n4 = e2.children, r3 = e2.element;
  return ue2.createElement(gn, p({}, t3, { href: r3.url }), n4);
}, toggle: function(e2) {
  if (hn(e2)) {
    var t3 = function(e3) {
      var t4 = Editor.nodes(e3, { match: function(e4) {
        return !Editor.isEditor(e4) && Element2.isElement(e4) && e4.type === "link";
      } }).next().value;
      return t4 && t4[0] || null;
    }(e2);
    (n4 = window.prompt("Enter the URL of the link:", (t3 == null ? void 0 : t3.url) || "")) === "" ? bn(e2) : n4 && fn4(e2, n4);
  } else {
    var n4, r3 = function(e3) {
      return e3 && e3.selection ? Editor.string(e3, e3.selection) : "";
    }(e2), a2 = r3 && mn(r3) ? r3 : "";
    (n4 = window.prompt("Enter the URL of the link:", a2)) && fn4(e2, n4);
  }
}, button: { isActive: function(e2) {
  return hn(e2);
}, icon: ue2.createElement(FaLink, null) }, enhanceEditor: function(e2) {
  var t3 = e2.insertText, n4 = e2.insertData;
  return e2.insertText = function(n5) {
    n5 && mn(n5) ? vn2(e2, n5) : t3(n5);
  }, e2.insertData = function(t4) {
    var r3 = t4.getData("text/plain");
    r3 && mn(r3) ? vn2(e2, r3) : n4(t4);
  }, e2;
} };
var yn = function(e2, t3) {
  var n4 = Editor.nodes(e2, { match: function(e3) {
    return !Editor.isEditor(e3) && Element2.isElement(e3) && e3.type === t3;
  } }).next().value;
  return !!n4 && !!n4[0];
};
var wn = function(e2) {
  var t3 = { type: e2.itemName ? "List" : "Block", name: e2.name, isInline: e2.isInline, itemName: e2.itemName, label: e2.label || e2.name[0].toUpperCase() + e2.name.slice(1), hotKey: e2.hotKey, renderElement: e2.render, renderItemElement: e2.renderItem, toggle: function(t4, n4) {
    !function(e3, t5, n5, r3) {
      var a2 = yn(e3, n5), o2 = !!r3;
      Transforms.unwrapNodes(e3, { match: function(e4) {
        var n6 = !Editor.isEditor(e4) && Element2.isElement(e4) ? e4.type : "";
        return !!n6 && t5.includes(n6);
      }, split: true });
      var i2 = { type: a2 ? "paragraph" : r3 || n5 };
      if (Transforms.setNodes(e3, i2), !a2 && o2) {
        var l2 = { type: n5, children: [] };
        Transforms.wrapNodes(e3, l2);
      }
    }(t4, n4.filter(function(e3) {
      return e3.type === "List";
    }).map(function(e3) {
      return e3.name;
    }), e2.name, e2.itemName);
  } };
  return e2.icon && (t3.button = { isActive: function(t4) {
    return yn(t4, e2.name);
  }, icon: e2.icon }), t3;
};
var kn = wn({ name: "h1", hotKey: "mod+shift+1", render: function(e2) {
  return ue2.createElement("h1", null, e2.children);
}, icon: ue2.createElement(MdLooksOne, null) });
var En = wn({ name: "h2", hotKey: "mod+shift+2", render: function(e2) {
  return ue2.createElement("h2", null, e2.children);
}, icon: ue2.createElement(MdLooksTwo, null) });
var Cn = wn({ name: "h3", hotKey: "mod+shift+3", render: function(e2) {
  return ue2.createElement("h3", null, e2.children);
}, icon: ue2.createElement(MdLooks3, null) });
var An = wn({ name: "h4", hotKey: "mod+shift+4", render: function(e2) {
  return ue2.createElement("h4", null, e2.children);
}, icon: ue2.createElement(MdLooks4, null) });
var Nn = wn({ name: "h5", hotKey: "mod+shift+5", render: function(e2) {
  return ue2.createElement("h5", null, e2.children);
}, icon: ue2.createElement(MdLooks5, null) });
var Sn = wn({ name: "h6", hotKey: "mod+shift+6", render: function(e2) {
  return ue2.createElement("h6", null, e2.children);
}, icon: ue2.createElement(MdLooks6, null) });
var In = wn({ name: "quote", render: function(e2) {
  return ue2.createElement("blockquote", null, e2.children);
}, icon: ue2.createElement(FaQuoteRight, null) });
var Ln = wn({ name: "ol", label: "Number list", itemName: "li", render: function(e2) {
  return ue2.createElement("ol", { className: "list-decimal" }, e2.children);
}, renderItem: function(e2) {
  return ue2.createElement("li", null, e2.children);
}, icon: ue2.createElement(FaListOl, null) });
var Bn = wn({ name: "ul", label: "Bullet list", itemName: "li", render: function(e2) {
  return ue2.createElement("ul", { className: "list-disc" }, e2.children);
}, renderItem: function(e2) {
  return ue2.createElement("li", null, e2.children);
}, icon: ue2.createElement(FaListUl, null) });
var zn = Object.freeze({ __proto__: null, bold: rn2, italic: an2, code: on2, highlight: ln2, link: xn, heading1: kn, heading2: En, heading3: Cn, heading4: An, heading5: Nn, heading6: Sn, quote: In, orderedList: Ln, unorderedList: Bn });
var Dn = ((pn2 = {})[b.RichTextFeatures.Bold] = { newPlugin: rn2, renderLeaf: "renderBold" }, pn2[b.RichTextFeatures.Italic] = { newPlugin: an2, renderLeaf: "renderBold" }, pn2[b.RichTextFeatures.Highlight] = { newPlugin: ln2, renderLeaf: "renderHighlight" }, pn2[b.RichTextFeatures.Code] = { newPlugin: on2, renderLeaf: "renderCode" }, pn2[b.RichTextFeatures.Link] = { newPlugin: xn, renderLink: "renderLink" }, pn2[b.RichTextFeatures.UnorderedList] = { newPlugin: Bn, renderElement: "renderUL", renderItemElement: "renderLI" }, pn2[b.RichTextFeatures.OrderedList] = { newPlugin: Ln, renderElement: "renderOL", renderItemElement: "renderLI" }, pn2[b.RichTextFeatures.Heading1] = { newPlugin: kn, renderElement: "renderH1" }, pn2[b.RichTextFeatures.Heading2] = { newPlugin: En, renderElement: "renderH2" }, pn2[b.RichTextFeatures.Heading3] = { newPlugin: Cn, renderElement: "renderH3" }, pn2[b.RichTextFeatures.Heading4] = { newPlugin: An, renderElement: "renderH4" }, pn2[b.RichTextFeatures.Heading5] = { newPlugin: Nn, renderElement: "renderH5" }, pn2[b.RichTextFeatures.Heading6] = { newPlugin: Sn, renderElement: "renderH6" }, pn2[b.RichTextFeatures.Quote] = { newPlugin: In, renderElement: "renderQuote" }, pn2);
var Pn = function() {
  return import_react5.default.createElement("svg", { viewBox: "0 0 120 30", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", "aria-label": "Loader", "data-testid": "three-dots-svg" }, import_react5.default.createElement("circle", { cx: "15", cy: "15", r: "15" }, import_react5.default.createElement("animate", { attributeName: "r", from: "15", to: "15", begin: "0s", dur: "0.8s", values: "15;9;15", calcMode: "linear", repeatCount: "indefinite" }), import_react5.default.createElement("animate", { attributeName: "fill-opacity", from: "1", to: "1", begin: "0s", dur: "0.8s", values: "1;.5;1", calcMode: "linear", repeatCount: "indefinite" })), import_react5.default.createElement("circle", { cx: "60", cy: "15", r: "15", attributeName: "fill-opacity", from: "1", to: "0.3" }, import_react5.default.createElement("animate", { attributeName: "r", from: "9", to: "9", begin: "0s", dur: "0.8s", values: "9;15;9", calcMode: "linear", repeatCount: "indefinite" }), import_react5.default.createElement("animate", { attributeName: "fill-opacity", from: "0.5", to: "0.5", begin: "0s", dur: "0.8s", values: ".5;1;.5", calcMode: "linear", repeatCount: "indefinite" })), import_react5.default.createElement("circle", { cx: "105", cy: "15", r: "15" }, import_react5.default.createElement("animate", { attributeName: "r", from: "15", to: "15", begin: "0s", dur: "0.8s", values: "15;9;15", calcMode: "linear", repeatCount: "indefinite" }), import_react5.default.createElement("animate", { attributeName: "fill-opacity", from: "1", to: "1", begin: "0s", dur: "0.8s", values: "1;.5;1", calcMode: "linear", repeatCount: "indefinite" })));
};
var Tn = function() {
  return useMutation(function(e2) {
    return f(void 0, void 0, void 0, function() {
      return g(this, function(t3) {
        switch (t3.label) {
          case 0:
            return [4, import_axios.default.post("/admin/images", e2).then(function(e3) {
              return e3.data;
            })];
          case 1:
            return [2, t3.sent()];
        }
      });
    });
  }, { onSuccess: function() {
  }, onError: function() {
    index_es_default.error("An error occurred while uploading the image");
  } });
};
var Rn = function(e2) {
  var t3 = e2.width, n4 = e2.height, r3 = e2.aspectRatio, a2 = e2.ref, o2 = 1, i2 = 1;
  if (a2) {
    var l2 = a2;
    o2 = l2.naturalWidth / l2.width, i2 = l2.naturalHeight / l2.height;
  }
  var c2 = "height";
  if (!r3)
    return { unit: "px", x: 0 / o2, y: 0 / i2, width: t3 / o2, height: n4 / i2 };
  if (t3 / n4 <= r3 && (c2 = "width"), c2 === "height") {
    var s3 = n4 * r3;
    return { unit: "px", width: s3 / o2, height: n4 / i2, aspect: r3, x: (t3 - s3) / 2 / o2, y: 0 / i2 };
  }
  var d2 = t3 / r3;
  return { unit: "px", width: t3 / o2, height: d2 / i2, aspect: r3, x: 0 / o2, y: (n4 - d2) / 2 / i2 };
};
var Mn = { content: { top: "40px", left: "50%", right: "auto", bottom: "auto", transform: "translateX(-50%)", boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)", padding: 0, border: "none", minWidth: 400 }, overlay: { backgroundColor: "hsla(216, 10%, 60%, 0.7)", zIndex: 100 } };
var Fn = import_react5.default.forwardRef(function(e2, t3) {
  var n4 = e2.id, r3 = e2.type, a2 = r3 === void 0 ? "text" : r3, o2 = e2.name, i2 = e2.value, l2 = e2.onChange, c2 = e2.checked, s3 = c2 === void 0 ? void 0 : c2, d2 = e2.required, u2 = d2 !== void 0 && d2, m2 = e2.placeholder, p3 = m2 === void 0 ? "" : m2, g3 = e2.autoFocus, f3 = g3 !== void 0 && g3, h3 = e2.className, b3 = e2.style, v3 = e2.textSize, x2 = v3 === void 0 ? "sm" : v3, y3 = e2.radiusSize, w2 = y3 === void 0 ? "md" : y3, k3 = e2.disabled, E3 = k3 !== void 0 && k3;
  return import_react5.default.createElement("input", { ref: t3, id: n4, type: a2, name: o2, value: i2, onChange: l2, checked: s3, required: u2, placeholder: p3, autoFocus: f3, disabled: E3, style: b3, className: (0, import_classnames2.default)("border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50", x2 === "xs" ? "text-xs" : "text-sm", w2 === "full" || a2 === "radio" ? "rounded-full" : a2 === "checkbox" ? "rounded-sm" : "rounded-md", { "block w-full": a2 !== "radio" && a2 !== "checkbox" }, { "mr-2 text-blue-500 focus:ring-offset-0": a2 === "radio" || a2 === "checkbox" }, { "cursor-not-allowed": E3 }, h3) });
});
var On = { x: 0, y: 0, width: 0, height: 0, unit: "px" };
function Yn(e2, t3, n4) {
  return Math.min(Math.max(e2, t3), n4);
}
function Wn(e2) {
  return e2 && e2.width && !isNaN(e2.width) && e2.height && !isNaN(e2.height);
}
function Vn(e2, t3, n4) {
  if (!e2.aspect || isNaN(e2.aspect))
    return console.warn("`crop.aspect` should be a number in order to make an aspect crop", e2), p(p({}, On), e2);
  var r3 = { unit: "px", x: e2.x || 0, y: e2.y || 0, width: e2.width || 0, height: e2.height || 0, aspect: e2.aspect };
  return e2.width && (r3.height = r3.width / e2.aspect), e2.height && (r3.width = r3.height * e2.aspect), r3.y + r3.height > n4 && (r3.height = n4 - r3.y, r3.width = r3.height * e2.aspect), r3.x + r3.width > t3 && (r3.width = t3 - r3.x, r3.height = r3.width / e2.aspect), r3;
}
function jn(e2, t3, n4) {
  return e2.unit === "%" ? p(p({}, On), e2) : { unit: "%", aspect: e2.aspect, x: e2.x ? e2.x / t3 * 100 : 0, y: e2.y ? e2.y / n4 * 100 : 0, width: e2.width ? e2.width / t3 * 100 : 0, height: e2.height ? e2.height / n4 * 100 : 0 };
}
function Xn(e2, t3, n4) {
  return e2.unit ? e2.unit === "px" ? p(p({}, On), e2) : { unit: "px", aspect: e2.aspect, x: e2.x ? e2.x * t3 / 100 : 0, y: e2.y ? e2.y * n4 / 100 : 0, width: e2.width ? e2.width * t3 / 100 : 0, height: e2.height ? e2.height * n4 / 100 : 0 } : p(p(p({}, On), e2), { unit: "px" });
}
var Un;
var Hn = { capture: true, passive: false };
var Jn = function(e2) {
  function t3() {
    var n4 = e2 !== null && e2.apply(this, arguments) || this;
    return n4.keysDown = /* @__PURE__ */ new Set(), n4.docMoveBound = false, n4.mouseDownOnCrop = false, n4.dragStarted = false, n4.evData = { clientStartX: 0, clientStartY: 0, cropStartWidth: 0, cropStartHeight: 0, cropStartX: 0, cropStartY: 0, xDiff: 0, yDiff: 0, xInversed: false, yInversed: false, xCrossOver: false, yCrossOver: false, lastYCrossover: false, startXCrossOver: false, startYCrossOver: false, isResize: true, ord: "nw" }, n4.componentRef = ue2.createRef(), n4.mediaWrapperRef = ue2.createRef(), n4.imageRef = ue2.createRef(), n4.cropSelectRef = ue2.createRef(), n4.state = { cropIsActive: false, newCropIsBeingDrawn: false }, n4.onCropPointerDown = function(e3) {
      var t4 = n4.props, r3 = t4.crop, a2 = t4.disabled, o2 = n4.mediaDimensions, i2 = Xn(r3, o2.width, o2.height);
      if (!a2) {
        e3.cancelable && e3.preventDefault(), n4.bindDocMove(), n4.componentRef.current.focus({ preventScroll: true });
        var l2 = e3.target.dataset.ord, c2 = l2 === "nw" || l2 === "w" || l2 === "sw", s3 = l2 === "nw" || l2 === "n" || l2 === "ne";
        n4.evData = { clientStartX: e3.clientX, clientStartY: e3.clientY, cropStartWidth: i2.width, cropStartHeight: i2.height, cropStartX: c2 ? i2.x + i2.width : i2.x, cropStartY: s3 ? i2.y + i2.height : i2.y, xDiff: 0, yDiff: 0, xInversed: c2, yInversed: s3, xCrossOver: c2, yCrossOver: s3, lastYCrossover: s3, startXCrossOver: c2, startYCrossOver: s3, isResize: Boolean(l2), ord: l2 || "ne" }, n4.mouseDownOnCrop = true, n4.setState({ cropIsActive: true });
      }
    }, n4.onComponentPointerDown = function(e3) {
      var t4 = n4.props, r3 = t4.crop, a2 = t4.disabled, o2 = t4.locked, i2 = t4.keepSelection, l2 = t4.onChange, c2 = t4.zoom, s3 = c2 === void 0 ? 1 : c2, d2 = t4.spin, u2 = d2 === void 0 ? 0 : d2, m2 = n4.mediaWrapperRef.current.firstChild;
      if (e3.target === m2 && m2.contains(e3.target) && !(a2 || o2 || i2 && Wn(r3))) {
        e3.cancelable && e3.preventDefault(), n4.bindDocMove(), n4.componentRef.current.focus({ preventScroll: true });
        var p3 = n4.mediaWrapperRef.current.getBoundingClientRect(), g3 = 0, f3 = 0, h3 = (e3.clientX - p3.left) / s3, b3 = (e3.clientY - p3.top) / s3, v3 = u2, x2 = Math.abs(v3 * Math.PI / 180);
        v3 > -45 && v3 <= 45 || Math.abs(v3) > 135 && Math.abs(v3) <= 180 ? (g3 = h3 * Math.cos(x2), f3 = b3 * Math.cos(x2)) : v3 > 45 && v3 <= 135 ? (g3 = b3 * Math.sin(x2), f3 = h3 * Math.sin(x2) * -1) : v3 > -135 && v3 <= -45 && (g3 = b3 * Math.sin(x2) * -1, f3 = h3 * Math.sin(x2));
        var y3 = { unit: "px", aspect: r3 ? r3.aspect : void 0, x: g3, y: f3, width: 0, height: 0 };
        n4.evData = { clientStartX: e3.clientX, clientStartY: e3.clientY, cropStartWidth: y3.width, cropStartHeight: y3.height, cropStartX: y3.x, cropStartY: y3.y, xDiff: 0, yDiff: 0, xInversed: false, yInversed: false, xCrossOver: false, yCrossOver: false, lastYCrossover: false, startXCrossOver: false, startYCrossOver: false, isResize: true, ord: "nw" }, n4.mouseDownOnCrop = true;
        var w2 = n4.mediaDimensions, k3 = w2.width, E3 = w2.height;
        l2(Xn(y3, k3, E3), jn(y3, k3, E3)), n4.setState({ cropIsActive: true, newCropIsBeingDrawn: true });
      }
    }, n4.onDocPointerMove = function(e3) {
      var t4 = n4.props, r3 = t4.crop, a2 = t4.disabled, o2 = t4.onChange, i2 = t4.onDragStart, l2 = t4.zoom, c2 = l2 === void 0 ? 1 : l2, s3 = t4.spin, d2 = s3 === void 0 ? 0 : s3;
      if (!a2 && n4.mouseDownOnCrop) {
        e3.cancelable && e3.preventDefault(), n4.dragStarted || (n4.dragStarted = true, i2 && i2(e3));
        var u2, m2 = n4.evData, p3 = (e3.clientX - m2.clientStartX) / c2, g3 = (e3.clientY - m2.clientStartY) / c2, f3 = d2, h3 = Math.abs(f3 * Math.PI / 180);
        if (f3 > -45 && f3 <= 45 || Math.abs(f3) > 135 && Math.abs(f3) <= 180 ? (m2.xDiff = p3 * Math.cos(h3), m2.yDiff = g3 * Math.cos(h3)) : f3 > 45 && f3 <= 135 ? (m2.xDiff = g3 * Math.sin(h3), m2.yDiff = p3 * Math.sin(h3) * -1) : f3 > -135 && f3 <= -45 && (m2.xDiff = g3 * Math.sin(h3) * -1, m2.yDiff = p3 * Math.sin(h3)), (u2 = m2.isResize ? n4.resizeCrop() : n4.dragCrop()) !== r3) {
          var b3 = n4.mediaDimensions, v3 = b3.width, x2 = b3.height;
          o2(Xn(u2, v3, x2), jn(u2, v3, x2));
        }
      }
    }, n4.onComponentKeyDown = function(e3) {
      var r3 = n4.props, a2 = r3.crop, o2 = r3.disabled, i2 = r3.onChange, l2 = r3.onComplete;
      if (!o2) {
        n4.keysDown.add(e3.key);
        var c2 = false;
        if (Wn(a2)) {
          var s3 = n4.makeNewCrop(), d2 = (navigator.platform.match("Mac") ? e3.metaKey : e3.ctrlKey) ? t3.nudgeStepLarge : e3.shiftKey ? t3.nudgeStepMedium : t3.nudgeStep;
          if (n4.keysDown.has("ArrowLeft") && (s3.x -= d2, c2 = true), n4.keysDown.has("ArrowRight") && (s3.x += d2, c2 = true), n4.keysDown.has("ArrowUp") && (s3.y -= d2, c2 = true), n4.keysDown.has("ArrowDown") && (s3.y += d2, c2 = true), c2) {
            e3.cancelable && e3.preventDefault();
            var u2 = n4.mediaDimensions, m2 = u2.width, p3 = u2.height;
            s3.x = Yn(s3.x, 0, m2 - s3.width), s3.y = Yn(s3.y, 0, p3 - s3.height);
            var g3 = Xn(s3, m2, p3), f3 = jn(s3, m2, p3);
            i2(g3, f3), l2 && l2(g3, f3);
          }
        }
      }
    }, n4.onComponentKeyUp = function(e3) {
      n4.keysDown.delete(e3.key);
    }, n4.onDocPointerDone = function(e3) {
      var t4 = n4.props, r3 = t4.crop, a2 = t4.disabled, o2 = t4.onComplete, i2 = t4.onDragEnd;
      if (n4.unbindDocMove(), !a2 && n4.mouseDownOnCrop) {
        n4.mouseDownOnCrop = false, n4.dragStarted = false;
        var l2 = n4.mediaDimensions, c2 = l2.width, s3 = l2.height;
        i2 && i2(e3), o2 && o2(Xn(r3, c2, s3), jn(r3, c2, s3)), n4.setState({ cropIsActive: false, newCropIsBeingDrawn: false });
      }
    }, n4.onMediaLoaded = function() {
      var e3 = n4.props, t4 = e3.onComplete, r3 = e3.onChange, a2 = n4.createNewCrop(), o2 = a2.pixelCrop, i2 = a2.percentCrop;
      r3(o2, i2), t4 && t4(o2, i2);
    }, n4.onImageLoad = function(e3) {
      var t4 = n4.props, r3 = t4.onComplete, a2 = t4.onChange, o2 = t4.onImageLoaded;
      if ((!o2 || o2(e3.currentTarget)) !== false) {
        var i2 = n4.createNewCrop(), l2 = i2.pixelCrop, c2 = i2.percentCrop;
        a2(l2, c2), r3 && r3(l2, c2);
      }
    }, n4;
  }
  return s(t3, e2), t3.prototype.componentDidMount = function() {
    this.componentRef.current && this.componentRef.current.addEventListener("medialoaded", this.onMediaLoaded);
  }, t3.prototype.componentWillUnmount = function() {
    this.componentRef.current && this.componentRef.current.removeEventListener("medialoaded", this.onMediaLoaded);
  }, t3.prototype.componentDidUpdate = function(e3) {
    var t4 = this.props, n4 = t4.crop, r3 = t4.onChange, a2 = t4.onComplete;
    if (this.imageRef.current && n4 && e3.crop !== n4 && n4.aspect && (n4.width && !n4.height || !n4.width && n4.height)) {
      var o2 = this.imageRef.current, i2 = o2.width, l2 = o2.height, c2 = Vn(this.makeNewCrop(), i2, l2), s3 = Xn(c2, i2, l2), d2 = jn(c2, i2, l2);
      r3(s3, d2), a2 && a2(s3, d2);
    }
  }, t3.prototype.bindDocMove = function() {
    var e3, t4, n4;
    if (!this.docMoveBound) {
      var r3 = document.getElementById("rb-admin-frame");
      (e3 = r3.contentWindow) === null || e3 === void 0 || e3.document.addEventListener("pointermove", this.onDocPointerMove, Hn), (t4 = r3.contentWindow) === null || t4 === void 0 || t4.document.addEventListener("pointerup", this.onDocPointerDone, Hn), (n4 = r3.contentWindow) === null || n4 === void 0 || n4.document.addEventListener("pointercancel", this.onDocPointerDone, Hn), this.docMoveBound = true;
    }
  }, t3.prototype.unbindDocMove = function() {
    var e3, t4, n4;
    if (this.docMoveBound) {
      var r3 = document.getElementById("rb-admin-frame");
      (e3 = r3.contentWindow) === null || e3 === void 0 || e3.document.removeEventListener("pointermove", this.onDocPointerMove, Hn), (t4 = r3.contentWindow) === null || t4 === void 0 || t4.document.removeEventListener("pointerup", this.onDocPointerDone, Hn), (n4 = r3.contentWindow) === null || n4 === void 0 || n4.document.removeEventListener("pointercancel", this.onDocPointerDone, Hn), this.docMoveBound = false;
    }
  }, t3.prototype.createNewCrop = function() {
    var e3 = this.mediaDimensions, t4 = e3.width, n4 = e3.height, r3 = function(e4, t5, n5) {
      return !e4.aspect || e4.width && e4.height ? e4 : Vn(e4, t5, n5);
    }(this.makeNewCrop(), t4, n4);
    return { pixelCrop: Xn(r3, t4, n4), percentCrop: jn(r3, t4, n4) };
  }, Object.defineProperty(t3.prototype, "mediaDimensions", { get: function() {
    var e3 = 0, t4 = 0;
    return this.mediaWrapperRef.current && (e3 = this.mediaWrapperRef.current.clientWidth, t4 = this.mediaWrapperRef.current.clientHeight), { width: e3, height: t4 };
  }, enumerable: false, configurable: true }), t3.prototype.getCropStyle = function() {
    var e3 = this.makeNewCrop(this.props.crop ? this.props.crop.unit : "px");
    return { top: "".concat(e3.y).concat(e3.unit), left: "".concat(e3.x).concat(e3.unit), width: "".concat(e3.width).concat(e3.unit), height: "".concat(e3.height).concat(e3.unit) };
  }, t3.prototype.getNewSize = function() {
    var e3, t4 = this.props, n4 = t4.crop, r3 = t4.minWidth, a2 = r3 === void 0 ? 0 : r3, o2 = t4.maxWidth, i2 = t4.minHeight, l2 = i2 === void 0 ? 0 : i2, c2 = t4.maxHeight, s3 = this.evData, d2 = this.mediaDimensions, u2 = d2.width, m2 = d2.height, p3 = s3.cropStartWidth + s3.xDiff;
    return s3.xCrossOver && (p3 = Math.abs(p3)), p3 = Yn(p3, a2, o2 || u2), e3 = n4.aspect ? p3 / n4.aspect : s3.cropStartHeight + s3.yDiff, s3.yCrossOver && (e3 = Math.min(Math.abs(e3), s3.cropStartY)), e3 = Yn(e3, l2, c2 || m2), n4.aspect && (p3 = Yn(e3 * n4.aspect, 0, u2)), { width: p3, height: e3 };
  }, t3.prototype.dragCrop = function() {
    var e3 = this.makeNewCrop(), t4 = this.evData, n4 = this.mediaDimensions, r3 = n4.width, a2 = n4.height;
    return e3.x = Yn(t4.cropStartX + t4.xDiff, 0, r3 - e3.width), e3.y = Yn(t4.cropStartY + t4.yDiff, 0, a2 - e3.height), e3;
  }, t3.prototype.resizeCrop = function() {
    var e3 = this.evData, n4 = this.props, r3 = n4.crop, a2 = n4.minWidth, o2 = a2 === void 0 ? 0 : a2, i2 = n4.minHeight, l2 = i2 === void 0 ? 0 : i2, c2 = this.makeNewCrop(), s3 = e3.ord;
    e3.xInversed && (e3.xDiff -= 2 * e3.cropStartWidth), e3.yInversed && (e3.yDiff -= 2 * e3.cropStartHeight);
    var d2 = this.getNewSize(), u2 = e3.cropStartX, m2 = e3.cropStartY;
    e3.xCrossOver && (u2 = c2.x + (c2.width - d2.width)), e3.yCrossOver && (m2 = e3.lastYCrossover === false ? c2.y - d2.height : c2.y + (c2.height - d2.height));
    var p3 = this.mediaDimensions, g3 = p3.width, f3 = p3.height, h3 = function(e4, t4, n5, r4) {
      var a3 = Xn(t4, n5, r4), o3 = Xn(e4, n5, r4);
      if (!a3.aspect)
        return a3.x < 0 ? (a3.x = 0, a3.width += a3.x) : a3.x + a3.width > n5 && (a3.width = n5 - a3.x), a3.y + a3.height > r4 && (a3.height = r4 - a3.y), a3;
      var i3 = false;
      a3.x < 0 ? (a3.x = 0, a3.width += a3.x, a3.height = a3.width / a3.aspect, i3 = true) : a3.x + a3.width > n5 && (a3.width = n5 - a3.x, a3.height = a3.width / a3.aspect, i3 = true), i3 && o3.y > a3.y && (a3.y = a3.y + (a3.height - a3.height));
      var l3 = false;
      return a3.y + a3.height > r4 && (a3.height = r4 - a3.y, a3.width = a3.height * a3.aspect, l3 = true), l3 && o3.x > a3.x && (a3.x = a3.x + (a3.width - a3.width)), a3;
    }(this.props.crop, { unit: c2.unit, x: u2, y: m2, width: d2.width, height: d2.height, aspect: c2.aspect }, g3, f3);
    return c2.aspect || t3.xyOrds.indexOf(s3) > -1 ? (c2.x = h3.x, c2.y = h3.y, c2.width = h3.width, c2.height = h3.height) : t3.xOrds.indexOf(s3) > -1 ? (c2.x = h3.x, c2.width = h3.width) : t3.yOrds.indexOf(s3) > -1 && (c2.y = h3.y, c2.height = h3.height), e3.lastYCrossover = e3.yCrossOver, this.crossOverCheck(), c2.width < o2 || c2.height < l2 ? r3 : c2;
  }, t3.prototype.getRotatedCursor = function(e3, t4) {
    if (t4 > -135 && t4 <= -45 || t4 > 45 && t4 <= 135)
      switch (e3) {
        case "nw":
          return { cursor: "ne-resize" };
        case "n":
          return { cursor: "w-resize" };
        case "ne":
          return { cursor: "nw-resize" };
        case "e":
          return { cursor: "s-resize" };
        case "se":
          return { cursor: "sw-resize" };
        case "s":
          return { cursor: "e-resize" };
        case "sw":
          return { cursor: "se-resize" };
        case "w":
          return { cursor: "n-resize" };
      }
  }, t3.prototype.createCropSelection = function() {
    var e3 = this.props, t4 = e3.disabled, n4 = e3.locked, r3 = e3.renderSelectionAddon, a2 = e3.ruleOfThirds, o2 = e3.crop, i2 = e3.spin, l2 = i2 === void 0 ? 0 : i2, c2 = this.getCropStyle();
    return ue2.createElement("div", { style: c2, className: "ReactCrop__crop-selection", onPointerDown: this.onCropPointerDown }, !t4 && !n4 && ue2.createElement("div", { className: "ReactCrop__drag-elements" }, ue2.createElement("div", { className: "ReactCrop__drag-bar ord-n", "data-ord": "n" }), ue2.createElement("div", { className: "ReactCrop__drag-bar ord-e", "data-ord": "e" }), ue2.createElement("div", { className: "ReactCrop__drag-bar ord-s", "data-ord": "s" }), ue2.createElement("div", { className: "ReactCrop__drag-bar ord-w", "data-ord": "w" }), ue2.createElement("div", { className: "ReactCrop__drag-handle ord-nw", "data-ord": "nw", style: this.getRotatedCursor("nw", l2) }), ue2.createElement("div", { className: "ReactCrop__drag-handle ord-n", "data-ord": "n", style: this.getRotatedCursor("n", l2) }), ue2.createElement("div", { className: "ReactCrop__drag-handle ord-ne", "data-ord": "ne", style: this.getRotatedCursor("ne", l2) }), ue2.createElement("div", { className: "ReactCrop__drag-handle ord-e", "data-ord": "e", style: this.getRotatedCursor("e", l2) }), ue2.createElement("div", { className: "ReactCrop__drag-handle ord-se", "data-ord": "se", style: this.getRotatedCursor("se", l2) }), ue2.createElement("div", { className: "ReactCrop__drag-handle ord-s", "data-ord": "s", style: this.getRotatedCursor("s", l2) }), ue2.createElement("div", { className: "ReactCrop__drag-handle ord-sw", "data-ord": "sw", style: this.getRotatedCursor("sw", l2) }), ue2.createElement("div", { className: "ReactCrop__drag-handle ord-w", "data-ord": "w", style: this.getRotatedCursor("w", l2) })), r3 && Wn(o2) && ue2.createElement("div", { className: "ReactCrop__selection-addon", onMouseDown: function(e4) {
      return e4.stopPropagation();
    } }, r3(this.state)), a2 && ue2.createElement(ue2.Fragment, null, ue2.createElement("div", { className: "ReactCrop__rule-of-thirds-hz" }), ue2.createElement("div", { className: "ReactCrop__rule-of-thirds-vt" })));
  }, t3.prototype.makeNewCrop = function(e3) {
    e3 === void 0 && (e3 = "px");
    var t4 = p(p({}, On), this.props.crop || {}), n4 = this.mediaDimensions, r3 = n4.width, a2 = n4.height;
    return e3 === "px" ? Xn(t4, r3, a2) : jn(t4, r3, a2);
  }, t3.prototype.crossOverCheck = function() {
    var e3 = this.evData, t4 = this.props, n4 = t4.minWidth, r3 = t4.minHeight;
    !n4 && (!e3.xCrossOver && -Math.abs(e3.cropStartWidth) - e3.xDiff >= 0 || e3.xCrossOver && -Math.abs(e3.cropStartWidth) - e3.xDiff <= 0) && (e3.xCrossOver = !e3.xCrossOver), !r3 && (!e3.yCrossOver && -Math.abs(e3.cropStartHeight) - e3.yDiff >= 0 || e3.yCrossOver && -Math.abs(e3.cropStartHeight) - e3.yDiff <= 0) && (e3.yCrossOver = !e3.yCrossOver);
  }, t3.prototype.render = function() {
    var e3 = this.props, t4 = e3.children, n4 = e3.circularCrop, r3 = e3.className, a2 = e3.crossorigin, o2 = e3.crop, i2 = e3.disabled, l2 = e3.imageStyle, s3 = e3.locked, d2 = e3.imageAlt, u2 = e3.onImageError, m2 = e3.renderComponent, p3 = e3.scale, g3 = p3 === void 0 ? 1 : p3, f3 = e3.src, h3 = e3.style, b3 = e3.rotate, v3 = b3 === void 0 ? 0 : b3, x2 = e3.ruleOfThirds, y3 = this.state, w2 = y3.cropIsActive, k3 = y3.newCropIsBeingDrawn, E3 = Wn(o2) && this.componentRef ? this.createCropSelection() : null, C2 = (0, import_classnames2.default)("ReactCrop", r3, { "ReactCrop--active": w2, "ReactCrop--disabled": i2, "ReactCrop--locked": s3, "ReactCrop--new-crop": k3, "ReactCrop--fixed-aspect": o2 && o2.aspect, "ReactCrop--circular-crop": o2 && n4, "ReactCrop--rule-of-thirds": o2 && x2, "ReactCrop--invisible-crop": !this.dragStarted && o2 && !o2.width && !o2.height });
    return ue2.createElement("div", { ref: this.componentRef, className: C2, onPointerDown: this.onComponentPointerDown, tabIndex: 0, onKeyDown: this.onComponentKeyDown, onKeyUp: this.onComponentKeyUp }, ue2.createElement("div", { ref: this.mediaWrapperRef, style: p({ transform: "scale(".concat(g3, ") rotate(").concat(v3, "deg)") }, h3) }, m2 || ue2.createElement("img", { ref: this.imageRef, crossOrigin: a2, className: "ReactCrop__image", style: l2, src: f3, onLoad: this.onImageLoad, onError: u2, alt: d2 })), t4, E3);
  }, t3.xOrds = ["e", "w"], t3.yOrds = ["n", "s"], t3.xyOrds = ["nw", "ne", "se", "sw"], t3.nudgeStep = 1, t3.nudgeStepMedium = 10, t3.nudgeStepLarge = 100, t3;
}(ue2.PureComponent);
var Kn = function(e2) {
  var t3 = e2.className, n4 = e2.style, r3 = n4 === void 0 ? {} : n4, a2 = e2.onClick, o2 = a2 === void 0 ? function() {
    return null;
  } : a2;
  return import_react5.default.createElement("svg", { viewBox: "0 0 200 200", preserveAspectRatio: "none", version: "1.1", className: t3, style: r3, onClick: function() {
    return o2();
  } }, import_react5.default.createElement("g", { id: "Page-1", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" }, import_react5.default.createElement("g", { id: "Placeholder" }, import_react5.default.createElement("g", { id: "Group" }, import_react5.default.createElement("rect", { id: "Rectangle", fill: "#DADADA", x: "0", y: "0", width: "200", height: "200" }), import_react5.default.createElement("path", { d: "M26.6531727,14.9193918 L172.487307,14.9193918 C178.982793,14.9193918 184.221088,20.1576869 184.221088,26.6531727 L184.221088,104.389471 L150.486468,61.8545154 C146.505363,56.6162204 138.543155,56.6162204 134.562051,61.8545154 L85.3220772,124.085461 L64.7879606,101.665558 C60.5973246,97.0558581 53.2637115,97.0558581 49.0730755,101.665558 L14.9193918,138.752687 L14.9193918,26.6531727 C14.9193918,20.1576869 20.1576869,14.9193918 26.6531727,14.9193918 Z", id: "Shape", fill: "#FFFFFF", fillRule: "nonzero" }), import_react5.default.createElement("circle", { id: "Oval", fill: "#DADADA", fillRule: "nonzero", cx: "51.3779253", cy: "51.3779253", r: "16.7625441" })))));
};
var Qn = function(t3) {
  var n4, r3 = t3.source, a2 = t3.alt, o2 = t3.maxWidth, i2 = t3.aspectRatio, l2 = t3.onChange, s3 = t3.setModalOpen, u2 = t3.modalOpen, m2 = (0, import_react5.useContext)(qt).currentPage, p3 = r3 && r3.alt || a2, g3 = v((0, import_react5.useState)(), 2), f3 = g3[0], h3 = g3[1], v3 = Rn({ width: r3 ? r3.width : 0, height: r3 ? r3.height : 0, aspectRatio: i2, ref: f3 }), x2 = v((0, import_react5.useState)(false), 2), y3 = x2[0], w2 = x2[1], k3 = v((0, import_react5.useState)(""), 2), C2 = k3[0], A3 = k3[1], N2 = v((0, import_react5.useState)(false), 2), S2 = N2[0], I3 = N2[1], L2 = v((0, import_react5.useState)(false), 2), B3 = L2[0], z2 = L2[1], D2 = v((0, import_react5.useState)({ imageUrl: r3 ? r3.src : "", alt: r3 ? r3.alt : a2, seoName: r3 ? r3.seoName : "", crop: v3 }), 2), P2 = D2[0], T = D2[1], R2 = Tn(), M2 = function(e2) {
    T(p(p({}, P2), e2));
  }, F2 = useDropzone({ accept: "image/*", maxSize: 3145728, onDropAccepted: function(e2) {
    var t4;
    I3(((t4 = e2[0]) === null || t4 === void 0 ? void 0 : t4.type) === "image/svg+xml"), A3("");
    var n5 = new FileReader();
    n5.addEventListener("load", function() {
      M2({ imageUrl: n5.result, image: e2[0] }), z2(true);
    }), n5.readAsDataURL(e2[0]);
  }, onDropRejected: function(e2) {
    var t4 = "".concat((e2[0].file.size / 1048576).toFixed(1), " MB");
    A3("Image exceeds max file size of ".concat(3, " MB (").concat(t4, ")"));
  } }), O2 = F2.getRootProps, Y3 = F2.getInputProps;
  (0, import_react5.useEffect)(function() {
    M2({ crop: Rn({ width: (f3 == null ? void 0 : f3.naturalWidth) || (r3 ? r3.width : 0), height: (f3 == null ? void 0 : f3.naturalHeight) || (r3 ? r3.height : 0), aspectRatio: i2, ref: f3 }) });
  }, [r3, f3]);
  var W2 = document.getElementById("rb-admin-frame"), V2 = (n4 = W2 == null ? void 0 : W2.contentWindow) === null || n4 === void 0 ? void 0 : n4.document.body;
  return ue2.createElement(import_react_modal.default, { isOpen: u2, onRequestClose: function() {
    z2(false), s3(false), T({ imageUrl: "", alt: "", seoName: "", crop: v3 });
  }, style: Mn, parentSelector: function() {
    return V2;
  } }, ue2.createElement("style", null, '\n.react-bricks-image-modal {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;\n  font-size: 16px;\n\n  display: flex;\n  line-height: 1.5;\n}\n.react-bricks-image-modal .image-upload-remove {\n  box-sizing: border-box;\n}\n.react-bricks-image-modal .image-upload {\n  box-sizing: border-box;\n  padding: 32px 30px 0;\n  width: 300px;\n}\n.react-bricks-image-modal .image-upload .image {\n  position: relative;\n  margin-bottom: 8px;\n  width: 240px;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n}\n.react-bricks-image-modal .image-upload .image img,\n.react-bricks-image-modal .image-upload .image svg {\n  width: 100%;\n}\n.react-bricks-image-modal .image-upload .error {\n  text-align: center;\n  font-size: 14px;\n  margin-top: 24px;\n  color: #e53e3e;\n}\n.react-bricks-image-modal .image-upload .overlay-container {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 10;\n  transition: opacity 300ms;\n  background-color: rgba(252,242,248,0.75);\n  border-radius: 4px;\n}\n.react-bricks-image-modal .image-upload .overlay-container:hover {\n  opacity: 1;\n}\n.react-bricks-image-modal .image-upload .overlay-container .upload {\n  box-sizing: border-box;\n  background-color: rgba(255, 255, 255, 0.8);\n  padding: 1rem;\n  border-radius: 9999px;\n  cursor: pointer;\n  //border: 1px solid #edf2f7;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05),\n    0 2px 4px -1px rgba(0, 0, 0, 0.02);\n}\n.react-bricks-image-modal .image-upload .overlay-container:focus {\n  outline: none;\n}\n.react-bricks-image-modal .image-upload .overlay-container .upload svg {\n  width: 45px;\n  fill: #f65a8e; /*#d9367f;*/\n}\n.react-bricks-image-modal .image-upload .loading {\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n  opacity: 0.75;\n  z-index: 50;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.react-bricks-image-modal .image-upload .tip {\n  font-size: 12px;\n  line-height: 1;\n  text-align: center;\n  color: #718096;\n  margin-bottom: 10px;\n}\n.react-bricks-image-modal .image-upload-remove .image-remove {\n  padding: 20px 32px 30px;\n  font-size: 14px;\n  line-height: 1;\n  text-align: center;\n}\n.react-bricks-image-modal .image-upload-remove .image-remove a {\n  color: #c53030;\n}\n.react-bricks-image-modal .image-upload-remove .image-remove a:hover {\n  color: #9b2c2c;\n  text-decoration: underline;\n}\n.react-bricks-image-modal .image-edit {\n  background-color: #edf2f7;\n  padding: 30px 32px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.react-bricks-image-modal .image-edit .form-field {\n  margin-bottom: 24px;\n}\n.react-bricks-image-modal .image-edit label {\n  box-sizing: border-box;\n  display: block;\n  margin-bottom: 4px;\n  font-size: 12px;\n  font-weight: bold;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #718096;\n}\n.react-bricks-image-modal .image-edit input {\n  box-sizing: border-box;\n  width: 100%;\n  background-color: #fff;\n  font-size: 14px;\n  padding: 8px 12px;\n  border: 1px solid #e2e8f0;\n  border-radius: 4px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n.react-bricks-image-modal .image-edit button.btn {\n  cursor: pointer;\n  box-sizing: border-box;\n  display: block;\n  width: 100%;\n  background-color: #4299e1; /*f65a8e*/\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n  border: none;\n  border-radius: 4px;\n  padding: 8px 16px;\n  margin-top: 20px;\n}\n.btn-cancel{\n  cursor: pointer;\n  box-sizing: border-box;\n  display: block;\n  width: 100%;\n  background-color: #9CA3AF;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n  border: none;\n  border-radius: 4px;\n  padding: 8px 16px;\n  margin-top: 20px;\n}\n.react-bricks-image-modal .image-edit button.btn:hover {\n  background-color: #3182ce; /*b43179*/\n  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%);\n}\n'), ue2.createElement("div", { className: "react-bricks-image-modal" }, ue2.createElement("div", { className: "image-upload-remove" }, ue2.createElement("div", { className: "image-upload" }, ue2.createElement("div", { className: "tip" }, "Click the image to change"), ue2.createElement("div", { className: "image" }, P2.imageUrl ? B3 && !S2 ? ue2.createElement(Jn, { className: "w-full", src: P2.imageUrl, crop: P2.crop, onChange: function(e2) {
    e2.unit;
    var t4 = m(e2, ["unit"]);
    M2({ crop: t4 });
  }, onImageLoaded: function(e2) {
    return h3(e2);
  } }) : ue2.createElement("img", { src: P2.imageUrl || "", alt: p3, style: { cursor: "default" } }) : ue2.createElement(Kn, null), !B3 && ue2.createElement("div", p({ className: "overlay-container" }, O2()), ue2.createElement("div", { className: "upload" }, ue2.createElement("svg", { viewBox: "0 0 312.602 312.602" }, ue2.createElement("path", { d: "M251.52,137.244c-3.966,0-7.889,0.38-11.738,1.134c-1.756-47.268-40.758-85.181-88.448-85.181c-43.856,0-80.964,32.449-87.474,75.106C28.501,129.167,0,158.201,0,193.764c0,36.106,29.374,65.48,65.48,65.48h54.782c4.143,0,7.5-3.357,7.5-7.5c0-4.143-3.357-7.5-7.5-7.5H65.48c-27.835,0-50.48-22.645-50.48-50.48c0-27.835,22.646-50.48,50.48-50.48c1.367,0,2.813,0.067,4.419,0.206l7.6,0.658l0.529-7.61c2.661-38.322,34.861-68.341,73.306-68.341c40.533,0,73.51,32.977,73.51,73.51c0,1.863-0.089,3.855-0.272,6.088l-0.983,11.968l11.186-4.367c5.356-2.091,10.99-3.151,16.747-3.151c25.409,0,46.081,20.672,46.081,46.081c0,25.408-20.672,46.08-46.081,46.08c-0.668,0-20.608-0.04-40.467-0.08c-19.714-0.04-39.347-0.08-39.999-0.08c-4.668,0-7.108-2.248-7.254-6.681v-80.959l8.139,9.667c2.667,3.17,7.399,3.576,10.567,0.907c3.169-2.667,3.575-7.398,0.907-10.567l-18.037-21.427c-2.272-2.699-5.537-4.247-8.958-4.247c-3.421,0-6.686,1.548-8.957,4.247l-18.037,21.427c-2.668,3.169-2.262,7.9,0.907,10.567c1.407,1.185,3.121,1.763,4.826,1.763c2.137,0,4.258-0.908,5.741-2.67l7.901-9.386v80.751c0,8.686,5.927,21.607,22.254,21.607c0.652,0,20.27,0.04,39.968,0.079c19.874,0.041,39.829,0.081,40.498,0.081c33.681,0,61.081-27.4,61.081-61.08C312.602,164.644,285.201,137.244,251.52,137.244z" })), ue2.createElement("input", p({}, Y3())))), y3 && ue2.createElement("div", { className: "loading text-pink-500 flex justify-center items-center" }, ue2.createElement("div", { className: "w-24" }, ue2.createElement(Pn, null)))), !!C2 && ue2.createElement("div", { className: "error" }, C2)), ue2.createElement("div", { className: "image-remove" }, ue2.createElement("a", { href: "#", onClick: function(e2) {
    e2.preventDefault(), M2({ imageUrl: "", alt: "", seoName: "", image: void 0 }), z2(false);
  } }, "Remove image"))), ue2.createElement("div", { className: "image-edit" }, ue2.createElement("div", null, ue2.createElement("div", { className: "form-field" }, ue2.createElement("label", null, "Alternate text"), ue2.createElement(Fn, { name: "alt", value: P2.alt || "", onChange: function(e2) {
    return M2({ alt: e2.target.value });
  } })), ue2.createElement("div", { className: "form-field" }, ue2.createElement("label", null, "SEO-friendly name"), ue2.createElement(Fn, { name: "seoName", value: P2.seoName || "", onChange: function(e2) {
    var t4 = e2.target.value;
    /^[A-Za-z0-9\-_]*$/.test(t4) && M2({ seoName: e2.target.value });
  } }))), ue2.createElement("div", { className: "flex space-x-4" }, ue2.createElement("button", { type: "button", className: "btn-cancel", onClick: function() {
    z2(false), s3(false), T({ imageUrl: "", alt: "", seoName: "", crop: v3 });
  } }, "Cancel"), ue2.createElement("button", { type: "button", className: "btn", onClick: function(e2) {
    return f(void 0, void 0, void 0, function() {
      var e3, t4, n5, a3, i3, u3, p4, g4, h4, b3;
      return g(this, function(x3) {
        switch (x3.label) {
          case 0:
            return e3 = new FormData(), P2.image && e3.append("file", P2.image), m2 && m2.pageId.indexOf("playground") === -1 && e3.append("pageId", m2.pageId), o2 && e3.append("maxWidth", o2 + ""), t4 = P2.crop, n5 = t4.x, a3 = t4.y, i3 = t4.width, u3 = t4.height, n5 === 0 && a3 === 0 && Math.round(i3) === (f3 == null ? void 0 : f3.width) && Math.round(u3) === (f3 == null ? void 0 : f3.height) || f3 && (p4 = f3.naturalWidth / f3.width, g4 = f3.naturalHeight / f3.height, P2.crop.height = Math.round(P2.crop.height * g4), P2.crop.y = Math.round(P2.crop.y * g4), P2.crop.width = Math.round(P2.crop.width * p4), P2.crop.x = Math.round(P2.crop.x * p4), h4 = P2.crop, b3 = m(h4, ["aspect", "unit"]), e3.append("crop", JSON.stringify(b3))), P2.imageUrl ? [3, 1] : (l2(null), [3, 4]);
          case 1:
            return P2.image ? [3, 2] : (l2(p(p({}, r3), { alt: P2.alt, seoName: P2.seoName })), [3, 4]);
          case 2:
            return w2(true), [4, R2.mutateAsync(e3).then(function(e4) {
              return l2(p(p({}, r3), { src: e4.src, placeholderSrc: e4.placeholderSrc, srcSet: e4.srcSet, width: e4.width, height: e4.height, alt: P2.alt, seoName: P2.seoName })), z2(false), w2(false), T({ imageUrl: "", alt: "", seoName: "", crop: v3 }), e4;
            })];
          case 3:
            x3.sent(), x3.label = 4;
          case 4:
            return s3(false), [2];
        }
      });
    });
  } }, "Done")))));
};
var qn = function(t3) {
  var n4 = t3.source, r3 = t3.alt, a2 = t3.maxWidth, o2 = t3.aspectRatio, i2 = t3.onChange, l2 = t3.containerClassName, s3 = t3.containerStyle, d2 = s3 === void 0 ? {} : s3, u2 = t3.imageClassName, m2 = t3.imageStyle, p3 = m2 === void 0 ? {} : m2, g3 = t3.noWrapper, f3 = g3 !== void 0 && g3, h3 = n4 && n4.alt || r3, b3 = v((0, import_react5.useState)(false), 2), v3 = b3[0], x2 = b3[1];
  return f3 ? import_react5.default.createElement(import_react5.default.Fragment, null, (n4 == null ? void 0 : n4.src) ? import_react5.default.createElement("img", { src: n4.src, alt: h3, onClick: function() {
    return x2(true);
  }, className: u2, style: p({ cursor: "pointer" }, p3) }) : import_react5.default.createElement(Kn, { onClick: function() {
    return x2(true);
  }, className: u2, style: p({ cursor: "pointer" }, p3) }), v3 && import_react5.default.createElement(Qn, { source: n4, alt: r3, maxWidth: a2, aspectRatio: o2, onChange: i2, setModalOpen: x2, modalOpen: v3 })) : import_react5.default.createElement(import_react5.default.Fragment, null, import_react5.default.createElement("div", { className: (0, import_classnames2.default)("react-bricks-image", l2), onClick: function() {
    return x2(true);
  }, style: p({ cursor: "pointer" }, d2) }, (n4 == null ? void 0 : n4.src) ? import_react5.default.createElement("img", { src: n4.src, alt: h3, className: (0, import_classnames2.default)("cursor-pointer", u2), style: p3 }) : import_react5.default.createElement(Kn, { className: (0, import_classnames2.default)("cursor-pointer", u2), style: p({ aspectRatio: o2 + "" }, p3) })), v3 && import_react5.default.createElement(Qn, { source: n4, alt: r3, maxWidth: a2, aspectRatio: o2, onChange: i2, setModalOpen: x2, modalOpen: v3 }));
};
var Zn = require_dist().default;
var Gn = function(e2, t3) {
  if (!t3)
    return e2;
  var n4 = e2.lastIndexOf(".");
  return e2.substring(0, n4) + "/" + t3 + e2.substring(n4);
};
var _n = function(t3) {
  t3.propName;
  var n4 = t3.source, r3 = t3.alt, a2 = t3.noLazyLoad, o2 = a2 !== void 0 && a2, i2 = t3.containerClassName, l2 = t3.containerStyle, s3 = l2 === void 0 ? {} : l2, u2 = t3.imageClassName, m2 = t3.imageStyle, p3 = m2 === void 0 ? {} : m2, g3 = m(t3, ["propName", "source", "alt", "noLazyLoad", "containerClassName", "containerStyle", "imageClassName", "imageStyle"]), f3 = (n4 == null ? void 0 : n4.alt) || r3;
  if (!n4)
    return null;
  var h3, b3, v3 = Gn(n4.src, n4.seoName), x2 = Gn(n4.placeholderSrc || "", n4.seoName), y3 = (h3 = n4.srcSet, b3 = n4.seoName, h3 ? b3 ? h3.split(",").map(function(t4) {
    var n5 = v(t4.trim().split(" "), 2), r4 = n5[0], a3 = n5[1];
    return r4 && a3 ? "".concat(Gn(r4, b3), " ").concat(a3) : Gn(t4, b3);
  }).join(", ") : h3 : "");
  return o2 ? ue2.createElement("div", { className: i2, style: s3 }, ue2.createElement("img", p({ src: v3, srcSet: y3, alt: f3, className: u2, style: s3 }, g3))) : ue2.createElement("div", { className: i2, style: s3 }, ue2.createElement(Zn, { src: v3, srcSetData: { srcSet: y3 }, placeholder: "" }, function(e2, t4, n5) {
    return t4 ? ue2.createElement("img", { src: x2, alt: f3, className: u2, style: p({ filter: "blur(8px)" }, p3) }) : ue2.createElement("img", p({ src: e2, srcSet: n5.srcSet, alt: f3, className: u2, style: p3 }, g3));
  }));
};
var $n = function(t3) {
  var n4, r3 = t3.setModalOpen, a2 = t3.file, o2 = t3.modalOpen, i2 = t3.onChange, l2 = t3.allowedExtensions, s3 = (0, import_react5.useContext)(qt).currentPage, d2 = v((0, import_react5.useState)({ name: a2 ? a2.name : "", size: a2 ? a2.size : 0, url: a2 ? a2.url : "" }), 2), u2 = d2[0], m2 = d2[1], p3 = v((0, import_react5.useState)(!!(a2 == null ? void 0 : a2.size)), 2), g3 = p3[0], f3 = p3[1], h3 = {};
  l2 && l2.length > 0 && (h3 = { accept: l2 });
  var v3 = useDropzone(p(p({}, h3), { onDropRejected: function(e2) {
    e2[0].errors.map(function(e3) {
      var t4 = e3.message;
      throw new Error(t4);
    });
  }, onDropAccepted: function(e2) {
    f3(true), m2(p(p({}, u2), { file: e2[0], name: "", size: e2[0].size / 1e3 }));
  } })), x2 = v3.getRootProps, y3 = v3.getInputProps, w2 = useMutation(function(e2) {
    return f(void 0, void 0, void 0, function() {
      return g(this, function(t4) {
        switch (t4.label) {
          case 0:
            return [4, import_axios.default.post("/admin/files", e2).then(function(e3) {
              return e3.data;
            })];
          case 1:
            return [2, t4.sent()];
        }
      });
    });
  }, { onSuccess: function() {
  }, onError: function() {
    index_es_default.error("An error occurred while uploading the file");
  } });
  return import_react5.default.createElement(import_react_modal.default, { isOpen: o2, style: Mn, onRequestClose: function() {
    return r3(false);
  } }, import_react5.default.createElement("style", null, '\n  .react-bricks-file-modal{\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;\n    font-size: 16px;\n    display: flex;\n    line-height: 1.5;\n  }\n  .react-bricks-file-modal .file-data {\n    box-sizing: border-box;\n\n    background-color: #edf2f7;\n    padding: 30px 32px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    color: #718096;\n  }\n  .react-bricks-file-modal .file-upload {\n    box-sizing: border-box;\n\n    background-color: #fff;\n    padding: 30px 32px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    color: #718096;\n    width: 100%\n  }\n\n  .react-bricks-file-modal .file-upload .file-data {\n    padding: 20px 32px 30px;\n    font-size: 14px;\n    line-height: 1;\n    text-align: center;\n  }\n\n  .react-bricks-file-modal .file-upload .file-remove a {\n    color: #c53030;\n  }\n  .react-bricks-file-modal .file-upload .file-remove a:hover {\n    color: #9b2c2c;\n    text-decoration: underline;\n  }\n\n  .react-bricks-file-modal .file-upload .file-download a {\n    color: #4299e1;\n  }\n  .react-bricks-file-modal .file-upload .file-download a:hover {\n    color: #2b689b;\n    text-decoration: underline;\n  }\n\n  .react-bricks-file-modal .file-upload .form-field {\n    margin-bottom: 24px;\n  }\n\n  .react-bricks-file-modal .file-upload .dropzone {\n    background-color: #fff;\n    padding: 20px 32px 30px;\n    border: 2px dashed #e2e8f0;\n    border-radius: 4px;\n    color: #718096;\n    font-size: 16px;\n  }\n\n  .react-bricks-file-modal .file-upload label {\n    box-sizing: border-box;\n    display: block;\n    margin-bottom: 4px;\n    font-size: 12px;\n    font-weight: bold;\n    text-transform: uppercase;\n    letter-spacing: 0.05em;\n    color: #718096;\n  }\n  \n  .react-bricks-file-modal .file-upload input {\n    box-sizing: border-box;\n    width: 100%;\n    background-color: #fff;\n    font-size: 14px;\n    padding: 8px 12px;\n    border: 1px solid #e2e8f0;\n    border-radius: 4px;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n  }\n  \n  .react-bricks-file-modal .file-upload button.btn {\n    cursor: pointer;\n    box-sizing: border-box;\n    display: block;\n    width: 100%;\n    background-color: #4299e1; /*f65a8e*/\n    color: #fff;\n    font-size: 14px;\n    font-weight: 600;\n    border: none;\n    border-radius: 4px;\n    padding: 8px 16px;\n    margin-top: 20px;\n  }\n\n  .btn-cancel{\n    cursor: pointer;\n    box-sizing: border-box;\n    display: block;\n    width: 100%;\n    background-color: #9CA3AF;\n    color: #fff;\n    font-size: 14px;\n    font-weight: 600;\n    border: none;\n    border-radius: 4px;\n    padding: 8px 16px;\n    margin-top: 20px;\n  }\n  .react-bricks-file-modal .file-upload button.btn:hover {\n    background-color: #3182ce; /*b43179*/\n    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%);\n  }\n'), import_react5.default.createElement("div", { className: "react-bricks-file-modal" }, import_react5.default.createElement("div", { className: "file-upload" }, g3 ? import_react5.default.createElement("div", { className: "form-field" }, import_react5.default.createElement("div", null, "File:", " ", u2.file !== void 0 ? (n4 = u2.file) === null || n4 === void 0 ? void 0 : n4.name : a2 == null ? void 0 : a2.name), import_react5.default.createElement("div", null, "Size:", " ", u2.size >= 1e3 ? "".concat((u2.size / 1e3).toFixed(1), " MB") : "".concat(u2.size.toFixed(0), " Kb")), u2.url && import_react5.default.createElement("div", { className: "file-download" }, import_react5.default.createElement("a", { href: u2.url }, "Download file")), import_react5.default.createElement("div", { className: "file-remove" }, import_react5.default.createElement("a", { href: "#", onClick: function(e2) {
    !function(e3) {
      e3.preventDefault(), f3(false), m2({ name: "", file: void 0, size: 0, url: "" });
    }(e2), i2({ name: "", size: 0, url: "" });
  } }, "Remove file"))) : import_react5.default.createElement("div", p({ className: "form-field dropzone" }, x2()), "Click or Drag & Drop to upload a file", import_react5.default.createElement("input", p({}, y3()))), import_react5.default.createElement("div", { className: "form-field" }, import_react5.default.createElement("label", null, "File Name"), import_react5.default.createElement(Fn, { name: "name", value: u2 == null ? void 0 : u2.name, onChange: function(e2) {
    return m2(p(p({}, u2), { name: e2.target.value }));
  } })), import_react5.default.createElement("div", { className: "flex space-x-4" }, import_react5.default.createElement("button", { type: "button", className: "btn-cancel", onClick: function() {
    r3(false), m2({ name: "", size: 0, url: "" });
  } }, "Cancel"), import_react5.default.createElement("button", { type: "button", className: "btn", onClick: function(e2) {
    return f(void 0, void 0, void 0, function() {
      var e3, t4;
      return g(this, function(n5) {
        switch (n5.label) {
          case 0:
            return e3 = new FormData(), u2.file && e3.append("file", u2.file), s3 && s3.pageId.indexOf("playground") === -1 && e3.append("pageId", s3.pageId), u2.name && e3.append("name", u2.name), u2.file ? [3, 1] : (u2.size === 0 ? i2(null) : i2(p({}, u2)), [3, 3]);
          case 1:
            return [4, w2.mutateAsync(e3)];
          case 2:
            t4 = n5.sent(), i2(p(p({}, a2), { name: t4.name, size: t4.size, url: t4.url })), n5.label = 3;
          case 3:
            return r3(false), [2];
        }
      });
    });
  } }, "Done")))));
};
var er = function(e2) {
  var t3 = index_es_default.error(e2, { hideAfter: 10, onClick: function() {
    t3 == null || t3();
  } }).hide;
};
var tr = function(e2) {
  var t3 = e2.topic, n4 = e2.getLimitExceededError, r3 = e2.conflictError, a2 = r3 === void 0 ? "Conflict error" : r3, o2 = e2.genericError;
  return function(e3) {
    if (e3.status === 403) {
      var r4 = e3.data.message, i2 = void 0;
      try {
        if (!((i2 = JSON.parse(r4)) && i2.error && i2.topic && i2.plan && i2.limit && i2.error === "plan_limit_exceeded" && i2.topic === t3))
          throw new Error("Incomplete error message");
        var l2 = i2.plan, c2 = i2.limit;
        er(n4(l2, c2));
      } catch (e4) {
        er("Forbidden operation");
      }
    } else
      e3.status === 409 ? er(a2) : er(o2);
  };
};
var nr = function(e2) {
  var t3 = e2.className;
  return ue2.createElement("svg", { className: t3, viewBox: "0 0 450 100" }, ue2.createElement("g", { id: "layer1", transform: "translate(0,-197)" }, ue2.createElement("g", { transform: "matrix(6.6679482,0,0,6.6679482,-210.3068,-1556.9577)", id: "g2125" }, ue2.createElement("path", { style: { fill: "#23192d", stroke: "none", strokeWidth: 4.32088709 }, d: "M 846.20898 126.58203 C 834.22573 126.58203 823.27838 129.29152 813.36914 134.70703 C 803.57512 140.12254 795.85494 147.5535 790.20898 157.00195 C 784.56302 166.45024 781.74023 176.99322 781.74023 188.63086 C 781.74023 200.38359 784.50636 211.04193 790.03711 220.60547 C 795.56784 230.16918 803.17277 237.7155 812.85156 243.24609 C 822.53034 248.66177 833.30383 251.37109 845.17188 251.37109 C 853.92886 251.37109 862.62775 249.41183 871.26953 245.49414 C 880.02653 241.57645 887.63146 236.27657 894.08398 229.59375 L 878.00977 212.13672 C 873.63126 216.51526 868.61861 220.02965 862.97266 222.67969 C 857.44193 225.21464 851.97021 226.48242 846.55469 226.48242 C 839.7565 226.48242 833.53267 224.81016 827.88672 221.46875 C 822.24075 218.01192 817.80633 213.40369 814.58008 207.64258 C 811.35381 201.76622 809.74023 195.31391 809.74023 188.28516 C 809.74023 181.25657 811.35381 174.86088 814.58008 169.09961 C 817.80633 163.3385 822.24075 158.78884 827.88672 155.44727 C 833.53267 152.10586 839.7565 150.43359 846.55469 150.43359 C 852.20066 150.43359 857.78763 151.87531 863.31836 154.75586 C 868.96433 157.52133 873.86172 161.3795 878.00977 166.33398 L 893.91016 146.80469 C 887.91852 140.58256 880.65935 135.6852 872.13281 132.11328 C 863.60626 128.42611 854.96598 126.58203 846.20898 126.58203 z M 1598.3184 127.10156 C 1589.7918 127.10156 1582.3021 128.42613 1575.8496 131.07617 C 1569.3971 133.72638 1564.3844 137.52972 1560.8125 142.48438 C 1557.2406 147.43903 1555.4551 153.14128 1555.4551 159.59375 C 1555.4551 166.9681 1557.1839 172.90285 1560.6406 177.39648 C 1564.2126 181.89028 1568.5337 185.28931 1573.6035 187.59375 C 1578.6734 189.89819 1585.241 192.25999 1593.3066 194.67969 C 1599.8744 196.6387 1605.0589 198.4242 1608.8613 200.03711 C 1612.7789 201.65035 1616.0041 203.84017 1618.5391 206.60547 C 1621.074 209.37077 1622.3418 212.88515 1622.3418 217.14844 C 1622.3418 222.56395 1619.98 226.88501 1615.2559 230.11133 C 1610.6469 233.22239 1604.3098 234.77734 1596.2441 234.77734 C 1589.4459 234.77734 1582.4173 233.28097 1575.1582 230.28516 C 1568.0143 227.17409 1561.562 222.79446 1555.8008 217.14844 L 1548.3691 231.49414 C 1554.476 237.25542 1561.7352 241.86365 1570.1465 245.32031 C 1578.5578 248.77698 1587.1981 250.50586 1596.0703 250.50586 C 1604.8273 250.50586 1612.5475 249.12272 1619.2305 246.35742 C 1626.0287 243.47687 1631.2718 239.44493 1634.959 234.25977 C 1638.7614 229.07477 1640.6621 223.02482 1640.6621 216.11133 C 1640.6621 208.62189 1638.8766 202.63052 1635.3047 198.13672 C 1631.7328 193.52783 1627.4116 190.07202 1622.3418 187.76758 C 1617.272 185.46314 1610.6477 183.04277 1602.4668 180.50781 C 1595.8991 178.43287 1590.7711 176.64737 1587.084 175.15039 C 1583.3968 173.53715 1580.2849 171.40395 1577.75 168.75391 C 1575.2151 165.98844 1573.9473 162.47422 1573.9473 158.21094 C 1573.9473 153.4868 1576.0219 149.80043 1580.1699 147.15039 C 1584.4332 144.38492 1590.0788 143.00195 1597.1074 143.00195 C 1602.1773 143.00195 1607.7095 143.92399 1613.7012 145.76758 C 1619.808 147.49591 1625.6841 150.14683 1631.3301 153.71875 L 1638.2422 138.85352 C 1632.8267 135.2816 1626.6048 132.45887 1619.5762 130.38477 C 1612.6627 128.19558 1605.5774 127.10156 1598.3184 127.10156 z M 1370.1328 127.44727 C 1358.4952 127.44727 1347.837 130.1548 1338.1582 135.57031 C 1328.4794 140.98582 1320.8159 148.41678 1315.1699 157.86523 C 1309.6392 167.19826 1306.875 177.51265 1306.875 188.80469 C 1306.875 200.21181 1309.6392 210.63765 1315.1699 220.08594 C 1320.7007 229.53422 1328.2489 237.02392 1337.8125 242.55469 C 1347.3761 247.9702 1357.919 250.67969 1369.4414 250.67969 C 1377.7375 250.67969 1385.9168 249.00742 1393.9824 245.66602 C 1402.0481 242.20935 1409.1353 237.48593 1415.2422 231.49414 L 1405.2168 220.60547 C 1400.4926 225.09927 1395.0776 228.67206 1388.9707 231.32227 C 1382.8639 233.85705 1376.642 235.12305 1370.3047 235.12305 C 1361.7781 235.12305 1353.9427 233.05037 1346.7988 228.90234 C 1339.655 224.75431 1334.0094 219.10673 1329.8613 211.96289 C 1325.7133 204.81905 1323.6387 197.04218 1323.6387 188.63086 C 1323.6387 180.10429 1325.7133 172.32741 1329.8613 165.29883 C 1334.0094 158.15482 1339.655 152.50741 1346.7988 148.35938 C 1353.9427 144.21134 1361.7781 142.13867 1370.3047 142.13867 C 1376.7572 142.13867 1383.0377 143.52164 1389.1445 146.28711 C 1395.2514 148.93715 1400.6078 152.68013 1405.2168 157.51953 L 1415.0684 145.59375 C 1409.3072 139.83264 1402.4524 135.39817 1394.502 132.28711 C 1386.6667 129.06079 1378.5441 127.44727 1370.1328 127.44727 z M 421.75586 128.48438 L 421.75586 249.46875 L 449.06445 249.46875 L 449.06445 214.90234 L 474.29883 214.90234 L 476.89062 214.90234 L 496.07617 249.46875 L 527.01367 249.46875 L 501.26172 209.54492 C 508.63602 206.08809 514.22301 201.07554 518.02539 194.50781 C 521.94301 187.82483 523.90234 179.81545 523.90234 170.48242 C 523.90234 157.11645 519.58123 146.80402 510.93945 139.54492 C 502.29767 132.17057 490.08446 128.48438 474.29883 128.48438 L 421.75586 128.48438 z M 546.99414 128.48438 L 546.99414 249.46875 L 641.01758 249.46875 L 641.01758 226.82812 L 574.30273 226.82812 L 574.30273 200.03711 L 632.54883 200.03711 L 632.54883 177.39648 L 574.30273 177.39648 L 574.30273 151.125 L 639.11719 151.125 L 639.11719 128.48438 L 546.99414 128.48438 z M 701.1582 128.48438 L 648.61719 249.46875 L 676.78906 249.46875 L 686.29492 225.96289 L 742.29297 225.96289 L 751.79883 249.46875 L 781.00781 249.46875 L 729.33008 128.48438 L 701.1582 128.48438 z M 898.29297 128.48438 L 898.29297 151.64453 L 935.10742 151.64453 L 935.10742 249.46875 L 962.41602 249.46875 L 962.41602 151.64453 L 999.40234 151.64453 L 999.40234 128.48438 L 898.29297 128.48438 z M 1018.166 128.48438 L 1018.166 249.46875 L 1070.709 249.46875 C 1084.4206 249.46875 1095.1355 246.58745 1102.8555 240.82617 C 1110.6907 234.94981 1114.6074 226.82719 1114.6074 216.45703 C 1114.6074 208.27623 1112.189 201.47801 1107.3496 196.0625 C 1102.6255 190.53106 1096.0578 187.13204 1087.6465 185.86523 C 1094.4447 184.25216 1099.8011 181.08368 1103.7188 176.35938 C 1107.6364 171.51998 1109.5957 165.6438 1109.5957 158.73047 C 1109.5957 149.28219 1106.0247 141.90784 1098.8809 136.60742 C 1091.8522 131.19191 1082.1727 128.48438 1069.8438 128.48438 L 1018.166 128.48438 z M 1141.3789 128.48438 L 1141.3789 249.46875 L 1157.9707 249.46875 L 1157.9707 211.79102 L 1188.7363 211.79102 C 1190.4647 211.79102 1192.7112 211.67549 1195.4766 211.44531 L 1219.5 249.46875 L 1238.5117 249.46875 L 1210.3398 208.50586 C 1218.8664 205.51005 1225.3774 200.67127 1229.8711 193.98828 C 1234.48 187.3053 1236.7832 179.06749 1236.7832 169.27344 C 1236.7832 156.25323 1232.5793 146.22797 1224.168 139.19922 C 1215.8719 132.05538 1204.0611 128.48438 1188.7363 128.48438 L 1141.3789 128.48438 z M 1266.2793 128.48438 L 1266.2793 249.46875 L 1282.8711 249.46875 L 1282.8711 128.48438 L 1266.2793 128.48438 z M 1438.4395 128.48438 L 1438.4395 249.46875 L 1455.0312 249.46875 L 1455.0312 217.83984 L 1477.3281 193.64258 L 1519.8457 249.46875 L 1539.8945 249.46875 L 1488.9082 180.67969 L 1536.7832 128.48438 L 1516.9062 128.48438 L 1455.0312 196.4082 L 1455.0312 128.48438 L 1438.4395 128.48438 z M 1157.9707 143.52148 L 1188.7363 143.52148 C 1199.1065 143.52148 1207.0572 145.76809 1212.5879 150.26172 C 1218.1186 154.64026 1220.8828 161.14919 1220.8828 169.79102 C 1220.8828 178.66319 1218.1186 185.40479 1212.5879 190.01367 C 1207.0572 194.50747 1199.1065 196.75391 1188.7363 196.75391 L 1157.9707 196.75391 L 1157.9707 143.52148 z M 1034.7578 143.69336 L 1068.9805 143.69336 C 1076.47 143.57827 1082.2308 145.07643 1086.2637 148.1875 C 1090.4117 151.2984 1092.4844 155.73482 1092.4844 161.49609 C 1092.4844 167.37246 1090.4117 171.92407 1086.2637 175.15039 C 1082.2308 178.26146 1076.47 179.81641 1068.9805 179.81641 L 1034.7578 179.81641 L 1034.7578 143.69336 z M 449.06445 151.125 L 474.29883 151.125 C 481.90359 151.125 487.72303 152.85371 491.75586 156.31055 C 495.90391 159.65196 497.97656 164.66467 497.97656 171.34766 C 497.97656 178.1459 495.90391 183.33042 491.75586 186.90234 C 487.72303 190.35901 481.90359 192.08789 474.29883 192.08789 L 449.06445 192.08789 L 449.06445 151.125 z M 714.4668 157.00195 L 733.47852 204.01367 L 695.2832 204.01367 L 714.4668 157.00195 z M 1034.7578 194.85352 L 1068.9805 194.85352 C 1077.9679 194.85352 1084.9966 196.58045 1090.0664 200.03711 C 1095.1362 203.49377 1097.6699 208.27594 1097.6699 214.38281 C 1097.6699 220.7202 1095.1362 225.67613 1090.0664 229.24805 C 1084.9966 232.70706 1077.9679 234.37737 1068.9805 234.25977 L 1034.7578 234.25977 L 1034.7578 194.85352 z ", transform: "matrix(0.03967987,0,0,0.03967987,31.539957,263.04309)", id: "path2217" }), ue2.createElement("g", { transform: "matrix(0.45707395,0,0,0.45707395,-5.476545,228.6835)", id: "g2123" }, ue2.createElement("path", { style: { color: "#000000", fill: "#b43278", strokeWidth: 6.3499999, strokeLinecap: "round" }, d: "m 89.441569,80.202363 c -4.314359,-0.08215 -4.314359,6.431634 0,6.349484 h 2.601907 c 4.314357,0.08215 4.314357,-6.431634 0,-6.349484 z m 13.696321,8.201051 c -4.293622,-0.06072 -4.293622,6.410722 0,6.35 h 2.60191 c 4.29362,0.06072 4.29362,-6.410724 0,-6.35 z m -13.712341,8.201565 c -4.293532,-0.06063 -4.293532,6.410631 0,6.350001 h 2.601907 c 4.293531,0.0606 4.293531,-6.410625 0,-6.350001 z", id: "path2119" }), ue2.createElement("path", { style: { color: "#000000", fill: "#f65a8e", stroke: "none", strokeWidth: 6.3499999, strokeLinecap: "round" }, d: "m 99.752893,80.202362 c -4.314356,-0.08215 -4.314356,6.431635 0,6.349484 h 5.970697 c 4.31436,0.08215 4.31436,-6.431634 0,-6.349484 z m -10.327018,8.201052 c -4.293624,-0.06072 -4.293624,6.410722 0,6.35 h 5.970696 c 4.293624,0.06072 4.293624,-6.410725 0,-6.35 z m 10.34252,8.201564 c -4.293528,-0.06063 -4.293528,6.410632 0,6.350002 h 5.971215 c 4.29353,0.0606 4.29353,-6.410626 0,-6.350002 z", id: "path2121" })))));
};
var rr = function(t3, n4) {
  return n4.getDefaultContent ? n4.getDefaultContent().reduce(function(n5, r3) {
    var a2 = t3[r3], o2 = (a2 == null ? void 0 : a2.schema.getDefaultProps) ? a2 == null ? void 0 : a2.schema.getDefaultProps() : {};
    return o2 ? y(y([], v(n5), false), [{ id: v4_default(), type: r3, props: o2 }], false) : n5;
  }, []) : [];
};
var ar = function() {
  return import_react5.default.createElement("div", { className: "flex items-center justify-between px-2 mb-2" }, import_react5.default.createElement("div", { className: "text-sm font-semibold italic" }, "Create a new page!"), import_react5.default.createElement("div", { style: { width: 40 } }, import_react5.default.createElement("svg", { viewBox: "0 0 100 50" }, import_react5.default.createElement("path", { d: "M5,30 Q84,37 75,5", stroke: "#f65a8e", fill: "transparent", strokeWidth: "5", strokeLinecap: "round" }), import_react5.default.createElement("path", { d: "M75,5 65,15", stroke: "#f65a8e", fill: "transparent", strokeWidth: "5", strokeLinecap: "round" }), import_react5.default.createElement("path", { d: "M75,5 84,15", stroke: "#f65a8e", fill: "transparent", strokeWidth: "5", strokeLinecap: "round" }))));
};
var or = function() {
  return import_react5.default.createElement("svg", { viewBox: "0 0 44 44", xmlns: "http://www.w3.org/2000/svg", stroke: "currentColor", "aria-label": "Loader", "data-testid": "puff-svg" }, import_react5.default.createElement("g", { fill: "none", fillRule: "evenodd", strokeWidth: "2" }, import_react5.default.createElement("circle", { cx: "22", cy: "22", r: "1" }, import_react5.default.createElement("animate", { attributeName: "r", begin: "0s", dur: "1.8s", values: "1; 20", calcMode: "spline", keyTimes: "0; 1", keySplines: "0.165, 0.84, 0.44, 1", repeatCount: "indefinite" }), import_react5.default.createElement("animate", { attributeName: "strokeOpacity", begin: "0s", dur: "1.8s", values: "1; 0", calcMode: "spline", keyTimes: "0; 1", keySplines: "0.3, 0.61, 0.355, 1", repeatCount: "indefinite" })), import_react5.default.createElement("circle", { cx: "22", cy: "22", r: "1" }, import_react5.default.createElement("animate", { attributeName: "r", begin: "-0.9s", dur: "1.8s", values: "1; 20", calcMode: "spline", keyTimes: "0; 1", keySplines: "0.165, 0.84, 0.44, 1", repeatCount: "indefinite" }), import_react5.default.createElement("animate", { attributeName: "strokeOpacity", begin: "-0.9s", dur: "1.8s", values: "1; 0", calcMode: "spline", keyTimes: "0; 1", keySplines: "0.3, 0.61, 0.355, 1", repeatCount: "indefinite" }))));
};
var ir = function(e2, t3) {
  return e2 ? e2.filter(function(e3) {
    return e3.type === t3;
  }) : [];
};
var lr = function() {
  var t3 = (0, import_react5.useContext)(A), n4 = t3.pageTypes, r3 = t3.bricks, a2 = (0, import_react5.useContext)(qt), o2 = a2.currentPage, i2 = a2.setCurrentPage, l2 = a2.previewMode, s3 = a2.sidebarCollapsed, d2 = ke(), u2 = d2.data, m2 = d2.error, p3 = d2.isLoading, h3 = d2.isFetching, v3 = function() {
    var e2 = useQueryClient();
    return useMutation(function(e3) {
      var t4 = e3.type, n5 = e3.name, r4 = e3.content, a3 = e3.status, o3 = e3.isLocked, i3 = e3.language;
      return f(void 0, void 0, void 0, function() {
        return g(this, function(e4) {
          switch (e4.label) {
            case 0:
              return [4, import_axios.default.post("/admin/pages", { id: v4_default(), type: t4, name: n5, content: JSON.stringify(r4), status: a3, isLocked: o3, language: i3 }).then(function(e5) {
                return e5.data;
              })];
            case 1:
              return [2, e4.sent()];
          }
        });
      });
    }, { onSuccess: function() {
      e2.invalidateQueries("pages"), index_es_default.success("New page created", { position: "bottom-right" });
    }, onError: tr({ topic: "page", getLimitExceededError: function(e3, t4) {
      return "The ".concat(e3, " plan has a limit of ").concat(t4, " pages.");
    }, conflictError: "A page with the same name already exists", genericError: "An error occurred while adding the new page" }) });
  }(), x2 = v((0, import_react5.useState)(""), 2), y3 = x2[0], w2 = x2[1], k3 = v((0, import_react5.useState)(""), 2), C2 = k3[0], A3 = k3[1], N2 = v((0, import_react5.useState)([]), 2), I3 = N2[0], L2 = N2[1], B3 = v((0, import_react5.useState)(""), 2), z2 = B3[0], D2 = B3[1];
  (0, import_react5.useEffect)(function() {
    var e2 = n4.map(function(e3, t4) {
      return p(p({}, e3), { isOpen: !t4 });
    });
    L2(e2);
  }, [n4]);
  var P2 = function() {
    w2(""), A3("");
  }, T = function(e2) {
    return f(void 0, void 0, void 0, function() {
      var t4, a3, o3;
      return g(this, function(l3) {
        switch (l3.label) {
          case 0:
            return e2.preventDefault(), (t4 = n4.find(function(e3) {
              return e3.name === y3;
            })) && C2 ? (a3 = { id: v4_default(), type: y3, name: C2, status: t4.defaultStatus || b.PageStatus.Draft, isLocked: !!t4.defaultLocked, content: rr(r3, t4) }, [4, v3.mutateAsync(a3)]) : [3, 2];
          case 1:
            (o3 = l3.sent()) && i2({ pageId: o3.id, language: o3.language }), l3.label = 2;
          case 2:
            return w2(""), A3(""), [2];
        }
      });
    });
  }, R2 = function(e2) {
    return e2.isOpen || z2;
  };
  return m2 ? null : ue2.createElement("div", { style: { width: l2 || s3 ? 0 : 192, transition: "width 300ms" } }, !l2 && !s3 && ue2.createElement("div", { className: "fixed top-0 pt-10 pb-12 w-48 h-full overflow-y-auto scrolling-touch" }, ue2.createElement("nav", { className: "overflow-y-auto" }, ue2.createElement("div", { className: "relative px-2 mt-4 mb-4" }, ue2.createElement(Fn, { value: z2, onChange: function(e2) {
    D2(e2.target.value);
  }, className: "py-2 pr-5 pl-3", textSize: "xs", radiusSize: "full", placeholder: "Search page" }), ue2.createElement(FiSearch, { className: "absolute text-gray-400", style: { top: 8, right: 15 } })), I3.map(function(e2, t4) {
    return ue2.createElement("div", { className: "mb-3", key: e2.name }, ue2.createElement("div", { className: "flex flex-row justify-between items-center pl-2 border-b border-gray-300 pb-1 mb-2" }, ue2.createElement("h3", { className: "flex items-center text-xs cursor-pointer leading-none font-semibold uppercase tracking-widest text-gray-500", onClick: (r4 = e2.name, function() {
      L2(I3.map(function(e3) {
        return e3.name === r4 ? p(p({}, e3), { isOpen: !e3.isOpen }) : e3;
      }));
    }) }, R2(e2) ? ue2.createElement(FiChevronDown, { className: "text-sm mr-1" }) : ue2.createElement(FiChevronRight, { className: "text-sm mr-1" }), e2.pluralName, u2 && ir(u2, e2.name).length > 0 && ue2.createElement("div", { className: "ml-2 rounded-full bg-gray-200 flex justify-center items-center border border-gray-300", style: { fontSize: 9, width: 15, height: 15, flexShrink: 0 } }, ir(u2, e2.name).length)), p3 || h3 ? ue2.createElement("div", { className: "px-2 w-8 text-pink-500" }, ue2.createElement(or, null)) : ue2.createElement(tippy_react_esm_default, { content: "Add new ".concat(e2.name) }, ue2.createElement("button", { type: "button", onClick: (n5 = e2.name, function() {
      w2(n5), A3("");
    }), title: "Add new ".concat(e2.name), className: "text-gray-700 hover:text-black px-2" }, ue2.createElement(VscNewFile, { className: "text-base" })))), R2(e2) && u2 && u2.length < 3 && y3 !== e2.name && t4 === 0 && ue2.createElement(ar, null), y3 === e2.name && ue2.createElement("form", { onSubmit: T, className: "flex flex-row justify-between items-center px-2 mb-3" }, ue2.createElement(Fn, { autoFocus: true, className: "h-6", textSize: "xs", style: { width: 132 }, value: C2, onChange: function(e3) {
      return A3(e3.target.value);
    } }), ue2.createElement("div", { className: "mx-1" }, ue2.createElement("button", { type: "submit", className: "text-sm text-green-500 hover:text-green-600 mr-1" }, ue2.createElement(FiCheck, null)), ue2.createElement("button", { type: "button", onClick: P2, className: "text-sm text-gray-400 hover:text-red-500" }, ue2.createElement(FiX, null)))), ue2.createElement("ul", null, u2 && R2(e2) && ir(u2, e2.name).filter(function(e3) {
      return e3.name.toLowerCase().indexOf(z2.toLowerCase()) > -1;
    }).map(function(e3) {
      return ue2.createElement("li", { key: e3.id, onClick: function() {
        return i2({ pageId: e3.id });
      }, style: e3.id === o2.pageId ? { boxShadow: "0 0 5px rgba(74,85,104,0.08)" } : {}, className: (0, import_classnames2.default)("text-sm px-2 py-1 flex flex-row justify-between items-center cursor-pointer", e3.id === o2.pageId ? "bg-white border-t border-b border-gray-300 font-semibold text-black hover:text-black" : e3.status === b.PageStatus.Draft ? "hover:bg-white text-gray-400 hover:text-gray-900" : "hover:bg-white text-gray-700 hover:text-gray-900") }, ue2.createElement("div", { className: "flex flex-row justify-start items-center flex-1" }, ue2.createElement("div", { className: "mr-2" }, e3.isLocked ? ue2.createElement(FiLock, { className: "text-pink-400" }) : ue2.createElement(FiUnlock, { className: "text-gray-400" })), ue2.createElement("div", null, e3.name)), e3.status === b.PageStatus.Draft && ue2.createElement(FiEyeOff, { className: "text-gray-400 ml-2" }));
    })));
    var n5, r4;
  }))), ue2.createElement("div", { className: "fixed bg-gray-100 bottom-0 left-0 py-1 pl-2 text-xs flex flex-row justify-start items-center", style: { width: 180 } }, ue2.createElement("div", { className: "w-24" }, ue2.createElement(nr, null)), ue2.createElement("div", { className: "font-bold italic text-blue-500" }, "v3")));
};
var cr = function(e2, t3, n4) {
  if (typeof e2 != "function")
    return true;
  var r3 = e2(t3, n4);
  return !(!r3 || typeof r3 == "string");
};
var sr = function(e2, t3) {
  return !t3.schema.sideEditProps || t3.schema.sideEditProps.reduce(function(t4, n4) {
    return n4.groupName ? t4 && (r3 = e2.props, !(a2 = n4.props) || a2.reduce(function(e3, t5) {
      return e3 && cr(t5.validate, r3[t5.name], r3);
    }, true)) : t4 && cr(n4.validate, e2.props[n4.name], e2.props);
    var r3, a2;
  }, true);
};
var dr = function(e2, t3, n4) {
  return !t3.schema.repeaterItems || !t3.schema.repeaterItems.map(function(t4) {
    var r3 = e2.props[t4.name], a2 = n4[t4.itemType];
    return !r3 || (r3.length < 1 || r3.reduce(function(e3, t5) {
      return e3 && !!sr(t5, a2);
    }, true));
  }).some(function(e3) {
    return e3 === false;
  });
};
!function(e2) {
  e2.Default = "DEFAULT", e2.Primary = "PRIMARY", e2.Danger = "DANGER";
}(Un || (Un = {}));
var ur = function(e2) {
  var t3, n4 = e2.onClick, r3 = e2.type, a2 = r3 === void 0 ? Un.Default : r3, o2 = e2.active, i2 = o2 !== void 0 && o2, l2 = e2.tooltip, c2 = l2 === void 0 ? "" : l2, s3 = e2.className, d2 = s3 === void 0 ? "" : s3, u2 = e2.children, m2 = import_react5.default.createElement("button", { className: (0, import_classnames2.default)("focus:outline-none text-sm leading-none", { "block p-2 hover:text-gray-900 hover:bg-white border border-transparent hover:border-gray-300 rounded transition-colors duration-150": a2 === Un.Default }, { "text-gray-600": a2 === Un.Default && !i2 }, { "text-gray-900 bg-white border-gray-300": a2 === Un.Default && i2 }, (t3 = {}, t3[d2] = !!d2, t3)), onClick: n4 }, u2);
  return c2 ? import_react5.default.createElement(tippy_react_esm_default, { content: c2 }, m2) : m2;
};
var mr = typeof window != "undefined" && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform);
var pr = function(e2) {
  var t3 = e2.page, n4 = e2.sidebarOpen, r3 = e2.setSidebarOpen, a2 = e2.devicePreview, o2 = e2.setDevicePreview, i2 = e2.handleSave, l2 = e2.saveStatus, c2 = e2.isPlayground, s3 = c2 !== void 0 && c2, d2 = e2.autoSave, u2 = e2.setAutoSave, m2 = (0, import_react5.useContext)(A), p3 = m2.bricks, h3 = m2.isDarkColorMode, v3 = m2.toggleColorMode, x2 = m2.responsiveBreakpoints, y3 = m2.enableAutoSave, w2 = m2.disableSaveIfInvalidProps, k3 = m2.enablePreview, C2 = m2.editorPath, A3 = m2.previewPath, N2 = (0, import_react5.useContext)(qt), S2 = N2.previewMode, I3 = N2.setPreviewMode, L2 = N2.sidebarCollapsed, B3 = N2.setSidebarCollapsed, z2 = function(e3, t4) {
    return t4 === void 0 && (t4 = 432e4), useMutation(function(e4) {
      var n5 = e4.pageId, r4 = e4.language;
      return f(void 0, void 0, void 0, function() {
        return g(this, function(e5) {
          switch (e5.label) {
            case 0:
              return [4, import_axios.default.post("/admin/pages/".concat(n5, "/translations/").concat(r4, "/create_preview_token"), { lifetime: t4 }).then(function(e6) {
                return e6.data;
              })];
            case 1:
              return [2, e5.sent()];
          }
        });
      });
    }, { onSuccess: function(t5) {
      (0, import_copy_to_clipboard.default)("".concat(e3, "/").concat(t5.token)), index_es_default.success("Link copied to clipboard. It will expire in ".concat(72, " hours."), { position: "bottom-right", hideAfter: 4 });
    }, onError: function() {
      index_es_default.error("An error occurred while generating a preview token", { position: "top-center" });
    } });
  }(window.location.href.replace(C2, A3)), D2 = t3.content.reduce(function(e3, t4) {
    var n5 = p3[t4.type];
    return n5 ? e3 && sr(t4, n5) && dr(t4, n5, p3) : e3;
  }, true);
  return S2 ? ue2.createElement("div", { className: "fixed z-20 py-2 flex flex-row justify-center items-center bg-gray-100", style: { top: 40, left: 0, right: 0 } }, ue2.createElement(ur, { className: "flex", onClick: function() {
    return I3(false);
  } }, ue2.createElement(FiMinimize2, { className: "mr-1" }), "Exit preview")) : ue2.createElement("div", { className: "fixed z-20 bg-gray-100", style: { top: 40, left: L2 ? 0 : 192, right: 0, transition: "all 300ms" } }, ue2.createElement("div", { className: "w-full flex flex-row items-center pt-2 pb-1" }, ue2.createElement("div", { className: "flex flex-1 justify-between" }, ue2.createElement("div", { className: "flex flex-row justify-start items-center min-w-0" }, ue2.createElement(ur, { onClick: function() {
    B3(!L2);
  }, tooltip: L2 ? "Open men\xF9" : "Close men\xF9", className: "mr-2" }, ue2.createElement(FiMenu, null)), ue2.createElement("h2", { className: "text-lg font-semibold text-gray-900 truncate mr-2 capitalize" }, t3.name), !s3 && ue2.createElement(ue2.Fragment, null, ue2.createElement("div", { className: "mr-2" }, t3.status === b.PageStatus.Published ? ue2.createElement("div", { className: "flex text-xs font-semibold leading-none py-1 px-2 rounded bg-green-200 text-green-800" }, ue2.createElement(FiEye, { className: "mr-1" }), "Published") : ue2.createElement("div", { className: "flex text-xs font-semibold leading-none py-1 px-2 rounded bg-gray-300 text-gray-700" }, ue2.createElement(FiEyeOff, { className: "mr-1" }), "Draft")), ue2.createElement("div", { className: "mr-2" }, t3.isLocked === true ? ue2.createElement("div", { className: "flex text-xs font-semibold leading-none py-1 px-2 rounded bg-pink-200 text-pink-700" }, ue2.createElement(FiLock, { className: "mr-1" }), "Locked") : ue2.createElement("div", { className: "flex text-xs font-semibold leading-none py-1 px-2 rounded bg-gray-300 text-gray-700" }, ue2.createElement(FiUnlock, { className: "mr-1" }), "Unlocked")))), ue2.createElement("div", { className: "flex items-center" }, v3 && ue2.createElement(ur, { onClick: v3, tooltip: "".concat(h3 ? "Light" : "Dark", " color mode"), className: "mr-1", active: h3 }, ue2.createElement(FiMoon, null)), x2.map(function(e3) {
    return ue2.createElement(ur, { key: e3.width, onClick: function() {
      return o2(e3);
    }, tooltip: e3.label, active: a2.width === e3.width, className: "mr-1" }, e3.type === b.DeviceType.Desktop ? ue2.createElement(MdDesktopMac, null) : e3.type === b.DeviceType.Tablet ? ue2.createElement(MdTabletMac, null) : ue2.createElement(MdSmartphone, null));
  }), k3 && ue2.createElement(ur, { onClick: function() {
    return z2.mutate({ pageId: t3.id, language: t3.language });
  }, tooltip: "Get preview link" }, ue2.createElement(FiShare2, null)), ue2.createElement(ur, { onClick: function() {
    return I3(true);
  }, tooltip: "Full-screen preview" }, ue2.createElement(FiMaximize2, null)))), ue2.createElement("div", { className: "flex flex-row justify-end items-center px-3 space-x-4", style: { width: 275 } }, !s3 && ue2.createElement(ue2.Fragment, null, y3 && ue2.createElement("div", null, ue2.createElement(es_default2, { checked: d2, onChange: function(e3) {
    return u2(e3);
  } }), ue2.createElement("span", { className: (0, import_classnames2.default)("text-xs ml-1", d2 ? "text-green-500 font-semibold" : "text-gray-600") }, "Autosave")), ue2.createElement(tippy_react_esm_default, { content: D2 ? "Save (".concat(mr ? "cmd" : "ctrl", "+s)") : "Warning: at least one block has validation errors" }, ue2.createElement("div", null, ue2.createElement("button", { className: "px-6 py-2 bg-blue-500 hover:bg-blue-600 hover:shadow-lg text-sm leading-none text-white font-semibold rounded disabled:opacity-75 disabled:cursor-not-allowed", onClick: i2, disabled: w2 && !D2 || l2 === "loading" }, "Save")))), ue2.createElement(ur, { onClick: function() {
    return r3(!n4);
  }, active: n4, tooltip: n4 ? "Close sidebar" : "Open sidebar" }, ue2.createElement(FiSettings, null)))));
};
var gr = function(t3) {
  var n4 = t3.children, r3 = t3.styles, a2 = t3.stylesheets, o2 = t3.head, i2 = m(t3, ["children", "styles", "stylesheets", "head"]), l2 = v((0, import_react5.useState)(null), 2), s3 = l2[0], u2 = l2[1], m2 = v((0, import_react5.useState)(null), 2), p3 = m2[0], g3 = m2[1], f3 = v((0, import_react5.useState)(false), 2), h3 = f3[0], b3 = f3[1], v3 = (0, import_react5.useRef)(null);
  (0, import_react5.useEffect)(function() {
    if (h3) {
      var e2 = v3.current.contentDocument.head;
      if (e2.innerHTML = "", r3 && r3.forEach(function(t5) {
        return e2.appendChild(t5.cloneNode(true));
      }), a2 && a2.forEach(function(t5) {
        return e2.appendChild(t5.cloneNode(true));
      }), u2(e2), !p3) {
        var t4 = v3.current.contentDocument.body;
        g3(t4);
      }
    }
  }, [r3, a2, h3]);
  return import_react5.default.createElement("iframe", p({ ref: v3, srcDoc: "<!DOCTYPE html>", title: "content" }, i2, { onLoad: function(e2) {
    e2.defaultPrevented || e2.target.contentDocument && b3(true);
  } }), s3 && import_react_dom4.default.createPortal(o2, s3), p3 && import_react_dom4.default.createPortal(n4, p3));
};
var fr = function(t3) {
  var r3 = t3.contentLength, o2 = t3.contentRef, i2 = t3.block, l2 = t3.index, s3 = t3.locked, d2 = t3.setAddAfterBlockId, u2 = t3.handleChange, m2 = t3.handleAddBlockAfter, p3 = t3.handleAddBlockBefore, h3 = t3.handleRemoveBlock, b3 = t3.handleSort, v3 = t3.handleAddItem, x2 = t3.handleDuplicate, y3 = (0, import_react5.useContext)(A).bricks, w2 = (0, import_react5.useContext)(qt).previewMode, k3 = (0, import_react5.useContext)(k), E3 = k3.focused, C2 = k3.setFocused, A3 = v(me(), 1)[0], N2 = function(e2) {
    var t4 = y3[e2.type];
    if (t4) {
      var r4 = e2.props;
      return t4.schema.mapExternalDataToProps && typeof t4.schema.mapExternalDataToProps == "function" && A3.externalData && typeof A3.externalData == "object" && (r4 = t4.schema.mapExternalDataToProps(A3.externalData, e2.props)), ue2.createElement(E.Provider, { value: { values: r4, onChange: u2(e2.id), blockId: e2.id, parentId: e2.id, parentType: e2.type, contentRef: o2, handleChange: u2, handleAddItem: v3 } }, ue2.createElement(t4, p({}, r4)));
    }
  }, S2 = {};
  if (i2.id !== E3.blockId || w2 || (S2.border = "2px solid #f65a8e", S2.minHeight = "65px"), i2.id === "PREVIEW_NEW")
    return ue2.createElement("div", null, N2(i2));
  var I3 = { position: "relative", boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "stretch" };
  return i2.id !== E3.blockId || w2 || s3 || (I3.minHeight = "30px"), ue2.createElement("div", { key: i2.id, style: I3 }, i2.id === E3.blockId && !w2 && !s3 && ue2.createElement(tippy_react_esm_default, { content: "Add new block before", appendTo: o2.current }, ue2.createElement("button", { onClick: p3(i2.id), className: "rb-action", tabIndex: -1, style: { top: -11, zIndex: 999, position: "absolute", left: "calc(50% - 12px)" } }, ue2.createElement(FiPlus, null))), ue2.createElement("div", { style: p({}, S2), onClick: function() {
    C2({ blockId: i2.id, itemId: "", repeaterPropName: "" }), d2("");
  }, onFocus: function() {
    return setTimeout(function() {
      C2({ blockId: i2.id, itemId: "", repeaterPropName: "" }), d2("");
    }, 0);
  } }, N2(i2)), i2.id === E3.blockId && !w2 && !s3 && ue2.createElement(ue2.Fragment, null, ue2.createElement(tippy_react_esm_default, { content: "Add new block after", appendTo: o2.current }, ue2.createElement("button", { onClick: m2(i2.id), className: "rb-action", tabIndex: -1, style: { bottom: -11, zIndex: 999, position: "absolute", left: "calc(50% - 12px)" } }, ue2.createElement(FiPlus, null))), ue2.createElement("div", { style: { zIndex: 999, position: "absolute", right: 6, top: 6 } }, ue2.createElement(tippy_react_esm_default, { content: "Remove block", appendTo: o2.current }, ue2.createElement("button", { className: "rb-action", onClick: h3(i2.id), tabIndex: -1 }, ue2.createElement(AiOutlineDelete, null)))), ue2.createElement("div", { style: { zIndex: 999, position: "absolute", right: 6, bottom: 6 } }, ue2.createElement(tippy_react_esm_default, { content: "Duplicate block", appendTo: o2.current }, ue2.createElement("button", { className: "rb-action", onClick: x2(i2.id), tabIndex: -1 }, ue2.createElement(FiCopy, null)))), ue2.createElement("div", { style: { zIndex: 999, position: "absolute", left: 6, top: 6, display: "flex", flexDirection: "column" } }, ue2.createElement(tippy_react_esm_default, { content: "Move block up", appendTo: o2.current }, ue2.createElement("button", { disabled: l2 === 0, onClick: b3(i2.id, b.SortDirection.Up), className: (0, import_classnames2.default)("rb-action", { disabled: l2 === 0 }), tabIndex: -1, style: { marginBottom: 4 } }, ue2.createElement(FiChevronUp, null))), ue2.createElement(tippy_react_esm_default, { content: "Move block down", appendTo: o2.current, placement: "bottom" }, ue2.createElement("button", { disabled: l2 === r3 - 1, onClick: b3(i2.id, b.SortDirection.Down), className: (0, import_classnames2.default)("rb-action", { disabled: l2 === r3 - 1 }), tabIndex: -1 }, ue2.createElement(FiChevronDown, null))))));
};
var hr = function(e2) {
  var t3 = e2.previewNewBlock;
  return ue2.createElement("div", { style: { border: "2px solid #f65a8e" } }, ue2.createElement("div", { style: { color: "#b43179", letterSpacing: "0.05em", paddingTop: "1rem", paddingBottom: "1rem", textAlign: "center" } }, "NEW BLOCK HERE: SELECT ON THE RIGHT \xBB"), t3 && ue2.createElement(fr, { contentLength: 0, block: t3, index: 1, locked: true, setAddAfterBlockId: function() {
  }, handleChange: function() {
  }, handleAddBlockBefore: function() {
  }, handleAddBlockAfter: function() {
  }, handleRemoveBlock: function() {
  }, handleSort: function() {
  }, handleDuplicate: function() {
  } }));
};
var br = function(e2) {
  var t3 = e2.pageTypeName, n4 = (0, import_react5.useContext)(A), r3 = n4.bricks, a2 = n4.pageTypes;
  if (!t3)
    return null;
  var o2 = a2.find(function(e3) {
    return e3.name === t3;
  });
  if (!o2)
    return null;
  var i2 = Object.keys(r3).filter(function(e3) {
    return !r3[e3].schema.hideFromAddMenu && xe(e3, o2.allowedBlockTypes, o2.excludedBlockTypes);
  }).map(function(e3) {
    return r3[e3].schema.label;
  }), l2 = Object.keys(r3).filter(function(e3) {
    return !r3[e3].schema.hideFromAddMenu && !xe(e3, o2.allowedBlockTypes, o2.excludedBlockTypes);
  }).map(function(e3) {
    return r3[e3].schema.label;
  });
  return ue2.createElement("div", { className: "p-3" }, ue2.createElement("h3", { className: "text-xs font-bold uppercase tracking-wider text-gray-600 mb-1" }, "Default status"), ue2.createElement("div", { className: "flex flex-row mb-5" }, ue2.createElement("div", { className: "flex-1 flex items-center py-1 px-3 bg-gray-500 text-white text-xs uppercase leading-none rounded mr-2 mb-1" }, o2.defaultStatus), ue2.createElement("div", { className: "flex-1 flex items-center py-1 px-3 bg-gray-500 text-white text-xs uppercase leading-none rounded mr-2 mb-1" }, o2.defaultLocked ? "LOCKED" : "UNLOCKED")), i2.length > 0 && ue2.createElement(ue2.Fragment, null, ue2.createElement("h3", { className: "text-xs font-bold uppercase tracking-wider text-gray-600 mb-1" }, "Allowed blocks"), ue2.createElement("div", { className: "flex flex-row flex-wrap mb-5" }, i2.map(function(e3) {
    return ue2.createElement("div", { key: e3, className: "flex items-center py-1 px-3 bg-gray-500 text-white text-xs uppercase leading-none rounded mr-2 mb-1" }, e3);
  }))), l2.length > 0 && ue2.createElement(ue2.Fragment, null, ue2.createElement("h3", { className: "text-xs font-bold uppercase tracking-wider text-gray-600 mb-1" }, "Blocks excluded"), ue2.createElement("div", { className: "flex flex-row flex-wrap" }, l2.map(function(e3) {
    return ue2.createElement("div", { key: e3, className: "flex items-center py-1 px-3 bg-gray-500 text-white text-xs uppercase leading-none rounded mr-2 mb-1" }, e3);
  }))));
};
var vr = function(e2) {
  var t3 = e2.blockTypeName, n4 = (0, import_react5.useContext)(A).pageTypes;
  if (!t3)
    return null;
  var r3 = n4.filter(function(e3) {
    return xe(t3, e3.allowedBlockTypes, e3.excludedBlockTypes);
  }).map(function(e3) {
    return e3.name;
  }), a2 = n4.filter(function(e3) {
    return !xe(t3, e3.allowedBlockTypes, e3.excludedBlockTypes);
  }).map(function(e3) {
    return e3.name;
  });
  return ue2.createElement("div", { className: "p-3" }, r3.length > 0 && ue2.createElement(ue2.Fragment, null, ue2.createElement("h3", { className: "text-xs font-bold uppercase tracking-wider text-gray-600 mb-1" }, "Allowed in"), ue2.createElement("div", { className: "flex flex-row flex-wrap mb-5" }, r3.map(function(e3) {
    return ue2.createElement("div", { key: e3, className: "flex items-center py-1 px-3 bg-gray-500 text-white text-xs uppercase leading-none rounded mr-2 mb-1" }, e3);
  }))), a2.length > 0 && ue2.createElement(ue2.Fragment, null, ue2.createElement("h3", { className: "text-xs font-bold uppercase tracking-wider text-gray-600 mb-1" }, "Excluded from"), ue2.createElement("div", { className: "flex flex-row flex-wrap" }, a2.map(function(e3) {
    return ue2.createElement("div", { key: e3, className: "flex items-center py-1 px-3 bg-gray-500 text-white text-xs uppercase leading-none rounded mr-2 mb-1" }, e3);
  }))));
};
var xr = function(t3) {
  var n4 = t3.name, r3 = t3.defaultOpen, a2 = t3.children, o2 = v((0, import_react5.useState)(!!r3), 2), i2 = o2[0], l2 = o2[1];
  return ue2.createElement("div", { className: "w-full border-t border-b border-gray-300 -mt-px" }, ue2.createElement("div", { className: "flex justify-between items-center cursor-pointer p-3 text-gray-500 hover:bg-gray-200 hover:text-gray-700", onClick: function() {
    l2(!i2);
  } }, ue2.createElement("h3", { className: "text-xs leading-none font-semibold uppercase tracking-widest" }, n4), i2 ? ue2.createElement(FiChevronUp, { className: "text-sm mr-1" }) : ue2.createElement(FiChevronDown, { className: "text-sm mr-1" })), i2 && ue2.createElement("div", { className: "p-3" }, a2));
};
var yr = function(e2) {
  return ue2.createElement(qn, p({}, e2, { source: e2.source, onChange: e2.onChange }));
};
var wr = function(e2) {
  var t3 = e2.options, n4 = e2.value, r3 = e2.onChange, a2 = e2.isValid;
  return t3[0] && t3[0].value && !t3[0].value.color ? (console.warn("DEPRECATED: Found color string instead of object with color prop", t3), ue2.createElement("div", { className: "flex flex-wrap" }, t3.map(function(e3) {
    return ue2.createElement(tippy_react_esm_default, { key: e3.value, content: e3.label, delay: 400 }, ue2.createElement("div", { title: e3.label, key: e3.value, style: { width: 28, height: 28, border: "1px solid ".concat(n4 !== e3.value || a2 ? "rgba(0,0,0,0.1)" : "#f56565"), backgroundColor: e3.value, marginRight: 8 }, className: "flex justify-center items-center rounded-full cursor-pointer mb-2 hover:transform hover:scale-125", onClick: function() {
      return r3(e3.value);
    } }, n4 && n4 === e3.value && ue2.createElement(FiCheck, { className: (0, import_color.default)(e3.value).isLight() ? "text-black" : "text-white" })));
  }))) : ue2.createElement("div", { className: "flex flex-wrap" }, t3.map(function(e3) {
    return e3.value && e3.value.color ? ue2.createElement(tippy_react_esm_default, { key: e3.value.color || e3.value, content: e3.label, delay: 400 }, ue2.createElement("div", { style: { width: 28, height: 28, border: "".concat((n4 == null ? void 0 : n4.color) !== e3.value.color || a2 ? "1px solid rgba(0,0,0,0.1)" : "2px solid #f56565"), backgroundColor: e3.value.color, marginRight: 8 }, className: "flex justify-center items-center rounded-full cursor-pointer mb-2 transform hover:scale-125 transition-transform duration-150", onClick: function() {
      return r3(e3.value);
    } }, (n4 == null ? void 0 : n4.color) === e3.value.color && ue2.createElement(FiCheck, { className: (0, import_color.default)(e3.value.color).isLight() ? "text-black" : "text-white" }))) : null;
  }));
};
var kr = function(e2) {
  var t3 = e2.options, n4 = e2.value, r3 = e2.onChange, a2 = e2.isValid;
  return ue2.createElement("div", null, t3.map(function(e3) {
    return ue2.createElement("label", { className: (0, import_classnames2.default)("block text-sm text-gray-700 mb-0.5", { "text-red-600": n4 === e3.value && !a2 }), htmlFor: e3.value, key: e3.value }, ue2.createElement(Fn, { type: "radio", id: e3.value, key: e3.value, name: e3.value, value: e3.value, checked: n4 === e3.value, onChange: function(e4) {
      return r3(e4.target.value);
    } }), e3.label);
  }));
};
var Er = import_react5.default.forwardRef(function(e2, t3) {
  return import_react5.default.createElement("select", p({ ref: t3, disabled: e2.disabled }, e2, { className: (0, import_classnames2.default)("block w-full rounded-md text-sm border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50", { "cursor-not-allowed": !!e2.disabled }, e2.classNames) }, e2.style));
});
var Cr = function(e2) {
  var t3 = e2.id, n4 = e2.options, r3 = e2.value, a2 = e2.onChange, o2 = e2.isValid;
  return ue2.createElement(Er, { id: t3, className: (0, import_classnames2.default)({ "border-red-500": !!r3 && !o2 }), value: r3, onChange: function(e3) {
    return a2(e3.target.value);
  } }, n4.map(function(e3) {
    return ue2.createElement("option", { key: e3.value, value: e3.value }, e3.label);
  }));
};
var Ar = function(t3) {
  var n4, r3 = t3.id, a2 = t3.blockId, o2 = t3.value, i2 = t3.selectOptions, l2 = t3.onChange, c2 = t3.isValid, s3 = v((0, import_react5.useState)((i2 == null ? void 0 : i2.options) || []), 2), d2 = s3[0], u2 = s3[1];
  return (0, import_react5.useEffect)(function() {
    var e2 = false;
    return function() {
      f(this, void 0, void 0, function() {
        var t4;
        return g(this, function(n5) {
          switch (n5.label) {
            case 0:
              return (i2 == null ? void 0 : i2.getOptions) ? [4, i2 == null ? void 0 : i2.getOptions()] : [3, 2];
            case 1:
              return t4 = n5.sent(), e2 || u2(t4), [3, 3];
            case 2:
              u2((i2 == null ? void 0 : i2.options) || []), n5.label = 3;
            case 3:
              return [2];
          }
        });
      });
    }(), function() {
      e2 = true;
    };
  }, [a2]), ((n4 = i2 == null ? void 0 : i2.options) === null || n4 === void 0 ? void 0 : n4.length) || typeof (i2 == null ? void 0 : i2.getOptions) == "function" ? i2.display === b.OptionsDisplay.Select ? ue2.createElement(Cr, { id: r3, options: d2, value: o2, onChange: l2, isValid: c2 }) : i2.display === b.OptionsDisplay.Radio ? ue2.createElement(kr, { options: d2, value: o2, onChange: l2, isValid: c2 }) : i2.display === b.OptionsDisplay.Color ? ue2.createElement(wr, { options: d2, value: o2, onChange: l2, isValid: c2 }) : null : null;
};
var Nr = function(e2) {
  return import_react5.default.createElement("textarea", p({}, e2, { className: (0, import_classnames2.default)("mt-1 block w-full text-sm rounded-md border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50", e2.classNames), rows: e2.rows || 3 }));
};
var Sr = function(t3) {
  var n4, r3 = t3.id, a2 = t3.value, o2 = t3.sideEditProp, i2 = t3.isValid, l2 = t3.onChange, s3 = v((0, import_react5.useState)(a2), 2), d2 = s3[0], u2 = s3[1];
  if ((0, import_react5.useEffect)(function() {
    u2(a2);
  }, [a2]), o2.type === b.SideEditPropType.Textarea) {
    var m2 = {};
    return ((n4 = o2.textareaOptions) === null || n4 === void 0 ? void 0 : n4.height) && (m2 = { style: { height: o2.textareaOptions.height } }), ue2.createElement(Nr, p({ id: r3, className: (0, import_classnames2.default)({ "border-2 border-red-500": !i2 }), value: d2 || "", onChange: function(e2) {
      u2(e2.target.value), l2(e2.target.value);
    } }, m2));
  }
  var p3 = "text", g3 = {};
  return o2.type === b.SideEditPropType.Number && (p3 = "number", o2.rangeOptions && (g3 = p({}, o2.rangeOptions))), o2.type === b.SideEditPropType.Date && (p3 = "date"), ue2.createElement(Fn, p({ id: r3, textSize: "sm", className: (0, import_classnames2.default)({ "border-2 border-red-500": !i2 }), type: p3, value: d2 || "" }, g3, { onChange: function(e2) {
    u2(e2.target.value), l2(e2.target.value);
  } }));
};
var Ir = function(e2) {
  var t3 = e2.propName, n4 = e2.label, r3 = e2.checked, a2 = e2.onChange, o2 = e2.isValid;
  return import_react5.default.createElement("label", { htmlFor: t3, className: "text-sm text-gray-700" }, import_react5.default.createElement(Fn, { id: t3, className: (0, import_classnames2.default)({ "text-red-600": !o2 }), type: "checkbox", checked: r3, onChange: function(e3) {
    return a2(e3.target.checked);
  } }), n4);
};
var Lr = function(e2) {
  var t3 = e2.propName, n4 = e2.value, r3 = e2.rangeOptions, a2 = e2.onChange;
  return import_react5.default.createElement("input", { id: t3, type: "range", value: n4, min: (r3 == null ? void 0 : r3.min) || 0, max: (r3 == null ? void 0 : r3.max) || 100, step: (r3 == null ? void 0 : r3.step) || 1, onChange: function(e3) {
    return a2(e3.target.value);
  } });
};
var Br = function(e2) {
  var t3, n4, r3 = e2.prop, a2 = e2.allProps, o2 = e2.onChange, i2 = e2.blockId, l2 = null, s3 = { isValid: true };
  if (typeof r3.show == "function" && !r3.show(a2))
    return null;
  if (typeof r3.validate == "function") {
    var d2 = r3.validate(a2[r3.name], a2);
    typeof d2 == "string" ? (s3.isValid = false, s3.errorMessage = d2) : s3.isValid = !!d2;
  }
  if (r3.type === b.SideEditPropType.Custom) {
    if (!r3.component)
      return null;
    var u2 = r3.component;
    l2 = ue2.createElement(u2, { id: r3.name, value: a2[r3.name], onChange: o2, isValid: s3.isValid, errorMessage: s3.errorMessage });
  }
  return r3.type !== b.SideEditPropType.Text && r3.type !== b.SideEditPropType.Number && r3.type !== b.SideEditPropType.Date && r3.type !== b.SideEditPropType.Textarea || (l2 = ue2.createElement(Sr, { id: r3.name, value: a2[r3.name], sideEditProp: p({}, r3), isValid: s3.isValid, onChange: o2 })), r3.type === b.SideEditPropType.Boolean && (l2 = ue2.createElement(Ir, { propName: r3.name, label: r3.label, checked: a2[r3.name] || false, onChange: o2, isValid: s3.isValid })), r3.type === b.SideEditPropType.Range && r3.rangeOptions && (l2 = ue2.createElement(Lr, { propName: r3.name, value: a2[r3.name], rangeOptions: r3.rangeOptions, onChange: o2, isValid: s3.isValid })), r3.type === b.SideEditPropType.Image && (l2 = ue2.createElement(yr, { containerClassName: "w-full", imageClassName: "object-cover", source: a2[r3.name], propName: r3.name, onChange: o2, alt: r3.name, maxWidth: (t3 = r3.imageOptions) === null || t3 === void 0 ? void 0 : t3.maxWidth, aspectRatio: (n4 = r3.imageOptions) === null || n4 === void 0 ? void 0 : n4.aspectRatio })), r3.type === b.SideEditPropType.Select && r3.selectOptions && (l2 = ue2.createElement(Ar, { id: r3.name, blockId: i2, value: a2[r3.name], selectOptions: r3.selectOptions, onChange: o2, isValid: s3.isValid })), ue2.createElement("div", { className: "mb-6", key: r3.name }, ue2.createElement("label", { htmlFor: r3.name, className: (0, import_classnames2.default)("block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1") }, r3.label), l2, s3.errorMessage && ue2.createElement("div", { className: "text-xs text-red-500 font-bold" }, s3.errorMessage));
};
var zr = function(t3) {
  var n4, r3, a2 = t3.focusedBlock, o2 = t3.onChange, i2 = a2.block, l2 = a2.Brick, s3 = ((n4 = l2 == null ? void 0 : l2.schema) === null || n4 === void 0 ? void 0 : n4.label) || "General", d2 = v((0, import_react5.useState)([]), 2), u2 = d2[0], m2 = d2[1];
  if ((0, import_react5.useEffect)(function() {
    var t4, n5 = (((t4 = l2 == null ? void 0 : l2.schema) === null || t4 === void 0 ? void 0 : t4.sideEditProps) || []).reduce(function(t5, n6) {
      var r4;
      if (n6.groupName)
        return i2 && typeof n6.show == "function" && !n6.show(i2.props) ? t5 : y(y([], v(t5), false), [p(p({}, n6), { isOpen: !!n6.defaultOpen })], false);
      var a3 = { groupName: s3, props: [], defaultOpen: true }, o3 = t5;
      return t5 && t5[0] && t5[0].groupName === s3 && (a3 = (r4 = v(t5))[0], o3 = r4.slice(1)), a3.props = y(y([], v(a3.props), false), [n6], false), y([a3], v(o3), false);
    }, []);
    m2(n5);
  }, [(r3 = l2 == null ? void 0 : l2.schema) === null || r3 === void 0 ? void 0 : r3.sideEditProps, i2]), !l2 || !l2.schema.sideEditProps || !i2)
    return null;
  var p3 = function(e2) {
    return e2.map(function(e3) {
      return ue2.createElement(Br, { key: e3.name, prop: e3, allProps: i2.props, onChange: function(t4) {
        o2(e3.name, t4, e3.shouldRefreshText);
      }, blockId: i2.id });
    });
  };
  return ue2.createElement("div", { className: "knobs" }, u2.map(function(e2) {
    return ue2.createElement(xr, { key: e2.groupName, name: e2.groupName, defaultOpen: e2.defaultOpen }, p3(e2.props));
  }));
};
var Dr = function(t3) {
  var n4, r3 = t3.content, o2 = t3.pageType, i2 = t3.type, l2 = t3.addAfterBlockId, c2 = t3.handleChange, s3 = t3.handleAddBlock, d2 = t3.handleAddItem, u2 = t3.handleRemoveItem, m2 = t3.handleSortItem, p3 = t3.handlePreviewNewBlock, h3 = (0, import_react5.useContext)(A), b3 = h3.bricks, v3 = h3.pageTypes, x2 = (0, import_react5.useContext)(k), y3 = x2.focused, w2 = x2.setTriggerTextRefreshBlockId, k3 = v((0, import_react5.useState)(""), 2), E3 = k3[0], C2 = k3[1], N2 = (0, import_react5.useRef)(null), S2 = v((0, import_react5.useState)(function() {
    return { focusedBlock: null, FocusedBrick: null, focusedItem: null, focusedItemRepeaterItem: null, FocusedItemBrick: null, focusedItemTypeName: "", focusedBlockTypeName: "" };
  }), 2), I3 = S2[0], L2 = S2[1];
  (0, import_react5.useEffect)(function() {
    var e2, t4 = y3.blockId ? r3.find(function(e3) {
      return e3.id === y3.blockId;
    }) : null, n5 = t4 ? t4.type : "", a2 = b3[n5], o3 = null, i3 = "", l3 = null, c3 = null;
    y3.itemId && y3.repeaterPropName && t4 && (o3 = t4.props[y3.repeaterPropName].find(function(e3) {
      return e3.id === y3.itemId;
    })) && (i3 = o3.type, l3 = b3[i3], c3 = (e2 = a2.schema.repeaterItems) === null || e2 === void 0 ? void 0 : e2.find(function(e3) {
      return e3.name === y3.repeaterPropName;
    })), L2({ focusedBlock: t4, FocusedBrick: a2, focusedItem: o3, focusedItemRepeaterItem: c3, FocusedItemBrick: l3, focusedBlockTypeName: n5, focusedItemTypeName: i3 });
  }, [i2, y3, r3]);
  var B3, z2, D2 = function(e2) {
    return function() {
      N2.current = setTimeout(function() {
        return p3(e2);
      }, 700);
    };
  }, P2 = function() {
    p3(null), clearTimeout(N2.current);
  }, T = function(e2, t4, n5) {
    var r4 = c2(e2, t4, n5);
    return function(t5, n6, a2) {
      return a2 === void 0 && (a2 = false), a2 && setTimeout(function() {
        w2(e2);
      }, 400), r4(t5, n6);
    };
  };
  if (o2 !== "rb-playground") {
    var R2 = v3.find(function(e2) {
      return e2.name === o2;
    });
    if (!R2)
      return null;
    B3 = R2.allowedBlockTypes, z2 = R2.excludedBlockTypes;
  }
  var M2 = function(e2) {
    var t4, n5 = e2.brickToAdd;
    return ue2.createElement("button", { className: "block w-full bg-white border border-gray-500 text-sm text-gray-600 hover:text-pink-600 hover:bg-pink-100 hover:border-pink-400 hover:shadow-lg font-semibold py-1 px-4 rounded mb-2", onClick: (t4 = n5.name, function(e3) {
      clearTimeout(N2.current), s3(t4)(e3), C2("");
    }), onMouseOver: D2(n5.name), onMouseOut: P2 }, n5.label);
  };
  return ue2.createElement(ue2.Fragment, null, !!I3.FocusedBrick && I3.FocusedBrick.schema.repeaterItems && ue2.createElement(ue2.Fragment, null, i2 === b.Tab.Block && function(e2, t4) {
    var n5 = e2.filter(function(e3) {
      return !(I3.focusedBlock && e3.max && I3.focusedBlock.props[e3.name] && I3.focusedBlock.props[e3.name].length >= e3.max);
    }).map(function(e3) {
      var t5 = e3.itemLabel;
      return e3.itemLabel || (t5 = b3[e3.itemType].schema.label), ue2.createElement("button", { key: e3.itemType, className: "block w-full bg-white border border-gray-500 text-sm text-gray-600 hover:text-pink-600 hover:bg-pink-100 hover:border-pink-400 hover:shadow-lg font-semibold py-1 px-4 rounded mb-2", onClick: d2(y3.blockId, e3.name, e3.itemType) }, t5);
    });
    if (n5.length === 0)
      return null;
    var r4 = n5.length < 5;
    return t4 !== false && t4 !== true || (r4 = t4), ue2.createElement(xr, { name: "Add new...", defaultOpen: r4 }, n5);
  }(I3.FocusedBrick.schema.repeaterItems, I3.FocusedBrick.schema.newItemMenuOpen), i2 === b.Tab.Item && !!I3.FocusedBrick && I3.focusedItem && I3.focusedItemRepeaterItem && y3.itemId && ue2.createElement(ue2.Fragment, null, ue2.createElement("div", { className: "flex justify-between items-center p-3" }, ue2.createElement("button", { className: "flex items-center leading-none p-2 border border-transparent hover:border-gray-300 rounded text-sm text-blue-600 hover:text-blue-700 hover:bg-white transition-colors duration-150 focus:outline-none", onClick: m2(y3.blockId, y3.itemId, b.SortDirection.Up) }, "Move\xA0", ue2.createElement(FiArrowUp, null)), ue2.createElement("button", { className: "flex items-center leading-none p-2 border border-transparent hover:border-gray-300 rounded text-sm text-blue-600 hover:text-blue-700 hover:bg-white transition-colors duration-150 focus:outline-none", onClick: m2(y3.blockId, y3.itemId, b.SortDirection.Down) }, "Move\xA0", ue2.createElement(FiArrowDown, null)), ue2.createElement("button", { title: "Remove ".concat(I3.focusedItemRepeaterItem.itemLabel || ((n4 = I3.FocusedItemBrick) === null || n4 === void 0 ? void 0 : n4.schema.label)), className: "flex items-center leading-none p-2 border border-transparent hover:border-gray-300 rounded text-sm text-red-700 hover:text-red-800 hover:bg-white transition-colors duration-150 focus:outline-none", onClick: u2(y3.blockId, y3.itemId) }, "Remove")), ue2.createElement(zr, { focusedBlock: { block: I3.focusedItem, Brick: I3.FocusedItemBrick }, onChange: T(y3.itemId, y3.blockId, I3.focusedItemRepeaterItem.name) }))), i2 === b.Tab.Block && y3.blockId && ue2.createElement(ue2.Fragment, null, ue2.createElement(zr, { focusedBlock: { block: I3.focusedBlock, Brick: I3.FocusedBrick }, onChange: T(y3.blockId) })), !y3.blockId && !l2 && ue2.createElement("h2", { className: "text-sm font-bold uppercase tracking-wider text-gray-600 mb-6" }, "Select a block to edit"), l2 && ue2.createElement("div", { className: "p-3" }, ue2.createElement("div", { className: "relative mb-3" }, ue2.createElement(Fn, { value: E3, onChange: function(e2) {
    C2(e2.target.value);
  }, radiusSize: "full", className: "px-4 leading-none", placeholder: "Search block type...", autoFocus: true }), ue2.createElement(FiSearch, { className: "absolute text-gray-400", style: { top: 9, right: 11 } })), function(t4) {
    var n5 = function(e2) {
      return Object.keys(e2).map(function(t5) {
        return { name: t5, label: e2[t5].schema.label, hideFromAddMenu: e2[t5].schema.hideFromAddMenu, category: e2[t5].schema.category || "", tags: e2[t5].schema.tags || [] };
      }).filter(function(e3) {
        return !e3.hideFromAddMenu && xe(e3.name, B3, z2) && (e3.label.toLowerCase().indexOf(E3.toLowerCase()) > -1 || e3.category.toLowerCase().indexOf(E3.toLowerCase()) > -1 || e3.tags.join(" ").toLowerCase().indexOf(E3.toLowerCase()) > -1);
      });
    }(t4);
    if (n5.some(function(e2) {
      return e2.category;
    })) {
      var r4 = function(t5) {
        return t5.reduce(function(t6, n6) {
          return n6.category && t6.indexOf(n6.category) === -1 ? y(y([], v(t6), false), [n6.category], false) : t6;
        }, []);
      }(n5), a2 = n5.filter(function(e2) {
        return !e2.category;
      });
      return ue2.createElement(ue2.Fragment, null, r4.map(function(e2) {
        return ue2.createElement(xr, { key: e2, name: e2, defaultOpen: true }, n5.filter(function(t5) {
          return t5.category === e2;
        }).map(function(e3) {
          return ue2.createElement(M2, { key: e3.name, brickToAdd: e3 });
        }));
      }), a2.length > 0 && ue2.createElement(xr, { name: "Other", defaultOpen: true }, a2.map(function(e2) {
        return ue2.createElement(M2, { key: e2.name, brickToAdd: e2 });
      })));
    }
    return n5.map(function(e2) {
      return ue2.createElement(M2, { key: e2.name, brickToAdd: e2 });
    });
  }(b3)));
};
var Pr = function(e2) {
  var t3 = localStorage.getItem(ve), n4 = Ee("t");
  return useQuery("session", function() {
    return f(void 0, void 0, void 0, function() {
      return g(this, function(t4) {
        switch (t4.label) {
          case 0:
            return [4, import_axios.default.get("/admin/session", { headers: { appid: e2 } })];
          case 1:
            return [2, t4.sent().data.user];
        }
      });
    });
  }, { enabled: !(!n4 && !t3 || !e2) });
};
var Tr = function(e2) {
  var t3, n4 = e2.title, r3 = e2.message, a2 = e2.buttons, o2 = e2.isOpen, i2 = e2.setIsOpen, l2 = document.getElementById("rb-admin-frame"), c2 = (t3 = l2 == null ? void 0 : l2.contentWindow) === null || t3 === void 0 ? void 0 : t3.document.body;
  return import_react5.default.createElement(import_react_modal.default, { isOpen: o2, onRequestClose: function() {
    return i2(false);
  }, style: Mn, parentSelector: function() {
    return c2;
  } }, import_react5.default.createElement("style", null, "\n.btn {\n  margin-right: 16px;\n  padding: 4px 20px; \n  border-radius: 4px;\n  font-size: 16px;\n  font-weight: 500;\n  background-color: #fff;\n  line-height: 1.5;\n  cursor: pointer;\n}\n.btn:last-child {\n  margin-right: 0;\n}\n.danger {\n  border: 1px solid #f56565;\n  color: #e53e3e;\n}\n.danger:hover {\n  background-color: #f56565;\n  color: #fff\n}\n.confirm {\n  border: 1px solid #3182ce;\n  color: #4299e1;\n}\n.confirm:hover {\n  background-color: #3182ce;\n  color: #fff\n}\n.cancel {\n  border: 1px solid #edf2f7;\n  background-color: #edf2f7;\n  color: #718096;\n}\n.cancel:hover {\n  background-color: #e2e8f0;\n  color: #4a5568;\n}\n      "), import_react5.default.createElement("div", { style: { boxSizing: "border-box", fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif', fontSize: 16, lineHeight: 1.5, maxWidth: 448, padding: 32 } }, import_react5.default.createElement("h2", { style: { fontSize: 20, fontWeight: "bold", marginTop: 0, marginBottom: 8 } }, n4), import_react5.default.createElement("p", { style: { color: "#4a5568", marginBottom: 20 } }, r3), import_react5.default.createElement("div", { style: { display: "flex" } }, a2.map(function(e3) {
    return import_react5.default.createElement("button", { key: e3.label, type: "button", className: "btn ".concat(e3.type), onClick: (t4 = e3.onClick, function() {
      t4(), i2(false);
    }) }, e3.label);
    var t4;
  }))));
};
var Rr = ["aa", "ab", "ae", "af", "ak", "am", "an", "ar", "as", "av", "ay", "az", "ba", "be", "bg", "bh", "bi", "bm", "bn", "bo", "br", "bs", "ca", "ce", "ch", "co", "cr", "cs", "cu", "cv", "cy", "da", "de", "dv", "dz", "ee", "el", "en", "eo", "es", "et", "eu", "fa", "ff", "fi", "fj", "fo", "fr", "fy", "ga", "gd", "gl", "gn", "gu", "gv", "ha", "he", "hi", "ho", "hr", "ht", "hu", "hy", "hz", "ia", "id", "ie", "ig", "ii", "ik", "io", "is", "it", "iu", "ja", "jv", "ka", "kg", "ki", "kj", "kk", "kl", "km", "kn", "ko", "kr", "ks", "ku", "kv", "kw", "ky", "la", "lb", "lg", "li", "ln", "lo", "lt", "lu", "lv", "mg", "mh", "mi", "mk", "ml", "mn", "mr", "ms", "mt", "my", "na", "nb", "nd", "ne", "ng", "nl", "nn", "no", "nr", "nv", "ny", "oc", "oj", "om", "or", "os", "pa", "pi", "pl", "ps", "pt", "qu", "rm", "rn", "ro", "ru", "rw", "sa", "sc", "sd", "se", "sg", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sv", "sw", "ta", "te", "tg", "th", "ti", "tk", "tl", "tn", "to", "tr", "ts", "tt", "tw", "ty", "ug", "uk", "ur", "uz", "ve", "vi", "vo", "wa", "wo", "xh", "yi", "yo", "za", "zh", "zu"];
var Mr = function(t3) {
  var n4 = t3.url, r3 = t3.onChange, a2 = v((0, import_react5.useState)(false), 2), o2 = a2[0], i2 = a2[1], l2 = v((0, import_react5.useState)(""), 2), s3 = l2[0], d2 = l2[1], u2 = Tn(), m2 = useDropzone({ accept: "image/*", maxSize: 3145728, onDropAccepted: function(e2) {
    return f(void 0, void 0, void 0, function() {
      var t4, n5;
      return g(this, function(a3) {
        switch (a3.label) {
          case 0:
            return d2(""), (t4 = new FormData()).append("file", e2[0]), i2(true), [4, u2.mutateAsync(t4)];
          case 1:
            return n5 = a3.sent(), r3(n5.src), i2(false), [2];
        }
      });
    });
  }, onDropRejected: function(e2) {
    var t4 = e2[0].file.size <= 1048576 ? "".concat((e2[0].file.size / 1024).toFixed(0), " KB") : "".concat((e2[0].file.size / 1048576).toFixed(1), " MB");
    d2("Image exceeds max file size of 3 MB (".concat(t4, ")"));
  } }), p3 = m2.getRootProps, g3 = m2.getInputProps;
  return ue2.createElement("div", { className: "mt-2 flex flex-col items-center" }, ue2.createElement("div", { className: "relative w-40 h-40 flex justify-center items-center cursor-pointer overflow-hidden" }, n4 ? ue2.createElement("img", { className: "w-full", src: n4, alt: "Featured Image" }) : ue2.createElement(Kn, { className: "w-full" }), ue2.createElement("div", p({ className: "absolute top-0 left-0 z-10 opacity-0 w-full h-full flex justify-center items-center transition-opacity duration-300 hover:opacity-100 bg-pink-200 bg-opacity-75" }, p3()), ue2.createElement("div", { className: "p-4 rounded-full cursor-pointer border border-gray-200 shadow-md focus:outline-none", style: { backgroundColor: "rgba(255, 255, 255, 0.8)" } }, ue2.createElement("svg", { style: { width: 40, fill: "#d9367f" }, viewBox: "0 0 312.602 312.602" }, ue2.createElement("path", { d: "M251.52,137.244c-3.966,0-7.889,0.38-11.738,1.134c-1.756-47.268-40.758-85.181-88.448-85.181c-43.856,0-80.964,32.449-87.474,75.106C28.501,129.167,0,158.201,0,193.764c0,36.106,29.374,65.48,65.48,65.48h54.782c4.143,0,7.5-3.357,7.5-7.5c0-4.143-3.357-7.5-7.5-7.5H65.48c-27.835,0-50.48-22.645-50.48-50.48c0-27.835,22.646-50.48,50.48-50.48c1.367,0,2.813,0.067,4.419,0.206l7.6,0.658l0.529-7.61c2.661-38.322,34.861-68.341,73.306-68.341c40.533,0,73.51,32.977,73.51,73.51c0,1.863-0.089,3.855-0.272,6.088l-0.983,11.968l11.186-4.367c5.356-2.091,10.99-3.151,16.747-3.151c25.409,0,46.081,20.672,46.081,46.081c0,25.408-20.672,46.08-46.081,46.08c-0.668,0-20.608-0.04-40.467-0.08c-19.714-0.04-39.347-0.08-39.999-0.08c-4.668,0-7.108-2.248-7.254-6.681v-80.959l8.139,9.667c2.667,3.17,7.399,3.576,10.567,0.907c3.169-2.667,3.575-7.398,0.907-10.567l-18.037-21.427c-2.272-2.699-5.537-4.247-8.958-4.247c-3.421,0-6.686,1.548-8.957,4.247l-18.037,21.427c-2.668,3.169-2.262,7.9,0.907,10.567c1.407,1.185,3.121,1.763,4.826,1.763c2.137,0,4.258-0.908,5.741-2.67l7.901-9.386v80.751c0,8.686,5.927,21.607,22.254,21.607c0.652,0,20.27,0.04,39.968,0.079c19.874,0.041,39.829,0.081,40.498,0.081c33.681,0,61.081-27.4,61.081-61.08C312.602,164.644,285.201,137.244,251.52,137.244z" })), ue2.createElement("input", p({}, g3())))), o2 && ue2.createElement("div", { className: "absolute top-0 left-0 w-full h-full bg-white opacity-75 z-50 flex justify-center items-center" }, ue2.createElement("div", { className: "loading w-24 text-pink-500" }, ue2.createElement(Pn, null)))), !!s3 && ue2.createElement("div", { className: "text-sm bg-pink-100 border-red-400 px-2 py-1 mt-6 text-red-600" }, s3), ue2.createElement("button", { className: "mt-6 text-sm text-red-700 hover:text-red-800 hover:underline transition-colors duration-150 focus:outline-none", onClick: function() {
    r3("");
  } }, "Remove featured image"));
};
var Fr = function(t3) {
  var n4 = t3.pageId, r3 = t3.pageCustomFields, a2 = t3.customValues, o2 = t3.onChange, i2 = "Custom Fields", l2 = v((0, import_react5.useState)([]), 2), s3 = l2[0], d2 = l2[1];
  if ((0, import_react5.useEffect)(function() {
    var t4 = (r3 || []).reduce(function(t5, n5) {
      var r4;
      if (n5.groupName)
        return a2 && typeof n5.show == "function" && !n5.show(a2) ? t5 : y(y([], v(t5), false), [p(p({}, n5), { isOpen: !!n5.defaultOpen })], false);
      var o3 = { groupName: i2, props: [], defaultOpen: true }, l3 = t5;
      return t5 && t5[0] && t5[0].groupName === i2 && (o3 = (r4 = v(t5))[0], l3 = r4.slice(1)), o3.props = y(y([], v(o3.props), false), [n5], false), y([o3], v(l3), false);
    }, []);
    d2(t4);
  }, [r3, a2]), !r3)
    return null;
  var u2 = function(e2) {
    return e2.map(function(e3) {
      return ue2.createElement(Br, { key: e3.name, prop: e3, allProps: a2 || {}, onChange: function(t4) {
        var n5;
        o2(((n5 = {})[e3.name] = t4, n5));
      }, blockId: n4 });
    });
  };
  return ue2.createElement("div", { className: "knobs" }, s3.map(function(e2) {
    return ue2.createElement(xr, { key: e2.groupName, name: e2.groupName, defaultOpen: e2.defaultOpen }, u2(e2.props));
  }));
};
var Or = [{ value: "00:00:00.000", label: "0:00" }, { value: "01:00:00.000", label: "1:00" }, { value: "02:00:00.000", label: "2:00" }, { value: "03:00:00.000", label: "3:00" }, { value: "04:00:00.000", label: "4:00" }, { value: "05:00:00.000", label: "5:00" }, { value: "06:00:00.000", label: "6:00" }, { value: "07:00:00.000", label: "7:00" }, { value: "08:00:00.000", label: "8:00" }, { value: "09:00:00.000", label: "9:00" }, { value: "10:00:00.000", label: "10:00" }, { value: "11:00:00.000", label: "11:00" }, { value: "12:00:00.000", label: "12:00" }, { value: "13:00:00.000", label: "13:00" }, { value: "14:00:00.000", label: "14:00" }, { value: "15:00:00.000", label: "15:00" }, { value: "16:00:00.000", label: "16:00" }, { value: "17:00:00.000", label: "17:00" }, { value: "18:00:00.000", label: "18:00" }, { value: "19:00:00.000", label: "19:00" }, { value: "20:00:00.000", label: "20:00" }, { value: "21:00:00.000", label: "21:00" }, { value: "22:00:00.000", label: "22:00" }, { value: "23:00:00.000", label: "23:00" }];
var Yr = require_ReactTags_umd();
var Wr = function(e2) {
  return !!e2 && (e2.toLowerCase() === "pro" || e2.toLowerCase() === "enterprise");
};
var Vr = function(t3) {
  var n4, r3, a2 = t3.page, o2 = t3.handleChangePageValue, i2 = (0, import_react5.useContext)(qt).setCurrentPage, l2 = (0, import_react5.useContext)(A), s3 = l2.pageTypes, d2 = l2.customFields, u2 = l2.appId, m2 = d2 || [], p3 = s3.find(function(e2) {
    return e2.name === a2.type;
  }), h3 = (p3 == null ? void 0 : p3.customFields) || [], v3 = y(y([], v(m2), false), v(h3), false), x2 = (n4 = localStorage.getItem(ve), r3 = Ee("t"), useQuery(["authors"], function() {
    return f(void 0, void 0, void 0, function() {
      return g(this, function(e2) {
        switch (e2.label) {
          case 0:
            return [4, import_axios.default.get("/admin/authors")];
          case 1:
            return [2, e2.sent().data];
        }
      });
    });
  }, { enabled: !!r3 || !!n4, staleTime: 3e5 })).data, y3 = function() {
    var e2 = localStorage.getItem(ve), t4 = Ee("t");
    return useQuery(["tags"], function() {
      return f(void 0, void 0, void 0, function() {
        return g(this, function(e3) {
          switch (e3.label) {
            case 0:
              return [4, import_axios.default.get("/admin/tags?pageSize=100")];
            case 1:
              return [2, e3.sent().data];
          }
        });
      });
    }, { enabled: !!e2 || !!t4, staleTime: 3e5 });
  }().data, w2 = Pr(u2).data, k3 = function() {
    var e2 = useQueryClient();
    return useMutation(function(e3) {
      return f(void 0, void 0, void 0, function() {
        return g(this, function(t4) {
          switch (t4.label) {
            case 0:
              return [4, import_axios.default.post("/admin/pages/".concat(e3, "/duplicate")).then(function(e4) {
                return e4.data;
              })];
            case 1:
              return [2, t4.sent()];
          }
        });
      });
    }, { onSuccess: function() {
      e2.invalidateQueries("pages"), index_es_default.success("Page duplicated", { position: "bottom-right" });
    }, onError: tr({ topic: "page", getLimitExceededError: function(e3, t4) {
      return "The ".concat(e3, " plan has a limit of ").concat(t4, " pages.");
    }, genericError: "An error occurred while duplicating this page" }) });
  }(), C2 = function() {
    var e2 = useQueryClient();
    return useMutation(function(e3) {
      return f(void 0, void 0, void 0, function() {
        return g(this, function(t4) {
          switch (t4.label) {
            case 0:
              return [4, import_axios.default.delete("/admin/pages/".concat(e3)).then(function(e4) {
                return e4.data;
              })];
            case 1:
              return [2, t4.sent()];
          }
        });
      });
    }, { onSuccess: function() {
      e2.invalidateQueries("pages"), index_es_default.success("Page deleted", { position: "bottom-right" });
    }, onError: function() {
      index_es_default.error("An error occurred while deleting the page");
    } });
  }(), N2 = function(e2) {
    var t4 = e2.pageId, n5 = e2.language;
    return useMutation(function() {
      return f(void 0, void 0, void 0, function() {
        return g(this, function(e3) {
          switch (e3.label) {
            case 0:
              return [4, import_axios.default.delete("/admin/pages/".concat(t4, "/translations/").concat(n5)).then(function(e4) {
                return e4.data;
              })];
            case 1:
              return [2, e3.sent()];
          }
        });
      });
    }, { onSuccess: function() {
      index_es_default.success("Translation deleted", { position: "bottom-right" });
    }, onError: function() {
      index_es_default.error("An error occurred while deleting the translation");
    } });
  }({ pageId: a2.id, language: a2.language }), S2 = v((0, import_react5.useState)(false), 2), I3 = S2[0], L2 = S2[1], B3 = v((0, import_react5.useState)(false), 2), z2 = B3[0], D2 = B3[1], P2 = v((0, import_react5.useState)(""), 2), T = P2[0], R2 = P2[1], M2 = v((0, import_react5.useState)(""), 2), F2 = M2[0], O2 = M2[1];
  (0, import_react5.useEffect)(function() {
    T && F2 && o2({ scheduledForPublishingOn: "".concat(T, "T").concat(F2, "Z") });
  }, [T, F2]), (0, import_react5.useEffect)(function() {
    if (a2.scheduledForPublishingOn) {
      var e2 = a2.scheduledForPublishingOn.slice(0, -1).split("T");
      e2.length === 2 && (R2(e2[0]), O2(e2[1]));
    }
  }, [a2]);
  var Y3 = function(e2) {
    o2({ meta: p(p({}, a2.meta), e2) });
  };
  return ue2.createElement(ue2.Fragment, null, ue2.createElement(xr, { name: "Status and Visibility", defaultOpen: true }, ue2.createElement("div", { className: "mb-3" }, ue2.createElement("label", { htmlFor: "status", className: "block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1" }, "Visibility"), ue2.createElement(Er, { id: "status", value: a2.status, onChange: function(e2) {
    return o2({ status: e2.target.value });
  } }, ue2.createElement("option", { value: b.PageStatus.Published }, "Published"), ue2.createElement("option", { value: b.PageStatus.Draft }, "Draft"))), ue2.createElement("div", { className: "mb-3" }, ue2.createElement("label", { htmlFor: "scheduledDate", className: "block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1" }, "Schedule publish (GMT+0)", ue2.createElement("span", { className: "ml-1 text-xs bg-blue-200 text-blue-800 py-px px-1 rounded uppercase" }, "PRO")), ue2.createElement("div", { className: "flex" }, ue2.createElement(Fn, { type: "date", className: "mr-2", id: "scheduledDate", value: T, onChange: function(e2) {
    return R2(e2.target.value);
  }, disabled: !Wr(w2 == null ? void 0 : w2.plan) }), ue2.createElement(Er, { id: "scheduledTime", value: F2, onChange: function(e2) {
    return O2(e2.target.value);
  }, style: { width: 90 }, disabled: !Wr(w2 == null ? void 0 : w2.plan) }, Or.map(function(e2) {
    return ue2.createElement("option", { key: e2.value, value: e2.value }, e2.label);
  })))), ue2.createElement("div", { className: "mb-3" }, ue2.createElement("label", { htmlFor: "isLocked", className: "block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1" }, "Page structure locked?"), ue2.createElement(Er, { id: "isLocked", value: a2.isLocked ? 1 : 0, onChange: function(e2) {
    return o2({ isLocked: e2.target.value !== "0" });
  } }, ue2.createElement("option", { value: 0 }, "Unlocked"), ue2.createElement("option", { value: 1 }, "Locked"))), ue2.createElement("div", { className: "mb-3" }, ue2.createElement("div", { className: "py-2" }, ue2.createElement(tippy_react_esm_default, { content: "Create a new page with the same content" }, ue2.createElement("button", { className: "text-sm text-blue-600 hover:text-blue-700 hover:underline transition-colors duration-150 focus:outline-none", onClick: function() {
    k3.mutate(a2.id);
  } }, "Duplicate Page"))), ue2.createElement("div", { className: "py-2" }, ue2.createElement(tippy_react_esm_default, { content: "Delete the Page" }, ue2.createElement("button", { className: "block text-sm text-red-700 hover:text-red-800 hover:underline transition-colors duration-150 focus:outline-none", onClick: function() {
    L2(true);
  } }, "Delete Page")), w2 && w2.languages.length > 1 && a2.translations.length >= 2 && ue2.createElement(tippy_react_esm_default, { content: "Delete this Translation" }, ue2.createElement("button", { className: "text-sm text-red-700 hover:text-red-800 hover:underline transition-colors duration-150 focus:outline-none", onClick: function() {
    D2(true);
  } }, "Delete Translation"))))), ue2.createElement(Tr, { title: 'Confirm to delete "'.concat(a2.name, '"?'), message: ue2.createElement("span", null, "Are you sure you want to delete this page", " ", ue2.createElement("b", { className: "text-gray-900" }, "and all its content in all languages"), "?"), buttons: [{ label: "Yes, delete the page", onClick: function() {
    return f(void 0, void 0, void 0, function() {
      return g(this, function(e2) {
        switch (e2.label) {
          case 0:
            return [4, C2.mutateAsync(a2.id)];
          case 1:
            return e2.sent(), i2({ pageId: "" }), localStorage && (localStorage.removeItem("rb_p"), localStorage.removeItem("rb_l")), [2];
        }
      });
    });
  }, type: "danger" }, { label: "Cancel", onClick: function() {
  }, type: "cancel" }], isOpen: I3, setIsOpen: L2 }), ue2.createElement(Tr, { title: "Confirm delete", message: "Are you sure you want to delete this translation?", buttons: [{ label: "Yes, delete", onClick: function() {
    return f(void 0, void 0, void 0, function() {
      var t4, n5, r4;
      return g(this, function(o3) {
        switch (o3.label) {
          case 0:
            return t4 = y([], v(a2.translations), false), n5 = t4.filter(function(e2) {
              return e2.language !== a2.language;
            }), r4 = n5.some(function(e2) {
              return e2.language === (w2 == null ? void 0 : w2.defaultLanguage);
            }) ? w2 == null ? void 0 : w2.defaultLanguage : n5[0].language, [4, N2.mutateAsync()];
          case 1:
            return o3.sent(), i2({ pageId: a2.id, language: r4 }), [2];
        }
      });
    });
  }, type: "danger" }, { label: "Cancel", onClick: function() {
  }, type: "cancel" }], isOpen: z2, setIsOpen: D2 }), ue2.createElement(xr, { name: "Page attributes" }, ue2.createElement("div", { className: "mb-3" }, ue2.createElement("label", { htmlFor: "slug", className: "block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1" }, "Slug"), ue2.createElement(Fn, { id: "slug", value: a2.slug || "", onChange: function(e2) {
    var t4 = e2.target.value;
    /^[A-Za-z0-9\-_]*$/.test(t4) && o2({ slug: t4 });
  } })), ue2.createElement("div", { className: "mb-3" }, ue2.createElement("label", { htmlFor: "name", className: "block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1" }, "Name"), ue2.createElement(Fn, { id: "name", value: a2.name || "", onChange: function(e2) {
    return o2({ name: e2.target.value });
  } })), ue2.createElement("div", { className: "mb-3" }, ue2.createElement("label", { htmlFor: "authorId", className: "block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1" }, "Author"), ue2.createElement(Er, { id: "authorId", value: a2.authorId, onChange: function(e2) {
    return o2({ authorId: e2.target.value });
  } }, x2 && x2.map(function(e2) {
    return ue2.createElement("option", { key: e2.id, value: e2.id }, e2.firstName, " ", e2.lastName);
  }))), ue2.createElement("div", { className: "mb-3" }, ue2.createElement("label", { htmlFor: "publishedAt", className: "block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1" }, "Publish Date"), ue2.createElement(Fn, { type: "date", id: "publishedAt", value: a2.publishedAt ? a2.publishedAt.substr(0, 10) : "", onChange: function(e2) {
    return o2({ publishedAt: e2.target.value });
  } })), ue2.createElement("div", { className: "mb-3" }, ue2.createElement("label", { htmlFor: "pageType", className: "block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1" }, "Page Type"), ue2.createElement(Er, { id: "pageType", value: a2.type, onChange: function(e2) {
    return o2({ type: e2.target.value });
  } }, s3.map(function(e2) {
    return ue2.createElement("option", { key: e2.name, value: e2.name }, e2.name);
  })))), ue2.createElement(xr, { name: "Tags" }, ue2.createElement(Yr, { tags: a2.tags.map(function(e2) {
    return { id: e2, name: e2 };
  }), allowNew: true, onAddition: function(t4) {
    if (a2.tags.indexOf(t4.name) === -1) {
      var n5 = y(y([], v(a2.tags), false), [t4.name.trim()], false);
      o2({ tags: n5 });
    }
  }, onDelete: function(e2) {
    var t4 = a2.tags.filter(function(t5, n5) {
      return n5 !== e2;
    });
    o2({ tags: t4 });
  }, onValidate: function(e2) {
    return a2.tags.every(function(t4) {
      return t4 !== e2.id;
    });
  }, suggestions: y3 == null ? void 0 : y3.map(function(e2) {
    return { id: e2, name: e2 };
  }), minQueryLength: 1 })), ue2.createElement(xr, { name: "Featured Image" }, ue2.createElement(Mr, { url: a2.meta.featuredImage, onChange: function(e2) {
    Y3({ featuredImage: e2 });
  } })), ue2.createElement(xr, { name: "SEO Meta Tags" }, ue2.createElement("div", { className: "mb-3" }, ue2.createElement("label", { htmlFor: "meta_title", className: "block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1" }, "Title"), ue2.createElement(Fn, { id: "meta_title", value: a2.meta.title || "", onChange: function(e2) {
    return Y3({ title: e2.target.value });
  } })), ue2.createElement("div", { className: "mb-3" }, ue2.createElement("label", { htmlFor: "meta_description", className: "block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1" }, "Description"), ue2.createElement(Nr, { id: "meta_description", value: a2.meta.description || "", rows: 3, onChange: function(e2) {
    return Y3({ description: e2.target.value });
  } })), ue2.createElement("div", { className: "mb-3" }, ue2.createElement("label", { htmlFor: "language", className: "block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1" }, "Language"), ue2.createElement(Er, { id: "language", value: a2.meta.language || "en", onChange: function(e2) {
    return Y3({ language: e2.target.value });
  } }, Rr.map(function(e2) {
    return ue2.createElement("option", { key: e2, value: e2 }, e2);
  })))), ue2.createElement("div", { className: "border-t border-b border-gray-300" }), ue2.createElement(Fr, { pageId: a2.id, pageCustomFields: v3, customValues: a2.customValues, onChange: function(e2) {
    o2({ customValues: p(p({}, a2.customValues), e2) });
  } }));
};
var jr = function(t3) {
  var n4, r3 = t3.isOpen, a2 = t3.setIsOpen, o2 = t3.focusedBlock, i2 = v((0, import_react5.useState)(""), 2), l2 = i2[0], c2 = i2[1], s3 = function(e2) {
    var t4 = useQueryClient();
    return useMutation(function(t5) {
      var n5 = t5.name, r4 = t5.props;
      return t5.imageBlob, f(void 0, void 0, void 0, function() {
        var t6;
        return g(this, function(a3) {
          switch (a3.label) {
            case 0:
              return (t6 = new FormData()).append("name", n5), t6.append("props", JSON.stringify(r4)), [4, import_axios.default.post("/admin/blocks/".concat(e2, "/stories"), t6, { headers: { "Content-Type": "multipart/form-data" } }).then(function(e3) {
                return e3.data;
              })];
            case 1:
              return [2, a3.sent()];
          }
        });
      });
    }, { onSuccess: function() {
      t4.invalidateQueries(["storiesByBlock", { blockType: e2 }]), index_es_default.success("New story created", { position: "bottom-right" });
    }, onError: tr({ topic: "story", getLimitExceededError: function(e3, t5) {
      return "The ".concat(e3, " plan has a limit of ").concat(t5, " stories.");
    }, genericError: "An error occurred while adding the new story" }) });
  }(o2 == null ? void 0 : o2.type), d2 = document.getElementById("rb-admin-frame"), u2 = (n4 = d2 == null ? void 0 : d2.contentWindow) === null || n4 === void 0 ? void 0 : n4.document.body;
  return import_react5.default.createElement(import_react_modal.default, { isOpen: r3, onRequestClose: function() {
    return a2(false);
  }, style: Mn, parentSelector: function() {
    return u2;
  } }, import_react5.default.createElement("div", { style: { boxSizing: "border-box", fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif', fontSize: 16, lineHeight: 1.5, maxWidth: 448, padding: 32 } }, import_react5.default.createElement("h2", { style: { fontSize: 20, fontWeight: "bold", marginTop: 0, marginBottom: 8 } }, "Give your story a name"), import_react5.default.createElement("form", { onSubmit: function() {
    s3.mutate({ name: l2, props: (o2 == null ? void 0 : o2.props) || {} }), a2(false);
  } }, import_react5.default.createElement(Fn, { id: "name", value: l2, onChange: function(e2) {
    return c2(e2.target.value);
  }, name: "name", placeholder: "Write a name" }), import_react5.default.createElement("div", { className: "mb-3" }), import_react5.default.createElement("button", { type: "submit", className: "block px-5 py-1 bg-blue-500 hover:bg-blue-600 leading-6 text-white rounded disabled:opacity-75 disabled:cursor-not-allowed", disabled: !l2 }, "Save story"))));
};
var Xr = function(t3) {
  var n4 = t3.content, r3 = t3.handleSetStory, o2 = (0, import_react5.useContext)(k).focused, i2 = (0, import_react5.useContext)(A).appId, l2 = v((0, import_react5.useState)(""), 2), c2 = l2[0], s3 = l2[1], d2 = v((0, import_react5.useState)(), 2), u2 = d2[0], m2 = d2[1], p3 = v((0, import_react5.useState)(null), 2), f3 = p3[0], h3 = p3[1], v3 = v((0, import_react5.useState)(null), 2), x2 = v3[0], y3 = v3[1], w2 = v((0, import_react5.useState)(false), 2), k3 = w2[0], C2 = w2[1], A3 = (0, import_react5.useRef)(null);
  (0, import_react5.useEffect)(function() {
    var e2 = o2.blockId && n4.find(function(e3) {
      return e3.id === o2.blockId;
    }) || null;
    h3(e2);
  }, [n4, o2]);
  var N2, S2, I3, L2 = (N2 = (f3 == null ? void 0 : f3.type) || "", S2 = localStorage.getItem(ve), I3 = Ee("t"), useQuery(["storiesByBlock", { blockType: N2 }], function() {
    return f(void 0, void 0, void 0, function() {
      return g(this, function(e2) {
        switch (e2.label) {
          case 0:
            return [4, import_axios.default.get("/admin/blocks/".concat(N2, "/stories"))];
          case 1:
            return [2, e2.sent().data];
        }
      });
    });
  }, { enabled: !(!N2 || !S2 && !I3), staleTime: 12e4 })).data, B3 = Pr(i2).data, z2 = function(e2) {
    var t4 = useQueryClient();
    return useMutation(function(t5) {
      return f(void 0, void 0, void 0, function() {
        return g(this, function(n5) {
          switch (n5.label) {
            case 0:
              return [4, import_axios.default.delete("/admin/blocks/".concat(e2, "/stories/").concat(t5)).then(function(e3) {
                return e3.data;
              })];
            case 1:
              return [2, n5.sent()];
          }
        });
      });
    }, { onSuccess: function() {
      index_es_default.success("Story deleted", { position: "bottom-right" }), t4.invalidateQueries(["storiesByBlock", { blockType: e2 }]);
    }, onError: function() {
      index_es_default.error("An error occurred while deleting the story");
    } });
  }(f3 == null ? void 0 : f3.type), D2 = function(e2) {
    return function(t4) {
      t4.preventDefault(), clearTimeout(A3.current), r3(o2.blockId, e2.props), m2(e2.props), y3(e2.id), setTimeout(function() {
        return y3(null);
      }, 1e3);
    };
  }, P2 = function(e2) {
    return function() {
      m2(f3 == null ? void 0 : f3.props), A3.current = setTimeout(function() {
        r3(o2.blockId, e2.props);
      }, 400);
    };
  }, T = function() {
    r3(o2.blockId, u2), clearTimeout(A3.current);
  };
  return (B3 == null ? void 0 : B3.plan.toLowerCase()) === "pro" || (B3 == null ? void 0 : B3.plan.toLowerCase()) === "enterprise" ? ue2.createElement("div", { className: "p-3" }, ue2.createElement("button", { className: "px-6 py-2 w-full bg-blue-500 hover:bg-blue-600 hover:shadow-lg text-sm leading-none text-white font-semibold rounded disabled:opacity-75 disabled:cursor-not-allowed mb-3", onClick: function() {
    return C2(true);
  } }, "Save story as..."), !(L2 && L2.length > 0) && ue2.createElement("div", null, "No stories available yet for this block type."), L2 && L2.length > 0 && ue2.createElement("div", { className: "relative mb-3" }, ue2.createElement(Fn, { value: c2, onChange: function(e2) {
    s3(e2.target.value);
  }, radiusSize: "full", className: "px-4 leading-none", placeholder: "Search stories..." }), ue2.createElement(FiSearch, { className: "absolute text-gray-400", style: { top: 9, right: 11 } })), L2 && L2.length > 0 && L2.filter(function(e2) {
    return e2.name.toLowerCase().indexOf(c2.toLowerCase()) > -1;
  }).map(function(e2) {
    return ue2.createElement("div", { key: e2.id, className: "flex items-center justify-between space-x-3 mb-2" }, ue2.createElement("button", { className: (0, import_classnames2.default)("block w-full border border-gray-500 text-sm text-gray-600 hover:shadow-lg font-semibold py-1 px-4 rounded", e2.id === x2 ? "bg-green-200 transition-colors duration-200" : "duration-1000 bg-white hover:text-pink-600 hover:bg-pink-100 hover:border-pink-400"), onClick: D2(e2), onMouseOver: P2(e2), onMouseOut: T }, e2.name), ue2.createElement("button", { className: "text-sm text-red-700 hover:text-red-800 transition-colors duration-150 focus:outline-none", onClick: function() {
      return z2.mutate(e2.name);
    } }, ue2.createElement(FiTrash2, null)));
  }), ue2.createElement(jr, { isOpen: k3, setIsOpen: C2, focusedBlock: f3 })) : ue2.createElement("div", { className: "p-3" }, "This feature is allowed only for Pro or Enterprise plans.");
};
var Ur = function(t3) {
  var n4 = t3.page, r3 = t3.content, o2 = t3.addAfterBlockId, i2 = t3.handleChange, l2 = t3.handleSetStory, s3 = t3.handleAddBlock, d2 = t3.handleAddItem, u2 = t3.handleRemoveItem, m2 = t3.handleSortItem, p3 = t3.handlePreviewNewBlock, h3 = t3.handleChangePageValue, b3 = t3.playgroundSelectedItem, v3 = t3.sidebarOpen, x2 = (0, import_react5.useContext)(A).bricks, y3 = (0, import_react5.useContext)(k).focused, w2 = (0, import_react5.useContext)(qt).previewMode, k3 = v((0, import_react5.useState)({ selectedTab: b.Tab.Document, block: "" }), 2), E3 = k3[0], C2 = k3[1];
  (0, import_react5.useEffect)(function() {
    var e2, t4 = y3.blockId ? r3.find(function(e3) {
      return e3.id === y3.blockId;
    }) : null, n5 = t4 ? t4.type : "", a2 = x2[n5], o3 = null, i3 = "", l3 = null, c2 = null;
    a2 && y3.itemId && y3.repeaterPropName && t4 && (o3 = t4.props[y3.repeaterPropName].find(function(e3) {
      return e3.id === y3.itemId;
    })) && (i3 = o3.type, l3 = x2[i3], c2 = (e2 = a2.schema.repeaterItems) === null || e2 === void 0 ? void 0 : e2.find(function(e3) {
      return e3.name === y3.repeaterPropName;
    }));
    var s4 = o3 ? b.Tab.Item : t4 || y3.blockId === "ADD_BLOCK" ? b.Tab.Block : (b3 == null ? void 0 : b3.type) === b.PlaygroundSelectedItemType.Page ? b.Tab.PageSettings : b.Tab.Document;
    C2({ selectedTab: s4, block: (a2 == null ? void 0 : a2.schema.label) || "", item: (c2 == null ? void 0 : c2.itemLabel) || (l3 == null ? void 0 : l3.schema.label) || "" });
  }, [n4.id, y3]);
  var A3 = function(e2, t4, n5) {
    return n5 === void 0 && (n5 = false), t4 && ue2.createElement("button", { className: "flex-1 py-3 text-center leading-none text-sm border-b-4 focus:outline-none hover:text-gray-800 ".concat(E3.selectedTab === e2 || n5 ? "border-pink-500 text-gray-900 font-semibold" : "border-transparent text-gray-600"), style: { marginBottom: "-1px" }, onClick: function() {
      return function(e3) {
        C2(p(p({}, E3), { selectedTab: e3 }));
      }(e2);
    } }, t4);
  };
  return ue2.createElement("aside", { style: { transition: "width 300ms", width: w2 || !v3 ? 0 : 275 } }, !w2 && ue2.createElement("div", { className: "fixed top-0 h-full overflow-y-auto", style: { paddingTop: 85, width: 275 } }, n4.invalidBlocksTypes && n4.invalidBlocksTypes.length > 0 && ue2.createElement("div", { className: "p-3" }, ue2.createElement("div", { className: "border border-pink-400 bg-pink-100 rounded px-2 py-1 mb-3 text-sm leading-tight" }, ue2.createElement("b", null, "Warning:"), " found ", n4.invalidBlocksTypes.length, " ", n4.invalidBlocksTypes.length > 1 ? "blocks" : "block", " of unrecognized or not allowed type:", n4.invalidBlocksTypes.map(function(e2) {
    return ue2.createElement("code", { key: e2, className: "ml-1 text-xs px-1 py-px bg-pink-200 rounded" }, e2);
  }), ". Saving will delete invalid blocks.")), ue2.createElement("div", { className: "flex flex-row items-center justify-around border-b" }, !b3 && A3(b.Tab.Document, "Page"), (b3 == null ? void 0 : b3.type) !== b.PlaygroundSelectedItemType.Page && y3.blockId && A3(b.Tab.Block, "Block"), (b3 == null ? void 0 : b3.type) !== b.PlaygroundSelectedItemType.Page && y3.blockId && A3(b.Tab.Stories, "Stories"), (b3 == null ? void 0 : b3.type) !== b.PlaygroundSelectedItemType.Page && y3.blockId && E3.item && A3(b.Tab.Item, "Item"), (b3 == null ? void 0 : b3.type) === b.PlaygroundSelectedItemType.Page && A3(b.Tab.PageSettings, "Page settings", true)), (b3 == null ? void 0 : b3.type) !== b.PlaygroundSelectedItemType.Page && (E3.selectedTab === b.Tab.Block || E3.selectedTab === b.Tab.Item) && ue2.createElement(Dr, { content: r3, pageType: n4.type, type: E3.selectedTab, addAfterBlockId: o2, handleChange: i2, handleAddBlock: s3, handleAddItem: d2, handleRemoveItem: u2, handleSortItem: m2, handlePreviewNewBlock: p3 }), (b3 == null ? void 0 : b3.type) !== b.PlaygroundSelectedItemType.Page && E3.selectedTab === b.Tab.Stories && ue2.createElement(Xr, { content: r3, handleSetStory: l2 }), !b3 && E3.selectedTab === b.Tab.Document && ue2.createElement(Vr, { page: n4, handleChangePageValue: h3 }), (b3 == null ? void 0 : b3.type) === b.PlaygroundSelectedItemType.Block && ue2.createElement(vr, { blockTypeName: b3 == null ? void 0 : b3.name }), (b3 == null ? void 0 : b3.type) === b.PlaygroundSelectedItemType.Page && ue2.createElement(br, { pageTypeName: b3 == null ? void 0 : b3.name })));
};
var Hr = function(t3) {
  var n4, r3 = t3.page, o2 = t3.content, l2 = t3.sidebarOpen, s3 = t3.devicePreview, u2 = t3.onChange, m2 = t3.handleChangePageValue, p3 = t3.locked, h3 = p3 !== void 0 && p3, v3 = t3.playgroundSelectedItem, x2 = t3.playgroundBlockId, y3 = t3.isPlayground, w2 = (0, import_react5.useContext)(A), k3 = w2.bricks, C2 = w2.contentClassName, N2 = w2.isDarkColorMode, S2 = w2.useCssInJs, I3 = w2.appId, L2 = Pr(I3).data, B3 = (0, import_react5.useContext)(qt), z2 = B3.currentPage, D2 = B3.setCurrentPage, P2 = B3.previewMode, T = B3.getStyles, R2 = B3.getStylesheets, M2 = ue2.useRef(null), F2 = v((0, import_react5.useState)({ blockId: "", itemId: "", repeaterPropName: "" }), 2), O2 = F2[0], Y3 = F2[1], W2 = v((0, import_react5.useState)(""), 2), V2 = W2[0], j3 = W2[1], X2 = v((0, import_react5.useState)(null), 2), U2 = X2[0], H3 = X2[1], J2 = v((0, import_react5.useState)([]), 2), K = J2[0], Q2 = J2[1], q2 = v((0, import_react5.useState)([]), 2), Z2 = q2[0], G2 = q2[1], _2 = v((0, import_react5.useState)(false), 2), $ = _2[0], ee = _2[1], te2 = v((0, import_react5.useState)(""), 2), ne2 = te2[0], re2 = te2[1], ae2 = v((0, import_react5.useState)(false), 2), oe2 = ae2[0], ie = ae2[1], le = v((0, import_react5.useState)(null), 2), ce = le[0], se2 = le[1], de = (n4 = r3.id, useMutation(function(e2) {
    return f(void 0, void 0, void 0, function() {
      return g(this, function(t4) {
        switch (t4.label) {
          case 0:
            return [4, import_axios.default.post("/admin/pages/".concat(n4, "/translations"), { language: e2 }).then(function(e3) {
              return e3.data;
            })];
          case 1:
            return [2, t4.sent()];
        }
      });
    });
  }, { onSuccess: function() {
    index_es_default.success("New translation created", { position: "bottom-right" });
  }, onError: tr({ topic: "page", getLimitExceededError: function(e2, t4) {
    return "The ".concat(e2, " plan has a limit of ").concat(t4, " pages / translations.");
  }, conflictError: "A translation for this language already exists", genericError: "An error occurred while adding the new translation" }) }));
  (0, import_react5.useEffect)(function() {
    Y3(x2 ? { blockId: x2, itemId: "", repeaterPropName: "" } : { blockId: "", itemId: "", repeaterPropName: "" }), j3(""), S2 ? (ee(false), setTimeout(function() {
      Q2(T()), G2(R2()), setTimeout(function() {
        ee(true);
      }, 200);
    }, 800)) : (ee(false), Q2(T()), G2(R2()), ee(true));
  }, [z2]), (0, import_react5.useEffect)(function() {
    S2 && (ee(false), setTimeout(function() {
      Q2(T()), G2(R2()), setTimeout(function() {
        ee(true);
      }, 200);
    }, 500));
  }, [N2, o2 && o2.length]), (0, import_react5.useEffect)(function() {
    y3 && S2 && (ee(false), setTimeout(function() {
      Q2(T()), G2(R2()), setTimeout(function() {
        ee(true);
      }, 200);
    }, 500));
  }, [O2]);
  var me3 = function(e2) {
    return function() {
      D2({ pageId: r3.id, language: e2 });
    };
  }, pe2 = function(e2) {
    return function() {
      se2(e2);
    };
  }, he3 = function(e2, t4, n5) {
    return t4 === void 0 && (t4 = ""), n5 === void 0 && (n5 = ""), function(r4, a2) {
      var i2 = o2;
      i2 = t4 ? o2.map(function(o3) {
        var i3;
        return o3.id === t4 && o3.props[n5] ? p(p({}, o3), { props: p(p({}, o3.props), (i3 = {}, i3[n5] = o3.props[n5].map(function(t5) {
          var n6;
          return t5.id === e2 ? p(p({}, t5), { props: p(p({}, t5.props), (n6 = {}, n6[r4] = a2, n6)) }) : t5;
        }), i3)) }) : o3;
      }) : o2.map(function(t5) {
        var n6;
        return t5.id === e2 ? p(p({}, t5), { props: p(p({}, t5.props), (n6 = {}, n6[r4] = a2, n6)) }) : t5;
      }), u2(i2);
    };
  }, be3 = function(e2) {
    return function(t4) {
      t4.preventDefault(), Y3({ blockId: "ADD_BLOCK", itemId: "", repeaterPropName: "" }), j3(e2);
    };
  }, ye = function(e2) {
    return function(t4) {
      t4.preventDefault(), Y3({ blockId: "ADD_BLOCK", itemId: "", repeaterPropName: "" });
      var n5 = we2(e2);
      j3(n5);
    };
  }, we2 = function(e2) {
    for (var t4 = "FIRST", n5 = 0; n5 < o2.length; ++n5) {
      if (o2[n5].id === e2)
        return t4;
      t4 = o2[n5].id;
    }
    return "";
  }, ke2 = function(t4) {
    return function(n5) {
      n5.preventDefault();
      var r4 = o2.findIndex(function(e2) {
        return e2.id === t4;
      }), a2 = o2.find(function(e2) {
        return e2.id === t4;
      });
      if (a2) {
        var i2 = y(y(y([], v(o2.slice(0, r4)), false), [a2, p(p({}, a2), { id: v4_default() })], false), v(o2.slice(r4 + 1)), false);
        u2(i2);
      }
    };
  }, Ee2 = function(t4, n5) {
    return function(r4) {
      r4.preventDefault();
      var a2 = y([], v(o2), false), i2 = a2.findIndex(function(e2) {
        return e2.id === t4;
      });
      if (i2 !== -1) {
        if (n5 === b.SortDirection.Up && i2 > 0) {
          var l3 = a2[i2 - 1];
          a2[i2 - 1] = a2[i2], a2[i2] = l3;
        }
        if (n5 === b.SortDirection.Down && i2 < a2.length - 1) {
          l3 = a2[i2 + 1];
          a2[i2 + 1] = a2[i2], a2[i2] = l3;
        }
        u2(a2);
      }
    };
  }, Ce2 = function(e2) {
    return function(t4) {
      t4.preventDefault(), Y3({ blockId: "", itemId: "", repeaterPropName: "" });
      var n5 = o2.filter(function(t5) {
        return t5.id !== e2;
      });
      u2(n5);
    };
  }, Ae2 = function(t4, n5, r4) {
    return function() {
      var a2 = k3[r4];
      if (a2) {
        var i2 = { id: v4_default(), type: r4, props: a2.schema.getDefaultProps ? a2.schema.getDefaultProps() : {} }, l3 = o2.map(function(r5) {
          var a3, o3, l4;
          if (r5.id !== t4)
            return r5;
          var s4 = (l4 = (o3 = k3[r5.type].schema.repeaterItems) === null || o3 === void 0 ? void 0 : o3.find(function(e2) {
            return e2.name === n5;
          })) === null || l4 === void 0 ? void 0 : l4.max;
          return s4 && r5.props[n5] && r5.props[n5].length >= s4 ? (console.error("Cannot add new blocks. Maximum number is: " + s4), r5) : p(p({}, r5), { props: p(p({}, r5.props), (a3 = {}, a3[n5] = y(y([], v(r5.props[n5] || []), false), [i2], false), a3)) });
        });
        u2(l3);
      }
    };
  }, Ne2 = function() {
    ie(true), setTimeout(function() {
      ie(false);
    }, 3e3);
  }, Se2 = function(e2) {
    if (!e2)
      return null;
    var t4 = Object.keys(e2).reduce(function(t5, n5) {
      var r4, a2, o3;
      return e2[n5] && e2[n5].document && e2[n5].object === "value" ? p(p({}, t5), ((r4 = {})[n5] = "**BEGIN-Plain.deserialize**".concat(I.serialize(e2[n5]), "**END-Plain.deserialize**"), r4)) : e2[n5] && Array.isArray(e2[n5]) ? p(p({}, t5), ((a2 = {})[n5] = e2[n5].map(function(e3) {
        return e3.id && e3.props && e3.type ? Se2(e3.props) : Se2(e3);
      }), a2)) : p(p({}, t5), ((o3 = {})[n5] = e2[n5], o3));
    }, {});
    return t4;
  }, Ie2 = !!v3 && v3.type === b.PlaygroundSelectedItemType.Page, Le2 = !!v3 && v3.type === b.PlaygroundSelectedItemType.Block, Be2 = function() {
    return null;
  };
  if (v3 && v3.type === b.PlaygroundSelectedItemType.Block) {
    var ze = k3[v3.name];
    ze.schema.playgroundLinkUrl && ze.schema.playgroundLinkLabel && (Be2 = function() {
      return ue2.createElement("a", { href: ze.schema.playgroundLinkUrl, target: "_blank", rel: "noopener noreferrer", style: { fontSize: 14, color: "#4299e1" } }, ze.schema.playgroundLinkLabel, " \xBB");
    });
  }
  r3.content;
  var De3, Pe2 = m(r3, ["content"]), Te2 = p({}, Pe2);
  return ue2.createElement(k.Provider, { value: { focused: O2, setFocused: Y3, triggerTextRefreshBlockId: ne2, setTriggerTextRefreshBlockId: re2, setAddAfterBlockId: j3, pageValues: Te2, handleChangePageValue: m2 } }, ue2.createElement("div", { className: "flex-1 flex" }, ue2.createElement("div", { className: "flex-1 flex justify-center bg-gray-200 shadow-inner rounded-md", style: { marginTop: 44 } }, ue2.createElement("div", { className: "shadow-lg rounded-md bg-white transition-all duration-200", style: { width: s3.width } }, !y3 && !P2 && L2 && L2.languages.length > 1 && ue2.createElement("div", { className: "flex justify-between text-sm border-b" }, ue2.createElement("div", { className: "flex" }, L2.languages.map(function(e2) {
    return e2.code === r3.language ? ue2.createElement("div", { key: e2.code, className: "bg-white pt-3 pb-2 px-1 ml-4 border-b-4 border-pink-500 font-semibold text-black", onClick: me3(e2.code) }, e2.name) : ue2.createElement("div", { key: e2.code, className: "cursor-pointer pt-3 pb-2 px-1 ml-4 text-gray-700 border-b-4 border-transparent flex items-center", onClick: r3.translations.some(function(t4) {
      return t4.language === e2.code;
    }) ? me3(e2.code) : pe2(e2) }, e2.name, !r3.translations.some(function(t4) {
      return t4.language === e2.code;
    }) && ue2.createElement(FiAlertTriangle, { className: "ml-1 text-gray-400" }));
  })), ue2.createElement("div", { className: "pt-2 px-4" }), ue2.createElement(Tr, { title: "Create a new translation", message: "Create the ".concat(ce == null ? void 0 : ce.name, " translation?"), buttons: [{ label: "Yes, create translation", onClick: function() {
    return f(void 0, void 0, void 0, function() {
      return g(this, function(e2) {
        switch (e2.label) {
          case 0:
            if (!ce)
              return [3, 4];
            e2.label = 1;
          case 1:
            return e2.trys.push([1, 3, , 4]), [4, de.mutate(ce.code)];
          case 2:
            return e2.sent(), D2({ pageId: r3.id, language: ce.code }), se2(null), [3, 4];
          case 3:
            return e2.sent(), se2(null), [3, 4];
          case 4:
            return [2];
        }
      });
    });
  }, type: "confirm" }, { label: "Cancel", onClick: function() {
  }, type: "cancel" }], isOpen: !!ce, setIsOpen: se2 })), ue2.createElement(gr, { id: "rb-content-frame", className: "overflow-hidden bg-white", style: { width: "100%", height: "calc(100vh - ".concat(!y3 && !P2 && L2 && L2.languages.length > 1 ? 129 : 84, "px)") }, styles: K, stylesheets: Z2 }, $ && ue2.createElement("div", { style: { backgroundColor: "#fff", position: "relative", paddingTop: y3 ? 0 : 20, paddingBottom: 20 } }, ue2.createElement("style", null, "\nbutton.rb-action {\n  box-sizing: border-box;\n  width: unset;\n  font-family: inherit;\n  line-height: 1.15;\n  margin: 0;\n  overflow: visible;\n  -webkit-appearance: button;\n  cursor: pointer;\n  border: none;\n  background-color: #f65a8e;\n  padding: 4px;\n  border-radius: 4px;\n  font-size: 16px;\n  color: #fff;\n}\nbutton.rb-action:hover {\n  background-color: #d9367f;\n}\nbutton.rb-action:focus {\n  outline: none;\n}\nbutton.rb-action.disabled {\n  opacity: 50%;\n  cursor: not-allowed;\n}\nbutton.rb-action.disabled:hover {\n  background-color: #f65a8e;\n}"), ue2.createElement("div", { ref: M2, className: "react-bricks-content ".concat(C2) }, !h3 && !Ie2 && !P2 && o2.length === 0 && ue2.createElement("div", { style: { display: "flex", justifyContent: "center", alignItems: "center", padding: 10 } }, ue2.createElement("button", { className: "rb-action", onClick: be3("FIRST") }, "Add your first block")), V2 === "FIRST" && ue2.createElement(hr, { previewNewBlock: U2 }), o2.map(function(e2, t4) {
    return ue2.createElement(import_react5.Fragment, { key: e2.id }, ue2.createElement(import_react_error_boundary.ErrorBoundary, { FallbackComponent: (n5 = e2.type, function() {
      return ue2.createElement("div", { style: { padding: 8, backgroundColor: "#fff5f5", border: "2px solid #e53e3e", color: "#e53e3e", fontWeight: 600, textAlign: "center" } }, 'Block "', n5, '" threw an error');
    }) }, ue2.createElement(fr, { contentLength: o2.length, contentRef: M2, block: e2, index: t4, locked: h3 || Ie2, setAddAfterBlockId: j3, handleChange: he3, handleAddBlockBefore: ye, handleAddBlockAfter: be3, handleRemoveBlock: Ce2, handleSort: Ee2, handleAddItem: Ae2, handleDuplicate: ke2 })), V2 === e2.id && ue2.createElement(hr, { previewNewBlock: U2 }));
    var n5;
  })), Ie2 && ue2.createElement("div", { style: { marginTop: 24, paddingLeft: 24, paddingRight: 24, fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif' } }, ue2.createElement("h3", { style: { fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 12, color: "#718096" } }, "Current content blocks"), ue2.createElement("div", { style: { position: "relative", fontFamily: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace', backgroundColor: "#edf2f7", fontSize: 12, color: "#4a5568", padding: 32, marginBottom: 12, borderRadius: 4, overflowX: "auto" } }, ue2.createElement(import_react_copy_to_clipboard.default, { text: JSON.stringify(o2.map(function(e2) {
    return e2.type;
  })).replace(/"/g, "'"), onCopy: Ne2 }, ue2.createElement("div", { style: { position: "absolute", fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif', top: 4, right: 4 } }, ue2.createElement("button", { className: "rb-action", style: { fontSize: 14, paddingLeft: 8, paddingRight: 8 } }, oe2 ? "Copied" : "Copy"))), "[", o2.map(function(e2, t4) {
    return ue2.createElement("span", { key: e2.type }, "'", ue2.createElement("span", { style: { color: "#d53f8c", fontWeight: 700 } }, e2.type), "'", t4 < o2.length - 1 && ", ");
  }), "]"), ue2.createElement("p", null, "You may copy the array to set it as the pageType's defaultContent")), Le2 && ue2.createElement("div", { style: { marginTop: 24, paddingLeft: 24, paddingRight: 24, fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif' } }, ue2.createElement("div", { style: { display: "flex", justifyContent: "space-between" } }, ue2.createElement("h3", { style: { fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 12, color: "#718096" } }, "Current props"), ue2.createElement(Be2, null)), ue2.createElement("div", { style: { position: "relative", fontFamily: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace', backgroundColor: "#edf2f7", fontSize: 12, color: "#4a5568", padding: 32, marginBottom: 12, borderRadius: 4, overflowX: "auto" } }, ue2.createElement(import_react_copy_to_clipboard.default, { text: (De3 = o2[0] && o2[0].props, JSON.stringify(Se2(De3), null, 2).replace(/\"\*\*BEGIN\-Plain\.deserialize\*\*/gi, '"').replace(/\*\*END\-Plain\.deserialize\*\*\"/gi, '"').replace(/  \"(\w*)\"\: /gi, "  $1: ")), onCopy: Ne2 }, ue2.createElement("div", { style: { position: "absolute", fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif', top: 4, right: 4 } }, ue2.createElement("button", { className: "rb-action", style: { fontSize: 14, paddingLeft: 8, paddingRight: 8 } }, oe2 ? "Copied" : "Copy"))), ue2.createElement("div", { className: "overflow-auto", dangerouslySetInnerHTML: { __html: function(e2) {
    return JSON.stringify(Se2(e2), null, 2).replace(/\n/gi, "<br>").replace(/ /gi, "&nbsp;").replace(/\"\*\*BEGIN\-Plain\.deserialize\*\*/gi, '"').replace(/\*\*END\-Plain\.deserialize\*\*\"/gi, '"').replace(/\&nbsp;\&nbsp;\"(\w*)\"\:&nbsp;/gi, '&nbsp;&nbsp;<span style="color: #d53f8c; font-weight: bold">$1:&nbsp;</span>');
  }(o2[0] && o2[0].props) } }))))))), ue2.createElement(Ur, { page: r3, content: o2, addAfterBlockId: V2, handleChange: he3, handleSetStory: function(e2, t4) {
    var n5 = o2.map(function(n6) {
      return n6.id === e2 ? p(p({}, n6), { props: t4 }) : n6;
    });
    u2(n5);
  }, handleAddBlock: function(t4) {
    return function(n5) {
      var r4, a2;
      n5.preventDefault();
      var i2 = v4_default(), l3 = k3[t4];
      if (l3) {
        var s4 = l3.schema.getDefaultProps ? l3.schema.getDefaultProps() : {};
        if (((r4 = l3.schema.repeaterItems) === null || r4 === void 0 ? void 0 : r4.length) && (s4 = Object.keys(s4).reduce(function(e2, t5) {
          var n6, r5, a3, o3, i3 = s4[t5];
          if (!Array.isArray(i3))
            return p(p({}, e2), ((n6 = {})[t5] = i3, n6));
          var d3 = (o3 = l3.schema.repeaterItems) === null || o3 === void 0 ? void 0 : o3.find(function(e3) {
            return e3.name === t5;
          });
          if (!d3)
            return p(p({}, e2), ((r5 = {})[t5] = i3, r5));
          var u3 = i3.map(function(e3) {
            return { id: v4_default(), type: d3.itemType, props: p({}, e3) };
          });
          return p(p({}, e2), ((a3 = {})[t5] = u3, a3));
        }, {})), (a2 = l3.schema.sideEditProps) === null || a2 === void 0 ? void 0 : a2.length) {
          var d2 = l3.schema.sideEditProps.reduce(function(e2, t5) {
            return t5.groupName || t5.type !== "BOOLEAN" || (e2[t5.name] = !!s4[t5.name]), t5.groupName && t5.props.filter(function(e3) {
              return e3.type === "BOOLEAN";
            }).forEach(function(t6) {
              e2[t6.name] = !!s4[t6.name];
            }), e2;
          }, {});
          s4 = p(p({}, s4), d2);
        }
        var m3 = { id: i2, type: t4, props: s4 }, p4 = [];
        p4 = V2 === "FIRST" ? y([m3], v(o2), false) : o2.reduce(function(t5, n6) {
          return n6.id === V2 ? y(y([], v(t5), false), [n6, m3], false) : y(y([], v(t5), false), [n6], false);
        }, []), u2(p4), j3(""), H3(null), Y3({ blockId: i2, itemId: "", repeaterPropName: "" });
      }
    };
  }, handleAddItem: Ae2, handleRemoveItem: function(e2, t4) {
    return function() {
      var n5 = o2.map(function(n6) {
        var r4;
        return n6.id !== e2 ? n6 : p(p({}, n6), { props: p(p({}, n6.props), (r4 = {}, r4[O2.repeaterPropName] = n6.props[O2.repeaterPropName].filter(function(e3) {
          return e3.id !== t4;
        }), r4)) });
      });
      Y3({ blockId: O2.blockId, itemId: "", repeaterPropName: "" }), u2(n5);
    };
  }, handleSortItem: function(t4, n5, r4) {
    return function(a2) {
      a2.preventDefault();
      var i2 = y([], v(o2), false), l3 = i2.find(function(e2) {
        return e2.id === t4;
      });
      if (l3) {
        var c2 = l3.props[O2.repeaterPropName];
        if (c2 && Array.isArray(c2)) {
          var s4 = c2.findIndex(function(e2) {
            return e2.id === n5;
          });
          if (s4 !== -1) {
            if (r4 === b.SortDirection.Up && s4 > 0) {
              var d2 = c2[s4 - 1];
              c2[s4 - 1] = c2[s4], c2[s4] = d2;
            }
            if (r4 === b.SortDirection.Down && s4 < c2.length - 1) {
              d2 = c2[s4 + 1];
              c2[s4 + 1] = c2[s4], c2[s4] = d2;
            }
            u2(i2);
          }
        }
      }
    };
  }, handlePreviewNewBlock: function(e2) {
    var t4;
    e2 || H3(null);
    var n5 = k3[e2];
    if (n5) {
      var r4 = n5.schema.getDefaultProps ? n5.schema.getDefaultProps() : {};
      ((t4 = n5.schema.repeaterItems) === null || t4 === void 0 ? void 0 : t4.length) && (r4 = Object.keys(r4).reduce(function(e3, t5) {
        var a2, o3, i2, l3, s4 = r4[t5];
        if (!Array.isArray(s4))
          return p(p({}, e3), ((a2 = {})[t5] = s4, a2));
        var d2 = (l3 = n5.schema.repeaterItems) === null || l3 === void 0 ? void 0 : l3.find(function(e4) {
          return e4.name === t5;
        });
        if (!d2)
          return p(p({}, e3), ((o3 = {})[t5] = s4, o3));
        var u3 = s4.map(function(e4) {
          return { id: v4_default(), type: d2.itemType, props: p({}, e4) };
        });
        return p(p({}, e3), ((i2 = {})[t5] = u3, i2));
      }, {})), H3({ id: "PREVIEW_NEW", type: e2, props: r4 });
    }
  }, handleChangePageValue: m2, playgroundSelectedItem: v3, sidebarOpen: l2 })));
};
var Jr = function() {
  var t3 = (0, import_react5.useContext)(A), n4 = t3.bricks, r3 = t3.pageTypes, a2 = t3.responsiveBreakpoints, o2 = t3.enableAutoSave, i2 = (0, import_react5.useContext)(qt).currentPage, l2 = v((0, import_react5.useState)(Pe), 2), s3 = l2[0], d2 = l2[1], u2 = v((0, import_react5.useState)(true), 2), m2 = u2[0], p3 = u2[1], f3 = v((0, import_react5.useState)(a2[a2.length - 1]), 2), h3 = f3[0], v3 = f3[1], x2 = v(function(t4, n5) {
    var r4 = v((0, import_react5.useState)(function() {
      var e2 = window.localStorage.getItem(n5);
      return e2 !== null ? JSON.parse(e2) : t4;
    }), 2), a3 = r4[0], o3 = r4[1];
    return (0, import_react5.useEffect)(function() {
      window.localStorage.setItem(n5, JSON.stringify(a3));
    }, [n5, a3]), [a3, o3];
  }(false, "rb_autosave"), 2), y3 = x2[0], w2 = x2[1], k3 = Te(i2.pageId, i2.language).data, C2 = function(e2, t4) {
    var n5 = useQueryClient();
    return useMutation(function(n6) {
      return f(void 0, void 0, void 0, function() {
        var r4;
        return g(this, function(a3) {
          switch (a3.label) {
            case 0:
              return r4 = { type: n6.type, name: n6.name, slug: n6.slug, content: JSON.stringify(n6.content), meta: JSON.stringify(n6.meta), customValues: JSON.stringify(n6.customValues), tags: n6.tags, authorId: n6.authorId, status: n6.status, isLocked: n6.isLocked, publishedAt: n6.publishedAt, scheduledForPublishingOn: n6.scheduledForPublishingOn }, [4, import_axios.default.put("/admin/pages/".concat(e2, "/translations/").concat(t4), r4).then(function(e3) {
                return e3.data;
              })];
            case 1:
              return [2, a3.sent()];
          }
        });
      });
    }, { onSuccess: function(e3) {
      n5.invalidateQueries("pages"), n5.invalidateQueries("page"), n5.invalidateQueries("tags"), index_es_default.success("Page saved", { position: "bottom-right" });
    }, onError: tr({ topic: "page", getLimitExceededError: function(e3, t5) {
      return "The ".concat(e3, " plan has a limit of ").concat(t5, " pages. If you downgraded your plan, you may have pages set to draft. You need to upgrade again before publishing these pages.");
    }, conflictError: "There is already a Page with the same Slug and Language", genericError: "An error occurred while saving the page" }) });
  }(s3.id, s3.language), A3 = C2.mutate, N2 = C2.status, S2 = (0, import_react5.useCallback)((0, import_lodash.default)(A3, 2e3), []);
  return (0, import_react5.useEffect)(function() {
    (k3 == null ? void 0 : k3.id) ? d2(Se(k3, r3, n4)) : d2(Pe);
  }, [k3]), (0, import_react5.useEffect)(function() {
    o2 && y3 && S2(s3);
  }, [s3]), ue2.createElement("div", { className: "flex-1" }, i2.pageId && s3 && s3.id ? ue2.createElement("div", { tabIndex: 0, onKeyDown: function(e2) {
    (0, import_is_hotkey2.default)("mod+s", e2) && (e2.preventDefault(), e2.stopPropagation(), s3.content.reduce(function(e3, t4) {
      var r4 = n4[t4.type], a3 = sr(t4, r4) && dr(t4, r4, n4);
      return e3 && a3;
    }, true) ? A3(s3) : index_es_default.error("Error in validation, cannot save the page", { position: "bottom-right" }));
  }, className: "focus:outline-none" }, ue2.createElement(pr, { page: s3, sidebarOpen: m2, setSidebarOpen: p3, devicePreview: h3, setDevicePreview: v3, handleSave: function() {
    A3(s3);
  }, saveStatus: N2, autoSave: y3, setAutoSave: w2 }), ue2.createElement(Hr, { page: s3, content: s3.content, onChange: function(e2) {
    d2(p(p({}, s3), { content: e2 }));
  }, handleChangePageValue: function(e2) {
    d2(p(p({}, s3), e2));
  }, locked: s3.isLocked, sidebarOpen: m2, devicePreview: h3 })) : ue2.createElement("div", { className: "bg-gray-200 shadow-inner", style: { height: "calc(100vh - 40px)" } }));
};
var Kr = function() {
  return ue2.createElement("div", { className: "w-full pt-10 mx-auto flex" }, ue2.createElement(lr, null), ue2.createElement(Jr, null));
};
var Qr = ue2.createContext({ selectedItem: null, setSelectedItem: function() {
} });
var qr = function() {
  var e2 = (0, import_react5.useContext)(A), t3 = e2.pageTypes, n4 = e2.bricks, r3 = (0, import_react5.useContext)(qt), a2 = r3.previewMode, o2 = r3.sidebarCollapsed, i2 = (0, import_react5.useContext)(Qr), l2 = i2.selectedItem, c2 = i2.setSelectedItem;
  return ue2.createElement("div", { style: { width: a2 || o2 ? 0 : 192, transition: "width 300ms" } }, !a2 && !o2 && ue2.createElement("div", { className: "fixed top-0 pt-10 pb-12 w-48 h-full overflow-y-auto scrolling-touch" }, ue2.createElement("nav", { className: "overflow-y-auto pb-24" }, ue2.createElement("div", { className: "mt-4 mb-4" }, ue2.createElement("div", { className: "flex flex-row justify-between items-center border-b border-gray-300 pb-1 mb-2" }, ue2.createElement("h3", { className: "w-full px-2 text-xs leading-none font-bold uppercase tracking-wider text-gray-600" }, "Block Types")), ue2.createElement("ul", { className: "pb-4" }, Object.keys(n4).map(function(e3) {
    var t4;
    return { name: e3, label: n4[e3].schema.label, isRepeater: !!((t4 = n4[e3].schema.repeaterItems) === null || t4 === void 0 ? void 0 : t4.length) };
  }).map(function(e3) {
    return ue2.createElement("li", { key: e3.name, onClick: function() {
      return c2({ type: b.PlaygroundSelectedItemType.Block, name: e3.name, label: e3.label });
    }, style: (l2 == null ? void 0 : l2.type) === b.PlaygroundSelectedItemType.Block && (l2 == null ? void 0 : l2.name) === e3.name ? { boxShadow: "0 0 5px rgba(74,85,104,0.08)" } : {}, className: (0, import_classnames2.default)("text-sm px-2 py-px mb-1 flex flex-row justify-between items-center text-gray-600 hover:text-gray-800 cursor-pointer", (l2 == null ? void 0 : l2.type) === b.PlaygroundSelectedItemType.Block && (l2 == null ? void 0 : l2.name) === e3.name ? "bg-white border-t border-b border-gray-300 font-semibold text-black hover:text-black" : "hover:bg-white text-gray-700 hover:text-gray-900") }, ue2.createElement("div", { className: "flex flex-row justify-start items-center flex-1" }, ue2.createElement("div", { className: (0, import_classnames2.default)("mr-2", "text-gray-400", { "text-pink-300": (l2 == null ? void 0 : l2.type) === b.PlaygroundSelectedItemType.Block && (l2 == null ? void 0 : l2.name) === e3.name }) }, e3.isRepeater ? ue2.createElement(FiGrid, null) : ue2.createElement(FiBox, null)), ue2.createElement("div", null, e3.label)));
  })), ue2.createElement("div", { className: "flex flex-row justify-between items-center border-b border-gray-300 pb-1 mb-2" }, ue2.createElement("h3", { className: "px-2 w-full text-xs leading-none font-bold uppercase tracking-wider text-gray-600" }, "Page Types")), ue2.createElement("ul", null, t3.map(function(e3) {
    return ue2.createElement("li", { key: e3.name, onClick: function() {
      return c2({ type: b.PlaygroundSelectedItemType.Page, name: e3.name, label: e3.name });
    }, style: (l2 == null ? void 0 : l2.type) === b.PlaygroundSelectedItemType.Page && (l2 == null ? void 0 : l2.name) === e3.name ? { boxShadow: "0 0 5px rgba(74,85,104,0.08)" } : {}, className: (0, import_classnames2.default)("text-sm px-2 py-px mb-1 flex flex-row justify-between items-center text-gray-600 hover:text-gray-800 cursor-pointer", (l2 == null ? void 0 : l2.type) === b.PlaygroundSelectedItemType.Page && (l2 == null ? void 0 : l2.name) === e3.name ? "bg-white border-t border-b border-gray-300 font-semibold text-black hover:text-black" : "hover:bg-white text-gray-700 hover:text-gray-900") }, ue2.createElement("div", { className: "flex flex-row justify-start items-center flex-1" }, ue2.createElement("div", { className: (0, import_classnames2.default)("mr-2", "text-gray-400", { "text-pink-300": (l2 == null ? void 0 : l2.type) === b.PlaygroundSelectedItemType.Page && (l2 == null ? void 0 : l2.name) === e3.name }) }, ue2.createElement(FiFile, null)), ue2.createElement("div", null, (t4 = e3.name).charAt(0).toUpperCase() + t4.slice(1).toLowerCase())));
    var t4;
  }))))));
};
var Zr = function(e2) {
  var t3 = e2.className;
  return ue2.createElement("svg", { className: t3, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 340 462" }, ue2.createElement("image", { width: "304", height: "319", transform: "translate(18 141)", opacity: "0.1", xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATAAAAE/CAYAAADBrZ8mAAAACXBIWXMAAAsSAAALEgHS3X78AAAgAElEQVR4Xu297XbiyhJsm2B37/v+L3vOWW2b+8OkHQSRWSUBNoKYY2iUJDDoo2oSWdBr7Q6HQxhjzBbZj55gjDH3igVmjNksr6MnmOuy2+12o+eYbXHwPMyvsfO1vw0WlbHYbo8FdkUmpTXzHLMthoPIMrsNFtiFDKS19jGzDbrBUz5mmV0PC2wljbh4/+zzZh8zP8saSfF++TyL7HIssBUIeXXbS55rtsFIULjdPtcSuwwLbCEDee2KdnYdsdh+n5mENVrnltctsQvwzygWQPKaEddu8Bhikd0PM+LC7U5WzCG+7+kh4rNfWWLrcAKbpJDXSFhqu/q7xMK6P2aS1UGsV4+p1klsBRbYBBPyqmRVLSHWEyUwS+3nUAOiEpgSllrUc/i1Plc8IBfhEnLAQnnlsh/s47/l10Qsr5+HJaKEo+T0QY/hPuYQn/cWW5eTC7HAGhp58fperFdttYRoed38DCiQTl6VrLDdxanYPuIcS2wlLiELJpMXi2tP62rfSGb4Pokl9nPwgBiJC2XF62of/50S5OeKB+cQJ7B5KnlV0noR+5TULLH7YY28uuU94iuB4Wt+xOe9/4B9uzh/fzPAAhMMfi6BSwoIZfUiWvX4jMSC1rt9Zh1KGrhvJnW903pu72Bf3tf3+JYX3sd8zy+RuZQcY4H1YBpS4kJ5sbByeRWPVYmMBcatuT2qpBulrndo3yPiLb6l9X58HbyH+RimsMRpbAEW2DJYYpiqlLS45WVGYkHratuspyobc72T17tY3uLzXmaLyQtfN+I0hVlYK7DAiOKfCqmF5cPCeo2IP7D+QutKYup9AlrEErucrnysSkclrzdoX46tun/4Wrmt7vHXcbmM7LHAaqrUk/LKllNVSusPrb/SslRiQevm+rC8Is7nu5S8csF7yfePxXU4Pi/Xd/B4iG0jsMB6VBLKRaUvTF5/IuIvrKPQlkgsRGuuz2zpWMnr33HJe4iMxLWDdf4b02CBzYPiQoHx3BfKKxeWWT4Py04uSS2wn+UgWpZXCgxLxhQXpy8EX4vFmDJz4lqBBQbA/Bd3wB0t2Umz06LAUk4osP/Fuci6JIbvEaJNLLTLYGEoeWWb3zSyvPAesrwqCeI9xhTGEttFxMHzYDUWWA1Li/fNlpD/oxZTmZKYKiMtsNuBYkCB8dwXl44z8mJxscQ+QvcvfA3TYIHNw0LpUhjOeaW8cqkkplJYvk+ElpgFdhmVvFRyYnn9iYj/4lxeXen5Eqe/AeM+ZWEtxAIbw+LAzsfzYJzCuIzEJR9fksIsr9ug5KXSV07Yp7x4zqv6m+qLmkxhAa9hkS3AApsDOxenMC4lO5GpJMalZL4OdnKUl0piZj0H0ar0lXNf/G3jSF6v8f2jVhYYfzBZXguxwObhjsZl3khi/O0kTuyrUnKUwiqBWWw9ShAprVxX5R/+1uslTu9F/g1K6yVO76eaGuAPRrMQC+xI8Q2k6lT8OEsMO+xIYjMprPu0Ttz516HS10ecSgyllMkLrzc/h++jWkb3bhffx7SL8DeRFRbYHNzJWChc7qlExkJjqXUpbEZiattousl7FFiWgi9x/s+DVOrie8epSy0hWjOJBbYM7HS4Dx9TEmORVekM97HAeCCEaHndnNPJS819vcf39U9QXHxfOTnzvQuxblZiga2n6pC5jfv3tD6T0PiTnF+nGwQeFJqRvLh0RPkEPPYa+ttFvjfqPvjeXBELbD088asGB8Odmz+lWWYzpaSSmAeJhu9RNfeV8srrm/ur+6HSsfkBLLBlsKi6x/mTHRcEBYQyQ6nxPhw0+LeJB5HmIFqVvnbxKbHcX32AKLr+kY9zPzErscDm4E7WyQkHAi68/wAtoxLamiSWPKvQ1LXt5IXXaYm48DW4D6j+of4eWzOJBXbkcDgcjj+lOMR3J8X1r6fSeiUsngjO5YPWuaMjVSobSSz/1nyj7hveP34Mr6/6u+6edx9aI5kF7T9EhP8PRQUW2DzY4bgjY0dFWeF/ueCN9qkFO3u+D8Iyw5SmEpgl9kknL77GldAqcXUfTnhPsa9Ui1mIBTZHJa6uM7+JBf8LBrnkb4jwb1/iu7MjKCmUF8+HYZs8m8yUmLLl+1iVhvj86j6rD6yZDyglLktsIRbYmEN8du5uAKiOzNL6L87lhd804lKJLI8l4lxiLiNP4dJvB+tKXnyt1IdVd5/VosTVpbCA1kxggS1DfRpz5+4SV/7nV2YW1ekjdAdXArPIvq8VfgAhs+Kq7i/e53/FY0tTmFmABVaDnar6xFSd+yW+/xPD11q4wysssGXwdRyJS304obh4W4lsJoVZaguwwIDim8iIsbz28XMS28e4gyuJ8WOPCl4XLBurFJao+zsjr3/xmax530wCUyJDDhHhbyAbLLB5uHPv4lRib1H/3EH9jiv38TIzsT/ToZ81gfEHT+6rrhleT/xg4nu7RF6cwpS4ltxLU2CB9fCnOcoLP6V38SmkkcQqaaG8XmkdOz9/WqvOX5WR+Pgjw/cs9+E6w9e0S1+VyFhcnMIwjeW97EpJM4EFVoOdHrdRYrmwyHawPpIZCutfnP68ApPYbNnR8ejyihiXigheP5QKpi8WWSWuroR8o9eduY+z5/DUWGAEzIN97RLrLLF3WH+LU3mxyFTiSnmlwP7E+Se26vRJbneCegZ5JSOJVddPSaaaA5tJYZy8RvfyTGSe/+qxwJbBHa2SGC9V+YgC+xOfnT/lNdvx1Sc3y+qZ5JUoialttXD66kpIXudF3cPqfc1CLLCelIHq+B/HdZRDJy8uGzF1qQHQiQvXFUpiz053rVheKoF1IlP7uw+gSmKJZTaJBSagMhJlcBAtikylMBQXznGhwHgwvEfd+bnD+9N7HeoafkCb8poV2ay8ug+hk/vo8nGMBTaPElnKK0KXkvnNZP6EAiWGpaLq9FXnzzbivPPjMRpNJY1OYqNlyT0cJTBLawEWWEGRwlTnwo6fcPpKia391O7k5Q6/HnUtlcQqmXXS6u4jSyv52nb6msMCa5iUGIorjs/Jzp4Cy86OP05d8omt5OVP7cvoriVebxbZO7Xd+tL7+LnT8ppmP3rCs0OdidfVUn1iq09w9fjo0/qsw5urMLqXlcTUeiUtdT8T39MVOIEtJzsaprHspLn/A1ru9EpU1b5qACSq0x/C82AV1fXi9ZHMOrnhcyp58Xt84fS1DCewCYpOxR2fO7vq+NWntHq+6uDc+XGfWU53Pfme8v0dSUrtq+7ZISIsrxVYYJMUpaTqmPwJrTqzkpcS10znT9z55xldQ77X1aLu35L76Ht2IRbYApr5MN7uOvuST2vV6RUeCMsZXcvR/Viy4OvKdaevdVhgCxEdreqw1WOjBf8WUa9rrsPMtR/dK3U/DqL1fbsiFthlVJ0RO2rVsdVAwMd4HR9X62YdM+Jiqvuj7qvv0Q2xwFbQxH3VoXF/1bErmeHj2JrbUd2fbPnx7t6NRPe54fJxNRbYdeAOWIkKH+fn4WOdzMzv0N1H3F5y/2aeYxossJXAp2YnqmSmY4868+hxcz1G11olqhlmn2cmscCuz2wnVQOg+kQ3v0OVkJew9PlmARbYbXHnNeaGWGDGmM1igRljNosFZozZLBaYMWazWGDGmM1igRljNosFZozZLBaYMWazWGDGmM1igRljNosFZozZLBaYMWazWGDGmM1igRljNosFZozZLBaYMWazWGDGmM1igRljNosFZozZLBaYMWazWGDGmM1igRljNosFZozZLBaYMWazWGDGmM1igRljNosFZozZLBaYMWazWGDGmM1igRljNosFZozZLBaYMWazWGDGmM1igRljNosFZozZLBbYfbM7LuZ38PW/cyyw+6IbLB5IP4fvw0awwH4PHAj+pN8WfL98734JC+y2rO3YldDWvp6Zp7rua6/92r8zE1hg16fqsLvQA2G0zfv8yX9dllzb0b2q7jE+bq6IBfYzVB0f20pu104E5pwl15nvFbf4PHNjLLDbs/TTuJNZhQfLcpZcz+qe4ONL9psrYYFdjvoEVh1+F+f7ed9o4CwZdKZm5jrO3JPuXqrn4z5szUossJXsdjvVIRVd5x0tCP9dhQdFzei6VWIZ3Sf1d9P3ifqSWYAFdl1GnZkltGQJaPk1zDrUNbzGPRq9prkSFthtUB0WO/aetmcXfG1zfdS9ml34noZYN1fGArs+o0GwL1p8vBMcvkfiwbGc6hp2903dq+5eju6buRALbAUwZ4Edkjtq19FxQPDSDZhucJjljK6rug8z943vNd4nvme7iPA82EossMtRHZI7K3ds9ck9GhBqICB8HEajrpO6X3ztq3vU3VfVFxLfrytggV2PrvOrQfBCbbVUrxXQMh4Y54yuVXX/untT3cOZvmCugAW2kEH5qJaZjv9Cy1KJ8bEYjbpnuM7CUfeN79Pog6jrG8kuIlxGrsACu4xKJkpe3PnVws+dlVjQuulRIuvkVd2fmXs5+uDxfbsAC2wBTfrKVomLP6VnFvVJPvNpbqFpRvdLSUwto/uG90/dx+H9cgpbhgU2iehY3QBQg4A7+SssuG9GZtUgUIwef2RG584ym5EW3y++h9V9G/WXLyyxeSyw5Zx9asZ858dOXw2CbjBwh+cBaOboriHey0pe1YePundKZnkvI07vm+/hQiywCUTp2H2Sqs7/KpY/x4X340DhDl99kpt1VPcP72PeSyWv7j6yzGaSWGTrFDaHBTZgUDrmtkpeo47Pg6Dq+N0n+Emnp33mnO6aqWusElh1z0YfROo+8jGc3DtLbIwFNk8lsj2tY2evEtgfWqoBwQNIfWrzgOR184m6PtX17MSF90rdR3X/cJ37y5m4xLYpsMAaJibu99By8sKOzx1dLSyx/PsqfeW9UwMg8UDor00+xvcRF7wXnbyqe8rywiTGEju7l05hPRZYgfjvfe1oHSU2ktesyLoExgLjzt6JzHxTXTcW2CiBzdzHWYnx/Tw5Rkus5nX0BFN2du7wSl7Ykf9Ci0s1ALiMmf7UNlOoe/kRWmB5T9W9+hsR/2j5GxFvx+U1It5h+YD3OcCC8jqIdSOwwASTpePMp7Xq7Cwt3qcSGL9fJy/LrIaFMHtf1T1FcfG+t+P2W5zKCwV2oCWO+/H+fR3rbrfbHQ4Hy4ywwIgVpSN29qrU4MQ1SmEssZG8LLIeJa6I7+RT3de8p+/xfT9TTjPpKwWGIvuIPoXxseW6JSawwGqUyLCTZzuaJ2FZ/Y+2O3FxCYnvjfIy60ix4X1Nsbwc10fJGiX2JpZOYCkulBneV5eSAywwYEHpuIvTCdlXaFXZyCJjiXUl5Jry0VI7B2Wl0hjf41EKw6T1T6xzGkN55WulvF6O6/v4xKXkJBbYkYWlI8qr+oRWwlLiqlIYpy8UWHb0SmRmDAtiDy3KKwWD9zallIL6R22VvtRcWCaxl/jEpeQCLLBzlMhQXigxlBenrmpBiVVzX528qpRlic2jUhiXkigxvM/vcSqxvN8oLiUyJS6XkhdigUVcUjpWyUslsFz+0jrKTJWPKDE+LhRaYpHVKHHhOt9vTmApoT+w/kbrnL44iWUJyd9IupRcwdML7MLSEcWlEhhLS5WRmL6yVQlsF6cSQyyt5SiZ5TXGkjIl9hGf9yYFhHNhLC+VvrokdoDWpeQCnl5gQPVpjOJQJQUKTJWJSmIqeakSUpWPvCAW2RglLl5nkaXEUmCZwDiJKXmxyD5E61JyJU8tsAWlI6cvLhtV6ahKRi4def7rhRanr9tSyQzlhQLDchLlpUpJJa9KZCwvTGERLiVLnlZgC0tH7MiYvlTpWElLlY5cQqr0hfKKOD02xCKbp0thmXqqUjJTGCcpLiUrqfHyIZYDLXi/XUoCTyswQIlsqby4dFST9ZXERqUjl4+IpXU5lcxQYl0pmQLjpSsjqxKyEphLyYKnFNjC0hHl9UpLVzp26UuVj10CUwtikS2nEhduo8Re4lQoKJxOXip9qVIy15W88jhdShJPJ7CVpWNKjOe9ZsTVzX2xuPZxKq9KYgGtuZyUGfeN/XE9JZIJLPtCyofnw5TQ1H6WVwos1zEB5vHlMR5o/Skl9nQCA5TIlLy6SXsuHTuZdelLTdzPlo4W2XpSXLye29miSDKJdfNhlcD4G0pVRh6gVQseV3XsT8NTCeyC0nGUvmakNZr3cun4O1Tiwm2UGAosJZYpjAWmflLRJbWZ+bAIl5JfPI3ArlQ68tzXbPmokhdLrCsZ+XjNbUiZqb6CEst+kVLp5sNUEhstLDGXkgVPIzCg6pwsrxlxKXn9f6HlpRJYlb5QZBUW2fVIcVWP7WEbU5gqJWdENisul5IDnkJgNy4dZ0vIbt5rtnS0tG6PSmG5H1OYKiVn5FXNhy0VWYRLyccX2MrSkeXVTd7PzHulwDjRjSbt+djVurkOVZJBobHEVCn5HpfPh31AiwJjkWFfOdD6U0js4QUGKJFdW16Xpi8WWcTpcattcz1QXLid13xpKTmTxC4RGB5bJeCH5qEFdsPS8RJ5scBcOt4nLC/cn30HJYaSuVRgKDKXkg0PK7Abl45LSkglLy4fK3FFs25uA6YXXs+2ktghzufCKpHxL/Vn/7mRSmLYZw60/tASe1iBAUpkl8hrJnV18lIlI4osYVlZXj8Hiou3s98kKZHsQ1hKqrkwFNYojc0KDKVVCfgheUiB/XLpmK0qHZXE+Njw09TS+n1SAlWfUiksJcOl5Ewaq0TmUlLwcAL75dLxf/A3M/NelcQCWl43P4NKMnxPMomlRHA+rCol/xe1wFxKLuThBAYokV0ir1HZiNszyYvFVWF5/R4oMfVYtpnCUmIoGC4lMYXN/rRiVmAoLSXgh+OhBPaLpaMqG0dzX3xsKDJL6/5ICVR9jCV2iNMUVpWPKolVi0tJ4qEEBrAMRhIbpa+RyNTkvUvHx0AlGb5Hs6XkSGZrSsmPOJXnsJR8JB5GYJC+uHOxvLJlca0tHbuycSZ9IZbXfaIkho9lOyol3+Ozj7C0Li0lc0GZ4XGdHPsjpbCHENiC0nEX3zK5dunYTdzPlo5mO1R9bqaUHJWTa0rJD3i/TIQPX0o+hMAATjAsMZaXKh9nS8dRAnPp+FicJZk4v2dLSklMVCysUSlZJbJ8zwhdSkacnsfm2bzAROnIUsiOhRJT6WuptHji3qXj46Mkho9lu6aUVMLqxMUixHKSS0mU7de+R0hhmxbYROmI8sL0NTP3NSohb1E6Wl73TyUu3FYSu6SU7FJYCgzlhaUkJ8WIByolNy0wQHUiFEeuc/pS815KXH9pfUZea0pHsy043eS+paUkC4ulNZIXLygvnA9j8W5WXMlmBdaUjrywuLh0RBGxvJS4eN7LpePzgYO/SmQqhXWl5EfoxKXSF25zGYlpLBfV/x6ilNyswIhOXriwvF7jVF6j8hHFhcusvGZEZrZBJS7cVhJTpWTK6G+cigplpX5ukcsfer2cA8P3Vv1uk9JCNimw4jdfuc3yUskrBVYlL0xfKnm5dDRIygzvafbBiHEpiUmKS8jRN5GzKQyP76yU3GoK25zAJibuWR6YvEZzXzPpS8lrJn0h3NHNNsEUViUylcK4lMwEVQlqJoWhyF7h9fG947gP+9zXMW9RYpsTGMASqCQ2mvvqxNUlL5eOJqIWF24riXWlpEphSmRdIqvSGPbDSr6bYVMCW/Cbr0pePHfF5eNfaqu5L5W8XDqaFAF/uM6Uku/xPaFfpTCVvnib5aXKST7Or31bS2GbEdhE6ZgdBSVWzX2tTV8ssRlxIdyxzWOACYbTDH5wYQrL/snzYZzGRimsSmJKYlhScv/bZCm5GYEBSgoojrWlo0pfLK5XaKvyUYm1E5l5DCpx4TZKLFNYLiguTGIqbY3mwlJgKLKUZrYB+xM+h7tnEwKbTF8oL5W+lpSOLLZu3muUwPAT2DwHKQK859k/I/pSsprQH8lLlZKcxDABqg/XzaWwTQgM4A6h5KWSV5e+qvmuSlwuHU0FJhhOM/hB1pWSKaBMYW/x2RdVKTmbxLq5sDyu6rjvmrsX2IqJ+1H6quRViYwl9kKLS0eDVOLCbZQYpjCeD1NCGqUxFhknMZRnSgzT4te+LaSwuxbYZOm4h7ab90p5qfKRS0eW1ystKn25dDQMyyH3cSmZfRdFhimsEte/OE9kf+lv1FxYvk/KjPvoZkrJuxYYoESG0uD0xcLh9MXi6krHmbmvmcRlkT0PmMKqRKZS2CFOEximMFVKjlIYpjGeC8v3TpluckL/bgU2mb6UvKoExumqkleXvkbzXjMiM89BJS7cRonxB/BsCuNEVgnsPb7n2h5mQv9uBQZwilHyGk3cq/Q1EleXvFJknbwsLZOkzKq+jCVklnevcVoCVinsH22z5LicfKgJ/bsU2AUT913Z2EmsKiFZXpy6cL3CInteOgFgHzrAevZlnNBXKaxLY//isx+/Ry2wh5jQv0uBESrh7KHlZMTJCyftuXzk/Sp5VfNeVQILaI1JWA65L+JUJDiZr0rJTGFKYJjG3mkd01wKEhMfihS5O2khdycwkb6+HopzeVXpq5v7Uj9eXZK+lLwQ1UHN85Li4vXczhYlximMS8mZ+TBVVqoklv35AG3E+XHeZQq7K4FNTNxX8pqduL/GvFeVvDqRmeemEhduo8QwhalSMsX0N06TF8+HVQLDFMal5P64D4/x69jvTWJ3JTCAUwxLrBIXl49KVpy+eJ5MlY6cvpTEAlpjKlJm3Mf3x/UqhalvJVFiVSnJIlMp7EAL9ukqPd4FdyOwBRP3SmIz8up+tDqa96rSF8Id0hgEBcAywH7epbCUz5/4lheXkpW8lMBQZHtoU2Io2q9995TC7kZgBKcbXJS8XuJbQFXyqsSFyStbfN0udY1EZgxSiQu3UWLZz1NkKompUrISWT4//zZfj0vJqm/fhbSQuxDYxMS9EhcnL577QpHNpC9OYPlenbiq4zZmRMoM+w73LVVG4lzYe8ylsPxZBYrsT5zKqyolI86lezcp7C4ERihJ8PxTJTFOVqP0peSlykaXjuZapLh4Pbexz6dIXqDNUhIT2CiFZZuy4yUlyRP6eJzJr0sL+XWBTaSvat6rmvtKeY1+KoHrKC9OX10JiVheZhYlLlzfH9dRYJjCWGJYSo6+kcQU1k3q47yYOt67SGG/KrCJn02gxCp5scRYVpXMVNmY0lqTvoxZQyUzlcI+4jSFjSb0VQrDBV+HBdbNh30d729L7FcFBvAnkJLXTPoalY2YvnDebLZ0tMjMtajEhdsosez/+K1kNaGvpFVN6lcpDOWJfb4qf3+FXxPYgp9NoLyynU1eKnVh+hrNfXXysrTMtUgZYJ9SH+JKYFhG/o1viXEK676VRIHhnBjOhfExfu37zRT2awIjWFx507JFean0NZO8uHRUyauTF8IdzZg1pBR4Pbd5PGApieUkJ7AZeSmBobxe4nQuTMorfplfEVgxcc83DD95uuRVlZDdv3NUc19cOi4VmTFrUOLC9f1xPZMQJjEuI1NMKLHqW0l8fldGorxw3J6I97dS2K8IjGA5sLgweV1SPqLEVNnYJTDE0jK3opIZJ7BMRjypj+Ukpy1MYqMJfUx5+b5cTiY/Li3kxwV2g59NzEhrafri1GWRmVvSpbDcRol1KUyVklxGLp3Q51Iy4vx4fyWF/bjACBaEkpcqH1Nif2NOYkpcnMA6cVXSNebapMywr6lxgikJ01OODZQYywuTGIoOXwcn9FOa2X7E6fH9qLSQHxXYRPpCeXECU2VjVz5y6mKJqbJxtnS0yMy1SXHxem7j+MhSTkkMU9hbfI8RlJf6hb5KYfn6OTawhFTH+OMp7McEtuBHqyixKnmN5r5GpWMnL5XEEMvL3AolBVzHFMSlJM+FpcBUKanmwlB81YR+Ji81Nr6O+ycl9mMCA/imKHFh8uL09Ro6fc38aFWVj5W8EEvL/DSVzFBeKLDX+C77qvmwai4MS8n8u9GEPo6TKjnenB8R2MofrbK8UmAspi51/YW/69IXy0t9woTYNubaVOLCbU5iXQpDMf2NU2nlks/5G+cpTE3oo8Rwvu5r30+lsB8RGMHiQnmkvLB8zHZp6YgiU+lrTwtLNbG0zG+BMkNZoMSwlKxSWAqKUxcnMlxSZPiaL8f3wzR2Jq/4QW4usAt+tKrKxyUS6+a+KnlVElPbxtwKFgEnHZYYjxtMYaqMrObDcO4s5ZXiypSX78Vl5JlsfyKF3VxghJIEy4TlVYlrVD52yYvLR7UEtMb8Fiyv3Mcf/KqMfI/vMYRlJAuMf06BKWw0F4blZHJTaSE3FdjEzyb2tF7NfakScsm/d+zmvlhaCXcYY36Ss0RDj7HEcC6s+lkFl5JqUv8PrOfYUXNh+Y1kvnfE+THePIXdVGCEuuj8CZJtJ64ZaXH6UvIalZCJ5WV+CyUuXN8f13kujJMYp7AcS1xCzvysAtMYvm8KLbmZtJCbCWwifVXy4nmv1+hLxpn0heWjpWW2SCUzHksYAlI4oxSm1vN5+bdcSr7EeQmpjvGmKexmAiNYFpXE8sKzxFJeLLGZfzKEySvbXWiJWWTm3qjEhdtZxnECq1JYyonLR54Py+e/QoulJCYvNYZuIi3kJgJbmL74U+MlzsvBUfpSz+fkVSWwiNPjtLTMvYIyy3UcT5mGVBmJKWw0oc/zYZjAMNnlWPq1FHZ1gS34J0MsLy4f8xMDJaXENZO+ZspHddzG3ANSCnHad1FimMRwQr9KYX9j/K1kjin1s4pDnCex5Ou4byGxqwsM4FTD8sq2k1eXvrCsrJIXy6uSaSUxY+4Nllfu4/HF5SSOK05hSmKcwrCE5J9V8A9b89g4LV6dqwps4T8ZeqGlE9dsCVnJq5IYwh3CmHsCJcBCYHlxGYljLMtJNRc2SmHvtKS8DrSwZL/2XTuFXVVgBIsrLy5KLOXyCpSmOH0AABJXSURBVC1LrCsdVfJCiSl5VSVkYnmZe0WJC9exhKzmwtTPKqoUlgmMU1i2PBfGSSziVGhX52oCu8E/GeoSl5JXl8BYoJaW2TqVzFAgWEbyj1tTXjjeqgl9XvJ1coyluFQZice5iyunsKsJjGCZsbiUvDh1jdJXlcBYXrjg8VhkZot0KQzFleUcSozLyGxRXjMpTP0uDNNXVU5eRVrIVQQ2kb44BaHAuPSbSWBKXJ28drQglpbZKpXMeKxV1Y4qJasUhm3+Lc6FZSmZ30amzCJumMKuIjCCRdFdzE5eS9PXC7R7aFmgFpnZOpW4cDsFUiUwlBdP6KsUlo/n37DAsJSsJvMjrpzCLhbYxI9WUSL8SYASG5WOSlxLE1jE6XFaWmbrnKWbOB17KRMs9VA+KLEuhVWl5Ft8jzn8VhJlFnEqrqulsIsFRozS10heo7KRJbZEXpXE1LYx945KYZh2WGIzSWyUwngyP/+e58Ly/W6ewi4S2Ir0hSJTpWMlMiwrqwTG8mJxjSRmzFZRkuA+r6ZvcDKfU9jshD6mOfxJxT5+IIVdJDBCXTCWFyevSl4z+1T6YlGytBK+0cZskRQXr+c2jsVMRZjEVArDMYfC4n2cxPjHrfle+b45uZ+slhayWmAT6Yvlhckr2z/QqlKxKiVnS0eVxBDLy2wdJS5cZ3mhwFSYyDKymgfjxzHBvcb5j1txQl8d60UpbLXACJaEkpia+5opHzl9ofhYXtmyvBBLyzwqlcxQYigvHI+cwDBxVWVk/k2OZfXj1kxeKkSskhaySmAr0teMvLrEhclLJTCUF4tLXbjcb8wjUIkr4jT9pMg4gfE3kigvJTFMX2ouLF9f/axCHevqFLZKYATbdVZiLC8lMXwME1hVPuL7WlrmGalkliLJ8YGSSflgEstvJSuJ5T7+ZjLHI5aRN0thiwV2pfSFaWqJvFBgLC+nL/PMVOKK0CmMy0kcm7PfSP6N8zT2oylsscAItupSeXEC431V+urk5fRlnp1KZiivaoxWpWT3jSQ+X30jmb8NY4kli6SF7EdPQCbTVy4oFyUxltfM/BcLrJJXxOmxIBaZeVS6cZnbOFaq8TmqjkbTOzw+X0I7AtlFnDhmiksSmDqgfZxfmFexzMqLxcUS4/eztIz5ZBc6heU4xSSW4zR/AlGN1epnFTixn3/HCSzf86opbFpgC9JXXpDO7LPyquyOF57FNbS8MQ9MJS7c5rH6Eaciy3GKc2EjieXz1DeS2R7ifEL/ormwaYERShRcyr3QgvJiiY32czStSkglL0vLPCspCBwDOF4zDaXE+KcVKSSUlxqrPBfG30jm6/P7csiYkhayHz0hIq6ZviqJdQmMy8aRvBC+ccY8A12/V6GDA0c1XkdjlccrjtmuYkJ2ETE9F7YmgfGb48VAic2kryUXYySu4UUx5onYRV1KqrHLImOJzZSSS1IYl5LJohQ2TGCT6QvlNWtztVxaOiKWljGfjMauGrc4drsxqpZR1YTOKMfuTAq7JIHhOssr2yVlI16YKobyRagWZHgRjHlQdrE8hVXhA8dxlcBUCnuN71/lv8A6JrCA9roJjKgugJJXdwFmFpRXtntaLC1j5lBjhMcvjmMce2vHLgcQdEQ1fheN3VZgRflYmXtJDFUpbPYCjBIYsuhiGPOAdOKqxvFMAJmdv2YfdCHkTGSjMnJJAsM3mLkAXfLq6uiRuLqTDrFtjPlkJLMqjMxUUTNfwo0CSND6kCUCS0biUukrT/w15uU1Sl8WmTFzzIirGstqTHYSw7E+k8K6MTykFFhTPmbbnbg64e7E8fGZ9IUnjiy+AMY8GZXM1FhWIlszlnFMj8bymW+6MrIUGKHeAE+cTxZPeu0J58lWxg5Yt8iM6anENRrPKpQsHdMzCSzi/FiGzAos2YlFnWyVwtSJV/KaKR2RqRM2xpQyUymMA0knMR7nakxzKFFOmUYKbEH5yCfMpuUUxifOj3Wmdvoy5jIqcVVjuxrXM2O5Sl8sry6Jfa1XZeRMAlMvjCfOJ5snzAYenfALtNXJWlrGXIdOZjiulbxmJYaLCiQ8roPa4bieEVii5MUnXJlaSYxPDuU1c5IWmTHL6cTF21USY4l1Y7sKJZVHAtohSwQWoaVVneRIZK/0eJe8lMSS6ZM1xpzQyQzHXpfEZsa3GtdVQFk0nmcFxmasJFbJC09SnXB1ckpeFpkxl9GJq5OYSmI8jnl9JDEez9y2nAlMTOB38lIS4xNUtlYn1UnM0jLmNoxkVo3tLqxUY380tlv3qIn8M4ERo5NTJ4gnqmy9Rlp8chaZMZdRjW1cH431SmIsLTXGRxJL2rE9ElhSndye1keGruQ1klhSrRtj1tONsU5ea8c7e4PHuhKZZFZgyezJVTLjfUpe1YlVJzR1osaYM7oxxeNbjfVuTCtp8aLG9qLxPCOwnWiXnFwltEpe6uT4vY0x10eNNR7bsxLrXKDcwe+NbcmMwCLGEutE1gmtE1dA260bYy5nNNZGIpsZ6524FssrggTW/PfvT54GLR9QJaVOXDMnVB3P1EkaY0q6saXGuhqzM+NcbauxXrGLiLNvIk8EJsAnqzdSJzRzErzOS9B60p2gMeZy1JhT4x3HfTe+Kw+o8Y7vkbRjvhNY9YeVaKoTG51AJ7F8fWyNMbdFjblqjPN6N+6rca7GPVKO/U5giHqB6gAuWRB+fdzP+4wx6xmNs2psXroErSNT43tGYHxSM9tLlqC2OiFjzO8xM2Znl2Rmu2VGYAp+4dEBj5aA1hhz3+CYvWRBVo3/tQKLWCae0YGr15p5XWPM7VHjUo3PbpwrljhEconAOkYi6k5y9uSNMT9HFz66sazWr8Y1BVad4CxLnmuM+T2WjNVKelfhmgI7HBfeN8uS5xpjfo8lY1U5Ycnft1xTYAgeoDrYAy3qMWPM/dCNVXysGvs3GdOXCEwdcEUnrHwcW143xvwealyOxvHM3yxxiGStwPiNWVBLF3wtY8x9s3TcV3/D+xczIzB8YXxjfnx0EqOFXwPhY+B9xpj1qDGlxmA1Vi9ZEN43HOMzAovQL8Qng/sOEfFxXEYnMDqZ4UkYY27CzNjE8Y4tOoA9oF6LmRr3ncCqF+ADGUnpo1m6v2Oq/caY6zEaf9X4PlDL41s9L9+nG/f5uGSUwPAP+Q1xnzr42aU6YV4U5YkZY6boxpZauvE7Gufd2GanJO0YPxHY4XDgF1PwG+UJzJ5Id3LqZJPpkzLGLKYbazzOed/SRb1WQKs4RJw4KiLGCSzhN6jkNTqp9+YxJS91gnyS3UkbY2rUWFJjnMc7jud3WlfLGolNjesZgXXyUieHB6xOpDtBvkBKYgluT52sMeaLbvx00lJhRI159Tc4ptX4XiyxGYEhlcTUyanlrXmML4Q6uepEed0YU6PGzWi8KXktGd88xvF11die4nX0hCNKGkpcncTeoK1OVL1O/uNPdXK5P/9xaD5+tX8saswDweNnJK8147uTmXodNa6nRTYSGMoht7uTVVJCYb0V+3l5iXOBpawiToXFEsv9jKVmnomRADiQ5Honr2pMq4XH+we0LC9ekqHIzgR2OBwOx/91EcsBT3j2RPmER8sr/I36HwHEcf8H7WPU/tENNebRYTlk241nNZaXjmt+jSqFKal+bfM3kBHjBJZUEvuAdiSuf9D+i/OTzOUlvgVWyYrn7jidKVk5gZlnovrAVgmnCyOjcV2N7Ww5sXESQ490EpPMCizi/GT5pPHgKjv/K5bX45ICq/53TAhKLAVbUUnNmEdG9XkWRCcvJS2WFQtLBZQqgbFLgtaHLBFYMnPCM9JSApuVV8LzY2o+zJhnhUVQyYvH82wVlct/sD6SmPIGSywZimxGYPkiKQdeZqKmOuE/x+W/0AKr5IXvvYPnBjwfjzn/xphnBfs/px0s43AcdyHkP2h5PbeVyGZSWCUziRSYmMgPsc4SwxKyOnkW15/4PIb/ok5fyOH4vHzffXwfFz6fW8YJzTwi1aA/iJbHr6qiVLX032DB51Zl5GwCi9ynJvAj5hIY0p04yivns/4d1/PEX+NbWpi6cunSF77vPrTslMR43ZhnAQf9jLw4gHTi+n/H5T9ol0qMjyWgnWJWYPmiqoxU5eMbLXwhKnkpEan36+bKLDFj5uTFAqvSF4oKl/9Eq0TWzYEdoFVCaykF1pSR2eYb508d+AJgAssykaW1Vl6c2EYpTMnLQjOPhBrwB9GO5MUC48SFy/+F9U5enMBmS8hDRJTlY8R8AmOqi8ASe4nPk1DSqiTUvcd71MltJDFeN+ZRwQHfyStbVT2hwFBYuLDEUmQz5WNVQgattywRGL5oJjMlmH2MBbaHVskrxGvjhcZvLF/iVGD7499XElPbxjwCMsHEqSC4bEuh8NSPSl8sMJbYaB4M3wuPQR3nFK3AijIy4lxeuzgV2FucyqmTVgoHUWJMcfH8mZIYp7Bo1o15FKoUw0lHyUulr5z/6gSmEhhKjNMXJzCWWHKIiLZ8jFiWwCLqi5IHtItzib3E58kogVXJq7rA+A2mKkNZYiFaXjfmUVAC43SD4ujKxxSQmvf6P9FLrEpfKK8qfbXCYpYI7BB1CssLUiWxKh0pkaiL+xbfvx9Lic1O5ltg5lmoBKbGqhpj73H+i4FRCVlN5I8m8FGmLK1DRAzTV8SEwKCM/NpF6x/H9ZTFe5zKgxMXSwbpPhU6gXEK6wRmeZlHpkpeSmBc2nH5qL6BnBHYKH2hvCJOj20RQ4ERKoVlmwkMJZYpTAkr10cXlgW25EewXQpT28ZsEZlgQstrNM5QYtVPKHjyHiWG8vpH76HKR3nsM+krYlJggxSW25XElDyUvNSFxYu5RGAq5TmBmWfgIFocX2sEVv0OrJu8V98+KnlVIptiSmDEIT4lkG+Y63iRcn9KLESrLjBeTLyoI4HhFwQpLfyCAEWW28Y8GigBlALKK9ff41RilcCy/X9xKjLep346wSVqJ7HIdjZ9RSwQGKWwlFiuR3yLK3k/tir5qAutanKVvmbmwFQpmVhk5tHg8YTrHC6y7ebAqhQ2Wjh5jdIXMi0tZFpgEWcSi9AHgQkMUbLAi6ki7Z+o0xf/mHVNCWmBmUdACQzbTmDZvtHCk/koM17n5DU793UmsiXpK2KhwIhMYdXF41JSPYcvrhIYJ68U1zUEllhkZouowX6JwHjaphJZtWDqmhEXH+tiFgtsUErmgXA5ifCFreLsKHkt+R1YV0Ya8yhwmKiWqurpkhjLDCXHJeNM+kq+1pemr4gVAos4k1jEt8jwAJTERhcTPw3+xPdFUslLyWvJzygsMfNIKCnMCExVPpXI1DY+F6U1kteJrNbIK2KlwAglr4Qlpi4sxlq+kCp1vcZ32VilL1wP0fK6MVunEli2ONZYYigeFBEnK7WNrRIXy6uU2BpWC6woJUcSUxc2T/IlThPYK7SqZFybvpS4LDOzRdR4q+TFi0phHCKUpHidxZUtC7OU19r0FXGBwCIWS+wQn5LJ5+Y2X9CU1PuxfYtTaSlxjSbvZ5KXJWa2RDXocT8LA8eakhinMZaZkpZKXJW4riqviAsFFrFIYhHfaYxPihOYSlqVuCp5uXw0zwbLi9tZialExbKqSsUfk1fEFQQWMSWx3IcyUSeYQsoLlNtVuTgjrxlxWWhmi1QC4LE3IzElsypdqYVfk98zoL2KvCIidld6nYiIoG8mVQLiZU/rLKdKWvx3a+RlaZlHggfyUomhwJTM1H71GriEaK8mr4grCyxikcQizuVTJSuVtJS4LC/zzKyVmBLZTIvP59cN0V5VXhE3EFhEKbFcVzKrlkpw1RJNi1hg5hFRg7mSiZKYkpnarpag9dz+XLmBbG4isIgziUX0gqlEpISmHguxnlhg5lnoBIbrSji4b1QSVvtV+7lxI9HcTGDJII1xW8mL91XPT0YC6/Ybs0WqgSzTUNSpaSQs9XxsT9ZvJa7k5gKLOJNYxFhk2Xbpqmp5XW0b8wzw4FaS6doZYVWCvLm8In5IYMlCkal915KWhWYekW4wXyqz6rm8/iPiSn5UYBFSYhG1fCpBWVzG1Fwqsmq9+9vPHT8slB8XWDIpMrWvk9dovzHPTDXYyzQltuW+nxZX8msCSwqRRSyX00hao8eNeSRGA3tGZsP9vyWu5NcFhjQy+3rKhY8bY9bL7fPBO5LGXQkMmZAZsuS5xphPpgf/PUkLuVuBKRZKzRizgnuVlWJTAquw2IxZzpZEVfEQAjPGPCf7MMaYjWKBGWM2y/8P1EmzCHs8igwAAAAASUVORK5CYII=" }), ue2.createElement("path", { d: "M292.77,379.28,291.05,376c-6.46-12.34-21.57-41.2-37.17-65.83-5.24-8.26-10.51-16-15.29-22.94-7.64-11.16-17.13-25-17.23-29.16.58-18.1.18-60.92,0-74.16h9.82V165.17H105.38v18.76h13.21c-.15,13.24-.53,56,0,74.13-.1,4.14-9.6,18-17.24,29.19-4.76,7-10,14.69-15.28,22.94C70.52,334.82,55.41,363.68,49,376l-1.72,3.26c-6.65,12.59-6.72,29.77-.21,41.77,4.94,9.1,12.88,14.12,22.32,14.12H270.66c9.43,0,17.37-5,22.32-14.12C299.49,409.05,299.42,391.87,292.77,379.28Z", fill: "#fff" }), ue2.createElement("path", { d: "M270.71,381c-3.81-7.24-12.69-24.23-21.88-38.7-2.34-3.73-4.67-7.16-6.91-10.46,0,0-11.64,5.17-47.52,6.46s-41.94,11-62.13,9.07-34.59-15.53-34.59-15.53c-2.24,3.3-4.56,6.73-6.91,10.46C81.59,356.77,72.68,373.76,68.9,381l-1,1.93c-3.91,7.41-4,17.5-.12,24.57,2.92,5.35,7.57,8.29,13.12,8.29H258.72c5.55,0,10.21-2.94,13.13-8.29,3.81-7.07,3.78-17.16-.13-24.57Zm-165.15,2.58c-6.62,0-12-5.75-12-12.86s5.39-12.87,12-12.87,12,5.76,12,12.87S112.18,383.58,105.56,383.58Zm13.33,22.06a4.62,4.62,0,1,1,4.3-4.61A4.46,4.46,0,0,1,118.89,405.64Zm37.76-29.07a7.79,7.79,0,1,1,7.23-7.77A7.51,7.51,0,0,1,156.65,376.57Zm29.08,25.94a6.09,6.09,0,1,1,5.68-6.08A5.88,5.88,0,0,1,185.73,402.51Zm36.41-11.61c-7.13,0-12.91-6.21-12.91-13.88s5.78-13.87,12.91-13.87,13,6.22,13,13.87S229.31,390.9,222.14,390.9Zm13.35,14.74a4.62,4.62,0,1,1,4.3-4.61A4.46,4.46,0,0,1,235.49,405.64Z", fill: "#f65a8e" }), ue2.createElement("image", { width: "98", height: "98", transform: "translate(145 78)", opacity: "0.1", xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABiCAYAAACrpQYOAAAACXBIWXMAAAsSAAALEgHS3X78AAAL90lEQVR4Xu2d63LbOhKEm7KTc97/aTe+cX/IY7VaPRdSkqOtdVehAIIkCMyHBsjETpZ1XfGjv69Dd8GPvkc/IB5EPyAeRM/dBY+oZVmW7pqp1gfZJJcH6YfVLQO+RX8DzsOA2Bj0Ldd2SgPwnUD+Gohh4KtrJvd3coO/qPsOIN8Kogl+ds7VT+tYk6CXx/cEcncQRfCnweQ6Pd8FPxMP2pW/HcjdQCQAurpblZ2qgGd5VndzGDcHMQCwpdzlVZnVQZiUQ1/lW8K4GQgDIDvuAl4FfwImUwbABb8DcnMYNwEhEDoAWWCr8uS6kD6/A7AlufZuAuOqL+vGBZPgZccuuWsg5ThmTQB8FGWnFcfnrMAxDtfC2A2icEEX9HskmBy4hAD4oH9QeaEy38ttRP0SddfC2AUigeDyKh2K4+pclZw0oBp8TdHWB+V3d8ZmEAMIk8AfBrnWVWVImaUz2gX/XXIuczsOyBmMvdoEYiMEDVoWZJe6e7R91xe3tDgA7wCePvMD1S2U4/P6A3IYALDbFWMQBQQuZ7O+Sk+DaxykDgYwgxDpDefPeMe5FIwG+wv+HhgjEAMIHYAnU57mFYwpiNgXeAliAAEhjhdJASWC69xx1RI1AkFyg1UIDgDnXTpIOYOi0IHzfgHeDQwg8lccn+EgcFus2MxZu5eoFkTxraAdzgBwepZcyxUYbbtyBeCXJXVBpCccYXBbKt1z+DoO+C5XtCBI3DkOvoOQBZ+T1nVQJs5QOQgM4hUnNyhUbcelhXK+drNKEOSGzAUVBA18pF9JeQLEwchAdG54xflzoj2nDARMDnwC2rI8XesIhpFB+EW5S1uAXAtCnfBCbVdOiDbu5ooUhHFDlDM3RJAcgN84Bf63qcuAKIy9INgNrzhfkqK9DIRC4DemeLZzBQCMN+0tjggxBIbhHMFBz5JziHNHBwK4nJW6LL3iCOMF525gkOqCLAUAdUUEncutLIjkTcmlCgI74J8kd0DUGU8mKYhuNru9IdrWe92S9i7H8exwRSReosYQgN4REyBuaWIIkf4B8O9nngHJXJFByEDwGq6btHNCBFGd8C4p7mNXOBhnmixPHQjAD1QBMITMEf+aXGFkS1TlBl5WOBCxruv+oG4IKTj96GMY4Yp4Pi9RzpmtJiBYmRt0aeKAqiM4sTsyV3TL0gFHuaDqRh3tMby4Xh3AH3zPOH346QRkR+zWFhDVkpTBYAiROhgViHgOP5/dENIlhr+g9T63HzAEdlG0oa7QNHIB6wJE8doauQPCAHR50n0igzEFoY7Q2chLUwQ3gthBiMDrm1z28Rfj//hsz8FYgP7jrnMED9LByFxRLU8ORgXimdrOIDAIwM9yvoevURfEN0a2T1WTwU3ekTs6EKrMERyo6DS7IoOhqXLExA0hB0Kv1/PqBHX3xJmg8ghAaArC0c5gBITKGRmUDASDXuAHH9LX0CccZ7qDwEvSb5zDyCAwDDcxd2kKIpQB4HIETWdUBSR7a8pmoRs4z0J1RFynkOKNyDmA+1A5M1uiuD8Lmn1iKwgWz8asc+yQCoxC4uvYDW7Aqgj2AeevlgwplqNf8Bs0A6gmROcKngClJiAWk2fJQdDUQdHZ2LmBB66O0HMrTn2ItylN2keFMFmWFH6rCQiWzkAHp3IGw8gGrIPvQKgi4HpNwAkI1UTJ+qF9mbq01VYQIZ2RWcqAHJI8S9WAI2c3rOY4nuEgaPCvgaB9G7liL4gQ06+ABBSF4yC4wU5mHgOJ2X/AOYgp+AxCNzE0HgxhQbFhXwsCuAxI1C1SdjC4bpFzDkLkoDzTAad9Qtt6MuUKkN6T9S8DAjTOuAWISq5z2kkHyiU+p+1kivt4z3DAuyXI1WX95P4t+KalCegf5M5zh/V4MjhQzoqAh7LAH5K6KZgMSMj1rdShuyCRbohal22YWlZpkLPBTcosB6cK7jTw3aQZawKiC2AV+AxMXKPiui0B1gBU5Sx1ADIozhXu+aUmIFTdjP8w10xTSI9DW2acgpxA0QAf5Jy7B6a8WXtAsDSQCoH/cE3rOqBxrLnWbVUGQYFM4DCAaDvyrN7+5u1WEN2MroKtUDIgCmcqB22iDsqWBMpVWT2AOQgXGJ2lHHANfJb0+g5wyD2bNYXgpLNaA+2u0frsOFUHwgUgS1mQOb2bui3O4GMX/C2J75uqArPLCaELEPT5XXWQr4mAa/5O+TvOIbxLvgWKwth6rroWlO9VBSXV9IOu6ryDkDlAgVSJn/fx+UyeOCvOB1wByNpcTb0b6901BaFyA+UB6+yfJgckZli0f8AJggaqgjBN2djuCmgLiGyQOmC3JE2S3quvivg8DjguGB2EDr6rq2A4OLtATUCsuFwCqsFmA3+T8ps5z39pE/fHs+N5brPk865v1QRwfXFAGIwGP7QZQMiCWNd1/fzoiIFz/nWZpGrm8c+QvhXHUcduAI5ggByEzsaqP/FzS2+Uuz50QDooKOovNHFEiGE4CFthaBAiPdF1rBWXS5Wed/2JQMbzXwdJ++SA6LNcGmsLCFYGIwNQpfgJCv6lQjfj3Z7B5ysQ3BcO+IscV0Ayh0wAtGC2gqgAdG7QIER6xgmCguBnZCBWyh2EyBV+/NbQH8kn7uC2GUholbzVFEQ0WM1EB6NyQQTjGfmvUUVb7u+JQzxohsDBigDqZIjg/+ez/IfqFErmiswRDsYKwP5DWykIs2ED/qE68M4NLzguRQGBf2JCn5OBYMWgFEIH4oXSH5P4vHOIOkLBbNLUESqFkAFxLmAnRIogc/sfOP0kHoNiR0zcEP3I9ggOvjrjj1zv9ot4TjZJR9oDIhziHFFBiCWIAWiAQ9yW/r1xtjwyCIaQOVP3CQYRue4dDgQ/1wV/BGQLiGjMvcI6EDr42JQDRrbucxvsGAcs64eCiOBFMKvlye0Xk6Xpfo4o9okJjDecvxG5TZlnOM9mvt+9TYWy57sJ4ZYmdUXkDEP3CXWFPjeDsAJI/0XMLY5gMYwPnP4M6P2zzAF4wikA1TLDIN7gfxA5rp9MBG6L3ckufUEOg11SLU28PCmEsSu2guBGNQgBQ2f1E46DOOAcQAfhF05OusX+wDB4iVIYVaqWpgzGSC2IZHkC/IxccB7QQ5L0zUeXNPcbQ+6NyTnCgXCOyJapKg8Q6ga3JOmkLf+h3haEUTTm3pwWHDu34Bg8hqGBjLacG9yrbeYIdkMFooLhoGjS+zIIGYxSe0CEwiEMQQMSMBbkIHQpe8ZpWao2ar5/CsItUwyDgWg9A1A3VEvTCMYIRPOVHeWAwa5wie/tlqTqjzainQpE5QyGkblFATAIfoYG/0K3+Lc4nNgNcdzB4HsjZwgxA3Vv0GVJn6sgMmcolDdTznJN6oCr3ABsALHhm8LBUOkMjkGzE/iru3pjUncpiMwdzi1V4LU9fmYJoXMDsAGEEUMAjh3q5IIWg41XVV2SqmUpA7HiPHAdmK6skOMZCiG0CQKwEUTyV6hnl1BSMDxTOHCZEwJA9t3BbXF7CsWlCaQu+A6CAhlrEwhRwOCyA8DSgXzgGPRwxAHnbggQQO8I13YGZQLLteUApBCmbgB2gCBXfFXh0h0OxopjkKPDEXwHoPr24PYi1wBlQDJI2bVZ4G8KAdgBQuQghAKGdvxA+QdOQN7hl6MpiApIVnaBd8eaYMpf2goB2AlCXLGihqHuicQz/53K+pa0FYSmLKhdsDXBlDk/HuyAAOwEASCDEWVVDDrcEIHQwLvlyIFwwciCtiehKYfOxroXAoDr/9ct2S9c8HSJ0WC7ZUjvd8pgcDmrq45dOeTqrgIQuhoEUMKIPJvlVXJtAfmM3BLUrK7KQzeHANwIBDCCEXkGBKYcUldUs3Rr3tXZ41sBCN0MBJDC4HIGRst8TadpQLMgj4MP3B5A6KYggAsYwAxIV+dUBW1SdsdZ3d0AhG4OAmhh6HEXeFeXdboL9DjwwP2Dz7oLiJABAtRQqrpMUyhd/fHkPQNS6K4gQgkQoA74BEbX+e78Xwu86ltAhAogX5c05zONB/EogVd9KwjWAMrVetSgO/01EE574fwvBTzTQ4H4f9YBP3oI/YB4EP2AeBD9F8zejDcm4by3AAAAAElFTkSuQmCC" }), ue2.createElement("rect", { x: "171.16", y: "104.17", width: "45", height: "45", rx: "11.25", ry: "11.25", transform: "translate(-22.1 43.03) rotate(-12)", fill: "#fff" }), ue2.createElement("rect", { x: "179.16", y: "112.17", width: "29", height: "29", rx: "5.1", ry: "5.1", transform: "translate(-22.1 43.03) rotate(-12)", fill: "#f65a8e" }), ue2.createElement("image", { width: "108", height: "109", transform: "translate(161 2)", opacity: "0.1", xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAABtCAYAAABEOoRoAAAACXBIWXMAAAsSAAALEgHS3X78AAAOHUlEQVR4Xu2d0XLbOhJEm7Jzb/b/f3Y3tsR9kCdqtnowA1K245S7CjUgQFLAHDTIOLGyrOuKb30dnaoTvvVn6RvYF9M3sC+m5+qEj9SyLEt1TlfrX/pwXj5rXo+Es1dfEeqHAmtAqvpndHhifyLQdwc2gDSCcxRcd1Ld8zb6TJDvBiwBpW2dc7K+auBH+4HeOR8K8F2AGVjZcfe8rkaTcX2z55d97w3vocAKUK6eRa3PqAOmc87RtneB9zBgA1ijWJ2j9ZEqKDPHe/vc8UPBPQSYwNJ6Bqg65hjS4ypZWaKr+p7+4VgeBe0wsARWBakqem0cO1XJ5fqordPHsXO91g+DOwSsCcuVU3HsoM0Aq5JZnZeBmanHMcfrwYGk7wY2Aetk6ll08PS+rBlYGahunUu3HRQ39b3QdgEbwOK6QjhJ/ZS0V9CcjoDgegWEy6Xoh6lz3AXt6A9/XTLVOVx/orbToG0GmkuIS3p1PAPnguv4XLt+RnzOIhHLsiyz0KYdZtylDsuc9GSia8uggaLKQeC6llFfBoFjVtfro66fB4pTTjviMAfOwVJAXJ6prhA70HTyXSgVqBGcrLCDHChWnLcCc06bAkbuUldxUVgOEEeGxoWhaQmNgHXLDKhzox5jvOCqiKpd0KaAiSpoDlaUH3LswMU9nMtUDECPFYprd9GB4nim4xMdu3HGPVUbaB21gRl3cV2dpQ5jSD+oZPDUZeq00GpiB9bIVSNYWl7fIo8z+oDbWANqQIvxbmB1XNYGJqrc5WBp+ce0ZU5jaMD9qnSgKngKiuuZo14lPr3VX1HvAhdsxw8k4EZqAWu4K4PFWyGD4qLwMmjqMJ5kBWoEi0FlrmJQXHh8r7gfnxODC61vbWvlshawRJWzMlj/SlR4cX71AgJsgUWsII3cpc4KUAzrxcRq6wa2Y+S+37DQ0B5guooYlj6/dDsMMP9KcdDYad3n2B5nKSx2lrrqBdfxveA6tl+4HxsrPpfrp7fj+GyGVbqsBJZsh3E8chkn3cH6CQ8u2xo1Kc5ls9BGwHQbfKEy2rJZPIYnqmc7RakSmMhBcrB0W3QO+wkPTl9CRs+x0AjaJTl2zy/3FqjAfr2VGJcbD+DHcqJ6XBf1uAYA0jfGWWAqhuWgBaxn+O3wJ5XMZdlzTOUSNIJ3ScoIVriLt2odj1sYURiYQgvp8UZ7gY0cpsAyhzGw/2ALjJ9l7Nb4HOA+SRFngGlC1WH8YhHucs/VkH7W5e1c/ozo0/zxPVINgQ1e5/lDnLtOuE3MvXioy3Rr1JePoy8eGTxOoHuVz55dmdP1fvpcPOEe1pRmHOY+gN2l0EYvHpnT3LY4erhHVGBc7zjNOcw9u9zC4fso9Cgxft4aFdzQWaEZYCG1MkNTYA7a6BX/J7W5N0VeHKC4mliBc1ti5jDdCvlzM9gx9vgDNucn5pFBWwD/er8HWCgD9kRRt8XMaQGJ4z8YA4ukhR4FjV/p9RWePzdzJ7+sKLQz7mGxdAHeaRaYrmyGNYLmHBbgNHJRYNkzLOSgRRwVTjpDe8b2JxkjWAHpB8Z/VtM5OIelSoEVf2COqA7LoGXbo4PIAPlNUZ8dCo0nO+M2dZk+d9TRfF2A4rG6RabbYTaHUl2H6Y35WKFxUVCZ4xQcA51xWKhyGtczYOqquCbOe8V1YcVzTsecQavGPlQXWCgDpyVzmYPWKbOTrtwWUbfEC27PGgeMgf7A9jnFgEbOGrlsQbEtzgILjSA5WAzNFZ2sHkfRCbPcZCtwDlq8GMT9uf8Httsg/+RDF9fIXQoKaMAC9gML8crIwDG0ChxP0rXpqu+6jI8zYCf41+wo4Sx1k259XNcFNhqvagHuX+1ngGmSHCwtCm0vIC0dYEDtOC16P3bXM26v527sujB5rAqN4U2BnAEG1JB4gDOlAqQJ0Ak7ZQC4HscXbPtCF9wDyRZcNsYsZ6DIWjDYGmeBqR4FbZG63isroKhysBap83boYAYkfglxYDJQOtbDssCSf3/4uxvbQbjBucl0ip4/SoAbW1cL7qGFm/h5pvNw86zGCXMcbZliXHfqOKy6ccTOZBSMJqOavEsGKxur2x5V0R/QdNzZ+GDa+LP0c6txDNUBFnIDBO7btDjHqJuya7PksDoJ0HPYXe6+o8+txvMIPfQZNprYqLitb3S+k0ue61dpAhZsoWlbHOt4svvPaJU4pVN1wkA6EQXjIPE5GSR3T24P8TGf5+T6H5H8jvhtdBck1l5gLllaOg/pkctYFYyu3LluUczck7UiB9SFtblW/z6sC4wnovVRWwZqVLJ7c/sRda7PkusAKCTXr+3a14XZBgbcJ871d0FVACstEmc1c32VcAfOOc1Bjb62ZoCpsmQfKSw+7iT2ERq5ZAQgg5WByuCVugM2+IvLaOPkVgC4ZC8g2f0g9Y9WltBZJ3X6tJ6q47AsYeoAB8jVq8L3ZD0S3CoxUxfOitvPI6vC955WBaxKUuaO2QKJ1ee+pzSx3OZK/D1aBUpB672BbbtVBSyUgdHjIwUUQx8BzgHidk10QKrgOBAO1pS6wEJZQvfAZLlrPkMjcFwflYvEDOA0LGAemJNzRwUqg5fVM+2adCJd+R1QF6l3YbGm5rAHWAbA9WWQ+JpQB1BIkzuj6nyX0BGs0TOM/2JUobnjUh1gVSIdtIiZizKIe9WaLHLQuvozSEcKpJ5p2D/z0/pRYjNoR6ST4/rydsyfo/0qlwhNpsaqqMuqN0a9LyhyfQVgv9JoBpjKOWePsklp/wiC9t1NtNlfAYqSPa/cNqkAYWJbe4HthQPkYLSfz8vOjXFoX8dhDsSoLwOkzuq88oPilPYCc+oMgAeryci2k8vbNZ3nLXDbLkfS/irBGaBsS5zZHiNWYwawH5h+ILePJjuK7rzYduM4oK3Uvsftmqhq3CMYHUDaDhNb2gsM2H6QfqibcDcJUfQNUt8sGRr3dxMwC8eV+NfAWX8Fa1ozwPgDtZ37L6aeTfAs7fpLCAzhhBukDKQqc58b80ypQFWwdgPsAIsk8XHErGST1AnzL84psPiMJ7rvYgqwHV8FjpNTAXMLys2jAucghXQ8Q3WAOenKqEAxnKzwLxDwPVfkf5eGQQw5gNm4FUxWXpN2B2sEzsFaAaRfKzsLzK3ODqgKWvxaqjoh7s0wK5d1wI2A8bjOEl37DDhd6NOaBQbcrxBdSSNXvUjhXyRQZz3jBusM77AZaHuA8biznSGDN3IWkrZSXWB6UwdtBlZ8jYLCinvHffgX5CpgDKkCBvjxx7h1YXWgKSx1Gi/uNiBVBSxurKs/g5WtVPfVP0/YJhdyfdxDf6VngQeH5JgjK+YWSYwE85h/JZFBZvAyaJnjWqqAsZyVeeUwqIgZqGwbjMnytwd0gWUAXdS5uIUS4+byInWFN7MtToEK3QFb13V9+5dTK7YTjLbMYdlWGLDcV//EveM+fH0GrAsNpq6aBfY/0+acpsAcOFYb4KzDeGW6bdBthU+4TlSfQXqfuNZ9dcKJ4mLiDLiQm4sCe8F17FoqlzloK0XAw1sBDP+niBlgIeewM25vczzhkxROWgbLfT9H9mupHWCZy7LFp7tDOCuD5p5rHYe1HKXqANMVoLA06ZrYrrMyd3WBVfBAMeQWnjqMof0XY7e5bTHAOVjT0CpgK+5XZQbtjGvSFJpuR5og3j5H3yTjXjwUUgeaKlt4+hwLQAytcpi6LIPWBmeB0YvH76a3uGCb8EgEAwtobmVnq/kV17Fk2+Gswxw4UGTFeFZsE63AOtDUYQqLoYHi7/qj/2cIXRWc/IWiW9V8DSclvlFGYbkXjpHDZoDpAtKdQrfFAMdbYUBTl2Xb4QhWWymw5uv95a2dYYEia5SU6tk1eq13bnPgYGIkjZOqztdnmXsJ6TosK23NOIxhxTGDC2hA7ix9TgSsF9w7q4JVbYtZceKx6XMsgxbgqmcYg8sgtaF1gWUuC4cBPhkK60wx3PSKe1DZc6sDqoLmFONbcRtjJF63Rgan9a7DIPVrw9H/Pyx5+WCXRRuDY+ngYvDxkpGBei9YI2CZy864wVBwWhQWP8O07FLXYYCHBVwHdIIHp4l4ws1d57fjcNjJxAyUgslARTuoDRR1QfFYeUt7laIA1VnuhSPbEleg5y6gAUxcFtCiHmJQPKgnquvqdc+pRz+vXHFywNghvD2OCrtytB1C6m2VwAALDbhO3kHTpMRAT9jCOqN206NBaQTuXcau4K2N3TaKuh2OtsQpdwFNYEYjaAw2Jq5AuO2MHNARUEiOOYZcQtVpDl6AcueMQEHqbbWBNX76wQpw4SyF92hAaLTDxNDIZW6LVHjaz9cPQc24C5gABkxBW3FLFENbcIMWUB0Y1wbT5tpR1Flu3A4aw9PnU1acu3hh7NIUMGAIbaTY9hhi1C/StwfGCE4WVeqyzG3OeQ5wCWvWXQDm/2v7kEADxglyCR61Z9cB+9o4shZsF1wGTUGMIEVd7wOKu2ABB4ABQ2hcr5LaTbZLvOvXdo5aZ2lSM5dkEF1x990NCzgILLQTXNQ753bOqdq07sTJ0KR3iruO4yFYwIOAARYa0Evc3oR36lWfSoFpHIFxoDb1o7CABwILNcDNHs+c2znuSpOeuYb7XP/14EGJfjiwUAIO8Ansnvvo85w0IZXrRuddDx6Y5HcDxhrAA8ZJ3NNXQan6XUJaYPT4kaBCHwKMVcBjdc7rnAP0z1NV8NK294AFfAIw1QRA1ex1s+ePEpP2vReo0KcDy3QApOrofcoEvTck1h8LrNIDge7SR0JifVlgXR0F+1lgMv31wP42naoTvvVn6RvYF9M3sC+m/wOoIB02BJbCUQAAAABJRU5ErkJggg==" }), ue2.createElement("rect", { x: "187.35", y: "28.49", width: "55.89", height: "55.89", rx: "11.25", ry: "11.25", transform: "translate(136.67 264.66) rotate(-84)", fill: "#fff" }), ue2.createElement("rect", { x: "197.29", y: "38.42", width: "36.02", height: "36.02", rx: "5.1", ry: "5.1", transform: "translate(7.08 -22.2) rotate(6)", fill: "#0ab6d4" }), ue2.createElement("image", { width: "84", height: "84", transform: "translate(115 45)", opacity: "0.1", xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAYAAAAcaxDBAAAACXBIWXMAAAsSAAALEgHS3X78AAAJGElEQVR4Xu2c63LjNhSDISfZ7vs/bbuJrf6IsYIhHF5sxdvOBDNneCRRlPgJJGU7k2VdV3zrOJ16Fb41p2+gB+sb6MF67VV4hpZlWXp1ktb/4AKwPPue7oU3qj8N+WlAOyDvhdy9+WcD/nKgBcgK4CjY1k3HY88C+2VAA8jedrWvUrpx3/d0uIcDnQCp+3vnUD2IVZ62vwTsoUANZi+vSs9dPYBetvLDoR4GdADm0shT2ZIDqmCOQj4M7CFAC5gtkBqpDqV5z40Otsq19PxhsA8DbcBsQWyFt0O1XNmLdE4qPzcegPIQ0ABzBOKps51gqiqYF9v2Y14/tfVb90K9+6PnBMyT5Sfb78cd6ILbzragec5ywQa1pxX47N89UO9y6CDMBC6Fg05uBbIrHd5IXj0Qv8ZnMglo2qF3wPR4KfLkWEiZgCZwFwBnydmWOlXPp3hcy2mnTjm0swApTEJJ8F4kEmCFqtdRoAmigzyHfR7u8oedOu3Qq1ow3ZkvE+Fu1QcI7AEkeIzTdd9J9rnzeT7r8hq/HTqrYaDFR8oUCeZrKH2fQ9U2ga2DCjOBZHxgA8t2WJftUBVU5sNDfxioqAJ7Qg0zxZvkCrZyqQL1Ya4AP67xIjnvjzCBfT8SVNYbhjoEVNypZeVOdZsDfCtyBZtcSumQpzsdpIY+HILFtVS41AW31wMmp4AhoKYENbkzwfxR5FpXoVZAdagr0Hcp37Hdi08hDo1acetS3Q+g79Iu0OBOzRNUd6gC9FCwDlVdCuyHvA51Qny7lnoPv9AGuUoQZnLkkEu7QAuloV451GH+ZaU69U3OdaDAfmVXZzLU5a3pg+2tkrOs6nbVBDq4sjvI5E5C/SuEQ+WD0HYpnT8ZOsx/XaM3bWjOeMHmUkL1+guAtTXsRx3aG+4EWy1G6s6f2GD+lP2s58O+5dDkTp8yvA22o23pkNeyAltqFChw+6Qrd56wdcjnT3XlT2xgCZXhi1MFVFdzujPB1HMVpAPla5OCXLCB1LxcnEqgxWLE7WrYjzhUgapb6VKdS3tDXh2aFjN/GArRg+dxUdLYDXsUGnVogli51BckX+VbUH3Fr4CqQwk0LUJ+Dh+E5jxPwSaoVHPojwJ1tWCmRclhOlBCdaAc8g5HFySHr65yV+pi9iq59oP9ItQpzQJ1Z1ZgfciPQFWghFq5TaH4AuYw/X2V8YrtI+rLtU6CqW12FYE2XubVLQ4yDfnWsK9eo3QO9ZXegaY6wK0jCfAHtilCFz3vQzXUVQuQX59GHJoadqdWQz5BVbAOVd9JR4C6g1MdnWv1nvReK6CwsuvSEaCUP7kE1cESpg99heqAR4ByUfJjHOLqSJ2THWbPmQ6zC3UGKNWCmYC6WxVumhJ6cyihacer1b8FcsaZqibUUaDpIjNOTVAdrO5TAMmhFUxdqByiw+T9Vn3RawxrB7TzQu/7K5gtsFW8FrkDTTCrNpMT2V41zJOGwY461NV7qglqD653vgUU12MK06/Vg+cge2AXHLQojTy5Cmoq/bg+AM9TJ1mHn2pSGyMxqy5MoA/UL6w3o6XnabvXud65VLq+q3VsCMy96gGdUQv+I7oHwDpQavg+1/A9HAnU5TfnucfFSuan4jyvf5GottN1K5AVxCbcI4HqTWnpgFKHq6Do9NHzzp3jo3AddBMm8BhQvyi3kyNSh/1rtPRxkucr0DWcMxJ+3RHA0+oB1c5wOz0xBecAW538CNs69ypcvQ7rVpHarsAqwJ5zqRVA/HunHlBgD5X7qmjB9J8t0icihfdi+yDt+hfMH40ygdZ7TC6FlMMaAUqlizjACqZ3soJJsY30Ys9j2hZ/7XyX0q+nUN2x1bCH5V3tgK7rul4/fqozmftF3JmVI7Xj/hmbw5rSthLQ1dr+1Qn9VdTd6u6snDqsGYdSFUx1ZhraClVBVgvOq9XhA1WHKtB/LFpQdegnsHc7dQZoD2Q1zOlIB5lg6gOpvm1S6A70b8xB7cGkdvmjf+jgYuf5mbqC+YL9V2gOU9tTmKNA6Xp3aAW1Nex7YLsaAcoG9b2w5dAPbPAINX1xwbYJiJ1sfR8K3F6LgBTo38hOfbcg0AtuoSaYw2B7QFfcdp6lQz1jg0Y4J4sE093tQNMcyvMIRFf5BDUNe3epwlSokNLzqAhUVvp4WOKCz44qVMJccAsDaMN8x+2f4ihQvgX4Q9SFz4e9ujQN+TSHDg33h/4+9CptQFdbX3nPuHVia5j7NPEDt4tYz6FpHk1Obc2jCaq7swSbNAJ0xX4BYUmoC/YwFaKem4C84bOjPn+mOTSdz3lUneqOrVb5UXeuQNudQANoGPbpAiNQU313Z/qxLi1m2ll1ly5Oya2jq/yKPtimRhwK7F3KfQqJatVToOouDtvkzuRQdam3wXC4szBVw1CbQAdd6jDPyHKYPgc6TB3uXJTYjgL1dhxs9brkw50w9Ro3/e0Nd2DcocDmUm30gu3lHqjnWoXp858Pc3dn5dAVGxRCUqemsuXOCDFsN9UFai4lVOZenov9BJpcSqgtmDofa8fZToLqcZaS57SgTrsTGAAK7KACGay7tXLoi5Tna/mBDWQFVOVtnkMkiB9S34e6Q4WUwxoCaiLMdLEL6s6fsAdLgArR584e0BV7xyXAPsw5mipX/s5H3QlMAC2Gvt8AFw91qQddTHeecevIyp3VPHoJ4WB9f3Kltr1tTMAEJoACXagLNocqBO24A9N9C/Yg+YDcoUAfai/Sw2ZfpiCqpv4BAWXzqTtoKcKHcYKoMDW0feC24+o0LR1ecmUT5qw7gTuBAsNQNU/AetsJJrAH6tGCyNzP13bvggk8ABQooWqewKRwkAi5qwfVQabwdj6TB6A8BBTYQQX2ECpAlRMrkJrrTTucEYBfAhM4ACjQhKr5COBW/aQEZibn9mdyAIxDgFKDYDVPQNPxliq3jZafGweBOBQo1QGr2z3gnrui05ChVflhMIEvAkpNgB3drjQEzrePBEl9KVCq+H1qdN+sUod2+74CJvAkoFTjhz/gGJhU2amvAkk9FaiqA9c1Oo/mCk/s5B8D6poE3NUzIar+M0BbasH+U+Aq/S+A/p90wrcO1TfQg/UN9GD9C5fFfixOgG6sAAAAAElFTkSuQmCC" }), ue2.createElement("rect", { x: "140.96", y: "70.65", width: "32.13", height: "32.13", rx: "11.25", ry: "11.25", transform: "translate(19.8 202.23) rotate(-69)", fill: "#fff" }), ue2.createElement("rect", { x: "146.68", y: "76.36", width: "20.7", height: "20.7", rx: "5.1", ry: "5.1", transform: "translate(41.5 -50.51) rotate(21)", fill: "#fcee21" }));
};
var Gr = function() {
  var t3 = (0, import_react5.useContext)(A), n4 = t3.bricks, r3 = t3.pageTypes, a2 = t3.responsiveBreakpoints, o2 = (0, import_react5.useContext)(qt).setCurrentPage, i2 = v((0, import_react5.useState)(null), 2), l2 = i2[0], s3 = i2[1], d2 = v((0, import_react5.useState)([]), 2), u2 = d2[0], m2 = d2[1], p3 = v((0, import_react5.useState)(p(p({}, Pe), { type: "rb-playground" })), 2), h3 = p3[0], b3 = p3[1], v3 = v((0, import_react5.useState)(null), 2), x2 = v3[0], y3 = v3[1], w2 = v((0, import_react5.useState)(true), 2), k3 = w2[0], E3 = w2[1], C2 = v((0, import_react5.useState)(a2[a2.length - 1]), 2), A3 = C2[0], N2 = C2[1];
  return (0, import_react5.useEffect)(function() {
    var e2;
    if (l2) {
      var t4 = "playground_".concat(v4_default());
      if (l2.type === b.PlaygroundSelectedItemType.Block) {
        var a3 = n4[l2.name], i3 = v4_default();
        if (y3(i3), a3) {
          var s4 = a3.schema.getDefaultProps ? a3.schema.getDefaultProps() : {};
          ((e2 = a3.schema.repeaterItems) === null || e2 === void 0 ? void 0 : e2.length) && (s4 = Object.keys(s4).reduce(function(e3, t5) {
            var n5, r4, o3, i4, l3 = s4[t5];
            if (!Array.isArray(l3))
              return p(p({}, e3), ((n5 = {})[t5] = l3, n5));
            var d4 = (i4 = a3.schema.repeaterItems) === null || i4 === void 0 ? void 0 : i4.find(function(e4) {
              return e4.name === t5;
            });
            if (!d4)
              return p(p({}, e3), ((r4 = {})[t5] = l3, r4));
            var u4 = l3.map(function(e4) {
              return { id: v4_default(), type: d4.itemType, props: p({}, e4) };
            });
            return p(p({}, e3), ((o3 = {})[t5] = u4, o3));
          }, {}));
          var d3 = { id: i3, type: l2.name, props: s4 };
          m2([d3]), b3(p(p({}, h3), { id: "", name: l2.label, slug: l2.name })), o2({ pageId: "" });
        }
      } else {
        var u3 = r3.find(function(e3) {
          return e3.name === l2.name;
        });
        u3 && (m2(u3.getDefaultContent ? Ie(n4, rr(n4, u3), u3.allowedBlockTypes, u3.excludedBlockTypes).blocks : []), b3(p(p({}, h3), { id: t4, name: l2.label, slug: l2.name })), o2({ pageId: t4 }));
      }
    }
  }, [l2]), ue2.createElement(Qr.Provider, { value: { selectedItem: l2, setSelectedItem: s3 } }, ue2.createElement("div", { className: "w-full pt-10 mx-auto flex justify-between" }, ue2.createElement(qr, null), l2 ? ue2.createElement("div", { className: "flex-1" }, ue2.createElement(pr, { page: h3, sidebarOpen: k3, setSidebarOpen: E3, devicePreview: A3, setDevicePreview: N2, isPlayground: true }), ue2.createElement(Hr, { page: h3, content: u2, onChange: m2, handleChangePageValue: function() {
  }, locked: l2.type === b.PlaygroundSelectedItemType.Block, playgroundSelectedItem: l2, playgroundBlockId: x2, sidebarOpen: k3, devicePreview: A3, isPlayground: true })) : ue2.createElement("div", { className: "flex-1 flex flex-col justify-center items-center pt-12" }, ue2.createElement("div", { style: { width: 200, height: 200 } }, ue2.createElement(Zr, { className: "w-full h-full" })), ue2.createElement("p", { className: "mt-8 text-lg" }, "Here you can test your content Bricks and Page types."))));
};
var _r = function(e2) {
  return e2 === void 0 && (e2 = b.DeployEnvironment.Staging), useMutation(function() {
    return f(void 0, void 0, void 0, function() {
      return g(this, function(t3) {
        switch (t3.label) {
          case 0:
            return [4, import_axios.default.post("/admin/deploy", { env: e2 }).then(function(e3) {
              return e3.data;
            })];
          case 1:
            return [2, t3.sent()];
        }
      });
    });
  }, { onSuccess: function(t3) {
    t3.result === "OK" ? index_es_default.success("Rebuild requested on ".concat(e2, " environment"), { position: "bottom-right" }) : index_es_default.warn("The webhook returned an error: ".concat(t3.message), { position: "bottom-right" });
  }, onError: function() {
    index_es_default.error("An error occurred while requesting rebuild");
  } });
};
var $r = function() {
  var e2 = localStorage.getItem(ve), t3 = Ee("t");
  return useQuery("getDashboardToken", function() {
    return f(void 0, void 0, void 0, function() {
      return g(this, function(e3) {
        switch (e3.label) {
          case 0:
            return [4, import_axios.default.get("/admin/session/get_dashboard_token")];
          case 1:
            return [2, e3.sent().data.authToken];
        }
      });
    });
  }, { enabled: !!t3 || !!e2, staleTime: 18e5 });
};
var ea = function() {
  var e2 = (0, import_react5.useContext)(A).appId, t3 = Pr(e2).data, n4 = _r(b.DeployEnvironment.Production), r3 = _r(b.DeployEnvironment.Staging), a2 = $r().data;
  return ue2.createElement("div", { className: "mt-20 py-16 px-20 max-w-3xl bg-white mx-auto" }, ue2.createElement("h2", { className: "text-lg font-semibold text-gray-700 mb-6 flex items-center" }, ue2.createElement("div", { className: "mr-2" }, t3 == null ? void 0 : t3.appName), t3 && ue2.createElement("div", { className: "inline-block text-white text-xs font-bold uppercase tracking-wide py-px px-2 rounded-sm", style: { backgroundColor: t3.plan.toLowerCase() === "enterprise" ? "#8a5df5" : t3.plan.toLowerCase() === "pro" ? "#3c81f6" : t3.plan.toLowerCase() === "essential" ? "#13b981" : "#84cc18" } }, t3.plan)), ue2.createElement("div", { className: "flex space-x-4" }, ue2.createElement("button", { type: "button", disabled: !((t3 == null ? void 0 : t3.deployHookStagingUrl) && (t3 == null ? void 0 : t3.canDeployStaging)), onClick: function() {
    r3.mutate();
  }, className: "flex-1 bg-blue-500 hover:bg-blue-600 hover:shadow-lg text-white font-semibold py-3 px-4 rounded disabled:opacity-75 disabled:cursor-not-allowed" }, "Deploy to Staging"), ue2.createElement("button", { type: "button", disabled: !((t3 == null ? void 0 : t3.deployHookUrl) && (t3 == null ? void 0 : t3.canDeploy)), onClick: function() {
    n4.mutate();
  }, className: "flex-1 bg-pink-500 hover:bg-pink-600 hover:shadow-lg text-white font-semibold py-2 px-4 rounded disabled:opacity-75 disabled:cursor-not-allowed" }, "Deploy to Production")), (t3 == null ? void 0 : t3.isAdmin) && a2 && ue2.createElement("div", { className: "py-6" }, ue2.createElement("h2", { className: "mt-6 text-lg font-semibold text-gray-700 mb-4 flex items-center" }, "App Settings"), ue2.createElement("p", { className: "mb-6 text-gray-500" }, "Shortcuts to reach the React Bricks Dashboard for this app."), ue2.createElement("div", null, ue2.createElement("div", { className: "flex space-x-4" }, ue2.createElement("a", { href: "https://dashboard.reactbricks.com/apps/".concat(e2, "/plan?t=").concat(a2), target: "_blank", className: "flex-1 py-2 px-4 border rounded mb-4 hover:bg-pink-100 hover:border-pink-400 hover:shadow-lg transition-all" }, ue2.createElement("h3", { className: "flex items-center" }, ue2.createElement(FiShoppingCart, { className: "text-lg text-pink-500 mr-2" }), ue2.createElement("span", null, "Upgrade or change plan"))), ue2.createElement("a", { href: "https://dashboard.reactbricks.com/apps/".concat(e2, "/users?t=").concat(a2), target: "_blank", className: "flex-1 py-2 px-4 border rounded mb-4 hover:bg-pink-100 hover:border-pink-400 hover:shadow-lg transition-all" }, ue2.createElement("h3", { className: "flex items-center" }, ue2.createElement(FiUsers, { className: "text-lg text-pink-500 mr-2" }), ue2.createElement("span", null, "Users")))), ue2.createElement("div", { className: "flex space-x-4" }, ue2.createElement("a", { href: "https://dashboard.reactbricks.com/apps/".concat(e2, "/web-hooks?t=").concat(a2), target: "_blank", className: "flex-1 py-2 px-4 border rounded mb-4 hover:bg-pink-100 hover:border-pink-400 hover:shadow-lg transition-all" }, ue2.createElement("h3", { className: "flex items-center" }, ue2.createElement(FiCpu, { className: "text-lg text-pink-500 mr-2" }), ue2.createElement("span", null, "Deploy hooks"))), ue2.createElement("a", { href: "https://dashboard.reactbricks.com/apps/".concat(e2, "/languages?t=").concat(a2), target: "_blank", className: "flex-1 py-2 px-4 border rounded mb-4 hover:bg-pink-100 hover:border-pink-400 hover:shadow-lg transition-all" }, ue2.createElement("h3", { className: "flex items-center" }, ue2.createElement(FiGlobe, { className: "text-lg text-pink-500 mr-2" }), ue2.createElement("span", null, "Languages (i18n)")))), ue2.createElement("div", { className: "flex space-x-4" }, ue2.createElement("a", { href: "https://dashboard.reactbricks.com/apps/".concat(e2, "/history?t=").concat(a2), target: "_blank", className: "flex-1 py-2 px-4 border rounded mb-4 hover:bg-pink-100 hover:border-pink-400 hover:shadow-lg transition-all" }, ue2.createElement("h3", { className: "flex items-center" }, ue2.createElement(FiClock, { className: "text-lg text-pink-500 mr-2" }), ue2.createElement("span", null, "Change history"))), ue2.createElement("a", { href: "https://dashboard.reactbricks.com/apps/".concat(e2, "/backup-restore?t=").concat(a2), target: "_blank", className: "flex-1 py-2 px-4 border rounded mb-4 hover:bg-pink-100 hover:border-pink-400 hover:shadow-lg transition-all" }, ue2.createElement("h3", { className: "flex items-center" }, ue2.createElement(FiUmbrella, { className: "text-lg text-pink-500 mr-2" }), ue2.createElement("span", null, "Backup and restore")))))));
};
var ta = function(t3) {
  var n4 = t3.children;
  t3.styles, t3.stylesheets;
  var r3 = t3.head, a2 = m(t3, ["children", "styles", "stylesheets", "head"]), o2 = v((0, import_react5.useState)(null), 2), i2 = o2[0], l2 = o2[1], s3 = v((0, import_react5.useState)(null), 2), u2 = s3[0], m2 = s3[1], p3 = v((0, import_react5.useState)(false), 2), g3 = p3[0], f3 = p3[1], h3 = (0, import_react5.useRef)(null);
  (0, import_react5.useEffect)(function() {
    if (g3) {
      var e2 = h3.current.contentDocument.head;
      if (l2(e2), !u2) {
        var t4 = h3.current.contentDocument.body;
        m2(t4);
      }
    }
  }, [g3]);
  return import_react5.default.createElement("iframe", p({ ref: h3, srcDoc: "<!DOCTYPE html>", title: "content" }, a2, { onLoad: function(e2) {
    e2.defaultPrevented || e2.target.contentDocument && f3(true);
  } }), i2 && import_react_dom4.default.createPortal(r3, i2), u2 && import_react_dom4.default.createPortal(n4, u2));
};
var na = function() {
  var e2 = function() {
    var e3 = useQueryClient();
    return useMutation(function(e4) {
      var t4 = e4.appId, n5 = e4.email, r4 = e4.password;
      return f(void 0, void 0, void 0, function() {
        return g(this, function(e5) {
          switch (e5.label) {
            case 0:
              return [4, import_axios.default.post("/admin/session", { appId: t4, email: n5, password: r4 }).then(function(e6) {
                return e6.data;
              })];
            case 1:
              return [2, e5.sent()];
          }
        });
      });
    }, { onSuccess: function() {
      e3.invalidateQueries("session");
    }, onError: function() {
    } });
  }(), t3 = useQueryClient(), n4 = (0, import_react5.useContext)(A), r3 = n4.appId, a2 = n4.navigate, o2 = n4.editorPath, i2 = n4.loginPath;
  return { loginUser: function(t4, n5) {
    return f(void 0, void 0, void 0, function() {
      var i3, l2;
      return g(this, function(c2) {
        switch (c2.label) {
          case 0:
            i3 = { appId: r3, email: t4, password: n5 }, c2.label = 1;
          case 1:
            return c2.trys.push([1, 3, , 4]), [4, e2.mutateAsync(i3)];
          case 2:
            return (l2 = c2.sent()) && l2.authToken ? (localStorage.setItem(ve, l2.authToken), a2(o2), [2, l2]) : [2, null];
          case 3:
            return c2.sent(), [2, null];
          case 4:
            return [2];
        }
      });
    });
  }, logoutUser: function() {
    localStorage.removeItem(ve), t3.clear(), a2(i2);
  } };
};
var ra = function(e2) {
  var t3 = e2.dismissPopup, n4 = $r().data;
  return ue2.createElement("div", { className: "absolute bg-white border border-pink-400 shadow-lg", style: { top: 33, right: 0, width: 300, padding: "1rem 1.5rem 1rem" } }, ue2.createElement("p", { className: "font-semibold mb-2 text-pink-700" }, "Email not verified"), ue2.createElement("p", { className: "text-sm text-gray-500 mb-3" }, "Your email address hasn't been verified, yet. Some actions may be limited by this."), ue2.createElement("div", { className: "flex space-x-4" }, ue2.createElement("button", { type: "button", className: "px-6 py-2 bg-blue-500 hover:bg-blue-600 hover:shadow-lg text-sm leading-none text-white font-semibold rounded disabled:opacity-75 disabled:cursor-not-allowed", onClick: function() {
    window.open("https://dashboard.reactbricks.com/verify-email?t=".concat(n4));
  } }, "Verify now"), ue2.createElement("button", { type: "button", className: "px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-700 hover:shadow-lg text-sm leading-none font-semibold rounded disabled:opacity-75 disabled:cursor-not-allowed", onClick: t3 }, "Postpone")));
};
var aa = function(t3) {
  var n4 = t3.renderMenu, r3 = t3.designSystemTitle, a2 = na().logoutUser, o2 = (0, import_react5.useContext)(A), i2 = o2.appId, l2 = o2.logo, c2 = Pr(i2).data, s3 = v((0, import_react5.useState)(false), 2), d2 = s3[0], u2 = s3[1];
  return ue2.createElement("div", { className: "fixed top-0 inset-x-0 flex bg-white shadow z-50 h-10" }, ue2.createElement("div", { className: "w-full mx-auto px-4 flex justify-between items-center relative" }, l2 ? ue2.createElement("img", { src: l2, alt: "React Bricks", className: "h-6" }) : ue2.createElement(nr, { className: "h-6" }), r3 ? ue2.createElement("div", { className: "flex-1 flex justify-center" }, r3) : null, c2 && c2.email && n4 && n4(), c2 && c2.email && ue2.createElement("div", { className: "flex flex-row items-center text-xs leading-none text-gray-600 uppercase" }, c2.avatarUrl && ue2.createElement("img", { className: "w-8 h-8 border rounded-full mr-2", src: c2.avatarUrl, alt: "".concat(c2.firstName, " ").concat(c2.lastName) }), ue2.createElement("div", { className: "mr-2" }, c2.firstName, " ", c2.lastName), ue2.createElement("button", { className: "hover:text-gray-900", onClick: function() {
    return a2();
  } }, ue2.createElement(FiPower, null))), c2 && !c2.isVerified && !d2 && ue2.createElement(ra, { dismissPopup: function() {
    return u2(true);
  } })));
};
var oa = function(e2) {
  var t3 = e2.isPublicDesignSystem, n4 = t3 !== void 0 && t3, r3 = e2.designSystemTitle, a2 = (0, import_react5.useContext)(A), o2 = a2.renderLocalLink, i2 = a2.editorPath, l2 = a2.playgroundPath, c2 = a2.appSettingsPath, s3 = a2.appId;
  if (n4)
    return import_react5.default.createElement(aa, { designSystemTitle: r3 });
  var d2 = Pr(s3).data;
  return import_react5.default.createElement(aa, { renderMenu: function() {
    var e3 = function(e4) {
      var t4 = e4.href, n5 = e4.children;
      return o2({ href: t4, children: n5, className: "px-4 py-2 border-b-4 uppercase text-sm tracking-wide border-transparent text-gray-700", activeClassName: "px-4 py-2 border-b-4 uppercase text-sm tracking-wide border-pink-500 text-gray-900 font-semibold", isAdmin: true });
    };
    return import_react5.default.createElement("div", { className: "flex flex-row items-center" }, import_react5.default.createElement("div", { className: "hidden px-4 py-2 border-b-4 uppercase text-sm tracking-wide border-transparent  text-gray-900 font-semibold" }), import_react5.default.createElement(e3, { href: i2 }, "Editor"), import_react5.default.createElement(e3, { href: l2 }, "Playground"), import_react5.default.createElement(e3, { href: c2 }, (d2 == null ? void 0 : d2.isAdmin) ? "Settings" : "Deploy"));
  } });
};
var ia = function() {
  var e2 = (0, import_react5.useContext)(A), t3 = e2.navigate, n4 = e2.loginPath;
  return (0, import_react5.useEffect)(function() {
    var e3 = function(e4, t4) {
      import_axios.default.defaults.baseURL = he;
      var n5 = Ee("t") || "";
      n5 && n5.length > 10 && localStorage.setItem(ve, n5);
      var r4 = localStorage.getItem(ve) || "";
      return { requestInterceptor: import_axios.default.interceptors.request.use(function(e5) {
        var t5 = {}, a3 = n5 || r4;
        return a3 && (t5 = { Authorization: "Bearer ".concat(a3) }), p(p({}, e5), { headers: p(p({}, e5.headers), t5) });
      }, function(e5) {
        return Promise.reject(e5);
      }), responseInterceptor: import_axios.default.interceptors.response.use(function(e5) {
        return e5;
      }, function(n6) {
        return n6.response ? (n6.response.status === 401 ? (ue.clear(), localStorage.removeItem(ve), n6.response.config.url === "/admin/session" && n6.response.config.method === "post" || (index_es_default.warn("Session expired"), e4(t4))) : n6.response.status === 423 && index_es_default.warn("Operation not allowed on this demo"), Promise.reject(n6.response)) : (index_es_default.error("An error occurred while communicating with the server", { hideAfter: 5 }), Promise.reject(n6.response));
      }) };
    }(t3, n4), r3 = e3.requestInterceptor, a2 = e3.responseInterceptor;
    return function() {
      import_axios.default.interceptors.request.eject(r3), import_axios.default.interceptors.response.eject(a2);
    };
  }, [t3]), null;
};
var la = function(e2) {
  var t3 = e2.isLogin, n4 = t3 !== void 0 && t3, r3 = (0, import_react5.useContext)(A), a2 = r3.navigate, o2 = r3.loginPath, i2 = r3.editorPath, l2 = r3.appId, c2 = Pr(l2), s3 = c2.data, d2 = c2.isError, u2 = (0, import_react5.useContext)(qt).setCurrentPage;
  return (0, import_react5.useEffect)(function() {
    var e3 = localStorage.getItem(ve), t4 = Ee("t");
    e3 || t4 || n4 || a2(o2);
  }, []), (0, import_react5.useEffect)(function() {
    if (d2 && (n4 || a2(o2)), s3) {
      var e3 = Ee("p"), t4 = Ee("l"), r4 = localStorage && localStorage.getItem("rb_p"), l3 = localStorage && localStorage.getItem("rb_l");
      e3 ? (u2({ pageId: e3, language: t4 || "" }), a2(i2)) : r4 && u2({ pageId: r4, language: l3 || "" }), n4 && a2(i2);
    }
  }, [s3, d2]), null;
};
!function(e2, t3) {
  t3 === void 0 && (t3 = {});
  var n4 = t3.insertAt;
  if (e2 && typeof document != "undefined") {
    var r3 = document.head || document.getElementsByTagName("head")[0], a2 = document.createElement("style");
    a2.type = "text/css", n4 === "top" && r3.firstChild ? r3.insertBefore(a2, r3.firstChild) : r3.appendChild(a2), a2.styleSheet ? a2.styleSheet.cssText = e2 : a2.appendChild(document.createTextNode(e2));
  }
}('.tippy-box[data-animation=fade][data-state=hidden]{opacity:0}[data-tippy-root]{max-width:calc(100vw - 10px)}.tippy-box{background-color:#333;border-radius:4px;color:#fff;font-size:14px;line-height:1.4;outline:0;position:relative;transition-property:transform,visibility,opacity}.tippy-box[data-placement^=top]>.tippy-arrow{bottom:0}.tippy-box[data-placement^=top]>.tippy-arrow:before{border-top-color:initial;border-width:8px 8px 0;bottom:-7px;left:0;transform-origin:center top}.tippy-box[data-placement^=bottom]>.tippy-arrow{top:0}.tippy-box[data-placement^=bottom]>.tippy-arrow:before{border-bottom-color:initial;border-width:0 8px 8px;left:0;top:-7px;transform-origin:center bottom}.tippy-box[data-placement^=left]>.tippy-arrow{right:0}.tippy-box[data-placement^=left]>.tippy-arrow:before{border-left-color:initial;border-width:8px 0 8px 8px;right:-7px;transform-origin:center left}.tippy-box[data-placement^=right]>.tippy-arrow{left:0}.tippy-box[data-placement^=right]>.tippy-arrow:before{border-right-color:initial;border-width:8px 8px 8px 0;left:-7px;transform-origin:center right}.tippy-box[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-arrow{color:#333;height:16px;width:16px}.tippy-arrow:before{border-color:transparent;border-style:solid;content:"";position:absolute}.tippy-content{padding:5px 9px;position:relative;z-index:1}');
var ca = function(t3) {
  var n4 = t3.isLogin, r3 = n4 !== void 0 && n4, a2 = t3.isPublicDesignSystem, o2 = a2 !== void 0 && a2, i2 = t3.designSystemTitle, l2 = i2 === void 0 ? "Bricks documentation" : i2, c2 = t3.children, s3 = v((0, import_react5.useState)({ pageId: "" }), 2), d2 = s3[0], u2 = s3[1], m2 = v((0, import_react5.useState)(false), 2), p3 = m2[0], f3 = m2[1], h3 = v((0, import_react5.useState)(false), 2), b3 = h3[0], v3 = h3[1], x2 = v((0, import_react5.useState)(false), 2), y3 = x2[0], w2 = x2[1], k3 = (0, import_react5.useContext)(A).appRootElement;
  (0, import_react5.useEffect)(function() {
    w2(true), localStorage.removeItem("react-bricks-token"), k3 && import_react_modal.default.setAppElement(k3), k3 || console.error("You should provide the appRootElement prop on Reactbricks, with a string selector or HTML element corresponding to the root element of the React application.");
  }, []), (0, import_react5.useEffect)(function() {
    localStorage && (d2 == null ? void 0 : d2.pageId) && !d2.pageId.startsWith("playground") && (localStorage.setItem("rb_p", d2.pageId), localStorage.setItem("rb_l", d2.language || ""));
  }, [d2]);
  return ue2.createElement(ta, { id: "rb-admin-frame", style: { width: "100%", height: "100vh", border: "none" }, head: ue2.createElement("style", { dangerouslySetInnerHTML: { __html: `@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

/*! tailwindcss v3.0.13 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:""}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}[multiple],[type=date],[type=datetime-local],[type=email],[type=month],[type=number],[type=password],[type=search],[type=tel],[type=text],[type=time],[type=url],[type=week],select,textarea{--tw-shadow:0 0 #0000;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#6b7280;border-radius:0;border-width:1px;font-size:1rem;line-height:1.5rem;padding:.5rem .75rem}[multiple]:focus,[type=date]:focus,[type=datetime-local]:focus,[type=email]:focus,[type=month]:focus,[type=number]:focus,[type=password]:focus,[type=search]:focus,[type=tel]:focus,[type=text]:focus,[type=time]:focus,[type=url]:focus,[type=week]:focus,select:focus,textarea:focus{--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#2563eb;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);border-color:#2563eb;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);outline:2px solid transparent;outline-offset:2px}input::-moz-placeholder,textarea::-moz-placeholder{color:#6b7280;opacity:1}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#6b7280;opacity:1}input::placeholder,textarea::placeholder{color:#6b7280;opacity:1}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-date-and-time-value{min-height:1.5em}select{-webkit-print-color-adjust:exact;background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E");background-position:right .5rem center;background-repeat:no-repeat;background-size:1.5em 1.5em;color-adjust:exact;padding-right:2.5rem}[multiple]{-webkit-print-color-adjust:unset;background-image:none;background-position:0 0;background-repeat:unset;background-size:initial;color-adjust:unset;padding-right:.75rem}[type=checkbox],[type=radio]{-webkit-print-color-adjust:exact;--tw-shadow:0 0 #0000;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;background-origin:border-box;border-color:#6b7280;border-width:1px;color:#2563eb;color-adjust:exact;display:inline-block;flex-shrink:0;height:1rem;padding:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:middle;width:1rem}[type=checkbox]{border-radius:0}[type=radio]{border-radius:100%}[type=checkbox]:focus,[type=radio]:focus{--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:2px;--tw-ring-offset-color:#fff;--tw-ring-color:#2563eb;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);outline:2px solid transparent;outline-offset:2px}[type=checkbox]:checked,[type=radio]:checked{background-color:currentColor;background-position:50%;background-repeat:no-repeat;background-size:100% 100%;border-color:transparent}[type=checkbox]:checked{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.207 4.793a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L6.5 9.086l4.293-4.293a1 1 0 0 1 1.414 0z'/%3E%3C/svg%3E")}[type=radio]:checked{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='8' cy='8' r='3'/%3E%3C/svg%3E")}[type=checkbox]:checked:focus,[type=checkbox]:checked:hover,[type=radio]:checked:focus,[type=radio]:checked:hover{background-color:currentColor;border-color:transparent}[type=checkbox]:indeterminate{background-color:currentColor;background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3E%3C/svg%3E");background-position:50%;background-repeat:no-repeat;background-size:100% 100%;border-color:transparent}[type=checkbox]:indeterminate:focus,[type=checkbox]:indeterminate:hover{background-color:currentColor;border-color:transparent}[type=file]{background:unset;border-color:inherit;border-radius:0;border-width:0;font-size:unset;line-height:inherit;padding:0}[type=file]:focus{outline:1px auto -webkit-focus-ring-color}*,:after,:before{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246/0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-x-0{left:0;right:0}.top-0{top:0}.bottom-0{bottom:0}.left-0{left:0}.z-50{z-index:50}.z-20{z-index:20}.z-10{z-index:10}.mx-auto{margin-left:auto;margin-right:auto}.mx-1{margin-left:.25rem;margin-right:.25rem}.my-3{margin-bottom:.75rem;margin-top:.75rem}.mb-2{margin-bottom:.5rem}.mb-3{margin-bottom:.75rem}.mr-2{margin-right:.5rem}.mb-8{margin-bottom:2rem}.mt-4{margin-top:1rem}.mt-8{margin-top:2rem}.mt-20{margin-top:5rem}.mb-6{margin-bottom:1.5rem}.mt-6{margin-top:1.5rem}.mb-4{margin-bottom:1rem}.-mt-px{margin-top:-1px}.mr-1{margin-right:.25rem}.ml-1{margin-left:.25rem}.ml-2{margin-left:.5rem}.mt-1{margin-top:.25rem}.ml-4{margin-left:1rem}.mb-1{margin-bottom:.25rem}.mb-5{margin-bottom:1.25rem}.mt-2{margin-top:.5rem}.mb-0\\.5{margin-bottom:.125rem}.mb-0{margin-bottom:0}.block{display:block}.\\!block{display:block!important}.inline-block{display:inline-block}.flex{display:flex}.hidden{display:none}.h-10{height:2.5rem}.h-6{height:1.5rem}.h-8{height:2rem}.h-screen{height:100vh}.h-full{height:100%}.h-4{height:1rem}.h-40{height:10rem}.h-24{height:6rem}.w-full{width:100%}.w-8{width:2rem}.w-3\\/4{width:75%}.w-48{width:12rem}.w-4{width:1rem}.w-24{width:6rem}.w-40{width:10rem}.w-0{width:0}.w-56{width:14rem}.min-w-0{min-width:0}.max-w-3xl{max-width:48rem}.max-w-xl{max-width:36rem}.flex-1{flex:1 1 0%}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-pointer{cursor:pointer}.cursor-not-allowed{cursor:not-allowed}.resize{resize:both}.list-decimal{list-style-type:decimal}.list-disc{list-style-type:disc}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(1rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(1rem*var(--tw-space-x-reverse))}.space-x-3>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.75rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.75rem*var(--tw-space-x-reverse))}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.rounded{border-radius:.25rem}.rounded-full{border-radius:9999px}.rounded-sm{border-radius:.125rem}.rounded-md{border-radius:.375rem}.rounded-r-lg{border-bottom-right-radius:.5rem;border-top-right-radius:.5rem}.border{border-width:1px}.border-2{border-width:2px}.border-b-4{border-bottom-width:4px}.border-t{border-top-width:1px}.border-b{border-bottom-width:1px}.border-transparent{border-color:transparent}.border-pink-500{--tw-border-opacity:1;border-color:rgb(246 90 142/var(--tw-border-opacity))}.border-pink-400{--tw-border-opacity:1;border-color:rgb(251 131 163/var(--tw-border-opacity))}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.border-gray-500{--tw-border-opacity:1;border-color:rgb(107 114 128/var(--tw-border-opacity))}.border-gray-200{--tw-border-opacity:1;border-color:rgb(229 231 235/var(--tw-border-opacity))}.border-red-400{--tw-border-opacity:1;border-color:rgb(248 113 113/var(--tw-border-opacity))}.border-red-500{--tw-border-opacity:1;border-color:rgb(239 68 68/var(--tw-border-opacity))}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.bg-blue-500{--tw-bg-opacity:1;background-color:rgb(59 130 246/var(--tw-bg-opacity))}.bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.bg-pink-500{--tw-bg-opacity:1;background-color:rgb(246 90 142/var(--tw-bg-opacity))}.bg-gray-200{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity))}.bg-green-200{--tw-bg-opacity:1;background-color:rgb(187 247 208/var(--tw-bg-opacity))}.bg-gray-300{--tw-bg-opacity:1;background-color:rgb(209 213 219/var(--tw-bg-opacity))}.bg-pink-200{--tw-bg-opacity:1;background-color:rgb(255 214 224/var(--tw-bg-opacity))}.bg-gray-500{--tw-bg-opacity:1;background-color:rgb(107 114 128/var(--tw-bg-opacity))}.bg-blue-200{--tw-bg-opacity:1;background-color:rgb(191 219 254/var(--tw-bg-opacity))}.bg-pink-100{--tw-bg-opacity:1;background-color:rgb(255 245 247/var(--tw-bg-opacity))}.bg-opacity-75{--tw-bg-opacity:0.75}.object-cover{-o-object-fit:cover;object-fit:cover}.p-4{padding:1rem}.p-3{padding:.75rem}.p-2{padding:.5rem}.px-4{padding-left:1rem;padding-right:1rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-16{padding-bottom:4rem;padding-top:4rem}.px-20{padding-left:5rem;padding-right:5rem}.py-px{padding-bottom:1px;padding-top:1px}.px-2{padding-left:.5rem;padding-right:.5rem}.py-3{padding-bottom:.75rem;padding-top:.75rem}.py-6{padding-bottom:1.5rem;padding-top:1.5rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-1{padding-left:.25rem;padding-right:.25rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.pt-10{padding-top:2.5rem}.pt-2{padding-top:.5rem}.pb-1{padding-bottom:.25rem}.pb-12{padding-bottom:3rem}.pr-5{padding-right:1.25rem}.pl-3{padding-left:.75rem}.pl-2{padding-left:.5rem}.pl-8{padding-left:2rem}.pt-12{padding-top:3rem}.pb-24{padding-bottom:6rem}.pb-4{padding-bottom:1rem}.pt-3{padding-top:.75rem}.pb-2{padding-bottom:.5rem}.text-center{text-align:center}.align-middle{vertical-align:middle}.font-admin{font-family:Inter,sans-serif}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xs{font-size:.75rem;line-height:1rem}.text-4xl{font-size:2.25rem;line-height:2.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-base{font-size:1rem;line-height:1.5rem}.font-semibold{font-weight:600}.font-thin{font-weight:100}.font-bold{font-weight:700}.uppercase{text-transform:uppercase}.capitalize{text-transform:capitalize}.italic{font-style:italic}.leading-none{line-height:1}.leading-6{line-height:1.5rem}.leading-tight{line-height:1.25}.tracking-wide{letter-spacing:.025em}.tracking-widest{letter-spacing:.1em}.tracking-wider{letter-spacing:.05em}.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity))}.text-gray-900{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity))}.text-pink-700{--tw-text-opacity:1;color:rgb(180 49 121/var(--tw-text-opacity))}.text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity:1;color:rgb(75 85 99/var(--tw-text-opacity))}.text-red-500{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}.text-pink-500{--tw-text-opacity:1;color:rgb(246 90 142/var(--tw-text-opacity))}.text-green-800{--tw-text-opacity:1;color:rgb(22 101 52/var(--tw-text-opacity))}.text-green-500{--tw-text-opacity:1;color:rgb(34 197 94/var(--tw-text-opacity))}.text-gray-400{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity))}.text-black{--tw-text-opacity:1;color:rgb(0 0 0/var(--tw-text-opacity))}.text-pink-400{--tw-text-opacity:1;color:rgb(251 131 163/var(--tw-text-opacity))}.text-blue-500{--tw-text-opacity:1;color:rgb(59 130 246/var(--tw-text-opacity))}.text-pink-300{--tw-text-opacity:1;color:rgb(253 180 198/var(--tw-text-opacity))}.text-blue-600{--tw-text-opacity:1;color:rgb(37 99 235/var(--tw-text-opacity))}.text-red-700{--tw-text-opacity:1;color:rgb(185 28 28/var(--tw-text-opacity))}.text-blue-800{--tw-text-opacity:1;color:rgb(30 64 175/var(--tw-text-opacity))}.text-red-600{--tw-text-opacity:1;color:rgb(220 38 38/var(--tw-text-opacity))}.no-underline{-webkit-text-decoration-line:none;text-decoration-line:none}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.opacity-0{opacity:0}.opacity-75{opacity:.75}.shadow-lg{--tw-shadow:0 10px 15px -3px rgb(0 0 0/0.1),0 4px 6px -4px rgb(0 0 0/0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color)}.shadow,.shadow-lg{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow{--tw-shadow:0 1px 3px 0 rgb(0 0 0/0.1),0 1px 2px -1px rgb(0 0 0/0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color)}.shadow-inner{--tw-shadow:inset 0 2px 4px 0 rgb(0 0 0/0.05);--tw-shadow-colored:inset 0 2px 4px 0 var(--tw-shadow-color)}.shadow-inner,.shadow-md{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px rgb(0 0 0/0.1),0 2px 4px -2px rgb(0 0 0/0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.outline{outline-style:solid}.blur{--tw-blur:blur(8px)}.blur,.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition-all{transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-colors{transition-duration:.15s;transition-property:color,background-color,border-color,fill,stroke,-webkit-text-decoration-color;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,-webkit-text-decoration-color;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-opacity{transition-duration:.15s;transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-150,.transition-transform{transition-duration:.15s}.duration-200{transition-duration:.2s}.duration-300{transition-duration:.3s}.duration-1000{transition-duration:1s}body{background-color:#f3f4f6}.hover\\:scale-125:hover{--tw-scale-x:1.25;--tw-scale-y:1.25}.hover\\:scale-125:hover,.hover\\:transform:hover{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:border-pink-400:hover{--tw-border-opacity:1;border-color:rgb(251 131 163/var(--tw-border-opacity))}.hover\\:border-gray-300:hover{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.hover\\:border-pink-600:hover{--tw-border-opacity:1;border-color:rgb(217 54 127/var(--tw-border-opacity))}.hover\\:bg-blue-600:hover{--tw-bg-opacity:1;background-color:rgb(37 99 235/var(--tw-bg-opacity))}.hover\\:bg-gray-200:hover{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity))}.hover\\:bg-pink-700:hover{--tw-bg-opacity:1;background-color:rgb(180 49 121/var(--tw-bg-opacity))}.hover\\:bg-pink-600:hover{--tw-bg-opacity:1;background-color:rgb(217 54 127/var(--tw-bg-opacity))}.hover\\:bg-pink-100:hover{--tw-bg-opacity:1;background-color:rgb(255 245 247/var(--tw-bg-opacity))}.hover\\:bg-white:hover{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.hover\\:text-gray-700:hover{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity))}.hover\\:text-gray-900:hover{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity))}.hover\\:text-black:hover{--tw-text-opacity:1;color:rgb(0 0 0/var(--tw-text-opacity))}.hover\\:text-green-600:hover{--tw-text-opacity:1;color:rgb(22 163 74/var(--tw-text-opacity))}.hover\\:text-red-500:hover{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}.hover\\:text-pink-600:hover{--tw-text-opacity:1;color:rgb(217 54 127/var(--tw-text-opacity))}.hover\\:text-gray-800:hover{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity))}.hover\\:text-blue-700:hover{--tw-text-opacity:1;color:rgb(29 78 216/var(--tw-text-opacity))}.hover\\:text-red-800:hover{--tw-text-opacity:1;color:rgb(153 27 27/var(--tw-text-opacity))}.hover\\:underline:hover{-webkit-text-decoration-line:underline;text-decoration-line:underline}.hover\\:opacity-100:hover{opacity:1}.hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px rgb(0 0 0/0.1),0 4px 6px -4px rgb(0 0 0/0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.focus\\:border-blue-300:focus{--tw-border-opacity:1;border-color:rgb(147 197 253/var(--tw-border-opacity))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.focus\\:ring-blue-200:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(191 219 254/var(--tw-ring-opacity))}.focus\\:ring-opacity-50:focus{--tw-ring-opacity:0.5}.focus\\:ring-offset-0:focus{--tw-ring-offset-width:0px}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-75:disabled{opacity:.75}@media (min-width:640px){.sm\\:mx-0{margin-left:0;margin-right:0}.sm\\:w-3\\/4{width:75%}.sm\\:px-0{padding-left:0;padding-right:0}}@media (min-width:768px){.md\\:block{display:block}.md\\:w-1\\/2{width:50%}}@media (min-width:1024px){.lg\\:w-1\\/2{width:50%}}

.react-tags {
  position: relative;
  padding: 6px 0 0 6px;
  border: 1px solid #d1d5db;
  border-radius: .375rem;
  background-color: #fff;

  /* shared font styles */
  font-size: 1em;
  line-height: 1.2;

  /* clicking anywhere will focus the input */
  cursor: text;
}

.react-tags.is-focused {
  border-color: #a0aec0;
}

.react-tags__selected {
  display: inline;
}

.react-tags__selected-tag {
  display: inline-block;
  box-sizing: border-box;
  margin: 0 6px 6px 0;
  padding: 4px 8px;
  border: 1px solid #e6e7eb;
  border-radius: 4px;
  background: #f9fafb;

  /* match the font styles */
  font-size: 14px;
  line-height: inherit;
}

.react-tags__selected-tag:after {
  font-size: 10px;
  content: '\\2715';
  color: #9ca3af;
  margin-left: 8px;
}

.react-tags__selected-tag:hover,
.react-tags__selected-tag:focus {
  border-color: #a0aec0;
}

.react-tags__selected-tag:hover:after,
.react-tags__selected-tag:focus:after {
  color: #dc2627;
}

.react-tags__search {
  display: inline-block;

  /* match tag layout */
  padding: 7px 2px;
  margin-bottom: 6px;

  /* prevent autoresize overflowing the container */
  max-width: 100%;
}

@media screen and (min-width: 30em) {

  .react-tags__search {
    /* this will become the offsetParent for suggestions */
    position: relative;
  }

}

.react-tags__search-input {
  /* prevent autoresize overflowing the container */
  max-width: 100%;

  /* remove styles and layout from this element */
  margin: 0;
  padding: 0;
  border: 0;
  outline: none;

  /* match the font styles */
  font-size: inherit;
  line-height: inherit;
}

.react-tags__search-input::-ms-clear {
  display: none;
}

.react-tags__suggestions {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
}

@media screen and (min-width: 30em) {

  .react-tags__suggestions {
    width: 240px;
  }

}

.react-tags__suggestions ul {
  margin: 4px -1px;
  padding: 0;
  list-style: none;
  background: white;
  border: 1px solid #D1D1D1;
  border-radius: 2px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.react-tags__suggestions li {
  border-bottom: 1px solid #ddd;
  padding: 6px 8px;
}

.react-tags__suggestions li mark {
  text-decoration: underline;
  background: none;
  font-weight: 600;
}

.react-tags__suggestions li:hover {
  cursor: pointer;
  background: #eee;
}

.react-tags__suggestions li.is-active {
  background: #b7cfe0;
}

.react-tags__suggestions li.is-disabled {
  opacity: 0.5;
  cursor: auto;
}

.ct-toast {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
}

.rc-switch {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  width: 44px;
  height: 22px;
  line-height: 20px;
  padding: 0;
  vertical-align: middle;
  border-radius: 20px 20px;
  border: 1px solid #ccc;
  background-color: #ccc;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.35, 0, 0.25, 1);
}
.rc-switch-inner {
  color: #fff;
  font-size: 12px;
  position: absolute;
  left: 24px;
  top: 0;
}
.rc-switch:after {
  position: absolute;
  width: 18px;
  height: 18px;
  left: 2px;
  top: 1px;
  border-radius: 50% 50%;
  background-color: #fff;
  content: " ";
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
  transform: scale(1);
  transition: left 0.3s cubic-bezier(0.35, 0, 0.25, 1);
  animation-timing-function: cubic-bezier(0.35, 0, 0.25, 1);
  animation-duration: 0.3s;
  animation-name: rcSwitchOff;
}
.rc-switch:hover:after {
  transform: scale(1.1);
  animation-name: rcSwitchOn;
}
.rc-switch:focus {
  box-shadow: 0 0 0 2px #d5f1fd;
  outline: none;
}
.rc-switch-checked {
  border: 1px solid #87d068;
  background-color: #87d068;
}
.rc-switch-checked .rc-switch-inner {
  left: 6px;
}
.rc-switch-checked:after {
  left: 22px;
}
.rc-switch-disabled {
  cursor: no-drop;
  background: #ccc;
  border-color: #ccc;
}
.rc-switch-disabled:after {
  background: #9e9e9e;
  animation-name: none;
  cursor: no-drop;
}
.rc-switch-disabled:hover:after {
  transform: scale(1);
  animation-name: none;
}
.rc-switch-label {
  display: inline-block;
  line-height: 20px;
  font-size: 14px;
  padding-left: 10px;
  vertical-align: middle;
  white-space: normal;
  pointer-events: none;
  user-select: text;
}
@keyframes rcSwitchOn {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1.1);
  }
}
@keyframes rcSwitchOff {
  0% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.ReactCrop{position:relative;display:inline-block;cursor:crosshair;overflow:hidden;max-width:100%}.ReactCrop:focus{outline:none}.ReactCrop--disabled,.ReactCrop--locked{cursor:inherit}.ReactCrop__image{display:block;max-width:100%;touch-action:none}.ReactCrop__crop-selection{position:absolute;top:0;left:0;transform:translate3d(0, 0, 0);box-sizing:border-box;cursor:move;box-shadow:0 0 0 9999em rgba(0,0,0,.5);touch-action:none;border:1px solid;border-image-source:url(data:image/gif;base64,R0lGODlhCgAKAJECAAAAAP///////wAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEI5RDc5MTFDNkE2MTFFM0JCMDZEODI2QTI4MzJBOTIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEI5RDc5MTBDNkE2MTFFM0JCMDZEODI2QTI4MzJBOTIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuZGlkOjAyODAxMTc0MDcyMDY4MTE4MDgzQzNDMjA5MzREQ0ZDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAyODAxMTc0MDcyMDY4MTE4MDgzQzNDMjA5MzREQ0ZDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEBQoAAgAsAAAAAAoACgAAAhWEERkn7W3ei7KlagMWF/dKgYeyGAUAIfkEBQoAAgAsAAAAAAoACgAAAg+UYwLJ7RnQm7QmsCyVKhUAIfkEBQoAAgAsAAAAAAoACgAAAhCUYgLJHdiinNSAVfOEKoUCACH5BAUKAAIALAAAAAAKAAoAAAIRVISAdusPo3RAzYtjaMIaUQAAIfkEBQoAAgAsAAAAAAoACgAAAg+MDiem7Q8bSLFaG5il6xQAIfkEBQoAAgAsAAAAAAoACgAAAg+UYRLJ7QnQm7SmsCyVKhUAIfkEBQoAAgAsAAAAAAoACgAAAhCUYBLJDdiinNSEVfOEKoECACH5BAUKAAIALAAAAAAKAAoAAAIRFISBdusPo3RBzYsjaMIaUQAAOw==);border-image-slice:1;border-image-repeat:repeat}.ReactCrop--disabled .ReactCrop__crop-selection{cursor:inherit}.ReactCrop--circular-crop .ReactCrop__crop-selection{border-radius:50%;box-shadow:0px 0px 1px 1px #fff,0 0 0 9999em rgba(0,0,0,.5)}.ReactCrop--invisible-crop .ReactCrop__crop-selection{display:none}.ReactCrop__rule-of-thirds-vt::before,.ReactCrop__rule-of-thirds-vt::after,.ReactCrop__rule-of-thirds-hz::before,.ReactCrop__rule-of-thirds-hz::after{content:"";display:block;position:absolute;background-color:rgba(255,255,255,.4)}.ReactCrop__rule-of-thirds-vt::before,.ReactCrop__rule-of-thirds-vt::after{width:1px;height:100%}.ReactCrop__rule-of-thirds-vt::before{left:33.3333%;left:calc(100% / 3)}.ReactCrop__rule-of-thirds-vt::after{left:66.6666%;left:calc(100% / 3 * 2)}.ReactCrop__rule-of-thirds-hz::before,.ReactCrop__rule-of-thirds-hz::after{width:100%;height:1px}.ReactCrop__rule-of-thirds-hz::before{top:33.3333%;top:calc(100% / 3)}.ReactCrop__rule-of-thirds-hz::after{top:66.6666%;top:calc(100% / 3 * 2)}.ReactCrop__drag-handle{position:absolute}.ReactCrop__drag-handle::after{position:absolute;content:"";display:block;width:10px;height:10px;background-color:rgba(0,0,0,.2);border:1px solid rgba(255,255,255,.7);box-sizing:border-box;outline:1px solid transparent}.ReactCrop .ord-nw{top:0;left:0;margin-top:-5px;margin-left:-5px;cursor:nw-resize}.ReactCrop .ord-nw::after{top:0;left:0}.ReactCrop .ord-n{top:0;left:50%;margin-top:-5px;margin-left:-5px;cursor:n-resize}.ReactCrop .ord-n::after{top:0}.ReactCrop .ord-ne{top:0;right:0;margin-top:-5px;margin-right:-5px;cursor:ne-resize}.ReactCrop .ord-ne::after{top:0;right:0}.ReactCrop .ord-e{top:50%;right:0;margin-top:-5px;margin-right:-5px;cursor:e-resize}.ReactCrop .ord-e::after{right:0}.ReactCrop .ord-se{bottom:0;right:0;margin-bottom:-5px;margin-right:-5px;cursor:se-resize}.ReactCrop .ord-se::after{bottom:0;right:0}.ReactCrop .ord-s{bottom:0;left:50%;margin-bottom:-5px;margin-left:-5px;cursor:s-resize}.ReactCrop .ord-s::after{bottom:0}.ReactCrop .ord-sw{bottom:0;left:0;margin-bottom:-5px;margin-left:-5px;cursor:sw-resize}.ReactCrop .ord-sw::after{bottom:0;left:0}.ReactCrop .ord-w{top:50%;left:0;margin-top:-5px;margin-left:-5px;cursor:w-resize}.ReactCrop .ord-w::after{left:0}.ReactCrop__disabled .ReactCrop__drag-handle{cursor:inherit}.ReactCrop__drag-bar{position:absolute}.ReactCrop__drag-bar.ord-n{top:0;left:0;width:100%;height:6px;margin-top:-3px}.ReactCrop__drag-bar.ord-e{right:0;top:0;width:6px;height:100%;margin-right:-3px}.ReactCrop__drag-bar.ord-s{bottom:0;left:0;width:100%;height:6px;margin-bottom:-3px}.ReactCrop__drag-bar.ord-w{top:0;left:0;width:6px;height:100%;margin-left:-3px}.ReactCrop--new-crop .ReactCrop__drag-bar,.ReactCrop--new-crop .ReactCrop__drag-handle,.ReactCrop--fixed-aspect .ReactCrop__drag-bar{display:none}.ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-n,.ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-e,.ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-s,.ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-w{display:none}@media(pointer: coarse){.ReactCrop .ord-n,.ReactCrop .ord-e,.ReactCrop .ord-s,.ReactCrop .ord-w{display:none}.ReactCrop__drag-handle{width:24px;height:24px}}

</style>` } }), key: y3 ? "client" : "server" }, ue2.createElement(ia, null), ue2.createElement(qt.Provider, { value: { isAdmin: true, currentPage: d2, setCurrentPage: u2, previewMode: p3, setPreviewMode: f3, sidebarCollapsed: b3, setSidebarCollapsed: v3, getStyles: function() {
    return document.querySelectorAll("style");
  }, getStylesheets: function() {
    return document.querySelectorAll("link[rel=stylesheet]");
  } } }, ue2.createElement("div", { className: "font-admin antialiased" }, !o2 && ue2.createElement(la, { isLogin: r3 }), ue2.createElement(oa, { isPublicDesignSystem: o2, designSystemTitle: l2 }), c2)));
};
var sa = function() {
  var t3 = v((0, import_react5.useState)(""), 2), n4 = t3[0], r3 = t3[1], a2 = v((0, import_react5.useState)(""), 2), o2 = a2[0], i2 = a2[1], l2 = v((0, import_react5.useState)(false), 2), c2 = l2[0], s3 = l2[1], d2 = na().loginUser;
  return ue2.createElement("div", { className: "flex flex-col h-screen justify-center items-center px-4 sm:px-0" }, ue2.createElement("div", { className: "flex bg-white rounded shadow-lg w-full sm:w-3/4 lg:w-1/2 sm:mx-0", style: { height: 500 } }, ue2.createElement("div", { className: "flex flex-col w-full md:w-1/2 p-4" }, ue2.createElement("div", { className: "flex flex-col flex-1 justify-center mb-8" }, ue2.createElement("h1", { className: "text-4xl text-center font-thin" }, "Welcome"), ue2.createElement("div", { className: "w-full mt-4" }, ue2.createElement("form", { onSubmit: function(e2) {
    return f(void 0, void 0, void 0, function() {
      return g(this, function(t4) {
        switch (t4.label) {
          case 0:
            return e2.preventDefault(), [4, d2(n4, o2)];
          case 1:
            return t4.sent() || s3(true), [2];
        }
      });
    });
  }, className: "form-horizontal w-3/4 mx-auto" }, ue2.createElement("div", { className: "flex flex-col mt-4" }, ue2.createElement(Fn, { id: "email", type: "email", value: n4, onChange: function(e2) {
    return r3(e2.target.value);
  }, name: "email", placeholder: "Email" })), ue2.createElement("div", { className: "flex flex-col mt-4" }, ue2.createElement(Fn, { id: "password", type: "password", value: o2, onChange: function(e2) {
    return i2(e2.target.value);
  }, name: "password", required: true, placeholder: "Password" })), ue2.createElement("div", { className: "flex flex-col mt-8" }, ue2.createElement("button", { type: "submit", className: "bg-pink-500 hover:bg-pink-700 text-white text-sm font-semibold py-2 px-4 rounded" }, "Login"), c2 && ue2.createElement("div", { className: "text-red-500 mt-4 text-center" }, "Wrong username or password"))), ue2.createElement("div", { className: "text-center mt-4" }, ue2.createElement("a", { className: "no-underline hover:underline text-blue-dark text-xs", href: "https://dashboard.reactbricks.com/forgot-password", target: "_blank", rel: "noopener noreferrer" }, "Forgot Your Password?"))))), ue2.createElement("div", { className: "hidden md:block md:w-1/2 rounded-r-lg", style: { backgroundImage: "url(https://images.unsplash.com/photo-1461418559055-6f020c5a91e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1601&q=80)", backgroundSize: "cover", backgroundPosition: "center center" } })));
};
C.prototype.renderAdmin = function(e2) {
  var t3 = e2.renderBlock, r3 = e2.placeholder, o2 = e2.renderPlaceholder, l2 = e2.propName, s3 = e2.multiline, u2 = s3 !== void 0 && s3, m2 = withHistory(withReact(createEditor()));
  u2 || (m2 = Zt(m2));
  var p3 = (0, import_react5.useMemo)(function() {
    return m2;
  }, []), g3 = (0, import_react5.useContext)(qt), f3 = g3.isAdmin, h3 = g3.previewMode, b3 = (0, import_react5.useContext)(E), v3 = b3.values, x2 = b3.onChange, y3 = (0, import_react5.useContext)(k), w2 = y3.triggerTextRefreshBlockId, k3 = y3.setTriggerTextRefreshBlockId, E3 = h3 || !f3, C2 = v3[l2];
  (0, import_react5.useEffect)(function() {
    setTimeout(function() {
      return k3("");
    }, 1);
  }, [w2]);
  var A3 = (0, import_react5.useCallback)(function(e3) {
    var n4 = e3.children, r4 = e3.element, a2 = e3.attributes;
    return ue2.cloneElement(t3({ children: n4, element: r4, attributes: a2 }), a2);
  }, [v3]), N2 = (0, import_react5.useCallback)(function(e3) {
    var t4 = e3.children, n4 = e3.attributes;
    if (!o2)
      return null;
    n4.style;
    var r4 = m(n4, ["style"]);
    return ue2.cloneElement(o2({ children: t4 }), r4);
  }, [v3]);
  if (E3) {
    var S2 = C2;
    return C2 ? (typeof C2 == "string" && (S2 = I.deserialize(C2)), ue2.createElement(ue2.Fragment, null, S2.map(function(e3, n4) {
      return ue2.createElement(ue2.Fragment, { key: n4 }, Kt(e3, [], t3));
    }))) : null;
  }
  var I3 = C2 || Gt;
  typeof I3 == "string" && (I3 = I.deserialize(I3));
  var L2 = {};
  return o2 && (L2 = { renderPlaceholder: N2 }), ue2.createElement(Slate, { editor: p3, value: I3, onChange: function(e3) {
    v3[l2] !== e3 && x2(l2, e3);
  } }, ue2.createElement(Editable, p({ renderElement: A3, placeholder: r3 }, L2)));
}, Y.prototype.renderAdmin = function(e2) {
  var t3 = [];
  return e2.allowedFeatures && e2.allowedFeatures.length > 0 && (t3 = e2.allowedFeatures.map(function(t4) {
    var n4 = Dn[t4], r3 = n4.newPlugin, a2 = n4.renderLeaf, o2 = n4.renderElement, i2 = n4.renderItemElement, l2 = n4.renderLink, s3 = {}, d2 = e2[a2], u2 = e2[o2], m2 = e2[i2], p3 = e2[l2];
    return a2 && d2 && (s3.renderLeaf = d2), o2 && u2 && (s3.renderElement = u2), i2 && m2 && (s3.renderItemElement = m2), l2 && p3 && (s3.renderElement = function(e3) {
      var t5 = e3.attributes, n5 = e3.children, r4 = e3.element;
      return p3({ attributes: t5, children: n5, element: r4, href: r4.url });
    }), p(p({}, r3), s3);
  })), import_react5.default.createElement(en2, { renderBlock: e2.renderBlock, placeholder: e2.placeholder, propName: e2.propName, plugins: t3, multiline: e2.multiline });
}, N.prototype.renderAdmin = en2, te.prototype.renderAdmin = function(e2) {
  var t3 = (0, import_react5.useContext)(qt), r3 = t3.isAdmin, a2 = t3.previewMode, o2 = (0, import_react5.useContext)(E), i2 = o2.values, l2 = o2.onChange, s3 = a2 || !r3, d2 = i2[e2.propName];
  return s3 ? ue2.createElement(_n, p({}, e2, { source: d2 })) : ue2.createElement(qn, p({}, e2, { source: d2, onChange: function(t4) {
    l2(e2.propName, t4);
  } }));
}, re.prototype.renderAdmin = function(e2) {
  var t3 = e2.propName, r3 = e2.itemProps, o2 = r3 === void 0 ? {} : r3, i2 = e2.renderWrapper, l2 = e2.renderItemWrapper, s3 = (0, import_react5.useContext)(A).bricks, d2 = (0, import_react5.useContext)(E), u2 = d2.values, m2 = d2.parentId, p3 = d2.parentType, f3 = d2.handleChange, h3 = d2.handleAddItem, b3 = d2.contentRef, v3 = (0, import_react5.useContext)(k), x2 = v3.focused, y3 = v3.setFocused, w2 = v3.setAddAfterBlockId, k3 = (0, import_react5.useContext)(qt).previewMode, E3 = u2[t3];
  if ((0, import_react5.useEffect)(function() {
    var e3, n4, r4 = (n4 = (e3 = s3[p3].schema) === null || e3 === void 0 ? void 0 : e3.repeaterItems) === null || n4 === void 0 ? void 0 : n4.find(function(e4) {
      return e4.name === t3;
    });
    r4 && r4.min && (!E3 || E3.length < r4.min) && h3 && h3(m2, t3, r4.itemType)();
  }, [m2, t3, E3]), !E3 || E3.length === 0)
    return null;
  var C2 = ue2.createElement(ue2.Fragment, null, E3.map(function(e3, r4) {
    var a2 = s3[e3.type];
    if (a2) {
      var i3 = a2.schema.sideEditProps ? a2.schema.sideEditProps.reduce(function(t4, n4) {
        var r5, a3;
        return n4.groupName ? a3 = n4.props.map(function(t5) {
          var n5;
          return (n5 = {})[t5.name] = e3.props[t5.name], n5;
        }).reduce(function(e4, t5) {
          return p(p({}, e4), t5);
        }, {}) : ((r5 = {})[n4.name] = e3.props[n4.name], a3 = r5), p(p({}, t4), a3);
      }, {}) : {}, d3 = p(p(p({}, i3), o2), { key: e3.id, index: r4, style: { outline: e3.id !== x2.itemId || k3 ? "none" : "2px solid #fb83a3" }, onClick: function(n4) {
        n4.stopPropagation(), y3({ blockId: m2, itemId: e3.id, repeaterPropName: t3 }), w2("");
      }, onFocus: function(n4) {
        n4.stopPropagation(), setTimeout(function() {
          y3({ blockId: m2, itemId: e3.id, repeaterPropName: t3 }), w2("");
        }, 0);
      }, onChange: function() {
      } }), u3 = ue2.createElement(E.Provider, { key: e3.id, value: { onChange: f3(e3.id, m2, t3), values: e3.props, blockId: e3.id, parentId: m2, contentRef: b3, parentType: p3, handleChange: f3 } }, ue2.createElement(a2, p({}, d3)));
      return l2 ? l2(u3, r4, E3.length) : u3;
    }
  }));
  return i2 ? i2(C2) : C2;
}, H.prototype.renderAdmin = gn, ne.prototype.renderAdmin = function(t3) {
  var r3 = t3.allowedExtensions, a2 = r3 === void 0 ? [] : r3, o2 = t3.propName, i2 = t3.renderBlock, l2 = (0, import_react5.useContext)(E), c2 = l2.values, s3 = l2.onChange, d2 = (0, import_react5.useContext)(qt), u2 = d2.isAdmin, m2 = d2.previewMode, p3 = v((0, import_react5.useState)(false), 2), g3 = p3[0], f3 = p3[1], h3 = c2[o2], b3 = (0, import_react5.useCallback)(function(e2) {
    var t4 = import_react5.default.Children.toArray(i2(e2).props.children);
    return t4.push(import_react5.default.createElement("div", { key: "click interceptor", style: { position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }, onClick: function(e3) {
      e3.preventDefault(), e3.stopPropagation(), f3(true);
    } })), import_react5.default.cloneElement(i2(e2), { style: { position: "relative", cursor: "pointer" }, children: t4 });
  }, [c2]);
  return m2 || !u2 ? i2(h3) : import_react5.default.createElement(import_react5.default.Fragment, null, b3(h3), g3 && import_react5.default.createElement($n, { setModalOpen: f3, modalOpen: g3, onChange: function(e2) {
    s3(o2, e2);
  }, allowedExtensions: a2, file: h3 }));
}, ae.prototype.useAdmin = function() {
  var e2 = (0, import_react5.useContext)(qt);
  return { isAdmin: e2.isAdmin, previewMode: e2.previewMode, currentPage: e2.currentPage };
}, oe.prototype.useAdmin = function(e2) {
  var t3 = (0, import_react5.useContext)(qt), r3 = t3.isAdmin, a2 = t3.previewMode, o2 = (0, import_react5.useContext)(E), i2 = o2.values, l2 = o2.onChange, c2 = a2 || !r3;
  return [i2[e2], function(t4) {
    return l2(e2, t4);
  }, c2];
}, j.prototype.adminConstructor = wn, B.prototype.adminConstructor = nn2, Object.keys(J).forEach(function(e2) {
  zn[e2] && Object.assign(J[e2], zn[e2]);
}), console.log("Loading the Admin bundle...");

export {
  Kr,
  Gr,
  ea,
  ca,
  sa
};
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
//# sourceMappingURL=/build/_shared/chunk-U4545I3U.js.map
