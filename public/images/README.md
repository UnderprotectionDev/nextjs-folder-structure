## Overview

The `images` directory contains all static image assets used in the application. These include photographs, illustrations, logos, and other raster graphics used in page content, hero sections, and background elements.

## Purpose

- **Visual Content**: Provides essential visual elements for page content and marketing sections
- **Brand Identity**: Maintains consistent branding through logo variations and branded imagery
- **Performance Optimization**: Centralizes optimized image assets for efficient loading
- **Asset Organization**: Groups images by type/purpose for easier maintenance

## Best Practices

- Use modern formats (WebP/AVIF) for better compression without quality loss
- Optimize images using Squoosh or Sharp before adding to directory
- Use descriptive filenames indicating image content/purpose (e.g., `hero-homepage.webp`)
- Implement responsive images using srcset and sizes attributes
- Provide multiple resolutions for critical images (1x, 2x, 3x)
- Add loading="lazy" for non-critical images below the fold
- Use CSS background images for decorative elements when possible
- Maintain a consistent aspect ratio system across similar image types

## Notes

- All images are automatically available at the `/images/` path
- Use Next.js Image component for automatic optimization and format conversion
- Add width/height attributes to prevent layout shifts
- Consider using image CDN for production deployments
- Create an image component library for frequently used image types
- Document special cases for complex image treatments or animations
