export declare function PromiseChain(promiseList: Array<() => Promise<any>>): Promise<any>;
export declare function PromiseWrap<T>(func: () => T): Promise<T>;
export declare function PromiseDelay<T>(delayMs: number): Promise<T>;
