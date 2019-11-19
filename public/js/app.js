/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _route_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./route.js */ "./resources/js/route.js");
// require('./bootstrap');

/**
 * Parsing and Substantiation Object for paths
 * Object returns the path with the parameters by name
 * Arguments are the route "name" and its "parameter"
 */
 // import some module into script

/**
 * Json Object of all routes (completed after "php artisan route:json")
 */

var routes = __webpack_require__(/*! ./routes.json */ "./resources/js/routes.json"); // import the file content
// Check the Exception to be throwing on "fake" route name


console.log(Object(_route_js__WEBPACK_IMPORTED_MODULE_0__["default"])('fake', ['PARAM_FAKE'])); // Check GET with parameter

console.log(Object(_route_js__WEBPACK_IMPORTED_MODULE_0__["default"])('third', ['PARAM_GET'])); // Check POST with parameter

console.log(Object(_route_js__WEBPACK_IMPORTED_MODULE_0__["default"])('fourth', ['PARAM_POST'])); // Show the Json Object-list of all

console.log(routes);
/*

Object {
"": "api/user",
welcome: "/",
first: "first/path/method/get",
second: "second/path/method/post",
third: "third/path/{param?}/get/method",
fourth: "fourth/path/{param?}/post/method",
fifth: "fifth/form/{parameter?}" }

*/

/***/ }),

/***/ "./resources/js/route.js":
/*!*******************************!*\
  !*** ./resources/js/route.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var routes = __webpack_require__(/*! ./routes.json */ "./resources/js/routes.json");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  // Avoid the changing in the mutable object (deep copy)
  var args = Array.prototype.slice.call(arguments); // Get the first argument witch is the "route name"

  var param = args.shift(); // Throw an Exception to log on absent name, otherwise
  // Parse and substantiate params accordingly by "name"

  if (routes[param] === undefined) {
    console.log('Error ( there is not such a route )');
  } else {
    return '/' + routes[param].split('/').map(function (str) {
      if (str[0] === '{') {
        return args.shift();
      } else {
        return str;
      }
    }).join('/');
  }
});

/***/ }),

/***/ "./resources/js/routes.json":
/*!**********************************!*\
  !*** ./resources/js/routes.json ***!
  \**********************************/
/*! exports provided: , welcome, first, second, third, fourth, fifth, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"\":\"api/user\",\"welcome\":\"/\",\"first\":\"first/path/method/get\",\"second\":\"second/path/method/post\",\"third\":\"third/path/{param?}/get/method\",\"fourth\":\"fourth/path/{param?}/post/method\",\"fifth\":\"fifth/form/{parameter?}\"}");

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/lex/sites/vue/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /Users/lex/sites/vue/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });