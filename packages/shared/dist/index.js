"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HELLO_WORLD = exports.ExampleSchema = void 0;
const zod_1 = require("zod");
exports.ExampleSchema = zod_1.z.object({
    message: zod_1.z.string(),
});
exports.HELLO_WORLD = "Hello from shared package!";
