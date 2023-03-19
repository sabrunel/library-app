/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/library_cover.png */ "./src/assets/images/library_cover.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, ::before, ::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\nbody {\n    font-family: 'Cormorant Garamond', 'serif';\n    background-color: rgba(255, 255, 255, 1);\n    height: 100vh;\n    overflow: auto;\n}\n\nheader,\nmain {\n    margin: 0 auto;\n    max-width: 60rem;\n    padding: 1.5rem 1rem;\n}\n\nheader {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n    height: clamp(8rem, 20vh, 12rem);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 2rem;\n}\n\nmain {\n    position: relative; /* Required for modal positioning */\n}\n\nfooter {\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n    background-image: linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));\n    padding: 2.5rem 0;\n    text-align: center;\n}\n\nh1 {\n    font-size: clamp(2em, 4vh, 4em);\n    font-weight: 700;\n    color: #FFF;\n    text-align: center;\n}\n\nh2 {\n    font-family: 'Oswald', 'sans-serif';\n    font-size: 1.25em;\n}\n\nlabel {\n    font-size: 1.1em;\n}\n\nbutton,\ninput[type=\"submit\"],\ninput[type=\"text\"],\ninput[type=\"number\"] {\n    font-family: inherit;\n    line-height: 1;\n}\n\ninput[type=\"text\"],\ninput[type=\"number\"] {\n    background-color: transparent;\n    border: none;\n    border-bottom: 1px solid black;\n    font-size: 1em;\n}\n\nbutton,\ninput[type=\"submit\"] {\n    cursor: pointer;\n    background-color: transparent;\n    outline: 0;\n    border: 0;\n    font-size: 1.1em;\n}\n\n#add-btn,\ninput[type=\"submit\"] {\n    border: 1px solid black;\n    border-radius: 25px;\n    background-color: black;\n    color: #FFF;\n    font-size: 1.2em;\n    font-size: 1.2em;\n    font-weight: 600;\n    padding: 13px 20px;\n}\n\n.icon {\n    height: 1.1rem;\n    width: auto;\n    cursor: pointer;\n}\n\n#return {\n    padding: 1.5rem 0;\n}\n\n.search-bar {\n    display: flex;\n    gap: 0.5rem;\n    justify-content: space-between;\n    background-color: rgba(255, 255, 255, 0.7);\n    border-radius: 25px;\n    padding: 0.25rem 0.5rem;\n}\n\n.search-bar .icon {\n    height: 1.5rem;\n}\n\n#book-filter {\n    border: none;\n}\n\n#book-filter::placeholder {\n    opacity: 0.95;\n}\n\n.options {\n    display: flex;\n    gap: 0.8rem;\n    justify-content: center;\n    align-items: center;\n    padding: 1rem 0;\n}\n\n.book-category.active {\n    border-bottom: solid 1px black;\n    font-weight: 600;\n}\n\n.add-book-form {\n    display: grid;\n    gap: 0.5rem;\n}\n\n.form-group {\n    display: grid;\n    gap: 0.2rem;\n}\n\n.form-group,\n.form-group:last-child {\n    padding-top: 1.5rem;\n}\n\n.form-group:nth-child(4) {\n    display: inline-block;\n}\n\n.book-list {\n    display:grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 1rem;\n}\n\n.book-card {\n    background-color: rgb(240, 240, 240);\n    border-radius: 25px;\n    min-height: 200px;\n    padding: 1.5rem 1rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n.book-card__content {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    \n}\n\n.book-card__options {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    gap: 0.5rem;\n}\n\n.status-checkbox {\n    display: inline-block;\n}\n\n.modal {\n    position: absolute;\n    /* left: calc(50% - 15rem); */\n    left: 0;\n    z-index: 100;\n    width: 100%;\n    padding: 2rem;\n    background-color: #FFF;\n    border-radius: 25px;\n    display: none;\n}\n  \n.modal.visible {\n    display: block;\n    animation: fade-slide-in 0.3s ease-out forwards;\n}\n\n#backdrop {\n    position: fixed;\n    width: 100%;\n    height: 100vh;\n    top: 0;\n    left: 0;\n    background: rgba(0, 0, 0, 0.50);\n    z-index: 10;\n    pointer-events: none;\n    display: none;\n}\n  \n#backdrop.visible {\n    display: block;\n    pointer-events: all;\n}\n\n@media (min-width: 734px) {\n\n    footer {\n        position: sticky;\n        padding: 5rem 0;\n    }\n\n    .modal {\n        left: calc(50% - 15rem);\n        width: 30rem;\n    }\n\n    .book-list {\n        grid-template-columns: repeat(3, 1fr);\n    }\n}", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,0CAA0C;IAC1C,wCAAwC;IACxC,aAAa;IACb,cAAc;AAClB;;AAEA;;IAEI,cAAc;IACd,gBAAgB;IAChB,oBAAoB;AACxB;;AAEA;IACI,yDAA2D;IAC3D,sBAAsB;IACtB,gCAAgC;IAChC,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,kBAAkB,EAAE,mCAAmC;AAC3D;;AAEA;IACI,eAAe;IACf,SAAS;IACT,WAAW;IACX,yFAAyF;IACzF,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,+BAA+B;IAC/B,gBAAgB;IAChB,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,mCAAmC;IACnC,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;;;;IAII,oBAAoB;IACpB,cAAc;AAClB;;AAEA;;IAEI,6BAA6B;IAC7B,YAAY;IACZ,8BAA8B;IAC9B,cAAc;AAClB;;AAEA;;IAEI,eAAe;IACf,6BAA6B;IAC7B,UAAU;IACV,SAAS;IACT,gBAAgB;AACpB;;AAEA;;IAEI,uBAAuB;IACvB,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,gBAAgB;IAChB,gBAAgB;IAChB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,8BAA8B;IAC9B,0CAA0C;IAC1C,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,8BAA8B;IAC9B,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,WAAW;AACf;;AAEA;IACI,aAAa;IACb,WAAW;AACf;;AAEA;;IAEI,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,qCAAqC;IACrC,SAAS;AACb;;AAEA;IACI,oCAAoC;IACpC,mBAAmB;IACnB,iBAAiB;IACjB,oBAAoB;IACpB,aAAa;IACb,sBAAsB;IACtB,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;;AAEf;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,6BAA6B;IAC7B,OAAO;IACP,YAAY;IACZ,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,+CAA+C;AACnD;;AAEA;IACI,eAAe;IACf,WAAW;IACX,aAAa;IACb,MAAM;IACN,OAAO;IACP,+BAA+B;IAC/B,WAAW;IACX,oBAAoB;IACpB,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,mBAAmB;AACvB;;AAEA;;IAEI;QACI,gBAAgB;QAChB,eAAe;IACnB;;IAEA;QACI,uBAAuB;QACvB,YAAY;IAChB;;IAEA;QACI,qCAAqC;IACzC;AACJ","sourcesContent":["*, ::before, ::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\nbody {\n    font-family: 'Cormorant Garamond', 'serif';\n    background-color: rgba(255, 255, 255, 1);\n    height: 100vh;\n    overflow: auto;\n}\n\nheader,\nmain {\n    margin: 0 auto;\n    max-width: 60rem;\n    padding: 1.5rem 1rem;\n}\n\nheader {\n    background-image: url(\"../assets/images/library_cover.png\");\n    background-size: cover;\n    height: clamp(8rem, 20vh, 12rem);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 2rem;\n}\n\nmain {\n    position: relative; /* Required for modal positioning */\n}\n\nfooter {\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n    background-image: linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));\n    padding: 2.5rem 0;\n    text-align: center;\n}\n\nh1 {\n    font-size: clamp(2em, 4vh, 4em);\n    font-weight: 700;\n    color: #FFF;\n    text-align: center;\n}\n\nh2 {\n    font-family: 'Oswald', 'sans-serif';\n    font-size: 1.25em;\n}\n\nlabel {\n    font-size: 1.1em;\n}\n\nbutton,\ninput[type=\"submit\"],\ninput[type=\"text\"],\ninput[type=\"number\"] {\n    font-family: inherit;\n    line-height: 1;\n}\n\ninput[type=\"text\"],\ninput[type=\"number\"] {\n    background-color: transparent;\n    border: none;\n    border-bottom: 1px solid black;\n    font-size: 1em;\n}\n\nbutton,\ninput[type=\"submit\"] {\n    cursor: pointer;\n    background-color: transparent;\n    outline: 0;\n    border: 0;\n    font-size: 1.1em;\n}\n\n#add-btn,\ninput[type=\"submit\"] {\n    border: 1px solid black;\n    border-radius: 25px;\n    background-color: black;\n    color: #FFF;\n    font-size: 1.2em;\n    font-size: 1.2em;\n    font-weight: 600;\n    padding: 13px 20px;\n}\n\n.icon {\n    height: 1.1rem;\n    width: auto;\n    cursor: pointer;\n}\n\n#return {\n    padding: 1.5rem 0;\n}\n\n.search-bar {\n    display: flex;\n    gap: 0.5rem;\n    justify-content: space-between;\n    background-color: rgba(255, 255, 255, 0.7);\n    border-radius: 25px;\n    padding: 0.25rem 0.5rem;\n}\n\n.search-bar .icon {\n    height: 1.5rem;\n}\n\n#book-filter {\n    border: none;\n}\n\n#book-filter::placeholder {\n    opacity: 0.95;\n}\n\n.options {\n    display: flex;\n    gap: 0.8rem;\n    justify-content: center;\n    align-items: center;\n    padding: 1rem 0;\n}\n\n.book-category.active {\n    border-bottom: solid 1px black;\n    font-weight: 600;\n}\n\n.add-book-form {\n    display: grid;\n    gap: 0.5rem;\n}\n\n.form-group {\n    display: grid;\n    gap: 0.2rem;\n}\n\n.form-group,\n.form-group:last-child {\n    padding-top: 1.5rem;\n}\n\n.form-group:nth-child(4) {\n    display: inline-block;\n}\n\n.book-list {\n    display:grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 1rem;\n}\n\n.book-card {\n    background-color: rgb(240, 240, 240);\n    border-radius: 25px;\n    min-height: 200px;\n    padding: 1.5rem 1rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n.book-card__content {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    \n}\n\n.book-card__options {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    gap: 0.5rem;\n}\n\n.status-checkbox {\n    display: inline-block;\n}\n\n.modal {\n    position: absolute;\n    /* left: calc(50% - 15rem); */\n    left: 0;\n    z-index: 100;\n    width: 100%;\n    padding: 2rem;\n    background-color: #FFF;\n    border-radius: 25px;\n    display: none;\n}\n  \n.modal.visible {\n    display: block;\n    animation: fade-slide-in 0.3s ease-out forwards;\n}\n\n#backdrop {\n    position: fixed;\n    width: 100%;\n    height: 100vh;\n    top: 0;\n    left: 0;\n    background: rgba(0, 0, 0, 0.50);\n    z-index: 10;\n    pointer-events: none;\n    display: none;\n}\n  \n#backdrop.visible {\n    display: block;\n    pointer-events: all;\n}\n\n@media (min-width: 734px) {\n\n    footer {\n        position: sticky;\n        padding: 5rem 0;\n    }\n\n    .modal {\n        left: calc(50% - 15rem);\n        width: 30rem;\n    }\n\n    .book-list {\n        grid-template-columns: repeat(3, 1fr);\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/modules/Book.js":
/*!********************************!*\
  !*** ./src/js/modules/Book.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Book": () => (/* binding */ Book)
/* harmony export */ });
/* harmony import */ var _assets_icons_delete_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/icons/delete.svg */ "./src/assets/icons/delete.svg");


