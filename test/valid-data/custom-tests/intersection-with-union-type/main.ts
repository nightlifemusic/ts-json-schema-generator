export interface a {
    a: string;
}

export interface b {
    b: string;
}

export interface c {
    c: string;
}

export type MyType = (c | b) & a;