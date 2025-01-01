## Usage

This directory contains Zod schema validations for data validation across the application.

```ts
import { z } from "zod";

export const Schema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters",
  }),
});
type SchemaType = z.infer<typeof Schema>;
```