class Book {
    constructor(title, author, year, read) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.read = read;
        }

    render() {
        const bookCard = document.createElement('li');
        bookCard.className = 'book-card';
        bookCard.innerHTML = `
            <div class="book-card__content">
                <h2>${this.title}</h2>
                <h3>${this.author}</h3>
                <p>Year: ${this.year}</p>
            </div>
            <div class="book-card__options">
                <div class="status-checkbox">
                <label for="read-status">${
                    this.read ? "Read" : "Not yet read"
                }</label>
                    <input type="checkbox" name="read-status" class="read-status" ${
                        this.read ? "checked" : ""
                    }>
                </div>
                <img src="${_assets_icons_delete_svg__WEBPACK_IMPORTED_MODULE_0__}" class="icon delete-book" alt="Delete book">
            </div>
        `;
    return bookCard;
    }
}

/***/ }),

/***/ "./src/js/modules/BookList.js":
/*!************************************!*\
  !*** ./src/js/modules/BookList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookList": () => (/* binding */ BookList)
/* harmony export */ });
/* harmony import */ var _Book_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Book.js */ "./src/js/modules/Book.js");


class BookList {
    constructor() {
        this.books = [
            new _Book_js__WEBPACK_IMPORTED_MODULE_0__.Book("Hitchhiker's Guide to the Galaxy", "Douglas Adams", "1979", true),
            new _Book_js__WEBPACK_IMPORTED_MODULE_0__.Book("The Hobbit", "J.R.R. Tolkien", "1937", false),
            new _Book_js__WEBPACK_IMPORTED_MODULE_0__.Book("1984", "George Orwell", "1949", true)
        ];
        this.filteredBooks = this.books;
    }

