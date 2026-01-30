import { z } from "zod";

export const ExampleSchema = z.object({
  message: z.string(),
});

export type ExampleType = z.infer<typeof ExampleSchema>;

export const HELLO_WORLD = "Hello from shared package!";
