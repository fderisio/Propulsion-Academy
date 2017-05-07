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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pacman = __webpack_require__(2);

var _pacman2 = _interopRequireDefault(_pacman);

var _wall = __webpack_require__(3);

var _wall2 = _interopRequireDefault(_wall);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
	function Game() {
		_classCallCheck(this, Game);

		this.canvas = document.getElementById('canvas');
		this.ctx = canvas.getContext('2d');
		this.pacman = new _pacman2.default();
		this.wall = new _wall2.default([220, 0], [220, 200]);
		//this.wall2 = new Wall([220,0], [220,200]);
	}

	_createClass(Game, [{
		key: 'resetCanvas',
		value: function resetCanvas() {
			this.ctx.fillStyle = 'black';
			this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height); //fillrect(x, y, width, height);
			// // draws line
			// this.ctx.beginPath();
			// this.ctx.strokeStyle = 'white', '#116';
			// this.ctx.moveTo(220, 0); // (x, y)
			// this.ctx.lineTo(220, 200); // [x, y]
			// this.ctx.stroke();
		}
	}, {
		key: 'listeners',
		value: function listeners() {
			var _this = this;

			// Keys pressed
			document.addEventListener('keydown', function (event) {
				// => except of using bind(this)
				if (event.keyCode === 39) {
					_this.pacman.rightPressed = true;
				} else if (event.keyCode === 37) {
					_this.pacman.leftPressed = true;
				} else if (event.keyCode === 38) {
					_this.pacman.upPressed = true;
				} else if (event.keyCode === 40) {
					_this.pacman.downPressed = true;
				} else if (event.keyCode === 32) {
					_this.pacman.pause = true;
				}
			});

			document.addEventListener('keyup', function (event) {
				if (event.keyCode === 39) {
					_this.pacman.rightPressed = false;
				} else if (event.keyCode === 37) {
					_this.pacman.leftPressed = false;
				} else if (event.keyCode === 38) {
					_this.pacman.upPressed = false;
				} else if (event.keyCode === 40) {
					_this.pacman.downPressed = false;
				} else if (event.keyCode === 32) {
					_this.pacman.pause = false;
				}
			});
		}
	}, {
		key: 'play',
		value: function play() {
			var _this2 = this;

			var id = setInterval(function () {
				this.resetCanvas();
				this.wall.renderWall(this.ctx);
				this.listeners();
				this.pacman.renderPacman(this.ctx);
				this.pacman.move();
				this.pacman.collidesWall(this.wall);
			}.bind(this), 5);

			setInterval(function () {
				// ()=> = function sin parametros
				_this2.pacman.openedMouth = !_this2.pacman.openedMouth;
			}, 80);
		}
	}]);

	return Game;
}();

exports.default = Game;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(0);

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var game = new _game2.default();
game.play();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pacman = function () {
	function Pacman() {
		_classCallCheck(this, Pacman);

		this.position = [245, 385]; // [x, y]
		this.direction = [1, -1]; // [x, y]
		this.radius = 10;
		this.rightPressed = false;
		this.leftPressed = false;
		this.upPressed = false;
		this.downPressed = false;
		this.spacePressed = false;
		this.openedMouth = true;
	}

	_createClass(Pacman, [{
		key: "openMouth",
		value: function openMouth(ctx) {
			ctx.beginPath();
			ctx.arc(this.position[0], this.position[1], this.radius, 0.25 * Math.PI, 1.25 * Math.PI, false);
			ctx.fillStyle = "rgb(255, 255, 0)";
			ctx.fill();
			ctx.beginPath();
			ctx.arc(this.position[0], this.position[1], this.radius, 0.75 * Math.PI, 1.75 * Math.PI, false);
			ctx.fill();
			// ctx.beginPa1th();
			// ctx.arc(this.position[0]-5, this.position[1]-3, 3, 0, 2 * Math.PI, false);
			// ctx.fillStyle = "rgb(0, 0, 0)";
			// ctx.fill();
		}
	}, {
		key: "closMouth",
		value: function closMouth(ctx) {
			ctx.beginPath();
			ctx.fillStyle = "rgb(255, 255, 0)";
			ctx.arc(this.position[0], this.position[1], this.radius, 0, 2 * Math.PI, false);
			ctx.fill();
			// ctx.beginPath();
			// ctx.arc(this.position[0]-5, this.position[1]-3, 3, 0, 2 * Math.PI, false);
			// ctx.fillStyle = "rgb(0, 0, 0)";
			// ctx.fill();
		}
	}, {
		key: "renderPacman",
		value: function renderPacman(ctx) {
			if (this.openedMouth) {
				this.openMouth(ctx);
			} else {
				this.closMouth(ctx);
			}
		}
	}, {
		key: "move",
		value: function move() {
			// moves the pacman
			if (this.rightPressed && this.position[0] < 550 - this.radius) {
				this.position[0] += 3;
			} else if (this.leftPressed && this.position[0] > 0 + this.radius) {
				this.position[0] -= 3;
			} else if (this.upPressed && this.position[1] > 0 + this.radius) {
				this.position[1] -= 3;
			} else if (this.downPressed && this.position[1] < 400 - this.radius) {
				this.position[1] += 3;
			}
		}
	}, {
		key: "collidesWall",
		value: function collidesWall(wall) {
			if (this.position[0] < wall.wallStarts[0]) {
				console.log('hola');
				this.position[0] = this.position[0];
			}
		}
	}]);

	return Pacman;
}();

exports.default = Pacman;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Wall = function () {
	function Wall(wallStarts, wallEnds /*width, height*/) {
		_classCallCheck(this, Wall);

		this.wallStarts = wallStarts;
		this.wallEnds = wallEnds;
		// this.width = width;
		// this.height = height;	
	}

	_createClass(Wall, [{
		key: 'renderWall',
		value: function renderWall(ctx) {
			// ctx.fillStyle = 'grey';
			// ctx.fillRect(this.position[0], this.position[1], this.width, this.height); //fillrect(x, y, width, height);

			// draws line
			ctx.beginPath();
			ctx.strokeStyle = 'white';
			ctx.moveTo(this.wallStarts[0], this.wallStarts[1]); // (x, y)
			ctx.lineTo(this.wallEnds[0], this.wallEnds[1]); // [x, y]
			ctx.stroke();
		}
	}]);

	return Wall;
}();

exports.default = Wall;

/***/ })
/******/ ]);