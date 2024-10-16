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
})({"farZc":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
declare var HMR_USE_SSE: boolean;
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
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
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
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
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
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
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
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
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
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
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
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lqZg":[function(require,module,exports) {
var _indexJs = require("./js/index.js");
document.addEventListener("DOMContentLoaded", ()=>{
    (0, _indexJs.tabs).run();
    (0, _indexJs.accordion).run();
    (0, _indexJs.readMore).run();
});

},{"./js/index.js":"ebWYT"}],"ebWYT":[function(require,module,exports) {
/**
 * Main entry point for utility modules.
 * This file exports various utility modules for different functionalities.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "accordion", ()=>(0, _accordionJsDefault.default));
parcelHelpers.export(exports, "cookie", ()=>(0, _cookieJsDefault.default));
parcelHelpers.export(exports, "tabs", ()=>(0, _tabsJsDefault.default));
parcelHelpers.export(exports, "readMore", ()=>(0, _readMoreJsDefault.default));
parcelHelpers.export(exports, "devices", ()=>(0, _devicesJsDefault.default));
var _accordionJs = require("./accordion.js");
var _accordionJsDefault = parcelHelpers.interopDefault(_accordionJs);
var _cookieJs = require("./cookie.js");
var _cookieJsDefault = parcelHelpers.interopDefault(_cookieJs);
var _tabsJs = require("./tabs.js");
var _tabsJsDefault = parcelHelpers.interopDefault(_tabsJs);
var _readMoreJs = require("./readMore.js");
var _readMoreJsDefault = parcelHelpers.interopDefault(_readMoreJs);
var _devicesJs = require("./devices.js");
var _devicesJsDefault = parcelHelpers.interopDefault(_devicesJs);

},{"./accordion.js":"7H7LO","./cookie.js":"4b24M","./tabs.js":"a5Ffj","./readMore.js":"3FVrj","./devices.js":"eHABH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7H7LO":[function(require,module,exports) {
/**
 * Simple accordion functionality
 *
 * @function run - Initializes the accordion
 *
 * @example
 * // Initialize the accordion
 * accordion.run();
 *
 * // HTML structure with data-attributes
 * <div class="accordion" data-accordion="single" data-accordion-active-class='active'>
 *   <div class="accordion__item" data-accordion-item>
 *     <h2 class="accordion__item-title">Title</h2>
 *     <div class="accordion__item-content">Content</div>
 *   </div>
 * </div>
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function() {
    /**
   * Initializes all accordions found in the document
   */ const init = ()=>{
        const accordions = document.querySelectorAll("[data-accordion]");
        accordions.forEach((accordion)=>{
            setupAccordionItems(accordion);
        });
    };
    /**
   * Sets up event listeners for each accordion item
   *
   * @param {HTMLElement} accordion - The accordion container element
   */ const setupAccordionItems = (accordion)=>{
        const items = accordion.querySelectorAll("[data-accordion-item]");
        resetState(accordion);
        items.forEach((item)=>{
            item.addEventListener("click", (event)=>handleItemClick(event, accordion));
        });
    };
    /**
   * Handles the click event for an accordion item
   *
   * @param {Event} event - The click event
   * @param {HTMLElement} accordion - The accordion container element
   */ const handleItemClick = (event, accordion)=>{
        const item = event.currentTarget;
        const itemActiveClass = accordion.dataset.itemActiveClass || "active";
        const mode = accordion.dataset.accordion || "single";
        if (mode === "single" && !item.classList.contains(itemActiveClass)) resetState(accordion, itemActiveClass);
        item.classList.toggle(itemActiveClass);
    };
    /**
   * Resets the state of the accordion by removing the active class from all items
   *
   * @param {HTMLElement} accordion - The accordion container element
   * @param {string} [itemActiveClass='active'] - The active class to be removed (optional)
   */ const resetState = (accordion, itemActiveClass = "active")=>{
        const activeItems = accordion.querySelectorAll(`.${itemActiveClass}[data-accordion-item]`);
        activeItems.forEach((item)=>{
            item.classList.remove(itemActiveClass);
        });
    };
    return {
        run: init
    };
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
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
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"4b24M":[function(require,module,exports) {
/**
 * Utility for managing cookies.
 * This module provides functions to set, get, and remove cookies.
 *
 * @module cookie
 *
 * @example
 * // Set a cookie with a 7-day expiration
 * cookie.set('username', 'JohnDoe', 7);
 *
 * // Get the value of a cookie
 * const username = cookie.get('username');
 *
 * // Remove a cookie
 * cookie.remove('username');
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function() {
    /**
   * Sets a cookie with the specified name, value, and expiration days.
   *
   * @function set
   * @param {string} name - Name of the cookie.
   * @param {string} value - Value of the cookie.
   * @param {number} days - Expiration time in days.
   */ const setCookie = (name, value, days)=>{
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + days * 86400000);
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = `${name}=${value || ""}${expires}; path=/`;
    };
    /**
   * Gets the value of a cookie by its name.
   *
   * @function get
   * @param {string} name - Name of the cookie.
   * @returns {string|null} - The value of the cookie or null if not found.
   */ const getCookie = (name)=>{
        const nameEQ = `${name}=`;
        const cookies = document.cookie.split(";");
        for (let cookieItem of cookies){
            cookieItem = cookieItem.trim();
            if (cookieItem.startsWith(nameEQ)) return cookieItem.substring(nameEQ.length);
        }
        return null;
    };
    /**
   * Removes a cookie by setting its expiration to the past.
   *
   * @function remove
   * @param {string} name - Name of the cookie to remove.
   */ const removeCookie = (name)=>{
        setCookie(name, "", -1);
    };
    return {
        set: setCookie,
        get: getCookie,
        remove: removeCookie
    };
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a5Ffj":[function(require,module,exports) {
/**
 * Utility for tab navigation functionality.
 * This module provides functions to initialize tab navigation and manage tab interactions.
 *
 * @module tabs
 *
 * @example
 * // Initialize the tabs functionality
 * tabs.run();
 *
 * // HTML structure with data-attributes
 * <div class="tabs" data-tabs="openByClass" data-active-button-class="active-button" data-active-content-class="active-content">
 *   <div class="tabs__header">
 *     <span data-tab-button="tab1">Tab 1</span>
 *     <span data-tab-button="tab2">Tab 2</span>
 *     <span data-tab-button="tab3">Tab 3</span>
 *   </div>
 *   <div data-tab-content="tab1">
 *     <h2>Content for Tab 1</h2>
 *     <p>This is the content for Tab 1.</p>
 *   </div>
 *   <div data-tab-content="tab2">
 *     <h2>Content for Tab 2</h2>
 *     <p>This is the content for Tab 2.</p>
 *   </div>
 *   <div data-tab-content="tab3">
 *     <h2>Content for Tab 3</h2>
 *     <p>This is the content for Tab 3.</p>
 *   </div>
 * </div>
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function() {
    /**
   * Initializes all tab containers on the page.
   *
   * @function init
   */ const init = ()=>{
        const tabsContainers = document.querySelectorAll("[data-tabs]");
        tabsContainers.forEach(initializeTabsInstance);
    };
    /**
   * Initializes a specific tab container.
   *
   * @function initializeTabs
   * @param {HTMLElement} container - The tab container element to initialize.
   */ const initializeTabsInstance = (container)=>{
        const buttons = container.querySelectorAll("[data-tab-button]");
        const contents = container.querySelectorAll("[data-tab-content]");
        const activeButtonClass = container.dataset.activeButtonClass || "active";
        const mode = container.dataset.tabs;
        const activeContentClass = mode === "openByClass" ? container.dataset.activeContentClass || "active" : null;
        buttons.forEach((button)=>{
            button.addEventListener("click", ()=>{
                activateTab(button, contents, activeButtonClass, activeContentClass, mode);
            });
        });
        if (buttons.length > 0) buttons[0].click();
    };
    /**
   * Activates the selected tab and shows its content.
   *
   * @function activateTab
   * @param {HTMLElement} button - The clicked tab button.
   * @param {NodeList} contents - All tab content elements.
   * @param {string} activeButtonClass - The class to apply to the active button.
   * @param {string} activeContentClass - The class to apply to the active content.
   * @param {string} mode - The mode of tab functionality (e.g., "openByClass" or "openAuto").
   */ const activateTab = (button, contents, activeButtonClass, activeContentClass, mode)=>{
        const targetContentValue = button.dataset.tabButton;
        button.parentElement.querySelectorAll("[data-tab-button]").forEach((btn)=>{
            btn.classList.remove(activeButtonClass);
        });
        contents.forEach((content)=>{
            if (activeContentClass && mode === "openByClass") content.classList.remove(activeContentClass);
            else content.style.display = "none";
        });
        button.classList.add(activeButtonClass);
        const activeContent = [
            ...contents
        ].find((content)=>content.dataset.tabContent === targetContentValue);
        if (activeContent) {
            if (mode === "openByClass") activeContent.classList.add(activeContentClass);
            else activeContent.style.display = "block";
        }
    };
    return {
        run: init
    };
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3FVrj":[function(require,module,exports) {
/**
 * Utility for "Read More" toggle functionality
 *
 * @function run - Initializes the readMore.
 *
 * @example
 * // Initialize the "Read More" functionality
 * readMore.run();
 *
 * // HTML structure with data-attributes
 * <div class="read-more-block" data-read-more data-read-more-active-class="active">
 *   <div>Content to show/hide</div>
 *   <button data-read-more-toggler data-more-text="Read More" data-less-text="Read Less">Read More</button>
 * </div>
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function() {
    /**
   * Initializes all "Read More" blocks on the page.
   */ const init = ()=>{
        const readMoreBlocks = document.querySelectorAll("[data-read-more]");
        readMoreBlocks.forEach(initializeBlock);
    };
    /**
   * Initializes a specific "Read More" block.
   *
   * @param {HTMLElement} block - The block to initialize
   */ const initializeBlock = (block)=>{
        const toggler = block.querySelector("[data-read-more-toggler]");
        if (toggler) {
            toggler.innerHTML = toggler.dataset.moreText || "Read More";
            toggler.addEventListener("click", ()=>toggleContent(block, toggler));
        }
    };
    /**
   * Toggles the content of the "Read More" block and updates the button text.
   *
   * @param {HTMLElement} block - The block containing the content
   * @param {HTMLElement} toggler - The button that toggles the content
   */ const toggleContent = (block, toggler)=>{
        const activeClass = block.dataset.readMoreActiveClass || "active";
        block.classList.toggle(activeClass);
        toggler.innerHTML = block.classList.contains(activeClass) ? toggler.dataset.lessText || "Read Less" : toggler.dataset.moreText || "Read More";
    };
    return {
        run: init
    };
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eHABH":[function(require,module,exports) {
/**
 * Small helper for detecting device type and orientation
 * @type {{smallMobile, smallMobileLandscape, smallMobilePortrait, mobile, mobileLandscape, mobilePortrait, tablet, tabletLandscape, tabletPortrait, desktop}}
 * @return {Boolean}
 *
 * @example
 * if (devices.mobile()) {
 *  doSomethingOnMobileOnly();
 * }
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function() {
    let smallMobileLandscape = "(max-height: 320px) and (orientation: landscape)";
    let smallMobilePortrait = "(max-width: 320px) and (orientation: portrait)";
    let smallMobile = "(max-width: 320px)";
    let mobileLandscape = "(max-height: 767px) and (orientation: landscape)";
    let mobilePortrait = "(max-width: 767px) and (orientation: portrait)";
    let mobile = "(max-width: 767px)";
    let tabletLandscape = "(min-width: 768px) and (max-width: 1024px) and (orientation: landscape)";
    let tabletPortrait = "(min-width: 768px) and (max-width: 1024px) and (orientation: portrait)";
    let tablet = "(min-width: 768px) and (max-width: 1024px)";
    let desktop = "(min-width: 1025px)";
    return {
        smallMobile: function() {
            return window.matchMedia(smallMobile).matches;
        },
        smallMobileLandscape: function() {
            return window.matchMedia(smallMobileLandscape).matches;
        },
        smallMobilePortrait: function() {
            return window.matchMedia(smallMobilePortrait).matches;
        },
        mobile: function() {
            return window.matchMedia(mobile).matches;
        },
        mobileLandscape: function() {
            return window.matchMedia(mobileLandscape).matches;
        },
        mobilePortrait: function() {
            return window.matchMedia(mobilePortrait).matches;
        },
        tablet: function() {
            return window.matchMedia(tablet).matches;
        },
        tabletLandscape: function() {
            return window.matchMedia(tabletLandscape).matches;
        },
        tabletPortrait: function() {
            return window.matchMedia(tabletPortrait).matches;
        },
        desktop: function() {
            return window.matchMedia(desktop).matches;
        }
    };
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["farZc","8lqZg"], "8lqZg", "parcelRequire5717")

//# sourceMappingURL=index.975ef6c8.js.map
