## Usage

This folder is used to store constants that can be shared across the application.

## PURPOSE

- **Centralized Values**: Contains shared constants used in multiple components or pages.
- **Code Reusability**: Encourages modular and reusable code by avoiding duplication.
- **Maintainability**: Enhances code readability and makes it easier to manage and update constants.

```ts
export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
];
```

```ts
export const Example = [
  { name: "John", value: "john" },
  { name: "Doe", value: "doe" },
];
```
