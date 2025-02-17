## Overview

The `icons` directory contains all SVG icons and icon assets used in the application. These icons are typically used for UI elements, buttons, and visual indicators throughout the project.

## Purpose

- **Visual Consistency**: Maintains a unified visual language across the application
- **Scalable Vector Graphics**: Provides resolution-independent icons for crisp display at any size
- **Asset Organization**: Centralizes icon assets in a dedicated directory for easy management

## Best Practices

- Use SVG format for all icons to ensure scalability and performance
- Optimize SVG files by removing unnecessary metadata and comments
- Use descriptive filenames that clearly indicate the icon's purpose
- Consider using icon sprite sheets for better performance with large icon sets
- Maintain consistent stroke widths and color schemes across icons
- Document any specific usage guidelines for complex or multi-state icons

## Notes

- All icons are automatically available at the `/icons/` path
- Use Next.js Image component for optimized loading and additional styling
- For color customization, use Tailwind's text color utilities on parent elements
- Create a separate icon component library for frequently used icons
