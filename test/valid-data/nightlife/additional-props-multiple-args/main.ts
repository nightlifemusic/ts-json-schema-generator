export interface MyObject extends StringMap<{}, string> {
    param: string
}

export interface StringMap<T, R> {
    [key: string]: T | R
}