    addBook(book) {
        this.books.push(book);

    }

    deleteBook(bookIndex) {
        this.books.splice(bookIndex, 1);
    }

    updateReadStatus(bookIndex) {
        for (const book of this.books) {
            if (this.books.indexOf(book) === bookIndex) {
                book.read = !book.read;
                // console.log(book.read);
                break;
            }
        } 
    }

    filterBookCategory(category="") {
        this.filteredBooks = this.books;

        if (category === "read") {
            this.filteredBooks = this.books.filter(book => book.read);
        } else if (category === "not read") {
            this.filteredBooks = this.books.filter(book => !book.read);
        }
    }
        
    render(userInput="") {
        const bookList = document.createElement('ul');
        bookList.className = 'book-list';

        // Sample the book list based on the search term
        const searchedBooks = !userInput
        ? this.filteredBooks
        : this.filteredBooks.filter(book => book.title.toLowerCase().includes(userInput) || book.author.toLowerCase().includes(userInput));

        // Render the filtered list
        searchedBooks.forEach(book => {
            const bookCard = book.render();
            bookList.appendChild(bookCard);
        })
        return bookList;
      }
}

/***/ }),

/***/ "./src/js/modules/Library.js":
/*!***********************************!*\
  !*** ./src/js/modules/Library.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Library": () => (/* binding */ Library)
