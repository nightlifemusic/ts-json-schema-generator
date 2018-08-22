import { OneOfKeyValueify } from "@nightlife/nl-shared-types/helpers";

export type MyObject =
    OneOfKeyValueify<TestType>


export type TestType = a & b;


export interface a {
    prop1: string
}

export interface b {
    prop2: string
}

