/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Ubuntu-Bold.ttf */ "./src/fonts/Ubuntu-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Quicksand-Bold.ttf */ "./src/fonts/Quicksand-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Quicksand-SemiBold.ttf */ "./src/fonts/Quicksand-SemiBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: Ubuntu;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
  font-family: Quicksand-Bold;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

@font-face {
  font-family: Quicksand-Semibold;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

/* default */
* {
  margin: 0;
  padding: 0;
}

body {
  font-family: Quicksand-Semibold, sans-serif;
  background-color: rgb(242, 242, 237);
}

/* header */

header {
  border-bottom: 1px solid rgba(0, 0, 0, 0.103);
  padding: 20px;
}

h1 {
  font-family: Ubuntu, sans-serif;
  font-size: 48px;
}

/* main */
main {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

/* nav bar */

#project-content {
  padding: 20px;
  width: 18vw;
  height: 100vh;
  border-right: 1px solid rgba(151, 145, 145, 0.263);
}

h2 {
  font-family: Quicksand-Bold, sans-serif;
  font-size: 30px;
}

button {
  cursor: pointer;
  padding: 10px;
  margin-top: 15px;
  width: 100px;
}

.addProjectBtn {
  width: 150px;
}

img {
  width: 25px;
  height: 25px;
}

.project-select {
  cursor: pointer;
}

input {
  height: 35px;
  width: 200px;
}

#btn-input {
  margin-top: 10px;
}

.hide-input,
.hide-btn-active,
.hide-add-task {
  display: none;
}

p {
  text-transform: capitalize;
}

.hide-bin,
.hide-cross {
  opacity: 0;
}

.project-select:hover .hide-bin {
  opacity: 1;
}

.todo-item:hover .hide-cross {
  opacity: 1;
}

#main-content {
  width: 82vw;
}

.add-task-btn {
  margin: 30px;
  font-weight: bold;
  font-size: 16px;
  width: 200px;
  border: none;
  background-color: rgb(242, 242, 237);
}

/* task area */
#display-add-task {
  padding-left: 80px;
  padding-top: 50px;
}

.flex-div {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}

.add-task-input {
  width: 500px;
}

.todo-list {
  margin-top: 50px;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 70px;
  margin-top: 20px;
  margin-right: 150px;
  cursor: pointer;
}

.task-left,
.task-right {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 30px;
}

.cross-bin {
  width: 15px;
  height: 15px;
}

#check-box {
  width: 15px;
}

.list-title {
  margin: 20px 0px -20px 20px;
  text-decoration: underline;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,4CAAiC;AACnC;;AAEA;EACE,2BAA2B;EAC3B,4CAAoC;AACtC;;AAEA;EACE,+BAA+B;EAC/B,4CAAwC;AAC1C;;AAEA,YAAY;AACZ;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,2CAA2C;EAC3C,oCAAoC;AACtC;;AAEA,WAAW;;AAEX;EACE,6CAA6C;EAC7C,aAAa;AACf;;AAEA;EACE,+BAA+B;EAC/B,eAAe;AACjB;;AAEA,SAAS;AACT;EACE,aAAa;EACb,qCAAqC;AACvC;;AAEA,YAAY;;AAEZ;EACE,aAAa;EACb,WAAW;EACX,aAAa;EACb,kDAAkD;AACpD;;AAEA;EACE,uCAAuC;EACvC,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB;;AAEA;;;EAGE,aAAa;AACf;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;;EAEE,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,oCAAoC;AACtC;;AAEA,cAAc;AACd;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,gBAAgB;AAClB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;;EAEE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,2BAA2B;EAC3B,0BAA0B;AAC5B","sourcesContent":["@font-face {\n  font-family: Ubuntu;\n  src: url(./fonts/Ubuntu-Bold.ttf);\n}\n\n@font-face {\n  font-family: Quicksand-Bold;\n  src: url(./fonts/Quicksand-Bold.ttf);\n}\n\n@font-face {\n  font-family: Quicksand-Semibold;\n  src: url(./fonts/Quicksand-SemiBold.ttf);\n}\n\n/* default */\n* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: Quicksand-Semibold, sans-serif;\n  background-color: rgb(242, 242, 237);\n}\n\n/* header */\n\nheader {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.103);\n  padding: 20px;\n}\n\nh1 {\n  font-family: Ubuntu, sans-serif;\n  font-size: 48px;\n}\n\n/* main */\nmain {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n\n/* nav bar */\n\n#project-content {\n  padding: 20px;\n  width: 18vw;\n  height: 100vh;\n  border-right: 1px solid rgba(151, 145, 145, 0.263);\n}\n\nh2 {\n  font-family: Quicksand-Bold, sans-serif;\n  font-size: 30px;\n}\n\nbutton {\n  cursor: pointer;\n  padding: 10px;\n  margin-top: 15px;\n  width: 100px;\n}\n\n.addProjectBtn {\n  width: 150px;\n}\n\nimg {\n  width: 25px;\n  height: 25px;\n}\n\n.project-select {\n  cursor: pointer;\n}\n\ninput {\n  height: 35px;\n  width: 200px;\n}\n\n#btn-input {\n  margin-top: 10px;\n}\n\n.hide-input,\n.hide-btn-active,\n.hide-add-task {\n  display: none;\n}\n\np {\n  text-transform: capitalize;\n}\n\n.hide-bin,\n.hide-cross {\n  opacity: 0;\n}\n\n.project-select:hover .hide-bin {\n  opacity: 1;\n}\n\n.todo-item:hover .hide-cross {\n  opacity: 1;\n}\n\n#main-content {\n  width: 82vw;\n}\n\n.add-task-btn {\n  margin: 30px;\n  font-weight: bold;\n  font-size: 16px;\n  width: 200px;\n  border: none;\n  background-color: rgb(242, 242, 237);\n}\n\n/* task area */\n#display-add-task {\n  padding-left: 80px;\n  padding-top: 50px;\n}\n\n.flex-div {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 15px;\n}\n\n.add-task-input {\n  width: 500px;\n}\n\n.todo-list {\n  margin-top: 50px;\n}\n\n.todo-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-left: 70px;\n  margin-top: 20px;\n  margin-right: 150px;\n  cursor: pointer;\n}\n\n.task-left,\n.task-right {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  gap: 30px;\n}\n\n.cross-bin {\n  width: 15px;\n  height: 15px;\n}\n\n#check-box {\n  width: 15px;\n}\n\n.list-title {\n  margin: 20px 0px -20px 20px;\n  text-decoration: underline;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearProjectDisplay: () => (/* binding */ clearProjectDisplay),
/* harmony export */   renderProjects: () => (/* binding */ renderProjects),
/* harmony export */   renderTodoList: () => (/* binding */ renderTodoList)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/modules/project.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ "./src/modules/storage.js");
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks.js */ "./src/modules/tasks.js");




