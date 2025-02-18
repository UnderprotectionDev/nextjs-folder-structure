## Purpose

- **Encapsulation**: Contains components exclusively used by a single page route
- **Specialization**: Implements page-specific business logic and UI interactions
- **Colocation**: Maintains related components, hooks, and utilities adjacent to their usage context

## Component Categories

- **Page Layouts**: Primary page structure components (PageHeader, ContentSections)
- **Feature Components**: Complex interactive elements specific to page functionality (CommentSection, LivePreview)
- **Template Parts**: Reusable sections within page layouts (HeroSection, FeatureGrid)
- **Context Providers**: Page-scoped state management providers (PageSettingsProvider, EditorContext)
