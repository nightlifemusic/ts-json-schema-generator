import * as i from './all'
import {OneOf, OneOfKeyValueify, KeyValueify} from '@nightlife/nl-shared-types/helpers'

// Zone 1
export type IZone1Union =
    OneOf<i.IZone1ConfigurationRequestParams>

export type IZone1UnionKV =
    OneOfKeyValueify<i.IZone1ConfigurationRequestParams>


// Zone 2
export type IZone2Union =
    OneOf<i.IZone2ConfigurationRequestParams>

export type IZone2UnionKV =
    OneOfKeyValueify<i.IZone2ConfigurationRequestParams>


// Zone 3
export type IZone3Union =
    OneOf<i.IZone3ConfigurationRequestParams>

export type IZone3UnionKV =
    OneOfKeyValueify<i.IZone3ConfigurationRequestParams>