let currentProjectIndex = 0;

function changeCurrentProjectIndex(index) {
  currentProjectIndex = index;
}

//step5
const addProjectBtn = document.querySelector(".addProjectBtn");
const displayAddProject = document.querySelector("#display-add-project");

addProjectBtn.addEventListener("click", () => showProjectForm());

function showProjectForm() {
  addProjectBtn.classList.add("hide-btn-active");
  displayAddProject.classList.remove("hide-input");
  hideTaskForm();
}

//step6
const projectCancelBtn = document.querySelector(".project-cancel-btn");
projectCancelBtn.addEventListener("click", () => hideProjectForm());
function hideProjectForm() {
  projectInput.value = "";
  displayAddProject.classList.add("hide-input");
  addProjectBtn.classList.remove("hide-btn-active");
}

//Step7
const projectAddBtn = document.querySelector(".project-add-btn");
const projectInput = document.querySelector(".add-project-input");
projectAddBtn.addEventListener("click", () => addProjectForm());
function addProjectForm() {
  if (!projectInput.value) {
    return false;
  }
  _project_js__WEBPACK_IMPORTED_MODULE_0__.addProject(projectInput.value);
  projectInput.value = "";
}

//step8
function clearProjectDisplay() {
  const projectListContainer = document.querySelector("#project-list");
  projectListContainer.textContent = "";
}

//Step9
function renderProjects() {
  clearProjectDisplay();
  const projectListContainer = document.querySelector("#project-list");

  _project_js__WEBPACK_IMPORTED_MODULE_0__.projectList.forEach((project, index) => {
    projectListContainer.innerHTML += `<div class="project-select flex-div" data-project-index="${index}">
        <p class="project-select data-project-index="${index}">${project.title}<p><img src=./images/delete.png alt="delete-bin" class="delete-bin hide-bin">`;
  });

  listenForProjectClick();
}

//Step10
function listenForProjectClick() {
  const projectButtons = document.querySelectorAll(".project-select");
  projectButtons.forEach((button) => {
    button.addEventListener("click", handleProjectClick);
  });
}

//Step11
function handleProjectClick(e) {
  const listTitle = document.querySelector(".list-title");
  listTitle.textContent = e.target.innerText;
  hideProjectForm();
  hideTaskForm();
  showAddTaskBtn();

  const projectIndex = this.getAttribute("data-project-index");

  changeCurrentProjectIndex(projectIndex);
  _tasks_js__WEBPACK_IMPORTED_MODULE_2__.getTaskFromProject(currentProjectIndex);

  renderTodoList(_tasks_js__WEBPACK_IMPORTED_MODULE_2__.taskList);

  if (e.target.classList.contains("delete-bin")) {
    deleteProjectFromDom(projectIndex);
    clearTaskDisplay();
    return;
  }
}

function deleteProjectFromDom(index) {
  _project_js__WEBPACK_IMPORTED_MODULE_0__.spliceProjectList(index);
  changeCurrentProjectIndex(0);
  renderProjects();
}

const addTaskBtn = document.querySelector(".add-task-btn");
const displayAddTask = document.querySelector("#display-add-task");
addTaskBtn.addEventListener("click", showTaskForm);
function showTaskForm() {
  addTaskBtn.classList.add("hide-btn-active");
  displayAddTask.classList.remove("hide-input");

  hideProjectForm();
}

const taskCancelBtn = document.querySelector(".task-cancel-btn");
taskCancelBtn.addEventListener("click", hideTaskForm);
function hideTaskForm() {
  displayAddTask.classList.add("hide-input");
  addTaskBtn.classList.remove("hide-btn-active");
}

const taskAddBtn = document.querySelector(".task-add-btn");
taskAddBtn.addEventListener("click", addTaskForm);
function addTaskForm() {
  hideTaskForm();
  const taskInput = document.querySelector(".add-task-input");
  const priorityScale = document.querySelector(".priority");
  const dateInput = document.querySelector(".task-due-date");
  if (!taskInput.value) {
    return;
  }
  _tasks_js__WEBPACK_IMPORTED_MODULE_2__.getTaskFromProject(currentProjectIndex);
  _tasks_js__WEBPACK_IMPORTED_MODULE_2__.addTask(
    taskInput.value,
    dateInput.value,
    priorityScale.value,
    currentProjectIndex
  );
  taskInput.value = "";
  dateInput.value = "";
  priorityScale.value = "low";
}

function clearTaskDisplay() {
  const todoListContainer = document.querySelector(".todo-list");
  todoListContainer.textContent = "";
}

function renderTodoList(list) {
  clearTaskDisplay();

  const todoListContainer = document.querySelector(".todo-list");
  list.forEach((todo, todoIndex) => {
    todoListContainer.innerHTML += `<div class="todo-item" data-project-index="${todo.projectIndex}" data-task-index="${todoIndex}">
    <div class="task-left">
    <p class="todo-title">• ${todo.title}</p>
    <p class="t-priority">${todo.priority}</p>
    </div>
    <div class="task-right">
    <p class="todo-due-date">${todo.dueDate}</p>
    <img  class="cross-bin hide-cross" data-task-index="${todoIndex}" src="./images/cross.png" alt="cross" />
    </div>
  </div>`;
  });

  handleTodoBtnClicks();
}

