export declare abstract class BaseError implements Error {
    private callStack;
    constructor();
    readonly stack: string;
    abstract readonly name: string;
    abstract readonly message: string;
}
