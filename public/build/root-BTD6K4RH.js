import {
  require_dayjs_min
} from "/build/_shared/chunk-XKMTCRFU.js";
import {
  FaTwitter
} from "/build/_shared/chunk-KDHMD3VE.js";
import "/build/_shared/chunk-GBYJDOUQ.js";
import {
  A,
  B,
  E,
  FiCheck,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiUser,
  N,
  X,
  Z,
  ae,
  fe,
  ie,
  ne,
  oe,
  pe,
  require_classnames,
  z
} from "/build/_shared/chunk-SEO2H4MT.js";
import "/build/_shared/chunk-WWOOHIFR.js";
import {
  ErrorMessage_default
} from "/build/_shared/chunk-UUTDVM6V.js";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation,
  useNavigate
} from "/build/_shared/chunk-PNJMPGEZ.js";
import {
  React,
  __commonJS,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-Y2PWL7JR.js";

// node_modules/prismjs/prism.js
var require_prism = __commonJS({
  "node_modules/prismjs/prism.js"(exports, module) {
    init_react();
    var _self = typeof window !== "undefined" ? window : typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope ? self : {};
    var Prism2 = function(_self2) {
      var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
      var uniqueId = 0;
      var plainTextGrammar = {};
      var _3 = {
        manual: _self2.Prism && _self2.Prism.manual,
        disableWorkerMessageHandler: _self2.Prism && _self2.Prism.disableWorkerMessageHandler,
        util: {
          encode: function encode(tokens) {
            if (tokens instanceof Token) {
              return new Token(tokens.type, encode(tokens.content), tokens.alias);
            } else if (Array.isArray(tokens)) {
              return tokens.map(encode);
            } else {
              return tokens.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
            }
          },
          type: function(o3) {
            return Object.prototype.toString.call(o3).slice(8, -1);
          },
          objId: function(obj) {
            if (!obj["__id"]) {
              Object.defineProperty(obj, "__id", { value: ++uniqueId });
            }
            return obj["__id"];
          },
          clone: function deepClone(o3, visited) {
            visited = visited || {};
            var clone;
            var id;
            switch (_3.util.type(o3)) {
              case "Object":
                id = _3.util.objId(o3);
                if (visited[id]) {
                  return visited[id];
                }
                clone = {};
                visited[id] = clone;
                for (var key in o3) {
                  if (o3.hasOwnProperty(key)) {
                    clone[key] = deepClone(o3[key], visited);
                  }
                }
                return clone;
              case "Array":
                id = _3.util.objId(o3);
                if (visited[id]) {
                  return visited[id];
                }
                clone = [];
                visited[id] = clone;
                o3.forEach(function(v, i3) {
                  clone[i3] = deepClone(v, visited);
                });
                return clone;
              default:
                return o3;
            }
          },
          getLanguage: function(element) {
            while (element) {
              var m2 = lang.exec(element.className);
              if (m2) {
                return m2[1].toLowerCase();
              }
              element = element.parentElement;
            }
            return "none";
          },
          setLanguage: function(element, language) {
            element.className = element.className.replace(RegExp(lang, "gi"), "");
            element.classList.add("language-" + language);
          },
          currentScript: function() {
            if (typeof document === "undefined") {
              return null;
            }
            if ("currentScript" in document && 1 < 2) {
              return document.currentScript;
            }
            try {
              throw new Error();
            } catch (err) {
              var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
              if (src) {
                var scripts = document.getElementsByTagName("script");
                for (var i3 in scripts) {
                  if (scripts[i3].src == src) {
                    return scripts[i3];
                  }
                }
              }
              return null;
            }
          },
          isActive: function(element, className, defaultActivation) {
            var no = "no-" + className;
            while (element) {
              var classList = element.classList;
              if (classList.contains(className)) {
                return true;
              }
              if (classList.contains(no)) {
                return false;
              }
              element = element.parentElement;
            }
            return !!defaultActivation;
          }
        },
        languages: {
          plain: plainTextGrammar,
          plaintext: plainTextGrammar,
          text: plainTextGrammar,
          txt: plainTextGrammar,
          extend: function(id, redef) {
            var lang2 = _3.util.clone(_3.languages[id]);
            for (var key in redef) {
              lang2[key] = redef[key];
            }
            return lang2;
          },
          insertBefore: function(inside, before, insert, root) {
            root = root || _3.languages;
            var grammar = root[inside];
            var ret = {};
            for (var token in grammar) {
              if (grammar.hasOwnProperty(token)) {
                if (token == before) {
                  for (var newToken in insert) {
                    if (insert.hasOwnProperty(newToken)) {
                      ret[newToken] = insert[newToken];
                    }
                  }
                }
                if (!insert.hasOwnProperty(token)) {
                  ret[token] = grammar[token];
                }
              }
            }
            var old = root[inside];
            root[inside] = ret;
            _3.languages.DFS(_3.languages, function(key, value) {
              if (value === old && key != inside) {
                this[key] = ret;
              }
            });
            return ret;
          },
          DFS: function DFS(o3, callback, type, visited) {
            visited = visited || {};
            var objId = _3.util.objId;
            for (var i3 in o3) {
              if (o3.hasOwnProperty(i3)) {
                callback.call(o3, i3, o3[i3], type || i3);
                var property = o3[i3];
                var propertyType = _3.util.type(property);
                if (propertyType === "Object" && !visited[objId(property)]) {
                  visited[objId(property)] = true;
                  DFS(property, callback, null, visited);
                } else if (propertyType === "Array" && !visited[objId(property)]) {
                  visited[objId(property)] = true;
                  DFS(property, callback, i3, visited);
                }
              }
            }
          }
        },
        plugins: {},
        highlightAll: function(async, callback) {
          _3.highlightAllUnder(document, async, callback);
        },
        highlightAllUnder: function(container, async, callback) {
          var env = {
            callback,
            container,
            selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
          };
          _3.hooks.run("before-highlightall", env);
          env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));
          _3.hooks.run("before-all-elements-highlight", env);
          for (var i3 = 0, element; element = env.elements[i3++]; ) {
            _3.highlightElement(element, async === true, env.callback);
          }
        },
        highlightElement: function(element, async, callback) {
          var language = _3.util.getLanguage(element);
          var grammar = _3.languages[language];
          _3.util.setLanguage(element, language);
          var parent = element.parentElement;
          if (parent && parent.nodeName.toLowerCase() === "pre") {
            _3.util.setLanguage(parent, language);
          }
          var code = element.textContent;
          var env = {
            element,
            language,
            grammar,
            code
          };
          function insertHighlightedCode(highlightedCode) {
            env.highlightedCode = highlightedCode;
            _3.hooks.run("before-insert", env);
            env.element.innerHTML = env.highlightedCode;
            _3.hooks.run("after-highlight", env);
            _3.hooks.run("complete", env);
            callback && callback.call(env.element);
          }
          _3.hooks.run("before-sanity-check", env);
          parent = env.element.parentElement;
          if (parent && parent.nodeName.toLowerCase() === "pre" && !parent.hasAttribute("tabindex")) {
            parent.setAttribute("tabindex", "0");
          }
          if (!env.code) {
            _3.hooks.run("complete", env);
            callback && callback.call(env.element);
            return;
          }
          _3.hooks.run("before-highlight", env);
          if (!env.grammar) {
            insertHighlightedCode(_3.util.encode(env.code));
            return;
          }
          if (async && _self2.Worker) {
            var worker = new Worker(_3.filename);
            worker.onmessage = function(evt) {
              insertHighlightedCode(evt.data);
            };
            worker.postMessage(JSON.stringify({
              language: env.language,
              code: env.code,
              immediateClose: true
            }));
          } else {
            insertHighlightedCode(_3.highlight(env.code, env.grammar, env.language));
          }
        },
        highlight: function(text, grammar, language) {
          var env = {
            code: text,
            grammar,
            language
          };
          _3.hooks.run("before-tokenize", env);
          if (!env.grammar) {
            throw new Error('The language "' + env.language + '" has no grammar.');
          }
          env.tokens = _3.tokenize(env.code, env.grammar);
          _3.hooks.run("after-tokenize", env);
          return Token.stringify(_3.util.encode(env.tokens), env.language);
        },
        tokenize: function(text, grammar) {
          var rest = grammar.rest;
          if (rest) {
            for (var token in rest) {
              grammar[token] = rest[token];
            }
            delete grammar.rest;
          }
          var tokenList = new LinkedList();
          addAfter(tokenList, tokenList.head, text);
          matchGrammar(text, tokenList, grammar, tokenList.head, 0);
          return toArray(tokenList);
        },
        hooks: {
          all: {},
          add: function(name, callback) {
            var hooks = _3.hooks.all;
            hooks[name] = hooks[name] || [];
            hooks[name].push(callback);
          },
          run: function(name, env) {
            var callbacks = _3.hooks.all[name];
            if (!callbacks || !callbacks.length) {
              return;
            }
            for (var i3 = 0, callback; callback = callbacks[i3++]; ) {
              callback(env);
            }
          }
        },
        Token
      };
      _self2.Prism = _3;
      function Token(type, content, alias, matchedStr) {
        this.type = type;
        this.content = content;
        this.alias = alias;
        this.length = (matchedStr || "").length | 0;
      }
      Token.stringify = function stringify(o3, language) {
        if (typeof o3 == "string") {
          return o3;
        }
        if (Array.isArray(o3)) {
          var s3 = "";
          o3.forEach(function(e2) {
            s3 += stringify(e2, language);
          });
          return s3;
        }
        var env = {
          type: o3.type,
          content: stringify(o3.content, language),
          tag: "span",
          classes: ["token", o3.type],
          attributes: {},
          language
        };
        var aliases = o3.alias;
        if (aliases) {
          if (Array.isArray(aliases)) {
            Array.prototype.push.apply(env.classes, aliases);
          } else {
            env.classes.push(aliases);
          }
        }
        _3.hooks.run("wrap", env);
        var attributes = "";
        for (var name in env.attributes) {
          attributes += " " + name + '="' + (env.attributes[name] || "").replace(/"/g, "&quot;") + '"';
        }
        return "<" + env.tag + ' class="' + env.classes.join(" ") + '"' + attributes + ">" + env.content + "</" + env.tag + ">";
      };
      function matchPattern(pattern, pos, text, lookbehind) {
        pattern.lastIndex = pos;
        var match = pattern.exec(text);
        if (match && lookbehind && match[1]) {
          var lookbehindLength = match[1].length;
          match.index += lookbehindLength;
          match[0] = match[0].slice(lookbehindLength);
        }
        return match;
      }
      function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
        for (var token in grammar) {
          if (!grammar.hasOwnProperty(token) || !grammar[token]) {
            continue;
          }
          var patterns = grammar[token];
          patterns = Array.isArray(patterns) ? patterns : [patterns];
          for (var j3 = 0; j3 < patterns.length; ++j3) {
            if (rematch && rematch.cause == token + "," + j3) {
              return;
            }
            var patternObj = patterns[j3];
            var inside = patternObj.inside;
            var lookbehind = !!patternObj.lookbehind;
            var greedy = !!patternObj.greedy;
            var alias = patternObj.alias;
            if (greedy && !patternObj.pattern.global) {
              var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
              patternObj.pattern = RegExp(patternObj.pattern.source, flags + "g");
            }
            var pattern = patternObj.pattern || patternObj;
            for (var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next) {
              if (rematch && pos >= rematch.reach) {
                break;
              }
              var str = currentNode.value;
              if (tokenList.length > text.length) {
                return;
              }
              if (str instanceof Token) {
                continue;
              }
              var removeCount = 1;
              var match;
              if (greedy) {
                match = matchPattern(pattern, pos, text, lookbehind);
                if (!match || match.index >= text.length) {
                  break;
                }
                var from = match.index;
                var to = match.index + match[0].length;
                var p2 = pos;
                p2 += currentNode.value.length;
                while (from >= p2) {
                  currentNode = currentNode.next;
                  p2 += currentNode.value.length;
                }
                p2 -= currentNode.value.length;
                pos = p2;
                if (currentNode.value instanceof Token) {
                  continue;
                }
                for (var k2 = currentNode; k2 !== tokenList.tail && (p2 < to || typeof k2.value === "string"); k2 = k2.next) {
                  removeCount++;
                  p2 += k2.value.length;
                }
                removeCount--;
                str = text.slice(pos, p2);
                match.index -= pos;
              } else {
                match = matchPattern(pattern, 0, str, lookbehind);
                if (!match) {
                  continue;
                }
              }
              var from = match.index;
              var matchStr = match[0];
              var before = str.slice(0, from);
              var after = str.slice(from + matchStr.length);
              var reach = pos + str.length;
              if (rematch && reach > rematch.reach) {
                rematch.reach = reach;
              }
              var removeFrom = currentNode.prev;
              if (before) {
                removeFrom = addAfter(tokenList, removeFrom, before);
                pos += before.length;
              }
              removeRange(tokenList, removeFrom, removeCount);
              var wrapped = new Token(token, inside ? _3.tokenize(matchStr, inside) : matchStr, alias, matchStr);
              currentNode = addAfter(tokenList, removeFrom, wrapped);
              if (after) {
                addAfter(tokenList, currentNode, after);
              }
              if (removeCount > 1) {
                var nestedRematch = {
                  cause: token + "," + j3,
                  reach
                };
                matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);
                if (rematch && nestedRematch.reach > rematch.reach) {
                  rematch.reach = nestedRematch.reach;
                }
              }
            }
          }
        }
      }
      function LinkedList() {
        var head = { value: null, prev: null, next: null };
        var tail = { value: null, prev: head, next: null };
        head.next = tail;
        this.head = head;
        this.tail = tail;
        this.length = 0;
      }
      function addAfter(list, node, value) {
        var next = node.next;
        var newNode = { value, prev: node, next };
        node.next = newNode;
        next.prev = newNode;
        list.length++;
        return newNode;
      }
      function removeRange(list, node, count) {
        var next = node.next;
        for (var i3 = 0; i3 < count && next !== list.tail; i3++) {
          next = next.next;
        }
        node.next = next;
        next.prev = node;
        list.length -= i3;
      }
      function toArray(list) {
        var array = [];
        var node = list.head.next;
        while (node !== list.tail) {
          array.push(node.value);
          node = node.next;
        }
        return array;
      }
      if (!_self2.document) {
        if (!_self2.addEventListener) {
          return _3;
        }
        if (!_3.disableWorkerMessageHandler) {
          _self2.addEventListener("message", function(evt) {
            var message = JSON.parse(evt.data);
            var lang2 = message.language;
            var code = message.code;
            var immediateClose = message.immediateClose;
            _self2.postMessage(_3.highlight(code, _3.languages[lang2], lang2));
            if (immediateClose) {
              _self2.close();
            }
          }, false);
        }
        return _3;
      }
      var script = _3.util.currentScript();
      if (script) {
        _3.filename = script.src;
        if (script.hasAttribute("data-manual")) {
          _3.manual = true;
        }
      }
      function highlightAutomaticallyCallback() {
        if (!_3.manual) {
          _3.highlightAll();
        }
      }
      if (!_3.manual) {
        var readyState = document.readyState;
        if (readyState === "loading" || readyState === "interactive" && script && script.defer) {
          document.addEventListener("DOMContentLoaded", highlightAutomaticallyCallback);
        } else {
          if (window.requestAnimationFrame) {
            window.requestAnimationFrame(highlightAutomaticallyCallback);
          } else {
            window.setTimeout(highlightAutomaticallyCallback, 16);
          }
        }
      }
      return _3;
    }(_self);
    if (typeof module !== "undefined" && module.exports) {
      module.exports = Prism2;
    }
    if (typeof globalThis !== "undefined") {
      globalThis.Prism = Prism2;
    }
    Prism2.languages.markup = {
      "comment": {
        pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
        greedy: true
      },
      "prolog": {
        pattern: /<\?[\s\S]+?\?>/,
        greedy: true
      },
      "doctype": {
        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
        greedy: true,
        inside: {
          "internal-subset": {
            pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
            lookbehind: true,
            greedy: true,
            inside: null
          },
          "string": {
            pattern: /"[^"]*"|'[^']*'/,
            greedy: true
          },
          "punctuation": /^<!|>$|[[\]]/,
          "doctype-tag": /^DOCTYPE/i,
          "name": /[^\s<>'"]+/
        }
      },
      "cdata": {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        greedy: true
      },
      "tag": {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
        greedy: true,
        inside: {
          "tag": {
            pattern: /^<\/?[^\s>\/]+/,
            inside: {
              "punctuation": /^<\/?/,
              "namespace": /^[^\s>\/:]+:/
            }
          },
          "special-attr": [],
          "attr-value": {
            pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
            inside: {
              "punctuation": [
                {
                  pattern: /^=/,
                  alias: "attr-equals"
                },
                /"|'/
              ]
            }
          },
          "punctuation": /\/?>/,
          "attr-name": {
            pattern: /[^\s>\/]+/,
            inside: {
              "namespace": /^[^\s>\/:]+:/
            }
          }
        }
      },
      "entity": [
        {
          pattern: /&[\da-z]{1,8};/i,
          alias: "named-entity"
        },
        /&#x?[\da-f]{1,8};/i
      ]
    };
    Prism2.languages.markup["tag"].inside["attr-value"].inside["entity"] = Prism2.languages.markup["entity"];
    Prism2.languages.markup["doctype"].inside["internal-subset"].inside = Prism2.languages.markup;
    Prism2.hooks.add("wrap", function(env) {
      if (env.type === "entity") {
        env.attributes["title"] = env.content.replace(/&amp;/, "&");
      }
    });
    Object.defineProperty(Prism2.languages.markup.tag, "addInlined", {
      value: function addInlined(tagName, lang) {
        var includedCdataInside = {};
        includedCdataInside["language-" + lang] = {
          pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
          lookbehind: true,
          inside: Prism2.languages[lang]
        };
        includedCdataInside["cdata"] = /^<!\[CDATA\[|\]\]>$/i;
        var inside = {
          "included-cdata": {
            pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
            inside: includedCdataInside
          }
        };
        inside["language-" + lang] = {
          pattern: /[\s\S]+/,
          inside: Prism2.languages[lang]
        };
        var def = {};
        def[tagName] = {
          pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
            return tagName;
          }), "i"),
          lookbehind: true,
          greedy: true,
          inside
        };
        Prism2.languages.insertBefore("markup", "cdata", def);
      }
    });
    Object.defineProperty(Prism2.languages.markup.tag, "addAttribute", {
      value: function(attrName, lang) {
        Prism2.languages.markup.tag.inside["special-attr"].push({
          pattern: RegExp(/(^|["'\s])/.source + "(?:" + attrName + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
          lookbehind: true,
          inside: {
            "attr-name": /^[^\s=]+/,
            "attr-value": {
              pattern: /=[\s\S]+/,
              inside: {
                "value": {
                  pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                  lookbehind: true,
                  alias: [lang, "language-" + lang],
                  inside: Prism2.languages[lang]
                },
                "punctuation": [
                  {
                    pattern: /^=/,
                    alias: "attr-equals"
                  },
                  /"|'/
                ]
              }
            }
          }
        });
      }
    });
    Prism2.languages.html = Prism2.languages.markup;
    Prism2.languages.mathml = Prism2.languages.markup;
    Prism2.languages.svg = Prism2.languages.markup;
    Prism2.languages.xml = Prism2.languages.extend("markup", {});
    Prism2.languages.ssml = Prism2.languages.xml;
    Prism2.languages.atom = Prism2.languages.xml;
    Prism2.languages.rss = Prism2.languages.xml;
    (function(Prism3) {
      var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
      Prism3.languages.css = {
        "comment": /\/\*[\s\S]*?\*\//,
        "atrule": {
          pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
          inside: {
            "rule": /^@[\w-]+/,
            "selector-function-argument": {
              pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
              lookbehind: true,
              alias: "selector"
            },
            "keyword": {
              pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
              lookbehind: true
            }
          }
        },
        "url": {
          pattern: RegExp("\\burl\\((?:" + string.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
          greedy: true,
          inside: {
            "function": /^url/i,
            "punctuation": /^\(|\)$/,
            "string": {
              pattern: RegExp("^" + string.source + "$"),
              alias: "url"
            }
          }
        },
        "selector": {
          pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + string.source + ")*(?=\\s*\\{)"),
          lookbehind: true
        },
        "string": {
          pattern: string,
          greedy: true
        },
        "property": {
          pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
          lookbehind: true
        },
        "important": /!important\b/i,
        "function": {
          pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
          lookbehind: true
        },
        "punctuation": /[(){};:,]/
      };
      Prism3.languages.css["atrule"].inside.rest = Prism3.languages.css;
      var markup = Prism3.languages.markup;
      if (markup) {
        markup.tag.addInlined("style", "css");
        markup.tag.addAttribute("style", "css");
      }
    })(Prism2);
    Prism2.languages.clike = {
      "comment": [
        {
          pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
          lookbehind: true,
          greedy: true
        },
        {
          pattern: /(^|[^\\:])\/\/.*/,
          lookbehind: true,
          greedy: true
        }
      ],
      "string": {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: true
      },
      "class-name": {
        pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
        lookbehind: true,
        inside: {
          "punctuation": /[.\\]/
        }
      },
      "keyword": /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
      "boolean": /\b(?:false|true)\b/,
      "function": /\b\w+(?=\()/,
      "number": /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
      "operator": /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
      "punctuation": /[{}[\];(),.:]/
    };
    Prism2.languages.javascript = Prism2.languages.extend("clike", {
      "class-name": [
        Prism2.languages.clike["class-name"],
        {
          pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
          lookbehind: true
        }
      ],
      "keyword": [
        {
          pattern: /((?:^|\})\s*)catch\b/,
          lookbehind: true
        },
        {
          pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
          lookbehind: true
        }
      ],
      "function": /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
      "number": {
        pattern: RegExp(/(^|[^\w$])/.source + "(?:" + (/NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source),
        lookbehind: true
      },
      "operator": /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
    });
    Prism2.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
    Prism2.languages.insertBefore("javascript", "keyword", {
      "regex": {
        pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
        lookbehind: true,
        greedy: true,
        inside: {
          "regex-source": {
            pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
            lookbehind: true,
            alias: "language-regex",
            inside: Prism2.languages.regex
          },
          "regex-delimiter": /^\/|\/$/,
          "regex-flags": /^[a-z]+$/
        }
      },
      "function-variable": {
        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
        alias: "function"
      },
      "parameter": [
        {
          pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
          lookbehind: true,
          inside: Prism2.languages.javascript
        },
        {
          pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
          lookbehind: true,
          inside: Prism2.languages.javascript
        },
        {
          pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
          lookbehind: true,
          inside: Prism2.languages.javascript
        },
        {
          pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
          lookbehind: true,
          inside: Prism2.languages.javascript
        }
      ],
      "constant": /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    });
    Prism2.languages.insertBefore("javascript", "string", {
      "hashbang": {
        pattern: /^#!.*/,
        greedy: true,
        alias: "comment"
      },
      "template-string": {
        pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
        greedy: true,
        inside: {
          "template-punctuation": {
            pattern: /^`|`$/,
            alias: "string"
          },
          "interpolation": {
            pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
            lookbehind: true,
            inside: {
              "interpolation-punctuation": {
                pattern: /^\$\{|\}$/,
                alias: "punctuation"
              },
              rest: Prism2.languages.javascript
            }
          },
          "string": /[\s\S]+/
        }
      },
      "string-property": {
        pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
        lookbehind: true,
        greedy: true,
        alias: "property"
      }
    });
    Prism2.languages.insertBefore("javascript", "operator", {
      "literal-property": {
        pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
        lookbehind: true,
        alias: "property"
      }
    });
    if (Prism2.languages.markup) {
      Prism2.languages.markup.tag.addInlined("script", "javascript");
      Prism2.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript");
    }
    Prism2.languages.js = Prism2.languages.javascript;
    (function() {
      if (typeof Prism2 === "undefined" || typeof document === "undefined") {
        return;
      }
      if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
      }
      var LOADING_MESSAGE = "Loading\u2026";
      var FAILURE_MESSAGE = function(status, message) {
        return "\u2716 Error " + status + " while fetching file: " + message;
      };
      var FAILURE_EMPTY_MESSAGE = "\u2716 Error: File does not exist or is empty";
      var EXTENSIONS = {
        "js": "javascript",
        "py": "python",
        "rb": "ruby",
        "ps1": "powershell",
        "psm1": "powershell",
        "sh": "bash",
        "bat": "batch",
        "h": "c",
        "tex": "latex"
      };
      var STATUS_ATTR = "data-src-status";
      var STATUS_LOADING = "loading";
      var STATUS_LOADED = "loaded";
      var STATUS_FAILED = "failed";
      var SELECTOR = "pre[data-src]:not([" + STATUS_ATTR + '="' + STATUS_LOADED + '"]):not([' + STATUS_ATTR + '="' + STATUS_LOADING + '"])';
      function loadFile(src, success, error) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", src, true);
        xhr.onreadystatechange = function() {
          if (xhr.readyState == 4) {
            if (xhr.status < 400 && xhr.responseText) {
              success(xhr.responseText);
            } else {
              if (xhr.status >= 400) {
                error(FAILURE_MESSAGE(xhr.status, xhr.statusText));
              } else {
                error(FAILURE_EMPTY_MESSAGE);
              }
            }
          }
        };
        xhr.send(null);
      }
      function parseRange(range) {
        var m2 = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(range || "");
        if (m2) {
          var start = Number(m2[1]);
          var comma = m2[2];
          var end = m2[3];
          if (!comma) {
            return [start, start];
          }
          if (!end) {
            return [start, void 0];
          }
          return [start, Number(end)];
        }
        return void 0;
      }
      Prism2.hooks.add("before-highlightall", function(env) {
        env.selector += ", " + SELECTOR;
      });
      Prism2.hooks.add("before-sanity-check", function(env) {
        var pre = env.element;
        if (pre.matches(SELECTOR)) {
          env.code = "";
          pre.setAttribute(STATUS_ATTR, STATUS_LOADING);
          var code = pre.appendChild(document.createElement("CODE"));
          code.textContent = LOADING_MESSAGE;
          var src = pre.getAttribute("data-src");
          var language = env.language;
          if (language === "none") {
            var extension = (/\.(\w+)$/.exec(src) || [, "none"])[1];
            language = EXTENSIONS[extension] || extension;
          }
          Prism2.util.setLanguage(code, language);
          Prism2.util.setLanguage(pre, language);
          var autoloader = Prism2.plugins.autoloader;
          if (autoloader) {
            autoloader.loadLanguages(language);
          }
          loadFile(src, function(text) {
            pre.setAttribute(STATUS_ATTR, STATUS_LOADED);
            var range = parseRange(pre.getAttribute("data-range"));
            if (range) {
              var lines = text.split(/\r\n?|\n/g);
              var start = range[0];
              var end = range[1] == null ? lines.length : range[1];
              if (start < 0) {
                start += lines.length;
              }
              start = Math.max(0, Math.min(start - 1, lines.length));
              if (end < 0) {
                end += lines.length;
              }
              end = Math.max(0, Math.min(end, lines.length));
              text = lines.slice(start, end).join("\n");
              if (!pre.hasAttribute("data-start")) {
                pre.setAttribute("data-start", String(start + 1));
              }
            }
            code.textContent = text;
            Prism2.highlightElement(code);
          }, function(error) {
            pre.setAttribute(STATUS_ATTR, STATUS_FAILED);
            code.textContent = error;
          });
        }
      });
      Prism2.plugins.fileHighlight = {
        highlight: function highlight2(container) {
          var elements = (container || document).querySelectorAll(SELECTOR);
          for (var i3 = 0, element; element = elements[i3++]; ) {
            Prism2.highlightElement(element);
          }
        }
      };
      var logged = false;
      Prism2.fileHighlight = function() {
        if (!logged) {
          console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.");
          logged = true;
        }
        Prism2.plugins.fileHighlight.highlight.apply(this, arguments);
      };
    })();
  }
});

// node_modules/prismjs/components/prism-typescript.js
var require_prism_typescript = __commonJS({
  "node_modules/prismjs/components/prism-typescript.js"() {
    init_react();
    (function(Prism2) {
      Prism2.languages.typescript = Prism2.languages.extend("javascript", {
        "class-name": {
          pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
          lookbehind: true,
          greedy: true,
          inside: null
        },
        "builtin": /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
      });
      Prism2.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/);
      delete Prism2.languages.typescript["parameter"];
      delete Prism2.languages.typescript["literal-property"];
      var typeInside = Prism2.languages.extend("typescript", {});
      delete typeInside["class-name"];
      Prism2.languages.typescript["class-name"].inside = typeInside;
      Prism2.languages.insertBefore("typescript", "function", {
        "decorator": {
          pattern: /@[$\w\xA0-\uFFFF]+/,
          inside: {
            "at": {
              pattern: /^@/,
              alias: "operator"
            },
            "function": /^[\s\S]+/
          }
        },
        "generic-function": {
          pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
          greedy: true,
          inside: {
            "function": /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
            "generic": {
              pattern: /<[\s\S]+/,
              alias: "class-name",
              inside: typeInside
            }
          }
        }
      });
      Prism2.languages.ts = Prism2.languages.typescript;
    })(Prism);
  }
});

