// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"iJYvl":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"h7u1C":[function(require,module,exports) {
var _router = require("./router");
var _header = require("./components/header");
var _footer = require("./components/footer");
var _text = require("./components/text");
(function() {
    (0, _header.initHeader)();
    (0, _footer.initFooter)();
    (0, _text.initTextComp)();
    const root = document.querySelector(".root");
    (0, _router.initRouter)(root);
})();

},{"./router":"4QFWt","./components/header":"6hCU4","./components/footer":"aoxsu","./components/text":"6Xncd"}],"4QFWt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter);
var _welcome = require("./pages/welcome");
var _step1 = require("./pages/step-1");
var _thankyou = require("./pages/thankyou");
var _textField = require("./components/text-field");
const routes = [
    {
        path: /\/a/,
        component: (0, _welcome.initWelcome)
    },
    {
        path: /\/b/,
        component: (0, _step1.initStep1)
    },
    {
        path: /\/c/,
        component: (0, _thankyou.initThankyou)
    }
];
function initRouter(container) {
    function goTo(path) {
        history.pushState({}, "", path);
        handleRoute(path);
    }
    function handleRoute(route) {
        for (const r of routes)if (r.path.test(route)) {
            const el = r.component({
                goTo: goTo
            });
            if (container.firstChild) container.firstChild.remove();
            container.appendChild(el);
        }
    }
    if (location.pathname == "/") goTo("/a");
    else handleRoute(location.pathname);
    window.onpopstate = function() {
        handleRoute(location.pathname);
    };
    (0, _textField.initTextField)({
        goTo: goTo
    });
    (0, _textField.initTextFieldB)({
        goTo: goTo
    });
    (0, _textField.initTextFieldC)({
        goTo: goTo
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./components/text-field":"iDewp","./pages/step-1":"fHRFq","./pages/thankyou":"ay1CF","./pages/welcome":"fNSF3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"iDewp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initTextField", ()=>initTextField);
parcelHelpers.export(exports, "initTextFieldB", ()=>initTextFieldB);
parcelHelpers.export(exports, "initTextFieldC", ()=>initTextFieldC);
function initTextField(params) {
    customElements.define("text-field", class extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            let style = document.createElement("style");
            style.textContent = `
                .form-intro-text {
                    margin: 0;
                    padding: 73px 30px 30px;  
                    font-size: 22px;
                    font-weight: bold;
                }
               
                .form-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 15px;
                    max-width: 600px;
                    padding: 0 30px;
                    font-family: 'Poppins', sans-serif;
                }
                .label {
                    display: block;
                    padding: 0;
                    text-align: left;
                }
                .input {
                    height: 55px;
                    width: 312px;
                    font-size: 18px;
                    border: solid 2px;
                    border-radius: 3px;
                }
                .first-button {
                    background-color: #9CBBE9;
                    height: 55px;
                    width: 312px;
                    border: none;
                    border-radius: 3px;
                    font-size: 18px;
                    margin-bottom: 113px;
                    font-weight: bold;
                }`;
            let shadow = this.attachShadow({
                mode: "open"
            });
            let label = this.getAttribute("label");
            let formContainer = document.createElement("div");
            formContainer.classList.add("form-container");
            formContainer.innerHTML = `
                <p class="form-intro-text">
                Para continuar, por favor ingrese su nombre
                </p>
                <div class="root">
                   <label class="label">
                        <custom-text variant="body">${label}</custom-text>
                   </label>
                   <input class="input" type="text" placeholder="Ingrese su nombre">
                </div>
                `;
            let firstButton = document.createElement("button");
            firstButton.classList.add("first-button");
            firstButton.textContent = "Comenzar";
            formContainer.appendChild(firstButton);
            firstButton.addEventListener("click", ()=>{
                params.goTo("/b");
            });
            shadow.appendChild(style);
            shadow.appendChild(formContainer);
        }
    });
}
function initTextFieldB(params) {
    class FormB extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            let style = document.createElement("style");
            style.textContent = `
            .form-intro-text {
                margin: 0;
                padding: 73px 30px 30px;  
                font-size: 22px;
                font-weight: bold;
            }
           
            .form-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 15px;
                max-width: 600px;
                padding: 0 30px;
                font-family: 'Poppins', sans-serif;
            }
            .label {
                display: block;
            }
            .input {
                height: 55px;
                width: 312px;
                font-size: 18px;
                border: solid 2px;
                border-radius: 3px;
            }
            .first-button {
                background-color: #9CBBE9;
                height: 55px;
                width: 312px;
                border: none;
                border-radius: 3px;
                font-size: 18px;
                margin-bottom: 70px;
                font-weight: bold;
            }
            .second-button {
                background-color: #fff;
                height: 55px;
                width: 312px;
                border: solid 2px;
                border-radius: 3px;
                font-size: 18px;
                margin-bottom: 113px;
                font-weight: bold;
            }
            .select {
                height: 55px;
                width: 312px;
                font-size: 18px
            }`;
            let shadow = this.attachShadow({
                mode: "open"
            });
            let formContainer = document.createElement("div");
            formContainer.classList.add("form-container");
            formContainer.innerHTML = `
            <p class="form-intro-text">
            Para continuar, por favor ingrese su nombre
            </p>
            <div class="root">
               <label class="label">Email</label>
               <input class="input" type="email">
            </div>
            <div class="root">
               <label class="label">Comida favorita</label>
               <input class="input" type="text">
            </div>
            <div class="root">
               <label class="label">Alguna de estas tres opciones</label>
               <select class="select">
                  <option>Piedra</option>
                  <option>Papel</option>
                  <option>Tijera</option>
               </select>
            </div>
            `;
            let firstButton = document.createElement("button");
            firstButton.classList.add("first-button");
            firstButton.textContent = "Continuar";
            let secondButton = document.createElement("button");
            secondButton.classList.add("second-button");
            secondButton.textContent = "Volver";
            formContainer.appendChild(firstButton);
            formContainer.appendChild(secondButton);
            firstButton.addEventListener("click", ()=>{
                params.goTo("/c");
            });
            secondButton.addEventListener("click", ()=>{
                params.goTo("/a");
            });
            shadow.appendChild(style);
            shadow.appendChild(formContainer);
        }
    }
    customElements.define("formulario-el", FormB);
}
function initTextFieldC(params) {
    class FormC extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            let style = document.createElement("style");
            style.textContent = `
            .form-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 15px;
                max-width: 600px;
                padding: 0 30px;
                font-family: 'Poppins', sans-serif;
            }
            .button {
                background-color: #9CBBE9;
                height: 55px;
                width: 312px;
                border: none;
                border-radius: 3px;
                font-size: 18px;
                margin:100px 0 312px;
                font-weight: bold;"
            }
            .title {
                padding: 30px;
                margin: 0;
                font-family: 'Poppins', sans serif;
                font-size: 52px;
                font-weight: bold;
                text-align: center;
            }
            .text {
                margin: 0;
                padding: 0 30px;
                font-size:18px;
                text-align:center;
                font-weight: bold;
                font-family:'Poppins'
            }
            `;
            let shadow = this.attachShadow({
                mode: "open"
            });
            let formContainer = document.createElement("div");
            formContainer.classList.add("form-container");
            formContainer.innerHTML = `
            <h1 class="title">Gracias!</h1>
            <p class="text">Toda la informacion que nos brindaste es muy importante</p>
            `;
            let firstButton = document.createElement("button");
            firstButton.classList.add("button");
            firstButton.textContent = "De nada";
            firstButton.addEventListener("click", ()=>{
                params.goTo("/a");
            });
            formContainer.appendChild(firstButton);
            shadow.appendChild(style);
            shadow.appendChild(formContainer);
        }
    }
    customElements.define("agradecimiento-el", FormC);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fHRFq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initStep1", ()=>initStep1);
