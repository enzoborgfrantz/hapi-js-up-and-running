(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__server__ = __webpack_require__(8);


__WEBPACK_IMPORTED_MODULE_0__server__["a" /* startServer */]();


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("hapi");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);


const userSchema = __WEBPACK_IMPORTED_MODULE_0_mongoose__["Schema"]({
  username: String,
  password: String,
});

const User = __WEBPACK_IMPORTED_MODULE_0_mongoose__["model"]('User', userSchema, 'users'); // model name, schema, collection




/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return connectToDatabase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);


const LOCAL_DB_URL = 'mongodb://localhost/local';

const connectToDatabase = () => {
  __WEBPACK_IMPORTED_MODULE_0_mongoose__["connect"](LOCAL_DB_URL);
  __WEBPACK_IMPORTED_MODULE_0_mongoose__["connection"].on('error', () => console.log('connection error'));
  __WEBPACK_IMPORTED_MODULE_0_mongoose__["connection"].once('open', () => console.log('connected to db'));
}




/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return startServer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hapi__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hapi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hapi__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user_model__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__database__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controllers_user_controller__ = __webpack_require__(9);





const startServer = () => {
  __WEBPACK_IMPORTED_MODULE_2__database__["a" /* connectToDatabase */]();

  const server = new __WEBPACK_IMPORTED_MODULE_0_hapi__["Server"]();

  server.connection({
    host: 'localhost',
    port: 8010
  });

  // create
  server.route({
    method: 'GET',
    path: '/users/new',
    handler: __WEBPACK_IMPORTED_MODULE_3__controllers_user_controller__["a" /* createUser */],
  })

  // read
  server.route({
    method: 'GET',
    path: '/users/{username}',
    handler: __WEBPACK_IMPORTED_MODULE_3__controllers_user_controller__["b" /* getUser */],
  });

  // update

  // delete

  // list
  server.route({
    method: 'GET',
    path: '/users',
    handler: __WEBPACK_IMPORTED_MODULE_3__controllers_user_controller__["c" /* getUsers */],
  });

  server.start(() => console.log(`server running at ${server.info.uri}`));
}




/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getUsers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_user_model__ = __webpack_require__(6);


// create
const createUser = (request, reply) => {
  const newUser = __WEBPACK_IMPORTED_MODULE_0__models_user_model__["a" /* User */]({ username: 'james', password: '666' });
  newUser.save((error, newUser ) => {
    if(error) {
      console.log(error);
    }
    reply(`Saved: ${newUser}`);
  })
}

// read
const getUser = (request, reply) => {
  __WEBPACK_IMPORTED_MODULE_0__models_user_model__["a" /* User */].find({'username' : request.params.username },(error, docs) => {
    if(error) {
      console.log('error bruh: ');
    }
    reply(docs.length ? docs : `User ${request.params.username} not found`);
  })
}

// update

// delete

// list
const getUsers = (request, reply) => {
  __WEBPACK_IMPORTED_MODULE_0__models_user_model__["a" /* User */].find((error, docs) => {
    if(error) {
      console.log('error m8:', docs);
    }
    reply(docs);
  });
}




/***/ })
/******/ ])));