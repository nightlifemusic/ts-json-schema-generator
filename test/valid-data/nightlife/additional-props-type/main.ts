export type sometype = any;

export interface MyObject extends StringMap<sometype> {
    param: string
}

export interface StringMap<T> {
    [key: string]: T
}