// node_modules/prismjs/components/prism-bash.js
var require_prism_bash = __commonJS({
  "node_modules/prismjs/components/prism-bash.js"() {
    init_react();
    (function(Prism2) {
      var envVars = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b";
      var commandAfterHeredoc = {
        pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
        lookbehind: true,
        alias: "punctuation",
        inside: null
      };
      var insideString = {
        "bash": commandAfterHeredoc,
        "environment": {
          pattern: RegExp("\\$" + envVars),
          alias: "constant"
        },
        "variable": [
          {
            pattern: /\$?\(\([\s\S]+?\)\)/,
            greedy: true,
            inside: {
              "variable": [
                {
                  pattern: /(^\$\(\([\s\S]+)\)\)/,
                  lookbehind: true
                },
                /^\$\(\(/
              ],
              "number": /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
              "operator": /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
              "punctuation": /\(\(?|\)\)?|,|;/
            }
          },
          {
            pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
            greedy: true,
            inside: {
              "variable": /^\$\(|^`|\)$|`$/
            }
          },
          {
            pattern: /\$\{[^}]+\}/,
            greedy: true,
            inside: {
              "operator": /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
              "punctuation": /[\[\]]/,
              "environment": {
                pattern: RegExp("(\\{)" + envVars),
                lookbehind: true,
                alias: "constant"
              }
            }
          },
          /\$(?:\w+|[#?*!@$])/
        ],
        "entity": /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
      };
      Prism2.languages.bash = {
        "shebang": {
          pattern: /^#!\s*\/.*/,
          alias: "important"
        },
        "comment": {
          pattern: /(^|[^"{\\$])#.*/,
          lookbehind: true
        },
        "function-name": [
          {
            pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
            lookbehind: true,
            alias: "function"
          },
          {
            pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
            alias: "function"
          }
        ],
        "for-or-select": {
          pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
          alias: "variable",
          lookbehind: true
        },
        "assign-left": {
          pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
          inside: {
            "environment": {
              pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + envVars),
              lookbehind: true,
              alias: "constant"
            }
          },
          alias: "variable",
          lookbehind: true
        },
        "string": [
          {
            pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
            lookbehind: true,
            greedy: true,
            inside: insideString
          },
          {
            pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
            lookbehind: true,
            greedy: true,
            inside: {
              "bash": commandAfterHeredoc
            }
          },
          {
            pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
            lookbehind: true,
            greedy: true,
            inside: insideString
          },
          {
            pattern: /(^|[^$\\])'[^']*'/,
            lookbehind: true,
            greedy: true
          },
          {
            pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
            greedy: true,
            inside: {
              "entity": insideString.entity
            }
          }
        ],
        "environment": {
          pattern: RegExp("\\$?" + envVars),
          alias: "constant"
        },
        "variable": insideString.variable,
        "function": {
          pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
          lookbehind: true
        },
        "keyword": {
          pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
          lookbehind: true
        },
        "builtin": {
          pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
          lookbehind: true,
          alias: "class-name"
        },
        "boolean": {
          pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
          lookbehind: true
        },
        "file-descriptor": {
          pattern: /\B&\d\b/,
          alias: "important"
        },
        "operator": {
          pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
          inside: {
            "file-descriptor": {
              pattern: /^\d/,
              alias: "important"
            }
          }
        },
        "punctuation": /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
        "number": {
          pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
          lookbehind: true
        }
      };
      commandAfterHeredoc.inside = Prism2.languages.bash;
      var toBeCopied = [
        "comment",
        "function-name",
        "for-or-select",
        "assign-left",
        "string",
        "environment",
        "function",
        "keyword",
        "builtin",
        "boolean",
        "file-descriptor",
        "operator",
        "punctuation",
        "number"
      ];
      var inside = insideString.variable[1].inside;
      for (var i3 = 0; i3 < toBeCopied.length; i3++) {
        inside[toBeCopied[i3]] = Prism2.languages.bash[toBeCopied[i3]];
      }
      Prism2.languages.shell = Prism2.languages.bash;
    })(Prism);
  }
});

// node_modules/prismjs/components/prism-jsx.js
var require_prism_jsx = __commonJS({
  "node_modules/prismjs/components/prism-jsx.js"() {
    init_react();
    (function(Prism2) {
      var javascript = Prism2.util.clone(Prism2.languages.javascript);
      var space = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source;
      var braces = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source;
      var spread = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
      function re2(source, flags) {
        source = source.replace(/<S>/g, function() {
          return space;
        }).replace(/<BRACES>/g, function() {
          return braces;
        }).replace(/<SPREAD>/g, function() {
          return spread;
        });
        return RegExp(source, flags);
      }
      spread = re2(spread).source;
      Prism2.languages.jsx = Prism2.languages.extend("markup", javascript);
      Prism2.languages.jsx.tag.pattern = re2(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source);
      Prism2.languages.jsx.tag.inside["tag"].pattern = /^<\/?[^\s>\/]*/;
      Prism2.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/;
      Prism2.languages.jsx.tag.inside["tag"].inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/;
      Prism2.languages.jsx.tag.inside["comment"] = javascript["comment"];
      Prism2.languages.insertBefore("inside", "attr-name", {
        "spread": {
          pattern: re2(/<SPREAD>/.source),
          inside: Prism2.languages.jsx
        }
      }, Prism2.languages.jsx.tag);
      Prism2.languages.insertBefore("inside", "special-attr", {
        "script": {
          pattern: re2(/=<BRACES>/.source),
          alias: "language-javascript",
          inside: {
            "script-punctuation": {
              pattern: /^=(?=\{)/,
              alias: "punctuation"
            },
            rest: Prism2.languages.jsx
          }
        }
      }, Prism2.languages.jsx.tag);
      var stringifyToken = function(token) {
        if (!token) {
          return "";
        }
        if (typeof token === "string") {
          return token;
        }
        if (typeof token.content === "string") {
          return token.content;
        }
        return token.content.map(stringifyToken).join("");
      };
      var walkTokens = function(tokens) {
        var openedTags = [];
        for (var i3 = 0; i3 < tokens.length; i3++) {
          var token = tokens[i3];
          var notTagNorBrace = false;
          if (typeof token !== "string") {
            if (token.type === "tag" && token.content[0] && token.content[0].type === "tag") {
              if (token.content[0].content[0].content === "</") {
                if (openedTags.length > 0 && openedTags[openedTags.length - 1].tagName === stringifyToken(token.content[0].content[1])) {
                  openedTags.pop();
                }
              } else {
                if (token.content[token.content.length - 1].content === "/>") {
                } else {
                  openedTags.push({
                    tagName: stringifyToken(token.content[0].content[1]),
                    openedBraces: 0
                  });
                }
              }
            } else if (openedTags.length > 0 && token.type === "punctuation" && token.content === "{") {
              openedTags[openedTags.length - 1].openedBraces++;
            } else if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces > 0 && token.type === "punctuation" && token.content === "}") {
              openedTags[openedTags.length - 1].openedBraces--;
            } else {
              notTagNorBrace = true;
            }
          }
          if (notTagNorBrace || typeof token === "string") {
            if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces === 0) {
              var plainText = stringifyToken(token);
              if (i3 < tokens.length - 1 && (typeof tokens[i3 + 1] === "string" || tokens[i3 + 1].type === "plain-text")) {
                plainText += stringifyToken(tokens[i3 + 1]);
                tokens.splice(i3 + 1, 1);
              }
              if (i3 > 0 && (typeof tokens[i3 - 1] === "string" || tokens[i3 - 1].type === "plain-text")) {
                plainText = stringifyToken(tokens[i3 - 1]) + plainText;
                tokens.splice(i3 - 1, 1);
                i3--;
              }
              tokens[i3] = new Prism2.Token("plain-text", plainText, null, plainText);
            }
          }
          if (token.content && typeof token.content !== "string") {
            walkTokens(token.content);
          }
        }
      };
      Prism2.hooks.add("after-tokenize", function(env) {
        if (env.language !== "jsx" && env.language !== "tsx") {
          return;
        }
        walkTokens(env.tokens);
      });
    })(Prism);
  }
});

// node_modules/prismjs/components/prism-tsx.js
var require_prism_tsx = __commonJS({
  "node_modules/prismjs/components/prism-tsx.js"() {
    init_react();
    (function(Prism2) {
      var typescript = Prism2.util.clone(Prism2.languages.typescript);
      Prism2.languages.tsx = Prism2.languages.extend("jsx", typescript);
      delete Prism2.languages.tsx["parameter"];
      delete Prism2.languages.tsx["literal-property"];
      var tag = Prism2.languages.tsx.tag;
      tag.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + "(?:" + tag.pattern.source + ")", tag.pattern.flags);
      tag.lookbehind = true;
    })(Prism);
  }
});

// node_modules/prismjs/plugins/line-numbers/prism-line-numbers.js
var require_prism_line_numbers = __commonJS({
  "node_modules/prismjs/plugins/line-numbers/prism-line-numbers.js"() {
    init_react();
    (function() {
      if (typeof Prism === "undefined" || typeof document === "undefined") {
        return;
      }
      var PLUGIN_NAME = "line-numbers";
      var NEW_LINE_EXP = /\n(?!$)/g;
      var config2 = Prism.plugins.lineNumbers = {
        getLine: function(element, number) {
          if (element.tagName !== "PRE" || !element.classList.contains(PLUGIN_NAME)) {
            return;
          }
          var lineNumberRows = element.querySelector(".line-numbers-rows");
          if (!lineNumberRows) {
            return;
          }
          var lineNumberStart = parseInt(element.getAttribute("data-start"), 10) || 1;
          var lineNumberEnd = lineNumberStart + (lineNumberRows.children.length - 1);
          if (number < lineNumberStart) {
            number = lineNumberStart;
          }
          if (number > lineNumberEnd) {
            number = lineNumberEnd;
          }
          var lineIndex = number - lineNumberStart;
          return lineNumberRows.children[lineIndex];
        },
        resize: function(element) {
          resizeElements([element]);
        },
        assumeViewportIndependence: true
      };
      function resizeElements(elements) {
        elements = elements.filter(function(e2) {
          var codeStyles = getStyles(e2);
          var whiteSpace = codeStyles["white-space"];
          return whiteSpace === "pre-wrap" || whiteSpace === "pre-line";
        });
        if (elements.length == 0) {
          return;
        }
        var infos = elements.map(function(element) {
          var codeElement = element.querySelector("code");
          var lineNumbersWrapper = element.querySelector(".line-numbers-rows");
          if (!codeElement || !lineNumbersWrapper) {
            return void 0;
          }
          var lineNumberSizer = element.querySelector(".line-numbers-sizer");
          var codeLines = codeElement.textContent.split(NEW_LINE_EXP);
          if (!lineNumberSizer) {
            lineNumberSizer = document.createElement("span");
            lineNumberSizer.className = "line-numbers-sizer";
            codeElement.appendChild(lineNumberSizer);
          }
          lineNumberSizer.innerHTML = "0";
          lineNumberSizer.style.display = "block";
          var oneLinerHeight = lineNumberSizer.getBoundingClientRect().height;
          lineNumberSizer.innerHTML = "";
          return {
            element,
            lines: codeLines,
            lineHeights: [],
            oneLinerHeight,
            sizer: lineNumberSizer
          };
        }).filter(Boolean);
        infos.forEach(function(info) {
          var lineNumberSizer = info.sizer;
          var lines = info.lines;
          var lineHeights = info.lineHeights;
          var oneLinerHeight = info.oneLinerHeight;
          lineHeights[lines.length - 1] = void 0;
          lines.forEach(function(line, index) {
            if (line && line.length > 1) {
              var e2 = lineNumberSizer.appendChild(document.createElement("span"));
              e2.style.display = "block";
              e2.textContent = line;
            } else {
              lineHeights[index] = oneLinerHeight;
            }
          });
        });
        infos.forEach(function(info) {
          var lineNumberSizer = info.sizer;
          var lineHeights = info.lineHeights;
          var childIndex = 0;
          for (var i3 = 0; i3 < lineHeights.length; i3++) {
            if (lineHeights[i3] === void 0) {
              lineHeights[i3] = lineNumberSizer.children[childIndex++].getBoundingClientRect().height;
            }
          }
        });
        infos.forEach(function(info) {
          var lineNumberSizer = info.sizer;
          var wrapper = info.element.querySelector(".line-numbers-rows");
          lineNumberSizer.style.display = "none";
          lineNumberSizer.innerHTML = "";
          info.lineHeights.forEach(function(height, lineNumber) {
            wrapper.children[lineNumber].style.height = height + "px";
          });
        });
      }
      function getStyles(element) {
        if (!element) {
          return null;
        }
        return window.getComputedStyle ? getComputedStyle(element) : element.currentStyle || null;
      }
      var lastWidth = void 0;
      window.addEventListener("resize", function() {
        if (config2.assumeViewportIndependence && lastWidth === window.innerWidth) {
          return;
        }
        lastWidth = window.innerWidth;
        resizeElements(Array.prototype.slice.call(document.querySelectorAll("pre." + PLUGIN_NAME)));
      });
      Prism.hooks.add("complete", function(env) {
        if (!env.code) {
          return;
        }
        var code = env.element;
        var pre = code.parentNode;
        if (!pre || !/pre/i.test(pre.nodeName)) {
          return;
        }
        if (code.querySelector(".line-numbers-rows")) {
          return;
        }
        if (!Prism.util.isActive(code, PLUGIN_NAME)) {
          return;
        }
        code.classList.remove(PLUGIN_NAME);
        pre.classList.add(PLUGIN_NAME);
        var match = env.code.match(NEW_LINE_EXP);
        var linesNum = match ? match.length + 1 : 1;
        var lineNumbersWrapper;
        var lines = new Array(linesNum + 1).join("<span></span>");
        lineNumbersWrapper = document.createElement("span");
        lineNumbersWrapper.setAttribute("aria-hidden", "true");
        lineNumbersWrapper.className = "line-numbers-rows";
        lineNumbersWrapper.innerHTML = lines;
        if (pre.hasAttribute("data-start")) {
          pre.style.counterReset = "linenumber " + (parseInt(pre.getAttribute("data-start"), 10) - 1);
        }
        env.element.appendChild(lineNumbersWrapper);
        resizeElements([pre]);
        Prism.hooks.run("line-numbers", env);
      });
      Prism.hooks.add("line-numbers", function(env) {
        env.plugins = env.plugins || {};
        env.plugins.lineNumbers = true;
      });
    })();
  }
});

// node_modules/prismjs/plugins/show-language/prism-show-language.js
var require_prism_show_language = __commonJS({
  "node_modules/prismjs/plugins/show-language/prism-show-language.js"() {
    init_react();
    (function() {
      if (typeof Prism === "undefined" || typeof document === "undefined") {
        return;
      }
      if (!Prism.plugins.toolbar) {
        console.warn("Show Languages plugin loaded before Toolbar plugin.");
        return;
      }
      var Languages = {
        "none": "Plain text",
        "plain": "Plain text",
        "plaintext": "Plain text",
        "text": "Plain text",
        "txt": "Plain text",
        "html": "HTML",
        "xml": "XML",
        "svg": "SVG",
        "mathml": "MathML",
        "ssml": "SSML",
        "rss": "RSS",
        "css": "CSS",
        "clike": "C-like",
        "js": "JavaScript",
        "abap": "ABAP",
        "abnf": "ABNF",
        "al": "AL",
        "antlr4": "ANTLR4",
        "g4": "ANTLR4",
        "apacheconf": "Apache Configuration",
        "apl": "APL",
        "aql": "AQL",
        "ino": "Arduino",
        "arff": "ARFF",
        "asciidoc": "AsciiDoc",
        "adoc": "AsciiDoc",
        "aspnet": "ASP.NET (C#)",
        "asm6502": "6502 Assembly",
        "asmatmel": "Atmel AVR Assembly",
        "autohotkey": "AutoHotkey",
        "autoit": "AutoIt",
        "avisynth": "AviSynth",
        "avs": "AviSynth",
        "avro-idl": "Avro IDL",
        "avdl": "Avro IDL",
        "basic": "BASIC",
        "bbcode": "BBcode",
        "bnf": "BNF",
        "rbnf": "RBNF",
        "bsl": "BSL (1C:Enterprise)",
        "oscript": "OneScript",
        "csharp": "C#",
        "cs": "C#",
        "dotnet": "C#",
        "cpp": "C++",
        "cfscript": "CFScript",
        "cfc": "CFScript",
        "cil": "CIL",
        "cmake": "CMake",
        "cobol": "COBOL",
        "coffee": "CoffeeScript",
        "conc": "Concurnas",
        "csp": "Content-Security-Policy",
        "css-extras": "CSS Extras",
        "csv": "CSV",
        "dataweave": "DataWeave",
        "dax": "DAX",
        "django": "Django/Jinja2",
        "jinja2": "Django/Jinja2",
        "dns-zone-file": "DNS zone file",
        "dns-zone": "DNS zone file",
        "dockerfile": "Docker",
        "dot": "DOT (Graphviz)",
        "gv": "DOT (Graphviz)",
        "ebnf": "EBNF",
        "editorconfig": "EditorConfig",
        "ejs": "EJS",
        "etlua": "Embedded Lua templating",
        "erb": "ERB",
        "excel-formula": "Excel Formula",
        "xlsx": "Excel Formula",
        "xls": "Excel Formula",
        "fsharp": "F#",
        "firestore-security-rules": "Firestore security rules",
        "ftl": "FreeMarker Template Language",
        "gml": "GameMaker Language",
        "gamemakerlanguage": "GameMaker Language",
        "gap": "GAP (CAS)",
        "gcode": "G-code",
        "gdscript": "GDScript",
        "gedcom": "GEDCOM",
        "glsl": "GLSL",
        "gn": "GN",
        "gni": "GN",
        "go-module": "Go module",
        "go-mod": "Go module",
        "graphql": "GraphQL",
        "hbs": "Handlebars",
        "hs": "Haskell",
        "hcl": "HCL",
        "hlsl": "HLSL",
        "http": "HTTP",
        "hpkp": "HTTP Public-Key-Pins",
        "hsts": "HTTP Strict-Transport-Security",
        "ichigojam": "IchigoJam",
        "icu-message-format": "ICU Message Format",
        "idr": "Idris",
        "ignore": ".ignore",
        "gitignore": ".gitignore",
        "hgignore": ".hgignore",
        "npmignore": ".npmignore",
        "inform7": "Inform 7",
        "javadoc": "JavaDoc",
        "javadoclike": "JavaDoc-like",
        "javastacktrace": "Java stack trace",
        "jq": "JQ",
        "jsdoc": "JSDoc",
        "js-extras": "JS Extras",
        "json": "JSON",
        "webmanifest": "Web App Manifest",
        "json5": "JSON5",
        "jsonp": "JSONP",
        "jsstacktrace": "JS stack trace",
        "js-templates": "JS Templates",
        "keepalived": "Keepalived Configure",
        "kts": "Kotlin Script",
        "kt": "Kotlin",
        "kumir": "KuMir (\u041A\u0443\u041C\u0438\u0440)",
        "kum": "KuMir (\u041A\u0443\u041C\u0438\u0440)",
        "latex": "LaTeX",
        "tex": "TeX",
        "context": "ConTeXt",
        "lilypond": "LilyPond",
        "ly": "LilyPond",
        "emacs": "Lisp",
        "elisp": "Lisp",
        "emacs-lisp": "Lisp",
        "llvm": "LLVM IR",
        "log": "Log file",
        "lolcode": "LOLCODE",
        "magma": "Magma (CAS)",
        "md": "Markdown",
        "markup-templating": "Markup templating",
        "matlab": "MATLAB",
        "maxscript": "MAXScript",
        "mel": "MEL",
        "mongodb": "MongoDB",
        "moon": "MoonScript",
        "n1ql": "N1QL",
        "n4js": "N4JS",
        "n4jsd": "N4JS",
        "nand2tetris-hdl": "Nand To Tetris HDL",
        "naniscript": "Naninovel Script",
        "nani": "Naninovel Script",
        "nasm": "NASM",
        "neon": "NEON",
        "nginx": "nginx",
        "nsis": "NSIS",
        "objectivec": "Objective-C",
        "objc": "Objective-C",
        "ocaml": "OCaml",
        "opencl": "OpenCL",
        "openqasm": "OpenQasm",
        "qasm": "OpenQasm",
        "parigp": "PARI/GP",
        "objectpascal": "Object Pascal",
        "psl": "PATROL Scripting Language",
        "pcaxis": "PC-Axis",
        "px": "PC-Axis",
        "peoplecode": "PeopleCode",
        "pcode": "PeopleCode",
        "php": "PHP",
        "phpdoc": "PHPDoc",
        "php-extras": "PHP Extras",
        "plsql": "PL/SQL",
        "powerquery": "PowerQuery",
        "pq": "PowerQuery",
        "mscript": "PowerQuery",
        "powershell": "PowerShell",
        "promql": "PromQL",
        "properties": ".properties",
        "protobuf": "Protocol Buffers",
        "purebasic": "PureBasic",
        "pbfasm": "PureBasic",
        "purs": "PureScript",
        "py": "Python",
        "qsharp": "Q#",
        "qs": "Q#",
        "q": "Q (kdb+ database)",
        "qml": "QML",
        "rkt": "Racket",
        "cshtml": "Razor C#",
        "razor": "Razor C#",
        "jsx": "React JSX",
        "tsx": "React TSX",
        "renpy": "Ren'py",
        "rpy": "Ren'py",
        "rest": "reST (reStructuredText)",
        "robotframework": "Robot Framework",
        "robot": "Robot Framework",
        "rb": "Ruby",
        "sas": "SAS",
        "sass": "Sass (Sass)",
        "scss": "Sass (Scss)",
        "shell-session": "Shell session",
        "sh-session": "Shell session",
        "shellsession": "Shell session",
        "sml": "SML",
        "smlnj": "SML/NJ",
        "solidity": "Solidity (Ethereum)",
        "sol": "Solidity (Ethereum)",
        "solution-file": "Solution file",
        "sln": "Solution file",
        "soy": "Soy (Closure Template)",
        "sparql": "SPARQL",
        "rq": "SPARQL",
        "splunk-spl": "Splunk SPL",
        "sqf": "SQF: Status Quo Function (Arma 3)",
        "sql": "SQL",
        "iecst": "Structured Text (IEC 61131-3)",
        "systemd": "Systemd configuration file",
        "t4-templating": "T4 templating",
        "t4-cs": "T4 Text Templates (C#)",
        "t4": "T4 Text Templates (C#)",
        "t4-vb": "T4 Text Templates (VB)",
        "tap": "TAP",
        "tt2": "Template Toolkit 2",
        "toml": "TOML",
        "trickle": "trickle",
        "troy": "troy",
        "trig": "TriG",
        "ts": "TypeScript",
        "tsconfig": "TSConfig",
        "uscript": "UnrealScript",
        "uc": "UnrealScript",
        "uorazor": "UO Razor Script",
        "uri": "URI",
        "url": "URL",
        "vbnet": "VB.Net",
        "vhdl": "VHDL",
        "vim": "vim",
        "visual-basic": "Visual Basic",
        "vba": "VBA",
        "vb": "Visual Basic",
        "wasm": "WebAssembly",
        "web-idl": "Web IDL",
        "webidl": "Web IDL",
        "wiki": "Wiki markup",
        "wolfram": "Wolfram language",
        "nb": "Mathematica Notebook",
        "wl": "Wolfram language",
        "xeoracube": "XeoraCube",
        "xml-doc": "XML doc (.net)",
        "xojo": "Xojo (REALbasic)",
        "xquery": "XQuery",
        "yaml": "YAML",
        "yml": "YAML",
        "yang": "YANG"
      };
      Prism.plugins.toolbar.registerButton("show-language", function(env) {
        var pre = env.element.parentNode;
        if (!pre || !/pre/i.test(pre.nodeName)) {
          return;
        }
        function guessTitle(id) {
          if (!id) {
            return id;
          }
          return (id.substring(0, 1).toUpperCase() + id.substring(1)).replace(/s(?=cript)/, "S");
        }
        var language = pre.getAttribute("data-language") || Languages[env.language] || guessTitle(env.language);
        if (!language) {
          return;
        }
        var element = document.createElement("span");
        element.textContent = language;
        return element;
      });
    })();
  }
});

// node_modules/prismjs/plugins/line-highlight/prism-line-highlight.js
var require_prism_line_highlight = __commonJS({
  "node_modules/prismjs/plugins/line-highlight/prism-line-highlight.js"() {
    init_react();
    (function() {
      if (typeof Prism === "undefined" || typeof document === "undefined" || !document.querySelector) {
        return;
      }
      var LINE_NUMBERS_CLASS = "line-numbers";
      var LINKABLE_LINE_NUMBERS_CLASS = "linkable-line-numbers";
      function $$(selector, container) {
        return Array.prototype.slice.call((container || document).querySelectorAll(selector));
      }
      function hasClass(element, className) {
        return element.classList.contains(className);
      }
      function callFunction(func) {
        func();
      }
      var isLineHeightRounded = function() {
        var res;
        return function() {
          if (typeof res === "undefined") {
            var d3 = document.createElement("div");
            d3.style.fontSize = "13px";
            d3.style.lineHeight = "1.5";
            d3.style.padding = "0";
            d3.style.border = "0";
            d3.innerHTML = "&nbsp;<br />&nbsp;";
            document.body.appendChild(d3);
            res = d3.offsetHeight === 38;
            document.body.removeChild(d3);
          }
          return res;
        };
      }();
      function getContentBoxTopOffset(parent, child) {
        var parentStyle = getComputedStyle(parent);
        var childStyle = getComputedStyle(child);
        function pxToNumber(px) {
          return +px.substr(0, px.length - 2);
        }
        return child.offsetTop + pxToNumber(childStyle.borderTopWidth) + pxToNumber(childStyle.paddingTop) - pxToNumber(parentStyle.paddingTop);
      }
      function isActiveFor(pre) {
        if (!pre || !/pre/i.test(pre.nodeName)) {
          return false;
        }
        if (pre.hasAttribute("data-line")) {
          return true;
        }
        if (pre.id && Prism.util.isActive(pre, LINKABLE_LINE_NUMBERS_CLASS)) {
          return true;
        }
        return false;
      }
      var scrollIntoView = true;
      Prism.plugins.lineHighlight = {
        highlightLines: function highlightLines(pre, lines, classes) {
          lines = typeof lines === "string" ? lines : pre.getAttribute("data-line") || "";
          var ranges = lines.replace(/\s+/g, "").split(",").filter(Boolean);
          var offset = +pre.getAttribute("data-line-offset") || 0;
          var parseMethod = isLineHeightRounded() ? parseInt : parseFloat;
          var lineHeight = parseMethod(getComputedStyle(pre).lineHeight);
          var hasLineNumbers = Prism.util.isActive(pre, LINE_NUMBERS_CLASS);
          var codeElement = pre.querySelector("code");
          var parentElement = hasLineNumbers ? pre : codeElement || pre;
          var mutateActions = [];
          var codePreOffset = !codeElement || parentElement == codeElement ? 0 : getContentBoxTopOffset(pre, codeElement);
          ranges.forEach(function(currentRange) {
            var range = currentRange.split("-");
            var start2 = +range[0];
            var end = +range[1] || start2;
            var line = pre.querySelector('.line-highlight[data-range="' + currentRange + '"]') || document.createElement("div");
            mutateActions.push(function() {
              line.setAttribute("aria-hidden", "true");
              line.setAttribute("data-range", currentRange);
              line.className = (classes || "") + " line-highlight";
            });
            if (hasLineNumbers && Prism.plugins.lineNumbers) {
              var startNode = Prism.plugins.lineNumbers.getLine(pre, start2);
              var endNode = Prism.plugins.lineNumbers.getLine(pre, end);
              if (startNode) {
                var top = startNode.offsetTop + codePreOffset + "px";
                mutateActions.push(function() {
                  line.style.top = top;
                });
              }
              if (endNode) {
                var height = endNode.offsetTop - startNode.offsetTop + endNode.offsetHeight + "px";
                mutateActions.push(function() {
                  line.style.height = height;
                });
              }
            } else {
              mutateActions.push(function() {
                line.setAttribute("data-start", String(start2));
                if (end > start2) {
                  line.setAttribute("data-end", String(end));
                }
                line.style.top = (start2 - offset - 1) * lineHeight + codePreOffset + "px";
                line.textContent = new Array(end - start2 + 2).join(" \n");
              });
            }
            mutateActions.push(function() {
              line.style.width = pre.scrollWidth + "px";
            });
            mutateActions.push(function() {
              parentElement.appendChild(line);
            });
          });
          var id = pre.id;
          if (hasLineNumbers && Prism.util.isActive(pre, LINKABLE_LINE_NUMBERS_CLASS) && id) {
            if (!hasClass(pre, LINKABLE_LINE_NUMBERS_CLASS)) {
              mutateActions.push(function() {
                pre.classList.add(LINKABLE_LINE_NUMBERS_CLASS);
              });
            }
            var start = parseInt(pre.getAttribute("data-start") || "1");
            $$(".line-numbers-rows > span", pre).forEach(function(lineSpan, i3) {
              var lineNumber = i3 + start;
              lineSpan.onclick = function() {
                var hash = id + "." + lineNumber;
                scrollIntoView = false;
                location.hash = hash;
                setTimeout(function() {
                  scrollIntoView = true;
                }, 1);
              };
            });
          }
          return function() {
            mutateActions.forEach(callFunction);
          };
        }
      };
      function applyHash() {
        var hash = location.hash.slice(1);
        $$(".temporary.line-highlight").forEach(function(line) {
          line.parentNode.removeChild(line);
        });
        var range = (hash.match(/\.([\d,-]+)$/) || [, ""])[1];
        if (!range || document.getElementById(hash)) {
          return;
        }
        var id = hash.slice(0, hash.lastIndexOf("."));
        var pre = document.getElementById(id);
        if (!pre) {
          return;
        }
        if (!pre.hasAttribute("data-line")) {
          pre.setAttribute("data-line", "");
        }
        var mutateDom = Prism.plugins.lineHighlight.highlightLines(pre, range, "temporary ");
        mutateDom();
        if (scrollIntoView) {
          document.querySelector(".temporary.line-highlight").scrollIntoView();
        }
      }
      var fakeTimer = 0;
      Prism.hooks.add("before-sanity-check", function(env) {
        var pre = env.element.parentElement;
        if (!isActiveFor(pre)) {
          return;
        }
        var num = 0;
        $$(".line-highlight", pre).forEach(function(line) {
          num += line.textContent.length;
          line.parentNode.removeChild(line);
        });
        if (num && /^(?: \n)+$/.test(env.code.slice(-num))) {
          env.code = env.code.slice(0, -num);
        }
      });
      Prism.hooks.add("complete", function completeHook(env) {
        var pre = env.element.parentElement;
        if (!isActiveFor(pre)) {
          return;
        }
        clearTimeout(fakeTimer);
        var hasLineNumbers = Prism.plugins.lineNumbers;
        var isLineNumbersLoaded = env.plugins && env.plugins.lineNumbers;
        if (hasClass(pre, LINE_NUMBERS_CLASS) && hasLineNumbers && !isLineNumbersLoaded) {
          Prism.hooks.add("line-numbers", completeHook);
        } else {
          var mutateDom = Prism.plugins.lineHighlight.highlightLines(pre);
          mutateDom();
          fakeTimer = setTimeout(applyHash, 1);
        }
      });
      window.addEventListener("hashchange", applyHash);
      window.addEventListener("resize", function() {
        var actions = $$("pre").filter(isActiveFor).map(function(pre) {
          return Prism.plugins.lineHighlight.highlightLines(pre);
        });
        actions.forEach(callFunction);
      });
    })();
  }
});

// node_modules/jsonp/node_modules/ms/index.js
var require_ms = __commonJS({
  "node_modules/jsonp/node_modules/ms/index.js"(exports, module) {
    init_react();
    var s3 = 1e3;
    var m2 = s3 * 60;
    var h = m2 * 60;
    var d3 = h * 24;
    var y = d3 * 365.25;
    module.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse(val);
      } else if (type === "number" && isNaN(val) === false) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
      if (!match) {
        return;
      }
      var n2 = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n2 * y;
        case "days":
        case "day":
        case "d":
          return n2 * d3;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n2 * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n2 * m2;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n2 * s3;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n2;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      if (ms >= d3) {
        return Math.round(ms / d3) + "d";
      }
      if (ms >= h) {
        return Math.round(ms / h) + "h";
      }
      if (ms >= m2) {
        return Math.round(ms / m2) + "m";
      }
      if (ms >= s3) {
        return Math.round(ms / s3) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      return plural(ms, d3, "day") || plural(ms, h, "hour") || plural(ms, m2, "minute") || plural(ms, s3, "second") || ms + " ms";
    }
    function plural(ms, n2, name) {
      if (ms < n2) {
        return;
      }
      if (ms < n2 * 1.5) {
        return Math.floor(ms / n2) + " " + name;
      }
      return Math.ceil(ms / n2) + " " + name + "s";
    }
  }
});

// node_modules/jsonp/node_modules/debug/src/debug.js
var require_debug = __commonJS({
  "node_modules/jsonp/node_modules/debug/src/debug.js"(exports, module) {
    init_react();
    exports = module.exports = createDebug.debug = createDebug["default"] = createDebug;
    exports.coerce = coerce;
    exports.disable = disable;
    exports.enable = enable;
    exports.enabled = enabled;
    exports.humanize = require_ms();
    exports.names = [];
    exports.skips = [];
    exports.formatters = {};
    var prevTime;
    function selectColor(namespace) {
      var hash = 0, i3;
      for (i3 in namespace) {
        hash = (hash << 5) - hash + namespace.charCodeAt(i3);
        hash |= 0;
      }
      return exports.colors[Math.abs(hash) % exports.colors.length];
    }
    function createDebug(namespace) {
      function debug() {
        if (!debug.enabled)
          return;
        var self2 = debug;
        var curr = +new Date();
        var ms = curr - (prevTime || curr);
        self2.diff = ms;
        self2.prev = prevTime;
        self2.curr = curr;
        prevTime = curr;
        var args = new Array(arguments.length);
        for (var i3 = 0; i3 < args.length; i3++) {
          args[i3] = arguments[i3];
        }
        args[0] = exports.coerce(args[0]);
        if (typeof args[0] !== "string") {
          args.unshift("%O");
        }
        var index = 0;
        args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
          if (match === "%%")
            return match;
          index++;
          var formatter = exports.formatters[format];
          if (typeof formatter === "function") {
            var val = args[index];
            match = formatter.call(self2, val);
            args.splice(index, 1);
            index--;
          }
          return match;
        });
        exports.formatArgs.call(self2, args);
        var logFn = debug.log || exports.log || console.log.bind(console);
        logFn.apply(self2, args);
      }
      debug.namespace = namespace;
      debug.enabled = exports.enabled(namespace);
      debug.useColors = exports.useColors();
      debug.color = selectColor(namespace);
      if (typeof exports.init === "function") {
        exports.init(debug);
      }
      return debug;
    }
    function enable(namespaces) {
      exports.save(namespaces);
      exports.names = [];
      exports.skips = [];
      var split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
      var len = split.length;
      for (var i3 = 0; i3 < len; i3++) {
        if (!split[i3])
          continue;
        namespaces = split[i3].replace(/\*/g, ".*?");
        if (namespaces[0] === "-") {
          exports.skips.push(new RegExp("^" + namespaces.substr(1) + "$"));
        } else {
          exports.names.push(new RegExp("^" + namespaces + "$"));
        }
      }
    }
    function disable() {
      exports.enable("");
    }
    function enabled(name) {
      var i3, len;
      for (i3 = 0, len = exports.skips.length; i3 < len; i3++) {
        if (exports.skips[i3].test(name)) {
          return false;
        }
      }
      for (i3 = 0, len = exports.names.length; i3 < len; i3++) {
        if (exports.names[i3].test(name)) {
          return true;
        }
      }
      return false;
    }
    function coerce(val) {
      if (val instanceof Error)
        return val.stack || val.message;
      return val;
    }
  }
});

