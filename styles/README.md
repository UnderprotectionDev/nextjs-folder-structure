## Usage

This folder contains all the CSS and styling files used in the application. It is responsible for managing global and modular styles to ensure a consistent and maintainable design system throughout the project.

##### theme.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .h1-bold {
    @apply text-[30px] font-bold leading-[42px] tracking-tighter;
  }

  .base-semibold {
    @apply text-[18px] font-semibold leading-[25.2px];
  }
}
```

##### globals.css

```css
@import "./theme.css";
```
