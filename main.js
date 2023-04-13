/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init.js */ \"./src/init.js\");\n/* harmony import */ var _page_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page/home.js */ \"./src/page/home.js\");\n/* harmony import */ var _page_signature_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page/signature.js */ \"./src/page/signature.js\");\n/* harmony import */ var _page_contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/contact.js */ \"./src/page/contact.js\");\n\n\n\n\n\nconst clearContent = () => {\n    const elem = document.getElementById(\"section-content\");\n    elem.innerHTML = \"\";\n}\n\nconst loadPage = (page) => {\n    clearContent();\n    switch (page) {\n        case \"home\":\n            (0,_page_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n            break;\n        case \"signature\":\n            (0,_page_signature_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n            break;\n        case \"contact\":\n            (0,_page_contact_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n            break;\n        default:\n            (0,_page_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n            break;\n    }\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", () => { \n    ;(0,_init_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    loadPage();\n\n    document.getElementById(\"home-div\").addEventListener(\"click\", () => {\n        loadPage(\"home\");\n    })\n\n    document.getElementById(\"signature-div\").addEventListener(\"click\", () => {\n        loadPage(\"signature\");\n    })\n\n    document.getElementById(\"contact-div\").addEventListener(\"click\", () => {\n        loadPage(\"contact\");\n    })\n});\n\n//# sourceURL=webpack://odin-project-restaurant-webpack/./src/index.js?");

/***/ }),

/***/ "./src/init.js":
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n    const elem = document.getElementById(\"content\");\n    elem.innerHTML = `\n    <navbar>\n        <div id=\"home-div\">Home</div>\n        <div id=\"signature-div\">Signature Dish</div>\n        <div id=\"contact-div\">Contact and Location</div>\n    </navbar>\n    <section>\n        <div id=\"section-content\">\n        </div>\n    </section>\n    <footer>\n        Altesia cafeteria, a restaurant on a remote city, Altesia\n    </footer>\n    `;\n});\n\n//# sourceURL=webpack://odin-project-restaurant-webpack/./src/init.js?");

/***/ }),

/***/ "./src/page/contact.js":
/*!*****************************!*\
  !*** ./src/page/contact.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n    const elem = document.getElementById(\"section-content\");\n    elem.innerHTML = \n    `<div id=\"contact\">\n        <div class=\"header\">Contact Us</div>\n        <div class=\"paragraph\">\n            Behemoth<br />\n            0000 0000<br />\n            behemoth@altesiaCafeteria\n        </div>\n        <div class=\"paragraph\">\n            Beshemoth<br />\n            0000 1000<br />\n            beshemoth@altesiaCafeteria\n        </div>\n        <div class=\"paragraph\">\n            Bedemoth<br />\n            1000 0000<br />\n            bedemoth@altesiaCafeteria\n        </div>\n    </div>`\n});\n\n//# sourceURL=webpack://odin-project-restaurant-webpack/./src/page/contact.js?");

/***/ }),

/***/ "./src/page/home.js":
/*!**************************!*\
  !*** ./src/page/home.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n    const elem = document.getElementById(\"section-content\");\n    elem.innerHTML = \n    `<div id=\"home\">\n        <div class=\"header\">Altesia Cafeteria</div>\n        <div class=\"paragraph\">\n            Altesia Cafeteria is a restaurant offering the best seafood. It also boosts a very nice view of our beloved city.\n        </div>\n        <div class=\"paragraph\">\n            <div>Opening Hour</div>\n            <div>\n                <div>\n                    Weekdays: 12:00 - 22:00\n                </div>\n                <div>\n                    Weekends: 12:00 - 24:00\n                </div>\n            </div>\n        </div>\n        <div class=\"paragraph\">\n            <div>Location</div>\n            <div>183 Sea Avenue, Altesia</div>\n        </div>\n    </div>`\n});\n\n//# sourceURL=webpack://odin-project-restaurant-webpack/./src/page/home.js?");

/***/ }),

/***/ "./src/page/signature.js":
/*!*******************************!*\
  !*** ./src/page/signature.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n    const elem = document.getElementById(\"section-content\");\n    elem.innerHTML = \n    `<div id=\"signature\">\n        <div class=\"header\">Chef Recommendation</div>\n        <div class=\"paragraph\">\n            Behemoth spaghetti<br />\n            Using our own ingredients, the Behemoth spaghetti is our top dish. Receving many praises from different media. This is definitely a must try if you visit our cafeteria.\n        </div>\n        <div class=\"paragraph\">\n            Supreme Oil fish<br />\n            Filled with pure oil from the beyond, this is one of the rarest meal among the globe. You have not been to Altesia if you did not try it.\n        </div>\n    </div>`\n});\n\n//# sourceURL=webpack://odin-project-restaurant-webpack/./src/page/signature.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;