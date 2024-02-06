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
/* harmony import */ var _images_delete_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/delete.png */ "./src/images/delete.png");
/* harmony import */ var _images_cross_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/cross.png */ "./src/images/cross.png");






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
        <p class="project-select" data-project-index="${index}">${project.title}<p><img src="${_images_delete_png__WEBPACK_IMPORTED_MODULE_3__}" alt="delete-bin" class="delete-bin hide-bin">`;
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
    <img  class="cross-bin hide-cross" data-task-index="${todoIndex}" src="${_images_cross_png__WEBPACK_IMPORTED_MODULE_4__}" alt="crossImg" />
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

/***/ }),

/***/ "./src/images/cross.png":
/*!******************************!*\
  !*** ./src/images/cross.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c623043a998c86047c46.png";

/***/ }),

/***/ "./src/images/delete.png":
/*!*******************************!*\
  !*** ./src/images/delete.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d19af7fefc0798b24888.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBd0M7QUFDUTtBQUMzQjs7QUFFckIsZ0VBQXVCO0FBQ3ZCLDJEQUFrQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2RvbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1VidW50dS1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvUXVpY2tzYW5kLUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9mb250cy9RdWlja3NhbmQtU2VtaUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogVWJ1bnR1O1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQtQm9sZDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogUXVpY2tzYW5kLVNlbWlib2xkO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbn1cblxuLyogZGVmYXVsdCAqL1xuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQtU2VtaWJvbGQsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDIsIDI0MiwgMjM3KTtcbn1cblxuLyogaGVhZGVyICovXG5cbmhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTAzKTtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuaDEge1xuICBmb250LWZhbWlseTogVWJ1bnR1LCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDQ4cHg7XG59XG5cbi8qIG1haW4gKi9cbm1haW4ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xufVxuXG4vKiBuYXYgYmFyICovXG5cbiNwcm9qZWN0LWNvbnRlbnQge1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogMTh2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgxNTEsIDE0NSwgMTQ1LCAwLjI2Myk7XG59XG5cbmgyIHtcbiAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZC1Cb2xkLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbmJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG4uYWRkUHJvamVjdEJ0biB7XG4gIHdpZHRoOiAxNTBweDtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbn1cblxuLnByb2plY3Qtc2VsZWN0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pbnB1dCB7XG4gIGhlaWdodDogMzVweDtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4jYnRuLWlucHV0IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmhpZGUtaW5wdXQsXG4uaGlkZS1idG4tYWN0aXZlLFxuLmhpZGUtYWRkLXRhc2sge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5wIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5oaWRlLWJpbixcbi5oaWRlLWNyb3NzIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLnByb2plY3Qtc2VsZWN0OmhvdmVyIC5oaWRlLWJpbiB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi50b2RvLWl0ZW06aG92ZXIgLmhpZGUtY3Jvc3Mge1xuICBvcGFjaXR5OiAxO1xufVxuXG4jbWFpbi1jb250ZW50IHtcbiAgd2lkdGg6IDgydnc7XG59XG5cbi5hZGQtdGFzay1idG4ge1xuICBtYXJnaW46IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQyLCAyNDIsIDIzNyk7XG59XG5cbi8qIHRhc2sgYXJlYSAqL1xuI2Rpc3BsYXktYWRkLXRhc2sge1xuICBwYWRkaW5nLWxlZnQ6IDgwcHg7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuXG4uZmxleC1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5hZGQtdGFzay1pbnB1dCB7XG4gIHdpZHRoOiA1MDBweDtcbn1cblxuLnRvZG8tbGlzdCB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi50b2RvLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA3MHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YXNrLWxlZnQsXG4udGFzay1yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDMwcHg7XG59XG5cbi5jcm9zcy1iaW4ge1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xufVxuXG4jY2hlY2stYm94IHtcbiAgd2lkdGg6IDE1cHg7XG59XG5cbi5saXN0LXRpdGxlIHtcbiAgbWFyZ2luOiAyMHB4IDBweCAtMjBweCAyMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQiw0Q0FBaUM7QUFDbkM7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsNENBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLDRDQUF3QztBQUMxQzs7QUFFQSxZQUFZO0FBQ1o7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsMkNBQTJDO0VBQzNDLG9DQUFvQztBQUN0Qzs7QUFFQSxXQUFXOztBQUVYO0VBQ0UsNkNBQTZDO0VBQzdDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixlQUFlO0FBQ2pCOztBQUVBLFNBQVM7QUFDVDtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7QUFDdkM7O0FBRUEsWUFBWTs7QUFFWjtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsYUFBYTtFQUNiLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBOzs7RUFHRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7O0VBRUUsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7RUFDWixvQ0FBb0M7QUFDdEM7O0FBRUEsY0FBYztBQUNkO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDBCQUEwQjtBQUM1QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBVYnVudHU7XFxuICBzcmM6IHVybCguL2ZvbnRzL1VidW50dS1Cb2xkLnR0Zik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZC1Cb2xkO1xcbiAgc3JjOiB1cmwoLi9mb250cy9RdWlja3NhbmQtQm9sZC50dGYpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQtU2VtaWJvbGQ7XFxuICBzcmM6IHVybCguL2ZvbnRzL1F1aWNrc2FuZC1TZW1pQm9sZC50dGYpO1xcbn1cXG5cXG4vKiBkZWZhdWx0ICovXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQtU2VtaWJvbGQsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQyLCAyNDIsIDIzNyk7XFxufVxcblxcbi8qIGhlYWRlciAqL1xcblxcbmhlYWRlciB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEwMyk7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG5oMSB7XFxuICBmb250LWZhbWlseTogVWJ1bnR1LCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA0OHB4O1xcbn1cXG5cXG4vKiBtYWluICovXFxubWFpbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG59XFxuXFxuLyogbmF2IGJhciAqL1xcblxcbiNwcm9qZWN0LWNvbnRlbnQge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIHdpZHRoOiAxOHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMTUxLCAxNDUsIDE0NSwgMC4yNjMpO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LWZhbWlseTogUXVpY2tzYW5kLUJvbGQsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDMwcHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG4gIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuLmFkZFByb2plY3RCdG4ge1xcbiAgd2lkdGg6IDE1MHB4O1xcbn1cXG5cXG5pbWcge1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxufVxcblxcbi5wcm9qZWN0LXNlbGVjdCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmlucHV0IHtcXG4gIGhlaWdodDogMzVweDtcXG4gIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuI2J0bi1pbnB1dCB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4uaGlkZS1pbnB1dCxcXG4uaGlkZS1idG4tYWN0aXZlLFxcbi5oaWRlLWFkZC10YXNrIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbnAge1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcblxcbi5oaWRlLWJpbixcXG4uaGlkZS1jcm9zcyB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4ucHJvamVjdC1zZWxlY3Q6aG92ZXIgLmhpZGUtYmluIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi50b2RvLWl0ZW06aG92ZXIgLmhpZGUtY3Jvc3Mge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuI21haW4tY29udGVudCB7XFxuICB3aWR0aDogODJ2dztcXG59XFxuXFxuLmFkZC10YXNrLWJ0biB7XFxuICBtYXJnaW46IDMwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDIsIDI0MiwgMjM3KTtcXG59XFxuXFxuLyogdGFzayBhcmVhICovXFxuI2Rpc3BsYXktYWRkLXRhc2sge1xcbiAgcGFkZGluZy1sZWZ0OiA4MHB4O1xcbiAgcGFkZGluZy10b3A6IDUwcHg7XFxufVxcblxcbi5mbGV4LWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuLmFkZC10YXNrLWlucHV0IHtcXG4gIHdpZHRoOiA1MDBweDtcXG59XFxuXFxuLnRvZG8tbGlzdCB7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5cXG4udG9kby1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDcwcHg7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxNTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stbGVmdCxcXG4udGFzay1yaWdodCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4uY3Jvc3MtYmluIHtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbn1cXG5cXG4jY2hlY2stYm94IHtcXG4gIHdpZHRoOiAxNXB4O1xcbn1cXG5cXG4ubGlzdC10aXRsZSB7XFxuICBtYXJnaW46IDIwcHggMHB4IC0yMHB4IDIwcHg7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgKiBhcyBwcm9qZWN0IGZyb20gXCIuL3Byb2plY3QuanNcIjtcbmltcG9ydCAqIGFzIHN0b3JhZ2UgZnJvbSBcIi4vc3RvcmFnZS5qc1wiO1xuaW1wb3J0ICogYXMgdGFzayBmcm9tIFwiLi90YXNrcy5qc1wiO1xuaW1wb3J0IERlbGV0ZUltZyBmcm9tIFwiLi4vaW1hZ2VzL2RlbGV0ZS5wbmdcIjtcbmltcG9ydCBDcm9zc0ltZyBmcm9tIFwiLi4vaW1hZ2VzL2Nyb3NzLnBuZ1wiO1xuXG5sZXQgY3VycmVudFByb2plY3RJbmRleCA9IDA7XG5cbmZ1bmN0aW9uIGNoYW5nZUN1cnJlbnRQcm9qZWN0SW5kZXgoaW5kZXgpIHtcbiAgY3VycmVudFByb2plY3RJbmRleCA9IGluZGV4O1xufVxuXG4vL3N0ZXA1XG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRQcm9qZWN0QnRuXCIpO1xuY29uc3QgZGlzcGxheUFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rpc3BsYXktYWRkLXByb2plY3RcIik7XG5cbmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHNob3dQcm9qZWN0Rm9ybSgpKTtcblxuZnVuY3Rpb24gc2hvd1Byb2plY3RGb3JtKCkge1xuICBhZGRQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJoaWRlLWJ0bi1hY3RpdmVcIik7XG4gIGRpc3BsYXlBZGRQcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlLWlucHV0XCIpO1xuICBoaWRlVGFza0Zvcm0oKTtcbn1cblxuLy9zdGVwNlxuY29uc3QgcHJvamVjdENhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jYW5jZWwtYnRuXCIpO1xucHJvamVjdENhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gaGlkZVByb2plY3RGb3JtKCkpO1xuZnVuY3Rpb24gaGlkZVByb2plY3RGb3JtKCkge1xuICBwcm9qZWN0SW5wdXQudmFsdWUgPSBcIlwiO1xuICBkaXNwbGF5QWRkUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiaGlkZS1pbnB1dFwiKTtcbiAgYWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZS1idG4tYWN0aXZlXCIpO1xufVxuXG4vL1N0ZXA3XG5jb25zdCBwcm9qZWN0QWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWFkZC1idG5cIik7XG5jb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0LWlucHV0XCIpO1xucHJvamVjdEFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gYWRkUHJvamVjdEZvcm0oKSk7XG5mdW5jdGlvbiBhZGRQcm9qZWN0Rm9ybSgpIHtcbiAgaWYgKCFwcm9qZWN0SW5wdXQudmFsdWUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcHJvamVjdC5hZGRQcm9qZWN0KHByb2plY3RJbnB1dC52YWx1ZSk7XG4gIHByb2plY3RJbnB1dC52YWx1ZSA9IFwiXCI7XG59XG5cbi8vc3RlcDhcbmZ1bmN0aW9uIGNsZWFyUHJvamVjdERpc3BsYXkoKSB7XG4gIGNvbnN0IHByb2plY3RMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWxpc3RcIik7XG4gIHByb2plY3RMaXN0Q29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcbn1cblxuLy9TdGVwOVxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMoKSB7XG4gIGNsZWFyUHJvamVjdERpc3BsYXkoKTtcbiAgY29uc3QgcHJvamVjdExpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbGlzdFwiKTtcblxuICBwcm9qZWN0LnByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgcHJvamVjdExpc3RDb250YWluZXIuaW5uZXJIVE1MICs9IGA8ZGl2IGNsYXNzPVwicHJvamVjdC1zZWxlY3QgZmxleC1kaXZcIiBkYXRhLXByb2plY3QtaW5kZXg9XCIke2luZGV4fVwiPlxuICAgICAgICA8cCBjbGFzcz1cInByb2plY3Qtc2VsZWN0XCIgZGF0YS1wcm9qZWN0LWluZGV4PVwiJHtpbmRleH1cIj4ke3Byb2plY3QudGl0bGV9PHA+PGltZyBzcmM9XCIke0RlbGV0ZUltZ31cIiBhbHQ9XCJkZWxldGUtYmluXCIgY2xhc3M9XCJkZWxldGUtYmluIGhpZGUtYmluXCI+YDtcbiAgfSk7XG5cbiAgbGlzdGVuRm9yUHJvamVjdENsaWNrKCk7XG59XG5cbi8vU3RlcDEwXG5mdW5jdGlvbiBsaXN0ZW5Gb3JQcm9qZWN0Q2xpY2soKSB7XG4gIGNvbnN0IHByb2plY3RCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LXNlbGVjdFwiKTtcbiAgcHJvamVjdEJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVQcm9qZWN0Q2xpY2spO1xuICB9KTtcbn1cblxuLy9TdGVwMTFcbmZ1bmN0aW9uIGhhbmRsZVByb2plY3RDbGljayhlKSB7XG4gIGNvbnN0IGxpc3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdC10aXRsZVwiKTtcbiAgbGlzdFRpdGxlLnRleHRDb250ZW50ID0gZS50YXJnZXQuaW5uZXJUZXh0O1xuICBoaWRlUHJvamVjdEZvcm0oKTtcbiAgaGlkZVRhc2tGb3JtKCk7XG4gIHNob3dBZGRUYXNrQnRuKCk7XG5cbiAgY29uc3QgcHJvamVjdEluZGV4ID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaW5kZXhcIik7XG5cbiAgY2hhbmdlQ3VycmVudFByb2plY3RJbmRleChwcm9qZWN0SW5kZXgpO1xuICB0YXNrLmdldFRhc2tGcm9tUHJvamVjdChjdXJyZW50UHJvamVjdEluZGV4KTtcblxuICByZW5kZXJUb2RvTGlzdCh0YXNrLnRhc2tMaXN0KTtcblxuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGVsZXRlLWJpblwiKSkge1xuICAgIGRlbGV0ZVByb2plY3RGcm9tRG9tKHByb2plY3RJbmRleCk7XG4gICAgY2xlYXJUYXNrRGlzcGxheSgpO1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0RnJvbURvbShpbmRleCkge1xuICBwcm9qZWN0LnNwbGljZVByb2plY3RMaXN0KGluZGV4KTtcbiAgY2hhbmdlQ3VycmVudFByb2plY3RJbmRleCgwKTtcbiAgcmVuZGVyUHJvamVjdHMoKTtcbn1cblxuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2stYnRuXCIpO1xuY29uc3QgZGlzcGxheUFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rpc3BsYXktYWRkLXRhc2tcIik7XG5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93VGFza0Zvcm0pO1xuZnVuY3Rpb24gc2hvd1Rhc2tGb3JtKCkge1xuICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoXCJoaWRlLWJ0bi1hY3RpdmVcIik7XG4gIGRpc3BsYXlBZGRUYXNrLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlLWlucHV0XCIpO1xuXG4gIGhpZGVQcm9qZWN0Rm9ybSgpO1xufVxuXG5jb25zdCB0YXNrQ2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNhbmNlbC1idG5cIik7XG50YXNrQ2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoaWRlVGFza0Zvcm0pO1xuZnVuY3Rpb24gaGlkZVRhc2tGb3JtKCkge1xuICBkaXNwbGF5QWRkVGFzay5jbGFzc0xpc3QuYWRkKFwiaGlkZS1pbnB1dFwiKTtcbiAgYWRkVGFza0J0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZS1idG4tYWN0aXZlXCIpO1xufVxuXG5jb25zdCB0YXNrQWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWFkZC1idG5cIik7XG50YXNrQWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRUYXNrRm9ybSk7XG5mdW5jdGlvbiBhZGRUYXNrRm9ybSgpIHtcbiAgaGlkZVRhc2tGb3JtKCk7XG4gIGNvbnN0IHRhc2tJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2staW5wdXRcIik7XG4gIGNvbnN0IHByaW9yaXR5U2NhbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByaW9yaXR5XCIpO1xuICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZHVlLWRhdGVcIik7XG4gIGlmICghdGFza0lucHV0LnZhbHVlKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRhc2suZ2V0VGFza0Zyb21Qcm9qZWN0KGN1cnJlbnRQcm9qZWN0SW5kZXgpO1xuICB0YXNrLmFkZFRhc2soXG4gICAgdGFza0lucHV0LnZhbHVlLFxuICAgIGRhdGVJbnB1dC52YWx1ZSxcbiAgICBwcmlvcml0eVNjYWxlLnZhbHVlLFxuICAgIGN1cnJlbnRQcm9qZWN0SW5kZXhcbiAgKTtcbiAgdGFza0lucHV0LnZhbHVlID0gXCJcIjtcbiAgZGF0ZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgcHJpb3JpdHlTY2FsZS52YWx1ZSA9IFwibG93XCI7XG59XG5cbmZ1bmN0aW9uIGNsZWFyVGFza0Rpc3BsYXkoKSB7XG4gIGNvbnN0IHRvZG9MaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWxpc3RcIik7XG4gIHRvZG9MaXN0Q29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVG9kb0xpc3QobGlzdCkge1xuICBjbGVhclRhc2tEaXNwbGF5KCk7XG5cbiAgY29uc3QgdG9kb0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tbGlzdFwiKTtcbiAgbGlzdC5mb3JFYWNoKCh0b2RvLCB0b2RvSW5kZXgpID0+IHtcbiAgICB0b2RvTGlzdENvbnRhaW5lci5pbm5lckhUTUwgKz0gYDxkaXYgY2xhc3M9XCJ0b2RvLWl0ZW1cIiBkYXRhLXByb2plY3QtaW5kZXg9XCIke3RvZG8ucHJvamVjdEluZGV4fVwiIGRhdGEtdGFzay1pbmRleD1cIiR7dG9kb0luZGV4fVwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWxlZnRcIj5cbiAgICA8cCBjbGFzcz1cInRvZG8tdGl0bGVcIj7igKIgJHt0b2RvLnRpdGxlfTwvcD5cbiAgICA8cCBjbGFzcz1cInQtcHJpb3JpdHlcIj4ke3RvZG8ucHJpb3JpdHl9PC9wPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrLXJpZ2h0XCI+XG4gICAgPHAgY2xhc3M9XCJ0b2RvLWR1ZS1kYXRlXCI+JHt0b2RvLmR1ZURhdGV9PC9wPlxuICAgIDxpbWcgIGNsYXNzPVwiY3Jvc3MtYmluIGhpZGUtY3Jvc3NcIiBkYXRhLXRhc2staW5kZXg9XCIke3RvZG9JbmRleH1cIiBzcmM9XCIke0Nyb3NzSW1nfVwiIGFsdD1cImNyb3NzSW1nXCIgLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+YDtcbiAgfSk7XG5cbiAgaGFuZGxlVG9kb0J0bkNsaWNrcygpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVUb2RvQnRuQ2xpY2tzKCkge1xuICBjb25zdCB0YXNrRGVsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jcm9zcy1iaW5cIik7XG4gIHRhc2tEZWxldGUuZm9yRWFjaCgoYnRuKSA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVRhc2tGcm9tRG9tKSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2tGcm9tRG9tKGUpIHtcbiAgY29uc3QgcHJvamVjdEluZGV4ID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmRhdGFzZXQucHJvamVjdEluZGV4O1xuICBjb25zdCB0YXNrSW5kZXggPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YXNldC50YXNrSW5kZXg7XG5cbiAgc3RvcmFnZS5kZWxldGVUb2RvKHByb2plY3RJbmRleCwgdGFza0luZGV4KTtcbiAgbGV0IHN0b3JhZ2VQcm9qZWN0TGlzdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdExpc3RcIik7XG4gIGxldCBzdG9yYWdlUHJvamVjdHMgPSBKU09OLnBhcnNlKHN0b3JhZ2VQcm9qZWN0TGlzdCk7XG4gIHJlbmRlclRvZG9MaXN0KHN0b3JhZ2VQcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2spO1xufVxuXG5mdW5jdGlvbiBzaG93QWRkVGFza0J0bigpIHtcbiAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2stYnRuXCIpO1xuICBhZGRQcm9qZWN0QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlLWJ0bi1hY3RpdmVcIik7XG59XG5cbmV4cG9ydCB7IGNsZWFyUHJvamVjdERpc3BsYXksIHJlbmRlclByb2plY3RzLCByZW5kZXJUb2RvTGlzdCB9O1xuIiwiaW1wb3J0ICogYXMgZG9tIGZyb20gXCIuL2RvbS5qc1wiO1xuaW1wb3J0ICogYXMgc3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7XG5pbXBvcnQgKiBhcyB0YXNrIGZyb20gXCIuL3Rhc2tzLmpzXCI7XG5cbi8vU3RlcDFcbmxldCBwcm9qZWN0TGlzdCA9IFtdO1xuXG5mdW5jdGlvbiBnZXRMb2NhbFN0b3JhZ2UoKSB7XG4gIGxldCBsb2NhbFByb2plY3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0TGlzdFwiKTtcbiAgaWYgKCFsb2NhbFByb2plY3RzKSB7XG4gICAgYWRkUHJvamVjdChcIlN0dWR5XCIpO1xuICAgIHRhc2suYWRkVGFzayhcIlByYWN0aWNlIENvZGluZ1wiKTtcbiAgfSBlbHNlIHtcbiAgICBwcm9qZWN0TGlzdCA9IEpTT04ucGFyc2UobG9jYWxQcm9qZWN0cyk7XG4gIH1cbiAgcmV0dXJuIHByb2plY3RMaXN0O1xufVxuXG4vL1N0ZXAyXG5mdW5jdGlvbiBDcmVhdGVQcm9qZWN0KHRpdGxlKSB7XG4gIGNvbnN0IHRhc2sgPSBbXTtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICB0YXNrLFxuICB9O1xufVxuXG4vL1N0ZXAzXG5mdW5jdGlvbiBhZGRQcm9qZWN0KHRpdGxlKSB7XG4gIGNvbnN0IHByb2plY3QgPSBDcmVhdGVQcm9qZWN0KHRpdGxlKTtcbiAgcHJvamVjdExpc3QucHVzaChwcm9qZWN0KTtcbiAgc3RvcmFnZS5zYXZlUHJvamVjdFRvTG9jYWxTdG9yYWdlKCk7XG4gIGRvbS5yZW5kZXJQcm9qZWN0cygpO1xufVxuXG5mdW5jdGlvbiBzcGxpY2VQcm9qZWN0TGlzdChpbmRleCkge1xuICBpZiAoaW5kZXggPiAtMSkge1xuICAgIHByb2plY3RMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gIH1cbiAgc3RvcmFnZS5zYXZlUHJvamVjdFRvTG9jYWxTdG9yYWdlKCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3RMaXN0KGluZGV4LCBsaXN0KSB7XG4gIHByb2plY3RMaXN0W2luZGV4XS50YXNrID0gbGlzdDtcbiAgc3RvcmFnZS5zYXZlUHJvamVjdFRvTG9jYWxTdG9yYWdlKCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRhc2tBcnJheShcbiAgcHJvamVjdEluZGV4LFxuICB0YXNrSW5kZXgsXG4gIG5ld05hbWUsXG4gIG5ld1ByaW9yaXR5LFxuICBuZXdEYXRlXG4pIHtcbiAgcHJvamVjdExpc3RbcHJvamVjdEluZGV4XS50YXNrW3Rhc2tJbmRleF0udGl0bGUgPSBuZXdOYW1lO1xuICBwcm9qZWN0TGlzdFtwcm9qZWN0SW5kZXhdLnRhc2tbdGFza0luZGV4XS5wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICBwcm9qZWN0TGlzdFtwcm9qZWN0SW5kZXhdLnRhc2tbdGFza0luZGV4XS5kdWVEYXRlID0gbmV3RGF0ZTtcbiAgc3RvcmFnZS5zYXZlUHJvamVjdFRvTG9jYWxTdG9yYWdlKCk7XG59XG5cbmV4cG9ydCB7XG4gIHByb2plY3RMaXN0LFxuICBDcmVhdGVQcm9qZWN0LFxuICBhZGRQcm9qZWN0LFxuICBzcGxpY2VQcm9qZWN0TGlzdCxcbiAgdXBkYXRlUHJvamVjdExpc3QsXG4gIGdldExvY2FsU3RvcmFnZSxcbiAgdXBkYXRlVGFza0FycmF5LFxufTtcbiIsImltcG9ydCAqIGFzIHByb2plY3QgZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuaW1wb3J0ICogYXMgdGFzayBmcm9tIFwiLi90YXNrcy5qc1wiO1xuaW1wb3J0ICogYXMgZG9tIGZyb20gXCIuL2RvbS5qc1wiO1xuXG4vL1N0ZXA0XG5mdW5jdGlvbiBzYXZlUHJvamVjdFRvTG9jYWxTdG9yYWdlKCkge1xuICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3QucHJvamVjdExpc3Q7XG4gIGNvbnN0IHByb2plY3RMaXN0SW5KU09OID0gSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RMaXN0XCIsIHByb2plY3RMaXN0SW5KU09OKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlVG9kbyhwcm9qZWN0SW5kZXgsIHRhc2tJbmRleCkge1xuICBsZXQgc3RvcmFnZVByb2plY3RMaXN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0TGlzdFwiKTtcbiAgbGV0IHN0b3JhZ2VQcm9qZWN0cyA9IEpTT04ucGFyc2Uoc3RvcmFnZVByb2plY3RMaXN0KTtcblxuICBzdG9yYWdlUHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuXG4gIGNvbnN0IGpzb25Qcm9qZWN0TGlzdCA9IHN0b3JhZ2VQcm9qZWN0cztcbiAgY29uc3QganNvblByb2plY3RzID0gSlNPTi5zdHJpbmdpZnkoanNvblByb2plY3RMaXN0KTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0TGlzdFwiLCBqc29uUHJvamVjdHMpO1xuXG4gIHRhc2sudGFza0xpc3Quc3BsaWNlKHRhc2tJbmRleCwgMSk7XG59XG5cbmZ1bmN0aW9uIGdldExvY2FsU3RvcmFnZSgpIHtcbiAgLy8gcmV0cmVpZXZlIGRhdGFcbiAgbGV0IHN0b3JhZ2VQcm9qZWN0TGlzdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdExpc3RcIik7XG4gIGxldCBzdG9yYWdlUHJvamVjdHMgPSBKU09OLnBhcnNlKHN0b3JhZ2VQcm9qZWN0TGlzdCk7XG4gIHJldHVybiBzdG9yYWdlUHJvamVjdHM7XG59XG5cbmV4cG9ydCB7IHNhdmVQcm9qZWN0VG9Mb2NhbFN0b3JhZ2UsIGRlbGV0ZVRvZG8sIGdldExvY2FsU3RvcmFnZSB9O1xuIiwiaW1wb3J0ICogYXMgZG9tIGZyb20gXCIuL2RvbS5qc1wiO1xuaW1wb3J0ICogYXMgcHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5cbmxldCB0YXNrTGlzdCA9IFtdO1xuXG5mdW5jdGlvbiBnZXRUYXNrRnJvbVByb2plY3QocHJvamVjdEluZGV4KSB7XG4gIGlmIChwcm9qZWN0LnByb2plY3RMaXN0W3Byb2plY3RJbmRleF0pIHtcbiAgICB0YXNrTGlzdCA9IHByb2plY3QucHJvamVjdExpc3RbcHJvamVjdEluZGV4XS50YXNrO1xuICB9IGVsc2Uge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5mdW5jdGlvbiBDcmVhdGVUYXNrKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eVNjYWxlLCBwcm9qZWN0SW5kZXgpIHtcbiAgbGV0IHByaW9yaXR5O1xuICBpZiAocHJpb3JpdHlTY2FsZSA9PT0gXCJoaWdoXCIpIHtcbiAgICBwcmlvcml0eSA9IFwi4p2X77iP4p2X77iPXCI7XG4gIH0gZWxzZSB7XG4gICAgcHJpb3JpdHkgPSBcIlwiO1xuICB9XG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgICBwcm9qZWN0SW5kZXgsXG4gIH07XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2sobmFtZSwgZHVlRGF0ZSwgcHJpb3JpdHlTY2FsZSwgcHJvamVjdEluZGV4KSB7XG4gIGNvbnN0IHRhc2sgPSBDcmVhdGVUYXNrKG5hbWUsIGR1ZURhdGUsIHByaW9yaXR5U2NhbGUsIHByb2plY3RJbmRleCk7XG4gIHRhc2tMaXN0LnB1c2godGFzayk7XG4gIHByb2plY3QudXBkYXRlUHJvamVjdExpc3QocHJvamVjdEluZGV4LCB0YXNrTGlzdCk7XG4gIGNvbnNvbGUubG9nKHRhc2tMaXN0KTtcbiAgZG9tLnJlbmRlclRvZG9MaXN0KHRhc2tMaXN0KTtcbn1cblxuZXhwb3J0IHsgdGFza0xpc3QsIGdldFRhc2tGcm9tUHJvamVjdCwgQ3JlYXRlVGFzaywgYWRkVGFzayB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgKiBhcyBkb20gZnJvbSBcIi4vbW9kdWxlcy9kb20uanNcIjtcbmltcG9ydCAqIGFzIHByb2plY3QgZnJvbSBcIi4vbW9kdWxlcy9wcm9qZWN0LmpzXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5wcm9qZWN0LmdldExvY2FsU3RvcmFnZSgpO1xuZG9tLnJlbmRlclByb2plY3RzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=