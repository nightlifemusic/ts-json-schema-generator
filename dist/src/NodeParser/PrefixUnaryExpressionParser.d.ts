import * as ts from "typescript";
import { Context } from "../NodeParser";
import { SubNodeParser } from "../SubNodeParser";
import { BaseType } from "../Type/BaseType";
export declare class PrefixUnaryExpressionParser implements SubNodeParser {
    supportsNode(node: ts.PrefixUnaryExpression): boolean;
    createType(node: ts.PrefixUnaryExpression, context: Context): BaseType;
}
