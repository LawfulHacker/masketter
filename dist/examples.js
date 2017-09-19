(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("moment"));
	else if(typeof define === 'function' && define.amd)
		define(["moment"], factory);
	else if(typeof exports === 'object')
		exports["examples"] = factory(require("moment"));
	else
		root["examples"] = factory(root["moment"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = __webpack_require__(2);
var InvalidInputError_1 = __webpack_require__(1);
var TokenHandler_1 = __webpack_require__(3);
var MomentTokenHandler = /** @class */ (function (_super) {
    __extends(MomentTokenHandler, _super);
    function MomentTokenHandler(format, moment) {
        var _this = _super.call(this) || this;
        _this.format = format;
        _this.moment = moment;
        if (moment.isValid()) {
            _this.value = _this.moment.format(_this.format);
            _this.isCompleted = true;
        }
        else {
            _this.moment = moment_1.utc(0);
        }
        return _this;
    }
    MomentTokenHandler.prototype.handleBackspace = function () {
        this.isCompleted = false;
        if (this.value === "") {
            throw new InvalidInputError_1.default();
        }
        this.value = this.value.substr(0, this.value.length - 1);
    };
    return MomentTokenHandler;
}(TokenHandler_1.default));
exports.default = MomentTokenHandler;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var InvalidInputError = /** @class */ (function (_super) {
    __extends(InvalidInputError, _super);
    function InvalidInputError() {
        return _super.call(this, "Invalid Input") || this;
    }
    return InvalidInputError;
}(Error));
exports.default = InvalidInputError;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TokenHandler = /** @class */ (function () {
    function TokenHandler() {
        this.value = "";
        this.isCompleted = false;
    }
    TokenHandler.prototype.handleBackspace = function () {
        // implemented by child classes
    };
    TokenHandler.prototype.handleInput = function (input) {
        // implemented by child classes
    };
    TokenHandler.prototype.reset = function () {
        this.value = "";
        this.isCompleted = false;
    };
    return TokenHandler;
}());
exports.default = TokenHandler;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function qs(selector, scope) {
    return (scope || document).querySelector(selector);
}
exports.qs = qs;
function create(parent, tagName, options) {
    var el = document.createElement(tagName);
    if (parent) {
        parent.appendChild(el);
    }
    if (options) {
        for (var option in options) {
            if (options.hasOwnProperty(option)) {
                el[option] = options[option];
            }
        }
    }
    return el;
}
exports.create = create;
function on(element, event, handler) {
    element.addEventListener(event, handler);
}
exports.on = on;
function off(element, event, handler) {
    element.removeEventListener(event, handler);
}
exports.off = off;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils = __webpack_require__(4);
var MomentInputState_1 = __webpack_require__(6);
var Masketter = /** @class */ (function () {
    function Masketter(input, mask) {
        var _this = this;
        this.input = input;
        this.mask = mask;
        this.input.classList.add("masketter");
        this.inputState = new MomentInputState_1.default(this.mask, input.value);
        var keyDownEventListener = {
            handleEvent: function (event) {
                if (_this.inputState.onKeyDown(event.key)) {
                    input.value = _this.inputState.value;
                    event.preventDefault();
                }
            }
        };
        var keyPressEventListener = {
            handleEvent: function (event) {
                if (_this.inputState.onKeyPress(event.key)) {
                    input.value = _this.inputState.value;
                    event.preventDefault();
                }
            }
        };
        var keyUpEventListener = {
            handleEvent: function (event) {
                if (_this.inputState.onKeyUp(event.key)) {
                    input.value = _this.inputState.value;
                    event.preventDefault();
                }
            }
        };
        var focusEventListener = {
            handleEvent: function (event) {
                if (_this.inputState.onFocus()) {
                    input.value = _this.inputState.value;
                    event.preventDefault();
                }
            }
        };
        var blurEventListener = {
            handleEvent: function (event) {
                if (!_this.calendarOpen) {
                    if (_this.inputState.onBlur()) {
                        input.value = _this.inputState.value;
                        event.preventDefault();
                    }
                }
            }
        };
        utils.on(input, "keydown", keyDownEventListener);
        utils.on(input, "keypress", keyPressEventListener);
        utils.on(input, "keyup", keyUpEventListener);
        utils.on(input, "focus", focusEventListener);
        utils.on(input, "blur", blurEventListener);
    }
    Object.defineProperty(Masketter.prototype, "caretPosition", {
        get: function () {
            if (this.input.selectionStart !== this.input.selectionEnd) {
                return 0;
            }
            return this.input.selectionStart;
        },
        set: function (position) {
            this.input.selectionStart = position;
            this.input.selectionEnd = position;
        },
        enumerable: true,
        configurable: true
    });
    return Masketter;
}());
exports.default = Masketter;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var moment = __webpack_require__(2);
var YearTokenHandler_1 = __webpack_require__(7);
var MonthTokenHandler_1 = __webpack_require__(8);
var DayTokenHandler_1 = __webpack_require__(9);
var HourTokenHandler_1 = __webpack_require__(10);
var MinuteTokenHandler_1 = __webpack_require__(11);
var SecondTokenHandler_1 = __webpack_require__(12);
var AmPmTokenHandler_1 = __webpack_require__(13);
var SeparatorTokenHandler_1 = __webpack_require__(14);
var InputState_1 = __webpack_require__(15);
var MomentInputState = /** @class */ (function (_super) {
    __extends(MomentInputState, _super);
    function MomentInputState(mask, value) {
        var _this = _super.call(this, mask, value) || this;
        _this._moment = moment(value, mask);
        _this.tokenHandlers = [];
        _this.tokenIndex = 0;
        _this.parseMask();
        _this.refreshValue();
        return _this;
    }
    Object.defineProperty(MomentInputState.prototype, "moment", {
        get: function () {
            return this._moment;
        },
        enumerable: true,
        configurable: true
    });
    MomentInputState.prototype.onBlur = function () {
        if (this._value !== moment(this._value, this.mask).format(this.mask)) {
            this._value = this._oldValue;
        }
        return true;
    };
    MomentInputState.prototype.onFocus = function () {
        this._oldValue = this._value;
        return true;
    };
    MomentInputState.prototype.onKeyDown = function (key) {
        var handler = this.tokenHandlers[this.tokenIndex];
        if (key === "Backspace") {
            do {
                try {
                    handler.handleBackspace();
                    break;
                }
                catch (e) {
                    handler = this.tokenHandlers[--this.tokenIndex];
                    if (this.tokenIndex < 0) {
                        this.tokenIndex = 0;
                        break;
                    }
                }
            } while (true);
            this.refreshValue();
            return true;
        }
        return false;
    };
    MomentInputState.prototype.onKeyPress = function (key) {
        var handler;
        if (/[0-9APM\\: ]/i.test(key)) {
            do {
                handler = this.tokenHandlers[this.tokenIndex];
                if (!handler.isCompleted) {
                    handler.handleInput(key);
                    break;
                }
            } while (handler.isCompleted && ++this.tokenIndex < this.tokenHandlers.length);
            if (this.tokenIndex >= this.tokenHandlers.length) {
                this.tokenIndex = this.tokenHandlers.length - 1;
            }
        }
        this.refreshValue();
        return true;
    };
    MomentInputState.prototype.refreshValue = function () {
        var inputValue = "";
        for (var _i = 0, _a = this.tokenHandlers; _i < _a.length; _i++) {
            var h = _a[_i];
            inputValue += h.value;
            if (!h.isCompleted) {
                break;
            }
        }
        this._value = inputValue;
    };
    MomentInputState.prototype.parseMask = function () {
        var exp = /(YYYY|YY|MM?|DD?|HH?|hh?|mm|ss|A|.)/g;
        var match;
        while (true) {
            match = exp.exec(this.mask);
            if (!match) {
                break;
            }
            switch (match[0]) {
                case "YY":
                case "YYYY":
                    this.tokenHandlers.push(new YearTokenHandler_1.default(match[0], this._moment));
                    break;
                case "M":
                case "MM":
                    this.tokenHandlers.push(new MonthTokenHandler_1.default(match[0], this._moment));
                    break;
                case "D":
                case "DD":
                    this.tokenHandlers.push(new DayTokenHandler_1.default(match[0], this._moment));
                    break;
                case "h":
                case "hh":
                case "H":
                case "HH":
                    this.tokenHandlers.push(new HourTokenHandler_1.default(match[0], this._moment));
                    break;
                case "m":
                case "mm":
                    this.tokenHandlers.push(new MinuteTokenHandler_1.default(match[0], this._moment));
                    break;
                case "s":
                case "ss":
                    this.tokenHandlers.push(new SecondTokenHandler_1.default(match[0], this._moment));
                    break;
                case "a":
                case "A":
                    this.tokenHandlers.push(new AmPmTokenHandler_1.default(match[0], this._moment));
                    break;
                default:
                    this.tokenHandlers.push(new SeparatorTokenHandler_1.default(match[0]));
                    break;
            }
            if (this._moment.isValid()) {
                this.tokenIndex++;
            }
        }
    };
    return MomentInputState;
}(InputState_1.default));
exports.default = MomentInputState;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var moment = __webpack_require__(2);
var MomentTokenHandler_1 = __webpack_require__(0);
var InvalidInputError_1 = __webpack_require__(1);
var YearTokenHandler = /** @class */ (function (_super) {
    __extends(YearTokenHandler, _super);
    function YearTokenHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    YearTokenHandler.prototype.handleInput = function (input) {
        var n = Number(input);
        if (n === Number.NaN) {
            throw new InvalidInputError_1.default();
        }
        this.value += input;
        this.isCompleted = this.value.length === this.format.length;
        if (this.isCompleted) {
            this.moment.year(moment(this.value, this.format).year());
            this.value = this.moment.format(this.format);
        }
    };
    return YearTokenHandler;
}(MomentTokenHandler_1.default));
exports.default = YearTokenHandler;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var MomentTokenHandler_1 = __webpack_require__(0);
var InvalidInputError_1 = __webpack_require__(1);
var MonthTokenHandler = /** @class */ (function (_super) {
    __extends(MonthTokenHandler, _super);
    function MonthTokenHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MonthTokenHandler.prototype.handleInput = function (input) {
        var month = this.moment.month() + 1;
        var n = Number(input);
        if (n === Number.NaN) {
            throw new InvalidInputError_1.default();
        }
        if (this.value === "") {
            this.moment.month(n - 1);
            if (n > 1) {
                this.isCompleted = true;
            }
        }
        else {
            this.moment.month(month * 10 + n - 1);
            this.isCompleted = true;
        }
        if (this.isCompleted) {
            this.value = this.moment.format(this.format);
        }
        else {
            this.value += input;
        }
    };
    return MonthTokenHandler;
}(MomentTokenHandler_1.default));
exports.default = MonthTokenHandler;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var MomentTokenHandler_1 = __webpack_require__(0);
var InvalidInputError_1 = __webpack_require__(1);
var DayTokenHandler = /** @class */ (function (_super) {
    __extends(DayTokenHandler, _super);
    function DayTokenHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DayTokenHandler.prototype.handleInput = function (input) {
        var day = this.value === "" ? 0 : Number(this.value);
        var n = Number(input);
        if (n === Number.NaN) {
            throw new InvalidInputError_1.default();
        }
        if (day === 0) {
            this.moment.date(n);
            if (n > 3) {
                this.isCompleted = true;
            }
        }
        else {
            this.moment.date(day * 10 + n);
            this.isCompleted = true;
        }
        if (this.isCompleted) {
            this.value = this.moment.format(this.format);
        }
        else {
            this.value += input;
        }
    };
    return DayTokenHandler;
}(MomentTokenHandler_1.default));
exports.default = DayTokenHandler;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var MomentTokenHandler_1 = __webpack_require__(0);
var HourTokenHandler = /** @class */ (function (_super) {
    __extends(HourTokenHandler, _super);
    function HourTokenHandler(format, moment) {
        var _this = _super.call(this, format, moment) || this;
        _this.is24format = _this.format[0] === "H";
        return _this;
    }
    HourTokenHandler.prototype.handleInput = function (input) {
        var hour = this.value === "" ? 0 : Number(this.value);
        var n = Number(input);
        if (this.value === "") {
            this.moment.hour(n);
            if (n > (this.is24format ? 2 : 1)) {
                this.isCompleted = true;
            }
        }
        else {
            this.moment.hour(hour * 10 + n);
            this.isCompleted = true;
        }
        if (this.isCompleted) {
            this.value = this.moment.format(this.format);
        }
        else {
            this.value += input;
        }
    };
    return HourTokenHandler;
}(MomentTokenHandler_1.default));
exports.default = HourTokenHandler;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var MomentTokenHandler_1 = __webpack_require__(0);
var InvalidInputError_1 = __webpack_require__(1);
var MinuteTokenHandler = /** @class */ (function (_super) {
    __extends(MinuteTokenHandler, _super);
    function MinuteTokenHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MinuteTokenHandler.prototype.handleInput = function (input) {
        var minute = this.moment.minute();
        var n = Number(input);
        if (n === Number.NaN) {
            throw new InvalidInputError_1.default();
        }
        if (this.value === "") {
            this.moment.minute(n);
            if (n > 5) {
                this.isCompleted = true;
            }
        }
        else {
            this.moment.minute(minute * 10 + n);
            this.isCompleted = true;
        }
        if (this.isCompleted) {
            this.value = this.moment.format(this.format);
        }
        else {
            this.value += input;
        }
    };
    return MinuteTokenHandler;
}(MomentTokenHandler_1.default));
exports.default = MinuteTokenHandler;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var MomentTokenHandler_1 = __webpack_require__(0);
var InvalidInputError_1 = __webpack_require__(1);
var SecondTokenHandler = /** @class */ (function (_super) {
    __extends(SecondTokenHandler, _super);
    function SecondTokenHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecondTokenHandler.prototype.handleInput = function (input) {
        var second = this.moment.second();
        var n = Number(input);
        if (n === Number.NaN) {
            throw new InvalidInputError_1.default();
        }
        if (this.value === "") {
            this.moment.second(n);
            if (n > 5) {
                this.isCompleted = true;
            }
        }
        else {
            this.moment.second(second * 10 + n);
            this.isCompleted = true;
        }
        if (this.isCompleted) {
            this.value = this.moment.format(this.format);
        }
        else {
            this.value += input;
        }
    };
    return SecondTokenHandler;
}(MomentTokenHandler_1.default));
exports.default = SecondTokenHandler;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var MomentTokenHandler_1 = __webpack_require__(0);
var AmPmTokenHandler = /** @class */ (function (_super) {
    __extends(AmPmTokenHandler, _super);
    function AmPmTokenHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AmPmTokenHandler.prototype.handleInput = function (input) {
        if (input.toUpperCase() === "A" || input.toUpperCase() === "P") {
            this.isCompleted = true;
            this.value = input.toUpperCase() + "M";
        }
    };
    return AmPmTokenHandler;
}(MomentTokenHandler_1.default));
exports.default = AmPmTokenHandler;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var TokenHandler_1 = __webpack_require__(3);
var InvalidInputError_1 = __webpack_require__(1);
var SeparatorTokenHandler = /** @class */ (function (_super) {
    __extends(SeparatorTokenHandler, _super);
    function SeparatorTokenHandler(format) {
        var _this = _super.call(this) || this;
        _this.isCompleted = true;
        _this.value = format;
        return _this;
    }
    SeparatorTokenHandler.prototype.handleBackspace = function () {
        throw new InvalidInputError_1.default();
    };
    SeparatorTokenHandler.prototype.handleInput = function (input) {
        throw new InvalidInputError_1.default();
    };
    SeparatorTokenHandler.prototype.reset = function () {
        // do nothing
    };
    return SeparatorTokenHandler;
}(TokenHandler_1.default));
exports.default = SeparatorTokenHandler;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InputState = /** @class */ (function () {
    function InputState(mask, value) {
        this.mask = mask;
        this._value = value;
        this._oldValue = "";
    }
    Object.defineProperty(InputState.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    InputState.prototype.onFocus = function () {
        this._oldValue = this._value;
        return true;
    };
    InputState.prototype.onBlur = function () {
        this._value = this._oldValue;
        return true;
    };
    InputState.prototype.onKeyDown = function (key) {
        return true;
    };
    InputState.prototype.onKeyPress = function (key) {
        return true;
    };
    InputState.prototype.onKeyUp = function (key) {
        return true;
    };
    return InputState;
}());
exports.default = InputState;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(5);
var utils = __webpack_require__(4);
function addInput(mask, placeholder, initialValue) {
    if (initialValue === void 0) { initialValue = ""; }
    var input = utils.create(null, "input", {
        type: "text",
        placeholder: placeholder,
        value: initialValue
    });
    var mask1 = new index_1.default(input, mask);
    document.body.appendChild(input);
    document.body.appendChild(utils.create(null, "span", { textContent: mask }));
    document.body.appendChild(utils.create(null, "br", null));
}
addInput("HH:mm:ss", "00:00:00");
addInput("H:mm:ss", "0:00:00");
addInput("hh:mm:ss A", "00:00:00 AM");
addInput("h:mm:ss A", "0:00:00 AM");
addInput("DD/MM/YYYY", "DD/MM/YYYY");
addInput("DD/MM/YY", "DD/MM/YY");
addInput("MM/DD/YYYY", "MM/DD/YYYY");
addInput("MM/DD/YY", "MM/DD/YY");
addInput("HH:mm:ss", "00:00:00", "21:12:17");
addInput("H:mm:ss", "0:00:00", "21:12:17");
addInput("hh:mm:ss A", "00:00:00 AM", "11:12:17 PM");
addInput("h:mm:ss A", "0:00:00 AM", "1:12:17 AM");
addInput("DD/MM/YYYY", "DD/MM/YYYY", "13/09/1984");
addInput("DD/MM/YY", "DD/MM/YY", "13/09/84");
addInput("MM/DD/YYYY", "MM/DD/YYYY", "09/09/1984");
addInput("MM/DD/YY", "MM/DD/YY", "09/13/84");


/***/ })
/******/ ]);
});
//# sourceMappingURL=examples.js.map