import { OneOfKeyValueify } from '@nightlife/nl-shared-types/helpers'
import { IResponseResult, IRequestParams } from '@nightlife/nl-skeletor-rpc/rpc_interfaces';
import { ISystemIdsable } from '@nightlife/nl-shared-types/common';

export module nl_sysconf {
    export namespace config {
        export namespace set_zone {

            export interface Export1 {
                zone: 1;
                config: ITestKV1
            }

            export type ITestKV1 =
                OneOfKeyValueify<ITestProperties1>


            export interface ITestProperties1 {
                "ABC": keyof someValues
                "DEF": string
                "GHI": number
            }

            export type ITestKV2 =
                OneOfKeyValueify<ITestProperties2>


            export interface ITestProperties2 {
                "ABC2": string
                "DEF2": string
                "GHI2": number
            }

            export interface Export2 {
                zone: 2;
                config: ITestKV2
            }

            export type ITestKV3 =
                OneOfKeyValueify<ITestProperties3>


            export interface ITestProperties3 {
                "ABC3": string
                "DEF3": string
                "GHI3": number
            }

            export interface someValues {
                "a": string,
                "b": string
            }

            export interface Export3 {
                zone: 3;
                config: ITestKV3
            }


            export interface IReq1 extends Export1 {
            }

            export interface IReq2 extends Export2 {
            }

            export interface IReq3 extends Export3 {
            }



            export type IReq = IRequestParams<IRes> & ISystemIdsable & (IReq1 | IReq2 | IReq3);


            export interface IRes extends IResponseResult {
                overwrote: true;
            }
        }
    }
}