import { OneOfKeyValueify } from "@nightlife/nl-shared-types/helpers";

export type MyObject =
    OneOfKeyValueify<TestType>


export type TestType = a;


export interface a {
    prop1: string
}