/* harmony export */ });
/* harmony import */ var _BookList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BookList.js */ "./src/js/modules/BookList.js");
/* harmony import */ var _Book_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Book.js */ "./src/js/modules/Book.js");



class Library {
    constructor() {
        this.bookList = new _BookList_js__WEBPACK_IMPORTED_MODULE_0__.BookList();
        this.enableAppOptions();
    }

    filterBooksHandler(category) {
        const allBooksBtn = document.getElementById('all-btn');
        const readBooksBtn = document.getElementById('read-btn');
        const notReadBooksBtn = document.getElementById('not-read-btn');

        if (category === "read") {
            this.bookList.filterBookCategory("read");
            readBooksBtn.classList.add("active");
            notReadBooksBtn.classList.remove("active");
            allBooksBtn.classList.remove("active");
        } else if (category === "not read") {
            this.bookList.filterBookCategory("not read");
            readBooksBtn.classList.remove("active");
            notReadBooksBtn.classList.add("active");
            allBooksBtn.classList.remove("active");
        } else {
            this.bookList.filterBookCategory();
            readBooksBtn.classList.remove("active");
            notReadBooksBtn.classList.remove("active");
            allBooksBtn.classList.add("active");
        }
        this.render();
    }

    searchBooksHandler() {
        const searchTerm = document.getElementById("book-filter").value.toLowerCase();
        this.render(searchTerm);
    }

    changeReadStatusHandler(element) {
        if (element.hasAttribute("checked")) {
            element.removeAttribute("checked");
            // Do something in the UI when not read
            element.previousElementSibling.textContent = "Not yet read";
        } else {
            element.setAttribute("checked", "");
            // Do something in the UI when read
            element.previousElementSibling.textContent = "Read";
        }
    } 

