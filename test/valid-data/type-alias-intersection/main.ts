export interface IExtend {
    base: string;
}

export interface Test extends IExtend {
    variable: keyof keyofValues;
}
export interface Test2 extends cExtension {
    variable: string;
}

export type MyType = Test & Test2;

export interface keyofValues {
    v1: string,
    v2: string
}

export interface cExtension {
    prop1: string,
    prop2: string
}