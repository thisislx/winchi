/// <reference types="ts-toolbelt" />
export * as R from 'ramda';
export declare type Key = string | number | symbol;
export declare type GetKey = void | Key | AF<[AO], any>;
export declare type AO = Record<Key, any>;
export declare type AF<params extends any[] = any[], result = any> = (...rest: params) => result;
export declare type ReturnParameters<T> = T extends (...args: infer P) => any ? P : any;
import * as funcs from './func';
export * from './func';
export * from './array';
export * from './ao';
export * from './isWhat';
export * from './string';
export * from './number';
export declare const obj: AO;
export declare const arr: any[];
export declare function func(...rest: any[]): any[];
export declare const key: unique symbol;
declare const _default: {
    key: symbol;
    obj: AO;
    arr: any[];
    func: typeof func;
    isObj: (o: any) => o is AO;
    isEmptyObj: (o: AO) => o is AO;
    isRichObj: (o: AO) => o is AO;
    isEmpty: (v: any) => boolean;
    computePercent: import("Function/Curry").Curry<(validBit: number, total: number, cur: number) => string>;
    polling: import("Function/Curry").Curry<(r1: number, r2: number, slide: number) => number>;
    mergeStr: import("Function/Curry").Curry<(split: string, rest: string[]) => string>;
    classifyAos: import("Function/Curry").Curry<(prop: AF<any[], any>, arr: AO[]) => AO>;
    flatArrayShallow: import("Function/Curry").Curry<(index: number | null | undefined, arr: any[]) => any>;
    propLength: AF<any[], any>;
    uniqueWith: import("Function/Curry").Curry<(choose: AF<any[], any>, prop_: string | AF<any[], any>, arr: any[]) => any[]>;
    uniqueLeft: import("Function/Curry").Curry<(prop_: string | AF<any[], any>, arr: any[]) => any[]>;
    uniqueRight: import("Function/Curry").Curry<(prop_: string | AF<any[], any>, arr: any[]) => any[]>;
    mergeArrayWith: import("Function/Curry").Curry<(choose: AF<any[], any>, prop_: string | AF<any[], any>, arr: any[]) => any>;
    mergeArrayLeft: import("Function/Curry").Curry<(prop_: string | AF<any[], any>, arr: any[]) => any>;
    mergeArrayRight: import("Function/Curry").Curry<(prop_: string | AF<any[], any>, arr: any[]) => any>;
    prop: import("Function/Curry").Curry<(key: GetKey, o: AO) => any>;
    deepProp: import("Function/Curry").Curry<(keys: GetKey[], o: AO) => AO>;
    rename: import("Function/Curry").Curry<(key: any, renameKey: any, obj: any) => any>;
    objToArr: (obj: Record<number, any>) => any[];
    mergeDeepWith: import("Function/Curry").Curry<(f: AF<any[], any>, o1: AO, o2: AO) => any[] | {
        [x: string]: any;
        [x: number]: any;
    }>;
    mergeLeft: import("Function/Curry").Curry<(o1: AO, o2: AO) => any[] | {
        [x: string]: any;
        [x: number]: any;
    }>;
    mergeDeepLeft: import("Function/Curry").Curry<(o1: AO, o2: AO) => any[] | {
        [x: string]: any;
        [x: number]: any;
    }>;
    mergeRight: import("Function/Curry").Curry<(o1: AO, o2: AO) => any[] | {
        [x: string]: any;
        [x: number]: any;
    }>;
    mergeDeepRight: import("Function/Curry").Curry<(o1: AO, o2: AO) => any[] | {
        [x: string]: any;
        [x: number]: any;
    }>;
    alt: (f1: AF<any[], any>, f2: AF<any[], any>) => (val?: any) => any;
    and: (f1: AF<any[], any>, f2: AF<any[], any>) => (val?: any) => any;
    sep: (...fns: AF<any[], any>[]) => (...rest: any[]) => any;
    fork: (join: AF<any[], any>, f1: AF<any[], any>, f2: AF<any[], any>) => (v: any) => any;
    identify: AF<any[], any>;
    curryLazy: (x0: any) => import("Function/Curry").Curry<any>;
    asyncCompose: <D = any>(...fns: AF<any[], any>[]) => funcs.AsyncComposeReturn<D>;
    lockWrap: <F extends AF<any[], Promise<any>>>(fn: F) => (...rest: ReturnParameters<F>) => Promise<ReturnType<F> extends any ? ReturnType<F> : Promise<ReturnType<F>>>;
    callLock: <F_1 extends AF<any[], any>>(fn: F_1) => (...rest: ReturnParameters<F_1>) => ReturnType<F_1>;
    messageComposeMethod: import("Function/Curry").Curry<(compose: AF<any[], any>, record: Record<string, any>, target: any[] | AO) => Record<string, any>>;
    debouncePromise: (rejectValue?: any) => (promise: Promise<any>) => Promise<any>;
};
export default _default;