function handleTodoBtnClicks() {
  const taskDelete = document.querySelectorAll(".cross-bin");
  taskDelete.forEach((btn) => btn.addEventListener("click", deleteTaskFromDom));
}

function deleteTaskFromDom(e) {
  const projectIndex = e.target.parentNode.parentNode.dataset.projectIndex;
  const taskIndex = e.target.parentNode.parentNode.dataset.taskIndex;

  _storage_js__WEBPACK_IMPORTED_MODULE_1__.deleteTodo(projectIndex, taskIndex);
  let storageProjectList = localStorage.getItem("projectList");
  let storageProjects = JSON.parse(storageProjectList);
  renderTodoList(storageProjects[projectIndex].task);
}

function showAddTaskBtn() {
  const addProjectBtn = document.querySelector(".add-task-btn");
  addProjectBtn.classList.remove("hide-btn-active");
}




/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateProject: () => (/* binding */ CreateProject),
/* harmony export */   addProject: () => (/* binding */ addProject),
/* harmony export */   getLocalStorage: () => (/* binding */ getLocalStorage),
/* harmony export */   projectList: () => (/* binding */ projectList),
/* harmony export */   spliceProjectList: () => (/* binding */ spliceProjectList),
/* harmony export */   updateProjectList: () => (/* binding */ updateProjectList),
/* harmony export */   updateTaskArray: () => (/* binding */ updateTaskArray)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/modules/dom.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ "./src/modules/storage.js");
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks.js */ "./src/modules/tasks.js");




//Step1
let projectList = [];

function getLocalStorage() {
  let localProjects = localStorage.getItem("projectList");
  if (!localProjects) {
    addProject("Study");
    _tasks_js__WEBPACK_IMPORTED_MODULE_2__.addTask("Practice Coding");
  } else {
    projectList = JSON.parse(localProjects);
  }
  return projectList;
}

//Step2
function CreateProject(title) {
  const task = [];
  return {
    title,
    task,
  };
}

//Step3
function addProject(title) {
  const project = CreateProject(title);
  projectList.push(project);
  _storage_js__WEBPACK_IMPORTED_MODULE_1__.saveProjectToLocalStorage();
  _dom_js__WEBPACK_IMPORTED_MODULE_0__.renderProjects();
}

function spliceProjectList(index) {
  if (index > -1) {
    projectList.splice(index, 1);
  }
  _storage_js__WEBPACK_IMPORTED_MODULE_1__.saveProjectToLocalStorage();
}

function updateProjectList(index, list) {
  projectList[index].task = list;
  _storage_js__WEBPACK_IMPORTED_MODULE_1__.saveProjectToLocalStorage();
}

function updateTaskArray(
  projectIndex,
  taskIndex,
  newName,
  newPriority,
  newDate
) {
  projectList[projectIndex].task[taskIndex].title = newName;
  projectList[projectIndex].task[taskIndex].priority = newPriority;
  projectList[projectIndex].task[taskIndex].dueDate = newDate;
  _storage_js__WEBPACK_IMPORTED_MODULE_1__.saveProjectToLocalStorage();
}




/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteTodo: () => (/* binding */ deleteTodo),
/* harmony export */   getLocalStorage: () => (/* binding */ getLocalStorage),
/* harmony export */   saveProjectToLocalStorage: () => (/* binding */ saveProjectToLocalStorage)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/modules/project.js");
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks.js */ "./src/modules/tasks.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ "./src/modules/dom.js");




//Step4
function saveProjectToLocalStorage() {
  const projects = _project_js__WEBPACK_IMPORTED_MODULE_0__.projectList;
  const projectListInJSON = JSON.stringify(projects);
  localStorage.setItem("projectList", projectListInJSON);
}

function deleteTodo(projectIndex, taskIndex) {
  let storageProjectList = localStorage.getItem("projectList");
  let storageProjects = JSON.parse(storageProjectList);

  storageProjects[projectIndex].task.splice(taskIndex, 1);

  const jsonProjectList = storageProjects;
  const jsonProjects = JSON.stringify(jsonProjectList);
  localStorage.setItem("projectList", jsonProjects);

  _tasks_js__WEBPACK_IMPORTED_MODULE_1__.taskList.splice(taskIndex, 1);
}

function getLocalStorage() {
  // retreieve data
  let storageProjectList = localStorage.getItem("projectList");
  let storageProjects = JSON.parse(storageProjectList);
  return storageProjects;
}




/***/ }),

/***/ "./src/modules/tasks.js":
/*!******************************!*\
  !*** ./src/modules/tasks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateTask: () => (/* binding */ CreateTask),
/* harmony export */   addTask: () => (/* binding */ addTask),
/* harmony export */   getTaskFromProject: () => (/* binding */ getTaskFromProject),
/* harmony export */   taskList: () => (/* binding */ taskList)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/modules/dom.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/modules/project.js");



let taskList = [];

function getTaskFromProject(projectIndex) {
  if (_project_js__WEBPACK_IMPORTED_MODULE_1__.projectList[projectIndex]) {
    taskList = _project_js__WEBPACK_IMPORTED_MODULE_1__.projectList[projectIndex].task;
  } else {
    return;
  }
}

function CreateTask(title, dueDate, priorityScale, projectIndex) {
  let priority;
  if (priorityScale === "high") {
    priority = "❗️❗️";
  } else {
    priority = "";
  }
  return {
    title,
    dueDate,
    priority,
    projectIndex,
  };
}

function addTask(name, dueDate, priorityScale, projectIndex) {
  const task = CreateTask(name, dueDate, priorityScale, projectIndex);
  taskList.push(task);
  _project_js__WEBPACK_IMPORTED_MODULE_1__.updateProjectList(projectIndex, taskList);
  console.log(taskList);
  _dom_js__WEBPACK_IMPORTED_MODULE_0__.renderTodoList(taskList);
}




/***/ }),

/***/ "./src/fonts/Quicksand-Bold.ttf":
/*!**************************************!*\
  !*** ./src/fonts/Quicksand-Bold.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bac7ed87f9bcd95a6c55.ttf";

/***/ }),

