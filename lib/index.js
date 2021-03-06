"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.key = exports.func = exports.arr = exports.obj = exports.R = void 0;
exports.R = require("ramda");
const funcs = require("./func");
const array = require("./array");
const ao = require("./ao");
const isWhat = require("./isWhat");
const string = require("./string");
const number = require("./number");
__exportStar(require("./func"), exports);
__exportStar(require("./array"), exports);
__exportStar(require("./ao"), exports);
__exportStar(require("./isWhat"), exports);
__exportStar(require("./string"), exports);
__exportStar(require("./number"), exports);
exports.obj = new Proxy({}, {
    set() {
        return false;
    }
});
exports.arr = new Proxy([], {
    set() {
        return false;
    }
});
function func(...rest) {
    return rest;
}
exports.func = func;
exports.key = Symbol('only key');
exports.default = {
    ...funcs,
    ...ao,
    ...array,
    ...string,
    ...number,
    ...isWhat,
    key: exports.key,
    obj: exports.obj,
    arr: exports.arr,
    func,
};