// node_modules/jsonp/node_modules/debug/src/browser.js
var require_browser = __commonJS({
  "node_modules/jsonp/node_modules/debug/src/browser.js"(exports, module) {
    init_react();
    exports = module.exports = require_debug();
    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = typeof chrome != "undefined" && typeof chrome.storage != "undefined" ? chrome.storage.local : localstorage();
    exports.colors = [
      "lightseagreen",
      "forestgreen",
      "goldenrod",
      "dodgerblue",
      "darkorchid",
      "crimson"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && window.process.type === "renderer") {
        return true;
      }
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    exports.formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (err) {
        return "[UnexpectedJSONParseError]: " + err.message;
      }
    };
    function formatArgs(args) {
      var useColors2 = this.useColors;
      args[0] = (useColors2 ? "%c" : "") + this.namespace + (useColors2 ? " %c" : " ") + args[0] + (useColors2 ? "%c " : " ") + "+" + exports.humanize(this.diff);
      if (!useColors2)
        return;
      var c4 = "color: " + this.color;
      args.splice(1, 0, c4, "color: inherit");
      var index = 0;
      var lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, function(match) {
        if (match === "%%")
          return;
        index++;
        if (match === "%c") {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c4);
    }
    function log() {
      return typeof console === "object" && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }
    function save(namespaces) {
      try {
        if (namespaces == null) {
          exports.storage.removeItem("debug");
        } else {
          exports.storage.debug = namespaces;
        }
      } catch (e2) {
      }
    }
    function load() {
      var r2;
      try {
        r2 = exports.storage.debug;
      } catch (e2) {
      }
      if (!r2 && typeof process !== "undefined" && "env" in process) {
        r2 = process.env.DEBUG;
      }
      return r2;
    }
    exports.enable(load());
    function localstorage() {
      try {
        return window.localStorage;
      } catch (e2) {
      }
    }
  }
});

// node_modules/jsonp/index.js
var require_jsonp = __commonJS({
  "node_modules/jsonp/index.js"(exports, module) {
    init_react();
    var debug = require_browser()("jsonp");
    module.exports = jsonp;
    var count = 0;
    function noop() {
    }
    function jsonp(url, opts, fn) {
      if (typeof opts == "function") {
        fn = opts;
        opts = {};
      }
      if (!opts)
        opts = {};
      var prefix = opts.prefix || "__jp";
      var id = opts.name || prefix + count++;
      var param = opts.param || "callback";
      var timeout = opts.timeout != null ? opts.timeout : 6e4;
      var enc = encodeURIComponent;
      var target = document.getElementsByTagName("script")[0] || document.head;
      var script;
      var timer;
      if (timeout) {
        timer = setTimeout(function() {
          cleanup();
          if (fn)
            fn(new Error("Timeout"));
        }, timeout);
      }
      function cleanup() {
        if (script.parentNode)
          script.parentNode.removeChild(script);
        window[id] = noop;
        if (timer)
          clearTimeout(timer);
      }
      function cancel() {
        if (window[id]) {
          cleanup();
        }
      }
      window[id] = function(data) {
        debug("jsonp got", data);
        cleanup();
        if (fn)
          fn(null, data);
      };
      url += (~url.indexOf("?") ? "&" : "?") + param + "=" + enc(id);
      url = url.replace("?&", "?");
      debug('jsonp req "%s"', url);
      script = document.createElement("script");
      script.src = url;
      target.parentNode.insertBefore(script, target);
      return cancel;
    }
  }
});

// node_modules/email-validator/index.js
var require_email_validator = __commonJS({
  "node_modules/email-validator/index.js"(exports) {
    "use strict";
    init_react();
    var tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    exports.validate = function(email) {
      if (!email)
        return false;
      if (email.length > 254)
        return false;
      var valid = tester.test(email);
      if (!valid)
        return false;
      var parts = email.split("@");
      if (parts[0].length > 64)
        return false;
      var domainParts = parts[1].split(".");
      if (domainParts.some(function(part) {
        return part.length > 63;
      }))
        return false;
      return true;
    };
  }
});

// browser-route-module:/Users/md/github-repos/remixbricks/app/root.tsx?browser
init_react();

// app/root.tsx
init_react();

// app/react-bricks/config.ts
init_react();

// app/react-bricks/bricks/index.ts
init_react();

// node_modules/react-bricks-ui/blog/react-bricks-ui-blog.esm.js
init_react();

// node_modules/react-bricks-ui/react-bricks-ui-d4d28821.esm.js
init_react();
var e = function(a2, r2) {
  return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e2, a3) {
    e2.__proto__ = a3;
  } || function(e2, a3) {
    for (var r3 in a3)
      Object.prototype.hasOwnProperty.call(a3, r3) && (e2[r3] = a3[r3]);
  }, e(a2, r2);
};
function a(a2, r2) {
  if (typeof r2 != "function" && r2 !== null)
    throw new TypeError("Class extends value " + String(r2) + " is not a constructor or null");
  function t2() {
    this.constructor = a2;
  }
  e(a2, r2), a2.prototype = r2 === null ? Object.create(r2) : (t2.prototype = r2.prototype, new t2());
}
var r = function() {
  return r = Object.assign || function(e2) {
    for (var a2, r2 = 1, t2 = arguments.length; r2 < t2; r2++)
      for (var l3 in a2 = arguments[r2])
        Object.prototype.hasOwnProperty.call(a2, l3) && (e2[l3] = a2[l3]);
    return e2;
  }, r.apply(this, arguments);
};
function t(e2, a2) {
  var r2 = {};
  for (var t2 in e2)
    Object.prototype.hasOwnProperty.call(e2, t2) && a2.indexOf(t2) < 0 && (r2[t2] = e2[t2]);
  if (e2 != null && typeof Object.getOwnPropertySymbols == "function") {
    var l3 = 0;
    for (t2 = Object.getOwnPropertySymbols(e2); l3 < t2.length; l3++)
      a2.indexOf(t2[l3]) < 0 && Object.prototype.propertyIsEnumerable.call(e2, t2[l3]) && (r2[t2[l3]] = e2[t2[l3]]);
  }
  return r2;
}
function l(e2, a2) {
  var r2 = typeof Symbol == "function" && e2[Symbol.iterator];
  if (!r2)
    return e2;
  var t2, l3, o3 = r2.call(e2), n2 = [];
  try {
    for (; (a2 === void 0 || a2-- > 0) && !(t2 = o3.next()).done; )
      n2.push(t2.value);
  } catch (e3) {
    l3 = { error: e3 };
  } finally {
    try {
      t2 && !t2.done && (r2 = o3.return) && r2.call(o3);
    } finally {
      if (l3)
        throw l3.error;
    }
  }
  return n2;
}
function o(e2, a2, r2) {
  if (r2 || arguments.length === 2)
    for (var t2, l3 = 0, o3 = a2.length; l3 < o3; l3++)
      !t2 && l3 in a2 || (t2 || (t2 = Array.prototype.slice.call(a2, 0, l3)), t2[l3] = a2[l3]);
  return e2.concat(t2 || Array.prototype.slice.call(a2));
}
var n = { gray900: "text-gray-900 dark:text-gray-100", gray800: "text-gray-800 dark:text-gray-100", gray700: "text-gray-700 dark:text-gray-300", gray600: "text-gray-600 dark:text-gray-400", gray500: "text-gray-500 dark:text-gray-400", purple500: "text-purple-500 dark:text-purple-300" };
var c = { white: { label: "White", value: { color: "#fff", className: "bg-white dark:bg-gray-900" } }, light: { label: "Light", value: { color: "#f9fafb", className: "bg-gray-50 dark:bg-gray-800" } }, gray: { label: "Gray", value: { color: "#f3f4f6", className: "bg-gray-100 dark:bg-gray-800" } }, lightBlue: { label: "Light Blue", value: { color: "#e0f2fe", className: "bg-sky-100 dark:bg-gray-800" } }, orange: { label: "Orange", value: { color: "#fef3c7", className: "bg-amber-100 dark:bg-gray-800" } }, green: { label: "Green", value: { color: "#ecfccb", className: "bg-lime-100 dark:bg-gray-800" } }, darkBlue: { label: "Dark Blue", value: { color: "#0c4a6e", className: "bg-sky-900 dark:bg-gray-800 dark" } }, dark: { label: "Dark", value: { color: "#111827", className: "bg-gray-900 dark:bg-gray-900 dark" } } };
var s = { gray: { label: "Gray", value: { color: "#6b7280", className: "text-gray-500 dark:text-gray-400" } }, pink: { label: "pink", value: { color: "#f472b6", className: "text-pink-400 dark:text-pink-300" } }, green: { label: "Green", value: { color: "#84cc16", className: "text-lime-500 dark:text-lime-300" } }, blue: { label: "Blue", value: { color: "#60a5fa", className: "text-blue-400 dark:text-blue-300" } } };
var g = { pink: { label: "pink", value: { color: "#ec4899", className: "bg-pink-500 text-white", className2: "text-pink-500" } }, pinkLight: { label: "Light pink", value: { color: "#fce7f3", className: "bg-pink-100 text-pink-500 dark:bg-pink-500 dark:text-white", className2: "text-pink-500" } }, azure: { label: "Azure", value: { color: "#0ea5e9", className: "bg-sky-500 text-white", className2: "text-sky-500" } }, azureLight: { label: "Light blue", value: { color: "#e0f2fe", className: "bg-sky-100 text-sky-500 dark:bg-sky-500 dark:text-white", className2: "text-sky-500" } }, green: { label: "Green", value: { color: "#84cc16", className: "bg-lime-500 text-white", className2: "text-lime-600" } }, greenLight: { label: "Green light", value: { color: "#d9f99d", className: "bg-lime-200 text-lime-600 dark:bg-lime-500 dark:text-white", className2: "text-lime-600" } } };
var i = { ocean: "from-blue-500 to-teal-400", violet: "from-purple-700 to-pink-500", sun: "from-red-500 to-yellow-400", none: "" };

