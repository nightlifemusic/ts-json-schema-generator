"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
const LiteralType_1 = require("../Type/LiteralType");
class PrefixUnaryExpressionParser {
    supportsNode(node) {
        return node.kind === ts.SyntaxKind.PrefixUnaryExpression && node.operator == ts.SyntaxKind.MinusToken;
    }
    createType(node, context) {
        let operator = '-';
        return new LiteralType_1.LiteralType(parseFloat(operator + node.operand.text));
    }
}
exports.PrefixUnaryExpressionParser = PrefixUnaryExpressionParser;
//# sourceMappingURL=PrefixUnaryExpressionParser.js.map