"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debouncePromise = exports.messageComposeMethod = exports.callLock = exports.lockWrap = exports.asyncCompose = exports.curryLazy = exports.identify = exports.fork = exports.sep = exports.and = exports.alt = void 0;
const R = require("ramda");
const LOCKET = Symbol('locking');
const alt = (f1, f2) => (val) => f1(val) || f2(val);
exports.alt = alt;
const and = (f1, f2) => (val) => f1(val) && f2(val);
exports.and = and;
const sep = (...fns) => (...rest) => {
    fns.forEach(fn => fn(...rest));
    return rest.length === 1 ? rest[0] : rest;
};
exports.sep = sep;
const fork = (join, f1, f2) => v => join(f1(v), f2(v));
exports.fork = fork;
const identify = v => () => v;
exports.identify = identify;
exports.curryLazy = R.compose(R.curry, fn => new Proxy(fn, {
    apply(target, thisArg, args) {
        return (...rest) => target(...args, ...rest);
    }
}));
const asyncCompose = (...fns) => {
    const errCallbacks = [];
    const f = async (data) => {
        try {
            let result = data;
            for (let k = fns.length - 1; k >= 0; k--) {
                result = await fns[k](result);
            }
            return result;
        }
        catch (e) {
            const reject = errCallbacks.reduce((promise, cb) => promise.catch(cb), Promise.reject(e));
            const d = await reject;
            return d == undefined ? Promise.reject(d) : d;
        }
    };
    f.catch = (cb) => {
        errCallbacks.push(cb);
        return f;
    };
    return f;
};
exports.asyncCompose = asyncCompose;
const lockWrap = (fn) => async function lockFn_(...rest) {
    lockFn_[LOCKET] = true;
    try {
        const d = await fn(...rest);
        return d;
    }
    catch (e) {
        console.error(`lockWrap.${fn.name}`, e);
        return Promise.reject(e);
    }
    finally {
        lockFn_[LOCKET] = false;
    }
};
exports.lockWrap = lockWrap;
const callLock = (fn) => (...rest) => {
    const isLocket = fn[LOCKET];
    return isLocket ? Promise.reject(`callLock.${fn.name}: ???????????????????????????`) : fn(...rest);
};
exports.callLock = callLock;
exports.messageComposeMethod = R.curry((compose, record, target) => R.mapObjIndexed((v, k) => record[k] ? compose(record[k], v) : v, target));
const debouncePromise = (rejectValue) => {
    const queue = [];
    return (promise) => {
        const lastReject = queue[queue.length - 1];
        lastReject?.(rejectValue);
        return Promise.race([
            promise.then(d => {
                queue.splice(0, queue.length);
                return d;
            }),
            new Promise((_, reject) => queue.push(reject))
        ]);
    };
};
exports.debouncePromise = debouncePromise;