// node_modules/react-bricks-ui/blog/react-bricks-ui-blog.esm.js
var import_classnames = __toESM(require_classnames());
var import_dayjs = __toESM(require_dayjs_min());
var i2 = __toESM(require_react());
var import_react = __toESM(require_react());
var C = __toESM(require_prism());
var L;
!function(e2) {
  e2.Title = "title", e2.Paragraph = "paragraph", e2.Quote = "quote", e2.Video = "video", e2.BlogImage = "image", e2.Tweet = "tweet", e2.CodeBlock = "code-block", e2.TweetLight = "tweet-light";
}(L || (L = {}));
var T = L;
var _ = function(e2) {
  var t2 = e2.className, n2 = e2.children;
  return import_react.default.createElement("div", { className: (0, import_classnames.default)("max-w-2xl mx-auto", t2) }, n2);
};
var N2 = function(t2) {
  var n2 = t2.bg, a2 = n2 === void 0 ? c.white.value : n2, r2 = t2.children, l3 = a2.className;
  return i2.createElement("section", { className: (0, import_classnames.default)(l3, "py-5 font-content") }, r2);
};
var D = function(e2) {
  var a2 = t(e2, []);
  return import_react.default.createElement("svg", r({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1249.24 1249.24" }, a2), import_react.default.createElement("defs", null, import_react.default.createElement("linearGradient", { id: "a", x1: "412.94", y1: "1046.05", x2: "847.4", y2: "1046.05", gradientUnits: "userSpaceOnUse" }, import_react.default.createElement("stop", { offset: "0", stopColor: "#a1a1a1" }), import_react.default.createElement("stop", { offset: "0.06", stopColor: "#b2b2b2" }), import_react.default.createElement("stop", { offset: "0.19", stopColor: "#d4d4d4" }), import_react.default.createElement("stop", { offset: "0.31", stopColor: "#ececec" }), import_react.default.createElement("stop", { offset: "0.43", stopColor: "#fafafa" }), import_react.default.createElement("stop", { offset: "0.52", stopColor: "#fff" }), import_react.default.createElement("stop", { offset: "0.64", stopColor: "#fcfcfb" }), import_react.default.createElement("stop", { offset: "0.75", stopColor: "#f1f1f1" }), import_react.default.createElement("stop", { offset: "0.86", stopColor: "#dfdfde" }), import_react.default.createElement("stop", { offset: "0.96", stopColor: "#c6c6c5" }), import_react.default.createElement("stop", { offset: "1", stopColor: "#babab9" })), import_react.default.createElement("linearGradient", { id: "b", x1: "636.17", y1: "1275.38", x2: "636.17", y2: "824.19", gradientUnits: "userSpaceOnUse" }, import_react.default.createElement("stop", { offset: "0", stopColor: "#fff" }), import_react.default.createElement("stop", { offset: "0.24", stopColor: "#fbfbfb" }), import_react.default.createElement("stop", { offset: "0.48", stopColor: "#f0f0ef" }), import_react.default.createElement("stop", { offset: "0.71", stopColor: "#dcdcdc" }), import_react.default.createElement("stop", { offset: "0.95", stopColor: "#c1c1c0" }), import_react.default.createElement("stop", { offset: "1", stopColor: "#babab9" }))), import_react.default.createElement("title", null, "Risorsa 1"), import_react.default.createElement("rect", { width: "1249.24", height: "1248.73", fill: "#dbdbdb" }), import_react.default.createElement("path", { d: "M847.4,1127.71c-143.89-51-289.4-49.27-434.46,0V991.51c146-37.36,290.76-34.92,434.46,0Z", fill: "url(#a)" }), import_react.default.createElement("path", { d: "M786.3,875.53c-10.86-.06,8.71,138,18.76,171.11,22.91,75.51,303.29,139.44,305.36,189.53.54,13.06,0,13.07,0,13.07H161.68l88.34-85,67.22-17.43L353,1130a110.24,110.24,0,0,0,19.46-11.81l73.47-55.77S469,1033.57,467,990s-1.92-114.47-1.92-114.47Z", fill: "url(#b)" }), import_react.default.createElement("path", { d: "M404.6,662.83s-50.28-93.71-59.12-108.28,6.63-64.51,0-74.92-8.84-162.33,44.2-208.12,84-58.27,84-58.27c13.13-11.33,100.51-43.25,137.24-37.47,110.46,17.39,92.08,11.69,112.48,10.41,46.89,7.56,82.71,20.19,77.16,50.92,17.67-9.09,31.7-9.19,46.59,1.11-4.11,8.69-4.63,14.4,0,18.73,0,0,57.45,2.08,57.45,145.69,0,138.25-10.72,187.72-26.51,195.63s-44.91,36-44.91,36S840.49,384,769.77,386s-122.54,37.61-293.91,0C438.29,377.73,384.71,612.88,404.6,662.83Z", fill: "#a8a8a8" }), import_react.default.createElement("path", { d: "M398.81,750.84s30.46,149.29,107,195.63c119.55,72.36,201.63,11,201.63,11s95.38-85.48,111-135.86c14-45,18.88-70.76,18.88-70.76s12.59,0,21-10.41,10.5-77,16.79-95.73,10.49-50-10.49-47.87-31.48,37.46-31.48,37.46,19.05-62.95,6.46-100.41-4.36-116-54.72-147.26-114.48-20.81-145.36-10.4-95.94,4.16-135.8-10.41-84.42,51.68-90.72,82.9-16.3,160.6-14.2,185.58l2.1,25s-14.69-66.6-27.28-70.76-35.67-4.16-31.47,45.79,9.29,11.28,27.28,104.06C379.93,792.46,398.81,750.84,398.81,750.84Z", fill: "#f4f4f4" }), import_react.default.createElement("path", { d: "M412.7,992.51s-18.3,107.61-30,110.64,130,72.81,182.08,79.52c0,0,31.3-54.17,66.37-70.55C631.14,1112.12,419.92,1040.45,412.7,992.51Z", fill: "#fff" }), import_react.default.createElement("path", { d: "M847.79,991.51s19.23,107.4,30.85,110.31-127.76,74.2-179.2,81.48c0,0-31.53-53.84-66.37-69.84C633.07,1113.46,841.15,1039.52,847.79,991.51Z", fill: "#fff" }));
};
var P = function(e2) {
  var t2 = e2.size, n2 = t2 === void 0 ? "large" : t2, r2 = l(fe(), 1)[0];
  return import_react.default.createElement(N2, null, import_react.default.createElement(_, null, import_react.default.createElement("div", { className: (0, import_classnames.default)("text-3xl", { "sm:text-5xl": n2 === "large" }, { "sm:text-4xl": n2 === "medium" }) }, import_react.default.createElement(N, { propName: "title", renderBlock: function(e3) {
    return import_react.default.createElement("h1", { className: (0, import_classnames.default)("text-left font-black text-gray-900 dark:text-gray-100 mb-3") }, e3.children);
  }, placeholder: "Type a title..." })), import_react.default.createElement("div", { className: "flex items-center space-x-2" }, r2.author.avatarUrl ? import_react.default.createElement("img", { src: r2.author.avatarUrl, alt: "Author", className: "rounded-full w-12 h-12" }) : import_react.default.createElement(D, { className: "rounded-full w-12 h-12" }), import_react.default.createElement("div", { className: "text-gray-700 dark:text-gray-200" }, r2.author.firstName || "John", " ", r2.author.lastName || "Doe", import_react.default.createElement("span", { className: "text-sm text-gray-300 dark:text-gray-500 px-2" }, "\u2022"), (0, import_dayjs.default)(r2.publishedAt || new Date()).format("MMMM DD, YYYY")))));
};
P.schema = { name: T.Title, label: "Title", playgroundLinkLabel: "View source code on Github", playgroundLinkUrl: "https://github.com/ReactBricks/react-bricks-ui/blob/master/src/blog/Title/Title.tsx", getDefaultProps: function() {
  return { title: [{ type: "paragraph", children: [{ text: "This is the Blog title" }] }] };
} };
var B2 = function() {
  return import_react.default.createElement(N2, null, import_react.default.createElement(_, null, import_react.default.createElement(Z, { propName: "text", placeholder: "Paragraph...", renderBlock: function(e2) {
    var t2 = e2.children;
    return import_react.default.createElement("p", { className: "text-lg leading-relaxed mb-2 text-gray-700 dark:text-gray-200" }, t2);
  }, allowedFeatures: [E.RichTextFeatures.Heading2, E.RichTextFeatures.Heading3, E.RichTextFeatures.Heading4, E.RichTextFeatures.Bold, E.RichTextFeatures.Italic, E.RichTextFeatures.Link, E.RichTextFeatures.Code, E.RichTextFeatures.Highlight, E.RichTextFeatures.UnorderedList, E.RichTextFeatures.OrderedList], renderH2: function(e2) {
    var t2 = e2.children;
    return import_react.default.createElement("h2", { className: "font-content text-4xl font-black text-gray-900 dark:text-gray-100 mb-3 pt-10" }, t2);
  }, renderH3: function(e2) {
    var t2 = e2.children;
    return import_react.default.createElement("h3", { className: "font-content text-3xl font-black text-gray-900 dark:text-gray-100 mb-3 pt-8" }, t2);
  }, renderH4: function(e2) {
    var t2 = e2.children;
    return import_react.default.createElement("h3", { className: "font-content text-2xl font-black text-gray-900 dark:text-gray-100 mb-3 pt-8" }, t2);
  }, renderUL: function(e2) {
    var t2 = e2.children;
    return import_react.default.createElement("ul", { className: "list-disc list-outside ml-5 mt-4 text-lg text-gray-700 dark:text-gray-200" }, t2);
  }, renderOL: function(e2) {
    var t2 = e2.children;
    return import_react.default.createElement("ol", { className: "list-decimal list-outside ml-5 mt-4 text-lg text-gray-700 dark:text-gray-200" }, t2);
  }, renderLink: function(e2) {
    var t2 = e2.children, n2 = e2.href;
    return import_react.default.createElement(z, { href: n2, className: "text-blue-500 underline dark:text-blue-300" }, t2);
  } })));
};
B2.schema = { name: T.Paragraph, label: "Paragraph", playgroundLinkLabel: "View source code on Github", playgroundLinkUrl: "https://github.com/ReactBricks/react-bricks-ui/blob/master/src/blog/Paragraph/Paragraph.tsx", getDefaultProps: function() {
  return { text: [{ type: "h2", children: [{ text: "Lorem ipsum dolor sit title" }] }, { type: "paragraph", children: [{ text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat sagittis faucibus." }] }] };
} };
var K = function() {
  return import_react.default.createElement(N2, null, import_react.default.createElement(_, null, import_react.default.createElement("div", { className: "text-2xl my-8 pl-6 py-1 border-l-4 border-pink-500 dark:border-pink-400" }, import_react.default.createElement(Z, { propName: "quote", placeholder: "Insert a quote", renderBlock: function(e2) {
    var t2 = e2.children;
    return import_react.default.createElement("p", { className: "text-2xl italic text-gray-500 dark:text-gray-200" }, t2);
  } }))));
};
K.schema = { name: T.Quote, label: "Quote", playgroundLinkLabel: "View source code on Github", playgroundLinkUrl: "https://github.com/ReactBricks/react-bricks-ui/blob/master/src/blog/Quote/Quote.tsx", getDefaultProps: function() {
  return { quote: "Innovation distinguishes between a leader and a follower." };
} };
var R = Object.freeze({ youtube: "https://www.youtube.com/embed/", vimeo: "https://player.vimeo.com/video/" });
var j = function(e2) {
  var t2 = e2.platform, n2 = e2.url;
  return import_react.default.createElement(N2, null, import_react.default.createElement(_, null, import_react.default.createElement("div", { className: "aspect-video" }, import_react.default.createElement("iframe", { key: "video iframe", width: "100%", height: "100%", src: "".concat(R[t2]).concat(n2, "?rel=0") }))));
};
j.schema = { name: T.Video, label: "Video", playgroundLinkLabel: "View source code on Github", playgroundLinkUrl: "https://github.com/ReactBricks/react-bricks-ui/blob/master/src/blog/Video/Video.tsx", getDefaultProps: function() {
  return { url: "A60xWr-nqv0", platform: "youtube" };
}, sideEditProps: [{ name: "platform", label: "Video platform", type: E.SideEditPropType.Select, selectOptions: { display: E.OptionsDisplay.Radio, options: [{ value: "youtube", label: "YouTube" }, { value: "vimeo", label: "Vimeo" }] } }, { name: "url", label: 'Video ID (i.e. "A60xWr-nqv0")', type: E.SideEditPropType.Text }] };
var I = function() {
  return import_react.default.createElement(N2, null, import_react.default.createElement(_, null, import_react.default.createElement(ne, { propName: "image", aspectRatio: 1.78, alt: "" })));
};
I.schema = { name: T.BlogImage, label: "Image", playgroundLinkLabel: "View source code on Github", playgroundLinkUrl: "https://github.com/ReactBricks/react-bricks-ui/blob/master/src/blog/Image/Image.tsx", getDefaultProps: function() {
  return {};
} };
var z2 = function(e2) {
  var t2 = e2.id, n2 = e2.placeholder, r2 = e2.align, o3 = e2.cards, l3 = e2.conversation, s3 = e2.theme, m2 = (0, import_react.useRef)(null), h = l((0, import_react.useState)(true), 2), g2 = h[0], f = h[1], b = (0, import_react.useContext)(B).isDarkColorMode;
  return (0, import_react.useEffect)(function() {
    var e3 = s3 === "dark" || s3 === "auto" && !!b ? "dark" : "";
    if (m2 == null ? void 0 : m2.current) {
      var n3 = m2 == null ? void 0 : m2.current.ownerDocument, a2 = m2 == null ? void 0 : m2.current.ownerDocument.defaultView, i3 = n3.createElement("script");
      i3.setAttribute("src", "https://platform.twitter.com/widgets.js"), i3.onload = function() {
        a2.twttr.ready().then(function(n4) {
          var a3 = n4.widgets;
          m2.current && (m2.current.innerHTML = ""), a3.createTweetEmbed(t2, m2.current, { align: r2, cards: o3, conversation: l3, theme: e3 }).then(function() {
            f(false);
          });
        });
      }, n3.body.appendChild(i3);
    }
  }, [g2, t2, n2, r2, o3, l3, s3, b]), i2.createElement(N2, null, i2.createElement(_, null, i2.createElement("div", { ref: m2 }, g2 && n2)));
};
z2.schema = { name: T.Tweet, label: "Tweet", playgroundLinkLabel: "View source code on Github", playgroundLinkUrl: "https://github.com/ReactBricks/react-bricks-ui/blob/master/src/blog/Tweet/Tweet.tsx", getDefaultProps: function() {
  return { bg: { color: "#fff", className: "bg-white dark:bg-gray-900" }, id: "1237840583982329857", placeholder: "Loading Tweet", position: "center", cards: "hidden", conversation: "none", theme: "auto", align: "center" };
}, sideEditProps: [{ name: "id", label: "Tweet ID", type: E.SideEditPropType.Text }, { name: "placeholder", label: "Loading Placeholder", type: E.SideEditPropType.Text }, { name: "align", label: "Align", type: E.SideEditPropType.Select, selectOptions: { display: E.OptionsDisplay.Select, options: [{ value: "left", label: "Left" }, { value: "center", label: "Center" }, { value: "right", label: "Right" }] } }, { name: "cards", label: "Cards", type: E.SideEditPropType.Select, selectOptions: { display: E.OptionsDisplay.Select, options: [{ value: "", label: "Show" }, { value: "hidden", label: "Hidden" }] } }, { name: "conversation", label: "Conversation", type: E.SideEditPropType.Select, selectOptions: { display: E.OptionsDisplay.Select, options: [{ value: "", label: "Show" }, { value: "none", label: "None" }] } }, { name: "theme", label: "Theme", type: E.SideEditPropType.Select, selectOptions: { display: E.OptionsDisplay.Select, options: [{ value: "auto", label: "Automatic" }, { value: "light", label: "Light" }, { value: "dark", label: "Dark" }] } }] };
var M = typeof window != "undefined" && /Win/i.test(navigator.platform);
var V = typeof window != "undefined" && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform);
var F = "npm__react-simple-code-editor__textarea";
var O = "\n/**\n * Reset the text fill color so that placeholder is visible\n */\n.".concat(F, ":empty {\n  -webkit-text-fill-color: inherit !important;\n}\n/**\n * Hack to apply on some CSS on IE10 and IE11\n */\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  /**\n    * IE doesn't support '-webkit-text-fill-color'\n    * So we use 'color: transparent' to make the text transparent on IE\n    * Unlike other browsers, it doesn't affect caret color in IE\n    */\n  .").concat(F, " {\n    color: transparent !important;\n  }\n  .").concat(F, "::selection {\n    background-color: #accef7 !important;\n    color: transparent !important;\n  }\n}\n");
var U = function(e2) {
  function a2() {
    var t2 = e2 !== null && e2.apply(this, arguments) || this;
    return t2.state = { capture: true }, t2._recordCurrentState = function() {
      var e3 = t2._input;
      if (e3) {
        var n2 = e3.value, a3 = e3.selectionStart, r2 = e3.selectionEnd;
        t2._recordChange({ value: n2, selectionStart: a3, selectionEnd: r2 });
      }
    }, t2._getLines = function(e3, t3) {
      return e3.substring(0, t3).split("\n");
    }, t2._recordChange = function(e3, a3) {
      var r2, o3;
      a3 === void 0 && (a3 = false);
      var l3 = t2._history, i3 = l3.stack, s3 = l3.offset;
      if (i3.length && s3 > -1) {
        t2._history.stack = i3.slice(0, s3 + 1);
        var c4 = t2._history.stack.length;
        if (c4 > 100) {
          var d3 = c4 - 100;
          t2._history.stack = i3.slice(d3, c4), t2._history.offset = Math.max(t2._history.offset - d3, 0);
        }
      }
      var u2 = Date.now();
      if (t2 && a3) {
        var p2 = t2._history.stack[t2._history.offset];
        if (p2 && u2 - p2.timestamp < 3e3) {
          var m2 = /[^a-z0-9]([a-z0-9]+)$/i, h = (r2 = t2._getLines(p2.value, p2.selectionStart).pop()) === null || r2 === void 0 ? void 0 : r2.match(m2), g2 = (o3 = t2._getLines(e3.value, e3.selectionStart).pop()) === null || o3 === void 0 ? void 0 : o3.match(m2);
          if (h && g2 && g2[1].startsWith(h[1]))
            return void (t2._history.stack[t2._history.offset] = r(r({}, e3), { timestamp: u2 }));
        }
      }
      t2._history.stack.push(r(r({}, e3), { timestamp: u2 })), t2._history.offset++;
    }, t2._updateInput = function(e3) {
      var n2 = t2._input;
      n2 && (n2.value = e3.value, n2.selectionStart = e3.selectionStart, n2.selectionEnd = e3.selectionEnd, t2.props.onValueChange(e3.value));
    }, t2._applyEdits = function(e3) {
      var a3 = t2._input, r2 = t2._history.stack[t2._history.offset];
      r2 && a3 && (t2._history.stack[t2._history.offset] = r(r({}, r2), { selectionStart: a3.selectionStart, selectionEnd: a3.selectionEnd })), t2._recordChange(e3), t2._updateInput(e3);
    }, t2._undoEdit = function() {
      var e3 = t2._history, n2 = e3.stack, a3 = e3.offset, r2 = n2[a3 - 1];
      r2 && (t2._updateInput(r2), t2._history.offset = Math.max(a3 - 1, 0));
    }, t2._redoEdit = function() {
      var e3 = t2._history, n2 = e3.stack, a3 = e3.offset, r2 = n2[a3 + 1];
      r2 && (t2._updateInput(r2), t2._history.offset = Math.min(a3 + 1, n2.length - 1));
    }, t2._handleKeyDown = function(e3) {
      var n2 = t2.props, a3 = n2.tabSize, r2 = n2.insertSpaces, o3 = n2.ignoreTabKey, l3 = n2.onKeyDown;
      if (!l3 || (l3(e3), !e3.defaultPrevented)) {
        e3.keyCode === 27 && e3.target.blur();
        var i3 = e3.target, s3 = i3.value, c4 = i3.selectionStart, d3 = i3.selectionEnd, u2 = (r2 ? " " : "	").repeat(a3);
        if (e3.keyCode === 9 && !o3 && t2.state.capture)
          if (e3.preventDefault(), e3.shiftKey) {
            var p2 = (f = t2._getLines(s3, c4)).length - 1, m2 = t2._getLines(s3, d3).length - 1, h = s3.split("\n").map(function(e4, t3) {
              return t3 >= p2 && t3 <= m2 && e4.startsWith(u2) ? e4.substring(u2.length) : e4;
            }).join("\n");
            if (s3 !== h) {
              var g2 = f[p2];
              t2._applyEdits({ value: h, selectionStart: g2.startsWith(u2) ? c4 - u2.length : c4, selectionEnd: d3 - (s3.length - h.length) });
            }
          } else if (c4 !== d3) {
            var f, b = (f = t2._getLines(s3, c4)).length - 1, y = t2._getLines(s3, d3).length - 1;
            g2 = f[b];
            t2._applyEdits({ value: s3.split("\n").map(function(e4, t3) {
              return t3 >= b && t3 <= y ? u2 + e4 : e4;
            }).join("\n"), selectionStart: /\S/.test(g2) ? c4 + u2.length : c4, selectionEnd: d3 + u2.length * (y - b + 1) });
          } else {
            var k2 = c4 + u2.length;
            t2._applyEdits({ value: s3.substring(0, c4) + u2 + s3.substring(d3), selectionStart: k2, selectionEnd: k2 });
          }
        else if (e3.keyCode === 8) {
          var v = c4 !== d3;
          if (s3.substring(0, c4).endsWith(u2) && !v) {
            e3.preventDefault();
            k2 = c4 - u2.length;
            t2._applyEdits({ value: s3.substring(0, c4 - u2.length) + s3.substring(d3), selectionStart: k2, selectionEnd: k2 });
          }
        } else if (e3.keyCode === 13) {
          if (c4 === d3) {
            var x = t2._getLines(s3, c4).pop(), E2 = x == null ? void 0 : x.match(/^\s+/);
            if (E2 && E2[0]) {
              e3.preventDefault();
              var w2 = "\n" + E2[0];
              k2 = c4 + w2.length;
              t2._applyEdits({ value: s3.substring(0, c4) + w2 + s3.substring(d3), selectionStart: k2, selectionEnd: k2 });
            }
          }
        } else if (e3.keyCode === 57 || e3.keyCode === 219 || e3.keyCode === 222 || e3.keyCode === 192) {
          var C3 = void 0;
          e3.keyCode === 57 && e3.shiftKey ? C3 = ["(", ")"] : e3.keyCode === 219 ? C3 = e3.shiftKey ? ["{", "}"] : ["[", "]"] : e3.keyCode === 222 ? C3 = e3.shiftKey ? ['"', '"'] : ["'", "'"] : e3.keyCode !== 192 || e3.shiftKey || (C3 = ["`", "`"]), c4 !== d3 && C3 && (e3.preventDefault(), t2._applyEdits({ value: s3.substring(0, c4) + C3[0] + s3.substring(c4, d3) + C3[1] + s3.substring(d3), selectionStart: c4, selectionEnd: d3 + 2 }));
        } else
          !(V ? e3.metaKey && e3.keyCode === 90 : e3.ctrlKey && e3.keyCode === 90) || e3.shiftKey || e3.altKey ? (V ? e3.metaKey && e3.keyCode === 90 && e3.shiftKey : M ? e3.ctrlKey && e3.keyCode === 89 : e3.ctrlKey && e3.keyCode === 90 && e3.shiftKey) && !e3.altKey ? (e3.preventDefault(), t2._redoEdit()) : e3.keyCode !== 77 || !e3.ctrlKey || V && !e3.shiftKey || (e3.preventDefault(), t2.setState(function(e4) {
            return { capture: !e4.capture };
          })) : (e3.preventDefault(), t2._undoEdit());
      }
    }, t2._handleChange = function(e3) {
      var n2 = e3.target, a3 = n2.value, r2 = n2.selectionStart, o3 = n2.selectionEnd;
      t2._recordChange({ value: a3, selectionStart: r2, selectionEnd: o3 }, true), t2.props.onValueChange(a3);
    }, t2._history = { stack: [], offset: -1 }, t2;
  }
  return a(a2, e2), a2.prototype.componentDidMount = function() {
    this._recordCurrentState();
  }, Object.defineProperty(a2.prototype, "session", { get: function() {
    return { history: this._history };
  }, set: function(e3) {
    this._history = e3.history;
  }, enumerable: false, configurable: true }), a2.prototype.render = function() {
    var e3 = this, a3 = this.props, r2 = a3.value, o3 = a3.style, l3 = a3.padding, s3 = a3.highlight, c4 = a3.textareaId, d3 = a3.textareaClassName, u2 = a3.autoFocus, p2 = a3.disabled, m2 = a3.form, h = a3.maxLength, g2 = a3.minLength, f = a3.name, b = a3.placeholder, y = a3.readOnly, k2 = a3.required, v = a3.onClick, x = a3.onFocus, E2 = a3.onBlur, w2 = a3.onKeyUp;
    a3.onKeyDown, a3.onValueChange, a3.tabSize, a3.insertSpaces, a3.ignoreTabKey;
    var C3 = a3.preClassName, S = t(a3, ["value", "style", "padding", "highlight", "textareaId", "textareaClassName", "autoFocus", "disabled", "form", "maxLength", "minLength", "name", "placeholder", "readOnly", "required", "onClick", "onFocus", "onBlur", "onKeyUp", "onKeyDown", "onValueChange", "tabSize", "insertSpaces", "ignoreTabKey", "preClassName"]), L3 = { paddingTop: l3, paddingRight: l3, paddingBottom: l3, paddingLeft: l3 }, T2 = s3(r2);
    return i2.createElement("div", r({}, S, { style: r(r({}, A2.container), o3) }), i2.createElement("textarea", { ref: function(t2) {
      return e3._input = t2;
    }, style: r(r(r({}, A2.editor), A2.textarea), L3), className: F + (d3 ? " ".concat(d3) : ""), id: c4, value: r2, onChange: this._handleChange, onKeyDown: this._handleKeyDown, onClick: v, onKeyUp: w2, onFocus: x, onBlur: E2, disabled: p2, form: m2, maxLength: h, minLength: g2, name: f, placeholder: b, readOnly: y, required: k2, autoFocus: u2, autoCapitalize: "off", autoComplete: "off", autoCorrect: "off", spellCheck: false, "data-gramm": false }), i2.createElement("pre", r({ className: C3, "aria-hidden": "true", style: r(r(r({}, A2.editor), A2.highlight), L3) }, typeof T2 == "string" ? { dangerouslySetInnerHTML: { __html: T2 + "<br />" } } : { children: T2 })), i2.createElement("style", { type: "text/css", dangerouslySetInnerHTML: { __html: O } }));
  }, a2.defaultProps = { tabSize: 2, insertSpaces: true, ignoreTabKey: false, padding: 0 }, a2;
}(i2.Component);
var A2 = { container: { position: "relative", textAlign: "left", boxSizing: "border-box", padding: 0, overflow: "hidden" }, textarea: { position: "absolute", top: 0, left: 0, height: "100%", width: "100%", resize: "none", color: "inherit", overflow: "hidden", MozOsxFontSmoothing: "grayscale", WebkitFontSmoothing: "antialiased", WebkitTextFillColor: "transparent" }, highlight: { position: "relative", pointerEvents: "none" }, editor: { margin: 0, border: 0, background: "none", boxSizing: "inherit", display: "inherit", fontFamily: "inherit", fontSize: "inherit", fontStyle: "inherit", fontVariantLigatures: "inherit", fontWeight: "inherit", letterSpacing: "inherit", lineHeight: "inherit", tabSize: "inherit", textIndent: "inherit", textRendering: "inherit", textTransform: "inherit", whiteSpace: "pre-wrap", wordBreak: "keep-all", overflowWrap: "break-word" } };
var q = function() {
  return import_react.default.createElement("style", null, `
      code[class*=language-],pre[class*=language-]{color:#d6deeb;font-family:Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}code[class*=language-] ::-moz-selection,code[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection{text-shadow:none;background:rgba(29,59,83,.99)}code[class*=language-] ::selection,code[class*=language-]::selection,pre[class*=language-] ::selection,pre[class*=language-]::selection{text-shadow:none;background:rgba(29,59,83,.99)}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto}:not(pre)>code[class*=language-],pre[class*=language-]{color:#fff;background:#011627}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}.token.cdata,.token.comment,.token.prolog{color:#637777;font-style:italic}.token.punctuation{color:#c792ea}.namespace{color:#b2ccd6}.token.deleted{color:rgba(239,83,80,.56);font-style:italic}.token.property,.token.symbol{color:#80cbc4}.token.keyword,.token.operator,.token.tag{color:#7fdbca}.token.boolean{color:#ff5874}.token.number{color:#f78c6c}.token.builtin,.token.char,.token.constant,.token.function{color:#82aaff}.token.doctype,.token.selector{color:#c792ea;font-style:italic}.token.attr-name,.token.inserted{color:#addb67;font-style:italic}.language-css .token.string,.style .token.string,.token.entity,.token.string,.token.url{color:#addb67}.token.atrule,.token.attr-value,.token.class-name{color:#ffcb8b}.token.important,.token.regex,.token.variable{color:#d6deeb}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}
      pre[data-line] {
        position: relative;
        padding: 1em 0 1em 3em;
      }
      
      .line-highlight {
        position: absolute;
        left: 0;
        right: 0;
        padding: inherit 0;
        margin-top: 1em; /* Same as .prism\u2019s padding-top */
      
        background: hsla(24, 20%, 50%,.08);
        background: linear-gradient(to right, hsla(24, 20%, 50%,.1) 70%, hsla(24, 20%, 50%,0));
      
        pointer-events: none;
      
        line-height: inherit;
        white-space: pre;
      }
      
      @media print {
        .line-highlight {
          /*
           * This will prevent browsers from replacing the background color with white.
           * It's necessary because the element is layered on top of the displayed code.
           */
          -webkit-print-color-adjust: exact;
          color-adjust: exact;
        }
      }
      
        .line-highlight:before,
        .line-highlight[data-end]:after {
          content: attr(data-start);
          position: absolute;
          top: .4em;
          left: .6em;
          min-width: 1em;
          padding: 0 .5em;
          background-color: hsla(24, 20%, 50%,.4);
          color: hsl(24, 20%, 95%);
          font: bold 65%/1.5 sans-serif;
          text-align: center;
          vertical-align: .3em;
          border-radius: 999px;
          text-shadow: none;
          box-shadow: 0 1px white;
        }
      
        .line-highlight[data-end]:after {
          content: attr(data-end);
          top: auto;
          bottom: .4em;
        }
      
      .line-numbers .line-highlight:before,
      .line-numbers .line-highlight:after {
        content: none;
      }
      
      pre[id].linkable-line-numbers span.line-numbers-rows {
        pointer-events: all;
      }
      pre[id].linkable-line-numbers span.line-numbers-rows > span:before {
        cursor: pointer;
      }
      pre[id].linkable-line-numbers span.line-numbers-rows > span:hover:before {
        background-color: rgba(128, 128, 128, .2);
      }
      pre[class*="language-"].line-numbers {
        position: relative;
        padding-left: 3.8em;
        counter-reset: linenumber;
      }
      
      pre[class*="language-"].line-numbers > code {
        position: relative;
        white-space: inherit;
      }
      
      .line-numbers .line-numbers-rows {
        position: absolute;
        pointer-events: none;
        top: 0;
        font-size: 100%;
        left: -3.8em;
        width: 3em; /* works for line-numbers below 1000 lines */
        letter-spacing: -1px;
        border-right: 1px solid #999;
      
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      
      }
      
        .line-numbers-rows > span {
          display: block;
          counter-increment: linenumber;
        }
      
          .line-numbers-rows > span:before {
            content: counter(linenumber);
            color: #999;
            display: block;
            padding-right: 0.8em;
            text-align: right;
          }
            
      `);
};
var H = function(e2) {
  var t2 = e2.code, a2 = e2.plugins, r2 = e2.language, o3 = e2.dataLine, l3 = i2.useRef(null);
  i2.useEffect(function() {
    l3 && l3.current && C.highlightElement(l3.current);
  }, [o3]);
  var s3 = o3 ? { "data-line": o3 } : {};
  return i2.createElement(i2.Fragment, null, i2.createElement(q, null), i2.createElement("pre", r({ className: "rounded-lg ".concat(a2 ? a2.join(" ") : "") }, s3), i2.createElement("code", { ref: l3, className: "language-".concat(r2) }, t2.trim())));
};
require_prism_typescript(), require_prism_bash(), require_prism_jsx(), require_prism_tsx(), require_prism_line_numbers(), require_prism_show_language(), require_prism_line_highlight();
var W = function(e2) {
  var t2 = e2.language, n2 = t2 === void 0 ? "javascript" : t2, r2 = e2.dataline, o3 = r2 === void 0 ? "" : r2, l3 = e2.showLineNumbers, s3 = l3 !== void 0 && l3, c4 = l(ie("code"), 3), d3 = c4[0], u2 = c4[1], p2 = c4[2], m2 = [];
  return s3 && m2.push("line-numbers"), o3 !== "" && m2.push("line-highlight"), p2 ? i2.createElement(N2, null, i2.createElement(q, null), i2.createElement(_, null, i2.createElement("style", null, "\n        .dark pre {\n          background-color: #1f2937;\n        }\n        .line-highlight {\n          background: rgba(255,255,255,0.2);\n        }\n        .line-highlight:before {\n          content: '';\n        }\n      "), i2.createElement(H, { code: d3, language: n2, plugins: m2, dataLine: o3 }))) : i2.createElement(N2, null, i2.createElement(q, null), i2.createElement("style", null, "\n        .dark pre {\n          background-color: #1f2937;\n        }\n\n        .editor-line-number {\n          counter-reset: line;\n        }\n\n        .editor-line-number #codeArea {\n          outline: none;\n          padding-left: 40px !important;\n        }\n\n        .editor-line-number pre {\n          padding-left: 40px !important;\n        }\n\n        .editor-line-number .row-line-number {\n          position: absolute;\n          left: 0px;\n          color: #999;\n          text-align: right;\n          width: 20px;\n          font-weight: 100;\n        }\n      "), i2.createElement(_, null, i2.createElement("pre", { className: "rounded-lg language-".concat(n2) }, i2.createElement("code", { className: "language-".concat(n2) }, i2.createElement(U, { value: d3, onValueChange: u2, highlight: function(e3) {
    return C.highlight(e3 || "", C.languages[n2], "".concat(n2)).split("\n").map(function(e4, t3) {
      return s3 ? "<span class='row-line-number'>".concat(t3 + 1, "</span>").concat(e4) : e4;
    }).join("\n");
  }, padding: 10, textareaId: "codeArea", className: s3 ? "editor-line-number" : "" })))));
};
W.schema = { name: T.CodeBlock, label: "Code", playgroundLinkLabel: "View source code on Github", playgroundLinkUrl: "https://github.com/ReactBricks/react-bricks-ui/blob/master/src/blog/Code/Code.tsx", getDefaultProps: function() {
  return { code: "import React from 'react'\nconsole.log('hello')\nconst a = 2\nlet b = 3", language: "typescript", dataline: "", showLineNumbers: false };
}, sideEditProps: [{ name: "language", label: "Language", type: E.SideEditPropType.Select, selectOptions: { display: E.OptionsDisplay.Select, options: [{ value: "javascript", label: "JavaScript" }, { value: "css", label: "CSS" }, { value: "typescript", label: "TypeScript" }, { value: "bash", label: "Bash" }, { value: "jsx", label: "JSX" }, { value: "tsx", label: "TSX" }] } }, { name: "dataline", label: "Highlight line (ex: 1,2,3): ", type: E.SideEditPropType.Text }, { name: "showLineNumbers", label: "Show Line Numbers?", type: E.SideEditPropType.Boolean }, { name: "helper", label: "Warning", type: E.SideEditPropType.Custom, component: function() {
  return i2.createElement("div", { className: "text-sm" }, "The highlighted lines are visible only in preview mode and in the frontend site.");
} }] };
var G = function(e2) {
  var t2 = e2.tweetLink, r2 = e2.authorLink, o3 = oe(), l3 = o3.isAdmin, i3 = o3.previewMode, c4 = l((0, import_react.useState)(false), 2), u2 = c4[0], p2 = c4[1];
  return import_react.default.createElement(N2, null, import_react.default.createElement("div", { className: "mx-auto max-w-lg px-6" }, import_react.default.createElement("div", { onClick: function(e3) {
    return function(t3) {
      if (l3 && !i3)
        return t3.preventDefault();
      typeof window !== void 0 && window.open(e3);
    };
  }(t2), className: "block font-sans p-4 bg-white hover:bg-gray-50 border dark:bg-black border-gray-300 dark:border-gray-800 hover:shadow-lg transition-shadow duration-200 rounded-xl" }, import_react.default.createElement("div", { className: "flex items-start justify-between mb-3" }, import_react.default.createElement("a", { href: r2, rel: "noopener noreferrer", target: "_blank", className: "flex items-center", onClick: function(e3) {
    return e3.stopPropagation();
  } }, import_react.default.createElement("div", { className: "mr-2 w-12 h-12" }, import_react.default.createElement(ne, { propName: "author", alt: "athor-name", imageClassName: "rounded-full filter hover:brightness-90" })), import_react.default.createElement("div", { className: "group" }, import_react.default.createElement(N, { propName: "authorName", placeholder: "Author Name", renderBlock: function(e3) {
    var t3 = e3.children;
    return import_react.default.createElement("div", { className: "text-md text-gray-900 font-bold leading-tight group-hover:underline dark:text-neutral-300" }, t3);
  } }), import_react.default.createElement(N, { propName: "authorTwitterHandle", placeholder: "Author @", renderBlock: function(e3) {
    var t3 = e3.children;
    return import_react.default.createElement("div", { className: "text-sm text-gray-500 font-medium tracking-tight" }, t3);
  } }))), import_react.default.createElement("div", { className: "text-2xl dark:text-neutral-300", style: { color: "#1d9bf0" } }, import_react.default.createElement(FaTwitter, null))), import_react.default.createElement(A, { propName: "tweetContent", placeholder: "tweet content", renderBlock: function(e3) {
    var t3 = e3.children;
    return import_react.default.createElement("div", { className: "mb-2 text-xl font-medium leading-tight dark:text-neutral-300" }, t3);
  }, plugins: [r(r({}, X.link), { renderElement: function(e3) {
    var t3 = e3.attributes, a2 = e3.children, r3 = e3.element;
    return import_react.default.createElement("a", r({}, t3, { href: r3.url, onClick: function(e4) {
      return e4.stopPropagation();
    }, className: "hover:text-sky-600", onMouseEnter: function() {
      return p2(true);
    }, onMouseLeave: function() {
      return p2(false);
    }, style: { color: u2 ? "#1a8cd8" : "#1d9bf0" }, target: "_blank", rel: "noopener noreferrer" }), a2);
  }, label: "Twitter profile link", button: { isActive: X.link.button.isActive, icon: import_react.default.createElement(FaTwitter, null) } })] }), import_react.default.createElement(N, { propName: "date", placeholder: "Date", renderBlock: function(e3) {
    var t3 = e3.children;
    return import_react.default.createElement("div", { className: "inline-block font-normal text-gray-500 tracking-tight hover:underline" }, t3);
  } }))));
};
G.schema = { name: T.TweetLight, label: "Tweet light", playgroundLinkLabel: "View source code on Github", playgroundLinkUrl: "https://github.com/ReactBricks/react-bricks-ui/blob/master/src/blog/Tweet/TweetLight.tsx", getDefaultProps: function() {
  return { authorName: [{ type: "paragraph", children: [{ text: "John Doe" }] }], author: { src: "https://images.reactbricks.com/original/b21a4d81-5354-48b5-88bf-89dc9ed6f302.svg", placeholderSrc: "https://images.reactbricks.com/original/b21a4d81-5354-48b5-88bf-89dc9ed6f302.svg", srcSet: "", width: 1249.24, height: 1249.24, alt: "Author name", seoName: "author" }, tweetLink: "https://twitter.com/matfrana/status/1237840583982329857", authorLink: "https://twitter.com/matfrana", authorTwitterHandle: [{ type: "paragraph", children: [{ text: "@JohnDoe" }] }], tweetContent: [{ type: "paragraph", children: [{ text: "Lorem ipsum dolor sit amet " }, { type: "link", url: "https://twitter.com/ReactBricks", children: [{ text: "@ReactBricks" }] }, { text: "" }] }], date: [{ type: "paragraph", children: [{ text: "10:18 \xB7 Jan 04, 2022" }] }] };
}, sideEditProps: [{ name: "helper", label: "Why Tweet light?", type: E.SideEditPropType.Custom, component: function() {
  return import_react.default.createElement("div", { className: "text-sm" }, "This is a light version of the Tweet content block: it doesn't load the Twitter JavaScript, so it is much better performance-wise, but it requires manually entering the Tweet content and properties.");
} }, { name: "tweetLink", label: "Tweet Link", type: E.SideEditPropType.Text }, { name: "authorLink", label: "Author Link", type: E.SideEditPropType.Text }] };
var J = [P, B2, K, j, I, W, z2, G];

// node_modules/react-bricks-ui/website/react-bricks-ui-website.esm.js
init_react();
var c3 = __toESM(require_react());
var import_react3 = __toESM(require_react());
var import_classnames2 = __toESM(require_classnames());

// node_modules/pigeon-maps/lib/index.esm.js
init_react();
var import_react2 = __toESM(require_react());
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
function ownKeys(object, enumerableOnly) {
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
function _objectSpread2(target) {
  for (var i3 = 1; i3 < arguments.length; i3++) {
    var source = arguments[i3] != null ? arguments[i3] : {};
    if (i3 % 2) {
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
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
function debounce(func, wait) {
  var timeout;
  return function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var context = this;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      return func.apply(context, args);
    }, wait);
  };
}
function parentHasClass(element, className) {
  while (element) {
    if (element.classList && element.classList.contains(className)) {
      return true;
    }
    element = element.parentElement;
  }
  return false;
}
function parentPosition(element) {
  var rect = element.getBoundingClientRect();
  return {
    x: rect.left,
    y: rect.top
  };
}
function osm(x, y, z4) {
  var s3 = String.fromCharCode(97 + (x + y + z4) % 3);
  return "https://" + s3 + ".tile.openstreetmap.org/" + z4 + "/" + x + "/" + y + ".png";
}
var ANIMATION_TIME = 300;
var DIAGONAL_THROW_TIME = 1500;
var SCROLL_PIXELS_FOR_ZOOM_LEVEL = 150;
var MIN_DRAG_FOR_THROW = 40;
var CLICK_TOLERANCE = 2;
var DOUBLE_CLICK_DELAY = 300;
var DEBOUNCE_DELAY = 60;
var PINCH_RELEASE_THROW_DELAY = 300;
var WARNING_DISPLAY_TIMEOUT = 300;
var NOOP = function NOOP2() {
  return true;
};
var lng2tile = function lng2tile2(lon, zoom) {
  return (lon + 180) / 360 * Math.pow(2, zoom);
};
var lat2tile = function lat2tile2(lat, zoom) {
  return (1 - Math.log(Math.tan(lat * Math.PI / 180) + 1 / Math.cos(lat * Math.PI / 180)) / Math.PI) / 2 * Math.pow(2, zoom);
};
function tile2lng(x, z4) {
  return x / Math.pow(2, z4) * 360 - 180;
}
function tile2lat(y, z4) {
  var n2 = Math.PI - 2 * Math.PI * y / Math.pow(2, z4);
  return 180 / Math.PI * Math.atan(0.5 * (Math.exp(n2) - Math.exp(-n2)));
}
function getMousePixel(dom, event) {
  var parent = parentPosition(dom);
  return [event.clientX - parent.x, event.clientY - parent.y];
}
function easeOutQuad(t2) {
  return t2 * (2 - t2);
}
var absoluteMinMax = [tile2lat(Math.pow(2, 10), 10), tile2lat(0, 10), tile2lng(0, 10), tile2lng(Math.pow(2, 10), 10)];
var hasWindow = typeof window !== "undefined";
var performanceNow = hasWindow && window.performance && window.performance.now ? function() {
  return window.performance.now();
} : function() {
  var timeStart = new Date().getTime();
  return function() {
    return new Date().getTime() - timeStart;
  };
}();
var requestAnimationFrame = function requestAnimationFrame2(callback) {
  if (hasWindow) {
    return (window.requestAnimationFrame || window.setTimeout)(callback);
  } else {
    callback(new Date().getTime());
    return null;
  }
};
var cancelAnimationFrame = function cancelAnimationFrame2(animFrame) {
  return hasWindow && animFrame ? (window.cancelAnimationFrame || window.clearTimeout)(animFrame) : false;
};
function srcSet(dprs, url, x, y, z4) {
  if (!dprs || dprs.length === 0) {
    return "";
  }
  return dprs.map(function(dpr) {
    return url(x, y, z4, dpr) + (dpr === 1 ? "" : " " + dpr + "x");
  }).join(", ");
}
var Map = /* @__PURE__ */ function(_Component) {
  _inheritsLoose(Map2, _Component);
  function Map2(props) {
    var _ref, _props$defaultZoom, _ref2, _props$defaultCenter, _ref3, _props$width, _ref4, _props$height;
    var _this;
    _this = _Component.call(this, props) || this;
    _this._dragStart = null;
    _this._mouseDown = false;
    _this._moveEvents = [];
    _this._lastClick = null;
    _this._lastTap = null;
    _this._lastWheel = null;
    _this._touchStartPixel = null;
    _this._touchStartMidPoint = null;
    _this._touchStartDistance = null;
    _this._secondTouchEnd = null;
    _this._warningClearTimeout = null;
    _this._isAnimating = false;
    _this._animationStart = null;
    _this._animationEnd = null;
    _this._zoomStart = null;
    _this._centerTarget = null;
    _this._zoomTarget = null;
    _this._zoomAround = null;
    _this._animFrame = null;
    _this._boundsSynced = false;
    _this._minMaxCache = null;
    _this._resizeObserver = null;
    _this.updateWidthHeight = function() {
      if (_this._containerRef) {
        var rect = _this._containerRef.getBoundingClientRect();
        if (rect && rect.width > 0 && rect.height > 0) {
          _this.setState({
            width: rect.width,
            height: rect.height
          });
          return true;
        }
      }
      return false;
    };
    _this.wa = function() {
      var _window;
      return (_window = window).addEventListener.apply(_window, arguments);
    };
    _this.wr = function() {
      var _window2;
      return (_window2 = window).removeEventListener.apply(_window2, arguments);
    };
    _this.bindMouseEvents = function() {
      _this.wa("mousedown", _this.handleMouseDown);
      _this.wa("mouseup", _this.handleMouseUp);
      _this.wa("mousemove", _this.handleMouseMove);
    };
    _this.bindTouchEvents = function() {
      _this.wa("touchstart", _this.handleTouchStart, {
        passive: false
      });
      _this.wa("touchmove", _this.handleTouchMove, {
        passive: false
      });
      _this.wa("touchend", _this.handleTouchEnd, {
        passive: false
      });
    };
    _this.unbindMouseEvents = function() {
      _this.wr("mousedown", _this.handleMouseDown);
      _this.wr("mouseup", _this.handleMouseUp);
      _this.wr("mousemove", _this.handleMouseMove);
    };
    _this.unbindTouchEvents = function() {
      _this.wr("touchstart", _this.handleTouchStart);
      _this.wr("touchmove", _this.handleTouchMove);
      _this.wr("touchend", _this.handleTouchEnd);
    };
    _this.bindResizeEvent = function() {
      _this.wa("resize", _this.updateWidthHeight);
    };
    _this.unbindResizeEvent = function() {
      _this.wr("resize", _this.updateWidthHeight);
    };
    _this.bindWheelEvent = function() {
      if (_this._containerRef) {
        _this._containerRef.addEventListener("wheel", _this.handleWheel, {
          passive: false
        });
      }
    };
    _this.unbindWheelEvent = function() {
      if (_this._containerRef) {
        _this._containerRef.removeEventListener("wheel", _this.handleWheel);
      }
    };
    _this.setCenterZoomTarget = function(center, zoom, fromProps, zoomAround, animationDuration) {
      if (fromProps === void 0) {
        fromProps = false;
      }
      if (zoomAround === void 0) {
        zoomAround = null;
      }
      if (animationDuration === void 0) {
        animationDuration = ANIMATION_TIME;
      }
      if (_this.props.animate && (!fromProps || _this.distanceInScreens(center, zoom, _this.state.center, _this.state.zoom) <= _this.props.animateMaxScreens)) {
        if (_this._isAnimating) {
          cancelAnimationFrame(_this._animFrame);
          var _this$animationStep = _this.animationStep(performanceNow()), centerStep = _this$animationStep.centerStep, zoomStep = _this$animationStep.zoomStep;
          _this._centerStart = centerStep;
          _this._zoomStart = zoomStep;
        } else {
          _this._isAnimating = true;
          _this._centerStart = _this.limitCenterAtZoom([_this._lastCenter[0], _this._lastCenter[1]], _this._lastZoom);
          _this._zoomStart = _this._lastZoom;
          _this.onAnimationStart();
        }
        _this._animationStart = performanceNow();
        _this._animationEnd = _this._animationStart + animationDuration;
        if (zoomAround) {
          _this._zoomAround = zoomAround;
          _this._centerTarget = _this.calculateZoomCenter(_this._lastCenter, zoomAround, _this._lastZoom, zoom);
        } else {
          _this._zoomAround = null;
          _this._centerTarget = center;
        }
        _this._zoomTarget = zoom;
        _this._animFrame = requestAnimationFrame(_this.animate);
      } else {
        _this.stopAnimating();
        if (zoomAround) {
          var _center = _this.calculateZoomCenter(_this._lastCenter, zoomAround, _this._lastZoom, zoom);
          _this.setCenterZoom(_center, zoom, fromProps);
        } else {
          _this.setCenterZoom(center || _this.state.center, zoom, fromProps);
        }
      }
    };
    _this.setCenterZoomForChildren = function(center, zoom) {
      _this.setCenterZoomTarget(center || _this.state.center, zoom || _this.state.zoom, true);
    };
    _this.distanceInScreens = function(centerTarget, zoomTarget, center, zoom) {
      var _this$state = _this.state, width = _this$state.width, height = _this$state.height;
      var l1 = _this.latLngToPixel(center, center, zoom);
      var l22 = _this.latLngToPixel(centerTarget, center, zoom);
      var z1 = _this.latLngToPixel(center, center, zoomTarget);
      var z22 = _this.latLngToPixel(centerTarget, center, zoomTarget);
      var w2 = (Math.abs(l1[0] - l22[0]) + Math.abs(z1[0] - z22[0])) / 2 / width;
      var h = (Math.abs(l1[1] - l22[1]) + Math.abs(z1[1] - z22[1])) / 2 / height;
      return Math.sqrt(w2 * w2 + h * h);
    };
    _this.animationStep = function(timestamp) {
      if (!_this._animationEnd || !_this._animationStart || !_this._zoomTarget || !_this._zoomStart || !_this._centerStart || !_this._centerTarget) {
        return {
          centerStep: _this.state.center,
          zoomStep: _this.state.zoom
        };
      }
      var length = _this._animationEnd - _this._animationStart;
      var progress = Math.max(timestamp - _this._animationStart, 0);
      var percentage = easeOutQuad(progress / length);
      var zoomDiff = (_this._zoomTarget - _this._zoomStart) * percentage;
      var zoomStep = _this._zoomStart + zoomDiff;
      if (_this._zoomAround) {
        var centerStep = _this.calculateZoomCenter(_this._centerStart, _this._zoomAround, _this._zoomStart, zoomStep);
        return {
          centerStep,
          zoomStep
        };
      } else {
        var _centerStep = [_this._centerStart[0] + (_this._centerTarget[0] - _this._centerStart[0]) * percentage, _this._centerStart[1] + (_this._centerTarget[1] - _this._centerStart[1]) * percentage];
        return {
          centerStep: _centerStep,
          zoomStep
        };
      }
    };
    _this.animate = function(timestamp) {
      if (!_this._animationEnd || timestamp >= _this._animationEnd) {
        _this._isAnimating = false;
        _this.setCenterZoom(_this._centerTarget, _this._zoomTarget, true);
        _this.onAnimationStop();
      } else {
        var _this$animationStep2 = _this.animationStep(timestamp), centerStep = _this$animationStep2.centerStep, zoomStep = _this$animationStep2.zoomStep;
        _this.setCenterZoom(centerStep, zoomStep);
        _this._animFrame = requestAnimationFrame(_this.animate);
      }
    };
    _this.stopAnimating = function() {
      if (_this._isAnimating) {
        _this._isAnimating = false;
        _this.onAnimationStop();
        cancelAnimationFrame(_this._animFrame);
      }
    };
    _this.limitCenterAtZoom = function(center, zoom) {
      var minMax = _this.getBoundsMinMax(zoom || _this.state.zoom);
      return [Math.max(Math.min(!center || isNaN(center[0]) ? _this.state.center[0] : center[0], minMax[1]), minMax[0]), Math.max(Math.min(!center || isNaN(center[1]) ? _this.state.center[1] : center[1], minMax[3]), minMax[2])];
    };
    _this.onAnimationStart = function() {
      _this.props.onAnimationStart && _this.props.onAnimationStart();
    };
    _this.onAnimationStop = function() {
      _this.props.onAnimationStop && _this.props.onAnimationStop();
    };
    _this.setCenterZoom = function(center, zoom, animationEnded) {
      if (animationEnded === void 0) {
        animationEnded = false;
      }
      var limitedCenter = _this.limitCenterAtZoom(center, zoom);
      if (zoom && Math.round(_this.state.zoom) !== Math.round(zoom)) {
        var tileValues = _this.tileValues(_this.state);
        var nextValues = _this.tileValues({
          center: limitedCenter,
          zoom,
          width: _this.state.width,
          height: _this.state.height
        });
        var oldTiles = _this.state.oldTiles;
        _this.setState({
          oldTiles: oldTiles.filter(function(o3) {
            return o3.roundedZoom !== tileValues.roundedZoom;
          }).concat(tileValues)
        }, NOOP);
        var loadTracker = {};
        for (var x = nextValues.tileMinX; x <= nextValues.tileMaxX; x++) {
          for (var y = nextValues.tileMinY; y <= nextValues.tileMaxY; y++) {
            var key = x + "-" + y + "-" + nextValues.roundedZoom;
            loadTracker[key] = false;
          }
        }
        _this._loadTracker = loadTracker;
      }
      _this.setState({
        center: limitedCenter,
        zoom: zoom || _this.state.zoom
      }, NOOP);
      var maybeZoom = _this.props.zoom ? _this.props.zoom : _this._lastZoom;
      var maybeCenter = _this.props.center ? _this.props.center : _this._lastCenter;
      if (zoom && (animationEnded || Math.abs(maybeZoom - zoom) > 1e-3 || Math.abs(maybeCenter[0] - limitedCenter[0]) > 1e-5 || Math.abs(maybeCenter[1] - limitedCenter[1]) > 1e-5)) {
        _this._lastZoom = zoom;
        _this._lastCenter = [].concat(limitedCenter);
        _this.syncToProps(limitedCenter, zoom);
      }
    };
    _this.getBoundsMinMax = function(zoom) {
      if (_this.props.limitBounds === "center") {
        return absoluteMinMax;
      }
      var _this$state2 = _this.state, width = _this$state2.width, height = _this$state2.height;
      if (_this._minMaxCache && _this._minMaxCache[0] === zoom && _this._minMaxCache[1] === width && _this._minMaxCache[2] === height) {
        return _this._minMaxCache[3];
      }
      var pixelsAtZoom = Math.pow(2, zoom) * 256;
      var minLng = width > pixelsAtZoom ? 0 : tile2lng(width / 512, zoom);
      var minLat = height > pixelsAtZoom ? 0 : tile2lat(Math.pow(2, zoom) - height / 512, zoom);
      var maxLng = width > pixelsAtZoom ? 0 : tile2lng(Math.pow(2, zoom) - width / 512, zoom);
      var maxLat = height > pixelsAtZoom ? 0 : tile2lat(height / 512, zoom);
      var minMax = [minLat, maxLat, minLng, maxLng];
      _this._minMaxCache = [zoom, width, height, minMax];
      return minMax;
    };
    _this.imageLoaded = function(key) {
      if (_this._loadTracker && key in _this._loadTracker) {
        _this._loadTracker[key] = true;
        var unloadedCount = Object.values(_this._loadTracker).filter(function(v) {
          return !v;
        }).length;
        if (unloadedCount === 0) {
          _this.setState({
            oldTiles: []
          }, NOOP);
        }
      }
    };
    _this.handleTouchStart = function(event) {
      if (!_this._containerRef) {
        return;
      }
      if (event.target && parentHasClass(event.target, "pigeon-drag-block")) {
        return;
      }
      if (event.touches.length === 1) {
        var touch = event.touches[0];
        var pixel = getMousePixel(_this._containerRef, touch);
        if (_this.coordsInside(pixel)) {
          _this._touchStartPixel = [pixel];
          if (!_this.props.twoFingerDrag) {
            _this.stopAnimating();
            if (_this._lastTap && performanceNow() - _this._lastTap < DOUBLE_CLICK_DELAY) {
              event.preventDefault();
              var latLngNow = _this.pixelToLatLng(_this._touchStartPixel[0]);
              _this.setCenterZoomTarget(null, Math.max(_this.props.minZoom, Math.min(_this.state.zoom + 1, _this.props.maxZoom)), false, latLngNow);
            } else {
              _this._lastTap = performanceNow();
              _this.trackMoveEvents(pixel);
            }
          }
        }
      } else if (event.touches.length === 2 && _this._touchStartPixel) {
        event.preventDefault();
        _this.stopTrackingMoveEvents();
        if (_this.state.pixelDelta || _this.state.zoomDelta) {
          _this.sendDeltaChange();
        }
        var t1 = getMousePixel(_this._containerRef, event.touches[0]);
        var t2 = getMousePixel(_this._containerRef, event.touches[1]);
        _this._touchStartPixel = [t1, t2];
        _this._touchStartMidPoint = [(t1[0] + t2[0]) / 2, (t1[1] + t2[1]) / 2];
        _this._touchStartDistance = Math.sqrt(Math.pow(t1[0] - t2[0], 2) + Math.pow(t1[1] - t2[1], 2));
      }
    };
    _this.handleTouchMove = function(event) {
      if (!_this._containerRef) {
        _this._touchStartPixel = null;
        return;
      }
      if (event.touches.length === 1 && _this._touchStartPixel) {
        var touch = event.touches[0];
        var pixel = getMousePixel(_this._containerRef, touch);
        if (_this.props.twoFingerDrag) {
          if (_this.coordsInside(pixel)) {
            _this.showWarning("fingers");
          }
        } else {
          event.preventDefault();
          _this.trackMoveEvents(pixel);
          _this.setState({
            pixelDelta: [pixel[0] - _this._touchStartPixel[0][0], pixel[1] - _this._touchStartPixel[0][1]]
          }, NOOP);
        }
      } else if (event.touches.length === 2 && _this._touchStartPixel && _this._touchStartMidPoint && _this._touchStartDistance) {
        var _this$state3 = _this.state, width = _this$state3.width, height = _this$state3.height, zoom = _this$state3.zoom;
        event.preventDefault();
        var t1 = getMousePixel(_this._containerRef, event.touches[0]);
        var t2 = getMousePixel(_this._containerRef, event.touches[1]);
        var midPoint = [(t1[0] + t2[0]) / 2, (t1[1] + t2[1]) / 2];
        var midPointDiff = [midPoint[0] - _this._touchStartMidPoint[0], midPoint[1] - _this._touchStartMidPoint[1]];
        var distance = Math.sqrt(Math.pow(t1[0] - t2[0], 2) + Math.pow(t1[1] - t2[1], 2));
        var zoomDelta = Math.max(_this.props.minZoom, Math.min(_this.props.maxZoom, zoom + Math.log2(distance / _this._touchStartDistance))) - zoom;
        var scale = Math.pow(2, zoomDelta);
        var centerDiffDiff = [(width / 2 - midPoint[0]) * (scale - 1), (height / 2 - midPoint[1]) * (scale - 1)];
        _this.setState({
          zoomDelta,
          pixelDelta: [centerDiffDiff[0] + midPointDiff[0] * scale, centerDiffDiff[1] + midPointDiff[1] * scale]
        }, NOOP);
      }
    };
    _this.handleTouchEnd = function(event) {
      if (!_this._containerRef) {
        _this._touchStartPixel = null;
        return;
      }
      if (_this._touchStartPixel) {
        var _this$props = _this.props, zoomSnap = _this$props.zoomSnap, twoFingerDrag = _this$props.twoFingerDrag, minZoom = _this$props.minZoom, maxZoom = _this$props.maxZoom;
        var zoomDelta = _this.state.zoomDelta;
        var _this$sendDeltaChange = _this.sendDeltaChange(), center = _this$sendDeltaChange.center, zoom = _this$sendDeltaChange.zoom;
        if (event.touches.length === 0) {
          if (twoFingerDrag) {
            _this.clearWarning();
          } else {
            var oldTouchPixel = _this._touchStartPixel[0];
            var newTouchPixel = getMousePixel(_this._containerRef, event.changedTouches[0]);
            if (Math.abs(oldTouchPixel[0] - newTouchPixel[0]) > CLICK_TOLERANCE || Math.abs(oldTouchPixel[1] - newTouchPixel[1]) > CLICK_TOLERANCE) {
              if (!_this._secondTouchEnd || performanceNow() - _this._secondTouchEnd > PINCH_RELEASE_THROW_DELAY) {
                event.preventDefault();
                _this.throwAfterMoving(newTouchPixel, center, zoom);
              }
            }
            _this._touchStartPixel = null;
            _this._secondTouchEnd = null;
          }
        } else if (event.touches.length === 1) {
          event.preventDefault();
          var touch = getMousePixel(_this._containerRef, event.touches[0]);
          _this._secondTouchEnd = performanceNow();
          _this._touchStartPixel = [touch];
          _this.trackMoveEvents(touch);
          if (zoomSnap) {
            var latLng = _this._touchStartMidPoint ? _this.pixelToLatLng(_this._touchStartMidPoint) : _this.state.center;
            var zoomTarget;
            if (twoFingerDrag && Math.round(_this.state.zoom) === Math.round(_this.state.zoom + zoomDelta)) {
              zoomTarget = Math.round(_this.state.zoom);
            } else {
              zoomTarget = zoomDelta > 0 ? Math.ceil(_this.state.zoom) : Math.floor(_this.state.zoom);
            }
            var _zoom = Math.max(minZoom, Math.min(zoomTarget, maxZoom));
            _this.setCenterZoomTarget(latLng, _zoom, false, latLng);
          }
        }
      }
    };
    _this.handleMouseDown = function(event) {
      if (!_this._containerRef) {
        return;
      }
      var pixel = getMousePixel(_this._containerRef, event);
      if (event.button === 0 && (!event.target || !parentHasClass(event.target, "pigeon-drag-block")) && _this.coordsInside(pixel)) {
        _this.stopAnimating();
        event.preventDefault();
        if (_this._lastClick && performanceNow() - _this._lastClick < DOUBLE_CLICK_DELAY) {
          if (!parentHasClass(event.target, "pigeon-click-block")) {
            var latLngNow = _this.pixelToLatLng(_this._mousePosition || pixel);
            _this.setCenterZoomTarget(null, Math.max(_this.props.minZoom, Math.min(_this.state.zoom + 1, _this.props.maxZoom)), false, latLngNow);
          }
        } else {
          _this._lastClick = performanceNow();
          _this._mouseDown = true;
          _this._dragStart = pixel;
          _this.trackMoveEvents(pixel);
        }
      }
    };
    _this.handleMouseMove = function(event) {
      if (!_this._containerRef) {
        return;
      }
      _this._mousePosition = getMousePixel(_this._containerRef, event);
      if (_this._mouseDown && _this._dragStart) {
        _this.trackMoveEvents(_this._mousePosition);
        _this.setState({
          pixelDelta: [_this._mousePosition[0] - _this._dragStart[0], _this._mousePosition[1] - _this._dragStart[1]]
        }, NOOP);
      }
    };
    _this.handleMouseUp = function(event) {
      if (!_this._containerRef) {
        _this._mouseDown = false;
        return;
      }
      var pixelDelta = _this.state.pixelDelta;
      if (_this._mouseDown) {
        _this._mouseDown = false;
        var pixel = getMousePixel(_this._containerRef, event);
        if (_this.props.onClick && (!event.target || !parentHasClass(event.target, "pigeon-click-block")) && (!pixelDelta || Math.abs(pixelDelta[0]) + Math.abs(pixelDelta[1]) <= CLICK_TOLERANCE)) {
          var latLng = _this.pixelToLatLng(pixel);
          _this.props.onClick({
            event,
            latLng,
            pixel
          });
          _this.setState({
            pixelDelta: void 0
          }, NOOP);
        } else {
          var _this$sendDeltaChange2 = _this.sendDeltaChange(), center = _this$sendDeltaChange2.center, zoom = _this$sendDeltaChange2.zoom;
          _this.throwAfterMoving(pixel, center, zoom);
        }
      }
    };
    _this.stopTrackingMoveEvents = function() {
      _this._moveEvents = [];
    };
    _this.trackMoveEvents = function(coords) {
      var timestamp = performanceNow();
      if (_this._moveEvents.length === 0 || timestamp - _this._moveEvents[_this._moveEvents.length - 1].timestamp > 40) {
        _this._moveEvents.push({
          timestamp,
          coords
        });
        if (_this._moveEvents.length > 2) {
          _this._moveEvents.shift();
        }
      }
    };
    _this.throwAfterMoving = function(coords, center, zoom) {
      var _this$state4 = _this.state, width = _this$state4.width, height = _this$state4.height;
      var animate = _this.props.animate;
      var timestamp = performanceNow();
      var lastEvent = _this._moveEvents.shift();
      if (lastEvent && animate) {
        var deltaMs = Math.max(timestamp - lastEvent.timestamp, 1);
        var delta = [(coords[0] - lastEvent.coords[0]) / deltaMs * 120, (coords[1] - lastEvent.coords[1]) / deltaMs * 120];
        var distance = Math.sqrt(delta[0] * delta[0] + delta[1] * delta[1]);
        if (distance > MIN_DRAG_FOR_THROW) {
          var diagonal = Math.sqrt(width * width + height * height);
          var throwTime = DIAGONAL_THROW_TIME * distance / diagonal;
          var lng = tile2lng(lng2tile(center[1], zoom) - delta[0] / 256, zoom);
          var lat = tile2lat(lat2tile(center[0], zoom) - delta[1] / 256, zoom);
          _this.setCenterZoomTarget([lat, lng], zoom, false, null, throwTime);
        }
      }
      _this.stopTrackingMoveEvents();
    };
    _this.sendDeltaChange = function() {
      var _this$state5 = _this.state, center = _this$state5.center, zoom = _this$state5.zoom, pixelDelta = _this$state5.pixelDelta, zoomDelta = _this$state5.zoomDelta;
      var lat = center[0];
      var lng = center[1];
      if (pixelDelta || zoomDelta !== 0) {
        lng = tile2lng(lng2tile(center[1], zoom + zoomDelta) - (pixelDelta ? pixelDelta[0] / 256 : 0), zoom + zoomDelta);
        lat = tile2lat(lat2tile(center[0], zoom + zoomDelta) - (pixelDelta ? pixelDelta[1] / 256 : 0), zoom + zoomDelta);
        _this.setCenterZoom([lat, lng], zoom + zoomDelta);
      }
      _this.setState({
        pixelDelta: void 0,
        zoomDelta: 0
      }, NOOP);
      return {
        center: _this.limitCenterAtZoom([lat, lng], zoom + zoomDelta),
        zoom: zoom + zoomDelta
      };
    };
    _this.getBounds = function(center, zoom) {
      if (center === void 0) {
        center = _this.state.center;
      }
      if (zoom === void 0) {
        zoom = _this.zoomPlusDelta();
      }
      var _this$state6 = _this.state, width = _this$state6.width, height = _this$state6.height;
      return {
        ne: _this.pixelToLatLng([width - 1, 0], center, zoom),
        sw: _this.pixelToLatLng([0, height - 1], center, zoom)
      };
    };
    _this.syncToProps = function(center, zoom) {
      if (center === void 0) {
        center = _this.state.center;
      }
      if (zoom === void 0) {
        zoom = _this.state.zoom;
      }
      var onBoundsChanged = _this.props.onBoundsChanged;
      if (onBoundsChanged) {
        var bounds = _this.getBounds(center, zoom);
        onBoundsChanged({
          center,
          zoom,
          bounds,
          initial: !_this._boundsSynced
        });
        _this._boundsSynced = true;
      }
    };
    _this.handleWheel = function(event) {
      var _this$props2 = _this.props, mouseEvents = _this$props2.mouseEvents, metaWheelZoom = _this$props2.metaWheelZoom, zoomSnap = _this$props2.zoomSnap, animate = _this$props2.animate;
      if (!mouseEvents) {
        return;
      }
      if (!metaWheelZoom || event.metaKey || event.ctrlKey) {
        event.preventDefault();
        var addToZoom = -event.deltaY / SCROLL_PIXELS_FOR_ZOOM_LEVEL;
        if (!zoomSnap && _this._zoomTarget) {
          var stillToAdd = _this._zoomTarget - _this.state.zoom;
          _this.zoomAroundMouse(addToZoom + stillToAdd, event);
        } else {
          if (animate) {
            _this.zoomAroundMouse(addToZoom, event);
          } else {
            if (!_this._lastWheel || performanceNow() - _this._lastWheel > ANIMATION_TIME) {
              _this._lastWheel = performanceNow();
              _this.zoomAroundMouse(addToZoom, event);
            }
          }
        }
      } else {
        _this.showWarning("wheel");
      }
    };
    _this.showWarning = function(warningType) {
      if (!_this.state.showWarning || _this.state.warningType !== warningType) {
        _this.setState({
          showWarning: true,
          warningType
        });
      }
      if (_this._warningClearTimeout) {
        window.clearTimeout(_this._warningClearTimeout);
      }
      _this._warningClearTimeout = window.setTimeout(_this.clearWarning, WARNING_DISPLAY_TIMEOUT);
    };
    _this.clearWarning = function() {
      if (_this.state.showWarning) {
        _this.setState({
          showWarning: false
        });
      }
    };
    _this.zoomAroundMouse = function(zoomDiff, event) {
      if (!_this._containerRef) {
        return;
      }
      var zoom = _this.state.zoom;
      var _this$props3 = _this.props, minZoom = _this$props3.minZoom, maxZoom = _this$props3.maxZoom, zoomSnap = _this$props3.zoomSnap;
      _this._mousePosition = getMousePixel(_this._containerRef, event);
      if (!_this._mousePosition || zoom === minZoom && zoomDiff < 0 || zoom === maxZoom && zoomDiff > 0) {
        return;
      }
      var latLngNow = _this.pixelToLatLng(_this._mousePosition);
      var zoomTarget = zoom + zoomDiff;
      if (zoomSnap) {
        zoomTarget = zoomDiff < 0 ? Math.floor(zoomTarget) : Math.ceil(zoomTarget);
      }
      zoomTarget = Math.max(minZoom, Math.min(zoomTarget, maxZoom));
      _this.setCenterZoomTarget(null, zoomTarget, false, latLngNow);
    };
    _this.zoomPlusDelta = function() {
      return _this.state.zoom + _this.state.zoomDelta;
    };
    _this.pixelToLatLng = function(pixel, center, zoom) {
      if (center === void 0) {
        center = _this.state.center;
      }
      if (zoom === void 0) {
        zoom = _this.zoomPlusDelta();
      }
      var _this$state7 = _this.state, width = _this$state7.width, height = _this$state7.height, pixelDelta = _this$state7.pixelDelta;
      var pointDiff = [(pixel[0] - width / 2 - (pixelDelta ? pixelDelta[0] : 0)) / 256, (pixel[1] - height / 2 - (pixelDelta ? pixelDelta[1] : 0)) / 256];
      var tileX = lng2tile(center[1], zoom) + pointDiff[0];
      var tileY = lat2tile(center[0], zoom) + pointDiff[1];
      return [Math.max(absoluteMinMax[0], Math.min(absoluteMinMax[1], tile2lat(tileY, zoom))), Math.max(absoluteMinMax[2], Math.min(absoluteMinMax[3], tile2lng(tileX, zoom)))];
    };
    _this.latLngToPixel = function(latLng, center, zoom) {
      if (center === void 0) {
        center = _this.state.center;
      }
      if (zoom === void 0) {
        zoom = _this.zoomPlusDelta();
      }
      var _this$state8 = _this.state, width = _this$state8.width, height = _this$state8.height, pixelDelta = _this$state8.pixelDelta;
      var tileCenterX = lng2tile(center[1], zoom);
      var tileCenterY = lat2tile(center[0], zoom);
      var tileX = lng2tile(latLng[1], zoom);
      var tileY = lat2tile(latLng[0], zoom);
      return [(tileX - tileCenterX) * 256 + width / 2 + (pixelDelta ? pixelDelta[0] : 0), (tileY - tileCenterY) * 256 + height / 2 + (pixelDelta ? pixelDelta[1] : 0)];
    };
    _this.calculateZoomCenter = function(center, coords, oldZoom, newZoom) {
      var _this$state9 = _this.state, width = _this$state9.width, height = _this$state9.height;
      var pixelBefore = _this.latLngToPixel(coords, center, oldZoom);
      var pixelAfter = _this.latLngToPixel(coords, center, newZoom);
      var newCenter = _this.pixelToLatLng([width / 2 + pixelAfter[0] - pixelBefore[0], height / 2 + pixelAfter[1] - pixelBefore[1]], center, newZoom);
      return _this.limitCenterAtZoom(newCenter, newZoom);
    };
    _this.setRef = function(dom) {
      _this._containerRef = dom;
    };
    _this.syncToProps = debounce(_this.syncToProps, DEBOUNCE_DELAY);
    _this._lastZoom = (_ref = (_props$defaultZoom = props.defaultZoom) !== null && _props$defaultZoom !== void 0 ? _props$defaultZoom : props.zoom) !== null && _ref !== void 0 ? _ref : 14;
    _this._lastCenter = (_ref2 = (_props$defaultCenter = props.defaultCenter) !== null && _props$defaultCenter !== void 0 ? _props$defaultCenter : props.center) !== null && _ref2 !== void 0 ? _ref2 : [0, 0];
    _this.state = {
      zoom: _this._lastZoom,
      center: _this._lastCenter,
      width: (_ref3 = (_props$width = props.width) !== null && _props$width !== void 0 ? _props$width : props.defaultWidth) !== null && _ref3 !== void 0 ? _ref3 : -1,
      height: (_ref4 = (_props$height = props.height) !== null && _props$height !== void 0 ? _props$height : props.defaultHeight) !== null && _ref4 !== void 0 ? _ref4 : -1,
      zoomDelta: 0,
      pixelDelta: void 0,
      oldTiles: [],
      showWarning: false,
      warningType: void 0
    };
    return _this;
  }
  var _proto = Map2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;
    this.props.mouseEvents && this.bindMouseEvents();
    this.props.touchEvents && this.bindTouchEvents();
    if (!this.props.width || !this.props.height) {
      if (!this.updateWidthHeight()) {
        requestAnimationFrame(this.updateWidthHeight);
      }
      this.bindResizeEvent();
    }
    this.bindWheelEvent();
    this.syncToProps();
    if (typeof window.ResizeObserver !== "undefined") {
      this._resizeObserver = new window.ResizeObserver(function() {
        _this2.updateWidthHeight();
      });
      this._resizeObserver.observe(this._containerRef);
    }
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.props.mouseEvents && this.unbindMouseEvents();
    this.props.touchEvents && this.unbindTouchEvents();
    this.unbindWheelEvent();
    if (!this.props.width || !this.props.height) {
      this.unbindResizeEvent();
    }
    if (this._resizeObserver) {
      this._resizeObserver.disconnect();
    }
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _prevProps$center;
    if (this.props.mouseEvents !== prevProps.mouseEvents) {
      this.props.mouseEvents ? this.bindMouseEvents() : this.unbindMouseEvents();
    }
    if (this.props.touchEvents !== prevProps.touchEvents) {
      this.props.touchEvents ? this.bindTouchEvents() : this.unbindTouchEvents();
    }
    if (this.props.width && this.props.width !== prevProps.width) {
      this.setState({
        width: this.props.width
      });
    }
    if (this.props.height && this.props.height !== prevProps.height) {
      this.setState({
        height: this.props.height
      });
    }
    if (!this.props.center && !this.props.zoom) {
      return;
    }
    if ((!this.props.center || this.props.center[0] === (prevProps === null || prevProps === void 0 ? void 0 : (_prevProps$center = prevProps.center) === null || _prevProps$center === void 0 ? void 0 : _prevProps$center[0]) && this.props.center[1] === prevProps.center[1]) && this.props.zoom === prevProps.zoom) {
      return;
    }
    var currentCenter = this._isAnimating ? this._centerTarget : this.state.center;
    var currentZoom = this._isAnimating ? this._zoomTarget : this.state.zoom;
    if (currentCenter && currentZoom) {
      var _this$props$center, _this$props$zoom;
      var nextCenter = (_this$props$center = this.props.center) !== null && _this$props$center !== void 0 ? _this$props$center : currentCenter;
      var nextZoom = (_this$props$zoom = this.props.zoom) !== null && _this$props$zoom !== void 0 ? _this$props$zoom : currentZoom;
      if (Math.abs(nextZoom - currentZoom) > 1e-3 || Math.abs(nextCenter[0] - currentCenter[0]) > 1e-4 || Math.abs(nextCenter[1] - currentCenter[1]) > 1e-4) {
        this.setCenterZoomTarget(nextCenter, nextZoom, true);
      }
    }
  };
  _proto.coordsInside = function coordsInside(pixel) {
    var _this$state10 = this.state, width = _this$state10.width, height = _this$state10.height;
    if (pixel[0] < 0 || pixel[1] < 0 || pixel[0] >= width || pixel[1] >= height) {
      return false;
    }
    var parent = this._containerRef;
    if (parent) {
      var pos = parentPosition(parent);
      var element = document.elementFromPoint(pixel[0] + pos.x, pixel[1] + pos.y);
      return parent === element || parent.contains(element);
    } else {
      return false;
    }
  };
  _proto.tileValues = function tileValues(_ref5) {
    var center = _ref5.center, zoom = _ref5.zoom, pixelDelta = _ref5.pixelDelta, zoomDelta = _ref5.zoomDelta, width = _ref5.width, height = _ref5.height;
    var roundedZoom = Math.round(zoom + (zoomDelta || 0));
    var zoomDiff = zoom + (zoomDelta || 0) - roundedZoom;
    var scale = Math.pow(2, zoomDiff);
    var scaleWidth = width / scale;
    var scaleHeight = height / scale;
    var tileCenterX = lng2tile(center[1], roundedZoom) - (pixelDelta ? pixelDelta[0] / 256 / scale : 0);
    var tileCenterY = lat2tile(center[0], roundedZoom) - (pixelDelta ? pixelDelta[1] / 256 / scale : 0);
    var halfWidth = scaleWidth / 2 / 256;
    var halfHeight = scaleHeight / 2 / 256;
    var tileMinX = Math.floor(tileCenterX - halfWidth);
    var tileMaxX = Math.floor(tileCenterX + halfWidth);
    var tileMinY = Math.floor(tileCenterY - halfHeight);
    var tileMaxY = Math.floor(tileCenterY + halfHeight);
    return {
      tileMinX,
      tileMaxX,
      tileMinY,
      tileMaxY,
      tileCenterX,
      tileCenterY,
      roundedZoom,
      zoomDelta: zoomDelta || 0,
      scaleWidth,
      scaleHeight,
      scale
    };
  };
  _proto.renderTiles = function renderTiles() {
    var _this3 = this;
    var _this$state11 = this.state, oldTiles = _this$state11.oldTiles, width = _this$state11.width, height = _this$state11.height;
    var dprs = this.props.dprs;
    var mapUrl = this.props.provider || osm;
    var _this$tileValues = this.tileValues(this.state), tileMinX = _this$tileValues.tileMinX, tileMaxX = _this$tileValues.tileMaxX, tileMinY = _this$tileValues.tileMinY, tileMaxY = _this$tileValues.tileMaxY, tileCenterX = _this$tileValues.tileCenterX, tileCenterY = _this$tileValues.tileCenterY, roundedZoom = _this$tileValues.roundedZoom, scaleWidth = _this$tileValues.scaleWidth, scaleHeight = _this$tileValues.scaleHeight, scale = _this$tileValues.scale;
    var tiles = [];
    for (var i3 = 0; i3 < oldTiles.length; i3++) {
      var old = oldTiles[i3];
      var zoomDiff = old.roundedZoom - roundedZoom;
      if (Math.abs(zoomDiff) > 4 || zoomDiff === 0) {
        continue;
      }
      var pow = 1 / Math.pow(2, zoomDiff);
      var xDiff = -(tileMinX - old.tileMinX * pow) * 256;
      var yDiff = -(tileMinY - old.tileMinY * pow) * 256;
      var _xMin = Math.max(old.tileMinX, 0);
      var _yMin = Math.max(old.tileMinY, 0);
      var _xMax = Math.min(old.tileMaxX, Math.pow(2, old.roundedZoom) - 1);
      var _yMax = Math.min(old.tileMaxY, Math.pow(2, old.roundedZoom) - 1);
      for (var x = _xMin; x <= _xMax; x++) {
        for (var y = _yMin; y <= _yMax; y++) {
          tiles.push({
            key: x + "-" + y + "-" + old.roundedZoom,
            url: mapUrl(x, y, old.roundedZoom),
            srcSet: srcSet(dprs, mapUrl, x, y, old.roundedZoom),
            left: xDiff + (x - old.tileMinX) * 256 * pow,
            top: yDiff + (y - old.tileMinY) * 256 * pow,
            width: 256 * pow,
            height: 256 * pow,
            active: false
          });
        }
      }
    }
    var xMin = Math.max(tileMinX, 0);
    var yMin = Math.max(tileMinY, 0);
    var xMax = Math.min(tileMaxX, Math.pow(2, roundedZoom) - 1);
    var yMax = Math.min(tileMaxY, Math.pow(2, roundedZoom) - 1);
    for (var _x = xMin; _x <= xMax; _x++) {
      for (var _y = yMin; _y <= yMax; _y++) {
        tiles.push({
          key: _x + "-" + _y + "-" + roundedZoom,
          url: mapUrl(_x, _y, roundedZoom),
          srcSet: srcSet(dprs, mapUrl, _x, _y, roundedZoom),
          left: (_x - tileMinX) * 256,
          top: (_y - tileMinY) * 256,
          width: 256,
          height: 256,
          active: true
        });
      }
    }
    var boxStyle = {
      width: scaleWidth,
      height: scaleHeight,
      position: "absolute",
      top: "calc((100% - " + height + "px) / 2)",
      left: "calc((100% - " + width + "px) / 2)",
      overflow: "hidden",
      willChange: "transform",
      transform: "scale(" + scale + ", " + scale + ")",
      transformOrigin: "top left"
    };
    var boxClassname = this.props.boxClassname || "pigeon-tiles-box";
    var left = -((tileCenterX - tileMinX) * 256 - scaleWidth / 2);
    var top = -((tileCenterY - tileMinY) * 256 - scaleHeight / 2);
    var tilesStyle = {
      position: "absolute",
      width: (tileMaxX - tileMinX + 1) * 256,
      height: (tileMaxY - tileMinY + 1) * 256,
      willChange: "transform",
      transform: "translate(" + left + "px, " + top + "px)"
    };
    return /* @__PURE__ */ import_react2.default.createElement("div", {
      style: boxStyle,
      className: boxClassname
    }, /* @__PURE__ */ import_react2.default.createElement("div", {
      className: "pigeon-tiles",
      style: tilesStyle
    }, tiles.map(function(tile) {
      return /* @__PURE__ */ import_react2.default.createElement("img", {
        key: tile.key,
        src: tile.url,
        srcSet: tile.srcSet,
        width: tile.width,
        height: tile.height,
        loading: "lazy",
        onLoad: function onLoad() {
          return _this3.imageLoaded(tile.key);
        },
        alt: "",
        style: {
          position: "absolute",
          left: tile.left,
          top: tile.top,
          willChange: "transform",
          transformOrigin: "top left",
          opacity: 1
        }
      });
    })));
  };
  _proto.renderOverlays = function renderOverlays() {
    var _this4 = this;
    var _this$state12 = this.state, width = _this$state12.width, height = _this$state12.height, center = _this$state12.center;
    var mapState = {
      bounds: this.getBounds(),
      zoom: this.zoomPlusDelta(),
      center,
      width,
      height
    };
    var childrenWithProps = import_react2.default.Children.map(this.props.children, function(child) {
      if (!child) {
        return null;
      }
      if (!/* @__PURE__ */ import_react2.default.isValidElement(child)) {
        return child;
      }
      var _child$props = child.props, anchor = _child$props.anchor, position = _child$props.position, offset = _child$props.offset;
      var c4 = _this4.latLngToPixel(anchor || position || center);
      return /* @__PURE__ */ import_react2.default.cloneElement(child, {
        left: c4[0] - (offset ? offset[0] : 0),
        top: c4[1] - (offset ? offset[1] : 0),
        latLngToPixel: _this4.latLngToPixel,
        pixelToLatLng: _this4.pixelToLatLng,
        setCenterZoom: _this4.setCenterZoomForChildren,
        mapProps: _this4.props,
        mapState
      });
    });
    var childrenStyle = {
      position: "absolute",
      width,
      height,
      top: "calc((100% - " + height + "px) / 2)",
      left: "calc((100% - " + width + "px) / 2)"
    };
    return /* @__PURE__ */ import_react2.default.createElement("div", {
      className: "pigeon-overlays",
      style: childrenStyle
    }, childrenWithProps);
  };
  _proto.renderAttribution = function renderAttribution() {
    var _this$props4 = this.props, attribution = _this$props4.attribution, attributionPrefix = _this$props4.attributionPrefix;
    if (attribution === false) {
      return null;
    }
    var style = {
      position: "absolute",
      bottom: 0,
      right: 0,
      fontSize: "11px",
      padding: "2px 5px",
      background: "rgba(255, 255, 255, 0.7)",
      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
      color: "#333"
    };
    var linkStyle = {
      color: "#0078A8",
      textDecoration: "none"
    };
    return /* @__PURE__ */ import_react2.default.createElement("div", {
      key: "attr",
      className: "pigeon-attribution",
      style
    }, attributionPrefix === false ? null : /* @__PURE__ */ import_react2.default.createElement("span", null, attributionPrefix || /* @__PURE__ */ import_react2.default.createElement("a", {
      href: "https://pigeon-maps.js.org/",
      style: linkStyle,
      target: "_blank",
      rel: "noreferrer noopener"
    }, "Pigeon"), " | "), attribution || /* @__PURE__ */ import_react2.default.createElement("span", null, " \xA9 ", /* @__PURE__ */ import_react2.default.createElement("a", {
      href: "https://www.openstreetmap.org/copyright",
      style: linkStyle,
      target: "_blank",
      rel: "noreferrer noopener"
    }, "OpenStreetMap"), " contributors"));
  };
  _proto.renderWarning = function renderWarning() {
    var _this$props5 = this.props, metaWheelZoom = _this$props5.metaWheelZoom, metaWheelZoomWarning = _this$props5.metaWheelZoomWarning, twoFingerDrag = _this$props5.twoFingerDrag, twoFingerDragWarning = _this$props5.twoFingerDragWarning, warningZIndex = _this$props5.warningZIndex;
    var _this$state13 = this.state, showWarning = _this$state13.showWarning, warningType = _this$state13.warningType, width = _this$state13.width, height = _this$state13.height;
    if (metaWheelZoom && metaWheelZoomWarning || twoFingerDrag && twoFingerDragWarning) {
      var style = {
        position: "absolute",
        top: 0,
        left: 0,
        width,
        height,
        overflow: "hidden",
        pointerEvents: "none",
        opacity: showWarning ? 100 : 0,
        transition: "opacity 300ms",
        background: "rgba(0,0,0,0.5)",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 22,
        fontFamily: '"Arial", sans-serif',
        textAlign: "center",
        zIndex: warningZIndex
      };
      var meta2 = typeof window !== "undefined" && window.navigator && window.navigator.platform.toUpperCase().indexOf("MAC") >= 0 ? "\u2318" : "ctrl";
      var warningText = warningType === "fingers" ? twoFingerDragWarning : metaWheelZoomWarning;
      return /* @__PURE__ */ import_react2.default.createElement("div", {
        className: "pigeon-overlay-warning",
        style
      }, warningText.replace("META", meta2));
    } else {
      return null;
    }
  };
  _proto.render = function render() {
    var _this$props6 = this.props, touchEvents = _this$props6.touchEvents, twoFingerDrag = _this$props6.twoFingerDrag;
    var _this$state14 = this.state, width = _this$state14.width, height = _this$state14.height;
    var containerStyle = {
      width: this.props.width ? width : "100%",
      height: this.props.height ? height : "100%",
      position: "relative",
      display: "inline-block",
      overflow: "hidden",
      background: "#dddddd",
      touchAction: touchEvents ? twoFingerDrag ? "pan-x pan-y" : "none" : "auto"
    };
    var hasSize = !!(width && height);
    return /* @__PURE__ */ import_react2.default.createElement("div", {
      style: containerStyle,
      ref: this.setRef
    }, hasSize && this.renderTiles(), hasSize && this.renderOverlays(), hasSize && this.renderAttribution(), hasSize && this.renderWarning());
  };
  return Map2;
}(import_react2.Component);
Map.defaultProps = {
  animate: true,
  metaWheelZoom: false,
  metaWheelZoomWarning: "Use META + wheel to zoom!",
  twoFingerDrag: false,
  twoFingerDragWarning: "Use two fingers to move the map",
  zoomSnap: true,
  mouseEvents: true,
  touchEvents: true,
  warningZIndex: 100,
  animateMaxScreens: 5,
  minZoom: 1,
  maxZoom: 18,
  limitBounds: "center",
  dprs: []
};
function Marker(props) {
  var width = typeof props.width !== "undefined" ? props.width : typeof props.height !== "undefined" ? props.height * 29 / 34 : 29;
  var height = typeof props.height !== "undefined" ? props.height : typeof props.width !== "undefined" ? props.width * 34 / 29 : 34;
  var _useState = (0, import_react2.useState)(props.hover || false), internalHover = _useState[0], setInternalHover = _useState[1];
  var hover = typeof props.hover === "undefined" ? internalHover : props.hover;
  var color = props.color || "#93C0D0";
  var eventParameters = function eventParameters2(event) {
    return {
      event,
      anchor: props.anchor,
      payload: props.payload
    };
  };
  return /* @__PURE__ */ import_react2.default.createElement("div", {
    style: _objectSpread2({
      position: "absolute",
      transform: "translate(" + (props.left - width / 2) + "px, " + (props.top - (height - 1)) + "px)",
      filter: hover ? "drop-shadow(0 0 4px rgba(0, 0, 0, .3))" : "",
      pointerEvents: "none",
      cursor: "pointer"
    }, props.style || {}),
    className: props.className ? props.className + " pigeon-click-block" : "pigeon-click-block"
  }, /* @__PURE__ */ import_react2.default.createElement("svg", {
    width,
    height,
    viewBox: "0 0 61 71",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react2.default.createElement("g", {
    style: {
      pointerEvents: "auto"
    },
    onClick: props.onClick ? function(event) {
      return props.onClick(eventParameters(event));
    } : null,
    onContextMenu: props.onContextMenu ? function(event) {
      return props.onContextMenu(eventParameters(event));
    } : null,
    onMouseOver: function onMouseOver(event) {
      props.onMouseOver && props.onMouseOver(eventParameters(event));
      setInternalHover(true);
    },
    onMouseOut: function onMouseOut(event) {
      props.onMouseOut && props.onMouseOut(eventParameters(event));
      setInternalHover(false);
    }
  }, /* @__PURE__ */ import_react2.default.createElement("path", {
    d: "M52 31.5C52 36.8395 49.18 42.314 45.0107 47.6094C40.8672 52.872 35.619 57.678 31.1763 61.6922C30.7916 62.0398 30.2084 62.0398 29.8237 61.6922C25.381 57.678 20.1328 52.872 15.9893 47.6094C11.82 42.314 9 36.8395 9 31.5C9 18.5709 18.6801 9 30.5 9C42.3199 9 52 18.5709 52 31.5Z",
    fill: color,
    stroke: "white",
    strokeWidth: "4"
  }), /* @__PURE__ */ import_react2.default.createElement("circle", {
    cx: "30.5",
    cy: "30.5",
    r: "8.5",
    fill: "white",
    opacity: hover ? 0.98 : 0.6
  }))));
}

// node_modules/react-bricks-ui/website/react-bricks-ui-website.esm.js
var import_jsonp = __toESM(require_jsonp());
var import_email_validator = __toESM(require_email_validator());
var L2;
var P2 = function(e2) {
  var t2 = e2.boxed;
  return t2 !== void 0 && t2 ? c3.createElement("div", { className: "sm:w-11/12 xl:w-9/12 mx-auto px-6 md:px-12" }, c3.createElement("hr", { className: "border-gray-900 border-opacity-10 dark:border-gray-700" })) : c3.createElement("hr", { className: "border-gray-900 border-opacity-10 dark:border-gray-700" });
};
var R2 = function(t2) {
  var a2 = t2.bg, r2 = a2 === void 0 ? c.white.value : a2, o3 = t2.borderTop, l3 = o3 === void 0 ? "none" : o3, i3 = t2.borderBottom, s3 = i3 === void 0 ? "none" : i3, n2 = t2.className, m2 = n2 === void 0 ? "" : n2, p2 = t2.children, b = r2.className;
  return c3.createElement("section", { className: (0, import_classnames2.default)(b, m2, "overflow-hidden") }, l3 !== "none" && c3.createElement(P2, { boxed: l3 === "boxed" }), p2, s3 !== "none" && c3.createElement(P2, { boxed: s3 === "boxed" }));
};
var F2 = function(e2) {
  switch (e2) {
    case "lg":
      return "sm:w-11/12 xl:w-3/4 2xl:w-2/3";
    case "md":
      return "sm:w-11/12 lg:w-3/4 xl:w-2/3 2xl:w-7/12";
    case "sm":
      return "sm:w-2/3 lg:w-7/12";
    case "full":
      return "";
  }
};
var C2 = function(e2) {
  var t2 = e2.size, a2 = t2 === void 0 ? "lg" : t2, r2 = e2.className, o3 = e2.children;
  return c3.createElement("div", { className: (0, import_classnames2.default)("mx-auto", { "px-5": a2 !== "full" }, F2(a2), r2) }, o3);
};
!function(e2) {
  e2.FeatureItem = "feature-item", e2.Features = "features", e2.HeroUnit = "hero-unit", e2.Separator = "separator", e2.Testimonial = "testimonial", e2.TextImage = "text-image", e2.TextLogoItem = "text-logo-item", e2.TextLogos = "text-logos", e2.NewsletterSubscribe = "newsletter-subscribe", e2.Contacts = "contacts", e2.ContactItem = "contact-item", e2.Map = "map", e2.LogoGrid = "logo-grid", e2.LogoGridItem = "logo-grid-item", e2.Team = "team", e2.TeamItem = "team-item", e2.ImageBackground = "image-background", e2.Badge = "badge", e2.Button = "button", e2.BulletListItem = "bullet-list-item", e2.TextImageLogo = "text-image-logo", e2.Customers = "customers", e2.Customer = "customer", e2.Faqs = "faqs", e2.Faq = "faq", e2.CallToAction = "call-to-action", e2.FeatureCallout = "big-feature", e2.Documents = "documents", e2.Document = "document";
}(L2 || (L2 = {}));
var I2 = L2;
var j2 = function(e2) {
  var r2 = (e2 === void 0 ? {} : e2).colors;
  return r2 && (r2 == null ? void 0 : r2.length) > 0 ? { groupName: "Layout", props: [{ name: "bg", label: "Background", type: E.SideEditPropType.Select, selectOptions: { display: E.OptionsDisplay.Color, options: o([], l(r2), false) } }, { name: "borderTop", label: "Border Top", type: E.SideEditPropType.Select, selectOptions: { display: E.OptionsDisplay.Select, options: [{ value: "none", label: "None" }, { value: "full", label: "Full-width" }, { value: "boxed", label: "Boxed" }] } }, { name: "borderBottom", label: "Border Bottom", type: E.SideEditPropType.Select, selectOptions: { display: E.OptionsDisplay.Select, options: [{ value: "none", label: "None" }, { value: "full", label: "Full-width" }, { value: "boxed", label: "Boxed" }] } }, { name: "width", label: "Width", type: E.SideEditPropType.Select, selectOptions: { display: E.OptionsDisplay.Select, options: [{ value: "sm", label: "Small" }, { value: "md", label: "Medium" }, { value: "lg", label: "Large" }] } }] } : { groupName: "Layout", props: [{ name: "borderTop", label: "Border Top", type: E.SideEditPropType.Select, selectOptions: { display: E.OptionsDisplay.Select, options: [{ value: "none", label: "None" }, { value: "full", label: "Full-width" }, { value: "boxed", label: "Boxed" }] } }, { name: "borderBottom", label: "Border Bottom", type: E.SideEditPropType.Select, selectOptions: { display: E.OptionsDisplay.Select, options: [{ value: "none", label: "None" }, { value: "full", label: "Full-width" }, { value: "boxed", label: "Boxed" }] } }] };
};
var O2 = function(t2) {
  var a2 = t2.bg, l3 = a2 === void 0 ? c.white.value : a2, i3 = t2.borderTop, s3 = i3 === void 0 ? "boxed" : i3, n2 = t2.borderBottom, m2 = n2 === void 0 ? "none" : n2, h = t2.width, f = h === void 0 ? "sm" : h;
  return c3.createElement(R2, { bg: l3, borderTop: s3, borderBottom: m2 }, c3.createElement(C2, { size: f, className: (0, import_classnames2.default)("py-12 flex flex-col sm:flex-row items-center text-center sm:text-left") }, c3.createElement("div", { className: "sm:mr-10 mb-4 sm:mb-0 w-32" }, c3.createElement(ne, { propName: "imageSource", alt: "image" })), c3.createElement("div", { className: "flex-1" }, c3.createElement(N, { propName: "title", renderBlock: function(e2) {
    return c3.createElement("div", r({ className: (0, import_classnames2.default)("font-extrabold text-xl leading-6 mb-1", n.gray900) }, e2.attributes), e2.children);
  }, placeholder: "Title" }), c3.createElement(Z, { propName: "text", renderBlock: function(e2) {
    return c3.createElement("span", r({ className: (0, import_classnames2.default)("leading-6", n.gray700) }, e2.attributes), e2.children);
  }, placeholder: "Text", allowedFeatures: [E.RichTextFeatures.Link] }))));
};
O2.schema = { name: I2.FeatureCallout, label: "Feature callout", playgroundLinkLabel: "View source code on Github", playgroundLinkUrl: "https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/FeatureCallout/FeatureCallout.tsx", getDefaultProps: function() {
  return { bg: { color: "#fff", className: "bg-white dark:bg-gray-900" }, borderTop: "boxed", borderBottom: "none", width: "sm", title: "Easy like Wix, but your own.", text: "A great user experience for Content creators, React components for Developers.", imageSource: { src: "https://images.reactbricks.com/original/b3dc173e-fcb1-4aab-8a7a-1638386915f7.svg", placeholderSrc: "https://images.reactbricks.com/original/b3dc173e-fcb1-4aab-8a7a-1638386915f7.svg", srcSet: "", alt: "Content creators", seoName: "content-creators" } };
}, sideEditProps: [j2({ colors: [c.white, c.light, c.darkBlue] })] };
var D2 = function(t2) {
  var a2 = t2.bg, l3 = a2 === void 0 ? c.white.value : a2, i3 = t2.borderTop, s3 = i3 === void 0 ? "boxed" : i3, n2 = t2.borderBottom, m2 = n2 === void 0 ? "none" : n2, p2 = t2.width, b = p2 === void 0 ? "sm" : p2;
  return c3.createElement(R2, { bg: l3, borderTop: s3, borderBottom: m2 }, c3.createElement(C2, { size: b, className: (0, import_classnames2.default)("py-12 flex flex-col sm:flex-row items-center text-center sm:text-left") }, c3.createElement("div", { className: "flex-1 sm:pr-12 mb-4 sm:mb-0" }, c3.createElement(Z, { propName: "text", renderBlock: function(e2) {
    return c3.createElement("span", r({ className: (0, import_classnames2.default)("font-extrabold text-xl sm:text-2xl leading-6 sm:leading-8", n.gray800) }, e2.attributes), e2.children);
  }, placeholder: "Call to action text" })), c3.createElement("div", null, c3.createElement(ae, { propName: "buttons", itemProps: { padding: "small" } }))));
};
D2.schema = { name: I2.CallToAction, label: "Call to action", playgroundLinkLabel: "View source code on Github", playgroundLinkUrl: "https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/CallToAction/CallToAction.tsx", getDefaultProps: function() {
  return { bg: { color: "#fff", className: "bg-white dark:bg-gray-900" }, borderTop: "boxed", borderBottom: "none", width: "sm", text: "React Bricks is great for developers and marketing.", buttons: [{ text: "Get started", variant: "pink", type: "solid", href: "", isTargetBlank: false, isBigButton: false }] };
}, repeaterItems: [{ name: "buttons", itemType: I2.Button, itemLabel: "Button", min: 0, max: 1 }], sideEditProps: [j2({ colors: [c.white, c.light, c.gray] })] };
var M2 = function(e2) {
  var t2 = e2.grayscale, a2 = t2 === void 0 || t2, o3 = t(e2, ["grayscale"]), i3 = c3.useContext(B).isDarkColorMode;
  return c3.createElement("div", r({ className: "px-6 py-4 w-1/2 sm:w-1/3 md:w-1/6 flex justify-center items-center text-gray-300" }, o3), c3.createElement(ne, { propName: "image", alt: "customer", imageClassName: "w-32 h-16", imageStyle: a2 ? i3 ? { filter: "opacity(0.5) grayscale(100%) invert(1)" } : { filter: "opacity(0.5) grayscale(100%)" } : {} }));
};
M2.schema = { name: I2.Customer, label: "Customer", hideFromAddMenu: true, playgroundLinkLabel: "View source code on Github", playgroundLinkUrl: "https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Customers/CustomerItem.tsx", getDefaultProps: function() {
  return { image: { src: "https://images.reactbricks.com/original/3c4b1f31-16ec-417f-ab2d-d734632bdeb8.svg", placeholderSrc: "https://images.reactbricks.com/original/3c4b1f31-16ec-417f-ab2d-d734632bdeb8.svg", srcSet: "", alt: "React Bricks Icon", seoName: "react-bricks-icon" } };
} };
var G2 = function(t2) {
  var a2 = t2.bg, r2 = a2 === void 0 ? c.white.value : a2, o3 = t2.borderTop, l3 = o3 === void 0 ? "none" : o3, i3 = t2.borderBottom, s3 = i3 === void 0 ? "none" : i3, n2 = t2.width, m2 = n2 === void 0 ? "lg" : n2, p2 = t2.grayscale, b = p2 === void 0 || p2;
  return c3.createElement(R2, { bg: r2, borderTop: l3, borderBottom: s3 }, c3.createElement(C2, { size: m2, className: (0, import_classnames2.default)("py-12 flex flex-wrap justify-center items-center") }, c3.createElement(ae, { propName: "customers", itemProps: { grayscale: b } })));
};
G2.schema = { name: I2.Customers, label: "Customers", playgroundLinkLabel: "View source code on Github", playgroundLinkUrl: "https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Customers/Customers.tsx", getDefaultProps: function() {
  return { bg: { color: "#f7fafc", className: "bg-gray-100 dark:bg-gray-800" }, borderTop: "none", borderBottom: "none", width: "lg", grayscale: true, customers: [{ image: { src: "https://images.reactbricks.com/original/55a585f2-0092-499a-88e7-6f6e72870382.svg", placeholderSrc: "https://images.reactbricks.com/original/55a585f2-0092-499a-88e7-6f6e72870382.svg", srcSet: "", alt: "Airbnb", seoName: "airbnb" } }, { image: { src: "https://images.reactbricks.com/original/df0214c6-7feb-4037-921f-985bdf584ed7.svg", placeholderSrc: "https://images.reactbricks.com/original/df0214c6-7feb-4037-921f-985bdf584ed7.svg", srcSet: "", alt: "Dribble", seoName: "dribble" } }, { image: { src: "https://images.reactbricks.com/original/44dd50bd-9401-47bb-a248-56192cb0da03.svg", placeholderSrc: "https://images.reactbricks.com/original/44dd50bd-9401-47bb-a248-56192cb0da03.svg", srcSet: "", alt: "Netflix", seoName: "netflix" } }, { image: { src: "https://images.reactbricks.com/original/5bea2f55-07ea-47fb-b638-bedaa6c2275f.svg", placeholderSrc: "https://images.reactbricks.com/original/5bea2f55-07ea-47fb-b638-bedaa6c2275f.svg", srcSet: "", alt: "Pinterest", seoName: "pinterest" } }, { image: { src: "https://images.reactbricks.com/original/52f81cf1-01bc-43d0-9428-995351146c2a.svg", placeholderSrc: "https://images.reactbricks.com/original/52f81cf1-01bc-43d0-9428-995351146c2a.svg", srcSet: "", alt: "Next.js", seoName: "next-js" } }] };
}, repeaterItems: [{ name: "customers", itemType: I2.Customer, itemLabel: "Customer", min: 0, max: 12 }], sideEditProps: [j2({ colors: [c.white, c.light, c.gray] }), { name: "grayscale", label: "Greyscale", type: E.SideEditPropType.Boolean }] };
var U2 = function(t2) {
  var a2 = t2.bg, r2 = a2 === void 0 ? c.white.value : a2, o3 = t2.borderTop, l3 = o3 === void 0 ? "full" : o3, i3 = t2.borderBottom, s3 = i3 === void 0 ? "none" : i3, n2 = t2.width, m2 = n2 === void 0 ? "sm" : n2;
  return c3.createElement(R2, { bg: r2, borderTop: l3, borderBottom: s3 }, c3.createElement(C2, { size: m2, className: (0, import_classnames2.default)("pt-12") }, c3.createElement(ae, { propName: "faqs" })));
};
U2.schema = { name: I2.Faqs, label: "Faq", playgroundLinkLabel: "View source code on Github", playgroundLinkUrl: "https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Faq/Faq.tsx", getDefaultProps: function() {
  return { bg: c.white.value, borderTop: "full", borderBottom: "none", width: "sm", faqs: [{ question: "Why you should change your CMS today?", answer: "Because you want to have top user experience and top developer experience." }] };
}, repeaterItems: [{ name: "faqs", itemType: I2.Faq, itemLabel: "Question" }], sideEditProps: [j2({ colors: [c.white, c.light, c.gray] })] };
var z3 = function() {
  return c3.createElement("div", { className: "leading-6 mb-12" }, c3.createElement(N, { propName: "question", renderBlock: function(e2) {
    return c3.createElement("p", r({ className: (0, import_classnames2.default)(n.gray900, "font-extrabold mb-1") }, e2.attributes), e2.children);
  }, placeholder: "Answer..." }), c3.createElement(Z, { propName: "answer", renderBlock: function(e2) {
    return c3.createElement("p", r({ className: n.gray800 }, e2.attributes), e2.children);
  }, placeholder: "Answer..." }));
};
z3.schema = { name: I2.Faq, label: "Question", hideFromAddMenu: true, playgroundLinkLabel: "View source code on Github", playgroundLinkUrl: "https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Faq/FaqItem.tsx", getDefaultProps: function() {
  return { question: "Why you should change your CMS today?", answer: "Because you want to have top user experience and top developer experience." };
} };
var W2 = function(e2) {
  return e2 === "base" ? "text-lg md:text-xl md:leading-5 leading-5 text-gray-700 dark:text-gray-300 font-extrabold mb-2" : " text-base leading-5 text-gray-700 dark:text-gray-400 font-extrabold mb-2";
};
var q2 = function(e2) {
  switch (e2) {
    case "base":
      return "md:w-80";
    case "small":
      return "md:w-72 md:-mx-2";
    case "small-3cols":
      return "md:px-8";
    default:
      return "w-64";
  }
};
var V2 = function(e2) {
  var t2 = e2.screenLayout, a2 = e2.isTextCenter, o3 = a2 !== void 0 && a2, i3 = t(e2, ["screenLayout", "isTextCenter"]);
  return c3.createElement("div", r({ className: (0, import_classnames2.default)("flex md:flex-col ".concat(q2(t2), " mb-16"), o3 && "text-center items-center") }, i3), c3.createElement(ne, { propName: "image", alt: "feature", imageClassName: t2 === "base" ? "w-24 md:w-auto h-auto md:h-24" : "w-12 h-12", containerClassName: "my-auto mr-6 md:mr-0 md:mb-5" }), c3.createElement("div", { className: "flex-1" }, c3.createElement(N, { propName: "title", placeholder: "title...", renderBlock: function(e3) {
    return c3.createElement("h3", { className: (0, import_classnames2.default)(W2(t2)) }, e3.children);
  } }), c3.createElement(Z, { propName: "text", placeholder: "text...", renderBlock: function(e3) {
    return c3.createElement("p", { className: "text-gray-500 dark:text-gray-200 font-normal leading-6 text-base text" }, e3.children);
  } })));
};
V2.schema = { name: I2.FeatureItem, label: "Feature", hideFromAddMenu: true, playgroundLinkLabel: "View source code on Github", playgroundLinkUrl: "https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Features/FeatureItem.tsx", getDefaultProps: function() {
  return { isTextCenter: false, title: "Front-end development", text: "We are specialized in the development of React web applications. For public websites we use Next.js or Gatbsy, based on the type of project.", screenLayout: "base", image: { src: "https://images.reactbricks.com/original/193ab040-1fc7-47b5-8ca0-c2176be578a6.svg", placeholderSrc: "https://images.reactbricks.com/original/193ab040-1fc7-47b5-8ca0-c2176be578a6.svg", srcSet: "" } };
}, sideEditProps: [{ name: "isTextCenter", label: "center feature", type: E.SideEditPropType.Boolean }] };
var _2 = function(e2) {
  switch (e2) {
    case "base":
      return "max-w-3xl";
    case "small":
      return "max-w-2xl";
    case "small-3cols":
      return "md:w-full max-w-5xl md:-mx-8";
  }
};
var A3 = function(t2) {
  var a2 = t2.bg, r2 = a2 === void 0 ? c.white.value : a2, o3 = t2.borderTop, l3 = o3 === void 0 ? "none" : o3, i3 = t2.borderBottom, s3 = i3 === void 0 ? "none" : i3, n2 = t2.screenLayout, m2 = n2 === void 0 ? "base" : n2;
  return c3.createElement(R2, { bg: r2, borderTop: l3, borderBottom: s3 }, c3.createElement(C2, { size: "lg", className: (0, import_classnames2.default)("py-12 flex flex-wrap justify-center items-center") }, c3.createElement(ae, { propName: "feature-item", renderWrapper: function(e2) {
    return c3.createElement("div", { className: (0, import_classnames2.default)("flex flex-wrap  justify-between mx-auto px-6 md:px-0", _2(m2)) }, m2 === "small-3cols" ? c3.createElement("div", { className: "grid md:grid-cols-3" }, e2) : e2);
  }, itemProps: { screenLayout: m2 } })));
};
A3.schema = { name: I2.Features, label: "Features", playgroundLinkLabel: "View source code on Github", playgroundLinkUrl: "https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Features/Features.tsx", getDefaultProps: function() {
  return { bg: { color: "#fff", className: "bg-white dark:bg-gray-900" }, borderTop: "none", borderBottom: "none", screenLayout: "base", "feature-item": [{ title: "Front-end development", text: "We are specialized in the development of React web applications. For public websites we use Next.js or Gatbsy, based on the type of project.", screenLayout: "base", image: { src: "https://images.reactbricks.com/original/193ab040-1fc7-47b5-8ca0-c2176be578a6.svg", placeholderSrc: "https://images.reactbricks.com/original/193ab040-1fc7-47b5-8ca0-c2176be578a6.svg", srcSet: "" } }, { title: "Request feedback", text: "We are specialized in the development of React web applications. For public websites we use Next.js or Gatbsy, based on the type of project.", screenLayout: "base", image: { src: "https://images.reactbricks.com/original/193ab040-1fc7-47b5-8ca0-c2176be578a6.svg", placeholderSrc: "https://images.reactbricks.com/original/193ab040-1fc7-47b5-8ca0-c2176be578a6.svg", srcSet: "" } }, { title: "Front-end development", text: "We are specialized in the development of React web applications. For public websites we use Next.js or Gatbsy, based on the type of project.", screenLayout: "base", image: { src: "https://images.reactbricks.com/original/193ab040-1fc7-47b5-8ca0-c2176be578a6.svg", placeholderSrc: "https://images.reactbricks.com/original/193ab040-1fc7-47b5-8ca0-c2176be578a6.svg", srcSet: "" } }] };
}, repeaterItems: [{ name: "feature-item", itemType: I2.FeatureItem, itemLabel: "Feature", min: 0, max: 4 }], sideEditProps: [j2(), { name: "screenLayout", label: "Screen Layout", type: E.SideEditPropType.Select, selectOptions: { display: E.OptionsDisplay.Select, options: [{ value: "base", label: "Two columns" }, { value: "small", label: "Small two columns" }, { value: "small-3cols", label: "Three columns" }] } }] };
var H2 = function(t2) {
  var a2 = t2.bg, l3 = a2 === void 0 ? c.white.value : a2, s3 = t2.borderTop, n2 = s3 === void 0 ? "none" : s3, m2 = t2.borderBottom, b = m2 === void 0 ? "none" : m2, u2 = t2.textGradient, f = u2 === void 0 ? "none" : u2, x = t2.size, y = x === void 0 ? "large" : x, v = n.gray800, k2 = n.gray700, w2 = n.purple500, E2 = f !== "none" ? { WebkitTextFillColor: "transparent" } : {};
  return c3.createElement(R2, { bg: l3, borderTop: n2, borderBottom: b }, c3.createElement(C2, { size: "lg", className: "py-12 xl:py-20" }, c3.createElement("div", { className: "max-w-xl mx-auto px-5" }, c3.createElement(ae, { propName: "badge", renderWrapper: function(e2) {
    return c3.createElement("div", { className: "mb-4" }, e2);
  } }), c3.createElement("div", { className: (0, import_classnames2.default)(v, i[f], "text-3xl", { "sm:text-5xl": y === "large" }, { "sm:text-4xl": y === "medium" }), style: E2 }, c3.createElement(Z, { renderBlock: function(e2) {
    return c3.createElement("h1", r({ className: (0, import_classnames2.default)("text-center font-black mb-4 bg-clip-text bg-gradient-to-r", v), style: { lineHeight: 1.1 } }, e2.attributes), e2.children);
  }, placeholder: "Type a title...", propName: "title", allowedFeatures: [E.RichTextFeatures.Highlight], renderHighlight: function(e2) {
    return c3.createElement("span", r({ className: w2 }, e2.attributes), e2.children);
  } })), c3.createElement(Z, { renderBlock: function(e2) {
    return c3.createElement("p", r({ className: (0, import_classnames2.default)("text-lg sm:text-xl text-center leading-7 sm:leading-8", k2) }, e2.attributes), e2.children);
  }, placeholder: "Type a text...", propName: "text", allowedFeatures: [E.RichTextFeatures.Bold, E.RichTextFeatures.Link] }), c3.createElement(ae, { propName: "buttons", renderWrapper: function(e2) {
    return c3.createElement("div", { className: "flex justify-center items-center flex-col sm:flex-row mt-6" }, e2);
  } }))));
};
H2.schema = { name: I2.HeroUnit, label: "Hero Unit", playgroundLinkLabel: "View source code on Github", playgroundLinkUrl: "https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Hero%20Unit/HeroUnit.tsx", getDefaultProps: function() {
  return { bg: { color: "#fff", className: "bg-white dark:bg-gray-900" }, size: "large", textGradient: "none", title: "We develop beautiful web applications", text: "We are a hi-tech web development company committed to deliver great products on time. We love to understand our customers' needs and exceed expectations.", badge: [{ text: "high tech", color: { color: "#90cdf4", className: "text-blue-400 dark:text-blue-300" } }], buttons: [{ text: "Get Started", href: "", isTargetBlank: false, variant: "azure", type: "solid" }, { text: "Learn more", href: "", isTargetBlank: false, variant: "azure", type: "outline" }] };
}, repeaterItems: [{ name: "badge", itemType: I2.Badge, itemLabel: "Badge", min: 0, max: 1 }, { name: "buttons", itemType: I2.Button, itemLabel: "Button", min: 0, max: 2 }], sideEditProps: [j2({ colors: [c.white, c.light, c.gray, c.lightBlue, c.orange, c.green, c.darkBlue, c.dark] }), { groupName: "Title", defaultOpen: true, props: [{ name: "textGradient", label: "Text gradient", type: E.SideEditPropType.Select, selectOptions: { display: E.OptionsDisplay.Select, options: [{ value: "none", label: "None" }, { value: "ocean", label: "Ocean" }, { value: "violet", label: "Violet" }, { value: "sun", label: "Sunset" }] } }, { name: "size", label: "Title size", type: E.SideEditPropType.Select, selectOptions: { display: E.OptionsDisplay.Radio, options: [{ value: "medium", label: "Medium" }, { value: "large", label: "Large" }] } }] }] };
var K2;
var J2 = function(e2, t2, a2, r2) {
  return "https://api.maptiler.com/maps/".concat("streets", "/256/").concat(a2, "/").concat(e2, "/").concat(t2).concat(r2 && r2 >= 2 ? "@2x" : "", ".png?key=").concat("zGVHxdSZR3rlLBsL6hUv#0.5");
};
var Q = function(e2) {
  var t2 = e2.width, a2 = e2.borderTop, o3 = e2.bg, i3 = e2.borderBottom, s3 = e2.lat, n2 = s3 === void 0 ? 45.9 : s3, c4 = e2.lng, d3 = c4 === void 0 ? 9.5 : c4, p2 = t(e2, ["width", "borderTop", "bg", "borderBottom", "lat", "lng"]);
  return import_react3.default.createElement(R2, { bg: o3, borderTop: a2, borderBottom: i3 }, import_react3.default.createElement(C2, { size: t2 }, import_react3.default.createElement(Map, r({ center: [n2, d3], height: 350, metaWheelZoom: true, zoom: 10, provider: J2, dprs: [1, 2] }, p2), import_react3.default.createElement(Marker, { anchor: [n2, d3] }))));
};
Q.schema = { name: I2.Map, label: "Map", playgroundLinkLabel: "View source code on Github", playgroundLinkUrl: "https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Map/Map.tsx", getDefaultProps: function() {
  return { bg: { color: "#fff", className: "bg-white dark:bg-gray-900" }, borderTop: "none", borderBottom: "none", width: "sm", lat: 45.6782509, lng: 9.5669407 };
}, sideEditProps: [j2({ colors: [c.white, c.light, c.gray] }), { groupName: "Map", defaultOpen: true, props: [{ name: "lat", label: "Latitude", type: E.SideEditPropType.Number }, { name: "lng", label: "Longitude", type: E.SideEditPropType.Number }] }] }, function(e2) {
  e2.MailChimp = "MAILCHIMP", e2.ConvertKit = "CONVERTKIT";
}(K2 || (K2 = {}));
var Z2 = function(e2) {
  var t2 = e2.centered, o3 = t2 !== void 0 && t2, l3 = e2.provider, i3 = e2.mailchimpUrl, s3 = e2.buttonText, n2 = e2.resultOkText, m2 = n2 === void 0 ? "Thank you, we'll keep in touch with you!" : n2, p2 = l(c3.useState(""), 2), b = p2[0], g2 = p2[1], h = l(c3.useState({ status: "IDLE", message: "" }), 2), f = h[0], x = h[1];
  return c3.createElement("section", { className: "py-12", style: { backgroundColor: "#deeffc", color: "#113d5f" } }, c3.createElement("div", { className: (0, import_classnames2.default)("max-w-xl mx-auto flex flex-col", { "items-center": o3 }) }, c3.createElement(N, { renderBlock: function(e3) {
    return c3.createElement("h1", r({ className: "text-2xl mb-4 font-extrabold" }, e3.attributes), e3.children);
  }, placeholder: "Type a title...", propName: "title" }), c3.createElement(N, { renderBlock: function(e3) {
    return c3.createElement("p", r({ className: "mb-2" }, e3.attributes), e3.children);
  }, placeholder: "Call to action...", propName: "description" }), c3.createElement("form", { className: "flex", onSubmit: function(e3) {
    if (e3.preventDefault(), l3 === K2.MailChimp)
      if ((0, import_email_validator.validate)(b))
        if (!i3 || i3.length < 10 || i3.indexOf("post") === -1)
          x({ status: "ERROR", message: "Invalid Mailchimp URL" });
        else {
          var t3 = encodeURIComponent(b), a2 = i3.replace(/\/post/g, "/post-json");
          !function(e4) {
            x({ status: "SENDING", message: "" }), (0, import_jsonp.default)(e4, { param: "c", timeout: 3500 }, function(e5, t4) {
              e5 ? x({ status: "ERROR", message: "An error occurred. Please, try again." }) : t4.msg.includes("already subscribed") ? x({ status: "ERROR", message: "You were already subscribed" }) : t4.result !== "success" ? x({ status: "ERROR", message: "An error occurred. Please, try again." }) : x({ status: "SUCCESS", message: "" });
            });
          }("".concat(a2, "?EMAIL=").concat(t3));
        }
      else
        x({ status: "ERROR", message: "Please, enter a valid email address" });
    else
      x({ status: "ERROR", message: "Provider not implemented" });
  } }, c3.createElement("input", { className: "bg-white focus:outline-none border-t-2 border-l-2 border-b-2 border-transparent focus:border-sky-500 rounded-l-lg py-2 px-4 appearance-none leading-normal", type: "text", placeholder: "jane@example.com", value: b, onChange: function(e3) {
    return g2(e3.target.value);
  } }), c3.createElement("button", { type: "submit", disabled: f.status === "SENDING", className: "bg-sky-500 px-8 rounded-r-lg text-white font-bold py-2" }, s3)), f.status === "SUCCESS" && c3.createElement("div", { className: "text-xl mt-4" }, m2), f.status === "ERROR" && c3.createElement("div", { className: "mt-4", style: { color: "#c00" } }, f.message)));
};
Z2.schema = { name: I2.NewsletterSubscribe, label: "Newsletter Subscribe", playgroundLinkLabel: "View source code on Github", playgroundLinkUrl: "https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/NewsletterSubscribe/NewsletterSubscribe.tsx", getDefaultProps: function() {
  return { title: "Want to receive updates from us?", description: "Leave your e-mail", provider: K2.MailChimp, buttonText: "Keep me updated", resultOkText: "Thank you, we'll keep in touch with you!" };
}, sideEditProps: [{ name: "centered", label: "Centered", type: E.SideEditPropType.Boolean }, { name: "provider", label: "Provider", type: E.SideEditPropType.Select, selectOptions: { display: E.OptionsDisplay.Select, options: [{ value: K2.MailChimp, label: "MailChimp" }, { value: K2.ConvertKit, label: "ConvertKit - TODO" }] } }, { name: "mailchimpUrl", label: "Mailchimp Form URL", type: E.SideEditPropType.Text, validate: function(e2) {
  return e2 && e2.length > 10 && e2.indexOf("https://") !== -1;
} }, { name: "buttonText", label: "Button text", type: E.SideEditPropType.Text }, { name: "resultOkText", label: "Result OK text", type: E.SideEditPropType.Text }] };
var Y = function(e2) {
  var t2 = e2.color, a2 = t2 === void 0 ? s.gray.value : t2, o3 = e2.className, i3 = t(e2, ["color", "className"]);
  return c3.createElement("div", r({}, i3, { className: "flex justify-center items-center" }), c3.createElement(N, { renderBlock: function(e3) {
    return c3.createElement("span", { className: (0, import_classnames2.default)("text-sm font-black uppercase text-center", a2.className, o3), style: { letterSpacing: "0.35em" } }, e3.children);
  }, placeholder: "Badge...", propName: "text" }));
};
Y.schema = { name: I2.Badge, label: "Badge", hideFromAddMenu: true, playgroundLinkLabel: "View source code on Github", playgroundLinkUrl: "https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/shared/Badge.tsx", getDefaultProps: function() {
  return { text: "Special", color: s.gray.value };
}, sideEditProps: [{ name: "color", label: "Badge Color", type: E.SideEditPropType.Select, shouldRefreshText: true, selectOptions: { display: E.OptionsDisplay.Color, options: [s.gray, s.pink, s.blue, s.green] } }] };
var X2 = function(e2) {
  var t2 = e2.color, a2 = t2 === void 0 ? g.pinkLight.value : t2, o3 = e2.className, i3 = t(e2, ["color", "className"]);
  return c3.createElement("div", r({ className: (0, import_classnames2.default)("flex justify-start items-center py-2 leading-tight", o3) }, i3), c3.createElement("div", { className: (0, import_classnames2.default)("flex justify-center items-center w-5 h-5 rounded-full mr-4 text-sm", a2.className), style: { minWidth: "1.25rem" } }, c3.createElement(FiCheck, null)), c3.createElement(N, { propName: "text", renderBlock: function(e3) {
    return c3.createElement("span", r({ className: (0, import_classnames2.default)("dark:text-gray-100", a2.className2) }, e3.attributes), e3.children);
  }, placeholder: "Type..." }));
};
X2.schema = { name: I2.BulletListItem, label: "List item", hideFromAddMenu: true, playgroundLinkLabel: "View source code on Github", playgroundLinkUrl: "https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/shared/BulletListItem.tsx", getDefaultProps: function() {
  return { color: g.pinkLight.value, text: "New item" };
}, sideEditProps: [{ name: "color", label: "Color", type: E.SideEditPropType.Select, shouldRefreshText: true, selectOptions: { display: E.OptionsDisplay.Color, options: [g.pink, g.pinkLight, g.azure, g.azureLight, g.green, g.greenLight] } }] };
var $ = function(e2) {
  var t2 = e2.text, a2 = e2.href, o3 = e2.isTargetBlank, i3 = o3 !== void 0 && o3, s3 = e2.isBigButton, n2 = s3 !== void 0 && s3, m2 = e2.variant, p2 = m2 === void 0 ? "pink" : m2, b = e2.type, u2 = b === void 0 ? "solid" : b, g2 = e2.padding, h = g2 === void 0 ? "normale" : g2, f = e2.className, y = t(e2, ["text", "href", "isTargetBlank", "isBigButton", "variant", "type", "padding", "className"]), v = i3 ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return c3.createElement(z, r({ href: a2 }, v, { className: (0, import_classnames2.default)("py-3 mx-2 my-2 rounded-full font-bold leading-none translate-hover-2 hover:shadow-lg transition-all ease-in-out duration-150", h === "normal" ? "px-8" : "px-5", n2 && " w-3/5 text-center rounded-sm", { "bg-pink-500 text-white hover:bg-pink-600 hover:text-white": p2 === "pink" && u2 === "solid" }, { "bg-sky-500 text-white hover:bg-sky-600 hover:text-white": p2 === "azure" && u2 === "solid" }, { "border border-pink-600 text-pink-600 hover:text-pink-600 dark:border-pink-500 dark:text-pink-500": p2 === "pink" && u2 === "outline" }, { "border border-sky-600 text-sky-600 hover:text-sky-600 dark:border-sky-500 dark:text-sky-500": p2 === "azure" && u2 === "outline" }, f) }, y), t2);
};
$.schema = { name: I2.Button, label: "Button", hideFromAddMenu: true, playgroundLinkLabel: "View source code on Github", playgroundLinkUrl: "https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/shared/Button.tsx", getDefaultProps: function() {
  return { text: "Click me", href: "", isTargetBlank: false, variant: "azure", type: "solid", isBigButton: false };
}, sideEditProps: [{ name: "text", label: "Button text", type: E.SideEditPropType.Text }, { name: "isBigButton", label: "Size button big?", type: E.SideEditPropType.Boolean }, { name: "variant", label: "Variant", type: E.SideEditPropType.Select, selectOptions: { display: E.OptionsDisplay.Radio, options: [{ value: "azure", label: "Azure" }, { value: "pink", label: "Pink" }] } }, { name: "type", label: "Type", type: E.SideEditPropType.Select, selectOptions: { display: E.OptionsDisplay.Radio, options: [{ value: "solid", label: "Solid" }, { value: "outline", label: "Outline" }] } }, { name: "href", label: "Link (external or path)", type: E.SideEditPropType.Text }, { name: "isTargetBlank", label: "Open in new window", type: E.SideEditPropType.Boolean }] };
var ee = function(t2) {
  var a2 = t2.bg, r2 = a2 === void 0 ? c.white.value : a2, o3 = t2.width, l3 = o3 === void 0 ? "lg" : o3, i3 = t2.borderTop, s3 = i3 === void 0 ? "none" : i3, n2 = t2.borderBottom, m2 = n2 === void 0 ? "none" : n2;
  return c3.createElement(R2, { bg: r2, borderTop: s3, borderBottom: m2 }, c3.createElement(C2, { size: l3, className: (0, import_classnames2.default)("py-12 flex flex-wrap justify-center items-center") }, c3.createElement("div", { className: "flex w-full mx-auto mt-10 flex-wrap justify-center mb-6 w- max-w-4xl" }, c3.createElement(ae, { propName: "teamItem" }))));
};
ee.schema = { name: I2.Team, label: "Team", playgroundLinkLabel: "View source code on Github", playgroundLinkUrl: "https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Team/Team.tsx", getDefaultProps: function() {
  return { bg: { color: "#fff", className: "bg-white dark:bg-gray-900" }, borderTop: "none", borderBottom: "none", width: "lg", teamItem: [{ memberName: "Matteo Frana", duty: "Frontend Designer", picture: { src: "https://images.reactbricks.com/original/8a568f5b-98e4-46d5-96eb-b9cd01ab5c67.jpg", placeholderSrc: "https://images.reactbricks.com/placeholder/8a568f5b-98e4-46d5-96eb-b9cd01ab5c67.jpg", srcSet: "https://images.reactbricks.com/src_set/8a568f5b-98e4-46d5-96eb-b9cd01ab5c67-400.jpg 400w,\nhttps://images.reactbricks.com/src_set/8a568f5b-98e4-46d5-96eb-b9cd01ab5c67-200.jpg 200w" }, twitter: "", github: "", linkedin: "", role: "Frontend Designer" }, { memberName: "Dario Ronzoni", role: "Backend Designer", twitter: "", github: "", linkedin: "", picture: { src: "https://images.reactbricks.com/original/a439e3bd-066d-4a04-84cf-3be233814f56.jpg", placeholderSrc: "https://images.reactbricks.com/placeholder/a439e3bd-066d-4a04-84cf-3be233814f56.jpg", srcSet: "https://images.reactbricks.com/src_set/a439e3bd-066d-4a04-84cf-3be233814f56-400.jpg 400w,\nhttps://images.reactbricks.com/src_set/a439e3bd-066d-4a04-84cf-3be233814f56-200.jpg 200w" } }, { memberName: "Cecilia Panicali", role: "Frontend Designer", twitter: "", github: "", linkedin: "", picture: { src: "https://images.reactbricks.com/original/36a83dc9-58bd-419a-8c51-c78feeda3d6e.jpg", placeholderSrc: "https://images.reactbricks.com/placeholder/36a83dc9-58bd-419a-8c51-c78feeda3d6e.jpg", srcSet: "https://images.reactbricks.com/src_set/36a83dc9-58bd-419a-8c51-c78feeda3d6e-400.jpg 400w,\nhttps://images.reactbricks.com/src_set/36a83dc9-58bd-419a-8c51-c78feeda3d6e-200.jpg 200w" } }, { memberName: "Roberta Ferrari", role: "Marketing", twitter: "", github: "", linkedin: "", picture: { src: "https://images.reactbricks.com/original/83791a26-9465-49da-b4ef-61b0425fbba0.jpg", placeholderSrc: "https://images.reactbricks.com/placeholder/83791a26-9465-49da-b4ef-61b0425fbba0.jpg", srcSet: "https://images.reactbricks.com/src_set/83791a26-9465-49da-b4ef-61b0425fbba0-400.jpg 400w,\nhttps://images.reactbricks.com/src_set/83791a26-9465-49da-b4ef-61b0425fbba0-200.jpg 200w" } }, { memberName: "Matteo Frana", role: "Frontend Designer", twitter: "", github: "", linkedin: "", picture: { src: "https://images.reactbricks.com/original/7e7dcf49-04c8-4494-ab4a-bab1f88056aa.jpg", placeholderSrc: "https://images.reactbricks.com/placeholder/7e7dcf49-04c8-4494-ab4a-bab1f88056aa.jpg", srcSet: "https://images.reactbricks.com/src_set/7e7dcf49-04c8-4494-ab4a-bab1f88056aa-400.jpg 400w,\nhttps://images.reactbricks.com/src_set/7e7dcf49-04c8-4494-ab4a-bab1f88056aa-200.jpg 200w" } }] };
}, repeaterItems: [{ name: "teamItem", itemType: I2.TeamItem, itemLabel: "Member", min: 0, max: 5 }], sideEditProps: [j2({ colors: [c.white, c.light, c.gray] })] };
var te = function(e2) {
  var t2 = e2.twitter, a2 = e2.github, o3 = e2.linkedin, i3 = t(e2, ["twitter", "github", "linkedin"]);
  return c3.createElement("div", r({ className: "flex flex-col sm:w-1/3 w-1/2 p-6" }, i3), c3.createElement(ne, { propName: "picture", alt: "team-item", containerClassName: "w-24 h-24 mb-6 flex justify-center items-center bg-white rounded-full shadow-xl mx-auto", imageClassName: "w-24 h-24 rounded-full" }), c3.createElement("div", { className: "text-center dark:text-gray-200 text-gray-500" }, c3.createElement(N, { renderBlock: function(e3) {
    return c3.createElement("div", { className: "text-sm font-bold" }, e3.children);
  }, placeholder: "Member name...", propName: "memberName" }), c3.createElement(N, { renderBlock: function(e3) {
    return c3.createElement("div", { className: "text-xs" }, e3.children);
  }, placeholder: "Role", propName: "role" })), (t2 || o3 || a2) && c3.createElement("div", { className: "flex flex-row justify-center space-x-2 mt-2 dark:text-sky-300 text-sky-400 " }, t2 && c3.createElement("div", null, c3.createElement("a", { href: "https://twitter.com/".concat(t2), target: "_blank", rel: "noopener noreferrer" }, c3.createElement(FiTwitter, null))), o3 && c3.createElement("div", null, c3.createElement("a", { href: "https://linkedin.com/".concat(o3), target: "_blank", rel: "noopener noreferrer" }, c3.createElement(FiLinkedin, null))), a2 && c3.createElement("div", null, c3.createElement("a", { href: "https://github.com/".concat(a2), target: "_blank", rel: "noopener noreferrer" }, c3.createElement(FiGithub, null)))));
};
te.schema = { name: I2.TeamItem, label: "Team Item", hideFromAddMenu: true, playgroundLinkLabel: "View source code on Github", playgroundLinkUrl: "https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Team/TeamItem.tsx", getDefaultProps: function() {
  return { bg: { color: "#fff", className: "bg-white dark:bg-gray-900" }, borderTop: "none", borderBottom: "none", width: "lg", memberName: "Matteo Frana", role: "Frontend Designer", twitter: "", github: "", linkedin: "", picture: { src: "https://images.reactbricks.com/original/7e7dcf49-04c8-4494-ab4a-bab1f88056aa.jpg", placeholderSrc: "https://images.reactbricks.com/placeholder/7e7dcf49-04c8-4494-ab4a-bab1f88056aa.jpg", srcSet: "https://images.reactbricks.com/src_set/7e7dcf49-04c8-4494-ab4a-bab1f88056aa-400.jpg 400w,\nhttps://images.reactbricks.com/src_set/7e7dcf49-04c8-4494-ab4a-bab1f88056aa-200.jpg 200w" } };
}, sideEditProps: [{ groupName: "Social Media", defaultOpen: true, props: [{ name: "twitter", label: "Twitter UserName", type: E.SideEditPropType.Text }, { name: "linkedin", label: "Linkedin UserName", type: E.SideEditPropType.Text }, { name: "github", label: "Github UserName", type: E.SideEditPropType.Text }] }] };
var ae2 = function(t2) {
  var a2 = t2.authorName, r2 = t2.authorJobTitle, o3 = t2.avatarImage, l3 = t2.logoImage, i3 = t2.small, s3 = i3 !== void 0 && i3, n2 = t2.bg, m2 = n2 === void 0 ? c.white.value : n2, p2 = t2.borderTop, g2 = p2 === void 0 ? "full" : p2, h = t2.borderBottom, f = h === void 0 ? "none" : h;
  return c3.createElement(R2, { bg: m2, borderTop: g2, borderBottom: f }, c3.createElement(C2, { size: "sm", className: (0, import_classnames2.default)("pt-12 pb-20 flex flex-col justify-between ", s3 ? "items-start" : "items-center") }, c3.createElement(N, { renderBlock: function(e2) {
    return c3.createElement("div", { className: (0, import_classnames2.default)("flex-1 leading-relaxed text-center mb-6 text-gray-700 dark:text-gray-200 max-w-lg", s3 ? "text-md text-left" : "text-xl text-center") }, e2.children);
  }, placeholder: "Quote...", renderPlaceholder: function(e2) {
    return c3.createElement("span", null, e2.children);
  }, propName: "quote" }), c3.createElement("div", { className: "flex items-center" }, o3 ? c3.createElement(ne, { alt: a2, propName: "avatarImage", imageClassName: (0, import_classnames2.default)("rounded-full", s3 ? "w-8" : "w-10") }) : c3.createElement("div", { className: (0, import_classnames2.default)("flex justify-center items-center rounded-full bg-gray-100 text-gray-500 text-xl", s3 ? "w-8" : "w-10") }, c3.createElement(FiUser, null)), c3.createElement("div", { className: "ml-3 dark:text-gray-200" }, c3.createElement(N, { renderBlock: function(e2) {
    return c3.createElement("div", { className: "text-sm font-bold" }, e2.children);
  }, placeholder: "Author name...", propName: "authorName" }), c3.createElement(N, { renderBlock: function(e2) {
    return c3.createElement("div", { className: "text-xs" }, e2.children);
  }, placeholder: "Job title...", propName: "authorJobTitle" })), l3 && c3.createElement("div", { className: "ml-5 pl-5 border-l border-gray-300" }, c3.createElement(ne, { alt: r2, propName: "logoImage", imageClassName: "h-6" })))));
};
ae2.schema = { name: I2.Testimonial, label: "Testimonial", playgroundLinkLabel: "View source code on Github", playgroundLinkUrl: "https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Testimonial/Testimonial.tsx", getDefaultProps: function() {
  return { quote: "F2.net is a skilled company who helped us define our production management application requirements and implemented it as a beautiful system that our users love. We are very satisfied.", authorName: "Matteo Frana", authorJobTitle: "Founder @ React Bricks", avatarImage: { src: "https://images.reactbricks.com/original/4a14877f-223a-4988-8279-6d2940885ce4.jpg", placeholderSrc: "https://images.reactbricks.com/placeholder/4a14877f-223a-4988-8279-6d2940885ce4.jpg", srcSet: "https://images.reactbricks.com/src_set/4a14877f-223a-4988-8279-6d2940885ce4-400.jpg 400w,\nhttps://images.reactbricks.com/src_set/4a14877f-223a-4988-8279-6d2940885ce4-200.jpg 200w", alt: "Matteo", seoName: "matteo" }, logoImage: { src: "https://images.reactbricks.com/original/dc2b9d0b-9a49-4674-bc88-fdd8fbf357ae.svg", placeholderSrc: "https://images.reactbricks.com/original/dc2b9d0b-9a49-4674-bc88-fdd8fbf357ae.svg", srcSet: "", alt: "React Bricks", seoName: "react-bricks" } };
}, sideEditProps: [j2({ colors: [c.white, c.light, c.gray] })] };
var re = function(t2) {
  var a2 = t2.bg, l3 = a2 === void 0 ? c.white.value : a2, i3 = t2.borderTop, s3 = i3 === void 0 ? "none" : i3, n2 = t2.borderBottom, m2 = n2 === void 0 ? "none" : n2, u2 = t2.width, f = u2 === void 0 ? "lg" : u2, y = t2.heroTitle, v = y !== void 0 && y, k2 = t2.mobileTextCenter, w2 = k2 !== void 0 && k2, E2 = t2.multiple, N3 = E2 !== void 0 && E2, T2 = t2.imageSide, B3 = T2 === void 0 ? "right" : T2, S = t2.mobileImageTop, L3 = S !== void 0 && S, P3 = t2.mobileIcon, F3 = P3 !== void 0 && P3, I3 = t2.hasShadow, j3 = I3 !== void 0 && I3, O3 = t2.isRounded, D3 = O3 !== void 0 && O3, M3 = n.gray900, G3 = n.purple500, U3 = n.gray700;
  return c3.createElement(R2, { bg: l3, borderTop: s3, borderBottom: m2 }, c3.createElement(C2, { size: f, className: (0, import_classnames2.default)("py-12 lg:py-20 flex flex-no-wrap md:justify-between md:items-start", w2 ? "items-center" : "items-start", L3 ? "flex-col-reverse" : "flex-col", B3 === "right" ? "md:flex-row" : "md:flex-row-reverse") }, c3.createElement("div", { className: (0, import_classnames2.default)("w-full md:flex-1 flex flex-col", B3 === "right" ? "md:pr-1/10" : "md:pl-1/10") }, c3.createElement(ae, { propName: "badge", renderWrapper: function(e2) {
    return c3.createElement("div", { className: (0, import_classnames2.default)("mb-4 flex", { "justify-center md:justify-start": w2 }) }, e2);
  } }), c3.createElement(Z, { propName: "title", renderBlock: function(e2) {
    return c3.createElement("h2", r({ className: (0, import_classnames2.default)("mt-0 mb-4", M3, { "text-center md:text-left": w2 }, v ? "text-3xl sm:text-4xl font-black" : "text-2xl sm:text-3xl font-extrabold"), style: { lineHeight: 1.125 } }, e2.attributes), e2.children);
  }, placeholder: "Type a title...", allowedFeatures: [E.RichTextFeatures.Highlight], renderHighlight: function(e2) {
    return c3.createElement("span", r({ className: G3 }, e2.attributes), e2.children);
  } }), c3.createElement(Z, { propName: "text", renderBlock: function(e2) {
    return c3.createElement("p", r({ className: (0, import_classnames2.default)("text-lg sm:text-xl mb-3", U3, { "text-center md:text-left": w2 }), style: { lineHeight: 1.6 } }, e2.attributes), e2.children);
  }, placeholder: "Type a text...", allowedFeatures: [E.RichTextFeatures.Bold, E.RichTextFeatures.Link], renderLink: function(e2) {
    return c3.createElement(z, r({}, e2, { className: "text-lg" }), e2.children, "\xA0\xBB");
  } }), c3.createElement(ae, { propName: "bulletListItems", itemProps: { className: "lg:w-2/5 text-lg" }, renderWrapper: function(e2) {
    return c3.createElement("div", { className: "mt-4 w-full flex flex-col lg:flex-row lg:flex-wrap lg:justify-between" }, e2);
  } }), c3.createElement(ae, { propName: "buttons", renderWrapper: function(e2) {
    return c3.createElement("div", { className: "flex items-center flex-col sm:flex-row mt-4" }, e2);
  } })), N3 ? c3.createElement("div", { className: "flex w-full md:w-2/5 lg:w-1/2 max-w-xs md:max-w-sm mx-auto mt-10 md:mt-0 flex-wrap justify-center -mb-6" }, c3.createElement(ae, { propName: "logos" })) : c3.createElement("div", { className: (0, import_classnames2.default)(F3 ? "w-24" : "w-full", L3 ? "mt-0 mb-10" : "mt-10 mb-0", "md:w-2/5 md:mt-0 md:mb-0") }, c3.createElement(ne, { propName: "imageSource", alt: "Image", imageClassName: (0, import_classnames2.default)({ "rounded-lg": D3 }, { "shadow-2xl": j3 }) }))));
};
re.schema = { name: I2.TextImage, label: "Text Image", playgroundLinkLabel: "View source code on Github", playgroundLinkUrl: "https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/TextImage/TextImage.tsx", getDefaultProps: function() {
  return { bg: { color: "#fff", className: "bg-white dark:bg-gray-900" }, borderTop: "none", borderBottom: "none", width: "lg", title: "We built hundreds of apps", heroTitle: false, mobileTextCenter: false, text: "We create and host websites since 1997. We saw the Internet grow up as the standards evolved. We have built hundreds of successful web applications and we still have a lot of fun.", imageSource: { src: "https://images.reactbricks.com/original/7a358d12-e668-46e4-ab81-b90431006182.png", placeholderSrc: "https://images.reactbricks.com/placeholder/7a358d12-e668-46e4-ab81-b90431006182.png", srcSet: "https://images.reactbricks.com/src_set/7a358d12-e668-46e4-ab81-b90431006182-1600.png 1600w,\nhttps://images.reactbricks.com/src_set/7a358d12-e668-46e4-ab81-b90431006182-1200.png 1200w,\nhttps://images.reactbricks.com/src_set/7a358d12-e668-46e4-ab81-b90431006182-400.png 400w,\nhttps://images.reactbricks.com/src_set/7a358d12-e668-46e4-ab81-b90431006182-200.png 200w", alt: "Dashboard", seoName: "dashboard" }, imageSide: "right", multiple: false, mobileImageTop: false, mobileIcon: false, hasShadow: false, isRounded: false };
}, sideEditProps: [j2({ colors: [c.white, c.light, c.gray, c.darkBlue] }), { groupName: "Text", defaultOpen: true, props: [{ name: "heroTitle", label: "Hero-size Title", type: E.SideEditPropType.Boolean, shouldRefreshText: true }, { name: "mobileTextCenter", label: "Text centered on mobile", type: E.SideEditPropType.Boolean, shouldRefreshText: true }] }, { groupName: "Image", props: [{ name: "multiple", label: "Multiple logos", type: E.SideEditPropType.Boolean }, { name: "imageSide", label: "Image side", type: E.SideEditPropType.Select, selectOptions: { display: E.OptionsDisplay.Radio, options: [{ value: "left", label: "Left" }, { value: "right", label: "Right" }] } }, { name: "mobileImageTop", label: "Image on top on mobile", type: E.SideEditPropType.Boolean }, { name: "mobileIcon", label: "Show as icon on mobile", type: E.SideEditPropType.Boolean, show: function(e2) {
  return !e2.multiple;
} }, { name: "hasShadow", label: "Image shadow", type: E.SideEditPropType.Boolean, show: function(e2) {
  return !e2.multiple;
} }, { name: "isRounded", label: "Image rounded corners", type: E.SideEditPropType.Boolean, show: function(e2) {
  return !e2.multiple;
} }] }], repeaterItems: [{ name: "badge", itemType: I2.Badge, itemLabel: "Badge", min: 0, max: 1 }, { name: "bulletListItems", itemType: I2.BulletListItem, itemLabel: "Feature", min: 0, max: 4 }, { name: "buttons", itemType: I2.Button, itemLabel: "Button", min: 0, max: 1 }, { name: "logos", itemType: I2.TextImageLogo, itemLabel: "Logo", min: 0, max: 6 }] };
var oe2 = function(e2) {
  var t2 = t(e2, []);
  return c3.createElement("div", r({}, t2), c3.createElement(ne, { propName: "imageSource", alt: "logo", containerClassName: "w-16 h-16 lg:w-24 lg:h-24 mx-3 mb-6 p-2 flex justify-center items-center bg-white rounded-full shadow-xl", imageClassName: "w-12 h-12 lg:w-16 lg:h-16" }));
};
oe2.schema = { name: I2.TextImageLogo, label: "Logo", hideFromAddMenu: true, playgroundLinkLabel: "View source code on Github", playgroundLinkUrl: "https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/TextImage/TextImageLogo.tsx", getDefaultProps: function() {
  return { imageSource: { src: "https://images.reactbricks.com/original/3c4b1f31-16ec-417f-ab2d-d734632bdeb8.svg", placeholderSrc: "https://images.reactbricks.com/original/3c4b1f31-16ec-417f-ab2d-d734632bdeb8.svg", srcSet: "" } };
} };
var le = [Y, $, X2, H2, re, oe2, ae2, G2, M2, U2, z3, D2, Q, O2, Z2, ee, te, A3, V2];

// app/react-bricks/bricks/MyHeroUnit.tsx
init_react();
var import_react4 = __toESM(require_react());
var MyHeroUnit = ({ padding }) => {
  return /* @__PURE__ */ import_react4.default.createElement("div", {
    className: `max-w-xl mx-auto px-6 ${padding === "big" ? "py-20" : "py-12"}`
  }, /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "flex flex-col items-center"
  }, /* @__PURE__ */ import_react4.default.createElement(ne, {
    propName: "icon",
    alt: "Icon",
    maxWidth: 80,
    aspectRatio: 1,
    imageClassName: "w-20 mb-5"
  }), /* @__PURE__ */ import_react4.default.createElement(N, {
    renderBlock: (props) => /* @__PURE__ */ import_react4.default.createElement("h1", {
      className: "text-3xl sm:text-4xl text-center font-black text-gray-900 dark:text-white leading-tight mb-3"
    }, props.children),
    renderPlaceholder: (props) => /* @__PURE__ */ import_react4.default.createElement("span", {
      className: "opacity-30"
    }, props.children),
    placeholder: "Type a title...",
    propName: "title"
  }), /* @__PURE__ */ import_react4.default.createElement(Z, {
    renderBlock: (props) => /* @__PURE__ */ import_react4.default.createElement("p", {
      className: "text-xl text-center leading-relaxed text-gray-700 dark:text-gray-100"
    }, props.children),
    placeholder: "Type a text...",
    propName: "text",
    allowedFeatures: [
      E.RichTextFeatures.Bold,
      E.RichTextFeatures.Italic,
      E.RichTextFeatures.Highlight,
      E.RichTextFeatures.Code,
      E.RichTextFeatures.Link
    ],
    renderCode: (props) => /* @__PURE__ */ import_react4.default.createElement("code", {
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
      type: E.SideEditPropType.Select,
      selectOptions: {
        display: E.OptionsDisplay.Select,
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
var import_react5 = __toESM(require_react());

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
  return /* @__PURE__ */ import_react5.default.createElement("section", {
    style: { backgroundImage: `url(${background.src})` },
    className: `w-full flex items-center px-6 pb-12 antialiased bg-cover  
    
    
    ${fullHeight ? "min-h-screen" : ""}`
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: `mx-auto max-w-7xl `
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "container max-w-lg px-4 py-32 mx-auto text-left md:max-w-none md:text-center"
  }, /* @__PURE__ */ import_react5.default.createElement(N, {
    renderBlock: (props) => /* @__PURE__ */ import_react5.default.createElement("h1", {
      className: `text-5xl font-extrabold leading-10 tracking-tight text-${headlineAlignment} ${bgColor.className} sm:leading-none md:text-6xl lg:text-7xl
            ${color == null ? void 0 : color.className}
            `
    }, props.children),
    placeholder: "Type a title...",
    propName: "title"
  }), /* @__PURE__ */ import_react5.default.createElement(Z, {
    renderBlock: (props) => /* @__PURE__ */ import_react5.default.createElement("p", {
      className: `mx-auto mt-5 ${paragraphColor == null ? void 0 : paragraphColor.className} text-${paragraphAlignment} md:mt-12 md:max-w-lg lg:text-lg`
    }, props.children),
    placeholder: "Type a text...",
    propName: "text",
    allowedFeatures: [
      E.RichTextFeatures.Bold,
      E.RichTextFeatures.Italic,
      E.RichTextFeatures.Highlight,
      E.RichTextFeatures.Code,
      E.RichTextFeatures.Link
    ],
    renderCode: (props) => /* @__PURE__ */ import_react5.default.createElement("code", {
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
      type: E.SideEditPropType.Image
    },
    {
      name: "color",
      label: "Headline Color",
      type: E.SideEditPropType.Select,
      selectOptions: {
        display: E.OptionsDisplay.Color,
        options: Colors
      }
    },
    {
      name: "bgColor",
      label: "Headline Background Color",
      type: E.SideEditPropType.Select,
      selectOptions: {
        display: E.OptionsDisplay.Color,
        options: BgColors
      }
    },
    {
      name: "paragraphColor",
      label: "Paragraph Color",
      type: E.SideEditPropType.Select,
      selectOptions: {
        display: E.OptionsDisplay.Color,
        options: ParagraphColors
      }
    },
    {
      name: "headlineAlignment",
      label: "Headline Alignment",
      type: E.SideEditPropType.Select,
      selectOptions: {
        display: E.OptionsDisplay.Select,
        options: HeadlineAlignment
      }
    },
    {
      name: "paragraphAlignment",
      label: "Paragraph Alignment",
      type: E.SideEditPropType.Select,
      selectOptions: {
        display: E.OptionsDisplay.Select,
        options: ParagraphAlignment
      }
    },
    {
      name: "fullHeight",
      label: "Full Height",
      type: E.SideEditPropType.Boolean
    }
  ]
};
var MdwpHeroUnit_default = MdwpBgHeroUnit;

// app/react-bricks/bricks/index.ts
var bricks = [
  ...le,
  ...J,
  MyHeroUnit_default,
  MdwpHeroUnit_default
];
var bricks_default = bricks;

// app/react-bricks/pageTypes.ts
init_react();
var pageTypes = [
  {
    name: "page",
    pluralName: "pages",
    defaultLocked: false,
    defaultStatus: E.PageStatus.Published,
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
var RemixLink = ({
  href,
  className,
  activeClassName,
  isAdmin,
  children
}) => {
  const location2 = useLocation();
  let anchorClassName = "";
  if (location2.pathname === href) {
    anchorClassName = activeClassName || "";
  } else {
    anchorClassName = className || "";
  }
  return /* @__PURE__ */ React.createElement(Link, {
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
  clickToEditSide: E.ClickToEditSide.BottomRight,
  customFields: [],
  enableAutoSave: true,
  disableSaveIfInvalidProps: false
};
var config_default = config;

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-EBX6DNBN.css";

// app/root.tsx
function links() {
  return [{ rel: "stylesheet", href: tailwind_default }];
}
var meta = () => {
  return { title: "Remix Blog Starter with React Bricks" };
};
function App() {
  const navigate = useNavigate();
  const { appId, apiKey } = useLoaderData();
  const reactBricksConfig = {
    ...config_default,
    appId,
    apiKey,
    navigate: (path) => navigate(path)
  };
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", {
    id: "root"
  }, /* @__PURE__ */ React.createElement(pe, {
    ...reactBricksConfig
  }, /* @__PURE__ */ React.createElement(Outlet, null)), /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(Scripts, null), /* @__PURE__ */ React.createElement(LiveReload, null)));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement("html", null, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("title", null, "Oh no!"), /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(ErrorMessage_default, {
    error
  }), /* @__PURE__ */ React.createElement(Scripts, null)));
}
export {
  ErrorBoundary,
  App as default,
  links,
  meta
};
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */
//# sourceMappingURL=/build/root-BTD6K4RH.js.map