    returnHandler() {
        this.showAddBookModalHandler();
        this.clearUserInputs();
    }

    deleteBookHandler(element) {
        element.parentElement.parentElement.remove();
    }   

    addBookHandler() {
        event.preventDefault();
        const inputTitle = document.getElementById("book-title").value;
        const inputAuthor = document.getElementById("book-author").value;
        const inputYear = document.getElementById("year").value;
        const inputReadStatus = document.getElementById("read-status").checked; // True or False

        const book = new _Book_js__WEBPACK_IMPORTED_MODULE_1__.Book(inputTitle, inputAuthor, inputYear, inputReadStatus);
        
        this.bookList.addBook(book);
        
        this.showAddBookModalHandler();
        this.clearUserInputs();
        this.render();
    }

    showAddBookModalHandler() {
        const addBookModal = document.getElementById("add-edit-book");
        const backdrop = document.getElementById("backdrop");
        addBookModal.classList.toggle("visible");
        backdrop.classList.toggle("visible");
    }

    clearUserInputs() {
        const userInputFields = document.querySelectorAll("input[type=text], input[type=number]");
        userInputFields.forEach( e => e.value = '');

        const inputReadStatus = document.getElementById("read-status");
        inputReadStatus.removeAttribute("checked"); // Doesn't seem to do anything
    }

    enableAppOptions() {
        const searchBtn = document.getElementById('search-btn');
        const allBooksBtn = document.getElementById('all-btn');
        const readBooksBtn = document.getElementById('read-btn');
        const notReadBooksBtn = document.getElementById('not-read-btn');
        const addBookBtn = document.getElementById("add-btn");
        const returnBtn = document.getElementById('return');
        const confirmAddBookBtn = document.getElementById('add-book');

        searchBtn.addEventListener("click", this.searchBooksHandler.bind(this));
        allBooksBtn.addEventListener("click", this.filterBooksHandler.bind(this));
        readBooksBtn.addEventListener("click", this.filterBooksHandler.bind(this, "read"));
        notReadBooksBtn.addEventListener("click", this.filterBooksHandler.bind(this, "not read"));
        addBookBtn.addEventListener("click", this.showAddBookModalHandler);
        returnBtn.addEventListener("click", this.returnHandler.bind(this));
        confirmAddBookBtn.addEventListener("click", this.addBookHandler.bind(this));
    }

    enableBookCardOptions() {
        const bookListElement = document.querySelector("ul");
        const booksArray = Array.prototype.slice.call(bookListElement.children); // converts HTML collection to array
        bookListElement.addEventListener("click", (e) => {
            const bookIndex = booksArray.indexOf(e.target.closest("li")); // gets the index of the parent list item

            // Edit read status
            if (e.target.classList.contains('read-status')) {
                this.changeReadStatusHandler(e.target);
                this.bookList.updateReadStatus(bookIndex);

            // Delete book
                    } else if (e.target.classList.contains('delete-book')) {
                        this.deleteBookHandler(e.target);
                        this.bookList.deleteBook(bookIndex);
                    }
        })
    }
  
    render(userInput) {
        const renderHook = document.getElementById('library-app');
        
        // Clear existing books
        while (renderHook.firstChild) {
            renderHook.removeChild(renderHook.lastChild);
        }

        const bookListElements = this.bookList.render(userInput);
        renderHook.appendChild(bookListElements);

        // Set the click event listener for each newly added book
        this.enableBookCardOptions(); 
    }
}

/***/ }),

/***/ "./src/assets/icons/delete.svg":
/*!*************************************!*\
  !*** ./src/assets/icons/delete.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "delete.svg";

/***/ }),

/***/ "./src/assets/images/library_cover.png":
/*!*********************************************!*\
  !*** ./src/assets/images/library_cover.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "library_cover.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_Library_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Library.js */ "./src/js/modules/Library.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");



class App {
    static init() {
        const libraryApp = new _modules_Library_js__WEBPACK_IMPORTED_MODULE_0__.Library();
        libraryApp.render();
        libraryApp.clearUserInputs();
    }
}
  
App.init();
})();

/******/ })()
;
//# sourceMappingURL=main-b9a1a23dbdd5c4e71b91.js.map