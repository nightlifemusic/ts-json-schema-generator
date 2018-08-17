import {OneOfKeyValueify} from '@nightlife/nl-shared-types/helpers'


export type ITestKV =
    OneOfKeyValueify<ITestProperties>


export interface ITestProperties {
    "ABC": string
    "DEF": string
    "GHI": number
}




