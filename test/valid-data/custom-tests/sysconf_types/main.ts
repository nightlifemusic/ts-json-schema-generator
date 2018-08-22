import { IZone2UnionKV, IZone1UnionKV, IZone3UnionKV } from "./zones";
import { ISystemIdsable } from '@nightlife/nl-shared-types/common';
import { IRequestParams, IResponseResult } from '@nightlife/nl-skeletor-rpc/rpc_interfaces';
import { OneOfKeyValueify } from "@nightlife/nl-shared-types/helpers";
import { IZone2ConfigurationRequestParams, IZone2ConfigurationRequestParamsShared, IZone2ConfigurationRequestParamsUnique } from "./all";

export module nl_sysconf {
    export namespace config {
        export namespace set_zone {

            export interface Zone1 {
                zone: 1;
                config: IZone1UnionKV
            }

            export interface Zone2 {
                zone: 2;
                config: IZone2UnionKV
            }

            export interface Zone3 {
                zone: 3;
                config: IZone3UnionKV
            }

            export interface IReq1 extends Zone1 {
            }

            export interface IReq2 extends Zone2 {
            }

            export interface IReq3 extends Zone3 {
            }

            export type IReq = IRequestParams<IRes> & ISystemIdsable & (IReq1 | IReq2 | IReq3);

            export interface IRes extends IResponseResult {
                overwrote: true;
            }
        }
    }
}

