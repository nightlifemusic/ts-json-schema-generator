import { OneOfKeyValueify } from "@nightlife/nl-shared-types/helpers";

export interface Test1 {
    propA: string
}

export type TestType = Test1;

export type MyObject = OneOfKeyValueify<Test1>