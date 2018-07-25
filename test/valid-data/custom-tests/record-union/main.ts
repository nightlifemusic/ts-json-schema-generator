export interface abc {
    a: number;
    b: string;
    c: number;
}

export type SortDirection = 'ASC' | 'DESC';

export interface Blah {
    a: number;
    b:string;
    c: number;
    d: string;
}

export type abc_sort = Record<keyof abc, SortDirection>;

export interface sort_by {
    sort_by: abc_sort;
}

export interface MyObject extends sort_by {}