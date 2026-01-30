import { z } from "zod";
export declare const ExampleSchema: z.ZodObject<{
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message: string;
}, {
    message: string;
}>;
export type ExampleType = z.infer<typeof ExampleSchema>;
export declare const HELLO_WORLD = "Hello from shared package!";