function initStep1(params) {
    const div = document.createElement("div");
    div.innerHTML = `
    <header-el></header-el>
    <div style="display:flex; flex-direction:column; align-items:center">
      <h1 style="
      padding: 30px;
      margin: 0;
      font-family: 'Poppins', sans serif;
      font-size: 52px;
      font-weight: bold;
      text-align: center;">Necesitamos algunos datos mas</h1>
      <formulario-el></formulario-el>
      <footer-el style="width:100%"></footer-el>
    </div>
    `;
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ay1CF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initThankyou", ()=>initThankyou);
function initThankyou(params) {
    const div = document.createElement("div");
    div.innerHTML = `
    <header-el></header-el>
    <div style="display:flex; flex-direction:column; align-items:center">
    <agradecimiento-el></agradecimiento-el>  
    <footer-el style="width:100%"></footer-el>
    </div>
    `;
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fNSF3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initWelcome", ()=>initWelcome);
function initWelcome(params) {
    const div = document.createElement("div");
    div.innerHTML = `
    <header-el></header-el>
    <div style="display:flex; flex-direction:column; align-items:center">
      <custom-text variant="title">Te damos la bienvenida a esta pagina</custom-text>
      <custom-text variant="body">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi at illum a in dolorem, 
        neque repudiandae omnis minus nulla laudantium totam commodi repellendus sit? 
        In ipsa impedit voluptatem deleniti culpa?
      </custom-text>
      <text-field label="Nombre"></text-field>
      <footer-el style="width:100%"></footer-el>
    </div>
    `;
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6hCU4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initHeader", ()=>initHeader);
function initHeader() {
    class Header extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            this.innerText = "Header";
            this.style.height = "60px;";
            this.style.backgroundColor = "#FF8282";
            this.style.fontSize = "22px";
            this.style.fontFamily = "'Poppins', sans-serif";
            this.style.display = "flex";
            this.style.justifyContent = "center";
            this.style.alignItems = "center";
        }
    }
    customElements.define("header-el", Header);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aoxsu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initFooter", ()=>initFooter);
function initFooter() {
    class Footer extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            let style = document.createElement("style");
            let shadow = this.attachShadow({
                mode: "open"
            });
            let footer = document.createElement("footer");
            let p = document.createElement("p");
            p.textContent = "Footer";
            footer.style.height = "233px;";
            footer.style.backgroundColor = "#FFA0EA";
            footer.style.fontSize = "22px";
            footer.style.fontWeight = "bold";
            footer.style.fontFamily = "'Poppins', sans-serif";
            p.style.fontFamily = "'Poppins', sans serif;";
            p.style.fontWeight = "bold";
            p.style.textAlign = "center";
            p.style.padding = "100px";
            p.style.margin = "0px";
            footer.appendChild(p);
            shadow.appendChild(footer);
            shadow.appendChild(style);
        }
    }
    customElements.define("footer-el", Footer);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Xncd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initTextComp", ()=>initTextComp);
function initTextComp() {
    class TextComponent extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const variant = this.getAttribute("variant") || "body";
            const shadow = this.attachShadow({
                mode: "open"
            });
            const div = document.createElement("div");
            let style = document.createElement("style");
            style.textContent = `
            .title {
                font-family: 'Poppins', sans serif;
                font-size: 52px;
                font-weight: bold;
                margin: 30px 0 0;
                text-align: center;
            }
            .body {
                font-family: 'Poppins', sans serif;
                font-size: 18px;
                padding: 30px;
                text-align: center;
            }`;
            div.className = variant;
            div.textContent = this.textContent;
            shadow.appendChild(div);
            shadow.appendChild(style);
        }
    }
    customElements.define("custom-text", TextComponent);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["iJYvl","h7u1C"], "h7u1C", "parcelRequire64c4")

//# sourceMappingURL=index.b71e74eb.js.map
