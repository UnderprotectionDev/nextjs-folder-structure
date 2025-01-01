## Usage

This folder contains utility functions that are small, reusable, and not tightly coupled to any specific feature or module of the application. These functions are general-purpose helpers that can be reused across the codebase.

## Purpose

- **Reusable Utilities**: Functions that perform common tasks like formatting dates, manipulating arrays, or handling strings.
- **Independent Logic**: Avoid including any business logic that is specific to the application's domain. This ensures the utils remain generic and versatile.
- **Maintainability**: Keeps the codebase clean and modular by isolating these helpers from feature-specific code.

```ts
import { MyBig } from "@/lib/big";

export const toCent = (amount: number) =>
  new MyBig(amount).mul(100).round(2).toNumber();

export const fromCent = (amount: number) =>
  new MyBig(amount).div(100).round(2).toNumber();

export const toCurrencyFromCent = (amount: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(fromCent(amount));
```

```ts
export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}
```
