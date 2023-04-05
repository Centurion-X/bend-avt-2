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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/index.ts":
/*!*************************!*\
  !*** ./source/index.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst users_1 = __webpack_require__(/*! ./users */ \"./source/users.ts\");\nconst userInfo_1 = __webpack_require__(/*! ./userInfo */ \"./source/userInfo.ts\");\nfunction getUsersJobPositions(usersArray) {\n    let usersMergedArray = new Array;\n    usersArray.forEach(user => {\n        userInfo_1.usersInfoArray.filter(card => {\n            if (user.userid == card.userid) {\n                const userInfo = {\n                    name: user.name,\n                    age: card.age,\n                    gender: user.gender,\n                    position: card.organization.position\n                };\n                usersMergedArray.push(userInfo);\n            }\n        });\n    });\n    return usersMergedArray.reverse();\n}\nfunction renderUsers(usersArray) {\n    usersArray.forEach(user => {\n        const element = document.createElement('div');\n        element.classList.add('styles');\n        for (const [key, value] of Object.entries(user)) {\n            const span = document.createElement('span');\n            span.textContent = `${key}: ${value}`;\n            element.appendChild(span);\n        }\n        document.body.appendChild(element);\n    });\n}\nconst usersPositions = getUsersJobPositions(users_1.usersArray);\nrenderUsers(usersPositions);\nconsole.log('userPositions:', usersPositions);\n\n\n//# sourceURL=webpack:///./source/index.ts?");

/***/ }),

/***/ "./source/userInfo.ts":
/*!****************************!*\
  !*** ./source/userInfo.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.usersInfoArray = void 0;\nexports.usersInfoArray = [\n    {\n        userid: '127e4567-e89b-12d3-a458-426614174000',\n        name: 'John',\n        birthdate: '1982-02-17T21:00:00.000Z',\n        age: 40,\n        organization: {\n            name: 'Amazon',\n            position: 'General manager'\n        }\n    },\n    {\n        userid: '127e4567-e89a-12f3-a458-327395154000',\n        name: 'Anna',\n        birthdate: '1988-02-17T21:00:00.000Z',\n        age: 34,\n        organization: {\n            name: 'Amazon',\n            position: 'Manager'\n        }\n    }\n];\n\n\n//# sourceURL=webpack:///./source/userInfo.ts?");

/***/ }),

/***/ "./source/users.ts":
/*!*************************!*\
  !*** ./source/users.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.usersArray = void 0;\nexports.usersArray = [\n    {\n        userid: '127e4567-e89b-12d3-a458-426614174000',\n        name: 'John',\n        gender: 'man'\n    },\n    {\n        userid: '127e4567-e89a-12f3-a458-327395154000',\n        name: 'Anna',\n        gender: 'woman'\n    }\n];\n\n\n//# sourceURL=webpack:///./source/users.ts?");

/***/ })

/******/ });