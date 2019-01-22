"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ajv = require("ajv");
const chai_1 = require("chai");
const fs_1 = require("fs");
const path_1 = require("path");
const formatter_1 = require("../factory/formatter");
const parser_1 = require("../factory/parser");
const program_1 = require("../factory/program");
const Config_1 = require("../src/Config");
const SchemaGenerator_1 = require("../src/SchemaGenerator");
const validator = new Ajv();
const metaSchema = require("ajv/lib/refs/json-schema-draft-06.json");
validator.addMetaSchema(metaSchema);
const basePath = "test/config";
function assertSchema(name, partialConfig, only = false) {
    const run = only ? it.only : it;
    run(name, () => {
        const config = Object.assign({}, Config_1.DEFAULT_CONFIG, partialConfig, { path: path_1.resolve(`${basePath}/${name}/*.ts`) });
        const program = program_1.createProgram(config);
        const generator = new SchemaGenerator_1.SchemaGenerator(program, parser_1.createParser(program, config), formatter_1.createFormatter(config));
        const expected = JSON.parse(fs_1.readFileSync(path_1.resolve(`${basePath}/${name}/schema.json`), "utf8"));
        const actual = JSON.parse(JSON.stringify(generator.createSchema(config.type)));
        chai_1.assert.isObject(actual);
        chai_1.assert.deepEqual(actual, expected);
        validator.validateSchema(actual);
        chai_1.assert.isNull(validator.errors);
    });
}
describe("config", () => {
    assertSchema("ajv-regexp", { type: "MyObject", expose: "export", topRef: true, jsDoc: "extended" });
    assertSchema("ajv-regexp-slashes", { type: "MyObject", expose: "export", topRef: true, jsDoc: "extended" });
    assertSchema("ajv-regexp-url", { type: "MyObject", expose: "export", topRef: true, jsDoc: "extended" });
});
//# sourceMappingURL=config.test.js.map