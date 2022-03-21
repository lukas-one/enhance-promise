"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseDelay = exports.PromiseWrap = exports.PromiseChain = void 0;
function PromiseChain(promiseList) {
    return promiseList.reduce((prevPromise, nextPromise) => {
        return prevPromise.then((chainResults) => {
            return nextPromise().then((currentResult) => {
                return [...chainResults, currentResult];
            });
        });
    }, Promise.resolve([]));
}
exports.PromiseChain = PromiseChain;
function PromiseWrap(func) {
    return new Promise((resolve) => {
        func();
        resolve();
    });
}
exports.PromiseWrap = PromiseWrap;
function PromiseDelay(delayMs) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), delayMs);
    });
}
exports.PromiseDelay = PromiseDelay;
//# sourceMappingURL=enhance-promise.js.map