/***/ "./src/fonts/Quicksand-SemiBold.ttf":
/*!******************************************!*\
  !*** ./src/fonts/Quicksand-SemiBold.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6018f97203d39e0dfc6d.ttf";

/***/ }),

/***/ "./src/fonts/Ubuntu-Bold.ttf":
/*!***********************************!*\
  !*** ./src/fonts/Ubuntu-Bold.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fec2d0f1431a6114a6ce.ttf";

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
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dom.js */ "./src/modules/dom.js");
/* harmony import */ var _modules_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/project.js */ "./src/modules/project.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




_modules_project_js__WEBPACK_IMPORTED_MODULE_1__.getLocalStorage();
_modules_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderProjects();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0F3QztBQUNRO0FBQzNCOztBQUVyQixnRUFBdUI7QUFDdkIsMkRBQWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvZG9tLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy90YXNrcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvVWJ1bnR1LUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9RdWlja3NhbmQtQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1F1aWNrc2FuZC1TZW1pQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBVYnVudHU7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZC1Cb2xkO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQtU2VtaWJvbGQ7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xufVxuXG4vKiBkZWZhdWx0ICovXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZC1TZW1pYm9sZCwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MiwgMjQyLCAyMzcpO1xufVxuXG4vKiBoZWFkZXIgKi9cblxuaGVhZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMDMpO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG5oMSB7XG4gIGZvbnQtZmFtaWx5OiBVYnVudHUsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogNDhweDtcbn1cblxuLyogbWFpbiAqL1xubWFpbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG59XG5cbi8qIG5hdiBiYXIgKi9cblxuI3Byb2plY3QtY29udGVudCB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHdpZHRoOiAxOHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDE1MSwgMTQ1LCAxNDUsIDAuMjYzKTtcbn1cblxuaDIge1xuICBmb250LWZhbWlseTogUXVpY2tzYW5kLUJvbGQsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi5hZGRQcm9qZWN0QnRuIHtcbiAgd2lkdGg6IDE1MHB4O1xufVxuXG5pbWcge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4ucHJvamVjdC1zZWxlY3Qge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmlucHV0IHtcbiAgaGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogMjAwcHg7XG59XG5cbiNidG4taW5wdXQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uaGlkZS1pbnB1dCxcbi5oaWRlLWJ0bi1hY3RpdmUsXG4uaGlkZS1hZGQtdGFzayB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbnAge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmhpZGUtYmluLFxuLmhpZGUtY3Jvc3Mge1xuICBvcGFjaXR5OiAwO1xufVxuXG4ucHJvamVjdC1zZWxlY3Q6aG92ZXIgLmhpZGUtYmluIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnRvZG8taXRlbTpob3ZlciAuaGlkZS1jcm9zcyB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbiNtYWluLWNvbnRlbnQge1xuICB3aWR0aDogODJ2dztcbn1cblxuLmFkZC10YXNrLWJ0biB7XG4gIG1hcmdpbjogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDIsIDI0MiwgMjM3KTtcbn1cblxuLyogdGFzayBhcmVhICovXG4jZGlzcGxheS1hZGQtdGFzayB7XG4gIHBhZGRpbmctbGVmdDogODBweDtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG59XG5cbi5mbGV4LWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLmFkZC10YXNrLWlucHV0IHtcbiAgd2lkdGg6IDUwMHB4O1xufVxuXG4udG9kby1saXN0IHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLnRvZG8taXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDcwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMTUwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhc2stbGVmdCxcbi50YXNrLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMzBweDtcbn1cblxuLmNyb3NzLWJpbiB7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG59XG5cbiNjaGVjay1ib3gge1xuICB3aWR0aDogMTVweDtcbn1cblxuLmxpc3QtdGl0bGUge1xuICBtYXJnaW46IDIwcHggMHB4IC0yMHB4IDIwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLDRDQUFpQztBQUNuQzs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiw0Q0FBb0M7QUFDdEM7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsNENBQXdDO0FBQzFDOztBQUVBLFlBQVk7QUFDWjtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSwyQ0FBMkM7RUFDM0Msb0NBQW9DO0FBQ3RDOztBQUVBLFdBQVc7O0FBRVg7RUFDRSw2Q0FBNkM7RUFDN0MsYUFBYTtBQUNmOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGVBQWU7QUFDakI7O0FBRUEsU0FBUztBQUNUO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztBQUN2Qzs7QUFFQSxZQUFZOztBQUVaO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0RBQWtEO0FBQ3BEOztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7OztFQUdFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTs7RUFFRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtFQUNaLG9DQUFvQztBQUN0Qzs7QUFFQSxjQUFjO0FBQ2Q7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsMEJBQTBCO0FBQzVCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFVidW50dTtcXG4gIHNyYzogdXJsKC4vZm9udHMvVWJ1bnR1LUJvbGQudHRmKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogUXVpY2tzYW5kLUJvbGQ7XFxuICBzcmM6IHVybCguL2ZvbnRzL1F1aWNrc2FuZC1Cb2xkLnR0Zik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZC1TZW1pYm9sZDtcXG4gIHNyYzogdXJsKC4vZm9udHMvUXVpY2tzYW5kLVNlbWlCb2xkLnR0Zik7XFxufVxcblxcbi8qIGRlZmF1bHQgKi9cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZC1TZW1pYm9sZCwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDIsIDI0MiwgMjM3KTtcXG59XFxuXFxuLyogaGVhZGVyICovXFxuXFxuaGVhZGVyIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTAzKTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtZmFtaWx5OiBVYnVudHUsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDQ4cHg7XFxufVxcblxcbi8qIG1haW4gKi9cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbn1cXG5cXG4vKiBuYXYgYmFyICovXFxuXFxuI3Byb2plY3QtY29udGVudCB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgd2lkdGg6IDE4dnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgxNTEsIDE0NSwgMTQ1LCAwLjI2Myk7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQtQm9sZCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4uYWRkUHJvamVjdEJ0biB7XFxuICB3aWR0aDogMTUwcHg7XFxufVxcblxcbmltZyB7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG59XFxuXFxuLnByb2plY3Qtc2VsZWN0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaW5wdXQge1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4jYnRuLWlucHV0IHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5oaWRlLWlucHV0LFxcbi5oaWRlLWJ0bi1hY3RpdmUsXFxuLmhpZGUtYWRkLXRhc2sge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxucCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuXFxuLmhpZGUtYmluLFxcbi5oaWRlLWNyb3NzIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5wcm9qZWN0LXNlbGVjdDpob3ZlciAuaGlkZS1iaW4ge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnRvZG8taXRlbTpob3ZlciAuaGlkZS1jcm9zcyB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4jbWFpbi1jb250ZW50IHtcXG4gIHdpZHRoOiA4MnZ3O1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuIHtcXG4gIG1hcmdpbjogMzBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MiwgMjQyLCAyMzcpO1xcbn1cXG5cXG4vKiB0YXNrIGFyZWEgKi9cXG4jZGlzcGxheS1hZGQtdGFzayB7XFxuICBwYWRkaW5nLWxlZnQ6IDgwcHg7XFxuICBwYWRkaW5nLXRvcDogNTBweDtcXG59XFxuXFxuLmZsZXgtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG5cXG4uYWRkLXRhc2staW5wdXQge1xcbiAgd2lkdGg6IDUwMHB4O1xcbn1cXG5cXG4udG9kby1saXN0IHtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcblxcbi50b2RvLWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogNzBweDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDE1MHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1sZWZ0LFxcbi50YXNrLXJpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDMwcHg7XFxufVxcblxcbi5jcm9zcy1iaW4ge1xcbiAgd2lkdGg6IDE1cHg7XFxuICBoZWlnaHQ6IDE1cHg7XFxufVxcblxcbiNjaGVjay1ib3gge1xcbiAgd2lkdGg6IDE1cHg7XFxufVxcblxcbi5saXN0LXRpdGxlIHtcXG4gIG1hcmdpbjogMjBweCAwcHggLTIwcHggMjBweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAqIGFzIHByb2plY3QgZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuaW1wb3J0ICogYXMgc3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7XG5pbXBvcnQgKiBhcyB0YXNrIGZyb20gXCIuL3Rhc2tzLmpzXCI7XG5cbmxldCBjdXJyZW50UHJvamVjdEluZGV4ID0gMDtcblxuZnVuY3Rpb24gY2hhbmdlQ3VycmVudFByb2plY3RJbmRleChpbmRleCkge1xuICBjdXJyZW50UHJvamVjdEluZGV4ID0gaW5kZXg7XG59XG5cbi8vc3RlcDVcbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFByb2plY3RCdG5cIik7XG5jb25zdCBkaXNwbGF5QWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGlzcGxheS1hZGQtcHJvamVjdFwiKTtcblxuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gc2hvd1Byb2plY3RGb3JtKCkpO1xuXG5mdW5jdGlvbiBzaG93UHJvamVjdEZvcm0oKSB7XG4gIGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcImhpZGUtYnRuLWFjdGl2ZVwiKTtcbiAgZGlzcGxheUFkZFByb2plY3QuY2xhc3NMaXN0LnJlbW92ZShcImhpZGUtaW5wdXRcIik7XG4gIGhpZGVUYXNrRm9ybSgpO1xufVxuXG4vL3N0ZXA2XG5jb25zdCBwcm9qZWN0Q2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWNhbmNlbC1idG5cIik7XG5wcm9qZWN0Q2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBoaWRlUHJvamVjdEZvcm0oKSk7XG5mdW5jdGlvbiBoaWRlUHJvamVjdEZvcm0oKSB7XG4gIHByb2plY3RJbnB1dC52YWx1ZSA9IFwiXCI7XG4gIGRpc3BsYXlBZGRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJoaWRlLWlucHV0XCIpO1xuICBhZGRQcm9qZWN0QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlLWJ0bi1hY3RpdmVcIik7XG59XG5cbi8vU3RlcDdcbmNvbnN0IHByb2plY3RBZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtYWRkLWJ0blwiKTtcbmNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3QtaW5wdXRcIik7XG5wcm9qZWN0QWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBhZGRQcm9qZWN0Rm9ybSgpKTtcbmZ1bmN0aW9uIGFkZFByb2plY3RGb3JtKCkge1xuICBpZiAoIXByb2plY3RJbnB1dC52YWx1ZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBwcm9qZWN0LmFkZFByb2plY3QocHJvamVjdElucHV0LnZhbHVlKTtcbiAgcHJvamVjdElucHV0LnZhbHVlID0gXCJcIjtcbn1cblxuLy9zdGVwOFxuZnVuY3Rpb24gY2xlYXJQcm9qZWN0RGlzcGxheSgpIHtcbiAgY29uc3QgcHJvamVjdExpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbGlzdFwiKTtcbiAgcHJvamVjdExpc3RDb250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xufVxuXG4vL1N0ZXA5XG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0cygpIHtcbiAgY2xlYXJQcm9qZWN0RGlzcGxheSgpO1xuICBjb25zdCBwcm9qZWN0TGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1saXN0XCIpO1xuXG4gIHByb2plY3QucHJvamVjdExpc3QuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICBwcm9qZWN0TGlzdENvbnRhaW5lci5pbm5lckhUTUwgKz0gYDxkaXYgY2xhc3M9XCJwcm9qZWN0LXNlbGVjdCBmbGV4LWRpdlwiIGRhdGEtcHJvamVjdC1pbmRleD1cIiR7aW5kZXh9XCI+XG4gICAgICAgIDxwIGNsYXNzPVwicHJvamVjdC1zZWxlY3QgZGF0YS1wcm9qZWN0LWluZGV4PVwiJHtpbmRleH1cIj4ke3Byb2plY3QudGl0bGV9PHA+PGltZyBzcmM9Li9pbWFnZXMvZGVsZXRlLnBuZyBhbHQ9XCJkZWxldGUtYmluXCIgY2xhc3M9XCJkZWxldGUtYmluIGhpZGUtYmluXCI+YDtcbiAgfSk7XG5cbiAgbGlzdGVuRm9yUHJvamVjdENsaWNrKCk7XG59XG5cbi8vU3RlcDEwXG5mdW5jdGlvbiBsaXN0ZW5Gb3JQcm9qZWN0Q2xpY2soKSB7XG4gIGNvbnN0IHByb2plY3RCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LXNlbGVjdFwiKTtcbiAgcHJvamVjdEJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVQcm9qZWN0Q2xpY2spO1xuICB9KTtcbn1cblxuLy9TdGVwMTFcbmZ1bmN0aW9uIGhhbmRsZVByb2plY3RDbGljayhlKSB7XG4gIGNvbnN0IGxpc3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdC10aXRsZVwiKTtcbiAgbGlzdFRpdGxlLnRleHRDb250ZW50ID0gZS50YXJnZXQuaW5uZXJUZXh0O1xuICBoaWRlUHJvamVjdEZvcm0oKTtcbiAgaGlkZVRhc2tGb3JtKCk7XG4gIHNob3dBZGRUYXNrQnRuKCk7XG5cbiAgY29uc3QgcHJvamVjdEluZGV4ID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaW5kZXhcIik7XG5cbiAgY2hhbmdlQ3VycmVudFByb2plY3RJbmRleChwcm9qZWN0SW5kZXgpO1xuICB0YXNrLmdldFRhc2tGcm9tUHJvamVjdChjdXJyZW50UHJvamVjdEluZGV4KTtcblxuICByZW5kZXJUb2RvTGlzdCh0YXNrLnRhc2tMaXN0KTtcblxuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGVsZXRlLWJpblwiKSkge1xuICAgIGRlbGV0ZVByb2plY3RGcm9tRG9tKHByb2plY3RJbmRleCk7XG4gICAgY2xlYXJUYXNrRGlzcGxheSgpO1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0RnJvbURvbShpbmRleCkge1xuICBwcm9qZWN0LnNwbGljZVByb2plY3RMaXN0KGluZGV4KTtcbiAgY2hhbmdlQ3VycmVudFByb2plY3RJbmRleCgwKTtcbiAgcmVuZGVyUHJvamVjdHMoKTtcbn1cblxuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2stYnRuXCIpO1xuY29uc3QgZGlzcGxheUFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rpc3BsYXktYWRkLXRhc2tcIik7XG5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93VGFza0Zvcm0pO1xuZnVuY3Rpb24gc2hvd1Rhc2tGb3JtKCkge1xuICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoXCJoaWRlLWJ0bi1hY3RpdmVcIik7XG4gIGRpc3BsYXlBZGRUYXNrLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlLWlucHV0XCIpO1xuXG4gIGhpZGVQcm9qZWN0Rm9ybSgpO1xufVxuXG5jb25zdCB0YXNrQ2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNhbmNlbC1idG5cIik7XG50YXNrQ2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoaWRlVGFza0Zvcm0pO1xuZnVuY3Rpb24gaGlkZVRhc2tGb3JtKCkge1xuICBkaXNwbGF5QWRkVGFzay5jbGFzc0xpc3QuYWRkKFwiaGlkZS1pbnB1dFwiKTtcbiAgYWRkVGFza0J0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZS1idG4tYWN0aXZlXCIpO1xufVxuXG5jb25zdCB0YXNrQWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWFkZC1idG5cIik7XG50YXNrQWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRUYXNrRm9ybSk7XG5mdW5jdGlvbiBhZGRUYXNrRm9ybSgpIHtcbiAgaGlkZVRhc2tGb3JtKCk7XG4gIGNvbnN0IHRhc2tJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2staW5wdXRcIik7XG4gIGNvbnN0IHByaW9yaXR5U2NhbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByaW9yaXR5XCIpO1xuICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZHVlLWRhdGVcIik7XG4gIGlmICghdGFza0lucHV0LnZhbHVlKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRhc2suZ2V0VGFza0Zyb21Qcm9qZWN0KGN1cnJlbnRQcm9qZWN0SW5kZXgpO1xuICB0YXNrLmFkZFRhc2soXG4gICAgdGFza0lucHV0LnZhbHVlLFxuICAgIGRhdGVJbnB1dC52YWx1ZSxcbiAgICBwcmlvcml0eVNjYWxlLnZhbHVlLFxuICAgIGN1cnJlbnRQcm9qZWN0SW5kZXhcbiAgKTtcbiAgdGFza0lucHV0LnZhbHVlID0gXCJcIjtcbiAgZGF0ZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgcHJpb3JpdHlTY2FsZS52YWx1ZSA9IFwibG93XCI7XG59XG5cbmZ1bmN0aW9uIGNsZWFyVGFza0Rpc3BsYXkoKSB7XG4gIGNvbnN0IHRvZG9MaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWxpc3RcIik7XG4gIHRvZG9MaXN0Q29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVG9kb0xpc3QobGlzdCkge1xuICBjbGVhclRhc2tEaXNwbGF5KCk7XG5cbiAgY29uc3QgdG9kb0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tbGlzdFwiKTtcbiAgbGlzdC5mb3JFYWNoKCh0b2RvLCB0b2RvSW5kZXgpID0+IHtcbiAgICB0b2RvTGlzdENvbnRhaW5lci5pbm5lckhUTUwgKz0gYDxkaXYgY2xhc3M9XCJ0b2RvLWl0ZW1cIiBkYXRhLXByb2plY3QtaW5kZXg9XCIke3RvZG8ucHJvamVjdEluZGV4fVwiIGRhdGEtdGFzay1pbmRleD1cIiR7dG9kb0luZGV4fVwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWxlZnRcIj5cbiAgICA8cCBjbGFzcz1cInRvZG8tdGl0bGVcIj7igKIgJHt0b2RvLnRpdGxlfTwvcD5cbiAgICA8cCBjbGFzcz1cInQtcHJpb3JpdHlcIj4ke3RvZG8ucHJpb3JpdHl9PC9wPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrLXJpZ2h0XCI+XG4gICAgPHAgY2xhc3M9XCJ0b2RvLWR1ZS1kYXRlXCI+JHt0b2RvLmR1ZURhdGV9PC9wPlxuICAgIDxpbWcgIGNsYXNzPVwiY3Jvc3MtYmluIGhpZGUtY3Jvc3NcIiBkYXRhLXRhc2staW5kZXg9XCIke3RvZG9JbmRleH1cIiBzcmM9XCIuL2ltYWdlcy9jcm9zcy5wbmdcIiBhbHQ9XCJjcm9zc1wiIC8+XG4gICAgPC9kaXY+XG4gIDwvZGl2PmA7XG4gIH0pO1xuXG4gIGhhbmRsZVRvZG9CdG5DbGlja3MoKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlVG9kb0J0bkNsaWNrcygpIHtcbiAgY29uc3QgdGFza0RlbGV0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY3Jvc3MtYmluXCIpO1xuICB0YXNrRGVsZXRlLmZvckVhY2goKGJ0bikgPT4gYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVUYXNrRnJvbURvbSkpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVUYXNrRnJvbURvbShlKSB7XG4gIGNvbnN0IHByb2plY3RJbmRleCA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5kYXRhc2V0LnByb2plY3RJbmRleDtcbiAgY29uc3QgdGFza0luZGV4ID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmRhdGFzZXQudGFza0luZGV4O1xuXG4gIHN0b3JhZ2UuZGVsZXRlVG9kbyhwcm9qZWN0SW5kZXgsIHRhc2tJbmRleCk7XG4gIGxldCBzdG9yYWdlUHJvamVjdExpc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RMaXN0XCIpO1xuICBsZXQgc3RvcmFnZVByb2plY3RzID0gSlNPTi5wYXJzZShzdG9yYWdlUHJvamVjdExpc3QpO1xuICByZW5kZXJUb2RvTGlzdChzdG9yYWdlUHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrKTtcbn1cblxuZnVuY3Rpb24gc2hvd0FkZFRhc2tCdG4oKSB7XG4gIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrLWJ0blwiKTtcbiAgYWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZS1idG4tYWN0aXZlXCIpO1xufVxuXG5leHBvcnQgeyBjbGVhclByb2plY3REaXNwbGF5LCByZW5kZXJQcm9qZWN0cywgcmVuZGVyVG9kb0xpc3QgfTtcbiIsImltcG9ydCAqIGFzIGRvbSBmcm9tIFwiLi9kb20uanNcIjtcbmltcG9ydCAqIGFzIHN0b3JhZ2UgZnJvbSBcIi4vc3RvcmFnZS5qc1wiO1xuaW1wb3J0ICogYXMgdGFzayBmcm9tIFwiLi90YXNrcy5qc1wiO1xuXG4vL1N0ZXAxXG5sZXQgcHJvamVjdExpc3QgPSBbXTtcblxuZnVuY3Rpb24gZ2V0TG9jYWxTdG9yYWdlKCkge1xuICBsZXQgbG9jYWxQcm9qZWN0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdExpc3RcIik7XG4gIGlmICghbG9jYWxQcm9qZWN0cykge1xuICAgIGFkZFByb2plY3QoXCJTdHVkeVwiKTtcbiAgICB0YXNrLmFkZFRhc2soXCJQcmFjdGljZSBDb2RpbmdcIik7XG4gIH0gZWxzZSB7XG4gICAgcHJvamVjdExpc3QgPSBKU09OLnBhcnNlKGxvY2FsUHJvamVjdHMpO1xuICB9XG4gIHJldHVybiBwcm9qZWN0TGlzdDtcbn1cblxuLy9TdGVwMlxuZnVuY3Rpb24gQ3JlYXRlUHJvamVjdCh0aXRsZSkge1xuICBjb25zdCB0YXNrID0gW107XG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgdGFzayxcbiAgfTtcbn1cblxuLy9TdGVwM1xuZnVuY3Rpb24gYWRkUHJvamVjdCh0aXRsZSkge1xuICBjb25zdCBwcm9qZWN0ID0gQ3JlYXRlUHJvamVjdCh0aXRsZSk7XG4gIHByb2plY3RMaXN0LnB1c2gocHJvamVjdCk7XG4gIHN0b3JhZ2Uuc2F2ZVByb2plY3RUb0xvY2FsU3RvcmFnZSgpO1xuICBkb20ucmVuZGVyUHJvamVjdHMoKTtcbn1cblxuZnVuY3Rpb24gc3BsaWNlUHJvamVjdExpc3QoaW5kZXgpIHtcbiAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICBwcm9qZWN0TGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG4gIHN0b3JhZ2Uuc2F2ZVByb2plY3RUb0xvY2FsU3RvcmFnZSgpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0TGlzdChpbmRleCwgbGlzdCkge1xuICBwcm9qZWN0TGlzdFtpbmRleF0udGFzayA9IGxpc3Q7XG4gIHN0b3JhZ2Uuc2F2ZVByb2plY3RUb0xvY2FsU3RvcmFnZSgpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVUYXNrQXJyYXkoXG4gIHByb2plY3RJbmRleCxcbiAgdGFza0luZGV4LFxuICBuZXdOYW1lLFxuICBuZXdQcmlvcml0eSxcbiAgbmV3RGF0ZVxuKSB7XG4gIHByb2plY3RMaXN0W3Byb2plY3RJbmRleF0udGFza1t0YXNrSW5kZXhdLnRpdGxlID0gbmV3TmFtZTtcbiAgcHJvamVjdExpc3RbcHJvamVjdEluZGV4XS50YXNrW3Rhc2tJbmRleF0ucHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgcHJvamVjdExpc3RbcHJvamVjdEluZGV4XS50YXNrW3Rhc2tJbmRleF0uZHVlRGF0ZSA9IG5ld0RhdGU7XG4gIHN0b3JhZ2Uuc2F2ZVByb2plY3RUb0xvY2FsU3RvcmFnZSgpO1xufVxuXG5leHBvcnQge1xuICBwcm9qZWN0TGlzdCxcbiAgQ3JlYXRlUHJvamVjdCxcbiAgYWRkUHJvamVjdCxcbiAgc3BsaWNlUHJvamVjdExpc3QsXG4gIHVwZGF0ZVByb2plY3RMaXN0LFxuICBnZXRMb2NhbFN0b3JhZ2UsXG4gIHVwZGF0ZVRhc2tBcnJheSxcbn07XG4iLCJpbXBvcnQgKiBhcyBwcm9qZWN0IGZyb20gXCIuL3Byb2plY3QuanNcIjtcbmltcG9ydCAqIGFzIHRhc2sgZnJvbSBcIi4vdGFza3MuanNcIjtcbmltcG9ydCAqIGFzIGRvbSBmcm9tIFwiLi9kb20uanNcIjtcblxuLy9TdGVwNFxuZnVuY3Rpb24gc2F2ZVByb2plY3RUb0xvY2FsU3RvcmFnZSgpIHtcbiAgY29uc3QgcHJvamVjdHMgPSBwcm9qZWN0LnByb2plY3RMaXN0O1xuICBjb25zdCBwcm9qZWN0TGlzdEluSlNPTiA9IEpTT04uc3RyaW5naWZ5KHByb2plY3RzKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0TGlzdFwiLCBwcm9qZWN0TGlzdEluSlNPTik7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRvZG8ocHJvamVjdEluZGV4LCB0YXNrSW5kZXgpIHtcbiAgbGV0IHN0b3JhZ2VQcm9qZWN0TGlzdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdExpc3RcIik7XG4gIGxldCBzdG9yYWdlUHJvamVjdHMgPSBKU09OLnBhcnNlKHN0b3JhZ2VQcm9qZWN0TGlzdCk7XG5cbiAgc3RvcmFnZVByb2plY3RzW3Byb2plY3RJbmRleF0udGFzay5zcGxpY2UodGFza0luZGV4LCAxKTtcblxuICBjb25zdCBqc29uUHJvamVjdExpc3QgPSBzdG9yYWdlUHJvamVjdHM7XG4gIGNvbnN0IGpzb25Qcm9qZWN0cyA9IEpTT04uc3RyaW5naWZ5KGpzb25Qcm9qZWN0TGlzdCk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdExpc3RcIiwganNvblByb2plY3RzKTtcblxuICB0YXNrLnRhc2tMaXN0LnNwbGljZSh0YXNrSW5kZXgsIDEpO1xufVxuXG5mdW5jdGlvbiBnZXRMb2NhbFN0b3JhZ2UoKSB7XG4gIC8vIHJldHJlaWV2ZSBkYXRhXG4gIGxldCBzdG9yYWdlUHJvamVjdExpc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RMaXN0XCIpO1xuICBsZXQgc3RvcmFnZVByb2plY3RzID0gSlNPTi5wYXJzZShzdG9yYWdlUHJvamVjdExpc3QpO1xuICByZXR1cm4gc3RvcmFnZVByb2plY3RzO1xufVxuXG5leHBvcnQgeyBzYXZlUHJvamVjdFRvTG9jYWxTdG9yYWdlLCBkZWxldGVUb2RvLCBnZXRMb2NhbFN0b3JhZ2UgfTtcbiIsImltcG9ydCAqIGFzIGRvbSBmcm9tIFwiLi9kb20uanNcIjtcbmltcG9ydCAqIGFzIHByb2plY3QgZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuXG5sZXQgdGFza0xpc3QgPSBbXTtcblxuZnVuY3Rpb24gZ2V0VGFza0Zyb21Qcm9qZWN0KHByb2plY3RJbmRleCkge1xuICBpZiAocHJvamVjdC5wcm9qZWN0TGlzdFtwcm9qZWN0SW5kZXhdKSB7XG4gICAgdGFza0xpc3QgPSBwcm9qZWN0LnByb2plY3RMaXN0W3Byb2plY3RJbmRleF0udGFzaztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuZnVuY3Rpb24gQ3JlYXRlVGFzayh0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHlTY2FsZSwgcHJvamVjdEluZGV4KSB7XG4gIGxldCBwcmlvcml0eTtcbiAgaWYgKHByaW9yaXR5U2NhbGUgPT09IFwiaGlnaFwiKSB7XG4gICAgcHJpb3JpdHkgPSBcIuKdl++4j+Kdl++4j1wiO1xuICB9IGVsc2Uge1xuICAgIHByaW9yaXR5ID0gXCJcIjtcbiAgfVxuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICAgIGR1ZURhdGUsXG4gICAgcHJpb3JpdHksXG4gICAgcHJvamVjdEluZGV4LFxuICB9O1xufVxuXG5mdW5jdGlvbiBhZGRUYXNrKG5hbWUsIGR1ZURhdGUsIHByaW9yaXR5U2NhbGUsIHByb2plY3RJbmRleCkge1xuICBjb25zdCB0YXNrID0gQ3JlYXRlVGFzayhuYW1lLCBkdWVEYXRlLCBwcmlvcml0eVNjYWxlLCBwcm9qZWN0SW5kZXgpO1xuICB0YXNrTGlzdC5wdXNoKHRhc2spO1xuICBwcm9qZWN0LnVwZGF0ZVByb2plY3RMaXN0KHByb2plY3RJbmRleCwgdGFza0xpc3QpO1xuICBjb25zb2xlLmxvZyh0YXNrTGlzdCk7XG4gIGRvbS5yZW5kZXJUb2RvTGlzdCh0YXNrTGlzdCk7XG59XG5cbmV4cG9ydCB7IHRhc2tMaXN0LCBnZXRUYXNrRnJvbVByb2plY3QsIENyZWF0ZVRhc2ssIGFkZFRhc2sgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICogYXMgZG9tIGZyb20gXCIuL21vZHVsZXMvZG9tLmpzXCI7XG5pbXBvcnQgKiBhcyBwcm9qZWN0IGZyb20gXCIuL21vZHVsZXMvcHJvamVjdC5qc1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxucHJvamVjdC5nZXRMb2NhbFN0b3JhZ2UoKTtcbmRvbS5yZW5kZXJQcm9qZWN0cygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9